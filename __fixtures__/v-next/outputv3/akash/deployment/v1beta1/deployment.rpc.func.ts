import { GroupSpec, GroupSpecSDKType, GroupID, GroupIDSDKType, MsgCloseGroup, MsgCloseGroupSDKType, MsgCloseGroupResponse, MsgCloseGroupResponseSDKType, MsgPauseGroup, MsgPauseGroupSDKType, MsgPauseGroupResponse, MsgPauseGroupResponseSDKType, MsgStartGroup, MsgStartGroupSDKType, MsgStartGroupResponse, MsgStartGroupResponseSDKType } from "./group";
import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { buildTx } from "../../../helper-func-types";
import { MsgCreateDeployment, MsgCreateDeploymentSDKType, MsgCreateDeploymentResponse, MsgCreateDeploymentResponseSDKType, MsgDepositDeployment, MsgDepositDeploymentSDKType, MsgDepositDeploymentResponse, MsgDepositDeploymentResponseSDKType, MsgUpdateDeployment, MsgUpdateDeploymentSDKType, MsgUpdateDeploymentResponse, MsgUpdateDeploymentResponseSDKType, MsgCloseDeployment, MsgCloseDeploymentSDKType, MsgCloseDeploymentResponse, MsgCloseDeploymentResponseSDKType } from "./deployment";
/**
 * CreateDeployment defines a method to create new deployment given proper inputs.
 * @name createDeployment
 * @package akash.deployment.v1beta1
 * @see proto service: akash.deployment.v1beta1.CreateDeployment
 */
export const createDeployment = buildTx<MsgCreateDeployment>({
  msg: MsgCreateDeployment
});
/**
 * DepositDeployment deposits more funds into the deployment account
 * @name depositDeployment
 * @package akash.deployment.v1beta1
 * @see proto service: akash.deployment.v1beta1.DepositDeployment
 */
export const depositDeployment = buildTx<MsgDepositDeployment>({
  msg: MsgDepositDeployment
});
/**
 * UpdateDeployment defines a method to update a deployment given proper inputs.
 * @name updateDeployment
 * @package akash.deployment.v1beta1
 * @see proto service: akash.deployment.v1beta1.UpdateDeployment
 */
export const updateDeployment = buildTx<MsgUpdateDeployment>({
  msg: MsgUpdateDeployment
});
/**
 * CloseDeployment defines a method to close a deployment given proper inputs.
 * @name closeDeployment
 * @package akash.deployment.v1beta1
 * @see proto service: akash.deployment.v1beta1.CloseDeployment
 */
export const closeDeployment = buildTx<MsgCloseDeployment>({
  msg: MsgCloseDeployment
});
/**
 * CloseGroup defines a method to close a group of a deployment given proper inputs.
 * @name closeGroup
 * @package akash.deployment.v1beta1
 * @see proto service: akash.deployment.v1beta1.CloseGroup
 */
export const closeGroup = buildTx<MsgCloseGroup>({
  msg: MsgCloseGroup
});
/**
 * PauseGroup defines a method to close a group of a deployment given proper inputs.
 * @name pauseGroup
 * @package akash.deployment.v1beta1
 * @see proto service: akash.deployment.v1beta1.PauseGroup
 */
export const pauseGroup = buildTx<MsgPauseGroup>({
  msg: MsgPauseGroup
});
/**
 * StartGroup defines a method to close a group of a deployment given proper inputs.
 * @name startGroup
 * @package akash.deployment.v1beta1
 * @see proto service: akash.deployment.v1beta1.StartGroup
 */
export const startGroup = buildTx<MsgStartGroup>({
  msg: MsgStartGroup
});