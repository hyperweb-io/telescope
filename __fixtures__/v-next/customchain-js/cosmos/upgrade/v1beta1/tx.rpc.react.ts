import { buildUseMutation } from "../../../react-query";
import type { MsgSoftwareUpgrade, MsgCancelUpgrade } from "./tx";
import { softwareUpgrade, cancelUpgrade } from "./tx.rpc.func";
/**
 * SoftwareUpgrade is a governance operation for initiating a software upgrade.
 * 
 * Since: cosmos-sdk 0.46
 * @name useSoftwareUpgrade
 * @package cosmos.upgrade.v1beta1
 * @see proto service: cosmos.upgrade.v1beta1.SoftwareUpgrade
 */
export const useSoftwareUpgrade = buildUseMutation<MsgSoftwareUpgrade, Error>({
  builderMutationFn: softwareUpgrade
});
/**
 * CancelUpgrade is a governance operation for cancelling a previously
 * approvid software upgrade.
 * 
 * Since: cosmos-sdk 0.46
 * @name useCancelUpgrade
 * @package cosmos.upgrade.v1beta1
 * @see proto service: cosmos.upgrade.v1beta1.CancelUpgrade
 */
export const useCancelUpgrade = buildUseMutation<MsgCancelUpgrade, Error>({
  builderMutationFn: cancelUpgrade
});