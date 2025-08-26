import { PageRequest, PageRequestAmino, PageRequestSDKType, PageResponse, PageResponseAmino, PageResponseSDKType } from "../../../../cosmos/base/query/v1beta1/pagination";
import { DenomTrace, DenomTraceAmino, DenomTraceSDKType, Params, ParamsAmino, ParamsSDKType } from "./transfer";
import { BinaryReader, BinaryWriter } from "../../../../binary";
import { isSet, DeepPartial } from "../../../../helpers";
import { GlobalDecoderRegistry } from "../../../../registry";
export const protobufPackage = "ibc.applications.transfer.v1";
/**
 * QueryDenomTraceRequest is the request type for the Query/DenomTrace RPC
 * method
 * @name QueryDenomTraceRequest
 * @package ibc.applications.transfer.v1
 * @see proto type: ibc.applications.transfer.v1.QueryDenomTraceRequest
 */
export interface QueryDenomTraceRequest {
  /**
   * hash (in hex format) of the denomination trace information.
   */
  hash: string;
}
export interface QueryDenomTraceRequestProtoMsg {
  typeUrl: "/ibc.applications.transfer.v1.QueryDenomTraceRequest";
  value: Uint8Array;
}
/**
 * QueryDenomTraceRequest is the request type for the Query/DenomTrace RPC
 * method
 * @name QueryDenomTraceRequestAmino
 * @package ibc.applications.transfer.v1
 * @see proto type: ibc.applications.transfer.v1.QueryDenomTraceRequest
 */
export interface QueryDenomTraceRequestAmino {
  /**
   * hash (in hex format) of the denomination trace information.
   */
  hash?: string;
}
/**
 * QueryDenomTraceRequest is the request type for the Query/DenomTrace RPC
 * method
 * @name QueryDenomTraceRequestSDKType
 * @package ibc.applications.transfer.v1
 * @see proto type: ibc.applications.transfer.v1.QueryDenomTraceRequest
 */
export interface QueryDenomTraceRequestSDKType {
  hash: string;
}
/**
 * QueryDenomTraceResponse is the response type for the Query/DenomTrace RPC
 * method.
 * @name QueryDenomTraceResponse
 * @package ibc.applications.transfer.v1
 * @see proto type: ibc.applications.transfer.v1.QueryDenomTraceResponse
 */
export interface QueryDenomTraceResponse {
  /**
   * denom_trace returns the requested denomination trace information.
   */
  denomTrace?: DenomTrace;
}
export interface QueryDenomTraceResponseProtoMsg {
  typeUrl: "/ibc.applications.transfer.v1.QueryDenomTraceResponse";
  value: Uint8Array;
}
/**
 * QueryDenomTraceResponse is the response type for the Query/DenomTrace RPC
 * method.
 * @name QueryDenomTraceResponseAmino
 * @package ibc.applications.transfer.v1
 * @see proto type: ibc.applications.transfer.v1.QueryDenomTraceResponse
 */
export interface QueryDenomTraceResponseAmino {
  /**
   * denom_trace returns the requested denomination trace information.
   */
  denom_trace?: DenomTraceAmino;
}
/**
 * QueryDenomTraceResponse is the response type for the Query/DenomTrace RPC
 * method.
 * @name QueryDenomTraceResponseSDKType
 * @package ibc.applications.transfer.v1
 * @see proto type: ibc.applications.transfer.v1.QueryDenomTraceResponse
 */
export interface QueryDenomTraceResponseSDKType {
  denom_trace?: DenomTraceSDKType;
}
/**
 * QueryConnectionsRequest is the request type for the Query/DenomTraces RPC
 * method
 * @name QueryDenomTracesRequest
 * @package ibc.applications.transfer.v1
 * @see proto type: ibc.applications.transfer.v1.QueryDenomTracesRequest
 */
