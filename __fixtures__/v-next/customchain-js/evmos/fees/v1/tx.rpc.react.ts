import { buildUseMutation } from "../../../react-query";
import type { MsgRegisterDevFeeInfo, MsgCancelDevFeeInfo, MsgUpdateDevFeeInfo } from "./tx";
import { registerDevFeeInfo, cancelDevFeeInfo, updateDevFeeInfo } from "./tx.rpc.func";
/**
 * RegisterDevFeeInfo is used by a deployer to register a new contract for
 * receiving transaction fees
 * @name useRegisterDevFeeInfo
 * @package evmos.fees.v1
 * @see proto service: evmos.fees.v1.RegisterDevFeeInfo
 */
export const useRegisterDevFeeInfo = buildUseMutation<MsgRegisterDevFeeInfo, Error>({
  builderMutationFn: registerDevFeeInfo
});
/**
 * CancelDevFeeInfo is used by a deployer to cancel a registered contract
 * and stop receiving transaction fees
 * @name useCancelDevFeeInfo
 * @package evmos.fees.v1
 * @see proto service: evmos.fees.v1.CancelDevFeeInfo
 */
export const useCancelDevFeeInfo = buildUseMutation<MsgCancelDevFeeInfo, Error>({
  builderMutationFn: cancelDevFeeInfo
});
/**
 * UpdateDevFeeInfo is used by a deployer to update the withdraw address
 * @name useUpdateDevFeeInfo
 * @package evmos.fees.v1
 * @see proto service: evmos.fees.v1.UpdateDevFeeInfo
 */
export const useUpdateDevFeeInfo = buildUseMutation<MsgUpdateDevFeeInfo, Error>({
  builderMutationFn: updateDevFeeInfo
});