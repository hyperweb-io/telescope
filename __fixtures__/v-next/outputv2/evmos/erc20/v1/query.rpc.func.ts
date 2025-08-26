import { buildQuery } from "../../../helper-func-types";
import { QueryTokenPairsRequest, QueryTokenPairsResponse, QueryTokenPairRequest, QueryTokenPairResponse, QueryParamsRequest, QueryParamsResponse } from "./query";
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
  method: "TokenPairs",
  deps: [QueryTokenPairsRequest, QueryTokenPairsResponse]
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
  method: "TokenPair",
  deps: [QueryTokenPairRequest, QueryTokenPairResponse]
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
  method: "Params",
  deps: [QueryParamsRequest, QueryParamsResponse]
});