import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { SwapAmountInRoute, SwapAmountInRouteSDKType, SwapAmountOutRoute, SwapAmountOutRouteSDKType } from "./tx";
import { Any, AnySDKType } from "../../../google/protobuf/any";
import { EndpointOrRpc, buildQuery } from "../../../helper-func-types";
import { QueryPoolsRequest, QueryPoolsRequestSDKType, QueryPoolsResponse, QueryPoolsResponseSDKType, QueryNumPoolsRequest, QueryNumPoolsRequestSDKType, QueryNumPoolsResponse, QueryNumPoolsResponseSDKType, QueryTotalLiquidityRequest, QueryTotalLiquidityRequestSDKType, QueryTotalLiquidityResponse, QueryTotalLiquidityResponseSDKType, QueryPoolsWithFilterRequest, QueryPoolsWithFilterRequestSDKType, QueryPoolsWithFilterResponse, QueryPoolsWithFilterResponseSDKType, QueryPoolRequest, QueryPoolRequestSDKType, QueryPoolResponse, QueryPoolResponseSDKType, QueryPoolTypeRequest, QueryPoolTypeRequestSDKType, QueryPoolTypeResponse, QueryPoolTypeResponseSDKType, QueryCalcJoinPoolNoSwapSharesRequest, QueryCalcJoinPoolNoSwapSharesRequestSDKType, QueryCalcJoinPoolNoSwapSharesResponse, QueryCalcJoinPoolNoSwapSharesResponseSDKType, QueryCalcJoinPoolSharesRequest, QueryCalcJoinPoolSharesRequestSDKType, QueryCalcJoinPoolSharesResponse, QueryCalcJoinPoolSharesResponseSDKType, QueryCalcExitPoolCoinsFromSharesRequest, QueryCalcExitPoolCoinsFromSharesRequestSDKType, QueryCalcExitPoolCoinsFromSharesResponse, QueryCalcExitPoolCoinsFromSharesResponseSDKType, QueryPoolParamsRequest, QueryPoolParamsRequestSDKType, QueryPoolParamsResponse, QueryPoolParamsResponseSDKType, QueryTotalPoolLiquidityRequest, QueryTotalPoolLiquidityRequestSDKType, QueryTotalPoolLiquidityResponse, QueryTotalPoolLiquidityResponseSDKType, QueryTotalSharesRequest, QueryTotalSharesRequestSDKType, QueryTotalSharesResponse, QueryTotalSharesResponseSDKType, QuerySpotPriceRequest, QuerySpotPriceRequestSDKType, QuerySpotPriceResponse, QuerySpotPriceResponseSDKType, QuerySwapExactAmountInRequest, QuerySwapExactAmountInRequestSDKType, QuerySwapExactAmountInResponse, QuerySwapExactAmountInResponseSDKType, QuerySwapExactAmountOutRequest, QuerySwapExactAmountOutRequestSDKType, QuerySwapExactAmountOutResponse, QuerySwapExactAmountOutResponseSDKType } from "./query";
/**
 * @name getPools
 * @package osmosis.gamm.v1beta1
 * @see proto service: osmosis.gamm.v1beta1.Pools
 */
export const getPools = buildQuery<QueryPoolsRequest, QueryPoolsResponse>({
  encode: QueryPoolsRequest.encode,
  decode: QueryPoolsResponse.decode,
  service: "osmosis.gamm.v1beta1.Query",
  method: "Pools"
});
/**
 * @name getNumPools
 * @package osmosis.gamm.v1beta1
 * @see proto service: osmosis.gamm.v1beta1.NumPools
 */
export const getNumPools = buildQuery<QueryNumPoolsRequest, QueryNumPoolsResponse>({
  encode: QueryNumPoolsRequest.encode,
  decode: QueryNumPoolsResponse.decode,
  service: "osmosis.gamm.v1beta1.Query",
  method: "NumPools"
});
/**
 * @name getTotalLiquidity
 * @package osmosis.gamm.v1beta1
 * @see proto service: osmosis.gamm.v1beta1.TotalLiquidity
 */
export const getTotalLiquidity = buildQuery<QueryTotalLiquidityRequest, QueryTotalLiquidityResponse>({
  encode: QueryTotalLiquidityRequest.encode,
  decode: QueryTotalLiquidityResponse.decode,
  service: "osmosis.gamm.v1beta1.Query",
  method: "TotalLiquidity"
});
/**
 * PoolsWithFilter allows you to query specific pools with requested
 * parameters
 * @name getPoolsWithFilter
 * @package osmosis.gamm.v1beta1
 * @see proto service: osmosis.gamm.v1beta1.PoolsWithFilter
 */
export const getPoolsWithFilter = buildQuery<QueryPoolsWithFilterRequest, QueryPoolsWithFilterResponse>({
  encode: QueryPoolsWithFilterRequest.encode,
  decode: QueryPoolsWithFilterResponse.decode,
  service: "osmosis.gamm.v1beta1.Query",
  method: "PoolsWithFilter"
});
/**
 * Per Pool gRPC Endpoints
 * @name getPool
 * @package osmosis.gamm.v1beta1
 * @see proto service: osmosis.gamm.v1beta1.Pool
 */
export const getPool = buildQuery<QueryPoolRequest, QueryPoolResponse>({
  encode: QueryPoolRequest.encode,
  decode: QueryPoolResponse.decode,
  service: "osmosis.gamm.v1beta1.Query",
  method: "Pool"
});
/**
 * PoolType returns the type of the pool.
 * Returns "Balancer" as a string literal when the pool is a balancer pool.
 * Errors if the pool is failed to be type caseted.
 * @name getPoolType
 * @package osmosis.gamm.v1beta1
 * @see proto service: osmosis.gamm.v1beta1.PoolType
 */
