import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../cosmos/base/query/v1beta1/pagination";
import { Params, ParamsSDKType } from "./params";
import { SuperfluidAssetType, SuperfluidAssetTypeSDKType, SuperfluidAsset, SuperfluidAssetSDKType, OsmoEquivalentMultiplierRecord, OsmoEquivalentMultiplierRecordSDKType, SuperfluidDelegationRecord, SuperfluidDelegationRecordSDKType } from "./superfluid";
import { Coin, CoinSDKType } from "../../cosmos/base/v1beta1/coin";
import { SyntheticLock, SyntheticLockSDKType } from "../lockup/lock";
import { DelegationResponse, DelegationResponseSDKType } from "../../cosmos/staking/v1beta1/staking";
import { EndpointOrRpc, buildQuery } from "../../helper-func-types";
import { QueryParamsRequest, QueryParamsRequestSDKType, QueryParamsResponse, QueryParamsResponseSDKType, AssetTypeRequest, AssetTypeRequestSDKType, AssetTypeResponse, AssetTypeResponseSDKType, AllAssetsRequest, AllAssetsRequestSDKType, AllAssetsResponse, AllAssetsResponseSDKType, AssetMultiplierRequest, AssetMultiplierRequestSDKType, AssetMultiplierResponse, AssetMultiplierResponseSDKType, AllIntermediaryAccountsRequest, AllIntermediaryAccountsRequestSDKType, AllIntermediaryAccountsResponse, AllIntermediaryAccountsResponseSDKType, ConnectedIntermediaryAccountRequest, ConnectedIntermediaryAccountRequestSDKType, ConnectedIntermediaryAccountResponse, ConnectedIntermediaryAccountResponseSDKType, QueryTotalDelegationByValidatorForDenomRequest, QueryTotalDelegationByValidatorForDenomRequestSDKType, QueryTotalDelegationByValidatorForDenomResponse, QueryTotalDelegationByValidatorForDenomResponseSDKType, TotalSuperfluidDelegationsRequest, TotalSuperfluidDelegationsRequestSDKType, TotalSuperfluidDelegationsResponse, TotalSuperfluidDelegationsResponseSDKType, SuperfluidDelegationAmountRequest, SuperfluidDelegationAmountRequestSDKType, SuperfluidDelegationAmountResponse, SuperfluidDelegationAmountResponseSDKType, SuperfluidDelegationsByDelegatorRequest, SuperfluidDelegationsByDelegatorRequestSDKType, SuperfluidDelegationsByDelegatorResponse, SuperfluidDelegationsByDelegatorResponseSDKType, SuperfluidUndelegationsByDelegatorRequest, SuperfluidUndelegationsByDelegatorRequestSDKType, SuperfluidUndelegationsByDelegatorResponse, SuperfluidUndelegationsByDelegatorResponseSDKType, SuperfluidDelegationsByValidatorDenomRequest, SuperfluidDelegationsByValidatorDenomRequestSDKType, SuperfluidDelegationsByValidatorDenomResponse, SuperfluidDelegationsByValidatorDenomResponseSDKType, EstimateSuperfluidDelegatedAmountByValidatorDenomRequest, EstimateSuperfluidDelegatedAmountByValidatorDenomRequestSDKType, EstimateSuperfluidDelegatedAmountByValidatorDenomResponse, EstimateSuperfluidDelegatedAmountByValidatorDenomResponseSDKType, QueryTotalDelegationByDelegatorRequest, QueryTotalDelegationByDelegatorRequestSDKType, QueryTotalDelegationByDelegatorResponse, QueryTotalDelegationByDelegatorResponseSDKType, QueryUnpoolWhitelistRequest, QueryUnpoolWhitelistRequestSDKType, QueryUnpoolWhitelistResponse, QueryUnpoolWhitelistResponseSDKType } from "./query";
/**
 * Params returns the total set of superfluid parameters.
 * @name getParams
 * @package osmosis.superfluid
 * @see proto service: osmosis.superfluid.Params
 */
export const getParams = buildQuery<QueryParamsRequest, QueryParamsResponse>({
  encode: QueryParamsRequest.encode,
  decode: QueryParamsResponse.decode,
  service: "osmosis.superfluid.Query",
  method: "Params"
});
/**
 * Returns superfluid asset type, whether if it's a native asset or an lp
 * share.
 * @name getAssetType
 * @package osmosis.superfluid
 * @see proto service: osmosis.superfluid.AssetType
 */
