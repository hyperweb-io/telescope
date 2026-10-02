import { MsgCreateBid, MsgCloseBid } from "./bid";
import { MsgWithdrawLease, MsgCreateLease, MsgCloseLease } from "./lease";
import type { TelescopeGeneratedType } from "../../../types";
export const registry: ReadonlyArray<[string, TelescopeGeneratedType<any, any, any>]> = [["/akash.market.v1beta2.MsgCreateBid", MsgCreateBid], ["/akash.market.v1beta2.MsgCloseBid", MsgCloseBid], ["/akash.market.v1beta2.MsgWithdrawLease", MsgWithdrawLease], ["/akash.market.v1beta2.MsgCreateLease", MsgCreateLease], ["/akash.market.v1beta2.MsgCloseLease", MsgCloseLease]];
export const MessageComposer = {
  encoded: {
    createBid(value: MsgCreateBid) {
      return {
        typeUrl: "/akash.market.v1beta2.MsgCreateBid",
        value: MsgCreateBid.encode(value).finish()
      };
    },
    closeBid(value: MsgCloseBid) {
      return {
        typeUrl: "/akash.market.v1beta2.MsgCloseBid",
        value: MsgCloseBid.encode(value).finish()
      };
    },
    withdrawLease(value: MsgWithdrawLease) {
      return {
        typeUrl: "/akash.market.v1beta2.MsgWithdrawLease",
        value: MsgWithdrawLease.encode(value).finish()
      };
    },
    createLease(value: MsgCreateLease) {
      return {
        typeUrl: "/akash.market.v1beta2.MsgCreateLease",
        value: MsgCreateLease.encode(value).finish()
      };
    },
    closeLease(value: MsgCloseLease) {
      return {
        typeUrl: "/akash.market.v1beta2.MsgCloseLease",
        value: MsgCloseLease.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    createBid(value: MsgCreateBid) {
      return {
        typeUrl: "/akash.market.v1beta2.MsgCreateBid",
        value
      };
    },
    closeBid(value: MsgCloseBid) {
      return {
        typeUrl: "/akash.market.v1beta2.MsgCloseBid",
        value
      };
    },
    withdrawLease(value: MsgWithdrawLease) {
      return {
        typeUrl: "/akash.market.v1beta2.MsgWithdrawLease",
        value
      };
    },
    createLease(value: MsgCreateLease) {
      return {
        typeUrl: "/akash.market.v1beta2.MsgCreateLease",
        value
      };
    },
    closeLease(value: MsgCloseLease) {
      return {
        typeUrl: "/akash.market.v1beta2.MsgCloseLease",
        value
      };
    }
  },
  fromPartial: {
    createBid(value: MsgCreateBid) {
      return {
        typeUrl: "/akash.market.v1beta2.MsgCreateBid",
        value: MsgCreateBid.fromPartial(value)
      };
    },
    closeBid(value: MsgCloseBid) {
      return {
        typeUrl: "/akash.market.v1beta2.MsgCloseBid",
        value: MsgCloseBid.fromPartial(value)
      };
    },
    withdrawLease(value: MsgWithdrawLease) {
      return {
        typeUrl: "/akash.market.v1beta2.MsgWithdrawLease",
        value: MsgWithdrawLease.fromPartial(value)
      };
    },
    createLease(value: MsgCreateLease) {
      return {
        typeUrl: "/akash.market.v1beta2.MsgCreateLease",
        value: MsgCreateLease.fromPartial(value)
      };
    },
    closeLease(value: MsgCloseLease) {
      return {
        typeUrl: "/akash.market.v1beta2.MsgCloseLease",
        value: MsgCloseLease.fromPartial(value)
      };
    }
  }
};