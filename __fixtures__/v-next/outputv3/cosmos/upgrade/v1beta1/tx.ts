import { Plan, PlanAmino, PlanSDKType } from "./upgrade";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { GlobalDecoderRegistry } from "../../../registry";
import { isSet, DeepPartial } from "../../../helpers";
export const protobufPackage = "cosmos.upgrade.v1beta1";
/**
 * MsgSoftwareUpgrade is the Msg/SoftwareUpgrade request type.
 * 
 * Since: cosmos-sdk 0.46
 * @name MsgSoftwareUpgrade
 * @package cosmos.upgrade.v1beta1
 * @see proto type: cosmos.upgrade.v1beta1.MsgSoftwareUpgrade
 */
export interface MsgSoftwareUpgrade {
  /**
   * authority is the address of the governance account.
   */
  authority: string;
  /**
   * plan is the upgrade plan.
   */
  plan: Plan;
}
export interface MsgSoftwareUpgradeProtoMsg {
  typeUrl: "/cosmos.upgrade.v1beta1.MsgSoftwareUpgrade";
  value: Uint8Array;
}
/**
 * MsgSoftwareUpgrade is the Msg/SoftwareUpgrade request type.
 * 
 * Since: cosmos-sdk 0.46
 * @name MsgSoftwareUpgradeAmino
 * @package cosmos.upgrade.v1beta1
 * @see proto type: cosmos.upgrade.v1beta1.MsgSoftwareUpgrade
 */
export interface MsgSoftwareUpgradeAmino {
  /**
   * authority is the address of the governance account.
   */
  authority?: string;
  /**
   * plan is the upgrade plan.
   */
  plan?: PlanAmino;
}
/**
 * MsgSoftwareUpgrade is the Msg/SoftwareUpgrade request type.
 * 
 * Since: cosmos-sdk 0.46
 * @name MsgSoftwareUpgradeSDKType
 * @package cosmos.upgrade.v1beta1
 * @see proto type: cosmos.upgrade.v1beta1.MsgSoftwareUpgrade
 */
export interface MsgSoftwareUpgradeSDKType {
  authority: string;
  plan: PlanSDKType;
}
/**
 * MsgSoftwareUpgradeResponse is the Msg/SoftwareUpgrade response type.
 * 
 * Since: cosmos-sdk 0.46
 * @name MsgSoftwareUpgradeResponse
 * @package cosmos.upgrade.v1beta1
 * @see proto type: cosmos.upgrade.v1beta1.MsgSoftwareUpgradeResponse
 */
export interface MsgSoftwareUpgradeResponse {}
export interface MsgSoftwareUpgradeResponseProtoMsg {
  typeUrl: "/cosmos.upgrade.v1beta1.MsgSoftwareUpgradeResponse";
  value: Uint8Array;
}
/**
 * MsgSoftwareUpgradeResponse is the Msg/SoftwareUpgrade response type.
 * 
 * Since: cosmos-sdk 0.46
 * @name MsgSoftwareUpgradeResponseAmino
 * @package cosmos.upgrade.v1beta1
 * @see proto type: cosmos.upgrade.v1beta1.MsgSoftwareUpgradeResponse
 */
export interface MsgSoftwareUpgradeResponseAmino {}
/**
 * MsgSoftwareUpgradeResponse is the Msg/SoftwareUpgrade response type.
 * 
 * Since: cosmos-sdk 0.46
 * @name MsgSoftwareUpgradeResponseSDKType
 * @package cosmos.upgrade.v1beta1
 * @see proto type: cosmos.upgrade.v1beta1.MsgSoftwareUpgradeResponse
 */
export interface MsgSoftwareUpgradeResponseSDKType {}
/**
 * MsgCancelUpgrade is the Msg/CancelUpgrade request type.
 * 
 * Since: cosmos-sdk 0.46
 * @name MsgCancelUpgrade
 * @package cosmos.upgrade.v1beta1
 * @see proto type: cosmos.upgrade.v1beta1.MsgCancelUpgrade
 */
