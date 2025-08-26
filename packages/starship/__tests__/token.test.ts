/// <reference types="@types/jest" />

import './setup.test';

import { ChainInfo } from '@chain-registry/client';
import { Asset } from '@chain-registry/types';
import { generateMnemonic } from '../src/utils';
import { ICosmosQueryClient, AminoSigner, DirectSigner, OfflineDirectSigner, createCosmosQueryClient, Secp256k1HDWallet } from '@interchainjs/cosmos';
import { HDPath } from '@interchainjs/types';
import {
  getBalance,
  getAllBalances,
} from '../src/codegen/cosmos/bank/v1beta1/query.rpc.func';
import {
  send,
} from '../src/codegen/cosmos/bank/v1beta1/tx.rpc.func';
import {
  MsgSend,
} from '../src/codegen/cosmos/bank/v1beta1/tx';
import {
  MsgTransfer,
} from '../src/codegen/ibc/applications/transfer/v1/tx';
import {
  transfer
} from '../src/codegen/ibc/applications/transfer/v1/tx.rpc.func';

import { useChain } from 'starshipjs';
// @ts-ignore
import WebSocket from 'ws';

describe('Token transfers', () => {
  let wallet: Secp256k1HDWallet;
  let client: ICosmosQueryClient;
  let signer: DirectSigner;
  let endpoint: string;
  let protoSigner: OfflineDirectSigner,
    denom: string,
    address: string,
    address2: string,
    address3: string,
    address4: string;
  let commonPrefix: string,
    chainInfo: ChainInfo,
    getCoin: () => Promise<Asset>,
    getRpcEndpoint: () => Promise<string>,
    creditFromFaucet: (address: string, denom?: string | null) => Promise<void>;

  beforeAll(async () => {
    ({ chainInfo, getCoin, getRpcEndpoint, creditFromFaucet } =
      useChain('osmosis'));
    endpoint = await getRpcEndpoint();
    client = await createCosmosQueryClient(endpoint);

    denom = (await getCoin()).base;
    commonPrefix = chainInfo?.chain?.bech32_prefix;

    const mnemonic = generateMnemonic();
    // Initialize wallet with 4 accounts for testing
    wallet = await Secp256k1HDWallet.fromMnemonic(
      mnemonic,
      {
        derivations: [0, 1, 2, 3].map((i) => ({
          prefix: commonPrefix,
          hdPath: HDPath.cosmos(0, 0, i).toString(),
        }))
      }
    );
    protoSigner = await wallet.toOfflineDirectSigner();
    const accounts = await protoSigner.getAccounts();
    address = accounts[0].address;   // For direct mode test
    address2 = accounts[1].address;  // Recipient for direct mode test
    address3 = accounts[2].address;  // For amino mode test
    address4 = accounts[3].address;  // Recipient for amino mode test

    // Fund both sender addresses
    await creditFromFaucet(address);
    await creditFromFaucet(address3);
  }, 200000);

  it('direct mode: send osmosis token to address', async () => {
    // Use wallet directly as it implements OfflineDirectSigner interface
    signer = new DirectSigner(protoSigner, {
      queryClient: client,
      chainId: 'osmosis-1',
      addressPrefix: commonPrefix
    });




    const fee = {
      amount: [
        {
          denom,
          amount: '100000',
        },
      ],
      gas: '550000',
    };

    const token = {
      amount: '10000000',
      denom,
    };

    try {

      // Create a proper MsgSend message - use correct field names
      const msgSend = MsgSend.fromPartial({
        fromAddress: address,
        toAddress: address2,
        amount: [token]
      });

      const result = await send(signer, address, msgSend, fee, 'send tokens test');

      // Wait for transaction to be confirmed
      try {
        await result.wait();
      } catch (err) {
        console.log(err);
      }

      const { balance: balance2 } = await getBalance(endpoint, { address: address2, denom });

      expect(balance2!.amount).toEqual(token.amount);
      expect(balance2!.denom).toEqual(denom);
    } catch (error) {
      console.error('Error sending tokens:', error);
      throw error;
    }
  }, 100000);

  it('monitor osmosis token transfer via WebSocket events', async () => {
    // Initialize the signer for this test (similar to direct mode test)
    signer = new DirectSigner(protoSigner, {
      queryClient: client,
      chainId: 'osmosis-1',
      addressPrefix: commonPrefix
    });

    // Convert HTTP RPC endpoint to WebSocket endpoint
    const rpcEndpoint = await getRpcEndpoint();
    const wsEndpoint = rpcEndpoint.replace('http', 'ws') + '/websocket';

    // Use raw WebSocket approach (similar to the old test) to work around WebSocket client issues
    const ws = new WebSocket(wsEndpoint);

    let eventReceived = false;
    let receivedEvent: any = null;

    // Set up WebSocket connection and subscription
    const wsConnectionPromise = new Promise<void>((resolve, reject) => {
      const timeoutId = setTimeout(() => {
        reject(new Error('Timeout waiting for WebSocket connection'));
      }, 10000);

      ws.on('open', () => {
        clearTimeout(timeoutId);
        console.log('Raw WebSocket connected');

        // Subscribe to Tx events for the recipient address
        const subscribeMsg = {
          jsonrpc: '2.0',
          id: 'tx-subscribe',
          method: 'subscribe',
          params: {
            query: `tm.event='Tx' AND transfer.recipient='${address2}'`
          }
        };

        console.log('Sending subscription message:', JSON.stringify(subscribeMsg));
        ws.send(JSON.stringify(subscribeMsg));

        // Wait a bit for subscription to be processed, then resolve
        setTimeout(() => {
          resolve();
        }, 1000);
      });

      ws.on('error', (error) => {
        clearTimeout(timeoutId);
        console.error('WebSocket error:', error);
        reject(error);
      });
    });

    // Set up message handler for subscription events
    ws.on('message', (data) => {
      try {
        const response = JSON.parse(data.toString());
        console.log('Received WebSocket message:', response);

        // Check if this is a subscription event with transaction data
        if (response.result && response.result.events && !eventReceived) {
          console.log('Found transaction event!');
          eventReceived = true;
          receivedEvent = response;
        }
      } catch (error) {
        console.error('Error parsing WebSocket message:', error);
      }
    });

    // Wait for WebSocket to be ready and subscription to be set up
    await wsConnectionPromise;

    // Setup fees and token for the transaction
    const fee = {
      amount: [
        {
          denom,
          amount: '100000',
        },
      ],
      gas: '550000',
    };

    const token = {
      amount: '5000000', // Different amount to distinguish from other tests
      denom,
    };

    try {
      // Send the transaction using the existing signer
      console.log('Sending transaction from', address, 'to', address2, 'amount:', token.amount);
      const msgSend = MsgSend.fromPartial({
        fromAddress: address,
        toAddress: address2,
        amount: [token]
      });

      const result = await send(signer, address, msgSend, fee, 'websocket test transaction');
      console.log('Transaction sent, waiting for event...');

      // Wait for the WebSocket event (with a timeout)
      const txEventPromise = new Promise<any>((resolve) => {
        const checkInterval = setInterval(() => {
          if (eventReceived) {
            clearInterval(checkInterval);
            resolve(receivedEvent);
          }
        }, 100);

        // Timeout after 20 seconds
        setTimeout(() => {
          clearInterval(checkInterval);
          resolve(null);
        }, 20000);
      });

      const txEvent = await txEventPromise;

      // Verify WebSocket event was received
      expect(txEvent).not.toBeNull();
      expect(txEvent).toBeDefined();

      // Verify the event structure (similar to old test)
      expect(txEvent.result).toBeDefined();
      expect(txEvent.result.events).toBeDefined();

      // Verify transfer event details
      const events = txEvent.result.events;
      expect(events['transfer.recipient']).toContain(address2);
      expect(events['transfer.amount']).toContain(`${token.amount}${denom}`);
      expect(events['tm.event']).toContain('Tx');

      // Verify the transaction was successful by checking balance
      const { balance } = await getBalance(client, { address: address2, denom });

      // The balance should include the transferred amount
      // Note: We can't predict the exact final balance since other tests may have run
      // but we can verify the balance is at least the amount we transferred
      expect(BigInt(balance!.amount)).toBeGreaterThanOrEqual(BigInt(token.amount));
      expect(balance!.denom).toEqual(denom);

    } catch (error) {
      console.error('Error in WebSocket monitoring test:', error);
      throw error;
    } finally {
      // Clean up the WebSocket connection
      try {
        if (ws.readyState === WebSocket.OPEN || ws.readyState === WebSocket.CONNECTING) {
          ws.close();
        }
        // Wait a bit for the connection to close
        await new Promise((resolve) => setTimeout(resolve, 100));
      } catch (cleanupError) {
        console.warn('Error during cleanup:', cleanupError);
      }
    }
  }, 30000);

  it('amino mode: send osmosis token to address', async () => {
    // Use wallet.toOfflineAminoSigner() to get proper offline signer with cached account data
    const aminoOfflineSigner = await wallet.toOfflineAminoSigner();
    const aminoSigner: AminoSigner = new AminoSigner(aminoOfflineSigner, {
      queryClient: client,
      chainId: 'osmosis-1',
      addressPrefix: commonPrefix
    });



    const fee = {
      amount: [
        {
          denom,
          amount: '100000',
        },
      ],
      gas: '550000',
    };

    const token = {
      amount: '10000000',
      denom,
    };

    try {
      // Create a proper MsgSend message - use different addresses for amino test
      const msgSend = MsgSend.fromPartial({
        fromAddress: address3,  // Use different sender address
        toAddress: address4,    // Use different recipient address
        amount: [token]
      });

      const result = await send(aminoSigner, address3, msgSend, fee, 'amino send tokens test');

      // Wait for transaction to be confirmed
      try {
        await result.wait();
      } catch (err) {
        console.log(err);
      }

      const { balance: balance4 } = await getBalance(client, { address: address4, denom });

      expect(balance4!.amount).toEqual(token.amount);
      expect(balance4!.denom).toEqual(denom);
    } catch (error) {
      console.error('Error sending tokens in amino mode:', error);
      throw error;
    }
  }, 100000);

  it('send ibc osmo tokens to address on cosmos chain', async () => {
    const { chainInfo: cosmosChainInfo, getRpcEndpoint: getCosmosRpcEndpoint } =
      useChain('cosmoshub');

    const cosmosPrefix = cosmosChainInfo?.chain?.bech32_prefix;
    const cosmosRpcEndpoint = await getCosmosRpcEndpoint();

    const cosmosClient = await createCosmosQueryClient(cosmosRpcEndpoint);

    // Initialize wallet address for cosmos chain
    const cosmosWallet = await Secp256k1HDWallet.fromMnemonic(
      generateMnemonic(),
      {
        derivations: [0].map((i) => ({
          prefix: cosmosPrefix,
          hdPath: HDPath.cosmos(0, 0, i).toString(),
        }))
      }
    );
    const cosmosAddress = (await cosmosWallet.getAccounts())[0].address!;

    const ibcInfos = chainInfo.fetcher.getChainIbcData(
      chainInfo.chain.chain_name
    );
    const sourceIbcInfo = ibcInfos.find(
      (i) =>
        i.chain_1.chain_name === chainInfo.chain.chain_name &&
        i.chain_2.chain_name === cosmosChainInfo.chain.chain_name
    );

    expect(sourceIbcInfo).toBeTruthy();

    const { port_id: sourcePort, channel_id: sourceChannel } =
      sourceIbcInfo!.channels[0].chain_1;

    // Transfer osmosis tokens via IBC to cosmos chain
    const currentTime = Math.floor(Date.now()) * 1000000;
    const timeoutTime = currentTime + 3600 * 1000000000; // 1 hour

    const fee = {
      amount: [
        {
          denom,
          amount: '100000',
        },
      ],
      gas: '550000',
    };

    const token = {
      denom,
      amount: '10000000',
    };

    // send ibc tokens
    const resp = await transfer(
      signer,
      address,
      MsgTransfer.fromPartial({
        sourcePort,
        sourceChannel,
        token,
        sender: address,
        receiver: cosmosAddress,
        timeoutHeight: undefined,
        timeoutTimestamp: BigInt(timeoutTime),
      }),
      fee,
      ''
    );

    // Wait for transaction to be confirmed
    try {
      await resp.wait();
    } catch (err) {
      console.log(err);
    }

    const { balances } = await getAllBalances(cosmosClient, {
      address: cosmosAddress,
    });

    // check balances
    expect(balances.length).toEqual(1);
    const ibcBalance = balances.find((balance) => {
      return balance.denom.startsWith('ibc/');
    });
    expect(ibcBalance!.amount).toEqual(token.amount);
    expect(ibcBalance!.denom).toContain('ibc/');

    // // check ibc denom trace of the same
    // const trace = await cosmosQueryClient.denomTrace({
    //   hash: ibcBalance!.denom.replace("ibc/", ""),
    // });
    // expect(trace.denomTrace.baseDenom).toEqual(denom);
  }, 40000);
});