import { Minter, type MinterAmino, CosmosMintV1beta1Params, type CosmosMintV1beta1ParamsAmino } from "./mint";
import { BinaryReader, BinaryWriter } from "../../../binary";
import type { DeepPartial } from "../../../helpers";
/**
 * GenesisState defines the mint module's genesis state.
 * @name GenesisState
 * @package cosmos.mint.v1beta1
 * @see proto type: cosmos.mint.v1beta1.GenesisState
 */
export interface GenesisState {
  /**
   * minter is a space for holding current inflation information.
   */
  minter: Minter;
  /**
   * params defines all the paramaters of the module.
   */
  params: CosmosMintV1beta1Params;
}
export interface GenesisStateProtoMsg {
  typeUrl: "/cosmos.mint.v1beta1.GenesisState";
  value: Uint8Array;
}
/**
 * GenesisState defines the mint module's genesis state.
 * @name GenesisStateAmino
 * @package cosmos.mint.v1beta1
 * @see proto type: cosmos.mint.v1beta1.GenesisState
 */
export interface GenesisStateAmino {
  /**
   * minter is a space for holding current inflation information.
   */
  minter: MinterAmino;
  /**
   * params defines all the paramaters of the module.
   */
  params: CosmosMintV1beta1ParamsAmino;
}
export interface GenesisStateAminoMsg {
  type: "cosmos-sdk/GenesisState";
  value: GenesisStateAmino;
}
function createBaseGenesisState(): GenesisState {
  return {
    minter: Minter.fromPartial({}),
    params: CosmosMintV1beta1Params.fromPartial({})
  };
}
/**
 * GenesisState defines the mint module's genesis state.
 * @name GenesisState
 * @package cosmos.mint.v1beta1
 * @see proto type: cosmos.mint.v1beta1.GenesisState
 */
export const GenesisState = {
  typeUrl: "/cosmos.mint.v1beta1.GenesisState",
  aminoType: "cosmos-sdk/GenesisState",
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.minter !== undefined) {
      Minter.encode(message.minter, writer.uint32(10).fork()).ldelim();
    }
    if (message.params !== undefined) {
      CosmosMintV1beta1Params.encode(message.params, writer.uint32(18).fork()).ldelim();
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
          message.minter = Minter.decode(reader, reader.uint32());
          break;
        case 2:
          message.params = CosmosMintV1beta1Params.decode(reader, reader.uint32());
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
    message.minter = object.minter !== undefined && object.minter !== null ? Minter.fromPartial(object.minter) : undefined;
    message.params = object.params !== undefined && object.params !== null ? CosmosMintV1beta1Params.fromPartial(object.params) : undefined;
    return message;
  },
  fromAmino(object: GenesisStateAmino): GenesisState {
    const message = createBaseGenesisState();
    if (object.minter !== undefined && object.minter !== null) {
      message.minter = Minter.fromAmino(object.minter);
    }
    if (object.params !== undefined && object.params !== null) {
      message.params = CosmosMintV1beta1Params.fromAmino(object.params);
    }
    return message;
  },
  toAmino(message: GenesisState): GenesisStateAmino {
    const obj: any = {};
    obj.minter = message.minter ? Minter.toAmino(message.minter) : undefined;
    obj.params = message.params ? CosmosMintV1beta1Params.toAmino(message.params) : undefined;
    return obj;
  },
  fromAminoMsg(object: GenesisStateAminoMsg): GenesisState {
    return GenesisState.fromAmino(object.value);
  },
  toAminoMsg(message: GenesisState): GenesisStateAminoMsg {
    return {
      type: "cosmos-sdk/GenesisState",
      value: GenesisState.toAmino(message)
    };
  },
  fromProtoMsg(message: GenesisStateProtoMsg): GenesisState {
    return GenesisState.decode(message.value);
  },
  toProto(message: GenesisState): Uint8Array {
    return GenesisState.encode(message).finish();
  },
  toProtoMsg(message: GenesisState): GenesisStateProtoMsg {
    return {
      typeUrl: "/cosmos.mint.v1beta1.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  }
};