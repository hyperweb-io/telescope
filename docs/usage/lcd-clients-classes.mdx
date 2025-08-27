# LCD Client Classes

This document provides a reference for using and extending LCD Client Classes in Telescope-generated code.

## Overview

LCD Client Classes provide an object-oriented approach to interact with blockchain REST endpoints. Telescope generates these classes to enable modularity and extensibility while maintaining type safety.

## Configuration

To enable LCD Client Classes generation in Telescope:

```typescript
import { TelescopeOptions } from "@cosmology/types";

const options: TelescopeOptions = {
  lcdClientClasses: {
    enabled: true
  }
};
```

## Configuration Parameters

| Parameter | Type | Default | Description |
| --------- | ---- | ------- | ----------- |
| `lcdClientClasses.enabled` | boolean | `false` | Enables LCD Client Classes generation |
| `lcdClientClasses.bundle` | boolean | `true` | Whether to include classes in the bundle |
| `lcdClientClasses.methodName` | string | `"createLCDClientClasses"` | Factory method name |

## Basic Usage

### Creating LCD Client Classes

```typescript
import { createLCDClientClasses } from "./codegen/client-classes";

// Create client classes
const clientClasses = createLCDClientClasses({
  restEndpoint: "https://rest.cosmos.network"
});

// Access modules using class instances
const bankModule = clientClasses.cosmos.bank.v1beta1;
const stakingModule = clientClasses.cosmos.staking.v1beta1;

// Make queries
const balances = await bankModule.allBalances({ address: "cosmos1..." });
const validators = await stakingModule.validators({});
```

## Class Structure

Each module is represented by a class with methods corresponding to the available queries:

```typescript
class BankQueryClient {
  constructor(protected readonly axios: AxiosInstance, protected readonly baseUrl: string) {}

  // Get all balances for an address
  async allBalances(params: QueryAllBalancesRequest): Promise<QueryAllBalancesResponse> {
    // Implementation details...
  }

  // Get a specific token balance
  async balance(params: QueryBalanceRequest): Promise<QueryBalanceResponse> {
    // Implementation details...
  }

  // Get total supply of all tokens
  async totalSupply(params: QueryTotalSupplyRequest = {}): Promise<QueryTotalSupplyResponse> {
    // Implementation details...
  }

  // ...other methods
}
```

## Extending Client Classes

You can extend the generated classes to add custom functionality:

```typescript
import { BankQueryClient } from "./codegen/cosmos/bank/v1beta1/query.lcd";

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

Combine multiple client classes to create a composite client:

```typescript
import { BankQueryClient } from "./codegen/cosmos/bank/v1beta1/query.lcd";
import { StakingQueryClient } from "./codegen/cosmos/staking/v1beta1/query.lcd";
import { GovQueryClient } from "./codegen/cosmos/gov/v1beta1/query.lcd";
import axios from "axios";

// Create a class that composes multiple module clients
class CompositeClient {
  public readonly bank: BankQueryClient;
  public readonly staking: StakingQueryClient;
  public readonly gov: GovQueryClient;

  constructor(restEndpoint: string) {
    const axiosInstance = axios.create({ baseURL: restEndpoint });
    
    this.bank = new BankQueryClient(axiosInstance, restEndpoint);
    this.staking = new StakingQueryClient(axiosInstance, restEndpoint);
    this.gov = new GovQueryClient(axiosInstance, restEndpoint);
  }

  // Add composite methods that use multiple modules
  async getAccountOverview(address: string) {
    const [balances, delegations, unbonding, rewards] = await Promise.all([
      this.bank.allBalances({ address }),
      this.staking.delegatorDelegations({ delegatorAddr: address }),
      this.staking.delegatorUnbondingDelegations({ delegatorAddr: address }),
      this.gov.proposals({})
    ]);

    return {
      availableBalances: balances.balances,
      stakedBalance: delegations.delegationResponses,
      unbondingBalance: unbonding.unbondingResponses,
      activeProposals: rewards.proposals
    };
  }
}
```

## Axios Configuration

Customize the underlying Axios instance for better control:

```typescript
import axios, { AxiosRequestConfig } from "axios";
import { createLCDClientClasses } from "./codegen/client-classes";

