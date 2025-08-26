import { buildQuery } from "../../../helper-func-types";
import { QueryParamsRequest, QueryParamsResponse, QuerySigningInfoRequest, QuerySigningInfoResponse, QuerySigningInfosRequest, QuerySigningInfosResponse } from "./query";
/**
 * Params queries the parameters of slashing module
 * @name getParams
 * @package cosmos.slashing.v1beta1
 * @see proto service: cosmos.slashing.v1beta1.Params
 */
export const getParams = buildQuery<QueryParamsRequest, QueryParamsResponse>({
  encode: QueryParamsRequest.encode,
  decode: QueryParamsResponse.decode,
  service: "cosmos.slashing.v1beta1.Query",
  method: "Params",
  deps: [QueryParamsRequest, QueryParamsResponse]
});
/**
 * SigningInfo queries the signing info of given cons address
 * @name getSigningInfo
 * @package cosmos.slashing.v1beta1
 * @see proto service: cosmos.slashing.v1beta1.SigningInfo
 */
export const getSigningInfo = buildQuery<QuerySigningInfoRequest, QuerySigningInfoResponse>({
  encode: QuerySigningInfoRequest.encode,
  decode: QuerySigningInfoResponse.decode,
  service: "cosmos.slashing.v1beta1.Query",
  method: "SigningInfo",
  deps: [QuerySigningInfoRequest, QuerySigningInfoResponse]
});
/**
 * SigningInfos queries signing info of all validators
 * @name getSigningInfos
 * @package cosmos.slashing.v1beta1
 * @see proto service: cosmos.slashing.v1beta1.SigningInfos
 */
export const getSigningInfos = buildQuery<QuerySigningInfosRequest, QuerySigningInfosResponse>({
  encode: QuerySigningInfosRequest.encode,
  decode: QuerySigningInfosResponse.decode,
  service: "cosmos.slashing.v1beta1.Query",
  method: "SigningInfos",
  deps: [QuerySigningInfosRequest, QuerySigningInfosResponse]
});