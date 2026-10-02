import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../base/query/v1beta1/pagination";
import { Validator, ValidatorSDKType, DelegationResponse, DelegationResponseSDKType, UnbondingDelegation, UnbondingDelegationSDKType, RedelegationResponse, RedelegationResponseSDKType, HistoricalInfo, HistoricalInfoSDKType, Pool, PoolSDKType, Params, ParamsSDKType } from "./staking";
import { EndpointOrRpc, buildQuery } from "../../../helper-func-types";
import { buildUseQuery } from "../../../react-query";
import { buildUseVueQuery } from "../../../vue-query";
import { type QueryValidatorsRequest, QueryValidatorsRequestSDKType, type QueryValidatorsResponse, QueryValidatorsResponseSDKType, type QueryValidatorRequest, QueryValidatorRequestSDKType, type QueryValidatorResponse, QueryValidatorResponseSDKType, type QueryValidatorDelegationsRequest, QueryValidatorDelegationsRequestSDKType, type QueryValidatorDelegationsResponse, QueryValidatorDelegationsResponseSDKType, type QueryValidatorUnbondingDelegationsRequest, QueryValidatorUnbondingDelegationsRequestSDKType, type QueryValidatorUnbondingDelegationsResponse, QueryValidatorUnbondingDelegationsResponseSDKType, type QueryDelegationRequest, QueryDelegationRequestSDKType, type QueryDelegationResponse, QueryDelegationResponseSDKType, type QueryUnbondingDelegationRequest, QueryUnbondingDelegationRequestSDKType, type QueryUnbondingDelegationResponse, QueryUnbondingDelegationResponseSDKType, type QueryDelegatorDelegationsRequest, QueryDelegatorDelegationsRequestSDKType, type QueryDelegatorDelegationsResponse, QueryDelegatorDelegationsResponseSDKType, type QueryDelegatorUnbondingDelegationsRequest, QueryDelegatorUnbondingDelegationsRequestSDKType, type QueryDelegatorUnbondingDelegationsResponse, QueryDelegatorUnbondingDelegationsResponseSDKType, type QueryRedelegationsRequest, QueryRedelegationsRequestSDKType, type QueryRedelegationsResponse, QueryRedelegationsResponseSDKType, type QueryDelegatorValidatorsRequest, QueryDelegatorValidatorsRequestSDKType, type QueryDelegatorValidatorsResponse, QueryDelegatorValidatorsResponseSDKType, type QueryDelegatorValidatorRequest, QueryDelegatorValidatorRequestSDKType, type QueryDelegatorValidatorResponse, QueryDelegatorValidatorResponseSDKType, type QueryHistoricalInfoRequest, QueryHistoricalInfoRequestSDKType, type QueryHistoricalInfoResponse, QueryHistoricalInfoResponseSDKType, type QueryPoolRequest, QueryPoolRequestSDKType, type QueryPoolResponse, QueryPoolResponseSDKType, type QueryParamsRequest, QueryParamsRequestSDKType, type QueryParamsResponse, QueryParamsResponseSDKType } from "./query";
import { getValidators, getValidator, getValidatorDelegations, getValidatorUnbondingDelegations, getDelegation, getUnbondingDelegation, getDelegatorDelegations, getDelegatorUnbondingDelegations, getRedelegations, getDelegatorValidators, getDelegatorValidator, getHistoricalInfo, getPool, getParams } from "./query.rpc.func";
/**
 * Validators queries all validators that match the given status.
 * @name useGetValidators
 * @package cosmos.staking.v1beta1
 * @see proto service: cosmos.staking.v1beta1.Validators
 */
export const useGetValidators = buildUseQuery<QueryValidatorsRequest, QueryValidatorsResponse>({
  builderQueryFn: getValidators,
  queryKeyPrefix: "ValidatorsQuery"
});
/**
 * Validator queries validator info for given validator address.
 * @name useGetValidator
 * @package cosmos.staking.v1beta1
 * @see proto service: cosmos.staking.v1beta1.Validator
 */
export const useGetValidator = buildUseQuery<QueryValidatorRequest, QueryValidatorResponse>({
  builderQueryFn: getValidator,
  queryKeyPrefix: "ValidatorQuery"
});
/**
 * ValidatorDelegations queries delegate info for given validator.
 * @name useGetValidatorDelegations
 * @package cosmos.staking.v1beta1
 * @see proto service: cosmos.staking.v1beta1.ValidatorDelegations
 */
export const useGetValidatorDelegations = buildUseQuery<QueryValidatorDelegationsRequest, QueryValidatorDelegationsResponse>({
  builderQueryFn: getValidatorDelegations,
  queryKeyPrefix: "ValidatorDelegationsQuery"
});
/**
 * ValidatorUnbondingDelegations queries unbonding delegations of a validator.
 * @name useGetValidatorUnbondingDelegations
 * @package cosmos.staking.v1beta1
 * @see proto service: cosmos.staking.v1beta1.ValidatorUnbondingDelegations
 */
