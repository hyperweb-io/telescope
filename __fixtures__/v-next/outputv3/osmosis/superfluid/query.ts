import { PageRequest, PageRequestAmino, PageRequestSDKType, PageResponse, PageResponseAmino, PageResponseSDKType } from "../../cosmos/base/query/v1beta1/pagination";
import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { SuperfluidAssetType, SuperfluidAssetTypeSDKType, SuperfluidAsset, SuperfluidAssetAmino, SuperfluidAssetSDKType, OsmoEquivalentMultiplierRecord, OsmoEquivalentMultiplierRecordAmino, OsmoEquivalentMultiplierRecordSDKType, SuperfluidDelegationRecord, SuperfluidDelegationRecordAmino, SuperfluidDelegationRecordSDKType, superfluidAssetTypeFromJSON, superfluidAssetTypeToJSON } from "./superfluid";
import { Coin, CoinAmino, CoinSDKType } from "../../cosmos/base/v1beta1/coin";
import { SyntheticLock, SyntheticLockAmino, SyntheticLockSDKType } from "../lockup/lock";
import { DelegationResponse, DelegationResponseAmino, DelegationResponseSDKType } from "../../cosmos/staking/v1beta1/staking";
import { BinaryReader, BinaryWriter } from "../../binary";
import { DeepPartial, isSet } from "../../helpers";
import { GlobalDecoderRegistry } from "../../registry";
export const protobufPackage = "osmosis.superfluid";
/**
 * @name QueryParamsRequest
 * @package osmosis.superfluid
 * @see proto type: osmosis.superfluid.QueryParamsRequest
 */
export interface QueryParamsRequest {}
export interface QueryParamsRequestProtoMsg {
  typeUrl: "/osmosis.superfluid.QueryParamsRequest";
  value: Uint8Array;
}
/**
 * @name QueryParamsRequestAmino
 * @package osmosis.superfluid
 * @see proto type: osmosis.superfluid.QueryParamsRequest
 */
export interface QueryParamsRequestAmino {}
/**
 * @name QueryParamsRequestSDKType
 * @package osmosis.superfluid
 * @see proto type: osmosis.superfluid.QueryParamsRequest
 */
export interface QueryParamsRequestSDKType {}
/**
 * @name QueryParamsResponse
 * @package osmosis.superfluid
 * @see proto type: osmosis.superfluid.QueryParamsResponse
 */
export interface QueryParamsResponse {
  /**
   * params defines the parameters of the module.
   */
  params: Params;
}
export interface QueryParamsResponseProtoMsg {
  typeUrl: "/osmosis.superfluid.QueryParamsResponse";
  value: Uint8Array;
}
/**
 * @name QueryParamsResponseAmino
 * @package osmosis.superfluid
 * @see proto type: osmosis.superfluid.QueryParamsResponse
 */
export interface QueryParamsResponseAmino {
  /**
   * params defines the parameters of the module.
   */
  params?: ParamsAmino;
}
/**
 * @name QueryParamsResponseSDKType
 * @package osmosis.superfluid
 * @see proto type: osmosis.superfluid.QueryParamsResponse
 */
export interface QueryParamsResponseSDKType {
  params: ParamsSDKType;
}
/**
 * @name AssetTypeRequest
 * @package osmosis.superfluid
 * @see proto type: osmosis.superfluid.AssetTypeRequest
 */
export interface AssetTypeRequest {
  denom: string;
}
export interface AssetTypeRequestProtoMsg {
  typeUrl: "/osmosis.superfluid.AssetTypeRequest";
  value: Uint8Array;
}
/**
 * @name AssetTypeRequestAmino
 * @package osmosis.superfluid
 * @see proto type: osmosis.superfluid.AssetTypeRequest
 */
export interface AssetTypeRequestAmino {
  denom?: string;
}
/**
 * @name AssetTypeRequestSDKType
 * @package osmosis.superfluid
 * @see proto type: osmosis.superfluid.AssetTypeRequest
 */
export interface AssetTypeRequestSDKType {
  denom: string;
}
/**
 * @name AssetTypeResponse
 * @package osmosis.superfluid
 * @see proto type: osmosis.superfluid.AssetTypeResponse
 */
export interface AssetTypeResponse {
  assetType: SuperfluidAssetType;
}
export interface AssetTypeResponseProtoMsg {
  typeUrl: "/osmosis.superfluid.AssetTypeResponse";
  value: Uint8Array;
}
/**
 * @name AssetTypeResponseAmino
 * @package osmosis.superfluid
 * @see proto type: osmosis.superfluid.AssetTypeResponse
 */
export interface AssetTypeResponseAmino {
  asset_type?: SuperfluidAssetType;
}
/**
 * @name AssetTypeResponseSDKType
 * @package osmosis.superfluid
 * @see proto type: osmosis.superfluid.AssetTypeResponse
 */
export interface AssetTypeResponseSDKType {
  asset_type: SuperfluidAssetType;
}
/**
 * @name AllAssetsRequest
 * @package osmosis.superfluid
 * @see proto type: osmosis.superfluid.AllAssetsRequest
 */
export interface AllAssetsRequest {}
export interface AllAssetsRequestProtoMsg {
  typeUrl: "/osmosis.superfluid.AllAssetsRequest";
  value: Uint8Array;
}
/**
 * @name AllAssetsRequestAmino
 * @package osmosis.superfluid
 * @see proto type: osmosis.superfluid.AllAssetsRequest
 */
export interface AllAssetsRequestAmino {}
/**
 * @name AllAssetsRequestSDKType
 * @package osmosis.superfluid
 * @see proto type: osmosis.superfluid.AllAssetsRequest
 */
export interface AllAssetsRequestSDKType {}
/**
 * @name AllAssetsResponse
 * @package osmosis.superfluid
 * @see proto type: osmosis.superfluid.AllAssetsResponse
 */
export interface AllAssetsResponse {
  assets: SuperfluidAsset[];
}
export interface AllAssetsResponseProtoMsg {
  typeUrl: "/osmosis.superfluid.AllAssetsResponse";
  value: Uint8Array;
}
/**
 * @name AllAssetsResponseAmino
 * @package osmosis.superfluid
 * @see proto type: osmosis.superfluid.AllAssetsResponse
 */
export interface AllAssetsResponseAmino {
  assets?: SuperfluidAssetAmino[];
}
/**
 * @name AllAssetsResponseSDKType
 * @package osmosis.superfluid
 * @see proto type: osmosis.superfluid.AllAssetsResponse
 */
export interface AllAssetsResponseSDKType {
  assets: SuperfluidAssetSDKType[];
}
/**
 * @name AssetMultiplierRequest
 * @package osmosis.superfluid
 * @see proto type: osmosis.superfluid.AssetMultiplierRequest
 */
export interface AssetMultiplierRequest {
  denom: string;
}
export interface AssetMultiplierRequestProtoMsg {
  typeUrl: "/osmosis.superfluid.AssetMultiplierRequest";
  value: Uint8Array;
}
/**
 * @name AssetMultiplierRequestAmino
 * @package osmosis.superfluid
 * @see proto type: osmosis.superfluid.AssetMultiplierRequest
 */
export interface AssetMultiplierRequestAmino {
  denom?: string;
}
/**
 * @name AssetMultiplierRequestSDKType
 * @package osmosis.superfluid
 * @see proto type: osmosis.superfluid.AssetMultiplierRequest
 */
export interface AssetMultiplierRequestSDKType {
  denom: string;
}
/**
 * @name AssetMultiplierResponse
 * @package osmosis.superfluid
 * @see proto type: osmosis.superfluid.AssetMultiplierResponse
 */
export interface AssetMultiplierResponse {
  osmoEquivalentMultiplier?: OsmoEquivalentMultiplierRecord;
}
export interface AssetMultiplierResponseProtoMsg {
  typeUrl: "/osmosis.superfluid.AssetMultiplierResponse";
  value: Uint8Array;
}
/**
 * @name AssetMultiplierResponseAmino
 * @package osmosis.superfluid
 * @see proto type: osmosis.superfluid.AssetMultiplierResponse
 */
export interface AssetMultiplierResponseAmino {
  osmo_equivalent_multiplier?: OsmoEquivalentMultiplierRecordAmino;
}
/**
 * @name AssetMultiplierResponseSDKType
 * @package osmosis.superfluid
 * @see proto type: osmosis.superfluid.AssetMultiplierResponse
 */
export interface AssetMultiplierResponseSDKType {
  osmo_equivalent_multiplier?: OsmoEquivalentMultiplierRecordSDKType;
}
/**
 * @name SuperfluidIntermediaryAccountInfo
 * @package osmosis.superfluid
 * @see proto type: osmosis.superfluid.SuperfluidIntermediaryAccountInfo
 */
export interface SuperfluidIntermediaryAccountInfo {
  denom: string;
  valAddr: string;
  gaugeId: bigint;
  address: string;
}
export interface SuperfluidIntermediaryAccountInfoProtoMsg {
  typeUrl: "/osmosis.superfluid.SuperfluidIntermediaryAccountInfo";
  value: Uint8Array;
}
/**
 * @name SuperfluidIntermediaryAccountInfoAmino
 * @package osmosis.superfluid
 * @see proto type: osmosis.superfluid.SuperfluidIntermediaryAccountInfo
 */
export interface SuperfluidIntermediaryAccountInfoAmino {
  denom?: string;
  val_addr?: string;
  gauge_id?: string;
  address?: string;
}
/**
 * @name SuperfluidIntermediaryAccountInfoSDKType
 * @package osmosis.superfluid
 * @see proto type: osmosis.superfluid.SuperfluidIntermediaryAccountInfo
 */
export interface SuperfluidIntermediaryAccountInfoSDKType {
  denom: string;
  val_addr: string;
  gauge_id: bigint;
  address: string;
}
/**
 * @name AllIntermediaryAccountsRequest
 * @package osmosis.superfluid
 * @see proto type: osmosis.superfluid.AllIntermediaryAccountsRequest
 */
export interface AllIntermediaryAccountsRequest {
  pagination?: PageRequest;
}
export interface AllIntermediaryAccountsRequestProtoMsg {
  typeUrl: "/osmosis.superfluid.AllIntermediaryAccountsRequest";
  value: Uint8Array;
}
/**
 * @name AllIntermediaryAccountsRequestAmino
 * @package osmosis.superfluid
 * @see proto type: osmosis.superfluid.AllIntermediaryAccountsRequest
 */
export interface AllIntermediaryAccountsRequestAmino {
  pagination?: PageRequestAmino;
}
/**
 * @name AllIntermediaryAccountsRequestSDKType
 * @package osmosis.superfluid
 * @see proto type: osmosis.superfluid.AllIntermediaryAccountsRequest
 */
export interface AllIntermediaryAccountsRequestSDKType {
  pagination?: PageRequestSDKType;
}
/**
 * @name AllIntermediaryAccountsResponse
 * @package osmosis.superfluid
 * @see proto type: osmosis.superfluid.AllIntermediaryAccountsResponse
 */
export interface AllIntermediaryAccountsResponse {
  accounts: SuperfluidIntermediaryAccountInfo[];
  pagination?: PageResponse;
}
export interface AllIntermediaryAccountsResponseProtoMsg {
  typeUrl: "/osmosis.superfluid.AllIntermediaryAccountsResponse";
  value: Uint8Array;
}
/**
 * @name AllIntermediaryAccountsResponseAmino
 * @package osmosis.superfluid
 * @see proto type: osmosis.superfluid.AllIntermediaryAccountsResponse
 */
export interface AllIntermediaryAccountsResponseAmino {
  accounts?: SuperfluidIntermediaryAccountInfoAmino[];
  pagination?: PageResponseAmino;
}
/**
 * @name AllIntermediaryAccountsResponseSDKType
 * @package osmosis.superfluid
 * @see proto type: osmosis.superfluid.AllIntermediaryAccountsResponse
 */
export interface AllIntermediaryAccountsResponseSDKType {
  accounts: SuperfluidIntermediaryAccountInfoSDKType[];
  pagination?: PageResponseSDKType;
}
/**
 * @name ConnectedIntermediaryAccountRequest
 * @package osmosis.superfluid
 * @see proto type: osmosis.superfluid.ConnectedIntermediaryAccountRequest
 */
export interface ConnectedIntermediaryAccountRequest {
  lockId: bigint;
}
export interface ConnectedIntermediaryAccountRequestProtoMsg {
  typeUrl: "/osmosis.superfluid.ConnectedIntermediaryAccountRequest";
  value: Uint8Array;
}
/**
 * @name ConnectedIntermediaryAccountRequestAmino
 * @package osmosis.superfluid
 * @see proto type: osmosis.superfluid.ConnectedIntermediaryAccountRequest
 */
export interface ConnectedIntermediaryAccountRequestAmino {
  lock_id?: string;
}
/**
 * @name ConnectedIntermediaryAccountRequestSDKType
 * @package osmosis.superfluid
 * @see proto type: osmosis.superfluid.ConnectedIntermediaryAccountRequest
 */
export interface ConnectedIntermediaryAccountRequestSDKType {
  lock_id: bigint;
}
/**
 * @name ConnectedIntermediaryAccountResponse
 * @package osmosis.superfluid
 * @see proto type: osmosis.superfluid.ConnectedIntermediaryAccountResponse
 */
export interface ConnectedIntermediaryAccountResponse {
  account?: SuperfluidIntermediaryAccountInfo;
}
export interface ConnectedIntermediaryAccountResponseProtoMsg {
  typeUrl: "/osmosis.superfluid.ConnectedIntermediaryAccountResponse";
  value: Uint8Array;
}
/**
 * @name ConnectedIntermediaryAccountResponseAmino
 * @package osmosis.superfluid
 * @see proto type: osmosis.superfluid.ConnectedIntermediaryAccountResponse
 */
export interface ConnectedIntermediaryAccountResponseAmino {
  account?: SuperfluidIntermediaryAccountInfoAmino;
}
/**
 * @name ConnectedIntermediaryAccountResponseSDKType
 * @package osmosis.superfluid
 * @see proto type: osmosis.superfluid.ConnectedIntermediaryAccountResponse
 */
export interface ConnectedIntermediaryAccountResponseSDKType {
  account?: SuperfluidIntermediaryAccountInfoSDKType;
}
/**
 * @name QueryTotalDelegationByValidatorForDenomRequest
 * @package osmosis.superfluid
 * @see proto type: osmosis.superfluid.QueryTotalDelegationByValidatorForDenomRequest
 */
export interface QueryTotalDelegationByValidatorForDenomRequest {
  denom: string;
}
export interface QueryTotalDelegationByValidatorForDenomRequestProtoMsg {
  typeUrl: "/osmosis.superfluid.QueryTotalDelegationByValidatorForDenomRequest";
  value: Uint8Array;
}
/**
 * @name QueryTotalDelegationByValidatorForDenomRequestAmino
 * @package osmosis.superfluid
 * @see proto type: osmosis.superfluid.QueryTotalDelegationByValidatorForDenomRequest
 */
export interface QueryTotalDelegationByValidatorForDenomRequestAmino {
  denom?: string;
}
/**
 * @name QueryTotalDelegationByValidatorForDenomRequestSDKType
 * @package osmosis.superfluid
 * @see proto type: osmosis.superfluid.QueryTotalDelegationByValidatorForDenomRequest
 */
export interface QueryTotalDelegationByValidatorForDenomRequestSDKType {
  denom: string;
}
/**
 * @name QueryTotalDelegationByValidatorForDenomResponse
 * @package osmosis.superfluid
 * @see proto type: osmosis.superfluid.QueryTotalDelegationByValidatorForDenomResponse
 */
export interface QueryTotalDelegationByValidatorForDenomResponse {
  assets: Delegations[];
}
export interface QueryTotalDelegationByValidatorForDenomResponseProtoMsg {
  typeUrl: "/osmosis.superfluid.QueryTotalDelegationByValidatorForDenomResponse";
  value: Uint8Array;
}
/**
 * @name QueryTotalDelegationByValidatorForDenomResponseAmino
 * @package osmosis.superfluid
 * @see proto type: osmosis.superfluid.QueryTotalDelegationByValidatorForDenomResponse
 */
export interface QueryTotalDelegationByValidatorForDenomResponseAmino {
  assets?: DelegationsAmino[];
}
/**
 * @name QueryTotalDelegationByValidatorForDenomResponseSDKType
 * @package osmosis.superfluid
 * @see proto type: osmosis.superfluid.QueryTotalDelegationByValidatorForDenomResponse
 */
export interface QueryTotalDelegationByValidatorForDenomResponseSDKType {
  assets: DelegationsSDKType[];
}
/**
 * @name Delegations
 * @package osmosis.superfluid
 * @see proto type: osmosis.superfluid.Delegations
 */
export interface Delegations {
  valAddr: string;
  amountSfsd: string;
  osmoEquivalent: string;
}
export interface DelegationsProtoMsg {
  typeUrl: "/osmosis.superfluid.Delegations";
  value: Uint8Array;
}
/**
 * @name DelegationsAmino
 * @package osmosis.superfluid
 * @see proto type: osmosis.superfluid.Delegations
 */
export interface DelegationsAmino {
  val_addr?: string;
  amount_sfsd?: string;
  osmo_equivalent?: string;
}
/**
 * @name DelegationsSDKType
 * @package osmosis.superfluid
 * @see proto type: osmosis.superfluid.Delegations
 */
export interface DelegationsSDKType {
  val_addr: string;
  amount_sfsd: string;
  osmo_equivalent: string;
}
/**
 * @name TotalSuperfluidDelegationsRequest
 * @package osmosis.superfluid
 * @see proto type: osmosis.superfluid.TotalSuperfluidDelegationsRequest
 */
export interface TotalSuperfluidDelegationsRequest {}
export interface TotalSuperfluidDelegationsRequestProtoMsg {
  typeUrl: "/osmosis.superfluid.TotalSuperfluidDelegationsRequest";
  value: Uint8Array;
}
/**
 * @name TotalSuperfluidDelegationsRequestAmino
 * @package osmosis.superfluid
 * @see proto type: osmosis.superfluid.TotalSuperfluidDelegationsRequest
 */
export interface TotalSuperfluidDelegationsRequestAmino {}
/**
 * @name TotalSuperfluidDelegationsRequestSDKType
 * @package osmosis.superfluid
 * @see proto type: osmosis.superfluid.TotalSuperfluidDelegationsRequest
 */
export interface TotalSuperfluidDelegationsRequestSDKType {}
/**
 * @name TotalSuperfluidDelegationsResponse
 * @package osmosis.superfluid
 * @see proto type: osmosis.superfluid.TotalSuperfluidDelegationsResponse
 */
export interface TotalSuperfluidDelegationsResponse {
  totalDelegations: string;
}
export interface TotalSuperfluidDelegationsResponseProtoMsg {
  typeUrl: "/osmosis.superfluid.TotalSuperfluidDelegationsResponse";
  value: Uint8Array;
}
/**
 * @name TotalSuperfluidDelegationsResponseAmino
 * @package osmosis.superfluid
 * @see proto type: osmosis.superfluid.TotalSuperfluidDelegationsResponse
 */
export interface TotalSuperfluidDelegationsResponseAmino {
  total_delegations?: string;
}
/**
 * @name TotalSuperfluidDelegationsResponseSDKType
 * @package osmosis.superfluid
 * @see proto type: osmosis.superfluid.TotalSuperfluidDelegationsResponse
 */
export interface TotalSuperfluidDelegationsResponseSDKType {
  total_delegations: string;
}
/**
 * @name SuperfluidDelegationAmountRequest
 * @package osmosis.superfluid
 * @see proto type: osmosis.superfluid.SuperfluidDelegationAmountRequest
 */
export interface SuperfluidDelegationAmountRequest {
  delegatorAddress: string;
  validatorAddress: string;
  denom: string;
}
export interface SuperfluidDelegationAmountRequestProtoMsg {
  typeUrl: "/osmosis.superfluid.SuperfluidDelegationAmountRequest";
  value: Uint8Array;
}
/**
 * @name SuperfluidDelegationAmountRequestAmino
 * @package osmosis.superfluid
 * @see proto type: osmosis.superfluid.SuperfluidDelegationAmountRequest
 */
export interface SuperfluidDelegationAmountRequestAmino {
  delegator_address?: string;
  validator_address?: string;
  denom?: string;
}
/**
 * @name SuperfluidDelegationAmountRequestSDKType
 * @package osmosis.superfluid
 * @see proto type: osmosis.superfluid.SuperfluidDelegationAmountRequest
 */
export interface SuperfluidDelegationAmountRequestSDKType {
  delegator_address: string;
  validator_address: string;
  denom: string;
}
/**
 * @name SuperfluidDelegationAmountResponse
 * @package osmosis.superfluid
 * @see proto type: osmosis.superfluid.SuperfluidDelegationAmountResponse
 */
export interface SuperfluidDelegationAmountResponse {
  amount: Coin[];
}
export interface SuperfluidDelegationAmountResponseProtoMsg {
  typeUrl: "/osmosis.superfluid.SuperfluidDelegationAmountResponse";
  value: Uint8Array;
}
/**
 * @name SuperfluidDelegationAmountResponseAmino
 * @package osmosis.superfluid
 * @see proto type: osmosis.superfluid.SuperfluidDelegationAmountResponse
 */
export interface SuperfluidDelegationAmountResponseAmino {
  amount?: CoinAmino[];
}
/**
 * @name SuperfluidDelegationAmountResponseSDKType
 * @package osmosis.superfluid
 * @see proto type: osmosis.superfluid.SuperfluidDelegationAmountResponse
 */
export interface SuperfluidDelegationAmountResponseSDKType {
  amount: CoinSDKType[];
}
/**
 * @name SuperfluidDelegationsByDelegatorRequest
 * @package osmosis.superfluid
 * @see proto type: osmosis.superfluid.SuperfluidDelegationsByDelegatorRequest
 */
