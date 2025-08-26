import { PageRequest, PageRequestAmino, PageRequestSDKType, PageResponse, PageResponseAmino, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { SwapAmountInRoute, SwapAmountInRouteAmino, SwapAmountInRouteSDKType, SwapAmountOutRoute, SwapAmountOutRouteAmino, SwapAmountOutRouteSDKType } from "./tx";
import { Any, AnyProtoMsg, AnyAmino, AnySDKType } from "../../../google/protobuf/any";
import { Pool as Pool1 } from "../pool-models/balancer/balancerPool";
import { PoolProtoMsg as Pool1ProtoMsg } from "../pool-models/balancer/balancerPool";
import { PoolSDKType as Pool1SDKType } from "../pool-models/balancer/balancerPool";
import { Pool as Pool2 } from "../pool-models/stableswap/stableswap_pool";
import { PoolProtoMsg as Pool2ProtoMsg } from "../pool-models/stableswap/stableswap_pool";
import { PoolSDKType as Pool2SDKType } from "../pool-models/stableswap/stableswap_pool";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet, DeepPartial } from "../../../helpers";
import { GlobalDecoderRegistry } from "../../../registry";
export const protobufPackage = "osmosis.gamm.v1beta1";
/**
 * =============================== Pool
 * @name QueryPoolRequest
 * @package osmosis.gamm.v1beta1
 * @see proto type: osmosis.gamm.v1beta1.QueryPoolRequest
 */
export interface QueryPoolRequest {
  poolId: bigint;
}
export interface QueryPoolRequestProtoMsg {
  typeUrl: "/osmosis.gamm.v1beta1.QueryPoolRequest";
  value: Uint8Array;
}
/**
 * =============================== Pool
 * @name QueryPoolRequestAmino
 * @package osmosis.gamm.v1beta1
 * @see proto type: osmosis.gamm.v1beta1.QueryPoolRequest
 */
export interface QueryPoolRequestAmino {
  pool_id?: string;
}
/**
 * =============================== Pool
 * @name QueryPoolRequestSDKType
 * @package osmosis.gamm.v1beta1
 * @see proto type: osmosis.gamm.v1beta1.QueryPoolRequest
 */
export interface QueryPoolRequestSDKType {
  pool_id: bigint;
}
/**
 * @name QueryPoolResponse
 * @package osmosis.gamm.v1beta1
 * @see proto type: osmosis.gamm.v1beta1.QueryPoolResponse
 */
export interface QueryPoolResponse {
  pool?: Pool1 | Pool2 | Any | undefined;
}
export interface QueryPoolResponseProtoMsg {
  typeUrl: "/osmosis.gamm.v1beta1.QueryPoolResponse";
  value: Uint8Array;
}
export type QueryPoolResponseEncoded = Omit<QueryPoolResponse, "pool"> & {
  pool?: Pool1ProtoMsg | Pool2ProtoMsg | AnyProtoMsg | undefined;
};
/**
 * @name QueryPoolResponseAmino
 * @package osmosis.gamm.v1beta1
 * @see proto type: osmosis.gamm.v1beta1.QueryPoolResponse
 */
export interface QueryPoolResponseAmino {
  pool?: AnyAmino;
}
/**
 * @name QueryPoolResponseSDKType
 * @package osmosis.gamm.v1beta1
 * @see proto type: osmosis.gamm.v1beta1.QueryPoolResponse
 */
export interface QueryPoolResponseSDKType {
  pool?: Pool1SDKType | Pool2SDKType | AnySDKType | undefined;
}
/**
 * =============================== Pools
 * @name QueryPoolsRequest
 * @package osmosis.gamm.v1beta1
 * @see proto type: osmosis.gamm.v1beta1.QueryPoolsRequest
 */
export interface QueryPoolsRequest {
  /**
   * pagination defines an optional pagination for the request.
   */
  pagination?: PageRequest;
}
export interface QueryPoolsRequestProtoMsg {
  typeUrl: "/osmosis.gamm.v1beta1.QueryPoolsRequest";
  value: Uint8Array;
}
/**
 * =============================== Pools
 * @name QueryPoolsRequestAmino
 * @package osmosis.gamm.v1beta1
 * @see proto type: osmosis.gamm.v1beta1.QueryPoolsRequest
 */
export interface QueryPoolsRequestAmino {
  /**
   * pagination defines an optional pagination for the request.
   */
  pagination?: PageRequestAmino;
}
/**
 * =============================== Pools
 * @name QueryPoolsRequestSDKType
 * @package osmosis.gamm.v1beta1
 * @see proto type: osmosis.gamm.v1beta1.QueryPoolsRequest
 */
export interface QueryPoolsRequestSDKType {
  pagination?: PageRequestSDKType;
}
/**
 * @name QueryPoolsResponse
 * @package osmosis.gamm.v1beta1
 * @see proto type: osmosis.gamm.v1beta1.QueryPoolsResponse
 */
export interface QueryPoolsResponse {
  pools: (Pool1 | Pool2 | Any)[] | Any[];
  /**
   * pagination defines the pagination in the response.
   */
  pagination?: PageResponse;
}
export interface QueryPoolsResponseProtoMsg {
  typeUrl: "/osmosis.gamm.v1beta1.QueryPoolsResponse";
  value: Uint8Array;
}
export type QueryPoolsResponseEncoded = Omit<QueryPoolsResponse, "pools"> & {
  pools: (Pool1ProtoMsg | Pool2ProtoMsg | AnyProtoMsg)[];
};
/**
 * @name QueryPoolsResponseAmino
 * @package osmosis.gamm.v1beta1
 * @see proto type: osmosis.gamm.v1beta1.QueryPoolsResponse
 */
export interface QueryPoolsResponseAmino {
  pools?: AnyAmino[];
  /**
   * pagination defines the pagination in the response.
   */
  pagination?: PageResponseAmino;
}
/**
 * @name QueryPoolsResponseSDKType
 * @package osmosis.gamm.v1beta1
 * @see proto type: osmosis.gamm.v1beta1.QueryPoolsResponse
 */
export interface QueryPoolsResponseSDKType {
  pools: (Pool1SDKType | Pool2SDKType | AnySDKType)[];
  pagination?: PageResponseSDKType;
}
/**
 * =============================== NumPools
 * @name QueryNumPoolsRequest
 * @package osmosis.gamm.v1beta1
 * @see proto type: osmosis.gamm.v1beta1.QueryNumPoolsRequest
 */
export interface QueryNumPoolsRequest {}
export interface QueryNumPoolsRequestProtoMsg {
  typeUrl: "/osmosis.gamm.v1beta1.QueryNumPoolsRequest";
  value: Uint8Array;
}
/**
 * =============================== NumPools
 * @name QueryNumPoolsRequestAmino
 * @package osmosis.gamm.v1beta1
 * @see proto type: osmosis.gamm.v1beta1.QueryNumPoolsRequest
 */
export interface QueryNumPoolsRequestAmino {}
/**
 * =============================== NumPools
 * @name QueryNumPoolsRequestSDKType
 * @package osmosis.gamm.v1beta1
 * @see proto type: osmosis.gamm.v1beta1.QueryNumPoolsRequest
 */
export interface QueryNumPoolsRequestSDKType {}
/**
 * @name QueryNumPoolsResponse
 * @package osmosis.gamm.v1beta1
 * @see proto type: osmosis.gamm.v1beta1.QueryNumPoolsResponse
 */
export interface QueryNumPoolsResponse {
  numPools: bigint;
}
export interface QueryNumPoolsResponseProtoMsg {
  typeUrl: "/osmosis.gamm.v1beta1.QueryNumPoolsResponse";
  value: Uint8Array;
}
/**
 * @name QueryNumPoolsResponseAmino
 * @package osmosis.gamm.v1beta1
 * @see proto type: osmosis.gamm.v1beta1.QueryNumPoolsResponse
 */
export interface QueryNumPoolsResponseAmino {
  num_pools?: string;
}
/**
 * @name QueryNumPoolsResponseSDKType
 * @package osmosis.gamm.v1beta1
 * @see proto type: osmosis.gamm.v1beta1.QueryNumPoolsResponse
 */
export interface QueryNumPoolsResponseSDKType {
  num_pools: bigint;
}
/**
 * =============================== PoolType
 * @name QueryPoolTypeRequest
 * @package osmosis.gamm.v1beta1
 * @see proto type: osmosis.gamm.v1beta1.QueryPoolTypeRequest
 */
export interface QueryPoolTypeRequest {
  poolId: bigint;
}
export interface QueryPoolTypeRequestProtoMsg {
  typeUrl: "/osmosis.gamm.v1beta1.QueryPoolTypeRequest";
  value: Uint8Array;
}
/**
 * =============================== PoolType
 * @name QueryPoolTypeRequestAmino
 * @package osmosis.gamm.v1beta1
 * @see proto type: osmosis.gamm.v1beta1.QueryPoolTypeRequest
 */
export interface QueryPoolTypeRequestAmino {
  pool_id?: string;
}
/**
 * =============================== PoolType
 * @name QueryPoolTypeRequestSDKType
 * @package osmosis.gamm.v1beta1
 * @see proto type: osmosis.gamm.v1beta1.QueryPoolTypeRequest
 */
export interface QueryPoolTypeRequestSDKType {
  pool_id: bigint;
}
/**
 * @name QueryPoolTypeResponse
 * @package osmosis.gamm.v1beta1
 * @see proto type: osmosis.gamm.v1beta1.QueryPoolTypeResponse
 */
export interface QueryPoolTypeResponse {
  poolType: string;
}
export interface QueryPoolTypeResponseProtoMsg {
  typeUrl: "/osmosis.gamm.v1beta1.QueryPoolTypeResponse";
  value: Uint8Array;
}
/**
 * @name QueryPoolTypeResponseAmino
 * @package osmosis.gamm.v1beta1
 * @see proto type: osmosis.gamm.v1beta1.QueryPoolTypeResponse
 */
export interface QueryPoolTypeResponseAmino {
  pool_type?: string;
}
/**
 * @name QueryPoolTypeResponseSDKType
 * @package osmosis.gamm.v1beta1
 * @see proto type: osmosis.gamm.v1beta1.QueryPoolTypeResponse
 */
export interface QueryPoolTypeResponseSDKType {
  pool_type: string;
}
/**
 * =============================== CalcJoinPoolShares
 * @name QueryCalcJoinPoolSharesRequest
 * @package osmosis.gamm.v1beta1
 * @see proto type: osmosis.gamm.v1beta1.QueryCalcJoinPoolSharesRequest
 */
export interface QueryCalcJoinPoolSharesRequest {
  poolId: bigint;
  tokensIn: Coin[];
}
export interface QueryCalcJoinPoolSharesRequestProtoMsg {
  typeUrl: "/osmosis.gamm.v1beta1.QueryCalcJoinPoolSharesRequest";
  value: Uint8Array;
}
/**
 * =============================== CalcJoinPoolShares
 * @name QueryCalcJoinPoolSharesRequestAmino
 * @package osmosis.gamm.v1beta1
 * @see proto type: osmosis.gamm.v1beta1.QueryCalcJoinPoolSharesRequest
 */
export interface QueryCalcJoinPoolSharesRequestAmino {
  pool_id?: string;
  tokens_in?: CoinAmino[];
}
/**
 * =============================== CalcJoinPoolShares
 * @name QueryCalcJoinPoolSharesRequestSDKType
 * @package osmosis.gamm.v1beta1
 * @see proto type: osmosis.gamm.v1beta1.QueryCalcJoinPoolSharesRequest
 */
export interface QueryCalcJoinPoolSharesRequestSDKType {
  pool_id: bigint;
  tokens_in: CoinSDKType[];
}
/**
 * @name QueryCalcJoinPoolSharesResponse
 * @package osmosis.gamm.v1beta1
 * @see proto type: osmosis.gamm.v1beta1.QueryCalcJoinPoolSharesResponse
 */
export interface QueryCalcJoinPoolSharesResponse {
  shareOutAmount: string;
  tokensOut: Coin[];
}
export interface QueryCalcJoinPoolSharesResponseProtoMsg {
  typeUrl: "/osmosis.gamm.v1beta1.QueryCalcJoinPoolSharesResponse";
  value: Uint8Array;
}
/**
 * @name QueryCalcJoinPoolSharesResponseAmino
 * @package osmosis.gamm.v1beta1
 * @see proto type: osmosis.gamm.v1beta1.QueryCalcJoinPoolSharesResponse
 */
export interface QueryCalcJoinPoolSharesResponseAmino {
  share_out_amount?: string;
  tokens_out?: CoinAmino[];
}
/**
 * @name QueryCalcJoinPoolSharesResponseSDKType
 * @package osmosis.gamm.v1beta1
 * @see proto type: osmosis.gamm.v1beta1.QueryCalcJoinPoolSharesResponse
 */
export interface QueryCalcJoinPoolSharesResponseSDKType {
  share_out_amount: string;
  tokens_out: CoinSDKType[];
}
/**
 * =============================== CalcExitPoolCoinsFromShares
 * @name QueryCalcExitPoolCoinsFromSharesRequest
 * @package osmosis.gamm.v1beta1
 * @see proto type: osmosis.gamm.v1beta1.QueryCalcExitPoolCoinsFromSharesRequest
 */
export interface QueryCalcExitPoolCoinsFromSharesRequest {
  poolId: bigint;
  shareInAmount: string;
}
export interface QueryCalcExitPoolCoinsFromSharesRequestProtoMsg {
  typeUrl: "/osmosis.gamm.v1beta1.QueryCalcExitPoolCoinsFromSharesRequest";
  value: Uint8Array;
}
/**
 * =============================== CalcExitPoolCoinsFromShares
 * @name QueryCalcExitPoolCoinsFromSharesRequestAmino
 * @package osmosis.gamm.v1beta1
 * @see proto type: osmosis.gamm.v1beta1.QueryCalcExitPoolCoinsFromSharesRequest
 */
export interface QueryCalcExitPoolCoinsFromSharesRequestAmino {
  pool_id?: string;
  share_in_amount?: string;
}
/**
 * =============================== CalcExitPoolCoinsFromShares
 * @name QueryCalcExitPoolCoinsFromSharesRequestSDKType
 * @package osmosis.gamm.v1beta1
 * @see proto type: osmosis.gamm.v1beta1.QueryCalcExitPoolCoinsFromSharesRequest
 */
export interface QueryCalcExitPoolCoinsFromSharesRequestSDKType {
  pool_id: bigint;
  share_in_amount: string;
}
/**
 * @name QueryCalcExitPoolCoinsFromSharesResponse
 * @package osmosis.gamm.v1beta1
 * @see proto type: osmosis.gamm.v1beta1.QueryCalcExitPoolCoinsFromSharesResponse
 */
export interface QueryCalcExitPoolCoinsFromSharesResponse {
  tokensOut: Coin[];
}
export interface QueryCalcExitPoolCoinsFromSharesResponseProtoMsg {
  typeUrl: "/osmosis.gamm.v1beta1.QueryCalcExitPoolCoinsFromSharesResponse";
  value: Uint8Array;
}
/**
 * @name QueryCalcExitPoolCoinsFromSharesResponseAmino
 * @package osmosis.gamm.v1beta1
 * @see proto type: osmosis.gamm.v1beta1.QueryCalcExitPoolCoinsFromSharesResponse
 */
export interface QueryCalcExitPoolCoinsFromSharesResponseAmino {
  tokens_out?: CoinAmino[];
}
/**
 * @name QueryCalcExitPoolCoinsFromSharesResponseSDKType
 * @package osmosis.gamm.v1beta1
 * @see proto type: osmosis.gamm.v1beta1.QueryCalcExitPoolCoinsFromSharesResponse
 */
export interface QueryCalcExitPoolCoinsFromSharesResponseSDKType {
  tokens_out: CoinSDKType[];
}
/**
 * =============================== PoolParams
 * @name QueryPoolParamsRequest
 * @package osmosis.gamm.v1beta1
 * @see proto type: osmosis.gamm.v1beta1.QueryPoolParamsRequest
 */
export interface QueryPoolParamsRequest {
  poolId: bigint;
}
export interface QueryPoolParamsRequestProtoMsg {
  typeUrl: "/osmosis.gamm.v1beta1.QueryPoolParamsRequest";
  value: Uint8Array;
}
/**
 * =============================== PoolParams
 * @name QueryPoolParamsRequestAmino
 * @package osmosis.gamm.v1beta1
 * @see proto type: osmosis.gamm.v1beta1.QueryPoolParamsRequest
 */
export interface QueryPoolParamsRequestAmino {
  pool_id?: string;
}
/**
 * =============================== PoolParams
 * @name QueryPoolParamsRequestSDKType
 * @package osmosis.gamm.v1beta1
 * @see proto type: osmosis.gamm.v1beta1.QueryPoolParamsRequest
 */
export interface QueryPoolParamsRequestSDKType {
  pool_id: bigint;
}
/**
 * @name QueryPoolParamsResponse
 * @package osmosis.gamm.v1beta1
 * @see proto type: osmosis.gamm.v1beta1.QueryPoolParamsResponse
 */
export interface QueryPoolParamsResponse {
  params?: Any;
}
export interface QueryPoolParamsResponseProtoMsg {
  typeUrl: "/osmosis.gamm.v1beta1.QueryPoolParamsResponse";
  value: Uint8Array;
}
/**
 * @name QueryPoolParamsResponseAmino
 * @package osmosis.gamm.v1beta1
 * @see proto type: osmosis.gamm.v1beta1.QueryPoolParamsResponse
 */
export interface QueryPoolParamsResponseAmino {
  params?: AnyAmino;
}
/**
 * @name QueryPoolParamsResponseSDKType
 * @package osmosis.gamm.v1beta1
 * @see proto type: osmosis.gamm.v1beta1.QueryPoolParamsResponse
 */
export interface QueryPoolParamsResponseSDKType {
  params?: AnySDKType;
}
/**
 * =============================== PoolLiquidity
 * @name QueryTotalPoolLiquidityRequest
 * @package osmosis.gamm.v1beta1
 * @see proto type: osmosis.gamm.v1beta1.QueryTotalPoolLiquidityRequest
 */
export interface QueryTotalPoolLiquidityRequest {
  poolId: bigint;
}
export interface QueryTotalPoolLiquidityRequestProtoMsg {
  typeUrl: "/osmosis.gamm.v1beta1.QueryTotalPoolLiquidityRequest";
  value: Uint8Array;
}
/**
 * =============================== PoolLiquidity
 * @name QueryTotalPoolLiquidityRequestAmino
 * @package osmosis.gamm.v1beta1
 * @see proto type: osmosis.gamm.v1beta1.QueryTotalPoolLiquidityRequest
 */
export interface QueryTotalPoolLiquidityRequestAmino {
  pool_id?: string;
}
/**
 * =============================== PoolLiquidity
 * @name QueryTotalPoolLiquidityRequestSDKType
 * @package osmosis.gamm.v1beta1
 * @see proto type: osmosis.gamm.v1beta1.QueryTotalPoolLiquidityRequest
 */
export interface QueryTotalPoolLiquidityRequestSDKType {
  pool_id: bigint;
}
/**
 * @name QueryTotalPoolLiquidityResponse
 * @package osmosis.gamm.v1beta1
 * @see proto type: osmosis.gamm.v1beta1.QueryTotalPoolLiquidityResponse
 */
export interface QueryTotalPoolLiquidityResponse {
  liquidity: Coin[];
}
export interface QueryTotalPoolLiquidityResponseProtoMsg {
  typeUrl: "/osmosis.gamm.v1beta1.QueryTotalPoolLiquidityResponse";
  value: Uint8Array;
}
/**
 * @name QueryTotalPoolLiquidityResponseAmino
 * @package osmosis.gamm.v1beta1
 * @see proto type: osmosis.gamm.v1beta1.QueryTotalPoolLiquidityResponse
 */
