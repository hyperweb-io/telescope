import { Bundler } from "../bundler";
import { TelescopeBuilder } from "../builder";
import {
  exportAllFromRelPath,
  exportTypesWithAlias,
  recursiveModuleBundle,
} from "@cosmology/ast";
import {
  duplicateImportPathsWithExt,
  makeAliasName,
  makeAliasNameWithPackageAtEnd,
} from "@cosmology/utils";

/**
 * Process noAlias configuration to create a map of names to their first package
 * This ensures that only the first occurrence of a name skips aliasing
 */
const processNoAliasConfig = (noAlias?: Array<{ package: string; name: string }>) => {
  if (!noAlias || noAlias.length === 0) {
    return new Map<string, string>();
  }

  const nameToFirstPackage = new Map<string, string>();

  for (const entry of noAlias) {
    if (!nameToFirstPackage.has(entry.name)) {
      nameToFirstPackage.set(entry.name, entry.package);
    }
  }

  return nameToFirstPackage;
};

/**
 * Check if a package/name combination should skip aliasing
 */
const shouldSkipAlias = (
  pkg: string,
  name: string,
  nameToFirstPackage: Map<string, string>
): boolean => {
  const firstPackage = nameToFirstPackage.get(name);
  return firstPackage === pkg;
};

export const plugin = (builder: TelescopeBuilder, bundler: Bundler) => {
  if (!builder.options.bundle.enabled) {
    return;
  }

  let prog = [];

  // Process noAlias configuration once at the beginning
  const nameToFirstPackage = processNoAliasConfig((builder.options.bundle as any).noAlias);

  if (builder.options.bundle.type === "namespace") {
    const importPaths = duplicateImportPathsWithExt(
      bundler.bundle.importPaths,
      builder.options.restoreImportExtension
    );

    // [x] bundle
    const body = recursiveModuleBundle(
      builder.options,
      bundler.bundle.bundleVariables
    );
    prog = prog.concat(importPaths).concat(body);
  } else if (builder.options.bundle.type === "module") {
    // get export objs
    const exportObjs = bundler.bundle.exportObjs;
    if (!exportObjs) {
      return;
    }

    // check each of exported identifiers is duplicated
    exportObjs.forEach((exportObj) => {
      const duplicatedTypeNames = exportObj.exportedIdentifiers.filter(
        (identifier) => {
          let isDuplicated = false;
          if (exportObj.isHelperFunc) {
            const duplicatedHelperFuncs =
              builder.store.getHelperFuncsInMultipleFiles();

            isDuplicated = duplicatedHelperFuncs.some((helperFunc) => {
              return helperFunc === identifier;
            });
          } else {
            const duplicatedTypes = builder.store.getTypesInMultipleFiles();
            isDuplicated = duplicatedTypes.some((type) => {
              return type === identifier;
            });
          }
          return isDuplicated;
        }
      );
      if (duplicatedTypeNames.length > 0) {
        // export each, some duplicated with alias
        const typesWithAlias = exportObj.exportedIdentifiers.map(
          (identifier) => {
            const duplicatedType = duplicatedTypeNames.find(
              (type) => type === identifier
            );
            if (duplicatedType) {
              let alias: string;

              // Check if this package/name combination should skip aliasing
              if (shouldSkipAlias(exportObj.pkg, identifier, nameToFirstPackage)) {
                alias = identifier; // Use original name, no alias
              } else {
                // Generate alias as usual
                if (exportObj.isHelperFunc) {
                  alias = makeAliasNameWithPackageAtEnd({
                    package: exportObj.pkg,
                    name: identifier,
                  });
                } else {
                  alias = makeAliasName({
                    package: exportObj.pkg,
                    name: identifier,
                  });
                }
              }
              return { name: identifier, alias: alias };
            }
            return { name: identifier, alias: identifier };
          }
        );
        prog.push(exportTypesWithAlias(typesWithAlias, exportObj.relativePath));
      } else {
        // export *
        prog.push(exportAllFromRelPath(exportObj.relativePath));
      }
    });
  }

  const localname = bundler.bundle.bundleFile;
  const filename = bundler.getFilename(localname);

  bundler.writeAst(prog, filename);

  // [x] write an index file for each base
  bundler.files.forEach((file) => builder.files.push(file));
};
