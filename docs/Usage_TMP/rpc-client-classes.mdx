# RPC Client Classes

This document provides a reference for using and extending RPC Client Classes in Telescope-generated code.

## Overview

RPC Client Classes provide an object-oriented approach to interact with Cosmos SDK blockchains through RPC endpoints. Telescope generates these classes to enable extensibility and modularity while maintaining type safety.

## Configuration

To enable RPC Client Classes generation in Telescope:

```typescript
import { TelescopeOptions } from "@cosmology/types";

const options: TelescopeOptions = {
  rpcClientClasses: {
    enabled: true
  }
};
```

## Configuration Parameters

| Parameter | Type | Default | Description |
| --------- | ---- | ------- | ----------- |
| `rpcClientClasses.enabled` | boolean | `false` | Enables RPC Client Classes generation |
| `rpcClientClasses.camelCase` | boolean | `true` | Converts method names to camelCase |
| `rpcClientClasses.methodName` | string | `"createRPCQueryClientClasses"` | Factory method name |

## Basic Usage

### Creating RPC Client Classes

```typescript
import { createRPCQueryClientClasses } from "./codegen/client-classes";

// Create client classes
const clientClasses = createRPCQueryClientClasses({
  rpcEndpoint: "https://rpc.cosmos.network"
});

// Access modules using class instances
const bankModule = clientClasses.cosmos.bank.v1beta1;
const stakingModule = clientClasses.cosmos.staking.v1beta1;

// Make queries
const balances = await bankModule.allBalances({ address: "cosmos1..." });
const validators = await stakingModule.validators({});
```

## Class Structure

Each module is represented by a class with query methods:

```typescript
class BankQueryClient {
  constructor(
    protected readonly rpc: TendermintClient, 
    protected readonly queryClient: QueryClient
  ) {}

  // Get all balances for an address
  async allBalances(request: QueryAllBalancesRequest): Promise<QueryAllBalancesResponse> {
    // Implementation details...
  }

  // Get a specific token balance
  async balance(request: QueryBalanceRequest): Promise<QueryBalanceResponse> {
    // Implementation details...
  }

  // Get total supply of all tokens
  async totalSupply(request: QueryTotalSupplyRequest = {}): Promise<QueryTotalSupplyResponse> {
    // Implementation details...
  }
}
```

## Client Types

RPC Client Classes support different underlying implementations:

```typescript
// Create client classes with specific client type
const tendermintClasses = createRPCQueryClientClasses({
  rpcEndpoint: "https://rpc.cosmos.network",
  clientType: "tendermint"
});

const grpcWebClasses = createRPCQueryClientClasses({
  rpcEndpoint: "https://grpc-web.cosmos.network",
  clientType: "grpc-web"
});

const grpcGatewayClasses = createRPCQueryClientClasses({
  rpcEndpoint: "https://rest.cosmos.network",
  clientType: "grpc-gateway"
});
```

## Extending Client Classes

You can extend the generated classes to add custom functionality:

```typescript
import { BankQueryClient } from "./codegen/cosmos/bank/v1beta1/query.rpc.Query";

class ExtendedBankClient extends BankQueryClient {
  // Add a convenience method for common operations
  async getTokenBalance(address: string, denom: string): Promise<string> {
    const response = await this.balance({
      address,
      denom
    });
    return response.balance?.amount || "0";
  }

  // Add methods for formatted output
  async getFormattedBalance(address: string, denom: string): Promise<string> {
    const amount = await this.getTokenBalance(address, denom);
    
    // Convert microunits to display units
    const displayAmount = Number(amount) / 1_000_000;
    
    // Format the display amount and append symbol
    const symbol = denom.startsWith('u') ? denom.substring(1).toUpperCase() : denom;
    return `${displayAmount.toLocaleString()} ${symbol}`;
  }
}
```

## Module Composition

Combine multiple client classes to create composite clients:

