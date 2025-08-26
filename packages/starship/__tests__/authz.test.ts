import "./setup.test";

import { generateMnemonic } from "../src/utils";
import { useChain } from 'starshipjs';
import { ICosmosQueryClient, DirectSigner, createCosmosQueryClient } from '@interchainjs/cosmos';
import { Secp256k1HDWallet } from "@interchainjs/cosmos";
import { HDPath } from '@interchainjs/types';

import {
  GenericAuthorization,
  Grant,
} from "../src/codegen/cosmos/authz/v1beta1/authz";
import {
  MsgExec,
  MsgGrant,
  MsgRevoke,
} from "../src/codegen/cosmos/authz/v1beta1/tx";
import { SendAuthorization } from "../src/codegen/cosmos/bank/v1beta1/authz";
import { MsgVote } from "../src/codegen/cosmos/gov/v1beta1/tx";
import { MsgSend } from "../src/codegen/cosmos/bank/v1beta1/tx";

import { getBalance } from "../src/codegen/cosmos/bank/v1beta1/query.rpc.func";
import { getGranteeGrants } from "../src/codegen/cosmos/authz/v1beta1/query.rpc.func";
import { grant, exec, revoke } from "../src/codegen/cosmos/authz/v1beta1/tx.rpc.func";

const cosmosHdPath = "m/44'/118'/0'/0/0";