// Custom Axios configuration
const axiosConfig: AxiosRequestConfig = {
  timeout: 15000,
  headers: {
    "Accept": "application/json",
    "Cache-Control": "no-cache"
  },
  validateStatus: (status) => status < 500, // Only throw for server errors
};

// Create a custom Axios instance
const axiosInstance = axios.create(axiosConfig);

// Add request interceptor for logging
axiosInstance.interceptors.request.use(config => {
  console.log(`Making request to: ${config.url}`);
  return config;
});

// Add response interceptor for error handling
axiosInstance.interceptors.response.use(
  response => response,
  error => {
    console.error("API Error:", error.message);
    return Promise.reject(error);
  }
);

// Create client classes with custom Axios instance
const clientClasses = createLCDClientClasses({
  restEndpoint: "https://rest.cosmos.network",
  axios: axiosInstance
});
```

## Implementing Caching

Add caching to improve performance:

```typescript
import { BankQueryClient } from "./codegen/cosmos/bank/v1beta1/query.lcd";

// Simple in-memory cache implementation
class CachingBankClient extends BankQueryClient {
  private cache = new Map<string, { data: any, timestamp: number }>();
  private readonly TTL = 30000; // 30 seconds cache TTL

  private getCacheKey(method: string, params: any): string {
    return `${method}:${JSON.stringify(params)}`;
  }

  async allBalances(params: any): Promise<any> {
    const cacheKey = this.getCacheKey('allBalances', params);
    
    // Check cache
    const cached = this.cache.get(cacheKey);
    if (cached && (Date.now() - cached.timestamp) < this.TTL) {
      return cached.data;
    }
    
    // Not in cache, call parent method
    const result = await super.allBalances(params);
    
    // Store in cache
    this.cache.set(cacheKey, { 
      data: result, 
      timestamp: Date.now() 
    });
    
    return result;
  }

  // Implement similar caching for other methods
}
```

## Retry Logic

Implement retry logic for resilient applications:

```typescript
import { BankQueryClient } from "./codegen/cosmos/bank/v1beta1/query.lcd";

class RetryingBankClient extends BankQueryClient {
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

  async allBalances(params: any): Promise<any> {
    return this.withRetry(() => super.allBalances(params));
  }

  // Apply retry logic to other methods as needed
}
```

## Pagination Helpers

Add pagination helpers to simplify working with paginated APIs:

```typescript
import { StakingQueryClient } from "./codegen/cosmos/staking/v1beta1/query.lcd";

class PaginatedStakingClient extends StakingQueryClient {
  // Get all validators with automatic pagination handling
  async getAllValidators(params: any = {}): Promise<any[]> {
    let validators: any[] = [];
    let nextKey: string | null = null;
    
    do {
      // Prepare pagination parameters
      const paginationParams = nextKey 
        ? { ...params, pagination: { ...params.pagination, key: nextKey } }
        : params;
      
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

Different chains may have unique modules and classes:

```typescript
import { GammQueryClient } from "./codegen/osmosis/gamm/v1beta1/query.lcd";

// Osmosis-specific client for liquidity pools
class OsmosisDexClient extends GammQueryClient {
  // Get all pools with price information
  async getPoolsWithPrices(): Promise<any[]> {
    const { pools } = await this.pools({});
    
    return pools.map(pool => {
      // Extract tokens from pool
      const assets = pool.poolAssets || [];
      
      // Calculate prices based on pool ratios
      const prices = this.calculatePrices(assets);
      
      return {
        id: pool.id,
        type: pool["@type"],
        assets,
        prices
      };
    });
  }
  
  private calculatePrices(assets: any[]): Record<string, number> {
    // Price calculation logic
    // This would calculate relative prices between assets in a pool
    // ...
    
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

## Best Practices

1. **Extend don't modify**: Extend the generated classes rather than modifying them
2. **Share Axios instances**: Reuse the same Axios instance across client classes
3. **Add helper methods**: Implement domain-specific helper methods
4. **Implement caching**: Add caching for frequently accessed data
5. **Use type safety**: Leverage TypeScript's type system
6. **Handle failures gracefully**: Add retry logic and error handling
7. **Maintain modularity**: Create classes with a single responsibility
8. **Document extensions**: Add clear documentation for custom methods 