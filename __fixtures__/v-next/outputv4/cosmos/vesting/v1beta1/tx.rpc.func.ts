import { Coin, CoinSDKType } from "../../base/v1beta1/coin.js";
import { Period, PeriodSDKType } from "./vesting.js";
import { buildTx } from "../../../helper-func-types.js";
import { MsgCreateVestingAccount, MsgCreateVestingAccountSDKType, MsgCreateVestingAccountResponse, MsgCreateVestingAccountResponseSDKType, MsgCreatePermanentLockedAccount, MsgCreatePermanentLockedAccountSDKType, MsgCreatePermanentLockedAccountResponse, MsgCreatePermanentLockedAccountResponseSDKType, MsgCreatePeriodicVestingAccount, MsgCreatePeriodicVestingAccountSDKType, MsgCreatePeriodicVestingAccountResponse, MsgCreatePeriodicVestingAccountResponseSDKType } from "./tx.js";
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