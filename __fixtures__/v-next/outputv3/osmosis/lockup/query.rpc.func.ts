import { Timestamp, TimestampSDKType } from "../../google/protobuf/timestamp";
import { Duration, DurationSDKType } from "../../google/protobuf/duration";
import { Coin, CoinSDKType } from "../../cosmos/base/v1beta1/coin";
import { PeriodLock, PeriodLockSDKType, SyntheticLock, SyntheticLockSDKType } from "./lock";
import { Params, ParamsSDKType } from "./params";
import { EndpointOrRpc, buildQuery } from "../../helper-func-types";
import { ModuleBalanceRequest, ModuleBalanceRequestSDKType, ModuleBalanceResponse, ModuleBalanceResponseSDKType, ModuleLockedAmountRequest, ModuleLockedAmountRequestSDKType, ModuleLockedAmountResponse, ModuleLockedAmountResponseSDKType, AccountUnlockableCoinsRequest, AccountUnlockableCoinsRequestSDKType, AccountUnlockableCoinsResponse, AccountUnlockableCoinsResponseSDKType, AccountUnlockingCoinsRequest, AccountUnlockingCoinsRequestSDKType, AccountUnlockingCoinsResponse, AccountUnlockingCoinsResponseSDKType, AccountLockedCoinsRequest, AccountLockedCoinsRequestSDKType, AccountLockedCoinsResponse, AccountLockedCoinsResponseSDKType, AccountLockedPastTimeRequest, AccountLockedPastTimeRequestSDKType, AccountLockedPastTimeResponse, AccountLockedPastTimeResponseSDKType, AccountLockedPastTimeNotUnlockingOnlyRequest, AccountLockedPastTimeNotUnlockingOnlyRequestSDKType, AccountLockedPastTimeNotUnlockingOnlyResponse, AccountLockedPastTimeNotUnlockingOnlyResponseSDKType, AccountUnlockedBeforeTimeRequest, AccountUnlockedBeforeTimeRequestSDKType, AccountUnlockedBeforeTimeResponse, AccountUnlockedBeforeTimeResponseSDKType, AccountLockedPastTimeDenomRequest, AccountLockedPastTimeDenomRequestSDKType, AccountLockedPastTimeDenomResponse, AccountLockedPastTimeDenomResponseSDKType, LockedDenomRequest, LockedDenomRequestSDKType, LockedDenomResponse, LockedDenomResponseSDKType, LockedRequest, LockedRequestSDKType, LockedResponse, LockedResponseSDKType, SyntheticLockupsByLockupIDRequest, SyntheticLockupsByLockupIDRequestSDKType, SyntheticLockupsByLockupIDResponse, SyntheticLockupsByLockupIDResponseSDKType, AccountLockedLongerDurationRequest, AccountLockedLongerDurationRequestSDKType, AccountLockedLongerDurationResponse, AccountLockedLongerDurationResponseSDKType, AccountLockedDurationRequest, AccountLockedDurationRequestSDKType, AccountLockedDurationResponse, AccountLockedDurationResponseSDKType, AccountLockedLongerDurationNotUnlockingOnlyRequest, AccountLockedLongerDurationNotUnlockingOnlyRequestSDKType, AccountLockedLongerDurationNotUnlockingOnlyResponse, AccountLockedLongerDurationNotUnlockingOnlyResponseSDKType, AccountLockedLongerDurationDenomRequest, AccountLockedLongerDurationDenomRequestSDKType, AccountLockedLongerDurationDenomResponse, AccountLockedLongerDurationDenomResponseSDKType, QueryParamsRequest, QueryParamsRequestSDKType, QueryParamsResponse, QueryParamsResponseSDKType } from "./query";
/**
 * Return full balance of the module
 * @name getModuleBalance
 * @package osmosis.lockup
 * @see proto service: osmosis.lockup.ModuleBalance
 */
export const getModuleBalance = buildQuery<ModuleBalanceRequest, ModuleBalanceResponse>({
  encode: ModuleBalanceRequest.encode,
  decode: ModuleBalanceResponse.decode,
  service: "osmosis.lockup.Query",
  method: "ModuleBalance",
  deps: [ModuleBalanceRequest, ModuleBalanceResponse]
});
/**
 * Return locked balance of the module
 * @name getModuleLockedAmount
 * @package osmosis.lockup
 * @see proto service: osmosis.lockup.ModuleLockedAmount
 */
export const getModuleLockedAmount = buildQuery<ModuleLockedAmountRequest, ModuleLockedAmountResponse>({
  encode: ModuleLockedAmountRequest.encode,
  decode: ModuleLockedAmountResponse.decode,
  service: "osmosis.lockup.Query",
  method: "ModuleLockedAmount",
  deps: [ModuleLockedAmountRequest, ModuleLockedAmountResponse]
});
/**
 * Returns unlockable coins which are not withdrawn yet
 * @name getAccountUnlockableCoins
 * @package osmosis.lockup
 * @see proto service: osmosis.lockup.AccountUnlockableCoins
 */