export const getAssetType = buildQuery<AssetTypeRequest, AssetTypeResponse>({
  encode: AssetTypeRequest.encode,
  decode: AssetTypeResponse.decode,
  service: "osmosis.superfluid.Query",
  method: "AssetType"
});
/**
 * Returns all registered superfluid assets.
 * @name getAllAssets
 * @package osmosis.superfluid
 * @see proto service: osmosis.superfluid.AllAssets
 */
export const getAllAssets = buildQuery<AllAssetsRequest, AllAssetsResponse>({
  encode: AllAssetsRequest.encode,
  decode: AllAssetsResponse.decode,
  service: "osmosis.superfluid.Query",
  method: "AllAssets"
});
/**
 * Returns the osmo equivalent multiplier used in the most recent epoch.
 * @name getAssetMultiplier
 * @package osmosis.superfluid
 * @see proto service: osmosis.superfluid.AssetMultiplier
 */
export const getAssetMultiplier = buildQuery<AssetMultiplierRequest, AssetMultiplierResponse>({
  encode: AssetMultiplierRequest.encode,
  decode: AssetMultiplierResponse.decode,
  service: "osmosis.superfluid.Query",
  method: "AssetMultiplier"
});
/**
 * Returns all superfluid intermediary accounts.
 * @name getAllIntermediaryAccounts
 * @package osmosis.superfluid
 * @see proto service: osmosis.superfluid.AllIntermediaryAccounts
 */
export const getAllIntermediaryAccounts = buildQuery<AllIntermediaryAccountsRequest, AllIntermediaryAccountsResponse>({
  encode: AllIntermediaryAccountsRequest.encode,
  decode: AllIntermediaryAccountsResponse.decode,
  service: "osmosis.superfluid.Query",
  method: "AllIntermediaryAccounts"
});
/**
 * Returns intermediary account connected to a superfluid staked lock by id
 * @name getConnectedIntermediaryAccount
 * @package osmosis.superfluid
 * @see proto service: osmosis.superfluid.ConnectedIntermediaryAccount
 */
export const getConnectedIntermediaryAccount = buildQuery<ConnectedIntermediaryAccountRequest, ConnectedIntermediaryAccountResponse>({
  encode: ConnectedIntermediaryAccountRequest.encode,
  decode: ConnectedIntermediaryAccountResponse.decode,
  service: "osmosis.superfluid.Query",
  method: "ConnectedIntermediaryAccount"
});
/**
 * Returns the amount of delegations of specific denom for all validators
 * @name getTotalDelegationByValidatorForDenom
 * @package osmosis.superfluid
 * @see proto service: osmosis.superfluid.TotalDelegationByValidatorForDenom
 */
export const getTotalDelegationByValidatorForDenom = buildQuery<QueryTotalDelegationByValidatorForDenomRequest, QueryTotalDelegationByValidatorForDenomResponse>({
  encode: QueryTotalDelegationByValidatorForDenomRequest.encode,
  decode: QueryTotalDelegationByValidatorForDenomResponse.decode,
  service: "osmosis.superfluid.Query",
  method: "TotalDelegationByValidatorForDenom"
});
/**
 * Returns the total amount of osmo superfluidly staked.
 * Response is denominated in uosmo.
 * @name getTotalSuperfluidDelegations
 * @package osmosis.superfluid
 * @see proto service: osmosis.superfluid.TotalSuperfluidDelegations
 */
export const getTotalSuperfluidDelegations = buildQuery<TotalSuperfluidDelegationsRequest, TotalSuperfluidDelegationsResponse>({
  encode: TotalSuperfluidDelegationsRequest.encode,
  decode: TotalSuperfluidDelegationsResponse.decode,
  service: "osmosis.superfluid.Query",
  method: "TotalSuperfluidDelegations"
});
/**
 * Returns the coins superfluid delegated for the delegator, validator, denom
 * triplet
 * @name getSuperfluidDelegationAmount
 * @package osmosis.superfluid
 * @see proto service: osmosis.superfluid.SuperfluidDelegationAmount
 */
