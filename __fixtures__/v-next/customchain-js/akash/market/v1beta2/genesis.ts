import { Order, type OrderAmino } from "./order";
import { Lease, type LeaseAmino } from "./lease";
import { BinaryReader, BinaryWriter } from "../../../binary";
import type { DeepPartial } from "../../../helpers";
import { AkashMarketV1beta2Params, type AkashMarketV1beta2ParamsAmino } from "./params";
/**
 * GenesisState defines the basic genesis state used by market module
 * @name GenesisState
 * @package akash.market.v1beta2
 * @see proto type: akash.market.v1beta2.GenesisState
 */
export interface GenesisState {
  orders: Order[];
  leases: Lease[];
  params: AkashMarketV1beta2Params;
}
export interface GenesisStateProtoMsg {
  typeUrl: "/akash.market.v1beta2.GenesisState";
  value: Uint8Array;
}
/**
 * GenesisState defines the basic genesis state used by market module
 * @name GenesisStateAmino
 * @package akash.market.v1beta2
 * @see proto type: akash.market.v1beta2.GenesisState
 */
export interface GenesisStateAmino {
  orders: OrderAmino[];
  leases: LeaseAmino[];
  params: AkashMarketV1beta2ParamsAmino;
}
export interface GenesisStateAminoMsg {
  type: "/akash.market.v1beta2.GenesisState";
  value: GenesisStateAmino;
}
function createBaseGenesisState(): GenesisState {
  return {
    orders: [],
    leases: [],
    params: AkashMarketV1beta2Params.fromPartial({})
  };
}
/**
 * GenesisState defines the basic genesis state used by market module
 * @name GenesisState
 * @package akash.market.v1beta2
 * @see proto type: akash.market.v1beta2.GenesisState
 */
export const GenesisState = {
  typeUrl: "/akash.market.v1beta2.GenesisState",
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.orders) {
      Order.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.leases) {
      Lease.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.params !== undefined) {
      AkashMarketV1beta2Params.encode(message.params, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.orders.push(Order.decode(reader, reader.uint32()));
          break;
        case 2:
          message.leases.push(Lease.decode(reader, reader.uint32()));
          break;
        case 3:
          message.params = AkashMarketV1beta2Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.orders = object.orders?.map(e => Order.fromPartial(e)) || [];
    message.leases = object.leases?.map(e => Lease.fromPartial(e)) || [];
    message.params = object.params !== undefined && object.params !== null ? AkashMarketV1beta2Params.fromPartial(object.params) : undefined;
    return message;
  },
  fromAmino(object: GenesisStateAmino): GenesisState {
    const message = createBaseGenesisState();
    message.orders = object.orders?.map(e => Order.fromAmino(e)) || [];
    message.leases = object.leases?.map(e => Lease.fromAmino(e)) || [];
    if (object.params !== undefined && object.params !== null) {
      message.params = AkashMarketV1beta2Params.fromAmino(object.params);
    }
    return message;
  },
  toAmino(message: GenesisState): GenesisStateAmino {
    const obj: any = {};
    if (message.orders) {
      obj.orders = message.orders.map(e => e ? Order.toAmino(e) : undefined);
    } else {
      obj.orders = message.orders;
    }
    if (message.leases) {
      obj.leases = message.leases.map(e => e ? Lease.toAmino(e) : undefined);
    } else {
      obj.leases = message.leases;
    }
    obj.params = message.params ? AkashMarketV1beta2Params.toAmino(message.params) : AkashMarketV1beta2Params.toAmino(AkashMarketV1beta2Params.fromPartial({}));
    return obj;
  },
  fromAminoMsg(object: GenesisStateAminoMsg): GenesisState {
    return GenesisState.fromAmino(object.value);
  },
  fromProtoMsg(message: GenesisStateProtoMsg): GenesisState {
    return GenesisState.decode(message.value);
  },
  toProto(message: GenesisState): Uint8Array {
    return GenesisState.encode(message).finish();
  },
  toProtoMsg(message: GenesisState): GenesisStateProtoMsg {
    return {
      typeUrl: "/akash.market.v1beta2.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  }
};