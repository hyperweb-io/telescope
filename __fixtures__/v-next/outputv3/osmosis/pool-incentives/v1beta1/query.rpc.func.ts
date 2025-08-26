import { Duration, DurationSDKType } from "../../../google/protobuf/duration";
import { DistrInfo, DistrInfoSDKType, Params, ParamsSDKType } from "./incentives";
import { Gauge, GaugeSDKType } from "../../incentives/gauge";
import { EndpointOrRpc, buildQuery } from "../../../helper-func-types";
import { QueryGaugeIdsRequest, QueryGaugeIdsRequestSDKType, QueryGaugeIdsResponse, QueryGaugeIdsResponseSDKType, QueryDistrInfoRequest, QueryDistrInfoRequestSDKType, QueryDistrInfoResponse, QueryDistrInfoResponseSDKType, QueryParamsRequest, QueryParamsRequestSDKType, QueryParamsResponse, QueryParamsResponseSDKType, QueryLockableDurationsRequest, QueryLockableDurationsRequestSDKType, QueryLockableDurationsResponse, QueryLockableDurationsResponseSDKType, QueryIncentivizedPoolsRequest, QueryIncentivizedPoolsRequestSDKType, QueryIncentivizedPoolsResponse, QueryIncentivizedPoolsResponseSDKType, QueryExternalIncentiveGaugesRequest, QueryExternalIncentiveGaugesRequestSDKType, QueryExternalIncentiveGaugesResponse, QueryExternalIncentiveGaugesResponseSDKType } from "./query";
/**
 * GaugeIds takes the pool id and returns the matching gauge ids and durations
 * @name getGaugeIds
 * @package osmosis.poolincentives.v1beta1
 * @see proto service: osmosis.poolincentives.v1beta1.GaugeIds
 */
export const getGaugeIds = buildQuery<QueryGaugeIdsRequest, QueryGaugeIdsResponse>({
  encode: QueryGaugeIdsRequest.encode,
  decode: QueryGaugeIdsResponse.decode,
  service: "osmosis.poolincentives.v1beta1.Query",
  method: "GaugeIds",
  deps: [QueryGaugeIdsRequest, QueryGaugeIdsResponse]
});
/**
 * DistrInfo returns the pool's matching gauge ids and weights.
 * @name getDistrInfo
 * @package osmosis.poolincentives.v1beta1
 * @see proto service: osmosis.poolincentives.v1beta1.DistrInfo
 */
export const getDistrInfo = buildQuery<QueryDistrInfoRequest, QueryDistrInfoResponse>({
  encode: QueryDistrInfoRequest.encode,
  decode: QueryDistrInfoResponse.decode,
  service: "osmosis.poolincentives.v1beta1.Query",
  method: "DistrInfo",
  deps: [QueryDistrInfoRequest, QueryDistrInfoResponse]
});
/**
 * Params returns pool incentives params.
 * @name getParams
 * @package osmosis.poolincentives.v1beta1
 * @see proto service: osmosis.poolincentives.v1beta1.Params
 */
export const getParams = buildQuery<QueryParamsRequest, QueryParamsResponse>({
  encode: QueryParamsRequest.encode,
  decode: QueryParamsResponse.decode,
  service: "osmosis.poolincentives.v1beta1.Query",
  method: "Params",
  deps: [QueryParamsRequest, QueryParamsResponse]
});
/**
 * LockableDurations returns lock durations for pools.
 * @name getLockableDurations
 * @package osmosis.poolincentives.v1beta1
 * @see proto service: osmosis.poolincentives.v1beta1.LockableDurations
 */
export const getLockableDurations = buildQuery<QueryLockableDurationsRequest, QueryLockableDurationsResponse>({
  encode: QueryLockableDurationsRequest.encode,
  decode: QueryLockableDurationsResponse.decode,
  service: "osmosis.poolincentives.v1beta1.Query",
  method: "LockableDurations",
  deps: [QueryLockableDurationsRequest, QueryLockableDurationsResponse]
});
/**
 * IncentivizedPools returns currently incentivized pools
 * @name getIncentivizedPools
 * @package osmosis.poolincentives.v1beta1
 * @see proto service: osmosis.poolincentives.v1beta1.IncentivizedPools
 */
export const getIncentivizedPools = buildQuery<QueryIncentivizedPoolsRequest, QueryIncentivizedPoolsResponse>({
  encode: QueryIncentivizedPoolsRequest.encode,
  decode: QueryIncentivizedPoolsResponse.decode,
  service: "osmosis.poolincentives.v1beta1.Query",
  method: "IncentivizedPools",
  deps: [QueryIncentivizedPoolsRequest, QueryIncentivizedPoolsResponse]
});
/**
 * ExternalIncentiveGauges returns external incentive gauges.
 * @name getExternalIncentiveGauges
 * @package osmosis.poolincentives.v1beta1
 * @see proto service: osmosis.poolincentives.v1beta1.ExternalIncentiveGauges
 */
export const getExternalIncentiveGauges = buildQuery<QueryExternalIncentiveGaugesRequest, QueryExternalIncentiveGaugesResponse>({
  encode: QueryExternalIncentiveGaugesRequest.encode,
  decode: QueryExternalIncentiveGaugesResponse.decode,
  service: "osmosis.poolincentives.v1beta1.Query",
  method: "ExternalIncentiveGauges",
  deps: [QueryExternalIncentiveGaugesRequest, QueryExternalIncentiveGaugesResponse]
});