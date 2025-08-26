import { GrantAuthorization, GrantAuthorizationAmino, GrantAuthorizationSDKType } from "./authz";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial } from "../../../helpers";
import { GlobalDecoderRegistry } from "../../../registry";
export const protobufPackage = "cosmos.authz.v1beta1";
/**
 * GenesisState defines the authz module's genesis state.
 * @name GenesisState
 * @package cosmos.authz.v1beta1
 * @see proto type: cosmos.authz.v1beta1.GenesisState
 */
export interface GenesisState {
  authorization: GrantAuthorization[];
}
export interface GenesisStateProtoMsg {
  typeUrl: "/cosmos.authz.v1beta1.GenesisState";
  value: Uint8Array;
}
/**
 * GenesisState defines the authz module's genesis state.
 * @name GenesisStateAmino
 * @package cosmos.authz.v1beta1
 * @see proto type: cosmos.authz.v1beta1.GenesisState
 */
export interface GenesisStateAmino {
  authorization?: GrantAuthorizationAmino[];
}
/**
 * GenesisState defines the authz module's genesis state.
 * @name GenesisStateSDKType
 * @package cosmos.authz.v1beta1
 * @see proto type: cosmos.authz.v1beta1.GenesisState
 */
export interface GenesisStateSDKType {
  authorization: GrantAuthorizationSDKType[];
}
function createBaseGenesisState(): GenesisState {
  return {
    authorization: []
  };
}
/**
 * GenesisState defines the authz module's genesis state.
 * @name GenesisState
 * @package cosmos.authz.v1beta1
 * @see proto type: cosmos.authz.v1beta1.GenesisState
 */
export const GenesisState = {
  typeUrl: "/cosmos.authz.v1beta1.GenesisState",
  aminoType: "cosmos-sdk/GenesisState",
  is(o: any): o is GenesisState {
    return o && (o.$typeUrl === GenesisState.typeUrl || Array.isArray(o.authorization) && (!o.authorization.length || GrantAuthorization.is(o.authorization[0])));
  },
  isSDK(o: any): o is GenesisStateSDKType {
    return o && (o.$typeUrl === GenesisState.typeUrl || Array.isArray(o.authorization) && (!o.authorization.length || GrantAuthorization.isSDK(o.authorization[0])));
  },
  isAmino(o: any): o is GenesisStateAmino {
    return o && (o.$typeUrl === GenesisState.typeUrl || Array.isArray(o.authorization) && (!o.authorization.length || GrantAuthorization.isAmino(o.authorization[0])));
  },
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.authorization) {
      GrantAuthorization.encode(v!, writer.uint32(10).fork()).ldelim();
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
          message.authorization.push(GrantAuthorization.decode(reader, reader.uint32(), useInterfaces));
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
    if (Array.isArray(object?.authorization)) obj.authorization = object.authorization.map((e: any) => GrantAuthorization.fromJSON(e));
    return obj;
  },
  fromPartial(object: DeepPartial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.authorization = object.authorization?.map(e => GrantAuthorization.fromPartial(e)) || [];
    return message;
  },
  fromSDK(object: GenesisStateSDKType): GenesisState {
    return {
      authorization: Array.isArray(object?.authorization) ? object.authorization.map((e: any) => GrantAuthorization.fromSDK(e)) : []
    };
  },
  toSDK(message: GenesisState): GenesisStateSDKType {
    const obj: any = {};
    if (message.authorization) {
      obj.authorization = message.authorization.map(e => e ? GrantAuthorization.toSDK(e) : undefined);
    } else {
      obj.authorization = [];
    }
    return obj;
  },
  fromAmino(object: GenesisStateAmino): GenesisState {
    const message = createBaseGenesisState();
    message.authorization = object.authorization?.map(e => GrantAuthorization.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: GenesisState, useInterfaces: boolean = true): GenesisStateAmino {
    const obj: any = {};
    if (message.authorization) {
      obj.authorization = message.authorization.map(e => e ? GrantAuthorization.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.authorization = message.authorization;
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
      typeUrl: "/cosmos.authz.v1beta1.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(GenesisState.typeUrl)) {
      return;
    }
    GrantAuthorization.registerTypeUrl();
  }
};