import { GroupID, GroupIDAmino, GroupIDSDKType } from "./groupid";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { GlobalDecoderRegistry } from "../../../registry";
import { isSet, DeepPartial } from "../../../helpers";
import { JsonSafe } from "../../../json-safe";
export const protobufPackage = "akash.deployment.v1beta2";
/**
 * MsgCloseGroup defines SDK message to close a single Group within a Deployment.
 * @name MsgCloseGroup
 * @package akash.deployment.v1beta2
 * @see proto type: akash.deployment.v1beta2.MsgCloseGroup
 */
export interface MsgCloseGroup {
  id: GroupID;
}
export interface MsgCloseGroupProtoMsg {
  typeUrl: "/akash.deployment.v1beta2.MsgCloseGroup";
  value: Uint8Array;
}
/**
 * MsgCloseGroup defines SDK message to close a single Group within a Deployment.
 * @name MsgCloseGroupAmino
 * @package akash.deployment.v1beta2
 * @see proto type: akash.deployment.v1beta2.MsgCloseGroup
 */
export interface MsgCloseGroupAmino {
  id: GroupIDAmino;
}
export interface MsgCloseGroupAminoMsg {
  type: "/akash.deployment.v1beta2.MsgCloseGroup";
  value: MsgCloseGroupAmino;
}
/**
 * MsgCloseGroup defines SDK message to close a single Group within a Deployment.
 * @name MsgCloseGroupSDKType
 * @package akash.deployment.v1beta2
 * @see proto type: akash.deployment.v1beta2.MsgCloseGroup
 */
export interface MsgCloseGroupSDKType {
  id: GroupIDSDKType;
}
/**
 * MsgCloseGroupResponse defines the Msg/CloseGroup response type.
 * @name MsgCloseGroupResponse
 * @package akash.deployment.v1beta2
 * @see proto type: akash.deployment.v1beta2.MsgCloseGroupResponse
 */
export interface MsgCloseGroupResponse {}
export interface MsgCloseGroupResponseProtoMsg {
  typeUrl: "/akash.deployment.v1beta2.MsgCloseGroupResponse";
  value: Uint8Array;
}
/**
 * MsgCloseGroupResponse defines the Msg/CloseGroup response type.
 * @name MsgCloseGroupResponseAmino
 * @package akash.deployment.v1beta2
 * @see proto type: akash.deployment.v1beta2.MsgCloseGroupResponse
 */
export interface MsgCloseGroupResponseAmino {}
export interface MsgCloseGroupResponseAminoMsg {
  type: "/akash.deployment.v1beta2.MsgCloseGroupResponse";
  value: MsgCloseGroupResponseAmino;
}
/**
 * MsgCloseGroupResponse defines the Msg/CloseGroup response type.
 * @name MsgCloseGroupResponseSDKType
 * @package akash.deployment.v1beta2
 * @see proto type: akash.deployment.v1beta2.MsgCloseGroupResponse
 */
export interface MsgCloseGroupResponseSDKType {}
/**
 * MsgPauseGroup defines SDK message to close a single Group within a Deployment.
 * @name MsgPauseGroup
 * @package akash.deployment.v1beta2
 * @see proto type: akash.deployment.v1beta2.MsgPauseGroup
 */
export interface MsgPauseGroup {
  id: GroupID;
}
export interface MsgPauseGroupProtoMsg {
  typeUrl: "/akash.deployment.v1beta2.MsgPauseGroup";
  value: Uint8Array;
}
/**
 * MsgPauseGroup defines SDK message to close a single Group within a Deployment.
 * @name MsgPauseGroupAmino
 * @package akash.deployment.v1beta2
 * @see proto type: akash.deployment.v1beta2.MsgPauseGroup
 */
export interface MsgPauseGroupAmino {
  id: GroupIDAmino;
}
export interface MsgPauseGroupAminoMsg {
  type: "/akash.deployment.v1beta2.MsgPauseGroup";
  value: MsgPauseGroupAmino;
}
/**
 * MsgPauseGroup defines SDK message to close a single Group within a Deployment.
 * @name MsgPauseGroupSDKType
 * @package akash.deployment.v1beta2
 * @see proto type: akash.deployment.v1beta2.MsgPauseGroup
 */