describe("Authz testing", () => {
  let wallet1: Secp256k1HDWallet, address1: string, denom: string;
  let wallet2: Secp256k1HDWallet, address2: string;
  let wallet3: Secp256k1HDWallet, address3: string;
  let signer1: DirectSigner, signer2: DirectSigner;
  let client: ICosmosQueryClient;
  let commonPrefix: string, chainInfo, getCoin, getRpcEndpoint: () => Promise<string>, creditFromFaucet;
  let expiration: Date;

  // Variables used accross testcases

  beforeAll(async () => {
    ({ chainInfo, getCoin, getRpcEndpoint, creditFromFaucet } =
      useChain("osmosis"));
    denom = (await getCoin()).base;
    commonPrefix = chainInfo?.chain?.bech32_prefix;

    // Set up query client
    const rpcEndpoint = await getRpcEndpoint();
    client = await createCosmosQueryClient(rpcEndpoint);

    // Initialize wallets
    wallet1 = await Secp256k1HDWallet.fromMnemonic(generateMnemonic(), {
      derivations: [{
        prefix: commonPrefix,
        hdPath: HDPath.cosmos().toString(),
      }]
    });
    address1 = (await wallet1.getAccounts())[0].address!;

    wallet2 = await Secp256k1HDWallet.fromMnemonic(generateMnemonic(), {
      derivations: [{
        prefix: commonPrefix,
        hdPath: HDPath.cosmos().toString(),
      }]
    });
    address2 = (await wallet2.getAccounts())[0].address!;

    wallet3 = await Secp256k1HDWallet.fromMnemonic(generateMnemonic(), {
      derivations: [{
        prefix: commonPrefix,
        hdPath: HDPath.cosmos().toString(),
      }]
    });
    address3 = (await wallet3.getAccounts())[0].address!;

    // Create signers
    signer1 = new DirectSigner(await wallet1.toOfflineDirectSigner(), {
      queryClient: client,
      chainId: 'osmosis-1',
      addressPrefix: commonPrefix
    });

    signer2 = new DirectSigner(await wallet2.toOfflineDirectSigner(), {
      queryClient: client,
      chainId: 'osmosis-1',
      addressPrefix: commonPrefix
    });



    // Transfer osmosis tokens to addresses
    await creditFromFaucet(address1);
    await creditFromFaucet(address2);
    await creditFromFaucet(address3);

    expiration = new Date();
    expiration.setDate(expiration.getDate() + 1);

    console.log(`address1: ${address1}, address2: ${address2}, address3: ${address3}, expiration: ${expiration}`)
  }, 200000);

  it("check address1 has tokens", async () => {
    const { balance } = await getBalance(client, {
      address: address1,
      denom,
    });

    expect(balance?.amount).toEqual("10000000000");
  }, 200000);

  it("check address2 has tokens", async () => {
    const { balance } = await getBalance(client, {
      address: address2,
      denom,
    });

    expect(balance?.amount).toEqual("10000000000");
  }, 200000);

  it("check address3 has tokens", async () => {
    const { balance } = await getBalance(client, {
      address: address3,
      denom,
    });

    expect(balance?.amount).toEqual("10000000000");
  }, 200000);

  it("grant address2 Send Auth with limits", async () => {
    const fee = {
      amount: [
        {
          denom,
          amount: "100000",
        },
      ],
      gas: "550000",
    };

    const msgGrant = MsgGrant.fromPartial({
      granter: address1,
      grantee: address2,
      grant: Grant.fromPartial({
        authorization: SendAuthorization.fromPartial({
          spendLimit: [
            {
              denom: denom,
              amount: "1000000",
            },
          ],
        }),
        expiration: expiration,
      }),
    });


    const result = await grant(signer1, address1, msgGrant, fee, "grant address2 Send Auth with limits");

    try {
      await result.wait();
    } catch (err) {
      console.log(err);
    }

    const authsResults = await getGranteeGrants(client, {
      grantee: address2,
    });

    expect(authsResults?.grants?.length).toBeGreaterThan(0);

    const auth = authsResults.grants[0].authorization;

    expect(SendAuthorization.is(auth)).toBeTruthy();

    if (SendAuthorization.is(auth)) {
      expect(auth.spendLimit[0].amount).toBe("1000000");
    }
  }, 200000);

  it("grant address3 Generic Send Auth", async () => {
    const fee = {
      amount: [
        {
          denom,
          amount: "100000",
        },
      ],
      gas: "550000",
    };

    const msgGrant = MsgGrant.fromPartial({
      granter: address1,
      grantee: address3,
      grant: Grant.fromPartial({
        authorization: GenericAuthorization.fromPartial({
          msg: MsgSend.typeUrl,
        }),
        expiration: expiration,
      }),
    });

    const result = await grant(signer1, address1, msgGrant, fee, "grant address3 Generic Send Auth");

    try {
      await result.wait();
    } catch (err) {
      console.log(err);
    }

    const authsResults = await getGranteeGrants(client, {
      grantee: address3,
    });

    expect(authsResults?.grants?.length).toBeGreaterThan(0);

    const auth = authsResults.grants[0].authorization;

    expect(GenericAuthorization.is(auth)).toBeTruthy();

    if (GenericAuthorization.is(auth)) {
      expect(auth.msg).toBe(MsgSend.typeUrl);
    }
  }, 200000);

  it("grant address2 Generic Vote Auth", async () => {
    const fee = {
      amount: [
        {
          denom,
          amount: "100000",
        },
      ],
      gas: "550000",
    };

    const msgGrant = MsgGrant.fromPartial({
      granter: address1,
      grantee: address2,
      grant: Grant.fromPartial({
        authorization: GenericAuthorization.fromPartial({
          msg: MsgVote.typeUrl,
        }),
        expiration: expiration,
      }),
    });

    const result = await grant(signer1, address1, msgGrant, fee, "grant address2 Generic Vote Auth");

    try {
      await result.wait();
    } catch (err) {
      console.log(err);
    }

    const authsResults = await getGranteeGrants(client, {
      grantee: address2,
    });

    expect(authsResults?.grants?.length).toBeGreaterThan(0);

    const auth = authsResults.grants[1].authorization;

    expect(GenericAuthorization.is(auth)).toBeTruthy();

    if (GenericAuthorization.is(auth)) {
      expect(auth.msg).toBe(MsgVote.typeUrl);
    }
  }, 200000);

  it("exec address2 send", async () => {
    const fee = {
      amount: [
        {
          denom,
          amount: "100000",
        },
      ],
      gas: "550000",
    };

    const msgExec = MsgExec.fromPartial({
      grantee: address2,
      msgs: [
        MsgSend.toProtoMsg(
          MsgSend.fromPartial({
            fromAddress: address1,
            toAddress: address2,
            amount: [
              {
                denom,
                amount: "90000",
              },
            ],
          })
        ),
      ],
    });

    const result = await exec(signer2, address2, msgExec, fee, "exec address2 send");

    try {
      await result.wait();
    } catch (err) {
      console.log(err);
    }

    const { balance } = await getBalance(client, {
      address: address2,
      denom,
    });

    expect(balance?.amount).toEqual("9999990000"); // not 10000000000, due to fees deduction
  }, 2000000);

  it("revoke address2 vote auth", async () => {
    const fee = {
      amount: [
        {
          denom,
          amount: "100000",
        },
      ],
      gas: "550000",
    };

    const msgRevoke = MsgRevoke.fromPartial({
      granter: address1,
      grantee: address2,
      msgTypeUrl: MsgVote.typeUrl,
    });

    const result = await revoke(signer1, address1, msgRevoke, fee, "revoke address2 vote auth");

    try {
      await result.wait();
    } catch (err) {
      console.log(err);
    }

    const authsResults = await getGranteeGrants(client, {
      grantee: address2,
    });

    expect(authsResults?.grants?.length).toBe(1);

    const auth = authsResults.grants[0].authorization;

    expect(SendAuthorization.is(auth)).toBeTruthy();

    if (SendAuthorization.is(auth)) {
      expect(auth.spendLimit[0].amount).toBe("910000"); // not 1000000 due to fees
    }
  }, 200000);

  it("revoke address3 generic send auth", async () => {
    const fee = {
      amount: [
        {
          denom,
          amount: "100000",
        },
      ],
      gas: "550000",
    };

    const msgRevoke = MsgRevoke.fromPartial({
      granter: address1,
      grantee: address3,
      msgTypeUrl: MsgSend.typeUrl,
    });

    const result = await revoke(signer1, address1, msgRevoke, fee, "revoke address3 generic send auth");

    try {
      await result.wait();
    } catch (err) {
      console.log(err);
    }

    const authsResults = await getGranteeGrants(client, {
      grantee: address3,
    });

    expect(authsResults?.grants?.length).toBe(0);
  }, 200000);

  it("revoke address2 send auth", async () => {
    const fee = {
      amount: [
        {
          denom,
          amount: "100000",
        },
      ],
      gas: "550000",
    };

    const msgRevoke = MsgRevoke.fromPartial({
      granter: address1,
      grantee: address2,
      msgTypeUrl: MsgSend.typeUrl,
    });

    const result = await revoke(signer1, address1, msgRevoke, fee, "revoke address2 send auth");

    try {
      await result.wait();
    } catch (err) {
      console.log(err);
    }

    const authsResults = await getGranteeGrants(client, {
      grantee: address2,
    });

    expect(authsResults?.grants?.length).toBe(0);
  }, 200000);
});
