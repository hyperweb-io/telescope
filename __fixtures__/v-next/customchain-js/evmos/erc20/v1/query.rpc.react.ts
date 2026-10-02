import { buildUseQuery } from "../../../react-query";
import type { QueryTokenPairsRequest, QueryTokenPairsResponse, QueryTokenPairRequest, QueryTokenPairResponse, QueryParamsRequest, QueryParamsResponse } from "./query";
import { getTokenPairs, getTokenPair, getEvmosErc20V1Params } from "./query.rpc.func";
/**
 * TokenPairs retrieves registered token pairs
 * @name useGetTokenPairs
 * @package evmos.erc20.v1
 * @see proto service: evmos.erc20.v1.TokenPairs
 */
export const useGetTokenPairs = buildUseQuery<QueryTokenPairsRequest, QueryTokenPairsResponse>({
  builderQueryFn: getTokenPairs,
  queryKeyPrefix: "TokenPairsQuery"
});
/**
 * TokenPair retrieves a registered token pair
 * @name useGetTokenPair
 * @package evmos.erc20.v1
 * @see proto service: evmos.erc20.v1.TokenPair
 */
export const useGetTokenPair = buildUseQuery<QueryTokenPairRequest, QueryTokenPairResponse>({
  builderQueryFn: getTokenPair,
  queryKeyPrefix: "TokenPairQuery"
});
/**
 * Params retrieves the erc20 module params
 * @name useGetEvmosErc20V1Params
 * @package evmos.erc20.v1
 * @see proto service: evmos.erc20.v1.Params
 */
export const useGetEvmosErc20V1Params = buildUseQuery<QueryParamsRequest, QueryParamsResponse>({
  builderQueryFn: getEvmosErc20V1Params,
  queryKeyPrefix: "ParamsQuery"
});