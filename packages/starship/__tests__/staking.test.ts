/// <reference types="@types/jest" />

import './setup.test';

import { ChainInfo } from '@chain-registry/client';
import { Asset } from '@chain-registry/types';
import { generateMnemonic } from '../src/utils';
import { useChain } from 'starshipjs';
import { ICosmosQueryClient, DirectSigner, createCosmosQueryClient, Secp256k1HDWallet } from '@interchainjs/cosmos';
import { HDPath } from '@interchainjs/types';

import {
  MsgDelegate,
} from '../src/codegen/cosmos/staking/v1beta1/tx';
import {
  getBalance,
} from '../src/codegen/cosmos/bank/v1beta1/query.rpc.func';
import {
  getValidators,
  getDelegation,
} from '../src/codegen/cosmos/staking/v1beta1/query.rpc.func';
import {
  delegate
} from '../src/codegen/cosmos/staking/v1beta1/tx.rpc.func';
import BigNumber from 'bignumber.js';

describe('Staking tokens testing', () => {
  let wallet: Secp256k1HDWallet, denom: string, address: string;
  let signer: DirectSigner;
  let client: ICosmosQueryClient;
  let commonPrefix: string,
    chainInfo: ChainInfo,
    getCoin: () => Promise<Asset>,
    getRpcEndpoint: () => Promise<string>,
    creditFromFaucet: (address: string, denom?: string | null) => Promise<void>;

  // Variables used accross testcases
  let validatorAddress: string;
  let delegationAmount: string;
  let totalDelegationAmount: bigint;

  beforeAll(async () => {
    ({ chainInfo, getCoin, getRpcEndpoint, creditFromFaucet } =
      useChain('osmosis'));
    denom = (await getCoin()).base;
    commonPrefix = chainInfo?.chain?.bech32_prefix;

    // Set up query client
    const rpcEndpoint = await getRpcEndpoint();
    client = await createCosmosQueryClient(rpcEndpoint);

    const mnemonic = generateMnemonic();
    // Initialize wallet
    wallet = await Secp256k1HDWallet.fromMnemonic(mnemonic, {
      derivations: [{
        prefix: commonPrefix,
        hdPath: HDPath.cosmos().toString(),
      }]
    });
    address = (await wallet.getAccounts())[0].address!;

    // Create signer
    signer = new DirectSigner(await wallet.toOfflineDirectSigner(), {
      queryClient: client,
      chainId: 'osmosis-1',
      addressPrefix: commonPrefix
    });



    // Transfer osmosis and ibc tokens to address, send only osmo to address
    await creditFromFaucet(address);
  }, 200000);

  it('check address has tokens', async () => {
    const { balance } = await getBalance(client, {
      address,
      denom,
    });

    expect(balance!.amount).toEqual('10000000000');
  }, 10000);

  it('query validator address', async () => {
    const { validators } = await getValidators(client, {
      status: "BOND_STATUS_BONDED",
    });
    let allValidators = validators;
    if (validators.length > 1) {
      allValidators = validators.sort((a, b) =>
        new BigNumber(b.tokens).minus(new BigNumber(a.tokens)).toNumber()
      );
    }

    expect(allValidators.length).toBeGreaterThan(0);

    // set validator address to the first one
    validatorAddress = allValidators[0].operatorAddress;
  });

  it('stake tokens to genesis validator default signing mode', async () => {
    const { balance } = await getBalance(client, {
      address,
      denom,
    });

    // Stake 1/10 of the tokens
    // eslint-disable-next-line no-undef
    delegationAmount = (BigInt(balance!.amount) / BigInt(10)).toString();
    totalDelegationAmount = BigInt(delegationAmount);

    const msgDelegate = MsgDelegate.fromPartial({
      delegatorAddress: address,
      validatorAddress: validatorAddress,
      amount: {
        amount: delegationAmount,
        denom: balance!.denom,
      },
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

    const result = await delegate(signer, address, msgDelegate, fee, "Stake tokens to genesis validator");

    try {
      await result.wait();
    } catch (err) {
      console.log(err);
    }
  });

  it('stake tokens to genesis validator direct signing mode', async () => {
    const { balance } = await getBalance(client, {
      address,
      denom,
    });

    // Stake 1/10 of the tokens
    // eslint-disable-next-line no-undef
    delegationAmount = (BigInt(balance!.amount) / BigInt(10)).toString();
    totalDelegationAmount = totalDelegationAmount + BigInt(delegationAmount);

    const msgDelegate = MsgDelegate.fromPartial({
      delegatorAddress: address,
      validatorAddress: validatorAddress,
      amount: {
        amount: delegationAmount,
        denom: balance!.denom,
      },
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

    const result = await delegate(signer, address, msgDelegate, fee, "Stake tokens to genesis validator");

    try {
      await result.wait();
    } catch (err) {
      console.log(err);
    }
  });

  it('stake tokens to genesis validator amino signing mode', async () => {
    const { balance } = await getBalance(client, {
      address,
      denom,
    });

    // Stake 1/10 of the tokens
    // eslint-disable-next-line no-undef
    delegationAmount = (BigInt(balance!.amount) / BigInt(10)).toString();
    totalDelegationAmount = totalDelegationAmount + BigInt(delegationAmount);

    const msgDelegate = MsgDelegate.fromPartial({
      delegatorAddress: address,
      validatorAddress: validatorAddress,
      amount: {
        amount: delegationAmount,
        denom: balance!.denom,
      },
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

    const result = await delegate(signer, address, msgDelegate, fee, "Stake tokens to genesis validator");

    try {
      await result.wait();
    } catch (err) {
      console.log(err);
    }
  });

  it('query delegation', async () => {
    const { delegationResponse } = await getDelegation(client, {
      delegatorAddr: address,
      validatorAddr: validatorAddress,
    });

    // Assert that the delegation amount is the set delegation amount
    // eslint-disable-next-line no-undef
    expect(BigInt(delegationResponse!.balance.amount)).toBeGreaterThan(
      BigInt(0)
    );
    expect(delegationResponse!.balance.amount).toEqual(totalDelegationAmount.toString());
    expect(delegationResponse!.balance.denom).toEqual(denom);
  });
});