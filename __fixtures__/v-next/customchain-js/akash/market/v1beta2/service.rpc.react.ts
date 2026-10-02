import type { MsgCreateBid, MsgCloseBid } from "./bid";
import type { MsgWithdrawLease, MsgCreateLease, MsgCloseLease } from "./lease";
import { buildUseMutation } from "../../../react-query";
import { createBid, closeBid, withdrawLease, createLease, closeLease } from "./service.rpc.func";
/**
 * CreateBid defines a method to create a bid given proper inputs.
 * @name useCreateBid
 * @package akash.market.v1beta2
 * @see proto service: akash.market.v1beta2.CreateBid
 */
export const useCreateBid = buildUseMutation<MsgCreateBid, Error>({
  builderMutationFn: createBid
});
/**
 * CloseBid defines a method to close a bid given proper inputs.
 * @name useCloseBid
 * @package akash.market.v1beta2
 * @see proto service: akash.market.v1beta2.CloseBid
 */
export const useCloseBid = buildUseMutation<MsgCloseBid, Error>({
  builderMutationFn: closeBid
});
/**
 * WithdrawLease withdraws accrued funds from the lease payment
 * @name useWithdrawLease
 * @package akash.market.v1beta2
 * @see proto service: akash.market.v1beta2.WithdrawLease
 */
export const useWithdrawLease = buildUseMutation<MsgWithdrawLease, Error>({
  builderMutationFn: withdrawLease
});
/**
 * CreateLease creates a new lease
 * @name useCreateLease
 * @package akash.market.v1beta2
 * @see proto service: akash.market.v1beta2.CreateLease
 */
export const useCreateLease = buildUseMutation<MsgCreateLease, Error>({
  builderMutationFn: createLease
});
/**
 * CloseLease defines a method to close an order given proper inputs.
 * @name useCloseLease
 * @package akash.market.v1beta2
 * @see proto service: akash.market.v1beta2.CloseLease
 */
export const useCloseLease = buildUseMutation<MsgCloseLease, Error>({
  builderMutationFn: closeLease
});