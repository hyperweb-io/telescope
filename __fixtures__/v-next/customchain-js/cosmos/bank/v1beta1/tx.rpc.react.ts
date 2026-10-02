import { buildUseMutation } from "../../../react-query";
import type { MsgSend, MsgMultiSend } from "./tx";
import { send, multiSend } from "./tx.rpc.func";
/**
 * Send defines a method for sending coins from one account to another account.
 * @name useSend
 * @package cosmos.bank.v1beta1
 * @see proto service: cosmos.bank.v1beta1.Send
 */
export const useSend = buildUseMutation<MsgSend, Error>({
  builderMutationFn: send
});
/**
 * MultiSend defines a method for sending coins from some accounts to other accounts.
 * @name useMultiSend
 * @package cosmos.bank.v1beta1
 * @see proto service: cosmos.bank.v1beta1.MultiSend
 */
export const useMultiSend = buildUseMutation<MsgMultiSend, Error>({
  builderMutationFn: multiSend
});