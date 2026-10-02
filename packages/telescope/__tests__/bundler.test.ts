import * as t from "@babel/types";
import { bundlePackages, getPackagesBundled } from "../src/bundle";
import generate from "@babel/generator";
import { exportAllFromRelPath, exportTypesWithAlias, recursiveModuleBundle } from "@cosmology/ast";
import { restoreExtension } from "@cosmology/utils";
import { getTestProtoStore } from "../test-utils";
import { getImportStatements } from "../src/imports";

const store = getTestProtoStore();
store.traverseAll();

it("getPackagesBundled", () => {
  const bundle = getPackagesBundled(store);
  // osmosis: {
  // ...
  // },
  // tendermint: {
  //     abci: { pkg: 'tendermint.abci', files: [Array] },
  //     crypto: { pkg: 'tendermint.crypto', files: [Array] },
  //     libs: { bits: [Object] },
  //     p2p: { pkg: 'tendermint.p2p', files: [Array] },
  //     types: { pkg: 'tendermint.types', files: [Array] },
  //     version: { pkg: 'tendermint.version', files: [Array] }
  //   }

  expect(Object.keys(bundle)).toEqual([
    "akash",
    "ics23",
    "cosmos_proto",
    "cosmos",
    "cosmwasm",
    "evmos",
    "gogoproto",
    "google",
    "ibc",
    "osmosis",
    "tendermint",
  ]);
});

it("bundlePackages", () => {
  const bundled = bundlePackages(store);
  const packaged = bundled.reduce((m, bundle) => {
    const body = recursiveModuleBundle(store.options, bundle.bundleVariables);
    m[bundle.base] = {
      bundle: bundle.bundleFile,
      base: bundle.base,
      code: generate(t.program([...bundle.importPaths, ...body])).code,
    };
    return m;
  }, {});
  expect(packaged).toMatchSnapshot();
});

it("bundle packages root file names", () => {
  const bundled = bundlePackages(store);
  const packaged = bundled.reduce((m, bundle) => {
    m[bundle.base] = {
      bundle: bundle.bundleFile,
    };
    return m;
  }, {});
  expect(packaged).toMatchSnapshot();
});

it("get import statements", () => {
  const importStat = getImportStatements("func", [
    {
      type: "import",
      name: "defineStore",
      path: "func",
    },
    {
      type: "import",
      name: "LCDQueryClient",
      path: "./query.lcd",
    },
  ]);

  expect(importStat).toMatchSnapshot();
});

it("get import statements with ext", () => {
  const importStat = getImportStatements(
    "func",
    [
      {
        type: "import",
        name: "defineStore",
        path: "func",
      },
      {
        type: "import",
        name: "LCDQueryClient",
        path: "./query.lcd",
      },
    ],
    {
      restoreImportExtension: ".mjs",
    }
  );

  expect(importStat).toMatchSnapshot();
});

it("get import statements with ext without .", () => {
  const importStat = getImportStatements(
    "func",
    [
      {
        type: "import",
        name: "defineStore",
        path: "func",
      },
      {
        type: "import",
        name: "LCDQueryClient",
        path: "./query.lcd",
      },
    ],
    {
      restoreImportExtension: "mjs",
    }
  );

  expect(importStat).toMatchSnapshot();
});

describe("module bundle type with restoreImportExtension", () => {
  it("exportAllFromRelPath applies restoreExtension with .js", () => {
    const relPath = "./auth/v1beta1/auth";
    const restored = restoreExtension(relPath, ".js");
    const node = exportAllFromRelPath(restored);
    const code = generate(t.program([node])).code;
    expect(code).toBe('export * from "./auth/v1beta1/auth.js";');
  });

  it("exportAllFromRelPath applies restoreExtension with .mjs", () => {
    const relPath = "./bank/v1beta1/tx";
    const restored = restoreExtension(relPath, ".mjs");
    const node = exportAllFromRelPath(restored);
    const code = generate(t.program([node])).code;
    expect(code).toBe('export * from "./bank/v1beta1/tx.mjs";');
  });

  it("exportTypesWithAlias applies restoreExtension", () => {
    const relPath = "./auth/v1beta1/auth";
    const restored = restoreExtension(relPath, ".js");
    const types = [
      { name: "BaseAccount", alias: "BaseAccount" },
      { name: "ModuleAccount", alias: "ModuleAccount" },
    ];
    const node = exportTypesWithAlias(types, restored);
    const code = generate(t.program([node])).code;
    expect(code).toBe(
      'export { BaseAccount, ModuleAccount } from "./auth/v1beta1/auth.js";'
    );
  });

  it("restoreExtension does not double-add extension", () => {
    const relPath = "./auth/v1beta1/auth.js";
    const restored = restoreExtension(relPath, ".js");
    expect(restored).toBe("./auth/v1beta1/auth.js");
  });

  it("restoreExtension without ext returns original path", () => {
    const relPath = "./auth/v1beta1/auth";
    const restored = restoreExtension(relPath, undefined);
    expect(restored).toBe("./auth/v1beta1/auth");
  });
});
