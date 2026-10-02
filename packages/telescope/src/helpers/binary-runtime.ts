import { TelescopeOptions } from "@cosmology/types";

const restoreImportExtension = (options: TelescopeOptions) =>
  options.restoreImportExtension ?? "";

export const isBigint64 = (options: TelescopeOptions) =>
  options.prototypes.typingsFormat.num64 === "bigint";

export const getBinaryRuntimeImport = (options: TelescopeOptions) =>
  isBigint64(options)
    ? `import { BinaryReader, BinaryWriter } from "./binary${restoreImportExtension(
        options
      )}";`
    : 'import * as _m0 from "protobufjs/minimal";';

export const getBinaryReaderImport = (options: TelescopeOptions) =>
  isBigint64(options)
    ? `import { BinaryReader } from "./binary${restoreImportExtension(
        options
      )}";`
    : 'import * as _m0 from "protobufjs/minimal";';

export const getBinaryTypesImport = (options: TelescopeOptions) =>
  isBigint64(options)
    ? `import { IBinaryReader, IBinaryWriter } from "./binary${restoreImportExtension(
        options
      )}";`
    : 'import * as _m0 from "protobufjs/minimal";';

export const getReaderTypeRef = (options: TelescopeOptions) =>
  isBigint64(options) ? "BinaryReader" : "_m0.Reader";

export const getWriterTypeRef = (options: TelescopeOptions) =>
  isBigint64(options) ? "BinaryWriter" : "_m0.Writer";

export const getTypesReaderTypeRef = (options: TelescopeOptions) =>
  isBigint64(options) ? "IBinaryReader" : "_m0.Reader";

export const getTypesWriterTypeRef = (options: TelescopeOptions) =>
  isBigint64(options) ? "IBinaryWriter" : "_m0.Writer";

export const getReaderInstanceExpr = (
  options: TelescopeOptions,
  expression: string
) =>
  isBigint64(options)
    ? `${expression} instanceof BinaryReader ? ${expression} : new BinaryReader(${expression})`
    : `${expression} instanceof _m0.Reader ? ${expression} : new _m0.Reader(${expression})`;
