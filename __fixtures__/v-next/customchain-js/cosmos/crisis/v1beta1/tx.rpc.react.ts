import { buildUseMutation } from "../../../react-query";
import type { MsgVerifyInvariant } from "./tx";
import { verifyInvariant } from "./tx.rpc.func";
/**
 * VerifyInvariant defines a method to verify a particular invariance.
 * @name useVerifyInvariant
 * @package cosmos.crisis.v1beta1
 * @see proto service: cosmos.crisis.v1beta1.VerifyInvariant
 */
export const useVerifyInvariant = buildUseMutation<MsgVerifyInvariant, Error>({
  builderMutationFn: verifyInvariant
});