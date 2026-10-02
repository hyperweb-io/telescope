import { buildUseMutation } from "../../../react-query";
import type { MsgCreateDeployment, MsgDepositDeployment, MsgUpdateDeployment, MsgCloseDeployment } from "./deploymentmsg";
import type { MsgCloseGroup, MsgPauseGroup, MsgStartGroup } from "./groupmsg";
import { createDeployment, depositDeployment, updateDeployment, closeDeployment, closeGroup, pauseGroup, startGroup } from "./service.rpc.func";
/**
 * CreateDeployment defines a method to create new deployment given proper inputs.
 * @name useCreateDeployment
 * @package akash.deployment.v1beta2
 * @see proto service: akash.deployment.v1beta2.CreateDeployment
 */
export const useCreateDeployment = buildUseMutation<MsgCreateDeployment, Error>({
  builderMutationFn: createDeployment
});
/**
 * DepositDeployment deposits more funds into the deployment account
 * @name useDepositDeployment
 * @package akash.deployment.v1beta2
 * @see proto service: akash.deployment.v1beta2.DepositDeployment
 */
export const useDepositDeployment = buildUseMutation<MsgDepositDeployment, Error>({
  builderMutationFn: depositDeployment
});
/**
 * UpdateDeployment defines a method to update a deployment given proper inputs.
 * @name useUpdateDeployment
 * @package akash.deployment.v1beta2
 * @see proto service: akash.deployment.v1beta2.UpdateDeployment
 */
export const useUpdateDeployment = buildUseMutation<MsgUpdateDeployment, Error>({
  builderMutationFn: updateDeployment
});
/**
 * CloseDeployment defines a method to close a deployment given proper inputs.
 * @name useCloseDeployment
 * @package akash.deployment.v1beta2
 * @see proto service: akash.deployment.v1beta2.CloseDeployment
 */
export const useCloseDeployment = buildUseMutation<MsgCloseDeployment, Error>({
  builderMutationFn: closeDeployment
});
/**
 * CloseGroup defines a method to close a group of a deployment given proper inputs.
 * @name useCloseGroup
 * @package akash.deployment.v1beta2
 * @see proto service: akash.deployment.v1beta2.CloseGroup
 */
export const useCloseGroup = buildUseMutation<MsgCloseGroup, Error>({
  builderMutationFn: closeGroup
});
/**
 * PauseGroup defines a method to close a group of a deployment given proper inputs.
 * @name usePauseGroup
 * @package akash.deployment.v1beta2
 * @see proto service: akash.deployment.v1beta2.PauseGroup
 */
export const usePauseGroup = buildUseMutation<MsgPauseGroup, Error>({
  builderMutationFn: pauseGroup
});
/**
 * StartGroup defines a method to close a group of a deployment given proper inputs.
 * @name useStartGroup
 * @package akash.deployment.v1beta2
 * @see proto service: akash.deployment.v1beta2.StartGroup
 */
export const useStartGroup = buildUseMutation<MsgStartGroup, Error>({
  builderMutationFn: startGroup
});