# Instant RPC Methods

This document provides a reference for using Instant RPC Methods in Telescope-generated code to simplify access to common blockchain operations.

## Overview

Instant RPC Methods allow you to create customized client classes that expose only specific RPC methods you need, making your code more concise and focused. Telescope generates these specialized clients in a `service-ops.ts` file in your project's root directory.

## Configuration

To enable Instant RPC Methods generation in Telescope:

```typescript
import { TelescopeOptions } from "@cosmology/types";

const options: TelescopeOptions = {
  rpcClients: {
    enabled: true,
    instantOps: [
      {
        className: "CosmosClient",
        nameMapping: {
          // Optional name mapping configuration
          All: {
            // Methods to apply to both Query and Msg types
            "cosmos.bank.v1beta1.balance": "getBalance",
            "cosmos.bank.v1beta1.allBalances": "getAllBalances"
          },
          Query: {
            // Methods specific to Query types
            "cosmos.staking.v1beta1.validators": "getValidators"
          },
          Msg: {
            // Methods specific to Msg types
            "cosmos.bank.v1beta1.send": "sendTokens"
          }
        }
      }
    ]
  }
};
```

## Configuration Parameters

| Parameter | Type | Description |
| --------- | ---- | ----------- |
| `rpcClients.instantOps` | array | Array of instant RPC operations configurations |
| `rpcClients.instantOps[].className` | string | Name of the generated client class |
| `rpcClients.instantOps[].nameMapping` | object | Optional object to map method names |
| `rpcClients.instantOps[].nameMapping.All` | object | Method mapping for both Query and Msg types |
| `rpcClients.instantOps[].nameMapping.Query` | object | Method mapping specific to Query types |
| `rpcClients.instantOps[].nameMapping.Msg` | object | Method mapping specific to Msg types |

## Basic Usage

Once generated, the Instant RPC client can be used as follows:

```typescript
import { CosmosClient } from "./service-ops";
import { createRPCQueryClient } from "./codegen/rpc";

async function queryWithInstantClient() {
  // First create a regular RPC client
  const rpcClient = await createRPCQueryClient({
    rpcEndpoint: "https://rpc.cosmos.network"
  });
  
  // Initialize the instant client with the RPC client
  const cosmosClient = new CosmosClient();
  cosmosClient.init(rpcClient);
  
  // Use the simplified methods
  const { balance } = await cosmosClient.getBalance({
    address: "cosmos1...",
    denom: "uatom"
  });
  
  console.log(`Balance: ${balance.amount} ${balance.denom}`);
}
```

## Method Mapping

The nameMapping configuration allows you to rename methods to make them more intuitive:

```typescript
nameMapping: {
  All: {
    // Original method name -> New method name
    "cosmos.bank.v1beta1.balance": "getBalance", 
    "cosmos.bank.v1beta1.allBalances": "getAllBalances"
  }
}
```

With this mapping, `client.cosmos.bank.v1beta1.balance()` becomes `cosmosClient.getBalance()`.

## Creating Multiple Client Classes

You can define multiple instant client classes, each with their own focused set of methods:

```typescript
instantOps: [
  {
    className: "BankClient",
    nameMapping: {
      All: {
        "cosmos.bank.v1beta1.balance": "getBalance",
        "cosmos.bank.v1beta1.allBalances": "getAllBalances"
      }
    }
  },
  {
    className: "StakingClient",
    nameMapping: {
      All: {
        "cosmos.staking.v1beta1.validators": "getValidators",
        "cosmos.staking.v1beta1.delegations": "getDelegations"
      }
    }
  }
]
```

## Combining Query and Msg Operations

Instant RPC clients can combine both query (read) and msg (write) operations in a single client:

```typescript
// Configuration
nameMapping: {
  Query: {
    "cosmos.bank.v1beta1.balance": "getBalance"
  },
  Msg: {
    "cosmos.bank.v1beta1.send": "sendTokens"
  }
}

// Usage
const { balance } = await cosmosClient.getBalance({ 
  address: "cosmos1...",
  denom: "uatom" 
});

const sendResult = await cosmosClient.sendTokens({
  fromAddress: "cosmos1sender...",
  toAddress: "cosmos1recipient...",
  amount: [{ denom: "uatom", amount: "1000000" }]
});
```

## Benefits of Instant RPC Methods

1. **Simplified Interface**: Access methods directly without navigating through module hierarchies
2. **Intuitive Naming**: Use custom method names that better describe their purpose
3. **Focused API**: Include only the methods your application needs
4. **Improved Maintainability**: Cleaner code with less nesting and shorter method calls
5. **Better Developer Experience**: More intuitive API for team members

## Generated Code Structure

The generated `service-ops.ts` file contains:

1. An interface with all included operations
2. A class that implements the interface
3. An initialization method that links to the underlying RPC client

```typescript
// Generated example (simplified)
export interface CosmosClient extends 
  _CosmosAuthV1beta1Queryrpc.CosmosAuthAccountQuery, 
  _CosmosBankV1beta1Queryrpc.CosmosBankBalanceQuery {
}

export class CosmosClient {
  rpc: Rpc;
  
  init(rpc: Rpc): void {
    this.rpc = rpc;
    this.getBalance = _CosmosBankV1beta1Queryrpc.createClientImpl(rpc).balance;
    this.getAllBalances = _CosmosBankV1beta1Queryrpc.createClientImpl(rpc).allBalances;
    // Additional method assignments...
  }
}
```

## Best Practices

1. **Use Meaningful Names**: Choose method names that clearly describe what the operation does
2. **Group Related Operations**: Create separate client classes for different functional areas
3. **Maintain Consistency**: Use consistent naming patterns across your custom methods
4. **Document Custom Methods**: Add comments to explain your custom methods if their purpose isn't obvious
5. **Use with TypeScript**: Leverage type safety to catch errors at compile time 