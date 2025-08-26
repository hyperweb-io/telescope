import { Coin, CoinSDKType } from "../../cosmos/base/v1beta1/coin.js";
import { buildTx } from "../../helper-func-types.js";
import { MsgSuperfluidDelegate, MsgSuperfluidDelegateSDKType, MsgSuperfluidDelegateResponse, MsgSuperfluidDelegateResponseSDKType, MsgSuperfluidUndelegate, MsgSuperfluidUndelegateSDKType, MsgSuperfluidUndelegateResponse, MsgSuperfluidUndelegateResponseSDKType, MsgSuperfluidUnbondLock, MsgSuperfluidUnbondLockSDKType, MsgSuperfluidUnbondLockResponse, MsgSuperfluidUnbondLockResponseSDKType, MsgLockAndSuperfluidDelegate, MsgLockAndSuperfluidDelegateSDKType, MsgLockAndSuperfluidDelegateResponse, MsgLockAndSuperfluidDelegateResponseSDKType, MsgUnPoolWhitelistedPool, MsgUnPoolWhitelistedPoolSDKType, MsgUnPoolWhitelistedPoolResponse, MsgUnPoolWhitelistedPoolResponseSDKType } from "./tx.js";
/**
 * Execute superfluid delegation for a lockup
 * @name superfluidDelegate
 * @package osmosis.superfluid
 * @see proto service: osmosis.superfluid.SuperfluidDelegate
 */
export const superfluidDelegate = buildTx<MsgSuperfluidDelegate>({
  msg: MsgSuperfluidDelegate
});
/**
 * Execute superfluid undelegation for a lockup
 * @name superfluidUndelegate
 * @package osmosis.superfluid
 * @see proto service: osmosis.superfluid.SuperfluidUndelegate
 */
export const superfluidUndelegate = buildTx<MsgSuperfluidUndelegate>({
  msg: MsgSuperfluidUndelegate
});
/**
 * For a given lock that is being superfluidly undelegated,
 * also unbond the underlying lock.
 * @name superfluidUnbondLock
 * @package osmosis.superfluid
 * @see proto service: osmosis.superfluid.SuperfluidUnbondLock
 */
export const superfluidUnbondLock = buildTx<MsgSuperfluidUnbondLock>({
  msg: MsgSuperfluidUnbondLock
});
/**
 * Execute lockup lock and superfluid delegation in a single msg
 * @name lockAndSuperfluidDelegate
 * @package osmosis.superfluid
 * @see proto service: osmosis.superfluid.LockAndSuperfluidDelegate
 */
export const lockAndSuperfluidDelegate = buildTx<MsgLockAndSuperfluidDelegate>({
  msg: MsgLockAndSuperfluidDelegate
});
/**
 * @name unPoolWhitelistedPool
 * @package osmosis.superfluid
 * @see proto service: osmosis.superfluid.UnPoolWhitelistedPool
 */
export const unPoolWhitelistedPool = buildTx<MsgUnPoolWhitelistedPool>({
  msg: MsgUnPoolWhitelistedPool
});