export const getPoolType = buildQuery<QueryPoolTypeRequest, QueryPoolTypeResponse>({
  encode: QueryPoolTypeRequest.encode,
  decode: QueryPoolTypeResponse.decode,
  service: "osmosis.gamm.v1beta1.Query",
  method: "PoolType"
});
/**
 * Simulates joining pool without a swap. Returns the amount of shares you'd
 * get and tokens needed to provide
 * @name getCalcJoinPoolNoSwapShares
 * @package osmosis.gamm.v1beta1
 * @see proto service: osmosis.gamm.v1beta1.CalcJoinPoolNoSwapShares
 */
export const getCalcJoinPoolNoSwapShares = buildQuery<QueryCalcJoinPoolNoSwapSharesRequest, QueryCalcJoinPoolNoSwapSharesResponse>({
  encode: QueryCalcJoinPoolNoSwapSharesRequest.encode,
  decode: QueryCalcJoinPoolNoSwapSharesResponse.decode,
  service: "osmosis.gamm.v1beta1.Query",
  method: "CalcJoinPoolNoSwapShares"
});
/**
 * @name getCalcJoinPoolShares
 * @package osmosis.gamm.v1beta1
 * @see proto service: osmosis.gamm.v1beta1.CalcJoinPoolShares
 */
export const getCalcJoinPoolShares = buildQuery<QueryCalcJoinPoolSharesRequest, QueryCalcJoinPoolSharesResponse>({
  encode: QueryCalcJoinPoolSharesRequest.encode,
  decode: QueryCalcJoinPoolSharesResponse.decode,
  service: "osmosis.gamm.v1beta1.Query",
  method: "CalcJoinPoolShares"
});
/**
 * @name getCalcExitPoolCoinsFromShares
 * @package osmosis.gamm.v1beta1
 * @see proto service: osmosis.gamm.v1beta1.CalcExitPoolCoinsFromShares
 */
export const getCalcExitPoolCoinsFromShares = buildQuery<QueryCalcExitPoolCoinsFromSharesRequest, QueryCalcExitPoolCoinsFromSharesResponse>({
  encode: QueryCalcExitPoolCoinsFromSharesRequest.encode,
  decode: QueryCalcExitPoolCoinsFromSharesResponse.decode,
  service: "osmosis.gamm.v1beta1.Query",
  method: "CalcExitPoolCoinsFromShares"
});
/**
 * @name getPoolParams
 * @package osmosis.gamm.v1beta1
 * @see proto service: osmosis.gamm.v1beta1.PoolParams
 */
export const getPoolParams = buildQuery<QueryPoolParamsRequest, QueryPoolParamsResponse>({
  encode: QueryPoolParamsRequest.encode,
  decode: QueryPoolParamsResponse.decode,
  service: "osmosis.gamm.v1beta1.Query",
  method: "PoolParams"
});
/**
 * @name getTotalPoolLiquidity
 * @package osmosis.gamm.v1beta1
 * @see proto service: osmosis.gamm.v1beta1.TotalPoolLiquidity
 */
export const getTotalPoolLiquidity = buildQuery<QueryTotalPoolLiquidityRequest, QueryTotalPoolLiquidityResponse>({
  encode: QueryTotalPoolLiquidityRequest.encode,
  decode: QueryTotalPoolLiquidityResponse.decode,
  service: "osmosis.gamm.v1beta1.Query",
  method: "TotalPoolLiquidity"
});
/**
 * @name getTotalShares
 * @package osmosis.gamm.v1beta1
 * @see proto service: osmosis.gamm.v1beta1.TotalShares
 */
export const getTotalShares = buildQuery<QueryTotalSharesRequest, QueryTotalSharesResponse>({
  encode: QueryTotalSharesRequest.encode,
  decode: QueryTotalSharesResponse.decode,
  service: "osmosis.gamm.v1beta1.Query",
  method: "TotalShares"
});
/**
 * SpotPrice defines a gRPC query handler that returns the spot price given
 * a base denomination and a quote denomination.
 * @name getSpotPrice
 * @package osmosis.gamm.v1beta1
 * @see proto service: osmosis.gamm.v1beta1.SpotPrice
 * @deprecated
 */
export const getSpotPrice = buildQuery<QuerySpotPriceRequest, QuerySpotPriceResponse>({
  encode: QuerySpotPriceRequest.encode,
  decode: QuerySpotPriceResponse.decode,
  service: "osmosis.gamm.v1beta1.Query",
  method: "SpotPrice"
});
/**
 * Estimate the swap.
 * @name getEstimateSwapExactAmountIn
 * @package osmosis.gamm.v1beta1
 * @see proto service: osmosis.gamm.v1beta1.EstimateSwapExactAmountIn
 */
export const getEstimateSwapExactAmountIn = buildQuery<QuerySwapExactAmountInRequest, QuerySwapExactAmountInResponse>({
  encode: QuerySwapExactAmountInRequest.encode,
  decode: QuerySwapExactAmountInResponse.decode,
  service: "osmosis.gamm.v1beta1.Query",
  method: "EstimateSwapExactAmountIn"
});
/**
 * @name getEstimateSwapExactAmountOut
 * @package osmosis.gamm.v1beta1
 * @see proto service: osmosis.gamm.v1beta1.EstimateSwapExactAmountOut
 */
export const getEstimateSwapExactAmountOut = buildQuery<QuerySwapExactAmountOutRequest, QuerySwapExactAmountOutResponse>({
  encode: QuerySwapExactAmountOutRequest.encode,
  decode: QuerySwapExactAmountOutResponse.decode,
  service: "osmosis.gamm.v1beta1.Query",
  method: "EstimateSwapExactAmountOut"
});