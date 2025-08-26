import { Minter, MinterAmino, MinterSDKType, Params, ParamsAmino, ParamsSDKType } from "./mint";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { GlobalDecoderRegistry } from "../../../registry";
import { isSet, DeepPartial } from "../../../helpers";
export const protobufPackage = "cosmos.mint.v1beta1";
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
  params: Params;
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
  minter?: MinterAmino;
  /**
   * params defines all the paramaters of the module.
   */
  params?: ParamsAmino;
}
/**
 * GenesisState defines the mint module's genesis state.
 * @name GenesisStateSDKType
 * @package cosmos.mint.v1beta1
 * @see proto type: cosmos.mint.v1beta1.GenesisState
 */
export interface GenesisStateSDKType {
  minter: MinterSDKType;
  params: ParamsSDKType;
}
function createBaseGenesisState(): GenesisState {
  return {
    minter: Minter.fromPartial({}),
    params: Params.fromPartial({})
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
  is(o: any): o is GenesisState {
    return o && (o.$typeUrl === GenesisState.typeUrl || Minter.is(o.minter) && Params.is(o.params));
  },
  isSDK(o: any): o is GenesisStateSDKType {
    return o && (o.$typeUrl === GenesisState.typeUrl || Minter.isSDK(o.minter) && Params.isSDK(o.params));
  },
  isAmino(o: any): o is GenesisStateAmino {
    return o && (o.$typeUrl === GenesisState.typeUrl || Minter.isAmino(o.minter) && Params.isAmino(o.params));
  },
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.minter !== undefined) {
      Minter.encode(message.minter, writer.uint32(10).fork()).ldelim();
    }
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): GenesisState {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.minter = Minter.decode(reader, reader.uint32(), useInterfaces);
          break;
        case 2:
          message.params = Params.decode(reader, reader.uint32(), useInterfaces);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): GenesisState {
    const obj = createBaseGenesisState();
    if (isSet(object.minter)) obj.minter = Minter.fromJSON(object.minter);
    if (isSet(object.params)) obj.params = Params.fromJSON(object.params);
    return obj;
  },
  fromPartial(object: DeepPartial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    if (object.minter !== undefined && object.minter !== null) {
      message.minter = Minter.fromPartial(object.minter);
    }
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromPartial(object.params);
    }
    return message;
  },
  fromSDK(object: GenesisStateSDKType): GenesisState {
    return {
      minter: object.minter ? Minter.fromSDK(object.minter) : undefined,
      params: object.params ? Params.fromSDK(object.params) : undefined
    };
  },
  toSDK(message: GenesisState): GenesisStateSDKType {
    const obj: any = {};
    message.minter !== undefined && (obj.minter = message.minter ? Minter.toSDK(message.minter) : undefined);
    message.params !== undefined && (obj.params = message.params ? Params.toSDK(message.params) : undefined);
    return obj;
  },
  fromAmino(object: GenesisStateAmino): GenesisState {
    const message = createBaseGenesisState();
    if (object.minter !== undefined && object.minter !== null) {
      message.minter = Minter.fromAmino(object.minter);
    }
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    return message;
  },
  toAmino(message: GenesisState, useInterfaces: boolean = true): GenesisStateAmino {
    const obj: any = {};
    obj.minter = message.minter ? Minter.toAmino(message.minter, useInterfaces) : undefined;
    obj.params = message.params ? Params.toAmino(message.params, useInterfaces) : undefined;
    return obj;
  },
  fromProtoMsg(message: GenesisStateProtoMsg, useInterfaces: boolean = true): GenesisState {
    return GenesisState.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: GenesisState): Uint8Array {
    return GenesisState.encode(message).finish();
  },
  toProtoMsg(message: GenesisState): GenesisStateProtoMsg {
    return {
      typeUrl: "/cosmos.mint.v1beta1.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(GenesisState.typeUrl)) {
      return;
    }
    Minter.registerTypeUrl();
    Params.registerTypeUrl();
  }
};