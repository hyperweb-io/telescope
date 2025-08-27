# Creating Signers

This document provides a reference for creating and using signers in Telescope generated clients.

## Overview

To broadcast transactions to Cosmos-based blockchains, you need to sign them with a valid account. Telescope supports multiple signer implementations that work with its generated clients.

## Signer Types

### OfflineSigner

The `OfflineSigner` interface from `@cosmjs/proto-signing` is the base interface for all signers in Telescope. It provides the following methods:

- `getAccounts()`: Returns the accounts controlled by this signer
- `signDirect(signerAddress, signDoc)`: Signs a transaction using the direct signing method

### DirectSecp256k1Wallet

A wallet implementation that uses the Secp256k1 elliptic curve for signing.

```ts
import { DirectSecp256k1Wallet } from '@cosmjs/proto-signing';

// Create a wallet from a private key
const wallet = await DirectSecp256k1Wallet.fromKey(privateKey, prefix);

// Create a random wallet
const wallet = await DirectSecp256k1Wallet.generate(prefix);
```

### Amino Signer vs Proto Signer

Telescope supports both Amino and Protobuf transaction signing:

#### Amino Signer

Most applications should use the Amino signer for compatibility with wallets like Keplr:

```ts
import { getOfflineSigner as getOfflineSignerAmino } from 'cosmjs-utils';

const signer = await getOfflineSignerAmino({
    mnemonic,
    chain
});
```

#### Proto Signer

For direct Protobuf signing:

```ts
import { getOfflineSigner as getOfflineSignerProto } from 'cosmjs-utils';

const signer = await getOfflineSignerProto({
    mnemonic,
    chain
});
```

## Wallet Integration

### Keplr Wallet

Telescope clients integrate well with the Keplr browser extension:

```ts
// Request connection to Keplr
await window.keplr.enable(chainId);

// Get the offline signer from Keplr
const signer = window.keplr.getOfflineSigner(chainId);

// Use with your Telescope client
const client = await getSigningClient({
    rpcEndpoint,
    signer
});
```

### Using Mnemonics (Development Only)

You can create signers from mnemonics for development purposes:

```ts
import { chains } from 'chain-registry';

const mnemonic = 'unfold client turtle either pilot stock floor glow toward bullet car science';
const chain = chains.find(({ chain_name }) => chain_name === 'osmosis');
const signer = await getOfflineSignerAmino({
    mnemonic,
    chain
});
```

> **WARNING**: Never use plain-text mnemonics in production. Always use secure key management practices.

## Custom Registry Configuration

When creating signers for custom chains, you may need to configure the registry and amino types:

```ts
import { Registry } from '@cosmjs/proto-signing';
import { AminoTypes } from '@cosmjs/stargate';
import { 
    cosmosAminoConverters, cosmosProtoRegistry,
    cosmwasmAminoConverters, cosmwasmProtoRegistry,
    ibcAminoConverters, ibcProtoRegistry,
    myChainAminoConverters, myChainProtoRegistry
} from 'my-chain-js';

const protoRegistry = [
    ...cosmosProtoRegistry,
    ...cosmwasmProtoRegistry,
    ...ibcProtoRegistry,
    ...myChainProtoRegistry
];

const aminoConverters = {
    ...cosmosAminoConverters,
    ...cosmwasmAminoConverters,
    ...ibcAminoConverters,
    ...myChainAminoConverters
};

const registry = new Registry(protoRegistry);
const aminoTypes = new AminoTypes(aminoConverters);

const stargateClient = await SigningStargateClient.connectWithSigner(
    rpcEndpoint, 
    signer, 
    {
        registry,
        aminoTypes
    }
);
```

## Key Management Best Practices

When working with signers in production applications:

1. **Never store private keys or mnemonics in client-side code**
2. **Use hardware wallets or browser extensions when possible**
3. **Consider using secure enclave or TPM storage for server-side applications**
4. **Implement proper key rotation and revocation procedures**
5. **Use AES encryption for any stored key material**

## Common Issues and Solutions

### Chain Prefix Mismatch

If you encounter address verification errors, ensure you're using the correct chain prefix:

```ts
// For Cosmos Hub
const wallet = await DirectSecp256k1Wallet.generate('cosmos');

// For Osmosis
const wallet = await DirectSecp256k1Wallet.generate('osmo');
```

### Transaction Simulation

Before broadcasting transactions, it's recommended to simulate them first:

```ts
// Simulate the transaction to estimate gas
const gasEstimated = await stargateClient.simulate(address, msgs, memo);

// Add buffer for safety
const gasWithBuffer = Math.round(gasEstimated * 1.3);

// Create fee with estimated gas
const fee = {
    amount: coins(0, 'uatom'),
    gas: gasWithBuffer.toString()
};
```

## Related Documentation

- [Stargate Clients](./stargate-clients.md)
- [Composing Messages](./composing-messages.md)
- [Calculating Fees](./calculating-fees.md) 