import { buildUseMutation } from "../../react-query";
import type { MsgSuperfluidDelegate, MsgSuperfluidUndelegate, MsgSuperfluidUnbondLock, MsgLockAndSuperfluidDelegate, MsgUnPoolWhitelistedPool } from "./tx";
import { superfluidDelegate, superfluidUndelegate, superfluidUnbondLock, lockAndSuperfluidDelegate, unPoolWhitelistedPool } from "./tx.rpc.func";
/**
 * Execute superfluid delegation for a lockup
 * @name useSuperfluidDelegate
 * @package osmosis.superfluid
 * @see proto service: osmosis.superfluid.SuperfluidDelegate
 */
export const useSuperfluidDelegate = buildUseMutation<MsgSuperfluidDelegate, Error>({
  builderMutationFn: superfluidDelegate
});
/**
 * Execute superfluid undelegation for a lockup
 * @name useSuperfluidUndelegate
 * @package osmosis.superfluid
 * @see proto service: osmosis.superfluid.SuperfluidUndelegate
 */
export const useSuperfluidUndelegate = buildUseMutation<MsgSuperfluidUndelegate, Error>({
  builderMutationFn: superfluidUndelegate
});
/**
 * For a given lock that is being superfluidly undelegated,
 * also unbond the underlying lock.
 * @name useSuperfluidUnbondLock
 * @package osmosis.superfluid
 * @see proto service: osmosis.superfluid.SuperfluidUnbondLock
 */
export const useSuperfluidUnbondLock = buildUseMutation<MsgSuperfluidUnbondLock, Error>({
  builderMutationFn: superfluidUnbondLock
});
/**
 * Execute lockup lock and superfluid delegation in a single msg
 * @name useLockAndSuperfluidDelegate
 * @package osmosis.superfluid
 * @see proto service: osmosis.superfluid.LockAndSuperfluidDelegate
 */
export const useLockAndSuperfluidDelegate = buildUseMutation<MsgLockAndSuperfluidDelegate, Error>({
  builderMutationFn: lockAndSuperfluidDelegate
});
/**
 * @name useUnPoolWhitelistedPool
 * @package osmosis.superfluid
 * @see proto service: osmosis.superfluid.UnPoolWhitelistedPool
 */
export const useUnPoolWhitelistedPool = buildUseMutation<MsgUnPoolWhitelistedPool, Error>({
  builderMutationFn: unPoolWhitelistedPool
});