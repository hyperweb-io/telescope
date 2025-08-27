# Composing Messages

This document provides a reference for composing messages using Telescope-generated types to interact with Cosmos SDK blockchains.

## Message Structure

| Component | Description |
| --------- | ----------- |
| Message Type | Protocol Buffer message type with corresponding TypeScript interface |
| Message Content | Data conforming to the message structure |
| Encoding | Binary or JSON encoding of the message |
| Signing | Cryptographic signature of the message for on-chain verification |

## Available Message Types

Message types are typically organized by module. Common modules include:

| Module | Description | Examples |
| ------ | ----------- | -------- |
| `bank` | Token transfers | `MsgSend`, `MsgMultiSend` |
| `staking` | Staking and delegation | `MsgDelegate`, `MsgUndelegate` |
| `gov` | Governance | `MsgSubmitProposal`, `MsgVote` |
| `distribution` | Fee distribution | `MsgWithdrawDelegatorReward` |
| `authz` | Authorization | `MsgExec`, `MsgGrant` |

## Creating Messages

Messages can be created using the `.fromPartial()` method:

```typescript
import { MsgSend } from "./cosmos/bank/v1beta1/tx";

// Create a bank send message
const sendMsg = MsgSend.fromPartial({
  fromAddress: "cosmos1...",
  toAddress: "cosmos1...",
  amount: [
    { denom: "uatom", amount: "1000000" }
  ]
});
```

### Message Validation

Telescope-generated types perform runtime validation when using helper methods:

```typescript
// Will throw an error if invalid
const validatedMsg = MsgSend.fromJSON({
  from_address: "cosmos1...",
  to_address: "cosmos1...",
  amount: [
    { denom: "uatom", amount: "1000000" }
  ]
});
```

## Message Composition Methods

| Method | Description | Example |
| ------ | ----------- | ------- |
| `fromPartial` | Creates a message with default values for missing fields | `MsgSend.fromPartial({...})` |
| `fromJSON` | Creates a message from a JSON object | `MsgSend.fromJSON({...})` |
| `encode` | Encodes a message to binary | `MsgSend.encode(msg, writer)` |
| `decode` | Decodes a binary message | `MsgSend.decode(bytes)` |

## MessageComposer

For convenience, Telescope generates a `MessageComposer` class for each module:

```typescript
import { bankComposer } from "./cosmos/bank/v1beta1/tx.composer";

const composedSendMsg = bankComposer.send({
  fromAddress: "cosmos1...",
  toAddress: "cosmos1...", 
  amount: [{ denom: "uatom", amount: "1000000" }]
});
```

### MessageComposer Methods

Each MessageComposer provides:

| Property | Description |
| -------- | ----------- |
| `typeUrl` | The type URL for the message |
| `value` | The message content |

## Transaction Composition

Multiple messages can be combined in a single transaction:

```typescript
// Compose multiple messages
const messages = [
  bankComposer.send({
    fromAddress: "cosmos1...",
    toAddress: "cosmos1...",
    amount: [{ denom: "uatom", amount: "1000000" }]
  }),
  stakingComposer.delegate({
    delegatorAddress: "cosmos1...",
    validatorAddress: "cosmosvaloper1...",
    amount: { denom: "uatom", amount: "5000000" }
  })
];
```

## Protobuf vs. Amino Encoding

Telescope supports both Protobuf and Amino encoding formats:

| Format | Usage | Type Field |
| ------ | ----- | ---------- |
| Protobuf | Modern Cosmos SDKs | `typeUrl` (e.g., "/cosmos.bank.v1beta1.MsgSend") |
| Amino | Legacy systems, some wallets | `type` (e.g., "cosmos-sdk/MsgSend") |

### Amino Conversion Example

```typescript
import { AminoTypes } from "@cosmjs/stargate";
import { aminoConverters } from "./amino/converters";

const aminoTypes = new AminoTypes(aminoConverters);

// Convert Protobuf to Amino format
const aminoMsg = aminoTypes.toAmino({
  typeUrl: "/cosmos.bank.v1beta1.MsgSend",
  value: sendMsg
});

// Convert back to Protobuf format
const protoMsg = aminoTypes.fromAmino(aminoMsg);
```

## Message Registry

The registry maps message type URLs to their corresponding Protobuf types:

```typescript
import { registry } from "./registry";
import { Registry } from "@cosmjs/proto-signing";

const protoRegistry = new Registry();
registry.forEach(([typeUrl, type]) => {
  protoRegistry.register(typeUrl, type);
});
```

## Using Messages with Clients

### With Stargate Client

```typescript
import { SigningStargateClient } from "@cosmjs/stargate";
import { MsgSend } from "./cosmos/bank/v1beta1/tx";

// Create a message
const sendMsg = MsgSend.fromPartial({
  fromAddress: "cosmos1...",
  toAddress: "cosmos1...",
  amount: [{ denom: "uatom", amount: "1000000" }]
});

// Send transaction with message
const result = await signingClient.signAndBroadcast(
  "cosmos1...",
  [
    {
      typeUrl: "/cosmos.bank.v1beta1.MsgSend",
      value: sendMsg
    }
  ],
  fee
);
```

### With RPC Client

```typescript
import { createTxClient } from "./tx";

const txClient = await createTxClient({
  signer: wallet,
  rpcEndpoint: "https://rpc.cosmos.network"
});

const result = await txClient.signAndBroadcast(
  "cosmos1...",
  [sendMsg],
  fee
);
```

## Common Message Types

### Bank Messages

```typescript
// MsgSend
const msgSend = MsgSend.fromPartial({
  fromAddress: "cosmos1...",
  toAddress: "cosmos1...",
  amount: [{ denom: "uatom", amount: "1000000" }]
});

// MsgMultiSend
const msgMultiSend = MsgMultiSend.fromPartial({
  inputs: [
    { address: "cosmos1...", coins: [{ denom: "uatom", amount: "1000000" }] }
  ],
  outputs: [
    { address: "cosmos1a...", coins: [{ denom: "uatom", amount: "500000" }] },
    { address: "cosmos1b...", coins: [{ denom: "uatom", amount: "500000" }] }
  ]
});
```

### Staking Messages

```typescript
// MsgDelegate
const msgDelegate = MsgDelegate.fromPartial({
  delegatorAddress: "cosmos1...",
  validatorAddress: "cosmosvaloper1...",
  amount: { denom: "uatom", amount: "1000000" }
});

// MsgUndelegate
const msgUndelegate = MsgUndelegate.fromPartial({
  delegatorAddress: "cosmos1...",
  validatorAddress: "cosmosvaloper1...",
  amount: { denom: "uatom", amount: "1000000" }
});
```

### Governance Messages

```typescript
// MsgSubmitProposal
const msgSubmitProposal = MsgSubmitProposal.fromPartial({
  content: Any.pack(textProposal, "/cosmos.gov.v1beta1.TextProposal"),
  initialDeposit: [{ denom: "uatom", amount: "10000000" }],
  proposer: "cosmos1..."
});

// MsgVote
const msgVote = MsgVote.fromPartial({
  proposalId: 1,
  voter: "cosmos1...",
  option: VoteOption.VOTE_OPTION_YES
});
```

## Best Practices

1. Always use the `.fromPartial()` method to ensure default values are properly set
2. Keep type URLs consistent with the SDK version you're targeting
3. Register all message types you plan to use with the registry
4. Use MessageComposer for convenience when composing multiple messages
5. Verify message structure before sending to avoid on-chain errors 