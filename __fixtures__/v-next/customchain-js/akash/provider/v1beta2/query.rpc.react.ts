import { buildUseQuery } from "../../../react-query";
import type { QueryProvidersRequest, QueryProvidersResponse, QueryProviderRequest, QueryProviderResponse } from "./query";
import { getProviders, getProvider } from "./query.rpc.func";
/**
 * Providers queries providers
 * @name useGetProviders
 * @package akash.provider.v1beta2
 * @see proto service: akash.provider.v1beta2.Providers
 */
export const useGetProviders = buildUseQuery<QueryProvidersRequest, QueryProvidersResponse>({
  builderQueryFn: getProviders,
  queryKeyPrefix: "ProvidersQuery"
});
/**
 * Provider queries provider details
 * @name useGetProvider
 * @package akash.provider.v1beta2
 * @see proto service: akash.provider.v1beta2.Provider
 */
export const useGetProvider = buildUseQuery<QueryProviderRequest, QueryProviderResponse>({
  builderQueryFn: getProvider,
  queryKeyPrefix: "ProviderQuery"
});