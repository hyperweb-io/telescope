import { buildTx } from "../../../helper-func-types";
import { MsgSend } from "./tx";
/**
 * Send defines a method to send a nft from one account to another account.
 * @name send
 * @package cosmos.nft.v1beta1
 * @see proto service: cosmos.nft.v1beta1.Send
 */
export const send = buildTx<MsgSend>({
  msg: MsgSend
});