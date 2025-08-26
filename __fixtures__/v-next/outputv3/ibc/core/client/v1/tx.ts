import { Any, AnyProtoMsg, AnyAmino, AnySDKType } from "../../../../google/protobuf/any";
import { BinaryReader, BinaryWriter } from "../../../../binary";
import { GlobalDecoderRegistry } from "../../../../registry";
import { isSet, DeepPartial, bytesFromBase64, base64FromBytes } from "../../../../helpers";
export const protobufPackage = "ibc.core.client.v1";
/**
 * MsgCreateClient defines a message to create an IBC client
 * @name MsgCreateClient
 * @package ibc.core.client.v1
 * @see proto type: ibc.core.client.v1.MsgCreateClient
 */
export interface MsgCreateClient {
  /**
   * light client state
   */
  clientState?: Any;
  /**
   * consensus state associated with the client that corresponds to a given
   * height.
   */
  consensusState?: Any;
  /**
   * signer address
   */
  signer: string;
}
export interface MsgCreateClientProtoMsg {
  typeUrl: "/ibc.core.client.v1.MsgCreateClient";
  value: Uint8Array;
}
/**
 * MsgCreateClient defines a message to create an IBC client
 * @name MsgCreateClientAmino
 * @package ibc.core.client.v1
 * @see proto type: ibc.core.client.v1.MsgCreateClient
 */
export interface MsgCreateClientAmino {
  /**
   * light client state
   */
  client_state?: AnyAmino;
  /**
   * consensus state associated with the client that corresponds to a given
   * height.
   */
  consensus_state?: AnyAmino;
  /**
   * signer address
   */
  signer?: string;
}
/**
 * MsgCreateClient defines a message to create an IBC client
 * @name MsgCreateClientSDKType
 * @package ibc.core.client.v1
 * @see proto type: ibc.core.client.v1.MsgCreateClient
 */
export interface MsgCreateClientSDKType {
  client_state?: AnySDKType;
  consensus_state?: AnySDKType;
  signer: string;
}
/**
 * MsgCreateClientResponse defines the Msg/CreateClient response type.
 * @name MsgCreateClientResponse
 * @package ibc.core.client.v1
 * @see proto type: ibc.core.client.v1.MsgCreateClientResponse
 */
export interface MsgCreateClientResponse {}
export interface MsgCreateClientResponseProtoMsg {
  typeUrl: "/ibc.core.client.v1.MsgCreateClientResponse";
  value: Uint8Array;
}
/**
 * MsgCreateClientResponse defines the Msg/CreateClient response type.
 * @name MsgCreateClientResponseAmino
 * @package ibc.core.client.v1
 * @see proto type: ibc.core.client.v1.MsgCreateClientResponse
 */
export interface MsgCreateClientResponseAmino {}
/**
 * MsgCreateClientResponse defines the Msg/CreateClient response type.
 * @name MsgCreateClientResponseSDKType
 * @package ibc.core.client.v1
 * @see proto type: ibc.core.client.v1.MsgCreateClientResponse
 */
export interface MsgCreateClientResponseSDKType {}
/**
 * MsgUpdateClient defines an sdk.Msg to update a IBC client state using
 * the given header.
 * @name MsgUpdateClient
 * @package ibc.core.client.v1
 * @see proto type: ibc.core.client.v1.MsgUpdateClient
 */
export interface MsgUpdateClient {
  /**
   * client unique identifier
   */
  clientId: string;
  /**
   * header to update the light client
   */
  header?: Any;
  /**
   * signer address
   */
  signer: string;
}
export interface MsgUpdateClientProtoMsg {
  typeUrl: "/ibc.core.client.v1.MsgUpdateClient";
  value: Uint8Array;
}
/**
 * MsgUpdateClient defines an sdk.Msg to update a IBC client state using
 * the given header.
 * @name MsgUpdateClientAmino
 * @package ibc.core.client.v1
 * @see proto type: ibc.core.client.v1.MsgUpdateClient
 */
export interface MsgUpdateClientAmino {
  /**
   * client unique identifier
   */
  client_id?: string;
  /**
   * header to update the light client
   */
  header?: AnyAmino;
  /**
   * signer address
   */
  signer?: string;
}
/**
 * MsgUpdateClient defines an sdk.Msg to update a IBC client state using
 * the given header.
 * @name MsgUpdateClientSDKType
 * @package ibc.core.client.v1
 * @see proto type: ibc.core.client.v1.MsgUpdateClient
 */
export interface MsgUpdateClientSDKType {
  client_id: string;
  header?: AnySDKType;
  signer: string;
}
/**
 * MsgUpdateClientResponse defines the Msg/UpdateClient response type.
 * @name MsgUpdateClientResponse
 * @package ibc.core.client.v1
 * @see proto type: ibc.core.client.v1.MsgUpdateClientResponse
 */
export interface MsgUpdateClientResponse {}
export interface MsgUpdateClientResponseProtoMsg {
  typeUrl: "/ibc.core.client.v1.MsgUpdateClientResponse";
  value: Uint8Array;
}
/**
 * MsgUpdateClientResponse defines the Msg/UpdateClient response type.
 * @name MsgUpdateClientResponseAmino
 * @package ibc.core.client.v1
 * @see proto type: ibc.core.client.v1.MsgUpdateClientResponse
 */
export interface MsgUpdateClientResponseAmino {}
/**
 * MsgUpdateClientResponse defines the Msg/UpdateClient response type.
 * @name MsgUpdateClientResponseSDKType
 * @package ibc.core.client.v1
 * @see proto type: ibc.core.client.v1.MsgUpdateClientResponse
 */
