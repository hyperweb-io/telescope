import { buildUseQuery } from "../../../react-query";
import type { QueryModuleAccountBalanceRequest, QueryModuleAccountBalanceResponse, QueryParamsRequest, QueryParamsResponse, QueryClaimRecordRequest, QueryClaimRecordResponse, QueryClaimableForActionRequest, QueryClaimableForActionResponse, QueryTotalClaimableRequest, QueryTotalClaimableResponse } from "./query";
import { getModuleAccountBalance, getOsmosisClaimV1beta1Params, getClaimRecord, getClaimableForAction, getTotalClaimable } from "./query.rpc.func";
/**
 * @name useGetModuleAccountBalance
 * @package osmosis.claim.v1beta1
 * @see proto service: osmosis.claim.v1beta1.ModuleAccountBalance
 */
export const useGetModuleAccountBalance = buildUseQuery<QueryModuleAccountBalanceRequest, QueryModuleAccountBalanceResponse>({
  builderQueryFn: getModuleAccountBalance,
  queryKeyPrefix: "ModuleAccountBalanceQuery"
});
/**
 * @name useGetOsmosisClaimV1beta1Params
 * @package osmosis.claim.v1beta1
 * @see proto service: osmosis.claim.v1beta1.Params
 */
export const useGetOsmosisClaimV1beta1Params = buildUseQuery<QueryParamsRequest, QueryParamsResponse>({
  builderQueryFn: getOsmosisClaimV1beta1Params,
  queryKeyPrefix: "ParamsQuery"
});
/**
 * @name useGetClaimRecord
 * @package osmosis.claim.v1beta1
 * @see proto service: osmosis.claim.v1beta1.ClaimRecord
 */
export const useGetClaimRecord = buildUseQuery<QueryClaimRecordRequest, QueryClaimRecordResponse>({
  builderQueryFn: getClaimRecord,
  queryKeyPrefix: "ClaimRecordQuery"
});
/**
 * @name useGetClaimableForAction
 * @package osmosis.claim.v1beta1
 * @see proto service: osmosis.claim.v1beta1.ClaimableForAction
 */
export const useGetClaimableForAction = buildUseQuery<QueryClaimableForActionRequest, QueryClaimableForActionResponse>({
  builderQueryFn: getClaimableForAction,
  queryKeyPrefix: "ClaimableForActionQuery"
});
/**
 * @name useGetTotalClaimable
 * @package osmosis.claim.v1beta1
 * @see proto service: osmosis.claim.v1beta1.TotalClaimable
 */
export const useGetTotalClaimable = buildUseQuery<QueryTotalClaimableRequest, QueryTotalClaimableResponse>({
  builderQueryFn: getTotalClaimable,
  queryKeyPrefix: "TotalClaimableQuery"
});