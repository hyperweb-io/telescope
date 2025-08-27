# Calculating Fees

This document provides a reference for calculating transaction fees for Cosmos SDK blockchains using Telescope-generated types.

## Fee Structure

| Component | Description |
| --------- | ----------- |
| Gas | Computational resources required to process a transaction |
| Gas Price | Price per unit of gas in a specific denomination |
| Fee | Total amount paid for transaction processing (Gas × Gas Price) |

## Fee Object Structure

```typescript
export interface StdFee {
  readonly amount: readonly Coin[];
  readonly gas: string;
}

export interface Coin {
  readonly denom: string;
  readonly amount: string;
}
```

## Gas Estimation Methods

| Method | Description | Usage |
| ------ | ----------- | ----- |
| Manual Specification | Explicitly set gas limit | Simple transactions with known gas requirements |
| Simulation | Estimate gas by simulating transaction | Complex transactions with variable gas needs |
| Auto | Automatically estimate and adjust gas | General-purpose usage |

## Manual Fee Calculation

```typescript
// Define a standard fee with fixed gas
const fee = {
  amount: [{ denom: "uatom", amount: "5000" }],
  gas: "200000" // 200,000 gas units
};
```

## Using Gas Prices

```typescript
import { calculateFee, GasPrice } from "@cosmjs/stargate";

// Define gas price (e.g., 0.025 uatom per gas unit)
const gasPrice = GasPrice.fromString("0.025uatom");

// Calculate fee for a given gas limit
const fee = calculateFee(200000, gasPrice);
// Result: { amount: [{ denom: "uatom", amount: "5000" }], gas: "200000" }
```

## Automatic Gas Estimation

```typescript
import { SigningStargateClient } from "@cosmjs/stargate";

// Auto gas estimation when sending transactions
const result = await client.signAndBroadcast(
  sender,
  messages,
  "auto" // Use auto gas estimation
);
```

## Gas Estimation via Simulation

```typescript
import { SigningStargateClient } from "@cosmjs/stargate";

// First simulate the transaction
const gasEstimate = await client.simulate(
  sender,
  messages,
  memo
);

// Apply a safety margin (e.g., 1.3x the estimated gas)
const gasLimit = Math.round(gasEstimate * 1.3);

// Calculate fee with the estimated gas
const fee = calculateFee(gasLimit, gasPrice);
```

## Fee Adjustment Strategies

| Strategy | Description | Use Case |
| -------- | ----------- | -------- |
| Fixed Multiplier | Multiply estimated gas by a factor | General usage (1.3-1.5x typical) |
| Minimum Gas | Set a floor for gas estimation | Ensure transaction validity |
| Dynamic Pricing | Adjust gas price based on network congestion | Prioritize during high traffic |

## Fee Estimation with Telescope-generated Clients

```typescript
import { createTxClient } from "./tx";

const txClient = await createTxClient({
  signer: wallet,
  rpcEndpoint: "https://rpc.cosmos.network"
});

// Simulate to estimate gas
const gasEstimate = await txClient.simulate({
  messages,
  signer: sender
});

// Apply safety margin and calculate fee
const gasLimit = Math.round(gasEstimate * 1.3);
const fee = {
  amount: [{ denom: "uatom", amount: (gasLimit * 0.025).toString() }],
  gas: gasLimit.toString()
};
```

## Fee Denom Selection

```typescript
// Get available account balances
const { balances } = await queryClient.cosmos.bank.v1beta1.allBalances({
  address: sender
});

// Select appropriate denom for fees
function selectFeeDenom(balances, preferredDenom = "uatom") {
  // First try preferred denom
  const preferred = balances.find(coin => coin.denom === preferredDenom);
  if (preferred && parseInt(preferred.amount) > 5000) {
    return preferredDenom;
  }
  
  // Fallback to first denom with sufficient balance
  const fallback = balances.find(coin => parseInt(coin.amount) > 5000);
  return fallback ? fallback.denom : preferredDenom;
}

const feeDenom = selectFeeDenom(balances);
```

## Fee Grants

Some chains support fee grants, allowing one account to pay fees for another:

```typescript
import { MsgGrantAllowance } from "./cosmos/feegrant/v1beta1/tx";
import { BasicAllowance } from "./cosmos/feegrant/v1beta1/feegrant";

// Create a basic allowance
const expirationDate = new Date();
expirationDate.setMonth(expirationDate.getMonth() + 1); // 1 month expiry

const basicAllowance = BasicAllowance.fromPartial({
  spendLimit: [{ denom: "uatom", amount: "1000000" }],
  expiration: expirationDate
});

// Grant fee allowance
const grantMsg = MsgGrantAllowance.fromPartial({
  granter: "cosmos1granter...",
  grantee: "cosmos1grantee...",
  allowance: Any.pack(basicAllowance, "/cosmos.feegrant.v1beta1.BasicAllowance")
});
```

## Chain-Specific Fee Parameters

| Parameter | Value Source | Example |
| --------- | ----------- | ------- |
| Minimum Gas Prices | Chain configuration | "0.0025uatom" |
| Fee Denominations | Chain-accepted tokens | ["uatom", "uosmo", ...] |
| Gas Adjustment | Client configuration | 1.3 |

## Gas Weights for Common Operations

| Operation | Approximate Gas Cost | Notes |
| --------- | -------------------- | ----- |
| Token Transfer | 80,000 - 100,000 | Single MsgSend |
| Delegate | 140,000 - 180,000 | MsgDelegate |
| Undelegate | 150,000 - 190,000 | MsgUndelegate |
| Claim Rewards | 150,000 - 250,000 | MsgWithdrawDelegatorReward |
| Submit Proposal | 200,000+ | Depends on proposal content size |
| Vote on Proposal | 100,000 - 140,000 | MsgVote |

## Handling Out of Gas Errors

```typescript
try {
  const result = await client.signAndBroadcast(sender, messages, fee);
  // Process result
} catch (error) {
  if (error.message.includes("out of gas")) {
    // Increase gas and retry
    const newGasLimit = Math.round(parseInt(fee.gas) * 1.5);
    const newFee = {
      amount: fee.amount,
      gas: newGasLimit.toString()
    };
    // Retry with new fee
    const retryResult = await client.signAndBroadcast(sender, messages, newFee);
    // Process retry result
  } else {
    // Handle other errors
    console.error("Transaction failed:", error);
  }
}
```

## Best Practices

1. Always use gas estimation for complex transactions
2. Apply a safety margin of 1.3x to 1.5x to estimated gas
3. Set a reasonable maximum gas limit to avoid excessive fees
4. Check account balances before sending to ensure sufficient funds for fees
5. Consider network congestion and adjust gas prices accordingly
6. Use appropriate denominations accepted by validators
7. Test fee calculations on testnets before mainnet deployment 