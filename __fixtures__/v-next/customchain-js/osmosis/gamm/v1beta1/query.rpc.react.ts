import { buildUseQuery } from "../../../react-query";
import type { QueryPoolsRequest, QueryPoolsResponse, QueryNumPoolsRequest, QueryNumPoolsResponse, QueryTotalLiquidityRequest, QueryTotalLiquidityResponse, QueryPoolsWithFilterRequest, QueryPoolsWithFilterResponse, QueryPoolRequest, QueryPoolResponse, QueryPoolTypeRequest, QueryPoolTypeResponse, QueryCalcJoinPoolNoSwapSharesRequest, QueryCalcJoinPoolNoSwapSharesResponse, QueryCalcJoinPoolSharesRequest, QueryCalcJoinPoolSharesResponse, QueryCalcExitPoolCoinsFromSharesRequest, QueryCalcExitPoolCoinsFromSharesResponse, QueryPoolParamsRequest, QueryPoolParamsResponse, QueryTotalPoolLiquidityRequest, QueryTotalPoolLiquidityResponse, QueryTotalSharesRequest, QueryTotalSharesResponse, QuerySpotPriceRequest, QuerySpotPriceResponse, QuerySwapExactAmountInRequest, QuerySwapExactAmountInResponse, QuerySwapExactAmountOutRequest, QuerySwapExactAmountOutResponse } from "./query";
import { getPools, getNumPools, getTotalLiquidity, getPoolsWithFilter, getPool, getPoolType, getCalcJoinPoolNoSwapShares, getCalcJoinPoolShares, getCalcExitPoolCoinsFromShares, getPoolParams, getTotalPoolLiquidity, getTotalShares, getSpotPrice, getEstimateSwapExactAmountIn, getEstimateSwapExactAmountOut } from "./query.rpc.func";
/**
 * @name useGetPools
 * @package osmosis.gamm.v1beta1
 * @see proto service: osmosis.gamm.v1beta1.Pools
 */
export const useGetPools = buildUseQuery<QueryPoolsRequest, QueryPoolsResponse>({
  builderQueryFn: getPools,
  queryKeyPrefix: "PoolsQuery"
});
/**
 * @name useGetNumPools
 * @package osmosis.gamm.v1beta1
 * @see proto service: osmosis.gamm.v1beta1.NumPools
 */
export const useGetNumPools = buildUseQuery<QueryNumPoolsRequest, QueryNumPoolsResponse>({
  builderQueryFn: getNumPools,
  queryKeyPrefix: "NumPoolsQuery"
});
/**
 * @name useGetTotalLiquidity
 * @package osmosis.gamm.v1beta1
 * @see proto service: osmosis.gamm.v1beta1.TotalLiquidity
 */
export const useGetTotalLiquidity = buildUseQuery<QueryTotalLiquidityRequest, QueryTotalLiquidityResponse>({
  builderQueryFn: getTotalLiquidity,
  queryKeyPrefix: "TotalLiquidityQuery"
});
/**
 * PoolsWithFilter allows you to query specific pools with requested
 * parameters
 * @name useGetPoolsWithFilter
 * @package osmosis.gamm.v1beta1
 * @see proto service: osmosis.gamm.v1beta1.PoolsWithFilter
 */
export const useGetPoolsWithFilter = buildUseQuery<QueryPoolsWithFilterRequest, QueryPoolsWithFilterResponse>({
  builderQueryFn: getPoolsWithFilter,
  queryKeyPrefix: "PoolsWithFilterQuery"
});
/**
 * Per Pool gRPC Endpoints
 * @name useGetPool
 * @package osmosis.gamm.v1beta1
 * @see proto service: osmosis.gamm.v1beta1.Pool
 */
export const useGetPool = buildUseQuery<QueryPoolRequest, QueryPoolResponse>({
  builderQueryFn: getPool,
  queryKeyPrefix: "PoolQuery"
});
/**
 * PoolType returns the type of the pool.
 * Returns "Balancer" as a string literal when the pool is a balancer pool.
 * Errors if the pool is failed to be type caseted.
 * @name useGetPoolType
 * @package osmosis.gamm.v1beta1
 * @see proto service: osmosis.gamm.v1beta1.PoolType
 */
export const useGetPoolType = buildUseQuery<QueryPoolTypeRequest, QueryPoolTypeResponse>({
  builderQueryFn: getPoolType,
  queryKeyPrefix: "PoolTypeQuery"
});
/**
 * Simulates joining pool without a swap. Returns the amount of shares you'd
 * get and tokens needed to provide
 * @name useGetCalcJoinPoolNoSwapShares
 * @package osmosis.gamm.v1beta1
 * @see proto service: osmosis.gamm.v1beta1.CalcJoinPoolNoSwapShares
 */
