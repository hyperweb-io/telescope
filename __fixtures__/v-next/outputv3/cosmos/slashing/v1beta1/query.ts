import { PageRequest, PageRequestAmino, PageRequestSDKType, PageResponse, PageResponseAmino, PageResponseSDKType } from "../../base/query/v1beta1/pagination";
import { Params, ParamsAmino, ParamsSDKType, ValidatorSigningInfo, ValidatorSigningInfoAmino, ValidatorSigningInfoSDKType } from "./slashing";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial, isSet } from "../../../helpers";
import { GlobalDecoderRegistry } from "../../../registry";
export const protobufPackage = "cosmos.slashing.v1beta1";
/**
 * QueryParamsRequest is the request type for the Query/Params RPC method
 * @name QueryParamsRequest
 * @package cosmos.slashing.v1beta1
 * @see proto type: cosmos.slashing.v1beta1.QueryParamsRequest
 */
export interface QueryParamsRequest {}
export interface QueryParamsRequestProtoMsg {
  typeUrl: "/cosmos.slashing.v1beta1.QueryParamsRequest";
  value: Uint8Array;
}
/**
 * QueryParamsRequest is the request type for the Query/Params RPC method
 * @name QueryParamsRequestAmino
 * @package cosmos.slashing.v1beta1
 * @see proto type: cosmos.slashing.v1beta1.QueryParamsRequest
 */
export interface QueryParamsRequestAmino {}
/**
 * QueryParamsRequest is the request type for the Query/Params RPC method
 * @name QueryParamsRequestSDKType
 * @package cosmos.slashing.v1beta1
 * @see proto type: cosmos.slashing.v1beta1.QueryParamsRequest
 */
export interface QueryParamsRequestSDKType {}
/**
 * QueryParamsResponse is the response type for the Query/Params RPC method
 * @name QueryParamsResponse
 * @package cosmos.slashing.v1beta1
 * @see proto type: cosmos.slashing.v1beta1.QueryParamsResponse
 */
export interface QueryParamsResponse {
  params: Params;
}
export interface QueryParamsResponseProtoMsg {
  typeUrl: "/cosmos.slashing.v1beta1.QueryParamsResponse";
  value: Uint8Array;
}
/**
 * QueryParamsResponse is the response type for the Query/Params RPC method
 * @name QueryParamsResponseAmino
 * @package cosmos.slashing.v1beta1
 * @see proto type: cosmos.slashing.v1beta1.QueryParamsResponse
 */
export interface QueryParamsResponseAmino {
  params?: ParamsAmino;
}
/**
 * QueryParamsResponse is the response type for the Query/Params RPC method
 * @name QueryParamsResponseSDKType
 * @package cosmos.slashing.v1beta1
 * @see proto type: cosmos.slashing.v1beta1.QueryParamsResponse
 */
export interface QueryParamsResponseSDKType {
  params: ParamsSDKType;
}
/**
 * QuerySigningInfoRequest is the request type for the Query/SigningInfo RPC
 * method
 * @name QuerySigningInfoRequest
 * @package cosmos.slashing.v1beta1
 * @see proto type: cosmos.slashing.v1beta1.QuerySigningInfoRequest
 */
export interface QuerySigningInfoRequest {
  /**
   * cons_address is the address to query signing info of
   */
  consAddress: string;
}
export interface QuerySigningInfoRequestProtoMsg {
  typeUrl: "/cosmos.slashing.v1beta1.QuerySigningInfoRequest";
  value: Uint8Array;
}
/**
 * QuerySigningInfoRequest is the request type for the Query/SigningInfo RPC
 * method
 * @name QuerySigningInfoRequestAmino
 * @package cosmos.slashing.v1beta1
 * @see proto type: cosmos.slashing.v1beta1.QuerySigningInfoRequest
 */
export interface QuerySigningInfoRequestAmino {
  /**
   * cons_address is the address to query signing info of
   */
  cons_address?: string;
}
/**
 * QuerySigningInfoRequest is the request type for the Query/SigningInfo RPC
 * method
 * @name QuerySigningInfoRequestSDKType
 * @package cosmos.slashing.v1beta1
 * @see proto type: cosmos.slashing.v1beta1.QuerySigningInfoRequest
 */
