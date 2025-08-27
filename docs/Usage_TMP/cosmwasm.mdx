# CosmWasm Integration

This document provides a reference for generating TypeScript SDKs for CosmWasm smart contracts using Telescope.

## Overview

Telescope integrates with [@cosmwasm/ts-codegen](https://github.com/CosmWasm/ts-codegen) to generate TypeScript client libraries for CosmWasm smart contracts. This enables you to work with your smart contracts using strongly-typed interfaces in your frontend applications.

## Configuration

To generate TypeScript SDKs for your CosmWasm contracts, add the `cosmwasm` option to your Telescope configuration:

```typescript
import { TelescopeOptions } from "@cosmology/types";

const options: TelescopeOptions = {
  cosmwasm: {
    contracts: [
      {
        name: "MyContract",
        dir: "./path/to/schema"
      }
    ],
    outPath: "./src/contracts"
  }
};
```

The `cosmwasm` option is a direct reference to the `TSBuilderInput` object from the `@cosmwasm/ts-codegen` package.

## Contract Configuration

### Basic Contract Setup

At minimum, each contract configuration requires:

| Property | Type | Description |
| -------- | ---- | ----------- |
| `name` | string | Name of the contract, used in generated class names |
| `dir` | string | Path to the contract schema directory |

Example:

```typescript
{
  name: "SG721",
  dir: "./schema/sg721"
}
```

### Advanced Contract Configuration

For more control, you can use additional configuration options:

```typescript
{
  name: "Marketplace",
  dir: "./schema/marketplace",
  // Additional options
  camelCase: true,
  customTypes: {
    "cosmos.base.v1beta1.Coin": {
      module: "@cosmjs/stargate",
      type: "Coin"
    }
  },
  messageComposer: {
    enabled: true
  }
}
```

## Output Configuration

The `outPath` property specifies where the generated files should be placed:

```typescript
{
  outPath: "./src/generated/contracts"
}
```

## Full Configuration Options

| Property | Type | Description | Default |
| -------- | ---- | ----------- | ------- |
| `contracts` | array | List of contract configurations | Required |
| `contracts[].name` | string | Contract name | Required |
| `contracts[].dir` | string | Path to contract schema | Required |
| `contracts[].camelCase` | boolean | Convert snake_case to camelCase | `true` |
| `contracts[].customTypes` | object | Custom type mappings | `{}` |
| `contracts[].messageComposer` | object | Message composer options | `{ enabled: true }` |
| `contracts[].types` | object | Custom types generation options | `{ enabled: true }` |
| `contracts[].client` | object | Client generation options | `{ enabled: true }` |
| `contracts[].reactQuery` | object | React Query hooks options | `{ enabled: false, version: 'v4' }` |
| `contracts[].recoil` | object | Recoil state management options | `{ enabled: false }` |
| `contracts[].bundle` | object | Bundle generation options | `{ enabled: false }` |
| `outPath` | string | Output directory for generated files | Current directory |

## Generated Files

For each contract, the following files are generated:

| File | Description |
| ---- | ----------- |
| `<ContractName>.types.ts` | TypeScript interfaces for contract interactions |
| `<ContractName>.client.ts` | Client classes for interacting with the contract |
| `<ContractName>.message-composer.ts` | Helper for composing contract messages |
| `<ContractName>.react-query.ts` | React Query hooks (if enabled) |
| `<ContractName>.recoil.ts` | Recoil state atoms and selectors (if enabled) |

## Using Generated Clients

The generated clients provide a type-safe way to interact with your CosmWasm contracts:

```typescript
import { MyContractClient } from "./generated/contracts/MyContract.client";
import { SigningCosmWasmClient } from "@cosmjs/cosmwasm-stargate";

// Create a client instance
const client = new MyContractClient(
  signingCosmWasmClient,
  "cosmos1...",  // Contract address
  {}  // Default options
);

// Query contract state
const { balance } = await client.getBalance({ address: "cosmos1..." });

// Execute contract functions
const result = await client.mint({
  tokenId: "123",
  owner: "cosmos1..."
});
```

## Message Composer

The generated message composer helps create contract messages in the correct format:

```typescript
import { MyContractMessageComposer } from "./generated/contracts/MyContract.message-composer";

const msgComposer = new MyContractMessageComposer("cosmos1...");  // Contract address

// Create a message for broadcasting
const mintMsg = msgComposer.mint({
  tokenId: "123",
  owner: "cosmos1..."
});

// Use with a SigningCosmWasmClient
const result = await signingClient.signAndBroadcast(
  senderAddress,
  [mintMsg],
  fee
);
```

## React Query Integration

If you enable React Query integration, you'll get custom hooks for each query and mutation:

```typescript
import { useMyContractGetBalance } from "./generated/contracts/MyContract.react-query";

function BalanceDisplay({ address }) {
  const { data, isLoading, error } = useMyContractGetBalance({
    address
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return <div>Balance: {data.balance}</div>;
}
```

## Customizing Type Imports

You can customize how external types are imported using the `customTypes` configuration:

```typescript
customTypes: {
  "cosmos.base.v1beta1.Coin": {
    module: "@cosmjs/stargate",
    type: "Coin"
  },
  "SomeCustomType": {
    module: "../types",
    type: "MyType"
  }
}
```

## Dependencies

To use the generated code, you'll need to install the following dependencies:

```bash
npm install @cosmjs/cosmwasm-stargate @cosmjs/stargate
```

For React Query integration:

```bash
npm install @tanstack/react-query
```

For Recoil integration:

```bash
npm install recoil
```

## Limitations

- Schema files must follow the CosmWasm JSON Schema format
- Custom integration might be needed for very complex contract architectures
- Generated code relies on the runtime libraries specified in dependencies
``` 