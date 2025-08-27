# JSON Patch Protos

This document provides a reference for using JSON Patch Protos feature to modify protocol buffer definitions without changing the original files.

## Overview

JSON Patch Protos allows you to apply modifications to protobuf definitions during code generation. This feature is particularly useful when you need to customize the generated code without altering the original proto files, such as when upstream SDK PRs are delayed or not in production.

## Configuration

JSON Patch Protos is configured in the `prototypes.patch` section of your Telescope options:

```typescript
import { TelescopeOptions } from "@cosmology/types";

const options: TelescopeOptions = {
  prototypes: {
    patch: {
      "cosmwasm/wasm/v1/types.proto": [
        {
          op: "replace",
          path: "@/AccessType/valuesOptions/ACCESS_TYPE_UNSPECIFIED/(gogoproto.enumvalue_customname)",
          value: "UnspecifiedAccess"
        },
        // more operations...
      ],
      // more files...
    }
  }
};
```

## Operation Structure

Each patch operation consists of:

| Property | Type | Description |
| -------- | ---- | ----------- |
| `op` | string | The operation type (`add` or `replace`) |
| `path` | string | The JSON path to the target field (may use `@` prefix) |
| `value` | any | The new value to set at the target location |

## Path Specification

Paths can be specified in two formats:

1. **Absolute paths**: Direct JSON paths to the field you want to modify.
2. **Package-derived paths**: Paths prefixed with `@` will be automatically derived from the package name, making navigation within the proto file's structure simpler.

## Operation Types

### Replace Operation

The `replace` operation updates an existing value:

```json
{
  "op": "replace",
  "path": "@/AccessType/valuesOptions/ACCESS_TYPE_UNSPECIFIED/(gogoproto.enumvalue_customname)",
  "value": "UnspecifiedAccess"
}
```

### Add Operation

The `add` operation creates a new value or adds to an existing one:

```json
{
  "op": "add",
  "path": "@/AccessType/values/ACCESS_TYPE_SUPER_FUN",
  "value": 4
}
```

## Common Use Cases

### Modifying Enum Values

Customize enum values and their properties:

```json
[
  {
    "op": "replace",
    "path": "@/AccessType/valuesOptions/ACCESS_TYPE_UNSPECIFIED/(gogoproto.enumvalue_customname)",
    "value": "UnspecifiedAccess"
  },
  {
    "op": "add",
    "path": "@/AccessType/values/ACCESS_TYPE_SUPER_FUN",
    "value": 4
  },
  {
    "op": "add",
    "path": "@/AccessType/valuesOptions/ACCESS_TYPE_SUPER_FUN",
    "value": {
      "(gogoproto.enumvalue_customname)": "SuperFunAccessType"
    }
  }
]
```

### Modifying Message Fields

Add or replace fields in a message:

```json
[
  {
    "op": "add",
    "path": "@/Contract/fields/admin",
    "value": {
      "rule": "optional",
      "type": "string",
      "name": "admin",
      "id": 3,
      "options": {
        "(gogoproto.moretags)": "yaml:\"admin\""
      }
    }
  }
]
```

## Best Practices

1. **Use sparingly**: Only patch what's necessary while waiting for upstream changes
2. **Document patches**: Add comments explaining why each patch exists
3. **Review regularly**: Check if patches are still needed when upgrading dependencies
4. **Test thoroughly**: Ensure patched proto definitions work correctly
5. **Consider alternatives**: For extensive changes, consider maintaining a fork of the proto files

## Limitations

1. Not all proto structures can be modified (complex nested structures may be difficult)
2. Changes are applied during code generation and do not affect the original files
3. Patches may need to be updated if proto file structure changes significantly 