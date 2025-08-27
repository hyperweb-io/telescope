# RPC Clients

This document provides a reference for using RPC (Remote Procedure Call) clients in Telescope-generated code to interact with Cosmos SDK blockchains.

## Overview

Telescope supports generating TypeScript clients that can interact with Cosmos SDK chains through different RPC interfaces:

1. **Tendermint RPC** - Direct access to Tendermint endpoints
2. **gRPC-web Client** - Browser-compatible gRPC client
3. **gRPC-gateway Client** - REST-based access to gRPC services

## Configuration

To enable RPC client generation in Telescope, use the following configuration:

```typescript
import { TelescopeOptions } from "@cosmology/types";

const options: TelescopeOptions = {
  rpcClients: {
    enabled: true,
    camelCase: true // Optional: convert method names to camelCase
  }
};
```

## Configuration Parameters

| Parameter | Type | Default | Description |
| --------- | ---- | ------- | ----------- |
| `rpcClients.enabled` | boolean | `false` | Enables RPC client generation |
| `rpcClients.camelCase` | boolean | `true` | Converts RPC method names to camelCase |
| `rpcClients.bundle` | boolean | `true` | Include RPC clients in bundle |
| `rpcClients.methodName` | string | `"createRPCQueryClient"` | Factory method name |

## Tendermint Client

### Basic Usage

```typescript
import { createRPCQueryClient } from "./codegen/rpc";

// Create a client
const client = await createRPCQueryClient({
  rpcEndpoint: "https://rpc.cosmos.network"
});

// Query blockchain data
const { validators } = await client.cosmos.staking.v1beta1.validators({});
console.log(`Found ${validators.length} validators`);
```

### Tendermint-specific Endpoints

```typescript
// Get node information
const nodeInfo = await client.cosmos.base.tendermint.v1beta1.getNodeInfo({});
console.log("Chain ID:", nodeInfo.defaultNodeInfo.network);

// Get latest block
const latestBlock = await client.cosmos.base.tendermint.v1beta1.getLatestBlock({});
console.log("Latest block height:", latestBlock.block.header.height);

// Get syncing status
const syncingStatus = await client.cosmos.base.tendermint.v1beta1.getSyncing({});
console.log("Node is syncing:", syncingStatus.syncing);
```

## gRPC-web Client

For browser applications, use the gRPC-web client:

```typescript
import { createRPCQueryClient } from "./codegen/rpc";

// Create a gRPC-web client
const client = await createRPCQueryClient({
  rpcEndpoint: "https://grpc-web.cosmos.network"
});

// Use the same interface as Tendermint client
const { balance } = await client.cosmos.bank.v1beta1.balance({
  address: "cosmos1...",
  denom: "uatom"
});
```

## gRPC-gateway Client

For REST-based access to gRPC services:

```typescript
import { createRPCQueryClient } from "./codegen/rpc";

// Create a client using gRPC-gateway endpoint
const client = await createRPCQueryClient({
  rpcEndpoint: "https://rest.cosmos.network"
});

// Query as normal
const { supply } = await client.cosmos.bank.v1beta1.totalSupply({});
```

## Client Types

Specify the client type explicitly:

```typescript
import { createRPCQueryClient } from "./codegen/rpc";

// Choose the client implementation
const client = await createRPCQueryClient({
  rpcEndpoint: "https://rpc.cosmos.network",
  clientType: "tendermint" // or "grpc-web" or "grpc-gateway"
});
```

## Module Organization

RPC clients are organized by modules, versions, and methods:

```typescript
// Bank module
const bank = client.cosmos.bank.v1beta1;
const balances = await bank.allBalances({ address: "cosmos1..." });

// Staking module
const staking = client.cosmos.staking.v1beta1;
const validators = await staking.validators({});

// Governance module
const gov = client.cosmos.gov.v1beta1;
const proposals = await gov.proposals({});
```

## Pagination

Many RPC methods support pagination for handling large result sets:

```typescript
// First page of validators
const { validators, pagination } = await client.cosmos.staking.v1beta1.validators({
  pagination: {
    limit: "10",
    offset: "0",
    countTotal: true
  }
});

console.log(`Page 1: ${validators.length} validators`);
console.log(`Total count: ${pagination.total}`);

// Next page
const nextPage = await client.cosmos.staking.v1beta1.validators({
  pagination: {
    limit: "10",
    offset: "10",
    countTotal: false
  }
});

console.log(`Page 2: ${nextPage.validators.length} validators`);
```

## Key-based Pagination

For larger datasets, use key-based pagination:

```typescript
let nextKey = null;
let allValidators = [];

do {
  // Query with nextKey if available
  const paginationParams = nextKey 
    ? { key: nextKey, limit: "100" } 
    : { limit: "100" };
  
  const response = await client.cosmos.staking.v1beta1.validators({
    pagination: paginationParams
  });
  
  // Add results to collection
  allValidators = [...allValidators, ...response.validators];
  
  // Get the next pagination key
  nextKey = response.pagination?.nextKey;
  
} while (nextKey && nextKey.length > 0);

console.log(`Retrieved ${allValidators.length} validators in total`);
```

## Error Handling

