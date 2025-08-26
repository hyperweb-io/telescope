import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination.js";
import { Provider, ProviderSDKType } from "./provider.js";
import { EndpointOrRpc, buildQuery } from "../../../helper-func-types.js";
import { QueryProvidersRequest, QueryProvidersRequestSDKType, QueryProvidersResponse, QueryProvidersResponseSDKType, QueryProviderRequest, QueryProviderRequestSDKType, QueryProviderResponse, QueryProviderResponseSDKType } from "./query.js";
/**
 * Providers queries providers
 * @name getProviders
 * @package akash.provider.v1beta2
 * @see proto service: akash.provider.v1beta2.Providers
 */
export const getProviders = buildQuery<QueryProvidersRequest, QueryProvidersResponse>({
  encode: QueryProvidersRequest.encode,
  decode: QueryProvidersResponse.decode,
  service: "akash.provider.v1beta2.Query",
  method: "Providers"
});
/**
 * Provider queries provider details
 * @name getProvider
 * @package akash.provider.v1beta2
 * @see proto service: akash.provider.v1beta2.Provider
 */
export const getProvider = buildQuery<QueryProviderRequest, QueryProviderResponse>({
  encode: QueryProviderRequest.encode,
  decode: QueryProviderResponse.decode,
  service: "akash.provider.v1beta2.Query",
  method: "Provider"
});