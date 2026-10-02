import { Coin, CoinSDKType } from "../../base/v1beta1/coin";
import { Input, InputSDKType, Output, OutputSDKType } from "./bank";
import { buildTx } from "../../../helper-func-types";
import { buildUseMutation } from "../../../react-query";
import { buildUseVueMutation } from "../../../vue-query";
import { type MsgSend, MsgSendSDKType, MsgSendResponse, MsgSendResponseSDKType, type MsgMultiSend, MsgMultiSendSDKType, MsgMultiSendResponse, MsgMultiSendResponseSDKType } from "./tx";
import { send, multiSend } from "./tx.rpc.func";
/**
 * Send defines a method for sending coins from one account to another account.
 * @name useSend
 * @package cosmos.bank.v1beta1
 * @see proto service: cosmos.bank.v1beta1.Send
 */
export const useSend = buildUseVueMutation<MsgSend, Error>({
  builderMutationFn: send
});
/**
 * MultiSend defines a method for sending coins from some accounts to other accounts.
 * @name useMultiSend
 * @package cosmos.bank.v1beta1
 * @see proto service: cosmos.bank.v1beta1.MultiSend
 */
export const useMultiSend = buildUseVueMutation<MsgMultiSend, Error>({
  builderMutationFn: multiSend
});