export interface QuerySigningInfoRequestSDKType {
  cons_address: string;
}
/**
 * QuerySigningInfoResponse is the response type for the Query/SigningInfo RPC
 * method
 * @name QuerySigningInfoResponse
 * @package cosmos.slashing.v1beta1
 * @see proto type: cosmos.slashing.v1beta1.QuerySigningInfoResponse
 */
export interface QuerySigningInfoResponse {
  /**
   * val_signing_info is the signing info of requested val cons address
   */
  valSigningInfo: ValidatorSigningInfo;
}
export interface QuerySigningInfoResponseProtoMsg {
  typeUrl: "/cosmos.slashing.v1beta1.QuerySigningInfoResponse";
  value: Uint8Array;
}
/**
 * QuerySigningInfoResponse is the response type for the Query/SigningInfo RPC
 * method
 * @name QuerySigningInfoResponseAmino
 * @package cosmos.slashing.v1beta1
 * @see proto type: cosmos.slashing.v1beta1.QuerySigningInfoResponse
 */
export interface QuerySigningInfoResponseAmino {
  /**
   * val_signing_info is the signing info of requested val cons address
   */
  val_signing_info?: ValidatorSigningInfoAmino;
}
/**
 * QuerySigningInfoResponse is the response type for the Query/SigningInfo RPC
 * method
 * @name QuerySigningInfoResponseSDKType
 * @package cosmos.slashing.v1beta1
 * @see proto type: cosmos.slashing.v1beta1.QuerySigningInfoResponse
 */
export interface QuerySigningInfoResponseSDKType {
  val_signing_info: ValidatorSigningInfoSDKType;
}
/**
 * QuerySigningInfosRequest is the request type for the Query/SigningInfos RPC
 * method
 * @name QuerySigningInfosRequest
 * @package cosmos.slashing.v1beta1
 * @see proto type: cosmos.slashing.v1beta1.QuerySigningInfosRequest
 */
export interface QuerySigningInfosRequest {
  pagination?: PageRequest;
}
export interface QuerySigningInfosRequestProtoMsg {
  typeUrl: "/cosmos.slashing.v1beta1.QuerySigningInfosRequest";
  value: Uint8Array;
}
/**
 * QuerySigningInfosRequest is the request type for the Query/SigningInfos RPC
 * method
 * @name QuerySigningInfosRequestAmino
 * @package cosmos.slashing.v1beta1
 * @see proto type: cosmos.slashing.v1beta1.QuerySigningInfosRequest
 */
export interface QuerySigningInfosRequestAmino {
  pagination?: PageRequestAmino;
}
/**
 * QuerySigningInfosRequest is the request type for the Query/SigningInfos RPC
 * method
 * @name QuerySigningInfosRequestSDKType
 * @package cosmos.slashing.v1beta1
 * @see proto type: cosmos.slashing.v1beta1.QuerySigningInfosRequest
 */
export interface QuerySigningInfosRequestSDKType {
  pagination?: PageRequestSDKType;
}
/**
 * QuerySigningInfosResponse is the response type for the Query/SigningInfos RPC
 * method
 * @name QuerySigningInfosResponse
 * @package cosmos.slashing.v1beta1
 * @see proto type: cosmos.slashing.v1beta1.QuerySigningInfosResponse
 */
export interface QuerySigningInfosResponse {
  /**
   * info is the signing info of all validators
   */
  info: ValidatorSigningInfo[];
  pagination?: PageResponse;
}
export interface QuerySigningInfosResponseProtoMsg {
  typeUrl: "/cosmos.slashing.v1beta1.QuerySigningInfosResponse";
  value: Uint8Array;
}
/**
 * QuerySigningInfosResponse is the response type for the Query/SigningInfos RPC
 * method
 * @name QuerySigningInfosResponseAmino
 * @package cosmos.slashing.v1beta1
 * @see proto type: cosmos.slashing.v1beta1.QuerySigningInfosResponse
 */
