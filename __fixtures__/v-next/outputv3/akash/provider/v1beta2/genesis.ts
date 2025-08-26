import { Provider, ProviderAmino, ProviderSDKType } from "./provider";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial } from "../../../helpers";
import { GlobalDecoderRegistry } from "../../../registry";
export const protobufPackage = "akash.provider.v1beta2";
/**
 * GenesisState defines the basic genesis state used by provider module
 * @name GenesisState
 * @package akash.provider.v1beta2
 * @see proto type: akash.provider.v1beta2.GenesisState
 */
export interface GenesisState {
  providers: Provider[];
}
export interface GenesisStateProtoMsg {
  typeUrl: "/akash.provider.v1beta2.GenesisState";
  value: Uint8Array;
}
/**
 * GenesisState defines the basic genesis state used by provider module
 * @name GenesisStateAmino
 * @package akash.provider.v1beta2
 * @see proto type: akash.provider.v1beta2.GenesisState
 */
export interface GenesisStateAmino {
  providers: ProviderAmino[];
}
/**
 * GenesisState defines the basic genesis state used by provider module
 * @name GenesisStateSDKType
 * @package akash.provider.v1beta2
 * @see proto type: akash.provider.v1beta2.GenesisState
 */
export interface GenesisStateSDKType {
  providers: ProviderSDKType[];
}
function createBaseGenesisState(): GenesisState {
  return {
    providers: []
  };
}
/**
 * GenesisState defines the basic genesis state used by provider module
 * @name GenesisState
 * @package akash.provider.v1beta2
 * @see proto type: akash.provider.v1beta2.GenesisState
 */
export const GenesisState = {
  typeUrl: "/akash.provider.v1beta2.GenesisState",
  is(o: any): o is GenesisState {
    return o && (o.$typeUrl === GenesisState.typeUrl || Array.isArray(o.providers) && (!o.providers.length || Provider.is(o.providers[0])));
  },
  isSDK(o: any): o is GenesisStateSDKType {
    return o && (o.$typeUrl === GenesisState.typeUrl || Array.isArray(o.providers) && (!o.providers.length || Provider.isSDK(o.providers[0])));
  },
  isAmino(o: any): o is GenesisStateAmino {
    return o && (o.$typeUrl === GenesisState.typeUrl || Array.isArray(o.providers) && (!o.providers.length || Provider.isAmino(o.providers[0])));
  },
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.providers) {
      Provider.encode(v!, writer.uint32(10).fork()).ldelim();
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
          message.providers.push(Provider.decode(reader, reader.uint32(), useInterfaces));
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
    if (Array.isArray(object?.providers)) obj.providers = object.providers.map((e: any) => Provider.fromJSON(e));
    return obj;
  },
  fromPartial(object: DeepPartial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.providers = object.providers?.map(e => Provider.fromPartial(e)) || [];
    return message;
  },
  fromSDK(object: GenesisStateSDKType): GenesisState {
    return {
      providers: Array.isArray(object?.providers) ? object.providers.map((e: any) => Provider.fromSDK(e)) : []
    };
  },
  toSDK(message: GenesisState): GenesisStateSDKType {
    const obj: any = {};
    if (message.providers) {
      obj.providers = message.providers.map(e => e ? Provider.toSDK(e) : undefined);
    } else {
      obj.providers = [];
    }
    return obj;
  },
  fromAmino(object: GenesisStateAmino): GenesisState {
    const message = createBaseGenesisState();
    message.providers = object.providers?.map(e => Provider.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: GenesisState, useInterfaces: boolean = true): GenesisStateAmino {
    const obj: any = {};
    if (message.providers) {
      obj.providers = message.providers.map(e => e ? Provider.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.providers = message.providers;
    }
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
      typeUrl: "/akash.provider.v1beta2.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(GenesisState.typeUrl)) {
      return;
    }
    Provider.registerTypeUrl();
  }
};