export const getAccountUnlockableCoins = buildQuery<AccountUnlockableCoinsRequest, AccountUnlockableCoinsResponse>({
  encode: AccountUnlockableCoinsRequest.encode,
  decode: AccountUnlockableCoinsResponse.decode,
  service: "osmosis.lockup.Query",
  method: "AccountUnlockableCoins",
  deps: [AccountUnlockableCoinsRequest, AccountUnlockableCoinsResponse]
});
/**
 * Returns unlocking coins
 * @name getAccountUnlockingCoins
 * @package osmosis.lockup
 * @see proto service: osmosis.lockup.AccountUnlockingCoins
 */
export const getAccountUnlockingCoins = buildQuery<AccountUnlockingCoinsRequest, AccountUnlockingCoinsResponse>({
  encode: AccountUnlockingCoinsRequest.encode,
  decode: AccountUnlockingCoinsResponse.decode,
  service: "osmosis.lockup.Query",
  method: "AccountUnlockingCoins",
  deps: [AccountUnlockingCoinsRequest, AccountUnlockingCoinsResponse]
});
/**
 * Return a locked coins that can't be withdrawn
 * @name getAccountLockedCoins
 * @package osmosis.lockup
 * @see proto service: osmosis.lockup.AccountLockedCoins
 */
export const getAccountLockedCoins = buildQuery<AccountLockedCoinsRequest, AccountLockedCoinsResponse>({
  encode: AccountLockedCoinsRequest.encode,
  decode: AccountLockedCoinsResponse.decode,
  service: "osmosis.lockup.Query",
  method: "AccountLockedCoins",
  deps: [AccountLockedCoinsRequest, AccountLockedCoinsResponse]
});
/**
 * Returns locked records of an account with unlock time beyond timestamp
 * @name getAccountLockedPastTime
 * @package osmosis.lockup
 * @see proto service: osmosis.lockup.AccountLockedPastTime
 */
export const getAccountLockedPastTime = buildQuery<AccountLockedPastTimeRequest, AccountLockedPastTimeResponse>({
  encode: AccountLockedPastTimeRequest.encode,
  decode: AccountLockedPastTimeResponse.decode,
  service: "osmosis.lockup.Query",
  method: "AccountLockedPastTime",
  deps: [AccountLockedPastTimeRequest, AccountLockedPastTimeResponse]
});
/**
 * Returns locked records of an account with unlock time beyond timestamp
 * excluding tokens started unlocking
 * @name getAccountLockedPastTimeNotUnlockingOnly
 * @package osmosis.lockup
 * @see proto service: osmosis.lockup.AccountLockedPastTimeNotUnlockingOnly
 */
export const getAccountLockedPastTimeNotUnlockingOnly = buildQuery<AccountLockedPastTimeNotUnlockingOnlyRequest, AccountLockedPastTimeNotUnlockingOnlyResponse>({
  encode: AccountLockedPastTimeNotUnlockingOnlyRequest.encode,
  decode: AccountLockedPastTimeNotUnlockingOnlyResponse.decode,
  service: "osmosis.lockup.Query",
  method: "AccountLockedPastTimeNotUnlockingOnly",
  deps: [AccountLockedPastTimeNotUnlockingOnlyRequest, AccountLockedPastTimeNotUnlockingOnlyResponse]
});
/**
 * Returns unlocked records with unlock time before timestamp
 * @name getAccountUnlockedBeforeTime
 * @package osmosis.lockup
 * @see proto service: osmosis.lockup.AccountUnlockedBeforeTime
 */
export const getAccountUnlockedBeforeTime = buildQuery<AccountUnlockedBeforeTimeRequest, AccountUnlockedBeforeTimeResponse>({
  encode: AccountUnlockedBeforeTimeRequest.encode,
  decode: AccountUnlockedBeforeTimeResponse.decode,
  service: "osmosis.lockup.Query",
  method: "AccountUnlockedBeforeTime",
  deps: [AccountUnlockedBeforeTimeRequest, AccountUnlockedBeforeTimeResponse]
});
/**
 * Returns lock records by address, timestamp, denom
 * @name getAccountLockedPastTimeDenom
 * @package osmosis.lockup
 * @see proto service: osmosis.lockup.AccountLockedPastTimeDenom
 */
export const getAccountLockedPastTimeDenom = buildQuery<AccountLockedPastTimeDenomRequest, AccountLockedPastTimeDenomResponse>({
  encode: AccountLockedPastTimeDenomRequest.encode,
  decode: AccountLockedPastTimeDenomResponse.decode,
  service: "osmosis.lockup.Query",
  method: "AccountLockedPastTimeDenom",
  deps: [AccountLockedPastTimeDenomRequest, AccountLockedPastTimeDenomResponse]
});
/**
 * Returns total locked per denom with longer past given time
 * @name getLockedDenom
 * @package osmosis.lockup
 * @see proto service: osmosis.lockup.LockedDenom
 */
