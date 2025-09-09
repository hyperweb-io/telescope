import { camel, variableSlug } from ".";
import { pascal, snake } from "case";
import { minimatch } from "minimatch";
import {
  ProtoField,
  ProtoRef,
  ProtoRoot,
  HelperFuncNameMappers,
  HelperFuncNameMappersRule,
  AliasNameMappers,
  AliasNameMappersContext,
} from "@cosmology/types";
import dotty from "dotty";

export const getNestedProto = (root: ProtoRoot) => {
  const nestedPath =
    "root.nested." + root.package.split(".").join(".nested.") + ".nested";
  return dotty.get(root, nestedPath);
};

export const getNestedProtoGeneric = (root: ProtoRoot, path: string[]) => {
  path = root.package.split(".").concat(path);
  const nestedPath = "root.nested." + path.join(".nested.") + ".nested";
  return dotty.get(root, nestedPath);
};

export const getNested = (root: ProtoRoot, path: string[]) => {
  const nestedPath = "root.nested." + path.join(".nested.") + ".nested";
  return dotty.get(root, nestedPath);
};

/**
 * to make a customized hook name.
 * e.g. snake_case -> useSnakeCase.
 *      Snake -> use_Snake (be more careful on this case)
 *      snake_Case -> useSnake_Case (be more careful on this case)
 * There're some wierd cases because of the camel function only replaces lower case letters leading with '_' to upper case.
 * @param name base name without the word 'use'
 * @returns customized hook name like 'useSth'
 */
export const makeUseHookName = (name: string) => {
  return camel("use_" + name);
};

export const makeUseHookNameWithCamel = (name: string) => {
  return camel("use_" + camel(name));
};

export const makeUsePkgHookName = (packageName: string, name: string) => {
  return variableSlug(`use_${packageName.replace(/\./g, "_")}_${snake(name)}`);
};

export const makePkgMethodName = (packageName: string, name: string) => {
  return variableSlug(`pkg_${packageName.replace(/\./g, "_")}_${snake(name)}`);
};

export const makeUseHookTypeName = (name: string) => {
  return pascal("Use_" + name + "Query");
};

export const makeHookKeyName = (name: string) => {
  return camel(name + "Query");
};

/**
 * make alias name with the full package.
 * e.g. cosmos.bank.v1beta1.Balance -> CosmosBankV1Beta1Balance
 * @param ctx context
 * @returns alias name
 */
export const makeAliasName = (ctx: { package: string; name: string }) => {
  return pascal(`${ctx.package.replace(/\./g, "_")}_${ctx.name}`);
};

/**
 * make alias name with the full package with package at the end.
 * e.g. cosmos.bank.v1beta1.getBalance -> getBalanceCosmosBankV1Beta1
 * @param ctx context
 * @returns alias name
 */
export const makeAliasNameWithPackageAtEnd = (ctx: {
  package: string;
  name: string;
}) => {
  return camel(`${ctx.name}_${camel(ctx.package.replace(/\./g, "_"))}`);
};

/**
 * make alias name with a prefix.
 * @param prefix prefix
 * @param makeAliasName function to make alias name
 * @returns alias name
 */
export const makeServiceAliasName = (
  prefix: string,
  makeAliasName: (ctx: { package: string; name: string }) => string
) => {
  return (ctx: { package: string; name: string }) => {
    return camel(`${prefix}_${camel(makeAliasName(ctx))}`);
  };
};

/**
 * make alias name with the last part of the package.
 * e.g. cosmos.bank.v1beta1.Balance -> V1Beta1Balance
 * @param ctx context
 * @returns alias name
 */
export const makeAliasNameWithLastPkgPart = (ctx: {
  package: string;
  name: string;
}) => {
  const pkgParts = ctx.package.split(".");
  const lastPkgPart = pkgParts[pkgParts.length - 1];
  return pascal(`${lastPkgPart}_${ctx.name}`);
};

/**
 * make alias name with the last two parts of the package.
 * e.g. cosmos.bank.v1beta1.Balance -> BankV1Beta1Balance
 * @param ctx context
 * @returns alias name
 */
export const makeAliasNameWithLastTwoPkgParts = (ctx: {
  package: string;
  name: string;
}) => {
  const pkgParts = ctx.package.split(".");
  const lastTwoPkgParts = pkgParts.slice(-2);
  return pascal(`${lastTwoPkgParts.join("_")}_${ctx.name}`);
};

