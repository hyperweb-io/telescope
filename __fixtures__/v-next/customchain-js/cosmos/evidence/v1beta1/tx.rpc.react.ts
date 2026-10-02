import { buildUseMutation } from "../../../react-query";
import type { MsgSubmitEvidence } from "./tx";
import { submitEvidence } from "./tx.rpc.func";
/**
 * SubmitEvidence submits an arbitrary Evidence of misbehavior such as equivocation or
 * counterfactual signing.
 * @name useSubmitEvidence
 * @package cosmos.evidence.v1beta1
 * @see proto service: cosmos.evidence.v1beta1.SubmitEvidence
 */
export const useSubmitEvidence = buildUseMutation<MsgSubmitEvidence, Error>({
  builderMutationFn: submitEvidence
});