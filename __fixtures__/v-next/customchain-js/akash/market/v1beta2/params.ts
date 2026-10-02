import { Coin, type CoinAmino } from "../../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../../binary";
import type { DeepPartial } from "../../../helpers";
/**
 * Params is the params for the x/market module
 * @name AkashMarketV1beta2Params
 * @package akash.market.v1beta2
 * @see proto type: akash.market.v1beta2.Params
 */
export interface AkashMarketV1beta2Params {
  bidMinDeposit: Coin;
  orderMaxBids: number;
}
export interface AkashMarketV1beta2ParamsProtoMsg {
  typeUrl: "/akash.market.v1beta2.Params";
  value: Uint8Array;
}
/**
 * Params is the params for the x/market module
 * @name AkashMarketV1beta2ParamsAmino
 * @package akash.market.v1beta2
 * @see proto type: akash.market.v1beta2.AkashMarketV1beta2Params
 */
export interface AkashMarketV1beta2ParamsAmino {
  bid_min_deposit: CoinAmino;
  order_max_bids: number;
}
export interface AkashMarketV1beta2ParamsAminoMsg {
  type: "/akash.market.v1beta2.Params";
  value: AkashMarketV1beta2ParamsAmino;
}
function createBaseAkashMarketV1beta2Params(): AkashMarketV1beta2Params {
  return {
    bidMinDeposit: Coin.fromPartial({}),
    orderMaxBids: 0
  };
}
/**
 * Params is the params for the x/market module
 * @name AkashMarketV1beta2Params
 * @package akash.market.v1beta2
 * @see proto type: akash.market.v1beta2.Params
 */
export const AkashMarketV1beta2Params = {
  typeUrl: "/akash.market.v1beta2.Params",
  encode(message: AkashMarketV1beta2Params, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.bidMinDeposit !== undefined) {
      Coin.encode(message.bidMinDeposit, writer.uint32(10).fork()).ldelim();
    }
    if (message.orderMaxBids !== 0) {
      writer.uint32(16).uint32(message.orderMaxBids);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): AkashMarketV1beta2Params {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAkashMarketV1beta2Params();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.bidMinDeposit = Coin.decode(reader, reader.uint32());
          break;
        case 2:
          message.orderMaxBids = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<AkashMarketV1beta2Params>): AkashMarketV1beta2Params {
    const message = createBaseAkashMarketV1beta2Params();
    message.bidMinDeposit = object.bidMinDeposit !== undefined && object.bidMinDeposit !== null ? Coin.fromPartial(object.bidMinDeposit) : undefined;
    message.orderMaxBids = object.orderMaxBids ?? 0;
    return message;
  },
  fromAmino(object: AkashMarketV1beta2ParamsAmino): AkashMarketV1beta2Params {
    const message = createBaseAkashMarketV1beta2Params();
    if (object.bid_min_deposit !== undefined && object.bid_min_deposit !== null) {
      message.bidMinDeposit = Coin.fromAmino(object.bid_min_deposit);
    }
    if (object.order_max_bids !== undefined && object.order_max_bids !== null) {
      message.orderMaxBids = object.order_max_bids;
    }
    return message;
  },
  toAmino(message: AkashMarketV1beta2Params): AkashMarketV1beta2ParamsAmino {
    const obj: any = {};
    obj.bid_min_deposit = message.bidMinDeposit ? Coin.toAmino(message.bidMinDeposit) : Coin.toAmino(Coin.fromPartial({}));
    obj.order_max_bids = message.orderMaxBids ?? 0;
    return obj;
  },
  fromAminoMsg(object: AkashMarketV1beta2ParamsAminoMsg): AkashMarketV1beta2Params {
    return AkashMarketV1beta2Params.fromAmino(object.value);
  },
  fromProtoMsg(message: AkashMarketV1beta2ParamsProtoMsg): AkashMarketV1beta2Params {
    return AkashMarketV1beta2Params.decode(message.value);
  },
  toProto(message: AkashMarketV1beta2Params): Uint8Array {
    return AkashMarketV1beta2Params.encode(message).finish();
  },
  toProtoMsg(message: AkashMarketV1beta2Params): AkashMarketV1beta2ParamsProtoMsg {
    return {
      typeUrl: "/akash.market.v1beta2.Params",
      value: AkashMarketV1beta2Params.encode(message).finish()
    };
  }
};