export interface QueryTotalPoolLiquidityResponseAmino {
  liquidity?: CoinAmino[];
}
/**
 * @name QueryTotalPoolLiquidityResponseSDKType
 * @package osmosis.gamm.v1beta1
 * @see proto type: osmosis.gamm.v1beta1.QueryTotalPoolLiquidityResponse
 */
export interface QueryTotalPoolLiquidityResponseSDKType {
  liquidity: CoinSDKType[];
}
/**
 * =============================== TotalShares
 * @name QueryTotalSharesRequest
 * @package osmosis.gamm.v1beta1
 * @see proto type: osmosis.gamm.v1beta1.QueryTotalSharesRequest
 */
export interface QueryTotalSharesRequest {
  poolId: bigint;
}
export interface QueryTotalSharesRequestProtoMsg {
  typeUrl: "/osmosis.gamm.v1beta1.QueryTotalSharesRequest";
  value: Uint8Array;
}
/**
 * =============================== TotalShares
 * @name QueryTotalSharesRequestAmino
 * @package osmosis.gamm.v1beta1
 * @see proto type: osmosis.gamm.v1beta1.QueryTotalSharesRequest
 */
export interface QueryTotalSharesRequestAmino {
  pool_id?: string;
}
/**
 * =============================== TotalShares
 * @name QueryTotalSharesRequestSDKType
 * @package osmosis.gamm.v1beta1
 * @see proto type: osmosis.gamm.v1beta1.QueryTotalSharesRequest
 */
export interface QueryTotalSharesRequestSDKType {
  pool_id: bigint;
}
/**
 * @name QueryTotalSharesResponse
 * @package osmosis.gamm.v1beta1
 * @see proto type: osmosis.gamm.v1beta1.QueryTotalSharesResponse
 */
export interface QueryTotalSharesResponse {
  totalShares: Coin;
}
export interface QueryTotalSharesResponseProtoMsg {
  typeUrl: "/osmosis.gamm.v1beta1.QueryTotalSharesResponse";
  value: Uint8Array;
}
/**
 * @name QueryTotalSharesResponseAmino
 * @package osmosis.gamm.v1beta1
 * @see proto type: osmosis.gamm.v1beta1.QueryTotalSharesResponse
 */
export interface QueryTotalSharesResponseAmino {
  total_shares?: CoinAmino;
}
/**
 * @name QueryTotalSharesResponseSDKType
 * @package osmosis.gamm.v1beta1
 * @see proto type: osmosis.gamm.v1beta1.QueryTotalSharesResponse
 */
export interface QueryTotalSharesResponseSDKType {
  total_shares: CoinSDKType;
}
/**
 * =============================== CalcJoinPoolNoSwapShares
 * @name QueryCalcJoinPoolNoSwapSharesRequest
 * @package osmosis.gamm.v1beta1
 * @see proto type: osmosis.gamm.v1beta1.QueryCalcJoinPoolNoSwapSharesRequest
 */
export interface QueryCalcJoinPoolNoSwapSharesRequest {
  poolId: bigint;
  tokensIn: Coin[];
}
export interface QueryCalcJoinPoolNoSwapSharesRequestProtoMsg {
  typeUrl: "/osmosis.gamm.v1beta1.QueryCalcJoinPoolNoSwapSharesRequest";
  value: Uint8Array;
}
/**
 * =============================== CalcJoinPoolNoSwapShares
 * @name QueryCalcJoinPoolNoSwapSharesRequestAmino
 * @package osmosis.gamm.v1beta1
 * @see proto type: osmosis.gamm.v1beta1.QueryCalcJoinPoolNoSwapSharesRequest
 */
export interface QueryCalcJoinPoolNoSwapSharesRequestAmino {
  pool_id?: string;
  tokens_in?: CoinAmino[];
}
/**
 * =============================== CalcJoinPoolNoSwapShares
 * @name QueryCalcJoinPoolNoSwapSharesRequestSDKType
 * @package osmosis.gamm.v1beta1
 * @see proto type: osmosis.gamm.v1beta1.QueryCalcJoinPoolNoSwapSharesRequest
 */
export interface QueryCalcJoinPoolNoSwapSharesRequestSDKType {
  pool_id: bigint;
  tokens_in: CoinSDKType[];
}
/**
 * @name QueryCalcJoinPoolNoSwapSharesResponse
 * @package osmosis.gamm.v1beta1
 * @see proto type: osmosis.gamm.v1beta1.QueryCalcJoinPoolNoSwapSharesResponse
 */
export interface QueryCalcJoinPoolNoSwapSharesResponse {
  tokensOut: Coin[];
  sharesOut: string;
}
export interface QueryCalcJoinPoolNoSwapSharesResponseProtoMsg {
  typeUrl: "/osmosis.gamm.v1beta1.QueryCalcJoinPoolNoSwapSharesResponse";
  value: Uint8Array;
}
/**
 * @name QueryCalcJoinPoolNoSwapSharesResponseAmino
 * @package osmosis.gamm.v1beta1
 * @see proto type: osmosis.gamm.v1beta1.QueryCalcJoinPoolNoSwapSharesResponse
 */
export interface QueryCalcJoinPoolNoSwapSharesResponseAmino {
  tokens_out?: CoinAmino[];
  shares_out?: string;
}
/**
 * @name QueryCalcJoinPoolNoSwapSharesResponseSDKType
 * @package osmosis.gamm.v1beta1
 * @see proto type: osmosis.gamm.v1beta1.QueryCalcJoinPoolNoSwapSharesResponse
 */
export interface QueryCalcJoinPoolNoSwapSharesResponseSDKType {
  tokens_out: CoinSDKType[];
  shares_out: string;
}
/**
 * QuerySpotPriceRequest defines the gRPC request structure for a SpotPrice
 * query.
 * @name QuerySpotPriceRequest
 * @package osmosis.gamm.v1beta1
 * @see proto type: osmosis.gamm.v1beta1.QuerySpotPriceRequest
 * @deprecated
 */
export interface QuerySpotPriceRequest {
  poolId: bigint;
  baseAssetDenom: string;
  quoteAssetDenom: string;
}
export interface QuerySpotPriceRequestProtoMsg {
  typeUrl: "/osmosis.gamm.v1beta1.QuerySpotPriceRequest";
  value: Uint8Array;
}
/**
 * QuerySpotPriceRequest defines the gRPC request structure for a SpotPrice
 * query.
 * @name QuerySpotPriceRequestAmino
 * @package osmosis.gamm.v1beta1
 * @see proto type: osmosis.gamm.v1beta1.QuerySpotPriceRequest
 * @deprecated
 */
export interface QuerySpotPriceRequestAmino {
  pool_id?: string;
  base_asset_denom?: string;
  quote_asset_denom?: string;
}
/**
 * QuerySpotPriceRequest defines the gRPC request structure for a SpotPrice
 * query.
 * @name QuerySpotPriceRequestSDKType
 * @package osmosis.gamm.v1beta1
 * @see proto type: osmosis.gamm.v1beta1.QuerySpotPriceRequest
 * @deprecated
 */
export interface QuerySpotPriceRequestSDKType {
  pool_id: bigint;
  base_asset_denom: string;
  quote_asset_denom: string;
}
/**
 * @name QueryPoolsWithFilterRequest
 * @package osmosis.gamm.v1beta1
 * @see proto type: osmosis.gamm.v1beta1.QueryPoolsWithFilterRequest
 */
export interface QueryPoolsWithFilterRequest {
  minLiquidity: Coin[];
  poolType: string;
  pagination?: PageRequest;
}
export interface QueryPoolsWithFilterRequestProtoMsg {
  typeUrl: "/osmosis.gamm.v1beta1.QueryPoolsWithFilterRequest";
  value: Uint8Array;
}
/**
 * @name QueryPoolsWithFilterRequestAmino
 * @package osmosis.gamm.v1beta1
 * @see proto type: osmosis.gamm.v1beta1.QueryPoolsWithFilterRequest
 */
export interface QueryPoolsWithFilterRequestAmino {
  min_liquidity?: CoinAmino[];
  pool_type?: string;
  pagination?: PageRequestAmino;
}
/**
 * @name QueryPoolsWithFilterRequestSDKType
 * @package osmosis.gamm.v1beta1
 * @see proto type: osmosis.gamm.v1beta1.QueryPoolsWithFilterRequest
 */
export interface QueryPoolsWithFilterRequestSDKType {
  min_liquidity: CoinSDKType[];
  pool_type: string;
  pagination?: PageRequestSDKType;
}
/**
 * @name QueryPoolsWithFilterResponse
 * @package osmosis.gamm.v1beta1
 * @see proto type: osmosis.gamm.v1beta1.QueryPoolsWithFilterResponse
 */
export interface QueryPoolsWithFilterResponse {
  pools: (Pool1 | Pool2 | Any)[] | Any[];
  /**
   * pagination defines the pagination in the response.
   */
  pagination?: PageResponse;
}
export interface QueryPoolsWithFilterResponseProtoMsg {
  typeUrl: "/osmosis.gamm.v1beta1.QueryPoolsWithFilterResponse";
  value: Uint8Array;
}
export type QueryPoolsWithFilterResponseEncoded = Omit<QueryPoolsWithFilterResponse, "pools"> & {
  pools: (Pool1ProtoMsg | Pool2ProtoMsg | AnyProtoMsg)[];
};
/**
 * @name QueryPoolsWithFilterResponseAmino
 * @package osmosis.gamm.v1beta1
 * @see proto type: osmosis.gamm.v1beta1.QueryPoolsWithFilterResponse
 */
export interface QueryPoolsWithFilterResponseAmino {
  pools?: AnyAmino[];
  /**
   * pagination defines the pagination in the response.
   */
  pagination?: PageResponseAmino;
}
/**
 * @name QueryPoolsWithFilterResponseSDKType
 * @package osmosis.gamm.v1beta1
 * @see proto type: osmosis.gamm.v1beta1.QueryPoolsWithFilterResponse
 */
export interface QueryPoolsWithFilterResponseSDKType {
  pools: (Pool1SDKType | Pool2SDKType | AnySDKType)[];
  pagination?: PageResponseSDKType;
}
/**
 * QuerySpotPriceResponse defines the gRPC response structure for a SpotPrice
 * query.
 * @name QuerySpotPriceResponse
 * @package osmosis.gamm.v1beta1
 * @see proto type: osmosis.gamm.v1beta1.QuerySpotPriceResponse
 * @deprecated
 */
export interface QuerySpotPriceResponse {
  /**
   * String of the Dec. Ex) 10.203uatom
   */
  spotPrice: string;
}
export interface QuerySpotPriceResponseProtoMsg {
  typeUrl: "/osmosis.gamm.v1beta1.QuerySpotPriceResponse";
  value: Uint8Array;
}
/**
 * QuerySpotPriceResponse defines the gRPC response structure for a SpotPrice
 * query.
 * @name QuerySpotPriceResponseAmino
 * @package osmosis.gamm.v1beta1
 * @see proto type: osmosis.gamm.v1beta1.QuerySpotPriceResponse
 * @deprecated
 */
export interface QuerySpotPriceResponseAmino {
  /**
   * String of the Dec. Ex) 10.203uatom
   */
  spot_price?: string;
}
/**
 * QuerySpotPriceResponse defines the gRPC response structure for a SpotPrice
 * query.
 * @name QuerySpotPriceResponseSDKType
 * @package osmosis.gamm.v1beta1
 * @see proto type: osmosis.gamm.v1beta1.QuerySpotPriceResponse
 * @deprecated
 */
export interface QuerySpotPriceResponseSDKType {
  spot_price: string;
}
/**
 * =============================== EstimateSwapExactAmountIn
 * @name QuerySwapExactAmountInRequest
 * @package osmosis.gamm.v1beta1
 * @see proto type: osmosis.gamm.v1beta1.QuerySwapExactAmountInRequest
 */
export interface QuerySwapExactAmountInRequest {
  /**
   * TODO: CHANGE THIS TO RESERVED IN A PATCH RELEASE
   */
  sender: string;
  poolId: bigint;
  tokenIn: string;
  routes: SwapAmountInRoute[];
}
export interface QuerySwapExactAmountInRequestProtoMsg {
  typeUrl: "/osmosis.gamm.v1beta1.QuerySwapExactAmountInRequest";
  value: Uint8Array;
}
/**
 * =============================== EstimateSwapExactAmountIn
 * @name QuerySwapExactAmountInRequestAmino
 * @package osmosis.gamm.v1beta1
 * @see proto type: osmosis.gamm.v1beta1.QuerySwapExactAmountInRequest
 */
export interface QuerySwapExactAmountInRequestAmino {
  /**
   * TODO: CHANGE THIS TO RESERVED IN A PATCH RELEASE
   */
  sender?: string;
  pool_id?: string;
  token_in?: string;
  routes?: SwapAmountInRouteAmino[];
}
/**
 * =============================== EstimateSwapExactAmountIn
 * @name QuerySwapExactAmountInRequestSDKType
 * @package osmosis.gamm.v1beta1
 * @see proto type: osmosis.gamm.v1beta1.QuerySwapExactAmountInRequest
 */
export interface QuerySwapExactAmountInRequestSDKType {
  sender: string;
  pool_id: bigint;
  token_in: string;
  routes: SwapAmountInRouteSDKType[];
}
/**
 * @name QuerySwapExactAmountInResponse
 * @package osmosis.gamm.v1beta1
 * @see proto type: osmosis.gamm.v1beta1.QuerySwapExactAmountInResponse
 */
export interface QuerySwapExactAmountInResponse {
  tokenOutAmount: string;
}
export interface QuerySwapExactAmountInResponseProtoMsg {
  typeUrl: "/osmosis.gamm.v1beta1.QuerySwapExactAmountInResponse";
  value: Uint8Array;
}
/**
 * @name QuerySwapExactAmountInResponseAmino
 * @package osmosis.gamm.v1beta1
 * @see proto type: osmosis.gamm.v1beta1.QuerySwapExactAmountInResponse
 */
export interface QuerySwapExactAmountInResponseAmino {
  token_out_amount?: string;
}
/**
 * @name QuerySwapExactAmountInResponseSDKType
 * @package osmosis.gamm.v1beta1
 * @see proto type: osmosis.gamm.v1beta1.QuerySwapExactAmountInResponse
 */
export interface QuerySwapExactAmountInResponseSDKType {
  token_out_amount: string;
}
/**
 * =============================== EstimateSwapExactAmountOut
 * @name QuerySwapExactAmountOutRequest
 * @package osmosis.gamm.v1beta1
 * @see proto type: osmosis.gamm.v1beta1.QuerySwapExactAmountOutRequest
 */
export interface QuerySwapExactAmountOutRequest {
  /**
   * TODO: CHANGE THIS TO RESERVED IN A PATCH RELEASE
   */
  sender: string;
  poolId: bigint;
  routes: SwapAmountOutRoute[];
  tokenOut: string;
}
export interface QuerySwapExactAmountOutRequestProtoMsg {
  typeUrl: "/osmosis.gamm.v1beta1.QuerySwapExactAmountOutRequest";
  value: Uint8Array;
}
/**
 * =============================== EstimateSwapExactAmountOut
 * @name QuerySwapExactAmountOutRequestAmino
 * @package osmosis.gamm.v1beta1
 * @see proto type: osmosis.gamm.v1beta1.QuerySwapExactAmountOutRequest
 */
export interface QuerySwapExactAmountOutRequestAmino {
  /**
   * TODO: CHANGE THIS TO RESERVED IN A PATCH RELEASE
   */
  sender?: string;
  pool_id?: string;
  routes?: SwapAmountOutRouteAmino[];
  token_out?: string;
}
/**
 * =============================== EstimateSwapExactAmountOut
 * @name QuerySwapExactAmountOutRequestSDKType
 * @package osmosis.gamm.v1beta1
 * @see proto type: osmosis.gamm.v1beta1.QuerySwapExactAmountOutRequest
 */
export interface QuerySwapExactAmountOutRequestSDKType {
  sender: string;
  pool_id: bigint;
  routes: SwapAmountOutRouteSDKType[];
  token_out: string;
}
/**
 * @name QuerySwapExactAmountOutResponse
 * @package osmosis.gamm.v1beta1
 * @see proto type: osmosis.gamm.v1beta1.QuerySwapExactAmountOutResponse
 */
export interface QuerySwapExactAmountOutResponse {
  tokenInAmount: string;
}
export interface QuerySwapExactAmountOutResponseProtoMsg {
  typeUrl: "/osmosis.gamm.v1beta1.QuerySwapExactAmountOutResponse";
  value: Uint8Array;
}
/**
 * @name QuerySwapExactAmountOutResponseAmino
 * @package osmosis.gamm.v1beta1
 * @see proto type: osmosis.gamm.v1beta1.QuerySwapExactAmountOutResponse
 */
export interface QuerySwapExactAmountOutResponseAmino {
  token_in_amount?: string;
}
/**
 * @name QuerySwapExactAmountOutResponseSDKType
 * @package osmosis.gamm.v1beta1
 * @see proto type: osmosis.gamm.v1beta1.QuerySwapExactAmountOutResponse
 */
export interface QuerySwapExactAmountOutResponseSDKType {
  token_in_amount: string;
}
/**
 * @name QueryTotalLiquidityRequest
 * @package osmosis.gamm.v1beta1
 * @see proto type: osmosis.gamm.v1beta1.QueryTotalLiquidityRequest
 */
export interface QueryTotalLiquidityRequest {}
export interface QueryTotalLiquidityRequestProtoMsg {
  typeUrl: "/osmosis.gamm.v1beta1.QueryTotalLiquidityRequest";
  value: Uint8Array;
}
/**
 * @name QueryTotalLiquidityRequestAmino
 * @package osmosis.gamm.v1beta1
 * @see proto type: osmosis.gamm.v1beta1.QueryTotalLiquidityRequest
 */
export interface QueryTotalLiquidityRequestAmino {}
/**
 * @name QueryTotalLiquidityRequestSDKType
 * @package osmosis.gamm.v1beta1
 * @see proto type: osmosis.gamm.v1beta1.QueryTotalLiquidityRequest
 */
export interface QueryTotalLiquidityRequestSDKType {}
/**
 * @name QueryTotalLiquidityResponse
 * @package osmosis.gamm.v1beta1
 * @see proto type: osmosis.gamm.v1beta1.QueryTotalLiquidityResponse
 */
export interface QueryTotalLiquidityResponse {
  liquidity: Coin[];
}
export interface QueryTotalLiquidityResponseProtoMsg {
  typeUrl: "/osmosis.gamm.v1beta1.QueryTotalLiquidityResponse";
  value: Uint8Array;
}
/**
 * @name QueryTotalLiquidityResponseAmino
 * @package osmosis.gamm.v1beta1
 * @see proto type: osmosis.gamm.v1beta1.QueryTotalLiquidityResponse
 */
export interface QueryTotalLiquidityResponseAmino {
  liquidity?: CoinAmino[];
}
/**
 * @name QueryTotalLiquidityResponseSDKType
 * @package osmosis.gamm.v1beta1
 * @see proto type: osmosis.gamm.v1beta1.QueryTotalLiquidityResponse
 */
export interface QueryTotalLiquidityResponseSDKType {
  liquidity: CoinSDKType[];
}
function createBaseQueryPoolRequest(): QueryPoolRequest {
  return {
    poolId: BigInt(0)
  };
}
/**
 * =============================== Pool
 * @name QueryPoolRequest
 * @package osmosis.gamm.v1beta1
 * @see proto type: osmosis.gamm.v1beta1.QueryPoolRequest
 */
