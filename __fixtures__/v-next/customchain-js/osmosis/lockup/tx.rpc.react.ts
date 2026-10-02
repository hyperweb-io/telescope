import { buildUseMutation } from "../../react-query";
import type { MsgLockTokens, MsgBeginUnlockingAll, MsgBeginUnlocking, MsgExtendLockup, MsgForceUnlock } from "./tx";
import { lockTokens, beginUnlockingAll, beginUnlocking, extendLockup, forceUnlock } from "./tx.rpc.func";
/**
 * LockTokens lock tokens
 * @name useLockTokens
 * @package osmosis.lockup
 * @see proto service: osmosis.lockup.LockTokens
 */
export const useLockTokens = buildUseMutation<MsgLockTokens, Error>({
  builderMutationFn: lockTokens
});
/**
 * BeginUnlockingAll begin unlocking all tokens
 * @name useBeginUnlockingAll
 * @package osmosis.lockup
 * @see proto service: osmosis.lockup.BeginUnlockingAll
 */
export const useBeginUnlockingAll = buildUseMutation<MsgBeginUnlockingAll, Error>({
  builderMutationFn: beginUnlockingAll
});
/**
 * MsgBeginUnlocking begins unlocking tokens by lock ID
 * @name useBeginUnlocking
 * @package osmosis.lockup
 * @see proto service: osmosis.lockup.BeginUnlocking
 */
export const useBeginUnlocking = buildUseMutation<MsgBeginUnlocking, Error>({
  builderMutationFn: beginUnlocking
});
/**
 * MsgEditLockup edits the existing lockups by lock ID
 * @name useExtendLockup
 * @package osmosis.lockup
 * @see proto service: osmosis.lockup.ExtendLockup
 */
export const useExtendLockup = buildUseMutation<MsgExtendLockup, Error>({
  builderMutationFn: extendLockup
});
/**
 * @name useForceUnlock
 * @package osmosis.lockup
 * @see proto service: osmosis.lockup.ForceUnlock
 */
export const useForceUnlock = buildUseMutation<MsgForceUnlock, Error>({
  builderMutationFn: forceUnlock
});