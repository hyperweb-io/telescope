import { ParamChange, ParamChangeSDKType } from "./params";
import { EndpointOrRpc, buildQuery } from "../../../helper-func-types";
import { QueryParamsRequest, QueryParamsRequestSDKType, QueryParamsResponse, QueryParamsResponseSDKType, QuerySubspacesRequest, QuerySubspacesRequestSDKType, QuerySubspacesResponse, QuerySubspacesResponseSDKType } from "./query";
/**
 * Params queries a specific parameter of a module, given its subspace and
 * key.
 * @name getParams
 * @package cosmos.params.v1beta1
 * @see proto service: cosmos.params.v1beta1.Params
 */
export const getParams = buildQuery<QueryParamsRequest, QueryParamsResponse>({
  encode: QueryParamsRequest.encode,
  decode: QueryParamsResponse.decode,
  service: "cosmos.params.v1beta1.Query",
  method: "Params"
});
/**
 * Subspaces queries for all registered subspaces and all keys for a subspace.
 * @name getSubspaces
 * @package cosmos.params.v1beta1
 * @see proto service: cosmos.params.v1beta1.Subspaces
 */
export const getSubspaces = buildQuery<QuerySubspacesRequest, QuerySubspacesResponse>({
  encode: QuerySubspacesRequest.encode,
  decode: QuerySubspacesResponse.decode,
  service: "cosmos.params.v1beta1.Query",
  method: "Subspaces"
});