import { buildTx } from "../../../helper-func-types";
import { MsgCreateVestingAccount, MsgCreatePermanentLockedAccount, MsgCreatePeriodicVestingAccount } from "./tx";
/**
 * CreateVestingAccount defines a method that enables creating a vesting
 * account.
 * @name createVestingAccount
 * @package cosmos.vesting.v1beta1
 * @see proto service: cosmos.vesting.v1beta1.CreateVestingAccount
 */
export const createVestingAccount = buildTx<MsgCreateVestingAccount>({
  msg: MsgCreateVestingAccount
});
/**
 * CreatePermanentLockedAccount defines a method that enables creating a permanent
 * locked account.
 * @name createPermanentLockedAccount
 * @package cosmos.vesting.v1beta1
 * @see proto service: cosmos.vesting.v1beta1.CreatePermanentLockedAccount
 */
export const createPermanentLockedAccount = buildTx<MsgCreatePermanentLockedAccount>({
  msg: MsgCreatePermanentLockedAccount
});
/**
 * CreatePeriodicVestingAccount defines a method that enables creating a
 * periodic vesting account.
 * @name createPeriodicVestingAccount
 * @package cosmos.vesting.v1beta1
 * @see proto service: cosmos.vesting.v1beta1.CreatePeriodicVestingAccount
 */
export const createPeriodicVestingAccount = buildTx<MsgCreatePeriodicVestingAccount>({
  msg: MsgCreatePeriodicVestingAccount
});