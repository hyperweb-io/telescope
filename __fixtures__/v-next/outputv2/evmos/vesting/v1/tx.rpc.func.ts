import { buildTx } from "../../../helper-func-types";
import { MsgCreateClawbackVestingAccount, MsgClawback } from "./tx";
/**
 * CreateClawbackVestingAccount creats a vesting account that is subject to
 * clawback and the configuration of vesting and lockup schedules.
 * @name createClawbackVestingAccount
 * @package evmos.vesting.v1
 * @see proto service: evmos.vesting.v1.CreateClawbackVestingAccount
 */
export const createClawbackVestingAccount = buildTx<MsgCreateClawbackVestingAccount>({
  msg: MsgCreateClawbackVestingAccount
});
/**
 * Clawback removes the unvested tokens from a ClawbackVestingAccount.
 * @name clawback
 * @package evmos.vesting.v1
 * @see proto service: evmos.vesting.v1.Clawback
 */
export const clawback = buildTx<MsgClawback>({
  msg: MsgClawback
});