export interface MsgUpdateClientResponseSDKType {}
/**
 * MsgUpgradeClient defines an sdk.Msg to upgrade an IBC client to a new client
 * state
 * @name MsgUpgradeClient
 * @package ibc.core.client.v1
 * @see proto type: ibc.core.client.v1.MsgUpgradeClient
 */
export interface MsgUpgradeClient {
  /**
   * client unique identifier
   */
  clientId: string;
  /**
   * upgraded client state
   */
  clientState?: Any;
  /**
   * upgraded consensus state, only contains enough information to serve as a
   * basis of trust in update logic
   */
  consensusState?: Any;
  /**
   * proof that old chain committed to new client
   */
  proofUpgradeClient: Uint8Array;
  /**
   * proof that old chain committed to new consensus state
   */
  proofUpgradeConsensusState: Uint8Array;
  /**
   * signer address
   */
  signer: string;
}
export interface MsgUpgradeClientProtoMsg {
  typeUrl: "/ibc.core.client.v1.MsgUpgradeClient";
  value: Uint8Array;
}
/**
 * MsgUpgradeClient defines an sdk.Msg to upgrade an IBC client to a new client
 * state
 * @name MsgUpgradeClientAmino
 * @package ibc.core.client.v1
 * @see proto type: ibc.core.client.v1.MsgUpgradeClient
 */
export interface MsgUpgradeClientAmino {
  /**
   * client unique identifier
   */
  client_id?: string;
  /**
   * upgraded client state
   */
  client_state?: AnyAmino;
  /**
   * upgraded consensus state, only contains enough information to serve as a
   * basis of trust in update logic
   */
  consensus_state?: AnyAmino;
  /**
   * proof that old chain committed to new client
   */
  proof_upgrade_client?: string;
  /**
   * proof that old chain committed to new consensus state
   */
  proof_upgrade_consensus_state?: string;
  /**
   * signer address
   */
  signer?: string;
}
/**
 * MsgUpgradeClient defines an sdk.Msg to upgrade an IBC client to a new client
 * state
 * @name MsgUpgradeClientSDKType
 * @package ibc.core.client.v1
 * @see proto type: ibc.core.client.v1.MsgUpgradeClient
 */
export interface MsgUpgradeClientSDKType {
  client_id: string;
  client_state?: AnySDKType;
  consensus_state?: AnySDKType;
  proof_upgrade_client: Uint8Array;
  proof_upgrade_consensus_state: Uint8Array;
  signer: string;
}
/**
 * MsgUpgradeClientResponse defines the Msg/UpgradeClient response type.
 * @name MsgUpgradeClientResponse
 * @package ibc.core.client.v1
 * @see proto type: ibc.core.client.v1.MsgUpgradeClientResponse
 */
export interface MsgUpgradeClientResponse {}
export interface MsgUpgradeClientResponseProtoMsg {
  typeUrl: "/ibc.core.client.v1.MsgUpgradeClientResponse";
  value: Uint8Array;
}
/**
 * MsgUpgradeClientResponse defines the Msg/UpgradeClient response type.
 * @name MsgUpgradeClientResponseAmino
 * @package ibc.core.client.v1
 * @see proto type: ibc.core.client.v1.MsgUpgradeClientResponse
 */
export interface MsgUpgradeClientResponseAmino {}
/**
 * MsgUpgradeClientResponse defines the Msg/UpgradeClient response type.
 * @name MsgUpgradeClientResponseSDKType
 * @package ibc.core.client.v1
 * @see proto type: ibc.core.client.v1.MsgUpgradeClientResponse
 */
export interface MsgUpgradeClientResponseSDKType {}
/**
 * MsgSubmitMisbehaviour defines an sdk.Msg type that submits Evidence for
 * light client misbehaviour.
 * @name MsgSubmitMisbehaviour
 * @package ibc.core.client.v1
 * @see proto type: ibc.core.client.v1.MsgSubmitMisbehaviour
 */
export interface MsgSubmitMisbehaviour {
  /**
   * client unique identifier
   */
  clientId: string;
  /**
   * misbehaviour used for freezing the light client
   */
  misbehaviour?: Any;
  /**
   * signer address
   */
  signer: string;
}
export interface MsgSubmitMisbehaviourProtoMsg {
  typeUrl: "/ibc.core.client.v1.MsgSubmitMisbehaviour";
  value: Uint8Array;
}
/**
 * MsgSubmitMisbehaviour defines an sdk.Msg type that submits Evidence for
 * light client misbehaviour.
 * @name MsgSubmitMisbehaviourAmino
 * @package ibc.core.client.v1
 * @see proto type: ibc.core.client.v1.MsgSubmitMisbehaviour
 */
export interface MsgSubmitMisbehaviourAmino {
  /**
   * client unique identifier
   */
  client_id?: string;
  /**
   * misbehaviour used for freezing the light client
   */
  misbehaviour?: AnyAmino;
  /**
   * signer address
   */
  signer?: string;
}
/**
 * MsgSubmitMisbehaviour defines an sdk.Msg type that submits Evidence for
 * light client misbehaviour.
 * @name MsgSubmitMisbehaviourSDKType
 * @package ibc.core.client.v1
 * @see proto type: ibc.core.client.v1.MsgSubmitMisbehaviour
 */
export interface MsgSubmitMisbehaviourSDKType {
  client_id: string;
  misbehaviour?: AnySDKType;
  signer: string;
}
/**
 * MsgSubmitMisbehaviourResponse defines the Msg/SubmitMisbehaviour response
 * type.
 * @name MsgSubmitMisbehaviourResponse
 * @package ibc.core.client.v1
 * @see proto type: ibc.core.client.v1.MsgSubmitMisbehaviourResponse
 */