export const QueryPoolRequest = {
  typeUrl: "/osmosis.gamm.v1beta1.QueryPoolRequest",
  aminoType: "osmosis/gamm/query-pool-request",
  is(o: any): o is QueryPoolRequest {
    return o && (o.$typeUrl === QueryPoolRequest.typeUrl || typeof o.poolId === "bigint");
  },
  isSDK(o: any): o is QueryPoolRequestSDKType {
    return o && (o.$typeUrl === QueryPoolRequest.typeUrl || typeof o.pool_id === "bigint");
  },
  isAmino(o: any): o is QueryPoolRequestAmino {
    return o && (o.$typeUrl === QueryPoolRequest.typeUrl || typeof o.pool_id === "bigint");
  },
  encode(message: QueryPoolRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.poolId !== BigInt(0)) {
      writer.uint32(8).uint64(message.poolId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryPoolRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPoolRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryPoolRequest {
    const obj = createBaseQueryPoolRequest();
    if (isSet(object.poolId)) obj.poolId = BigInt(object.poolId.toString());
    return obj;
  },
  fromPartial(object: DeepPartial<QueryPoolRequest>): QueryPoolRequest {
    const message = createBaseQueryPoolRequest();
    if (object.poolId !== undefined && object.poolId !== null) {
      message.poolId = BigInt(object.poolId.toString());
    }
    return message;
  },
  fromSDK(object: QueryPoolRequestSDKType): QueryPoolRequest {
    return {
      poolId: object?.pool_id
    };
  },
  toSDK(message: QueryPoolRequest): QueryPoolRequestSDKType {
    const obj: any = {};
    obj.pool_id = message.poolId;
    return obj;
  },
  fromAmino(object: QueryPoolRequestAmino): QueryPoolRequest {
    const message = createBaseQueryPoolRequest();
    if (object.pool_id !== undefined && object.pool_id !== null) {
      message.poolId = BigInt(object.pool_id);
    }
    return message;
  },
  toAmino(message: QueryPoolRequest, useInterfaces: boolean = true): QueryPoolRequestAmino {
    const obj: any = {};
    obj.pool_id = message.poolId !== BigInt(0) ? message.poolId?.toString() : undefined;
    return obj;
  },
  fromProtoMsg(message: QueryPoolRequestProtoMsg, useInterfaces: boolean = true): QueryPoolRequest {
    return QueryPoolRequest.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryPoolRequest): Uint8Array {
    return QueryPoolRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryPoolRequest): QueryPoolRequestProtoMsg {
    return {
      typeUrl: "/osmosis.gamm.v1beta1.QueryPoolRequest",
      value: QueryPoolRequest.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseQueryPoolResponse(): QueryPoolResponse {
  return {
    pool: undefined
  };
}
/**
 * @name QueryPoolResponse
 * @package osmosis.gamm.v1beta1
 * @see proto type: osmosis.gamm.v1beta1.QueryPoolResponse
 */
export const QueryPoolResponse = {
  typeUrl: "/osmosis.gamm.v1beta1.QueryPoolResponse",
  aminoType: "osmosis/gamm/query-pool-response",
  is(o: any): o is QueryPoolResponse {
    return o && o.$typeUrl === QueryPoolResponse.typeUrl;
  },
  isSDK(o: any): o is QueryPoolResponseSDKType {
    return o && o.$typeUrl === QueryPoolResponse.typeUrl;
  },
  isAmino(o: any): o is QueryPoolResponseAmino {
    return o && o.$typeUrl === QueryPoolResponse.typeUrl;
  },
  encode(message: QueryPoolResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pool !== undefined) {
      Any.encode(GlobalDecoderRegistry.wrapAny(message.pool), writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryPoolResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPoolResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pool = GlobalDecoderRegistry.unwrapAny(reader);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryPoolResponse {
    const obj = createBaseQueryPoolResponse();
    if (isSet(object.pool)) obj.pool = GlobalDecoderRegistry.fromJSON(object.pool);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryPoolResponse>): QueryPoolResponse {
    const message = createBaseQueryPoolResponse();
    if (object.pool !== undefined && object.pool !== null) {
      message.pool = GlobalDecoderRegistry.fromPartial(object.pool);
    }
    return message;
  },
  fromSDK(object: QueryPoolResponseSDKType): QueryPoolResponse {
    return {
      pool: object.pool ? GlobalDecoderRegistry.fromSDK(object.pool) : undefined
    };
  },
  toSDK(message: QueryPoolResponse): QueryPoolResponseSDKType {
    const obj: any = {};
    message.pool !== undefined && (obj.pool = message.pool ? GlobalDecoderRegistry.toSDK(message.pool) : undefined);
    return obj;
  },
  fromAmino(object: QueryPoolResponseAmino): QueryPoolResponse {
    const message = createBaseQueryPoolResponse();
    if (object.pool !== undefined && object.pool !== null) {
      message.pool = GlobalDecoderRegistry.fromAminoMsg(object.pool);
    }
    return message;
  },
  toAmino(message: QueryPoolResponse, useInterfaces: boolean = true): QueryPoolResponseAmino {
    const obj: any = {};
    obj.pool = message.pool ? GlobalDecoderRegistry.toAminoMsg(message.pool) : undefined;
    return obj;
  },
  fromProtoMsg(message: QueryPoolResponseProtoMsg, useInterfaces: boolean = true): QueryPoolResponse {
    return QueryPoolResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryPoolResponse): Uint8Array {
    return QueryPoolResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryPoolResponse): QueryPoolResponseProtoMsg {
    return {
      typeUrl: "/osmosis.gamm.v1beta1.QueryPoolResponse",
      value: QueryPoolResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(QueryPoolResponse.typeUrl)) {
      return;
    }
    Pool1.registerTypeUrl();
    Pool2.registerTypeUrl();
  }
};
function createBaseQueryPoolsRequest(): QueryPoolsRequest {
  return {
    pagination: undefined
  };
}
/**
 * =============================== Pools
 * @name QueryPoolsRequest
 * @package osmosis.gamm.v1beta1
 * @see proto type: osmosis.gamm.v1beta1.QueryPoolsRequest
 */
export const QueryPoolsRequest = {
  typeUrl: "/osmosis.gamm.v1beta1.QueryPoolsRequest",
  aminoType: "osmosis/gamm/query-pools-request",
  is(o: any): o is QueryPoolsRequest {
    return o && o.$typeUrl === QueryPoolsRequest.typeUrl;
  },
  isSDK(o: any): o is QueryPoolsRequestSDKType {
    return o && o.$typeUrl === QueryPoolsRequest.typeUrl;
  },
  isAmino(o: any): o is QueryPoolsRequestAmino {
    return o && o.$typeUrl === QueryPoolsRequest.typeUrl;
  },
  encode(message: QueryPoolsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryPoolsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPoolsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32(), useInterfaces);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryPoolsRequest {
    const obj = createBaseQueryPoolsRequest();
    if (isSet(object.pagination)) obj.pagination = PageRequest.fromJSON(object.pagination);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryPoolsRequest>): QueryPoolsRequest {
    const message = createBaseQueryPoolsRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    }
    return message;
  },
  fromSDK(object: QueryPoolsRequestSDKType): QueryPoolsRequest {
    return {
      pagination: object.pagination ? PageRequest.fromSDK(object.pagination) : undefined
    };
  },
  toSDK(message: QueryPoolsRequest): QueryPoolsRequestSDKType {
    const obj: any = {};
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toSDK(message.pagination) : undefined);
    return obj;
  },
  fromAmino(object: QueryPoolsRequestAmino): QueryPoolsRequest {
    const message = createBaseQueryPoolsRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryPoolsRequest, useInterfaces: boolean = true): QueryPoolsRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination, useInterfaces) : undefined;
    return obj;
  },
  fromProtoMsg(message: QueryPoolsRequestProtoMsg, useInterfaces: boolean = true): QueryPoolsRequest {
    return QueryPoolsRequest.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryPoolsRequest): Uint8Array {
    return QueryPoolsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryPoolsRequest): QueryPoolsRequestProtoMsg {
    return {
      typeUrl: "/osmosis.gamm.v1beta1.QueryPoolsRequest",
      value: QueryPoolsRequest.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(QueryPoolsRequest.typeUrl)) {
      return;
    }
    PageRequest.registerTypeUrl();
  }
};
function createBaseQueryPoolsResponse(): QueryPoolsResponse {
  return {
    pools: [],
    pagination: undefined
  };
}
/**
 * @name QueryPoolsResponse
 * @package osmosis.gamm.v1beta1
 * @see proto type: osmosis.gamm.v1beta1.QueryPoolsResponse
 */
export const QueryPoolsResponse = {
  typeUrl: "/osmosis.gamm.v1beta1.QueryPoolsResponse",
  aminoType: "osmosis/gamm/query-pools-response",
  is(o: any): o is QueryPoolsResponse {
    return o && (o.$typeUrl === QueryPoolsResponse.typeUrl || Array.isArray(o.pools) && (!o.pools.length || Pool1.is(o.pools[0]) || Pool2.is(o.pools[0]) || Any.is(o.pools[0])));
  },
  isSDK(o: any): o is QueryPoolsResponseSDKType {
    return o && (o.$typeUrl === QueryPoolsResponse.typeUrl || Array.isArray(o.pools) && (!o.pools.length || Pool1.isSDK(o.pools[0]) || Pool2.isSDK(o.pools[0]) || Any.isSDK(o.pools[0])));
  },
  isAmino(o: any): o is QueryPoolsResponseAmino {
    return o && (o.$typeUrl === QueryPoolsResponse.typeUrl || Array.isArray(o.pools) && (!o.pools.length || Pool1.isAmino(o.pools[0]) || Pool2.isAmino(o.pools[0]) || Any.isAmino(o.pools[0])));
  },
  encode(message: QueryPoolsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.pools) {
      Any.encode(GlobalDecoderRegistry.wrapAny(v!), writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryPoolsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPoolsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pools.push(GlobalDecoderRegistry.unwrapAny(reader));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32(), useInterfaces);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryPoolsResponse {
    const obj = createBaseQueryPoolsResponse();
    if (Array.isArray(object?.pools)) obj.pools = object.pools.map((e: any) => GlobalDecoderRegistry.fromJSON(e));
    if (isSet(object.pagination)) obj.pagination = PageResponse.fromJSON(object.pagination);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryPoolsResponse>): QueryPoolsResponse {
    const message = createBaseQueryPoolsResponse();
    message.pools = object.pools?.map(e => (GlobalDecoderRegistry.fromPartial(e) as any)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    }
    return message;
  },
  fromSDK(object: QueryPoolsResponseSDKType): QueryPoolsResponse {
    return {
      pools: Array.isArray(object?.pools) ? object.pools.map((e: any) => GlobalDecoderRegistry.fromSDK(e)) : [],
      pagination: object.pagination ? PageResponse.fromSDK(object.pagination) : undefined
    };
  },
  toSDK(message: QueryPoolsResponse): QueryPoolsResponseSDKType {
    const obj: any = {};
    if (message.pools) {
      obj.pools = message.pools.map(e => e ? GlobalDecoderRegistry.toSDK(e) : undefined);
    } else {
      obj.pools = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toSDK(message.pagination) : undefined);
    return obj;
  },
  fromAmino(object: QueryPoolsResponseAmino): QueryPoolsResponse {
    const message = createBaseQueryPoolsResponse();
    message.pools = object.pools?.map(e => GlobalDecoderRegistry.fromAminoMsg(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryPoolsResponse, useInterfaces: boolean = true): QueryPoolsResponseAmino {
    const obj: any = {};
    if (message.pools) {
      obj.pools = message.pools.map(e => e ? GlobalDecoderRegistry.toAminoMsg(e) : undefined);
    } else {
      obj.pools = message.pools;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination, useInterfaces) : undefined;
    return obj;
  },
  fromProtoMsg(message: QueryPoolsResponseProtoMsg, useInterfaces: boolean = true): QueryPoolsResponse {
    return QueryPoolsResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryPoolsResponse): Uint8Array {
    return QueryPoolsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryPoolsResponse): QueryPoolsResponseProtoMsg {
    return {
      typeUrl: "/osmosis.gamm.v1beta1.QueryPoolsResponse",
      value: QueryPoolsResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(QueryPoolsResponse.typeUrl)) {
      return;
    }
    Pool1.registerTypeUrl();
    Pool2.registerTypeUrl();
    PageResponse.registerTypeUrl();
  }
};
function createBaseQueryNumPoolsRequest(): QueryNumPoolsRequest {
  return {};
}
/**
 * =============================== NumPools
 * @name QueryNumPoolsRequest
 * @package osmosis.gamm.v1beta1
 * @see proto type: osmosis.gamm.v1beta1.QueryNumPoolsRequest
 */
export const QueryNumPoolsRequest = {
  typeUrl: "/osmosis.gamm.v1beta1.QueryNumPoolsRequest",
  aminoType: "osmosis/gamm/query-num-pools-request",
  is(o: any): o is QueryNumPoolsRequest {
    return o && o.$typeUrl === QueryNumPoolsRequest.typeUrl;
  },
  isSDK(o: any): o is QueryNumPoolsRequestSDKType {
    return o && o.$typeUrl === QueryNumPoolsRequest.typeUrl;
  },
  isAmino(o: any): o is QueryNumPoolsRequestAmino {
    return o && o.$typeUrl === QueryNumPoolsRequest.typeUrl;
  },
  encode(_: QueryNumPoolsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryNumPoolsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryNumPoolsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_: any): QueryNumPoolsRequest {
    const obj = createBaseQueryNumPoolsRequest();
    return obj;
  },
  fromPartial(_: DeepPartial<QueryNumPoolsRequest>): QueryNumPoolsRequest {
    const message = createBaseQueryNumPoolsRequest();
    return message;
  },
  fromSDK(_: QueryNumPoolsRequestSDKType): QueryNumPoolsRequest {
    return {};
  },
  toSDK(_: QueryNumPoolsRequest): QueryNumPoolsRequestSDKType {
    const obj: any = {};
    return obj;
  },
  fromAmino(_: QueryNumPoolsRequestAmino): QueryNumPoolsRequest {
    const message = createBaseQueryNumPoolsRequest();
    return message;
  },
  toAmino(_: QueryNumPoolsRequest, useInterfaces: boolean = true): QueryNumPoolsRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromProtoMsg(message: QueryNumPoolsRequestProtoMsg, useInterfaces: boolean = true): QueryNumPoolsRequest {
    return QueryNumPoolsRequest.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryNumPoolsRequest): Uint8Array {
    return QueryNumPoolsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryNumPoolsRequest): QueryNumPoolsRequestProtoMsg {
    return {
      typeUrl: "/osmosis.gamm.v1beta1.QueryNumPoolsRequest",
      value: QueryNumPoolsRequest.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseQueryNumPoolsResponse(): QueryNumPoolsResponse {
  return {
    numPools: BigInt(0)
  };
}
/**
 * @name QueryNumPoolsResponse
 * @package osmosis.gamm.v1beta1
 * @see proto type: osmosis.gamm.v1beta1.QueryNumPoolsResponse
 */
export const QueryNumPoolsResponse = {
  typeUrl: "/osmosis.gamm.v1beta1.QueryNumPoolsResponse",
  aminoType: "osmosis/gamm/query-num-pools-response",
  is(o: any): o is QueryNumPoolsResponse {
    return o && (o.$typeUrl === QueryNumPoolsResponse.typeUrl || typeof o.numPools === "bigint");
  },
  isSDK(o: any): o is QueryNumPoolsResponseSDKType {
    return o && (o.$typeUrl === QueryNumPoolsResponse.typeUrl || typeof o.num_pools === "bigint");
  },
  isAmino(o: any): o is QueryNumPoolsResponseAmino {
    return o && (o.$typeUrl === QueryNumPoolsResponse.typeUrl || typeof o.num_pools === "bigint");
  },
  encode(message: QueryNumPoolsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.numPools !== BigInt(0)) {
      writer.uint32(8).uint64(message.numPools);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryNumPoolsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryNumPoolsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.numPools = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryNumPoolsResponse {
    const obj = createBaseQueryNumPoolsResponse();
    if (isSet(object.numPools)) obj.numPools = BigInt(object.numPools.toString());
    return obj;
  },
  fromPartial(object: DeepPartial<QueryNumPoolsResponse>): QueryNumPoolsResponse {
    const message = createBaseQueryNumPoolsResponse();
    if (object.numPools !== undefined && object.numPools !== null) {
      message.numPools = BigInt(object.numPools.toString());
    }
    return message;
  },
  fromSDK(object: QueryNumPoolsResponseSDKType): QueryNumPoolsResponse {
    return {
      numPools: object?.num_pools
    };
  },
  toSDK(message: QueryNumPoolsResponse): QueryNumPoolsResponseSDKType {
    const obj: any = {};
    obj.num_pools = message.numPools;
    return obj;
  },
  fromAmino(object: QueryNumPoolsResponseAmino): QueryNumPoolsResponse {
    const message = createBaseQueryNumPoolsResponse();
    if (object.num_pools !== undefined && object.num_pools !== null) {
      message.numPools = BigInt(object.num_pools);
    }
    return message;
  },
  toAmino(message: QueryNumPoolsResponse, useInterfaces: boolean = true): QueryNumPoolsResponseAmino {
    const obj: any = {};
    obj.num_pools = message.numPools !== BigInt(0) ? message.numPools?.toString() : undefined;
    return obj;
  },
  fromProtoMsg(message: QueryNumPoolsResponseProtoMsg, useInterfaces: boolean = true): QueryNumPoolsResponse {
    return QueryNumPoolsResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryNumPoolsResponse): Uint8Array {
    return QueryNumPoolsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryNumPoolsResponse): QueryNumPoolsResponseProtoMsg {
    return {
      typeUrl: "/osmosis.gamm.v1beta1.QueryNumPoolsResponse",
      value: QueryNumPoolsResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseQueryPoolTypeRequest(): QueryPoolTypeRequest {
  return {
    poolId: BigInt(0)
  };
}
/**
 * =============================== PoolType
 * @name QueryPoolTypeRequest
 * @package osmosis.gamm.v1beta1
 * @see proto type: osmosis.gamm.v1beta1.QueryPoolTypeRequest
 */
export const QueryPoolTypeRequest = {
  typeUrl: "/osmosis.gamm.v1beta1.QueryPoolTypeRequest",
  aminoType: "osmosis/gamm/query-pool-type-request",
  is(o: any): o is QueryPoolTypeRequest {
    return o && (o.$typeUrl === QueryPoolTypeRequest.typeUrl || typeof o.poolId === "bigint");
  },
  isSDK(o: any): o is QueryPoolTypeRequestSDKType {
    return o && (o.$typeUrl === QueryPoolTypeRequest.typeUrl || typeof o.pool_id === "bigint");
  },
  isAmino(o: any): o is QueryPoolTypeRequestAmino {
    return o && (o.$typeUrl === QueryPoolTypeRequest.typeUrl || typeof o.pool_id === "bigint");
  },
  encode(message: QueryPoolTypeRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.poolId !== BigInt(0)) {
      writer.uint32(8).uint64(message.poolId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryPoolTypeRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPoolTypeRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryPoolTypeRequest {
    const obj = createBaseQueryPoolTypeRequest();
    if (isSet(object.poolId)) obj.poolId = BigInt(object.poolId.toString());
    return obj;
  },
  fromPartial(object: DeepPartial<QueryPoolTypeRequest>): QueryPoolTypeRequest {
    const message = createBaseQueryPoolTypeRequest();
    if (object.poolId !== undefined && object.poolId !== null) {
      message.poolId = BigInt(object.poolId.toString());
    }
    return message;
  },
  fromSDK(object: QueryPoolTypeRequestSDKType): QueryPoolTypeRequest {
    return {
      poolId: object?.pool_id
    };
  },
  toSDK(message: QueryPoolTypeRequest): QueryPoolTypeRequestSDKType {
    const obj: any = {};
    obj.pool_id = message.poolId;
    return obj;
  },
  fromAmino(object: QueryPoolTypeRequestAmino): QueryPoolTypeRequest {
    const message = createBaseQueryPoolTypeRequest();
    if (object.pool_id !== undefined && object.pool_id !== null) {
      message.poolId = BigInt(object.pool_id);
    }
    return message;
  },
  toAmino(message: QueryPoolTypeRequest, useInterfaces: boolean = true): QueryPoolTypeRequestAmino {
    const obj: any = {};
    obj.pool_id = message.poolId !== BigInt(0) ? message.poolId?.toString() : undefined;
    return obj;
  },
  fromProtoMsg(message: QueryPoolTypeRequestProtoMsg, useInterfaces: boolean = true): QueryPoolTypeRequest {
    return QueryPoolTypeRequest.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryPoolTypeRequest): Uint8Array {
    return QueryPoolTypeRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryPoolTypeRequest): QueryPoolTypeRequestProtoMsg {
    return {
      typeUrl: "/osmosis.gamm.v1beta1.QueryPoolTypeRequest",
      value: QueryPoolTypeRequest.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseQueryPoolTypeResponse(): QueryPoolTypeResponse {
  return {
    poolType: ""
  };
}
/**
 * @name QueryPoolTypeResponse
 * @package osmosis.gamm.v1beta1
 * @see proto type: osmosis.gamm.v1beta1.QueryPoolTypeResponse
 */
export const QueryPoolTypeResponse = {
  typeUrl: "/osmosis.gamm.v1beta1.QueryPoolTypeResponse",
  aminoType: "osmosis/gamm/query-pool-type-response",
  is(o: any): o is QueryPoolTypeResponse {
    return o && (o.$typeUrl === QueryPoolTypeResponse.typeUrl || typeof o.poolType === "string");
  },
  isSDK(o: any): o is QueryPoolTypeResponseSDKType {
    return o && (o.$typeUrl === QueryPoolTypeResponse.typeUrl || typeof o.pool_type === "string");
  },
  isAmino(o: any): o is QueryPoolTypeResponseAmino {
    return o && (o.$typeUrl === QueryPoolTypeResponse.typeUrl || typeof o.pool_type === "string");
  },
  encode(message: QueryPoolTypeResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.poolType !== "") {
      writer.uint32(10).string(message.poolType);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryPoolTypeResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPoolTypeResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolType = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryPoolTypeResponse {
    const obj = createBaseQueryPoolTypeResponse();
    if (isSet(object.poolType)) obj.poolType = String(object.poolType);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryPoolTypeResponse>): QueryPoolTypeResponse {
    const message = createBaseQueryPoolTypeResponse();
    message.poolType = object.poolType ?? "";
    return message;
  },
  fromSDK(object: QueryPoolTypeResponseSDKType): QueryPoolTypeResponse {
    return {
      poolType: object?.pool_type
    };
  },
  toSDK(message: QueryPoolTypeResponse): QueryPoolTypeResponseSDKType {
    const obj: any = {};
    obj.pool_type = message.poolType;
    return obj;
  },
  fromAmino(object: QueryPoolTypeResponseAmino): QueryPoolTypeResponse {
    const message = createBaseQueryPoolTypeResponse();
    if (object.pool_type !== undefined && object.pool_type !== null) {
      message.poolType = object.pool_type;
    }
    return message;
  },
  toAmino(message: QueryPoolTypeResponse, useInterfaces: boolean = true): QueryPoolTypeResponseAmino {
    const obj: any = {};
    obj.pool_type = message.poolType === "" ? undefined : message.poolType;
    return obj;
  },
  fromProtoMsg(message: QueryPoolTypeResponseProtoMsg, useInterfaces: boolean = true): QueryPoolTypeResponse {
    return QueryPoolTypeResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryPoolTypeResponse): Uint8Array {
    return QueryPoolTypeResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryPoolTypeResponse): QueryPoolTypeResponseProtoMsg {
    return {
      typeUrl: "/osmosis.gamm.v1beta1.QueryPoolTypeResponse",
      value: QueryPoolTypeResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseQueryCalcJoinPoolSharesRequest(): QueryCalcJoinPoolSharesRequest {
  return {
    poolId: BigInt(0),
    tokensIn: []
  };
}
/**
 * =============================== CalcJoinPoolShares
 * @name QueryCalcJoinPoolSharesRequest
 * @package osmosis.gamm.v1beta1
 * @see proto type: osmosis.gamm.v1beta1.QueryCalcJoinPoolSharesRequest
 */
export const QueryCalcJoinPoolSharesRequest = {
  typeUrl: "/osmosis.gamm.v1beta1.QueryCalcJoinPoolSharesRequest",
  aminoType: "osmosis/gamm/query-calc-join-pool-shares-request",
  is(o: any): o is QueryCalcJoinPoolSharesRequest {
    return o && (o.$typeUrl === QueryCalcJoinPoolSharesRequest.typeUrl || typeof o.poolId === "bigint" && Array.isArray(o.tokensIn) && (!o.tokensIn.length || Coin.is(o.tokensIn[0])));
  },
  isSDK(o: any): o is QueryCalcJoinPoolSharesRequestSDKType {
    return o && (o.$typeUrl === QueryCalcJoinPoolSharesRequest.typeUrl || typeof o.pool_id === "bigint" && Array.isArray(o.tokens_in) && (!o.tokens_in.length || Coin.isSDK(o.tokens_in[0])));
  },
  isAmino(o: any): o is QueryCalcJoinPoolSharesRequestAmino {
    return o && (o.$typeUrl === QueryCalcJoinPoolSharesRequest.typeUrl || typeof o.pool_id === "bigint" && Array.isArray(o.tokens_in) && (!o.tokens_in.length || Coin.isAmino(o.tokens_in[0])));
  },
  encode(message: QueryCalcJoinPoolSharesRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.poolId !== BigInt(0)) {
      writer.uint32(8).uint64(message.poolId);
    }
    for (const v of message.tokensIn) {
      Coin.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryCalcJoinPoolSharesRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCalcJoinPoolSharesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = reader.uint64();
          break;
        case 2:
          message.tokensIn.push(Coin.decode(reader, reader.uint32(), useInterfaces));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryCalcJoinPoolSharesRequest {
    const obj = createBaseQueryCalcJoinPoolSharesRequest();
    if (isSet(object.poolId)) obj.poolId = BigInt(object.poolId.toString());
    if (Array.isArray(object?.tokensIn)) obj.tokensIn = object.tokensIn.map((e: any) => Coin.fromJSON(e));
    return obj;
  },
  fromPartial(object: DeepPartial<QueryCalcJoinPoolSharesRequest>): QueryCalcJoinPoolSharesRequest {
    const message = createBaseQueryCalcJoinPoolSharesRequest();
    if (object.poolId !== undefined && object.poolId !== null) {
      message.poolId = BigInt(object.poolId.toString());
    }
    message.tokensIn = object.tokensIn?.map(e => Coin.fromPartial(e)) || [];
    return message;
  },
  fromSDK(object: QueryCalcJoinPoolSharesRequestSDKType): QueryCalcJoinPoolSharesRequest {
    return {
      poolId: object?.pool_id,
      tokensIn: Array.isArray(object?.tokens_in) ? object.tokens_in.map((e: any) => Coin.fromSDK(e)) : []
    };
  },
  toSDK(message: QueryCalcJoinPoolSharesRequest): QueryCalcJoinPoolSharesRequestSDKType {
    const obj: any = {};
    obj.pool_id = message.poolId;
    if (message.tokensIn) {
      obj.tokens_in = message.tokensIn.map(e => e ? Coin.toSDK(e) : undefined);
    } else {
      obj.tokens_in = [];
    }
    return obj;
  },
  fromAmino(object: QueryCalcJoinPoolSharesRequestAmino): QueryCalcJoinPoolSharesRequest {
    const message = createBaseQueryCalcJoinPoolSharesRequest();
    if (object.pool_id !== undefined && object.pool_id !== null) {
      message.poolId = BigInt(object.pool_id);
    }
    message.tokensIn = object.tokens_in?.map(e => Coin.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: QueryCalcJoinPoolSharesRequest, useInterfaces: boolean = true): QueryCalcJoinPoolSharesRequestAmino {
    const obj: any = {};
    obj.pool_id = message.poolId !== BigInt(0) ? message.poolId?.toString() : undefined;
    if (message.tokensIn) {
      obj.tokens_in = message.tokensIn.map(e => e ? Coin.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.tokens_in = message.tokensIn;
    }
    return obj;
  },
  fromProtoMsg(message: QueryCalcJoinPoolSharesRequestProtoMsg, useInterfaces: boolean = true): QueryCalcJoinPoolSharesRequest {
    return QueryCalcJoinPoolSharesRequest.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryCalcJoinPoolSharesRequest): Uint8Array {
    return QueryCalcJoinPoolSharesRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryCalcJoinPoolSharesRequest): QueryCalcJoinPoolSharesRequestProtoMsg {
    return {
      typeUrl: "/osmosis.gamm.v1beta1.QueryCalcJoinPoolSharesRequest",
      value: QueryCalcJoinPoolSharesRequest.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(QueryCalcJoinPoolSharesRequest.typeUrl)) {
      return;
    }
    Coin.registerTypeUrl();
  }
};
function createBaseQueryCalcJoinPoolSharesResponse(): QueryCalcJoinPoolSharesResponse {
  return {
    shareOutAmount: "",
    tokensOut: []
  };
}
/**
 * @name QueryCalcJoinPoolSharesResponse
 * @package osmosis.gamm.v1beta1
 * @see proto type: osmosis.gamm.v1beta1.QueryCalcJoinPoolSharesResponse
 */
export const QueryCalcJoinPoolSharesResponse = {
  typeUrl: "/osmosis.gamm.v1beta1.QueryCalcJoinPoolSharesResponse",
  aminoType: "osmosis/gamm/query-calc-join-pool-shares-response",
  is(o: any): o is QueryCalcJoinPoolSharesResponse {
    return o && (o.$typeUrl === QueryCalcJoinPoolSharesResponse.typeUrl || typeof o.shareOutAmount === "string" && Array.isArray(o.tokensOut) && (!o.tokensOut.length || Coin.is(o.tokensOut[0])));
  },
  isSDK(o: any): o is QueryCalcJoinPoolSharesResponseSDKType {
    return o && (o.$typeUrl === QueryCalcJoinPoolSharesResponse.typeUrl || typeof o.share_out_amount === "string" && Array.isArray(o.tokens_out) && (!o.tokens_out.length || Coin.isSDK(o.tokens_out[0])));
  },
  isAmino(o: any): o is QueryCalcJoinPoolSharesResponseAmino {
    return o && (o.$typeUrl === QueryCalcJoinPoolSharesResponse.typeUrl || typeof o.share_out_amount === "string" && Array.isArray(o.tokens_out) && (!o.tokens_out.length || Coin.isAmino(o.tokens_out[0])));
  },
  encode(message: QueryCalcJoinPoolSharesResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.shareOutAmount !== "") {
      writer.uint32(10).string(message.shareOutAmount);
    }
    for (const v of message.tokensOut) {
      Coin.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryCalcJoinPoolSharesResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCalcJoinPoolSharesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.shareOutAmount = reader.string();
          break;
        case 2:
          message.tokensOut.push(Coin.decode(reader, reader.uint32(), useInterfaces));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryCalcJoinPoolSharesResponse {
    const obj = createBaseQueryCalcJoinPoolSharesResponse();
    if (isSet(object.shareOutAmount)) obj.shareOutAmount = String(object.shareOutAmount);
    if (Array.isArray(object?.tokensOut)) obj.tokensOut = object.tokensOut.map((e: any) => Coin.fromJSON(e));
    return obj;
  },
  fromPartial(object: DeepPartial<QueryCalcJoinPoolSharesResponse>): QueryCalcJoinPoolSharesResponse {
    const message = createBaseQueryCalcJoinPoolSharesResponse();
    message.shareOutAmount = object.shareOutAmount ?? "";
    message.tokensOut = object.tokensOut?.map(e => Coin.fromPartial(e)) || [];
    return message;
  },
  fromSDK(object: QueryCalcJoinPoolSharesResponseSDKType): QueryCalcJoinPoolSharesResponse {
    return {
      shareOutAmount: object?.share_out_amount,
      tokensOut: Array.isArray(object?.tokens_out) ? object.tokens_out.map((e: any) => Coin.fromSDK(e)) : []
    };
  },
  toSDK(message: QueryCalcJoinPoolSharesResponse): QueryCalcJoinPoolSharesResponseSDKType {
    const obj: any = {};
    obj.share_out_amount = message.shareOutAmount;
    if (message.tokensOut) {
      obj.tokens_out = message.tokensOut.map(e => e ? Coin.toSDK(e) : undefined);
    } else {
      obj.tokens_out = [];
    }
    return obj;
  },
  fromAmino(object: QueryCalcJoinPoolSharesResponseAmino): QueryCalcJoinPoolSharesResponse {
    const message = createBaseQueryCalcJoinPoolSharesResponse();
    if (object.share_out_amount !== undefined && object.share_out_amount !== null) {
      message.shareOutAmount = object.share_out_amount;
    }
    message.tokensOut = object.tokens_out?.map(e => Coin.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: QueryCalcJoinPoolSharesResponse, useInterfaces: boolean = true): QueryCalcJoinPoolSharesResponseAmino {
    const obj: any = {};
    obj.share_out_amount = message.shareOutAmount === "" ? undefined : message.shareOutAmount;
    if (message.tokensOut) {
      obj.tokens_out = message.tokensOut.map(e => e ? Coin.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.tokens_out = message.tokensOut;
    }
    return obj;
  },
  fromProtoMsg(message: QueryCalcJoinPoolSharesResponseProtoMsg, useInterfaces: boolean = true): QueryCalcJoinPoolSharesResponse {
    return QueryCalcJoinPoolSharesResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryCalcJoinPoolSharesResponse): Uint8Array {
    return QueryCalcJoinPoolSharesResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryCalcJoinPoolSharesResponse): QueryCalcJoinPoolSharesResponseProtoMsg {
    return {
      typeUrl: "/osmosis.gamm.v1beta1.QueryCalcJoinPoolSharesResponse",
      value: QueryCalcJoinPoolSharesResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(QueryCalcJoinPoolSharesResponse.typeUrl)) {
      return;
    }
    Coin.registerTypeUrl();
  }
};
function createBaseQueryCalcExitPoolCoinsFromSharesRequest(): QueryCalcExitPoolCoinsFromSharesRequest {
  return {
    poolId: BigInt(0),
    shareInAmount: ""
  };
}
/**
 * =============================== CalcExitPoolCoinsFromShares
 * @name QueryCalcExitPoolCoinsFromSharesRequest
 * @package osmosis.gamm.v1beta1
 * @see proto type: osmosis.gamm.v1beta1.QueryCalcExitPoolCoinsFromSharesRequest
 */
export const QueryCalcExitPoolCoinsFromSharesRequest = {
  typeUrl: "/osmosis.gamm.v1beta1.QueryCalcExitPoolCoinsFromSharesRequest",
  aminoType: "osmosis/gamm/query-calc-exit-pool-coins-from-shares-request",
  is(o: any): o is QueryCalcExitPoolCoinsFromSharesRequest {
    return o && (o.$typeUrl === QueryCalcExitPoolCoinsFromSharesRequest.typeUrl || typeof o.poolId === "bigint" && typeof o.shareInAmount === "string");
  },
  isSDK(o: any): o is QueryCalcExitPoolCoinsFromSharesRequestSDKType {
    return o && (o.$typeUrl === QueryCalcExitPoolCoinsFromSharesRequest.typeUrl || typeof o.pool_id === "bigint" && typeof o.share_in_amount === "string");
  },
  isAmino(o: any): o is QueryCalcExitPoolCoinsFromSharesRequestAmino {
    return o && (o.$typeUrl === QueryCalcExitPoolCoinsFromSharesRequest.typeUrl || typeof o.pool_id === "bigint" && typeof o.share_in_amount === "string");
  },
  encode(message: QueryCalcExitPoolCoinsFromSharesRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.poolId !== BigInt(0)) {
      writer.uint32(8).uint64(message.poolId);
    }
    if (message.shareInAmount !== "") {
      writer.uint32(18).string(message.shareInAmount);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryCalcExitPoolCoinsFromSharesRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCalcExitPoolCoinsFromSharesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = reader.uint64();
          break;
        case 2:
          message.shareInAmount = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryCalcExitPoolCoinsFromSharesRequest {
    const obj = createBaseQueryCalcExitPoolCoinsFromSharesRequest();
    if (isSet(object.poolId)) obj.poolId = BigInt(object.poolId.toString());
    if (isSet(object.shareInAmount)) obj.shareInAmount = String(object.shareInAmount);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryCalcExitPoolCoinsFromSharesRequest>): QueryCalcExitPoolCoinsFromSharesRequest {
    const message = createBaseQueryCalcExitPoolCoinsFromSharesRequest();
    if (object.poolId !== undefined && object.poolId !== null) {
      message.poolId = BigInt(object.poolId.toString());
    }
    message.shareInAmount = object.shareInAmount ?? "";
    return message;
  },
  fromSDK(object: QueryCalcExitPoolCoinsFromSharesRequestSDKType): QueryCalcExitPoolCoinsFromSharesRequest {
    return {
      poolId: object?.pool_id,
      shareInAmount: object?.share_in_amount
    };
  },
  toSDK(message: QueryCalcExitPoolCoinsFromSharesRequest): QueryCalcExitPoolCoinsFromSharesRequestSDKType {
    const obj: any = {};
    obj.pool_id = message.poolId;
    obj.share_in_amount = message.shareInAmount;
    return obj;
  },
  fromAmino(object: QueryCalcExitPoolCoinsFromSharesRequestAmino): QueryCalcExitPoolCoinsFromSharesRequest {
    const message = createBaseQueryCalcExitPoolCoinsFromSharesRequest();
    if (object.pool_id !== undefined && object.pool_id !== null) {
      message.poolId = BigInt(object.pool_id);
    }
    if (object.share_in_amount !== undefined && object.share_in_amount !== null) {
      message.shareInAmount = object.share_in_amount;
    }
    return message;
  },
  toAmino(message: QueryCalcExitPoolCoinsFromSharesRequest, useInterfaces: boolean = true): QueryCalcExitPoolCoinsFromSharesRequestAmino {
    const obj: any = {};
    obj.pool_id = message.poolId !== BigInt(0) ? message.poolId?.toString() : undefined;
    obj.share_in_amount = message.shareInAmount === "" ? undefined : message.shareInAmount;
    return obj;
  },
  fromProtoMsg(message: QueryCalcExitPoolCoinsFromSharesRequestProtoMsg, useInterfaces: boolean = true): QueryCalcExitPoolCoinsFromSharesRequest {
    return QueryCalcExitPoolCoinsFromSharesRequest.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryCalcExitPoolCoinsFromSharesRequest): Uint8Array {
    return QueryCalcExitPoolCoinsFromSharesRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryCalcExitPoolCoinsFromSharesRequest): QueryCalcExitPoolCoinsFromSharesRequestProtoMsg {
    return {
      typeUrl: "/osmosis.gamm.v1beta1.QueryCalcExitPoolCoinsFromSharesRequest",
      value: QueryCalcExitPoolCoinsFromSharesRequest.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseQueryCalcExitPoolCoinsFromSharesResponse(): QueryCalcExitPoolCoinsFromSharesResponse {
  return {
    tokensOut: []
  };
}
/**
 * @name QueryCalcExitPoolCoinsFromSharesResponse
 * @package osmosis.gamm.v1beta1
 * @see proto type: osmosis.gamm.v1beta1.QueryCalcExitPoolCoinsFromSharesResponse
 */
export const QueryCalcExitPoolCoinsFromSharesResponse = {
  typeUrl: "/osmosis.gamm.v1beta1.QueryCalcExitPoolCoinsFromSharesResponse",
  aminoType: "osmosis/gamm/query-calc-exit-pool-coins-from-shares-response",
  is(o: any): o is QueryCalcExitPoolCoinsFromSharesResponse {
    return o && (o.$typeUrl === QueryCalcExitPoolCoinsFromSharesResponse.typeUrl || Array.isArray(o.tokensOut) && (!o.tokensOut.length || Coin.is(o.tokensOut[0])));
  },
  isSDK(o: any): o is QueryCalcExitPoolCoinsFromSharesResponseSDKType {
    return o && (o.$typeUrl === QueryCalcExitPoolCoinsFromSharesResponse.typeUrl || Array.isArray(o.tokens_out) && (!o.tokens_out.length || Coin.isSDK(o.tokens_out[0])));
  },
  isAmino(o: any): o is QueryCalcExitPoolCoinsFromSharesResponseAmino {
    return o && (o.$typeUrl === QueryCalcExitPoolCoinsFromSharesResponse.typeUrl || Array.isArray(o.tokens_out) && (!o.tokens_out.length || Coin.isAmino(o.tokens_out[0])));
  },
  encode(message: QueryCalcExitPoolCoinsFromSharesResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.tokensOut) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryCalcExitPoolCoinsFromSharesResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCalcExitPoolCoinsFromSharesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tokensOut.push(Coin.decode(reader, reader.uint32(), useInterfaces));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryCalcExitPoolCoinsFromSharesResponse {
    const obj = createBaseQueryCalcExitPoolCoinsFromSharesResponse();
    if (Array.isArray(object?.tokensOut)) obj.tokensOut = object.tokensOut.map((e: any) => Coin.fromJSON(e));
    return obj;
  },
  fromPartial(object: DeepPartial<QueryCalcExitPoolCoinsFromSharesResponse>): QueryCalcExitPoolCoinsFromSharesResponse {
    const message = createBaseQueryCalcExitPoolCoinsFromSharesResponse();
    message.tokensOut = object.tokensOut?.map(e => Coin.fromPartial(e)) || [];
    return message;
  },
  fromSDK(object: QueryCalcExitPoolCoinsFromSharesResponseSDKType): QueryCalcExitPoolCoinsFromSharesResponse {
    return {
      tokensOut: Array.isArray(object?.tokens_out) ? object.tokens_out.map((e: any) => Coin.fromSDK(e)) : []
    };
  },
  toSDK(message: QueryCalcExitPoolCoinsFromSharesResponse): QueryCalcExitPoolCoinsFromSharesResponseSDKType {
    const obj: any = {};
    if (message.tokensOut) {
      obj.tokens_out = message.tokensOut.map(e => e ? Coin.toSDK(e) : undefined);
    } else {
      obj.tokens_out = [];
    }
    return obj;
  },
  fromAmino(object: QueryCalcExitPoolCoinsFromSharesResponseAmino): QueryCalcExitPoolCoinsFromSharesResponse {
    const message = createBaseQueryCalcExitPoolCoinsFromSharesResponse();
    message.tokensOut = object.tokens_out?.map(e => Coin.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: QueryCalcExitPoolCoinsFromSharesResponse, useInterfaces: boolean = true): QueryCalcExitPoolCoinsFromSharesResponseAmino {
    const obj: any = {};
    if (message.tokensOut) {
      obj.tokens_out = message.tokensOut.map(e => e ? Coin.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.tokens_out = message.tokensOut;
    }
    return obj;
  },
  fromProtoMsg(message: QueryCalcExitPoolCoinsFromSharesResponseProtoMsg, useInterfaces: boolean = true): QueryCalcExitPoolCoinsFromSharesResponse {
    return QueryCalcExitPoolCoinsFromSharesResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryCalcExitPoolCoinsFromSharesResponse): Uint8Array {
    return QueryCalcExitPoolCoinsFromSharesResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryCalcExitPoolCoinsFromSharesResponse): QueryCalcExitPoolCoinsFromSharesResponseProtoMsg {
    return {
      typeUrl: "/osmosis.gamm.v1beta1.QueryCalcExitPoolCoinsFromSharesResponse",
      value: QueryCalcExitPoolCoinsFromSharesResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(QueryCalcExitPoolCoinsFromSharesResponse.typeUrl)) {
      return;
    }
    Coin.registerTypeUrl();
  }
};
function createBaseQueryPoolParamsRequest(): QueryPoolParamsRequest {
  return {
    poolId: BigInt(0)
  };
}
/**
 * =============================== PoolParams
 * @name QueryPoolParamsRequest
 * @package osmosis.gamm.v1beta1
 * @see proto type: osmosis.gamm.v1beta1.QueryPoolParamsRequest
 */
export const QueryPoolParamsRequest = {
  typeUrl: "/osmosis.gamm.v1beta1.QueryPoolParamsRequest",
  aminoType: "osmosis/gamm/query-pool-params-request",
  is(o: any): o is QueryPoolParamsRequest {
    return o && (o.$typeUrl === QueryPoolParamsRequest.typeUrl || typeof o.poolId === "bigint");
  },
  isSDK(o: any): o is QueryPoolParamsRequestSDKType {
    return o && (o.$typeUrl === QueryPoolParamsRequest.typeUrl || typeof o.pool_id === "bigint");
  },
  isAmino(o: any): o is QueryPoolParamsRequestAmino {
    return o && (o.$typeUrl === QueryPoolParamsRequest.typeUrl || typeof o.pool_id === "bigint");
  },
  encode(message: QueryPoolParamsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.poolId !== BigInt(0)) {
      writer.uint32(8).uint64(message.poolId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryPoolParamsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPoolParamsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryPoolParamsRequest {
    const obj = createBaseQueryPoolParamsRequest();
    if (isSet(object.poolId)) obj.poolId = BigInt(object.poolId.toString());
    return obj;
  },
  fromPartial(object: DeepPartial<QueryPoolParamsRequest>): QueryPoolParamsRequest {
    const message = createBaseQueryPoolParamsRequest();
    if (object.poolId !== undefined && object.poolId !== null) {
      message.poolId = BigInt(object.poolId.toString());
    }
    return message;
  },
  fromSDK(object: QueryPoolParamsRequestSDKType): QueryPoolParamsRequest {
    return {
      poolId: object?.pool_id
    };
  },
  toSDK(message: QueryPoolParamsRequest): QueryPoolParamsRequestSDKType {
    const obj: any = {};
    obj.pool_id = message.poolId;
    return obj;
  },
  fromAmino(object: QueryPoolParamsRequestAmino): QueryPoolParamsRequest {
    const message = createBaseQueryPoolParamsRequest();
    if (object.pool_id !== undefined && object.pool_id !== null) {
      message.poolId = BigInt(object.pool_id);
    }
    return message;
  },
  toAmino(message: QueryPoolParamsRequest, useInterfaces: boolean = true): QueryPoolParamsRequestAmino {
    const obj: any = {};
    obj.pool_id = message.poolId !== BigInt(0) ? message.poolId?.toString() : undefined;
    return obj;
  },
  fromProtoMsg(message: QueryPoolParamsRequestProtoMsg, useInterfaces: boolean = true): QueryPoolParamsRequest {
    return QueryPoolParamsRequest.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryPoolParamsRequest): Uint8Array {
    return QueryPoolParamsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryPoolParamsRequest): QueryPoolParamsRequestProtoMsg {
    return {
      typeUrl: "/osmosis.gamm.v1beta1.QueryPoolParamsRequest",
      value: QueryPoolParamsRequest.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseQueryPoolParamsResponse(): QueryPoolParamsResponse {
  return {
    params: undefined
  };
}
/**
 * @name QueryPoolParamsResponse
 * @package osmosis.gamm.v1beta1
 * @see proto type: osmosis.gamm.v1beta1.QueryPoolParamsResponse
 */
export const QueryPoolParamsResponse = {
  typeUrl: "/osmosis.gamm.v1beta1.QueryPoolParamsResponse",
  aminoType: "osmosis/gamm/query-pool-params-response",
  is(o: any): o is QueryPoolParamsResponse {
    return o && o.$typeUrl === QueryPoolParamsResponse.typeUrl;
  },
  isSDK(o: any): o is QueryPoolParamsResponseSDKType {
    return o && o.$typeUrl === QueryPoolParamsResponse.typeUrl;
  },
  isAmino(o: any): o is QueryPoolParamsResponseAmino {
    return o && o.$typeUrl === QueryPoolParamsResponse.typeUrl;
  },
  encode(message: QueryPoolParamsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      Any.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryPoolParamsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPoolParamsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Any.decode(reader, reader.uint32(), useInterfaces);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryPoolParamsResponse {
    const obj = createBaseQueryPoolParamsResponse();
    if (isSet(object.params)) obj.params = Any.fromJSON(object.params);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryPoolParamsResponse>): QueryPoolParamsResponse {
    const message = createBaseQueryPoolParamsResponse();
    if (object.params !== undefined && object.params !== null) {
      message.params = Any.fromPartial(object.params);
    }
    return message;
  },
  fromSDK(object: QueryPoolParamsResponseSDKType): QueryPoolParamsResponse {
    return {
      params: object.params ? Any.fromSDK(object.params) : undefined
    };
  },
  toSDK(message: QueryPoolParamsResponse): QueryPoolParamsResponseSDKType {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Any.toSDK(message.params) : undefined);
    return obj;
  },
  fromAmino(object: QueryPoolParamsResponseAmino): QueryPoolParamsResponse {
    const message = createBaseQueryPoolParamsResponse();
    if (object.params !== undefined && object.params !== null) {
      message.params = Any.fromAmino(object.params);
    }
    return message;
  },
  toAmino(message: QueryPoolParamsResponse, useInterfaces: boolean = true): QueryPoolParamsResponseAmino {
    const obj: any = {};
    obj.params = message.params ? Any.toAmino(message.params, useInterfaces) : undefined;
    return obj;
  },
  fromProtoMsg(message: QueryPoolParamsResponseProtoMsg, useInterfaces: boolean = true): QueryPoolParamsResponse {
    return QueryPoolParamsResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryPoolParamsResponse): Uint8Array {
    return QueryPoolParamsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryPoolParamsResponse): QueryPoolParamsResponseProtoMsg {
    return {
      typeUrl: "/osmosis.gamm.v1beta1.QueryPoolParamsResponse",
      value: QueryPoolParamsResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseQueryTotalPoolLiquidityRequest(): QueryTotalPoolLiquidityRequest {
  return {
    poolId: BigInt(0)
  };
}
/**
 * =============================== PoolLiquidity
 * @name QueryTotalPoolLiquidityRequest
 * @package osmosis.gamm.v1beta1
 * @see proto type: osmosis.gamm.v1beta1.QueryTotalPoolLiquidityRequest
 */
export const QueryTotalPoolLiquidityRequest = {
  typeUrl: "/osmosis.gamm.v1beta1.QueryTotalPoolLiquidityRequest",
  aminoType: "osmosis/gamm/query-total-pool-liquidity-request",
  is(o: any): o is QueryTotalPoolLiquidityRequest {
    return o && (o.$typeUrl === QueryTotalPoolLiquidityRequest.typeUrl || typeof o.poolId === "bigint");
  },
  isSDK(o: any): o is QueryTotalPoolLiquidityRequestSDKType {
    return o && (o.$typeUrl === QueryTotalPoolLiquidityRequest.typeUrl || typeof o.pool_id === "bigint");
  },
  isAmino(o: any): o is QueryTotalPoolLiquidityRequestAmino {
    return o && (o.$typeUrl === QueryTotalPoolLiquidityRequest.typeUrl || typeof o.pool_id === "bigint");
  },
  encode(message: QueryTotalPoolLiquidityRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.poolId !== BigInt(0)) {
      writer.uint32(8).uint64(message.poolId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryTotalPoolLiquidityRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTotalPoolLiquidityRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryTotalPoolLiquidityRequest {
    const obj = createBaseQueryTotalPoolLiquidityRequest();
    if (isSet(object.poolId)) obj.poolId = BigInt(object.poolId.toString());
    return obj;
  },
  fromPartial(object: DeepPartial<QueryTotalPoolLiquidityRequest>): QueryTotalPoolLiquidityRequest {
    const message = createBaseQueryTotalPoolLiquidityRequest();
    if (object.poolId !== undefined && object.poolId !== null) {
      message.poolId = BigInt(object.poolId.toString());
    }
    return message;
  },
  fromSDK(object: QueryTotalPoolLiquidityRequestSDKType): QueryTotalPoolLiquidityRequest {
    return {
      poolId: object?.pool_id
    };
  },
  toSDK(message: QueryTotalPoolLiquidityRequest): QueryTotalPoolLiquidityRequestSDKType {
    const obj: any = {};
    obj.pool_id = message.poolId;
    return obj;
  },
  fromAmino(object: QueryTotalPoolLiquidityRequestAmino): QueryTotalPoolLiquidityRequest {
    const message = createBaseQueryTotalPoolLiquidityRequest();
    if (object.pool_id !== undefined && object.pool_id !== null) {
      message.poolId = BigInt(object.pool_id);
    }
    return message;
  },
  toAmino(message: QueryTotalPoolLiquidityRequest, useInterfaces: boolean = true): QueryTotalPoolLiquidityRequestAmino {
    const obj: any = {};
    obj.pool_id = message.poolId !== BigInt(0) ? message.poolId?.toString() : undefined;
    return obj;
  },
  fromProtoMsg(message: QueryTotalPoolLiquidityRequestProtoMsg, useInterfaces: boolean = true): QueryTotalPoolLiquidityRequest {
    return QueryTotalPoolLiquidityRequest.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryTotalPoolLiquidityRequest): Uint8Array {
    return QueryTotalPoolLiquidityRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryTotalPoolLiquidityRequest): QueryTotalPoolLiquidityRequestProtoMsg {
    return {
      typeUrl: "/osmosis.gamm.v1beta1.QueryTotalPoolLiquidityRequest",
      value: QueryTotalPoolLiquidityRequest.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseQueryTotalPoolLiquidityResponse(): QueryTotalPoolLiquidityResponse {
  return {
    liquidity: []
  };
}
/**
 * @name QueryTotalPoolLiquidityResponse
 * @package osmosis.gamm.v1beta1
 * @see proto type: osmosis.gamm.v1beta1.QueryTotalPoolLiquidityResponse
 */
export const QueryTotalPoolLiquidityResponse = {
  typeUrl: "/osmosis.gamm.v1beta1.QueryTotalPoolLiquidityResponse",
  aminoType: "osmosis/gamm/query-total-pool-liquidity-response",
  is(o: any): o is QueryTotalPoolLiquidityResponse {
    return o && (o.$typeUrl === QueryTotalPoolLiquidityResponse.typeUrl || Array.isArray(o.liquidity) && (!o.liquidity.length || Coin.is(o.liquidity[0])));
  },
  isSDK(o: any): o is QueryTotalPoolLiquidityResponseSDKType {
    return o && (o.$typeUrl === QueryTotalPoolLiquidityResponse.typeUrl || Array.isArray(o.liquidity) && (!o.liquidity.length || Coin.isSDK(o.liquidity[0])));
  },
  isAmino(o: any): o is QueryTotalPoolLiquidityResponseAmino {
    return o && (o.$typeUrl === QueryTotalPoolLiquidityResponse.typeUrl || Array.isArray(o.liquidity) && (!o.liquidity.length || Coin.isAmino(o.liquidity[0])));
  },
  encode(message: QueryTotalPoolLiquidityResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.liquidity) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryTotalPoolLiquidityResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTotalPoolLiquidityResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.liquidity.push(Coin.decode(reader, reader.uint32(), useInterfaces));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryTotalPoolLiquidityResponse {
    const obj = createBaseQueryTotalPoolLiquidityResponse();
    if (Array.isArray(object?.liquidity)) obj.liquidity = object.liquidity.map((e: any) => Coin.fromJSON(e));
    return obj;
  },
  fromPartial(object: DeepPartial<QueryTotalPoolLiquidityResponse>): QueryTotalPoolLiquidityResponse {
    const message = createBaseQueryTotalPoolLiquidityResponse();
    message.liquidity = object.liquidity?.map(e => Coin.fromPartial(e)) || [];
    return message;
  },
  fromSDK(object: QueryTotalPoolLiquidityResponseSDKType): QueryTotalPoolLiquidityResponse {
    return {
      liquidity: Array.isArray(object?.liquidity) ? object.liquidity.map((e: any) => Coin.fromSDK(e)) : []
    };
  },
  toSDK(message: QueryTotalPoolLiquidityResponse): QueryTotalPoolLiquidityResponseSDKType {
    const obj: any = {};
    if (message.liquidity) {
      obj.liquidity = message.liquidity.map(e => e ? Coin.toSDK(e) : undefined);
    } else {
      obj.liquidity = [];
    }
    return obj;
  },
  fromAmino(object: QueryTotalPoolLiquidityResponseAmino): QueryTotalPoolLiquidityResponse {
    const message = createBaseQueryTotalPoolLiquidityResponse();
    message.liquidity = object.liquidity?.map(e => Coin.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: QueryTotalPoolLiquidityResponse, useInterfaces: boolean = true): QueryTotalPoolLiquidityResponseAmino {
    const obj: any = {};
    if (message.liquidity) {
      obj.liquidity = message.liquidity.map(e => e ? Coin.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.liquidity = message.liquidity;
    }
    return obj;
  },
  fromProtoMsg(message: QueryTotalPoolLiquidityResponseProtoMsg, useInterfaces: boolean = true): QueryTotalPoolLiquidityResponse {
    return QueryTotalPoolLiquidityResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryTotalPoolLiquidityResponse): Uint8Array {
    return QueryTotalPoolLiquidityResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryTotalPoolLiquidityResponse): QueryTotalPoolLiquidityResponseProtoMsg {
    return {
      typeUrl: "/osmosis.gamm.v1beta1.QueryTotalPoolLiquidityResponse",
      value: QueryTotalPoolLiquidityResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(QueryTotalPoolLiquidityResponse.typeUrl)) {
      return;
    }
    Coin.registerTypeUrl();
  }
};
function createBaseQueryTotalSharesRequest(): QueryTotalSharesRequest {
  return {
    poolId: BigInt(0)
  };
}
/**
 * =============================== TotalShares
 * @name QueryTotalSharesRequest
 * @package osmosis.gamm.v1beta1
 * @see proto type: osmosis.gamm.v1beta1.QueryTotalSharesRequest
 */
export const QueryTotalSharesRequest = {
  typeUrl: "/osmosis.gamm.v1beta1.QueryTotalSharesRequest",
  aminoType: "osmosis/gamm/query-total-shares-request",
  is(o: any): o is QueryTotalSharesRequest {
    return o && (o.$typeUrl === QueryTotalSharesRequest.typeUrl || typeof o.poolId === "bigint");
  },
  isSDK(o: any): o is QueryTotalSharesRequestSDKType {
    return o && (o.$typeUrl === QueryTotalSharesRequest.typeUrl || typeof o.pool_id === "bigint");
  },
  isAmino(o: any): o is QueryTotalSharesRequestAmino {
    return o && (o.$typeUrl === QueryTotalSharesRequest.typeUrl || typeof o.pool_id === "bigint");
  },
  encode(message: QueryTotalSharesRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.poolId !== BigInt(0)) {
      writer.uint32(8).uint64(message.poolId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryTotalSharesRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTotalSharesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryTotalSharesRequest {
    const obj = createBaseQueryTotalSharesRequest();
    if (isSet(object.poolId)) obj.poolId = BigInt(object.poolId.toString());
    return obj;
  },
  fromPartial(object: DeepPartial<QueryTotalSharesRequest>): QueryTotalSharesRequest {
    const message = createBaseQueryTotalSharesRequest();
    if (object.poolId !== undefined && object.poolId !== null) {
      message.poolId = BigInt(object.poolId.toString());
    }
    return message;
  },
  fromSDK(object: QueryTotalSharesRequestSDKType): QueryTotalSharesRequest {
    return {
      poolId: object?.pool_id
    };
  },
  toSDK(message: QueryTotalSharesRequest): QueryTotalSharesRequestSDKType {
    const obj: any = {};
    obj.pool_id = message.poolId;
    return obj;
  },
  fromAmino(object: QueryTotalSharesRequestAmino): QueryTotalSharesRequest {
    const message = createBaseQueryTotalSharesRequest();
    if (object.pool_id !== undefined && object.pool_id !== null) {
      message.poolId = BigInt(object.pool_id);
    }
    return message;
  },
  toAmino(message: QueryTotalSharesRequest, useInterfaces: boolean = true): QueryTotalSharesRequestAmino {
    const obj: any = {};
    obj.pool_id = message.poolId !== BigInt(0) ? message.poolId?.toString() : undefined;
    return obj;
  },
  fromProtoMsg(message: QueryTotalSharesRequestProtoMsg, useInterfaces: boolean = true): QueryTotalSharesRequest {
    return QueryTotalSharesRequest.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryTotalSharesRequest): Uint8Array {
    return QueryTotalSharesRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryTotalSharesRequest): QueryTotalSharesRequestProtoMsg {
    return {
      typeUrl: "/osmosis.gamm.v1beta1.QueryTotalSharesRequest",
      value: QueryTotalSharesRequest.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseQueryTotalSharesResponse(): QueryTotalSharesResponse {
  return {
    totalShares: Coin.fromPartial({})
  };
}
/**
 * @name QueryTotalSharesResponse
 * @package osmosis.gamm.v1beta1
 * @see proto type: osmosis.gamm.v1beta1.QueryTotalSharesResponse
 */
export const QueryTotalSharesResponse = {
  typeUrl: "/osmosis.gamm.v1beta1.QueryTotalSharesResponse",
  aminoType: "osmosis/gamm/query-total-shares-response",
  is(o: any): o is QueryTotalSharesResponse {
    return o && (o.$typeUrl === QueryTotalSharesResponse.typeUrl || Coin.is(o.totalShares));
  },
  isSDK(o: any): o is QueryTotalSharesResponseSDKType {
    return o && (o.$typeUrl === QueryTotalSharesResponse.typeUrl || Coin.isSDK(o.total_shares));
  },
  isAmino(o: any): o is QueryTotalSharesResponseAmino {
    return o && (o.$typeUrl === QueryTotalSharesResponse.typeUrl || Coin.isAmino(o.total_shares));
  },
  encode(message: QueryTotalSharesResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.totalShares !== undefined) {
      Coin.encode(message.totalShares, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryTotalSharesResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTotalSharesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.totalShares = Coin.decode(reader, reader.uint32(), useInterfaces);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryTotalSharesResponse {
    const obj = createBaseQueryTotalSharesResponse();
    if (isSet(object.totalShares)) obj.totalShares = Coin.fromJSON(object.totalShares);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryTotalSharesResponse>): QueryTotalSharesResponse {
    const message = createBaseQueryTotalSharesResponse();
    if (object.totalShares !== undefined && object.totalShares !== null) {
      message.totalShares = Coin.fromPartial(object.totalShares);
    }
    return message;
  },
  fromSDK(object: QueryTotalSharesResponseSDKType): QueryTotalSharesResponse {
    return {
      totalShares: object.total_shares ? Coin.fromSDK(object.total_shares) : undefined
    };
  },
  toSDK(message: QueryTotalSharesResponse): QueryTotalSharesResponseSDKType {
    const obj: any = {};
    message.totalShares !== undefined && (obj.total_shares = message.totalShares ? Coin.toSDK(message.totalShares) : undefined);
    return obj;
  },
  fromAmino(object: QueryTotalSharesResponseAmino): QueryTotalSharesResponse {
    const message = createBaseQueryTotalSharesResponse();
    if (object.total_shares !== undefined && object.total_shares !== null) {
      message.totalShares = Coin.fromAmino(object.total_shares);
    }
    return message;
  },
  toAmino(message: QueryTotalSharesResponse, useInterfaces: boolean = true): QueryTotalSharesResponseAmino {
    const obj: any = {};
    obj.total_shares = message.totalShares ? Coin.toAmino(message.totalShares, useInterfaces) : undefined;
    return obj;
  },
  fromProtoMsg(message: QueryTotalSharesResponseProtoMsg, useInterfaces: boolean = true): QueryTotalSharesResponse {
    return QueryTotalSharesResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryTotalSharesResponse): Uint8Array {
    return QueryTotalSharesResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryTotalSharesResponse): QueryTotalSharesResponseProtoMsg {
    return {
      typeUrl: "/osmosis.gamm.v1beta1.QueryTotalSharesResponse",
      value: QueryTotalSharesResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(QueryTotalSharesResponse.typeUrl)) {
      return;
    }
    Coin.registerTypeUrl();
  }
};
function createBaseQueryCalcJoinPoolNoSwapSharesRequest(): QueryCalcJoinPoolNoSwapSharesRequest {
  return {
    poolId: BigInt(0),
    tokensIn: []
  };
}
/**
 * =============================== CalcJoinPoolNoSwapShares
 * @name QueryCalcJoinPoolNoSwapSharesRequest
 * @package osmosis.gamm.v1beta1
 * @see proto type: osmosis.gamm.v1beta1.QueryCalcJoinPoolNoSwapSharesRequest
 */
export const QueryCalcJoinPoolNoSwapSharesRequest = {
  typeUrl: "/osmosis.gamm.v1beta1.QueryCalcJoinPoolNoSwapSharesRequest",
  aminoType: "osmosis/gamm/query-calc-join-pool-no-swap-shares-request",
  is(o: any): o is QueryCalcJoinPoolNoSwapSharesRequest {
    return o && (o.$typeUrl === QueryCalcJoinPoolNoSwapSharesRequest.typeUrl || typeof o.poolId === "bigint" && Array.isArray(o.tokensIn) && (!o.tokensIn.length || Coin.is(o.tokensIn[0])));
  },
  isSDK(o: any): o is QueryCalcJoinPoolNoSwapSharesRequestSDKType {
    return o && (o.$typeUrl === QueryCalcJoinPoolNoSwapSharesRequest.typeUrl || typeof o.pool_id === "bigint" && Array.isArray(o.tokens_in) && (!o.tokens_in.length || Coin.isSDK(o.tokens_in[0])));
  },
  isAmino(o: any): o is QueryCalcJoinPoolNoSwapSharesRequestAmino {
    return o && (o.$typeUrl === QueryCalcJoinPoolNoSwapSharesRequest.typeUrl || typeof o.pool_id === "bigint" && Array.isArray(o.tokens_in) && (!o.tokens_in.length || Coin.isAmino(o.tokens_in[0])));
  },
  encode(message: QueryCalcJoinPoolNoSwapSharesRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.poolId !== BigInt(0)) {
      writer.uint32(8).uint64(message.poolId);
    }
    for (const v of message.tokensIn) {
      Coin.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryCalcJoinPoolNoSwapSharesRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCalcJoinPoolNoSwapSharesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = reader.uint64();
          break;
        case 2:
          message.tokensIn.push(Coin.decode(reader, reader.uint32(), useInterfaces));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryCalcJoinPoolNoSwapSharesRequest {
    const obj = createBaseQueryCalcJoinPoolNoSwapSharesRequest();
    if (isSet(object.poolId)) obj.poolId = BigInt(object.poolId.toString());
    if (Array.isArray(object?.tokensIn)) obj.tokensIn = object.tokensIn.map((e: any) => Coin.fromJSON(e));
    return obj;
  },
  fromPartial(object: DeepPartial<QueryCalcJoinPoolNoSwapSharesRequest>): QueryCalcJoinPoolNoSwapSharesRequest {
    const message = createBaseQueryCalcJoinPoolNoSwapSharesRequest();
    if (object.poolId !== undefined && object.poolId !== null) {
      message.poolId = BigInt(object.poolId.toString());
    }
    message.tokensIn = object.tokensIn?.map(e => Coin.fromPartial(e)) || [];
    return message;
  },
  fromSDK(object: QueryCalcJoinPoolNoSwapSharesRequestSDKType): QueryCalcJoinPoolNoSwapSharesRequest {
    return {
      poolId: object?.pool_id,
      tokensIn: Array.isArray(object?.tokens_in) ? object.tokens_in.map((e: any) => Coin.fromSDK(e)) : []
    };
  },
  toSDK(message: QueryCalcJoinPoolNoSwapSharesRequest): QueryCalcJoinPoolNoSwapSharesRequestSDKType {
    const obj: any = {};
    obj.pool_id = message.poolId;
    if (message.tokensIn) {
      obj.tokens_in = message.tokensIn.map(e => e ? Coin.toSDK(e) : undefined);
    } else {
      obj.tokens_in = [];
    }
    return obj;
  },
  fromAmino(object: QueryCalcJoinPoolNoSwapSharesRequestAmino): QueryCalcJoinPoolNoSwapSharesRequest {
    const message = createBaseQueryCalcJoinPoolNoSwapSharesRequest();
    if (object.pool_id !== undefined && object.pool_id !== null) {
      message.poolId = BigInt(object.pool_id);
    }
    message.tokensIn = object.tokens_in?.map(e => Coin.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: QueryCalcJoinPoolNoSwapSharesRequest, useInterfaces: boolean = true): QueryCalcJoinPoolNoSwapSharesRequestAmino {
    const obj: any = {};
    obj.pool_id = message.poolId !== BigInt(0) ? message.poolId?.toString() : undefined;
    if (message.tokensIn) {
      obj.tokens_in = message.tokensIn.map(e => e ? Coin.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.tokens_in = message.tokensIn;
    }
    return obj;
  },
  fromProtoMsg(message: QueryCalcJoinPoolNoSwapSharesRequestProtoMsg, useInterfaces: boolean = true): QueryCalcJoinPoolNoSwapSharesRequest {
    return QueryCalcJoinPoolNoSwapSharesRequest.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryCalcJoinPoolNoSwapSharesRequest): Uint8Array {
    return QueryCalcJoinPoolNoSwapSharesRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryCalcJoinPoolNoSwapSharesRequest): QueryCalcJoinPoolNoSwapSharesRequestProtoMsg {
    return {
      typeUrl: "/osmosis.gamm.v1beta1.QueryCalcJoinPoolNoSwapSharesRequest",
      value: QueryCalcJoinPoolNoSwapSharesRequest.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(QueryCalcJoinPoolNoSwapSharesRequest.typeUrl)) {
      return;
    }
    Coin.registerTypeUrl();
  }
};
function createBaseQueryCalcJoinPoolNoSwapSharesResponse(): QueryCalcJoinPoolNoSwapSharesResponse {
  return {
    tokensOut: [],
    sharesOut: ""
  };
}
/**
 * @name QueryCalcJoinPoolNoSwapSharesResponse
 * @package osmosis.gamm.v1beta1
 * @see proto type: osmosis.gamm.v1beta1.QueryCalcJoinPoolNoSwapSharesResponse
 */
export const QueryCalcJoinPoolNoSwapSharesResponse = {
  typeUrl: "/osmosis.gamm.v1beta1.QueryCalcJoinPoolNoSwapSharesResponse",
  aminoType: "osmosis/gamm/query-calc-join-pool-no-swap-shares-response",
  is(o: any): o is QueryCalcJoinPoolNoSwapSharesResponse {
    return o && (o.$typeUrl === QueryCalcJoinPoolNoSwapSharesResponse.typeUrl || Array.isArray(o.tokensOut) && (!o.tokensOut.length || Coin.is(o.tokensOut[0])) && typeof o.sharesOut === "string");
  },
  isSDK(o: any): o is QueryCalcJoinPoolNoSwapSharesResponseSDKType {
    return o && (o.$typeUrl === QueryCalcJoinPoolNoSwapSharesResponse.typeUrl || Array.isArray(o.tokens_out) && (!o.tokens_out.length || Coin.isSDK(o.tokens_out[0])) && typeof o.shares_out === "string");
  },
  isAmino(o: any): o is QueryCalcJoinPoolNoSwapSharesResponseAmino {
    return o && (o.$typeUrl === QueryCalcJoinPoolNoSwapSharesResponse.typeUrl || Array.isArray(o.tokens_out) && (!o.tokens_out.length || Coin.isAmino(o.tokens_out[0])) && typeof o.shares_out === "string");
  },
  encode(message: QueryCalcJoinPoolNoSwapSharesResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.tokensOut) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.sharesOut !== "") {
      writer.uint32(18).string(message.sharesOut);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryCalcJoinPoolNoSwapSharesResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCalcJoinPoolNoSwapSharesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tokensOut.push(Coin.decode(reader, reader.uint32(), useInterfaces));
          break;
        case 2:
          message.sharesOut = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryCalcJoinPoolNoSwapSharesResponse {
    const obj = createBaseQueryCalcJoinPoolNoSwapSharesResponse();
    if (Array.isArray(object?.tokensOut)) obj.tokensOut = object.tokensOut.map((e: any) => Coin.fromJSON(e));
    if (isSet(object.sharesOut)) obj.sharesOut = String(object.sharesOut);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryCalcJoinPoolNoSwapSharesResponse>): QueryCalcJoinPoolNoSwapSharesResponse {
    const message = createBaseQueryCalcJoinPoolNoSwapSharesResponse();
    message.tokensOut = object.tokensOut?.map(e => Coin.fromPartial(e)) || [];
    message.sharesOut = object.sharesOut ?? "";
    return message;
  },
  fromSDK(object: QueryCalcJoinPoolNoSwapSharesResponseSDKType): QueryCalcJoinPoolNoSwapSharesResponse {
    return {
      tokensOut: Array.isArray(object?.tokens_out) ? object.tokens_out.map((e: any) => Coin.fromSDK(e)) : [],
      sharesOut: object?.shares_out
    };
  },
  toSDK(message: QueryCalcJoinPoolNoSwapSharesResponse): QueryCalcJoinPoolNoSwapSharesResponseSDKType {
    const obj: any = {};
    if (message.tokensOut) {
      obj.tokens_out = message.tokensOut.map(e => e ? Coin.toSDK(e) : undefined);
    } else {
      obj.tokens_out = [];
    }
    obj.shares_out = message.sharesOut;
    return obj;
  },
  fromAmino(object: QueryCalcJoinPoolNoSwapSharesResponseAmino): QueryCalcJoinPoolNoSwapSharesResponse {
    const message = createBaseQueryCalcJoinPoolNoSwapSharesResponse();
    message.tokensOut = object.tokens_out?.map(e => Coin.fromAmino(e)) || [];
    if (object.shares_out !== undefined && object.shares_out !== null) {
      message.sharesOut = object.shares_out;
    }
    return message;
  },
  toAmino(message: QueryCalcJoinPoolNoSwapSharesResponse, useInterfaces: boolean = true): QueryCalcJoinPoolNoSwapSharesResponseAmino {
    const obj: any = {};
    if (message.tokensOut) {
      obj.tokens_out = message.tokensOut.map(e => e ? Coin.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.tokens_out = message.tokensOut;
    }
    obj.shares_out = message.sharesOut === "" ? undefined : message.sharesOut;
    return obj;
  },
  fromProtoMsg(message: QueryCalcJoinPoolNoSwapSharesResponseProtoMsg, useInterfaces: boolean = true): QueryCalcJoinPoolNoSwapSharesResponse {
    return QueryCalcJoinPoolNoSwapSharesResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryCalcJoinPoolNoSwapSharesResponse): Uint8Array {
    return QueryCalcJoinPoolNoSwapSharesResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryCalcJoinPoolNoSwapSharesResponse): QueryCalcJoinPoolNoSwapSharesResponseProtoMsg {
    return {
      typeUrl: "/osmosis.gamm.v1beta1.QueryCalcJoinPoolNoSwapSharesResponse",
      value: QueryCalcJoinPoolNoSwapSharesResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(QueryCalcJoinPoolNoSwapSharesResponse.typeUrl)) {
      return;
    }
    Coin.registerTypeUrl();
  }
};
function createBaseQuerySpotPriceRequest(): QuerySpotPriceRequest {
  return {
    poolId: BigInt(0),
    baseAssetDenom: "",
    quoteAssetDenom: ""
  };
}
/**
 * QuerySpotPriceRequest defines the gRPC request structure for a SpotPrice
 * query.
 * @name QuerySpotPriceRequest
 * @package osmosis.gamm.v1beta1
 * @see proto type: osmosis.gamm.v1beta1.QuerySpotPriceRequest
 * @deprecated
 */
export const QuerySpotPriceRequest = {
  typeUrl: "/osmosis.gamm.v1beta1.QuerySpotPriceRequest",
  aminoType: "osmosis/gamm/query-spot-price-request",
  is(o: any): o is QuerySpotPriceRequest {
    return o && (o.$typeUrl === QuerySpotPriceRequest.typeUrl || typeof o.poolId === "bigint" && typeof o.baseAssetDenom === "string" && typeof o.quoteAssetDenom === "string");
  },
  isSDK(o: any): o is QuerySpotPriceRequestSDKType {
    return o && (o.$typeUrl === QuerySpotPriceRequest.typeUrl || typeof o.pool_id === "bigint" && typeof o.base_asset_denom === "string" && typeof o.quote_asset_denom === "string");
  },
  isAmino(o: any): o is QuerySpotPriceRequestAmino {
    return o && (o.$typeUrl === QuerySpotPriceRequest.typeUrl || typeof o.pool_id === "bigint" && typeof o.base_asset_denom === "string" && typeof o.quote_asset_denom === "string");
  },
  encode(message: QuerySpotPriceRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.poolId !== BigInt(0)) {
      writer.uint32(8).uint64(message.poolId);
    }
    if (message.baseAssetDenom !== "") {
      writer.uint32(18).string(message.baseAssetDenom);
    }
    if (message.quoteAssetDenom !== "") {
      writer.uint32(26).string(message.quoteAssetDenom);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QuerySpotPriceRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySpotPriceRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = reader.uint64();
          break;
        case 2:
          message.baseAssetDenom = reader.string();
          break;
        case 3:
          message.quoteAssetDenom = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QuerySpotPriceRequest {
    const obj = createBaseQuerySpotPriceRequest();
    if (isSet(object.poolId)) obj.poolId = BigInt(object.poolId.toString());
    if (isSet(object.baseAssetDenom)) obj.baseAssetDenom = String(object.baseAssetDenom);
    if (isSet(object.quoteAssetDenom)) obj.quoteAssetDenom = String(object.quoteAssetDenom);
    return obj;
  },
  fromPartial(object: DeepPartial<QuerySpotPriceRequest>): QuerySpotPriceRequest {
    const message = createBaseQuerySpotPriceRequest();
    if (object.poolId !== undefined && object.poolId !== null) {
      message.poolId = BigInt(object.poolId.toString());
    }
    message.baseAssetDenom = object.baseAssetDenom ?? "";
    message.quoteAssetDenom = object.quoteAssetDenom ?? "";
    return message;
  },
  fromSDK(object: QuerySpotPriceRequestSDKType): QuerySpotPriceRequest {
    return {
      poolId: object?.pool_id,
      baseAssetDenom: object?.base_asset_denom,
      quoteAssetDenom: object?.quote_asset_denom
    };
  },
  toSDK(message: QuerySpotPriceRequest): QuerySpotPriceRequestSDKType {
    const obj: any = {};
    obj.pool_id = message.poolId;
    obj.base_asset_denom = message.baseAssetDenom;
    obj.quote_asset_denom = message.quoteAssetDenom;
    return obj;
  },
  fromAmino(object: QuerySpotPriceRequestAmino): QuerySpotPriceRequest {
    const message = createBaseQuerySpotPriceRequest();
    if (object.pool_id !== undefined && object.pool_id !== null) {
      message.poolId = BigInt(object.pool_id);
    }
    if (object.base_asset_denom !== undefined && object.base_asset_denom !== null) {
      message.baseAssetDenom = object.base_asset_denom;
    }
    if (object.quote_asset_denom !== undefined && object.quote_asset_denom !== null) {
      message.quoteAssetDenom = object.quote_asset_denom;
    }
    return message;
  },
  toAmino(message: QuerySpotPriceRequest, useInterfaces: boolean = true): QuerySpotPriceRequestAmino {
    const obj: any = {};
    obj.pool_id = message.poolId !== BigInt(0) ? message.poolId?.toString() : undefined;
    obj.base_asset_denom = message.baseAssetDenom === "" ? undefined : message.baseAssetDenom;
    obj.quote_asset_denom = message.quoteAssetDenom === "" ? undefined : message.quoteAssetDenom;
    return obj;
  },
  fromProtoMsg(message: QuerySpotPriceRequestProtoMsg, useInterfaces: boolean = true): QuerySpotPriceRequest {
    return QuerySpotPriceRequest.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QuerySpotPriceRequest): Uint8Array {
    return QuerySpotPriceRequest.encode(message).finish();
  },
  toProtoMsg(message: QuerySpotPriceRequest): QuerySpotPriceRequestProtoMsg {
    return {
      typeUrl: "/osmosis.gamm.v1beta1.QuerySpotPriceRequest",
      value: QuerySpotPriceRequest.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseQueryPoolsWithFilterRequest(): QueryPoolsWithFilterRequest {
  return {
    minLiquidity: [],
    poolType: "",
    pagination: undefined
  };
}
/**
 * @name QueryPoolsWithFilterRequest
 * @package osmosis.gamm.v1beta1
 * @see proto type: osmosis.gamm.v1beta1.QueryPoolsWithFilterRequest
 */
export const QueryPoolsWithFilterRequest = {
  typeUrl: "/osmosis.gamm.v1beta1.QueryPoolsWithFilterRequest",
  aminoType: "osmosis/gamm/query-pools-with-filter-request",
  is(o: any): o is QueryPoolsWithFilterRequest {
    return o && (o.$typeUrl === QueryPoolsWithFilterRequest.typeUrl || Array.isArray(o.minLiquidity) && (!o.minLiquidity.length || Coin.is(o.minLiquidity[0])) && typeof o.poolType === "string");
  },
  isSDK(o: any): o is QueryPoolsWithFilterRequestSDKType {
    return o && (o.$typeUrl === QueryPoolsWithFilterRequest.typeUrl || Array.isArray(o.min_liquidity) && (!o.min_liquidity.length || Coin.isSDK(o.min_liquidity[0])) && typeof o.pool_type === "string");
  },
  isAmino(o: any): o is QueryPoolsWithFilterRequestAmino {
    return o && (o.$typeUrl === QueryPoolsWithFilterRequest.typeUrl || Array.isArray(o.min_liquidity) && (!o.min_liquidity.length || Coin.isAmino(o.min_liquidity[0])) && typeof o.pool_type === "string");
  },
  encode(message: QueryPoolsWithFilterRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.minLiquidity) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.poolType !== "") {
      writer.uint32(18).string(message.poolType);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryPoolsWithFilterRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPoolsWithFilterRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.minLiquidity.push(Coin.decode(reader, reader.uint32(), useInterfaces));
          break;
        case 2:
          message.poolType = reader.string();
          break;
        case 3:
          message.pagination = PageRequest.decode(reader, reader.uint32(), useInterfaces);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryPoolsWithFilterRequest {
    const obj = createBaseQueryPoolsWithFilterRequest();
    if (Array.isArray(object?.minLiquidity)) obj.minLiquidity = object.minLiquidity.map((e: any) => Coin.fromJSON(e));
    if (isSet(object.poolType)) obj.poolType = String(object.poolType);
    if (isSet(object.pagination)) obj.pagination = PageRequest.fromJSON(object.pagination);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryPoolsWithFilterRequest>): QueryPoolsWithFilterRequest {
    const message = createBaseQueryPoolsWithFilterRequest();
    message.minLiquidity = object.minLiquidity?.map(e => Coin.fromPartial(e)) || [];
    message.poolType = object.poolType ?? "";
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    }
    return message;
  },
  fromSDK(object: QueryPoolsWithFilterRequestSDKType): QueryPoolsWithFilterRequest {
    return {
      minLiquidity: Array.isArray(object?.min_liquidity) ? object.min_liquidity.map((e: any) => Coin.fromSDK(e)) : [],
      poolType: object?.pool_type,
      pagination: object.pagination ? PageRequest.fromSDK(object.pagination) : undefined
    };
  },
  toSDK(message: QueryPoolsWithFilterRequest): QueryPoolsWithFilterRequestSDKType {
    const obj: any = {};
    if (message.minLiquidity) {
      obj.min_liquidity = message.minLiquidity.map(e => e ? Coin.toSDK(e) : undefined);
    } else {
      obj.min_liquidity = [];
    }
    obj.pool_type = message.poolType;
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toSDK(message.pagination) : undefined);
    return obj;
  },
  fromAmino(object: QueryPoolsWithFilterRequestAmino): QueryPoolsWithFilterRequest {
    const message = createBaseQueryPoolsWithFilterRequest();
    message.minLiquidity = object.min_liquidity?.map(e => Coin.fromAmino(e)) || [];
    if (object.pool_type !== undefined && object.pool_type !== null) {
      message.poolType = object.pool_type;
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryPoolsWithFilterRequest, useInterfaces: boolean = true): QueryPoolsWithFilterRequestAmino {
    const obj: any = {};
    if (message.minLiquidity) {
      obj.min_liquidity = message.minLiquidity.map(e => e ? Coin.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.min_liquidity = message.minLiquidity;
    }
    obj.pool_type = message.poolType === "" ? undefined : message.poolType;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination, useInterfaces) : undefined;
    return obj;
  },
  fromProtoMsg(message: QueryPoolsWithFilterRequestProtoMsg, useInterfaces: boolean = true): QueryPoolsWithFilterRequest {
    return QueryPoolsWithFilterRequest.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryPoolsWithFilterRequest): Uint8Array {
    return QueryPoolsWithFilterRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryPoolsWithFilterRequest): QueryPoolsWithFilterRequestProtoMsg {
    return {
      typeUrl: "/osmosis.gamm.v1beta1.QueryPoolsWithFilterRequest",
      value: QueryPoolsWithFilterRequest.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(QueryPoolsWithFilterRequest.typeUrl)) {
      return;
    }
    Coin.registerTypeUrl();
    PageRequest.registerTypeUrl();
  }
};
function createBaseQueryPoolsWithFilterResponse(): QueryPoolsWithFilterResponse {
  return {
    pools: [],
    pagination: undefined
  };
}
/**
 * @name QueryPoolsWithFilterResponse
 * @package osmosis.gamm.v1beta1
 * @see proto type: osmosis.gamm.v1beta1.QueryPoolsWithFilterResponse
 */
export const QueryPoolsWithFilterResponse = {
  typeUrl: "/osmosis.gamm.v1beta1.QueryPoolsWithFilterResponse",
  aminoType: "osmosis/gamm/query-pools-with-filter-response",
  is(o: any): o is QueryPoolsWithFilterResponse {
    return o && (o.$typeUrl === QueryPoolsWithFilterResponse.typeUrl || Array.isArray(o.pools) && (!o.pools.length || Pool1.is(o.pools[0]) || Pool2.is(o.pools[0]) || Any.is(o.pools[0])));
  },
  isSDK(o: any): o is QueryPoolsWithFilterResponseSDKType {
    return o && (o.$typeUrl === QueryPoolsWithFilterResponse.typeUrl || Array.isArray(o.pools) && (!o.pools.length || Pool1.isSDK(o.pools[0]) || Pool2.isSDK(o.pools[0]) || Any.isSDK(o.pools[0])));
  },
  isAmino(o: any): o is QueryPoolsWithFilterResponseAmino {
    return o && (o.$typeUrl === QueryPoolsWithFilterResponse.typeUrl || Array.isArray(o.pools) && (!o.pools.length || Pool1.isAmino(o.pools[0]) || Pool2.isAmino(o.pools[0]) || Any.isAmino(o.pools[0])));
  },
  encode(message: QueryPoolsWithFilterResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.pools) {
      Any.encode(GlobalDecoderRegistry.wrapAny(v!), writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryPoolsWithFilterResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPoolsWithFilterResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pools.push(GlobalDecoderRegistry.unwrapAny(reader));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32(), useInterfaces);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryPoolsWithFilterResponse {
    const obj = createBaseQueryPoolsWithFilterResponse();
    if (Array.isArray(object?.pools)) obj.pools = object.pools.map((e: any) => GlobalDecoderRegistry.fromJSON(e));
    if (isSet(object.pagination)) obj.pagination = PageResponse.fromJSON(object.pagination);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryPoolsWithFilterResponse>): QueryPoolsWithFilterResponse {
    const message = createBaseQueryPoolsWithFilterResponse();
    message.pools = object.pools?.map(e => (GlobalDecoderRegistry.fromPartial(e) as any)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    }
    return message;
  },
  fromSDK(object: QueryPoolsWithFilterResponseSDKType): QueryPoolsWithFilterResponse {
    return {
      pools: Array.isArray(object?.pools) ? object.pools.map((e: any) => GlobalDecoderRegistry.fromSDK(e)) : [],
      pagination: object.pagination ? PageResponse.fromSDK(object.pagination) : undefined
    };
  },
  toSDK(message: QueryPoolsWithFilterResponse): QueryPoolsWithFilterResponseSDKType {
    const obj: any = {};
    if (message.pools) {
      obj.pools = message.pools.map(e => e ? GlobalDecoderRegistry.toSDK(e) : undefined);
    } else {
      obj.pools = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toSDK(message.pagination) : undefined);
    return obj;
  },
  fromAmino(object: QueryPoolsWithFilterResponseAmino): QueryPoolsWithFilterResponse {
    const message = createBaseQueryPoolsWithFilterResponse();
    message.pools = object.pools?.map(e => GlobalDecoderRegistry.fromAminoMsg(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryPoolsWithFilterResponse, useInterfaces: boolean = true): QueryPoolsWithFilterResponseAmino {
    const obj: any = {};
    if (message.pools) {
      obj.pools = message.pools.map(e => e ? GlobalDecoderRegistry.toAminoMsg(e) : undefined);
    } else {
      obj.pools = message.pools;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination, useInterfaces) : undefined;
    return obj;
  },
  fromProtoMsg(message: QueryPoolsWithFilterResponseProtoMsg, useInterfaces: boolean = true): QueryPoolsWithFilterResponse {
    return QueryPoolsWithFilterResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryPoolsWithFilterResponse): Uint8Array {
    return QueryPoolsWithFilterResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryPoolsWithFilterResponse): QueryPoolsWithFilterResponseProtoMsg {
    return {
      typeUrl: "/osmosis.gamm.v1beta1.QueryPoolsWithFilterResponse",
      value: QueryPoolsWithFilterResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(QueryPoolsWithFilterResponse.typeUrl)) {
      return;
    }
    Pool1.registerTypeUrl();
    Pool2.registerTypeUrl();
    PageResponse.registerTypeUrl();
  }
};
function createBaseQuerySpotPriceResponse(): QuerySpotPriceResponse {
  return {
    spotPrice: ""
  };
}
/**
 * QuerySpotPriceResponse defines the gRPC response structure for a SpotPrice
 * query.
 * @name QuerySpotPriceResponse
 * @package osmosis.gamm.v1beta1
 * @see proto type: osmosis.gamm.v1beta1.QuerySpotPriceResponse
 * @deprecated
 */
export const QuerySpotPriceResponse = {
  typeUrl: "/osmosis.gamm.v1beta1.QuerySpotPriceResponse",
  aminoType: "osmosis/gamm/query-spot-price-response",
  is(o: any): o is QuerySpotPriceResponse {
    return o && (o.$typeUrl === QuerySpotPriceResponse.typeUrl || typeof o.spotPrice === "string");
  },
  isSDK(o: any): o is QuerySpotPriceResponseSDKType {
    return o && (o.$typeUrl === QuerySpotPriceResponse.typeUrl || typeof o.spot_price === "string");
  },
  isAmino(o: any): o is QuerySpotPriceResponseAmino {
    return o && (o.$typeUrl === QuerySpotPriceResponse.typeUrl || typeof o.spot_price === "string");
  },
  encode(message: QuerySpotPriceResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.spotPrice !== "") {
      writer.uint32(10).string(message.spotPrice);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QuerySpotPriceResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySpotPriceResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.spotPrice = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QuerySpotPriceResponse {
    const obj = createBaseQuerySpotPriceResponse();
    if (isSet(object.spotPrice)) obj.spotPrice = String(object.spotPrice);
    return obj;
  },
  fromPartial(object: DeepPartial<QuerySpotPriceResponse>): QuerySpotPriceResponse {
    const message = createBaseQuerySpotPriceResponse();
    message.spotPrice = object.spotPrice ?? "";
    return message;
  },
  fromSDK(object: QuerySpotPriceResponseSDKType): QuerySpotPriceResponse {
    return {
      spotPrice: object?.spot_price
    };
  },
  toSDK(message: QuerySpotPriceResponse): QuerySpotPriceResponseSDKType {
    const obj: any = {};
    obj.spot_price = message.spotPrice;
    return obj;
  },
  fromAmino(object: QuerySpotPriceResponseAmino): QuerySpotPriceResponse {
    const message = createBaseQuerySpotPriceResponse();
    if (object.spot_price !== undefined && object.spot_price !== null) {
      message.spotPrice = object.spot_price;
    }
    return message;
  },
  toAmino(message: QuerySpotPriceResponse, useInterfaces: boolean = true): QuerySpotPriceResponseAmino {
    const obj: any = {};
    obj.spot_price = message.spotPrice === "" ? undefined : message.spotPrice;
    return obj;
  },
  fromProtoMsg(message: QuerySpotPriceResponseProtoMsg, useInterfaces: boolean = true): QuerySpotPriceResponse {
    return QuerySpotPriceResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QuerySpotPriceResponse): Uint8Array {
    return QuerySpotPriceResponse.encode(message).finish();
  },
  toProtoMsg(message: QuerySpotPriceResponse): QuerySpotPriceResponseProtoMsg {
    return {
      typeUrl: "/osmosis.gamm.v1beta1.QuerySpotPriceResponse",
      value: QuerySpotPriceResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseQuerySwapExactAmountInRequest(): QuerySwapExactAmountInRequest {
  return {
    sender: "",
    poolId: BigInt(0),
    tokenIn: "",
    routes: []
  };
}
/**
 * =============================== EstimateSwapExactAmountIn
 * @name QuerySwapExactAmountInRequest
 * @package osmosis.gamm.v1beta1
 * @see proto type: osmosis.gamm.v1beta1.QuerySwapExactAmountInRequest
 */
export const QuerySwapExactAmountInRequest = {
  typeUrl: "/osmosis.gamm.v1beta1.QuerySwapExactAmountInRequest",
  aminoType: "osmosis/gamm/query-swap-exact-amount-in-request",
  is(o: any): o is QuerySwapExactAmountInRequest {
    return o && (o.$typeUrl === QuerySwapExactAmountInRequest.typeUrl || typeof o.sender === "string" && typeof o.poolId === "bigint" && typeof o.tokenIn === "string" && Array.isArray(o.routes) && (!o.routes.length || SwapAmountInRoute.is(o.routes[0])));
  },
  isSDK(o: any): o is QuerySwapExactAmountInRequestSDKType {
    return o && (o.$typeUrl === QuerySwapExactAmountInRequest.typeUrl || typeof o.sender === "string" && typeof o.pool_id === "bigint" && typeof o.token_in === "string" && Array.isArray(o.routes) && (!o.routes.length || SwapAmountInRoute.isSDK(o.routes[0])));
  },
  isAmino(o: any): o is QuerySwapExactAmountInRequestAmino {
    return o && (o.$typeUrl === QuerySwapExactAmountInRequest.typeUrl || typeof o.sender === "string" && typeof o.pool_id === "bigint" && typeof o.token_in === "string" && Array.isArray(o.routes) && (!o.routes.length || SwapAmountInRoute.isAmino(o.routes[0])));
  },
  encode(message: QuerySwapExactAmountInRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.poolId !== BigInt(0)) {
      writer.uint32(16).uint64(message.poolId);
    }
    if (message.tokenIn !== "") {
      writer.uint32(26).string(message.tokenIn);
    }
    for (const v of message.routes) {
      SwapAmountInRoute.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QuerySwapExactAmountInRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySwapExactAmountInRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.poolId = reader.uint64();
          break;
        case 3:
          message.tokenIn = reader.string();
          break;
        case 4:
          message.routes.push(SwapAmountInRoute.decode(reader, reader.uint32(), useInterfaces));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QuerySwapExactAmountInRequest {
    const obj = createBaseQuerySwapExactAmountInRequest();
    if (isSet(object.sender)) obj.sender = String(object.sender);
    if (isSet(object.poolId)) obj.poolId = BigInt(object.poolId.toString());
    if (isSet(object.tokenIn)) obj.tokenIn = String(object.tokenIn);
    if (Array.isArray(object?.routes)) obj.routes = object.routes.map((e: any) => SwapAmountInRoute.fromJSON(e));
    return obj;
  },
  fromPartial(object: DeepPartial<QuerySwapExactAmountInRequest>): QuerySwapExactAmountInRequest {
    const message = createBaseQuerySwapExactAmountInRequest();
    message.sender = object.sender ?? "";
    if (object.poolId !== undefined && object.poolId !== null) {
      message.poolId = BigInt(object.poolId.toString());
    }
    message.tokenIn = object.tokenIn ?? "";
    message.routes = object.routes?.map(e => SwapAmountInRoute.fromPartial(e)) || [];
    return message;
  },
  fromSDK(object: QuerySwapExactAmountInRequestSDKType): QuerySwapExactAmountInRequest {
    return {
      sender: object?.sender,
      poolId: object?.pool_id,
      tokenIn: object?.token_in,
      routes: Array.isArray(object?.routes) ? object.routes.map((e: any) => SwapAmountInRoute.fromSDK(e)) : []
    };
  },
  toSDK(message: QuerySwapExactAmountInRequest): QuerySwapExactAmountInRequestSDKType {
    const obj: any = {};
    obj.sender = message.sender;
    obj.pool_id = message.poolId;
    obj.token_in = message.tokenIn;
    if (message.routes) {
      obj.routes = message.routes.map(e => e ? SwapAmountInRoute.toSDK(e) : undefined);
    } else {
      obj.routes = [];
    }
    return obj;
  },
  fromAmino(object: QuerySwapExactAmountInRequestAmino): QuerySwapExactAmountInRequest {
    const message = createBaseQuerySwapExactAmountInRequest();
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = object.sender;
    }
    if (object.pool_id !== undefined && object.pool_id !== null) {
      message.poolId = BigInt(object.pool_id);
    }
    if (object.token_in !== undefined && object.token_in !== null) {
      message.tokenIn = object.token_in;
    }
    message.routes = object.routes?.map(e => SwapAmountInRoute.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: QuerySwapExactAmountInRequest, useInterfaces: boolean = true): QuerySwapExactAmountInRequestAmino {
    const obj: any = {};
    obj.sender = message.sender === "" ? undefined : message.sender;
    obj.pool_id = message.poolId !== BigInt(0) ? message.poolId?.toString() : undefined;
    obj.token_in = message.tokenIn === "" ? undefined : message.tokenIn;
    if (message.routes) {
      obj.routes = message.routes.map(e => e ? SwapAmountInRoute.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.routes = message.routes;
    }
    return obj;
  },
  fromProtoMsg(message: QuerySwapExactAmountInRequestProtoMsg, useInterfaces: boolean = true): QuerySwapExactAmountInRequest {
    return QuerySwapExactAmountInRequest.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QuerySwapExactAmountInRequest): Uint8Array {
    return QuerySwapExactAmountInRequest.encode(message).finish();
  },
  toProtoMsg(message: QuerySwapExactAmountInRequest): QuerySwapExactAmountInRequestProtoMsg {
    return {
      typeUrl: "/osmosis.gamm.v1beta1.QuerySwapExactAmountInRequest",
      value: QuerySwapExactAmountInRequest.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(QuerySwapExactAmountInRequest.typeUrl)) {
      return;
    }
    SwapAmountInRoute.registerTypeUrl();
  }
};
function createBaseQuerySwapExactAmountInResponse(): QuerySwapExactAmountInResponse {
  return {
    tokenOutAmount: ""
  };
}
/**
 * @name QuerySwapExactAmountInResponse
 * @package osmosis.gamm.v1beta1
 * @see proto type: osmosis.gamm.v1beta1.QuerySwapExactAmountInResponse
 */
export const QuerySwapExactAmountInResponse = {
  typeUrl: "/osmosis.gamm.v1beta1.QuerySwapExactAmountInResponse",
  aminoType: "osmosis/gamm/query-swap-exact-amount-in-response",
  is(o: any): o is QuerySwapExactAmountInResponse {
    return o && (o.$typeUrl === QuerySwapExactAmountInResponse.typeUrl || typeof o.tokenOutAmount === "string");
  },
  isSDK(o: any): o is QuerySwapExactAmountInResponseSDKType {
    return o && (o.$typeUrl === QuerySwapExactAmountInResponse.typeUrl || typeof o.token_out_amount === "string");
  },
  isAmino(o: any): o is QuerySwapExactAmountInResponseAmino {
    return o && (o.$typeUrl === QuerySwapExactAmountInResponse.typeUrl || typeof o.token_out_amount === "string");
  },
  encode(message: QuerySwapExactAmountInResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.tokenOutAmount !== "") {
      writer.uint32(10).string(message.tokenOutAmount);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QuerySwapExactAmountInResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySwapExactAmountInResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tokenOutAmount = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QuerySwapExactAmountInResponse {
    const obj = createBaseQuerySwapExactAmountInResponse();
    if (isSet(object.tokenOutAmount)) obj.tokenOutAmount = String(object.tokenOutAmount);
    return obj;
  },
  fromPartial(object: DeepPartial<QuerySwapExactAmountInResponse>): QuerySwapExactAmountInResponse {
    const message = createBaseQuerySwapExactAmountInResponse();
    message.tokenOutAmount = object.tokenOutAmount ?? "";
    return message;
  },
  fromSDK(object: QuerySwapExactAmountInResponseSDKType): QuerySwapExactAmountInResponse {
    return {
      tokenOutAmount: object?.token_out_amount
    };
  },
  toSDK(message: QuerySwapExactAmountInResponse): QuerySwapExactAmountInResponseSDKType {
    const obj: any = {};
    obj.token_out_amount = message.tokenOutAmount;
    return obj;
  },
  fromAmino(object: QuerySwapExactAmountInResponseAmino): QuerySwapExactAmountInResponse {
    const message = createBaseQuerySwapExactAmountInResponse();
    if (object.token_out_amount !== undefined && object.token_out_amount !== null) {
      message.tokenOutAmount = object.token_out_amount;
    }
    return message;
  },
  toAmino(message: QuerySwapExactAmountInResponse, useInterfaces: boolean = true): QuerySwapExactAmountInResponseAmino {
    const obj: any = {};
    obj.token_out_amount = message.tokenOutAmount === "" ? undefined : message.tokenOutAmount;
    return obj;
  },
  fromProtoMsg(message: QuerySwapExactAmountInResponseProtoMsg, useInterfaces: boolean = true): QuerySwapExactAmountInResponse {
    return QuerySwapExactAmountInResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QuerySwapExactAmountInResponse): Uint8Array {
    return QuerySwapExactAmountInResponse.encode(message).finish();
  },
  toProtoMsg(message: QuerySwapExactAmountInResponse): QuerySwapExactAmountInResponseProtoMsg {
    return {
      typeUrl: "/osmosis.gamm.v1beta1.QuerySwapExactAmountInResponse",
      value: QuerySwapExactAmountInResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseQuerySwapExactAmountOutRequest(): QuerySwapExactAmountOutRequest {
  return {
    sender: "",
    poolId: BigInt(0),
    routes: [],
    tokenOut: ""
  };
}
/**
 * =============================== EstimateSwapExactAmountOut
 * @name QuerySwapExactAmountOutRequest
 * @package osmosis.gamm.v1beta1
 * @see proto type: osmosis.gamm.v1beta1.QuerySwapExactAmountOutRequest
 */
export const QuerySwapExactAmountOutRequest = {
  typeUrl: "/osmosis.gamm.v1beta1.QuerySwapExactAmountOutRequest",
  aminoType: "osmosis/gamm/query-swap-exact-amount-out-request",
  is(o: any): o is QuerySwapExactAmountOutRequest {
    return o && (o.$typeUrl === QuerySwapExactAmountOutRequest.typeUrl || typeof o.sender === "string" && typeof o.poolId === "bigint" && Array.isArray(o.routes) && (!o.routes.length || SwapAmountOutRoute.is(o.routes[0])) && typeof o.tokenOut === "string");
  },
  isSDK(o: any): o is QuerySwapExactAmountOutRequestSDKType {
    return o && (o.$typeUrl === QuerySwapExactAmountOutRequest.typeUrl || typeof o.sender === "string" && typeof o.pool_id === "bigint" && Array.isArray(o.routes) && (!o.routes.length || SwapAmountOutRoute.isSDK(o.routes[0])) && typeof o.token_out === "string");
  },
  isAmino(o: any): o is QuerySwapExactAmountOutRequestAmino {
    return o && (o.$typeUrl === QuerySwapExactAmountOutRequest.typeUrl || typeof o.sender === "string" && typeof o.pool_id === "bigint" && Array.isArray(o.routes) && (!o.routes.length || SwapAmountOutRoute.isAmino(o.routes[0])) && typeof o.token_out === "string");
  },
  encode(message: QuerySwapExactAmountOutRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.poolId !== BigInt(0)) {
      writer.uint32(16).uint64(message.poolId);
    }
    for (const v of message.routes) {
      SwapAmountOutRoute.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (message.tokenOut !== "") {
      writer.uint32(34).string(message.tokenOut);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QuerySwapExactAmountOutRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySwapExactAmountOutRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.poolId = reader.uint64();
          break;
        case 3:
          message.routes.push(SwapAmountOutRoute.decode(reader, reader.uint32(), useInterfaces));
          break;
        case 4:
          message.tokenOut = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QuerySwapExactAmountOutRequest {
    const obj = createBaseQuerySwapExactAmountOutRequest();
    if (isSet(object.sender)) obj.sender = String(object.sender);
    if (isSet(object.poolId)) obj.poolId = BigInt(object.poolId.toString());
    if (Array.isArray(object?.routes)) obj.routes = object.routes.map((e: any) => SwapAmountOutRoute.fromJSON(e));
    if (isSet(object.tokenOut)) obj.tokenOut = String(object.tokenOut);
    return obj;
  },
  fromPartial(object: DeepPartial<QuerySwapExactAmountOutRequest>): QuerySwapExactAmountOutRequest {
    const message = createBaseQuerySwapExactAmountOutRequest();
    message.sender = object.sender ?? "";
    if (object.poolId !== undefined && object.poolId !== null) {
      message.poolId = BigInt(object.poolId.toString());
    }
    message.routes = object.routes?.map(e => SwapAmountOutRoute.fromPartial(e)) || [];
    message.tokenOut = object.tokenOut ?? "";
    return message;
  },
  fromSDK(object: QuerySwapExactAmountOutRequestSDKType): QuerySwapExactAmountOutRequest {
    return {
      sender: object?.sender,
      poolId: object?.pool_id,
      routes: Array.isArray(object?.routes) ? object.routes.map((e: any) => SwapAmountOutRoute.fromSDK(e)) : [],
      tokenOut: object?.token_out
    };
  },
  toSDK(message: QuerySwapExactAmountOutRequest): QuerySwapExactAmountOutRequestSDKType {
    const obj: any = {};
    obj.sender = message.sender;
    obj.pool_id = message.poolId;
    if (message.routes) {
      obj.routes = message.routes.map(e => e ? SwapAmountOutRoute.toSDK(e) : undefined);
    } else {
      obj.routes = [];
    }
    obj.token_out = message.tokenOut;
    return obj;
  },
  fromAmino(object: QuerySwapExactAmountOutRequestAmino): QuerySwapExactAmountOutRequest {
    const message = createBaseQuerySwapExactAmountOutRequest();
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = object.sender;
    }
    if (object.pool_id !== undefined && object.pool_id !== null) {
      message.poolId = BigInt(object.pool_id);
    }
    message.routes = object.routes?.map(e => SwapAmountOutRoute.fromAmino(e)) || [];
    if (object.token_out !== undefined && object.token_out !== null) {
      message.tokenOut = object.token_out;
    }
    return message;
  },
  toAmino(message: QuerySwapExactAmountOutRequest, useInterfaces: boolean = true): QuerySwapExactAmountOutRequestAmino {
    const obj: any = {};
    obj.sender = message.sender === "" ? undefined : message.sender;
    obj.pool_id = message.poolId !== BigInt(0) ? message.poolId?.toString() : undefined;
    if (message.routes) {
      obj.routes = message.routes.map(e => e ? SwapAmountOutRoute.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.routes = message.routes;
    }
    obj.token_out = message.tokenOut === "" ? undefined : message.tokenOut;
    return obj;
  },
  fromProtoMsg(message: QuerySwapExactAmountOutRequestProtoMsg, useInterfaces: boolean = true): QuerySwapExactAmountOutRequest {
    return QuerySwapExactAmountOutRequest.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QuerySwapExactAmountOutRequest): Uint8Array {
    return QuerySwapExactAmountOutRequest.encode(message).finish();
  },
  toProtoMsg(message: QuerySwapExactAmountOutRequest): QuerySwapExactAmountOutRequestProtoMsg {
    return {
      typeUrl: "/osmosis.gamm.v1beta1.QuerySwapExactAmountOutRequest",
      value: QuerySwapExactAmountOutRequest.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(QuerySwapExactAmountOutRequest.typeUrl)) {
      return;
    }
    SwapAmountOutRoute.registerTypeUrl();
  }
};
function createBaseQuerySwapExactAmountOutResponse(): QuerySwapExactAmountOutResponse {
  return {
    tokenInAmount: ""
  };
}
/**
 * @name QuerySwapExactAmountOutResponse
 * @package osmosis.gamm.v1beta1
 * @see proto type: osmosis.gamm.v1beta1.QuerySwapExactAmountOutResponse
 */
export const QuerySwapExactAmountOutResponse = {
  typeUrl: "/osmosis.gamm.v1beta1.QuerySwapExactAmountOutResponse",
  aminoType: "osmosis/gamm/query-swap-exact-amount-out-response",
  is(o: any): o is QuerySwapExactAmountOutResponse {
    return o && (o.$typeUrl === QuerySwapExactAmountOutResponse.typeUrl || typeof o.tokenInAmount === "string");
  },
  isSDK(o: any): o is QuerySwapExactAmountOutResponseSDKType {
    return o && (o.$typeUrl === QuerySwapExactAmountOutResponse.typeUrl || typeof o.token_in_amount === "string");
  },
  isAmino(o: any): o is QuerySwapExactAmountOutResponseAmino {
    return o && (o.$typeUrl === QuerySwapExactAmountOutResponse.typeUrl || typeof o.token_in_amount === "string");
  },
  encode(message: QuerySwapExactAmountOutResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.tokenInAmount !== "") {
      writer.uint32(10).string(message.tokenInAmount);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QuerySwapExactAmountOutResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySwapExactAmountOutResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tokenInAmount = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QuerySwapExactAmountOutResponse {
    const obj = createBaseQuerySwapExactAmountOutResponse();
    if (isSet(object.tokenInAmount)) obj.tokenInAmount = String(object.tokenInAmount);
    return obj;
  },
  fromPartial(object: DeepPartial<QuerySwapExactAmountOutResponse>): QuerySwapExactAmountOutResponse {
    const message = createBaseQuerySwapExactAmountOutResponse();
    message.tokenInAmount = object.tokenInAmount ?? "";
    return message;
  },
  fromSDK(object: QuerySwapExactAmountOutResponseSDKType): QuerySwapExactAmountOutResponse {
    return {
      tokenInAmount: object?.token_in_amount
    };
  },
  toSDK(message: QuerySwapExactAmountOutResponse): QuerySwapExactAmountOutResponseSDKType {
    const obj: any = {};
    obj.token_in_amount = message.tokenInAmount;
    return obj;
  },
  fromAmino(object: QuerySwapExactAmountOutResponseAmino): QuerySwapExactAmountOutResponse {
    const message = createBaseQuerySwapExactAmountOutResponse();
    if (object.token_in_amount !== undefined && object.token_in_amount !== null) {
      message.tokenInAmount = object.token_in_amount;
    }
    return message;
  },
  toAmino(message: QuerySwapExactAmountOutResponse, useInterfaces: boolean = true): QuerySwapExactAmountOutResponseAmino {
    const obj: any = {};
    obj.token_in_amount = message.tokenInAmount === "" ? undefined : message.tokenInAmount;
    return obj;
  },
  fromProtoMsg(message: QuerySwapExactAmountOutResponseProtoMsg, useInterfaces: boolean = true): QuerySwapExactAmountOutResponse {
    return QuerySwapExactAmountOutResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QuerySwapExactAmountOutResponse): Uint8Array {
    return QuerySwapExactAmountOutResponse.encode(message).finish();
  },
  toProtoMsg(message: QuerySwapExactAmountOutResponse): QuerySwapExactAmountOutResponseProtoMsg {
    return {
      typeUrl: "/osmosis.gamm.v1beta1.QuerySwapExactAmountOutResponse",
      value: QuerySwapExactAmountOutResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseQueryTotalLiquidityRequest(): QueryTotalLiquidityRequest {
  return {};
}
/**
 * @name QueryTotalLiquidityRequest
 * @package osmosis.gamm.v1beta1
 * @see proto type: osmosis.gamm.v1beta1.QueryTotalLiquidityRequest
 */
export const QueryTotalLiquidityRequest = {
  typeUrl: "/osmosis.gamm.v1beta1.QueryTotalLiquidityRequest",
  aminoType: "osmosis/gamm/query-total-liquidity-request",
  is(o: any): o is QueryTotalLiquidityRequest {
    return o && o.$typeUrl === QueryTotalLiquidityRequest.typeUrl;
  },
  isSDK(o: any): o is QueryTotalLiquidityRequestSDKType {
    return o && o.$typeUrl === QueryTotalLiquidityRequest.typeUrl;
  },
  isAmino(o: any): o is QueryTotalLiquidityRequestAmino {
    return o && o.$typeUrl === QueryTotalLiquidityRequest.typeUrl;
  },
  encode(_: QueryTotalLiquidityRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryTotalLiquidityRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTotalLiquidityRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_: any): QueryTotalLiquidityRequest {
    const obj = createBaseQueryTotalLiquidityRequest();
    return obj;
  },
  fromPartial(_: DeepPartial<QueryTotalLiquidityRequest>): QueryTotalLiquidityRequest {
    const message = createBaseQueryTotalLiquidityRequest();
    return message;
  },
  fromSDK(_: QueryTotalLiquidityRequestSDKType): QueryTotalLiquidityRequest {
    return {};
  },
  toSDK(_: QueryTotalLiquidityRequest): QueryTotalLiquidityRequestSDKType {
    const obj: any = {};
    return obj;
  },
  fromAmino(_: QueryTotalLiquidityRequestAmino): QueryTotalLiquidityRequest {
    const message = createBaseQueryTotalLiquidityRequest();
    return message;
  },
  toAmino(_: QueryTotalLiquidityRequest, useInterfaces: boolean = true): QueryTotalLiquidityRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromProtoMsg(message: QueryTotalLiquidityRequestProtoMsg, useInterfaces: boolean = true): QueryTotalLiquidityRequest {
    return QueryTotalLiquidityRequest.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryTotalLiquidityRequest): Uint8Array {
    return QueryTotalLiquidityRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryTotalLiquidityRequest): QueryTotalLiquidityRequestProtoMsg {
    return {
      typeUrl: "/osmosis.gamm.v1beta1.QueryTotalLiquidityRequest",
      value: QueryTotalLiquidityRequest.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseQueryTotalLiquidityResponse(): QueryTotalLiquidityResponse {
  return {
    liquidity: []
  };
}
/**
 * @name QueryTotalLiquidityResponse
 * @package osmosis.gamm.v1beta1
 * @see proto type: osmosis.gamm.v1beta1.QueryTotalLiquidityResponse
 */
export const QueryTotalLiquidityResponse = {
  typeUrl: "/osmosis.gamm.v1beta1.QueryTotalLiquidityResponse",
  aminoType: "osmosis/gamm/query-total-liquidity-response",
  is(o: any): o is QueryTotalLiquidityResponse {
    return o && (o.$typeUrl === QueryTotalLiquidityResponse.typeUrl || Array.isArray(o.liquidity) && (!o.liquidity.length || Coin.is(o.liquidity[0])));
  },
  isSDK(o: any): o is QueryTotalLiquidityResponseSDKType {
    return o && (o.$typeUrl === QueryTotalLiquidityResponse.typeUrl || Array.isArray(o.liquidity) && (!o.liquidity.length || Coin.isSDK(o.liquidity[0])));
  },
  isAmino(o: any): o is QueryTotalLiquidityResponseAmino {
    return o && (o.$typeUrl === QueryTotalLiquidityResponse.typeUrl || Array.isArray(o.liquidity) && (!o.liquidity.length || Coin.isAmino(o.liquidity[0])));
  },
  encode(message: QueryTotalLiquidityResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.liquidity) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryTotalLiquidityResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTotalLiquidityResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.liquidity.push(Coin.decode(reader, reader.uint32(), useInterfaces));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryTotalLiquidityResponse {
    const obj = createBaseQueryTotalLiquidityResponse();
    if (Array.isArray(object?.liquidity)) obj.liquidity = object.liquidity.map((e: any) => Coin.fromJSON(e));
    return obj;
  },
  fromPartial(object: DeepPartial<QueryTotalLiquidityResponse>): QueryTotalLiquidityResponse {
    const message = createBaseQueryTotalLiquidityResponse();
    message.liquidity = object.liquidity?.map(e => Coin.fromPartial(e)) || [];
    return message;
  },
  fromSDK(object: QueryTotalLiquidityResponseSDKType): QueryTotalLiquidityResponse {
    return {
      liquidity: Array.isArray(object?.liquidity) ? object.liquidity.map((e: any) => Coin.fromSDK(e)) : []
    };
  },
  toSDK(message: QueryTotalLiquidityResponse): QueryTotalLiquidityResponseSDKType {
    const obj: any = {};
    if (message.liquidity) {
      obj.liquidity = message.liquidity.map(e => e ? Coin.toSDK(e) : undefined);
    } else {
      obj.liquidity = [];
    }
    return obj;
  },
  fromAmino(object: QueryTotalLiquidityResponseAmino): QueryTotalLiquidityResponse {
    const message = createBaseQueryTotalLiquidityResponse();
    message.liquidity = object.liquidity?.map(e => Coin.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: QueryTotalLiquidityResponse, useInterfaces: boolean = true): QueryTotalLiquidityResponseAmino {
    const obj: any = {};
    if (message.liquidity) {
      obj.liquidity = message.liquidity.map(e => e ? Coin.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.liquidity = message.liquidity;
    }
    return obj;
  },
  fromProtoMsg(message: QueryTotalLiquidityResponseProtoMsg, useInterfaces: boolean = true): QueryTotalLiquidityResponse {
    return QueryTotalLiquidityResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryTotalLiquidityResponse): Uint8Array {
    return QueryTotalLiquidityResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryTotalLiquidityResponse): QueryTotalLiquidityResponseProtoMsg {
    return {
      typeUrl: "/osmosis.gamm.v1beta1.QueryTotalLiquidityResponse",
      value: QueryTotalLiquidityResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(QueryTotalLiquidityResponse.typeUrl)) {
      return;
    }
    Coin.registerTypeUrl();
  }
};