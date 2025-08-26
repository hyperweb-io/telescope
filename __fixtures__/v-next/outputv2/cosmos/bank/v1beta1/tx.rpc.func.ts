import { buildTx } from "../../../helper-func-types";
import { MsgSend, MsgMultiSend } from "./tx";
/**
 * Send defines a method for sending coins from one account to another account.
 * @name send
 * @package cosmos.bank.v1beta1
 * @see proto service: cosmos.bank.v1beta1.Send
 */
export const send = buildTx<MsgSend>({
  msg: MsgSend
});
/**
 * MultiSend defines a method for sending coins from some accounts to other accounts.
 * @name multiSend
 * @package cosmos.bank.v1beta1
 * @see proto service: cosmos.bank.v1beta1.MultiSend
 */
export const multiSend = buildTx<MsgMultiSend>({
  msg: MsgMultiSend
});