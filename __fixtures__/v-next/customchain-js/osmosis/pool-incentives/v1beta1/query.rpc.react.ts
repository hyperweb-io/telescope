import { buildUseQuery } from "../../../react-query";
import type { QueryGaugeIdsRequest, QueryGaugeIdsResponse, QueryDistrInfoRequest, QueryDistrInfoResponse, QueryParamsRequest, QueryParamsResponse, QueryLockableDurationsRequest, QueryLockableDurationsResponse, QueryIncentivizedPoolsRequest, QueryIncentivizedPoolsResponse, QueryExternalIncentiveGaugesRequest, QueryExternalIncentiveGaugesResponse } from "./query";
import { getGaugeIds, getDistrInfo, getOsmosisPoolincentivesV1beta1Params, getLockableDurations, getIncentivizedPools, getExternalIncentiveGauges } from "./query.rpc.func";
/**
 * GaugeIds takes the pool id and returns the matching gauge ids and durations
 * @name useGetGaugeIds
 * @package osmosis.poolincentives.v1beta1
 * @see proto service: osmosis.poolincentives.v1beta1.GaugeIds
 */
export const useGetGaugeIds = buildUseQuery<QueryGaugeIdsRequest, QueryGaugeIdsResponse>({
  builderQueryFn: getGaugeIds,
  queryKeyPrefix: "GaugeIdsQuery"
});
/**
 * DistrInfo returns the pool's matching gauge ids and weights.
 * @name useGetDistrInfo
 * @package osmosis.poolincentives.v1beta1
 * @see proto service: osmosis.poolincentives.v1beta1.DistrInfo
 */
export const useGetDistrInfo = buildUseQuery<QueryDistrInfoRequest, QueryDistrInfoResponse>({
  builderQueryFn: getDistrInfo,
  queryKeyPrefix: "DistrInfoQuery"
});
/**
 * Params returns pool incentives params.
 * @name useGetOsmosisPoolincentivesV1beta1Params
 * @package osmosis.poolincentives.v1beta1
 * @see proto service: osmosis.poolincentives.v1beta1.Params
 */
export const useGetOsmosisPoolincentivesV1beta1Params = buildUseQuery<QueryParamsRequest, QueryParamsResponse>({
  builderQueryFn: getOsmosisPoolincentivesV1beta1Params,
  queryKeyPrefix: "ParamsQuery"
});
/**
 * LockableDurations returns lock durations for pools.
 * @name useGetLockableDurations
 * @package osmosis.poolincentives.v1beta1
 * @see proto service: osmosis.poolincentives.v1beta1.LockableDurations
 */
export const useGetLockableDurations = buildUseQuery<QueryLockableDurationsRequest, QueryLockableDurationsResponse>({
  builderQueryFn: getLockableDurations,
  queryKeyPrefix: "LockableDurationsQuery"
});
/**
 * IncentivizedPools returns currently incentivized pools
 * @name useGetIncentivizedPools
 * @package osmosis.poolincentives.v1beta1
 * @see proto service: osmosis.poolincentives.v1beta1.IncentivizedPools
 */
export const useGetIncentivizedPools = buildUseQuery<QueryIncentivizedPoolsRequest, QueryIncentivizedPoolsResponse>({
  builderQueryFn: getIncentivizedPools,
  queryKeyPrefix: "IncentivizedPoolsQuery"
});
/**
 * ExternalIncentiveGauges returns external incentive gauges.
 * @name useGetExternalIncentiveGauges
 * @package osmosis.poolincentives.v1beta1
 * @see proto service: osmosis.poolincentives.v1beta1.ExternalIncentiveGauges
 */
export const useGetExternalIncentiveGauges = buildUseQuery<QueryExternalIncentiveGaugesRequest, QueryExternalIncentiveGaugesResponse>({
  builderQueryFn: getExternalIncentiveGauges,
  queryKeyPrefix: "ExternalIncentiveGaugesQuery"
});