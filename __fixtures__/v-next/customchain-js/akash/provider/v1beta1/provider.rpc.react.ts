import { buildUseMutation } from "../../../react-query";
import type { MsgCreateProvider, MsgUpdateProvider, MsgDeleteProvider } from "./provider";
import { createProvider, updateProvider, deleteProvider } from "./provider.rpc.func";
/**
 * CreateProvider defines a method that creates a provider given the proper inputs
 * @name useCreateProvider
 * @package akash.provider.v1beta1
 * @see proto service: akash.provider.v1beta1.CreateProvider
 */
export const useCreateProvider = buildUseMutation<MsgCreateProvider, Error>({
  builderMutationFn: createProvider
});
/**
 * UpdateProvider defines a method that updates a provider given the proper inputs
 * @name useUpdateProvider
 * @package akash.provider.v1beta1
 * @see proto service: akash.provider.v1beta1.UpdateProvider
 */
export const useUpdateProvider = buildUseMutation<MsgUpdateProvider, Error>({
  builderMutationFn: updateProvider
});
/**
 * DeleteProvider defines a method that deletes a provider given the proper inputs
 * @name useDeleteProvider
 * @package akash.provider.v1beta1
 * @see proto service: akash.provider.v1beta1.DeleteProvider
 */
export const useDeleteProvider = buildUseMutation<MsgDeleteProvider, Error>({
  builderMutationFn: deleteProvider
});