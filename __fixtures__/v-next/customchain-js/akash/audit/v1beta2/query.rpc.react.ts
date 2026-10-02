import { buildUseQuery } from "../../../react-query";
import type { QueryAllProvidersAttributesRequest, QueryProvidersResponse, QueryProviderAttributesRequest, QueryProviderAuditorRequest, QueryAuditorAttributesRequest } from "./query";
import { getAllProvidersAttributes, getProviderAttributes, getProviderAuditorAttributes, getAuditorAttributes } from "./query.rpc.func";
/**
 * AllProvidersAttributes queries all providers
 * buf:lint:ignore RPC_REQUEST_RESPONSE_UNIQUE
 * buf:lint:ignore RPC_RESPONSE_STANDARD_NAME
 * @name useGetAllProvidersAttributes
 * @package akash.audit.v1beta2
 * @see proto service: akash.audit.v1beta2.AllProvidersAttributes
 */
export const useGetAllProvidersAttributes = buildUseQuery<QueryAllProvidersAttributesRequest, QueryProvidersResponse>({
  builderQueryFn: getAllProvidersAttributes,
  queryKeyPrefix: "AllProvidersAttributesQuery"
});
/**
 * ProviderAttributes queries all provider signed attributes
 * buf:lint:ignore RPC_REQUEST_RESPONSE_UNIQUE
 * buf:lint:ignore RPC_RESPONSE_STANDARD_NAME
 * @name useGetProviderAttributes
 * @package akash.audit.v1beta2
 * @see proto service: akash.audit.v1beta2.ProviderAttributes
 */
export const useGetProviderAttributes = buildUseQuery<QueryProviderAttributesRequest, QueryProvidersResponse>({
  builderQueryFn: getProviderAttributes,
  queryKeyPrefix: "ProviderAttributesQuery"
});
/**
 * ProviderAuditorAttributes queries provider signed attributes by specific auditor
 * buf:lint:ignore RPC_REQUEST_RESPONSE_UNIQUE
 * buf:lint:ignore RPC_RESPONSE_STANDARD_NAME
 * @name useGetProviderAuditorAttributes
 * @package akash.audit.v1beta2
 * @see proto service: akash.audit.v1beta2.ProviderAuditorAttributes
 */
export const useGetProviderAuditorAttributes = buildUseQuery<QueryProviderAuditorRequest, QueryProvidersResponse>({
  builderQueryFn: getProviderAuditorAttributes,
  queryKeyPrefix: "ProviderAuditorAttributesQuery"
});
/**
 * AuditorAttributes queries all providers signed by this auditor
 * buf:lint:ignore RPC_REQUEST_RESPONSE_UNIQUE
 * buf:lint:ignore RPC_RESPONSE_STANDARD_NAME
 * @name useGetAuditorAttributes
 * @package akash.audit.v1beta2
 * @see proto service: akash.audit.v1beta2.AuditorAttributes
 */
export const useGetAuditorAttributes = buildUseQuery<QueryAuditorAttributesRequest, QueryProvidersResponse>({
  builderQueryFn: getAuditorAttributes,
  queryKeyPrefix: "AuditorAttributesQuery"
});