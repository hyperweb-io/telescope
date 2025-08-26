import { Grant, GrantAmino, GrantSDKType } from "./authz";
import { Any, AnyProtoMsg, AnyAmino, AnySDKType } from "../../../google/protobuf/any";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { GlobalDecoderRegistry } from "../../../registry";
import { isSet, DeepPartial, bytesFromBase64, base64FromBytes } from "../../../helpers";
export const protobufPackage = "cosmos.authz.v1beta1";
/**
 * MsgGrant is a request type for Grant method. It declares authorization to the grantee
 * on behalf of the granter with the provided expiration time.
 * @name MsgGrant
 * @package cosmos.authz.v1beta1
 * @see proto type: cosmos.authz.v1beta1.MsgGrant
 */
export interface MsgGrant {
  granter: string;
  grantee: string;
  grant: Grant;
}
export interface MsgGrantProtoMsg {
  typeUrl: "/cosmos.authz.v1beta1.MsgGrant";
  value: Uint8Array;
}
/**
 * MsgGrant is a request type for Grant method. It declares authorization to the grantee
 * on behalf of the granter with the provided expiration time.
 * @name MsgGrantAmino
 * @package cosmos.authz.v1beta1
 * @see proto type: cosmos.authz.v1beta1.MsgGrant
 */
export interface MsgGrantAmino {
  granter?: string;
  grantee?: string;
  grant?: GrantAmino;
}
/**
 * MsgGrant is a request type for Grant method. It declares authorization to the grantee
 * on behalf of the granter with the provided expiration time.
 * @name MsgGrantSDKType
 * @package cosmos.authz.v1beta1
 * @see proto type: cosmos.authz.v1beta1.MsgGrant
 */
export interface MsgGrantSDKType {
  granter: string;
  grantee: string;
  grant: GrantSDKType;
}
/**
 * MsgExecResponse defines the Msg/MsgExecResponse response type.
 * @name MsgExecResponse
 * @package cosmos.authz.v1beta1
 * @see proto type: cosmos.authz.v1beta1.MsgExecResponse
 */
export interface MsgExecResponse {
  results: Uint8Array[];
}
export interface MsgExecResponseProtoMsg {
  typeUrl: "/cosmos.authz.v1beta1.MsgExecResponse";
  value: Uint8Array;
}
/**
 * MsgExecResponse defines the Msg/MsgExecResponse response type.
 * @name MsgExecResponseAmino
 * @package cosmos.authz.v1beta1
 * @see proto type: cosmos.authz.v1beta1.MsgExecResponse
 */
export interface MsgExecResponseAmino {
  results?: string[];
}
/**
 * MsgExecResponse defines the Msg/MsgExecResponse response type.
 * @name MsgExecResponseSDKType
 * @package cosmos.authz.v1beta1
 * @see proto type: cosmos.authz.v1beta1.MsgExecResponse
 */
export interface MsgExecResponseSDKType {
  results: Uint8Array[];
}
/**
 * MsgExec attempts to execute the provided messages using
 * authorizations granted to the grantee. Each message should have only
 * one signer corresponding to the granter of the authorization.
 * @name MsgExec
 * @package cosmos.authz.v1beta1
 * @see proto type: cosmos.authz.v1beta1.MsgExec
 */
export interface MsgExec {
  grantee: string;
  /**
   * Authorization Msg requests to execute. Each msg must implement Authorization interface
   * The x/authz will try to find a grant matching (msg.signers[0], grantee, MsgTypeURL(msg))
   * triple and validate it.
   */
  msgs: (Any)[] | Any[];
}
export interface MsgExecProtoMsg {
  typeUrl: "/cosmos.authz.v1beta1.MsgExec";
  value: Uint8Array;
}
export type MsgExecEncoded = Omit<MsgExec, "msgs"> & {
  /**
   * Authorization Msg requests to execute. Each msg must implement Authorization interface
   * The x/authz will try to find a grant matching (msg.signers[0], grantee, MsgTypeURL(msg))
   * triple and validate it.
   */
  msgs: (AnyProtoMsg)[];
};
/**
 * MsgExec attempts to execute the provided messages using
 * authorizations granted to the grantee. Each message should have only
 * one signer corresponding to the granter of the authorization.
 * @name MsgExecAmino
 * @package cosmos.authz.v1beta1
 * @see proto type: cosmos.authz.v1beta1.MsgExec
 */