export const useGetCalcJoinPoolNoSwapShares = buildUseQuery<QueryCalcJoinPoolNoSwapSharesRequest, QueryCalcJoinPoolNoSwapSharesResponse>({
  builderQueryFn: getCalcJoinPoolNoSwapShares,
  queryKeyPrefix: "CalcJoinPoolNoSwapSharesQuery"
});
/**
 * @name useGetCalcJoinPoolShares
 * @package osmosis.gamm.v1beta1
 * @see proto service: osmosis.gamm.v1beta1.CalcJoinPoolShares
 */
export const useGetCalcJoinPoolShares = buildUseQuery<QueryCalcJoinPoolSharesRequest, QueryCalcJoinPoolSharesResponse>({
  builderQueryFn: getCalcJoinPoolShares,
  queryKeyPrefix: "CalcJoinPoolSharesQuery"
});
/**
 * @name useGetCalcExitPoolCoinsFromShares
 * @package osmosis.gamm.v1beta1
 * @see proto service: osmosis.gamm.v1beta1.CalcExitPoolCoinsFromShares
 */
export const useGetCalcExitPoolCoinsFromShares = buildUseQuery<QueryCalcExitPoolCoinsFromSharesRequest, QueryCalcExitPoolCoinsFromSharesResponse>({
  builderQueryFn: getCalcExitPoolCoinsFromShares,
  queryKeyPrefix: "CalcExitPoolCoinsFromSharesQuery"
});
/**
 * @name useGetPoolParams
 * @package osmosis.gamm.v1beta1
 * @see proto service: osmosis.gamm.v1beta1.PoolParams
 */
export const useGetPoolParams = buildUseQuery<QueryPoolParamsRequest, QueryPoolParamsResponse>({
  builderQueryFn: getPoolParams,
  queryKeyPrefix: "PoolParamsQuery"
});
/**
 * @name useGetTotalPoolLiquidity
 * @package osmosis.gamm.v1beta1
 * @see proto service: osmosis.gamm.v1beta1.TotalPoolLiquidity
 */
export const useGetTotalPoolLiquidity = buildUseQuery<QueryTotalPoolLiquidityRequest, QueryTotalPoolLiquidityResponse>({
  builderQueryFn: getTotalPoolLiquidity,
  queryKeyPrefix: "TotalPoolLiquidityQuery"
});
/**
 * @name useGetTotalShares
 * @package osmosis.gamm.v1beta1
 * @see proto service: osmosis.gamm.v1beta1.TotalShares
 */
export const useGetTotalShares = buildUseQuery<QueryTotalSharesRequest, QueryTotalSharesResponse>({
  builderQueryFn: getTotalShares,
  queryKeyPrefix: "TotalSharesQuery"
});
/**
 * SpotPrice defines a gRPC query handler that returns the spot price given
 * a base denomination and a quote denomination.
 * @name useGetSpotPrice
 * @package osmosis.gamm.v1beta1
 * @see proto service: osmosis.gamm.v1beta1.SpotPrice
 * @deprecated
 */
export const useGetSpotPrice = buildUseQuery<QuerySpotPriceRequest, QuerySpotPriceResponse>({
  builderQueryFn: getSpotPrice,
  queryKeyPrefix: "SpotPriceQuery"
});
/**
 * Estimate the swap.
 * @name useGetEstimateSwapExactAmountIn
 * @package osmosis.gamm.v1beta1
 * @see proto service: osmosis.gamm.v1beta1.EstimateSwapExactAmountIn
 */
export const useGetEstimateSwapExactAmountIn = buildUseQuery<QuerySwapExactAmountInRequest, QuerySwapExactAmountInResponse>({
  builderQueryFn: getEstimateSwapExactAmountIn,
  queryKeyPrefix: "EstimateSwapExactAmountInQuery"
});
/**
 * @name useGetEstimateSwapExactAmountOut
 * @package osmosis.gamm.v1beta1
 * @see proto service: osmosis.gamm.v1beta1.EstimateSwapExactAmountOut
 */
export const useGetEstimateSwapExactAmountOut = buildUseQuery<QuerySwapExactAmountOutRequest, QuerySwapExactAmountOutResponse>({
  builderQueryFn: getEstimateSwapExactAmountOut,
  queryKeyPrefix: "EstimateSwapExactAmountOutQuery"
});