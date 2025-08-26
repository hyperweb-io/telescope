import { buildTx } from "../../../helper-func-types.js";
import { MsgSend, MsgSendSDKType, MsgSendResponse, MsgSendResponseSDKType } from "./tx.js";
/**
 * Send defines a method to send a nft from one account to another account.
 * @name send
 * @package cosmos.nft.v1beta1
 * @see proto service: cosmos.nft.v1beta1.Send
 */
export const send = buildTx<MsgSend>({
  msg: MsgSend
});