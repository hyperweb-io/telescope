import { buildTx } from "../../helper-func-types";
import { MsgLockTokens, MsgBeginUnlockingAll, MsgBeginUnlocking, MsgExtendLockup, MsgForceUnlock } from "./tx";
/**
 * LockTokens lock tokens
 * @name lockTokens
 * @package osmosis.lockup
 * @see proto service: osmosis.lockup.LockTokens
 */
export const lockTokens = buildTx<MsgLockTokens>({
  msg: MsgLockTokens
});
/**
 * BeginUnlockingAll begin unlocking all tokens
 * @name beginUnlockingAll
 * @package osmosis.lockup
 * @see proto service: osmosis.lockup.BeginUnlockingAll
 */
export const beginUnlockingAll = buildTx<MsgBeginUnlockingAll>({
  msg: MsgBeginUnlockingAll
});
/**
 * MsgBeginUnlocking begins unlocking tokens by lock ID
 * @name beginUnlocking
 * @package osmosis.lockup
 * @see proto service: osmosis.lockup.BeginUnlocking
 */
export const beginUnlocking = buildTx<MsgBeginUnlocking>({
  msg: MsgBeginUnlocking
});
/**
 * MsgEditLockup edits the existing lockups by lock ID
 * @name extendLockup
 * @package osmosis.lockup
 * @see proto service: osmosis.lockup.ExtendLockup
 */
export const extendLockup = buildTx<MsgExtendLockup>({
  msg: MsgExtendLockup
});
/**
 * @name forceUnlock
 * @package osmosis.lockup
 * @see proto service: osmosis.lockup.ForceUnlock
 */
export const forceUnlock = buildTx<MsgForceUnlock>({
  msg: MsgForceUnlock
});