```typescript
try {
  const { balance } = await client.cosmos.bank.v1beta1.balance({
    address: "cosmos1...",
    denom: "uatom"
  });
  console.log("Balance:", balance);
} catch (error) {
  if (error.code === 3) { // NOT_FOUND in gRPC
    console.error("Address not found");
  } else if (error.code === 4) { // DEADLINE_EXCEEDED
    console.error("Request timed out");
  } else if (error.code === 13) { // INTERNAL
    console.error("Internal server error");
  } else {
    console.error("Error:", error.message);
  }
}
```

## Custom Endpoints

For custom or extended RPC endpoints:

```typescript
import { QueryClient } from "@cosmjs/stargate";
import { Tendermint34Client } from "@cosmjs/tendermint-rpc";
import { setupCustomExtension } from "./my-extension";

// Create a Tendermint client
const tendermintClient = await Tendermint34Client.connect("https://rpc.cosmos.network");

// Create a QueryClient with custom extension
const queryClient = QueryClient.withExtensions(
  tendermintClient,
  setupCustomExtension
);

// Use the custom extension
const customResult = await queryClient.custom.myCustomQuery(params);
```

## RPC Client Comparison

| Feature | Tendermint RPC | gRPC-web | gRPC-gateway |
| ------- | ------------- | -------- | ------------ |
| Browser Support | Limited | Yes | Yes |
| Efficiency | High | Medium | Low |
| Streaming | Yes | Limited | No |
| Compatibility | Node.js | All | All |
| Communication | Direct | HTTP/1.1 + Protobuf | HTTP/REST |

## Tendermint RPC Specific Methods

```typescript
// Create a raw Tendermint client
import { Tendermint34Client } from "@cosmjs/tendermint-rpc";

const tmClient = await Tendermint34Client.connect("https://rpc.cosmos.network");

// Get blockchain information
const abciInfo = await tmClient.abciInfo();
console.log("ABCI application version:", abciInfo.applicationVersion);

// Get a block by height
const block = await tmClient.block(123456);
console.log("Block time:", block.block.header.time);

// Get validator set at a height
const validators = await tmClient.validatorsAll(123456);
console.log("Validator count:", validators.length);

// Subscribe to new blocks
const subscription = tmClient.subscribeNewBlock().subscribe({
  next: (event) => {
    console.log("New block:", event.header.height);
  },
  error: (error) => {
    console.error("Subscription error:", error);
  },
  complete: () => {
    console.log("Subscription completed");
  }
});

// Later, unsubscribe
subscription.unsubscribe();
```

## WebSocket Subscriptions

```typescript
// Subscribe to transaction events
const subscription = tmClient.subscribeTx().subscribe({
  next: (event) => {
    console.log("Transaction hash:", event.hash);
    console.log("Transaction result:", event.result);
  },
  error: (error) => {
    console.error("Subscription error:", error);
  }
});

// Subscribe to specific events
const subscription = tmClient.subscribeNewBlockHeader().subscribe({
  next: (header) => {
    console.log("New block height:", header.height);
    console.log("Block time:", header.time);
    console.log("Proposer:", header.proposerAddress);
  }
});
```

## Request Batching

For efficient network usage, batch related requests:

```typescript
import { createRPCQueryClient } from "./codegen/rpc";

async function getBatchedData(addresses) {
  const client = await createRPCQueryClient({
    rpcEndpoint: "https://rpc.cosmos.network"
  });
  
  // Execute multiple queries in parallel
  const balancePromises = addresses.map(address => 
    client.cosmos.bank.v1beta1.allBalances({ address })
  );
  
  // Wait for all queries to complete
  const balanceResults = await Promise.all(balancePromises);
  
  // Process results
  return addresses.map((address, index) => ({
    address,
    balances: balanceResults[index].balances
  }));
}

// Example usage
const addresses = [
  "cosmos1address1...",
  "cosmos1address2...",
  "cosmos1address3..."
];

const results = await getBatchedData(addresses);
console.log(results);
```

## Connection Management

```typescript
import { createRPCQueryClient } from "./codegen/rpc";
import { Tendermint34Client } from "@cosmjs/tendermint-rpc";

// Create a Tendermint client directly
const tmClient = await Tendermint34Client.connect("https://rpc.cosmos.network");

// Create RPC client using existing Tendermint client
const client = await createRPCQueryClient({
  rpcEndpoint: tmClient
});

// Use the client
const chainId = await client.cosmos.base.tendermint.v1beta1.getNodeInfo({});

// When done, disconnect
tmClient.disconnect();
```

## Performance Considerations

1. **Connection Reuse**: Create a single client and reuse it
2. **Pagination**: Use appropriate page sizes
3. **Batching**: Batch related requests with Promise.all
4. **Disconnection**: Always disconnect when done
5. **Error Handling**: Implement proper error handling and retries
6. **Timeouts**: Set appropriate timeouts for RPC calls

## Best Practices

1. **Client Lifecycle**: Manage client connections properly
2. **Error Handling**: Implement proper error handling with retries
3. **Batching**: Batch related requests for efficiency
4. **Pagination**: Use pagination for large datasets
5. **Disconnection**: Always disconnect clients when done
6. **Type Safety**: Leverage TypeScript typing for better developer experience
7. **Authentication**: Include authentication if required by the endpoint 