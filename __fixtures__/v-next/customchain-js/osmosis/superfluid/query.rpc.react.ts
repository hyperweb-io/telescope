import { buildUseQuery } from "../../react-query";
import type { QueryParamsRequest, QueryParamsResponse, AssetTypeRequest, AssetTypeResponse, AllAssetsRequest, AllAssetsResponse, AssetMultiplierRequest, AssetMultiplierResponse, AllIntermediaryAccountsRequest, AllIntermediaryAccountsResponse, ConnectedIntermediaryAccountRequest, ConnectedIntermediaryAccountResponse, QueryTotalDelegationByValidatorForDenomRequest, QueryTotalDelegationByValidatorForDenomResponse, TotalSuperfluidDelegationsRequest, TotalSuperfluidDelegationsResponse, SuperfluidDelegationAmountRequest, SuperfluidDelegationAmountResponse, SuperfluidDelegationsByDelegatorRequest, SuperfluidDelegationsByDelegatorResponse, SuperfluidUndelegationsByDelegatorRequest, SuperfluidUndelegationsByDelegatorResponse, SuperfluidDelegationsByValidatorDenomRequest, SuperfluidDelegationsByValidatorDenomResponse, EstimateSuperfluidDelegatedAmountByValidatorDenomRequest, EstimateSuperfluidDelegatedAmountByValidatorDenomResponse, QueryTotalDelegationByDelegatorRequest, QueryTotalDelegationByDelegatorResponse, QueryUnpoolWhitelistRequest, QueryUnpoolWhitelistResponse } from "./query";
import { getOsmosisSuperfluidParams, getAssetType, getAllAssets, getAssetMultiplier, getAllIntermediaryAccounts, getConnectedIntermediaryAccount, getTotalDelegationByValidatorForDenom, getTotalSuperfluidDelegations, getSuperfluidDelegationAmount, getSuperfluidDelegationsByDelegator, getSuperfluidUndelegationsByDelegator, getSuperfluidDelegationsByValidatorDenom, getEstimateSuperfluidDelegatedAmountByValidatorDenom, getTotalDelegationByDelegator, getUnpoolWhitelist } from "./query.rpc.func";
/**
 * Params returns the total set of superfluid parameters.
 * @name useGetOsmosisSuperfluidParams
 * @package osmosis.superfluid
 * @see proto service: osmosis.superfluid.Params
 */
export const useGetOsmosisSuperfluidParams = buildUseQuery<QueryParamsRequest, QueryParamsResponse>({
  builderQueryFn: getOsmosisSuperfluidParams,
  queryKeyPrefix: "ParamsQuery"
});
/**
 * Returns superfluid asset type, whether if it's a native asset or an lp
 * share.
 * @name useGetAssetType
 * @package osmosis.superfluid
 * @see proto service: osmosis.superfluid.AssetType
 */
export const useGetAssetType = buildUseQuery<AssetTypeRequest, AssetTypeResponse>({
  builderQueryFn: getAssetType,
  queryKeyPrefix: "AssetTypeQuery"
});
/**
 * Returns all registered superfluid assets.
 * @name useGetAllAssets
 * @package osmosis.superfluid
 * @see proto service: osmosis.superfluid.AllAssets
 */
export const useGetAllAssets = buildUseQuery<AllAssetsRequest, AllAssetsResponse>({
  builderQueryFn: getAllAssets,
  queryKeyPrefix: "AllAssetsQuery"
});
/**
 * Returns the osmo equivalent multiplier used in the most recent epoch.
 * @name useGetAssetMultiplier
 * @package osmosis.superfluid
 * @see proto service: osmosis.superfluid.AssetMultiplier
 */
export const useGetAssetMultiplier = buildUseQuery<AssetMultiplierRequest, AssetMultiplierResponse>({
  builderQueryFn: getAssetMultiplier,
  queryKeyPrefix: "AssetMultiplierQuery"
});
/**
 * Returns all superfluid intermediary accounts.
 * @name useGetAllIntermediaryAccounts
 * @package osmosis.superfluid
 * @see proto service: osmosis.superfluid.AllIntermediaryAccounts
 */
export const useGetAllIntermediaryAccounts = buildUseQuery<AllIntermediaryAccountsRequest, AllIntermediaryAccountsResponse>({
  builderQueryFn: getAllIntermediaryAccounts,
  queryKeyPrefix: "AllIntermediaryAccountsQuery"
});
/**
 * Returns intermediary account connected to a superfluid staked lock by id
 * @name useGetConnectedIntermediaryAccount
 * @package osmosis.superfluid
 * @see proto service: osmosis.superfluid.ConnectedIntermediaryAccount
 */
export const useGetConnectedIntermediaryAccount = buildUseQuery<ConnectedIntermediaryAccountRequest, ConnectedIntermediaryAccountResponse>({
  builderQueryFn: getConnectedIntermediaryAccount,
  queryKeyPrefix: "ConnectedIntermediaryAccountQuery"
});
/**
 * Returns the amount of delegations of specific denom for all validators
 * @name useGetTotalDelegationByValidatorForDenom
 * @package osmosis.superfluid
 * @see proto service: osmosis.superfluid.TotalDelegationByValidatorForDenom
 */
