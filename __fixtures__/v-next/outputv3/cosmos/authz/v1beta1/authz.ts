import { Any, AnyProtoMsg, AnyAmino, AnySDKType } from "../../../google/protobuf/any";
import { Timestamp, TimestampAmino, TimestampSDKType } from "../../../google/protobuf/timestamp";
import { DepositDeploymentAuthorization as DepositDeploymentAuthorization1 } from "../../../akash/deployment/v1beta1/authz";
import { DepositDeploymentAuthorizationProtoMsg as DepositDeploymentAuthorization1ProtoMsg } from "../../../akash/deployment/v1beta1/authz";
import { DepositDeploymentAuthorizationSDKType as DepositDeploymentAuthorization1SDKType } from "../../../akash/deployment/v1beta1/authz";
import { DepositDeploymentAuthorization as DepositDeploymentAuthorization2 } from "../../../akash/deployment/v1beta2/authz";
import { DepositDeploymentAuthorizationProtoMsg as DepositDeploymentAuthorization2ProtoMsg } from "../../../akash/deployment/v1beta2/authz";
import { DepositDeploymentAuthorizationSDKType as DepositDeploymentAuthorization2SDKType } from "../../../akash/deployment/v1beta2/authz";
import { SendAuthorization, SendAuthorizationProtoMsg, SendAuthorizationSDKType } from "../../bank/v1beta1/authz";
import { StakeAuthorization, StakeAuthorizationProtoMsg, StakeAuthorizationSDKType } from "../../staking/v1beta1/authz";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet, DeepPartial, toTimestamp, fromTimestamp } from "../../../helpers";
import { GlobalDecoderRegistry } from "../../../registry";
export const protobufPackage = "cosmos.authz.v1beta1";
/**
 * GenericAuthorization gives the grantee unrestricted permissions to execute
 * the provided method on behalf of the granter's account.
 * @name GenericAuthorization
 * @package cosmos.authz.v1beta1
 * @see proto type: cosmos.authz.v1beta1.GenericAuthorization
 */
export interface GenericAuthorization {
  $typeUrl?: "/cosmos.authz.v1beta1.GenericAuthorization";
  /**
   * Msg, identified by it's type URL, to grant unrestricted permissions to execute
   */
  msg: string;
}
export interface GenericAuthorizationProtoMsg {
  typeUrl: "/cosmos.authz.v1beta1.GenericAuthorization";
  value: Uint8Array;
}
/**
 * GenericAuthorization gives the grantee unrestricted permissions to execute
 * the provided method on behalf of the granter's account.
 * @name GenericAuthorizationAmino
 * @package cosmos.authz.v1beta1
 * @see proto type: cosmos.authz.v1beta1.GenericAuthorization
 */
export interface GenericAuthorizationAmino {
  /**
   * Msg, identified by it's type URL, to grant unrestricted permissions to execute
   */
  msg?: string;
}
/**
 * GenericAuthorization gives the grantee unrestricted permissions to execute
 * the provided method on behalf of the granter's account.
 * @name GenericAuthorizationSDKType
 * @package cosmos.authz.v1beta1
 * @see proto type: cosmos.authz.v1beta1.GenericAuthorization
 */
export interface GenericAuthorizationSDKType {
  $typeUrl?: "/cosmos.authz.v1beta1.GenericAuthorization";
  msg: string;
}
/**
 * Grant gives permissions to execute
 * the provide method with expiration time.
 * @name Grant
 * @package cosmos.authz.v1beta1
 * @see proto type: cosmos.authz.v1beta1.Grant
 */
export interface Grant {
  authorization?: GenericAuthorization | DepositDeploymentAuthorization1 | DepositDeploymentAuthorization2 | SendAuthorization | StakeAuthorization | Any | undefined;
  /**
   * time when the grant will expire and will be pruned. If null, then the grant
   * doesn't have a time expiration (other conditions  in `authorization`
   * may apply to invalidate the grant)
   */
  expiration?: Date;
}
export interface GrantProtoMsg {
  typeUrl: "/cosmos.authz.v1beta1.Grant";
  value: Uint8Array;
}
export type GrantEncoded = Omit<Grant, "authorization"> & {
  authorization?: GenericAuthorizationProtoMsg | DepositDeploymentAuthorization1ProtoMsg | DepositDeploymentAuthorization2ProtoMsg | SendAuthorizationProtoMsg | StakeAuthorizationProtoMsg | AnyProtoMsg | undefined;
};
/**
 * Grant gives permissions to execute
 * the provide method with expiration time.
 * @name GrantAmino
 * @package cosmos.authz.v1beta1
 * @see proto type: cosmos.authz.v1beta1.Grant
 */
