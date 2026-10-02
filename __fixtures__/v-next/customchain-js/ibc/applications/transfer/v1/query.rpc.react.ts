import { buildUseQuery } from "../../../../react-query";
import type { QueryDenomTraceRequest, QueryDenomTraceResponse, QueryDenomTracesRequest, QueryDenomTracesResponse, QueryParamsRequest, QueryParamsResponse } from "./query";
import { getDenomTrace, getDenomTraces, getIbcApplicationsTransferV1Params } from "./query.rpc.func";
/**
 * DenomTrace queries a denomination trace information.
 * @name useGetDenomTrace
 * @package ibc.applications.transfer.v1
 * @see proto service: ibc.applications.transfer.v1.DenomTrace
 */
export const useGetDenomTrace = buildUseQuery<QueryDenomTraceRequest, QueryDenomTraceResponse>({
  builderQueryFn: getDenomTrace,
  queryKeyPrefix: "DenomTraceQuery"
});
/**
 * DenomTraces queries all denomination traces.
 * @name useGetDenomTraces
 * @package ibc.applications.transfer.v1
 * @see proto service: ibc.applications.transfer.v1.DenomTraces
 */
export const useGetDenomTraces = buildUseQuery<QueryDenomTracesRequest, QueryDenomTracesResponse>({
  builderQueryFn: getDenomTraces,
  queryKeyPrefix: "DenomTracesQuery"
});
/**
 * Params queries all parameters of the ibc-transfer module.
 * @name useGetIbcApplicationsTransferV1Params
 * @package ibc.applications.transfer.v1
 * @see proto service: ibc.applications.transfer.v1.Params
 */
export const useGetIbcApplicationsTransferV1Params = buildUseQuery<QueryParamsRequest, QueryParamsResponse>({
  builderQueryFn: getIbcApplicationsTransferV1Params,
  queryKeyPrefix: "ParamsQuery"
});