export const getLockedDenom = buildQuery<LockedDenomRequest, LockedDenomResponse>({
  encode: LockedDenomRequest.encode,
  decode: LockedDenomResponse.decode,
  service: "osmosis.lockup.Query",
  method: "LockedDenom",
  deps: [LockedDenomRequest, LockedDenomResponse]
});
/**
 * Returns lock record by id
 * @name getLockedByID
 * @package osmosis.lockup
 * @see proto service: osmosis.lockup.LockedByID
 */
export const getLockedByID = buildQuery<LockedRequest, LockedResponse>({
  encode: LockedRequest.encode,
  decode: LockedResponse.decode,
  service: "osmosis.lockup.Query",
  method: "LockedByID",
  deps: [LockedRequest, LockedResponse]
});
/**
 * Returns synthetic lockups by native lockup id
 * @name getSyntheticLockupsByLockupID
 * @package osmosis.lockup
 * @see proto service: osmosis.lockup.SyntheticLockupsByLockupID
 */
export const getSyntheticLockupsByLockupID = buildQuery<SyntheticLockupsByLockupIDRequest, SyntheticLockupsByLockupIDResponse>({
  encode: SyntheticLockupsByLockupIDRequest.encode,
  decode: SyntheticLockupsByLockupIDResponse.decode,
  service: "osmosis.lockup.Query",
  method: "SyntheticLockupsByLockupID",
  deps: [SyntheticLockupsByLockupIDRequest, SyntheticLockupsByLockupIDResponse]
});
/**
 * Returns account locked records with longer duration
 * @name getAccountLockedLongerDuration
 * @package osmosis.lockup
 * @see proto service: osmosis.lockup.AccountLockedLongerDuration
 */
export const getAccountLockedLongerDuration = buildQuery<AccountLockedLongerDurationRequest, AccountLockedLongerDurationResponse>({
  encode: AccountLockedLongerDurationRequest.encode,
  decode: AccountLockedLongerDurationResponse.decode,
  service: "osmosis.lockup.Query",
  method: "AccountLockedLongerDuration",
  deps: [AccountLockedLongerDurationRequest, AccountLockedLongerDurationResponse]
});
/**
 * Returns account locked records with a specific duration
 * @name getAccountLockedDuration
 * @package osmosis.lockup
 * @see proto service: osmosis.lockup.AccountLockedDuration
 */
export const getAccountLockedDuration = buildQuery<AccountLockedDurationRequest, AccountLockedDurationResponse>({
  encode: AccountLockedDurationRequest.encode,
  decode: AccountLockedDurationResponse.decode,
  service: "osmosis.lockup.Query",
  method: "AccountLockedDuration",
  deps: [AccountLockedDurationRequest, AccountLockedDurationResponse]
});
/**
 * Returns account locked records with longer duration excluding tokens
 * started unlocking
 * @name getAccountLockedLongerDurationNotUnlockingOnly
 * @package osmosis.lockup
 * @see proto service: osmosis.lockup.AccountLockedLongerDurationNotUnlockingOnly
 */
export const getAccountLockedLongerDurationNotUnlockingOnly = buildQuery<AccountLockedLongerDurationNotUnlockingOnlyRequest, AccountLockedLongerDurationNotUnlockingOnlyResponse>({
  encode: AccountLockedLongerDurationNotUnlockingOnlyRequest.encode,
  decode: AccountLockedLongerDurationNotUnlockingOnlyResponse.decode,
  service: "osmosis.lockup.Query",
  method: "AccountLockedLongerDurationNotUnlockingOnly",
  deps: [AccountLockedLongerDurationNotUnlockingOnlyRequest, AccountLockedLongerDurationNotUnlockingOnlyResponse]
});
/**
 * Returns account's locked records for a denom with longer duration
 * @name getAccountLockedLongerDurationDenom
 * @package osmosis.lockup
 * @see proto service: osmosis.lockup.AccountLockedLongerDurationDenom
 */
export const getAccountLockedLongerDurationDenom = buildQuery<AccountLockedLongerDurationDenomRequest, AccountLockedLongerDurationDenomResponse>({
  encode: AccountLockedLongerDurationDenomRequest.encode,
  decode: AccountLockedLongerDurationDenomResponse.decode,
  service: "osmosis.lockup.Query",
  method: "AccountLockedLongerDurationDenom",
  deps: [AccountLockedLongerDurationDenomRequest, AccountLockedLongerDurationDenomResponse]
});
/**
 * Params returns lockup params.
 * @name getParams
 * @package osmosis.lockup
 * @see proto service: osmosis.lockup.Params
 */
export const getParams = buildQuery<QueryParamsRequest, QueryParamsResponse>({
  encode: QueryParamsRequest.encode,
  decode: QueryParamsResponse.decode,
  service: "osmosis.lockup.Query",
  method: "Params",
  deps: [QueryParamsRequest, QueryParamsResponse]
});