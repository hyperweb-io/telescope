import { buildUseQuery } from "../../react-query";
import type { ModuleToDistributeCoinsRequest, ModuleToDistributeCoinsResponse, GaugeByIDRequest, GaugeByIDResponse, GaugesRequest, GaugesResponse, ActiveGaugesRequest, ActiveGaugesResponse, ActiveGaugesPerDenomRequest, ActiveGaugesPerDenomResponse, UpcomingGaugesRequest, UpcomingGaugesResponse, UpcomingGaugesPerDenomRequest, UpcomingGaugesPerDenomResponse, RewardsEstRequest, RewardsEstResponse, QueryLockableDurationsRequest, QueryLockableDurationsResponse } from "./query";
import { getModuleToDistributeCoins, getGaugeByID, getGauges, getActiveGauges, getActiveGaugesPerDenom, getUpcomingGauges, getUpcomingGaugesPerDenom, getRewardsEst, getLockableDurations } from "./query.rpc.func";
/**
 * ModuleToDistributeCoins returns coins that are going to be distributed
 * @name useGetModuleToDistributeCoins
 * @package osmosis.incentives
 * @see proto service: osmosis.incentives.ModuleToDistributeCoins
 */
export const useGetModuleToDistributeCoins = buildUseQuery<ModuleToDistributeCoinsRequest, ModuleToDistributeCoinsResponse>({
  builderQueryFn: getModuleToDistributeCoins,
  queryKeyPrefix: "ModuleToDistributeCoinsQuery"
});
/**
 * GaugeByID returns gauges by their respective ID
 * @name useGetGaugeByID
 * @package osmosis.incentives
 * @see proto service: osmosis.incentives.GaugeByID
 */
export const useGetGaugeByID = buildUseQuery<GaugeByIDRequest, GaugeByIDResponse>({
  builderQueryFn: getGaugeByID,
  queryKeyPrefix: "GaugeByIDQuery"
});
/**
 * Gauges returns both upcoming and active gauges
 * @name useGetGauges
 * @package osmosis.incentives
 * @see proto service: osmosis.incentives.Gauges
 */
export const useGetGauges = buildUseQuery<GaugesRequest, GaugesResponse>({
  builderQueryFn: getGauges,
  queryKeyPrefix: "GaugesQuery"
});
/**
 * ActiveGauges returns active gauges
 * @name useGetActiveGauges
 * @package osmosis.incentives
 * @see proto service: osmosis.incentives.ActiveGauges
 */
export const useGetActiveGauges = buildUseQuery<ActiveGaugesRequest, ActiveGaugesResponse>({
  builderQueryFn: getActiveGauges,
  queryKeyPrefix: "ActiveGaugesQuery"
});
/**
 * ActiveGaugesPerDenom returns active gauges by denom
 * @name useGetActiveGaugesPerDenom
 * @package osmosis.incentives
 * @see proto service: osmosis.incentives.ActiveGaugesPerDenom
 */
export const useGetActiveGaugesPerDenom = buildUseQuery<ActiveGaugesPerDenomRequest, ActiveGaugesPerDenomResponse>({
  builderQueryFn: getActiveGaugesPerDenom,
  queryKeyPrefix: "ActiveGaugesPerDenomQuery"
});
/**
 * Returns scheduled gauges that have not yet occured
 * @name useGetUpcomingGauges
 * @package osmosis.incentives
 * @see proto service: osmosis.incentives.UpcomingGauges
 */
export const useGetUpcomingGauges = buildUseQuery<UpcomingGaugesRequest, UpcomingGaugesResponse>({
  builderQueryFn: getUpcomingGauges,
  queryKeyPrefix: "UpcomingGaugesQuery"
});
/**
 * UpcomingGaugesPerDenom returns scheduled gauges that have not yet occured
 * by denom
 * @name useGetUpcomingGaugesPerDenom
 * @package osmosis.incentives
 * @see proto service: osmosis.incentives.UpcomingGaugesPerDenom
 */
export const useGetUpcomingGaugesPerDenom = buildUseQuery<UpcomingGaugesPerDenomRequest, UpcomingGaugesPerDenomResponse>({
  builderQueryFn: getUpcomingGaugesPerDenom,
  queryKeyPrefix: "UpcomingGaugesPerDenomQuery"
});
/**
 * RewardsEst returns an estimate of the rewards from now until a specified
 * time in the future The querier either provides an address or a set of locks
 * for which they want to find the associated rewards
 * @name useGetRewardsEst
 * @package osmosis.incentives
 * @see proto service: osmosis.incentives.RewardsEst
 */
export const useGetRewardsEst = buildUseQuery<RewardsEstRequest, RewardsEstResponse>({
  builderQueryFn: getRewardsEst,
  queryKeyPrefix: "RewardsEstQuery"
});
/**
 * LockableDurations returns lockable durations that are valid to distribute
 * incentives for
 * @name useGetLockableDurations
 * @package osmosis.incentives
 * @see proto service: osmosis.incentives.LockableDurations
 */
export const useGetLockableDurations = buildUseQuery<QueryLockableDurationsRequest, QueryLockableDurationsResponse>({
  builderQueryFn: getLockableDurations,
  queryKeyPrefix: "LockableDurationsQuery"
});