export interface MsgExecAmino {
  grantee?: string;
  /**
   * Authorization Msg requests to execute. Each msg must implement Authorization interface
   * The x/authz will try to find a grant matching (msg.signers[0], grantee, MsgTypeURL(msg))
   * triple and validate it.
   */
  msgs?: AnyAmino[];
}
/**
 * MsgExec attempts to execute the provided messages using
 * authorizations granted to the grantee. Each message should have only
 * one signer corresponding to the granter of the authorization.
 * @name MsgExecSDKType
 * @package cosmos.authz.v1beta1
 * @see proto type: cosmos.authz.v1beta1.MsgExec
 */
export interface MsgExecSDKType {
  grantee: string;
  msgs: (AnySDKType)[];
}
/**
 * MsgGrantResponse defines the Msg/MsgGrant response type.
 * @name MsgGrantResponse
 * @package cosmos.authz.v1beta1
 * @see proto type: cosmos.authz.v1beta1.MsgGrantResponse
 */
export interface MsgGrantResponse {}
export interface MsgGrantResponseProtoMsg {
  typeUrl: "/cosmos.authz.v1beta1.MsgGrantResponse";
  value: Uint8Array;
}
/**
 * MsgGrantResponse defines the Msg/MsgGrant response type.
 * @name MsgGrantResponseAmino
 * @package cosmos.authz.v1beta1
 * @see proto type: cosmos.authz.v1beta1.MsgGrantResponse
 */
export interface MsgGrantResponseAmino {}
/**
 * MsgGrantResponse defines the Msg/MsgGrant response type.
 * @name MsgGrantResponseSDKType
 * @package cosmos.authz.v1beta1
 * @see proto type: cosmos.authz.v1beta1.MsgGrantResponse
 */
export interface MsgGrantResponseSDKType {}
/**
 * MsgRevoke revokes any authorization with the provided sdk.Msg type on the
 * granter's account with that has been granted to the grantee.
 * @name MsgRevoke
 * @package cosmos.authz.v1beta1
 * @see proto type: cosmos.authz.v1beta1.MsgRevoke
 */
export interface MsgRevoke {
  granter: string;
  grantee: string;
  msgTypeUrl: string;
}
export interface MsgRevokeProtoMsg {
  typeUrl: "/cosmos.authz.v1beta1.MsgRevoke";
  value: Uint8Array;
}
/**
 * MsgRevoke revokes any authorization with the provided sdk.Msg type on the
 * granter's account with that has been granted to the grantee.
 * @name MsgRevokeAmino
 * @package cosmos.authz.v1beta1
 * @see proto type: cosmos.authz.v1beta1.MsgRevoke
 */
export interface MsgRevokeAmino {
  granter?: string;
  grantee?: string;
  msg_type_url?: string;
}
/**
 * MsgRevoke revokes any authorization with the provided sdk.Msg type on the
 * granter's account with that has been granted to the grantee.
 * @name MsgRevokeSDKType
 * @package cosmos.authz.v1beta1
 * @see proto type: cosmos.authz.v1beta1.MsgRevoke
 */
export interface MsgRevokeSDKType {
  granter: string;
  grantee: string;
  msg_type_url: string;
}
/**
 * MsgRevokeResponse defines the Msg/MsgRevokeResponse response type.
 * @name MsgRevokeResponse
 * @package cosmos.authz.v1beta1
 * @see proto type: cosmos.authz.v1beta1.MsgRevokeResponse
 */
export interface MsgRevokeResponse {}
export interface MsgRevokeResponseProtoMsg {
  typeUrl: "/cosmos.authz.v1beta1.MsgRevokeResponse";
  value: Uint8Array;
}
/**
 * MsgRevokeResponse defines the Msg/MsgRevokeResponse response type.
 * @name MsgRevokeResponseAmino
 * @package cosmos.authz.v1beta1
 * @see proto type: cosmos.authz.v1beta1.MsgRevokeResponse
 */
