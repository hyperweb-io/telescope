import { buildUseQuery } from "../../react-query";
import type { ModuleBalanceRequest, ModuleBalanceResponse, ModuleLockedAmountRequest, ModuleLockedAmountResponse, AccountUnlockableCoinsRequest, AccountUnlockableCoinsResponse, AccountUnlockingCoinsRequest, AccountUnlockingCoinsResponse, AccountLockedCoinsRequest, AccountLockedCoinsResponse, AccountLockedPastTimeRequest, AccountLockedPastTimeResponse, AccountLockedPastTimeNotUnlockingOnlyRequest, AccountLockedPastTimeNotUnlockingOnlyResponse, AccountUnlockedBeforeTimeRequest, AccountUnlockedBeforeTimeResponse, AccountLockedPastTimeDenomRequest, AccountLockedPastTimeDenomResponse, LockedDenomRequest, LockedDenomResponse, LockedRequest, LockedResponse, SyntheticLockupsByLockupIDRequest, SyntheticLockupsByLockupIDResponse, AccountLockedLongerDurationRequest, AccountLockedLongerDurationResponse, AccountLockedDurationRequest, AccountLockedDurationResponse, AccountLockedLongerDurationNotUnlockingOnlyRequest, AccountLockedLongerDurationNotUnlockingOnlyResponse, AccountLockedLongerDurationDenomRequest, AccountLockedLongerDurationDenomResponse, QueryParamsRequest, QueryParamsResponse } from "./query";
import { getModuleBalance, getModuleLockedAmount, getAccountUnlockableCoins, getAccountUnlockingCoins, getAccountLockedCoins, getAccountLockedPastTime, getAccountLockedPastTimeNotUnlockingOnly, getAccountUnlockedBeforeTime, getAccountLockedPastTimeDenom, getLockedDenom, getLockedByID, getSyntheticLockupsByLockupID, getAccountLockedLongerDuration, getAccountLockedDuration, getAccountLockedLongerDurationNotUnlockingOnly, getAccountLockedLongerDurationDenom, getOsmosisLockupParams } from "./query.rpc.func";
/**
 * Return full balance of the module
 * @name useGetModuleBalance
 * @package osmosis.lockup
 * @see proto service: osmosis.lockup.ModuleBalance
 */
export const useGetModuleBalance = buildUseQuery<ModuleBalanceRequest, ModuleBalanceResponse>({
  builderQueryFn: getModuleBalance,
  queryKeyPrefix: "ModuleBalanceQuery"
});
/**
 * Return locked balance of the module
 * @name useGetModuleLockedAmount
 * @package osmosis.lockup
 * @see proto service: osmosis.lockup.ModuleLockedAmount
 */
export const useGetModuleLockedAmount = buildUseQuery<ModuleLockedAmountRequest, ModuleLockedAmountResponse>({
  builderQueryFn: getModuleLockedAmount,
  queryKeyPrefix: "ModuleLockedAmountQuery"
});
/**
 * Returns unlockable coins which are not withdrawn yet
 * @name useGetAccountUnlockableCoins
 * @package osmosis.lockup
 * @see proto service: osmosis.lockup.AccountUnlockableCoins
 */
export const useGetAccountUnlockableCoins = buildUseQuery<AccountUnlockableCoinsRequest, AccountUnlockableCoinsResponse>({
  builderQueryFn: getAccountUnlockableCoins,
  queryKeyPrefix: "AccountUnlockableCoinsQuery"
});
/**
 * Returns unlocking coins
 * @name useGetAccountUnlockingCoins
 * @package osmosis.lockup
 * @see proto service: osmosis.lockup.AccountUnlockingCoins
 */
export const useGetAccountUnlockingCoins = buildUseQuery<AccountUnlockingCoinsRequest, AccountUnlockingCoinsResponse>({
  builderQueryFn: getAccountUnlockingCoins,
  queryKeyPrefix: "AccountUnlockingCoinsQuery"
});
/**
 * Return a locked coins that can't be withdrawn
 * @name useGetAccountLockedCoins
 * @package osmosis.lockup
 * @see proto service: osmosis.lockup.AccountLockedCoins
 */
export const useGetAccountLockedCoins = buildUseQuery<AccountLockedCoinsRequest, AccountLockedCoinsResponse>({
  builderQueryFn: getAccountLockedCoins,
  queryKeyPrefix: "AccountLockedCoinsQuery"
});
/**
 * Returns locked records of an account with unlock time beyond timestamp
 * @name useGetAccountLockedPastTime
 * @package osmosis.lockup
 * @see proto service: osmosis.lockup.AccountLockedPastTime
 */
export const useGetAccountLockedPastTime = buildUseQuery<AccountLockedPastTimeRequest, AccountLockedPastTimeResponse>({
  builderQueryFn: getAccountLockedPastTime,
  queryKeyPrefix: "AccountLockedPastTimeQuery"
});
/**
 * Returns locked records of an account with unlock time beyond timestamp
 * excluding tokens started unlocking
 * @name useGetAccountLockedPastTimeNotUnlockingOnly
 * @package osmosis.lockup
 * @see proto service: osmosis.lockup.AccountLockedPastTimeNotUnlockingOnly
 */
