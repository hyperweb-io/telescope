import { BinaryReader, BinaryWriter } from "../../../binary";
import type { DeepPartial } from "../../../helpers";
import { AkashInflationV1beta2Params, type AkashInflationV1beta2ParamsAmino } from "./params";
/**
 * GenesisState stores slice of genesis deployment instance
 * @name GenesisState
 * @package akash.inflation.v1beta2
 * @see proto type: akash.inflation.v1beta2.GenesisState
 */
export interface GenesisState {
  params: AkashInflationV1beta2Params;
}
export interface GenesisStateProtoMsg {
  typeUrl: "/akash.inflation.v1beta2.GenesisState";
  value: Uint8Array;
}
/**
 * GenesisState stores slice of genesis deployment instance
 * @name GenesisStateAmino
 * @package akash.inflation.v1beta2
 * @see proto type: akash.inflation.v1beta2.GenesisState
 */
export interface GenesisStateAmino {
  params: AkashInflationV1beta2ParamsAmino;
}
export interface GenesisStateAminoMsg {
  type: "/akash.inflation.v1beta2.GenesisState";
  value: GenesisStateAmino;
}
function createBaseGenesisState(): GenesisState {
  return {
    params: AkashInflationV1beta2Params.fromPartial({})
  };
}
/**
 * GenesisState stores slice of genesis deployment instance
 * @name GenesisState
 * @package akash.inflation.v1beta2
 * @see proto type: akash.inflation.v1beta2.GenesisState
 */
export const GenesisState = {
  typeUrl: "/akash.inflation.v1beta2.GenesisState",
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      AkashInflationV1beta2Params.encode(message.params, writer.uint32(10).fork()).ldelim();
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
          message.params = AkashInflationV1beta2Params.decode(reader, reader.uint32());
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
    message.params = object.params !== undefined && object.params !== null ? AkashInflationV1beta2Params.fromPartial(object.params) : undefined;
    return message;
  },
  fromAmino(object: GenesisStateAmino): GenesisState {
    const message = createBaseGenesisState();
    if (object.params !== undefined && object.params !== null) {
      message.params = AkashInflationV1beta2Params.fromAmino(object.params);
    }
    return message;
  },
  toAmino(message: GenesisState): GenesisStateAmino {
    const obj: any = {};
    obj.params = message.params ? AkashInflationV1beta2Params.toAmino(message.params) : AkashInflationV1beta2Params.toAmino(AkashInflationV1beta2Params.fromPartial({}));
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
      typeUrl: "/akash.inflation.v1beta2.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  }
};