export interface QueryDenomTracesRequest {
  /**
   * pagination defines an optional pagination for the request.
   */
  pagination?: PageRequest;
}
export interface QueryDenomTracesRequestProtoMsg {
  typeUrl: "/ibc.applications.transfer.v1.QueryDenomTracesRequest";
  value: Uint8Array;
}
/**
 * QueryConnectionsRequest is the request type for the Query/DenomTraces RPC
 * method
 * @name QueryDenomTracesRequestAmino
 * @package ibc.applications.transfer.v1
 * @see proto type: ibc.applications.transfer.v1.QueryDenomTracesRequest
 */
export interface QueryDenomTracesRequestAmino {
  /**
   * pagination defines an optional pagination for the request.
   */
  pagination?: PageRequestAmino;
}
/**
 * QueryConnectionsRequest is the request type for the Query/DenomTraces RPC
 * method
 * @name QueryDenomTracesRequestSDKType
 * @package ibc.applications.transfer.v1
 * @see proto type: ibc.applications.transfer.v1.QueryDenomTracesRequest
 */
export interface QueryDenomTracesRequestSDKType {
  pagination?: PageRequestSDKType;
}
/**
 * QueryConnectionsResponse is the response type for the Query/DenomTraces RPC
 * method.
 * @name QueryDenomTracesResponse
 * @package ibc.applications.transfer.v1
 * @see proto type: ibc.applications.transfer.v1.QueryDenomTracesResponse
 */
export interface QueryDenomTracesResponse {
  /**
   * denom_traces returns all denominations trace information.
   */
  denomTraces: DenomTrace[];
  /**
   * pagination defines the pagination in the response.
   */
  pagination?: PageResponse;
}
export interface QueryDenomTracesResponseProtoMsg {
  typeUrl: "/ibc.applications.transfer.v1.QueryDenomTracesResponse";
  value: Uint8Array;
}
/**
 * QueryConnectionsResponse is the response type for the Query/DenomTraces RPC
 * method.
 * @name QueryDenomTracesResponseAmino
 * @package ibc.applications.transfer.v1
 * @see proto type: ibc.applications.transfer.v1.QueryDenomTracesResponse
 */
export interface QueryDenomTracesResponseAmino {
  /**
   * denom_traces returns all denominations trace information.
   */
  denom_traces?: DenomTraceAmino[];
  /**
   * pagination defines the pagination in the response.
   */
  pagination?: PageResponseAmino;
}
/**
 * QueryConnectionsResponse is the response type for the Query/DenomTraces RPC
 * method.
 * @name QueryDenomTracesResponseSDKType
 * @package ibc.applications.transfer.v1
 * @see proto type: ibc.applications.transfer.v1.QueryDenomTracesResponse
 */
export interface QueryDenomTracesResponseSDKType {
  denom_traces: DenomTraceSDKType[];
  pagination?: PageResponseSDKType;
}
/**
 * QueryParamsRequest is the request type for the Query/Params RPC method.
 * @name QueryParamsRequest
 * @package ibc.applications.transfer.v1
 * @see proto type: ibc.applications.transfer.v1.QueryParamsRequest
 */
export interface QueryParamsRequest {}
export interface QueryParamsRequestProtoMsg {
  typeUrl: "/ibc.applications.transfer.v1.QueryParamsRequest";
  value: Uint8Array;
}
/**
 * QueryParamsRequest is the request type for the Query/Params RPC method.
 * @name QueryParamsRequestAmino
 * @package ibc.applications.transfer.v1
 * @see proto type: ibc.applications.transfer.v1.QueryParamsRequest
 */
export interface QueryParamsRequestAmino {}
/**
 * QueryParamsRequest is the request type for the Query/Params RPC method.
 * @name QueryParamsRequestSDKType
 * @package ibc.applications.transfer.v1
 * @see proto type: ibc.applications.transfer.v1.QueryParamsRequest
 */
export interface QueryParamsRequestSDKType {}
/**
 * QueryParamsResponse is the response type for the Query/Params RPC method.
 * @name QueryParamsResponse
 * @package ibc.applications.transfer.v1
 * @see proto type: ibc.applications.transfer.v1.QueryParamsResponse
 */
