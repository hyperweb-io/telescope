import { Params, ParamsSDKType } from "./mint";
import { EndpointOrRpc, buildQuery } from "../../../helper-func-types";
import { QueryParamsRequest, QueryParamsRequestSDKType, QueryParamsResponse, QueryParamsResponseSDKType, QueryEpochProvisionsRequest, QueryEpochProvisionsRequestSDKType, QueryEpochProvisionsResponse, QueryEpochProvisionsResponseSDKType } from "./query";
/**
 * Params returns the total set of minting parameters.
 * @name getParams
 * @package osmosis.mint.v1beta1
 * @see proto service: osmosis.mint.v1beta1.Params
 */
export const getParams = buildQuery<QueryParamsRequest, QueryParamsResponse>({
  encode: QueryParamsRequest.encode,
  decode: QueryParamsResponse.decode,
  service: "osmosis.mint.v1beta1.Query",
  method: "Params"
});
/**
 * EpochProvisions returns the current minting epoch provisions value.
 * @name getEpochProvisions
 * @package osmosis.mint.v1beta1
 * @see proto service: osmosis.mint.v1beta1.EpochProvisions
 */
export const getEpochProvisions = buildQuery<QueryEpochProvisionsRequest, QueryEpochProvisionsResponse>({
  encode: QueryEpochProvisionsRequest.encode,
  decode: QueryEpochProvisionsResponse.decode,
  service: "osmosis.mint.v1beta1.Query",
  method: "EpochProvisions"
});