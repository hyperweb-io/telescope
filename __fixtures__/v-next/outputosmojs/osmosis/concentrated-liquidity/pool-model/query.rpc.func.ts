import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { PositionWithUnderlyingAssetBreakdown, PositionWithUnderlyingAssetBreakdownSDKType } from "../position";
import { Any, AnySDKType } from "../../../google/protobuf/any";
import { Params, ParamsSDKType } from "../params";
import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { EndpointOrRpc, buildQuery } from "../../../helper-func-types";
import { QueryPoolsRequest, QueryPoolsRequestSDKType, QueryPoolsResponse, QueryPoolsResponseSDKType, QueryParamsRequest, QueryParamsRequestSDKType, QueryParamsResponse, QueryParamsResponseSDKType, QueryUserPositionsRequest, QueryUserPositionsRequestSDKType, QueryUserPositionsResponse, QueryUserPositionsResponseSDKType, QueryTotalLiquidityForRangeRequest, QueryTotalLiquidityForRangeRequestSDKType, QueryTotalLiquidityForRangeResponse, QueryTotalLiquidityForRangeResponseSDKType, QueryLiquidityNetInDirectionRequest, QueryLiquidityNetInDirectionRequestSDKType, QueryLiquidityNetInDirectionResponse, QueryLiquidityNetInDirectionResponseSDKType, QueryClaimableFeesRequest, QueryClaimableFeesRequestSDKType, QueryClaimableFeesResponse, QueryClaimableFeesResponseSDKType, QueryPositionByIdRequest, QueryPositionByIdRequestSDKType, QueryPositionByIdResponse, QueryPositionByIdResponseSDKType } from "./query";
/**
 * Pools returns all concentrated liquidity pools
 * @name getPools
 * @package osmosis.concentratedliquidity.v1beta1
 * @see proto service: osmosis.concentratedliquidity.v1beta1.Pools
 */
export const getPools = buildQuery<QueryPoolsRequest, QueryPoolsResponse>({
  encode: QueryPoolsRequest.encode,
  decode: QueryPoolsResponse.decode,
  service: "osmosis.concentratedliquidity.v1beta1.Query",
  method: "Pools"
});
/**
 * Params returns concentrated liquidity module params.
 * @name getParams
 * @package osmosis.concentratedliquidity.v1beta1
 * @see proto service: osmosis.concentratedliquidity.v1beta1.Params
 */
export const getParams = buildQuery<QueryParamsRequest, QueryParamsResponse>({
  encode: QueryParamsRequest.encode,
  decode: QueryParamsResponse.decode,
  service: "osmosis.concentratedliquidity.v1beta1.Query",
  method: "Params"
});
/**
 * UserPositions returns all concentrated positions of some address.
 * @name getUserPositions
 * @package osmosis.concentratedliquidity.v1beta1
 * @see proto service: osmosis.concentratedliquidity.v1beta1.UserPositions
 */
export const getUserPositions = buildQuery<QueryUserPositionsRequest, QueryUserPositionsResponse>({
  encode: QueryUserPositionsRequest.encode,
  decode: QueryUserPositionsResponse.decode,
  service: "osmosis.concentratedliquidity.v1beta1.Query",
  method: "UserPositions"
});
/**
 * TotalLiquidityForRange the amount of liquidity existing within given range.
 * @name getTotalLiquidityForRange
 * @package osmosis.concentratedliquidity.v1beta1
 * @see proto service: osmosis.concentratedliquidity.v1beta1.TotalLiquidityForRange
 */
export const getTotalLiquidityForRange = buildQuery<QueryTotalLiquidityForRangeRequest, QueryTotalLiquidityForRangeResponse>({
  encode: QueryTotalLiquidityForRangeRequest.encode,
  decode: QueryTotalLiquidityForRangeResponse.decode,
  service: "osmosis.concentratedliquidity.v1beta1.Query",
  method: "TotalLiquidityForRange"
});
/**
 * LiquidityNetInDirection returns liquidity net in the direction given.
 * Uses the bound if specified, if not uses either min tick / max tick
 * depending on the direction.
 * @name getLiquidityNetInDirection
 * @package osmosis.concentratedliquidity.v1beta1
 * @see proto service: osmosis.concentratedliquidity.v1beta1.LiquidityNetInDirection
 */
export const getLiquidityNetInDirection = buildQuery<QueryLiquidityNetInDirectionRequest, QueryLiquidityNetInDirectionResponse>({
  encode: QueryLiquidityNetInDirectionRequest.encode,
  decode: QueryLiquidityNetInDirectionResponse.decode,
  service: "osmosis.concentratedliquidity.v1beta1.Query",
  method: "LiquidityNetInDirection"
});
/**
 * ClaimableFees returns the amount of fees that can be claimed by a position
 * with the given id.
 * @name getClaimableFees
 * @package osmosis.concentratedliquidity.v1beta1
 * @see proto service: osmosis.concentratedliquidity.v1beta1.ClaimableFees
 */
export const getClaimableFees = buildQuery<QueryClaimableFeesRequest, QueryClaimableFeesResponse>({
  encode: QueryClaimableFeesRequest.encode,
  decode: QueryClaimableFeesResponse.decode,
  service: "osmosis.concentratedliquidity.v1beta1.Query",
  method: "ClaimableFees"
});
/**
 * PositionById returns a position with the given id.
 * @name getPositionById
 * @package osmosis.concentratedliquidity.v1beta1
 * @see proto service: osmosis.concentratedliquidity.v1beta1.PositionById
 */
export const getPositionById = buildQuery<QueryPositionByIdRequest, QueryPositionByIdResponse>({
  encode: QueryPositionByIdRequest.encode,
  decode: QueryPositionByIdResponse.decode,
  service: "osmosis.concentratedliquidity.v1beta1.Query",
  method: "PositionById"
});