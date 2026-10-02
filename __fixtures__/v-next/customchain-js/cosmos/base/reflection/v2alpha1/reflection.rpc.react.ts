import { buildUseQuery } from "../../../../react-query";
import type { GetAuthnDescriptorRequest, GetAuthnDescriptorResponse, GetChainDescriptorRequest, GetChainDescriptorResponse, GetCodecDescriptorRequest, GetCodecDescriptorResponse, GetConfigurationDescriptorRequest, GetConfigurationDescriptorResponse, GetQueryServicesDescriptorRequest, GetQueryServicesDescriptorResponse, GetTxDescriptorRequest, GetTxDescriptorResponse } from "./reflection";
import { getGetAuthnDescriptor, getGetChainDescriptor, getGetCodecDescriptor, getGetConfigurationDescriptor, getGetQueryServicesDescriptor, getGetTxDescriptor } from "./reflection.rpc.func";
/**
 * GetAuthnDescriptor returns information on how to authenticate transactions in the application
 * NOTE: this RPC is still experimental and might be subject to breaking changes or removal in
 * future releases of the cosmos-sdk.
 * @name useGetGetAuthnDescriptor
 * @package cosmos.base.reflection.v2alpha1
 * @see proto service: cosmos.base.reflection.v2alpha1.GetAuthnDescriptor
 */
export const useGetGetAuthnDescriptor = buildUseQuery<GetAuthnDescriptorRequest, GetAuthnDescriptorResponse>({
  builderQueryFn: getGetAuthnDescriptor,
  queryKeyPrefix: "GetAuthnDescriptorQuery"
});
/**
 * GetChainDescriptor returns the description of the chain
 * @name useGetGetChainDescriptor
 * @package cosmos.base.reflection.v2alpha1
 * @see proto service: cosmos.base.reflection.v2alpha1.GetChainDescriptor
 */
export const useGetGetChainDescriptor = buildUseQuery<GetChainDescriptorRequest, GetChainDescriptorResponse>({
  builderQueryFn: getGetChainDescriptor,
  queryKeyPrefix: "GetChainDescriptorQuery"
});
/**
 * GetCodecDescriptor returns the descriptor of the codec of the application
 * @name useGetGetCodecDescriptor
 * @package cosmos.base.reflection.v2alpha1
 * @see proto service: cosmos.base.reflection.v2alpha1.GetCodecDescriptor
 */
export const useGetGetCodecDescriptor = buildUseQuery<GetCodecDescriptorRequest, GetCodecDescriptorResponse>({
  builderQueryFn: getGetCodecDescriptor,
  queryKeyPrefix: "GetCodecDescriptorQuery"
});
/**
 * GetConfigurationDescriptor returns the descriptor for the sdk.Config of the application
 * @name useGetGetConfigurationDescriptor
 * @package cosmos.base.reflection.v2alpha1
 * @see proto service: cosmos.base.reflection.v2alpha1.GetConfigurationDescriptor
 */
export const useGetGetConfigurationDescriptor = buildUseQuery<GetConfigurationDescriptorRequest, GetConfigurationDescriptorResponse>({
  builderQueryFn: getGetConfigurationDescriptor,
  queryKeyPrefix: "GetConfigurationDescriptorQuery"
});
/**
 * GetQueryServicesDescriptor returns the available gRPC queryable services of the application
 * @name useGetGetQueryServicesDescriptor
 * @package cosmos.base.reflection.v2alpha1
 * @see proto service: cosmos.base.reflection.v2alpha1.GetQueryServicesDescriptor
 */
export const useGetGetQueryServicesDescriptor = buildUseQuery<GetQueryServicesDescriptorRequest, GetQueryServicesDescriptorResponse>({
  builderQueryFn: getGetQueryServicesDescriptor,
  queryKeyPrefix: "GetQueryServicesDescriptorQuery"
});
/**
 * GetTxDescriptor returns information on the used transaction object and available msgs that can be used
 * @name useGetGetTxDescriptor
 * @package cosmos.base.reflection.v2alpha1
 * @see proto service: cosmos.base.reflection.v2alpha1.GetTxDescriptor
 */
export const useGetGetTxDescriptor = buildUseQuery<GetTxDescriptorRequest, GetTxDescriptorResponse>({
  builderQueryFn: getGetTxDescriptor,
  queryKeyPrefix: "GetTxDescriptorQuery"
});