export const getSuperfluidDelegationAmount = buildQuery<SuperfluidDelegationAmountRequest, SuperfluidDelegationAmountResponse>({
  encode: SuperfluidDelegationAmountRequest.encode,
  decode: SuperfluidDelegationAmountResponse.decode,
  service: "osmosis.superfluid.Query",
  method: "SuperfluidDelegationAmount"
});
/**
 * Returns all the delegated superfluid poistions for a specific delegator.
 * @name getSuperfluidDelegationsByDelegator
 * @package osmosis.superfluid
 * @see proto service: osmosis.superfluid.SuperfluidDelegationsByDelegator
 */
export const getSuperfluidDelegationsByDelegator = buildQuery<SuperfluidDelegationsByDelegatorRequest, SuperfluidDelegationsByDelegatorResponse>({
  encode: SuperfluidDelegationsByDelegatorRequest.encode,
  decode: SuperfluidDelegationsByDelegatorResponse.decode,
  service: "osmosis.superfluid.Query",
  method: "SuperfluidDelegationsByDelegator"
});
/**
 * Returns all the undelegating superfluid poistions for a specific delegator.
 * @name getSuperfluidUndelegationsByDelegator
 * @package osmosis.superfluid
 * @see proto service: osmosis.superfluid.SuperfluidUndelegationsByDelegator
 */
export const getSuperfluidUndelegationsByDelegator = buildQuery<SuperfluidUndelegationsByDelegatorRequest, SuperfluidUndelegationsByDelegatorResponse>({
  encode: SuperfluidUndelegationsByDelegatorRequest.encode,
  decode: SuperfluidUndelegationsByDelegatorResponse.decode,
  service: "osmosis.superfluid.Query",
  method: "SuperfluidUndelegationsByDelegator"
});
/**
 * Returns all the superfluid positions of a specific denom delegated to one
 * validator
 * @name getSuperfluidDelegationsByValidatorDenom
 * @package osmosis.superfluid
 * @see proto service: osmosis.superfluid.SuperfluidDelegationsByValidatorDenom
 */
export const getSuperfluidDelegationsByValidatorDenom = buildQuery<SuperfluidDelegationsByValidatorDenomRequest, SuperfluidDelegationsByValidatorDenomResponse>({
  encode: SuperfluidDelegationsByValidatorDenomRequest.encode,
  decode: SuperfluidDelegationsByValidatorDenomResponse.decode,
  service: "osmosis.superfluid.Query",
  method: "SuperfluidDelegationsByValidatorDenom"
});
/**
 * Returns the amount of a specific denom delegated to a specific validator
 * This is labeled an estimate, because the way it calculates the amount can
 * lead rounding errors from the true delegated amount
 * @name getEstimateSuperfluidDelegatedAmountByValidatorDenom
 * @package osmosis.superfluid
 * @see proto service: osmosis.superfluid.EstimateSuperfluidDelegatedAmountByValidatorDenom
 */
export const getEstimateSuperfluidDelegatedAmountByValidatorDenom = buildQuery<EstimateSuperfluidDelegatedAmountByValidatorDenomRequest, EstimateSuperfluidDelegatedAmountByValidatorDenomResponse>({
  encode: EstimateSuperfluidDelegatedAmountByValidatorDenomRequest.encode,
  decode: EstimateSuperfluidDelegatedAmountByValidatorDenomResponse.decode,
  service: "osmosis.superfluid.Query",
  method: "EstimateSuperfluidDelegatedAmountByValidatorDenom"
});
/**
 * Returns the specified delegations for a specific delegator
 * @name getTotalDelegationByDelegator
 * @package osmosis.superfluid
 * @see proto service: osmosis.superfluid.TotalDelegationByDelegator
 */
export const getTotalDelegationByDelegator = buildQuery<QueryTotalDelegationByDelegatorRequest, QueryTotalDelegationByDelegatorResponse>({
  encode: QueryTotalDelegationByDelegatorRequest.encode,
  decode: QueryTotalDelegationByDelegatorResponse.decode,
  service: "osmosis.superfluid.Query",
  method: "TotalDelegationByDelegator"
});
/**
 * Returns a list of whitelisted pool ids to unpool.
 * @name getUnpoolWhitelist
 * @package osmosis.superfluid
 * @see proto service: osmosis.superfluid.UnpoolWhitelist
 */
export const getUnpoolWhitelist = buildQuery<QueryUnpoolWhitelistRequest, QueryUnpoolWhitelistResponse>({
  encode: QueryUnpoolWhitelistRequest.encode,
  decode: QueryUnpoolWhitelistResponse.decode,
  service: "osmosis.superfluid.Query",
  method: "UnpoolWhitelist"
});