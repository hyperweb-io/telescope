import { buildUseMutation } from "../../../react-query";
import type { MsgCreateClawbackVestingAccount, MsgClawback } from "./tx";
import { createClawbackVestingAccount, clawback } from "./tx.rpc.func";
/**
 * CreateClawbackVestingAccount creats a vesting account that is subject to
 * clawback and the configuration of vesting and lockup schedules.
 * @name useCreateClawbackVestingAccount
 * @package evmos.vesting.v1
 * @see proto service: evmos.vesting.v1.CreateClawbackVestingAccount
 */
export const useCreateClawbackVestingAccount = buildUseMutation<MsgCreateClawbackVestingAccount, Error>({
  builderMutationFn: createClawbackVestingAccount
});
/**
 * Clawback removes the unvested tokens from a ClawbackVestingAccount.
 * @name useClawback
 * @package evmos.vesting.v1
 * @see proto service: evmos.vesting.v1.Clawback
 */
export const useClawback = buildUseMutation<MsgClawback, Error>({
  builderMutationFn: clawback
});