export interface MsgSubmitMisbehaviourResponse {}
export interface MsgSubmitMisbehaviourResponseProtoMsg {
  typeUrl: "/ibc.core.client.v1.MsgSubmitMisbehaviourResponse";
  value: Uint8Array;
}
/**
 * MsgSubmitMisbehaviourResponse defines the Msg/SubmitMisbehaviour response
 * type.
 * @name MsgSubmitMisbehaviourResponseAmino
 * @package ibc.core.client.v1
 * @see proto type: ibc.core.client.v1.MsgSubmitMisbehaviourResponse
 */
export interface MsgSubmitMisbehaviourResponseAmino {}
/**
 * MsgSubmitMisbehaviourResponse defines the Msg/SubmitMisbehaviour response
 * type.
 * @name MsgSubmitMisbehaviourResponseSDKType
 * @package ibc.core.client.v1
 * @see proto type: ibc.core.client.v1.MsgSubmitMisbehaviourResponse
 */
export interface MsgSubmitMisbehaviourResponseSDKType {}
function createBaseMsgCreateClient(): MsgCreateClient {
  return {
    clientState: undefined,
    consensusState: undefined,
    signer: ""
  };
}
/**
 * MsgCreateClient defines a message to create an IBC client
 * @name MsgCreateClient
 * @package ibc.core.client.v1
 * @see proto type: ibc.core.client.v1.MsgCreateClient
 */
