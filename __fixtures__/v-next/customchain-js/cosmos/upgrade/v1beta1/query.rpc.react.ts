import { buildUseQuery } from "../../../react-query";
import type { QueryCurrentPlanRequest, QueryCurrentPlanResponse, QueryAppliedPlanRequest, QueryAppliedPlanResponse, QueryUpgradedConsensusStateRequest, QueryUpgradedConsensusStateResponse, QueryModuleVersionsRequest, QueryModuleVersionsResponse, QueryAuthorityRequest, QueryAuthorityResponse } from "./query";
import { getCurrentPlan, getAppliedPlan, getUpgradedConsensusState, getModuleVersions, getAuthority } from "./query.rpc.func";
/**
 * CurrentPlan queries the current upgrade plan.
 * @name useGetCurrentPlan
 * @package cosmos.upgrade.v1beta1
 * @see proto service: cosmos.upgrade.v1beta1.CurrentPlan
 */
export const useGetCurrentPlan = buildUseQuery<QueryCurrentPlanRequest, QueryCurrentPlanResponse>({
  builderQueryFn: getCurrentPlan,
  queryKeyPrefix: "CurrentPlanQuery"
});
/**
 * AppliedPlan queries a previously applied upgrade plan by its name.
 * @name useGetAppliedPlan
 * @package cosmos.upgrade.v1beta1
 * @see proto service: cosmos.upgrade.v1beta1.AppliedPlan
 */
export const useGetAppliedPlan = buildUseQuery<QueryAppliedPlanRequest, QueryAppliedPlanResponse>({
  builderQueryFn: getAppliedPlan,
  queryKeyPrefix: "AppliedPlanQuery"
});
/**
 * UpgradedConsensusState queries the consensus state that will serve
 * as a trusted kernel for the next version of this chain. It will only be
 * stored at the last height of this chain.
 * UpgradedConsensusState RPC not supported with legacy querier
 * This rpc is deprecated now that IBC has its own replacement
 * (https://github.com/cosmos/ibc-go/blob/2c880a22e9f9cc75f62b527ca94aa75ce1106001/proto/ibc/core/client/v1/query.proto#L54)
 * @name useGetUpgradedConsensusState
 * @package cosmos.upgrade.v1beta1
 * @see proto service: cosmos.upgrade.v1beta1.UpgradedConsensusState
 * @deprecated
 */
export const useGetUpgradedConsensusState = buildUseQuery<QueryUpgradedConsensusStateRequest, QueryUpgradedConsensusStateResponse>({
  builderQueryFn: getUpgradedConsensusState,
  queryKeyPrefix: "UpgradedConsensusStateQuery"
});
/**
 * ModuleVersions queries the list of module versions from state.
 * 
 * Since: cosmos-sdk 0.43
 * @name useGetModuleVersions
 * @package cosmos.upgrade.v1beta1
 * @see proto service: cosmos.upgrade.v1beta1.ModuleVersions
 */
export const useGetModuleVersions = buildUseQuery<QueryModuleVersionsRequest, QueryModuleVersionsResponse>({
  builderQueryFn: getModuleVersions,
  queryKeyPrefix: "ModuleVersionsQuery"
});
/**
 * Returns the account with authority to conduct upgrades
 * @name useGetAuthority
 * @package cosmos.upgrade.v1beta1
 * @see proto service: cosmos.upgrade.v1beta1.Authority
 */
export const useGetAuthority = buildUseQuery<QueryAuthorityRequest, QueryAuthorityResponse>({
  builderQueryFn: getAuthority,
  queryKeyPrefix: "AuthorityQuery"
});