export interface QuerySigningInfosResponseAmino {
  /**
   * info is the signing info of all validators
   */
  info?: ValidatorSigningInfoAmino[];
  pagination?: PageResponseAmino;
}
/**
 * QuerySigningInfosResponse is the response type for the Query/SigningInfos RPC
 * method
 * @name QuerySigningInfosResponseSDKType
 * @package cosmos.slashing.v1beta1
 * @see proto type: cosmos.slashing.v1beta1.QuerySigningInfosResponse
 */
export interface QuerySigningInfosResponseSDKType {
  info: ValidatorSigningInfoSDKType[];
  pagination?: PageResponseSDKType;
}
function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}
/**
 * QueryParamsRequest is the request type for the Query/Params RPC method
 * @name QueryParamsRequest
 * @package cosmos.slashing.v1beta1
 * @see proto type: cosmos.slashing.v1beta1.QueryParamsRequest
 */
export const QueryParamsRequest = {
  typeUrl: "/cosmos.slashing.v1beta1.QueryParamsRequest",
  aminoType: "cosmos-sdk/QueryParamsRequest",
  is(o: any): o is QueryParamsRequest {
    return o && o.$typeUrl === QueryParamsRequest.typeUrl;
  },
  isSDK(o: any): o is QueryParamsRequestSDKType {
    return o && o.$typeUrl === QueryParamsRequest.typeUrl;
  },
  isAmino(o: any): o is QueryParamsRequestAmino {
    return o && o.$typeUrl === QueryParamsRequest.typeUrl;
  },
  encode(_: QueryParamsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryParamsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsRequest();
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
  fromJSON(_: any): QueryParamsRequest {
    const obj = createBaseQueryParamsRequest();
    return obj;
  },
  fromPartial(_: DeepPartial<QueryParamsRequest>): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    return message;
  },
  fromSDK(_: QueryParamsRequestSDKType): QueryParamsRequest {
    return {};
  },
  toSDK(_: QueryParamsRequest): QueryParamsRequestSDKType {
    const obj: any = {};
    return obj;
  },
  fromAmino(_: QueryParamsRequestAmino): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    return message;
  },
  toAmino(_: QueryParamsRequest, useInterfaces: boolean = true): QueryParamsRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromProtoMsg(message: QueryParamsRequestProtoMsg, useInterfaces: boolean = true): QueryParamsRequest {
    return QueryParamsRequest.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryParamsRequest): Uint8Array {
    return QueryParamsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryParamsRequest): QueryParamsRequestProtoMsg {
    return {
      typeUrl: "/cosmos.slashing.v1beta1.QueryParamsRequest",
      value: QueryParamsRequest.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseQueryParamsResponse(): QueryParamsResponse {
  return {
    params: Params.fromPartial({})
  };
}
/**
 * QueryParamsResponse is the response type for the Query/Params RPC method
 * @name QueryParamsResponse
 * @package cosmos.slashing.v1beta1
 * @see proto type: cosmos.slashing.v1beta1.QueryParamsResponse
 */
export const QueryParamsResponse = {
  typeUrl: "/cosmos.slashing.v1beta1.QueryParamsResponse",
  aminoType: "cosmos-sdk/QueryParamsResponse",
  is(o: any): o is QueryParamsResponse {
    return o && (o.$typeUrl === QueryParamsResponse.typeUrl || Params.is(o.params));
  },
  isSDK(o: any): o is QueryParamsResponseSDKType {
    return o && (o.$typeUrl === QueryParamsResponse.typeUrl || Params.isSDK(o.params));
  },
  isAmino(o: any): o is QueryParamsResponseAmino {
    return o && (o.$typeUrl === QueryParamsResponse.typeUrl || Params.isAmino(o.params));
  },
  encode(message: QueryParamsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryParamsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32(), useInterfaces);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryParamsResponse {
    const obj = createBaseQueryParamsResponse();
    if (isSet(object.params)) obj.params = Params.fromJSON(object.params);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryParamsResponse>): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromPartial(object.params);
    }
    return message;
  },
  fromSDK(object: QueryParamsResponseSDKType): QueryParamsResponse {
    return {
      params: object.params ? Params.fromSDK(object.params) : undefined
    };
  },
  toSDK(message: QueryParamsResponse): QueryParamsResponseSDKType {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toSDK(message.params) : undefined);
    return obj;
  },
  fromAmino(object: QueryParamsResponseAmino): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    return message;
  },
  toAmino(message: QueryParamsResponse, useInterfaces: boolean = true): QueryParamsResponseAmino {
    const obj: any = {};
    obj.params = message.params ? Params.toAmino(message.params, useInterfaces) : undefined;
    return obj;
  },
  fromProtoMsg(message: QueryParamsResponseProtoMsg, useInterfaces: boolean = true): QueryParamsResponse {
    return QueryParamsResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryParamsResponse): Uint8Array {
    return QueryParamsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryParamsResponse): QueryParamsResponseProtoMsg {
    return {
      typeUrl: "/cosmos.slashing.v1beta1.QueryParamsResponse",
      value: QueryParamsResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(QueryParamsResponse.typeUrl)) {
      return;
    }
    Params.registerTypeUrl();
  }
};
function createBaseQuerySigningInfoRequest(): QuerySigningInfoRequest {
  return {
    consAddress: ""
  };
}
/**
 * QuerySigningInfoRequest is the request type for the Query/SigningInfo RPC
 * method
 * @name QuerySigningInfoRequest
 * @package cosmos.slashing.v1beta1
 * @see proto type: cosmos.slashing.v1beta1.QuerySigningInfoRequest
 */
