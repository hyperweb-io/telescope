import { Params, ParamsSDKType } from "./genesis";
import { EndpointOrRpc, buildQuery } from "../../../helper-func-types";
import { ParamsRequest, ParamsRequestSDKType, ParamsResponse, ParamsResponseSDKType } from "./query";
/**
 * @name getParams
 * @package osmosis.cosmwasmpool.v1beta1
 * @see proto service: osmosis.cosmwasmpool.v1beta1.Params
 */
export const getParams = buildQuery<ParamsRequest, ParamsResponse>({
  encode: ParamsRequest.encode,
  decode: ParamsResponse.decode,
  service: "osmosis.cosmwasmpool.v1beta1.Query",
  method: "Params"
});