import { buildTx } from "../../../helper-func-types";
import { MsgCreateDeployment, MsgDepositDeployment, MsgUpdateDeployment, MsgCloseDeployment } from "./deploymentmsg";
import { MsgCloseGroup, MsgPauseGroup, MsgStartGroup } from "./groupmsg";
/**
 * CreateDeployment defines a method to create new deployment given proper inputs.
 * @name createDeployment
 * @package akash.deployment.v1beta2
 * @see proto service: akash.deployment.v1beta2.CreateDeployment
 */
export const createDeployment = buildTx<MsgCreateDeployment>({
  msg: MsgCreateDeployment
});
/**
 * DepositDeployment deposits more funds into the deployment account
 * @name depositDeployment
 * @package akash.deployment.v1beta2
 * @see proto service: akash.deployment.v1beta2.DepositDeployment
 */
export const depositDeployment = buildTx<MsgDepositDeployment>({
  msg: MsgDepositDeployment
});
/**
 * UpdateDeployment defines a method to update a deployment given proper inputs.
 * @name updateDeployment
 * @package akash.deployment.v1beta2
 * @see proto service: akash.deployment.v1beta2.UpdateDeployment
 */
export const updateDeployment = buildTx<MsgUpdateDeployment>({
  msg: MsgUpdateDeployment
});
/**
 * CloseDeployment defines a method to close a deployment given proper inputs.
 * @name closeDeployment
 * @package akash.deployment.v1beta2
 * @see proto service: akash.deployment.v1beta2.CloseDeployment
 */
export const closeDeployment = buildTx<MsgCloseDeployment>({
  msg: MsgCloseDeployment
});
/**
 * CloseGroup defines a method to close a group of a deployment given proper inputs.
 * @name closeGroup
 * @package akash.deployment.v1beta2
 * @see proto service: akash.deployment.v1beta2.CloseGroup
 */
export const closeGroup = buildTx<MsgCloseGroup>({
  msg: MsgCloseGroup
});
/**
 * PauseGroup defines a method to close a group of a deployment given proper inputs.
 * @name pauseGroup
 * @package akash.deployment.v1beta2
 * @see proto service: akash.deployment.v1beta2.PauseGroup
 */
export const pauseGroup = buildTx<MsgPauseGroup>({
  msg: MsgPauseGroup
});
/**
 * StartGroup defines a method to close a group of a deployment given proper inputs.
 * @name startGroup
 * @package akash.deployment.v1beta2
 * @see proto service: akash.deployment.v1beta2.StartGroup
 */
export const startGroup = buildTx<MsgStartGroup>({
  msg: MsgStartGroup
});