export const QuerySigningInfoRequest = {
  typeUrl: "/cosmos.slashing.v1beta1.QuerySigningInfoRequest",
  aminoType: "cosmos-sdk/QuerySigningInfoRequest",
  is(o: any): o is QuerySigningInfoRequest {
    return o && (o.$typeUrl === QuerySigningInfoRequest.typeUrl || typeof o.consAddress === "string");
  },
  isSDK(o: any): o is QuerySigningInfoRequestSDKType {
    return o && (o.$typeUrl === QuerySigningInfoRequest.typeUrl || typeof o.cons_address === "string");
  },
  isAmino(o: any): o is QuerySigningInfoRequestAmino {
    return o && (o.$typeUrl === QuerySigningInfoRequest.typeUrl || typeof o.cons_address === "string");
  },
  encode(message: QuerySigningInfoRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.consAddress !== "") {
      writer.uint32(10).string(message.consAddress);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QuerySigningInfoRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySigningInfoRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.consAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QuerySigningInfoRequest {
    const obj = createBaseQuerySigningInfoRequest();
    if (isSet(object.consAddress)) obj.consAddress = String(object.consAddress);
    return obj;
  },
  fromPartial(object: DeepPartial<QuerySigningInfoRequest>): QuerySigningInfoRequest {
    const message = createBaseQuerySigningInfoRequest();
    message.consAddress = object.consAddress ?? "";
    return message;
  },
  fromSDK(object: QuerySigningInfoRequestSDKType): QuerySigningInfoRequest {
    return {
      consAddress: object?.cons_address
    };
  },
  toSDK(message: QuerySigningInfoRequest): QuerySigningInfoRequestSDKType {
    const obj: any = {};
    obj.cons_address = message.consAddress;
    return obj;
  },
  fromAmino(object: QuerySigningInfoRequestAmino): QuerySigningInfoRequest {
    const message = createBaseQuerySigningInfoRequest();
    if (object.cons_address !== undefined && object.cons_address !== null) {
      message.consAddress = object.cons_address;
    }
    return message;
  },
  toAmino(message: QuerySigningInfoRequest, useInterfaces: boolean = true): QuerySigningInfoRequestAmino {
    const obj: any = {};
    obj.cons_address = message.consAddress === "" ? undefined : message.consAddress;
    return obj;
  },
  fromProtoMsg(message: QuerySigningInfoRequestProtoMsg, useInterfaces: boolean = true): QuerySigningInfoRequest {
    return QuerySigningInfoRequest.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QuerySigningInfoRequest): Uint8Array {
    return QuerySigningInfoRequest.encode(message).finish();
  },
  toProtoMsg(message: QuerySigningInfoRequest): QuerySigningInfoRequestProtoMsg {
    return {
      typeUrl: "/cosmos.slashing.v1beta1.QuerySigningInfoRequest",
      value: QuerySigningInfoRequest.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseQuerySigningInfoResponse(): QuerySigningInfoResponse {
  return {
    valSigningInfo: ValidatorSigningInfo.fromPartial({})
  };
}
/**
 * QuerySigningInfoResponse is the response type for the Query/SigningInfo RPC
 * method
 * @name QuerySigningInfoResponse
 * @package cosmos.slashing.v1beta1
 * @see proto type: cosmos.slashing.v1beta1.QuerySigningInfoResponse
 */
export const QuerySigningInfoResponse = {
  typeUrl: "/cosmos.slashing.v1beta1.QuerySigningInfoResponse",
  aminoType: "cosmos-sdk/QuerySigningInfoResponse",
  is(o: any): o is QuerySigningInfoResponse {
    return o && (o.$typeUrl === QuerySigningInfoResponse.typeUrl || ValidatorSigningInfo.is(o.valSigningInfo));
  },
  isSDK(o: any): o is QuerySigningInfoResponseSDKType {
    return o && (o.$typeUrl === QuerySigningInfoResponse.typeUrl || ValidatorSigningInfo.isSDK(o.val_signing_info));
  },
  isAmino(o: any): o is QuerySigningInfoResponseAmino {
    return o && (o.$typeUrl === QuerySigningInfoResponse.typeUrl || ValidatorSigningInfo.isAmino(o.val_signing_info));
  },
  encode(message: QuerySigningInfoResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.valSigningInfo !== undefined) {
      ValidatorSigningInfo.encode(message.valSigningInfo, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QuerySigningInfoResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySigningInfoResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.valSigningInfo = ValidatorSigningInfo.decode(reader, reader.uint32(), useInterfaces);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QuerySigningInfoResponse {
    const obj = createBaseQuerySigningInfoResponse();
    if (isSet(object.valSigningInfo)) obj.valSigningInfo = ValidatorSigningInfo.fromJSON(object.valSigningInfo);
    return obj;
  },
  fromPartial(object: DeepPartial<QuerySigningInfoResponse>): QuerySigningInfoResponse {
    const message = createBaseQuerySigningInfoResponse();
    if (object.valSigningInfo !== undefined && object.valSigningInfo !== null) {
      message.valSigningInfo = ValidatorSigningInfo.fromPartial(object.valSigningInfo);
    }
    return message;
  },
  fromSDK(object: QuerySigningInfoResponseSDKType): QuerySigningInfoResponse {
    return {
      valSigningInfo: object.val_signing_info ? ValidatorSigningInfo.fromSDK(object.val_signing_info) : undefined
    };
  },
  toSDK(message: QuerySigningInfoResponse): QuerySigningInfoResponseSDKType {
    const obj: any = {};
    message.valSigningInfo !== undefined && (obj.val_signing_info = message.valSigningInfo ? ValidatorSigningInfo.toSDK(message.valSigningInfo) : undefined);
    return obj;
  },
  fromAmino(object: QuerySigningInfoResponseAmino): QuerySigningInfoResponse {
    const message = createBaseQuerySigningInfoResponse();
    if (object.val_signing_info !== undefined && object.val_signing_info !== null) {
      message.valSigningInfo = ValidatorSigningInfo.fromAmino(object.val_signing_info);
    }
    return message;
  },
  toAmino(message: QuerySigningInfoResponse, useInterfaces: boolean = true): QuerySigningInfoResponseAmino {
    const obj: any = {};
    obj.val_signing_info = message.valSigningInfo ? ValidatorSigningInfo.toAmino(message.valSigningInfo, useInterfaces) : undefined;
    return obj;
  },
  fromProtoMsg(message: QuerySigningInfoResponseProtoMsg, useInterfaces: boolean = true): QuerySigningInfoResponse {
    return QuerySigningInfoResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QuerySigningInfoResponse): Uint8Array {
    return QuerySigningInfoResponse.encode(message).finish();
  },
  toProtoMsg(message: QuerySigningInfoResponse): QuerySigningInfoResponseProtoMsg {
    return {
      typeUrl: "/cosmos.slashing.v1beta1.QuerySigningInfoResponse",
      value: QuerySigningInfoResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(QuerySigningInfoResponse.typeUrl)) {
      return;
    }
    ValidatorSigningInfo.registerTypeUrl();
  }
};
function createBaseQuerySigningInfosRequest(): QuerySigningInfosRequest {
  return {
    pagination: undefined
  };
}
/**
 * QuerySigningInfosRequest is the request type for the Query/SigningInfos RPC
 * method
 * @name QuerySigningInfosRequest
 * @package cosmos.slashing.v1beta1
 * @see proto type: cosmos.slashing.v1beta1.QuerySigningInfosRequest
 */
export const QuerySigningInfosRequest = {
  typeUrl: "/cosmos.slashing.v1beta1.QuerySigningInfosRequest",
  aminoType: "cosmos-sdk/QuerySigningInfosRequest",
  is(o: any): o is QuerySigningInfosRequest {
    return o && o.$typeUrl === QuerySigningInfosRequest.typeUrl;
  },
  isSDK(o: any): o is QuerySigningInfosRequestSDKType {
    return o && o.$typeUrl === QuerySigningInfosRequest.typeUrl;
  },
  isAmino(o: any): o is QuerySigningInfosRequestAmino {
    return o && o.$typeUrl === QuerySigningInfosRequest.typeUrl;
  },
  encode(message: QuerySigningInfosRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QuerySigningInfosRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySigningInfosRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32(), useInterfaces);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QuerySigningInfosRequest {
    const obj = createBaseQuerySigningInfosRequest();
    if (isSet(object.pagination)) obj.pagination = PageRequest.fromJSON(object.pagination);
    return obj;
  },
  fromPartial(object: DeepPartial<QuerySigningInfosRequest>): QuerySigningInfosRequest {
    const message = createBaseQuerySigningInfosRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    }
    return message;
  },
  fromSDK(object: QuerySigningInfosRequestSDKType): QuerySigningInfosRequest {
    return {
      pagination: object.pagination ? PageRequest.fromSDK(object.pagination) : undefined
    };
  },
  toSDK(message: QuerySigningInfosRequest): QuerySigningInfosRequestSDKType {
    const obj: any = {};
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toSDK(message.pagination) : undefined);
    return obj;
  },
  fromAmino(object: QuerySigningInfosRequestAmino): QuerySigningInfosRequest {
    const message = createBaseQuerySigningInfosRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QuerySigningInfosRequest, useInterfaces: boolean = true): QuerySigningInfosRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination, useInterfaces) : undefined;
    return obj;
  },
  fromProtoMsg(message: QuerySigningInfosRequestProtoMsg, useInterfaces: boolean = true): QuerySigningInfosRequest {
    return QuerySigningInfosRequest.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QuerySigningInfosRequest): Uint8Array {
    return QuerySigningInfosRequest.encode(message).finish();
  },
  toProtoMsg(message: QuerySigningInfosRequest): QuerySigningInfosRequestProtoMsg {
    return {
      typeUrl: "/cosmos.slashing.v1beta1.QuerySigningInfosRequest",
      value: QuerySigningInfosRequest.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(QuerySigningInfosRequest.typeUrl)) {
      return;
    }
    PageRequest.registerTypeUrl();
  }
};
function createBaseQuerySigningInfosResponse(): QuerySigningInfosResponse {
  return {
    info: [],
    pagination: undefined
  };
}
/**
 * QuerySigningInfosResponse is the response type for the Query/SigningInfos RPC
 * method
 * @name QuerySigningInfosResponse
 * @package cosmos.slashing.v1beta1
 * @see proto type: cosmos.slashing.v1beta1.QuerySigningInfosResponse
 */
export const QuerySigningInfosResponse = {
  typeUrl: "/cosmos.slashing.v1beta1.QuerySigningInfosResponse",
  aminoType: "cosmos-sdk/QuerySigningInfosResponse",
  is(o: any): o is QuerySigningInfosResponse {
    return o && (o.$typeUrl === QuerySigningInfosResponse.typeUrl || Array.isArray(o.info) && (!o.info.length || ValidatorSigningInfo.is(o.info[0])));
  },
  isSDK(o: any): o is QuerySigningInfosResponseSDKType {
    return o && (o.$typeUrl === QuerySigningInfosResponse.typeUrl || Array.isArray(o.info) && (!o.info.length || ValidatorSigningInfo.isSDK(o.info[0])));
  },
  isAmino(o: any): o is QuerySigningInfosResponseAmino {
    return o && (o.$typeUrl === QuerySigningInfosResponse.typeUrl || Array.isArray(o.info) && (!o.info.length || ValidatorSigningInfo.isAmino(o.info[0])));
  },
  encode(message: QuerySigningInfosResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.info) {
      ValidatorSigningInfo.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QuerySigningInfosResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySigningInfosResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.info.push(ValidatorSigningInfo.decode(reader, reader.uint32(), useInterfaces));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32(), useInterfaces);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QuerySigningInfosResponse {
    const obj = createBaseQuerySigningInfosResponse();
    if (Array.isArray(object?.info)) obj.info = object.info.map((e: any) => ValidatorSigningInfo.fromJSON(e));
    if (isSet(object.pagination)) obj.pagination = PageResponse.fromJSON(object.pagination);
    return obj;
  },
  fromPartial(object: DeepPartial<QuerySigningInfosResponse>): QuerySigningInfosResponse {
    const message = createBaseQuerySigningInfosResponse();
    message.info = object.info?.map(e => ValidatorSigningInfo.fromPartial(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    }
    return message;
  },
  fromSDK(object: QuerySigningInfosResponseSDKType): QuerySigningInfosResponse {
    return {
      info: Array.isArray(object?.info) ? object.info.map((e: any) => ValidatorSigningInfo.fromSDK(e)) : [],
      pagination: object.pagination ? PageResponse.fromSDK(object.pagination) : undefined
    };
  },
  toSDK(message: QuerySigningInfosResponse): QuerySigningInfosResponseSDKType {
    const obj: any = {};
    if (message.info) {
      obj.info = message.info.map(e => e ? ValidatorSigningInfo.toSDK(e) : undefined);
    } else {
      obj.info = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toSDK(message.pagination) : undefined);
    return obj;
  },
  fromAmino(object: QuerySigningInfosResponseAmino): QuerySigningInfosResponse {
    const message = createBaseQuerySigningInfosResponse();
    message.info = object.info?.map(e => ValidatorSigningInfo.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QuerySigningInfosResponse, useInterfaces: boolean = true): QuerySigningInfosResponseAmino {
    const obj: any = {};
    if (message.info) {
      obj.info = message.info.map(e => e ? ValidatorSigningInfo.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.info = message.info;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination, useInterfaces) : undefined;
    return obj;
  },
  fromProtoMsg(message: QuerySigningInfosResponseProtoMsg, useInterfaces: boolean = true): QuerySigningInfosResponse {
    return QuerySigningInfosResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QuerySigningInfosResponse): Uint8Array {
    return QuerySigningInfosResponse.encode(message).finish();
  },
  toProtoMsg(message: QuerySigningInfosResponse): QuerySigningInfosResponseProtoMsg {
    return {
      typeUrl: "/cosmos.slashing.v1beta1.QuerySigningInfosResponse",
      value: QuerySigningInfosResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(QuerySigningInfosResponse.typeUrl)) {
      return;
    }
    ValidatorSigningInfo.registerTypeUrl();
    PageResponse.registerTypeUrl();
  }
};