export const useGetAccountLockedPastTimeNotUnlockingOnly = buildUseQuery<AccountLockedPastTimeNotUnlockingOnlyRequest, AccountLockedPastTimeNotUnlockingOnlyResponse>({
  builderQueryFn: getAccountLockedPastTimeNotUnlockingOnly,
  queryKeyPrefix: "AccountLockedPastTimeNotUnlockingOnlyQuery"
});
/**
 * Returns unlocked records with unlock time before timestamp
 * @name useGetAccountUnlockedBeforeTime
 * @package osmosis.lockup
 * @see proto service: osmosis.lockup.AccountUnlockedBeforeTime
 */
export const useGetAccountUnlockedBeforeTime = buildUseQuery<AccountUnlockedBeforeTimeRequest, AccountUnlockedBeforeTimeResponse>({
  builderQueryFn: getAccountUnlockedBeforeTime,
  queryKeyPrefix: "AccountUnlockedBeforeTimeQuery"
});
/**
 * Returns lock records by address, timestamp, denom
 * @name useGetAccountLockedPastTimeDenom
 * @package osmosis.lockup
 * @see proto service: osmosis.lockup.AccountLockedPastTimeDenom
 */
export const useGetAccountLockedPastTimeDenom = buildUseQuery<AccountLockedPastTimeDenomRequest, AccountLockedPastTimeDenomResponse>({
  builderQueryFn: getAccountLockedPastTimeDenom,
  queryKeyPrefix: "AccountLockedPastTimeDenomQuery"
});
/**
 * Returns total locked per denom with longer past given time
 * @name useGetLockedDenom
 * @package osmosis.lockup
 * @see proto service: osmosis.lockup.LockedDenom
 */
export const useGetLockedDenom = buildUseQuery<LockedDenomRequest, LockedDenomResponse>({
  builderQueryFn: getLockedDenom,
  queryKeyPrefix: "LockedDenomQuery"
});
/**
 * Returns lock record by id
 * @name useGetLockedByID
 * @package osmosis.lockup
 * @see proto service: osmosis.lockup.LockedByID
 */
export const useGetLockedByID = buildUseQuery<LockedRequest, LockedResponse>({
  builderQueryFn: getLockedByID,
  queryKeyPrefix: "LockedByIDQuery"
});
/**
 * Returns synthetic lockups by native lockup id
 * @name useGetSyntheticLockupsByLockupID
 * @package osmosis.lockup
 * @see proto service: osmosis.lockup.SyntheticLockupsByLockupID
 */
export const useGetSyntheticLockupsByLockupID = buildUseQuery<SyntheticLockupsByLockupIDRequest, SyntheticLockupsByLockupIDResponse>({
  builderQueryFn: getSyntheticLockupsByLockupID,
  queryKeyPrefix: "SyntheticLockupsByLockupIDQuery"
});
/**
 * Returns account locked records with longer duration
 * @name useGetAccountLockedLongerDuration
 * @package osmosis.lockup
 * @see proto service: osmosis.lockup.AccountLockedLongerDuration
 */
export const useGetAccountLockedLongerDuration = buildUseQuery<AccountLockedLongerDurationRequest, AccountLockedLongerDurationResponse>({
  builderQueryFn: getAccountLockedLongerDuration,
  queryKeyPrefix: "AccountLockedLongerDurationQuery"
});
/**
 * Returns account locked records with a specific duration
 * @name useGetAccountLockedDuration
 * @package osmosis.lockup
 * @see proto service: osmosis.lockup.AccountLockedDuration
 */
export const useGetAccountLockedDuration = buildUseQuery<AccountLockedDurationRequest, AccountLockedDurationResponse>({
  builderQueryFn: getAccountLockedDuration,
  queryKeyPrefix: "AccountLockedDurationQuery"
});
/**
 * Returns account locked records with longer duration excluding tokens
 * started unlocking
 * @name useGetAccountLockedLongerDurationNotUnlockingOnly
 * @package osmosis.lockup
 * @see proto service: osmosis.lockup.AccountLockedLongerDurationNotUnlockingOnly
 */
export const useGetAccountLockedLongerDurationNotUnlockingOnly = buildUseQuery<AccountLockedLongerDurationNotUnlockingOnlyRequest, AccountLockedLongerDurationNotUnlockingOnlyResponse>({
  builderQueryFn: getAccountLockedLongerDurationNotUnlockingOnly,
  queryKeyPrefix: "AccountLockedLongerDurationNotUnlockingOnlyQuery"
});
/**
 * Returns account's locked records for a denom with longer duration
 * @name useGetAccountLockedLongerDurationDenom
 * @package osmosis.lockup
 * @see proto service: osmosis.lockup.AccountLockedLongerDurationDenom
 */
export const useGetAccountLockedLongerDurationDenom = buildUseQuery<AccountLockedLongerDurationDenomRequest, AccountLockedLongerDurationDenomResponse>({
  builderQueryFn: getAccountLockedLongerDurationDenom,
  queryKeyPrefix: "AccountLockedLongerDurationDenomQuery"
});
/**
 * Params returns lockup params.
 * @name useGetOsmosisLockupParams
 * @package osmosis.lockup
 * @see proto service: osmosis.lockup.Params
 */
export const useGetOsmosisLockupParams = buildUseQuery<QueryParamsRequest, QueryParamsResponse>({
  builderQueryFn: getOsmosisLockupParams,
  queryKeyPrefix: "ParamsQuery"
});