import { Any, AnySDKType } from "../../../../google/protobuf/any";
import { buildTx } from "../../../../helper-func-types";
import { MsgCreateClient, MsgCreateClientSDKType, MsgCreateClientResponse, MsgCreateClientResponseSDKType, MsgUpdateClient, MsgUpdateClientSDKType, MsgUpdateClientResponse, MsgUpdateClientResponseSDKType, MsgUpgradeClient, MsgUpgradeClientSDKType, MsgUpgradeClientResponse, MsgUpgradeClientResponseSDKType, MsgSubmitMisbehaviour, MsgSubmitMisbehaviourSDKType, MsgSubmitMisbehaviourResponse, MsgSubmitMisbehaviourResponseSDKType } from "./tx";
/**
 * CreateClient defines a rpc handler method for MsgCreateClient.
 * @name createClient
 * @package ibc.core.client.v1
 * @see proto service: ibc.core.client.v1.CreateClient
 */
export const createClient = buildTx<MsgCreateClient>({
  msg: MsgCreateClient
});
/**
 * UpdateClient defines a rpc handler method for MsgUpdateClient.
 * @name updateClient
 * @package ibc.core.client.v1
 * @see proto service: ibc.core.client.v1.UpdateClient
 */
export const updateClient = buildTx<MsgUpdateClient>({
  msg: MsgUpdateClient
});
/**
 * UpgradeClient defines a rpc handler method for MsgUpgradeClient.
 * @name upgradeClient
 * @package ibc.core.client.v1
 * @see proto service: ibc.core.client.v1.UpgradeClient
 */
export const upgradeClient = buildTx<MsgUpgradeClient>({
  msg: MsgUpgradeClient
});
/**
 * SubmitMisbehaviour defines a rpc handler method for MsgSubmitMisbehaviour.
 * @name submitMisbehaviour
 * @package ibc.core.client.v1
 * @see proto service: ibc.core.client.v1.SubmitMisbehaviour
 */
export const submitMisbehaviour = buildTx<MsgSubmitMisbehaviour>({
  msg: MsgSubmitMisbehaviour
});