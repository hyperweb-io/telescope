import { Params, ParamsSDKType } from "./genesis";
import { EndpointOrRpc, buildQuery } from "../../../helper-func-types";
import { QueryParamsRequest, QueryParamsRequestSDKType, QueryParamsResponse, QueryParamsResponseSDKType } from "./query";
/**
 * Params retrieves the total set of recovery parameters.
 * @name getParams
 * @package evmos.recovery.v1
 * @see proto service: evmos.recovery.v1.Params
 */
export const getParams = buildQuery<QueryParamsRequest, QueryParamsResponse>({
  encode: QueryParamsRequest.encode,
  decode: QueryParamsResponse.decode,
  service: "evmos.recovery.v1.Query",
  method: "Params",
  deps: [QueryParamsRequest, QueryParamsResponse]
});