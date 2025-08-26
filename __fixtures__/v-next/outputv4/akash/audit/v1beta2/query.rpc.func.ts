import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination.js";
import { Provider, ProviderSDKType } from "./audit.js";
import { EndpointOrRpc, buildQuery } from "../../../helper-func-types.js";
import { QueryAllProvidersAttributesRequest, QueryAllProvidersAttributesRequestSDKType, QueryProvidersResponse, QueryProvidersResponseSDKType, QueryProviderAttributesRequest, QueryProviderAttributesRequestSDKType, QueryProviderAuditorRequest, QueryProviderAuditorRequestSDKType, QueryAuditorAttributesRequest, QueryAuditorAttributesRequestSDKType } from "./query.js";
/**
 * AllProvidersAttributes queries all providers
 * buf:lint:ignore RPC_REQUEST_RESPONSE_UNIQUE
 * buf:lint:ignore RPC_RESPONSE_STANDARD_NAME
 * @name getAllProvidersAttributes
 * @package akash.audit.v1beta2
 * @see proto service: akash.audit.v1beta2.AllProvidersAttributes
 */
export const getAllProvidersAttributes = buildQuery<QueryAllProvidersAttributesRequest, QueryProvidersResponse>({
  encode: QueryAllProvidersAttributesRequest.encode,
  decode: QueryProvidersResponse.decode,
  service: "akash.audit.v1beta2.Query",
  method: "AllProvidersAttributes"
});
/**
 * ProviderAttributes queries all provider signed attributes
 * buf:lint:ignore RPC_REQUEST_RESPONSE_UNIQUE
 * buf:lint:ignore RPC_RESPONSE_STANDARD_NAME
 * @name getProviderAttributes
 * @package akash.audit.v1beta2
 * @see proto service: akash.audit.v1beta2.ProviderAttributes
 */
export const getProviderAttributes = buildQuery<QueryProviderAttributesRequest, QueryProvidersResponse>({
  encode: QueryProviderAttributesRequest.encode,
  decode: QueryProvidersResponse.decode,
  service: "akash.audit.v1beta2.Query",
  method: "ProviderAttributes"
});
/**
 * ProviderAuditorAttributes queries provider signed attributes by specific auditor
 * buf:lint:ignore RPC_REQUEST_RESPONSE_UNIQUE
 * buf:lint:ignore RPC_RESPONSE_STANDARD_NAME
 * @name getProviderAuditorAttributes
 * @package akash.audit.v1beta2
 * @see proto service: akash.audit.v1beta2.ProviderAuditorAttributes
 */
export const getProviderAuditorAttributes = buildQuery<QueryProviderAuditorRequest, QueryProvidersResponse>({
  encode: QueryProviderAuditorRequest.encode,
  decode: QueryProvidersResponse.decode,
  service: "akash.audit.v1beta2.Query",
  method: "ProviderAuditorAttributes"
});
/**
 * AuditorAttributes queries all providers signed by this auditor
 * buf:lint:ignore RPC_REQUEST_RESPONSE_UNIQUE
 * buf:lint:ignore RPC_RESPONSE_STANDARD_NAME
 * @name getAuditorAttributes
 * @package akash.audit.v1beta2
 * @see proto service: akash.audit.v1beta2.AuditorAttributes
 */
export const getAuditorAttributes = buildQuery<QueryAuditorAttributesRequest, QueryProvidersResponse>({
  encode: QueryAuditorAttributesRequest.encode,
  decode: QueryProvidersResponse.decode,
  service: "akash.audit.v1beta2.Query",
  method: "AuditorAttributes"
});