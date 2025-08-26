import { buildQuery } from "../../../helper-func-types";
import { QueryParamsRequest, QueryParamsResponse } from "./query";
/**
 * Params defines a gRPC query method that returns the ibc-rate-limit module's
 * parameters.
 * @name getParams
 * @package osmosis.ibcratelimit.v1beta1
 * @see proto service: osmosis.ibcratelimit.v1beta1.Params
 */
export const getParams = buildQuery<QueryParamsRequest, QueryParamsResponse>({
  encode: QueryParamsRequest.encode,
  decode: QueryParamsResponse.decode,
  service: "osmosis.ibcratelimit.v1beta1.Query",
  method: "Params",
  deps: [QueryParamsRequest, QueryParamsResponse]
});