export const useGetTotalDelegationByValidatorForDenom = buildUseQuery<QueryTotalDelegationByValidatorForDenomRequest, QueryTotalDelegationByValidatorForDenomResponse>({
  builderQueryFn: getTotalDelegationByValidatorForDenom,
  queryKeyPrefix: "TotalDelegationByValidatorForDenomQuery"
});
/**
 * Returns the total amount of osmo superfluidly staked.
 * Response is denominated in uosmo.
 * @name useGetTotalSuperfluidDelegations
 * @package osmosis.superfluid
 * @see proto service: osmosis.superfluid.TotalSuperfluidDelegations
 */
export const useGetTotalSuperfluidDelegations = buildUseQuery<TotalSuperfluidDelegationsRequest, TotalSuperfluidDelegationsResponse>({
  builderQueryFn: getTotalSuperfluidDelegations,
  queryKeyPrefix: "TotalSuperfluidDelegationsQuery"
});
/**
 * Returns the coins superfluid delegated for the delegator, validator, denom
 * triplet
 * @name useGetSuperfluidDelegationAmount
 * @package osmosis.superfluid
 * @see proto service: osmosis.superfluid.SuperfluidDelegationAmount
 */
export const useGetSuperfluidDelegationAmount = buildUseQuery<SuperfluidDelegationAmountRequest, SuperfluidDelegationAmountResponse>({
  builderQueryFn: getSuperfluidDelegationAmount,
  queryKeyPrefix: "SuperfluidDelegationAmountQuery"
});
/**
 * Returns all the delegated superfluid poistions for a specific delegator.
 * @name useGetSuperfluidDelegationsByDelegator
 * @package osmosis.superfluid
 * @see proto service: osmosis.superfluid.SuperfluidDelegationsByDelegator
 */
export const useGetSuperfluidDelegationsByDelegator = buildUseQuery<SuperfluidDelegationsByDelegatorRequest, SuperfluidDelegationsByDelegatorResponse>({
  builderQueryFn: getSuperfluidDelegationsByDelegator,
  queryKeyPrefix: "SuperfluidDelegationsByDelegatorQuery"
});
/**
 * Returns all the undelegating superfluid poistions for a specific delegator.
 * @name useGetSuperfluidUndelegationsByDelegator
 * @package osmosis.superfluid
 * @see proto service: osmosis.superfluid.SuperfluidUndelegationsByDelegator
 */
export const useGetSuperfluidUndelegationsByDelegator = buildUseQuery<SuperfluidUndelegationsByDelegatorRequest, SuperfluidUndelegationsByDelegatorResponse>({
  builderQueryFn: getSuperfluidUndelegationsByDelegator,
  queryKeyPrefix: "SuperfluidUndelegationsByDelegatorQuery"
});
/**
 * Returns all the superfluid positions of a specific denom delegated to one
 * validator
 * @name useGetSuperfluidDelegationsByValidatorDenom
 * @package osmosis.superfluid
 * @see proto service: osmosis.superfluid.SuperfluidDelegationsByValidatorDenom
 */
export const useGetSuperfluidDelegationsByValidatorDenom = buildUseQuery<SuperfluidDelegationsByValidatorDenomRequest, SuperfluidDelegationsByValidatorDenomResponse>({
  builderQueryFn: getSuperfluidDelegationsByValidatorDenom,
  queryKeyPrefix: "SuperfluidDelegationsByValidatorDenomQuery"
});
/**
 * Returns the amount of a specific denom delegated to a specific validator
 * This is labeled an estimate, because the way it calculates the amount can
 * lead rounding errors from the true delegated amount
 * @name useGetEstimateSuperfluidDelegatedAmountByValidatorDenom
 * @package osmosis.superfluid
 * @see proto service: osmosis.superfluid.EstimateSuperfluidDelegatedAmountByValidatorDenom
 */
export const useGetEstimateSuperfluidDelegatedAmountByValidatorDenom = buildUseQuery<EstimateSuperfluidDelegatedAmountByValidatorDenomRequest, EstimateSuperfluidDelegatedAmountByValidatorDenomResponse>({
  builderQueryFn: getEstimateSuperfluidDelegatedAmountByValidatorDenom,
  queryKeyPrefix: "EstimateSuperfluidDelegatedAmountByValidatorDenomQuery"
});
/**
 * Returns the specified delegations for a specific delegator
 * @name useGetTotalDelegationByDelegator
 * @package osmosis.superfluid
 * @see proto service: osmosis.superfluid.TotalDelegationByDelegator
 */
export const useGetTotalDelegationByDelegator = buildUseQuery<QueryTotalDelegationByDelegatorRequest, QueryTotalDelegationByDelegatorResponse>({
  builderQueryFn: getTotalDelegationByDelegator,
  queryKeyPrefix: "TotalDelegationByDelegatorQuery"
});
/**
 * Returns a list of whitelisted pool ids to unpool.
 * @name useGetUnpoolWhitelist
 * @package osmosis.superfluid
 * @see proto service: osmosis.superfluid.UnpoolWhitelist
 */
export const useGetUnpoolWhitelist = buildUseQuery<QueryUnpoolWhitelistRequest, QueryUnpoolWhitelistResponse>({
  builderQueryFn: getUnpoolWhitelist,
  queryKeyPrefix: "UnpoolWhitelistQuery"
});