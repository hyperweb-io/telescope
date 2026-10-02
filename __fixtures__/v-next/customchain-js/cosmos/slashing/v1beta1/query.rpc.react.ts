import { buildUseQuery } from "../../../react-query";
import type { QueryParamsRequest, QueryParamsResponse, QuerySigningInfoRequest, QuerySigningInfoResponse, QuerySigningInfosRequest, QuerySigningInfosResponse } from "./query";
import { getCosmosSlashingV1beta1Params, getSigningInfo, getSigningInfos } from "./query.rpc.func";
/**
 * Params queries the parameters of slashing module
 * @name useGetCosmosSlashingV1beta1Params
 * @package cosmos.slashing.v1beta1
 * @see proto service: cosmos.slashing.v1beta1.Params
 */
export const useGetCosmosSlashingV1beta1Params = buildUseQuery<QueryParamsRequest, QueryParamsResponse>({
  builderQueryFn: getCosmosSlashingV1beta1Params,
  queryKeyPrefix: "ParamsQuery"
});
/**
 * SigningInfo queries the signing info of given cons address
 * @name useGetSigningInfo
 * @package cosmos.slashing.v1beta1
 * @see proto service: cosmos.slashing.v1beta1.SigningInfo
 */
export const useGetSigningInfo = buildUseQuery<QuerySigningInfoRequest, QuerySigningInfoResponse>({
  builderQueryFn: getSigningInfo,
  queryKeyPrefix: "SigningInfoQuery"
});
/**
 * SigningInfos queries signing info of all validators
 * @name useGetSigningInfos
 * @package cosmos.slashing.v1beta1
 * @see proto service: cosmos.slashing.v1beta1.SigningInfos
 */
export const useGetSigningInfos = buildUseQuery<QuerySigningInfosRequest, QuerySigningInfosResponse>({
  builderQueryFn: getSigningInfos,
  queryKeyPrefix: "SigningInfosQuery"
});