export const MsgCreateClient = {
  typeUrl: "/ibc.core.client.v1.MsgCreateClient",
  aminoType: "cosmos-sdk/MsgCreateClient",
  is(o: any): o is MsgCreateClient {
    return o && (o.$typeUrl === MsgCreateClient.typeUrl || typeof o.signer === "string");
  },
  isSDK(o: any): o is MsgCreateClientSDKType {
    return o && (o.$typeUrl === MsgCreateClient.typeUrl || typeof o.signer === "string");
  },
  isAmino(o: any): o is MsgCreateClientAmino {
    return o && (o.$typeUrl === MsgCreateClient.typeUrl || typeof o.signer === "string");
  },
  encode(message: MsgCreateClient, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.clientState !== undefined) {
      Any.encode(message.clientState, writer.uint32(10).fork()).ldelim();
    }
    if (message.consensusState !== undefined) {
      Any.encode(message.consensusState, writer.uint32(18).fork()).ldelim();
    }
    if (message.signer !== "") {
      writer.uint32(26).string(message.signer);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): MsgCreateClient {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateClient();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.clientState = Any.decode(reader, reader.uint32(), useInterfaces);
          break;
        case 2:
          message.consensusState = Any.decode(reader, reader.uint32(), useInterfaces);
          break;
        case 3:
          message.signer = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgCreateClient {
    const obj = createBaseMsgCreateClient();
    if (isSet(object.clientState)) obj.clientState = Any.fromJSON(object.clientState);
    if (isSet(object.consensusState)) obj.consensusState = Any.fromJSON(object.consensusState);
    if (isSet(object.signer)) obj.signer = String(object.signer);
    return obj;
  },
  fromPartial(object: DeepPartial<MsgCreateClient>): MsgCreateClient {
    const message = createBaseMsgCreateClient();
    if (object.clientState !== undefined && object.clientState !== null) {
      message.clientState = Any.fromPartial(object.clientState);
    }
    if (object.consensusState !== undefined && object.consensusState !== null) {
      message.consensusState = Any.fromPartial(object.consensusState);
    }
    message.signer = object.signer ?? "";
    return message;
  },
  fromSDK(object: MsgCreateClientSDKType): MsgCreateClient {
    return {
      clientState: object.client_state ? Any.fromSDK(object.client_state) : undefined,
      consensusState: object.consensus_state ? Any.fromSDK(object.consensus_state) : undefined,
      signer: object?.signer
    };
  },
  toSDK(message: MsgCreateClient): MsgCreateClientSDKType {
    const obj: any = {};
    message.clientState !== undefined && (obj.client_state = message.clientState ? Any.toSDK(message.clientState) : undefined);
    message.consensusState !== undefined && (obj.consensus_state = message.consensusState ? Any.toSDK(message.consensusState) : undefined);
    obj.signer = message.signer;
    return obj;
  },
  fromAmino(object: MsgCreateClientAmino): MsgCreateClient {
    const message = createBaseMsgCreateClient();
    if (object.client_state !== undefined && object.client_state !== null) {
      message.clientState = Any.fromAmino(object.client_state);
    }
    if (object.consensus_state !== undefined && object.consensus_state !== null) {
      message.consensusState = Any.fromAmino(object.consensus_state);
    }
    if (object.signer !== undefined && object.signer !== null) {
      message.signer = object.signer;
    }
    return message;
  },
  toAmino(message: MsgCreateClient, useInterfaces: boolean = true): MsgCreateClientAmino {
    const obj: any = {};
    obj.client_state = message.clientState ? Any.toAmino(message.clientState, useInterfaces) : undefined;
    obj.consensus_state = message.consensusState ? Any.toAmino(message.consensusState, useInterfaces) : undefined;
    obj.signer = message.signer === "" ? undefined : message.signer;
    return obj;
  },
  fromProtoMsg(message: MsgCreateClientProtoMsg, useInterfaces: boolean = true): MsgCreateClient {
    return MsgCreateClient.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: MsgCreateClient): Uint8Array {
    return MsgCreateClient.encode(message).finish();
  },
  toProtoMsg(message: MsgCreateClient): MsgCreateClientProtoMsg {
    return {
      typeUrl: "/ibc.core.client.v1.MsgCreateClient",
      value: MsgCreateClient.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseMsgCreateClientResponse(): MsgCreateClientResponse {
  return {};
}
/**
 * MsgCreateClientResponse defines the Msg/CreateClient response type.
 * @name MsgCreateClientResponse
 * @package ibc.core.client.v1
 * @see proto type: ibc.core.client.v1.MsgCreateClientResponse
 */
export const MsgCreateClientResponse = {
  typeUrl: "/ibc.core.client.v1.MsgCreateClientResponse",
  aminoType: "cosmos-sdk/MsgCreateClientResponse",
  is(o: any): o is MsgCreateClientResponse {
    return o && o.$typeUrl === MsgCreateClientResponse.typeUrl;
  },
  isSDK(o: any): o is MsgCreateClientResponseSDKType {
    return o && o.$typeUrl === MsgCreateClientResponse.typeUrl;
  },
  isAmino(o: any): o is MsgCreateClientResponseAmino {
    return o && o.$typeUrl === MsgCreateClientResponse.typeUrl;
  },
  encode(_: MsgCreateClientResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): MsgCreateClientResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateClientResponse();
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
  fromJSON(_: any): MsgCreateClientResponse {
    const obj = createBaseMsgCreateClientResponse();
    return obj;
  },
  fromPartial(_: DeepPartial<MsgCreateClientResponse>): MsgCreateClientResponse {
    const message = createBaseMsgCreateClientResponse();
    return message;
  },
  fromSDK(_: MsgCreateClientResponseSDKType): MsgCreateClientResponse {
    return {};
  },
  toSDK(_: MsgCreateClientResponse): MsgCreateClientResponseSDKType {
    const obj: any = {};
    return obj;
  },
  fromAmino(_: MsgCreateClientResponseAmino): MsgCreateClientResponse {
    const message = createBaseMsgCreateClientResponse();
    return message;
  },
  toAmino(_: MsgCreateClientResponse, useInterfaces: boolean = true): MsgCreateClientResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromProtoMsg(message: MsgCreateClientResponseProtoMsg, useInterfaces: boolean = true): MsgCreateClientResponse {
    return MsgCreateClientResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: MsgCreateClientResponse): Uint8Array {
    return MsgCreateClientResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgCreateClientResponse): MsgCreateClientResponseProtoMsg {
    return {
      typeUrl: "/ibc.core.client.v1.MsgCreateClientResponse",
      value: MsgCreateClientResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseMsgUpdateClient(): MsgUpdateClient {
  return {
    clientId: "",
    header: undefined,
    signer: ""
  };
}
/**
 * MsgUpdateClient defines an sdk.Msg to update a IBC client state using
 * the given header.
 * @name MsgUpdateClient
 * @package ibc.core.client.v1
 * @see proto type: ibc.core.client.v1.MsgUpdateClient
 */
export const MsgUpdateClient = {
  typeUrl: "/ibc.core.client.v1.MsgUpdateClient",
  aminoType: "cosmos-sdk/MsgUpdateClient",
  is(o: any): o is MsgUpdateClient {
    return o && (o.$typeUrl === MsgUpdateClient.typeUrl || typeof o.clientId === "string" && typeof o.signer === "string");
  },
  isSDK(o: any): o is MsgUpdateClientSDKType {
    return o && (o.$typeUrl === MsgUpdateClient.typeUrl || typeof o.client_id === "string" && typeof o.signer === "string");
  },
  isAmino(o: any): o is MsgUpdateClientAmino {
    return o && (o.$typeUrl === MsgUpdateClient.typeUrl || typeof o.client_id === "string" && typeof o.signer === "string");
  },
  encode(message: MsgUpdateClient, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.clientId !== "") {
      writer.uint32(10).string(message.clientId);
    }
    if (message.header !== undefined) {
      Any.encode(message.header, writer.uint32(18).fork()).ldelim();
    }
    if (message.signer !== "") {
      writer.uint32(26).string(message.signer);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): MsgUpdateClient {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateClient();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.clientId = reader.string();
          break;
        case 2:
          message.header = Any.decode(reader, reader.uint32(), useInterfaces);
          break;
        case 3:
          message.signer = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgUpdateClient {
    const obj = createBaseMsgUpdateClient();
    if (isSet(object.clientId)) obj.clientId = String(object.clientId);
    if (isSet(object.header)) obj.header = Any.fromJSON(object.header);
    if (isSet(object.signer)) obj.signer = String(object.signer);
    return obj;
  },
  fromPartial(object: DeepPartial<MsgUpdateClient>): MsgUpdateClient {
    const message = createBaseMsgUpdateClient();
    message.clientId = object.clientId ?? "";
    if (object.header !== undefined && object.header !== null) {
      message.header = Any.fromPartial(object.header);
    }
    message.signer = object.signer ?? "";
    return message;
  },
  fromSDK(object: MsgUpdateClientSDKType): MsgUpdateClient {
    return {
      clientId: object?.client_id,
      header: object.header ? Any.fromSDK(object.header) : undefined,
      signer: object?.signer
    };
  },
  toSDK(message: MsgUpdateClient): MsgUpdateClientSDKType {
    const obj: any = {};
    obj.client_id = message.clientId;
    message.header !== undefined && (obj.header = message.header ? Any.toSDK(message.header) : undefined);
    obj.signer = message.signer;
    return obj;
  },
  fromAmino(object: MsgUpdateClientAmino): MsgUpdateClient {
    const message = createBaseMsgUpdateClient();
    if (object.client_id !== undefined && object.client_id !== null) {
      message.clientId = object.client_id;
    }
    if (object.header !== undefined && object.header !== null) {
      message.header = Any.fromAmino(object.header);
    }
    if (object.signer !== undefined && object.signer !== null) {
      message.signer = object.signer;
    }
    return message;
  },
  toAmino(message: MsgUpdateClient, useInterfaces: boolean = true): MsgUpdateClientAmino {
    const obj: any = {};
    obj.client_id = message.clientId === "" ? undefined : message.clientId;
    obj.header = message.header ? Any.toAmino(message.header, useInterfaces) : undefined;
    obj.signer = message.signer === "" ? undefined : message.signer;
    return obj;
  },
  fromProtoMsg(message: MsgUpdateClientProtoMsg, useInterfaces: boolean = true): MsgUpdateClient {
    return MsgUpdateClient.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: MsgUpdateClient): Uint8Array {
    return MsgUpdateClient.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateClient): MsgUpdateClientProtoMsg {
    return {
      typeUrl: "/ibc.core.client.v1.MsgUpdateClient",
      value: MsgUpdateClient.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseMsgUpdateClientResponse(): MsgUpdateClientResponse {
  return {};
}
/**
 * MsgUpdateClientResponse defines the Msg/UpdateClient response type.
 * @name MsgUpdateClientResponse
 * @package ibc.core.client.v1
 * @see proto type: ibc.core.client.v1.MsgUpdateClientResponse
 */
export const MsgUpdateClientResponse = {
  typeUrl: "/ibc.core.client.v1.MsgUpdateClientResponse",
  aminoType: "cosmos-sdk/MsgUpdateClientResponse",
  is(o: any): o is MsgUpdateClientResponse {
    return o && o.$typeUrl === MsgUpdateClientResponse.typeUrl;
  },
  isSDK(o: any): o is MsgUpdateClientResponseSDKType {
    return o && o.$typeUrl === MsgUpdateClientResponse.typeUrl;
  },
  isAmino(o: any): o is MsgUpdateClientResponseAmino {
    return o && o.$typeUrl === MsgUpdateClientResponse.typeUrl;
  },
  encode(_: MsgUpdateClientResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): MsgUpdateClientResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateClientResponse();
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
  fromJSON(_: any): MsgUpdateClientResponse {
    const obj = createBaseMsgUpdateClientResponse();
    return obj;
  },
  fromPartial(_: DeepPartial<MsgUpdateClientResponse>): MsgUpdateClientResponse {
    const message = createBaseMsgUpdateClientResponse();
    return message;
  },
  fromSDK(_: MsgUpdateClientResponseSDKType): MsgUpdateClientResponse {
    return {};
  },
  toSDK(_: MsgUpdateClientResponse): MsgUpdateClientResponseSDKType {
    const obj: any = {};
    return obj;
  },
  fromAmino(_: MsgUpdateClientResponseAmino): MsgUpdateClientResponse {
    const message = createBaseMsgUpdateClientResponse();
    return message;
  },
  toAmino(_: MsgUpdateClientResponse, useInterfaces: boolean = true): MsgUpdateClientResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromProtoMsg(message: MsgUpdateClientResponseProtoMsg, useInterfaces: boolean = true): MsgUpdateClientResponse {
    return MsgUpdateClientResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: MsgUpdateClientResponse): Uint8Array {
    return MsgUpdateClientResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateClientResponse): MsgUpdateClientResponseProtoMsg {
    return {
      typeUrl: "/ibc.core.client.v1.MsgUpdateClientResponse",
      value: MsgUpdateClientResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseMsgUpgradeClient(): MsgUpgradeClient {
  return {
    clientId: "",
    clientState: undefined,
    consensusState: undefined,
    proofUpgradeClient: new Uint8Array(),
    proofUpgradeConsensusState: new Uint8Array(),
    signer: ""
  };
}
/**
 * MsgUpgradeClient defines an sdk.Msg to upgrade an IBC client to a new client
 * state
 * @name MsgUpgradeClient
 * @package ibc.core.client.v1
 * @see proto type: ibc.core.client.v1.MsgUpgradeClient
 */
export const MsgUpgradeClient = {
  typeUrl: "/ibc.core.client.v1.MsgUpgradeClient",
  aminoType: "cosmos-sdk/MsgUpgradeClient",
  is(o: any): o is MsgUpgradeClient {
    return o && (o.$typeUrl === MsgUpgradeClient.typeUrl || typeof o.clientId === "string" && (o.proofUpgradeClient instanceof Uint8Array || typeof o.proofUpgradeClient === "string") && (o.proofUpgradeConsensusState instanceof Uint8Array || typeof o.proofUpgradeConsensusState === "string") && typeof o.signer === "string");
  },
  isSDK(o: any): o is MsgUpgradeClientSDKType {
    return o && (o.$typeUrl === MsgUpgradeClient.typeUrl || typeof o.client_id === "string" && (o.proof_upgrade_client instanceof Uint8Array || typeof o.proof_upgrade_client === "string") && (o.proof_upgrade_consensus_state instanceof Uint8Array || typeof o.proof_upgrade_consensus_state === "string") && typeof o.signer === "string");
  },
  isAmino(o: any): o is MsgUpgradeClientAmino {
    return o && (o.$typeUrl === MsgUpgradeClient.typeUrl || typeof o.client_id === "string" && (o.proof_upgrade_client instanceof Uint8Array || typeof o.proof_upgrade_client === "string") && (o.proof_upgrade_consensus_state instanceof Uint8Array || typeof o.proof_upgrade_consensus_state === "string") && typeof o.signer === "string");
  },
  encode(message: MsgUpgradeClient, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.clientId !== "") {
      writer.uint32(10).string(message.clientId);
    }
    if (message.clientState !== undefined) {
      Any.encode(message.clientState, writer.uint32(18).fork()).ldelim();
    }
    if (message.consensusState !== undefined) {
      Any.encode(message.consensusState, writer.uint32(26).fork()).ldelim();
    }
    if (message.proofUpgradeClient.length !== 0) {
      writer.uint32(34).bytes(message.proofUpgradeClient);
    }
    if (message.proofUpgradeConsensusState.length !== 0) {
      writer.uint32(42).bytes(message.proofUpgradeConsensusState);
    }
    if (message.signer !== "") {
      writer.uint32(50).string(message.signer);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): MsgUpgradeClient {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpgradeClient();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.clientId = reader.string();
          break;
        case 2:
          message.clientState = Any.decode(reader, reader.uint32(), useInterfaces);
          break;
        case 3:
          message.consensusState = Any.decode(reader, reader.uint32(), useInterfaces);
          break;
        case 4:
          message.proofUpgradeClient = reader.bytes();
          break;
        case 5:
          message.proofUpgradeConsensusState = reader.bytes();
          break;
        case 6:
          message.signer = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgUpgradeClient {
    const obj = createBaseMsgUpgradeClient();
    if (isSet(object.clientId)) obj.clientId = String(object.clientId);
    if (isSet(object.clientState)) obj.clientState = Any.fromJSON(object.clientState);
    if (isSet(object.consensusState)) obj.consensusState = Any.fromJSON(object.consensusState);
    if (isSet(object.proofUpgradeClient)) obj.proofUpgradeClient = bytesFromBase64(object.proofUpgradeClient);
    if (isSet(object.proofUpgradeConsensusState)) obj.proofUpgradeConsensusState = bytesFromBase64(object.proofUpgradeConsensusState);
    if (isSet(object.signer)) obj.signer = String(object.signer);
    return obj;
  },
  fromPartial(object: DeepPartial<MsgUpgradeClient>): MsgUpgradeClient {
    const message = createBaseMsgUpgradeClient();
    message.clientId = object.clientId ?? "";
    if (object.clientState !== undefined && object.clientState !== null) {
      message.clientState = Any.fromPartial(object.clientState);
    }
    if (object.consensusState !== undefined && object.consensusState !== null) {
      message.consensusState = Any.fromPartial(object.consensusState);
    }
    message.proofUpgradeClient = object.proofUpgradeClient ?? new Uint8Array();
    message.proofUpgradeConsensusState = object.proofUpgradeConsensusState ?? new Uint8Array();
    message.signer = object.signer ?? "";
    return message;
  },
  fromSDK(object: MsgUpgradeClientSDKType): MsgUpgradeClient {
    return {
      clientId: object?.client_id,
      clientState: object.client_state ? Any.fromSDK(object.client_state) : undefined,
      consensusState: object.consensus_state ? Any.fromSDK(object.consensus_state) : undefined,
      proofUpgradeClient: object?.proof_upgrade_client,
      proofUpgradeConsensusState: object?.proof_upgrade_consensus_state,
      signer: object?.signer
    };
  },
  toSDK(message: MsgUpgradeClient): MsgUpgradeClientSDKType {
    const obj: any = {};
    obj.client_id = message.clientId;
    message.clientState !== undefined && (obj.client_state = message.clientState ? Any.toSDK(message.clientState) : undefined);
    message.consensusState !== undefined && (obj.consensus_state = message.consensusState ? Any.toSDK(message.consensusState) : undefined);
    obj.proof_upgrade_client = message.proofUpgradeClient;
    obj.proof_upgrade_consensus_state = message.proofUpgradeConsensusState;
    obj.signer = message.signer;
    return obj;
  },
  fromAmino(object: MsgUpgradeClientAmino): MsgUpgradeClient {
    const message = createBaseMsgUpgradeClient();
    if (object.client_id !== undefined && object.client_id !== null) {
      message.clientId = object.client_id;
    }
    if (object.client_state !== undefined && object.client_state !== null) {
      message.clientState = Any.fromAmino(object.client_state);
    }
    if (object.consensus_state !== undefined && object.consensus_state !== null) {
      message.consensusState = Any.fromAmino(object.consensus_state);
    }
    if (object.proof_upgrade_client !== undefined && object.proof_upgrade_client !== null) {
      message.proofUpgradeClient = bytesFromBase64(object.proof_upgrade_client);
    }
    if (object.proof_upgrade_consensus_state !== undefined && object.proof_upgrade_consensus_state !== null) {
      message.proofUpgradeConsensusState = bytesFromBase64(object.proof_upgrade_consensus_state);
    }
    if (object.signer !== undefined && object.signer !== null) {
      message.signer = object.signer;
    }
    return message;
  },
  toAmino(message: MsgUpgradeClient, useInterfaces: boolean = true): MsgUpgradeClientAmino {
    const obj: any = {};
    obj.client_id = message.clientId === "" ? undefined : message.clientId;
    obj.client_state = message.clientState ? Any.toAmino(message.clientState, useInterfaces) : undefined;
    obj.consensus_state = message.consensusState ? Any.toAmino(message.consensusState, useInterfaces) : undefined;
    obj.proof_upgrade_client = message.proofUpgradeClient ? base64FromBytes(message.proofUpgradeClient) : undefined;
    obj.proof_upgrade_consensus_state = message.proofUpgradeConsensusState ? base64FromBytes(message.proofUpgradeConsensusState) : undefined;
    obj.signer = message.signer === "" ? undefined : message.signer;
    return obj;
  },
  fromProtoMsg(message: MsgUpgradeClientProtoMsg, useInterfaces: boolean = true): MsgUpgradeClient {
    return MsgUpgradeClient.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: MsgUpgradeClient): Uint8Array {
    return MsgUpgradeClient.encode(message).finish();
  },
  toProtoMsg(message: MsgUpgradeClient): MsgUpgradeClientProtoMsg {
    return {
      typeUrl: "/ibc.core.client.v1.MsgUpgradeClient",
      value: MsgUpgradeClient.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseMsgUpgradeClientResponse(): MsgUpgradeClientResponse {
  return {};
}
/**
 * MsgUpgradeClientResponse defines the Msg/UpgradeClient response type.
 * @name MsgUpgradeClientResponse
 * @package ibc.core.client.v1
 * @see proto type: ibc.core.client.v1.MsgUpgradeClientResponse
 */
export const MsgUpgradeClientResponse = {
  typeUrl: "/ibc.core.client.v1.MsgUpgradeClientResponse",
  aminoType: "cosmos-sdk/MsgUpgradeClientResponse",
  is(o: any): o is MsgUpgradeClientResponse {
    return o && o.$typeUrl === MsgUpgradeClientResponse.typeUrl;
  },
  isSDK(o: any): o is MsgUpgradeClientResponseSDKType {
    return o && o.$typeUrl === MsgUpgradeClientResponse.typeUrl;
  },
  isAmino(o: any): o is MsgUpgradeClientResponseAmino {
    return o && o.$typeUrl === MsgUpgradeClientResponse.typeUrl;
  },
  encode(_: MsgUpgradeClientResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): MsgUpgradeClientResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpgradeClientResponse();
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
  fromJSON(_: any): MsgUpgradeClientResponse {
    const obj = createBaseMsgUpgradeClientResponse();
    return obj;
  },
  fromPartial(_: DeepPartial<MsgUpgradeClientResponse>): MsgUpgradeClientResponse {
    const message = createBaseMsgUpgradeClientResponse();
    return message;
  },
  fromSDK(_: MsgUpgradeClientResponseSDKType): MsgUpgradeClientResponse {
    return {};
  },
  toSDK(_: MsgUpgradeClientResponse): MsgUpgradeClientResponseSDKType {
    const obj: any = {};
    return obj;
  },
  fromAmino(_: MsgUpgradeClientResponseAmino): MsgUpgradeClientResponse {
    const message = createBaseMsgUpgradeClientResponse();
    return message;
  },
  toAmino(_: MsgUpgradeClientResponse, useInterfaces: boolean = true): MsgUpgradeClientResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromProtoMsg(message: MsgUpgradeClientResponseProtoMsg, useInterfaces: boolean = true): MsgUpgradeClientResponse {
    return MsgUpgradeClientResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: MsgUpgradeClientResponse): Uint8Array {
    return MsgUpgradeClientResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUpgradeClientResponse): MsgUpgradeClientResponseProtoMsg {
    return {
      typeUrl: "/ibc.core.client.v1.MsgUpgradeClientResponse",
      value: MsgUpgradeClientResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseMsgSubmitMisbehaviour(): MsgSubmitMisbehaviour {
  return {
    clientId: "",
    misbehaviour: undefined,
    signer: ""
  };
}
/**
 * MsgSubmitMisbehaviour defines an sdk.Msg type that submits Evidence for
 * light client misbehaviour.
 * @name MsgSubmitMisbehaviour
 * @package ibc.core.client.v1
 * @see proto type: ibc.core.client.v1.MsgSubmitMisbehaviour
 */
export const MsgSubmitMisbehaviour = {
  typeUrl: "/ibc.core.client.v1.MsgSubmitMisbehaviour",
  aminoType: "cosmos-sdk/MsgSubmitMisbehaviour",
  is(o: any): o is MsgSubmitMisbehaviour {
    return o && (o.$typeUrl === MsgSubmitMisbehaviour.typeUrl || typeof o.clientId === "string" && typeof o.signer === "string");
  },
  isSDK(o: any): o is MsgSubmitMisbehaviourSDKType {
    return o && (o.$typeUrl === MsgSubmitMisbehaviour.typeUrl || typeof o.client_id === "string" && typeof o.signer === "string");
  },
  isAmino(o: any): o is MsgSubmitMisbehaviourAmino {
    return o && (o.$typeUrl === MsgSubmitMisbehaviour.typeUrl || typeof o.client_id === "string" && typeof o.signer === "string");
  },
  encode(message: MsgSubmitMisbehaviour, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.clientId !== "") {
      writer.uint32(10).string(message.clientId);
    }
    if (message.misbehaviour !== undefined) {
      Any.encode(message.misbehaviour, writer.uint32(18).fork()).ldelim();
    }
    if (message.signer !== "") {
      writer.uint32(26).string(message.signer);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): MsgSubmitMisbehaviour {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSubmitMisbehaviour();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.clientId = reader.string();
          break;
        case 2:
          message.misbehaviour = Any.decode(reader, reader.uint32(), useInterfaces);
          break;
        case 3:
          message.signer = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgSubmitMisbehaviour {
    const obj = createBaseMsgSubmitMisbehaviour();
    if (isSet(object.clientId)) obj.clientId = String(object.clientId);
    if (isSet(object.misbehaviour)) obj.misbehaviour = Any.fromJSON(object.misbehaviour);
    if (isSet(object.signer)) obj.signer = String(object.signer);
    return obj;
  },
  fromPartial(object: DeepPartial<MsgSubmitMisbehaviour>): MsgSubmitMisbehaviour {
    const message = createBaseMsgSubmitMisbehaviour();
    message.clientId = object.clientId ?? "";
    if (object.misbehaviour !== undefined && object.misbehaviour !== null) {
      message.misbehaviour = Any.fromPartial(object.misbehaviour);
    }
    message.signer = object.signer ?? "";
    return message;
  },
  fromSDK(object: MsgSubmitMisbehaviourSDKType): MsgSubmitMisbehaviour {
    return {
      clientId: object?.client_id,
      misbehaviour: object.misbehaviour ? Any.fromSDK(object.misbehaviour) : undefined,
      signer: object?.signer
    };
  },
  toSDK(message: MsgSubmitMisbehaviour): MsgSubmitMisbehaviourSDKType {
    const obj: any = {};
    obj.client_id = message.clientId;
    message.misbehaviour !== undefined && (obj.misbehaviour = message.misbehaviour ? Any.toSDK(message.misbehaviour) : undefined);
    obj.signer = message.signer;
    return obj;
  },
  fromAmino(object: MsgSubmitMisbehaviourAmino): MsgSubmitMisbehaviour {
    const message = createBaseMsgSubmitMisbehaviour();
    if (object.client_id !== undefined && object.client_id !== null) {
      message.clientId = object.client_id;
    }
    if (object.misbehaviour !== undefined && object.misbehaviour !== null) {
      message.misbehaviour = Any.fromAmino(object.misbehaviour);
    }
    if (object.signer !== undefined && object.signer !== null) {
      message.signer = object.signer;
    }
    return message;
  },
  toAmino(message: MsgSubmitMisbehaviour, useInterfaces: boolean = true): MsgSubmitMisbehaviourAmino {
    const obj: any = {};
    obj.client_id = message.clientId === "" ? undefined : message.clientId;
    obj.misbehaviour = message.misbehaviour ? Any.toAmino(message.misbehaviour, useInterfaces) : undefined;
    obj.signer = message.signer === "" ? undefined : message.signer;
    return obj;
  },
  fromProtoMsg(message: MsgSubmitMisbehaviourProtoMsg, useInterfaces: boolean = true): MsgSubmitMisbehaviour {
    return MsgSubmitMisbehaviour.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: MsgSubmitMisbehaviour): Uint8Array {
    return MsgSubmitMisbehaviour.encode(message).finish();
  },
  toProtoMsg(message: MsgSubmitMisbehaviour): MsgSubmitMisbehaviourProtoMsg {
    return {
      typeUrl: "/ibc.core.client.v1.MsgSubmitMisbehaviour",
      value: MsgSubmitMisbehaviour.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseMsgSubmitMisbehaviourResponse(): MsgSubmitMisbehaviourResponse {
  return {};
}
/**
 * MsgSubmitMisbehaviourResponse defines the Msg/SubmitMisbehaviour response
 * type.
 * @name MsgSubmitMisbehaviourResponse
 * @package ibc.core.client.v1
 * @see proto type: ibc.core.client.v1.MsgSubmitMisbehaviourResponse
 */
export const MsgSubmitMisbehaviourResponse = {
  typeUrl: "/ibc.core.client.v1.MsgSubmitMisbehaviourResponse",
  aminoType: "cosmos-sdk/MsgSubmitMisbehaviourResponse",
  is(o: any): o is MsgSubmitMisbehaviourResponse {
    return o && o.$typeUrl === MsgSubmitMisbehaviourResponse.typeUrl;
  },
  isSDK(o: any): o is MsgSubmitMisbehaviourResponseSDKType {
    return o && o.$typeUrl === MsgSubmitMisbehaviourResponse.typeUrl;
  },
  isAmino(o: any): o is MsgSubmitMisbehaviourResponseAmino {
    return o && o.$typeUrl === MsgSubmitMisbehaviourResponse.typeUrl;
  },
  encode(_: MsgSubmitMisbehaviourResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): MsgSubmitMisbehaviourResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSubmitMisbehaviourResponse();
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
  fromJSON(_: any): MsgSubmitMisbehaviourResponse {
    const obj = createBaseMsgSubmitMisbehaviourResponse();
    return obj;
  },
  fromPartial(_: DeepPartial<MsgSubmitMisbehaviourResponse>): MsgSubmitMisbehaviourResponse {
    const message = createBaseMsgSubmitMisbehaviourResponse();
    return message;
  },
  fromSDK(_: MsgSubmitMisbehaviourResponseSDKType): MsgSubmitMisbehaviourResponse {
    return {};
  },
  toSDK(_: MsgSubmitMisbehaviourResponse): MsgSubmitMisbehaviourResponseSDKType {
    const obj: any = {};
    return obj;
  },
  fromAmino(_: MsgSubmitMisbehaviourResponseAmino): MsgSubmitMisbehaviourResponse {
    const message = createBaseMsgSubmitMisbehaviourResponse();
    return message;
  },
  toAmino(_: MsgSubmitMisbehaviourResponse, useInterfaces: boolean = true): MsgSubmitMisbehaviourResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromProtoMsg(message: MsgSubmitMisbehaviourResponseProtoMsg, useInterfaces: boolean = true): MsgSubmitMisbehaviourResponse {
    return MsgSubmitMisbehaviourResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: MsgSubmitMisbehaviourResponse): Uint8Array {
    return MsgSubmitMisbehaviourResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgSubmitMisbehaviourResponse): MsgSubmitMisbehaviourResponseProtoMsg {
    return {
      typeUrl: "/ibc.core.client.v1.MsgSubmitMisbehaviourResponse",
      value: MsgSubmitMisbehaviourResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};