import { OrderID, OrderIDSDKType } from "./order.js";
import { DecCoin, DecCoinSDKType, Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin.js";
import { BidID, BidIDSDKType, MsgCreateBid, MsgCreateBidSDKType, MsgCreateBidResponse, MsgCreateBidResponseSDKType, MsgCloseBid, MsgCloseBidSDKType, MsgCloseBidResponse, MsgCloseBidResponseSDKType } from "./bid.js";
import { LeaseID, LeaseIDSDKType, MsgWithdrawLease, MsgWithdrawLeaseSDKType, MsgWithdrawLeaseResponse, MsgWithdrawLeaseResponseSDKType, MsgCreateLease, MsgCreateLeaseSDKType, MsgCreateLeaseResponse, MsgCreateLeaseResponseSDKType, MsgCloseLease, MsgCloseLeaseSDKType, MsgCloseLeaseResponse, MsgCloseLeaseResponseSDKType } from "./lease.js";
import { buildTx } from "../../../helper-func-types.js";
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