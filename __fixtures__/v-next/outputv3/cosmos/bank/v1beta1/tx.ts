import { Coin, CoinAmino, CoinSDKType } from "../../base/v1beta1/coin";
import { Input, InputAmino, InputSDKType, Output, OutputAmino, OutputSDKType } from "./bank";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet, DeepPartial } from "../../../helpers";
import { GlobalDecoderRegistry } from "../../../registry";
export const protobufPackage = "cosmos.bank.v1beta1";
/**
 * MsgSend represents a message to send coins from one account to another.
 * @name MsgSend
 * @package cosmos.bank.v1beta1
 * @see proto type: cosmos.bank.v1beta1.MsgSend
 */
export interface MsgSend {
  fromAddress: string;
  toAddress: string;
  amount: Coin[];
}
export interface MsgSendProtoMsg {
  typeUrl: "/cosmos.bank.v1beta1.MsgSend";
  value: Uint8Array;
}
/**
 * MsgSend represents a message to send coins from one account to another.
 * @name MsgSendAmino
 * @package cosmos.bank.v1beta1
 * @see proto type: cosmos.bank.v1beta1.MsgSend
 */
export interface MsgSendAmino {
  from_address?: string;
  to_address?: string;
  amount?: CoinAmino[];
}
/**
 * MsgSend represents a message to send coins from one account to another.
 * @name MsgSendSDKType
 * @package cosmos.bank.v1beta1
 * @see proto type: cosmos.bank.v1beta1.MsgSend
 */
export interface MsgSendSDKType {
  from_address: string;
  to_address: string;
  amount: CoinSDKType[];
}
/**
 * MsgSendResponse defines the Msg/Send response type.
 * @name MsgSendResponse
 * @package cosmos.bank.v1beta1
 * @see proto type: cosmos.bank.v1beta1.MsgSendResponse
 */
export interface MsgSendResponse {}
export interface MsgSendResponseProtoMsg {
  typeUrl: "/cosmos.bank.v1beta1.MsgSendResponse";
  value: Uint8Array;
}
/**
 * MsgSendResponse defines the Msg/Send response type.
 * @name MsgSendResponseAmino
 * @package cosmos.bank.v1beta1
 * @see proto type: cosmos.bank.v1beta1.MsgSendResponse
 */
export interface MsgSendResponseAmino {}
/**
 * MsgSendResponse defines the Msg/Send response type.
 * @name MsgSendResponseSDKType
 * @package cosmos.bank.v1beta1
 * @see proto type: cosmos.bank.v1beta1.MsgSendResponse
 */
export interface MsgSendResponseSDKType {}
/**
 * MsgMultiSend represents an arbitrary multi-in, multi-out send message.
 * @name MsgMultiSend
 * @package cosmos.bank.v1beta1
 * @see proto type: cosmos.bank.v1beta1.MsgMultiSend
 */
export interface MsgMultiSend {
  inputs: Input[];
  outputs: Output[];
}
export interface MsgMultiSendProtoMsg {
  typeUrl: "/cosmos.bank.v1beta1.MsgMultiSend";
  value: Uint8Array;
}
/**
 * MsgMultiSend represents an arbitrary multi-in, multi-out send message.
 * @name MsgMultiSendAmino
 * @package cosmos.bank.v1beta1
 * @see proto type: cosmos.bank.v1beta1.MsgMultiSend
 */
export interface MsgMultiSendAmino {
  inputs?: InputAmino[];
  outputs?: OutputAmino[];
}
/**
 * MsgMultiSend represents an arbitrary multi-in, multi-out send message.
 * @name MsgMultiSendSDKType
 * @package cosmos.bank.v1beta1
 * @see proto type: cosmos.bank.v1beta1.MsgMultiSend
 */
export interface MsgMultiSendSDKType {
  inputs: InputSDKType[];
  outputs: OutputSDKType[];
}
/**
 * MsgMultiSendResponse defines the Msg/MultiSend response type.
 * @name MsgMultiSendResponse
 * @package cosmos.bank.v1beta1
 * @see proto type: cosmos.bank.v1beta1.MsgMultiSendResponse
 */
export interface MsgMultiSendResponse {}
export interface MsgMultiSendResponseProtoMsg {
  typeUrl: "/cosmos.bank.v1beta1.MsgMultiSendResponse";
  value: Uint8Array;
}
/**
 * MsgMultiSendResponse defines the Msg/MultiSend response type.
 * @name MsgMultiSendResponseAmino
 * @package cosmos.bank.v1beta1
 * @see proto type: cosmos.bank.v1beta1.MsgMultiSendResponse
 */