export interface SuperfluidDelegationsByDelegatorRequest {
  delegatorAddress: string;
}
export interface SuperfluidDelegationsByDelegatorRequestProtoMsg {
  typeUrl: "/osmosis.superfluid.SuperfluidDelegationsByDelegatorRequest";
  value: Uint8Array;
}
/**
 * @name SuperfluidDelegationsByDelegatorRequestAmino
 * @package osmosis.superfluid
 * @see proto type: osmosis.superfluid.SuperfluidDelegationsByDelegatorRequest
 */
export interface SuperfluidDelegationsByDelegatorRequestAmino {
  delegator_address?: string;
}
/**
 * @name SuperfluidDelegationsByDelegatorRequestSDKType
 * @package osmosis.superfluid
 * @see proto type: osmosis.superfluid.SuperfluidDelegationsByDelegatorRequest
 */
export interface SuperfluidDelegationsByDelegatorRequestSDKType {
  delegator_address: string;
}
/**
 * @name SuperfluidDelegationsByDelegatorResponse
 * @package osmosis.superfluid
 * @see proto type: osmosis.superfluid.SuperfluidDelegationsByDelegatorResponse
 */
export interface SuperfluidDelegationsByDelegatorResponse {
  superfluidDelegationRecords: SuperfluidDelegationRecord[];
  totalDelegatedCoins: Coin[];
  totalEquivalentStakedAmount: Coin;
}
export interface SuperfluidDelegationsByDelegatorResponseProtoMsg {
  typeUrl: "/osmosis.superfluid.SuperfluidDelegationsByDelegatorResponse";
  value: Uint8Array;
}
/**
 * @name SuperfluidDelegationsByDelegatorResponseAmino
 * @package osmosis.superfluid
 * @see proto type: osmosis.superfluid.SuperfluidDelegationsByDelegatorResponse
 */
export interface SuperfluidDelegationsByDelegatorResponseAmino {
  superfluid_delegation_records?: SuperfluidDelegationRecordAmino[];
  total_delegated_coins?: CoinAmino[];
  total_equivalent_staked_amount?: CoinAmino;
}
/**
 * @name SuperfluidDelegationsByDelegatorResponseSDKType
 * @package osmosis.superfluid
 * @see proto type: osmosis.superfluid.SuperfluidDelegationsByDelegatorResponse
 */
export interface SuperfluidDelegationsByDelegatorResponseSDKType {
  superfluid_delegation_records: SuperfluidDelegationRecordSDKType[];
  total_delegated_coins: CoinSDKType[];
  total_equivalent_staked_amount: CoinSDKType;
}
/**
 * @name SuperfluidUndelegationsByDelegatorRequest
 * @package osmosis.superfluid
 * @see proto type: osmosis.superfluid.SuperfluidUndelegationsByDelegatorRequest
 */
export interface SuperfluidUndelegationsByDelegatorRequest {
  delegatorAddress: string;
  denom: string;
}
export interface SuperfluidUndelegationsByDelegatorRequestProtoMsg {
  typeUrl: "/osmosis.superfluid.SuperfluidUndelegationsByDelegatorRequest";
  value: Uint8Array;
}
/**
 * @name SuperfluidUndelegationsByDelegatorRequestAmino
 * @package osmosis.superfluid
 * @see proto type: osmosis.superfluid.SuperfluidUndelegationsByDelegatorRequest
 */
export interface SuperfluidUndelegationsByDelegatorRequestAmino {
  delegator_address?: string;
  denom?: string;
}
/**
 * @name SuperfluidUndelegationsByDelegatorRequestSDKType
 * @package osmosis.superfluid
 * @see proto type: osmosis.superfluid.SuperfluidUndelegationsByDelegatorRequest
 */
export interface SuperfluidUndelegationsByDelegatorRequestSDKType {
  delegator_address: string;
  denom: string;
}
/**
 * @name SuperfluidUndelegationsByDelegatorResponse
 * @package osmosis.superfluid
 * @see proto type: osmosis.superfluid.SuperfluidUndelegationsByDelegatorResponse
 */
export interface SuperfluidUndelegationsByDelegatorResponse {
  superfluidDelegationRecords: SuperfluidDelegationRecord[];
  totalUndelegatedCoins: Coin[];
  syntheticLocks: SyntheticLock[];
}
export interface SuperfluidUndelegationsByDelegatorResponseProtoMsg {
  typeUrl: "/osmosis.superfluid.SuperfluidUndelegationsByDelegatorResponse";
  value: Uint8Array;
}
/**
 * @name SuperfluidUndelegationsByDelegatorResponseAmino
 * @package osmosis.superfluid
 * @see proto type: osmosis.superfluid.SuperfluidUndelegationsByDelegatorResponse
 */
export interface SuperfluidUndelegationsByDelegatorResponseAmino {
  superfluid_delegation_records?: SuperfluidDelegationRecordAmino[];
  total_undelegated_coins?: CoinAmino[];
  synthetic_locks?: SyntheticLockAmino[];
}
/**
 * @name SuperfluidUndelegationsByDelegatorResponseSDKType
 * @package osmosis.superfluid
 * @see proto type: osmosis.superfluid.SuperfluidUndelegationsByDelegatorResponse
 */
export interface SuperfluidUndelegationsByDelegatorResponseSDKType {
  superfluid_delegation_records: SuperfluidDelegationRecordSDKType[];
  total_undelegated_coins: CoinSDKType[];
  synthetic_locks: SyntheticLockSDKType[];
}
/**
 * @name SuperfluidDelegationsByValidatorDenomRequest
 * @package osmosis.superfluid
 * @see proto type: osmosis.superfluid.SuperfluidDelegationsByValidatorDenomRequest
 */
export interface SuperfluidDelegationsByValidatorDenomRequest {
  validatorAddress: string;
  denom: string;
}
export interface SuperfluidDelegationsByValidatorDenomRequestProtoMsg {
  typeUrl: "/osmosis.superfluid.SuperfluidDelegationsByValidatorDenomRequest";
  value: Uint8Array;
}
/**
 * @name SuperfluidDelegationsByValidatorDenomRequestAmino
 * @package osmosis.superfluid
 * @see proto type: osmosis.superfluid.SuperfluidDelegationsByValidatorDenomRequest
 */
export interface SuperfluidDelegationsByValidatorDenomRequestAmino {
  validator_address?: string;
  denom?: string;
}
/**
 * @name SuperfluidDelegationsByValidatorDenomRequestSDKType
 * @package osmosis.superfluid
 * @see proto type: osmosis.superfluid.SuperfluidDelegationsByValidatorDenomRequest
 */
export interface SuperfluidDelegationsByValidatorDenomRequestSDKType {
  validator_address: string;
  denom: string;
}
/**
 * @name SuperfluidDelegationsByValidatorDenomResponse
 * @package osmosis.superfluid
 * @see proto type: osmosis.superfluid.SuperfluidDelegationsByValidatorDenomResponse
 */
export interface SuperfluidDelegationsByValidatorDenomResponse {
  superfluidDelegationRecords: SuperfluidDelegationRecord[];
}
export interface SuperfluidDelegationsByValidatorDenomResponseProtoMsg {
  typeUrl: "/osmosis.superfluid.SuperfluidDelegationsByValidatorDenomResponse";
  value: Uint8Array;
}
/**
 * @name SuperfluidDelegationsByValidatorDenomResponseAmino
 * @package osmosis.superfluid
 * @see proto type: osmosis.superfluid.SuperfluidDelegationsByValidatorDenomResponse
 */
export interface SuperfluidDelegationsByValidatorDenomResponseAmino {
  superfluid_delegation_records?: SuperfluidDelegationRecordAmino[];
}
/**
 * @name SuperfluidDelegationsByValidatorDenomResponseSDKType
 * @package osmosis.superfluid
 * @see proto type: osmosis.superfluid.SuperfluidDelegationsByValidatorDenomResponse
 */
export interface SuperfluidDelegationsByValidatorDenomResponseSDKType {
  superfluid_delegation_records: SuperfluidDelegationRecordSDKType[];
}
/**
 * @name EstimateSuperfluidDelegatedAmountByValidatorDenomRequest
 * @package osmosis.superfluid
 * @see proto type: osmosis.superfluid.EstimateSuperfluidDelegatedAmountByValidatorDenomRequest
 */
export interface EstimateSuperfluidDelegatedAmountByValidatorDenomRequest {
  validatorAddress: string;
  denom: string;
}
export interface EstimateSuperfluidDelegatedAmountByValidatorDenomRequestProtoMsg {
  typeUrl: "/osmosis.superfluid.EstimateSuperfluidDelegatedAmountByValidatorDenomRequest";
  value: Uint8Array;
}
/**
 * @name EstimateSuperfluidDelegatedAmountByValidatorDenomRequestAmino
 * @package osmosis.superfluid
 * @see proto type: osmosis.superfluid.EstimateSuperfluidDelegatedAmountByValidatorDenomRequest
 */
export interface EstimateSuperfluidDelegatedAmountByValidatorDenomRequestAmino {
  validator_address?: string;
  denom?: string;
}
/**
 * @name EstimateSuperfluidDelegatedAmountByValidatorDenomRequestSDKType
 * @package osmosis.superfluid
 * @see proto type: osmosis.superfluid.EstimateSuperfluidDelegatedAmountByValidatorDenomRequest
 */
export interface EstimateSuperfluidDelegatedAmountByValidatorDenomRequestSDKType {
  validator_address: string;
  denom: string;
}
/**
 * @name EstimateSuperfluidDelegatedAmountByValidatorDenomResponse
 * @package osmosis.superfluid
 * @see proto type: osmosis.superfluid.EstimateSuperfluidDelegatedAmountByValidatorDenomResponse
 */
export interface EstimateSuperfluidDelegatedAmountByValidatorDenomResponse {
  totalDelegatedCoins: Coin[];
}
export interface EstimateSuperfluidDelegatedAmountByValidatorDenomResponseProtoMsg {
  typeUrl: "/osmosis.superfluid.EstimateSuperfluidDelegatedAmountByValidatorDenomResponse";
  value: Uint8Array;
}
/**
 * @name EstimateSuperfluidDelegatedAmountByValidatorDenomResponseAmino
 * @package osmosis.superfluid
 * @see proto type: osmosis.superfluid.EstimateSuperfluidDelegatedAmountByValidatorDenomResponse
 */
export interface EstimateSuperfluidDelegatedAmountByValidatorDenomResponseAmino {
  total_delegated_coins?: CoinAmino[];
}
/**
 * @name EstimateSuperfluidDelegatedAmountByValidatorDenomResponseSDKType
 * @package osmosis.superfluid
 * @see proto type: osmosis.superfluid.EstimateSuperfluidDelegatedAmountByValidatorDenomResponse
 */
export interface EstimateSuperfluidDelegatedAmountByValidatorDenomResponseSDKType {
  total_delegated_coins: CoinSDKType[];
}
/**
 * @name QueryTotalDelegationByDelegatorRequest
 * @package osmosis.superfluid
 * @see proto type: osmosis.superfluid.QueryTotalDelegationByDelegatorRequest
 */
export interface QueryTotalDelegationByDelegatorRequest {
  delegatorAddress: string;
}
export interface QueryTotalDelegationByDelegatorRequestProtoMsg {
  typeUrl: "/osmosis.superfluid.QueryTotalDelegationByDelegatorRequest";
  value: Uint8Array;
}
/**
 * @name QueryTotalDelegationByDelegatorRequestAmino
 * @package osmosis.superfluid
 * @see proto type: osmosis.superfluid.QueryTotalDelegationByDelegatorRequest
 */
export interface QueryTotalDelegationByDelegatorRequestAmino {
  delegator_address?: string;
}
/**
 * @name QueryTotalDelegationByDelegatorRequestSDKType
 * @package osmosis.superfluid
 * @see proto type: osmosis.superfluid.QueryTotalDelegationByDelegatorRequest
 */
export interface QueryTotalDelegationByDelegatorRequestSDKType {
  delegator_address: string;
}
/**
 * @name QueryTotalDelegationByDelegatorResponse
 * @package osmosis.superfluid
 * @see proto type: osmosis.superfluid.QueryTotalDelegationByDelegatorResponse
 */
export interface QueryTotalDelegationByDelegatorResponse {
  superfluidDelegationRecords: SuperfluidDelegationRecord[];
  delegationResponse: DelegationResponse[];
  totalDelegatedCoins: Coin[];
  totalEquivalentStakedAmount: Coin;
}
export interface QueryTotalDelegationByDelegatorResponseProtoMsg {
  typeUrl: "/osmosis.superfluid.QueryTotalDelegationByDelegatorResponse";
  value: Uint8Array;
}
/**
 * @name QueryTotalDelegationByDelegatorResponseAmino
 * @package osmosis.superfluid
 * @see proto type: osmosis.superfluid.QueryTotalDelegationByDelegatorResponse
 */
export interface QueryTotalDelegationByDelegatorResponseAmino {
  superfluid_delegation_records?: SuperfluidDelegationRecordAmino[];
  delegation_response?: DelegationResponseAmino[];
  total_delegated_coins?: CoinAmino[];
  total_equivalent_staked_amount?: CoinAmino;
}
/**
 * @name QueryTotalDelegationByDelegatorResponseSDKType
 * @package osmosis.superfluid
 * @see proto type: osmosis.superfluid.QueryTotalDelegationByDelegatorResponse
 */
export interface QueryTotalDelegationByDelegatorResponseSDKType {
  superfluid_delegation_records: SuperfluidDelegationRecordSDKType[];
  delegation_response: DelegationResponseSDKType[];
  total_delegated_coins: CoinSDKType[];
  total_equivalent_staked_amount: CoinSDKType;
}
/**
 * @name QueryUnpoolWhitelistRequest
 * @package osmosis.superfluid
 * @see proto type: osmosis.superfluid.QueryUnpoolWhitelistRequest
 */
export interface QueryUnpoolWhitelistRequest {}
export interface QueryUnpoolWhitelistRequestProtoMsg {
  typeUrl: "/osmosis.superfluid.QueryUnpoolWhitelistRequest";
  value: Uint8Array;
}
/**
 * @name QueryUnpoolWhitelistRequestAmino
 * @package osmosis.superfluid
 * @see proto type: osmosis.superfluid.QueryUnpoolWhitelistRequest
 */
export interface QueryUnpoolWhitelistRequestAmino {}
/**
 * @name QueryUnpoolWhitelistRequestSDKType
 * @package osmosis.superfluid
 * @see proto type: osmosis.superfluid.QueryUnpoolWhitelistRequest
 */
export interface QueryUnpoolWhitelistRequestSDKType {}
/**
 * @name QueryUnpoolWhitelistResponse
 * @package osmosis.superfluid
 * @see proto type: osmosis.superfluid.QueryUnpoolWhitelistResponse
 */
export interface QueryUnpoolWhitelistResponse {
  poolIds: bigint[];
}
export interface QueryUnpoolWhitelistResponseProtoMsg {
  typeUrl: "/osmosis.superfluid.QueryUnpoolWhitelistResponse";
  value: Uint8Array;
}
/**
 * @name QueryUnpoolWhitelistResponseAmino
 * @package osmosis.superfluid
 * @see proto type: osmosis.superfluid.QueryUnpoolWhitelistResponse
 */
export interface QueryUnpoolWhitelistResponseAmino {
  pool_ids?: string[];
}
/**
 * @name QueryUnpoolWhitelistResponseSDKType
 * @package osmosis.superfluid
 * @see proto type: osmosis.superfluid.QueryUnpoolWhitelistResponse
 */
export interface QueryUnpoolWhitelistResponseSDKType {
  pool_ids: bigint[];
}
function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}
/**
 * @name QueryParamsRequest
 * @package osmosis.superfluid
 * @see proto type: osmosis.superfluid.QueryParamsRequest
 */
export const QueryParamsRequest = {
  typeUrl: "/osmosis.superfluid.QueryParamsRequest",
  aminoType: "osmosis/query-params-request",
  is(o: any): o is QueryParamsRequest {
    return o && o.$typeUrl === QueryParamsRequest.typeUrl;
  },
  isSDK(o: any): o is QueryParamsRequestSDKType {
    return o && o.$typeUrl === QueryParamsRequest.typeUrl;
  },
  isAmino(o: any): o is QueryParamsRequestAmino {
    return o && o.$typeUrl === QueryParamsRequest.typeUrl;
  },
  encode(_: QueryParamsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryParamsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_: any): QueryParamsRequest {
    const obj = createBaseQueryParamsRequest();
    return obj;
  },
  fromPartial(_: DeepPartial<QueryParamsRequest>): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    return message;
  },
  fromSDK(_: QueryParamsRequestSDKType): QueryParamsRequest {
    return {};
  },
  toSDK(_: QueryParamsRequest): QueryParamsRequestSDKType {
    const obj: any = {};
    return obj;
  },
  fromAmino(_: QueryParamsRequestAmino): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    return message;
  },
  toAmino(_: QueryParamsRequest, useInterfaces: boolean = true): QueryParamsRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromProtoMsg(message: QueryParamsRequestProtoMsg, useInterfaces: boolean = true): QueryParamsRequest {
    return QueryParamsRequest.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryParamsRequest): Uint8Array {
    return QueryParamsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryParamsRequest): QueryParamsRequestProtoMsg {
    return {
      typeUrl: "/osmosis.superfluid.QueryParamsRequest",
      value: QueryParamsRequest.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseQueryParamsResponse(): QueryParamsResponse {
  return {
    params: Params.fromPartial({})
  };
}
/**
 * @name QueryParamsResponse
 * @package osmosis.superfluid
 * @see proto type: osmosis.superfluid.QueryParamsResponse
 */
export const QueryParamsResponse = {
  typeUrl: "/osmosis.superfluid.QueryParamsResponse",
  aminoType: "osmosis/query-params-response",
  is(o: any): o is QueryParamsResponse {
    return o && (o.$typeUrl === QueryParamsResponse.typeUrl || Params.is(o.params));
  },
  isSDK(o: any): o is QueryParamsResponseSDKType {
    return o && (o.$typeUrl === QueryParamsResponse.typeUrl || Params.isSDK(o.params));
  },
  isAmino(o: any): o is QueryParamsResponseAmino {
    return o && (o.$typeUrl === QueryParamsResponse.typeUrl || Params.isAmino(o.params));
  },
  encode(message: QueryParamsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryParamsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32(), useInterfaces);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryParamsResponse {
    const obj = createBaseQueryParamsResponse();
    if (isSet(object.params)) obj.params = Params.fromJSON(object.params);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryParamsResponse>): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromPartial(object.params);
    }
    return message;
  },
  fromSDK(object: QueryParamsResponseSDKType): QueryParamsResponse {
    return {
      params: object.params ? Params.fromSDK(object.params) : undefined
    };
  },
  toSDK(message: QueryParamsResponse): QueryParamsResponseSDKType {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toSDK(message.params) : undefined);
    return obj;
  },
  fromAmino(object: QueryParamsResponseAmino): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    return message;
  },
  toAmino(message: QueryParamsResponse, useInterfaces: boolean = true): QueryParamsResponseAmino {
    const obj: any = {};
    obj.params = message.params ? Params.toAmino(message.params, useInterfaces) : undefined;
    return obj;
  },
  fromProtoMsg(message: QueryParamsResponseProtoMsg, useInterfaces: boolean = true): QueryParamsResponse {
    return QueryParamsResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryParamsResponse): Uint8Array {
    return QueryParamsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryParamsResponse): QueryParamsResponseProtoMsg {
    return {
      typeUrl: "/osmosis.superfluid.QueryParamsResponse",
      value: QueryParamsResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(QueryParamsResponse.typeUrl)) {
      return;
    }
    Params.registerTypeUrl();
  }
};
function createBaseAssetTypeRequest(): AssetTypeRequest {
  return {
    denom: ""
  };
}
/**
 * @name AssetTypeRequest
 * @package osmosis.superfluid
 * @see proto type: osmosis.superfluid.AssetTypeRequest
 */
