import { QueryCondition, QueryConditionSDKType } from "../lockup/lock.js";
import { Coin, CoinSDKType } from "../../cosmos/base/v1beta1/coin.js";
import { Timestamp, TimestampSDKType } from "../../google/protobuf/timestamp.js";
import { TelescopeGeneratedType } from "../../types.js";
import { MsgCreateGauge, MsgCreateGaugeSDKType, MsgAddToGauge, MsgAddToGaugeSDKType } from "./tx.js";
export const registry: ReadonlyArray<[string, TelescopeGeneratedType<any, any, any>]> = [["/osmosis.incentives.MsgCreateGauge", MsgCreateGauge], ["/osmosis.incentives.MsgAddToGauge", MsgAddToGauge]];
export const MessageComposer = {
  encoded: {
    createGauge(value: MsgCreateGauge) {
      return {
        typeUrl: "/osmosis.incentives.MsgCreateGauge",
        value: MsgCreateGauge.encode(value).finish()
      };
    },
    addToGauge(value: MsgAddToGauge) {
      return {
        typeUrl: "/osmosis.incentives.MsgAddToGauge",
        value: MsgAddToGauge.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    createGauge(value: MsgCreateGauge) {
      return {
        typeUrl: "/osmosis.incentives.MsgCreateGauge",
        value
      };
    },
    addToGauge(value: MsgAddToGauge) {
      return {
        typeUrl: "/osmosis.incentives.MsgAddToGauge",
        value
      };
    }
  },
  toJSON: {
    createGauge(value: MsgCreateGauge) {
      return {
        typeUrl: "/osmosis.incentives.MsgCreateGauge",
        value: MsgCreateGauge.toJSON(value)
      };
    },
    addToGauge(value: MsgAddToGauge) {
      return {
        typeUrl: "/osmosis.incentives.MsgAddToGauge",
        value: MsgAddToGauge.toJSON(value)
      };
    }
  },
  fromJSON: {
    createGauge(value: any) {
      return {
        typeUrl: "/osmosis.incentives.MsgCreateGauge",
        value: MsgCreateGauge.fromJSON(value)
      };
    },
    addToGauge(value: any) {
      return {
        typeUrl: "/osmosis.incentives.MsgAddToGauge",
        value: MsgAddToGauge.fromJSON(value)
      };
    }
  },
  fromPartial: {
    createGauge(value: MsgCreateGauge) {
      return {
        typeUrl: "/osmosis.incentives.MsgCreateGauge",
        value: MsgCreateGauge.fromPartial(value)
      };
    },
    addToGauge(value: MsgAddToGauge) {
      return {
        typeUrl: "/osmosis.incentives.MsgAddToGauge",
        value: MsgAddToGauge.fromPartial(value)
      };
    }
  }
};