import { buildUseQuery } from "../../../react-query";
import type { QuerySpotPriceRequest, QuerySpotPriceResponse } from "./query";
import { getSpotPrice } from "./query.rpc.func";
/**
 * SpotPrice defines a gRPC query handler that returns the spot price given
 * a base denomination and a quote denomination.
 * @name useGetSpotPrice
 * @package osmosis.gamm.v2
 * @see proto service: osmosis.gamm.v2.SpotPrice
 */
export const useGetSpotPrice = buildUseQuery<QuerySpotPriceRequest, QuerySpotPriceResponse>({
  builderQueryFn: getSpotPrice,
  queryKeyPrefix: "SpotPriceQuery"
});