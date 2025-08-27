# Stargate Clients

This document provides a reference for using Stargate clients with Telescope-generated types to interact with Cosmos SDK blockchains.

## Overview

Stargate clients facilitate communication between your application and Cosmos SDK blockchains. Telescope generates the necessary type definitions and registries to use these clients with type safety.

## Client Types

| Client Type | Purpose | Package |
| ----------- | ------- | ------- |
| `QueryClient` | Read-only queries of blockchain state | `@cosmjs/stargate` |
| `SigningStargateClient` | Send signed transactions | `@cosmjs/stargate` |
| `StargateClient` | Basic read-only operations | `@cosmjs/stargate` |

## Registry Configuration

The registry maps Protobuf type URLs to their corresponding TypeScript types:

```typescript
import { Registry } from "@cosmjs/proto-signing";
import { defaultRegistryTypes } from "@cosmjs/stargate";
import { registry as telescopeRegistry } from "./registry";

// Create a registry with default types plus Telescope-generated types
function createRegistry(): Registry {
  const registry = new Registry(defaultRegistryTypes);
  
  // Register Telescope-generated types
  telescopeRegistry.forEach(([typeUrl, type]) => {
    registry.register(typeUrl, type);
  });
  
  return registry;
}
```

## Creating a StargateClient

```typescript
import { StargateClient } from "@cosmjs/stargate";

// Connect to a Cosmos SDK chain
const client = await StargateClient.connect("https://rpc.cosmos.network");

// Basic queries
const height = await client.getHeight();
const balance = await client.getAllBalances("cosmos1...");
const account = await client.getAccount("cosmos1...");
```

## Creating a QueryClient

```typescript
import { QueryClient, setupStargateClient } from "@cosmjs/stargate";
import { Tendermint34Client } from "@cosmjs/tendermint-rpc";

// Create a Tendermint client
const tmClient = await Tendermint34Client.connect("https://rpc.cosmos.network");

// Create a query client
const queryClient = QueryClient.withExtensions(
  tmClient,
  setupStargateClient
);

// Query chain ID and height
const chainId = await queryClient.stargateClient.getChainId();
const height = await queryClient.stargateClient.getHeight();
```

## Querying with Module Extensions

```typescript
import { setupBankExtension, BankExtension } from "@cosmjs/stargate";

// Query client with bank module extension
const queryClient = QueryClient.withExtensions(
  tmClient,
  setupBankExtension
);

// Query balances using the extension
const balance = await queryClient.bank.allBalances("cosmos1...");
```

## Creating a SigningStargateClient

```typescript
import { SigningStargateClient } from "@cosmjs/stargate";
import { DirectSecp256k1HdWallet } from "@cosmjs/proto-signing";
import { registry } from "./registry";
import { GasPrice } from "@cosmjs/stargate";

// Create a wallet
const wallet = await DirectSecp256k1HdWallet.fromMnemonic(
  "your mnemonic here",
  { prefix: "cosmos" }
);

// Create a signing client
const client = await SigningStargateClient.connectWithSigner(
  "https://rpc.cosmos.network",
  wallet,
  { 
    registry,
    gasPrice: GasPrice.fromString("0.025uatom")
  }
);

// Get the first account from the wallet
const [account] = await wallet.getAccounts();

// Send a transaction
const result = await client.sendTokens(
  account.address,
  "cosmos1recipient...",
  [{ denom: "uatom", amount: "1000000" }],
  {
    amount: [{ denom: "uatom", amount: "5000" }],
    gas: "200000"
  }
);
```

## Using Telescope-generated Types with SigningStargateClient

```typescript
import { SigningStargateClient } from "@cosmjs/stargate";
import { DirectSecp256k1HdWallet } from "@cosmjs/proto-signing";
import { registry } from "./registry";
import { MsgSend } from "./cosmos/bank/v1beta1/tx";

// Create client and wallet
const wallet = await DirectSecp256k1HdWallet.fromMnemonic("...");
const client = await SigningStargateClient.connectWithSigner(
  "https://rpc.cosmos.network",
  wallet,
  { registry }
);
const [account] = await wallet.getAccounts();

// Create a MsgSend using Telescope-generated types
const sendMsg = {
  typeUrl: "/cosmos.bank.v1beta1.MsgSend",
  value: MsgSend.fromPartial({
    fromAddress: account.address,
    toAddress: "cosmos1recipient...",
    amount: [{ denom: "uatom", amount: "1000000" }]
  })
};

// Send the transaction
const result = await client.signAndBroadcast(
  account.address,
  [sendMsg],
  {
    amount: [{ denom: "uatom", amount: "5000" }],
    gas: "200000"
  }
);
```

## Amino Converters Configuration

