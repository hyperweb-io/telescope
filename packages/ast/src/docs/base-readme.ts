interface ReadmeArgs {
    imgSrc: string;
    description: string;
    libName: string;
    libPrettyName: string;
    baseModule: string;
    exampleAddr: string;
    signingBaseClient: string;
    chainName: string;
    denom: string;
}

const replaceChars = (str: string) => {
    return str.split(' ').map(s => {
        return s.replace(/\W/g, '')
    }).join('-').toLowerCase();
};

export const readme = ({ imgSrc, description, libName, libPrettyName, baseModule, exampleAddr, signingBaseClient, chainName, denom }: ReadmeArgs) => {
    return `
# ${libPrettyName}

<p align="center">
    <img src="${imgSrc}" width="80"><br />
    ${description}
</p>


## install

\`\`\`sh
npm install ${libName}
\`\`\`
## Table of contents

- [${libPrettyName}](#${replaceChars(libName)})
    - [Install](#install)
    - [Table of contents](#table-of-contents)
- [Usage](#usage)
    - [RPC Clients](#rpc-clients)
    - [Composing Messages](#composing-messages)
        - ${baseModule}
        - Cosmos, CosmWasm, and IBC
            - [CosmWasm](#cosmwasm-messages)
            - [IBC](#ibc-messages)
            - [Cosmos](#cosmos-messages)
    - [Tree-Shakable Hooks](#tree-shakable-hooks)
        - [React Hooks](#react-hooks)
        - [Vue Hooks](#vue-hooks)
- [Wallets and Signers](#connecting-with-wallets-and-signing-messages)
    - [Stargate Client](#initializing-the-stargate-client)
    - [Creating Signers](#creating-signers)
    - [Broadcasting Messages](#broadcasting-messages)
- [Advanced Usage](#advanced-usage)
- [Developing](#developing)
- [Credits](#credits)

## Usage

### RPC Clients

\`\`\`js
import { ${baseModule} } from '${libName}';

const { createRPCQueryClient } = ${baseModule}.ClientFactory; 
const client = await createRPCQueryClient({ rpcEndpoint: RPC_ENDPOINT });

// now you can query the cosmos modules
const balance = await client.cosmos.bank.v1beta1
    .allBalances({ address: '${exampleAddr}' });

// you can also query the ${baseModule} modules
const balances = await client.${baseModule}.exchange.v1beta1
    .exchangeBalances()
\`\`\`

### gRPC-web Clients

\`\`\`js
import { ${baseModule} } from '${libName}';

const { createGrpcWebClient } = ${baseModule}.ClientFactory; 
const client = await createGrpcWebClient({ grpcWebEndpoint: RPC_ENDPOINT });

// now you can query the cosmos modules
const balance = await client.cosmos.bank.v1beta1
    .allBalances({ address: '${exampleAddr}' });

// you can also query the ${baseModule} modules
const balances = await client.${baseModule}.exchange.v1beta1
    .exchangeBalances()
\`\`\`

### Composing Messages

Import the \`${baseModule}\` object from \`${libName}\`. 

\`\`\`js
import { ${baseModule} } from '${libName}';

const {
    createSpotLimitOrder,
    createSpotMarketOrder,
    deposit
} = ${baseModule}.exchange.v1beta1.MessageComposer.withTypeUrl;
\`\`\`

#### Auction Messages

\`\`\`js
const {
    bid
} = ${baseModule}.auction.v1beta1.MessageComposer.withTypeUrl;
\`\`\`

#### CosmWasm Messages

\`\`\`js
import { cosmwasm } from "${libName}";

const {
    clearAdmin,
    executeContract,
    instantiateContract,
    migrateContract,
    storeCode,
    updateAdmin
} = cosmwasm.wasm.v1.MessageComposer.withTypeUrl;
\`\`\`

#### IBC Messages

\`\`\`js
import { ibc } from '${libName}';

const {
    transfer
} = ibc.applications.transfer.v1.MessageComposer.withTypeUrl
\`\`\`

#### Cosmos Messages

\`\`\`js
import { cosmos } from '${libName}';

const {
    fundCommunityPool,
    setWithdrawAddress,
    withdrawDelegatorReward,
    withdrawValidatorCommission
} = cosmos.distribution.v1beta1.MessageComposer.fromPartial;

const {
    multiSend,
    send
} = cosmos.bank.v1beta1.MessageComposer.fromPartial;

const {
    beginRedelegate,
    createValidator,
    delegate,
    editValidator,
    undelegate
} = cosmos.staking.v1beta1.MessageComposer.fromPartial;

const {
    deposit,
    submitProposal,
    vote,
    voteWeighted
} = cosmos.gov.v1beta1.MessageComposer.fromPartial;
\`\`\`

### Tree-Shakable Hooks

Tree-shakable hooks allow you to import only the specific hooks you need, reducing bundle size and improving application performance. Telescope supports both React and Vue frameworks.

#### React Hooks

To use React hooks, enable them in your Telescope configuration:

\`\`\`js
module.exports = {
  helperFunctions: {
    enabled: true,
    hooks: {
      react: true
    }
  }
}
\`\`\`

Then import the hooks directly from the generated files:

\`\`\`js
import { useGetBalance } from '@interchainjs/react/cosmos/bank/v1beta1/query.rpc.react';
import { useSend } from '@interchainjs/react/cosmos/bank/v1beta1/tx.rpc.react';

function BalanceComponent() {
  const { data, isLoading, error } = useGetBalance({
    request: {
      address: '${exampleAddr}'
    },
    clientResolver: "https://rpc.cosmos.directory/${baseModule}",
    options: {
      enabled: true,
    }
  });
  
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  
  return <div>Balance: {JSON.stringify(data)}</div>;
}
\`\`\`

#### Vue Hooks

To use Vue hooks, enable them in your Telescope configuration:

\`\`\`js
module.exports = {
  helperFunctions: {
    enabled: true,
    hooks: {
      vue: true
    }
  }
}
\`\`\`

Then import the hooks in your Vue components:

\`\`\`vue
<script setup>
import { ref, computed } from 'vue';
import { useGetBalance } from '@interchainjs/vue/cosmos/bank/v1beta1/query.rpc.vue';

const address = ref('${exampleAddr}');
const request = computed(() => ({
  address: address.value
}));

const {
  data,
  isLoading,
  error
} = useGetBalance({
  request,
  clientResolver: 'https://rpc.cosmos.directory/${baseModule}',
  options: {
    enabled: true,
  }
});
</script>

<template>
  <div v-if="isLoading">Loading...</div>
  <div v-else-if="error">Error: {{ error.message }}</div>
  <div v-else>Balance: {{ JSON.stringify(data) }}</div>
</template>
\`\`\`

## Connecting with Wallets and Signing Messages

⚡️ For web interfaces, we recommend using [cosmos-kit](https://github.com/hyperweb-io/cosmos-kit). Continue below to see how to manually construct signers and clients.

Here are the docs on [creating signers](https://github.com/hyperweb-io/cosmos-kit/tree/main/packages/react#signing-clients) in cosmos-kit that can be used with Keplr and other wallets.

### Initializing the Stargate Client

Use \`${signingBaseClient}\` to get your \`SigningStargateClient\`, with the proto/amino messages full-loaded. No need to manually add amino types, just require and initialize the client:

\`\`\`js
import { ${signingBaseClient} } from '${libName}';

const stargateClient = await ${signingBaseClient}({
    rpcEndpoint,
    signer // OfflineSigner
});
\`\`\`
### Creating Signers

To broadcast messages, you can create signers with a variety of options:

* [cosmos-kit](https://github.com/hyperweb-io/cosmos-kit/tree/main/packages/react#signing-clients) (recommended)
* [keplr](https://docs.keplr.app/api/cosmjs.html)
* [cosmjs](https://gist.github.com/webmaster128/8444d42a7eceeda2544c8a59fbd7e1d9)
### Amino Signer

Likely you'll want to use the Amino, so unless you need proto, you should use this one:

\`\`\`js
import { getOfflineSignerAmino as getOfflineSigner } from 'cosmjs-utils';
\`\`\`
### Proto Signer

\`\`\`js
import { getOfflineSignerProto as getOfflineSigner } from 'cosmjs-utils';
\`\`\`

WARNING: NOT RECOMMENDED TO USE PLAIN-TEXT MNEMONICS. Please take care of your security and use best practices such as AES encryption and/or methods from 12factor applications.

\`\`\`js
import { chains } from 'chain-registry';

const mnemonic =
    'unfold client turtle either pilot stock floor glow toward bullet car science';
    const chain = chains.find(({ chain_name }) => chain_name === '${chainName}');
    const signer = await getOfflineSigner({
    mnemonic,
    chain
    });
\`\`\`
### Broadcasting Messages

Now that you have your \`stargateClient\`, you can broadcast messages:

\`\`\`js
const { send } = cosmos.bank.v1beta1.MessageComposer.withTypeUrl;

const msg = send({
    amount: [
    {
        denom: '${denom}',
        amount: '1000'
    }
    ],
    toAddress: address,
    fromAddress: address
});

const fee: StdFee = {
    amount: [
    {
        denom: '${denom}',
        amount: '864'
    }
    ],
    gas: '86364' // this may need to be adjusted
};
const response = await stargateClient.signAndBroadcast(address, [msg], fee);
\`\`\`

If you create gRPC-web client instead of RPC client, you can sign it using stargateSigner and broadcast it as following

\`\`\`
const signed_tx = await signClient.sign('address', [msg], fee, 'gRPC-web memo', signerData);
    console.log(signed_tx);
    const txRawBytes = Uint8Array.from(TxRaw.encode(signed_tx).finish());
    // uncomment the following snippet to send transaction
    const res = await client.cosmos.tx.v1beta1.broadcastTx(  
      {
        txBytes: txRawBytes,
        //can be replace with BroadcastMode interface as enum
        mode: 1
      }
    )
    
    console.log(res);
\`\`\`

Link to a working demo: https://github.com/hoangdv2429/grpc-web-js

## Advanced Usage

### Complete Message Reference

Below is a comprehensive list of all available messages by module, indicating whether they can be broadcast (Msg) or queried (Query).

#### ${baseModule} Messages

##### Broadcast Messages (Msg)

These messages can be sent to the blockchain:

\`\`\`js
// Import the MessageComposer
import { ${baseModule} } from '${libName}';

// Access broadcast messages with withTypeUrl
const {
    createSpotLimitOrder,
    createSpotMarketOrder,
    deposit
} = ${baseModule}.exchange.v1beta1.MessageComposer.withTypeUrl;

import { useSend } from '@interchainjs/react/${baseModule}/exchange/v1beta1/tx.rpc.react';

const { mutate } = useSend({
  clientResolver: signingClient,
  options: {}
});

mutate({
  signerAddress: address,
  message: {
  },
  fee: 'auto',
  memo: ''
});
\`\`\`

##### Query Messages (Query)

These messages query blockchain state without sending transactions:

\`\`\`js
// Import the client factory
import { ${baseModule} } from '${libName}';

const { createRPCQueryClient } = ${baseModule}.ClientFactory;
const client = await createRPCQueryClient({ rpcEndpoint: RPC_ENDPOINT });

const result = await client.${baseModule}.exchange.v1beta1.exchangeBalances();

import { useGetExchangeBalances } from '@interchainjs/react/${baseModule}/exchange/v1beta1/query.rpc.react';

const { data, isLoading } = useGetExchangeBalances({
  request: {},
  clientResolver: "https://rpc.cosmos.directory/${baseModule}",
  options: {
    enabled: true
  }
});
\`\`\`

#### Cosmos Messages

##### Broadcast Messages (Msg)

\`\`\`js
import { cosmos } from '${libName}';

const {
  multiSend,
  send
} = cosmos.bank.v1beta1.MessageComposer.withTypeUrl;

const {
  fundCommunityPool,
  setWithdrawAddress,
  withdrawDelegatorReward,
  withdrawValidatorCommission
} = cosmos.distribution.v1beta1.MessageComposer.withTypeUrl;

const {
  beginRedelegate,
  createValidator,
  delegate,
  editValidator,
  undelegate
} = cosmos.staking.v1beta1.MessageComposer.withTypeUrl;

const {
  deposit,
  submitProposal,
  vote,
  voteWeighted
} = cosmos.gov.v1beta1.MessageComposer.withTypeUrl;

import { useSend } from '@interchainjs/react/cosmos/bank/v1beta1/tx.rpc.react';
\`\`\`

##### Query Messages (Query)

\`\`\`js
const client = await createRPCQueryClient({ rpcEndpoint: RPC_ENDPOINT });

const balance = await client.cosmos.bank.v1beta1.balance({ address: '${exampleAddr}', denom: '${denom}' });
const allBalances = await client.cosmos.bank.v1beta1.allBalances({ address: '${exampleAddr}' });

const validators = await client.cosmos.staking.v1beta1.validators({});
const delegation = await client.cosmos.staking.v1beta1.delegation({ delegatorAddr: '${exampleAddr}', validatorAddr: 'validatorAddress' });

import { useGetBalance, useGetAllBalances } from '@interchainjs/react/cosmos/bank/v1beta1/query.rpc.react';
\`\`\`

If you want to manually construct a stargate client

\`\`\`js
import { OfflineSigner, GeneratedType, Registry } from "@cosmjs/proto-signing";
import { AminoTypes, SigningStargateClient } from "@cosmjs/stargate";

import { 
    cosmosAminoConverters,
    cosmosProtoRegistry,
    cosmwasmAminoConverters,
    cosmwasmProtoRegistry,
    ibcProtoRegistry,
    ibcAminoConverters,
    ${baseModule}AminoConverters,
    ${baseModule}ProtoRegistry
} from '${libName}';

const signer: OfflineSigner = /* create your signer (see above)  */
const rpcEndpoint = 'https://rpc.cosmos.directory/${baseModule}'; // or another URL

const protoRegistry: ReadonlyArray<[string, GeneratedType]> = [
    ...cosmosProtoRegistry,
    ...cosmwasmProtoRegistry,
    ...ibcProtoRegistry,
    ...${baseModule}ProtoRegistry
];

const aminoConverters = {
    ...cosmosAminoConverters,
    ...cosmwasmAminoConverters,
    ...ibcAminoConverters,
    ...${baseModule}AminoConverters
};

const registry = new Registry(protoRegistry);
const aminoTypes = new AminoTypes(aminoConverters);

const stargateClient = await SigningStargateClient.connectWithSigner(rpcEndpoint, signer, {
    registry,
    aminoTypes
});
\`\`\`

## Developing

When first cloning the repo:

\`\`\`
yarn
yarn build
\`\`\`

### Codegen

Contract schemas live in \`./contracts\`, and protos in \`./proto\`. Look inside of \`scripts/codegen.js\` and configure the settings for bundling your SDK and contracts into \`${libName}\`:

\`\`\`
yarn codegen
\`\`\`

### Publishing

Build the types and then publish:

\`\`\`
yarn build:ts
yarn publish
\`\`\`

## Credits

🛠 Built by Cosmology — if you like our tools, please consider delegating to [our validator ⚛️](https://cosmology.zone/validator)

Code built with the help of these related projects:

* [@cosmwasm/ts-codegen](https://github.com/CosmWasm/ts-codegen) for generated CosmWasm contract Typescript classes
* [telescope](https://github.com/hyperweb-io/telescope) a "babel for the Cosmos", Telescope is a TypeScript Transpiler for Cosmos Protobufs.
* [cosmos-kit](https://github.com/hyperweb-io/cosmos-kit) A wallet connector for the Cosmos ⚛️

    `;
}