export interface MsgRevokeResponseAmino {}
/**
 * MsgRevokeResponse defines the Msg/MsgRevokeResponse response type.
 * @name MsgRevokeResponseSDKType
 * @package cosmos.authz.v1beta1
 * @see proto type: cosmos.authz.v1beta1.MsgRevokeResponse
 */
export interface MsgRevokeResponseSDKType {}
function createBaseMsgGrant(): MsgGrant {
  return {
    granter: "",
    grantee: "",
    grant: Grant.fromPartial({})
  };
}
/**
 * MsgGrant is a request type for Grant method. It declares authorization to the grantee
 * on behalf of the granter with the provided expiration time.
 * @name MsgGrant
 * @package cosmos.authz.v1beta1
 * @see proto type: cosmos.authz.v1beta1.MsgGrant
 */
export const MsgGrant = {
  typeUrl: "/cosmos.authz.v1beta1.MsgGrant",
  aminoType: "cosmos-sdk/MsgGrant",
  is(o: any): o is MsgGrant {
    return o && (o.$typeUrl === MsgGrant.typeUrl || typeof o.granter === "string" && typeof o.grantee === "string" && Grant.is(o.grant));
  },
  isSDK(o: any): o is MsgGrantSDKType {
    return o && (o.$typeUrl === MsgGrant.typeUrl || typeof o.granter === "string" && typeof o.grantee === "string" && Grant.isSDK(o.grant));
  },
  isAmino(o: any): o is MsgGrantAmino {
    return o && (o.$typeUrl === MsgGrant.typeUrl || typeof o.granter === "string" && typeof o.grantee === "string" && Grant.isAmino(o.grant));
  },
  encode(message: MsgGrant, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.granter !== "") {
      writer.uint32(10).string(message.granter);
    }
    if (message.grantee !== "") {
      writer.uint32(18).string(message.grantee);
    }
    if (message.grant !== undefined) {
      Grant.encode(message.grant, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): MsgGrant {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgGrant();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.granter = reader.string();
          break;
        case 2:
          message.grantee = reader.string();
          break;
        case 3:
          message.grant = Grant.decode(reader, reader.uint32(), useInterfaces);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgGrant {
    const obj = createBaseMsgGrant();
    if (isSet(object.granter)) obj.granter = String(object.granter);
    if (isSet(object.grantee)) obj.grantee = String(object.grantee);
    if (isSet(object.grant)) obj.grant = Grant.fromJSON(object.grant);
    return obj;
  },
  fromPartial(object: DeepPartial<MsgGrant>): MsgGrant {
    const message = createBaseMsgGrant();
    message.granter = object.granter ?? "";
    message.grantee = object.grantee ?? "";
    if (object.grant !== undefined && object.grant !== null) {
      message.grant = Grant.fromPartial(object.grant);
    }
    return message;
  },
  fromSDK(object: MsgGrantSDKType): MsgGrant {
    return {
      granter: object?.granter,
      grantee: object?.grantee,
      grant: object.grant ? Grant.fromSDK(object.grant) : undefined
    };
  },
  toSDK(message: MsgGrant): MsgGrantSDKType {
    const obj: any = {};
    obj.granter = message.granter;
    obj.grantee = message.grantee;
    message.grant !== undefined && (obj.grant = message.grant ? Grant.toSDK(message.grant) : undefined);
    return obj;
  },
  fromAmino(object: MsgGrantAmino): MsgGrant {
    const message = createBaseMsgGrant();
    if (object.granter !== undefined && object.granter !== null) {
      message.granter = object.granter;
    }
    if (object.grantee !== undefined && object.grantee !== null) {
      message.grantee = object.grantee;
    }
    if (object.grant !== undefined && object.grant !== null) {
      message.grant = Grant.fromAmino(object.grant);
    }
    return message;
  },
  toAmino(message: MsgGrant, useInterfaces: boolean = true): MsgGrantAmino {
    const obj: any = {};
    obj.granter = message.granter === "" ? undefined : message.granter;
    obj.grantee = message.grantee === "" ? undefined : message.grantee;
    obj.grant = message.grant ? Grant.toAmino(message.grant, useInterfaces) : undefined;
    return obj;
  },
  fromProtoMsg(message: MsgGrantProtoMsg, useInterfaces: boolean = true): MsgGrant {
    return MsgGrant.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: MsgGrant): Uint8Array {
    return MsgGrant.encode(message).finish();
  },
  toProtoMsg(message: MsgGrant): MsgGrantProtoMsg {
    return {
      typeUrl: "/cosmos.authz.v1beta1.MsgGrant",
      value: MsgGrant.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(MsgGrant.typeUrl)) {
      return;
    }
    Grant.registerTypeUrl();
  }
};
function createBaseMsgExecResponse(): MsgExecResponse {
  return {
    results: []
  };
}
/**
 * MsgExecResponse defines the Msg/MsgExecResponse response type.
 * @name MsgExecResponse
 * @package cosmos.authz.v1beta1
 * @see proto type: cosmos.authz.v1beta1.MsgExecResponse
 */
export const MsgExecResponse = {
  typeUrl: "/cosmos.authz.v1beta1.MsgExecResponse",
  aminoType: "cosmos-sdk/MsgExecResponse",
  is(o: any): o is MsgExecResponse {
    return o && (o.$typeUrl === MsgExecResponse.typeUrl || Array.isArray(o.results) && (!o.results.length || o.results[0] instanceof Uint8Array || typeof o.results[0] === "string"));
  },
  isSDK(o: any): o is MsgExecResponseSDKType {
    return o && (o.$typeUrl === MsgExecResponse.typeUrl || Array.isArray(o.results) && (!o.results.length || o.results[0] instanceof Uint8Array || typeof o.results[0] === "string"));
  },
  isAmino(o: any): o is MsgExecResponseAmino {
    return o && (o.$typeUrl === MsgExecResponse.typeUrl || Array.isArray(o.results) && (!o.results.length || o.results[0] instanceof Uint8Array || typeof o.results[0] === "string"));
  },
  encode(message: MsgExecResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.results) {
      writer.uint32(10).bytes(v!);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): MsgExecResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgExecResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.results.push(reader.bytes());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgExecResponse {
    const obj = createBaseMsgExecResponse();
    if (Array.isArray(object?.results)) obj.results = object.results.map((e: any) => bytesFromBase64(e));
    return obj;
  },
  fromPartial(object: DeepPartial<MsgExecResponse>): MsgExecResponse {
    const message = createBaseMsgExecResponse();
    message.results = object.results?.map(e => e) || [];
    return message;
  },
  fromSDK(object: MsgExecResponseSDKType): MsgExecResponse {
    return {
      results: Array.isArray(object?.results) ? object.results.map((e: any) => e) : []
    };
  },
  toSDK(message: MsgExecResponse): MsgExecResponseSDKType {
    const obj: any = {};
    if (message.results) {
      obj.results = message.results.map(e => e);
    } else {
      obj.results = [];
    }
    return obj;
  },
  fromAmino(object: MsgExecResponseAmino): MsgExecResponse {
    const message = createBaseMsgExecResponse();
    message.results = object.results?.map(e => bytesFromBase64(e)) || [];
    return message;
  },
  toAmino(message: MsgExecResponse, useInterfaces: boolean = true): MsgExecResponseAmino {
    const obj: any = {};
    if (message.results) {
      obj.results = message.results.map(e => base64FromBytes(e));
    } else {
      obj.results = message.results;
    }
    return obj;
  },
  fromProtoMsg(message: MsgExecResponseProtoMsg, useInterfaces: boolean = true): MsgExecResponse {
    return MsgExecResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: MsgExecResponse): Uint8Array {
    return MsgExecResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgExecResponse): MsgExecResponseProtoMsg {
    return {
      typeUrl: "/cosmos.authz.v1beta1.MsgExecResponse",
      value: MsgExecResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseMsgExec(): MsgExec {
  return {
    grantee: "",
    msgs: []
  };
}
/**
 * MsgExec attempts to execute the provided messages using
 * authorizations granted to the grantee. Each message should have only
 * one signer corresponding to the granter of the authorization.
 * @name MsgExec
 * @package cosmos.authz.v1beta1
 * @see proto type: cosmos.authz.v1beta1.MsgExec
 */
export const MsgExec = {
  typeUrl: "/cosmos.authz.v1beta1.MsgExec",
  aminoType: "cosmos-sdk/MsgExec",
  is(o: any): o is MsgExec {
    return o && (o.$typeUrl === MsgExec.typeUrl || typeof o.grantee === "string" && Array.isArray(o.msgs) && (!o.msgs.length || Any.is(o.msgs[0])));
  },
  isSDK(o: any): o is MsgExecSDKType {
    return o && (o.$typeUrl === MsgExec.typeUrl || typeof o.grantee === "string" && Array.isArray(o.msgs) && (!o.msgs.length || Any.isSDK(o.msgs[0])));
  },
  isAmino(o: any): o is MsgExecAmino {
    return o && (o.$typeUrl === MsgExec.typeUrl || typeof o.grantee === "string" && Array.isArray(o.msgs) && (!o.msgs.length || Any.isAmino(o.msgs[0])));
  },
  encode(message: MsgExec, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.grantee !== "") {
      writer.uint32(10).string(message.grantee);
    }
    for (const v of message.msgs) {
      Any.encode(GlobalDecoderRegistry.wrapAny(v!), writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): MsgExec {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgExec();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.grantee = reader.string();
          break;
        case 2:
          message.msgs.push(GlobalDecoderRegistry.unwrapAny(reader));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgExec {
    const obj = createBaseMsgExec();
    if (isSet(object.grantee)) obj.grantee = String(object.grantee);
    if (Array.isArray(object?.msgs)) obj.msgs = object.msgs.map((e: any) => GlobalDecoderRegistry.fromJSON(e));
    return obj;
  },
  fromPartial(object: DeepPartial<MsgExec>): MsgExec {
    const message = createBaseMsgExec();
    message.grantee = object.grantee ?? "";
    message.msgs = object.msgs?.map(e => (GlobalDecoderRegistry.fromPartial(e) as any)) || [];
    return message;
  },
  fromSDK(object: MsgExecSDKType): MsgExec {
    return {
      grantee: object?.grantee,
      msgs: Array.isArray(object?.msgs) ? object.msgs.map((e: any) => GlobalDecoderRegistry.fromSDK(e)) : []
    };
  },
  toSDK(message: MsgExec): MsgExecSDKType {
    const obj: any = {};
    obj.grantee = message.grantee;
    if (message.msgs) {
      obj.msgs = message.msgs.map(e => e ? GlobalDecoderRegistry.toSDK(e) : undefined);
    } else {
      obj.msgs = [];
    }
    return obj;
  },
  fromAmino(object: MsgExecAmino): MsgExec {
    const message = createBaseMsgExec();
    if (object.grantee !== undefined && object.grantee !== null) {
      message.grantee = object.grantee;
    }
    message.msgs = object.msgs?.map(e => GlobalDecoderRegistry.fromAminoMsg(e)) || [];
    return message;
  },
  toAmino(message: MsgExec, useInterfaces: boolean = true): MsgExecAmino {
    const obj: any = {};
    obj.grantee = message.grantee === "" ? undefined : message.grantee;
    if (message.msgs) {
      obj.msgs = message.msgs.map(e => e ? GlobalDecoderRegistry.toAminoMsg(e) : undefined);
    } else {
      obj.msgs = message.msgs;
    }
    return obj;
  },
  fromProtoMsg(message: MsgExecProtoMsg, useInterfaces: boolean = true): MsgExec {
    return MsgExec.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: MsgExec): Uint8Array {
    return MsgExec.encode(message).finish();
  },
  toProtoMsg(message: MsgExec): MsgExecProtoMsg {
    return {
      typeUrl: "/cosmos.authz.v1beta1.MsgExec",
      value: MsgExec.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseMsgGrantResponse(): MsgGrantResponse {
  return {};
}
/**
 * MsgGrantResponse defines the Msg/MsgGrant response type.
 * @name MsgGrantResponse
 * @package cosmos.authz.v1beta1
 * @see proto type: cosmos.authz.v1beta1.MsgGrantResponse
 */
export const MsgGrantResponse = {
  typeUrl: "/cosmos.authz.v1beta1.MsgGrantResponse",
  aminoType: "cosmos-sdk/MsgGrantResponse",
  is(o: any): o is MsgGrantResponse {
    return o && o.$typeUrl === MsgGrantResponse.typeUrl;
  },
  isSDK(o: any): o is MsgGrantResponseSDKType {
    return o && o.$typeUrl === MsgGrantResponse.typeUrl;
  },
  isAmino(o: any): o is MsgGrantResponseAmino {
    return o && o.$typeUrl === MsgGrantResponse.typeUrl;
  },
  encode(_: MsgGrantResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): MsgGrantResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgGrantResponse();
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
  fromJSON(_: any): MsgGrantResponse {
    const obj = createBaseMsgGrantResponse();
    return obj;
  },
  fromPartial(_: DeepPartial<MsgGrantResponse>): MsgGrantResponse {
    const message = createBaseMsgGrantResponse();
    return message;
  },
  fromSDK(_: MsgGrantResponseSDKType): MsgGrantResponse {
    return {};
  },
  toSDK(_: MsgGrantResponse): MsgGrantResponseSDKType {
    const obj: any = {};
    return obj;
  },
  fromAmino(_: MsgGrantResponseAmino): MsgGrantResponse {
    const message = createBaseMsgGrantResponse();
    return message;
  },
  toAmino(_: MsgGrantResponse, useInterfaces: boolean = true): MsgGrantResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromProtoMsg(message: MsgGrantResponseProtoMsg, useInterfaces: boolean = true): MsgGrantResponse {
    return MsgGrantResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: MsgGrantResponse): Uint8Array {
    return MsgGrantResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgGrantResponse): MsgGrantResponseProtoMsg {
    return {
      typeUrl: "/cosmos.authz.v1beta1.MsgGrantResponse",
      value: MsgGrantResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseMsgRevoke(): MsgRevoke {
  return {
    granter: "",
    grantee: "",
    msgTypeUrl: ""
  };
}
/**
 * MsgRevoke revokes any authorization with the provided sdk.Msg type on the
 * granter's account with that has been granted to the grantee.
 * @name MsgRevoke
 * @package cosmos.authz.v1beta1
 * @see proto type: cosmos.authz.v1beta1.MsgRevoke
 */
export const MsgRevoke = {
  typeUrl: "/cosmos.authz.v1beta1.MsgRevoke",
  aminoType: "cosmos-sdk/MsgRevoke",
  is(o: any): o is MsgRevoke {
    return o && (o.$typeUrl === MsgRevoke.typeUrl || typeof o.granter === "string" && typeof o.grantee === "string" && typeof o.msgTypeUrl === "string");
  },
  isSDK(o: any): o is MsgRevokeSDKType {
    return o && (o.$typeUrl === MsgRevoke.typeUrl || typeof o.granter === "string" && typeof o.grantee === "string" && typeof o.msg_type_url === "string");
  },
  isAmino(o: any): o is MsgRevokeAmino {
    return o && (o.$typeUrl === MsgRevoke.typeUrl || typeof o.granter === "string" && typeof o.grantee === "string" && typeof o.msg_type_url === "string");
  },
  encode(message: MsgRevoke, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.granter !== "") {
      writer.uint32(10).string(message.granter);
    }
    if (message.grantee !== "") {
      writer.uint32(18).string(message.grantee);
    }
    if (message.msgTypeUrl !== "") {
      writer.uint32(26).string(message.msgTypeUrl);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): MsgRevoke {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRevoke();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.granter = reader.string();
          break;
        case 2:
          message.grantee = reader.string();
          break;
        case 3:
          message.msgTypeUrl = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgRevoke {
    const obj = createBaseMsgRevoke();
    if (isSet(object.granter)) obj.granter = String(object.granter);
    if (isSet(object.grantee)) obj.grantee = String(object.grantee);
    if (isSet(object.msgTypeUrl)) obj.msgTypeUrl = String(object.msgTypeUrl);
    return obj;
  },
  fromPartial(object: DeepPartial<MsgRevoke>): MsgRevoke {
    const message = createBaseMsgRevoke();
    message.granter = object.granter ?? "";
    message.grantee = object.grantee ?? "";
    message.msgTypeUrl = object.msgTypeUrl ?? "";
    return message;
  },
  fromSDK(object: MsgRevokeSDKType): MsgRevoke {
    return {
      granter: object?.granter,
      grantee: object?.grantee,
      msgTypeUrl: object?.msg_type_url
    };
  },
  toSDK(message: MsgRevoke): MsgRevokeSDKType {
    const obj: any = {};
    obj.granter = message.granter;
    obj.grantee = message.grantee;
    obj.msg_type_url = message.msgTypeUrl;
    return obj;
  },
  fromAmino(object: MsgRevokeAmino): MsgRevoke {
    const message = createBaseMsgRevoke();
    if (object.granter !== undefined && object.granter !== null) {
      message.granter = object.granter;
    }
    if (object.grantee !== undefined && object.grantee !== null) {
      message.grantee = object.grantee;
    }
    if (object.msg_type_url !== undefined && object.msg_type_url !== null) {
      message.msgTypeUrl = object.msg_type_url;
    }
    return message;
  },
  toAmino(message: MsgRevoke, useInterfaces: boolean = true): MsgRevokeAmino {
    const obj: any = {};
    obj.granter = message.granter === "" ? undefined : message.granter;
    obj.grantee = message.grantee === "" ? undefined : message.grantee;
    obj.msg_type_url = message.msgTypeUrl === "" ? undefined : message.msgTypeUrl;
    return obj;
  },
  fromProtoMsg(message: MsgRevokeProtoMsg, useInterfaces: boolean = true): MsgRevoke {
    return MsgRevoke.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: MsgRevoke): Uint8Array {
    return MsgRevoke.encode(message).finish();
  },
  toProtoMsg(message: MsgRevoke): MsgRevokeProtoMsg {
    return {
      typeUrl: "/cosmos.authz.v1beta1.MsgRevoke",
      value: MsgRevoke.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseMsgRevokeResponse(): MsgRevokeResponse {
  return {};
}
/**
 * MsgRevokeResponse defines the Msg/MsgRevokeResponse response type.
 * @name MsgRevokeResponse
 * @package cosmos.authz.v1beta1
 * @see proto type: cosmos.authz.v1beta1.MsgRevokeResponse
 */
export const MsgRevokeResponse = {
  typeUrl: "/cosmos.authz.v1beta1.MsgRevokeResponse",
  aminoType: "cosmos-sdk/MsgRevokeResponse",
  is(o: any): o is MsgRevokeResponse {
    return o && o.$typeUrl === MsgRevokeResponse.typeUrl;
  },
  isSDK(o: any): o is MsgRevokeResponseSDKType {
    return o && o.$typeUrl === MsgRevokeResponse.typeUrl;
  },
  isAmino(o: any): o is MsgRevokeResponseAmino {
    return o && o.$typeUrl === MsgRevokeResponse.typeUrl;
  },
  encode(_: MsgRevokeResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): MsgRevokeResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRevokeResponse();
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
  fromJSON(_: any): MsgRevokeResponse {
    const obj = createBaseMsgRevokeResponse();
    return obj;
  },
  fromPartial(_: DeepPartial<MsgRevokeResponse>): MsgRevokeResponse {
    const message = createBaseMsgRevokeResponse();
    return message;
  },
  fromSDK(_: MsgRevokeResponseSDKType): MsgRevokeResponse {
    return {};
  },
  toSDK(_: MsgRevokeResponse): MsgRevokeResponseSDKType {
    const obj: any = {};
    return obj;
  },
  fromAmino(_: MsgRevokeResponseAmino): MsgRevokeResponse {
    const message = createBaseMsgRevokeResponse();
    return message;
  },
  toAmino(_: MsgRevokeResponse, useInterfaces: boolean = true): MsgRevokeResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromProtoMsg(message: MsgRevokeResponseProtoMsg, useInterfaces: boolean = true): MsgRevokeResponse {
    return MsgRevokeResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: MsgRevokeResponse): Uint8Array {
    return MsgRevokeResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgRevokeResponse): MsgRevokeResponseProtoMsg {
    return {
      typeUrl: "/cosmos.authz.v1beta1.MsgRevokeResponse",
      value: MsgRevokeResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};