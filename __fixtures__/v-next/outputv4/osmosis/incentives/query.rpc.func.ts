import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../cosmos/base/query/v1beta1/pagination.js";
import { Coin, CoinSDKType } from "../../cosmos/base/v1beta1/coin.js";
import { Gauge, GaugeSDKType } from "./gauge.js";
import { Duration, DurationSDKType } from "../../google/protobuf/duration.js";
import { EndpointOrRpc, buildQuery } from "../../helper-func-types.js";
import { ModuleToDistributeCoinsRequest, ModuleToDistributeCoinsRequestSDKType, ModuleToDistributeCoinsResponse, ModuleToDistributeCoinsResponseSDKType, GaugeByIDRequest, GaugeByIDRequestSDKType, GaugeByIDResponse, GaugeByIDResponseSDKType, GaugesRequest, GaugesRequestSDKType, GaugesResponse, GaugesResponseSDKType, ActiveGaugesRequest, ActiveGaugesRequestSDKType, ActiveGaugesResponse, ActiveGaugesResponseSDKType, ActiveGaugesPerDenomRequest, ActiveGaugesPerDenomRequestSDKType, ActiveGaugesPerDenomResponse, ActiveGaugesPerDenomResponseSDKType, UpcomingGaugesRequest, UpcomingGaugesRequestSDKType, UpcomingGaugesResponse, UpcomingGaugesResponseSDKType, UpcomingGaugesPerDenomRequest, UpcomingGaugesPerDenomRequestSDKType, UpcomingGaugesPerDenomResponse, UpcomingGaugesPerDenomResponseSDKType, RewardsEstRequest, RewardsEstRequestSDKType, RewardsEstResponse, RewardsEstResponseSDKType, QueryLockableDurationsRequest, QueryLockableDurationsRequestSDKType, QueryLockableDurationsResponse, QueryLockableDurationsResponseSDKType } from "./query.js";
/**
 * ModuleToDistributeCoins returns coins that are going to be distributed
 * @name getModuleToDistributeCoins
 * @package osmosis.incentives
 * @see proto service: osmosis.incentives.ModuleToDistributeCoins
 */
export const getModuleToDistributeCoins = buildQuery<ModuleToDistributeCoinsRequest, ModuleToDistributeCoinsResponse>({
  encode: ModuleToDistributeCoinsRequest.encode,
  decode: ModuleToDistributeCoinsResponse.decode,
  service: "osmosis.incentives.Query",
  method: "ModuleToDistributeCoins"
});
/**
 * GaugeByID returns gauges by their respective ID
 * @name getGaugeByID
 * @package osmosis.incentives
 * @see proto service: osmosis.incentives.GaugeByID
 */
export const getGaugeByID = buildQuery<GaugeByIDRequest, GaugeByIDResponse>({
  encode: GaugeByIDRequest.encode,
  decode: GaugeByIDResponse.decode,
  service: "osmosis.incentives.Query",
  method: "GaugeByID"
});
/**
 * Gauges returns both upcoming and active gauges
 * @name getGauges
 * @package osmosis.incentives
 * @see proto service: osmosis.incentives.Gauges
 */
export const getGauges = buildQuery<GaugesRequest, GaugesResponse>({
  encode: GaugesRequest.encode,
  decode: GaugesResponse.decode,
  service: "osmosis.incentives.Query",
  method: "Gauges"
});
/**
 * ActiveGauges returns active gauges
 * @name getActiveGauges
 * @package osmosis.incentives
 * @see proto service: osmosis.incentives.ActiveGauges
 */
export const getActiveGauges = buildQuery<ActiveGaugesRequest, ActiveGaugesResponse>({
  encode: ActiveGaugesRequest.encode,
  decode: ActiveGaugesResponse.decode,
  service: "osmosis.incentives.Query",
  method: "ActiveGauges"
});
/**
 * ActiveGaugesPerDenom returns active gauges by denom
 * @name getActiveGaugesPerDenom
 * @package osmosis.incentives
 * @see proto service: osmosis.incentives.ActiveGaugesPerDenom
 */
export const getActiveGaugesPerDenom = buildQuery<ActiveGaugesPerDenomRequest, ActiveGaugesPerDenomResponse>({
  encode: ActiveGaugesPerDenomRequest.encode,
  decode: ActiveGaugesPerDenomResponse.decode,
  service: "osmosis.incentives.Query",
  method: "ActiveGaugesPerDenom"
});
/**
 * Returns scheduled gauges that have not yet occured
 * @name getUpcomingGauges
 * @package osmosis.incentives
 * @see proto service: osmosis.incentives.UpcomingGauges
 */
export const getUpcomingGauges = buildQuery<UpcomingGaugesRequest, UpcomingGaugesResponse>({
  encode: UpcomingGaugesRequest.encode,
  decode: UpcomingGaugesResponse.decode,
  service: "osmosis.incentives.Query",
  method: "UpcomingGauges"
});
/**
 * UpcomingGaugesPerDenom returns scheduled gauges that have not yet occured
 * by denom
 * @name getUpcomingGaugesPerDenom
 * @package osmosis.incentives
 * @see proto service: osmosis.incentives.UpcomingGaugesPerDenom
 */
export const getUpcomingGaugesPerDenom = buildQuery<UpcomingGaugesPerDenomRequest, UpcomingGaugesPerDenomResponse>({
  encode: UpcomingGaugesPerDenomRequest.encode,
  decode: UpcomingGaugesPerDenomResponse.decode,
  service: "osmosis.incentives.Query",
  method: "UpcomingGaugesPerDenom"
});
/**
 * RewardsEst returns an estimate of the rewards from now until a specified
 * time in the future The querier either provides an address or a set of locks
 * for which they want to find the associated rewards
 * @name getRewardsEst
 * @package osmosis.incentives
 * @see proto service: osmosis.incentives.RewardsEst
 */
export const getRewardsEst = buildQuery<RewardsEstRequest, RewardsEstResponse>({
  encode: RewardsEstRequest.encode,
  decode: RewardsEstResponse.decode,
  service: "osmosis.incentives.Query",
  method: "RewardsEst"
});
/**
 * LockableDurations returns lockable durations that are valid to distribute
 * incentives for
 * @name getLockableDurations
 * @package osmosis.incentives
 * @see proto service: osmosis.incentives.LockableDurations
 */
export const getLockableDurations = buildQuery<QueryLockableDurationsRequest, QueryLockableDurationsResponse>({
  encode: QueryLockableDurationsRequest.encode,
  decode: QueryLockableDurationsResponse.decode,
  service: "osmosis.incentives.Query",
  method: "LockableDurations"
});