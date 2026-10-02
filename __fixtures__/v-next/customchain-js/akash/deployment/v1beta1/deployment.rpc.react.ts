import type { MsgCloseGroup, MsgPauseGroup, MsgStartGroup } from "./group";
import { buildUseMutation } from "../../../react-query";
import type { MsgCreateDeployment, MsgDepositDeployment, MsgUpdateDeployment, MsgCloseDeployment } from "./deployment";
import { createDeployment, depositDeployment, updateDeployment, closeDeployment, closeGroup, pauseGroup, startGroup } from "./deployment.rpc.func";
/**
 * CreateDeployment defines a method to create new deployment given proper inputs.
 * @name useCreateDeployment
 * @package akash.deployment.v1beta1
 * @see proto service: akash.deployment.v1beta1.CreateDeployment
 */
export const useCreateDeployment = buildUseMutation<MsgCreateDeployment, Error>({
  builderMutationFn: createDeployment
});
/**
 * DepositDeployment deposits more funds into the deployment account
 * @name useDepositDeployment
 * @package akash.deployment.v1beta1
 * @see proto service: akash.deployment.v1beta1.DepositDeployment
 */
export const useDepositDeployment = buildUseMutation<MsgDepositDeployment, Error>({
  builderMutationFn: depositDeployment
});
/**
 * UpdateDeployment defines a method to update a deployment given proper inputs.
 * @name useUpdateDeployment
 * @package akash.deployment.v1beta1
 * @see proto service: akash.deployment.v1beta1.UpdateDeployment
 */
export const useUpdateDeployment = buildUseMutation<MsgUpdateDeployment, Error>({
  builderMutationFn: updateDeployment
});
/**
 * CloseDeployment defines a method to close a deployment given proper inputs.
 * @name useCloseDeployment
 * @package akash.deployment.v1beta1
 * @see proto service: akash.deployment.v1beta1.CloseDeployment
 */
export const useCloseDeployment = buildUseMutation<MsgCloseDeployment, Error>({
  builderMutationFn: closeDeployment
});
/**
 * CloseGroup defines a method to close a group of a deployment given proper inputs.
 * @name useCloseGroup
 * @package akash.deployment.v1beta1
 * @see proto service: akash.deployment.v1beta1.CloseGroup
 */
export const useCloseGroup = buildUseMutation<MsgCloseGroup, Error>({
  builderMutationFn: closeGroup
});
/**
 * PauseGroup defines a method to close a group of a deployment given proper inputs.
 * @name usePauseGroup
 * @package akash.deployment.v1beta1
 * @see proto service: akash.deployment.v1beta1.PauseGroup
 */
export const usePauseGroup = buildUseMutation<MsgPauseGroup, Error>({
  builderMutationFn: pauseGroup
});
/**
 * StartGroup defines a method to close a group of a deployment given proper inputs.
 * @name useStartGroup
 * @package akash.deployment.v1beta1
 * @see proto service: akash.deployment.v1beta1.StartGroup
 */
export const useStartGroup = buildUseMutation<MsgStartGroup, Error>({
  builderMutationFn: startGroup
});