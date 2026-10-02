import { buildUseMutation } from "../../../react-query";
import type { MsgSend } from "./tx";
import { send } from "./tx.rpc.func";
/**
 * Send defines a method to send a nft from one account to another account.
 * @name useSend
 * @package cosmos.nft.v1beta1
 * @see proto service: cosmos.nft.v1beta1.Send
 */
export const useSend = buildUseMutation<MsgSend, Error>({
  builderMutationFn: send
});