export interface MsgPauseGroupSDKType {
  id: GroupIDSDKType;
}
/**
 * MsgPauseGroupResponse defines the Msg/PauseGroup response type.
 * @name MsgPauseGroupResponse
 * @package akash.deployment.v1beta2
 * @see proto type: akash.deployment.v1beta2.MsgPauseGroupResponse
 */
export interface MsgPauseGroupResponse {}
export interface MsgPauseGroupResponseProtoMsg {
  typeUrl: "/akash.deployment.v1beta2.MsgPauseGroupResponse";
  value: Uint8Array;
}
/**
 * MsgPauseGroupResponse defines the Msg/PauseGroup response type.
 * @name MsgPauseGroupResponseAmino
 * @package akash.deployment.v1beta2
 * @see proto type: akash.deployment.v1beta2.MsgPauseGroupResponse
 */
export interface MsgPauseGroupResponseAmino {}
export interface MsgPauseGroupResponseAminoMsg {
  type: "/akash.deployment.v1beta2.MsgPauseGroupResponse";
  value: MsgPauseGroupResponseAmino;
}
/**
 * MsgPauseGroupResponse defines the Msg/PauseGroup response type.
 * @name MsgPauseGroupResponseSDKType
 * @package akash.deployment.v1beta2
 * @see proto type: akash.deployment.v1beta2.MsgPauseGroupResponse
 */
export interface MsgPauseGroupResponseSDKType {}
/**
 * MsgStartGroup defines SDK message to close a single Group within a Deployment.
 * @name MsgStartGroup
 * @package akash.deployment.v1beta2
 * @see proto type: akash.deployment.v1beta2.MsgStartGroup
 */
export interface MsgStartGroup {
  id: GroupID;
}
export interface MsgStartGroupProtoMsg {
  typeUrl: "/akash.deployment.v1beta2.MsgStartGroup";
  value: Uint8Array;
}
/**
 * MsgStartGroup defines SDK message to close a single Group within a Deployment.
 * @name MsgStartGroupAmino
 * @package akash.deployment.v1beta2
 * @see proto type: akash.deployment.v1beta2.MsgStartGroup
 */
export interface MsgStartGroupAmino {
  id: GroupIDAmino;
}
export interface MsgStartGroupAminoMsg {
  type: "/akash.deployment.v1beta2.MsgStartGroup";
  value: MsgStartGroupAmino;
}
/**
 * MsgStartGroup defines SDK message to close a single Group within a Deployment.
 * @name MsgStartGroupSDKType
 * @package akash.deployment.v1beta2
 * @see proto type: akash.deployment.v1beta2.MsgStartGroup
 */
export interface MsgStartGroupSDKType {
  id: GroupIDSDKType;
}
/**
 * MsgStartGroupResponse defines the Msg/StartGroup response type.
 * @name MsgStartGroupResponse
 * @package akash.deployment.v1beta2
 * @see proto type: akash.deployment.v1beta2.MsgStartGroupResponse
 */
export interface MsgStartGroupResponse {}
export interface MsgStartGroupResponseProtoMsg {
  typeUrl: "/akash.deployment.v1beta2.MsgStartGroupResponse";
  value: Uint8Array;
}
/**
 * MsgStartGroupResponse defines the Msg/StartGroup response type.
 * @name MsgStartGroupResponseAmino
 * @package akash.deployment.v1beta2
 * @see proto type: akash.deployment.v1beta2.MsgStartGroupResponse
 */
export interface MsgStartGroupResponseAmino {}
export interface MsgStartGroupResponseAminoMsg {
  type: "/akash.deployment.v1beta2.MsgStartGroupResponse";
  value: MsgStartGroupResponseAmino;
}
/**
 * MsgStartGroupResponse defines the Msg/StartGroup response type.
 * @name MsgStartGroupResponseSDKType
 * @package akash.deployment.v1beta2
 * @see proto type: akash.deployment.v1beta2.MsgStartGroupResponse
 */
export interface MsgStartGroupResponseSDKType {}
function createBaseMsgCloseGroup(): MsgCloseGroup {
  return {
    id: GroupID.fromPartial({})
  };
}
/**
 * MsgCloseGroup defines SDK message to close a single Group within a Deployment.
 * @name MsgCloseGroup
 * @package akash.deployment.v1beta2
 * @see proto type: akash.deployment.v1beta2.MsgCloseGroup
 */
