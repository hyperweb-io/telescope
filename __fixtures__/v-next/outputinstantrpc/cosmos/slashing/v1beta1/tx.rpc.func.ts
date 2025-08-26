import { buildTx } from "../../../helper-func-types";
import { MsgUnjail, MsgUnjailSDKType, MsgUnjailResponse, MsgUnjailResponseSDKType } from "./tx";
/**
 * Unjail defines a method for unjailing a jailed validator, thus returning
 * them into the bonded validator set, so they can begin receiving provisions
 * and rewards again.
 * @name unjail
 * @package cosmos.slashing.v1beta1
 * @see proto service: cosmos.slashing.v1beta1.Unjail
 */
export const unjail = buildTx<MsgUnjail>({
  msg: MsgUnjail
});