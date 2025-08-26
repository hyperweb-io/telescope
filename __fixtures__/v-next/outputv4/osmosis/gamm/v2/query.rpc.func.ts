import { EndpointOrRpc, buildQuery } from "../../../helper-func-types.js";
import { QuerySpotPriceRequest, QuerySpotPriceRequestSDKType, QuerySpotPriceResponse, QuerySpotPriceResponseSDKType } from "./query.js";
/**
 * SpotPrice defines a gRPC query handler that returns the spot price given
 * a base denomination and a quote denomination.
 * @name getSpotPrice
 * @package osmosis.gamm.v2
 * @see proto service: osmosis.gamm.v2.SpotPrice
 */
export const getSpotPrice = buildQuery<QuerySpotPriceRequest, QuerySpotPriceResponse>({
  encode: QuerySpotPriceRequest.encode,
  decode: QuerySpotPriceResponse.decode,
  service: "osmosis.gamm.v2.Query",
  method: "SpotPrice"
});