export interface MsgCancelUpgrade {
  /**
   * authority is the address of the governance account.
   */
  authority: string;
}
export interface MsgCancelUpgradeProtoMsg {
  typeUrl: "/cosmos.upgrade.v1beta1.MsgCancelUpgrade";
  value: Uint8Array;
}
/**
 * MsgCancelUpgrade is the Msg/CancelUpgrade request type.
 * 
 * Since: cosmos-sdk 0.46
 * @name MsgCancelUpgradeAmino
 * @package cosmos.upgrade.v1beta1
 * @see proto type: cosmos.upgrade.v1beta1.MsgCancelUpgrade
 */
export interface MsgCancelUpgradeAmino {
  /**
   * authority is the address of the governance account.
   */
  authority?: string;
}
/**
 * MsgCancelUpgrade is the Msg/CancelUpgrade request type.
 * 
 * Since: cosmos-sdk 0.46
 * @name MsgCancelUpgradeSDKType
 * @package cosmos.upgrade.v1beta1
 * @see proto type: cosmos.upgrade.v1beta1.MsgCancelUpgrade
 */
export interface MsgCancelUpgradeSDKType {
  authority: string;
}
/**
 * MsgCancelUpgradeResponse is the Msg/CancelUpgrade response type.
 * 
 * Since: cosmos-sdk 0.46
 * @name MsgCancelUpgradeResponse
 * @package cosmos.upgrade.v1beta1
 * @see proto type: cosmos.upgrade.v1beta1.MsgCancelUpgradeResponse
 */
export interface MsgCancelUpgradeResponse {}
export interface MsgCancelUpgradeResponseProtoMsg {
  typeUrl: "/cosmos.upgrade.v1beta1.MsgCancelUpgradeResponse";
  value: Uint8Array;
}
/**
 * MsgCancelUpgradeResponse is the Msg/CancelUpgrade response type.
 * 
 * Since: cosmos-sdk 0.46
 * @name MsgCancelUpgradeResponseAmino
 * @package cosmos.upgrade.v1beta1
 * @see proto type: cosmos.upgrade.v1beta1.MsgCancelUpgradeResponse
 */
export interface MsgCancelUpgradeResponseAmino {}
/**
 * MsgCancelUpgradeResponse is the Msg/CancelUpgrade response type.
 * 
 * Since: cosmos-sdk 0.46
 * @name MsgCancelUpgradeResponseSDKType
 * @package cosmos.upgrade.v1beta1
 * @see proto type: cosmos.upgrade.v1beta1.MsgCancelUpgradeResponse
 */
export interface MsgCancelUpgradeResponseSDKType {}
function createBaseMsgSoftwareUpgrade(): MsgSoftwareUpgrade {
  return {
    authority: "",
    plan: Plan.fromPartial({})
  };
}
/**
 * MsgSoftwareUpgrade is the Msg/SoftwareUpgrade request type.
 * 
 * Since: cosmos-sdk 0.46
 * @name MsgSoftwareUpgrade
 * @package cosmos.upgrade.v1beta1
 * @see proto type: cosmos.upgrade.v1beta1.MsgSoftwareUpgrade
 */
