# Broadcasting Messages

This document provides a reference for broadcasting transactions with messages in Telescope-generated clients.

## Transaction Broadcasting Methods

| Method | Description | Best For |
| ------ | ----------- | -------- |
| `signAndBroadcast` | Signs and broadcasts transactions in one step | Most use cases |
| `sign` + `broadcastTx` | Separates signing and broadcasting steps | Multi-signature or offline signing |
| `signAndBroadcastWithoutBalanceCheck` | Skips balance check for speedier execution | When balance is known to be sufficient |

## Using SigningStargateClient

The standard way to broadcast transactions:

```typescript
import { SigningStargateClient } from "@cosmjs/stargate";

// Create a SigningStargateClient (see Creating Signers documentation)
const client = await SigningStargateClient.connectWithSigner(rpcEndpoint, signer, options);

// Broadcast a transaction
const result = await client.signAndBroadcast(
  signerAddress,
  messages,
  fee,
  memo
);
```

## Telescope Convenience Methods

```typescript
import { getSigningClient } from "./my-chain-client";

// Create a chain-specific client
const client = await getSigningClient({
  rpcEndpoint,
  signer
});

// Broadcast a transaction using convenience method
const result = await client.sendMessages(
  signerAddress,
  messages,
  fee,
  memo
);
```

## Broadcasting Options

| Option | Description | Default |
| ------ | ----------- | ------- |
| `broadcastTimeoutMs` | Maximum time to wait for confirmation | 60000 |
| `broadcastPollIntervalMs` | Time between broadcast status checks | 3000 |
| `gasAdjustment` | Multiplier for simulated gas | 1.5 |
| `gasPrice` | Price per unit of gas | Chain-specific |

## Transaction Result Structure

```typescript
interface BroadcastTxResult {
  readonly height: number;         // Block height at which tx was committed
  readonly transactionHash: string; // The hash of the transaction
  readonly rawLog: string;         // Raw log information
  readonly code?: number;          // 0 for success, error code otherwise
  readonly data?: Uint8Array;      // Return value from transaction
  readonly gasUsed: number;        // Amount of gas used
  readonly gasWanted: number;      // Amount of gas requested
  readonly events: readonly Event[]; // Events emitted by the transaction
}
```

## Broadcasting Workflow

1. **Preparation**: Create messages and fee
2. **Simulation** (optional): Estimate gas
3. **Signing**: Create signature using signer
4. **Broadcasting**: Send to network
5. **Confirmation**: Wait for inclusion in a block
6. **Result Processing**: Handle success/failure

## Transaction Simulation

```typescript
// Simulate to estimate gas requirements
const gasEstimated = await client.simulate(
  signerAddress,
  messages,
  memo
);

// Apply safety factor
const gasLimit = Math.round(gasEstimated * 1.3);

// Create fee with estimated gas
const fee = {
  amount: [{ denom: "uatom", amount: "5000" }],
  gas: gasLimit.toString()
};
```

## Broadcast Modes

| Mode | Description | Use Case |
| ---- | ----------- | -------- |
| `block` | Wait for block inclusion | Standard usage, ensures transaction success |
| `sync` | Return after mempool validation | Faster response, when block confirmation not needed |
| `async` | Return immediately | Maximum speed, no validation |

```typescript
// Set broadcast mode (applicable for direct ABCI clients)
const result = await client.broadcastTx(
  signedTx,
  timeoutMs,
  broadcastMode
);
```

## Error Handling

```typescript
try {
  const result = await client.signAndBroadcast(
    signerAddress,
    messages,
    fee,
    memo
  );
  
  if (result.code === 0) {
    console.log("Transaction successful");
  } else {
    console.error(`Transaction failed with code ${result.code}: ${result.rawLog}`);
  }
} catch (error) {
  if (error.message.includes("insufficient funds")) {
    console.error("Account has insufficient funds to pay for fees");
  } else if (error.message.includes("out of gas")) {
    console.error("Transaction ran out of gas");
  } else if (error.message.includes("account sequence mismatch")) {
    console.error("Account sequence mismatch, retry with updated sequence");
  } else {
    console.error("Broadcasting error:", error);
  }
}
```

## Monitoring Transaction Status

```typescript
// Get transaction status after broadcasting
const txStatus = await client.getTx(txHash);

// Check if transaction was included in a block
if (txStatus) {
  console.log("Transaction included at height:", txStatus.height);
  console.log("Transaction success:", txStatus.code === 0);
} else {
  console.log("Transaction not yet included in a block");
}
```

## Sequence Number Management

```typescript
// Get account data to check sequence
const account = await client.getAccount(signerAddress);
if (!account) {
  throw new Error("Account not found");
}

console.log("Current sequence:", account.sequence);

// For manual sequence management in advanced cases
const signDoc = {
  chainId,
  accountNumber: account.accountNumber,
  sequence: account.sequence,
  fee,
  msgs: messages,
  memo
};
```

## Multi-Signature Transactions

```typescript
// Collect signatures offline
const signatures = await Promise.all(
  signers.map(signer => signer.sign(signerAddress, signDoc))
);

// Combine signatures
const combinedSignature = combineSignatures(signatures);

// Broadcast with combined signature
const signedTx = createSignedTx(signDoc, combinedSignature);
const result = await client.broadcastTx(signedTx);
```

## Best Practices

1. Always simulate transactions first to estimate gas
2. Apply a safety margin to estimated gas (1.3-1.5x)
3. Handle account sequence mismatches with retries
4. Verify transaction success by checking result code
5. Store transaction hashes for later queries
6. Use appropriate broadcast modes for your use case
7. Implement retry logic for transient failures
8. Monitor network congestion and adjust gas prices 