import { TelescopeBuilder } from "../src/builder";
import { TelescopeOptions } from "@cosmology/types";
import {
  bundleBaseRegistries,
  bundleRegistries,
  parseContextsForRegistry,
} from "../src/bundle";
import { TelescopeInput } from "../src";
import { getTestProtoStore } from "../test-utils";
import { TelescopeParseContext } from "../src/build";
import { makeAliasName, makeServiceAliasName } from "@cosmology/utils";

const outPath = __dirname + "/../../../__fixtures__/v-next/customchain-js";
const store = getTestProtoStore();
store.traverseAll();

const options: TelescopeOptions = {
  classesUseArrowFunctions: true,
  env: "v-next",
  useInterchainJs: true,
  useSDKTypes: false,
  readme: { enabled: true },
  prototypes: {
    alias: {
      "**.Params": makeAliasName,
    },
    enableRegistryLoader: false,
    enableMessageComposer: true,
    enabled: true,
    parser: {
      keepCase: false,
    },
    methods: {
      fromJSON: false,
      toJSON: false,
      encode: true,
      decode: true,
      fromPartial: true,
      toAmino: false,
      fromAmino: false,
      fromProto: false,
      toProto: false,
    },
    addTypeUrlToDecoders: false,
    addTypeUrlToObjects: true,
    addAminoTypeToObjects: true,
    typingsFormat: {
      duration: "duration",
      timestamp: "date",
      useExact: false,
      useDeepPartial: true,
      num64: "bigint",
      customTypes: {
        useCosmosSDKDec: true,
      },
      useTelescopeGeneratedType: true,
      autoFixUndefinedEnumDefault: true,
    },
  },
  bundle: {
    enabled: true,
    type: "module",
    noAlias: [
      { package: "cosmos.bank.v1beta1", name: "getBalance" },
      { package: "cosmos.nft.v1beta1", name: "getBalance" }, // Same name, different package
      { package: "cosmos.gov.v1beta1", name: "Proposal" },
    ],
  },
  stargateClients: {
    enabled: false,
  },
  lcdClients: {
    enabled: false,
  },
  rpcClients: {
    enabled: false,
  },

  helperFunctions: {
    enabled: true,
    hooks: {
      react: true,
      vue: false,
    },
    nameMappers: {
      Query: {
        "**.Params": {
          funcBody: makeServiceAliasName("get", makeAliasName),
        },
      },
    },
  },

  interfaces: {
    enabled: true,
    useGlobalDecoderRegistry: false,
    useUnionTypes: true,
  },
  aminoEncoding: {
    enabled: true,
    useLegacyInlineEncoding: false,
    disableMsgTypes: false,
    useProtoOptionality: true,
  },

  mcpServer: {
    enabled: true,
  },
};

const input: TelescopeInput = {
  outPath,
  protoDirs: [__dirname + "/../../../__fixtures__/chain1"],
  options,
};

const telescope = new TelescopeBuilder(input);

describe("bundle package registries and root file names", () => {
  it("bundleRegistries", async () => {
    await telescope.build();
    const registries = bundleRegistries(telescope);
    const result = registries.map((reg) => ({
      ["package"]: reg.package,
      contexts: parseContextsForRegistry(
        reg.contexts as TelescopeParseContext[]
      ),
    }));
    // console.log(JSON.stringify(result, null, 2));
  });

  it("bundleBaseRegistries", () => {
    const registries = bundleBaseRegistries(telescope);
    const result = registries.map((reg) => ({
      base: reg.base,
      pkgs: reg.pkgs.map((obj) => {
        return {
          ["package"]: obj.package,
          contexts: parseContextsForRegistry(
            obj.contexts as TelescopeParseContext[]
          ),
        };
      }),
    }));
    // console.log(JSON.stringify(result, null, 2));
  });
});
