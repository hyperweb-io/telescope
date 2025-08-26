import { PlacementRequirements, PlacementRequirementsAmino, PlacementRequirementsSDKType } from "../../base/v1beta1/attribute";
import { ResourceUnits, ResourceUnitsAmino, ResourceUnitsSDKType } from "../../base/v1beta1/resource";
import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { GlobalDecoderRegistry } from "../../../registry";
import { isSet, DeepPartial } from "../../../helpers";
export const protobufPackage = "akash.deployment.v1beta1";
/** State is an enum which refers to state of group */
export enum Group_State {
  /** invalid - Prefix should start with 0 in enum. So declaring dummy state */
  invalid = 0,
  /** open - GroupOpen denotes state for group open */
  open = 1,
  /** paused - GroupOrdered denotes state for group ordered */
  paused = 2,
  /** insufficient_funds - GroupInsufficientFunds denotes state for group insufficient_funds */
  insufficient_funds = 3,
  /** closed - GroupClosed denotes state for group closed */
  closed = 4,
  UNRECOGNIZED = -1,
}
export const Group_StateSDKType = Group_State;
export const Group_StateAmino = Group_State;
export function group_StateFromJSON(object: any): Group_State {
  switch (object) {
    case 0:
    case "invalid":
      return Group_State.invalid;
    case 1:
    case "open":
      return Group_State.open;
    case 2:
    case "paused":
      return Group_State.paused;
    case 3:
    case "insufficient_funds":
      return Group_State.insufficient_funds;
    case 4:
    case "closed":
      return Group_State.closed;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Group_State.UNRECOGNIZED;
  }
}
export function group_StateToJSON(object: Group_State): string {
  switch (object) {
    case Group_State.invalid:
      return "invalid";
    case Group_State.open:
      return "open";
    case Group_State.paused:
      return "paused";
    case Group_State.insufficient_funds:
      return "insufficient_funds";
    case Group_State.closed:
      return "closed";
    case Group_State.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/**
 * MsgCloseGroup defines SDK message to close a single Group within a Deployment.
 * @name MsgCloseGroup
 * @package akash.deployment.v1beta1
 * @see proto type: akash.deployment.v1beta1.MsgCloseGroup
 */
export interface MsgCloseGroup {
  id: GroupID;
}
export interface MsgCloseGroupProtoMsg {
  typeUrl: "/akash.deployment.v1beta1.MsgCloseGroup";
  value: Uint8Array;
}
/**
 * MsgCloseGroup defines SDK message to close a single Group within a Deployment.
 * @name MsgCloseGroupAmino
 * @package akash.deployment.v1beta1
 * @see proto type: akash.deployment.v1beta1.MsgCloseGroup
 */
export interface MsgCloseGroupAmino {
  id: GroupIDAmino;
}
/**
 * MsgCloseGroup defines SDK message to close a single Group within a Deployment.
 * @name MsgCloseGroupSDKType
 * @package akash.deployment.v1beta1
 * @see proto type: akash.deployment.v1beta1.MsgCloseGroup
 */
export interface MsgCloseGroupSDKType {
  id: GroupIDSDKType;
}
/**
 * MsgCloseGroupResponse defines the Msg/CloseGroup response type.
 * @name MsgCloseGroupResponse
 * @package akash.deployment.v1beta1
 * @see proto type: akash.deployment.v1beta1.MsgCloseGroupResponse
 */
export interface MsgCloseGroupResponse {}
export interface MsgCloseGroupResponseProtoMsg {
  typeUrl: "/akash.deployment.v1beta1.MsgCloseGroupResponse";
  value: Uint8Array;
}
/**
 * MsgCloseGroupResponse defines the Msg/CloseGroup response type.
 * @name MsgCloseGroupResponseAmino
 * @package akash.deployment.v1beta1
 * @see proto type: akash.deployment.v1beta1.MsgCloseGroupResponse
 */
export interface MsgCloseGroupResponseAmino {}
/**
 * MsgCloseGroupResponse defines the Msg/CloseGroup response type.
 * @name MsgCloseGroupResponseSDKType
 * @package akash.deployment.v1beta1
 * @see proto type: akash.deployment.v1beta1.MsgCloseGroupResponse
 */
export interface MsgCloseGroupResponseSDKType {}
/**
 * MsgPauseGroup defines SDK message to close a single Group within a Deployment.
 * @name MsgPauseGroup
 * @package akash.deployment.v1beta1
 * @see proto type: akash.deployment.v1beta1.MsgPauseGroup
 */
export interface MsgPauseGroup {
  id: GroupID;
}
export interface MsgPauseGroupProtoMsg {
  typeUrl: "/akash.deployment.v1beta1.MsgPauseGroup";
  value: Uint8Array;
}
/**
 * MsgPauseGroup defines SDK message to close a single Group within a Deployment.
 * @name MsgPauseGroupAmino
 * @package akash.deployment.v1beta1
 * @see proto type: akash.deployment.v1beta1.MsgPauseGroup
 */
export interface MsgPauseGroupAmino {
  id: GroupIDAmino;
}
/**
 * MsgPauseGroup defines SDK message to close a single Group within a Deployment.
 * @name MsgPauseGroupSDKType
 * @package akash.deployment.v1beta1
 * @see proto type: akash.deployment.v1beta1.MsgPauseGroup
 */
export interface MsgPauseGroupSDKType {
  id: GroupIDSDKType;
}
/**
 * MsgPauseGroupResponse defines the Msg/PauseGroup response type.
 * @name MsgPauseGroupResponse
 * @package akash.deployment.v1beta1
 * @see proto type: akash.deployment.v1beta1.MsgPauseGroupResponse
 */
export interface MsgPauseGroupResponse {}
export interface MsgPauseGroupResponseProtoMsg {
  typeUrl: "/akash.deployment.v1beta1.MsgPauseGroupResponse";
  value: Uint8Array;
}
/**
 * MsgPauseGroupResponse defines the Msg/PauseGroup response type.
 * @name MsgPauseGroupResponseAmino
 * @package akash.deployment.v1beta1
 * @see proto type: akash.deployment.v1beta1.MsgPauseGroupResponse
 */
export interface MsgPauseGroupResponseAmino {}
/**
 * MsgPauseGroupResponse defines the Msg/PauseGroup response type.
 * @name MsgPauseGroupResponseSDKType
 * @package akash.deployment.v1beta1
 * @see proto type: akash.deployment.v1beta1.MsgPauseGroupResponse
 */
export interface MsgPauseGroupResponseSDKType {}
/**
 * MsgStartGroup defines SDK message to close a single Group within a Deployment.
 * @name MsgStartGroup
 * @package akash.deployment.v1beta1
 * @see proto type: akash.deployment.v1beta1.MsgStartGroup
 */
export interface MsgStartGroup {
  id: GroupID;
}
export interface MsgStartGroupProtoMsg {
  typeUrl: "/akash.deployment.v1beta1.MsgStartGroup";
  value: Uint8Array;
}
/**
 * MsgStartGroup defines SDK message to close a single Group within a Deployment.
 * @name MsgStartGroupAmino
 * @package akash.deployment.v1beta1
 * @see proto type: akash.deployment.v1beta1.MsgStartGroup
 */
export interface MsgStartGroupAmino {
  id: GroupIDAmino;
}
/**
 * MsgStartGroup defines SDK message to close a single Group within a Deployment.
 * @name MsgStartGroupSDKType
 * @package akash.deployment.v1beta1
 * @see proto type: akash.deployment.v1beta1.MsgStartGroup
 */
export interface MsgStartGroupSDKType {
  id: GroupIDSDKType;
}
/**
 * MsgStartGroupResponse defines the Msg/StartGroup response type.
 * @name MsgStartGroupResponse
 * @package akash.deployment.v1beta1
 * @see proto type: akash.deployment.v1beta1.MsgStartGroupResponse
 */
export interface MsgStartGroupResponse {}
export interface MsgStartGroupResponseProtoMsg {
  typeUrl: "/akash.deployment.v1beta1.MsgStartGroupResponse";
  value: Uint8Array;
}
/**
 * MsgStartGroupResponse defines the Msg/StartGroup response type.
 * @name MsgStartGroupResponseAmino
 * @package akash.deployment.v1beta1
 * @see proto type: akash.deployment.v1beta1.MsgStartGroupResponse
 */
export interface MsgStartGroupResponseAmino {}
/**
 * MsgStartGroupResponse defines the Msg/StartGroup response type.
 * @name MsgStartGroupResponseSDKType
 * @package akash.deployment.v1beta1
 * @see proto type: akash.deployment.v1beta1.MsgStartGroupResponse
 */
export interface MsgStartGroupResponseSDKType {}
/**
 * GroupID stores owner, deployment sequence number and group sequence number
 * @name GroupID
 * @package akash.deployment.v1beta1
 * @see proto type: akash.deployment.v1beta1.GroupID
 */
export interface GroupID {
  owner: string;
  dseq: bigint;
  gseq: number;
}
export interface GroupIDProtoMsg {
  typeUrl: "/akash.deployment.v1beta1.GroupID";
  value: Uint8Array;
}
/**
 * GroupID stores owner, deployment sequence number and group sequence number
 * @name GroupIDAmino
 * @package akash.deployment.v1beta1
 * @see proto type: akash.deployment.v1beta1.GroupID
 */
export interface GroupIDAmino {
  owner: string;
  dseq: string;
  gseq: number;
}
/**
 * GroupID stores owner, deployment sequence number and group sequence number
 * @name GroupIDSDKType
 * @package akash.deployment.v1beta1
 * @see proto type: akash.deployment.v1beta1.GroupID
 */
export interface GroupIDSDKType {
  owner: string;
  dseq: bigint;
  gseq: number;
}
/**
 * GroupSpec stores group specifications
 * @name GroupSpec
 * @package akash.deployment.v1beta1
 * @see proto type: akash.deployment.v1beta1.GroupSpec
 */
export interface GroupSpec {
  name: string;
  requirements: PlacementRequirements;
  resources: Resource[];
}
export interface GroupSpecProtoMsg {
  typeUrl: "/akash.deployment.v1beta1.GroupSpec";
  value: Uint8Array;
}
/**
 * GroupSpec stores group specifications
 * @name GroupSpecAmino
 * @package akash.deployment.v1beta1
 * @see proto type: akash.deployment.v1beta1.GroupSpec
 */
export interface GroupSpecAmino {
  name: string;
  requirements: PlacementRequirementsAmino;
  resources: ResourceAmino[];
}
/**
 * GroupSpec stores group specifications
 * @name GroupSpecSDKType
 * @package akash.deployment.v1beta1
 * @see proto type: akash.deployment.v1beta1.GroupSpec
 */
export interface GroupSpecSDKType {
  name: string;
  requirements: PlacementRequirementsSDKType;
  resources: ResourceSDKType[];
}
/**
 * Group stores group id, state and specifications of group
 * @name Group
 * @package akash.deployment.v1beta1
 * @see proto type: akash.deployment.v1beta1.Group
 */
export interface Group {
  groupId: GroupID;
  state: Group_State;
  groupSpec: GroupSpec;
  createdAt: bigint;
}
export interface GroupProtoMsg {
  typeUrl: "/akash.deployment.v1beta1.Group";
  value: Uint8Array;
}
/**
 * Group stores group id, state and specifications of group
 * @name GroupAmino
 * @package akash.deployment.v1beta1
 * @see proto type: akash.deployment.v1beta1.Group
 */
export interface GroupAmino {
  group_id: GroupIDAmino;
  state: Group_State;
  group_spec: GroupSpecAmino;
  created_at?: string;
}
/**
 * Group stores group id, state and specifications of group
 * @name GroupSDKType
 * @package akash.deployment.v1beta1
 * @see proto type: akash.deployment.v1beta1.Group
 */
export interface GroupSDKType {
  group_id: GroupIDSDKType;
  state: Group_State;
  group_spec: GroupSpecSDKType;
  created_at: bigint;
}
/**
 * Resource stores unit, total count and price of resource
 * @name Resource
 * @package akash.deployment.v1beta1
 * @see proto type: akash.deployment.v1beta1.Resource
 */
export interface Resource {
  resources: ResourceUnits;
  count: number;
  price: Coin;
}
export interface ResourceProtoMsg {
  typeUrl: "/akash.deployment.v1beta1.Resource";
  value: Uint8Array;
}
/**
 * Resource stores unit, total count and price of resource
 * @name ResourceAmino
 * @package akash.deployment.v1beta1
 * @see proto type: akash.deployment.v1beta1.Resource
 */
export interface ResourceAmino {
  resources: ResourceUnitsAmino;
  count: number;
  price: CoinAmino;
}
/**
 * Resource stores unit, total count and price of resource
 * @name ResourceSDKType
 * @package akash.deployment.v1beta1
 * @see proto type: akash.deployment.v1beta1.Resource
 */
export interface ResourceSDKType {
  resources: ResourceUnitsSDKType;
  count: number;
  price: CoinSDKType;
}
function createBaseMsgCloseGroup(): MsgCloseGroup {
  return {
    id: GroupID.fromPartial({})
  };
}
/**
 * MsgCloseGroup defines SDK message to close a single Group within a Deployment.
 * @name MsgCloseGroup
 * @package akash.deployment.v1beta1
 * @see proto type: akash.deployment.v1beta1.MsgCloseGroup
 */
export const MsgCloseGroup = {
  typeUrl: "/akash.deployment.v1beta1.MsgCloseGroup",
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
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): MsgCloseGroup {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCloseGroup();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = GroupID.decode(reader, reader.uint32(), useInterfaces);
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
  toAmino(message: MsgCloseGroup, useInterfaces: boolean = true): MsgCloseGroupAmino {
    const obj: any = {};
    obj.id = message.id ? GroupID.toAmino(message.id, useInterfaces) : GroupID.toAmino(GroupID.fromPartial({}));
    return obj;
  },
  fromProtoMsg(message: MsgCloseGroupProtoMsg, useInterfaces: boolean = true): MsgCloseGroup {
    return MsgCloseGroup.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: MsgCloseGroup): Uint8Array {
    return MsgCloseGroup.encode(message).finish();
  },
  toProtoMsg(message: MsgCloseGroup): MsgCloseGroupProtoMsg {
    return {
      typeUrl: "/akash.deployment.v1beta1.MsgCloseGroup",
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
 * @package akash.deployment.v1beta1
 * @see proto type: akash.deployment.v1beta1.MsgCloseGroupResponse
 */
export const MsgCloseGroupResponse = {
  typeUrl: "/akash.deployment.v1beta1.MsgCloseGroupResponse",
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
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): MsgCloseGroupResponse {
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
  toAmino(_: MsgCloseGroupResponse, useInterfaces: boolean = true): MsgCloseGroupResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromProtoMsg(message: MsgCloseGroupResponseProtoMsg, useInterfaces: boolean = true): MsgCloseGroupResponse {
    return MsgCloseGroupResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: MsgCloseGroupResponse): Uint8Array {
    return MsgCloseGroupResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgCloseGroupResponse): MsgCloseGroupResponseProtoMsg {
    return {
      typeUrl: "/akash.deployment.v1beta1.MsgCloseGroupResponse",
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
 * @package akash.deployment.v1beta1
 * @see proto type: akash.deployment.v1beta1.MsgPauseGroup
 */
export const MsgPauseGroup = {
  typeUrl: "/akash.deployment.v1beta1.MsgPauseGroup",
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
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): MsgPauseGroup {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgPauseGroup();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = GroupID.decode(reader, reader.uint32(), useInterfaces);
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
  toAmino(message: MsgPauseGroup, useInterfaces: boolean = true): MsgPauseGroupAmino {
    const obj: any = {};
    obj.id = message.id ? GroupID.toAmino(message.id, useInterfaces) : GroupID.toAmino(GroupID.fromPartial({}));
    return obj;
  },
  fromProtoMsg(message: MsgPauseGroupProtoMsg, useInterfaces: boolean = true): MsgPauseGroup {
    return MsgPauseGroup.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: MsgPauseGroup): Uint8Array {
    return MsgPauseGroup.encode(message).finish();
  },
  toProtoMsg(message: MsgPauseGroup): MsgPauseGroupProtoMsg {
    return {
      typeUrl: "/akash.deployment.v1beta1.MsgPauseGroup",
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
 * @package akash.deployment.v1beta1
 * @see proto type: akash.deployment.v1beta1.MsgPauseGroupResponse
 */
export const MsgPauseGroupResponse = {
  typeUrl: "/akash.deployment.v1beta1.MsgPauseGroupResponse",
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
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): MsgPauseGroupResponse {
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
  toAmino(_: MsgPauseGroupResponse, useInterfaces: boolean = true): MsgPauseGroupResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromProtoMsg(message: MsgPauseGroupResponseProtoMsg, useInterfaces: boolean = true): MsgPauseGroupResponse {
    return MsgPauseGroupResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: MsgPauseGroupResponse): Uint8Array {
    return MsgPauseGroupResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgPauseGroupResponse): MsgPauseGroupResponseProtoMsg {
    return {
      typeUrl: "/akash.deployment.v1beta1.MsgPauseGroupResponse",
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
 * @package akash.deployment.v1beta1
 * @see proto type: akash.deployment.v1beta1.MsgStartGroup
 */
export const MsgStartGroup = {
  typeUrl: "/akash.deployment.v1beta1.MsgStartGroup",
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
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): MsgStartGroup {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgStartGroup();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = GroupID.decode(reader, reader.uint32(), useInterfaces);
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
  toAmino(message: MsgStartGroup, useInterfaces: boolean = true): MsgStartGroupAmino {
    const obj: any = {};
    obj.id = message.id ? GroupID.toAmino(message.id, useInterfaces) : GroupID.toAmino(GroupID.fromPartial({}));
    return obj;
  },
  fromProtoMsg(message: MsgStartGroupProtoMsg, useInterfaces: boolean = true): MsgStartGroup {
    return MsgStartGroup.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: MsgStartGroup): Uint8Array {
    return MsgStartGroup.encode(message).finish();
  },
  toProtoMsg(message: MsgStartGroup): MsgStartGroupProtoMsg {
    return {
      typeUrl: "/akash.deployment.v1beta1.MsgStartGroup",
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
 * @package akash.deployment.v1beta1
 * @see proto type: akash.deployment.v1beta1.MsgStartGroupResponse
 */
export const MsgStartGroupResponse = {
  typeUrl: "/akash.deployment.v1beta1.MsgStartGroupResponse",
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
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): MsgStartGroupResponse {
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
  toAmino(_: MsgStartGroupResponse, useInterfaces: boolean = true): MsgStartGroupResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromProtoMsg(message: MsgStartGroupResponseProtoMsg, useInterfaces: boolean = true): MsgStartGroupResponse {
    return MsgStartGroupResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: MsgStartGroupResponse): Uint8Array {
    return MsgStartGroupResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgStartGroupResponse): MsgStartGroupResponseProtoMsg {
    return {
      typeUrl: "/akash.deployment.v1beta1.MsgStartGroupResponse",
      value: MsgStartGroupResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseGroupID(): GroupID {
  return {
    owner: "",
    dseq: BigInt(0),
    gseq: 0
  };
}
/**
 * GroupID stores owner, deployment sequence number and group sequence number
 * @name GroupID
 * @package akash.deployment.v1beta1
 * @see proto type: akash.deployment.v1beta1.GroupID
 */
export const GroupID = {
  typeUrl: "/akash.deployment.v1beta1.GroupID",
  is(o: any): o is GroupID {
    return o && (o.$typeUrl === GroupID.typeUrl || typeof o.owner === "string" && typeof o.dseq === "bigint" && typeof o.gseq === "number");
  },
  isSDK(o: any): o is GroupIDSDKType {
    return o && (o.$typeUrl === GroupID.typeUrl || typeof o.owner === "string" && typeof o.dseq === "bigint" && typeof o.gseq === "number");
  },
  isAmino(o: any): o is GroupIDAmino {
    return o && (o.$typeUrl === GroupID.typeUrl || typeof o.owner === "string" && typeof o.dseq === "bigint" && typeof o.gseq === "number");
  },
  encode(message: GroupID, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    if (message.dseq !== BigInt(0)) {
      writer.uint32(16).uint64(message.dseq);
    }
    if (message.gseq !== 0) {
      writer.uint32(24).uint32(message.gseq);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): GroupID {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGroupID();
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
          message.gseq = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): GroupID {
    const obj = createBaseGroupID();
    if (isSet(object.owner)) obj.owner = String(object.owner);
    if (isSet(object.dseq)) obj.dseq = BigInt(object.dseq.toString());
    if (isSet(object.gseq)) obj.gseq = Number(object.gseq);
    return obj;
  },
  fromPartial(object: DeepPartial<GroupID>): GroupID {
    const message = createBaseGroupID();
    message.owner = object.owner ?? "";
    if (object.dseq !== undefined && object.dseq !== null) {
      message.dseq = BigInt(object.dseq.toString());
    }
    message.gseq = object.gseq ?? 0;
    return message;
  },
  fromSDK(object: GroupIDSDKType): GroupID {
    return {
      owner: object?.owner,
      dseq: object?.dseq,
      gseq: object?.gseq
    };
  },
  toSDK(message: GroupID): GroupIDSDKType {
    const obj: any = {};
    obj.owner = message.owner;
    obj.dseq = message.dseq;
    obj.gseq = message.gseq;
    return obj;
  },
  fromAmino(object: GroupIDAmino): GroupID {
    const message = createBaseGroupID();
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = object.owner;
    }
    if (object.dseq !== undefined && object.dseq !== null) {
      message.dseq = BigInt(object.dseq);
    }
    if (object.gseq !== undefined && object.gseq !== null) {
      message.gseq = object.gseq;
    }
    return message;
  },
  toAmino(message: GroupID, useInterfaces: boolean = true): GroupIDAmino {
    const obj: any = {};
    obj.owner = message.owner ?? "";
    obj.dseq = message.dseq ? message.dseq?.toString() : "0";
    obj.gseq = message.gseq ?? 0;
    return obj;
  },
  fromProtoMsg(message: GroupIDProtoMsg, useInterfaces: boolean = true): GroupID {
    return GroupID.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: GroupID): Uint8Array {
    return GroupID.encode(message).finish();
  },
  toProtoMsg(message: GroupID): GroupIDProtoMsg {
    return {
      typeUrl: "/akash.deployment.v1beta1.GroupID",
      value: GroupID.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseGroupSpec(): GroupSpec {
  return {
    name: "",
    requirements: PlacementRequirements.fromPartial({}),
    resources: []
  };
}
/**
 * GroupSpec stores group specifications
 * @name GroupSpec
 * @package akash.deployment.v1beta1
 * @see proto type: akash.deployment.v1beta1.GroupSpec
 */
export const GroupSpec = {
  typeUrl: "/akash.deployment.v1beta1.GroupSpec",
  is(o: any): o is GroupSpec {
    return o && (o.$typeUrl === GroupSpec.typeUrl || typeof o.name === "string" && PlacementRequirements.is(o.requirements) && Array.isArray(o.resources) && (!o.resources.length || Resource.is(o.resources[0])));
  },
  isSDK(o: any): o is GroupSpecSDKType {
    return o && (o.$typeUrl === GroupSpec.typeUrl || typeof o.name === "string" && PlacementRequirements.isSDK(o.requirements) && Array.isArray(o.resources) && (!o.resources.length || Resource.isSDK(o.resources[0])));
  },
  isAmino(o: any): o is GroupSpecAmino {
    return o && (o.$typeUrl === GroupSpec.typeUrl || typeof o.name === "string" && PlacementRequirements.isAmino(o.requirements) && Array.isArray(o.resources) && (!o.resources.length || Resource.isAmino(o.resources[0])));
  },
  encode(message: GroupSpec, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.requirements !== undefined) {
      PlacementRequirements.encode(message.requirements, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.resources) {
      Resource.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): GroupSpec {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGroupSpec();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.requirements = PlacementRequirements.decode(reader, reader.uint32(), useInterfaces);
          break;
        case 3:
          message.resources.push(Resource.decode(reader, reader.uint32(), useInterfaces));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): GroupSpec {
    const obj = createBaseGroupSpec();
    if (isSet(object.name)) obj.name = String(object.name);
    if (isSet(object.requirements)) obj.requirements = PlacementRequirements.fromJSON(object.requirements);
    if (Array.isArray(object?.resources)) obj.resources = object.resources.map((e: any) => Resource.fromJSON(e));
    return obj;
  },
  fromPartial(object: DeepPartial<GroupSpec>): GroupSpec {
    const message = createBaseGroupSpec();
    message.name = object.name ?? "";
    if (object.requirements !== undefined && object.requirements !== null) {
      message.requirements = PlacementRequirements.fromPartial(object.requirements);
    }
    message.resources = object.resources?.map(e => Resource.fromPartial(e)) || [];
    return message;
  },
  fromSDK(object: GroupSpecSDKType): GroupSpec {
    return {
      name: object?.name,
      requirements: object.requirements ? PlacementRequirements.fromSDK(object.requirements) : undefined,
      resources: Array.isArray(object?.resources) ? object.resources.map((e: any) => Resource.fromSDK(e)) : []
    };
  },
  toSDK(message: GroupSpec): GroupSpecSDKType {
    const obj: any = {};
    obj.name = message.name;
    message.requirements !== undefined && (obj.requirements = message.requirements ? PlacementRequirements.toSDK(message.requirements) : undefined);
    if (message.resources) {
      obj.resources = message.resources.map(e => e ? Resource.toSDK(e) : undefined);
    } else {
      obj.resources = [];
    }
    return obj;
  },
  fromAmino(object: GroupSpecAmino): GroupSpec {
    const message = createBaseGroupSpec();
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    }
    if (object.requirements !== undefined && object.requirements !== null) {
      message.requirements = PlacementRequirements.fromAmino(object.requirements);
    }
    message.resources = object.resources?.map(e => Resource.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: GroupSpec, useInterfaces: boolean = true): GroupSpecAmino {
    const obj: any = {};
    obj.name = message.name ?? "";
    obj.requirements = message.requirements ? PlacementRequirements.toAmino(message.requirements, useInterfaces) : PlacementRequirements.toAmino(PlacementRequirements.fromPartial({}));
    if (message.resources) {
      obj.resources = message.resources.map(e => e ? Resource.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.resources = message.resources;
    }
    return obj;
  },
  fromProtoMsg(message: GroupSpecProtoMsg, useInterfaces: boolean = true): GroupSpec {
    return GroupSpec.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: GroupSpec): Uint8Array {
    return GroupSpec.encode(message).finish();
  },
  toProtoMsg(message: GroupSpec): GroupSpecProtoMsg {
    return {
      typeUrl: "/akash.deployment.v1beta1.GroupSpec",
      value: GroupSpec.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(GroupSpec.typeUrl)) {
      return;
    }
    PlacementRequirements.registerTypeUrl();
    Resource.registerTypeUrl();
  }
};
function createBaseGroup(): Group {
  return {
    groupId: GroupID.fromPartial({}),
    state: 0,
    groupSpec: GroupSpec.fromPartial({}),
    createdAt: BigInt(0)
  };
}
/**
 * Group stores group id, state and specifications of group
 * @name Group
 * @package akash.deployment.v1beta1
 * @see proto type: akash.deployment.v1beta1.Group
 */
export const Group = {
  typeUrl: "/akash.deployment.v1beta1.Group",
  is(o: any): o is Group {
    return o && (o.$typeUrl === Group.typeUrl || GroupID.is(o.groupId) && isSet(o.state) && GroupSpec.is(o.groupSpec) && typeof o.createdAt === "bigint");
  },
  isSDK(o: any): o is GroupSDKType {
    return o && (o.$typeUrl === Group.typeUrl || GroupID.isSDK(o.group_id) && isSet(o.state) && GroupSpec.isSDK(o.group_spec) && typeof o.created_at === "bigint");
  },
  isAmino(o: any): o is GroupAmino {
    return o && (o.$typeUrl === Group.typeUrl || GroupID.isAmino(o.group_id) && isSet(o.state) && GroupSpec.isAmino(o.group_spec) && typeof o.created_at === "bigint");
  },
  encode(message: Group, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.groupId !== undefined) {
      GroupID.encode(message.groupId, writer.uint32(10).fork()).ldelim();
    }
    if (message.state !== 0) {
      writer.uint32(16).int32(message.state);
    }
    if (message.groupSpec !== undefined) {
      GroupSpec.encode(message.groupSpec, writer.uint32(26).fork()).ldelim();
    }
    if (message.createdAt !== BigInt(0)) {
      writer.uint32(32).int64(message.createdAt);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): Group {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGroup();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.groupId = GroupID.decode(reader, reader.uint32(), useInterfaces);
          break;
        case 2:
          message.state = (reader.int32() as any);
          break;
        case 3:
          message.groupSpec = GroupSpec.decode(reader, reader.uint32(), useInterfaces);
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
  fromJSON(object: any): Group {
    const obj = createBaseGroup();
    if (isSet(object.groupId)) obj.groupId = GroupID.fromJSON(object.groupId);
    if (isSet(object.state)) obj.state = group_StateFromJSON(object.state);
    if (isSet(object.groupSpec)) obj.groupSpec = GroupSpec.fromJSON(object.groupSpec);
    if (isSet(object.createdAt)) obj.createdAt = BigInt(object.createdAt.toString());
    return obj;
  },
  fromPartial(object: DeepPartial<Group>): Group {
    const message = createBaseGroup();
    if (object.groupId !== undefined && object.groupId !== null) {
      message.groupId = GroupID.fromPartial(object.groupId);
    }
    message.state = object.state ?? 0;
    if (object.groupSpec !== undefined && object.groupSpec !== null) {
      message.groupSpec = GroupSpec.fromPartial(object.groupSpec);
    }
    if (object.createdAt !== undefined && object.createdAt !== null) {
      message.createdAt = BigInt(object.createdAt.toString());
    }
    return message;
  },
  fromSDK(object: GroupSDKType): Group {
    return {
      groupId: object.group_id ? GroupID.fromSDK(object.group_id) : undefined,
      state: isSet(object.state) ? group_StateFromJSON(object.state) : -1,
      groupSpec: object.group_spec ? GroupSpec.fromSDK(object.group_spec) : undefined,
      createdAt: object?.created_at
    };
  },
  toSDK(message: Group): GroupSDKType {
    const obj: any = {};
    message.groupId !== undefined && (obj.group_id = message.groupId ? GroupID.toSDK(message.groupId) : undefined);
    message.state !== undefined && (obj.state = group_StateToJSON(message.state));
    message.groupSpec !== undefined && (obj.group_spec = message.groupSpec ? GroupSpec.toSDK(message.groupSpec) : undefined);
    obj.created_at = message.createdAt;
    return obj;
  },
  fromAmino(object: GroupAmino): Group {
    const message = createBaseGroup();
    if (object.group_id !== undefined && object.group_id !== null) {
      message.groupId = GroupID.fromAmino(object.group_id);
    }
    if (object.state !== undefined && object.state !== null) {
      message.state = object.state;
    }
    if (object.group_spec !== undefined && object.group_spec !== null) {
      message.groupSpec = GroupSpec.fromAmino(object.group_spec);
    }
    if (object.created_at !== undefined && object.created_at !== null) {
      message.createdAt = BigInt(object.created_at);
    }
    return message;
  },
  toAmino(message: Group, useInterfaces: boolean = true): GroupAmino {
    const obj: any = {};
    obj.group_id = message.groupId ? GroupID.toAmino(message.groupId, useInterfaces) : GroupID.toAmino(GroupID.fromPartial({}));
    obj.state = message.state ?? 0;
    obj.group_spec = message.groupSpec ? GroupSpec.toAmino(message.groupSpec, useInterfaces) : GroupSpec.toAmino(GroupSpec.fromPartial({}));
    obj.created_at = message.createdAt !== BigInt(0) ? message.createdAt?.toString() : undefined;
    return obj;
  },
  fromProtoMsg(message: GroupProtoMsg, useInterfaces: boolean = true): Group {
    return Group.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: Group): Uint8Array {
    return Group.encode(message).finish();
  },
  toProtoMsg(message: Group): GroupProtoMsg {
    return {
      typeUrl: "/akash.deployment.v1beta1.Group",
      value: Group.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(Group.typeUrl)) {
      return;
    }
    GroupID.registerTypeUrl();
    GroupSpec.registerTypeUrl();
  }
};
function createBaseResource(): Resource {
  return {
    resources: ResourceUnits.fromPartial({}),
    count: 0,
    price: Coin.fromPartial({})
  };
}
/**
 * Resource stores unit, total count and price of resource
 * @name Resource
 * @package akash.deployment.v1beta1
 * @see proto type: akash.deployment.v1beta1.Resource
 */
export const Resource = {
  typeUrl: "/akash.deployment.v1beta1.Resource",
  is(o: any): o is Resource {
    return o && (o.$typeUrl === Resource.typeUrl || ResourceUnits.is(o.resources) && typeof o.count === "number" && Coin.is(o.price));
  },
  isSDK(o: any): o is ResourceSDKType {
    return o && (o.$typeUrl === Resource.typeUrl || ResourceUnits.isSDK(o.resources) && typeof o.count === "number" && Coin.isSDK(o.price));
  },
  isAmino(o: any): o is ResourceAmino {
    return o && (o.$typeUrl === Resource.typeUrl || ResourceUnits.isAmino(o.resources) && typeof o.count === "number" && Coin.isAmino(o.price));
  },
  encode(message: Resource, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.resources !== undefined) {
      ResourceUnits.encode(message.resources, writer.uint32(10).fork()).ldelim();
    }
    if (message.count !== 0) {
      writer.uint32(16).uint32(message.count);
    }
    if (message.price !== undefined) {
      Coin.encode(message.price, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): Resource {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResource();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.resources = ResourceUnits.decode(reader, reader.uint32(), useInterfaces);
          break;
        case 2:
          message.count = reader.uint32();
          break;
        case 3:
          message.price = Coin.decode(reader, reader.uint32(), useInterfaces);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Resource {
    const obj = createBaseResource();
    if (isSet(object.resources)) obj.resources = ResourceUnits.fromJSON(object.resources);
    if (isSet(object.count)) obj.count = Number(object.count);
    if (isSet(object.price)) obj.price = Coin.fromJSON(object.price);
    return obj;
  },
  fromPartial(object: DeepPartial<Resource>): Resource {
    const message = createBaseResource();
    if (object.resources !== undefined && object.resources !== null) {
      message.resources = ResourceUnits.fromPartial(object.resources);
    }
    message.count = object.count ?? 0;
    if (object.price !== undefined && object.price !== null) {
      message.price = Coin.fromPartial(object.price);
    }
    return message;
  },
  fromSDK(object: ResourceSDKType): Resource {
    return {
      resources: object.resources ? ResourceUnits.fromSDK(object.resources) : undefined,
      count: object?.count,
      price: object.price ? Coin.fromSDK(object.price) : undefined
    };
  },
  toSDK(message: Resource): ResourceSDKType {
    const obj: any = {};
    message.resources !== undefined && (obj.resources = message.resources ? ResourceUnits.toSDK(message.resources) : undefined);
    obj.count = message.count;
    message.price !== undefined && (obj.price = message.price ? Coin.toSDK(message.price) : undefined);
    return obj;
  },
  fromAmino(object: ResourceAmino): Resource {
    const message = createBaseResource();
    if (object.resources !== undefined && object.resources !== null) {
      message.resources = ResourceUnits.fromAmino(object.resources);
    }
    if (object.count !== undefined && object.count !== null) {
      message.count = object.count;
    }
    if (object.price !== undefined && object.price !== null) {
      message.price = Coin.fromAmino(object.price);
    }
    return message;
  },
  toAmino(message: Resource, useInterfaces: boolean = true): ResourceAmino {
    const obj: any = {};
    obj.resources = message.resources ? ResourceUnits.toAmino(message.resources, useInterfaces) : ResourceUnits.toAmino(ResourceUnits.fromPartial({}));
    obj.count = message.count ?? 0;
    obj.price = message.price ? Coin.toAmino(message.price, useInterfaces) : Coin.toAmino(Coin.fromPartial({}));
    return obj;
  },
  fromProtoMsg(message: ResourceProtoMsg, useInterfaces: boolean = true): Resource {
    return Resource.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: Resource): Uint8Array {
    return Resource.encode(message).finish();
  },
  toProtoMsg(message: Resource): ResourceProtoMsg {
    return {
      typeUrl: "/akash.deployment.v1beta1.Resource",
      value: Resource.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(Resource.typeUrl)) {
      return;
    }
    ResourceUnits.registerTypeUrl();
    Coin.registerTypeUrl();
  }
};