export interface QueryParamsResponse {
  /**
   * params defines the parameters of the module.
   */
  params?: Params;
}
export interface QueryParamsResponseProtoMsg {
  typeUrl: "/ibc.applications.transfer.v1.QueryParamsResponse";
  value: Uint8Array;
}
/**
 * QueryParamsResponse is the response type for the Query/Params RPC method.
 * @name QueryParamsResponseAmino
 * @package ibc.applications.transfer.v1
 * @see proto type: ibc.applications.transfer.v1.QueryParamsResponse
 */
export interface QueryParamsResponseAmino {
  /**
   * params defines the parameters of the module.
   */
  params?: ParamsAmino;
}
/**
 * QueryParamsResponse is the response type for the Query/Params RPC method.
 * @name QueryParamsResponseSDKType
 * @package ibc.applications.transfer.v1
 * @see proto type: ibc.applications.transfer.v1.QueryParamsResponse
 */
export interface QueryParamsResponseSDKType {
  params?: ParamsSDKType;
}
function createBaseQueryDenomTraceRequest(): QueryDenomTraceRequest {
  return {
    hash: ""
  };
}
/**
 * QueryDenomTraceRequest is the request type for the Query/DenomTrace RPC
 * method
 * @name QueryDenomTraceRequest
 * @package ibc.applications.transfer.v1
 * @see proto type: ibc.applications.transfer.v1.QueryDenomTraceRequest
 */
