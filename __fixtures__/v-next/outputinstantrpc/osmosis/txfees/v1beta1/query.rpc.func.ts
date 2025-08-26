import { FeeToken, FeeTokenSDKType } from "./feetoken";
import { EndpointOrRpc, buildQuery } from "../../../helper-func-types";
import { QueryFeeTokensRequest, QueryFeeTokensRequestSDKType, QueryFeeTokensResponse, QueryFeeTokensResponseSDKType, QueryDenomSpotPriceRequest, QueryDenomSpotPriceRequestSDKType, QueryDenomSpotPriceResponse, QueryDenomSpotPriceResponseSDKType, QueryDenomPoolIdRequest, QueryDenomPoolIdRequestSDKType, QueryDenomPoolIdResponse, QueryDenomPoolIdResponseSDKType, QueryBaseDenomRequest, QueryBaseDenomRequestSDKType, QueryBaseDenomResponse, QueryBaseDenomResponseSDKType } from "./query";
/**
 * FeeTokens returns a list of all the whitelisted fee tokens and their
 * corresponding pools. It does not include the BaseDenom, which has its own
 * query endpoint
 * @name getFeeTokens
 * @package osmosis.txfees.v1beta1
 * @see proto service: osmosis.txfees.v1beta1.FeeTokens
 */
export const getFeeTokens = buildQuery<QueryFeeTokensRequest, QueryFeeTokensResponse>({
  encode: QueryFeeTokensRequest.encode,
  decode: QueryFeeTokensResponse.decode,
  service: "osmosis.txfees.v1beta1.Query",
  method: "FeeTokens"
});
/**
 * DenomSpotPrice returns all spot prices by each registered token denom.
 * @name getDenomSpotPrice
 * @package osmosis.txfees.v1beta1
 * @see proto service: osmosis.txfees.v1beta1.DenomSpotPrice
 */
export const getDenomSpotPrice = buildQuery<QueryDenomSpotPriceRequest, QueryDenomSpotPriceResponse>({
  encode: QueryDenomSpotPriceRequest.encode,
  decode: QueryDenomSpotPriceResponse.decode,
  service: "osmosis.txfees.v1beta1.Query",
  method: "DenomSpotPrice"
});
/**
 * Returns the poolID for a specified denom input.
 * @name getDenomPoolId
 * @package osmosis.txfees.v1beta1
 * @see proto service: osmosis.txfees.v1beta1.DenomPoolId
 */
export const getDenomPoolId = buildQuery<QueryDenomPoolIdRequest, QueryDenomPoolIdResponse>({
  encode: QueryDenomPoolIdRequest.encode,
  decode: QueryDenomPoolIdResponse.decode,
  service: "osmosis.txfees.v1beta1.Query",
  method: "DenomPoolId"
});
/**
 * Returns a list of all base denom tokens and their corresponding pools.
 * @name getBaseDenom
 * @package osmosis.txfees.v1beta1
 * @see proto service: osmosis.txfees.v1beta1.BaseDenom
 */
export const getBaseDenom = buildQuery<QueryBaseDenomRequest, QueryBaseDenomResponse>({
  encode: QueryBaseDenomRequest.encode,
  decode: QueryBaseDenomResponse.decode,
  service: "osmosis.txfees.v1beta1.Query",
  method: "BaseDenom"
});