export const MsgCloseGroup = {
  typeUrl: "/akash.deployment.v1beta2.MsgCloseGroup",
  is(o: any): o is MsgCloseGroup {
    return o && (o.$typeUrl === MsgCloseGroup.typeUrl || GroupID.is(o.id));
  },
  isSDK(o: any): o is MsgCloseGroupSDKType {
    return o && (o.$typeUrl === MsgCloseGroup.typeUrl || GroupID.isSDK(o.id));
  },
  isAmino(o: any): o is MsgCloseGroupAmino {
    return o && (o.$typeUrl === MsgCloseGroup.typeUrl || GroupID.isAmino(o.id));
  },
  encode(message: MsgCloseGroup, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== undefined) {
      GroupID.encode(message.id, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCloseGroup {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCloseGroup();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = GroupID.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgCloseGroup {
    const obj = createBaseMsgCloseGroup();
    if (isSet(object.id)) obj.id = GroupID.fromJSON(object.id);
    return obj;
  },
  toJSON(message: MsgCloseGroup): JsonSafe<MsgCloseGroup> {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id ? GroupID.toJSON(message.id) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<MsgCloseGroup>): MsgCloseGroup {
    const message = createBaseMsgCloseGroup();
    if (object.id !== undefined && object.id !== null) {
      message.id = GroupID.fromPartial(object.id);
    }
    return message;
  },
  fromSDK(object: MsgCloseGroupSDKType): MsgCloseGroup {
    return {
      id: object.id ? GroupID.fromSDK(object.id) : undefined
    };
  },
  toSDK(message: MsgCloseGroup): MsgCloseGroupSDKType {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id ? GroupID.toSDK(message.id) : undefined);
    return obj;
  },
  fromAmino(object: MsgCloseGroupAmino): MsgCloseGroup {
    const message = createBaseMsgCloseGroup();
    if (object.id !== undefined && object.id !== null) {
      message.id = GroupID.fromAmino(object.id);
    }
    return message;
  },
  toAmino(message: MsgCloseGroup): MsgCloseGroupAmino {
    const obj: any = {};
    obj.id = message.id ? GroupID.toAmino(message.id) : GroupID.toAmino(GroupID.fromPartial({}));
    return obj;
  },
  fromAminoMsg(object: MsgCloseGroupAminoMsg): MsgCloseGroup {
    return MsgCloseGroup.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCloseGroupProtoMsg): MsgCloseGroup {
    return MsgCloseGroup.decode(message.value);
  },
  toProto(message: MsgCloseGroup): Uint8Array {
    return MsgCloseGroup.encode(message).finish();
  },
  toProtoMsg(message: MsgCloseGroup): MsgCloseGroupProtoMsg {
    return {
      typeUrl: "/akash.deployment.v1beta2.MsgCloseGroup",
      value: MsgCloseGroup.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(MsgCloseGroup.typeUrl)) {
      return;
    }
    GroupID.registerTypeUrl();
  }
};
function createBaseMsgCloseGroupResponse(): MsgCloseGroupResponse {
  return {};
}
/**
 * MsgCloseGroupResponse defines the Msg/CloseGroup response type.
 * @name MsgCloseGroupResponse
 * @package akash.deployment.v1beta2
 * @see proto type: akash.deployment.v1beta2.MsgCloseGroupResponse
 */
export const MsgCloseGroupResponse = {
  typeUrl: "/akash.deployment.v1beta2.MsgCloseGroupResponse",
  is(o: any): o is MsgCloseGroupResponse {
    return o && o.$typeUrl === MsgCloseGroupResponse.typeUrl;
  },
  isSDK(o: any): o is MsgCloseGroupResponseSDKType {
    return o && o.$typeUrl === MsgCloseGroupResponse.typeUrl;
  },
  isAmino(o: any): o is MsgCloseGroupResponseAmino {
    return o && o.$typeUrl === MsgCloseGroupResponse.typeUrl;
  },
  encode(_: MsgCloseGroupResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCloseGroupResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCloseGroupResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_: any): MsgCloseGroupResponse {
    const obj = createBaseMsgCloseGroupResponse();
    return obj;
  },
  toJSON(_: MsgCloseGroupResponse): JsonSafe<MsgCloseGroupResponse> {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: DeepPartial<MsgCloseGroupResponse>): MsgCloseGroupResponse {
    const message = createBaseMsgCloseGroupResponse();
    return message;
  },
  fromSDK(_: MsgCloseGroupResponseSDKType): MsgCloseGroupResponse {
    return {};
  },
  toSDK(_: MsgCloseGroupResponse): MsgCloseGroupResponseSDKType {
    const obj: any = {};
    return obj;
  },
  fromAmino(_: MsgCloseGroupResponseAmino): MsgCloseGroupResponse {
    const message = createBaseMsgCloseGroupResponse();
    return message;
  },
  toAmino(_: MsgCloseGroupResponse): MsgCloseGroupResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgCloseGroupResponseAminoMsg): MsgCloseGroupResponse {
    return MsgCloseGroupResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCloseGroupResponseProtoMsg): MsgCloseGroupResponse {
    return MsgCloseGroupResponse.decode(message.value);
  },
  toProto(message: MsgCloseGroupResponse): Uint8Array {
    return MsgCloseGroupResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgCloseGroupResponse): MsgCloseGroupResponseProtoMsg {
    return {
      typeUrl: "/akash.deployment.v1beta2.MsgCloseGroupResponse",
      value: MsgCloseGroupResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseMsgPauseGroup(): MsgPauseGroup {
  return {
    id: GroupID.fromPartial({})
  };
}
/**
 * MsgPauseGroup defines SDK message to close a single Group within a Deployment.
 * @name MsgPauseGroup
 * @package akash.deployment.v1beta2
 * @see proto type: akash.deployment.v1beta2.MsgPauseGroup
 */
export const MsgPauseGroup = {
  typeUrl: "/akash.deployment.v1beta2.MsgPauseGroup",
  is(o: any): o is MsgPauseGroup {
    return o && (o.$typeUrl === MsgPauseGroup.typeUrl || GroupID.is(o.id));
  },
  isSDK(o: any): o is MsgPauseGroupSDKType {
    return o && (o.$typeUrl === MsgPauseGroup.typeUrl || GroupID.isSDK(o.id));
  },
  isAmino(o: any): o is MsgPauseGroupAmino {
    return o && (o.$typeUrl === MsgPauseGroup.typeUrl || GroupID.isAmino(o.id));
  },
  encode(message: MsgPauseGroup, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== undefined) {
      GroupID.encode(message.id, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgPauseGroup {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgPauseGroup();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = GroupID.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgPauseGroup {
    const obj = createBaseMsgPauseGroup();
    if (isSet(object.id)) obj.id = GroupID.fromJSON(object.id);
    return obj;
  },
  toJSON(message: MsgPauseGroup): JsonSafe<MsgPauseGroup> {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id ? GroupID.toJSON(message.id) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<MsgPauseGroup>): MsgPauseGroup {
    const message = createBaseMsgPauseGroup();
    if (object.id !== undefined && object.id !== null) {
      message.id = GroupID.fromPartial(object.id);
    }
    return message;
  },
  fromSDK(object: MsgPauseGroupSDKType): MsgPauseGroup {
    return {
      id: object.id ? GroupID.fromSDK(object.id) : undefined
    };
  },
  toSDK(message: MsgPauseGroup): MsgPauseGroupSDKType {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id ? GroupID.toSDK(message.id) : undefined);
    return obj;
  },
  fromAmino(object: MsgPauseGroupAmino): MsgPauseGroup {
    const message = createBaseMsgPauseGroup();
    if (object.id !== undefined && object.id !== null) {
      message.id = GroupID.fromAmino(object.id);
    }
    return message;
  },
  toAmino(message: MsgPauseGroup): MsgPauseGroupAmino {
    const obj: any = {};
    obj.id = message.id ? GroupID.toAmino(message.id) : GroupID.toAmino(GroupID.fromPartial({}));
    return obj;
  },
  fromAminoMsg(object: MsgPauseGroupAminoMsg): MsgPauseGroup {
    return MsgPauseGroup.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgPauseGroupProtoMsg): MsgPauseGroup {
    return MsgPauseGroup.decode(message.value);
  },
  toProto(message: MsgPauseGroup): Uint8Array {
    return MsgPauseGroup.encode(message).finish();
  },
  toProtoMsg(message: MsgPauseGroup): MsgPauseGroupProtoMsg {
    return {
      typeUrl: "/akash.deployment.v1beta2.MsgPauseGroup",
      value: MsgPauseGroup.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(MsgPauseGroup.typeUrl)) {
      return;
    }
    GroupID.registerTypeUrl();
  }
};
function createBaseMsgPauseGroupResponse(): MsgPauseGroupResponse {
  return {};
}
/**
 * MsgPauseGroupResponse defines the Msg/PauseGroup response type.
 * @name MsgPauseGroupResponse
 * @package akash.deployment.v1beta2
 * @see proto type: akash.deployment.v1beta2.MsgPauseGroupResponse
 */
export const MsgPauseGroupResponse = {
  typeUrl: "/akash.deployment.v1beta2.MsgPauseGroupResponse",
  is(o: any): o is MsgPauseGroupResponse {
    return o && o.$typeUrl === MsgPauseGroupResponse.typeUrl;
  },
  isSDK(o: any): o is MsgPauseGroupResponseSDKType {
    return o && o.$typeUrl === MsgPauseGroupResponse.typeUrl;
  },
  isAmino(o: any): o is MsgPauseGroupResponseAmino {
    return o && o.$typeUrl === MsgPauseGroupResponse.typeUrl;
  },
  encode(_: MsgPauseGroupResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgPauseGroupResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgPauseGroupResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_: any): MsgPauseGroupResponse {
    const obj = createBaseMsgPauseGroupResponse();
    return obj;
  },
  toJSON(_: MsgPauseGroupResponse): JsonSafe<MsgPauseGroupResponse> {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: DeepPartial<MsgPauseGroupResponse>): MsgPauseGroupResponse {
    const message = createBaseMsgPauseGroupResponse();
    return message;
  },
  fromSDK(_: MsgPauseGroupResponseSDKType): MsgPauseGroupResponse {
    return {};
  },
  toSDK(_: MsgPauseGroupResponse): MsgPauseGroupResponseSDKType {
    const obj: any = {};
    return obj;
  },
  fromAmino(_: MsgPauseGroupResponseAmino): MsgPauseGroupResponse {
    const message = createBaseMsgPauseGroupResponse();
    return message;
  },
  toAmino(_: MsgPauseGroupResponse): MsgPauseGroupResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgPauseGroupResponseAminoMsg): MsgPauseGroupResponse {
    return MsgPauseGroupResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgPauseGroupResponseProtoMsg): MsgPauseGroupResponse {
    return MsgPauseGroupResponse.decode(message.value);
  },
  toProto(message: MsgPauseGroupResponse): Uint8Array {
    return MsgPauseGroupResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgPauseGroupResponse): MsgPauseGroupResponseProtoMsg {
    return {
      typeUrl: "/akash.deployment.v1beta2.MsgPauseGroupResponse",
      value: MsgPauseGroupResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseMsgStartGroup(): MsgStartGroup {
  return {
    id: GroupID.fromPartial({})
  };
}
/**
 * MsgStartGroup defines SDK message to close a single Group within a Deployment.
 * @name MsgStartGroup
 * @package akash.deployment.v1beta2
 * @see proto type: akash.deployment.v1beta2.MsgStartGroup
 */
export const MsgStartGroup = {
  typeUrl: "/akash.deployment.v1beta2.MsgStartGroup",
  is(o: any): o is MsgStartGroup {
    return o && (o.$typeUrl === MsgStartGroup.typeUrl || GroupID.is(o.id));
  },
  isSDK(o: any): o is MsgStartGroupSDKType {
    return o && (o.$typeUrl === MsgStartGroup.typeUrl || GroupID.isSDK(o.id));
  },
  isAmino(o: any): o is MsgStartGroupAmino {
    return o && (o.$typeUrl === MsgStartGroup.typeUrl || GroupID.isAmino(o.id));
  },
  encode(message: MsgStartGroup, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== undefined) {
      GroupID.encode(message.id, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgStartGroup {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgStartGroup();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = GroupID.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgStartGroup {
    const obj = createBaseMsgStartGroup();
    if (isSet(object.id)) obj.id = GroupID.fromJSON(object.id);
    return obj;
  },
  toJSON(message: MsgStartGroup): JsonSafe<MsgStartGroup> {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id ? GroupID.toJSON(message.id) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<MsgStartGroup>): MsgStartGroup {
    const message = createBaseMsgStartGroup();
    if (object.id !== undefined && object.id !== null) {
      message.id = GroupID.fromPartial(object.id);
    }
    return message;
  },
  fromSDK(object: MsgStartGroupSDKType): MsgStartGroup {
    return {
      id: object.id ? GroupID.fromSDK(object.id) : undefined
    };
  },
  toSDK(message: MsgStartGroup): MsgStartGroupSDKType {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id ? GroupID.toSDK(message.id) : undefined);
    return obj;
  },
  fromAmino(object: MsgStartGroupAmino): MsgStartGroup {
    const message = createBaseMsgStartGroup();
    if (object.id !== undefined && object.id !== null) {
      message.id = GroupID.fromAmino(object.id);
    }
    return message;
  },
  toAmino(message: MsgStartGroup): MsgStartGroupAmino {
    const obj: any = {};
    obj.id = message.id ? GroupID.toAmino(message.id) : GroupID.toAmino(GroupID.fromPartial({}));
    return obj;
  },
  fromAminoMsg(object: MsgStartGroupAminoMsg): MsgStartGroup {
    return MsgStartGroup.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgStartGroupProtoMsg): MsgStartGroup {
    return MsgStartGroup.decode(message.value);
  },
  toProto(message: MsgStartGroup): Uint8Array {
    return MsgStartGroup.encode(message).finish();
  },
  toProtoMsg(message: MsgStartGroup): MsgStartGroupProtoMsg {
    return {
      typeUrl: "/akash.deployment.v1beta2.MsgStartGroup",
      value: MsgStartGroup.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(MsgStartGroup.typeUrl)) {
      return;
    }
    GroupID.registerTypeUrl();
  }
};
function createBaseMsgStartGroupResponse(): MsgStartGroupResponse {
  return {};
}
/**
 * MsgStartGroupResponse defines the Msg/StartGroup response type.
 * @name MsgStartGroupResponse
 * @package akash.deployment.v1beta2
 * @see proto type: akash.deployment.v1beta2.MsgStartGroupResponse
 */
export const MsgStartGroupResponse = {
  typeUrl: "/akash.deployment.v1beta2.MsgStartGroupResponse",
  is(o: any): o is MsgStartGroupResponse {
    return o && o.$typeUrl === MsgStartGroupResponse.typeUrl;
  },
  isSDK(o: any): o is MsgStartGroupResponseSDKType {
    return o && o.$typeUrl === MsgStartGroupResponse.typeUrl;
  },
  isAmino(o: any): o is MsgStartGroupResponseAmino {
    return o && o.$typeUrl === MsgStartGroupResponse.typeUrl;
  },
  encode(_: MsgStartGroupResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgStartGroupResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgStartGroupResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_: any): MsgStartGroupResponse {
    const obj = createBaseMsgStartGroupResponse();
    return obj;
  },
  toJSON(_: MsgStartGroupResponse): JsonSafe<MsgStartGroupResponse> {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: DeepPartial<MsgStartGroupResponse>): MsgStartGroupResponse {
    const message = createBaseMsgStartGroupResponse();
    return message;
  },
  fromSDK(_: MsgStartGroupResponseSDKType): MsgStartGroupResponse {
    return {};
  },
  toSDK(_: MsgStartGroupResponse): MsgStartGroupResponseSDKType {
    const obj: any = {};
    return obj;
  },
  fromAmino(_: MsgStartGroupResponseAmino): MsgStartGroupResponse {
    const message = createBaseMsgStartGroupResponse();
    return message;
  },
  toAmino(_: MsgStartGroupResponse): MsgStartGroupResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgStartGroupResponseAminoMsg): MsgStartGroupResponse {
    return MsgStartGroupResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgStartGroupResponseProtoMsg): MsgStartGroupResponse {
    return MsgStartGroupResponse.decode(message.value);
  },
  toProto(message: MsgStartGroupResponse): Uint8Array {
    return MsgStartGroupResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgStartGroupResponse): MsgStartGroupResponseProtoMsg {
    return {
      typeUrl: "/akash.deployment.v1beta2.MsgStartGroupResponse",
      value: MsgStartGroupResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};