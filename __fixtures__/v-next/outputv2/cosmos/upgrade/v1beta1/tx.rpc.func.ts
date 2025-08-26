import { buildTx } from "../../../helper-func-types";
import { MsgSoftwareUpgrade, MsgCancelUpgrade } from "./tx";
/**
 * SoftwareUpgrade is a governance operation for initiating a software upgrade.
 * 
 * Since: cosmos-sdk 0.46
 * @name softwareUpgrade
 * @package cosmos.upgrade.v1beta1
 * @see proto service: cosmos.upgrade.v1beta1.SoftwareUpgrade
 */
export const softwareUpgrade = buildTx<MsgSoftwareUpgrade>({
  msg: MsgSoftwareUpgrade
});
/**
 * CancelUpgrade is a governance operation for cancelling a previously
 * approvid software upgrade.
 * 
 * Since: cosmos-sdk 0.46
 * @name cancelUpgrade
 * @package cosmos.upgrade.v1beta1
 * @see proto service: cosmos.upgrade.v1beta1.CancelUpgrade
 */
export const cancelUpgrade = buildTx<MsgCancelUpgrade>({
  msg: MsgCancelUpgrade
});