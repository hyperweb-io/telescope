import { buildTx } from "../../../helper-func-types.js";
import { MsgVerifyInvariant, MsgVerifyInvariantSDKType, MsgVerifyInvariantResponse, MsgVerifyInvariantResponseSDKType } from "./tx.js";
/**
 * VerifyInvariant defines a method to verify a particular invariance.
 * @name verifyInvariant
 * @package cosmos.crisis.v1beta1
 * @see proto service: cosmos.crisis.v1beta1.VerifyInvariant
 */
export const verifyInvariant = buildTx<MsgVerifyInvariant>({
  msg: MsgVerifyInvariant
});