import { buildUseQuery } from "../../../react-query";
import type { QueryParamsRequest, QueryParamsResponse, QuerySubspacesRequest, QuerySubspacesResponse } from "./query";
import { getCosmosParamsV1beta1Params, getSubspaces } from "./query.rpc.func";
/**
 * Params queries a specific parameter of a module, given its subspace and
 * key.
 * @name useGetCosmosParamsV1beta1Params
 * @package cosmos.params.v1beta1
 * @see proto service: cosmos.params.v1beta1.Params
 */
export const useGetCosmosParamsV1beta1Params = buildUseQuery<QueryParamsRequest, QueryParamsResponse>({
  builderQueryFn: getCosmosParamsV1beta1Params,
  queryKeyPrefix: "ParamsQuery"
});
/**
 * Subspaces queries for all registered subspaces and all keys for a subspace.
 * @name useGetSubspaces
 * @package cosmos.params.v1beta1
 * @see proto service: cosmos.params.v1beta1.Subspaces
 */
export const useGetSubspaces = buildUseQuery<QuerySubspacesRequest, QuerySubspacesResponse>({
  builderQueryFn: getSubspaces,
  queryKeyPrefix: "SubspacesQuery"
});