export const QueryDenomTraceRequest = {
  typeUrl: "/ibc.applications.transfer.v1.QueryDenomTraceRequest",
  aminoType: "cosmos-sdk/QueryDenomTraceRequest",
  is(o: any): o is QueryDenomTraceRequest {
    return o && (o.$typeUrl === QueryDenomTraceRequest.typeUrl || typeof o.hash === "string");
  },
  isSDK(o: any): o is QueryDenomTraceRequestSDKType {
    return o && (o.$typeUrl === QueryDenomTraceRequest.typeUrl || typeof o.hash === "string");
  },
  isAmino(o: any): o is QueryDenomTraceRequestAmino {
    return o && (o.$typeUrl === QueryDenomTraceRequest.typeUrl || typeof o.hash === "string");
  },
  encode(message: QueryDenomTraceRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.hash !== "") {
      writer.uint32(10).string(message.hash);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryDenomTraceRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDenomTraceRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.hash = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryDenomTraceRequest {
    const obj = createBaseQueryDenomTraceRequest();
    if (isSet(object.hash)) obj.hash = String(object.hash);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryDenomTraceRequest>): QueryDenomTraceRequest {
    const message = createBaseQueryDenomTraceRequest();
    message.hash = object.hash ?? "";
    return message;
  },
  fromSDK(object: QueryDenomTraceRequestSDKType): QueryDenomTraceRequest {
    return {
      hash: object?.hash
    };
  },
  toSDK(message: QueryDenomTraceRequest): QueryDenomTraceRequestSDKType {
    const obj: any = {};
    obj.hash = message.hash;
    return obj;
  },
  fromAmino(object: QueryDenomTraceRequestAmino): QueryDenomTraceRequest {
    const message = createBaseQueryDenomTraceRequest();
    if (object.hash !== undefined && object.hash !== null) {
      message.hash = object.hash;
    }
    return message;
  },
  toAmino(message: QueryDenomTraceRequest, useInterfaces: boolean = true): QueryDenomTraceRequestAmino {
    const obj: any = {};
    obj.hash = message.hash === "" ? undefined : message.hash;
    return obj;
  },
  fromProtoMsg(message: QueryDenomTraceRequestProtoMsg, useInterfaces: boolean = true): QueryDenomTraceRequest {
    return QueryDenomTraceRequest.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryDenomTraceRequest): Uint8Array {
    return QueryDenomTraceRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryDenomTraceRequest): QueryDenomTraceRequestProtoMsg {
    return {
      typeUrl: "/ibc.applications.transfer.v1.QueryDenomTraceRequest",
      value: QueryDenomTraceRequest.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseQueryDenomTraceResponse(): QueryDenomTraceResponse {
  return {
    denomTrace: undefined
  };
}
/**
 * QueryDenomTraceResponse is the response type for the Query/DenomTrace RPC
 * method.
 * @name QueryDenomTraceResponse
 * @package ibc.applications.transfer.v1
 * @see proto type: ibc.applications.transfer.v1.QueryDenomTraceResponse
 */
export const QueryDenomTraceResponse = {
  typeUrl: "/ibc.applications.transfer.v1.QueryDenomTraceResponse",
  aminoType: "cosmos-sdk/QueryDenomTraceResponse",
  is(o: any): o is QueryDenomTraceResponse {
    return o && o.$typeUrl === QueryDenomTraceResponse.typeUrl;
  },
  isSDK(o: any): o is QueryDenomTraceResponseSDKType {
    return o && o.$typeUrl === QueryDenomTraceResponse.typeUrl;
  },
  isAmino(o: any): o is QueryDenomTraceResponseAmino {
    return o && o.$typeUrl === QueryDenomTraceResponse.typeUrl;
  },
  encode(message: QueryDenomTraceResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.denomTrace !== undefined) {
      DenomTrace.encode(message.denomTrace, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryDenomTraceResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDenomTraceResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denomTrace = DenomTrace.decode(reader, reader.uint32(), useInterfaces);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryDenomTraceResponse {
    const obj = createBaseQueryDenomTraceResponse();
    if (isSet(object.denomTrace)) obj.denomTrace = DenomTrace.fromJSON(object.denomTrace);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryDenomTraceResponse>): QueryDenomTraceResponse {
    const message = createBaseQueryDenomTraceResponse();
    if (object.denomTrace !== undefined && object.denomTrace !== null) {
      message.denomTrace = DenomTrace.fromPartial(object.denomTrace);
    }
    return message;
  },
  fromSDK(object: QueryDenomTraceResponseSDKType): QueryDenomTraceResponse {
    return {
      denomTrace: object.denom_trace ? DenomTrace.fromSDK(object.denom_trace) : undefined
    };
  },
  toSDK(message: QueryDenomTraceResponse): QueryDenomTraceResponseSDKType {
    const obj: any = {};
    message.denomTrace !== undefined && (obj.denom_trace = message.denomTrace ? DenomTrace.toSDK(message.denomTrace) : undefined);
    return obj;
  },
  fromAmino(object: QueryDenomTraceResponseAmino): QueryDenomTraceResponse {
    const message = createBaseQueryDenomTraceResponse();
    if (object.denom_trace !== undefined && object.denom_trace !== null) {
      message.denomTrace = DenomTrace.fromAmino(object.denom_trace);
    }
    return message;
  },
  toAmino(message: QueryDenomTraceResponse, useInterfaces: boolean = true): QueryDenomTraceResponseAmino {
    const obj: any = {};
    obj.denom_trace = message.denomTrace ? DenomTrace.toAmino(message.denomTrace, useInterfaces) : undefined;
    return obj;
  },
  fromProtoMsg(message: QueryDenomTraceResponseProtoMsg, useInterfaces: boolean = true): QueryDenomTraceResponse {
    return QueryDenomTraceResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryDenomTraceResponse): Uint8Array {
    return QueryDenomTraceResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryDenomTraceResponse): QueryDenomTraceResponseProtoMsg {
    return {
      typeUrl: "/ibc.applications.transfer.v1.QueryDenomTraceResponse",
      value: QueryDenomTraceResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(QueryDenomTraceResponse.typeUrl)) {
      return;
    }
    DenomTrace.registerTypeUrl();
  }
};
function createBaseQueryDenomTracesRequest(): QueryDenomTracesRequest {
  return {
    pagination: undefined
  };
}
/**
 * QueryConnectionsRequest is the request type for the Query/DenomTraces RPC
 * method
 * @name QueryDenomTracesRequest
 * @package ibc.applications.transfer.v1
 * @see proto type: ibc.applications.transfer.v1.QueryDenomTracesRequest
 */
export const QueryDenomTracesRequest = {
  typeUrl: "/ibc.applications.transfer.v1.QueryDenomTracesRequest",
  aminoType: "cosmos-sdk/QueryDenomTracesRequest",
  is(o: any): o is QueryDenomTracesRequest {
    return o && o.$typeUrl === QueryDenomTracesRequest.typeUrl;
  },
  isSDK(o: any): o is QueryDenomTracesRequestSDKType {
    return o && o.$typeUrl === QueryDenomTracesRequest.typeUrl;
  },
  isAmino(o: any): o is QueryDenomTracesRequestAmino {
    return o && o.$typeUrl === QueryDenomTracesRequest.typeUrl;
  },
  encode(message: QueryDenomTracesRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryDenomTracesRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDenomTracesRequest();
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
  fromJSON(object: any): QueryDenomTracesRequest {
    const obj = createBaseQueryDenomTracesRequest();
    if (isSet(object.pagination)) obj.pagination = PageRequest.fromJSON(object.pagination);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryDenomTracesRequest>): QueryDenomTracesRequest {
    const message = createBaseQueryDenomTracesRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    }
    return message;
  },
  fromSDK(object: QueryDenomTracesRequestSDKType): QueryDenomTracesRequest {
    return {
      pagination: object.pagination ? PageRequest.fromSDK(object.pagination) : undefined
    };
  },
  toSDK(message: QueryDenomTracesRequest): QueryDenomTracesRequestSDKType {
    const obj: any = {};
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toSDK(message.pagination) : undefined);
    return obj;
  },
  fromAmino(object: QueryDenomTracesRequestAmino): QueryDenomTracesRequest {
    const message = createBaseQueryDenomTracesRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryDenomTracesRequest, useInterfaces: boolean = true): QueryDenomTracesRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination, useInterfaces) : undefined;
    return obj;
  },
  fromProtoMsg(message: QueryDenomTracesRequestProtoMsg, useInterfaces: boolean = true): QueryDenomTracesRequest {
    return QueryDenomTracesRequest.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryDenomTracesRequest): Uint8Array {
    return QueryDenomTracesRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryDenomTracesRequest): QueryDenomTracesRequestProtoMsg {
    return {
      typeUrl: "/ibc.applications.transfer.v1.QueryDenomTracesRequest",
      value: QueryDenomTracesRequest.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(QueryDenomTracesRequest.typeUrl)) {
      return;
    }
    PageRequest.registerTypeUrl();
  }
};
function createBaseQueryDenomTracesResponse(): QueryDenomTracesResponse {
  return {
    denomTraces: [],
    pagination: undefined
  };
}
/**
 * QueryConnectionsResponse is the response type for the Query/DenomTraces RPC
 * method.
 * @name QueryDenomTracesResponse
 * @package ibc.applications.transfer.v1
 * @see proto type: ibc.applications.transfer.v1.QueryDenomTracesResponse
 */
export const QueryDenomTracesResponse = {
  typeUrl: "/ibc.applications.transfer.v1.QueryDenomTracesResponse",
  aminoType: "cosmos-sdk/QueryDenomTracesResponse",
  is(o: any): o is QueryDenomTracesResponse {
    return o && (o.$typeUrl === QueryDenomTracesResponse.typeUrl || Array.isArray(o.denomTraces) && (!o.denomTraces.length || DenomTrace.is(o.denomTraces[0])));
  },
  isSDK(o: any): o is QueryDenomTracesResponseSDKType {
    return o && (o.$typeUrl === QueryDenomTracesResponse.typeUrl || Array.isArray(o.denom_traces) && (!o.denom_traces.length || DenomTrace.isSDK(o.denom_traces[0])));
  },
  isAmino(o: any): o is QueryDenomTracesResponseAmino {
    return o && (o.$typeUrl === QueryDenomTracesResponse.typeUrl || Array.isArray(o.denom_traces) && (!o.denom_traces.length || DenomTrace.isAmino(o.denom_traces[0])));
  },
  encode(message: QueryDenomTracesResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.denomTraces) {
      DenomTrace.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryDenomTracesResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDenomTracesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denomTraces.push(DenomTrace.decode(reader, reader.uint32(), useInterfaces));
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
  fromJSON(object: any): QueryDenomTracesResponse {
    const obj = createBaseQueryDenomTracesResponse();
    if (Array.isArray(object?.denomTraces)) obj.denomTraces = object.denomTraces.map((e: any) => DenomTrace.fromJSON(e));
    if (isSet(object.pagination)) obj.pagination = PageResponse.fromJSON(object.pagination);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryDenomTracesResponse>): QueryDenomTracesResponse {
    const message = createBaseQueryDenomTracesResponse();
    message.denomTraces = object.denomTraces?.map(e => DenomTrace.fromPartial(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    }
    return message;
  },
  fromSDK(object: QueryDenomTracesResponseSDKType): QueryDenomTracesResponse {
    return {
      denomTraces: Array.isArray(object?.denom_traces) ? object.denom_traces.map((e: any) => DenomTrace.fromSDK(e)) : [],
      pagination: object.pagination ? PageResponse.fromSDK(object.pagination) : undefined
    };
  },
  toSDK(message: QueryDenomTracesResponse): QueryDenomTracesResponseSDKType {
    const obj: any = {};
    if (message.denomTraces) {
      obj.denom_traces = message.denomTraces.map(e => e ? DenomTrace.toSDK(e) : undefined);
    } else {
      obj.denom_traces = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toSDK(message.pagination) : undefined);
    return obj;
  },
  fromAmino(object: QueryDenomTracesResponseAmino): QueryDenomTracesResponse {
    const message = createBaseQueryDenomTracesResponse();
    message.denomTraces = object.denom_traces?.map(e => DenomTrace.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryDenomTracesResponse, useInterfaces: boolean = true): QueryDenomTracesResponseAmino {
    const obj: any = {};
    if (message.denomTraces) {
      obj.denom_traces = message.denomTraces.map(e => e ? DenomTrace.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.denom_traces = message.denomTraces;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination, useInterfaces) : undefined;
    return obj;
  },
  fromProtoMsg(message: QueryDenomTracesResponseProtoMsg, useInterfaces: boolean = true): QueryDenomTracesResponse {
    return QueryDenomTracesResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryDenomTracesResponse): Uint8Array {
    return QueryDenomTracesResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryDenomTracesResponse): QueryDenomTracesResponseProtoMsg {
    return {
      typeUrl: "/ibc.applications.transfer.v1.QueryDenomTracesResponse",
      value: QueryDenomTracesResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(QueryDenomTracesResponse.typeUrl)) {
      return;
    }
    DenomTrace.registerTypeUrl();
    PageResponse.registerTypeUrl();
  }
};
function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}
/**
 * QueryParamsRequest is the request type for the Query/Params RPC method.
 * @name QueryParamsRequest
 * @package ibc.applications.transfer.v1
 * @see proto type: ibc.applications.transfer.v1.QueryParamsRequest
 */
export const QueryParamsRequest = {
  typeUrl: "/ibc.applications.transfer.v1.QueryParamsRequest",
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
      typeUrl: "/ibc.applications.transfer.v1.QueryParamsRequest",
      value: QueryParamsRequest.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseQueryParamsResponse(): QueryParamsResponse {
  return {
    params: undefined
  };
}
/**
 * QueryParamsResponse is the response type for the Query/Params RPC method.
 * @name QueryParamsResponse
 * @package ibc.applications.transfer.v1
 * @see proto type: ibc.applications.transfer.v1.QueryParamsResponse
 */
export const QueryParamsResponse = {
  typeUrl: "/ibc.applications.transfer.v1.QueryParamsResponse",
  aminoType: "cosmos-sdk/QueryParamsResponse",
  is(o: any): o is QueryParamsResponse {
    return o && o.$typeUrl === QueryParamsResponse.typeUrl;
  },
  isSDK(o: any): o is QueryParamsResponseSDKType {
    return o && o.$typeUrl === QueryParamsResponse.typeUrl;
  },
  isAmino(o: any): o is QueryParamsResponseAmino {
    return o && o.$typeUrl === QueryParamsResponse.typeUrl;
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
      typeUrl: "/ibc.applications.transfer.v1.QueryParamsResponse",
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