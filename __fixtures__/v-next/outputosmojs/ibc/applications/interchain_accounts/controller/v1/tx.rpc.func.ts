import { InterchainAccountPacketData, InterchainAccountPacketDataSDKType } from "../../v1/packet";
import { buildTx } from "../../../../../helper-func-types";
import { MsgRegisterInterchainAccount, MsgRegisterInterchainAccountSDKType, MsgRegisterInterchainAccountResponse, MsgRegisterInterchainAccountResponseSDKType, MsgSendTx, MsgSendTxSDKType, MsgSendTxResponse, MsgSendTxResponseSDKType } from "./tx";
/**
 * RegisterInterchainAccount defines a rpc handler for MsgRegisterInterchainAccount.
 * @name registerInterchainAccount
 * @package ibc.applications.interchain_accounts.controller.v1
 * @see proto service: ibc.applications.interchain_accounts.controller.v1.RegisterInterchainAccount
 */
export const registerInterchainAccount = buildTx<MsgRegisterInterchainAccount>({
  msg: MsgRegisterInterchainAccount
});
/**
 * SendTx defines a rpc handler for MsgSendTx.
 * @name sendTx
 * @package ibc.applications.interchain_accounts.controller.v1
 * @see proto service: ibc.applications.interchain_accounts.controller.v1.SendTx
 */
export const sendTx = buildTx<MsgSendTx>({
  msg: MsgSendTx
});