export const useGetValidatorUnbondingDelegations = buildUseQuery<QueryValidatorUnbondingDelegationsRequest, QueryValidatorUnbondingDelegationsResponse>({
  builderQueryFn: getValidatorUnbondingDelegations,
  queryKeyPrefix: "ValidatorUnbondingDelegationsQuery"
});
/**
 * Delegation queries delegate info for given validator delegator pair.
 * @name useGetDelegation
 * @package cosmos.staking.v1beta1
 * @see proto service: cosmos.staking.v1beta1.Delegation
 */
export const useGetDelegation = buildUseQuery<QueryDelegationRequest, QueryDelegationResponse>({
  builderQueryFn: getDelegation,
  queryKeyPrefix: "DelegationQuery"
});
/**
 * UnbondingDelegation queries unbonding info for given validator delegator
 * pair.
 * @name useGetUnbondingDelegation
 * @package cosmos.staking.v1beta1
 * @see proto service: cosmos.staking.v1beta1.UnbondingDelegation
 */
export const useGetUnbondingDelegation = buildUseQuery<QueryUnbondingDelegationRequest, QueryUnbondingDelegationResponse>({
  builderQueryFn: getUnbondingDelegation,
  queryKeyPrefix: "UnbondingDelegationQuery"
});
/**
 * DelegatorDelegations queries all delegations of a given delegator address.
 * @name useGetDelegatorDelegations
 * @package cosmos.staking.v1beta1
 * @see proto service: cosmos.staking.v1beta1.DelegatorDelegations
 */
export const useGetDelegatorDelegations = buildUseQuery<QueryDelegatorDelegationsRequest, QueryDelegatorDelegationsResponse>({
  builderQueryFn: getDelegatorDelegations,
  queryKeyPrefix: "DelegatorDelegationsQuery"
});
/**
 * DelegatorUnbondingDelegations queries all unbonding delegations of a given
 * delegator address.
 * @name useGetDelegatorUnbondingDelegations
 * @package cosmos.staking.v1beta1
 * @see proto service: cosmos.staking.v1beta1.DelegatorUnbondingDelegations
 */
export const useGetDelegatorUnbondingDelegations = buildUseQuery<QueryDelegatorUnbondingDelegationsRequest, QueryDelegatorUnbondingDelegationsResponse>({
  builderQueryFn: getDelegatorUnbondingDelegations,
  queryKeyPrefix: "DelegatorUnbondingDelegationsQuery"
});
/**
 * Redelegations queries redelegations of given address.
 * @name useGetRedelegations
 * @package cosmos.staking.v1beta1
 * @see proto service: cosmos.staking.v1beta1.Redelegations
 */
export const useGetRedelegations = buildUseQuery<QueryRedelegationsRequest, QueryRedelegationsResponse>({
  builderQueryFn: getRedelegations,
  queryKeyPrefix: "RedelegationsQuery"
});
/**
 * DelegatorValidators queries all validators info for given delegator
 * address.
 * @name useGetDelegatorValidators
 * @package cosmos.staking.v1beta1
 * @see proto service: cosmos.staking.v1beta1.DelegatorValidators
 */
export const useGetDelegatorValidators = buildUseQuery<QueryDelegatorValidatorsRequest, QueryDelegatorValidatorsResponse>({
  builderQueryFn: getDelegatorValidators,
  queryKeyPrefix: "DelegatorValidatorsQuery"
});
/**
 * DelegatorValidator queries validator info for given delegator validator
 * pair.
 * @name useGetDelegatorValidator
 * @package cosmos.staking.v1beta1
 * @see proto service: cosmos.staking.v1beta1.DelegatorValidator
 */
export const useGetDelegatorValidator = buildUseQuery<QueryDelegatorValidatorRequest, QueryDelegatorValidatorResponse>({
  builderQueryFn: getDelegatorValidator,
  queryKeyPrefix: "DelegatorValidatorQuery"
});
/**
 * HistoricalInfo queries the historical info for given height.
 * @name useGetHistoricalInfo
 * @package cosmos.staking.v1beta1
 * @see proto service: cosmos.staking.v1beta1.HistoricalInfo
 */
export const useGetHistoricalInfo = buildUseQuery<QueryHistoricalInfoRequest, QueryHistoricalInfoResponse>({
  builderQueryFn: getHistoricalInfo,
  queryKeyPrefix: "HistoricalInfoQuery"
});
/**
 * Pool queries the pool info.
 * @name useGetPool
 * @package cosmos.staking.v1beta1
 * @see proto service: cosmos.staking.v1beta1.Pool
 */
export const useGetPool = buildUseQuery<QueryPoolRequest, QueryPoolResponse>({
  builderQueryFn: getPool,
  queryKeyPrefix: "PoolQuery"
});
/**
 * Parameters queries the staking parameters.
 * @name useGetParams
 * @package cosmos.staking.v1beta1
 * @see proto service: cosmos.staking.v1beta1.Params
 */
export const useGetParams = buildUseQuery<QueryParamsRequest, QueryParamsResponse>({
  builderQueryFn: getParams,
  queryKeyPrefix: "ParamsQuery"
});