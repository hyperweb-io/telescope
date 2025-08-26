import { SwapAmountInRoute, SwapAmountInRouteSDKType, SwapAmountOutRoute, SwapAmountOutRouteSDKType } from "./swap_route";
import { Params, ParamsSDKType } from "./genesis";
import { Any, AnySDKType } from "../../../google/protobuf/any";
import { EndpointOrRpc, buildQuery } from "../../../helper-func-types";
import { ParamsRequest, ParamsRequestSDKType, ParamsResponse, ParamsResponseSDKType, EstimateSwapExactAmountInRequest, EstimateSwapExactAmountInRequestSDKType, EstimateSwapExactAmountInResponse, EstimateSwapExactAmountInResponseSDKType, EstimateSinglePoolSwapExactAmountInRequest, EstimateSinglePoolSwapExactAmountInRequestSDKType, EstimateSwapExactAmountOutRequest, EstimateSwapExactAmountOutRequestSDKType, EstimateSwapExactAmountOutResponse, EstimateSwapExactAmountOutResponseSDKType, EstimateSinglePoolSwapExactAmountOutRequest, EstimateSinglePoolSwapExactAmountOutRequestSDKType, NumPoolsRequest, NumPoolsRequestSDKType, NumPoolsResponse, NumPoolsResponseSDKType, PoolRequest, PoolRequestSDKType, PoolResponse, PoolResponseSDKType, AllPoolsRequest, AllPoolsRequestSDKType, AllPoolsResponse, AllPoolsResponseSDKType, SpotPriceRequest, SpotPriceRequestSDKType, SpotPriceResponse, SpotPriceResponseSDKType } from "./query";
/**
 * @name getParams
 * @package osmosis.poolmanager.v1beta1
 * @see proto service: osmosis.poolmanager.v1beta1.Params
 */
export const getParams = buildQuery<ParamsRequest, ParamsResponse>({
  encode: ParamsRequest.encode,
  decode: ParamsResponse.decode,
  service: "osmosis.poolmanager.v1beta1.Query",
  method: "Params"
});
/**
 * Estimates swap amount out given in.
 * @name getEstimateSwapExactAmountIn
 * @package osmosis.poolmanager.v1beta1
 * @see proto service: osmosis.poolmanager.v1beta1.EstimateSwapExactAmountIn
 */
export const getEstimateSwapExactAmountIn = buildQuery<EstimateSwapExactAmountInRequest, EstimateSwapExactAmountInResponse>({
  encode: EstimateSwapExactAmountInRequest.encode,
  decode: EstimateSwapExactAmountInResponse.decode,
  service: "osmosis.poolmanager.v1beta1.Query",
  method: "EstimateSwapExactAmountIn"
});
/**
 * @name getEstimateSinglePoolSwapExactAmountIn
 * @package osmosis.poolmanager.v1beta1
 * @see proto service: osmosis.poolmanager.v1beta1.EstimateSinglePoolSwapExactAmountIn
 */
export const getEstimateSinglePoolSwapExactAmountIn = buildQuery<EstimateSinglePoolSwapExactAmountInRequest, EstimateSwapExactAmountInResponse>({
  encode: EstimateSinglePoolSwapExactAmountInRequest.encode,
  decode: EstimateSwapExactAmountInResponse.decode,
  service: "osmosis.poolmanager.v1beta1.Query",
  method: "EstimateSinglePoolSwapExactAmountIn"
});
/**
 * Estimates swap amount in given out.
 * @name getEstimateSwapExactAmountOut
 * @package osmosis.poolmanager.v1beta1
 * @see proto service: osmosis.poolmanager.v1beta1.EstimateSwapExactAmountOut
 */
export const getEstimateSwapExactAmountOut = buildQuery<EstimateSwapExactAmountOutRequest, EstimateSwapExactAmountOutResponse>({
  encode: EstimateSwapExactAmountOutRequest.encode,
  decode: EstimateSwapExactAmountOutResponse.decode,
  service: "osmosis.poolmanager.v1beta1.Query",
  method: "EstimateSwapExactAmountOut"
});
/**
 * @name getEstimateSinglePoolSwapExactAmountOut
 * @package osmosis.poolmanager.v1beta1
 * @see proto service: osmosis.poolmanager.v1beta1.EstimateSinglePoolSwapExactAmountOut
 */
export const getEstimateSinglePoolSwapExactAmountOut = buildQuery<EstimateSinglePoolSwapExactAmountOutRequest, EstimateSwapExactAmountOutResponse>({
  encode: EstimateSinglePoolSwapExactAmountOutRequest.encode,
  decode: EstimateSwapExactAmountOutResponse.decode,
  service: "osmosis.poolmanager.v1beta1.Query",
  method: "EstimateSinglePoolSwapExactAmountOut"
});
/**
 * Returns the total number of pools existing in Osmosis.
 * @name getNumPools
 * @package osmosis.poolmanager.v1beta1
 * @see proto service: osmosis.poolmanager.v1beta1.NumPools
 */
export const getNumPools = buildQuery<NumPoolsRequest, NumPoolsResponse>({
  encode: NumPoolsRequest.encode,
  decode: NumPoolsResponse.decode,
  service: "osmosis.poolmanager.v1beta1.Query",
  method: "NumPools"
});
/**
 * Pool returns the Pool specified by the pool id
 * @name getPool
 * @package osmosis.poolmanager.v1beta1
 * @see proto service: osmosis.poolmanager.v1beta1.Pool
 */
export const getPool = buildQuery<PoolRequest, PoolResponse>({
  encode: PoolRequest.encode,
  decode: PoolResponse.decode,
  service: "osmosis.poolmanager.v1beta1.Query",
  method: "Pool"
});
/**
 * AllPools returns all pools on the Osmosis chain sorted by IDs.
 * @name getAllPools
 * @package osmosis.poolmanager.v1beta1
 * @see proto service: osmosis.poolmanager.v1beta1.AllPools
 */
export const getAllPools = buildQuery<AllPoolsRequest, AllPoolsResponse>({
  encode: AllPoolsRequest.encode,
  decode: AllPoolsResponse.decode,
  service: "osmosis.poolmanager.v1beta1.Query",
  method: "AllPools"
});
/**
 * SpotPrice defines a gRPC query handler that returns the spot price given
 * a base denomination and a quote denomination.
 * @name getSpotPrice
 * @package osmosis.poolmanager.v1beta1
 * @see proto service: osmosis.poolmanager.v1beta1.SpotPrice
 */
export const getSpotPrice = buildQuery<SpotPriceRequest, SpotPriceResponse>({
  encode: SpotPriceRequest.encode,
  decode: SpotPriceResponse.decode,
  service: "osmosis.poolmanager.v1beta1.Query",
  method: "SpotPrice"
});