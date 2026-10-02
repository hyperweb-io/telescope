import { buildUseMutation } from "../../../react-query";
import type { MsgCreateVestingAccount, MsgCreatePermanentLockedAccount, MsgCreatePeriodicVestingAccount } from "./tx";
import { createVestingAccount, createPermanentLockedAccount, createPeriodicVestingAccount } from "./tx.rpc.func";
/**
 * CreateVestingAccount defines a method that enables creating a vesting
 * account.
 * @name useCreateVestingAccount
 * @package cosmos.vesting.v1beta1
 * @see proto service: cosmos.vesting.v1beta1.CreateVestingAccount
 */
export const useCreateVestingAccount = buildUseMutation<MsgCreateVestingAccount, Error>({
  builderMutationFn: createVestingAccount
});
/**
 * CreatePermanentLockedAccount defines a method that enables creating a permanent
 * locked account.
 * @name useCreatePermanentLockedAccount
 * @package cosmos.vesting.v1beta1
 * @see proto service: cosmos.vesting.v1beta1.CreatePermanentLockedAccount
 */
export const useCreatePermanentLockedAccount = buildUseMutation<MsgCreatePermanentLockedAccount, Error>({
  builderMutationFn: createPermanentLockedAccount
});
/**
 * CreatePeriodicVestingAccount defines a method that enables creating a
 * periodic vesting account.
 * @name useCreatePeriodicVestingAccount
 * @package cosmos.vesting.v1beta1
 * @see proto service: cosmos.vesting.v1beta1.CreatePeriodicVestingAccount
 */
export const useCreatePeriodicVestingAccount = buildUseMutation<MsgCreatePeriodicVestingAccount, Error>({
  builderMutationFn: createPeriodicVestingAccount
});