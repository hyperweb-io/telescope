import { buildUseMutation } from "../../../../react-query";
import type { MsgCreateClient, MsgUpdateClient, MsgUpgradeClient, MsgSubmitMisbehaviour } from "./tx";
import { createClient, updateClient, upgradeClient, submitMisbehaviour } from "./tx.rpc.func";
/**
 * CreateClient defines a rpc handler method for MsgCreateClient.
 * @name useCreateClient
 * @package ibc.core.client.v1
 * @see proto service: ibc.core.client.v1.CreateClient
 */
export const useCreateClient = buildUseMutation<MsgCreateClient, Error>({
  builderMutationFn: createClient
});
/**
 * UpdateClient defines a rpc handler method for MsgUpdateClient.
 * @name useUpdateClient
 * @package ibc.core.client.v1
 * @see proto service: ibc.core.client.v1.UpdateClient
 */
export const useUpdateClient = buildUseMutation<MsgUpdateClient, Error>({
  builderMutationFn: updateClient
});
/**
 * UpgradeClient defines a rpc handler method for MsgUpgradeClient.
 * @name useUpgradeClient
 * @package ibc.core.client.v1
 * @see proto service: ibc.core.client.v1.UpgradeClient
 */
export const useUpgradeClient = buildUseMutation<MsgUpgradeClient, Error>({
  builderMutationFn: upgradeClient
});
/**
 * SubmitMisbehaviour defines a rpc handler method for MsgSubmitMisbehaviour.
 * @name useSubmitMisbehaviour
 * @package ibc.core.client.v1
 * @see proto service: ibc.core.client.v1.SubmitMisbehaviour
 */
export const useSubmitMisbehaviour = buildUseMutation<MsgSubmitMisbehaviour, Error>({
  builderMutationFn: submitMisbehaviour
});