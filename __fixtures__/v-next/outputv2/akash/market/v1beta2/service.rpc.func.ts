import { MsgCreateBid, MsgCloseBid } from "./bid";
import { MsgWithdrawLease, MsgCreateLease, MsgCloseLease } from "./lease";
import { buildTx } from "../../../helper-func-types";
/**
 * CreateBid defines a method to create a bid given proper inputs.
 * @name createBid
 * @package akash.market.v1beta2
 * @see proto service: akash.market.v1beta2.CreateBid
 */
export const createBid = buildTx<MsgCreateBid>({
  msg: MsgCreateBid
});
/**
 * CloseBid defines a method to close a bid given proper inputs.
 * @name closeBid
 * @package akash.market.v1beta2
 * @see proto service: akash.market.v1beta2.CloseBid
 */
export const closeBid = buildTx<MsgCloseBid>({
  msg: MsgCloseBid
});
/**
 * WithdrawLease withdraws accrued funds from the lease payment
 * @name withdrawLease
 * @package akash.market.v1beta2
 * @see proto service: akash.market.v1beta2.WithdrawLease
 */
export const withdrawLease = buildTx<MsgWithdrawLease>({
  msg: MsgWithdrawLease
});
/**
 * CreateLease creates a new lease
 * @name createLease
 * @package akash.market.v1beta2
 * @see proto service: akash.market.v1beta2.CreateLease
 */
export const createLease = buildTx<MsgCreateLease>({
  msg: MsgCreateLease
});
/**
 * CloseLease defines a method to close an order given proper inputs.
 * @name closeLease
 * @package akash.market.v1beta2
 * @see proto service: akash.market.v1beta2.CloseLease
 */
export const closeLease = buildTx<MsgCloseLease>({
  msg: MsgCloseLease
});