export interface GrantAmino {
  authorization?: AnyAmino;
  /**
   * time when the grant will expire and will be pruned. If null, then the grant
   * doesn't have a time expiration (other conditions  in `authorization`
   * may apply to invalidate the grant)
   */
  expiration?: string;
}
/**
 * Grant gives permissions to execute
 * the provide method with expiration time.
 * @name GrantSDKType
 * @package cosmos.authz.v1beta1
 * @see proto type: cosmos.authz.v1beta1.Grant
 */
export interface GrantSDKType {
  authorization?: GenericAuthorizationSDKType | DepositDeploymentAuthorization1SDKType | DepositDeploymentAuthorization2SDKType | SendAuthorizationSDKType | StakeAuthorizationSDKType | AnySDKType | undefined;
  expiration?: Date;
}
/**
 * GrantAuthorization extends a grant with both the addresses of the grantee and granter.
 * It is used in genesis.proto and query.proto
 * @name GrantAuthorization
 * @package cosmos.authz.v1beta1
 * @see proto type: cosmos.authz.v1beta1.GrantAuthorization
 */
export interface GrantAuthorization {
  granter: string;
  grantee: string;
  authorization?: GenericAuthorization | DepositDeploymentAuthorization1 | DepositDeploymentAuthorization2 | SendAuthorization | StakeAuthorization | Any | undefined;
  expiration?: Date;
}
export interface GrantAuthorizationProtoMsg {
  typeUrl: "/cosmos.authz.v1beta1.GrantAuthorization";
  value: Uint8Array;
}
export type GrantAuthorizationEncoded = Omit<GrantAuthorization, "authorization"> & {
  authorization?: GenericAuthorizationProtoMsg | DepositDeploymentAuthorization1ProtoMsg | DepositDeploymentAuthorization2ProtoMsg | SendAuthorizationProtoMsg | StakeAuthorizationProtoMsg | AnyProtoMsg | undefined;
};
/**
 * GrantAuthorization extends a grant with both the addresses of the grantee and granter.
 * It is used in genesis.proto and query.proto
 * @name GrantAuthorizationAmino
 * @package cosmos.authz.v1beta1
 * @see proto type: cosmos.authz.v1beta1.GrantAuthorization
 */
export interface GrantAuthorizationAmino {
  granter?: string;
  grantee?: string;
  authorization?: AnyAmino;
  expiration?: string;
}
/**
 * GrantAuthorization extends a grant with both the addresses of the grantee and granter.
 * It is used in genesis.proto and query.proto
 * @name GrantAuthorizationSDKType
 * @package cosmos.authz.v1beta1
 * @see proto type: cosmos.authz.v1beta1.GrantAuthorization
 */
export interface GrantAuthorizationSDKType {
  granter: string;
  grantee: string;
  authorization?: GenericAuthorizationSDKType | DepositDeploymentAuthorization1SDKType | DepositDeploymentAuthorization2SDKType | SendAuthorizationSDKType | StakeAuthorizationSDKType | AnySDKType | undefined;
  expiration?: Date;
}
/**
 * GrantQueueItem contains the list of TypeURL of a sdk.Msg.
 * @name GrantQueueItem
 * @package cosmos.authz.v1beta1
 * @see proto type: cosmos.authz.v1beta1.GrantQueueItem
 */
export interface GrantQueueItem {
  /**
   * msg_type_urls contains the list of TypeURL of a sdk.Msg.
   */
  msgTypeUrls: string[];
}
export interface GrantQueueItemProtoMsg {
  typeUrl: "/cosmos.authz.v1beta1.GrantQueueItem";
  value: Uint8Array;
}
/**
 * GrantQueueItem contains the list of TypeURL of a sdk.Msg.
 * @name GrantQueueItemAmino
 * @package cosmos.authz.v1beta1
 * @see proto type: cosmos.authz.v1beta1.GrantQueueItem
 */