```typescript
import { SigningStargateClient, AminoTypes } from "@cosmjs/stargate";
import { aminoConverters } from "./amino/converters";

// Create a custom AminoTypes instance with Telescope-generated converters
const customAminoTypes = new AminoTypes(aminoConverters);

// Create a signing client with custom Amino types
const client = await SigningStargateClient.connectWithSigner(
  "https://rpc.cosmos.network",
  wallet,
  { 
    registry,
    aminoTypes: customAminoTypes
  }
);
```

## Telescope-specific Stargate Client

```typescript
import { createStargateClient } from "./stargate";
import { DirectSecp256k1HdWallet } from "@cosmjs/proto-signing";

// Create Telescope's enhanced Stargate client
const client = await createStargateClient({
  rpcEndpoint: "https://rpc.cosmos.network",
  signer: wallet
});

// Use convenience methods for sending messages
const result = await client.sendMsgs(
  "cosmos1sender...",
  [sendMsg, delegateMsg],
  fee
);
```

## Client Configuration Options

| Option | Description | Default |
| ------ | ----------- | ------- |
| `registry` | Maps type URLs to their TypeScript types | Default registry |
| `aminoTypes` | Custom Amino converters for legacy compatibility | Default converters |
| `gasPrice` | Price per unit of gas | Chain-dependent |
| `broadcastTimeoutMs` | Max wait time for transaction broadcasting | 60000 |
| `broadcastPollIntervalMs` | Polling interval for transaction confirmation | 3000 |
| `prefix` | Bech32 address prefix | "cosmos" |

## Error Handling

```typescript
try {
  const result = await client.signAndBroadcast(
    account.address,
    messages,
    fee
  );
  
  if (result.code === 0) {
    console.log("Transaction successful:", result.transactionHash);
  } else {
    console.error("Transaction failed with code:", result.code);
    console.error("Error message:", result.rawLog);
  }
} catch (error) {
  if (error.message.includes("Account does not exist")) {
    console.error("Account not found on chain. Make sure it's funded.");
  } else if (error.message.includes("insufficient fees")) {
    console.error("Insufficient fees provided.");
  } else if (error.message.includes("out of gas")) {
    console.error("Transaction ran out of gas.");
  } else {
    console.error("Transaction error:", error);
  }
}
```

## Reading Transaction Results

```typescript
// Send transaction
const result = await client.signAndBroadcast(
  account.address,
  messages,
  fee
);

// Access transaction data
console.log("Transaction hash:", result.transactionHash);
console.log("Block height:", result.height);
console.log("Gas used:", result.gasUsed);
console.log("Gas wanted:", result.gasWanted);

// Access events and attributes
result.events.forEach(event => {
  console.log("Event type:", event.type);
  event.attributes.forEach(attr => {
    console.log(`  ${attr.key}: ${attr.value}`);
  });
});
```

## Custom Query Extensions

```typescript
import { QueryClient } from "@cosmjs/stargate";
import { createProtobufRpcClient, QueryClient as TMClient } from "@cosmjs/stargate";
import { QueryClientImpl } from "./cosmos/bank/v1beta1/query";

// Create a query extension for a specific module
function setupCustomBankExtension(base: TMClient) {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);

  return {
    bank: {
      balance: async (address: string, denom: string) => {
        const { balance } = await queryService.Balance({
          address,
          denom
        });
        return balance;
      },
      allBalances: async (address: string) => {
        const { balances } = await queryService.AllBalances({ address });
        return balances;
      }
    }
  };
}

// Use the custom extension
const queryClient = QueryClient.withExtensions(
  tmClient,
  setupCustomBankExtension
);

const balance = await queryClient.bank.balance("cosmos1...", "uatom");
```

## Chain-specific Configurations

```typescript
import { GasPrice } from "@cosmjs/stargate";

// Chain-specific configurations
const chainConfigs = {
  cosmos: {
    rpcEndpoint: "https://rpc.cosmos.network",
    prefix: "cosmos",
    gasPrice: GasPrice.fromString("0.025uatom"),
    feeDenom: "uatom"
  },
  osmosis: {
    rpcEndpoint: "https://rpc.osmosis.zone",
    prefix: "osmo",
    gasPrice: GasPrice.fromString("0.025uosmo"),
    feeDenom: "uosmo"
  }
};

// Create a client for a specific chain
const chainId = "osmosis-1";
const config = chainConfigs.osmosis;

const client = await SigningStargateClient.connectWithSigner(
  config.rpcEndpoint,
  wallet,
  {
    registry,
    prefix: config.prefix,
    gasPrice: config.gasPrice
  }
);
```

## Best Practices

1. Always use a specific registry with Telescope-generated types
2. Handle network connection errors gracefully
3. Implement proper transaction result parsing
4. Set reasonable timeout values for network operations
5. Use appropriate gas prices for each chain
6. Close Tendermint clients when done to free resources
7. Implement proper error handling for chain-specific errors 