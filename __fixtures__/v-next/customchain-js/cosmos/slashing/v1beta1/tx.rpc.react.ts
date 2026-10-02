import { buildUseMutation } from "../../../react-query";
import type { MsgUnjail } from "./tx";
import { unjail } from "./tx.rpc.func";
/**
 * Unjail defines a method for unjailing a jailed validator, thus returning
 * them into the bonded validator set, so they can begin receiving provisions
 * and rewards again.
 * @name useUnjail
 * @package cosmos.slashing.v1beta1
 * @see proto service: cosmos.slashing.v1beta1.Unjail
 */
export const useUnjail = buildUseMutation<MsgUnjail, Error>({
  builderMutationFn: unjail
});