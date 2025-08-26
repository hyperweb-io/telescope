import { buildTx } from "../../helper-func-types";
import { MsgSuperfluidDelegate, MsgSuperfluidUndelegate, MsgSuperfluidUnbondLock, MsgLockAndSuperfluidDelegate, MsgUnPoolWhitelistedPool } from "./tx";
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