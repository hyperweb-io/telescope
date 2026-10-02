import { buildUseQuery } from "../../../react-query";
import type { QueryParamsRequest, QueryParamsResponse, QueryInflationRequest, QueryInflationResponse, QueryAnnualProvisionsRequest, QueryAnnualProvisionsResponse } from "./query";
import { getCosmosMintV1beta1Params, getInflation, getAnnualProvisions } from "./query.rpc.func";
/**
 * Params returns the total set of minting parameters.
 * @name useGetCosmosMintV1beta1Params
 * @package cosmos.mint.v1beta1
 * @see proto service: cosmos.mint.v1beta1.Params
 */
export const useGetCosmosMintV1beta1Params = buildUseQuery<QueryParamsRequest, QueryParamsResponse>({
  builderQueryFn: getCosmosMintV1beta1Params,
  queryKeyPrefix: "ParamsQuery"
});
/**
 * Inflation returns the current minting inflation value.
 * @name useGetInflation
 * @package cosmos.mint.v1beta1
 * @see proto service: cosmos.mint.v1beta1.Inflation
 */
export const useGetInflation = buildUseQuery<QueryInflationRequest, QueryInflationResponse>({
  builderQueryFn: getInflation,
  queryKeyPrefix: "InflationQuery"
});
/**
 * AnnualProvisions current minting annual provisions value.
 * @name useGetAnnualProvisions
 * @package cosmos.mint.v1beta1
 * @see proto service: cosmos.mint.v1beta1.AnnualProvisions
 */
export const useGetAnnualProvisions = buildUseQuery<QueryAnnualProvisionsRequest, QueryAnnualProvisionsResponse>({
  builderQueryFn: getAnnualProvisions,
  queryKeyPrefix: "AnnualProvisionsQuery"
});