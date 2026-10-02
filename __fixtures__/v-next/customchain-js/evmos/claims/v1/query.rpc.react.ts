import { buildUseQuery } from "../../../react-query";
import type { QueryTotalUnclaimedRequest, QueryTotalUnclaimedResponse, QueryParamsRequest, QueryParamsResponse, QueryClaimsRecordsRequest, QueryClaimsRecordsResponse, QueryClaimsRecordRequest, QueryClaimsRecordResponse } from "./query";
import { getTotalUnclaimed, getEvmosClaimsV1Params, getClaimsRecords, getClaimsRecord } from "./query.rpc.func";
/**
 * TotalUnclaimed queries the total unclaimed tokens from the airdrop
 * @name useGetTotalUnclaimed
 * @package evmos.claims.v1
 * @see proto service: evmos.claims.v1.TotalUnclaimed
 */
export const useGetTotalUnclaimed = buildUseQuery<QueryTotalUnclaimedRequest, QueryTotalUnclaimedResponse>({
  builderQueryFn: getTotalUnclaimed,
  queryKeyPrefix: "TotalUnclaimedQuery"
});
/**
 * Params returns the claims module parameters
 * @name useGetEvmosClaimsV1Params
 * @package evmos.claims.v1
 * @see proto service: evmos.claims.v1.Params
 */
export const useGetEvmosClaimsV1Params = buildUseQuery<QueryParamsRequest, QueryParamsResponse>({
  builderQueryFn: getEvmosClaimsV1Params,
  queryKeyPrefix: "ParamsQuery"
});
/**
 * ClaimsRecords returns all claims records
 * @name useGetClaimsRecords
 * @package evmos.claims.v1
 * @see proto service: evmos.claims.v1.ClaimsRecords
 */
export const useGetClaimsRecords = buildUseQuery<QueryClaimsRecordsRequest, QueryClaimsRecordsResponse>({
  builderQueryFn: getClaimsRecords,
  queryKeyPrefix: "ClaimsRecordsQuery"
});
/**
 * ClaimsRecord returns the claims record for a given address
 * @name useGetClaimsRecord
 * @package evmos.claims.v1
 * @see proto service: evmos.claims.v1.ClaimsRecord
 */
export const useGetClaimsRecord = buildUseQuery<QueryClaimsRecordRequest, QueryClaimsRecordResponse>({
  builderQueryFn: getClaimsRecord,
  queryKeyPrefix: "ClaimsRecordQuery"
});