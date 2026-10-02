import { buildUseMutation } from "../../../react-query";
import type { MsgSignProviderAttributes, MsgDeleteProviderAttributes } from "./audit";
import { signProviderAttributes, deleteProviderAttributes } from "./audit.rpc.func";
/**
 * SignProviderAttributes defines a method that signs provider attributes
 * @name useSignProviderAttributes
 * @package akash.audit.v1beta1
 * @see proto service: akash.audit.v1beta1.SignProviderAttributes
 */
export const useSignProviderAttributes = buildUseMutation<MsgSignProviderAttributes, Error>({
  builderMutationFn: signProviderAttributes
});
/**
 * DeleteProviderAttributes defines a method that deletes provider attributes
 * @name useDeleteProviderAttributes
 * @package akash.audit.v1beta1
 * @see proto service: akash.audit.v1beta1.DeleteProviderAttributes
 */
export const useDeleteProviderAttributes = buildUseMutation<MsgDeleteProviderAttributes, Error>({
  builderMutationFn: deleteProviderAttributes
});