export interface GrantQueueItemAmino {
  /**
   * msg_type_urls contains the list of TypeURL of a sdk.Msg.
   */
  msg_type_urls?: string[];
}
/**
 * GrantQueueItem contains the list of TypeURL of a sdk.Msg.
 * @name GrantQueueItemSDKType
 * @package cosmos.authz.v1beta1
 * @see proto type: cosmos.authz.v1beta1.GrantQueueItem
 */
export interface GrantQueueItemSDKType {
  msg_type_urls: string[];
}
function createBaseGenericAuthorization(): GenericAuthorization {
  return {
    $typeUrl: "/cosmos.authz.v1beta1.GenericAuthorization",
    msg: ""
  };
}
/**
 * GenericAuthorization gives the grantee unrestricted permissions to execute
 * the provided method on behalf of the granter's account.
 * @name GenericAuthorization
 * @package cosmos.authz.v1beta1
 * @see proto type: cosmos.authz.v1beta1.GenericAuthorization
 */
export const GenericAuthorization = {
  typeUrl: "/cosmos.authz.v1beta1.GenericAuthorization",
  aminoType: "cosmos-sdk/GenericAuthorization",
  is(o: any): o is GenericAuthorization {
    return o && (o.$typeUrl === GenericAuthorization.typeUrl || typeof o.msg === "string");
  },
  isSDK(o: any): o is GenericAuthorizationSDKType {
    return o && (o.$typeUrl === GenericAuthorization.typeUrl || typeof o.msg === "string");
  },
  isAmino(o: any): o is GenericAuthorizationAmino {
    return o && (o.$typeUrl === GenericAuthorization.typeUrl || typeof o.msg === "string");
  },
  encode(message: GenericAuthorization, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.msg !== "") {
      writer.uint32(10).string(message.msg);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): GenericAuthorization {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenericAuthorization();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.msg = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): GenericAuthorization {
    const obj = createBaseGenericAuthorization();
    if (isSet(object.msg)) obj.msg = String(object.msg);
    return obj;
  },
  fromPartial(object: DeepPartial<GenericAuthorization>): GenericAuthorization {
    const message = createBaseGenericAuthorization();
    message.msg = object.msg ?? "";
    return message;
  },
  fromSDK(object: GenericAuthorizationSDKType): GenericAuthorization {
    return {
      msg: object?.msg
    };
  },
  toSDK(message: GenericAuthorization): GenericAuthorizationSDKType {
    const obj: any = {};
    obj.msg = message.msg;
    return obj;
  },
  fromAmino(object: GenericAuthorizationAmino): GenericAuthorization {
    const message = createBaseGenericAuthorization();
    if (object.msg !== undefined && object.msg !== null) {
      message.msg = object.msg;
    }
    return message;
  },
  toAmino(message: GenericAuthorization, useInterfaces: boolean = true): GenericAuthorizationAmino {
    const obj: any = {};
    obj.msg = message.msg === "" ? undefined : message.msg;
    return obj;
  },
  fromProtoMsg(message: GenericAuthorizationProtoMsg, useInterfaces: boolean = true): GenericAuthorization {
    return GenericAuthorization.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: GenericAuthorization): Uint8Array {
    return GenericAuthorization.encode(message).finish();
  },
  toProtoMsg(message: GenericAuthorization): GenericAuthorizationProtoMsg {
    return {
      typeUrl: "/cosmos.authz.v1beta1.GenericAuthorization",
      value: GenericAuthorization.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(GenericAuthorization.typeUrl)) {
      return;
    }
    GlobalDecoderRegistry.register(GenericAuthorization.typeUrl, GenericAuthorization);
    GlobalDecoderRegistry.registerAminoProtoMapping(GenericAuthorization.aminoType, GenericAuthorization.typeUrl);
  }
};
function createBaseGrant(): Grant {
  return {
    authorization: undefined,
    expiration: undefined
  };
}
/**
 * Grant gives permissions to execute
 * the provide method with expiration time.
 * @name Grant
 * @package cosmos.authz.v1beta1
 * @see proto type: cosmos.authz.v1beta1.Grant
 */