// https://github.com/isaacs/minimatch/blob/main/src/index.ts#L61
// Optimized checking for the most common glob patterns.
const globPattern = /\*+([^+@!?\*\[\(]*)/;

/**
 * Get a list of query method names that matches the given patterns.
 * @param packagePath package path like 'cosmos.bank.v1beta1'
 * @param methodKeys query method names
 * @param patterns minimatch pattern like 'cosmos.auth.**'
 * @returns Array of query method names match the given pattern.
 */
export const getQueryMethodNames = (
  packagePath: string,
  methodKeys: string[],
  patterns?: string[],
  makeMethodName?: Function
) => {
  const make = makeMethodName ?? makeUseHookNameWithCamel;

  return methodKeys
    .map((key) => {
      const methodName = make(key);
      const methodNameWithPkg = `${packagePath}.${methodName}`;

      const isMatching =
        patterns &&
        patterns.some((pattern) => {
          if (!globPattern.test(pattern)) {
            return methodNameWithPkg === pattern;
          }

          return minimatch(methodNameWithPkg, pattern);
        });

      if (isMatching) {
        return key;
      } else {
        return null;
      }
    })
    .filter(Boolean);
};

/**
 * test if a proto ref is included by the operation.
 * @param ref a ProtoRef with proto file info and package.
 * @param include patterns(will be deprecated soon), packages, proto files to include
 * @returns
 */
export const isRefIncluded = (
  ref: ProtoRef,
  include?: {
    patterns?: string[];
    packages?: string[];
    protos?: string[];
  }
) => {
  // if no include object, no filter
  if (!include) return true;
  // if no arrays are populated, no filter
  if (
    !include.patterns?.length &&
    !include.packages?.length &&
    !include.protos?.length
  ) {
    return true;
  }

  // TODO consider deprecating `patterns` in favor of packages and protos supporting minimatch
  if (
    Boolean(ref.filename) &&
    include?.patterns?.some((pattern) => minimatch(ref.filename, pattern))
  ) {
    return true;
  }

  const pkgMatched =
    Boolean(ref.proto?.package) &&
    include?.packages?.some((pkgName) => {
      if (!globPattern.test(pkgName)) {
        return ref.proto.package === pkgName;
      }
      return minimatch(ref.proto.package, pkgName);
    });

  if (pkgMatched) {
    return true;
  }

  const protoMatched =
    Boolean(ref.filename) &&
    include?.protos?.some((protoName) => {
      if (!globPattern.test(protoName)) {
        return ref.filename === protoName;
      }
      return minimatch(ref.filename, protoName);
    });

  if (protoMatched) {
    return true;
  }

  return false;
};

/**
 * test if a package is included in certain pattern.
 * @param input is a package.
 * @param patterns to match the package
 * @returns bool
 */
export const isPackageIncluded = (input, patterns) => {
  return patterns.some((pattern) => {
    return minimatch(input, pattern);
  });
};

/**
 * test if a proto ref is excluded from the operation.
 * @param ref a ProtoRef with proto file info and package.
 * @param exclude patterns(will be deprecated soon), packages, proto files to exclude
 * @returns
 */
export const isRefExcluded = (
  ref: ProtoRef,
  exclude?: {
    packages?: string[];
    protos?: string[];
  }
) => {
  // if no include object, no filter
  if (!exclude) return false;
  // if no arrays are populated, no filter
  if (!exclude.packages?.length && !exclude.protos?.length) {
    return false;
  }

  return isRefIncluded(ref, exclude);
};

/*
    nested objects get a slightly different naming convention
    e.g. SignatureDescriptor_Data or SignatureDescriptor_Data_Multi
*/

export const getObjectName = (name: string, scope: string[] = []) => {
  if (!scope.length || scope.length === 1) return name;
  const [_pkg, ...scopes] = scope;
  return [...scopes, name].join("_");
};

export const getTypeNameFromFieldName = (
  name: string,
  importSrc: string,
  ref: ProtoRef
) => {
  let importedAs = name;
  const names = ref.traversed?.importNames;
  if (
    names &&
    names.hasOwnProperty(importSrc) &&
    names[importSrc].hasOwnProperty(name)
  ) {
    importedAs = names[importSrc][name];
  }

  return importedAs;
};

/**
 * get the name of the helper function.
 * @param packagePath e.g. "cosmos.bank.v1beta1"
 * @param methodKey e.g. "balance"
 * @param mappers a list of mappers to apply. An earlier one will override a later one.
 */
export function getHelperFuncName(
  packagePath: string,
  methodKey: string,
  mappers: HelperFuncNameMappers[],
  defaultFuncBodyFn:
    | "unchanged"
    | "get"
    | ((ctx: AliasNameMappersContext) => string)
): {
  creator: string;
  hook: string;
} {
  let rule: HelperFuncNameMappersRule;
  const methodKeyWithPkg = `${packagePath}.${methodKey}`;

  for (const m of mappers) {
    let mapper = m ?? {};
    let isMatching = false;

    for (const pattern in mapper) {
      if (!globPattern.test(pattern)) {
        isMatching = methodKeyWithPkg === pattern;
      }

      isMatching = minimatch(methodKeyWithPkg, pattern);

      if (isMatching) {
        rule = mapper[pattern];
        break;
      }
    }

    if (isMatching) {
      break;
    }
  }

  let { funcBody: funcBodyFn, hookPrefix } = {
    funcBody: defaultFuncBodyFn,
    hookPrefix: "use",
    ...rule,
  };

  funcBodyFn =
    funcBodyFn === "unchanged"
      ? (ctx: AliasNameMappersContext) => ctx.name
      : funcBodyFn === "get"
        ? (ctx: AliasNameMappersContext) => camel("get_" + camel(ctx.name))
        : funcBodyFn;

  return {
    creator: camel(
      `${camel(funcBodyFn({ name: methodKey, package: packagePath }))}`
    ),
    hook: camel(
      `${hookPrefix}_${camel(
        funcBodyFn({ name: methodKey, package: packagePath })
      )}`
    ),
  };
}

/**
 * get the alias name of the type name.
 * @param packagePath e.g. "cosmos.bank.v1beta1"
 * @param typeNameKey e.g. "Balance"
 * @param alias a list of alias names. An earlier one will override a later one.
 * @returns the alias name of the type name.
 */
export function getAliasName(
  packagePath: string,
  typeNameKey: string,
  alias?: AliasNameMappers
) {
  if (!alias) return typeNameKey;

  const typeNameKeyWithPkg = `${packagePath}.${typeNameKey}`;

  let isMatching = false;

  for (const pattern in alias) {
    if (!globPattern.test(pattern)) {
      isMatching = typeNameKeyWithPkg === pattern;
    }

    isMatching = minimatch(typeNameKeyWithPkg, pattern);

    if (isMatching) {
      const aliasName = alias[pattern];
      if (typeof aliasName === "function") {
        return aliasName({ name: typeNameKey, package: packagePath });
      }
      return aliasName;
    }
  }

  return typeNameKey;
}
