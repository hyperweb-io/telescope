//@ts-nocheck
/* eslint-disable */
import { GroupSpec, GroupSpecAmino, GroupSpecSDKType, GroupID, GroupIDSDKType } from "./group";
import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { GlobalDecoderRegistry } from "../../../registry";
import { isSet, bytesFromBase64, DeepPartial, base64FromBytes } from "../../../helpers";
export const protobufPackage = "akash.deployment.v1beta1";
/** State is an enum which refers to state of deployment */
export enum Deployment_State {
  /** invalid - Prefix should start with 0 in enum. So declaring dummy state */
  invalid = 0,
  /** active - DeploymentActive denotes state for deployment active */
  active = 1,
  /** closed - DeploymentClosed denotes state for deployment closed */
  closed = 2,
  UNRECOGNIZED = -1,
}
export const Deployment_StateSDKType = Deployment_State;
export const Deployment_StateAmino = Deployment_State;
export function deployment_StateFromJSON(object: any): Deployment_State {
  switch (object) {
    case 0:
    case "invalid":
      return Deployment_State.invalid;
    case 1:
    case "active":
      return Deployment_State.active;
    case 2:
    case "closed":
      return Deployment_State.closed;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Deployment_State.UNRECOGNIZED;
  }
}
export function deployment_StateToJSON(object: Deployment_State): string {
  switch (object) {
    case Deployment_State.invalid:
      return "invalid";
    case Deployment_State.active:
      return "active";
    case Deployment_State.closed:
      return "closed";
    case Deployment_State.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/**
 * MsgCreateDeployment defines an SDK message for creating deployment
 * @name MsgCreateDeployment
 * @package akash.deployment.v1beta1
 * @see proto type: akash.deployment.v1beta1.MsgCreateDeployment
 */
export interface MsgCreateDeployment {
  id: DeploymentID;
  groups: GroupSpec[];
  version: Uint8Array;
  deposit: Coin;
}
export interface MsgCreateDeploymentProtoMsg {
  typeUrl: "/akash.deployment.v1beta1.MsgCreateDeployment";
  value: Uint8Array;
}
/**
 * MsgCreateDeployment defines an SDK message for creating deployment
 * @name MsgCreateDeploymentAmino
 * @package akash.deployment.v1beta1
 * @see proto type: akash.deployment.v1beta1.MsgCreateDeployment
 */
export interface MsgCreateDeploymentAmino {
  id: DeploymentIDAmino;
  groups: GroupSpecAmino[];
  version: string;
  deposit: CoinAmino;
}
/**
 * MsgCreateDeployment defines an SDK message for creating deployment
 * @name MsgCreateDeploymentSDKType
 * @package akash.deployment.v1beta1
 * @see proto type: akash.deployment.v1beta1.MsgCreateDeployment
 */
export interface MsgCreateDeploymentSDKType {
  id: DeploymentIDSDKType;
  groups: GroupSpecSDKType[];
  version: Uint8Array;
  deposit: CoinSDKType;
}
/**
 * MsgCreateDeploymentResponse defines the Msg/CreateDeployment response type.
 * @name MsgCreateDeploymentResponse
 * @package akash.deployment.v1beta1
 * @see proto type: akash.deployment.v1beta1.MsgCreateDeploymentResponse
 */
export interface MsgCreateDeploymentResponse {}
export interface MsgCreateDeploymentResponseProtoMsg {
  typeUrl: "/akash.deployment.v1beta1.MsgCreateDeploymentResponse";
  value: Uint8Array;
}
/**
 * MsgCreateDeploymentResponse defines the Msg/CreateDeployment response type.
 * @name MsgCreateDeploymentResponseAmino
 * @package akash.deployment.v1beta1
 * @see proto type: akash.deployment.v1beta1.MsgCreateDeploymentResponse
 */
export interface MsgCreateDeploymentResponseAmino {}
/**
 * MsgCreateDeploymentResponse defines the Msg/CreateDeployment response type.
 * @name MsgCreateDeploymentResponseSDKType
 * @package akash.deployment.v1beta1
 * @see proto type: akash.deployment.v1beta1.MsgCreateDeploymentResponse
 */
export interface MsgCreateDeploymentResponseSDKType {}
/**
 * MsgDepositDeployment deposits more funds into the deposit account
 * @name MsgDepositDeployment
 * @package akash.deployment.v1beta1
 * @see proto type: akash.deployment.v1beta1.MsgDepositDeployment
 */
export interface MsgDepositDeployment {
  id: DeploymentID;
  amount: Coin;
}
export interface MsgDepositDeploymentProtoMsg {
  typeUrl: "/akash.deployment.v1beta1.MsgDepositDeployment";
  value: Uint8Array;
}
/**
 * MsgDepositDeployment deposits more funds into the deposit account
 * @name MsgDepositDeploymentAmino
 * @package akash.deployment.v1beta1
 * @see proto type: akash.deployment.v1beta1.MsgDepositDeployment
 */
export interface MsgDepositDeploymentAmino {
  id: DeploymentIDAmino;
  amount: CoinAmino;
}
/**
 * MsgDepositDeployment deposits more funds into the deposit account
 * @name MsgDepositDeploymentSDKType
 * @package akash.deployment.v1beta1
 * @see proto type: akash.deployment.v1beta1.MsgDepositDeployment
 */
export interface MsgDepositDeploymentSDKType {
  id: DeploymentIDSDKType;
  amount: CoinSDKType;
}
/**
 * MsgCreateDeploymentResponse defines the Msg/CreateDeployment response type.
 * @name MsgDepositDeploymentResponse
 * @package akash.deployment.v1beta1
 * @see proto type: akash.deployment.v1beta1.MsgDepositDeploymentResponse
 */
export interface MsgDepositDeploymentResponse {}
export interface MsgDepositDeploymentResponseProtoMsg {
  typeUrl: "/akash.deployment.v1beta1.MsgDepositDeploymentResponse";
  value: Uint8Array;
}
/**
 * MsgCreateDeploymentResponse defines the Msg/CreateDeployment response type.
 * @name MsgDepositDeploymentResponseAmino
 * @package akash.deployment.v1beta1
 * @see proto type: akash.deployment.v1beta1.MsgDepositDeploymentResponse
 */
export interface MsgDepositDeploymentResponseAmino {}
/**
 * MsgCreateDeploymentResponse defines the Msg/CreateDeployment response type.
 * @name MsgDepositDeploymentResponseSDKType
 * @package akash.deployment.v1beta1
 * @see proto type: akash.deployment.v1beta1.MsgDepositDeploymentResponse
 */
export interface MsgDepositDeploymentResponseSDKType {}
/**
 * MsgUpdateDeployment defines an SDK message for updating deployment
 * @name MsgUpdateDeployment
 * @package akash.deployment.v1beta1
 * @see proto type: akash.deployment.v1beta1.MsgUpdateDeployment
 */
export interface MsgUpdateDeployment {
  id: DeploymentID;
  groups: GroupSpec[];
  version: Uint8Array;
}
export interface MsgUpdateDeploymentProtoMsg {
  typeUrl: "/akash.deployment.v1beta1.MsgUpdateDeployment";
  value: Uint8Array;
}
/**
 * MsgUpdateDeployment defines an SDK message for updating deployment
 * @name MsgUpdateDeploymentAmino
 * @package akash.deployment.v1beta1
 * @see proto type: akash.deployment.v1beta1.MsgUpdateDeployment
 */
export interface MsgUpdateDeploymentAmino {
  id: DeploymentIDAmino;
  groups: GroupSpecAmino[];
  version: string;
}
/**
 * MsgUpdateDeployment defines an SDK message for updating deployment
 * @name MsgUpdateDeploymentSDKType
 * @package akash.deployment.v1beta1
 * @see proto type: akash.deployment.v1beta1.MsgUpdateDeployment
 */
export interface MsgUpdateDeploymentSDKType {
  id: DeploymentIDSDKType;
  groups: GroupSpecSDKType[];
  version: Uint8Array;
}
/**
 * MsgUpdateDeploymentResponse defines the Msg/UpdateDeployment response type.
 * @name MsgUpdateDeploymentResponse
 * @package akash.deployment.v1beta1
 * @see proto type: akash.deployment.v1beta1.MsgUpdateDeploymentResponse
 */
export interface MsgUpdateDeploymentResponse {}
export interface MsgUpdateDeploymentResponseProtoMsg {
  typeUrl: "/akash.deployment.v1beta1.MsgUpdateDeploymentResponse";
  value: Uint8Array;
}
/**
 * MsgUpdateDeploymentResponse defines the Msg/UpdateDeployment response type.
 * @name MsgUpdateDeploymentResponseAmino
 * @package akash.deployment.v1beta1
 * @see proto type: akash.deployment.v1beta1.MsgUpdateDeploymentResponse
 */
export interface MsgUpdateDeploymentResponseAmino {}
/**
 * MsgUpdateDeploymentResponse defines the Msg/UpdateDeployment response type.
 * @name MsgUpdateDeploymentResponseSDKType
 * @package akash.deployment.v1beta1
 * @see proto type: akash.deployment.v1beta1.MsgUpdateDeploymentResponse
 */
export interface MsgUpdateDeploymentResponseSDKType {}
/**
 * MsgCloseDeployment defines an SDK message for closing deployment
 * @name MsgCloseDeployment
 * @package akash.deployment.v1beta1
 * @see proto type: akash.deployment.v1beta1.MsgCloseDeployment
 */
export interface MsgCloseDeployment {
  id: DeploymentID;
}
export interface MsgCloseDeploymentProtoMsg {
  typeUrl: "/akash.deployment.v1beta1.MsgCloseDeployment";
  value: Uint8Array;
}
/**
 * MsgCloseDeployment defines an SDK message for closing deployment
 * @name MsgCloseDeploymentAmino
 * @package akash.deployment.v1beta1
 * @see proto type: akash.deployment.v1beta1.MsgCloseDeployment
 */
export interface MsgCloseDeploymentAmino {
  id: DeploymentIDAmino;
}
/**
 * MsgCloseDeployment defines an SDK message for closing deployment
 * @name MsgCloseDeploymentSDKType
 * @package akash.deployment.v1beta1
 * @see proto type: akash.deployment.v1beta1.MsgCloseDeployment
 */
export interface MsgCloseDeploymentSDKType {
  id: DeploymentIDSDKType;
}
/**
 * MsgCloseDeploymentResponse defines the Msg/CloseDeployment response type.
 * @name MsgCloseDeploymentResponse
 * @package akash.deployment.v1beta1
 * @see proto type: akash.deployment.v1beta1.MsgCloseDeploymentResponse
 */
export interface MsgCloseDeploymentResponse {}
export interface MsgCloseDeploymentResponseProtoMsg {
  typeUrl: "/akash.deployment.v1beta1.MsgCloseDeploymentResponse";
  value: Uint8Array;
}
/**
 * MsgCloseDeploymentResponse defines the Msg/CloseDeployment response type.
 * @name MsgCloseDeploymentResponseAmino
 * @package akash.deployment.v1beta1
 * @see proto type: akash.deployment.v1beta1.MsgCloseDeploymentResponse
 */
export interface MsgCloseDeploymentResponseAmino {}
/**
 * MsgCloseDeploymentResponse defines the Msg/CloseDeployment response type.
 * @name MsgCloseDeploymentResponseSDKType
 * @package akash.deployment.v1beta1
 * @see proto type: akash.deployment.v1beta1.MsgCloseDeploymentResponse
 */
export interface MsgCloseDeploymentResponseSDKType {}
/**
 * DeploymentID stores owner and sequence number
 * @name DeploymentID
 * @package akash.deployment.v1beta1
 * @see proto type: akash.deployment.v1beta1.DeploymentID
 */
export interface DeploymentID {
  owner: string;
  dseq: bigint;
}
export interface DeploymentIDProtoMsg {
  typeUrl: "/akash.deployment.v1beta1.DeploymentID";
  value: Uint8Array;
}
/**
 * DeploymentID stores owner and sequence number
 * @name DeploymentIDAmino
 * @package akash.deployment.v1beta1
 * @see proto type: akash.deployment.v1beta1.DeploymentID
 */
export interface DeploymentIDAmino {
  owner: string;
  dseq: string;
}
/**
 * DeploymentID stores owner and sequence number
 * @name DeploymentIDSDKType
 * @package akash.deployment.v1beta1
 * @see proto type: akash.deployment.v1beta1.DeploymentID
 */
export interface DeploymentIDSDKType {
  owner: string;
  dseq: bigint;
}
/**
 * Deployment stores deploymentID, state and version details
 * @name Deployment
 * @package akash.deployment.v1beta1
 * @see proto type: akash.deployment.v1beta1.Deployment
 */
export interface Deployment {
  deploymentId: DeploymentID;
  state: Deployment_State;
  version: Uint8Array;
  createdAt: bigint;
}
export interface DeploymentProtoMsg {
  typeUrl: "/akash.deployment.v1beta1.Deployment";
  value: Uint8Array;
}
/**
 * Deployment stores deploymentID, state and version details
 * @name DeploymentAmino
 * @package akash.deployment.v1beta1
 * @see proto type: akash.deployment.v1beta1.Deployment
 */
export interface DeploymentAmino {
  deployment_id: DeploymentIDAmino;
  state: Deployment_State;
  version: string;
  created_at?: string;
}
/**
 * Deployment stores deploymentID, state and version details
 * @name DeploymentSDKType
 * @package akash.deployment.v1beta1
 * @see proto type: akash.deployment.v1beta1.Deployment
 */
export interface DeploymentSDKType {
  deployment_id: DeploymentIDSDKType;
  state: Deployment_State;
  version: Uint8Array;
  created_at: bigint;
}
/**
 * DeploymentFilters defines filters used to filter deployments
 * @name DeploymentFilters
 * @package akash.deployment.v1beta1
 * @see proto type: akash.deployment.v1beta1.DeploymentFilters
 */
export interface DeploymentFilters {
  owner: string;
  dseq: bigint;
  state: string;
}
export interface DeploymentFiltersProtoMsg {
  typeUrl: "/akash.deployment.v1beta1.DeploymentFilters";
  value: Uint8Array;
}
/**
 * DeploymentFilters defines filters used to filter deployments
 * @name DeploymentFiltersAmino
 * @package akash.deployment.v1beta1
 * @see proto type: akash.deployment.v1beta1.DeploymentFilters
 */
export interface DeploymentFiltersAmino {
  owner: string;
  dseq: string;
  state: string;
}
/**
 * DeploymentFilters defines filters used to filter deployments
 * @name DeploymentFiltersSDKType
 * @package akash.deployment.v1beta1
 * @see proto type: akash.deployment.v1beta1.DeploymentFilters
 */
export interface DeploymentFiltersSDKType {
  owner: string;
  dseq: bigint;
  state: string;
}
function createBaseMsgCreateDeployment(): MsgCreateDeployment {
  return {
    id: DeploymentID.fromPartial({}),
    groups: [],
    version: new Uint8Array(),
    deposit: Coin.fromPartial({})
  };
}
/**
 * MsgCreateDeployment defines an SDK message for creating deployment
 * @name MsgCreateDeployment
 * @package akash.deployment.v1beta1
 * @see proto type: akash.deployment.v1beta1.MsgCreateDeployment
 */
export const MsgCreateDeployment = {
  typeUrl: "/akash.deployment.v1beta1.MsgCreateDeployment",
  is(o: any): o is MsgCreateDeployment {
    return o && (o.$typeUrl === MsgCreateDeployment.typeUrl || DeploymentID.is(o.id) && Array.isArray(o.groups) && (!o.groups.length || GroupSpec.is(o.groups[0])) && (o.version instanceof Uint8Array || typeof o.version === "string") && Coin.is(o.deposit));
  },
  isSDK(o: any): o is MsgCreateDeploymentSDKType {
    return o && (o.$typeUrl === MsgCreateDeployment.typeUrl || DeploymentID.isSDK(o.id) && Array.isArray(o.groups) && (!o.groups.length || GroupSpec.isSDK(o.groups[0])) && (o.version instanceof Uint8Array || typeof o.version === "string") && Coin.isSDK(o.deposit));
  },
  isAmino(o: any): o is MsgCreateDeploymentAmino {
    return o && (o.$typeUrl === MsgCreateDeployment.typeUrl || DeploymentID.isAmino(o.id) && Array.isArray(o.groups) && (!o.groups.length || GroupSpec.isAmino(o.groups[0])) && (o.version instanceof Uint8Array || typeof o.version === "string") && Coin.isAmino(o.deposit));
  },
  encode(message: MsgCreateDeployment, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== undefined) {
      DeploymentID.encode(message.id, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.groups) {
      GroupSpec.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.version.length !== 0) {
      writer.uint32(26).bytes(message.version);
    }
    if (message.deposit !== undefined) {
      Coin.encode(message.deposit, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): MsgCreateDeployment {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateDeployment();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = DeploymentID.decode(reader, reader.uint32(), useInterfaces);
          break;
        case 2:
          message.groups.push(GroupSpec.decode(reader, reader.uint32(), useInterfaces));
          break;
        case 3:
          message.version = reader.bytes();
          break;
        case 4:
          message.deposit = Coin.decode(reader, reader.uint32(), useInterfaces);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgCreateDeployment {
    const obj = createBaseMsgCreateDeployment();
    if (isSet(object.id)) obj.id = DeploymentID.fromJSON(object.id);
    if (Array.isArray(object?.groups)) obj.groups = object.groups.map((e: any) => GroupSpec.fromJSON(e));
    if (isSet(object.version)) obj.version = bytesFromBase64(object.version);
    if (isSet(object.deposit)) obj.deposit = Coin.fromJSON(object.deposit);
    return obj;
  },
  fromPartial(object: DeepPartial<MsgCreateDeployment>): MsgCreateDeployment {
    const message = createBaseMsgCreateDeployment();
    if (object.id !== undefined && object.id !== null) {
      message.id = DeploymentID.fromPartial(object.id);
    }
    message.groups = object.groups?.map(e => GroupSpec.fromPartial(e)) || [];
    message.version = object.version ?? new Uint8Array();
    if (object.deposit !== undefined && object.deposit !== null) {
      message.deposit = Coin.fromPartial(object.deposit);
    }
    return message;
  },
  fromSDK(object: MsgCreateDeploymentSDKType): MsgCreateDeployment {
    return {
      id: object.id ? DeploymentID.fromSDK(object.id) : undefined,
      groups: Array.isArray(object?.groups) ? object.groups.map((e: any) => GroupSpec.fromSDK(e)) : [],
      version: object?.version,
      deposit: object.deposit ? Coin.fromSDK(object.deposit) : undefined
    };
  },
  toSDK(message: MsgCreateDeployment): MsgCreateDeploymentSDKType {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id ? DeploymentID.toSDK(message.id) : undefined);
    if (message.groups) {
      obj.groups = message.groups.map(e => e ? GroupSpec.toSDK(e) : undefined);
    } else {
      obj.groups = [];
    }
    obj.version = message.version;
    message.deposit !== undefined && (obj.deposit = message.deposit ? Coin.toSDK(message.deposit) : undefined);
    return obj;
  },
  fromAmino(object: MsgCreateDeploymentAmino): MsgCreateDeployment {
    const message = createBaseMsgCreateDeployment();
    if (object.id !== undefined && object.id !== null) {
      message.id = DeploymentID.fromAmino(object.id);
    }
    message.groups = object.groups?.map(e => GroupSpec.fromAmino(e)) || [];
    if (object.version !== undefined && object.version !== null) {
      message.version = bytesFromBase64(object.version);
    }
    if (object.deposit !== undefined && object.deposit !== null) {
      message.deposit = Coin.fromAmino(object.deposit);
    }
    return message;
  },
  toAmino(message: MsgCreateDeployment, useInterfaces: boolean = true): MsgCreateDeploymentAmino {
    const obj: any = {};
    obj.id = message.id ? DeploymentID.toAmino(message.id, useInterfaces) : DeploymentID.toAmino(DeploymentID.fromPartial({}));
    if (message.groups) {
      obj.groups = message.groups.map(e => e ? GroupSpec.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.groups = message.groups;
    }
    obj.version = message.version ? base64FromBytes(message.version) : "";
    obj.deposit = message.deposit ? Coin.toAmino(message.deposit, useInterfaces) : Coin.toAmino(Coin.fromPartial({}));
    return obj;
  },
  fromProtoMsg(message: MsgCreateDeploymentProtoMsg, useInterfaces: boolean = true): MsgCreateDeployment {
    return MsgCreateDeployment.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: MsgCreateDeployment): Uint8Array {
    return MsgCreateDeployment.encode(message).finish();
  },
  toProtoMsg(message: MsgCreateDeployment): MsgCreateDeploymentProtoMsg {
    return {
      typeUrl: "/akash.deployment.v1beta1.MsgCreateDeployment",
      value: MsgCreateDeployment.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(MsgCreateDeployment.typeUrl)) {
      return;
    }
    DeploymentID.registerTypeUrl();
    GroupSpec.registerTypeUrl();
    Coin.registerTypeUrl();
  }
};
function createBaseMsgCreateDeploymentResponse(): MsgCreateDeploymentResponse {
  return {};
}
/**
 * MsgCreateDeploymentResponse defines the Msg/CreateDeployment response type.
 * @name MsgCreateDeploymentResponse
 * @package akash.deployment.v1beta1
 * @see proto type: akash.deployment.v1beta1.MsgCreateDeploymentResponse
 */
export const MsgCreateDeploymentResponse = {
  typeUrl: "/akash.deployment.v1beta1.MsgCreateDeploymentResponse",
  is(o: any): o is MsgCreateDeploymentResponse {
    return o && o.$typeUrl === MsgCreateDeploymentResponse.typeUrl;
  },
  isSDK(o: any): o is MsgCreateDeploymentResponseSDKType {
    return o && o.$typeUrl === MsgCreateDeploymentResponse.typeUrl;
  },
  isAmino(o: any): o is MsgCreateDeploymentResponseAmino {
    return o && o.$typeUrl === MsgCreateDeploymentResponse.typeUrl;
  },
  encode(_: MsgCreateDeploymentResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): MsgCreateDeploymentResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateDeploymentResponse();
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
  fromJSON(_: any): MsgCreateDeploymentResponse {
    const obj = createBaseMsgCreateDeploymentResponse();
    return obj;
  },
  fromPartial(_: DeepPartial<MsgCreateDeploymentResponse>): MsgCreateDeploymentResponse {
    const message = createBaseMsgCreateDeploymentResponse();
    return message;
  },
  fromSDK(_: MsgCreateDeploymentResponseSDKType): MsgCreateDeploymentResponse {
    return {};
  },
  toSDK(_: MsgCreateDeploymentResponse): MsgCreateDeploymentResponseSDKType {
    const obj: any = {};
    return obj;
  },
  fromAmino(_: MsgCreateDeploymentResponseAmino): MsgCreateDeploymentResponse {
    const message = createBaseMsgCreateDeploymentResponse();
    return message;
  },
  toAmino(_: MsgCreateDeploymentResponse, useInterfaces: boolean = true): MsgCreateDeploymentResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromProtoMsg(message: MsgCreateDeploymentResponseProtoMsg, useInterfaces: boolean = true): MsgCreateDeploymentResponse {
    return MsgCreateDeploymentResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: MsgCreateDeploymentResponse): Uint8Array {
    return MsgCreateDeploymentResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgCreateDeploymentResponse): MsgCreateDeploymentResponseProtoMsg {
    return {
      typeUrl: "/akash.deployment.v1beta1.MsgCreateDeploymentResponse",
      value: MsgCreateDeploymentResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseMsgDepositDeployment(): MsgDepositDeployment {
  return {
    id: DeploymentID.fromPartial({}),
    amount: Coin.fromPartial({})
  };
}
/**
 * MsgDepositDeployment deposits more funds into the deposit account
 * @name MsgDepositDeployment
 * @package akash.deployment.v1beta1
 * @see proto type: akash.deployment.v1beta1.MsgDepositDeployment
 */
export const MsgDepositDeployment = {
  typeUrl: "/akash.deployment.v1beta1.MsgDepositDeployment",
  is(o: any): o is MsgDepositDeployment {
    return o && (o.$typeUrl === MsgDepositDeployment.typeUrl || DeploymentID.is(o.id) && Coin.is(o.amount));
  },
  isSDK(o: any): o is MsgDepositDeploymentSDKType {
    return o && (o.$typeUrl === MsgDepositDeployment.typeUrl || DeploymentID.isSDK(o.id) && Coin.isSDK(o.amount));
  },
  isAmino(o: any): o is MsgDepositDeploymentAmino {
    return o && (o.$typeUrl === MsgDepositDeployment.typeUrl || DeploymentID.isAmino(o.id) && Coin.isAmino(o.amount));
  },
  encode(message: MsgDepositDeployment, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== undefined) {
      DeploymentID.encode(message.id, writer.uint32(10).fork()).ldelim();
    }
    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): MsgDepositDeployment {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDepositDeployment();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = DeploymentID.decode(reader, reader.uint32(), useInterfaces);
          break;
        case 2:
          message.amount = Coin.decode(reader, reader.uint32(), useInterfaces);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgDepositDeployment {
    const obj = createBaseMsgDepositDeployment();
    if (isSet(object.id)) obj.id = DeploymentID.fromJSON(object.id);
    if (isSet(object.amount)) obj.amount = Coin.fromJSON(object.amount);
    return obj;
  },
  fromPartial(object: DeepPartial<MsgDepositDeployment>): MsgDepositDeployment {
    const message = createBaseMsgDepositDeployment();
    if (object.id !== undefined && object.id !== null) {
      message.id = DeploymentID.fromPartial(object.id);
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = Coin.fromPartial(object.amount);
    }
    return message;
  },
  fromSDK(object: MsgDepositDeploymentSDKType): MsgDepositDeployment {
    return {
      id: object.id ? DeploymentID.fromSDK(object.id) : undefined,
      amount: object.amount ? Coin.fromSDK(object.amount) : undefined
    };
  },
  toSDK(message: MsgDepositDeployment): MsgDepositDeploymentSDKType {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id ? DeploymentID.toSDK(message.id) : undefined);
    message.amount !== undefined && (obj.amount = message.amount ? Coin.toSDK(message.amount) : undefined);
    return obj;
  },
  fromAmino(object: MsgDepositDeploymentAmino): MsgDepositDeployment {
    const message = createBaseMsgDepositDeployment();
    if (object.id !== undefined && object.id !== null) {
      message.id = DeploymentID.fromAmino(object.id);
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = Coin.fromAmino(object.amount);
    }
    return message;
  },
  toAmino(message: MsgDepositDeployment, useInterfaces: boolean = true): MsgDepositDeploymentAmino {
    const obj: any = {};
    obj.id = message.id ? DeploymentID.toAmino(message.id, useInterfaces) : DeploymentID.toAmino(DeploymentID.fromPartial({}));
    obj.amount = message.amount ? Coin.toAmino(message.amount, useInterfaces) : Coin.toAmino(Coin.fromPartial({}));
    return obj;
  },
  fromProtoMsg(message: MsgDepositDeploymentProtoMsg, useInterfaces: boolean = true): MsgDepositDeployment {
    return MsgDepositDeployment.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: MsgDepositDeployment): Uint8Array {
    return MsgDepositDeployment.encode(message).finish();
  },
  toProtoMsg(message: MsgDepositDeployment): MsgDepositDeploymentProtoMsg {
    return {
      typeUrl: "/akash.deployment.v1beta1.MsgDepositDeployment",
      value: MsgDepositDeployment.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(MsgDepositDeployment.typeUrl)) {
      return;
    }
    DeploymentID.registerTypeUrl();
    Coin.registerTypeUrl();
  }
};
function createBaseMsgDepositDeploymentResponse(): MsgDepositDeploymentResponse {
  return {};
}
/**
 * MsgCreateDeploymentResponse defines the Msg/CreateDeployment response type.
 * @name MsgDepositDeploymentResponse
 * @package akash.deployment.v1beta1
 * @see proto type: akash.deployment.v1beta1.MsgDepositDeploymentResponse
 */
export const MsgDepositDeploymentResponse = {
  typeUrl: "/akash.deployment.v1beta1.MsgDepositDeploymentResponse",
  is(o: any): o is MsgDepositDeploymentResponse {
    return o && o.$typeUrl === MsgDepositDeploymentResponse.typeUrl;
  },
  isSDK(o: any): o is MsgDepositDeploymentResponseSDKType {
    return o && o.$typeUrl === MsgDepositDeploymentResponse.typeUrl;
  },
  isAmino(o: any): o is MsgDepositDeploymentResponseAmino {
    return o && o.$typeUrl === MsgDepositDeploymentResponse.typeUrl;
  },
  encode(_: MsgDepositDeploymentResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): MsgDepositDeploymentResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDepositDeploymentResponse();
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
  fromJSON(_: any): MsgDepositDeploymentResponse {
    const obj = createBaseMsgDepositDeploymentResponse();
    return obj;
  },
  fromPartial(_: DeepPartial<MsgDepositDeploymentResponse>): MsgDepositDeploymentResponse {
    const message = createBaseMsgDepositDeploymentResponse();
    return message;
  },
  fromSDK(_: MsgDepositDeploymentResponseSDKType): MsgDepositDeploymentResponse {
    return {};
  },
  toSDK(_: MsgDepositDeploymentResponse): MsgDepositDeploymentResponseSDKType {
    const obj: any = {};
    return obj;
  },
  fromAmino(_: MsgDepositDeploymentResponseAmino): MsgDepositDeploymentResponse {
    const message = createBaseMsgDepositDeploymentResponse();
    return message;
  },
  toAmino(_: MsgDepositDeploymentResponse, useInterfaces: boolean = true): MsgDepositDeploymentResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromProtoMsg(message: MsgDepositDeploymentResponseProtoMsg, useInterfaces: boolean = true): MsgDepositDeploymentResponse {
    return MsgDepositDeploymentResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: MsgDepositDeploymentResponse): Uint8Array {
    return MsgDepositDeploymentResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgDepositDeploymentResponse): MsgDepositDeploymentResponseProtoMsg {
    return {
      typeUrl: "/akash.deployment.v1beta1.MsgDepositDeploymentResponse",
      value: MsgDepositDeploymentResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseMsgUpdateDeployment(): MsgUpdateDeployment {
  return {
    id: DeploymentID.fromPartial({}),
    groups: [],
    version: new Uint8Array()
  };
}
/**
 * MsgUpdateDeployment defines an SDK message for updating deployment
 * @name MsgUpdateDeployment
 * @package akash.deployment.v1beta1
 * @see proto type: akash.deployment.v1beta1.MsgUpdateDeployment
 */
export const MsgUpdateDeployment = {
  typeUrl: "/akash.deployment.v1beta1.MsgUpdateDeployment",
  is(o: any): o is MsgUpdateDeployment {
    return o && (o.$typeUrl === MsgUpdateDeployment.typeUrl || DeploymentID.is(o.id) && Array.isArray(o.groups) && (!o.groups.length || GroupSpec.is(o.groups[0])) && (o.version instanceof Uint8Array || typeof o.version === "string"));
  },
  isSDK(o: any): o is MsgUpdateDeploymentSDKType {
    return o && (o.$typeUrl === MsgUpdateDeployment.typeUrl || DeploymentID.isSDK(o.id) && Array.isArray(o.groups) && (!o.groups.length || GroupSpec.isSDK(o.groups[0])) && (o.version instanceof Uint8Array || typeof o.version === "string"));
  },
  isAmino(o: any): o is MsgUpdateDeploymentAmino {
    return o && (o.$typeUrl === MsgUpdateDeployment.typeUrl || DeploymentID.isAmino(o.id) && Array.isArray(o.groups) && (!o.groups.length || GroupSpec.isAmino(o.groups[0])) && (o.version instanceof Uint8Array || typeof o.version === "string"));
  },
  encode(message: MsgUpdateDeployment, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== undefined) {
      DeploymentID.encode(message.id, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.groups) {
      GroupSpec.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.version.length !== 0) {
      writer.uint32(26).bytes(message.version);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): MsgUpdateDeployment {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateDeployment();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = DeploymentID.decode(reader, reader.uint32(), useInterfaces);
          break;
        case 2:
          message.groups.push(GroupSpec.decode(reader, reader.uint32(), useInterfaces));
          break;
        case 3:
          message.version = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgUpdateDeployment {
    const obj = createBaseMsgUpdateDeployment();
    if (isSet(object.id)) obj.id = DeploymentID.fromJSON(object.id);
    if (Array.isArray(object?.groups)) obj.groups = object.groups.map((e: any) => GroupSpec.fromJSON(e));
    if (isSet(object.version)) obj.version = bytesFromBase64(object.version);
    return obj;
  },
  fromPartial(object: DeepPartial<MsgUpdateDeployment>): MsgUpdateDeployment {
    const message = createBaseMsgUpdateDeployment();
    if (object.id !== undefined && object.id !== null) {
      message.id = DeploymentID.fromPartial(object.id);
    }
    message.groups = object.groups?.map(e => GroupSpec.fromPartial(e)) || [];
    message.version = object.version ?? new Uint8Array();
    return message;
  },
  fromSDK(object: MsgUpdateDeploymentSDKType): MsgUpdateDeployment {
    return {
      id: object.id ? DeploymentID.fromSDK(object.id) : undefined,
      groups: Array.isArray(object?.groups) ? object.groups.map((e: any) => GroupSpec.fromSDK(e)) : [],
      version: object?.version
    };
  },
  toSDK(message: MsgUpdateDeployment): MsgUpdateDeploymentSDKType {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id ? DeploymentID.toSDK(message.id) : undefined);
    if (message.groups) {
      obj.groups = message.groups.map(e => e ? GroupSpec.toSDK(e) : undefined);
    } else {
      obj.groups = [];
    }
    obj.version = message.version;
    return obj;
  },
  fromAmino(object: MsgUpdateDeploymentAmino): MsgUpdateDeployment {
    const message = createBaseMsgUpdateDeployment();
    if (object.id !== undefined && object.id !== null) {
      message.id = DeploymentID.fromAmino(object.id);
    }
    message.groups = object.groups?.map(e => GroupSpec.fromAmino(e)) || [];
    if (object.version !== undefined && object.version !== null) {
      message.version = bytesFromBase64(object.version);
    }
    return message;
  },
  toAmino(message: MsgUpdateDeployment, useInterfaces: boolean = true): MsgUpdateDeploymentAmino {
    const obj: any = {};
    obj.id = message.id ? DeploymentID.toAmino(message.id, useInterfaces) : DeploymentID.toAmino(DeploymentID.fromPartial({}));
    if (message.groups) {
      obj.groups = message.groups.map(e => e ? GroupSpec.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.groups = message.groups;
    }
    obj.version = message.version ? base64FromBytes(message.version) : "";
    return obj;
  },
  fromProtoMsg(message: MsgUpdateDeploymentProtoMsg, useInterfaces: boolean = true): MsgUpdateDeployment {
    return MsgUpdateDeployment.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: MsgUpdateDeployment): Uint8Array {
    return MsgUpdateDeployment.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateDeployment): MsgUpdateDeploymentProtoMsg {
    return {
      typeUrl: "/akash.deployment.v1beta1.MsgUpdateDeployment",
      value: MsgUpdateDeployment.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(MsgUpdateDeployment.typeUrl)) {
      return;
    }
    DeploymentID.registerTypeUrl();
    GroupSpec.registerTypeUrl();
  }
};
function createBaseMsgUpdateDeploymentResponse(): MsgUpdateDeploymentResponse {
  return {};
}
/**
 * MsgUpdateDeploymentResponse defines the Msg/UpdateDeployment response type.
 * @name MsgUpdateDeploymentResponse
 * @package akash.deployment.v1beta1
 * @see proto type: akash.deployment.v1beta1.MsgUpdateDeploymentResponse
 */
export const MsgUpdateDeploymentResponse = {
  typeUrl: "/akash.deployment.v1beta1.MsgUpdateDeploymentResponse",
  is(o: any): o is MsgUpdateDeploymentResponse {
    return o && o.$typeUrl === MsgUpdateDeploymentResponse.typeUrl;
  },
  isSDK(o: any): o is MsgUpdateDeploymentResponseSDKType {
    return o && o.$typeUrl === MsgUpdateDeploymentResponse.typeUrl;
  },
  isAmino(o: any): o is MsgUpdateDeploymentResponseAmino {
    return o && o.$typeUrl === MsgUpdateDeploymentResponse.typeUrl;
  },
  encode(_: MsgUpdateDeploymentResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): MsgUpdateDeploymentResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateDeploymentResponse();
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
  fromJSON(_: any): MsgUpdateDeploymentResponse {
    const obj = createBaseMsgUpdateDeploymentResponse();
    return obj;
  },
  fromPartial(_: DeepPartial<MsgUpdateDeploymentResponse>): MsgUpdateDeploymentResponse {
    const message = createBaseMsgUpdateDeploymentResponse();
    return message;
  },
  fromSDK(_: MsgUpdateDeploymentResponseSDKType): MsgUpdateDeploymentResponse {
    return {};
  },
  toSDK(_: MsgUpdateDeploymentResponse): MsgUpdateDeploymentResponseSDKType {
    const obj: any = {};
    return obj;
  },
  fromAmino(_: MsgUpdateDeploymentResponseAmino): MsgUpdateDeploymentResponse {
    const message = createBaseMsgUpdateDeploymentResponse();
    return message;
  },
  toAmino(_: MsgUpdateDeploymentResponse, useInterfaces: boolean = true): MsgUpdateDeploymentResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromProtoMsg(message: MsgUpdateDeploymentResponseProtoMsg, useInterfaces: boolean = true): MsgUpdateDeploymentResponse {
    return MsgUpdateDeploymentResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: MsgUpdateDeploymentResponse): Uint8Array {
    return MsgUpdateDeploymentResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateDeploymentResponse): MsgUpdateDeploymentResponseProtoMsg {
    return {
      typeUrl: "/akash.deployment.v1beta1.MsgUpdateDeploymentResponse",
      value: MsgUpdateDeploymentResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseMsgCloseDeployment(): MsgCloseDeployment {
  return {
    id: DeploymentID.fromPartial({})
  };
}
/**
 * MsgCloseDeployment defines an SDK message for closing deployment
 * @name MsgCloseDeployment
 * @package akash.deployment.v1beta1
 * @see proto type: akash.deployment.v1beta1.MsgCloseDeployment
 */
export const MsgCloseDeployment = {
  typeUrl: "/akash.deployment.v1beta1.MsgCloseDeployment",
  is(o: any): o is MsgCloseDeployment {
    return o && (o.$typeUrl === MsgCloseDeployment.typeUrl || DeploymentID.is(o.id));
  },
  isSDK(o: any): o is MsgCloseDeploymentSDKType {
    return o && (o.$typeUrl === MsgCloseDeployment.typeUrl || DeploymentID.isSDK(o.id));
  },
  isAmino(o: any): o is MsgCloseDeploymentAmino {
    return o && (o.$typeUrl === MsgCloseDeployment.typeUrl || DeploymentID.isAmino(o.id));
  },
  encode(message: MsgCloseDeployment, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== undefined) {
      DeploymentID.encode(message.id, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): MsgCloseDeployment {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCloseDeployment();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = DeploymentID.decode(reader, reader.uint32(), useInterfaces);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgCloseDeployment {
    const obj = createBaseMsgCloseDeployment();
    if (isSet(object.id)) obj.id = DeploymentID.fromJSON(object.id);
    return obj;
  },
  fromPartial(object: DeepPartial<MsgCloseDeployment>): MsgCloseDeployment {
    const message = createBaseMsgCloseDeployment();
    if (object.id !== undefined && object.id !== null) {
      message.id = DeploymentID.fromPartial(object.id);
    }
    return message;
  },
  fromSDK(object: MsgCloseDeploymentSDKType): MsgCloseDeployment {
    return {
      id: object.id ? DeploymentID.fromSDK(object.id) : undefined
    };
  },
  toSDK(message: MsgCloseDeployment): MsgCloseDeploymentSDKType {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id ? DeploymentID.toSDK(message.id) : undefined);
    return obj;
  },
  fromAmino(object: MsgCloseDeploymentAmino): MsgCloseDeployment {
    const message = createBaseMsgCloseDeployment();
    if (object.id !== undefined && object.id !== null) {
      message.id = DeploymentID.fromAmino(object.id);
    }
    return message;
  },
  toAmino(message: MsgCloseDeployment, useInterfaces: boolean = true): MsgCloseDeploymentAmino {
    const obj: any = {};
    obj.id = message.id ? DeploymentID.toAmino(message.id, useInterfaces) : DeploymentID.toAmino(DeploymentID.fromPartial({}));
    return obj;
  },
  fromProtoMsg(message: MsgCloseDeploymentProtoMsg, useInterfaces: boolean = true): MsgCloseDeployment {
    return MsgCloseDeployment.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: MsgCloseDeployment): Uint8Array {
    return MsgCloseDeployment.encode(message).finish();
  },
  toProtoMsg(message: MsgCloseDeployment): MsgCloseDeploymentProtoMsg {
    return {
      typeUrl: "/akash.deployment.v1beta1.MsgCloseDeployment",
      value: MsgCloseDeployment.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(MsgCloseDeployment.typeUrl)) {
      return;
    }
    DeploymentID.registerTypeUrl();
  }
};
function createBaseMsgCloseDeploymentResponse(): MsgCloseDeploymentResponse {
  return {};
}
/**
 * MsgCloseDeploymentResponse defines the Msg/CloseDeployment response type.
 * @name MsgCloseDeploymentResponse
 * @package akash.deployment.v1beta1
 * @see proto type: akash.deployment.v1beta1.MsgCloseDeploymentResponse
 */
export const MsgCloseDeploymentResponse = {
  typeUrl: "/akash.deployment.v1beta1.MsgCloseDeploymentResponse",
  is(o: any): o is MsgCloseDeploymentResponse {
    return o && o.$typeUrl === MsgCloseDeploymentResponse.typeUrl;
  },
  isSDK(o: any): o is MsgCloseDeploymentResponseSDKType {
    return o && o.$typeUrl === MsgCloseDeploymentResponse.typeUrl;
  },
  isAmino(o: any): o is MsgCloseDeploymentResponseAmino {
    return o && o.$typeUrl === MsgCloseDeploymentResponse.typeUrl;
  },
  encode(_: MsgCloseDeploymentResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): MsgCloseDeploymentResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCloseDeploymentResponse();
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
  fromJSON(_: any): MsgCloseDeploymentResponse {
    const obj = createBaseMsgCloseDeploymentResponse();
    return obj;
  },
  fromPartial(_: DeepPartial<MsgCloseDeploymentResponse>): MsgCloseDeploymentResponse {
    const message = createBaseMsgCloseDeploymentResponse();
    return message;
  },
  fromSDK(_: MsgCloseDeploymentResponseSDKType): MsgCloseDeploymentResponse {
    return {};
  },
  toSDK(_: MsgCloseDeploymentResponse): MsgCloseDeploymentResponseSDKType {
    const obj: any = {};
    return obj;
  },
  fromAmino(_: MsgCloseDeploymentResponseAmino): MsgCloseDeploymentResponse {
    const message = createBaseMsgCloseDeploymentResponse();
    return message;
  },
  toAmino(_: MsgCloseDeploymentResponse, useInterfaces: boolean = true): MsgCloseDeploymentResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromProtoMsg(message: MsgCloseDeploymentResponseProtoMsg, useInterfaces: boolean = true): MsgCloseDeploymentResponse {
    return MsgCloseDeploymentResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: MsgCloseDeploymentResponse): Uint8Array {
    return MsgCloseDeploymentResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgCloseDeploymentResponse): MsgCloseDeploymentResponseProtoMsg {
    return {
      typeUrl: "/akash.deployment.v1beta1.MsgCloseDeploymentResponse",
      value: MsgCloseDeploymentResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseDeploymentID(): DeploymentID {
  return {
    owner: "",
    dseq: BigInt(0)
  };
}
/**
 * DeploymentID stores owner and sequence number
 * @name DeploymentID
 * @package akash.deployment.v1beta1
 * @see proto type: akash.deployment.v1beta1.DeploymentID
 */
export const DeploymentID = {
  typeUrl: "/akash.deployment.v1beta1.DeploymentID",
  is(o: any): o is DeploymentID {
    return o && (o.$typeUrl === DeploymentID.typeUrl || typeof o.owner === "string" && typeof o.dseq === "bigint");
  },
  isSDK(o: any): o is DeploymentIDSDKType {
    return o && (o.$typeUrl === DeploymentID.typeUrl || typeof o.owner === "string" && typeof o.dseq === "bigint");
  },
  isAmino(o: any): o is DeploymentIDAmino {
    return o && (o.$typeUrl === DeploymentID.typeUrl || typeof o.owner === "string" && typeof o.dseq === "bigint");
  },
  encode(message: DeploymentID, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    if (message.dseq !== BigInt(0)) {
      writer.uint32(16).uint64(message.dseq);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): DeploymentID {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeploymentID();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
          break;
        case 2:
          message.dseq = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): DeploymentID {
    const obj = createBaseDeploymentID();
    if (isSet(object.owner)) obj.owner = String(object.owner);
    if (isSet(object.dseq)) obj.dseq = BigInt(object.dseq.toString());
    return obj;
  },
  fromPartial(object: DeepPartial<DeploymentID>): DeploymentID {
    const message = createBaseDeploymentID();
    message.owner = object.owner ?? "";
    if (object.dseq !== undefined && object.dseq !== null) {
      message.dseq = BigInt(object.dseq.toString());
    }
    return message;
  },
  fromSDK(object: DeploymentIDSDKType): DeploymentID {
    return {
      owner: object?.owner,
      dseq: object?.dseq
    };
  },
  toSDK(message: DeploymentID): DeploymentIDSDKType {
    const obj: any = {};
    obj.owner = message.owner;
    obj.dseq = message.dseq;
    return obj;
  },
  fromAmino(object: DeploymentIDAmino): DeploymentID {
    const message = createBaseDeploymentID();
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = object.owner;
    }
    if (object.dseq !== undefined && object.dseq !== null) {
      message.dseq = BigInt(object.dseq);
    }
    return message;
  },
  toAmino(message: DeploymentID, useInterfaces: boolean = true): DeploymentIDAmino {
    const obj: any = {};
    obj.owner = message.owner ?? "";
    obj.dseq = message.dseq ? message.dseq?.toString() : "0";
    return obj;
  },
  fromProtoMsg(message: DeploymentIDProtoMsg, useInterfaces: boolean = true): DeploymentID {
    return DeploymentID.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: DeploymentID): Uint8Array {
    return DeploymentID.encode(message).finish();
  },
  toProtoMsg(message: DeploymentID): DeploymentIDProtoMsg {
    return {
      typeUrl: "/akash.deployment.v1beta1.DeploymentID",
      value: DeploymentID.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseDeployment(): Deployment {
  return {
    deploymentId: DeploymentID.fromPartial({}),
    state: 0,
    version: new Uint8Array(),
    createdAt: BigInt(0)
  };
}
/**
 * Deployment stores deploymentID, state and version details
 * @name Deployment
 * @package akash.deployment.v1beta1
 * @see proto type: akash.deployment.v1beta1.Deployment
 */
export const Deployment = {
  typeUrl: "/akash.deployment.v1beta1.Deployment",
  is(o: any): o is Deployment {
    return o && (o.$typeUrl === Deployment.typeUrl || DeploymentID.is(o.deploymentId) && isSet(o.state) && (o.version instanceof Uint8Array || typeof o.version === "string") && typeof o.createdAt === "bigint");
  },
  isSDK(o: any): o is DeploymentSDKType {
    return o && (o.$typeUrl === Deployment.typeUrl || DeploymentID.isSDK(o.deployment_id) && isSet(o.state) && (o.version instanceof Uint8Array || typeof o.version === "string") && typeof o.created_at === "bigint");
  },
  isAmino(o: any): o is DeploymentAmino {
    return o && (o.$typeUrl === Deployment.typeUrl || DeploymentID.isAmino(o.deployment_id) && isSet(o.state) && (o.version instanceof Uint8Array || typeof o.version === "string") && typeof o.created_at === "bigint");
  },
  encode(message: Deployment, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.deploymentId !== undefined) {
      DeploymentID.encode(message.deploymentId, writer.uint32(10).fork()).ldelim();
    }
    if (message.state !== 0) {
      writer.uint32(16).int32(message.state);
    }
    if (message.version.length !== 0) {
      writer.uint32(26).bytes(message.version);
    }
    if (message.createdAt !== BigInt(0)) {
      writer.uint32(32).int64(message.createdAt);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): Deployment {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeployment();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.deploymentId = DeploymentID.decode(reader, reader.uint32(), useInterfaces);
          break;
        case 2:
          message.state = (reader.int32() as any);
          break;
        case 3:
          message.version = reader.bytes();
          break;
        case 4:
          message.createdAt = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Deployment {
    const obj = createBaseDeployment();
    if (isSet(object.deploymentId)) obj.deploymentId = DeploymentID.fromJSON(object.deploymentId);
    if (isSet(object.state)) obj.state = deployment_StateFromJSON(object.state);
    if (isSet(object.version)) obj.version = bytesFromBase64(object.version);
    if (isSet(object.createdAt)) obj.createdAt = BigInt(object.createdAt.toString());
    return obj;
  },
  fromPartial(object: DeepPartial<Deployment>): Deployment {
    const message = createBaseDeployment();
    if (object.deploymentId !== undefined && object.deploymentId !== null) {
      message.deploymentId = DeploymentID.fromPartial(object.deploymentId);
    }
    message.state = object.state ?? 0;
    message.version = object.version ?? new Uint8Array();
    if (object.createdAt !== undefined && object.createdAt !== null) {
      message.createdAt = BigInt(object.createdAt.toString());
    }
    return message;
  },
  fromSDK(object: DeploymentSDKType): Deployment {
    return {
      deploymentId: object.deployment_id ? DeploymentID.fromSDK(object.deployment_id) : undefined,
      state: isSet(object.state) ? deployment_StateFromJSON(object.state) : -1,
      version: object?.version,
      createdAt: object?.created_at
    };
  },
  toSDK(message: Deployment): DeploymentSDKType {
    const obj: any = {};
    message.deploymentId !== undefined && (obj.deployment_id = message.deploymentId ? DeploymentID.toSDK(message.deploymentId) : undefined);
    message.state !== undefined && (obj.state = deployment_StateToJSON(message.state));
    obj.version = message.version;
    obj.created_at = message.createdAt;
    return obj;
  },
  fromAmino(object: DeploymentAmino): Deployment {
    const message = createBaseDeployment();
    if (object.deployment_id !== undefined && object.deployment_id !== null) {
      message.deploymentId = DeploymentID.fromAmino(object.deployment_id);
    }
    if (object.state !== undefined && object.state !== null) {
      message.state = object.state;
    }
    if (object.version !== undefined && object.version !== null) {
      message.version = bytesFromBase64(object.version);
    }
    if (object.created_at !== undefined && object.created_at !== null) {
      message.createdAt = BigInt(object.created_at);
    }
    return message;
  },
  toAmino(message: Deployment, useInterfaces: boolean = true): DeploymentAmino {
    const obj: any = {};
    obj.deployment_id = message.deploymentId ? DeploymentID.toAmino(message.deploymentId, useInterfaces) : DeploymentID.toAmino(DeploymentID.fromPartial({}));
    obj.state = message.state ?? 0;
    obj.version = message.version ? base64FromBytes(message.version) : "";
    obj.created_at = message.createdAt !== BigInt(0) ? message.createdAt?.toString() : undefined;
    return obj;
  },
  fromProtoMsg(message: DeploymentProtoMsg, useInterfaces: boolean = true): Deployment {
    return Deployment.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: Deployment): Uint8Array {
    return Deployment.encode(message).finish();
  },
  toProtoMsg(message: Deployment): DeploymentProtoMsg {
    return {
      typeUrl: "/akash.deployment.v1beta1.Deployment",
      value: Deployment.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(Deployment.typeUrl)) {
      return;
    }
    DeploymentID.registerTypeUrl();
  }
};
function createBaseDeploymentFilters(): DeploymentFilters {
  return {
    owner: "",
    dseq: BigInt(0),
    state: ""
  };
}
/**
 * DeploymentFilters defines filters used to filter deployments
 * @name DeploymentFilters
 * @package akash.deployment.v1beta1
 * @see proto type: akash.deployment.v1beta1.DeploymentFilters
 */
export const DeploymentFilters = {
  typeUrl: "/akash.deployment.v1beta1.DeploymentFilters",
  is(o: any): o is DeploymentFilters {
    return o && (o.$typeUrl === DeploymentFilters.typeUrl || typeof o.owner === "string" && typeof o.dseq === "bigint" && typeof o.state === "string");
  },
  isSDK(o: any): o is DeploymentFiltersSDKType {
    return o && (o.$typeUrl === DeploymentFilters.typeUrl || typeof o.owner === "string" && typeof o.dseq === "bigint" && typeof o.state === "string");
  },
  isAmino(o: any): o is DeploymentFiltersAmino {
    return o && (o.$typeUrl === DeploymentFilters.typeUrl || typeof o.owner === "string" && typeof o.dseq === "bigint" && typeof o.state === "string");
  },
  encode(message: DeploymentFilters, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    if (message.dseq !== BigInt(0)) {
      writer.uint32(16).uint64(message.dseq);
    }
    if (message.state !== "") {
      writer.uint32(26).string(message.state);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): DeploymentFilters {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeploymentFilters();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
          break;
        case 2:
          message.dseq = reader.uint64();
          break;
        case 3:
          message.state = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): DeploymentFilters {
    const obj = createBaseDeploymentFilters();
    if (isSet(object.owner)) obj.owner = String(object.owner);
    if (isSet(object.dseq)) obj.dseq = BigInt(object.dseq.toString());
    if (isSet(object.state)) obj.state = String(object.state);
    return obj;
  },
  fromPartial(object: DeepPartial<DeploymentFilters>): DeploymentFilters {
    const message = createBaseDeploymentFilters();
    message.owner = object.owner ?? "";
    if (object.dseq !== undefined && object.dseq !== null) {
      message.dseq = BigInt(object.dseq.toString());
    }
    message.state = object.state ?? "";
    return message;
  },
  fromSDK(object: DeploymentFiltersSDKType): DeploymentFilters {
    return {
      owner: object?.owner,
      dseq: object?.dseq,
      state: object?.state
    };
  },
  toSDK(message: DeploymentFilters): DeploymentFiltersSDKType {
    const obj: any = {};
    obj.owner = message.owner;
    obj.dseq = message.dseq;
    obj.state = message.state;
    return obj;
  },
  fromAmino(object: DeploymentFiltersAmino): DeploymentFilters {
    const message = createBaseDeploymentFilters();
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = object.owner;
    }
    if (object.dseq !== undefined && object.dseq !== null) {
      message.dseq = BigInt(object.dseq);
    }
    if (object.state !== undefined && object.state !== null) {
      message.state = object.state;
    }
    return message;
  },
  toAmino(message: DeploymentFilters, useInterfaces: boolean = true): DeploymentFiltersAmino {
    const obj: any = {};
    obj.owner = message.owner ?? "";
    obj.dseq = message.dseq ? message.dseq?.toString() : "0";
    obj.state = message.state ?? "";
    return obj;
  },
  fromProtoMsg(message: DeploymentFiltersProtoMsg, useInterfaces: boolean = true): DeploymentFilters {
    return DeploymentFilters.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: DeploymentFilters): Uint8Array {
    return DeploymentFilters.encode(message).finish();
  },
  toProtoMsg(message: DeploymentFilters): DeploymentFiltersProtoMsg {
    return {
      typeUrl: "/akash.deployment.v1beta1.DeploymentFilters",
      value: DeploymentFilters.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};