export const AssetTypeRequest = {
  typeUrl: "/osmosis.superfluid.AssetTypeRequest",
  aminoType: "osmosis/asset-type-request",
  is(o: any): o is AssetTypeRequest {
    return o && (o.$typeUrl === AssetTypeRequest.typeUrl || typeof o.denom === "string");
  },
  isSDK(o: any): o is AssetTypeRequestSDKType {
    return o && (o.$typeUrl === AssetTypeRequest.typeUrl || typeof o.denom === "string");
  },
  isAmino(o: any): o is AssetTypeRequestAmino {
    return o && (o.$typeUrl === AssetTypeRequest.typeUrl || typeof o.denom === "string");
  },
  encode(message: AssetTypeRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): AssetTypeRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAssetTypeRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): AssetTypeRequest {
    const obj = createBaseAssetTypeRequest();
    if (isSet(object.denom)) obj.denom = String(object.denom);
    return obj;
  },
  fromPartial(object: DeepPartial<AssetTypeRequest>): AssetTypeRequest {
    const message = createBaseAssetTypeRequest();
    message.denom = object.denom ?? "";
    return message;
  },
  fromSDK(object: AssetTypeRequestSDKType): AssetTypeRequest {
    return {
      denom: object?.denom
    };
  },
  toSDK(message: AssetTypeRequest): AssetTypeRequestSDKType {
    const obj: any = {};
    obj.denom = message.denom;
    return obj;
  },
  fromAmino(object: AssetTypeRequestAmino): AssetTypeRequest {
    const message = createBaseAssetTypeRequest();
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    }
    return message;
  },
  toAmino(message: AssetTypeRequest, useInterfaces: boolean = true): AssetTypeRequestAmino {
    const obj: any = {};
    obj.denom = message.denom === "" ? undefined : message.denom;
    return obj;
  },
  fromProtoMsg(message: AssetTypeRequestProtoMsg, useInterfaces: boolean = true): AssetTypeRequest {
    return AssetTypeRequest.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: AssetTypeRequest): Uint8Array {
    return AssetTypeRequest.encode(message).finish();
  },
  toProtoMsg(message: AssetTypeRequest): AssetTypeRequestProtoMsg {
    return {
      typeUrl: "/osmosis.superfluid.AssetTypeRequest",
      value: AssetTypeRequest.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseAssetTypeResponse(): AssetTypeResponse {
  return {
    assetType: 0
  };
}
/**
 * @name AssetTypeResponse
 * @package osmosis.superfluid
 * @see proto type: osmosis.superfluid.AssetTypeResponse
 */
export const AssetTypeResponse = {
  typeUrl: "/osmosis.superfluid.AssetTypeResponse",
  aminoType: "osmosis/asset-type-response",
  is(o: any): o is AssetTypeResponse {
    return o && (o.$typeUrl === AssetTypeResponse.typeUrl || isSet(o.assetType));
  },
  isSDK(o: any): o is AssetTypeResponseSDKType {
    return o && (o.$typeUrl === AssetTypeResponse.typeUrl || isSet(o.asset_type));
  },
  isAmino(o: any): o is AssetTypeResponseAmino {
    return o && (o.$typeUrl === AssetTypeResponse.typeUrl || isSet(o.asset_type));
  },
  encode(message: AssetTypeResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.assetType !== 0) {
      writer.uint32(8).int32(message.assetType);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): AssetTypeResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAssetTypeResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.assetType = (reader.int32() as any);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): AssetTypeResponse {
    const obj = createBaseAssetTypeResponse();
    if (isSet(object.assetType)) obj.assetType = superfluidAssetTypeFromJSON(object.assetType);
    return obj;
  },
  fromPartial(object: DeepPartial<AssetTypeResponse>): AssetTypeResponse {
    const message = createBaseAssetTypeResponse();
    message.assetType = object.assetType ?? 0;
    return message;
  },
  fromSDK(object: AssetTypeResponseSDKType): AssetTypeResponse {
    return {
      assetType: isSet(object.asset_type) ? superfluidAssetTypeFromJSON(object.asset_type) : -1
    };
  },
  toSDK(message: AssetTypeResponse): AssetTypeResponseSDKType {
    const obj: any = {};
    message.assetType !== undefined && (obj.asset_type = superfluidAssetTypeToJSON(message.assetType));
    return obj;
  },
  fromAmino(object: AssetTypeResponseAmino): AssetTypeResponse {
    const message = createBaseAssetTypeResponse();
    if (object.asset_type !== undefined && object.asset_type !== null) {
      message.assetType = object.asset_type;
    }
    return message;
  },
  toAmino(message: AssetTypeResponse, useInterfaces: boolean = true): AssetTypeResponseAmino {
    const obj: any = {};
    obj.asset_type = message.assetType === 0 ? undefined : message.assetType;
    return obj;
  },
  fromProtoMsg(message: AssetTypeResponseProtoMsg, useInterfaces: boolean = true): AssetTypeResponse {
    return AssetTypeResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: AssetTypeResponse): Uint8Array {
    return AssetTypeResponse.encode(message).finish();
  },
  toProtoMsg(message: AssetTypeResponse): AssetTypeResponseProtoMsg {
    return {
      typeUrl: "/osmosis.superfluid.AssetTypeResponse",
      value: AssetTypeResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseAllAssetsRequest(): AllAssetsRequest {
  return {};
}
/**
 * @name AllAssetsRequest
 * @package osmosis.superfluid
 * @see proto type: osmosis.superfluid.AllAssetsRequest
 */
export const AllAssetsRequest = {
  typeUrl: "/osmosis.superfluid.AllAssetsRequest",
  aminoType: "osmosis/all-assets-request",
  is(o: any): o is AllAssetsRequest {
    return o && o.$typeUrl === AllAssetsRequest.typeUrl;
  },
  isSDK(o: any): o is AllAssetsRequestSDKType {
    return o && o.$typeUrl === AllAssetsRequest.typeUrl;
  },
  isAmino(o: any): o is AllAssetsRequestAmino {
    return o && o.$typeUrl === AllAssetsRequest.typeUrl;
  },
  encode(_: AllAssetsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): AllAssetsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAllAssetsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_: any): AllAssetsRequest {
    const obj = createBaseAllAssetsRequest();
    return obj;
  },
  fromPartial(_: DeepPartial<AllAssetsRequest>): AllAssetsRequest {
    const message = createBaseAllAssetsRequest();
    return message;
  },
  fromSDK(_: AllAssetsRequestSDKType): AllAssetsRequest {
    return {};
  },
  toSDK(_: AllAssetsRequest): AllAssetsRequestSDKType {
    const obj: any = {};
    return obj;
  },
  fromAmino(_: AllAssetsRequestAmino): AllAssetsRequest {
    const message = createBaseAllAssetsRequest();
    return message;
  },
  toAmino(_: AllAssetsRequest, useInterfaces: boolean = true): AllAssetsRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromProtoMsg(message: AllAssetsRequestProtoMsg, useInterfaces: boolean = true): AllAssetsRequest {
    return AllAssetsRequest.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: AllAssetsRequest): Uint8Array {
    return AllAssetsRequest.encode(message).finish();
  },
  toProtoMsg(message: AllAssetsRequest): AllAssetsRequestProtoMsg {
    return {
      typeUrl: "/osmosis.superfluid.AllAssetsRequest",
      value: AllAssetsRequest.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseAllAssetsResponse(): AllAssetsResponse {
  return {
    assets: []
  };
}
/**
 * @name AllAssetsResponse
 * @package osmosis.superfluid
 * @see proto type: osmosis.superfluid.AllAssetsResponse
 */
export const AllAssetsResponse = {
  typeUrl: "/osmosis.superfluid.AllAssetsResponse",
  aminoType: "osmosis/all-assets-response",
  is(o: any): o is AllAssetsResponse {
    return o && (o.$typeUrl === AllAssetsResponse.typeUrl || Array.isArray(o.assets) && (!o.assets.length || SuperfluidAsset.is(o.assets[0])));
  },
  isSDK(o: any): o is AllAssetsResponseSDKType {
    return o && (o.$typeUrl === AllAssetsResponse.typeUrl || Array.isArray(o.assets) && (!o.assets.length || SuperfluidAsset.isSDK(o.assets[0])));
  },
  isAmino(o: any): o is AllAssetsResponseAmino {
    return o && (o.$typeUrl === AllAssetsResponse.typeUrl || Array.isArray(o.assets) && (!o.assets.length || SuperfluidAsset.isAmino(o.assets[0])));
  },
  encode(message: AllAssetsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.assets) {
      SuperfluidAsset.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): AllAssetsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAllAssetsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.assets.push(SuperfluidAsset.decode(reader, reader.uint32(), useInterfaces));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): AllAssetsResponse {
    const obj = createBaseAllAssetsResponse();
    if (Array.isArray(object?.assets)) obj.assets = object.assets.map((e: any) => SuperfluidAsset.fromJSON(e));
    return obj;
  },
  fromPartial(object: DeepPartial<AllAssetsResponse>): AllAssetsResponse {
    const message = createBaseAllAssetsResponse();
    message.assets = object.assets?.map(e => SuperfluidAsset.fromPartial(e)) || [];
    return message;
  },
  fromSDK(object: AllAssetsResponseSDKType): AllAssetsResponse {
    return {
      assets: Array.isArray(object?.assets) ? object.assets.map((e: any) => SuperfluidAsset.fromSDK(e)) : []
    };
  },
  toSDK(message: AllAssetsResponse): AllAssetsResponseSDKType {
    const obj: any = {};
    if (message.assets) {
      obj.assets = message.assets.map(e => e ? SuperfluidAsset.toSDK(e) : undefined);
    } else {
      obj.assets = [];
    }
    return obj;
  },
  fromAmino(object: AllAssetsResponseAmino): AllAssetsResponse {
    const message = createBaseAllAssetsResponse();
    message.assets = object.assets?.map(e => SuperfluidAsset.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: AllAssetsResponse, useInterfaces: boolean = true): AllAssetsResponseAmino {
    const obj: any = {};
    if (message.assets) {
      obj.assets = message.assets.map(e => e ? SuperfluidAsset.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.assets = message.assets;
    }
    return obj;
  },
  fromProtoMsg(message: AllAssetsResponseProtoMsg, useInterfaces: boolean = true): AllAssetsResponse {
    return AllAssetsResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: AllAssetsResponse): Uint8Array {
    return AllAssetsResponse.encode(message).finish();
  },
  toProtoMsg(message: AllAssetsResponse): AllAssetsResponseProtoMsg {
    return {
      typeUrl: "/osmosis.superfluid.AllAssetsResponse",
      value: AllAssetsResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(AllAssetsResponse.typeUrl)) {
      return;
    }
    SuperfluidAsset.registerTypeUrl();
  }
};
function createBaseAssetMultiplierRequest(): AssetMultiplierRequest {
  return {
    denom: ""
  };
}
/**
 * @name AssetMultiplierRequest
 * @package osmosis.superfluid
 * @see proto type: osmosis.superfluid.AssetMultiplierRequest
 */
export const AssetMultiplierRequest = {
  typeUrl: "/osmosis.superfluid.AssetMultiplierRequest",
  aminoType: "osmosis/asset-multiplier-request",
  is(o: any): o is AssetMultiplierRequest {
    return o && (o.$typeUrl === AssetMultiplierRequest.typeUrl || typeof o.denom === "string");
  },
  isSDK(o: any): o is AssetMultiplierRequestSDKType {
    return o && (o.$typeUrl === AssetMultiplierRequest.typeUrl || typeof o.denom === "string");
  },
  isAmino(o: any): o is AssetMultiplierRequestAmino {
    return o && (o.$typeUrl === AssetMultiplierRequest.typeUrl || typeof o.denom === "string");
  },
  encode(message: AssetMultiplierRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): AssetMultiplierRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAssetMultiplierRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): AssetMultiplierRequest {
    const obj = createBaseAssetMultiplierRequest();
    if (isSet(object.denom)) obj.denom = String(object.denom);
    return obj;
  },
  fromPartial(object: DeepPartial<AssetMultiplierRequest>): AssetMultiplierRequest {
    const message = createBaseAssetMultiplierRequest();
    message.denom = object.denom ?? "";
    return message;
  },
  fromSDK(object: AssetMultiplierRequestSDKType): AssetMultiplierRequest {
    return {
      denom: object?.denom
    };
  },
  toSDK(message: AssetMultiplierRequest): AssetMultiplierRequestSDKType {
    const obj: any = {};
    obj.denom = message.denom;
    return obj;
  },
  fromAmino(object: AssetMultiplierRequestAmino): AssetMultiplierRequest {
    const message = createBaseAssetMultiplierRequest();
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    }
    return message;
  },
  toAmino(message: AssetMultiplierRequest, useInterfaces: boolean = true): AssetMultiplierRequestAmino {
    const obj: any = {};
    obj.denom = message.denom === "" ? undefined : message.denom;
    return obj;
  },
  fromProtoMsg(message: AssetMultiplierRequestProtoMsg, useInterfaces: boolean = true): AssetMultiplierRequest {
    return AssetMultiplierRequest.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: AssetMultiplierRequest): Uint8Array {
    return AssetMultiplierRequest.encode(message).finish();
  },
  toProtoMsg(message: AssetMultiplierRequest): AssetMultiplierRequestProtoMsg {
    return {
      typeUrl: "/osmosis.superfluid.AssetMultiplierRequest",
      value: AssetMultiplierRequest.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseAssetMultiplierResponse(): AssetMultiplierResponse {
  return {
    osmoEquivalentMultiplier: undefined
  };
}
/**
 * @name AssetMultiplierResponse
 * @package osmosis.superfluid
 * @see proto type: osmosis.superfluid.AssetMultiplierResponse
 */
export const AssetMultiplierResponse = {
  typeUrl: "/osmosis.superfluid.AssetMultiplierResponse",
  aminoType: "osmosis/asset-multiplier-response",
  is(o: any): o is AssetMultiplierResponse {
    return o && o.$typeUrl === AssetMultiplierResponse.typeUrl;
  },
  isSDK(o: any): o is AssetMultiplierResponseSDKType {
    return o && o.$typeUrl === AssetMultiplierResponse.typeUrl;
  },
  isAmino(o: any): o is AssetMultiplierResponseAmino {
    return o && o.$typeUrl === AssetMultiplierResponse.typeUrl;
  },
  encode(message: AssetMultiplierResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.osmoEquivalentMultiplier !== undefined) {
      OsmoEquivalentMultiplierRecord.encode(message.osmoEquivalentMultiplier, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): AssetMultiplierResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAssetMultiplierResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.osmoEquivalentMultiplier = OsmoEquivalentMultiplierRecord.decode(reader, reader.uint32(), useInterfaces);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): AssetMultiplierResponse {
    const obj = createBaseAssetMultiplierResponse();
    if (isSet(object.osmoEquivalentMultiplier)) obj.osmoEquivalentMultiplier = OsmoEquivalentMultiplierRecord.fromJSON(object.osmoEquivalentMultiplier);
    return obj;
  },
  fromPartial(object: DeepPartial<AssetMultiplierResponse>): AssetMultiplierResponse {
    const message = createBaseAssetMultiplierResponse();
    if (object.osmoEquivalentMultiplier !== undefined && object.osmoEquivalentMultiplier !== null) {
      message.osmoEquivalentMultiplier = OsmoEquivalentMultiplierRecord.fromPartial(object.osmoEquivalentMultiplier);
    }
    return message;
  },
  fromSDK(object: AssetMultiplierResponseSDKType): AssetMultiplierResponse {
    return {
      osmoEquivalentMultiplier: object.osmo_equivalent_multiplier ? OsmoEquivalentMultiplierRecord.fromSDK(object.osmo_equivalent_multiplier) : undefined
    };
  },
  toSDK(message: AssetMultiplierResponse): AssetMultiplierResponseSDKType {
    const obj: any = {};
    message.osmoEquivalentMultiplier !== undefined && (obj.osmo_equivalent_multiplier = message.osmoEquivalentMultiplier ? OsmoEquivalentMultiplierRecord.toSDK(message.osmoEquivalentMultiplier) : undefined);
    return obj;
  },
  fromAmino(object: AssetMultiplierResponseAmino): AssetMultiplierResponse {
    const message = createBaseAssetMultiplierResponse();
    if (object.osmo_equivalent_multiplier !== undefined && object.osmo_equivalent_multiplier !== null) {
      message.osmoEquivalentMultiplier = OsmoEquivalentMultiplierRecord.fromAmino(object.osmo_equivalent_multiplier);
    }
    return message;
  },
  toAmino(message: AssetMultiplierResponse, useInterfaces: boolean = true): AssetMultiplierResponseAmino {
    const obj: any = {};
    obj.osmo_equivalent_multiplier = message.osmoEquivalentMultiplier ? OsmoEquivalentMultiplierRecord.toAmino(message.osmoEquivalentMultiplier, useInterfaces) : undefined;
    return obj;
  },
  fromProtoMsg(message: AssetMultiplierResponseProtoMsg, useInterfaces: boolean = true): AssetMultiplierResponse {
    return AssetMultiplierResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: AssetMultiplierResponse): Uint8Array {
    return AssetMultiplierResponse.encode(message).finish();
  },
  toProtoMsg(message: AssetMultiplierResponse): AssetMultiplierResponseProtoMsg {
    return {
      typeUrl: "/osmosis.superfluid.AssetMultiplierResponse",
      value: AssetMultiplierResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(AssetMultiplierResponse.typeUrl)) {
      return;
    }
    OsmoEquivalentMultiplierRecord.registerTypeUrl();
  }
};
function createBaseSuperfluidIntermediaryAccountInfo(): SuperfluidIntermediaryAccountInfo {
  return {
    denom: "",
    valAddr: "",
    gaugeId: BigInt(0),
    address: ""
  };
}
/**
 * @name SuperfluidIntermediaryAccountInfo
 * @package osmosis.superfluid
 * @see proto type: osmosis.superfluid.SuperfluidIntermediaryAccountInfo
 */
export const SuperfluidIntermediaryAccountInfo = {
  typeUrl: "/osmosis.superfluid.SuperfluidIntermediaryAccountInfo",
  aminoType: "osmosis/superfluid-intermediary-account-info",
  is(o: any): o is SuperfluidIntermediaryAccountInfo {
    return o && (o.$typeUrl === SuperfluidIntermediaryAccountInfo.typeUrl || typeof o.denom === "string" && typeof o.valAddr === "string" && typeof o.gaugeId === "bigint" && typeof o.address === "string");
  },
  isSDK(o: any): o is SuperfluidIntermediaryAccountInfoSDKType {
    return o && (o.$typeUrl === SuperfluidIntermediaryAccountInfo.typeUrl || typeof o.denom === "string" && typeof o.val_addr === "string" && typeof o.gauge_id === "bigint" && typeof o.address === "string");
  },
  isAmino(o: any): o is SuperfluidIntermediaryAccountInfoAmino {
    return o && (o.$typeUrl === SuperfluidIntermediaryAccountInfo.typeUrl || typeof o.denom === "string" && typeof o.val_addr === "string" && typeof o.gauge_id === "bigint" && typeof o.address === "string");
  },
  encode(message: SuperfluidIntermediaryAccountInfo, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    if (message.valAddr !== "") {
      writer.uint32(18).string(message.valAddr);
    }
    if (message.gaugeId !== BigInt(0)) {
      writer.uint32(24).uint64(message.gaugeId);
    }
    if (message.address !== "") {
      writer.uint32(34).string(message.address);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): SuperfluidIntermediaryAccountInfo {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSuperfluidIntermediaryAccountInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;
        case 2:
          message.valAddr = reader.string();
          break;
        case 3:
          message.gaugeId = reader.uint64();
          break;
        case 4:
          message.address = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): SuperfluidIntermediaryAccountInfo {
    const obj = createBaseSuperfluidIntermediaryAccountInfo();
    if (isSet(object.denom)) obj.denom = String(object.denom);
    if (isSet(object.valAddr)) obj.valAddr = String(object.valAddr);
    if (isSet(object.gaugeId)) obj.gaugeId = BigInt(object.gaugeId.toString());
    if (isSet(object.address)) obj.address = String(object.address);
    return obj;
  },
  fromPartial(object: DeepPartial<SuperfluidIntermediaryAccountInfo>): SuperfluidIntermediaryAccountInfo {
    const message = createBaseSuperfluidIntermediaryAccountInfo();
    message.denom = object.denom ?? "";
    message.valAddr = object.valAddr ?? "";
    if (object.gaugeId !== undefined && object.gaugeId !== null) {
      message.gaugeId = BigInt(object.gaugeId.toString());
    }
    message.address = object.address ?? "";
    return message;
  },
  fromSDK(object: SuperfluidIntermediaryAccountInfoSDKType): SuperfluidIntermediaryAccountInfo {
    return {
      denom: object?.denom,
      valAddr: object?.val_addr,
      gaugeId: object?.gauge_id,
      address: object?.address
    };
  },
  toSDK(message: SuperfluidIntermediaryAccountInfo): SuperfluidIntermediaryAccountInfoSDKType {
    const obj: any = {};
    obj.denom = message.denom;
    obj.val_addr = message.valAddr;
    obj.gauge_id = message.gaugeId;
    obj.address = message.address;
    return obj;
  },
  fromAmino(object: SuperfluidIntermediaryAccountInfoAmino): SuperfluidIntermediaryAccountInfo {
    const message = createBaseSuperfluidIntermediaryAccountInfo();
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    }
    if (object.val_addr !== undefined && object.val_addr !== null) {
      message.valAddr = object.val_addr;
    }
    if (object.gauge_id !== undefined && object.gauge_id !== null) {
      message.gaugeId = BigInt(object.gauge_id);
    }
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    return message;
  },
  toAmino(message: SuperfluidIntermediaryAccountInfo, useInterfaces: boolean = true): SuperfluidIntermediaryAccountInfoAmino {
    const obj: any = {};
    obj.denom = message.denom === "" ? undefined : message.denom;
    obj.val_addr = message.valAddr === "" ? undefined : message.valAddr;
    obj.gauge_id = message.gaugeId !== BigInt(0) ? message.gaugeId?.toString() : undefined;
    obj.address = message.address === "" ? undefined : message.address;
    return obj;
  },
  fromProtoMsg(message: SuperfluidIntermediaryAccountInfoProtoMsg, useInterfaces: boolean = true): SuperfluidIntermediaryAccountInfo {
    return SuperfluidIntermediaryAccountInfo.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: SuperfluidIntermediaryAccountInfo): Uint8Array {
    return SuperfluidIntermediaryAccountInfo.encode(message).finish();
  },
  toProtoMsg(message: SuperfluidIntermediaryAccountInfo): SuperfluidIntermediaryAccountInfoProtoMsg {
    return {
      typeUrl: "/osmosis.superfluid.SuperfluidIntermediaryAccountInfo",
      value: SuperfluidIntermediaryAccountInfo.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseAllIntermediaryAccountsRequest(): AllIntermediaryAccountsRequest {
  return {
    pagination: undefined
  };
}
/**
 * @name AllIntermediaryAccountsRequest
 * @package osmosis.superfluid
 * @see proto type: osmosis.superfluid.AllIntermediaryAccountsRequest
 */
export const AllIntermediaryAccountsRequest = {
  typeUrl: "/osmosis.superfluid.AllIntermediaryAccountsRequest",
  aminoType: "osmosis/all-intermediary-accounts-request",
  is(o: any): o is AllIntermediaryAccountsRequest {
    return o && o.$typeUrl === AllIntermediaryAccountsRequest.typeUrl;
  },
  isSDK(o: any): o is AllIntermediaryAccountsRequestSDKType {
    return o && o.$typeUrl === AllIntermediaryAccountsRequest.typeUrl;
  },
  isAmino(o: any): o is AllIntermediaryAccountsRequestAmino {
    return o && o.$typeUrl === AllIntermediaryAccountsRequest.typeUrl;
  },
  encode(message: AllIntermediaryAccountsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): AllIntermediaryAccountsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAllIntermediaryAccountsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32(), useInterfaces);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): AllIntermediaryAccountsRequest {
    const obj = createBaseAllIntermediaryAccountsRequest();
    if (isSet(object.pagination)) obj.pagination = PageRequest.fromJSON(object.pagination);
    return obj;
  },
  fromPartial(object: DeepPartial<AllIntermediaryAccountsRequest>): AllIntermediaryAccountsRequest {
    const message = createBaseAllIntermediaryAccountsRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    }
    return message;
  },
  fromSDK(object: AllIntermediaryAccountsRequestSDKType): AllIntermediaryAccountsRequest {
    return {
      pagination: object.pagination ? PageRequest.fromSDK(object.pagination) : undefined
    };
  },
  toSDK(message: AllIntermediaryAccountsRequest): AllIntermediaryAccountsRequestSDKType {
    const obj: any = {};
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toSDK(message.pagination) : undefined);
    return obj;
  },
  fromAmino(object: AllIntermediaryAccountsRequestAmino): AllIntermediaryAccountsRequest {
    const message = createBaseAllIntermediaryAccountsRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: AllIntermediaryAccountsRequest, useInterfaces: boolean = true): AllIntermediaryAccountsRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination, useInterfaces) : undefined;
    return obj;
  },
  fromProtoMsg(message: AllIntermediaryAccountsRequestProtoMsg, useInterfaces: boolean = true): AllIntermediaryAccountsRequest {
    return AllIntermediaryAccountsRequest.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: AllIntermediaryAccountsRequest): Uint8Array {
    return AllIntermediaryAccountsRequest.encode(message).finish();
  },
  toProtoMsg(message: AllIntermediaryAccountsRequest): AllIntermediaryAccountsRequestProtoMsg {
    return {
      typeUrl: "/osmosis.superfluid.AllIntermediaryAccountsRequest",
      value: AllIntermediaryAccountsRequest.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(AllIntermediaryAccountsRequest.typeUrl)) {
      return;
    }
    PageRequest.registerTypeUrl();
  }
};
function createBaseAllIntermediaryAccountsResponse(): AllIntermediaryAccountsResponse {
  return {
    accounts: [],
    pagination: undefined
  };
}
/**
 * @name AllIntermediaryAccountsResponse
 * @package osmosis.superfluid
 * @see proto type: osmosis.superfluid.AllIntermediaryAccountsResponse
 */
export const AllIntermediaryAccountsResponse = {
  typeUrl: "/osmosis.superfluid.AllIntermediaryAccountsResponse",
  aminoType: "osmosis/all-intermediary-accounts-response",
  is(o: any): o is AllIntermediaryAccountsResponse {
    return o && (o.$typeUrl === AllIntermediaryAccountsResponse.typeUrl || Array.isArray(o.accounts) && (!o.accounts.length || SuperfluidIntermediaryAccountInfo.is(o.accounts[0])));
  },
  isSDK(o: any): o is AllIntermediaryAccountsResponseSDKType {
    return o && (o.$typeUrl === AllIntermediaryAccountsResponse.typeUrl || Array.isArray(o.accounts) && (!o.accounts.length || SuperfluidIntermediaryAccountInfo.isSDK(o.accounts[0])));
  },
  isAmino(o: any): o is AllIntermediaryAccountsResponseAmino {
    return o && (o.$typeUrl === AllIntermediaryAccountsResponse.typeUrl || Array.isArray(o.accounts) && (!o.accounts.length || SuperfluidIntermediaryAccountInfo.isAmino(o.accounts[0])));
  },
  encode(message: AllIntermediaryAccountsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.accounts) {
      SuperfluidIntermediaryAccountInfo.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): AllIntermediaryAccountsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAllIntermediaryAccountsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.accounts.push(SuperfluidIntermediaryAccountInfo.decode(reader, reader.uint32(), useInterfaces));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32(), useInterfaces);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): AllIntermediaryAccountsResponse {
    const obj = createBaseAllIntermediaryAccountsResponse();
    if (Array.isArray(object?.accounts)) obj.accounts = object.accounts.map((e: any) => SuperfluidIntermediaryAccountInfo.fromJSON(e));
    if (isSet(object.pagination)) obj.pagination = PageResponse.fromJSON(object.pagination);
    return obj;
  },
  fromPartial(object: DeepPartial<AllIntermediaryAccountsResponse>): AllIntermediaryAccountsResponse {
    const message = createBaseAllIntermediaryAccountsResponse();
    message.accounts = object.accounts?.map(e => SuperfluidIntermediaryAccountInfo.fromPartial(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    }
    return message;
  },
  fromSDK(object: AllIntermediaryAccountsResponseSDKType): AllIntermediaryAccountsResponse {
    return {
      accounts: Array.isArray(object?.accounts) ? object.accounts.map((e: any) => SuperfluidIntermediaryAccountInfo.fromSDK(e)) : [],
      pagination: object.pagination ? PageResponse.fromSDK(object.pagination) : undefined
    };
  },
  toSDK(message: AllIntermediaryAccountsResponse): AllIntermediaryAccountsResponseSDKType {
    const obj: any = {};
    if (message.accounts) {
      obj.accounts = message.accounts.map(e => e ? SuperfluidIntermediaryAccountInfo.toSDK(e) : undefined);
    } else {
      obj.accounts = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toSDK(message.pagination) : undefined);
    return obj;
  },
  fromAmino(object: AllIntermediaryAccountsResponseAmino): AllIntermediaryAccountsResponse {
    const message = createBaseAllIntermediaryAccountsResponse();
    message.accounts = object.accounts?.map(e => SuperfluidIntermediaryAccountInfo.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: AllIntermediaryAccountsResponse, useInterfaces: boolean = true): AllIntermediaryAccountsResponseAmino {
    const obj: any = {};
    if (message.accounts) {
      obj.accounts = message.accounts.map(e => e ? SuperfluidIntermediaryAccountInfo.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.accounts = message.accounts;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination, useInterfaces) : undefined;
    return obj;
  },
  fromProtoMsg(message: AllIntermediaryAccountsResponseProtoMsg, useInterfaces: boolean = true): AllIntermediaryAccountsResponse {
    return AllIntermediaryAccountsResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: AllIntermediaryAccountsResponse): Uint8Array {
    return AllIntermediaryAccountsResponse.encode(message).finish();
  },
  toProtoMsg(message: AllIntermediaryAccountsResponse): AllIntermediaryAccountsResponseProtoMsg {
    return {
      typeUrl: "/osmosis.superfluid.AllIntermediaryAccountsResponse",
      value: AllIntermediaryAccountsResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(AllIntermediaryAccountsResponse.typeUrl)) {
      return;
    }
    SuperfluidIntermediaryAccountInfo.registerTypeUrl();
    PageResponse.registerTypeUrl();
  }
};
function createBaseConnectedIntermediaryAccountRequest(): ConnectedIntermediaryAccountRequest {
  return {
    lockId: BigInt(0)
  };
}
/**
 * @name ConnectedIntermediaryAccountRequest
 * @package osmosis.superfluid
 * @see proto type: osmosis.superfluid.ConnectedIntermediaryAccountRequest
 */
export const ConnectedIntermediaryAccountRequest = {
  typeUrl: "/osmosis.superfluid.ConnectedIntermediaryAccountRequest",
  aminoType: "osmosis/connected-intermediary-account-request",
  is(o: any): o is ConnectedIntermediaryAccountRequest {
    return o && (o.$typeUrl === ConnectedIntermediaryAccountRequest.typeUrl || typeof o.lockId === "bigint");
  },
  isSDK(o: any): o is ConnectedIntermediaryAccountRequestSDKType {
    return o && (o.$typeUrl === ConnectedIntermediaryAccountRequest.typeUrl || typeof o.lock_id === "bigint");
  },
  isAmino(o: any): o is ConnectedIntermediaryAccountRequestAmino {
    return o && (o.$typeUrl === ConnectedIntermediaryAccountRequest.typeUrl || typeof o.lock_id === "bigint");
  },
  encode(message: ConnectedIntermediaryAccountRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.lockId !== BigInt(0)) {
      writer.uint32(8).uint64(message.lockId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): ConnectedIntermediaryAccountRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseConnectedIntermediaryAccountRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.lockId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ConnectedIntermediaryAccountRequest {
    const obj = createBaseConnectedIntermediaryAccountRequest();
    if (isSet(object.lockId)) obj.lockId = BigInt(object.lockId.toString());
    return obj;
  },
  fromPartial(object: DeepPartial<ConnectedIntermediaryAccountRequest>): ConnectedIntermediaryAccountRequest {
    const message = createBaseConnectedIntermediaryAccountRequest();
    if (object.lockId !== undefined && object.lockId !== null) {
      message.lockId = BigInt(object.lockId.toString());
    }
    return message;
  },
  fromSDK(object: ConnectedIntermediaryAccountRequestSDKType): ConnectedIntermediaryAccountRequest {
    return {
      lockId: object?.lock_id
    };
  },
  toSDK(message: ConnectedIntermediaryAccountRequest): ConnectedIntermediaryAccountRequestSDKType {
    const obj: any = {};
    obj.lock_id = message.lockId;
    return obj;
  },
  fromAmino(object: ConnectedIntermediaryAccountRequestAmino): ConnectedIntermediaryAccountRequest {
    const message = createBaseConnectedIntermediaryAccountRequest();
    if (object.lock_id !== undefined && object.lock_id !== null) {
      message.lockId = BigInt(object.lock_id);
    }
    return message;
  },
  toAmino(message: ConnectedIntermediaryAccountRequest, useInterfaces: boolean = true): ConnectedIntermediaryAccountRequestAmino {
    const obj: any = {};
    obj.lock_id = message.lockId !== BigInt(0) ? message.lockId?.toString() : undefined;
    return obj;
  },
  fromProtoMsg(message: ConnectedIntermediaryAccountRequestProtoMsg, useInterfaces: boolean = true): ConnectedIntermediaryAccountRequest {
    return ConnectedIntermediaryAccountRequest.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: ConnectedIntermediaryAccountRequest): Uint8Array {
    return ConnectedIntermediaryAccountRequest.encode(message).finish();
  },
  toProtoMsg(message: ConnectedIntermediaryAccountRequest): ConnectedIntermediaryAccountRequestProtoMsg {
    return {
      typeUrl: "/osmosis.superfluid.ConnectedIntermediaryAccountRequest",
      value: ConnectedIntermediaryAccountRequest.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseConnectedIntermediaryAccountResponse(): ConnectedIntermediaryAccountResponse {
  return {
    account: undefined
  };
}
/**
 * @name ConnectedIntermediaryAccountResponse
 * @package osmosis.superfluid
 * @see proto type: osmosis.superfluid.ConnectedIntermediaryAccountResponse
 */
export const ConnectedIntermediaryAccountResponse = {
  typeUrl: "/osmosis.superfluid.ConnectedIntermediaryAccountResponse",
  aminoType: "osmosis/connected-intermediary-account-response",
  is(o: any): o is ConnectedIntermediaryAccountResponse {
    return o && o.$typeUrl === ConnectedIntermediaryAccountResponse.typeUrl;
  },
  isSDK(o: any): o is ConnectedIntermediaryAccountResponseSDKType {
    return o && o.$typeUrl === ConnectedIntermediaryAccountResponse.typeUrl;
  },
  isAmino(o: any): o is ConnectedIntermediaryAccountResponseAmino {
    return o && o.$typeUrl === ConnectedIntermediaryAccountResponse.typeUrl;
  },
  encode(message: ConnectedIntermediaryAccountResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.account !== undefined) {
      SuperfluidIntermediaryAccountInfo.encode(message.account, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): ConnectedIntermediaryAccountResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseConnectedIntermediaryAccountResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.account = SuperfluidIntermediaryAccountInfo.decode(reader, reader.uint32(), useInterfaces);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ConnectedIntermediaryAccountResponse {
    const obj = createBaseConnectedIntermediaryAccountResponse();
    if (isSet(object.account)) obj.account = SuperfluidIntermediaryAccountInfo.fromJSON(object.account);
    return obj;
  },
  fromPartial(object: DeepPartial<ConnectedIntermediaryAccountResponse>): ConnectedIntermediaryAccountResponse {
    const message = createBaseConnectedIntermediaryAccountResponse();
    if (object.account !== undefined && object.account !== null) {
      message.account = SuperfluidIntermediaryAccountInfo.fromPartial(object.account);
    }
    return message;
  },
  fromSDK(object: ConnectedIntermediaryAccountResponseSDKType): ConnectedIntermediaryAccountResponse {
    return {
      account: object.account ? SuperfluidIntermediaryAccountInfo.fromSDK(object.account) : undefined
    };
  },
  toSDK(message: ConnectedIntermediaryAccountResponse): ConnectedIntermediaryAccountResponseSDKType {
    const obj: any = {};
    message.account !== undefined && (obj.account = message.account ? SuperfluidIntermediaryAccountInfo.toSDK(message.account) : undefined);
    return obj;
  },
  fromAmino(object: ConnectedIntermediaryAccountResponseAmino): ConnectedIntermediaryAccountResponse {
    const message = createBaseConnectedIntermediaryAccountResponse();
    if (object.account !== undefined && object.account !== null) {
      message.account = SuperfluidIntermediaryAccountInfo.fromAmino(object.account);
    }
    return message;
  },
  toAmino(message: ConnectedIntermediaryAccountResponse, useInterfaces: boolean = true): ConnectedIntermediaryAccountResponseAmino {
    const obj: any = {};
    obj.account = message.account ? SuperfluidIntermediaryAccountInfo.toAmino(message.account, useInterfaces) : undefined;
    return obj;
  },
  fromProtoMsg(message: ConnectedIntermediaryAccountResponseProtoMsg, useInterfaces: boolean = true): ConnectedIntermediaryAccountResponse {
    return ConnectedIntermediaryAccountResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: ConnectedIntermediaryAccountResponse): Uint8Array {
    return ConnectedIntermediaryAccountResponse.encode(message).finish();
  },
  toProtoMsg(message: ConnectedIntermediaryAccountResponse): ConnectedIntermediaryAccountResponseProtoMsg {
    return {
      typeUrl: "/osmosis.superfluid.ConnectedIntermediaryAccountResponse",
      value: ConnectedIntermediaryAccountResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(ConnectedIntermediaryAccountResponse.typeUrl)) {
      return;
    }
    SuperfluidIntermediaryAccountInfo.registerTypeUrl();
  }
};
function createBaseQueryTotalDelegationByValidatorForDenomRequest(): QueryTotalDelegationByValidatorForDenomRequest {
  return {
    denom: ""
  };
}
/**
 * @name QueryTotalDelegationByValidatorForDenomRequest
 * @package osmosis.superfluid
 * @see proto type: osmosis.superfluid.QueryTotalDelegationByValidatorForDenomRequest
 */
export const QueryTotalDelegationByValidatorForDenomRequest = {
  typeUrl: "/osmosis.superfluid.QueryTotalDelegationByValidatorForDenomRequest",
  aminoType: "osmosis/query-total-delegation-by-validator-for-denom-request",
  is(o: any): o is QueryTotalDelegationByValidatorForDenomRequest {
    return o && (o.$typeUrl === QueryTotalDelegationByValidatorForDenomRequest.typeUrl || typeof o.denom === "string");
  },
  isSDK(o: any): o is QueryTotalDelegationByValidatorForDenomRequestSDKType {
    return o && (o.$typeUrl === QueryTotalDelegationByValidatorForDenomRequest.typeUrl || typeof o.denom === "string");
  },
  isAmino(o: any): o is QueryTotalDelegationByValidatorForDenomRequestAmino {
    return o && (o.$typeUrl === QueryTotalDelegationByValidatorForDenomRequest.typeUrl || typeof o.denom === "string");
  },
  encode(message: QueryTotalDelegationByValidatorForDenomRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryTotalDelegationByValidatorForDenomRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTotalDelegationByValidatorForDenomRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryTotalDelegationByValidatorForDenomRequest {
    const obj = createBaseQueryTotalDelegationByValidatorForDenomRequest();
    if (isSet(object.denom)) obj.denom = String(object.denom);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryTotalDelegationByValidatorForDenomRequest>): QueryTotalDelegationByValidatorForDenomRequest {
    const message = createBaseQueryTotalDelegationByValidatorForDenomRequest();
    message.denom = object.denom ?? "";
    return message;
  },
  fromSDK(object: QueryTotalDelegationByValidatorForDenomRequestSDKType): QueryTotalDelegationByValidatorForDenomRequest {
    return {
      denom: object?.denom
    };
  },
  toSDK(message: QueryTotalDelegationByValidatorForDenomRequest): QueryTotalDelegationByValidatorForDenomRequestSDKType {
    const obj: any = {};
    obj.denom = message.denom;
    return obj;
  },
  fromAmino(object: QueryTotalDelegationByValidatorForDenomRequestAmino): QueryTotalDelegationByValidatorForDenomRequest {
    const message = createBaseQueryTotalDelegationByValidatorForDenomRequest();
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    }
    return message;
  },
  toAmino(message: QueryTotalDelegationByValidatorForDenomRequest, useInterfaces: boolean = true): QueryTotalDelegationByValidatorForDenomRequestAmino {
    const obj: any = {};
    obj.denom = message.denom === "" ? undefined : message.denom;
    return obj;
  },
  fromProtoMsg(message: QueryTotalDelegationByValidatorForDenomRequestProtoMsg, useInterfaces: boolean = true): QueryTotalDelegationByValidatorForDenomRequest {
    return QueryTotalDelegationByValidatorForDenomRequest.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryTotalDelegationByValidatorForDenomRequest): Uint8Array {
    return QueryTotalDelegationByValidatorForDenomRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryTotalDelegationByValidatorForDenomRequest): QueryTotalDelegationByValidatorForDenomRequestProtoMsg {
    return {
      typeUrl: "/osmosis.superfluid.QueryTotalDelegationByValidatorForDenomRequest",
      value: QueryTotalDelegationByValidatorForDenomRequest.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseQueryTotalDelegationByValidatorForDenomResponse(): QueryTotalDelegationByValidatorForDenomResponse {
  return {
    assets: []
  };
}
/**
 * @name QueryTotalDelegationByValidatorForDenomResponse
 * @package osmosis.superfluid
 * @see proto type: osmosis.superfluid.QueryTotalDelegationByValidatorForDenomResponse
 */
export const QueryTotalDelegationByValidatorForDenomResponse = {
  typeUrl: "/osmosis.superfluid.QueryTotalDelegationByValidatorForDenomResponse",
  aminoType: "osmosis/query-total-delegation-by-validator-for-denom-response",
  is(o: any): o is QueryTotalDelegationByValidatorForDenomResponse {
    return o && (o.$typeUrl === QueryTotalDelegationByValidatorForDenomResponse.typeUrl || Array.isArray(o.assets) && (!o.assets.length || Delegations.is(o.assets[0])));
  },
  isSDK(o: any): o is QueryTotalDelegationByValidatorForDenomResponseSDKType {
    return o && (o.$typeUrl === QueryTotalDelegationByValidatorForDenomResponse.typeUrl || Array.isArray(o.assets) && (!o.assets.length || Delegations.isSDK(o.assets[0])));
  },
  isAmino(o: any): o is QueryTotalDelegationByValidatorForDenomResponseAmino {
    return o && (o.$typeUrl === QueryTotalDelegationByValidatorForDenomResponse.typeUrl || Array.isArray(o.assets) && (!o.assets.length || Delegations.isAmino(o.assets[0])));
  },
  encode(message: QueryTotalDelegationByValidatorForDenomResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.assets) {
      Delegations.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryTotalDelegationByValidatorForDenomResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTotalDelegationByValidatorForDenomResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.assets.push(Delegations.decode(reader, reader.uint32(), useInterfaces));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryTotalDelegationByValidatorForDenomResponse {
    const obj = createBaseQueryTotalDelegationByValidatorForDenomResponse();
    if (Array.isArray(object?.assets)) obj.assets = object.assets.map((e: any) => Delegations.fromJSON(e));
    return obj;
  },
  fromPartial(object: DeepPartial<QueryTotalDelegationByValidatorForDenomResponse>): QueryTotalDelegationByValidatorForDenomResponse {
    const message = createBaseQueryTotalDelegationByValidatorForDenomResponse();
    message.assets = object.assets?.map(e => Delegations.fromPartial(e)) || [];
    return message;
  },
  fromSDK(object: QueryTotalDelegationByValidatorForDenomResponseSDKType): QueryTotalDelegationByValidatorForDenomResponse {
    return {
      assets: Array.isArray(object?.assets) ? object.assets.map((e: any) => Delegations.fromSDK(e)) : []
    };
  },
  toSDK(message: QueryTotalDelegationByValidatorForDenomResponse): QueryTotalDelegationByValidatorForDenomResponseSDKType {
    const obj: any = {};
    if (message.assets) {
      obj.assets = message.assets.map(e => e ? Delegations.toSDK(e) : undefined);
    } else {
      obj.assets = [];
    }
    return obj;
  },
  fromAmino(object: QueryTotalDelegationByValidatorForDenomResponseAmino): QueryTotalDelegationByValidatorForDenomResponse {
    const message = createBaseQueryTotalDelegationByValidatorForDenomResponse();
    message.assets = object.assets?.map(e => Delegations.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: QueryTotalDelegationByValidatorForDenomResponse, useInterfaces: boolean = true): QueryTotalDelegationByValidatorForDenomResponseAmino {
    const obj: any = {};
    if (message.assets) {
      obj.assets = message.assets.map(e => e ? Delegations.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.assets = message.assets;
    }
    return obj;
  },
  fromProtoMsg(message: QueryTotalDelegationByValidatorForDenomResponseProtoMsg, useInterfaces: boolean = true): QueryTotalDelegationByValidatorForDenomResponse {
    return QueryTotalDelegationByValidatorForDenomResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryTotalDelegationByValidatorForDenomResponse): Uint8Array {
    return QueryTotalDelegationByValidatorForDenomResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryTotalDelegationByValidatorForDenomResponse): QueryTotalDelegationByValidatorForDenomResponseProtoMsg {
    return {
      typeUrl: "/osmosis.superfluid.QueryTotalDelegationByValidatorForDenomResponse",
      value: QueryTotalDelegationByValidatorForDenomResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(QueryTotalDelegationByValidatorForDenomResponse.typeUrl)) {
      return;
    }
    Delegations.registerTypeUrl();
  }
};
function createBaseDelegations(): Delegations {
  return {
    valAddr: "",
    amountSfsd: "",
    osmoEquivalent: ""
  };
}
/**
 * @name Delegations
 * @package osmosis.superfluid
 * @see proto type: osmosis.superfluid.Delegations
 */
export const Delegations = {
  typeUrl: "/osmosis.superfluid.Delegations",
  aminoType: "osmosis/delegations",
  is(o: any): o is Delegations {
    return o && (o.$typeUrl === Delegations.typeUrl || typeof o.valAddr === "string" && typeof o.amountSfsd === "string" && typeof o.osmoEquivalent === "string");
  },
  isSDK(o: any): o is DelegationsSDKType {
    return o && (o.$typeUrl === Delegations.typeUrl || typeof o.val_addr === "string" && typeof o.amount_sfsd === "string" && typeof o.osmo_equivalent === "string");
  },
  isAmino(o: any): o is DelegationsAmino {
    return o && (o.$typeUrl === Delegations.typeUrl || typeof o.val_addr === "string" && typeof o.amount_sfsd === "string" && typeof o.osmo_equivalent === "string");
  },
  encode(message: Delegations, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.valAddr !== "") {
      writer.uint32(10).string(message.valAddr);
    }
    if (message.amountSfsd !== "") {
      writer.uint32(18).string(message.amountSfsd);
    }
    if (message.osmoEquivalent !== "") {
      writer.uint32(26).string(message.osmoEquivalent);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): Delegations {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDelegations();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.valAddr = reader.string();
          break;
        case 2:
          message.amountSfsd = reader.string();
          break;
        case 3:
          message.osmoEquivalent = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Delegations {
    const obj = createBaseDelegations();
    if (isSet(object.valAddr)) obj.valAddr = String(object.valAddr);
    if (isSet(object.amountSfsd)) obj.amountSfsd = String(object.amountSfsd);
    if (isSet(object.osmoEquivalent)) obj.osmoEquivalent = String(object.osmoEquivalent);
    return obj;
  },
  fromPartial(object: DeepPartial<Delegations>): Delegations {
    const message = createBaseDelegations();
    message.valAddr = object.valAddr ?? "";
    message.amountSfsd = object.amountSfsd ?? "";
    message.osmoEquivalent = object.osmoEquivalent ?? "";
    return message;
  },
  fromSDK(object: DelegationsSDKType): Delegations {
    return {
      valAddr: object?.val_addr,
      amountSfsd: object?.amount_sfsd,
      osmoEquivalent: object?.osmo_equivalent
    };
  },
  toSDK(message: Delegations): DelegationsSDKType {
    const obj: any = {};
    obj.val_addr = message.valAddr;
    obj.amount_sfsd = message.amountSfsd;
    obj.osmo_equivalent = message.osmoEquivalent;
    return obj;
  },
  fromAmino(object: DelegationsAmino): Delegations {
    const message = createBaseDelegations();
    if (object.val_addr !== undefined && object.val_addr !== null) {
      message.valAddr = object.val_addr;
    }
    if (object.amount_sfsd !== undefined && object.amount_sfsd !== null) {
      message.amountSfsd = object.amount_sfsd;
    }
    if (object.osmo_equivalent !== undefined && object.osmo_equivalent !== null) {
      message.osmoEquivalent = object.osmo_equivalent;
    }
    return message;
  },
  toAmino(message: Delegations, useInterfaces: boolean = true): DelegationsAmino {
    const obj: any = {};
    obj.val_addr = message.valAddr === "" ? undefined : message.valAddr;
    obj.amount_sfsd = message.amountSfsd === "" ? undefined : message.amountSfsd;
    obj.osmo_equivalent = message.osmoEquivalent === "" ? undefined : message.osmoEquivalent;
    return obj;
  },
  fromProtoMsg(message: DelegationsProtoMsg, useInterfaces: boolean = true): Delegations {
    return Delegations.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: Delegations): Uint8Array {
    return Delegations.encode(message).finish();
  },
  toProtoMsg(message: Delegations): DelegationsProtoMsg {
    return {
      typeUrl: "/osmosis.superfluid.Delegations",
      value: Delegations.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseTotalSuperfluidDelegationsRequest(): TotalSuperfluidDelegationsRequest {
  return {};
}
/**
 * @name TotalSuperfluidDelegationsRequest
 * @package osmosis.superfluid
 * @see proto type: osmosis.superfluid.TotalSuperfluidDelegationsRequest
 */
export const TotalSuperfluidDelegationsRequest = {
  typeUrl: "/osmosis.superfluid.TotalSuperfluidDelegationsRequest",
  aminoType: "osmosis/total-superfluid-delegations-request",
  is(o: any): o is TotalSuperfluidDelegationsRequest {
    return o && o.$typeUrl === TotalSuperfluidDelegationsRequest.typeUrl;
  },
  isSDK(o: any): o is TotalSuperfluidDelegationsRequestSDKType {
    return o && o.$typeUrl === TotalSuperfluidDelegationsRequest.typeUrl;
  },
  isAmino(o: any): o is TotalSuperfluidDelegationsRequestAmino {
    return o && o.$typeUrl === TotalSuperfluidDelegationsRequest.typeUrl;
  },
  encode(_: TotalSuperfluidDelegationsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): TotalSuperfluidDelegationsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTotalSuperfluidDelegationsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_: any): TotalSuperfluidDelegationsRequest {
    const obj = createBaseTotalSuperfluidDelegationsRequest();
    return obj;
  },
  fromPartial(_: DeepPartial<TotalSuperfluidDelegationsRequest>): TotalSuperfluidDelegationsRequest {
    const message = createBaseTotalSuperfluidDelegationsRequest();
    return message;
  },
  fromSDK(_: TotalSuperfluidDelegationsRequestSDKType): TotalSuperfluidDelegationsRequest {
    return {};
  },
  toSDK(_: TotalSuperfluidDelegationsRequest): TotalSuperfluidDelegationsRequestSDKType {
    const obj: any = {};
    return obj;
  },
  fromAmino(_: TotalSuperfluidDelegationsRequestAmino): TotalSuperfluidDelegationsRequest {
    const message = createBaseTotalSuperfluidDelegationsRequest();
    return message;
  },
  toAmino(_: TotalSuperfluidDelegationsRequest, useInterfaces: boolean = true): TotalSuperfluidDelegationsRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromProtoMsg(message: TotalSuperfluidDelegationsRequestProtoMsg, useInterfaces: boolean = true): TotalSuperfluidDelegationsRequest {
    return TotalSuperfluidDelegationsRequest.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: TotalSuperfluidDelegationsRequest): Uint8Array {
    return TotalSuperfluidDelegationsRequest.encode(message).finish();
  },
  toProtoMsg(message: TotalSuperfluidDelegationsRequest): TotalSuperfluidDelegationsRequestProtoMsg {
    return {
      typeUrl: "/osmosis.superfluid.TotalSuperfluidDelegationsRequest",
      value: TotalSuperfluidDelegationsRequest.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseTotalSuperfluidDelegationsResponse(): TotalSuperfluidDelegationsResponse {
  return {
    totalDelegations: ""
  };
}
/**
 * @name TotalSuperfluidDelegationsResponse
 * @package osmosis.superfluid
 * @see proto type: osmosis.superfluid.TotalSuperfluidDelegationsResponse
 */
export const TotalSuperfluidDelegationsResponse = {
  typeUrl: "/osmosis.superfluid.TotalSuperfluidDelegationsResponse",
  aminoType: "osmosis/total-superfluid-delegations-response",
  is(o: any): o is TotalSuperfluidDelegationsResponse {
    return o && (o.$typeUrl === TotalSuperfluidDelegationsResponse.typeUrl || typeof o.totalDelegations === "string");
  },
  isSDK(o: any): o is TotalSuperfluidDelegationsResponseSDKType {
    return o && (o.$typeUrl === TotalSuperfluidDelegationsResponse.typeUrl || typeof o.total_delegations === "string");
  },
  isAmino(o: any): o is TotalSuperfluidDelegationsResponseAmino {
    return o && (o.$typeUrl === TotalSuperfluidDelegationsResponse.typeUrl || typeof o.total_delegations === "string");
  },
  encode(message: TotalSuperfluidDelegationsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.totalDelegations !== "") {
      writer.uint32(10).string(message.totalDelegations);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): TotalSuperfluidDelegationsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTotalSuperfluidDelegationsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.totalDelegations = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): TotalSuperfluidDelegationsResponse {
    const obj = createBaseTotalSuperfluidDelegationsResponse();
    if (isSet(object.totalDelegations)) obj.totalDelegations = String(object.totalDelegations);
    return obj;
  },
  fromPartial(object: DeepPartial<TotalSuperfluidDelegationsResponse>): TotalSuperfluidDelegationsResponse {
    const message = createBaseTotalSuperfluidDelegationsResponse();
    message.totalDelegations = object.totalDelegations ?? "";
    return message;
  },
  fromSDK(object: TotalSuperfluidDelegationsResponseSDKType): TotalSuperfluidDelegationsResponse {
    return {
      totalDelegations: object?.total_delegations
    };
  },
  toSDK(message: TotalSuperfluidDelegationsResponse): TotalSuperfluidDelegationsResponseSDKType {
    const obj: any = {};
    obj.total_delegations = message.totalDelegations;
    return obj;
  },
  fromAmino(object: TotalSuperfluidDelegationsResponseAmino): TotalSuperfluidDelegationsResponse {
    const message = createBaseTotalSuperfluidDelegationsResponse();
    if (object.total_delegations !== undefined && object.total_delegations !== null) {
      message.totalDelegations = object.total_delegations;
    }
    return message;
  },
  toAmino(message: TotalSuperfluidDelegationsResponse, useInterfaces: boolean = true): TotalSuperfluidDelegationsResponseAmino {
    const obj: any = {};
    obj.total_delegations = message.totalDelegations === "" ? undefined : message.totalDelegations;
    return obj;
  },
  fromProtoMsg(message: TotalSuperfluidDelegationsResponseProtoMsg, useInterfaces: boolean = true): TotalSuperfluidDelegationsResponse {
    return TotalSuperfluidDelegationsResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: TotalSuperfluidDelegationsResponse): Uint8Array {
    return TotalSuperfluidDelegationsResponse.encode(message).finish();
  },
  toProtoMsg(message: TotalSuperfluidDelegationsResponse): TotalSuperfluidDelegationsResponseProtoMsg {
    return {
      typeUrl: "/osmosis.superfluid.TotalSuperfluidDelegationsResponse",
      value: TotalSuperfluidDelegationsResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseSuperfluidDelegationAmountRequest(): SuperfluidDelegationAmountRequest {
  return {
    delegatorAddress: "",
    validatorAddress: "",
    denom: ""
  };
}
/**
 * @name SuperfluidDelegationAmountRequest
 * @package osmosis.superfluid
 * @see proto type: osmosis.superfluid.SuperfluidDelegationAmountRequest
 */
export const SuperfluidDelegationAmountRequest = {
  typeUrl: "/osmosis.superfluid.SuperfluidDelegationAmountRequest",
  aminoType: "osmosis/superfluid-delegation-amount-request",
  is(o: any): o is SuperfluidDelegationAmountRequest {
    return o && (o.$typeUrl === SuperfluidDelegationAmountRequest.typeUrl || typeof o.delegatorAddress === "string" && typeof o.validatorAddress === "string" && typeof o.denom === "string");
  },
  isSDK(o: any): o is SuperfluidDelegationAmountRequestSDKType {
    return o && (o.$typeUrl === SuperfluidDelegationAmountRequest.typeUrl || typeof o.delegator_address === "string" && typeof o.validator_address === "string" && typeof o.denom === "string");
  },
  isAmino(o: any): o is SuperfluidDelegationAmountRequestAmino {
    return o && (o.$typeUrl === SuperfluidDelegationAmountRequest.typeUrl || typeof o.delegator_address === "string" && typeof o.validator_address === "string" && typeof o.denom === "string");
  },
  encode(message: SuperfluidDelegationAmountRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.delegatorAddress !== "") {
      writer.uint32(10).string(message.delegatorAddress);
    }
    if (message.validatorAddress !== "") {
      writer.uint32(18).string(message.validatorAddress);
    }
    if (message.denom !== "") {
      writer.uint32(26).string(message.denom);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): SuperfluidDelegationAmountRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSuperfluidDelegationAmountRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegatorAddress = reader.string();
          break;
        case 2:
          message.validatorAddress = reader.string();
          break;
        case 3:
          message.denom = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): SuperfluidDelegationAmountRequest {
    const obj = createBaseSuperfluidDelegationAmountRequest();
    if (isSet(object.delegatorAddress)) obj.delegatorAddress = String(object.delegatorAddress);
    if (isSet(object.validatorAddress)) obj.validatorAddress = String(object.validatorAddress);
    if (isSet(object.denom)) obj.denom = String(object.denom);
    return obj;
  },
  fromPartial(object: DeepPartial<SuperfluidDelegationAmountRequest>): SuperfluidDelegationAmountRequest {
    const message = createBaseSuperfluidDelegationAmountRequest();
    message.delegatorAddress = object.delegatorAddress ?? "";
    message.validatorAddress = object.validatorAddress ?? "";
    message.denom = object.denom ?? "";
    return message;
  },
  fromSDK(object: SuperfluidDelegationAmountRequestSDKType): SuperfluidDelegationAmountRequest {
    return {
      delegatorAddress: object?.delegator_address,
      validatorAddress: object?.validator_address,
      denom: object?.denom
    };
  },
  toSDK(message: SuperfluidDelegationAmountRequest): SuperfluidDelegationAmountRequestSDKType {
    const obj: any = {};
    obj.delegator_address = message.delegatorAddress;
    obj.validator_address = message.validatorAddress;
    obj.denom = message.denom;
    return obj;
  },
  fromAmino(object: SuperfluidDelegationAmountRequestAmino): SuperfluidDelegationAmountRequest {
    const message = createBaseSuperfluidDelegationAmountRequest();
    if (object.delegator_address !== undefined && object.delegator_address !== null) {
      message.delegatorAddress = object.delegator_address;
    }
    if (object.validator_address !== undefined && object.validator_address !== null) {
      message.validatorAddress = object.validator_address;
    }
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    }
    return message;
  },
  toAmino(message: SuperfluidDelegationAmountRequest, useInterfaces: boolean = true): SuperfluidDelegationAmountRequestAmino {
    const obj: any = {};
    obj.delegator_address = message.delegatorAddress === "" ? undefined : message.delegatorAddress;
    obj.validator_address = message.validatorAddress === "" ? undefined : message.validatorAddress;
    obj.denom = message.denom === "" ? undefined : message.denom;
    return obj;
  },
  fromProtoMsg(message: SuperfluidDelegationAmountRequestProtoMsg, useInterfaces: boolean = true): SuperfluidDelegationAmountRequest {
    return SuperfluidDelegationAmountRequest.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: SuperfluidDelegationAmountRequest): Uint8Array {
    return SuperfluidDelegationAmountRequest.encode(message).finish();
  },
  toProtoMsg(message: SuperfluidDelegationAmountRequest): SuperfluidDelegationAmountRequestProtoMsg {
    return {
      typeUrl: "/osmosis.superfluid.SuperfluidDelegationAmountRequest",
      value: SuperfluidDelegationAmountRequest.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseSuperfluidDelegationAmountResponse(): SuperfluidDelegationAmountResponse {
  return {
    amount: []
  };
}
/**
 * @name SuperfluidDelegationAmountResponse
 * @package osmosis.superfluid
 * @see proto type: osmosis.superfluid.SuperfluidDelegationAmountResponse
 */
export const SuperfluidDelegationAmountResponse = {
  typeUrl: "/osmosis.superfluid.SuperfluidDelegationAmountResponse",
  aminoType: "osmosis/superfluid-delegation-amount-response",
  is(o: any): o is SuperfluidDelegationAmountResponse {
    return o && (o.$typeUrl === SuperfluidDelegationAmountResponse.typeUrl || Array.isArray(o.amount) && (!o.amount.length || Coin.is(o.amount[0])));
  },
  isSDK(o: any): o is SuperfluidDelegationAmountResponseSDKType {
    return o && (o.$typeUrl === SuperfluidDelegationAmountResponse.typeUrl || Array.isArray(o.amount) && (!o.amount.length || Coin.isSDK(o.amount[0])));
  },
  isAmino(o: any): o is SuperfluidDelegationAmountResponseAmino {
    return o && (o.$typeUrl === SuperfluidDelegationAmountResponse.typeUrl || Array.isArray(o.amount) && (!o.amount.length || Coin.isAmino(o.amount[0])));
  },
  encode(message: SuperfluidDelegationAmountResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.amount) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): SuperfluidDelegationAmountResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSuperfluidDelegationAmountResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.amount.push(Coin.decode(reader, reader.uint32(), useInterfaces));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): SuperfluidDelegationAmountResponse {
    const obj = createBaseSuperfluidDelegationAmountResponse();
    if (Array.isArray(object?.amount)) obj.amount = object.amount.map((e: any) => Coin.fromJSON(e));
    return obj;
  },
  fromPartial(object: DeepPartial<SuperfluidDelegationAmountResponse>): SuperfluidDelegationAmountResponse {
    const message = createBaseSuperfluidDelegationAmountResponse();
    message.amount = object.amount?.map(e => Coin.fromPartial(e)) || [];
    return message;
  },
  fromSDK(object: SuperfluidDelegationAmountResponseSDKType): SuperfluidDelegationAmountResponse {
    return {
      amount: Array.isArray(object?.amount) ? object.amount.map((e: any) => Coin.fromSDK(e)) : []
    };
  },
  toSDK(message: SuperfluidDelegationAmountResponse): SuperfluidDelegationAmountResponseSDKType {
    const obj: any = {};
    if (message.amount) {
      obj.amount = message.amount.map(e => e ? Coin.toSDK(e) : undefined);
    } else {
      obj.amount = [];
    }
    return obj;
  },
  fromAmino(object: SuperfluidDelegationAmountResponseAmino): SuperfluidDelegationAmountResponse {
    const message = createBaseSuperfluidDelegationAmountResponse();
    message.amount = object.amount?.map(e => Coin.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: SuperfluidDelegationAmountResponse, useInterfaces: boolean = true): SuperfluidDelegationAmountResponseAmino {
    const obj: any = {};
    if (message.amount) {
      obj.amount = message.amount.map(e => e ? Coin.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.amount = message.amount;
    }
    return obj;
  },
  fromProtoMsg(message: SuperfluidDelegationAmountResponseProtoMsg, useInterfaces: boolean = true): SuperfluidDelegationAmountResponse {
    return SuperfluidDelegationAmountResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: SuperfluidDelegationAmountResponse): Uint8Array {
    return SuperfluidDelegationAmountResponse.encode(message).finish();
  },
  toProtoMsg(message: SuperfluidDelegationAmountResponse): SuperfluidDelegationAmountResponseProtoMsg {
    return {
      typeUrl: "/osmosis.superfluid.SuperfluidDelegationAmountResponse",
      value: SuperfluidDelegationAmountResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(SuperfluidDelegationAmountResponse.typeUrl)) {
      return;
    }
    Coin.registerTypeUrl();
  }
};
function createBaseSuperfluidDelegationsByDelegatorRequest(): SuperfluidDelegationsByDelegatorRequest {
  return {
    delegatorAddress: ""
  };
}
/**
 * @name SuperfluidDelegationsByDelegatorRequest
 * @package osmosis.superfluid
 * @see proto type: osmosis.superfluid.SuperfluidDelegationsByDelegatorRequest
 */
export const SuperfluidDelegationsByDelegatorRequest = {
  typeUrl: "/osmosis.superfluid.SuperfluidDelegationsByDelegatorRequest",
  aminoType: "osmosis/superfluid-delegations-by-delegator-request",
  is(o: any): o is SuperfluidDelegationsByDelegatorRequest {
    return o && (o.$typeUrl === SuperfluidDelegationsByDelegatorRequest.typeUrl || typeof o.delegatorAddress === "string");
  },
  isSDK(o: any): o is SuperfluidDelegationsByDelegatorRequestSDKType {
    return o && (o.$typeUrl === SuperfluidDelegationsByDelegatorRequest.typeUrl || typeof o.delegator_address === "string");
  },
  isAmino(o: any): o is SuperfluidDelegationsByDelegatorRequestAmino {
    return o && (o.$typeUrl === SuperfluidDelegationsByDelegatorRequest.typeUrl || typeof o.delegator_address === "string");
  },
  encode(message: SuperfluidDelegationsByDelegatorRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.delegatorAddress !== "") {
      writer.uint32(10).string(message.delegatorAddress);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): SuperfluidDelegationsByDelegatorRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSuperfluidDelegationsByDelegatorRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegatorAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): SuperfluidDelegationsByDelegatorRequest {
    const obj = createBaseSuperfluidDelegationsByDelegatorRequest();
    if (isSet(object.delegatorAddress)) obj.delegatorAddress = String(object.delegatorAddress);
    return obj;
  },
  fromPartial(object: DeepPartial<SuperfluidDelegationsByDelegatorRequest>): SuperfluidDelegationsByDelegatorRequest {
    const message = createBaseSuperfluidDelegationsByDelegatorRequest();
    message.delegatorAddress = object.delegatorAddress ?? "";
    return message;
  },
  fromSDK(object: SuperfluidDelegationsByDelegatorRequestSDKType): SuperfluidDelegationsByDelegatorRequest {
    return {
      delegatorAddress: object?.delegator_address
    };
  },
  toSDK(message: SuperfluidDelegationsByDelegatorRequest): SuperfluidDelegationsByDelegatorRequestSDKType {
    const obj: any = {};
    obj.delegator_address = message.delegatorAddress;
    return obj;
  },
  fromAmino(object: SuperfluidDelegationsByDelegatorRequestAmino): SuperfluidDelegationsByDelegatorRequest {
    const message = createBaseSuperfluidDelegationsByDelegatorRequest();
    if (object.delegator_address !== undefined && object.delegator_address !== null) {
      message.delegatorAddress = object.delegator_address;
    }
    return message;
  },
  toAmino(message: SuperfluidDelegationsByDelegatorRequest, useInterfaces: boolean = true): SuperfluidDelegationsByDelegatorRequestAmino {
    const obj: any = {};
    obj.delegator_address = message.delegatorAddress === "" ? undefined : message.delegatorAddress;
    return obj;
  },
  fromProtoMsg(message: SuperfluidDelegationsByDelegatorRequestProtoMsg, useInterfaces: boolean = true): SuperfluidDelegationsByDelegatorRequest {
    return SuperfluidDelegationsByDelegatorRequest.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: SuperfluidDelegationsByDelegatorRequest): Uint8Array {
    return SuperfluidDelegationsByDelegatorRequest.encode(message).finish();
  },
  toProtoMsg(message: SuperfluidDelegationsByDelegatorRequest): SuperfluidDelegationsByDelegatorRequestProtoMsg {
    return {
      typeUrl: "/osmosis.superfluid.SuperfluidDelegationsByDelegatorRequest",
      value: SuperfluidDelegationsByDelegatorRequest.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseSuperfluidDelegationsByDelegatorResponse(): SuperfluidDelegationsByDelegatorResponse {
  return {
    superfluidDelegationRecords: [],
    totalDelegatedCoins: [],
    totalEquivalentStakedAmount: Coin.fromPartial({})
  };
}
/**
 * @name SuperfluidDelegationsByDelegatorResponse
 * @package osmosis.superfluid
 * @see proto type: osmosis.superfluid.SuperfluidDelegationsByDelegatorResponse
 */
export const SuperfluidDelegationsByDelegatorResponse = {
  typeUrl: "/osmosis.superfluid.SuperfluidDelegationsByDelegatorResponse",
  aminoType: "osmosis/superfluid-delegations-by-delegator-response",
  is(o: any): o is SuperfluidDelegationsByDelegatorResponse {
    return o && (o.$typeUrl === SuperfluidDelegationsByDelegatorResponse.typeUrl || Array.isArray(o.superfluidDelegationRecords) && (!o.superfluidDelegationRecords.length || SuperfluidDelegationRecord.is(o.superfluidDelegationRecords[0])) && Array.isArray(o.totalDelegatedCoins) && (!o.totalDelegatedCoins.length || Coin.is(o.totalDelegatedCoins[0])) && Coin.is(o.totalEquivalentStakedAmount));
  },
  isSDK(o: any): o is SuperfluidDelegationsByDelegatorResponseSDKType {
    return o && (o.$typeUrl === SuperfluidDelegationsByDelegatorResponse.typeUrl || Array.isArray(o.superfluid_delegation_records) && (!o.superfluid_delegation_records.length || SuperfluidDelegationRecord.isSDK(o.superfluid_delegation_records[0])) && Array.isArray(o.total_delegated_coins) && (!o.total_delegated_coins.length || Coin.isSDK(o.total_delegated_coins[0])) && Coin.isSDK(o.total_equivalent_staked_amount));
  },
  isAmino(o: any): o is SuperfluidDelegationsByDelegatorResponseAmino {
    return o && (o.$typeUrl === SuperfluidDelegationsByDelegatorResponse.typeUrl || Array.isArray(o.superfluid_delegation_records) && (!o.superfluid_delegation_records.length || SuperfluidDelegationRecord.isAmino(o.superfluid_delegation_records[0])) && Array.isArray(o.total_delegated_coins) && (!o.total_delegated_coins.length || Coin.isAmino(o.total_delegated_coins[0])) && Coin.isAmino(o.total_equivalent_staked_amount));
  },
  encode(message: SuperfluidDelegationsByDelegatorResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.superfluidDelegationRecords) {
      SuperfluidDelegationRecord.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.totalDelegatedCoins) {
      Coin.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.totalEquivalentStakedAmount !== undefined) {
      Coin.encode(message.totalEquivalentStakedAmount, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): SuperfluidDelegationsByDelegatorResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSuperfluidDelegationsByDelegatorResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.superfluidDelegationRecords.push(SuperfluidDelegationRecord.decode(reader, reader.uint32(), useInterfaces));
          break;
        case 2:
          message.totalDelegatedCoins.push(Coin.decode(reader, reader.uint32(), useInterfaces));
          break;
        case 3:
          message.totalEquivalentStakedAmount = Coin.decode(reader, reader.uint32(), useInterfaces);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): SuperfluidDelegationsByDelegatorResponse {
    const obj = createBaseSuperfluidDelegationsByDelegatorResponse();
    if (Array.isArray(object?.superfluidDelegationRecords)) obj.superfluidDelegationRecords = object.superfluidDelegationRecords.map((e: any) => SuperfluidDelegationRecord.fromJSON(e));
    if (Array.isArray(object?.totalDelegatedCoins)) obj.totalDelegatedCoins = object.totalDelegatedCoins.map((e: any) => Coin.fromJSON(e));
    if (isSet(object.totalEquivalentStakedAmount)) obj.totalEquivalentStakedAmount = Coin.fromJSON(object.totalEquivalentStakedAmount);
    return obj;
  },
  fromPartial(object: DeepPartial<SuperfluidDelegationsByDelegatorResponse>): SuperfluidDelegationsByDelegatorResponse {
    const message = createBaseSuperfluidDelegationsByDelegatorResponse();
    message.superfluidDelegationRecords = object.superfluidDelegationRecords?.map(e => SuperfluidDelegationRecord.fromPartial(e)) || [];
    message.totalDelegatedCoins = object.totalDelegatedCoins?.map(e => Coin.fromPartial(e)) || [];
    if (object.totalEquivalentStakedAmount !== undefined && object.totalEquivalentStakedAmount !== null) {
      message.totalEquivalentStakedAmount = Coin.fromPartial(object.totalEquivalentStakedAmount);
    }
    return message;
  },
  fromSDK(object: SuperfluidDelegationsByDelegatorResponseSDKType): SuperfluidDelegationsByDelegatorResponse {
    return {
      superfluidDelegationRecords: Array.isArray(object?.superfluid_delegation_records) ? object.superfluid_delegation_records.map((e: any) => SuperfluidDelegationRecord.fromSDK(e)) : [],
      totalDelegatedCoins: Array.isArray(object?.total_delegated_coins) ? object.total_delegated_coins.map((e: any) => Coin.fromSDK(e)) : [],
      totalEquivalentStakedAmount: object.total_equivalent_staked_amount ? Coin.fromSDK(object.total_equivalent_staked_amount) : undefined
    };
  },
  toSDK(message: SuperfluidDelegationsByDelegatorResponse): SuperfluidDelegationsByDelegatorResponseSDKType {
    const obj: any = {};
    if (message.superfluidDelegationRecords) {
      obj.superfluid_delegation_records = message.superfluidDelegationRecords.map(e => e ? SuperfluidDelegationRecord.toSDK(e) : undefined);
    } else {
      obj.superfluid_delegation_records = [];
    }
    if (message.totalDelegatedCoins) {
      obj.total_delegated_coins = message.totalDelegatedCoins.map(e => e ? Coin.toSDK(e) : undefined);
    } else {
      obj.total_delegated_coins = [];
    }
    message.totalEquivalentStakedAmount !== undefined && (obj.total_equivalent_staked_amount = message.totalEquivalentStakedAmount ? Coin.toSDK(message.totalEquivalentStakedAmount) : undefined);
    return obj;
  },
  fromAmino(object: SuperfluidDelegationsByDelegatorResponseAmino): SuperfluidDelegationsByDelegatorResponse {
    const message = createBaseSuperfluidDelegationsByDelegatorResponse();
    message.superfluidDelegationRecords = object.superfluid_delegation_records?.map(e => SuperfluidDelegationRecord.fromAmino(e)) || [];
    message.totalDelegatedCoins = object.total_delegated_coins?.map(e => Coin.fromAmino(e)) || [];
    if (object.total_equivalent_staked_amount !== undefined && object.total_equivalent_staked_amount !== null) {
      message.totalEquivalentStakedAmount = Coin.fromAmino(object.total_equivalent_staked_amount);
    }
    return message;
  },
  toAmino(message: SuperfluidDelegationsByDelegatorResponse, useInterfaces: boolean = true): SuperfluidDelegationsByDelegatorResponseAmino {
    const obj: any = {};
    if (message.superfluidDelegationRecords) {
      obj.superfluid_delegation_records = message.superfluidDelegationRecords.map(e => e ? SuperfluidDelegationRecord.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.superfluid_delegation_records = message.superfluidDelegationRecords;
    }
    if (message.totalDelegatedCoins) {
      obj.total_delegated_coins = message.totalDelegatedCoins.map(e => e ? Coin.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.total_delegated_coins = message.totalDelegatedCoins;
    }
    obj.total_equivalent_staked_amount = message.totalEquivalentStakedAmount ? Coin.toAmino(message.totalEquivalentStakedAmount, useInterfaces) : undefined;
    return obj;
  },
  fromProtoMsg(message: SuperfluidDelegationsByDelegatorResponseProtoMsg, useInterfaces: boolean = true): SuperfluidDelegationsByDelegatorResponse {
    return SuperfluidDelegationsByDelegatorResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: SuperfluidDelegationsByDelegatorResponse): Uint8Array {
    return SuperfluidDelegationsByDelegatorResponse.encode(message).finish();
  },
  toProtoMsg(message: SuperfluidDelegationsByDelegatorResponse): SuperfluidDelegationsByDelegatorResponseProtoMsg {
    return {
      typeUrl: "/osmosis.superfluid.SuperfluidDelegationsByDelegatorResponse",
      value: SuperfluidDelegationsByDelegatorResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(SuperfluidDelegationsByDelegatorResponse.typeUrl)) {
      return;
    }
    SuperfluidDelegationRecord.registerTypeUrl();
    Coin.registerTypeUrl();
  }
};
function createBaseSuperfluidUndelegationsByDelegatorRequest(): SuperfluidUndelegationsByDelegatorRequest {
  return {
    delegatorAddress: "",
    denom: ""
  };
}
/**
 * @name SuperfluidUndelegationsByDelegatorRequest
 * @package osmosis.superfluid
 * @see proto type: osmosis.superfluid.SuperfluidUndelegationsByDelegatorRequest
 */
export const SuperfluidUndelegationsByDelegatorRequest = {
  typeUrl: "/osmosis.superfluid.SuperfluidUndelegationsByDelegatorRequest",
  aminoType: "osmosis/superfluid-undelegations-by-delegator-request",
  is(o: any): o is SuperfluidUndelegationsByDelegatorRequest {
    return o && (o.$typeUrl === SuperfluidUndelegationsByDelegatorRequest.typeUrl || typeof o.delegatorAddress === "string" && typeof o.denom === "string");
  },
  isSDK(o: any): o is SuperfluidUndelegationsByDelegatorRequestSDKType {
    return o && (o.$typeUrl === SuperfluidUndelegationsByDelegatorRequest.typeUrl || typeof o.delegator_address === "string" && typeof o.denom === "string");
  },
  isAmino(o: any): o is SuperfluidUndelegationsByDelegatorRequestAmino {
    return o && (o.$typeUrl === SuperfluidUndelegationsByDelegatorRequest.typeUrl || typeof o.delegator_address === "string" && typeof o.denom === "string");
  },
  encode(message: SuperfluidUndelegationsByDelegatorRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.delegatorAddress !== "") {
      writer.uint32(10).string(message.delegatorAddress);
    }
    if (message.denom !== "") {
      writer.uint32(18).string(message.denom);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): SuperfluidUndelegationsByDelegatorRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSuperfluidUndelegationsByDelegatorRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegatorAddress = reader.string();
          break;
        case 2:
          message.denom = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): SuperfluidUndelegationsByDelegatorRequest {
    const obj = createBaseSuperfluidUndelegationsByDelegatorRequest();
    if (isSet(object.delegatorAddress)) obj.delegatorAddress = String(object.delegatorAddress);
    if (isSet(object.denom)) obj.denom = String(object.denom);
    return obj;
  },
  fromPartial(object: DeepPartial<SuperfluidUndelegationsByDelegatorRequest>): SuperfluidUndelegationsByDelegatorRequest {
    const message = createBaseSuperfluidUndelegationsByDelegatorRequest();
    message.delegatorAddress = object.delegatorAddress ?? "";
    message.denom = object.denom ?? "";
    return message;
  },
  fromSDK(object: SuperfluidUndelegationsByDelegatorRequestSDKType): SuperfluidUndelegationsByDelegatorRequest {
    return {
      delegatorAddress: object?.delegator_address,
      denom: object?.denom
    };
  },
  toSDK(message: SuperfluidUndelegationsByDelegatorRequest): SuperfluidUndelegationsByDelegatorRequestSDKType {
    const obj: any = {};
    obj.delegator_address = message.delegatorAddress;
    obj.denom = message.denom;
    return obj;
  },
  fromAmino(object: SuperfluidUndelegationsByDelegatorRequestAmino): SuperfluidUndelegationsByDelegatorRequest {
    const message = createBaseSuperfluidUndelegationsByDelegatorRequest();
    if (object.delegator_address !== undefined && object.delegator_address !== null) {
      message.delegatorAddress = object.delegator_address;
    }
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    }
    return message;
  },
  toAmino(message: SuperfluidUndelegationsByDelegatorRequest, useInterfaces: boolean = true): SuperfluidUndelegationsByDelegatorRequestAmino {
    const obj: any = {};
    obj.delegator_address = message.delegatorAddress === "" ? undefined : message.delegatorAddress;
    obj.denom = message.denom === "" ? undefined : message.denom;
    return obj;
  },
  fromProtoMsg(message: SuperfluidUndelegationsByDelegatorRequestProtoMsg, useInterfaces: boolean = true): SuperfluidUndelegationsByDelegatorRequest {
    return SuperfluidUndelegationsByDelegatorRequest.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: SuperfluidUndelegationsByDelegatorRequest): Uint8Array {
    return SuperfluidUndelegationsByDelegatorRequest.encode(message).finish();
  },
  toProtoMsg(message: SuperfluidUndelegationsByDelegatorRequest): SuperfluidUndelegationsByDelegatorRequestProtoMsg {
    return {
      typeUrl: "/osmosis.superfluid.SuperfluidUndelegationsByDelegatorRequest",
      value: SuperfluidUndelegationsByDelegatorRequest.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseSuperfluidUndelegationsByDelegatorResponse(): SuperfluidUndelegationsByDelegatorResponse {
  return {
    superfluidDelegationRecords: [],
    totalUndelegatedCoins: [],
    syntheticLocks: []
  };
}
/**
 * @name SuperfluidUndelegationsByDelegatorResponse
 * @package osmosis.superfluid
 * @see proto type: osmosis.superfluid.SuperfluidUndelegationsByDelegatorResponse
 */
export const SuperfluidUndelegationsByDelegatorResponse = {
  typeUrl: "/osmosis.superfluid.SuperfluidUndelegationsByDelegatorResponse",
  aminoType: "osmosis/superfluid-undelegations-by-delegator-response",
  is(o: any): o is SuperfluidUndelegationsByDelegatorResponse {
    return o && (o.$typeUrl === SuperfluidUndelegationsByDelegatorResponse.typeUrl || Array.isArray(o.superfluidDelegationRecords) && (!o.superfluidDelegationRecords.length || SuperfluidDelegationRecord.is(o.superfluidDelegationRecords[0])) && Array.isArray(o.totalUndelegatedCoins) && (!o.totalUndelegatedCoins.length || Coin.is(o.totalUndelegatedCoins[0])) && Array.isArray(o.syntheticLocks) && (!o.syntheticLocks.length || SyntheticLock.is(o.syntheticLocks[0])));
  },
  isSDK(o: any): o is SuperfluidUndelegationsByDelegatorResponseSDKType {
    return o && (o.$typeUrl === SuperfluidUndelegationsByDelegatorResponse.typeUrl || Array.isArray(o.superfluid_delegation_records) && (!o.superfluid_delegation_records.length || SuperfluidDelegationRecord.isSDK(o.superfluid_delegation_records[0])) && Array.isArray(o.total_undelegated_coins) && (!o.total_undelegated_coins.length || Coin.isSDK(o.total_undelegated_coins[0])) && Array.isArray(o.synthetic_locks) && (!o.synthetic_locks.length || SyntheticLock.isSDK(o.synthetic_locks[0])));
  },
  isAmino(o: any): o is SuperfluidUndelegationsByDelegatorResponseAmino {
    return o && (o.$typeUrl === SuperfluidUndelegationsByDelegatorResponse.typeUrl || Array.isArray(o.superfluid_delegation_records) && (!o.superfluid_delegation_records.length || SuperfluidDelegationRecord.isAmino(o.superfluid_delegation_records[0])) && Array.isArray(o.total_undelegated_coins) && (!o.total_undelegated_coins.length || Coin.isAmino(o.total_undelegated_coins[0])) && Array.isArray(o.synthetic_locks) && (!o.synthetic_locks.length || SyntheticLock.isAmino(o.synthetic_locks[0])));
  },
  encode(message: SuperfluidUndelegationsByDelegatorResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.superfluidDelegationRecords) {
      SuperfluidDelegationRecord.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.totalUndelegatedCoins) {
      Coin.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.syntheticLocks) {
      SyntheticLock.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): SuperfluidUndelegationsByDelegatorResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSuperfluidUndelegationsByDelegatorResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.superfluidDelegationRecords.push(SuperfluidDelegationRecord.decode(reader, reader.uint32(), useInterfaces));
          break;
        case 2:
          message.totalUndelegatedCoins.push(Coin.decode(reader, reader.uint32(), useInterfaces));
          break;
        case 3:
          message.syntheticLocks.push(SyntheticLock.decode(reader, reader.uint32(), useInterfaces));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): SuperfluidUndelegationsByDelegatorResponse {
    const obj = createBaseSuperfluidUndelegationsByDelegatorResponse();
    if (Array.isArray(object?.superfluidDelegationRecords)) obj.superfluidDelegationRecords = object.superfluidDelegationRecords.map((e: any) => SuperfluidDelegationRecord.fromJSON(e));
    if (Array.isArray(object?.totalUndelegatedCoins)) obj.totalUndelegatedCoins = object.totalUndelegatedCoins.map((e: any) => Coin.fromJSON(e));
    if (Array.isArray(object?.syntheticLocks)) obj.syntheticLocks = object.syntheticLocks.map((e: any) => SyntheticLock.fromJSON(e));
    return obj;
  },
  fromPartial(object: DeepPartial<SuperfluidUndelegationsByDelegatorResponse>): SuperfluidUndelegationsByDelegatorResponse {
    const message = createBaseSuperfluidUndelegationsByDelegatorResponse();
    message.superfluidDelegationRecords = object.superfluidDelegationRecords?.map(e => SuperfluidDelegationRecord.fromPartial(e)) || [];
    message.totalUndelegatedCoins = object.totalUndelegatedCoins?.map(e => Coin.fromPartial(e)) || [];
    message.syntheticLocks = object.syntheticLocks?.map(e => SyntheticLock.fromPartial(e)) || [];
    return message;
  },
  fromSDK(object: SuperfluidUndelegationsByDelegatorResponseSDKType): SuperfluidUndelegationsByDelegatorResponse {
    return {
      superfluidDelegationRecords: Array.isArray(object?.superfluid_delegation_records) ? object.superfluid_delegation_records.map((e: any) => SuperfluidDelegationRecord.fromSDK(e)) : [],
      totalUndelegatedCoins: Array.isArray(object?.total_undelegated_coins) ? object.total_undelegated_coins.map((e: any) => Coin.fromSDK(e)) : [],
      syntheticLocks: Array.isArray(object?.synthetic_locks) ? object.synthetic_locks.map((e: any) => SyntheticLock.fromSDK(e)) : []
    };
  },
  toSDK(message: SuperfluidUndelegationsByDelegatorResponse): SuperfluidUndelegationsByDelegatorResponseSDKType {
    const obj: any = {};
    if (message.superfluidDelegationRecords) {
      obj.superfluid_delegation_records = message.superfluidDelegationRecords.map(e => e ? SuperfluidDelegationRecord.toSDK(e) : undefined);
    } else {
      obj.superfluid_delegation_records = [];
    }
    if (message.totalUndelegatedCoins) {
      obj.total_undelegated_coins = message.totalUndelegatedCoins.map(e => e ? Coin.toSDK(e) : undefined);
    } else {
      obj.total_undelegated_coins = [];
    }
    if (message.syntheticLocks) {
      obj.synthetic_locks = message.syntheticLocks.map(e => e ? SyntheticLock.toSDK(e) : undefined);
    } else {
      obj.synthetic_locks = [];
    }
    return obj;
  },
  fromAmino(object: SuperfluidUndelegationsByDelegatorResponseAmino): SuperfluidUndelegationsByDelegatorResponse {
    const message = createBaseSuperfluidUndelegationsByDelegatorResponse();
    message.superfluidDelegationRecords = object.superfluid_delegation_records?.map(e => SuperfluidDelegationRecord.fromAmino(e)) || [];
    message.totalUndelegatedCoins = object.total_undelegated_coins?.map(e => Coin.fromAmino(e)) || [];
    message.syntheticLocks = object.synthetic_locks?.map(e => SyntheticLock.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: SuperfluidUndelegationsByDelegatorResponse, useInterfaces: boolean = true): SuperfluidUndelegationsByDelegatorResponseAmino {
    const obj: any = {};
    if (message.superfluidDelegationRecords) {
      obj.superfluid_delegation_records = message.superfluidDelegationRecords.map(e => e ? SuperfluidDelegationRecord.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.superfluid_delegation_records = message.superfluidDelegationRecords;
    }
    if (message.totalUndelegatedCoins) {
      obj.total_undelegated_coins = message.totalUndelegatedCoins.map(e => e ? Coin.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.total_undelegated_coins = message.totalUndelegatedCoins;
    }
    if (message.syntheticLocks) {
      obj.synthetic_locks = message.syntheticLocks.map(e => e ? SyntheticLock.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.synthetic_locks = message.syntheticLocks;
    }
    return obj;
  },
  fromProtoMsg(message: SuperfluidUndelegationsByDelegatorResponseProtoMsg, useInterfaces: boolean = true): SuperfluidUndelegationsByDelegatorResponse {
    return SuperfluidUndelegationsByDelegatorResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: SuperfluidUndelegationsByDelegatorResponse): Uint8Array {
    return SuperfluidUndelegationsByDelegatorResponse.encode(message).finish();
  },
  toProtoMsg(message: SuperfluidUndelegationsByDelegatorResponse): SuperfluidUndelegationsByDelegatorResponseProtoMsg {
    return {
      typeUrl: "/osmosis.superfluid.SuperfluidUndelegationsByDelegatorResponse",
      value: SuperfluidUndelegationsByDelegatorResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(SuperfluidUndelegationsByDelegatorResponse.typeUrl)) {
      return;
    }
    SuperfluidDelegationRecord.registerTypeUrl();
    Coin.registerTypeUrl();
    SyntheticLock.registerTypeUrl();
  }
};
function createBaseSuperfluidDelegationsByValidatorDenomRequest(): SuperfluidDelegationsByValidatorDenomRequest {
  return {
    validatorAddress: "",
    denom: ""
  };
}
/**
 * @name SuperfluidDelegationsByValidatorDenomRequest
 * @package osmosis.superfluid
 * @see proto type: osmosis.superfluid.SuperfluidDelegationsByValidatorDenomRequest
 */
export const SuperfluidDelegationsByValidatorDenomRequest = {
  typeUrl: "/osmosis.superfluid.SuperfluidDelegationsByValidatorDenomRequest",
  aminoType: "osmosis/superfluid-delegations-by-validator-denom-request",
  is(o: any): o is SuperfluidDelegationsByValidatorDenomRequest {
    return o && (o.$typeUrl === SuperfluidDelegationsByValidatorDenomRequest.typeUrl || typeof o.validatorAddress === "string" && typeof o.denom === "string");
  },
  isSDK(o: any): o is SuperfluidDelegationsByValidatorDenomRequestSDKType {
    return o && (o.$typeUrl === SuperfluidDelegationsByValidatorDenomRequest.typeUrl || typeof o.validator_address === "string" && typeof o.denom === "string");
  },
  isAmino(o: any): o is SuperfluidDelegationsByValidatorDenomRequestAmino {
    return o && (o.$typeUrl === SuperfluidDelegationsByValidatorDenomRequest.typeUrl || typeof o.validator_address === "string" && typeof o.denom === "string");
  },
  encode(message: SuperfluidDelegationsByValidatorDenomRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.validatorAddress !== "") {
      writer.uint32(10).string(message.validatorAddress);
    }
    if (message.denom !== "") {
      writer.uint32(18).string(message.denom);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): SuperfluidDelegationsByValidatorDenomRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSuperfluidDelegationsByValidatorDenomRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.validatorAddress = reader.string();
          break;
        case 2:
          message.denom = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): SuperfluidDelegationsByValidatorDenomRequest {
    const obj = createBaseSuperfluidDelegationsByValidatorDenomRequest();
    if (isSet(object.validatorAddress)) obj.validatorAddress = String(object.validatorAddress);
    if (isSet(object.denom)) obj.denom = String(object.denom);
    return obj;
  },
  fromPartial(object: DeepPartial<SuperfluidDelegationsByValidatorDenomRequest>): SuperfluidDelegationsByValidatorDenomRequest {
    const message = createBaseSuperfluidDelegationsByValidatorDenomRequest();
    message.validatorAddress = object.validatorAddress ?? "";
    message.denom = object.denom ?? "";
    return message;
  },
  fromSDK(object: SuperfluidDelegationsByValidatorDenomRequestSDKType): SuperfluidDelegationsByValidatorDenomRequest {
    return {
      validatorAddress: object?.validator_address,
      denom: object?.denom
    };
  },
  toSDK(message: SuperfluidDelegationsByValidatorDenomRequest): SuperfluidDelegationsByValidatorDenomRequestSDKType {
    const obj: any = {};
    obj.validator_address = message.validatorAddress;
    obj.denom = message.denom;
    return obj;
  },
  fromAmino(object: SuperfluidDelegationsByValidatorDenomRequestAmino): SuperfluidDelegationsByValidatorDenomRequest {
    const message = createBaseSuperfluidDelegationsByValidatorDenomRequest();
    if (object.validator_address !== undefined && object.validator_address !== null) {
      message.validatorAddress = object.validator_address;
    }
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    }
    return message;
  },
  toAmino(message: SuperfluidDelegationsByValidatorDenomRequest, useInterfaces: boolean = true): SuperfluidDelegationsByValidatorDenomRequestAmino {
    const obj: any = {};
    obj.validator_address = message.validatorAddress === "" ? undefined : message.validatorAddress;
    obj.denom = message.denom === "" ? undefined : message.denom;
    return obj;
  },
  fromProtoMsg(message: SuperfluidDelegationsByValidatorDenomRequestProtoMsg, useInterfaces: boolean = true): SuperfluidDelegationsByValidatorDenomRequest {
    return SuperfluidDelegationsByValidatorDenomRequest.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: SuperfluidDelegationsByValidatorDenomRequest): Uint8Array {
    return SuperfluidDelegationsByValidatorDenomRequest.encode(message).finish();
  },
  toProtoMsg(message: SuperfluidDelegationsByValidatorDenomRequest): SuperfluidDelegationsByValidatorDenomRequestProtoMsg {
    return {
      typeUrl: "/osmosis.superfluid.SuperfluidDelegationsByValidatorDenomRequest",
      value: SuperfluidDelegationsByValidatorDenomRequest.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseSuperfluidDelegationsByValidatorDenomResponse(): SuperfluidDelegationsByValidatorDenomResponse {
  return {
    superfluidDelegationRecords: []
  };
}
/**
 * @name SuperfluidDelegationsByValidatorDenomResponse
 * @package osmosis.superfluid
 * @see proto type: osmosis.superfluid.SuperfluidDelegationsByValidatorDenomResponse
 */
export const SuperfluidDelegationsByValidatorDenomResponse = {
  typeUrl: "/osmosis.superfluid.SuperfluidDelegationsByValidatorDenomResponse",
  aminoType: "osmosis/superfluid-delegations-by-validator-denom-response",
  is(o: any): o is SuperfluidDelegationsByValidatorDenomResponse {
    return o && (o.$typeUrl === SuperfluidDelegationsByValidatorDenomResponse.typeUrl || Array.isArray(o.superfluidDelegationRecords) && (!o.superfluidDelegationRecords.length || SuperfluidDelegationRecord.is(o.superfluidDelegationRecords[0])));
  },
  isSDK(o: any): o is SuperfluidDelegationsByValidatorDenomResponseSDKType {
    return o && (o.$typeUrl === SuperfluidDelegationsByValidatorDenomResponse.typeUrl || Array.isArray(o.superfluid_delegation_records) && (!o.superfluid_delegation_records.length || SuperfluidDelegationRecord.isSDK(o.superfluid_delegation_records[0])));
  },
  isAmino(o: any): o is SuperfluidDelegationsByValidatorDenomResponseAmino {
    return o && (o.$typeUrl === SuperfluidDelegationsByValidatorDenomResponse.typeUrl || Array.isArray(o.superfluid_delegation_records) && (!o.superfluid_delegation_records.length || SuperfluidDelegationRecord.isAmino(o.superfluid_delegation_records[0])));
  },
  encode(message: SuperfluidDelegationsByValidatorDenomResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.superfluidDelegationRecords) {
      SuperfluidDelegationRecord.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): SuperfluidDelegationsByValidatorDenomResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSuperfluidDelegationsByValidatorDenomResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.superfluidDelegationRecords.push(SuperfluidDelegationRecord.decode(reader, reader.uint32(), useInterfaces));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): SuperfluidDelegationsByValidatorDenomResponse {
    const obj = createBaseSuperfluidDelegationsByValidatorDenomResponse();
    if (Array.isArray(object?.superfluidDelegationRecords)) obj.superfluidDelegationRecords = object.superfluidDelegationRecords.map((e: any) => SuperfluidDelegationRecord.fromJSON(e));
    return obj;
  },
  fromPartial(object: DeepPartial<SuperfluidDelegationsByValidatorDenomResponse>): SuperfluidDelegationsByValidatorDenomResponse {
    const message = createBaseSuperfluidDelegationsByValidatorDenomResponse();
    message.superfluidDelegationRecords = object.superfluidDelegationRecords?.map(e => SuperfluidDelegationRecord.fromPartial(e)) || [];
    return message;
  },
  fromSDK(object: SuperfluidDelegationsByValidatorDenomResponseSDKType): SuperfluidDelegationsByValidatorDenomResponse {
    return {
      superfluidDelegationRecords: Array.isArray(object?.superfluid_delegation_records) ? object.superfluid_delegation_records.map((e: any) => SuperfluidDelegationRecord.fromSDK(e)) : []
    };
  },
  toSDK(message: SuperfluidDelegationsByValidatorDenomResponse): SuperfluidDelegationsByValidatorDenomResponseSDKType {
    const obj: any = {};
    if (message.superfluidDelegationRecords) {
      obj.superfluid_delegation_records = message.superfluidDelegationRecords.map(e => e ? SuperfluidDelegationRecord.toSDK(e) : undefined);
    } else {
      obj.superfluid_delegation_records = [];
    }
    return obj;
  },
  fromAmino(object: SuperfluidDelegationsByValidatorDenomResponseAmino): SuperfluidDelegationsByValidatorDenomResponse {
    const message = createBaseSuperfluidDelegationsByValidatorDenomResponse();
    message.superfluidDelegationRecords = object.superfluid_delegation_records?.map(e => SuperfluidDelegationRecord.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: SuperfluidDelegationsByValidatorDenomResponse, useInterfaces: boolean = true): SuperfluidDelegationsByValidatorDenomResponseAmino {
    const obj: any = {};
    if (message.superfluidDelegationRecords) {
      obj.superfluid_delegation_records = message.superfluidDelegationRecords.map(e => e ? SuperfluidDelegationRecord.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.superfluid_delegation_records = message.superfluidDelegationRecords;
    }
    return obj;
  },
  fromProtoMsg(message: SuperfluidDelegationsByValidatorDenomResponseProtoMsg, useInterfaces: boolean = true): SuperfluidDelegationsByValidatorDenomResponse {
    return SuperfluidDelegationsByValidatorDenomResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: SuperfluidDelegationsByValidatorDenomResponse): Uint8Array {
    return SuperfluidDelegationsByValidatorDenomResponse.encode(message).finish();
  },
  toProtoMsg(message: SuperfluidDelegationsByValidatorDenomResponse): SuperfluidDelegationsByValidatorDenomResponseProtoMsg {
    return {
      typeUrl: "/osmosis.superfluid.SuperfluidDelegationsByValidatorDenomResponse",
      value: SuperfluidDelegationsByValidatorDenomResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(SuperfluidDelegationsByValidatorDenomResponse.typeUrl)) {
      return;
    }
    SuperfluidDelegationRecord.registerTypeUrl();
  }
};
function createBaseEstimateSuperfluidDelegatedAmountByValidatorDenomRequest(): EstimateSuperfluidDelegatedAmountByValidatorDenomRequest {
  return {
    validatorAddress: "",
    denom: ""
  };
}
/**
 * @name EstimateSuperfluidDelegatedAmountByValidatorDenomRequest
 * @package osmosis.superfluid
 * @see proto type: osmosis.superfluid.EstimateSuperfluidDelegatedAmountByValidatorDenomRequest
 */
export const EstimateSuperfluidDelegatedAmountByValidatorDenomRequest = {
  typeUrl: "/osmosis.superfluid.EstimateSuperfluidDelegatedAmountByValidatorDenomRequest",
  aminoType: "osmosis/estimate-superfluid-delegated-amount-by-validator-denom-request",
  is(o: any): o is EstimateSuperfluidDelegatedAmountByValidatorDenomRequest {
    return o && (o.$typeUrl === EstimateSuperfluidDelegatedAmountByValidatorDenomRequest.typeUrl || typeof o.validatorAddress === "string" && typeof o.denom === "string");
  },
  isSDK(o: any): o is EstimateSuperfluidDelegatedAmountByValidatorDenomRequestSDKType {
    return o && (o.$typeUrl === EstimateSuperfluidDelegatedAmountByValidatorDenomRequest.typeUrl || typeof o.validator_address === "string" && typeof o.denom === "string");
  },
  isAmino(o: any): o is EstimateSuperfluidDelegatedAmountByValidatorDenomRequestAmino {
    return o && (o.$typeUrl === EstimateSuperfluidDelegatedAmountByValidatorDenomRequest.typeUrl || typeof o.validator_address === "string" && typeof o.denom === "string");
  },
  encode(message: EstimateSuperfluidDelegatedAmountByValidatorDenomRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.validatorAddress !== "") {
      writer.uint32(10).string(message.validatorAddress);
    }
    if (message.denom !== "") {
      writer.uint32(18).string(message.denom);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): EstimateSuperfluidDelegatedAmountByValidatorDenomRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEstimateSuperfluidDelegatedAmountByValidatorDenomRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.validatorAddress = reader.string();
          break;
        case 2:
          message.denom = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): EstimateSuperfluidDelegatedAmountByValidatorDenomRequest {
    const obj = createBaseEstimateSuperfluidDelegatedAmountByValidatorDenomRequest();
    if (isSet(object.validatorAddress)) obj.validatorAddress = String(object.validatorAddress);
    if (isSet(object.denom)) obj.denom = String(object.denom);
    return obj;
  },
  fromPartial(object: DeepPartial<EstimateSuperfluidDelegatedAmountByValidatorDenomRequest>): EstimateSuperfluidDelegatedAmountByValidatorDenomRequest {
    const message = createBaseEstimateSuperfluidDelegatedAmountByValidatorDenomRequest();
    message.validatorAddress = object.validatorAddress ?? "";
    message.denom = object.denom ?? "";
    return message;
  },
  fromSDK(object: EstimateSuperfluidDelegatedAmountByValidatorDenomRequestSDKType): EstimateSuperfluidDelegatedAmountByValidatorDenomRequest {
    return {
      validatorAddress: object?.validator_address,
      denom: object?.denom
    };
  },
  toSDK(message: EstimateSuperfluidDelegatedAmountByValidatorDenomRequest): EstimateSuperfluidDelegatedAmountByValidatorDenomRequestSDKType {
    const obj: any = {};
    obj.validator_address = message.validatorAddress;
    obj.denom = message.denom;
    return obj;
  },
  fromAmino(object: EstimateSuperfluidDelegatedAmountByValidatorDenomRequestAmino): EstimateSuperfluidDelegatedAmountByValidatorDenomRequest {
    const message = createBaseEstimateSuperfluidDelegatedAmountByValidatorDenomRequest();
    if (object.validator_address !== undefined && object.validator_address !== null) {
      message.validatorAddress = object.validator_address;
    }
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    }
    return message;
  },
  toAmino(message: EstimateSuperfluidDelegatedAmountByValidatorDenomRequest, useInterfaces: boolean = true): EstimateSuperfluidDelegatedAmountByValidatorDenomRequestAmino {
    const obj: any = {};
    obj.validator_address = message.validatorAddress === "" ? undefined : message.validatorAddress;
    obj.denom = message.denom === "" ? undefined : message.denom;
    return obj;
  },
  fromProtoMsg(message: EstimateSuperfluidDelegatedAmountByValidatorDenomRequestProtoMsg, useInterfaces: boolean = true): EstimateSuperfluidDelegatedAmountByValidatorDenomRequest {
    return EstimateSuperfluidDelegatedAmountByValidatorDenomRequest.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: EstimateSuperfluidDelegatedAmountByValidatorDenomRequest): Uint8Array {
    return EstimateSuperfluidDelegatedAmountByValidatorDenomRequest.encode(message).finish();
  },
  toProtoMsg(message: EstimateSuperfluidDelegatedAmountByValidatorDenomRequest): EstimateSuperfluidDelegatedAmountByValidatorDenomRequestProtoMsg {
    return {
      typeUrl: "/osmosis.superfluid.EstimateSuperfluidDelegatedAmountByValidatorDenomRequest",
      value: EstimateSuperfluidDelegatedAmountByValidatorDenomRequest.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseEstimateSuperfluidDelegatedAmountByValidatorDenomResponse(): EstimateSuperfluidDelegatedAmountByValidatorDenomResponse {
  return {
    totalDelegatedCoins: []
  };
}
/**
 * @name EstimateSuperfluidDelegatedAmountByValidatorDenomResponse
 * @package osmosis.superfluid
 * @see proto type: osmosis.superfluid.EstimateSuperfluidDelegatedAmountByValidatorDenomResponse
 */
export const EstimateSuperfluidDelegatedAmountByValidatorDenomResponse = {
  typeUrl: "/osmosis.superfluid.EstimateSuperfluidDelegatedAmountByValidatorDenomResponse",
  aminoType: "osmosis/estimate-superfluid-delegated-amount-by-validator-denom-response",
  is(o: any): o is EstimateSuperfluidDelegatedAmountByValidatorDenomResponse {
    return o && (o.$typeUrl === EstimateSuperfluidDelegatedAmountByValidatorDenomResponse.typeUrl || Array.isArray(o.totalDelegatedCoins) && (!o.totalDelegatedCoins.length || Coin.is(o.totalDelegatedCoins[0])));
  },
  isSDK(o: any): o is EstimateSuperfluidDelegatedAmountByValidatorDenomResponseSDKType {
    return o && (o.$typeUrl === EstimateSuperfluidDelegatedAmountByValidatorDenomResponse.typeUrl || Array.isArray(o.total_delegated_coins) && (!o.total_delegated_coins.length || Coin.isSDK(o.total_delegated_coins[0])));
  },
  isAmino(o: any): o is EstimateSuperfluidDelegatedAmountByValidatorDenomResponseAmino {
    return o && (o.$typeUrl === EstimateSuperfluidDelegatedAmountByValidatorDenomResponse.typeUrl || Array.isArray(o.total_delegated_coins) && (!o.total_delegated_coins.length || Coin.isAmino(o.total_delegated_coins[0])));
  },
  encode(message: EstimateSuperfluidDelegatedAmountByValidatorDenomResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.totalDelegatedCoins) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): EstimateSuperfluidDelegatedAmountByValidatorDenomResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEstimateSuperfluidDelegatedAmountByValidatorDenomResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.totalDelegatedCoins.push(Coin.decode(reader, reader.uint32(), useInterfaces));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): EstimateSuperfluidDelegatedAmountByValidatorDenomResponse {
    const obj = createBaseEstimateSuperfluidDelegatedAmountByValidatorDenomResponse();
    if (Array.isArray(object?.totalDelegatedCoins)) obj.totalDelegatedCoins = object.totalDelegatedCoins.map((e: any) => Coin.fromJSON(e));
    return obj;
  },
  fromPartial(object: DeepPartial<EstimateSuperfluidDelegatedAmountByValidatorDenomResponse>): EstimateSuperfluidDelegatedAmountByValidatorDenomResponse {
    const message = createBaseEstimateSuperfluidDelegatedAmountByValidatorDenomResponse();
    message.totalDelegatedCoins = object.totalDelegatedCoins?.map(e => Coin.fromPartial(e)) || [];
    return message;
  },
  fromSDK(object: EstimateSuperfluidDelegatedAmountByValidatorDenomResponseSDKType): EstimateSuperfluidDelegatedAmountByValidatorDenomResponse {
    return {
      totalDelegatedCoins: Array.isArray(object?.total_delegated_coins) ? object.total_delegated_coins.map((e: any) => Coin.fromSDK(e)) : []
    };
  },
  toSDK(message: EstimateSuperfluidDelegatedAmountByValidatorDenomResponse): EstimateSuperfluidDelegatedAmountByValidatorDenomResponseSDKType {
    const obj: any = {};
    if (message.totalDelegatedCoins) {
      obj.total_delegated_coins = message.totalDelegatedCoins.map(e => e ? Coin.toSDK(e) : undefined);
    } else {
      obj.total_delegated_coins = [];
    }
    return obj;
  },
  fromAmino(object: EstimateSuperfluidDelegatedAmountByValidatorDenomResponseAmino): EstimateSuperfluidDelegatedAmountByValidatorDenomResponse {
    const message = createBaseEstimateSuperfluidDelegatedAmountByValidatorDenomResponse();
    message.totalDelegatedCoins = object.total_delegated_coins?.map(e => Coin.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: EstimateSuperfluidDelegatedAmountByValidatorDenomResponse, useInterfaces: boolean = true): EstimateSuperfluidDelegatedAmountByValidatorDenomResponseAmino {
    const obj: any = {};
    if (message.totalDelegatedCoins) {
      obj.total_delegated_coins = message.totalDelegatedCoins.map(e => e ? Coin.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.total_delegated_coins = message.totalDelegatedCoins;
    }
    return obj;
  },
  fromProtoMsg(message: EstimateSuperfluidDelegatedAmountByValidatorDenomResponseProtoMsg, useInterfaces: boolean = true): EstimateSuperfluidDelegatedAmountByValidatorDenomResponse {
    return EstimateSuperfluidDelegatedAmountByValidatorDenomResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: EstimateSuperfluidDelegatedAmountByValidatorDenomResponse): Uint8Array {
    return EstimateSuperfluidDelegatedAmountByValidatorDenomResponse.encode(message).finish();
  },
  toProtoMsg(message: EstimateSuperfluidDelegatedAmountByValidatorDenomResponse): EstimateSuperfluidDelegatedAmountByValidatorDenomResponseProtoMsg {
    return {
      typeUrl: "/osmosis.superfluid.EstimateSuperfluidDelegatedAmountByValidatorDenomResponse",
      value: EstimateSuperfluidDelegatedAmountByValidatorDenomResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(EstimateSuperfluidDelegatedAmountByValidatorDenomResponse.typeUrl)) {
      return;
    }
    Coin.registerTypeUrl();
  }
};
function createBaseQueryTotalDelegationByDelegatorRequest(): QueryTotalDelegationByDelegatorRequest {
  return {
    delegatorAddress: ""
  };
}
/**
 * @name QueryTotalDelegationByDelegatorRequest
 * @package osmosis.superfluid
 * @see proto type: osmosis.superfluid.QueryTotalDelegationByDelegatorRequest
 */
export const QueryTotalDelegationByDelegatorRequest = {
  typeUrl: "/osmosis.superfluid.QueryTotalDelegationByDelegatorRequest",
  aminoType: "osmosis/query-total-delegation-by-delegator-request",
  is(o: any): o is QueryTotalDelegationByDelegatorRequest {
    return o && (o.$typeUrl === QueryTotalDelegationByDelegatorRequest.typeUrl || typeof o.delegatorAddress === "string");
  },
  isSDK(o: any): o is QueryTotalDelegationByDelegatorRequestSDKType {
    return o && (o.$typeUrl === QueryTotalDelegationByDelegatorRequest.typeUrl || typeof o.delegator_address === "string");
  },
  isAmino(o: any): o is QueryTotalDelegationByDelegatorRequestAmino {
    return o && (o.$typeUrl === QueryTotalDelegationByDelegatorRequest.typeUrl || typeof o.delegator_address === "string");
  },
  encode(message: QueryTotalDelegationByDelegatorRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.delegatorAddress !== "") {
      writer.uint32(10).string(message.delegatorAddress);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryTotalDelegationByDelegatorRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTotalDelegationByDelegatorRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegatorAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryTotalDelegationByDelegatorRequest {
    const obj = createBaseQueryTotalDelegationByDelegatorRequest();
    if (isSet(object.delegatorAddress)) obj.delegatorAddress = String(object.delegatorAddress);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryTotalDelegationByDelegatorRequest>): QueryTotalDelegationByDelegatorRequest {
    const message = createBaseQueryTotalDelegationByDelegatorRequest();
    message.delegatorAddress = object.delegatorAddress ?? "";
    return message;
  },
  fromSDK(object: QueryTotalDelegationByDelegatorRequestSDKType): QueryTotalDelegationByDelegatorRequest {
    return {
      delegatorAddress: object?.delegator_address
    };
  },
  toSDK(message: QueryTotalDelegationByDelegatorRequest): QueryTotalDelegationByDelegatorRequestSDKType {
    const obj: any = {};
    obj.delegator_address = message.delegatorAddress;
    return obj;
  },
  fromAmino(object: QueryTotalDelegationByDelegatorRequestAmino): QueryTotalDelegationByDelegatorRequest {
    const message = createBaseQueryTotalDelegationByDelegatorRequest();
    if (object.delegator_address !== undefined && object.delegator_address !== null) {
      message.delegatorAddress = object.delegator_address;
    }
    return message;
  },
  toAmino(message: QueryTotalDelegationByDelegatorRequest, useInterfaces: boolean = true): QueryTotalDelegationByDelegatorRequestAmino {
    const obj: any = {};
    obj.delegator_address = message.delegatorAddress === "" ? undefined : message.delegatorAddress;
    return obj;
  },
  fromProtoMsg(message: QueryTotalDelegationByDelegatorRequestProtoMsg, useInterfaces: boolean = true): QueryTotalDelegationByDelegatorRequest {
    return QueryTotalDelegationByDelegatorRequest.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryTotalDelegationByDelegatorRequest): Uint8Array {
    return QueryTotalDelegationByDelegatorRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryTotalDelegationByDelegatorRequest): QueryTotalDelegationByDelegatorRequestProtoMsg {
    return {
      typeUrl: "/osmosis.superfluid.QueryTotalDelegationByDelegatorRequest",
      value: QueryTotalDelegationByDelegatorRequest.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseQueryTotalDelegationByDelegatorResponse(): QueryTotalDelegationByDelegatorResponse {
  return {
    superfluidDelegationRecords: [],
    delegationResponse: [],
    totalDelegatedCoins: [],
    totalEquivalentStakedAmount: Coin.fromPartial({})
  };
}
/**
 * @name QueryTotalDelegationByDelegatorResponse
 * @package osmosis.superfluid
 * @see proto type: osmosis.superfluid.QueryTotalDelegationByDelegatorResponse
 */
export const QueryTotalDelegationByDelegatorResponse = {
  typeUrl: "/osmosis.superfluid.QueryTotalDelegationByDelegatorResponse",
  aminoType: "osmosis/query-total-delegation-by-delegator-response",
  is(o: any): o is QueryTotalDelegationByDelegatorResponse {
    return o && (o.$typeUrl === QueryTotalDelegationByDelegatorResponse.typeUrl || Array.isArray(o.superfluidDelegationRecords) && (!o.superfluidDelegationRecords.length || SuperfluidDelegationRecord.is(o.superfluidDelegationRecords[0])) && Array.isArray(o.delegationResponse) && (!o.delegationResponse.length || DelegationResponse.is(o.delegationResponse[0])) && Array.isArray(o.totalDelegatedCoins) && (!o.totalDelegatedCoins.length || Coin.is(o.totalDelegatedCoins[0])) && Coin.is(o.totalEquivalentStakedAmount));
  },
  isSDK(o: any): o is QueryTotalDelegationByDelegatorResponseSDKType {
    return o && (o.$typeUrl === QueryTotalDelegationByDelegatorResponse.typeUrl || Array.isArray(o.superfluid_delegation_records) && (!o.superfluid_delegation_records.length || SuperfluidDelegationRecord.isSDK(o.superfluid_delegation_records[0])) && Array.isArray(o.delegation_response) && (!o.delegation_response.length || DelegationResponse.isSDK(o.delegation_response[0])) && Array.isArray(o.total_delegated_coins) && (!o.total_delegated_coins.length || Coin.isSDK(o.total_delegated_coins[0])) && Coin.isSDK(o.total_equivalent_staked_amount));
  },
  isAmino(o: any): o is QueryTotalDelegationByDelegatorResponseAmino {
    return o && (o.$typeUrl === QueryTotalDelegationByDelegatorResponse.typeUrl || Array.isArray(o.superfluid_delegation_records) && (!o.superfluid_delegation_records.length || SuperfluidDelegationRecord.isAmino(o.superfluid_delegation_records[0])) && Array.isArray(o.delegation_response) && (!o.delegation_response.length || DelegationResponse.isAmino(o.delegation_response[0])) && Array.isArray(o.total_delegated_coins) && (!o.total_delegated_coins.length || Coin.isAmino(o.total_delegated_coins[0])) && Coin.isAmino(o.total_equivalent_staked_amount));
  },
  encode(message: QueryTotalDelegationByDelegatorResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.superfluidDelegationRecords) {
      SuperfluidDelegationRecord.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.delegationResponse) {
      DelegationResponse.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.totalDelegatedCoins) {
      Coin.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (message.totalEquivalentStakedAmount !== undefined) {
      Coin.encode(message.totalEquivalentStakedAmount, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryTotalDelegationByDelegatorResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTotalDelegationByDelegatorResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.superfluidDelegationRecords.push(SuperfluidDelegationRecord.decode(reader, reader.uint32(), useInterfaces));
          break;
        case 2:
          message.delegationResponse.push(DelegationResponse.decode(reader, reader.uint32(), useInterfaces));
          break;
        case 3:
          message.totalDelegatedCoins.push(Coin.decode(reader, reader.uint32(), useInterfaces));
          break;
        case 4:
          message.totalEquivalentStakedAmount = Coin.decode(reader, reader.uint32(), useInterfaces);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryTotalDelegationByDelegatorResponse {
    const obj = createBaseQueryTotalDelegationByDelegatorResponse();
    if (Array.isArray(object?.superfluidDelegationRecords)) obj.superfluidDelegationRecords = object.superfluidDelegationRecords.map((e: any) => SuperfluidDelegationRecord.fromJSON(e));
    if (Array.isArray(object?.delegationResponse)) obj.delegationResponse = object.delegationResponse.map((e: any) => DelegationResponse.fromJSON(e));
    if (Array.isArray(object?.totalDelegatedCoins)) obj.totalDelegatedCoins = object.totalDelegatedCoins.map((e: any) => Coin.fromJSON(e));
    if (isSet(object.totalEquivalentStakedAmount)) obj.totalEquivalentStakedAmount = Coin.fromJSON(object.totalEquivalentStakedAmount);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryTotalDelegationByDelegatorResponse>): QueryTotalDelegationByDelegatorResponse {
    const message = createBaseQueryTotalDelegationByDelegatorResponse();
    message.superfluidDelegationRecords = object.superfluidDelegationRecords?.map(e => SuperfluidDelegationRecord.fromPartial(e)) || [];
    message.delegationResponse = object.delegationResponse?.map(e => DelegationResponse.fromPartial(e)) || [];
    message.totalDelegatedCoins = object.totalDelegatedCoins?.map(e => Coin.fromPartial(e)) || [];
    if (object.totalEquivalentStakedAmount !== undefined && object.totalEquivalentStakedAmount !== null) {
      message.totalEquivalentStakedAmount = Coin.fromPartial(object.totalEquivalentStakedAmount);
    }
    return message;
  },
  fromSDK(object: QueryTotalDelegationByDelegatorResponseSDKType): QueryTotalDelegationByDelegatorResponse {
    return {
      superfluidDelegationRecords: Array.isArray(object?.superfluid_delegation_records) ? object.superfluid_delegation_records.map((e: any) => SuperfluidDelegationRecord.fromSDK(e)) : [],
      delegationResponse: Array.isArray(object?.delegation_response) ? object.delegation_response.map((e: any) => DelegationResponse.fromSDK(e)) : [],
      totalDelegatedCoins: Array.isArray(object?.total_delegated_coins) ? object.total_delegated_coins.map((e: any) => Coin.fromSDK(e)) : [],
      totalEquivalentStakedAmount: object.total_equivalent_staked_amount ? Coin.fromSDK(object.total_equivalent_staked_amount) : undefined
    };
  },
  toSDK(message: QueryTotalDelegationByDelegatorResponse): QueryTotalDelegationByDelegatorResponseSDKType {
    const obj: any = {};
    if (message.superfluidDelegationRecords) {
      obj.superfluid_delegation_records = message.superfluidDelegationRecords.map(e => e ? SuperfluidDelegationRecord.toSDK(e) : undefined);
    } else {
      obj.superfluid_delegation_records = [];
    }
    if (message.delegationResponse) {
      obj.delegation_response = message.delegationResponse.map(e => e ? DelegationResponse.toSDK(e) : undefined);
    } else {
      obj.delegation_response = [];
    }
    if (message.totalDelegatedCoins) {
      obj.total_delegated_coins = message.totalDelegatedCoins.map(e => e ? Coin.toSDK(e) : undefined);
    } else {
      obj.total_delegated_coins = [];
    }
    message.totalEquivalentStakedAmount !== undefined && (obj.total_equivalent_staked_amount = message.totalEquivalentStakedAmount ? Coin.toSDK(message.totalEquivalentStakedAmount) : undefined);
    return obj;
  },
  fromAmino(object: QueryTotalDelegationByDelegatorResponseAmino): QueryTotalDelegationByDelegatorResponse {
    const message = createBaseQueryTotalDelegationByDelegatorResponse();
    message.superfluidDelegationRecords = object.superfluid_delegation_records?.map(e => SuperfluidDelegationRecord.fromAmino(e)) || [];
    message.delegationResponse = object.delegation_response?.map(e => DelegationResponse.fromAmino(e)) || [];
    message.totalDelegatedCoins = object.total_delegated_coins?.map(e => Coin.fromAmino(e)) || [];
    if (object.total_equivalent_staked_amount !== undefined && object.total_equivalent_staked_amount !== null) {
      message.totalEquivalentStakedAmount = Coin.fromAmino(object.total_equivalent_staked_amount);
    }
    return message;
  },
  toAmino(message: QueryTotalDelegationByDelegatorResponse, useInterfaces: boolean = true): QueryTotalDelegationByDelegatorResponseAmino {
    const obj: any = {};
    if (message.superfluidDelegationRecords) {
      obj.superfluid_delegation_records = message.superfluidDelegationRecords.map(e => e ? SuperfluidDelegationRecord.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.superfluid_delegation_records = message.superfluidDelegationRecords;
    }
    if (message.delegationResponse) {
      obj.delegation_response = message.delegationResponse.map(e => e ? DelegationResponse.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.delegation_response = message.delegationResponse;
    }
    if (message.totalDelegatedCoins) {
      obj.total_delegated_coins = message.totalDelegatedCoins.map(e => e ? Coin.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.total_delegated_coins = message.totalDelegatedCoins;
    }
    obj.total_equivalent_staked_amount = message.totalEquivalentStakedAmount ? Coin.toAmino(message.totalEquivalentStakedAmount, useInterfaces) : undefined;
    return obj;
  },
  fromProtoMsg(message: QueryTotalDelegationByDelegatorResponseProtoMsg, useInterfaces: boolean = true): QueryTotalDelegationByDelegatorResponse {
    return QueryTotalDelegationByDelegatorResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryTotalDelegationByDelegatorResponse): Uint8Array {
    return QueryTotalDelegationByDelegatorResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryTotalDelegationByDelegatorResponse): QueryTotalDelegationByDelegatorResponseProtoMsg {
    return {
      typeUrl: "/osmosis.superfluid.QueryTotalDelegationByDelegatorResponse",
      value: QueryTotalDelegationByDelegatorResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(QueryTotalDelegationByDelegatorResponse.typeUrl)) {
      return;
    }
    SuperfluidDelegationRecord.registerTypeUrl();
    DelegationResponse.registerTypeUrl();
    Coin.registerTypeUrl();
  }
};
function createBaseQueryUnpoolWhitelistRequest(): QueryUnpoolWhitelistRequest {
  return {};
}
/**
 * @name QueryUnpoolWhitelistRequest
 * @package osmosis.superfluid
 * @see proto type: osmosis.superfluid.QueryUnpoolWhitelistRequest
 */
export const QueryUnpoolWhitelistRequest = {
  typeUrl: "/osmosis.superfluid.QueryUnpoolWhitelistRequest",
  aminoType: "osmosis/query-unpool-whitelist-request",
  is(o: any): o is QueryUnpoolWhitelistRequest {
    return o && o.$typeUrl === QueryUnpoolWhitelistRequest.typeUrl;
  },
  isSDK(o: any): o is QueryUnpoolWhitelistRequestSDKType {
    return o && o.$typeUrl === QueryUnpoolWhitelistRequest.typeUrl;
  },
  isAmino(o: any): o is QueryUnpoolWhitelistRequestAmino {
    return o && o.$typeUrl === QueryUnpoolWhitelistRequest.typeUrl;
  },
  encode(_: QueryUnpoolWhitelistRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryUnpoolWhitelistRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryUnpoolWhitelistRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_: any): QueryUnpoolWhitelistRequest {
    const obj = createBaseQueryUnpoolWhitelistRequest();
    return obj;
  },
  fromPartial(_: DeepPartial<QueryUnpoolWhitelistRequest>): QueryUnpoolWhitelistRequest {
    const message = createBaseQueryUnpoolWhitelistRequest();
    return message;
  },
  fromSDK(_: QueryUnpoolWhitelistRequestSDKType): QueryUnpoolWhitelistRequest {
    return {};
  },
  toSDK(_: QueryUnpoolWhitelistRequest): QueryUnpoolWhitelistRequestSDKType {
    const obj: any = {};
    return obj;
  },
  fromAmino(_: QueryUnpoolWhitelistRequestAmino): QueryUnpoolWhitelistRequest {
    const message = createBaseQueryUnpoolWhitelistRequest();
    return message;
  },
  toAmino(_: QueryUnpoolWhitelistRequest, useInterfaces: boolean = true): QueryUnpoolWhitelistRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromProtoMsg(message: QueryUnpoolWhitelistRequestProtoMsg, useInterfaces: boolean = true): QueryUnpoolWhitelistRequest {
    return QueryUnpoolWhitelistRequest.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryUnpoolWhitelistRequest): Uint8Array {
    return QueryUnpoolWhitelistRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryUnpoolWhitelistRequest): QueryUnpoolWhitelistRequestProtoMsg {
    return {
      typeUrl: "/osmosis.superfluid.QueryUnpoolWhitelistRequest",
      value: QueryUnpoolWhitelistRequest.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseQueryUnpoolWhitelistResponse(): QueryUnpoolWhitelistResponse {
  return {
    poolIds: []
  };
}
/**
 * @name QueryUnpoolWhitelistResponse
 * @package osmosis.superfluid
 * @see proto type: osmosis.superfluid.QueryUnpoolWhitelistResponse
 */
export const QueryUnpoolWhitelistResponse = {
  typeUrl: "/osmosis.superfluid.QueryUnpoolWhitelistResponse",
  aminoType: "osmosis/query-unpool-whitelist-response",
  is(o: any): o is QueryUnpoolWhitelistResponse {
    return o && (o.$typeUrl === QueryUnpoolWhitelistResponse.typeUrl || Array.isArray(o.poolIds) && (!o.poolIds.length || typeof o.poolIds[0] === "bigint"));
  },
  isSDK(o: any): o is QueryUnpoolWhitelistResponseSDKType {
    return o && (o.$typeUrl === QueryUnpoolWhitelistResponse.typeUrl || Array.isArray(o.pool_ids) && (!o.pool_ids.length || typeof o.pool_ids[0] === "bigint"));
  },
  isAmino(o: any): o is QueryUnpoolWhitelistResponseAmino {
    return o && (o.$typeUrl === QueryUnpoolWhitelistResponse.typeUrl || Array.isArray(o.pool_ids) && (!o.pool_ids.length || typeof o.pool_ids[0] === "bigint"));
  },
  encode(message: QueryUnpoolWhitelistResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    writer.uint32(10).fork();
    for (const v of message.poolIds) {
      writer.uint64(v);
    }
    writer.ldelim();
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryUnpoolWhitelistResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryUnpoolWhitelistResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.poolIds.push(reader.uint64());
            }
          } else {
            message.poolIds.push(reader.uint64());
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryUnpoolWhitelistResponse {
    const obj = createBaseQueryUnpoolWhitelistResponse();
    if (Array.isArray(object?.poolIds)) obj.poolIds = object.poolIds.map((e: any) => BigInt(e.toString()));
    return obj;
  },
  fromPartial(object: DeepPartial<QueryUnpoolWhitelistResponse>): QueryUnpoolWhitelistResponse {
    const message = createBaseQueryUnpoolWhitelistResponse();
    message.poolIds = object.poolIds?.map(e => BigInt(e.toString())) || [];
    return message;
  },
  fromSDK(object: QueryUnpoolWhitelistResponseSDKType): QueryUnpoolWhitelistResponse {
    return {
      poolIds: Array.isArray(object?.pool_ids) ? object.pool_ids.map((e: any) => e) : []
    };
  },
  toSDK(message: QueryUnpoolWhitelistResponse): QueryUnpoolWhitelistResponseSDKType {
    const obj: any = {};
    if (message.poolIds) {
      obj.pool_ids = message.poolIds.map(e => e);
    } else {
      obj.pool_ids = [];
    }
    return obj;
  },
  fromAmino(object: QueryUnpoolWhitelistResponseAmino): QueryUnpoolWhitelistResponse {
    const message = createBaseQueryUnpoolWhitelistResponse();
    message.poolIds = object.pool_ids?.map(e => BigInt(e)) || [];
    return message;
  },
  toAmino(message: QueryUnpoolWhitelistResponse, useInterfaces: boolean = true): QueryUnpoolWhitelistResponseAmino {
    const obj: any = {};
    if (message.poolIds) {
      obj.pool_ids = message.poolIds.map(e => e.toString());
    } else {
      obj.pool_ids = message.poolIds;
    }
    return obj;
  },
  fromProtoMsg(message: QueryUnpoolWhitelistResponseProtoMsg, useInterfaces: boolean = true): QueryUnpoolWhitelistResponse {
    return QueryUnpoolWhitelistResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryUnpoolWhitelistResponse): Uint8Array {
    return QueryUnpoolWhitelistResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryUnpoolWhitelistResponse): QueryUnpoolWhitelistResponseProtoMsg {
    return {
      typeUrl: "/osmosis.superfluid.QueryUnpoolWhitelistResponse",
      value: QueryUnpoolWhitelistResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};