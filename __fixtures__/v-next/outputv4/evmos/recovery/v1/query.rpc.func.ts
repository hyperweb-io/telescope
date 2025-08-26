import { Params, ParamsSDKType } from "./genesis.js";
import { EndpointOrRpc, buildQuery } from "../../../helper-func-types.js";
import { QueryParamsRequest, QueryParamsRequestSDKType, QueryParamsResponse, QueryParamsResponseSDKType } from "./query.js";
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
  method: "Params"
});