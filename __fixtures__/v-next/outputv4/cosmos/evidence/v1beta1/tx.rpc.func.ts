import { Any, AnySDKType } from "../../../google/protobuf/any.js";
import { buildTx } from "../../../helper-func-types.js";
import { MsgSubmitEvidence, MsgSubmitEvidenceSDKType, MsgSubmitEvidenceResponse, MsgSubmitEvidenceResponseSDKType } from "./tx.js";
/**
 * SubmitEvidence submits an arbitrary Evidence of misbehavior such as equivocation or
 * counterfactual signing.
 * @name submitEvidence
 * @package cosmos.evidence.v1beta1
 * @see proto service: cosmos.evidence.v1beta1.SubmitEvidence
 */
export const submitEvidence = buildTx<MsgSubmitEvidence>({
  msg: MsgSubmitEvidence
});