export const Grant = {
  typeUrl: "/cosmos.authz.v1beta1.Grant",
  aminoType: "cosmos-sdk/Grant",
  is(o: any): o is Grant {
    return o && o.$typeUrl === Grant.typeUrl;
  },
  isSDK(o: any): o is GrantSDKType {
    return o && o.$typeUrl === Grant.typeUrl;
  },
  isAmino(o: any): o is GrantAmino {
    return o && o.$typeUrl === Grant.typeUrl;
  },
  encode(message: Grant, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.authorization !== undefined) {
      Any.encode(GlobalDecoderRegistry.wrapAny(message.authorization), writer.uint32(10).fork()).ldelim();
    }
    if (message.expiration !== undefined) {
      Timestamp.encode(toTimestamp(message.expiration), writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): Grant {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGrant();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authorization = GlobalDecoderRegistry.unwrapAny(reader);
          break;
        case 2:
          message.expiration = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Grant {
    const obj = createBaseGrant();
    if (isSet(object.authorization)) obj.authorization = GlobalDecoderRegistry.fromJSON(object.authorization);
    if (isSet(object.expiration)) obj.expiration = new Date(object.expiration);
    return obj;
  },
  fromPartial(object: DeepPartial<Grant>): Grant {
    const message = createBaseGrant();
    if (object.authorization !== undefined && object.authorization !== null) {
      message.authorization = GlobalDecoderRegistry.fromPartial(object.authorization);
    }
    message.expiration = object.expiration ?? undefined;
    return message;
  },
  fromSDK(object: GrantSDKType): Grant {
    return {
      authorization: object.authorization ? GlobalDecoderRegistry.fromSDK(object.authorization) : undefined,
      expiration: object.expiration ?? undefined
    };
  },
  toSDK(message: Grant): GrantSDKType {
    const obj: any = {};
    message.authorization !== undefined && (obj.authorization = message.authorization ? GlobalDecoderRegistry.toSDK(message.authorization) : undefined);
    message.expiration !== undefined && (obj.expiration = message.expiration ?? undefined);
    return obj;
  },
  fromAmino(object: GrantAmino): Grant {
    const message = createBaseGrant();
    if (object.authorization !== undefined && object.authorization !== null) {
      message.authorization = GlobalDecoderRegistry.fromAminoMsg(object.authorization);
    }
    if (object.expiration !== undefined && object.expiration !== null) {
      message.expiration = fromTimestamp(Timestamp.fromAmino(object.expiration));
    }
    return message;
  },
  toAmino(message: Grant, useInterfaces: boolean = true): GrantAmino {
    const obj: any = {};
    obj.authorization = message.authorization ? GlobalDecoderRegistry.toAminoMsg(message.authorization) : undefined;
    obj.expiration = message.expiration ? Timestamp.toAmino(toTimestamp(message.expiration)) : undefined;
    return obj;
  },
  fromProtoMsg(message: GrantProtoMsg, useInterfaces: boolean = true): Grant {
    return Grant.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: Grant): Uint8Array {
    return Grant.encode(message).finish();
  },
  toProtoMsg(message: Grant): GrantProtoMsg {
    return {
      typeUrl: "/cosmos.authz.v1beta1.Grant",
      value: Grant.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(Grant.typeUrl)) {
      return;
    }
    GenericAuthorization.registerTypeUrl();
    DepositDeploymentAuthorization1.registerTypeUrl();
    DepositDeploymentAuthorization2.registerTypeUrl();
    SendAuthorization.registerTypeUrl();
    StakeAuthorization.registerTypeUrl();
  }
};
function createBaseGrantAuthorization(): GrantAuthorization {
  return {
    granter: "",
    grantee: "",
    authorization: undefined,
    expiration: undefined
  };
}
/**
 * GrantAuthorization extends a grant with both the addresses of the grantee and granter.
 * It is used in genesis.proto and query.proto
 * @name GrantAuthorization
 * @package cosmos.authz.v1beta1
 * @see proto type: cosmos.authz.v1beta1.GrantAuthorization
 */
export const GrantAuthorization = {
  typeUrl: "/cosmos.authz.v1beta1.GrantAuthorization",
  aminoType: "cosmos-sdk/GrantAuthorization",
  is(o: any): o is GrantAuthorization {
    return o && (o.$typeUrl === GrantAuthorization.typeUrl || typeof o.granter === "string" && typeof o.grantee === "string");
  },
  isSDK(o: any): o is GrantAuthorizationSDKType {
    return o && (o.$typeUrl === GrantAuthorization.typeUrl || typeof o.granter === "string" && typeof o.grantee === "string");
  },
  isAmino(o: any): o is GrantAuthorizationAmino {
    return o && (o.$typeUrl === GrantAuthorization.typeUrl || typeof o.granter === "string" && typeof o.grantee === "string");
  },
  encode(message: GrantAuthorization, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.granter !== "") {
      writer.uint32(10).string(message.granter);
    }
    if (message.grantee !== "") {
      writer.uint32(18).string(message.grantee);
    }
    if (message.authorization !== undefined) {
      Any.encode(GlobalDecoderRegistry.wrapAny(message.authorization), writer.uint32(26).fork()).ldelim();
    }
    if (message.expiration !== undefined) {
      Timestamp.encode(toTimestamp(message.expiration), writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): GrantAuthorization {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGrantAuthorization();
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
          message.authorization = GlobalDecoderRegistry.unwrapAny(reader);
          break;
        case 4:
          message.expiration = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): GrantAuthorization {
    const obj = createBaseGrantAuthorization();
    if (isSet(object.granter)) obj.granter = String(object.granter);
    if (isSet(object.grantee)) obj.grantee = String(object.grantee);
    if (isSet(object.authorization)) obj.authorization = GlobalDecoderRegistry.fromJSON(object.authorization);
    if (isSet(object.expiration)) obj.expiration = new Date(object.expiration);
    return obj;
  },
  fromPartial(object: DeepPartial<GrantAuthorization>): GrantAuthorization {
    const message = createBaseGrantAuthorization();
    message.granter = object.granter ?? "";
    message.grantee = object.grantee ?? "";
    if (object.authorization !== undefined && object.authorization !== null) {
      message.authorization = GlobalDecoderRegistry.fromPartial(object.authorization);
    }
    message.expiration = object.expiration ?? undefined;
    return message;
  },
  fromSDK(object: GrantAuthorizationSDKType): GrantAuthorization {
    return {
      granter: object?.granter,
      grantee: object?.grantee,
      authorization: object.authorization ? GlobalDecoderRegistry.fromSDK(object.authorization) : undefined,
      expiration: object.expiration ?? undefined
    };
  },
  toSDK(message: GrantAuthorization): GrantAuthorizationSDKType {
    const obj: any = {};
    obj.granter = message.granter;
    obj.grantee = message.grantee;
    message.authorization !== undefined && (obj.authorization = message.authorization ? GlobalDecoderRegistry.toSDK(message.authorization) : undefined);
    message.expiration !== undefined && (obj.expiration = message.expiration ?? undefined);
    return obj;
  },
  fromAmino(object: GrantAuthorizationAmino): GrantAuthorization {
    const message = createBaseGrantAuthorization();
    if (object.granter !== undefined && object.granter !== null) {
      message.granter = object.granter;
    }
    if (object.grantee !== undefined && object.grantee !== null) {
      message.grantee = object.grantee;
    }
    if (object.authorization !== undefined && object.authorization !== null) {
      message.authorization = GlobalDecoderRegistry.fromAminoMsg(object.authorization);
    }
    if (object.expiration !== undefined && object.expiration !== null) {
      message.expiration = fromTimestamp(Timestamp.fromAmino(object.expiration));
    }
    return message;
  },
  toAmino(message: GrantAuthorization, useInterfaces: boolean = true): GrantAuthorizationAmino {
    const obj: any = {};
    obj.granter = message.granter === "" ? undefined : message.granter;
    obj.grantee = message.grantee === "" ? undefined : message.grantee;
    obj.authorization = message.authorization ? GlobalDecoderRegistry.toAminoMsg(message.authorization) : undefined;
    obj.expiration = message.expiration ? Timestamp.toAmino(toTimestamp(message.expiration)) : undefined;
    return obj;
  },
  fromProtoMsg(message: GrantAuthorizationProtoMsg, useInterfaces: boolean = true): GrantAuthorization {
    return GrantAuthorization.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: GrantAuthorization): Uint8Array {
    return GrantAuthorization.encode(message).finish();
  },
  toProtoMsg(message: GrantAuthorization): GrantAuthorizationProtoMsg {
    return {
      typeUrl: "/cosmos.authz.v1beta1.GrantAuthorization",
      value: GrantAuthorization.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(GrantAuthorization.typeUrl)) {
      return;
    }
    GenericAuthorization.registerTypeUrl();
    DepositDeploymentAuthorization1.registerTypeUrl();
    DepositDeploymentAuthorization2.registerTypeUrl();
    SendAuthorization.registerTypeUrl();
    StakeAuthorization.registerTypeUrl();
  }
};
function createBaseGrantQueueItem(): GrantQueueItem {
  return {
    msgTypeUrls: []
  };
}
/**
 * GrantQueueItem contains the list of TypeURL of a sdk.Msg.
 * @name GrantQueueItem
 * @package cosmos.authz.v1beta1
 * @see proto type: cosmos.authz.v1beta1.GrantQueueItem
 */
export const GrantQueueItem = {
  typeUrl: "/cosmos.authz.v1beta1.GrantQueueItem",
  aminoType: "cosmos-sdk/GrantQueueItem",
  is(o: any): o is GrantQueueItem {
    return o && (o.$typeUrl === GrantQueueItem.typeUrl || Array.isArray(o.msgTypeUrls) && (!o.msgTypeUrls.length || typeof o.msgTypeUrls[0] === "string"));
  },
  isSDK(o: any): o is GrantQueueItemSDKType {
    return o && (o.$typeUrl === GrantQueueItem.typeUrl || Array.isArray(o.msg_type_urls) && (!o.msg_type_urls.length || typeof o.msg_type_urls[0] === "string"));
  },
  isAmino(o: any): o is GrantQueueItemAmino {
    return o && (o.$typeUrl === GrantQueueItem.typeUrl || Array.isArray(o.msg_type_urls) && (!o.msg_type_urls.length || typeof o.msg_type_urls[0] === "string"));
  },
  encode(message: GrantQueueItem, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.msgTypeUrls) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): GrantQueueItem {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGrantQueueItem();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.msgTypeUrls.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): GrantQueueItem {
    const obj = createBaseGrantQueueItem();
    if (Array.isArray(object?.msgTypeUrls)) obj.msgTypeUrls = object.msgTypeUrls.map((e: any) => String(e));
    return obj;
  },
  fromPartial(object: DeepPartial<GrantQueueItem>): GrantQueueItem {
    const message = createBaseGrantQueueItem();
    message.msgTypeUrls = object.msgTypeUrls?.map(e => e) || [];
    return message;
  },
  fromSDK(object: GrantQueueItemSDKType): GrantQueueItem {
    return {
      msgTypeUrls: Array.isArray(object?.msg_type_urls) ? object.msg_type_urls.map((e: any) => e) : []
    };
  },
  toSDK(message: GrantQueueItem): GrantQueueItemSDKType {
    const obj: any = {};
    if (message.msgTypeUrls) {
      obj.msg_type_urls = message.msgTypeUrls.map(e => e);
    } else {
      obj.msg_type_urls = [];
    }
    return obj;
  },
  fromAmino(object: GrantQueueItemAmino): GrantQueueItem {
    const message = createBaseGrantQueueItem();
    message.msgTypeUrls = object.msg_type_urls?.map(e => e) || [];
    return message;
  },
  toAmino(message: GrantQueueItem, useInterfaces: boolean = true): GrantQueueItemAmino {
    const obj: any = {};
    if (message.msgTypeUrls) {
      obj.msg_type_urls = message.msgTypeUrls.map(e => e);
    } else {
      obj.msg_type_urls = message.msgTypeUrls;
    }
    return obj;
  },
  fromProtoMsg(message: GrantQueueItemProtoMsg, useInterfaces: boolean = true): GrantQueueItem {
    return GrantQueueItem.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: GrantQueueItem): Uint8Array {
    return GrantQueueItem.encode(message).finish();
  },
  toProtoMsg(message: GrantQueueItem): GrantQueueItemProtoMsg {
    return {
      typeUrl: "/cosmos.authz.v1beta1.GrantQueueItem",
      value: GrantQueueItem.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};