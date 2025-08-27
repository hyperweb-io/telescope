# LCD Clients

This document provides a reference for using LCD (Light Client Daemon) clients in Telescope-generated code to query blockchain data via REST endpoints.

## Overview

LCD clients provide a way to query blockchain state through REST API endpoints exposed by Cosmos SDK chains. Telescope can generate TypeScript clients that interact with these endpoints with full type safety.

## Configuration Options

To enable LCD client generation in Telescope, use the following options:

```typescript
import { TelescopeOptions } from "@cosmology/types";

const options: TelescopeOptions = {
  lcdClients: {
    enabled: true,
    // Additional optional configurations
    scoped: [
      // Optional array of scoped client configurations
    ]
  }
};
```

## Configuration Parameters

| Parameter | Type | Default | Description |
| --------- | ---- | ------- | ----------- |
| `lcdClients.enabled` | boolean | `false` | Enables LCD client generation |
| `lcdClients.scoped` | array | `[]` | Configuration for scoped LCD clients |
| `lcdClients.scoped[].dir` | string | - | Directory to generate scoped client |
| `lcdClients.scoped[].filename` | string | - | Filename for the generated client |
| `lcdClients.scoped[].packages` | string[] | - | Array of packages to include |
| `lcdClients.scoped[].addToBundle` | boolean | `false` | Add to bundle export |
| `lcdClients.scoped[].methodName` | string | - | Method name for the client factory |

## Basic Usage

### Creating an LCD Client

```typescript
import { createLCDClient } from "./codegen/client";

// Create the client
const client = await createLCDClient({
  restEndpoint: "https://rest.cosmos.network"
});

// Use the client to query blockchain data
const balanceResponse = await client.cosmos.bank.v1beta1.allBalances({
  address: "cosmos1..."
});

console.log("Balances:", balanceResponse.balances);
```

### Query Parameters

Queries accept parameters based on the endpoint definition:

```typescript
// Query with parameters
const validatorsResponse = await client.cosmos.staking.v1beta1.validators({
  status: "BOND_STATUS_BONDED",
  pagination: {
    key: "",
    offset: "0",
    limit: "100",
    countTotal: true
  }
});

console.log(`Found ${validatorsResponse.validators.length} active validators`);
```

## Module Organization

LCD clients are organized by modules, versions, and query methods:

```typescript
// Bank module
const bankModule = client.cosmos.bank.v1beta1;
const balances = await bankModule.allBalances({ address: "cosmos1..." });

// Staking module
const stakingModule = client.cosmos.staking.v1beta1;
const validators = await stakingModule.validators({});

// Governance module
const govModule = client.cosmos.gov.v1beta1;
const proposals = await govModule.proposals({});
```

## Scoped LCD Clients

For more focused applications, create scoped clients that include only specific modules:

```typescript
// Configuration for generating scoped clients
const options: TelescopeOptions = {
  lcdClients: {
    enabled: true,
    scoped: [
      {
        dir: "osmosis",
        filename: "osmosis-lcd-client.ts",
        packages: [
          "cosmos.bank.v1beta1",
          "osmosis.gamm.v1beta1",
          "osmosis.lockup.v1beta1"
        ],
        addToBundle: true,
        methodName: "createOsmosisLCDClient"
      }
    ]
  }
};

// Using the generated scoped client
import { createOsmosisLCDClient } from "./codegen/osmosis/osmosis-lcd-client";

const osmosisClient = await createOsmosisLCDClient({
  restEndpoint: "https://rest.osmosis.zone"
});

// Now you can only access the modules specified in the configuration
const pools = await osmosisClient.osmosis.gamm.v1beta1.pools({});
```

## Pagination

Many queries support pagination for handling large datasets:

```typescript
// First page
const firstPage = await client.cosmos.staking.v1beta1.validators({
  pagination: {
    limit: "10"
  }
});

// Next page, if there's more data
if (firstPage.pagination && firstPage.pagination.nextKey) {
  const nextPage = await client.cosmos.staking.v1beta1.validators({
    pagination: {
      key: firstPage.pagination.nextKey,
      limit: "10"
    }
  });
}
```

## Error Handling

```typescript
try {
  const response = await client.cosmos.bank.v1beta1.balance({
    address: "cosmos1...",
    denom: "uatom"
  });
  console.log("Balance:", response.balance);
} catch (error) {
  if (error.response) {
    // The request was made and the server responded with an error
    console.error("Error status:", error.response.status);
    console.error("Error data:", error.response.data);
  } else if (error.request) {
    // The request was made but no response was received
    console.error("No response received:", error.request);
  } else {
    // Something happened in setting up the request
    console.error("Request error:", error.message);
  }
}
```

## Advanced: Creating Custom LCD Clients

For custom chains or specific needs, you can create custom LCD clients:

```typescript
import { LCDClient } from "@cosmology/lcd";

// Create a LCDClient with custom axios config
const client = new LCDClient({
  restEndpoint: "https://rest.cosmos.network",
  axiosConfig: {
    timeout: 15000,
    headers: {
      "Custom-Header": "Value"
    }
  }
});

// Register a custom endpoint
client.registerEndpoint({
  path: "/custom/endpoint",
  method: "GET",
  namespace: "custom",
  operationId: "customQuery"
});

// Use the custom endpoint
const response = await client.custom.customQuery({ param: "value" });
```

## Chain-specific Endpoints

Different Cosmos chains may have unique modules and endpoints:

### Osmosis DEX Queries

```typescript
// Query liquidity pools on Osmosis
const poolsResponse = await osmosisClient.osmosis.gamm.v1beta1.pools({});
console.log(`Found ${poolsResponse.pools.length} liquidity pools`);

// Query specific pool
const poolResponse = await osmosisClient.osmosis.gamm.v1beta1.pool({
  poolId: "1"
});
console.log("Pool details:", poolResponse.pool);
```

### CosmWasm Smart Contract Queries

```typescript
// Query a CosmWasm smart contract
const contractResponse = await client.cosmwasm.wasm.v1.smartContractState({
  address: "juno1contract...",
  queryData: btoa(JSON.stringify({ 
    get_config: {} 
  }))
});

// Parse the query result
const contractResult = JSON.parse(
  new TextDecoder().decode(contractResponse.data)
);
console.log("Contract state:", contractResult);
```

## Response Types

All LCD client responses are fully typed based on the Protobuf definitions:

```typescript
// Response type for bank balance query
interface QueryAllBalancesResponse {
  balances: Coin[];
  pagination?: PageResponse;
}

// Response type for validator query
interface QueryValidatorsResponse {
  validators: Validator[];
  pagination?: PageResponse;
}
```

## Best Practices

1. **Use Typings**: Take advantage of TypeScript typings for autocomplete and type checking
2. **Handle Pagination**: For large datasets, implement proper pagination handling
3. **Cache Responses**: Consider caching responses for frequently queried data
4. **Error Handling**: Implement proper error handling for all queries
5. **Rate Limiting**: Be mindful of rate limits imposed by public REST endpoints
6. **Connection Management**: Close connections when they're no longer needed
7. **Timeout Configuration**: Set appropriate timeouts for network requests 
8. **Prefer Specific Queries**: Use specific query methods when available instead of generic ones 