export interface MsgMultiSendResponseAmino {}
/**
 * MsgMultiSendResponse defines the Msg/MultiSend response type.
 * @name MsgMultiSendResponseSDKType
 * @package cosmos.bank.v1beta1
 * @see proto type: cosmos.bank.v1beta1.MsgMultiSendResponse
 */
export interface MsgMultiSendResponseSDKType {}
function createBaseMsgSend(): MsgSend {
  return {
    fromAddress: "",
    toAddress: "",
    amount: []
  };
}
/**
 * MsgSend represents a message to send coins from one account to another.
 * @name MsgSend
 * @package cosmos.bank.v1beta1
 * @see proto type: cosmos.bank.v1beta1.MsgSend
 */
export const MsgSend = {
  typeUrl: "/cosmos.bank.v1beta1.MsgSend",
  aminoType: "cosmos-sdk/MsgSend",
  is(o: any): o is MsgSend {
    return o && (o.$typeUrl === MsgSend.typeUrl || typeof o.fromAddress === "string" && typeof o.toAddress === "string" && Array.isArray(o.amount) && (!o.amount.length || Coin.is(o.amount[0])));
  },
  isSDK(o: any): o is MsgSendSDKType {
    return o && (o.$typeUrl === MsgSend.typeUrl || typeof o.from_address === "string" && typeof o.to_address === "string" && Array.isArray(o.amount) && (!o.amount.length || Coin.isSDK(o.amount[0])));
  },
  isAmino(o: any): o is MsgSendAmino {
    return o && (o.$typeUrl === MsgSend.typeUrl || typeof o.from_address === "string" && typeof o.to_address === "string" && Array.isArray(o.amount) && (!o.amount.length || Coin.isAmino(o.amount[0])));
  },
  encode(message: MsgSend, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.fromAddress !== "") {
      writer.uint32(10).string(message.fromAddress);
    }
    if (message.toAddress !== "") {
      writer.uint32(18).string(message.toAddress);
    }
    for (const v of message.amount) {
      Coin.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): MsgSend {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSend();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.fromAddress = reader.string();
          break;
        case 2:
          message.toAddress = reader.string();
          break;
        case 3:
          message.amount.push(Coin.decode(reader, reader.uint32(), useInterfaces));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgSend {
    const obj = createBaseMsgSend();
    if (isSet(object.fromAddress)) obj.fromAddress = String(object.fromAddress);
    if (isSet(object.toAddress)) obj.toAddress = String(object.toAddress);
    if (Array.isArray(object?.amount)) obj.amount = object.amount.map((e: any) => Coin.fromJSON(e));
    return obj;
  },
  fromPartial(object: DeepPartial<MsgSend>): MsgSend {
    const message = createBaseMsgSend();
    message.fromAddress = object.fromAddress ?? "";
    message.toAddress = object.toAddress ?? "";
    message.amount = object.amount?.map(e => Coin.fromPartial(e)) || [];
    return message;
  },
  fromSDK(object: MsgSendSDKType): MsgSend {
    return {
      fromAddress: object?.from_address,
      toAddress: object?.to_address,
      amount: Array.isArray(object?.amount) ? object.amount.map((e: any) => Coin.fromSDK(e)) : []
    };
  },
  toSDK(message: MsgSend): MsgSendSDKType {
    const obj: any = {};
    obj.from_address = message.fromAddress;
    obj.to_address = message.toAddress;
    if (message.amount) {
      obj.amount = message.amount.map(e => e ? Coin.toSDK(e) : undefined);
    } else {
      obj.amount = [];
    }
    return obj;
  },
  fromAmino(object: MsgSendAmino): MsgSend {
    const message = createBaseMsgSend();
    if (object.from_address !== undefined && object.from_address !== null) {
      message.fromAddress = object.from_address;
    }
    if (object.to_address !== undefined && object.to_address !== null) {
      message.toAddress = object.to_address;
    }
    message.amount = object.amount?.map(e => Coin.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: MsgSend, useInterfaces: boolean = true): MsgSendAmino {
    const obj: any = {};
    obj.from_address = message.fromAddress === "" ? undefined : message.fromAddress;
    obj.to_address = message.toAddress === "" ? undefined : message.toAddress;
    if (message.amount) {
      obj.amount = message.amount.map(e => e ? Coin.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.amount = message.amount;
    }
    return obj;
  },
  fromProtoMsg(message: MsgSendProtoMsg, useInterfaces: boolean = true): MsgSend {
    return MsgSend.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: MsgSend): Uint8Array {
    return MsgSend.encode(message).finish();
  },
  toProtoMsg(message: MsgSend): MsgSendProtoMsg {
    return {
      typeUrl: "/cosmos.bank.v1beta1.MsgSend",
      value: MsgSend.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(MsgSend.typeUrl)) {
      return;
    }
    Coin.registerTypeUrl();
  }
};
function createBaseMsgSendResponse(): MsgSendResponse {
  return {};
}
/**
 * MsgSendResponse defines the Msg/Send response type.
 * @name MsgSendResponse
 * @package cosmos.bank.v1beta1
 * @see proto type: cosmos.bank.v1beta1.MsgSendResponse
 */
export const MsgSendResponse = {
  typeUrl: "/cosmos.bank.v1beta1.MsgSendResponse",
  aminoType: "cosmos-sdk/MsgSendResponse",
  is(o: any): o is MsgSendResponse {
    return o && o.$typeUrl === MsgSendResponse.typeUrl;
  },
  isSDK(o: any): o is MsgSendResponseSDKType {
    return o && o.$typeUrl === MsgSendResponse.typeUrl;
  },
  isAmino(o: any): o is MsgSendResponseAmino {
    return o && o.$typeUrl === MsgSendResponse.typeUrl;
  },
  encode(_: MsgSendResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): MsgSendResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSendResponse();
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
  fromJSON(_: any): MsgSendResponse {
    const obj = createBaseMsgSendResponse();
    return obj;
  },
  fromPartial(_: DeepPartial<MsgSendResponse>): MsgSendResponse {
    const message = createBaseMsgSendResponse();
    return message;
  },
  fromSDK(_: MsgSendResponseSDKType): MsgSendResponse {
    return {};
  },
  toSDK(_: MsgSendResponse): MsgSendResponseSDKType {
    const obj: any = {};
    return obj;
  },
  fromAmino(_: MsgSendResponseAmino): MsgSendResponse {
    const message = createBaseMsgSendResponse();
    return message;
  },
  toAmino(_: MsgSendResponse, useInterfaces: boolean = true): MsgSendResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromProtoMsg(message: MsgSendResponseProtoMsg, useInterfaces: boolean = true): MsgSendResponse {
    return MsgSendResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: MsgSendResponse): Uint8Array {
    return MsgSendResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgSendResponse): MsgSendResponseProtoMsg {
    return {
      typeUrl: "/cosmos.bank.v1beta1.MsgSendResponse",
      value: MsgSendResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseMsgMultiSend(): MsgMultiSend {
  return {
    inputs: [],
    outputs: []
  };
}
/**
 * MsgMultiSend represents an arbitrary multi-in, multi-out send message.
 * @name MsgMultiSend
 * @package cosmos.bank.v1beta1
 * @see proto type: cosmos.bank.v1beta1.MsgMultiSend
 */
export const MsgMultiSend = {
  typeUrl: "/cosmos.bank.v1beta1.MsgMultiSend",
  aminoType: "cosmos-sdk/MsgMultiSend",
  is(o: any): o is MsgMultiSend {
    return o && (o.$typeUrl === MsgMultiSend.typeUrl || Array.isArray(o.inputs) && (!o.inputs.length || Input.is(o.inputs[0])) && Array.isArray(o.outputs) && (!o.outputs.length || Output.is(o.outputs[0])));
  },
  isSDK(o: any): o is MsgMultiSendSDKType {
    return o && (o.$typeUrl === MsgMultiSend.typeUrl || Array.isArray(o.inputs) && (!o.inputs.length || Input.isSDK(o.inputs[0])) && Array.isArray(o.outputs) && (!o.outputs.length || Output.isSDK(o.outputs[0])));
  },
  isAmino(o: any): o is MsgMultiSendAmino {
    return o && (o.$typeUrl === MsgMultiSend.typeUrl || Array.isArray(o.inputs) && (!o.inputs.length || Input.isAmino(o.inputs[0])) && Array.isArray(o.outputs) && (!o.outputs.length || Output.isAmino(o.outputs[0])));
  },
  encode(message: MsgMultiSend, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.inputs) {
      Input.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.outputs) {
      Output.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): MsgMultiSend {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgMultiSend();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.inputs.push(Input.decode(reader, reader.uint32(), useInterfaces));
          break;
        case 2:
          message.outputs.push(Output.decode(reader, reader.uint32(), useInterfaces));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgMultiSend {
    const obj = createBaseMsgMultiSend();
    if (Array.isArray(object?.inputs)) obj.inputs = object.inputs.map((e: any) => Input.fromJSON(e));
    if (Array.isArray(object?.outputs)) obj.outputs = object.outputs.map((e: any) => Output.fromJSON(e));
    return obj;
  },
  fromPartial(object: DeepPartial<MsgMultiSend>): MsgMultiSend {
    const message = createBaseMsgMultiSend();
    message.inputs = object.inputs?.map(e => Input.fromPartial(e)) || [];
    message.outputs = object.outputs?.map(e => Output.fromPartial(e)) || [];
    return message;
  },
  fromSDK(object: MsgMultiSendSDKType): MsgMultiSend {
    return {
      inputs: Array.isArray(object?.inputs) ? object.inputs.map((e: any) => Input.fromSDK(e)) : [],
      outputs: Array.isArray(object?.outputs) ? object.outputs.map((e: any) => Output.fromSDK(e)) : []
    };
  },
  toSDK(message: MsgMultiSend): MsgMultiSendSDKType {
    const obj: any = {};
    if (message.inputs) {
      obj.inputs = message.inputs.map(e => e ? Input.toSDK(e) : undefined);
    } else {
      obj.inputs = [];
    }
    if (message.outputs) {
      obj.outputs = message.outputs.map(e => e ? Output.toSDK(e) : undefined);
    } else {
      obj.outputs = [];
    }
    return obj;
  },
  fromAmino(object: MsgMultiSendAmino): MsgMultiSend {
    const message = createBaseMsgMultiSend();
    message.inputs = object.inputs?.map(e => Input.fromAmino(e)) || [];
    message.outputs = object.outputs?.map(e => Output.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: MsgMultiSend, useInterfaces: boolean = true): MsgMultiSendAmino {
    const obj: any = {};
    if (message.inputs) {
      obj.inputs = message.inputs.map(e => e ? Input.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.inputs = message.inputs;
    }
    if (message.outputs) {
      obj.outputs = message.outputs.map(e => e ? Output.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.outputs = message.outputs;
    }
    return obj;
  },
  fromProtoMsg(message: MsgMultiSendProtoMsg, useInterfaces: boolean = true): MsgMultiSend {
    return MsgMultiSend.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: MsgMultiSend): Uint8Array {
    return MsgMultiSend.encode(message).finish();
  },
  toProtoMsg(message: MsgMultiSend): MsgMultiSendProtoMsg {
    return {
      typeUrl: "/cosmos.bank.v1beta1.MsgMultiSend",
      value: MsgMultiSend.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(MsgMultiSend.typeUrl)) {
      return;
    }
    Input.registerTypeUrl();
    Output.registerTypeUrl();
  }
};
function createBaseMsgMultiSendResponse(): MsgMultiSendResponse {
  return {};
}
/**
 * MsgMultiSendResponse defines the Msg/MultiSend response type.
 * @name MsgMultiSendResponse
 * @package cosmos.bank.v1beta1
 * @see proto type: cosmos.bank.v1beta1.MsgMultiSendResponse
 */
export const MsgMultiSendResponse = {
  typeUrl: "/cosmos.bank.v1beta1.MsgMultiSendResponse",
  aminoType: "cosmos-sdk/MsgMultiSendResponse",
  is(o: any): o is MsgMultiSendResponse {
    return o && o.$typeUrl === MsgMultiSendResponse.typeUrl;
  },
  isSDK(o: any): o is MsgMultiSendResponseSDKType {
    return o && o.$typeUrl === MsgMultiSendResponse.typeUrl;
  },
  isAmino(o: any): o is MsgMultiSendResponseAmino {
    return o && o.$typeUrl === MsgMultiSendResponse.typeUrl;
  },
  encode(_: MsgMultiSendResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): MsgMultiSendResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgMultiSendResponse();
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
  fromJSON(_: any): MsgMultiSendResponse {
    const obj = createBaseMsgMultiSendResponse();
    return obj;
  },
  fromPartial(_: DeepPartial<MsgMultiSendResponse>): MsgMultiSendResponse {
    const message = createBaseMsgMultiSendResponse();
    return message;
  },
  fromSDK(_: MsgMultiSendResponseSDKType): MsgMultiSendResponse {
    return {};
  },
  toSDK(_: MsgMultiSendResponse): MsgMultiSendResponseSDKType {
    const obj: any = {};
    return obj;
  },
  fromAmino(_: MsgMultiSendResponseAmino): MsgMultiSendResponse {
    const message = createBaseMsgMultiSendResponse();
    return message;
  },
  toAmino(_: MsgMultiSendResponse, useInterfaces: boolean = true): MsgMultiSendResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromProtoMsg(message: MsgMultiSendResponseProtoMsg, useInterfaces: boolean = true): MsgMultiSendResponse {
    return MsgMultiSendResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: MsgMultiSendResponse): Uint8Array {
    return MsgMultiSendResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgMultiSendResponse): MsgMultiSendResponseProtoMsg {
    return {
      typeUrl: "/cosmos.bank.v1beta1.MsgMultiSendResponse",
      value: MsgMultiSendResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};