```typescript
import { BankQueryClient } from "./codegen/cosmos/bank/v1beta1/query.rpc.Query";
import { StakingQueryClient } from "./codegen/cosmos/staking/v1beta1/query.rpc.Query";
import { Tendermint34Client } from "@cosmjs/tendermint-rpc";
import { QueryClient } from "@cosmjs/stargate";

// Create a class that composes multiple module clients
class CompositeClient {
  public readonly bank: BankQueryClient;
  public readonly staking: StakingQueryClient;

  constructor(rpcEndpoint: string) {
    // Create base Tendermint client
    const tendermintClient = await Tendermint34Client.connect(rpcEndpoint);
    const queryClient = new QueryClient(tendermintClient);
    
    // Create module clients
    this.bank = new BankQueryClient(tendermintClient, queryClient);
    this.staking = new StakingQueryClient(tendermintClient, queryClient);
  }

  // Add composite methods that use multiple modules
  async getAccountOverview(address: string) {
    const [balances, delegations] = await Promise.all([
      this.bank.allBalances({ address }),
      this.staking.delegatorDelegations({ delegatorAddr: address })
    ]);

    return {
      availableBalances: balances.balances,
      stakedBalance: delegations.delegationResponses
    };
  }
  
  // Clean up resources
  disconnect() {
    this.bank.rpc.disconnect();
  }
}
```

## Working with Tendermint Subscriptions

RPC Client Classes can be used with Tendermint WebSocket subscriptions:

```typescript
import { Tendermint34Client } from "@cosmjs/tendermint-rpc";
import { createRPCQueryClientClasses } from "./codegen/client-classes";

// Create raw Tendermint client for subscriptions
const tendermintClient = await Tendermint34Client.connect("wss://rpc.cosmos.network/websocket");

// Create RPC Client Classes using existing Tendermint client
const clientClasses = createRPCQueryClientClasses({
  rpcEndpoint: tendermintClient
});

// Set up a block subscription
const blockSubscription = tendermintClient.subscribeNewBlock().subscribe({
  next: async (block) => {
    console.log(`New block: ${block.header.height}`);
    
    // Use clientClasses to query data related to this block
    const validators = await clientClasses.cosmos.staking.v1beta1.validators({});
    console.log(`Current validators: ${validators.validators.length}`);
  },
  error: (err) => {
    console.error("Subscription error:", err);
  }
});

// Later, clean up resources
blockSubscription.unsubscribe();
tendermintClient.disconnect();
```

## Implementing Retry Logic

Add retry logic for resilient applications:

```typescript
import { StakingQueryClient } from "./codegen/cosmos/staking/v1beta1/query.rpc.Query";

class RetryingStakingClient extends StakingQueryClient {
  private maxRetries = 3;
  private retryDelay = 1000; // 1 second

  private async withRetry<T>(method: () => Promise<T>): Promise<T> {
    let lastError: Error | null = null;
    
    for (let attempt = 1; attempt <= this.maxRetries; attempt++) {
      try {
        return await method();
      } catch (error) {
        lastError = error;
        console.warn(`Request failed (attempt ${attempt}/${this.maxRetries}): ${error.message}`);
        
        if (attempt < this.maxRetries) {
          // Wait before retrying (with exponential backoff)
          const delay = this.retryDelay * Math.pow(2, attempt - 1);
          await new Promise(resolve => setTimeout(resolve, delay));
        }
      }
    }
    
    throw lastError || new Error("Max retries exceeded");
  }

  async validators(request: any): Promise<any> {
    return this.withRetry(() => super.validators(request));
  }

  // Apply retry logic to other methods as needed
}
```

## Pagination Helpers

Add pagination helpers to simplify working with paginated APIs:

```typescript
import { StakingQueryClient } from "./codegen/cosmos/staking/v1beta1/query.rpc.Query";

class PaginatedStakingClient extends StakingQueryClient {
  // Get all validators with automatic pagination handling
  async getAllValidators(request: any = {}): Promise<any[]> {
    let validators: any[] = [];
    let nextKey: string | null = null;
    
    do {
      // Prepare pagination parameters
      const paginationParams = nextKey 
        ? { ...request, pagination: { ...request.pagination, key: nextKey } }
        : request;
      
      // Call parent method
      const response = await super.validators(paginationParams);
      
      // Add results to our collection
      validators = [...validators, ...response.validators];
      
      // Get next key for pagination
      nextKey = response.pagination?.nextKey || null;
      
    } while (nextKey);
    
    return validators;
  }
}
```

## Chain-specific Client Classes

Different chains may have unique modules:

```typescript
import { GammQueryClient } from "./codegen/osmosis/gamm/v1beta1/query.rpc.Query";

// Osmosis-specific client for liquidity pools
class OsmosisDexClient extends GammQueryClient {
  // Get pool with token prices
  async getPoolWithPrices(poolId: string): Promise<any> {
    const { pool } = await this.pool({ poolId });
    
    // Extract assets from pool
    const assets = pool.poolAssets || [];
    
    // Calculate prices based on pool ratios
    const prices = this.calculatePrices(assets);
    
    return {
      id: pool.id,
      type: pool["@type"],
      assets,
      prices
    };
  }
  
  private calculatePrices(assets: any[]): Record<string, number> {
    // Price calculation logic
    // ...implementation details...
    
    return { /* calculated prices */ };
  }
}
```