export const MsgSoftwareUpgrade = {
  typeUrl: "/cosmos.upgrade.v1beta1.MsgSoftwareUpgrade",
  aminoType: "cosmos-sdk/MsgSoftwareUpgrade",
  is(o: any): o is MsgSoftwareUpgrade {
    return o && (o.$typeUrl === MsgSoftwareUpgrade.typeUrl || typeof o.authority === "string" && Plan.is(o.plan));
  },
  isSDK(o: any): o is MsgSoftwareUpgradeSDKType {
    return o && (o.$typeUrl === MsgSoftwareUpgrade.typeUrl || typeof o.authority === "string" && Plan.isSDK(o.plan));
  },
  isAmino(o: any): o is MsgSoftwareUpgradeAmino {
    return o && (o.$typeUrl === MsgSoftwareUpgrade.typeUrl || typeof o.authority === "string" && Plan.isAmino(o.plan));
  },
  encode(message: MsgSoftwareUpgrade, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.plan !== undefined) {
      Plan.encode(message.plan, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): MsgSoftwareUpgrade {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSoftwareUpgrade();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.plan = Plan.decode(reader, reader.uint32(), useInterfaces);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgSoftwareUpgrade {
    const obj = createBaseMsgSoftwareUpgrade();
    if (isSet(object.authority)) obj.authority = String(object.authority);
    if (isSet(object.plan)) obj.plan = Plan.fromJSON(object.plan);
    return obj;
  },
  fromPartial(object: DeepPartial<MsgSoftwareUpgrade>): MsgSoftwareUpgrade {
    const message = createBaseMsgSoftwareUpgrade();
    message.authority = object.authority ?? "";
    if (object.plan !== undefined && object.plan !== null) {
      message.plan = Plan.fromPartial(object.plan);
    }
    return message;
  },
  fromSDK(object: MsgSoftwareUpgradeSDKType): MsgSoftwareUpgrade {
    return {
      authority: object?.authority,
      plan: object.plan ? Plan.fromSDK(object.plan) : undefined
    };
  },
  toSDK(message: MsgSoftwareUpgrade): MsgSoftwareUpgradeSDKType {
    const obj: any = {};
    obj.authority = message.authority;
    message.plan !== undefined && (obj.plan = message.plan ? Plan.toSDK(message.plan) : undefined);
    return obj;
  },
  fromAmino(object: MsgSoftwareUpgradeAmino): MsgSoftwareUpgrade {
    const message = createBaseMsgSoftwareUpgrade();
    if (object.authority !== undefined && object.authority !== null) {
      message.authority = object.authority;
    }
    if (object.plan !== undefined && object.plan !== null) {
      message.plan = Plan.fromAmino(object.plan);
    }
    return message;
  },
  toAmino(message: MsgSoftwareUpgrade, useInterfaces: boolean = true): MsgSoftwareUpgradeAmino {
    const obj: any = {};
    obj.authority = message.authority === "" ? undefined : message.authority;
    obj.plan = message.plan ? Plan.toAmino(message.plan, useInterfaces) : undefined;
    return obj;
  },
  fromProtoMsg(message: MsgSoftwareUpgradeProtoMsg, useInterfaces: boolean = true): MsgSoftwareUpgrade {
    return MsgSoftwareUpgrade.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: MsgSoftwareUpgrade): Uint8Array {
    return MsgSoftwareUpgrade.encode(message).finish();
  },
  toProtoMsg(message: MsgSoftwareUpgrade): MsgSoftwareUpgradeProtoMsg {
    return {
      typeUrl: "/cosmos.upgrade.v1beta1.MsgSoftwareUpgrade",
      value: MsgSoftwareUpgrade.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(MsgSoftwareUpgrade.typeUrl)) {
      return;
    }
    Plan.registerTypeUrl();
  }
};
function createBaseMsgSoftwareUpgradeResponse(): MsgSoftwareUpgradeResponse {
  return {};
}
/**
 * MsgSoftwareUpgradeResponse is the Msg/SoftwareUpgrade response type.
 * 
 * Since: cosmos-sdk 0.46
 * @name MsgSoftwareUpgradeResponse
 * @package cosmos.upgrade.v1beta1
 * @see proto type: cosmos.upgrade.v1beta1.MsgSoftwareUpgradeResponse
 */
export const MsgSoftwareUpgradeResponse = {
  typeUrl: "/cosmos.upgrade.v1beta1.MsgSoftwareUpgradeResponse",
  aminoType: "cosmos-sdk/MsgSoftwareUpgradeResponse",
  is(o: any): o is MsgSoftwareUpgradeResponse {
    return o && o.$typeUrl === MsgSoftwareUpgradeResponse.typeUrl;
  },
  isSDK(o: any): o is MsgSoftwareUpgradeResponseSDKType {
    return o && o.$typeUrl === MsgSoftwareUpgradeResponse.typeUrl;
  },
  isAmino(o: any): o is MsgSoftwareUpgradeResponseAmino {
    return o && o.$typeUrl === MsgSoftwareUpgradeResponse.typeUrl;
  },
  encode(_: MsgSoftwareUpgradeResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): MsgSoftwareUpgradeResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSoftwareUpgradeResponse();
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
  fromJSON(_: any): MsgSoftwareUpgradeResponse {
    const obj = createBaseMsgSoftwareUpgradeResponse();
    return obj;
  },
  fromPartial(_: DeepPartial<MsgSoftwareUpgradeResponse>): MsgSoftwareUpgradeResponse {
    const message = createBaseMsgSoftwareUpgradeResponse();
    return message;
  },
  fromSDK(_: MsgSoftwareUpgradeResponseSDKType): MsgSoftwareUpgradeResponse {
    return {};
  },
  toSDK(_: MsgSoftwareUpgradeResponse): MsgSoftwareUpgradeResponseSDKType {
    const obj: any = {};
    return obj;
  },
  fromAmino(_: MsgSoftwareUpgradeResponseAmino): MsgSoftwareUpgradeResponse {
    const message = createBaseMsgSoftwareUpgradeResponse();
    return message;
  },
  toAmino(_: MsgSoftwareUpgradeResponse, useInterfaces: boolean = true): MsgSoftwareUpgradeResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromProtoMsg(message: MsgSoftwareUpgradeResponseProtoMsg, useInterfaces: boolean = true): MsgSoftwareUpgradeResponse {
    return MsgSoftwareUpgradeResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: MsgSoftwareUpgradeResponse): Uint8Array {
    return MsgSoftwareUpgradeResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgSoftwareUpgradeResponse): MsgSoftwareUpgradeResponseProtoMsg {
    return {
      typeUrl: "/cosmos.upgrade.v1beta1.MsgSoftwareUpgradeResponse",
      value: MsgSoftwareUpgradeResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseMsgCancelUpgrade(): MsgCancelUpgrade {
  return {
    authority: ""
  };
}
/**
 * MsgCancelUpgrade is the Msg/CancelUpgrade request type.
 * 
 * Since: cosmos-sdk 0.46
 * @name MsgCancelUpgrade
 * @package cosmos.upgrade.v1beta1
 * @see proto type: cosmos.upgrade.v1beta1.MsgCancelUpgrade
 */
export const MsgCancelUpgrade = {
  typeUrl: "/cosmos.upgrade.v1beta1.MsgCancelUpgrade",
  aminoType: "cosmos-sdk/MsgCancelUpgrade",
  is(o: any): o is MsgCancelUpgrade {
    return o && (o.$typeUrl === MsgCancelUpgrade.typeUrl || typeof o.authority === "string");
  },
  isSDK(o: any): o is MsgCancelUpgradeSDKType {
    return o && (o.$typeUrl === MsgCancelUpgrade.typeUrl || typeof o.authority === "string");
  },
  isAmino(o: any): o is MsgCancelUpgradeAmino {
    return o && (o.$typeUrl === MsgCancelUpgrade.typeUrl || typeof o.authority === "string");
  },
  encode(message: MsgCancelUpgrade, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): MsgCancelUpgrade {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCancelUpgrade();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgCancelUpgrade {
    const obj = createBaseMsgCancelUpgrade();
    if (isSet(object.authority)) obj.authority = String(object.authority);
    return obj;
  },
  fromPartial(object: DeepPartial<MsgCancelUpgrade>): MsgCancelUpgrade {
    const message = createBaseMsgCancelUpgrade();
    message.authority = object.authority ?? "";
    return message;
  },
  fromSDK(object: MsgCancelUpgradeSDKType): MsgCancelUpgrade {
    return {
      authority: object?.authority
    };
  },
  toSDK(message: MsgCancelUpgrade): MsgCancelUpgradeSDKType {
    const obj: any = {};
    obj.authority = message.authority;
    return obj;
  },
  fromAmino(object: MsgCancelUpgradeAmino): MsgCancelUpgrade {
    const message = createBaseMsgCancelUpgrade();
    if (object.authority !== undefined && object.authority !== null) {
      message.authority = object.authority;
    }
    return message;
  },
  toAmino(message: MsgCancelUpgrade, useInterfaces: boolean = true): MsgCancelUpgradeAmino {
    const obj: any = {};
    obj.authority = message.authority === "" ? undefined : message.authority;
    return obj;
  },
  fromProtoMsg(message: MsgCancelUpgradeProtoMsg, useInterfaces: boolean = true): MsgCancelUpgrade {
    return MsgCancelUpgrade.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: MsgCancelUpgrade): Uint8Array {
    return MsgCancelUpgrade.encode(message).finish();
  },
  toProtoMsg(message: MsgCancelUpgrade): MsgCancelUpgradeProtoMsg {
    return {
      typeUrl: "/cosmos.upgrade.v1beta1.MsgCancelUpgrade",
      value: MsgCancelUpgrade.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseMsgCancelUpgradeResponse(): MsgCancelUpgradeResponse {
  return {};
}
/**
 * MsgCancelUpgradeResponse is the Msg/CancelUpgrade response type.
 * 
 * Since: cosmos-sdk 0.46
 * @name MsgCancelUpgradeResponse
 * @package cosmos.upgrade.v1beta1
 * @see proto type: cosmos.upgrade.v1beta1.MsgCancelUpgradeResponse
 */
export const MsgCancelUpgradeResponse = {
  typeUrl: "/cosmos.upgrade.v1beta1.MsgCancelUpgradeResponse",
  aminoType: "cosmos-sdk/MsgCancelUpgradeResponse",
  is(o: any): o is MsgCancelUpgradeResponse {
    return o && o.$typeUrl === MsgCancelUpgradeResponse.typeUrl;
  },
  isSDK(o: any): o is MsgCancelUpgradeResponseSDKType {
    return o && o.$typeUrl === MsgCancelUpgradeResponse.typeUrl;
  },
  isAmino(o: any): o is MsgCancelUpgradeResponseAmino {
    return o && o.$typeUrl === MsgCancelUpgradeResponse.typeUrl;
  },
  encode(_: MsgCancelUpgradeResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): MsgCancelUpgradeResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCancelUpgradeResponse();
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
  fromJSON(_: any): MsgCancelUpgradeResponse {
    const obj = createBaseMsgCancelUpgradeResponse();
    return obj;
  },
  fromPartial(_: DeepPartial<MsgCancelUpgradeResponse>): MsgCancelUpgradeResponse {
    const message = createBaseMsgCancelUpgradeResponse();
    return message;
  },
  fromSDK(_: MsgCancelUpgradeResponseSDKType): MsgCancelUpgradeResponse {
    return {};
  },
  toSDK(_: MsgCancelUpgradeResponse): MsgCancelUpgradeResponseSDKType {
    const obj: any = {};
    return obj;
  },
  fromAmino(_: MsgCancelUpgradeResponseAmino): MsgCancelUpgradeResponse {
    const message = createBaseMsgCancelUpgradeResponse();
    return message;
  },
  toAmino(_: MsgCancelUpgradeResponse, useInterfaces: boolean = true): MsgCancelUpgradeResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromProtoMsg(message: MsgCancelUpgradeResponseProtoMsg, useInterfaces: boolean = true): MsgCancelUpgradeResponse {
    return MsgCancelUpgradeResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: MsgCancelUpgradeResponse): Uint8Array {
    return MsgCancelUpgradeResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgCancelUpgradeResponse): MsgCancelUpgradeResponseProtoMsg {
    return {
      typeUrl: "/cosmos.upgrade.v1beta1.MsgCancelUpgradeResponse",
      value: MsgCancelUpgradeResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};