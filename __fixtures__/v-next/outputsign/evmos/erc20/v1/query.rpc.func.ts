import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { TokenPair, TokenPairSDKType } from "./erc20";
import { Params, ParamsSDKType } from "./genesis";
import { EndpointOrRpc, buildQuery } from "../../../helper-func-types";
import { QueryTokenPairsRequest, QueryTokenPairsRequestSDKType, QueryTokenPairsResponse, QueryTokenPairsResponseSDKType, QueryTokenPairRequest, QueryTokenPairRequestSDKType, QueryTokenPairResponse, QueryTokenPairResponseSDKType, QueryParamsRequest, QueryParamsRequestSDKType, QueryParamsResponse, QueryParamsResponseSDKType } from "./query";
/**
 * TokenPairs retrieves registered token pairs
 * @name getTokenPairs
 * @package evmos.erc20.v1
 * @see proto service: evmos.erc20.v1.TokenPairs
 */
export const getTokenPairs = buildQuery<QueryTokenPairsRequest, QueryTokenPairsResponse>({
  encode: QueryTokenPairsRequest.encode,
  decode: QueryTokenPairsResponse.decode,
  service: "evmos.erc20.v1.Query",
  method: "TokenPairs"
});
/**
 * TokenPair retrieves a registered token pair
 * @name getTokenPair
 * @package evmos.erc20.v1
 * @see proto service: evmos.erc20.v1.TokenPair
 */
export const getTokenPair = buildQuery<QueryTokenPairRequest, QueryTokenPairResponse>({
  encode: QueryTokenPairRequest.encode,
  decode: QueryTokenPairResponse.decode,
  service: "evmos.erc20.v1.Query",
  method: "TokenPair"
});
/**
 * Params retrieves the erc20 module params
 * @name getParams
 * @package evmos.erc20.v1
 * @see proto service: evmos.erc20.v1.Params
 */
export const getParams = buildQuery<QueryParamsRequest, QueryParamsResponse>({
  encode: QueryParamsRequest.encode,
  decode: QueryParamsResponse.decode,
  service: "evmos.erc20.v1.Query",
  method: "Params"
});