## TypeScript Type Helpers

Add TypeScript type helpers for better developer experience:

```typescript
// Define helper types for better IntelliSense
export type CosmosAddress = string;
export type TokenAmount = string;
export type Denom = string;

export interface Token {
  denom: Denom;
  amount: TokenAmount;
}

// Extend the client with strongly typed methods
class TypedBankClient extends BankQueryClient {
  async getBalance(address: CosmosAddress, denom: Denom): Promise<Token> {
    const response = await this.balance({
      address,
      denom
    });
    
    // Ensure we always return a valid token object
    return response.balance || { denom, amount: "0" };
  }
}
```

## Connection Management

Proper connection management is important:

```typescript
import { Tendermint34Client } from "@cosmjs/tendermint-rpc";
import { QueryClient } from "@cosmjs/stargate";
import { BankQueryClient } from "./codegen/cosmos/bank/v1beta1/query.rpc.Query";

class ManagedBankClient {
  private tendermintClient: Tendermint34Client;
  private queryClient: QueryClient;
  private bankClient: BankQueryClient;
  
  static async connect(endpoint: string): Promise<ManagedBankClient> {
    const instance = new ManagedBankClient();
    await instance.initialize(endpoint);
    return instance;
  }
  
  private async initialize(endpoint: string): Promise<void> {
    this.tendermintClient = await Tendermint34Client.connect(endpoint);
    this.queryClient = new QueryClient(this.tendermintClient);
    this.bankClient = new BankQueryClient(this.tendermintClient, this.queryClient);
  }
  
  async getBalance(address: string, denom: string): Promise<any> {
    return this.bankClient.balance({ address, denom });
  }
  
  // Always call this when done with the client
  disconnect(): void {
    this.tendermintClient.disconnect();
  }
}

// Usage
async function main() {
  const client = await ManagedBankClient.connect("https://rpc.cosmos.network");
  try {
    const balance = await client.getBalance("cosmos1...", "uatom");
    console.log(balance);
  } finally {
    client.disconnect(); // Always disconnect when done
  }
}
```

## Request Batching

For efficient network usage, batch related requests:

```typescript
class BatchingClient {
  private stakingClient: StakingQueryClient;
  
  constructor(stakingClient: StakingQueryClient) {
    this.stakingClient = stakingClient;
  }
  
  // Get validator details in batch
  async getValidatorDetails(validatorAddresses: string[]): Promise<any[]> {
    // Create an array of promise-returning functions
    const queries = validatorAddresses.map(address => 
      () => this.stakingClient.validator({ validatorAddr: address })
    );
    
    // Execute with concurrency control
    return this.batchExecute(queries, 5);
  }
  
  // Generic batching helper with concurrency limit
  private async batchExecute<T>(
    tasks: Array<() => Promise<T>>, 
    concurrencyLimit: number
  ): Promise<T[]> {
    const results: T[] = [];
    const executing: Promise<void>[] = [];
    
    for (const task of tasks) {
      const p = task().then(result => {
        results.push(result);
        executing.splice(executing.indexOf(p), 1);
      });
      
      executing.push(p);
      
      if (executing.length >= concurrencyLimit) {
        // Wait for one task to complete before adding more
        await Promise.race(executing);
      }
    }
    
    // Wait for all tasks to complete
    await Promise.all(executing);
    
    return results;
  }
}
```

## Performance Considerations

1. **Connection Reuse**: Create a single client and reuse it
2. **Pagination**: Use appropriate page sizes
3. **Batching**: Control concurrency for multiple requests
4. **Caching**: Consider caching for frequently accessed data
5. **Connection Pooling**: Use a connection pool for high-traffic applications

## Best Practices

1. **Extend don't modify**: Extend the generated classes rather than modifying them
2. **Resource Management**: Always disconnect clients when done
3. **Error Handling**: Implement proper error handling with retries
4. **Pagination**: Use key-based pagination for large datasets
5. **Type Safety**: Leverage TypeScript's type system
6. **Composition**: Compose multiple clients for complex functionality
7. **Client Lifecycle**: Manage connection lifecycle properly 