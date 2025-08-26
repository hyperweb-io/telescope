import { buildTx } from "../../../helper-func-types";
import { MsgRegisterDevFeeInfo, MsgCancelDevFeeInfo, MsgUpdateDevFeeInfo } from "./tx";
/**
 * RegisterDevFeeInfo is used by a deployer to register a new contract for
 * receiving transaction fees
 * @name registerDevFeeInfo
 * @package evmos.fees.v1
 * @see proto service: evmos.fees.v1.RegisterDevFeeInfo
 */
export const registerDevFeeInfo = buildTx<MsgRegisterDevFeeInfo>({
  msg: MsgRegisterDevFeeInfo
});
/**
 * CancelDevFeeInfo is used by a deployer to cancel a registered contract
 * and stop receiving transaction fees
 * @name cancelDevFeeInfo
 * @package evmos.fees.v1
 * @see proto service: evmos.fees.v1.CancelDevFeeInfo
 */
export const cancelDevFeeInfo = buildTx<MsgCancelDevFeeInfo>({
  msg: MsgCancelDevFeeInfo
});
/**
 * UpdateDevFeeInfo is used by a deployer to update the withdraw address
 * @name updateDevFeeInfo
 * @package evmos.fees.v1
 * @see proto service: evmos.fees.v1.UpdateDevFeeInfo
 */
export const updateDevFeeInfo = buildTx<MsgUpdateDevFeeInfo>({
  msg: MsgUpdateDevFeeInfo
});