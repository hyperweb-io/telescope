import { buildUseQuery } from "../../../react-query";
import type { QueryParamsRequest, QueryParamsResponse, QueryEpochProvisionsRequest, QueryEpochProvisionsResponse } from "./query";
import { getOsmosisMintV1beta1Params, getEpochProvisions } from "./query.rpc.func";
/**
 * Params returns the total set of minting parameters.
 * @name useGetOsmosisMintV1beta1Params
 * @package osmosis.mint.v1beta1
 * @see proto service: osmosis.mint.v1beta1.Params
 */
export const useGetOsmosisMintV1beta1Params = buildUseQuery<QueryParamsRequest, QueryParamsResponse>({
  builderQueryFn: getOsmosisMintV1beta1Params,
  queryKeyPrefix: "ParamsQuery"
});
/**
 * EpochProvisions returns the current minting epoch provisions value.
 * @name useGetEpochProvisions
 * @package osmosis.mint.v1beta1
 * @see proto service: osmosis.mint.v1beta1.EpochProvisions
 */
export const useGetEpochProvisions = buildUseQuery<QueryEpochProvisionsRequest, QueryEpochProvisionsResponse>({
  builderQueryFn: getEpochProvisions,
  queryKeyPrefix: "EpochProvisionsQuery"
});