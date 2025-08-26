import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { DenomAuthorityMetadata, DenomAuthorityMetadataAmino, DenomAuthorityMetadataSDKType } from "./authorityMetadata";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial, isSet } from "../../../helpers";
import { GlobalDecoderRegistry } from "../../../registry";
export const protobufPackage = "osmosis.tokenfactory.v1beta1";
/**
 * QueryParamsRequest is the request type for the Query/Params RPC method.
 * @name QueryParamsRequest
 * @package osmosis.tokenfactory.v1beta1
 * @see proto type: osmosis.tokenfactory.v1beta1.QueryParamsRequest
 */
export interface QueryParamsRequest {}
export interface QueryParamsRequestProtoMsg {
  typeUrl: "/osmosis.tokenfactory.v1beta1.QueryParamsRequest";
  value: Uint8Array;
}
/**
 * QueryParamsRequest is the request type for the Query/Params RPC method.
 * @name QueryParamsRequestAmino
 * @package osmosis.tokenfactory.v1beta1
 * @see proto type: osmosis.tokenfactory.v1beta1.QueryParamsRequest
 */
export interface QueryParamsRequestAmino {}
/**
 * QueryParamsRequest is the request type for the Query/Params RPC method.
 * @name QueryParamsRequestSDKType
 * @package osmosis.tokenfactory.v1beta1
 * @see proto type: osmosis.tokenfactory.v1beta1.QueryParamsRequest
 */
export interface QueryParamsRequestSDKType {}
/**
 * QueryParamsResponse is the response type for the Query/Params RPC method.
 * @name QueryParamsResponse
 * @package osmosis.tokenfactory.v1beta1
 * @see proto type: osmosis.tokenfactory.v1beta1.QueryParamsResponse
 */
export interface QueryParamsResponse {
  /**
   * params defines the parameters of the module.
   */
  params: Params;
}
export interface QueryParamsResponseProtoMsg {
  typeUrl: "/osmosis.tokenfactory.v1beta1.QueryParamsResponse";
  value: Uint8Array;
}
/**
 * QueryParamsResponse is the response type for the Query/Params RPC method.
 * @name QueryParamsResponseAmino
 * @package osmosis.tokenfactory.v1beta1
 * @see proto type: osmosis.tokenfactory.v1beta1.QueryParamsResponse
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
 * @package osmosis.tokenfactory.v1beta1
 * @see proto type: osmosis.tokenfactory.v1beta1.QueryParamsResponse
 */
export interface QueryParamsResponseSDKType {
  params: ParamsSDKType;
}
/**
 * QueryDenomAuthorityMetadataRequest defines the request structure for the
 * DenomAuthorityMetadata gRPC query.
 * @name QueryDenomAuthorityMetadataRequest
 * @package osmosis.tokenfactory.v1beta1
 * @see proto type: osmosis.tokenfactory.v1beta1.QueryDenomAuthorityMetadataRequest
 */
export interface QueryDenomAuthorityMetadataRequest {
  denom: string;
}
export interface QueryDenomAuthorityMetadataRequestProtoMsg {
  typeUrl: "/osmosis.tokenfactory.v1beta1.QueryDenomAuthorityMetadataRequest";
  value: Uint8Array;
}
/**
 * QueryDenomAuthorityMetadataRequest defines the request structure for the
 * DenomAuthorityMetadata gRPC query.
 * @name QueryDenomAuthorityMetadataRequestAmino
 * @package osmosis.tokenfactory.v1beta1
 * @see proto type: osmosis.tokenfactory.v1beta1.QueryDenomAuthorityMetadataRequest
 */
export interface QueryDenomAuthorityMetadataRequestAmino {
  denom?: string;
}
/**
 * QueryDenomAuthorityMetadataRequest defines the request structure for the
 * DenomAuthorityMetadata gRPC query.
 * @name QueryDenomAuthorityMetadataRequestSDKType
 * @package osmosis.tokenfactory.v1beta1
 * @see proto type: osmosis.tokenfactory.v1beta1.QueryDenomAuthorityMetadataRequest
 */
export interface QueryDenomAuthorityMetadataRequestSDKType {
  denom: string;
}
/**
 * QueryDenomAuthorityMetadataResponse defines the response structure for the
 * DenomAuthorityMetadata gRPC query.
 * @name QueryDenomAuthorityMetadataResponse
 * @package osmosis.tokenfactory.v1beta1
 * @see proto type: osmosis.tokenfactory.v1beta1.QueryDenomAuthorityMetadataResponse
 */
export interface QueryDenomAuthorityMetadataResponse {
  authorityMetadata: DenomAuthorityMetadata;
}
export interface QueryDenomAuthorityMetadataResponseProtoMsg {
  typeUrl: "/osmosis.tokenfactory.v1beta1.QueryDenomAuthorityMetadataResponse";
  value: Uint8Array;
}
/**
 * QueryDenomAuthorityMetadataResponse defines the response structure for the
 * DenomAuthorityMetadata gRPC query.
 * @name QueryDenomAuthorityMetadataResponseAmino
 * @package osmosis.tokenfactory.v1beta1
 * @see proto type: osmosis.tokenfactory.v1beta1.QueryDenomAuthorityMetadataResponse
 */
export interface QueryDenomAuthorityMetadataResponseAmino {
  authority_metadata?: DenomAuthorityMetadataAmino;
}
/**
 * QueryDenomAuthorityMetadataResponse defines the response structure for the
 * DenomAuthorityMetadata gRPC query.
 * @name QueryDenomAuthorityMetadataResponseSDKType
 * @package osmosis.tokenfactory.v1beta1
 * @see proto type: osmosis.tokenfactory.v1beta1.QueryDenomAuthorityMetadataResponse
 */
export interface QueryDenomAuthorityMetadataResponseSDKType {
  authority_metadata: DenomAuthorityMetadataSDKType;
}
/**
 * QueryDenomsFromCreatorRequest defines the request structure for the
 * DenomsFromCreator gRPC query.
 * @name QueryDenomsFromCreatorRequest
 * @package osmosis.tokenfactory.v1beta1
 * @see proto type: osmosis.tokenfactory.v1beta1.QueryDenomsFromCreatorRequest
 */
export interface QueryDenomsFromCreatorRequest {
  creator: string;
}
export interface QueryDenomsFromCreatorRequestProtoMsg {
  typeUrl: "/osmosis.tokenfactory.v1beta1.QueryDenomsFromCreatorRequest";
  value: Uint8Array;
}
/**
 * QueryDenomsFromCreatorRequest defines the request structure for the
 * DenomsFromCreator gRPC query.
 * @name QueryDenomsFromCreatorRequestAmino
 * @package osmosis.tokenfactory.v1beta1
 * @see proto type: osmosis.tokenfactory.v1beta1.QueryDenomsFromCreatorRequest
 */
export interface QueryDenomsFromCreatorRequestAmino {
  creator?: string;
}
/**
 * QueryDenomsFromCreatorRequest defines the request structure for the
 * DenomsFromCreator gRPC query.
 * @name QueryDenomsFromCreatorRequestSDKType
 * @package osmosis.tokenfactory.v1beta1
 * @see proto type: osmosis.tokenfactory.v1beta1.QueryDenomsFromCreatorRequest
 */
export interface QueryDenomsFromCreatorRequestSDKType {
  creator: string;
}
/**
 * QueryDenomsFromCreatorRequest defines the response structure for the
 * DenomsFromCreator gRPC query.
 * @name QueryDenomsFromCreatorResponse
 * @package osmosis.tokenfactory.v1beta1
 * @see proto type: osmosis.tokenfactory.v1beta1.QueryDenomsFromCreatorResponse
 */
export interface QueryDenomsFromCreatorResponse {
  denoms: string[];
}
export interface QueryDenomsFromCreatorResponseProtoMsg {
  typeUrl: "/osmosis.tokenfactory.v1beta1.QueryDenomsFromCreatorResponse";
  value: Uint8Array;
}
/**
 * QueryDenomsFromCreatorRequest defines the response structure for the
 * DenomsFromCreator gRPC query.
 * @name QueryDenomsFromCreatorResponseAmino
 * @package osmosis.tokenfactory.v1beta1
 * @see proto type: osmosis.tokenfactory.v1beta1.QueryDenomsFromCreatorResponse
 */
export interface QueryDenomsFromCreatorResponseAmino {
  denoms?: string[];
}
/**
 * QueryDenomsFromCreatorRequest defines the response structure for the
 * DenomsFromCreator gRPC query.
 * @name QueryDenomsFromCreatorResponseSDKType
 * @package osmosis.tokenfactory.v1beta1
 * @see proto type: osmosis.tokenfactory.v1beta1.QueryDenomsFromCreatorResponse
 */
export interface QueryDenomsFromCreatorResponseSDKType {
  denoms: string[];
}
function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}
/**
 * QueryParamsRequest is the request type for the Query/Params RPC method.
 * @name QueryParamsRequest
 * @package osmosis.tokenfactory.v1beta1
 * @see proto type: osmosis.tokenfactory.v1beta1.QueryParamsRequest
 */
export const QueryParamsRequest = {
  typeUrl: "/osmosis.tokenfactory.v1beta1.QueryParamsRequest",
  aminoType: "osmosis/tokenfactory/query-params-request",
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
      typeUrl: "/osmosis.tokenfactory.v1beta1.QueryParamsRequest",
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
 * QueryParamsResponse is the response type for the Query/Params RPC method.
 * @name QueryParamsResponse
 * @package osmosis.tokenfactory.v1beta1
 * @see proto type: osmosis.tokenfactory.v1beta1.QueryParamsResponse
 */
export const QueryParamsResponse = {
  typeUrl: "/osmosis.tokenfactory.v1beta1.QueryParamsResponse",
  aminoType: "osmosis/tokenfactory/query-params-response",
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
      typeUrl: "/osmosis.tokenfactory.v1beta1.QueryParamsResponse",
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
function createBaseQueryDenomAuthorityMetadataRequest(): QueryDenomAuthorityMetadataRequest {
  return {
    denom: ""
  };
}
/**
 * QueryDenomAuthorityMetadataRequest defines the request structure for the
 * DenomAuthorityMetadata gRPC query.
 * @name QueryDenomAuthorityMetadataRequest
 * @package osmosis.tokenfactory.v1beta1
 * @see proto type: osmosis.tokenfactory.v1beta1.QueryDenomAuthorityMetadataRequest
 */
export const QueryDenomAuthorityMetadataRequest = {
  typeUrl: "/osmosis.tokenfactory.v1beta1.QueryDenomAuthorityMetadataRequest",
  aminoType: "osmosis/tokenfactory/query-denom-authority-metadata-request",
  is(o: any): o is QueryDenomAuthorityMetadataRequest {
    return o && (o.$typeUrl === QueryDenomAuthorityMetadataRequest.typeUrl || typeof o.denom === "string");
  },
  isSDK(o: any): o is QueryDenomAuthorityMetadataRequestSDKType {
    return o && (o.$typeUrl === QueryDenomAuthorityMetadataRequest.typeUrl || typeof o.denom === "string");
  },
  isAmino(o: any): o is QueryDenomAuthorityMetadataRequestAmino {
    return o && (o.$typeUrl === QueryDenomAuthorityMetadataRequest.typeUrl || typeof o.denom === "string");
  },
  encode(message: QueryDenomAuthorityMetadataRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryDenomAuthorityMetadataRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDenomAuthorityMetadataRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryDenomAuthorityMetadataRequest {
    const obj = createBaseQueryDenomAuthorityMetadataRequest();
    if (isSet(object.denom)) obj.denom = String(object.denom);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryDenomAuthorityMetadataRequest>): QueryDenomAuthorityMetadataRequest {
    const message = createBaseQueryDenomAuthorityMetadataRequest();
    message.denom = object.denom ?? "";
    return message;
  },
  fromSDK(object: QueryDenomAuthorityMetadataRequestSDKType): QueryDenomAuthorityMetadataRequest {
    return {
      denom: object?.denom
    };
  },
  toSDK(message: QueryDenomAuthorityMetadataRequest): QueryDenomAuthorityMetadataRequestSDKType {
    const obj: any = {};
    obj.denom = message.denom;
    return obj;
  },
  fromAmino(object: QueryDenomAuthorityMetadataRequestAmino): QueryDenomAuthorityMetadataRequest {
    const message = createBaseQueryDenomAuthorityMetadataRequest();
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    }
    return message;
  },
  toAmino(message: QueryDenomAuthorityMetadataRequest, useInterfaces: boolean = true): QueryDenomAuthorityMetadataRequestAmino {
    const obj: any = {};
    obj.denom = message.denom === "" ? undefined : message.denom;
    return obj;
  },
  fromProtoMsg(message: QueryDenomAuthorityMetadataRequestProtoMsg, useInterfaces: boolean = true): QueryDenomAuthorityMetadataRequest {
    return QueryDenomAuthorityMetadataRequest.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryDenomAuthorityMetadataRequest): Uint8Array {
    return QueryDenomAuthorityMetadataRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryDenomAuthorityMetadataRequest): QueryDenomAuthorityMetadataRequestProtoMsg {
    return {
      typeUrl: "/osmosis.tokenfactory.v1beta1.QueryDenomAuthorityMetadataRequest",
      value: QueryDenomAuthorityMetadataRequest.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseQueryDenomAuthorityMetadataResponse(): QueryDenomAuthorityMetadataResponse {
  return {
    authorityMetadata: DenomAuthorityMetadata.fromPartial({})
  };
}
/**
 * QueryDenomAuthorityMetadataResponse defines the response structure for the
 * DenomAuthorityMetadata gRPC query.
 * @name QueryDenomAuthorityMetadataResponse
 * @package osmosis.tokenfactory.v1beta1
 * @see proto type: osmosis.tokenfactory.v1beta1.QueryDenomAuthorityMetadataResponse
 */
export const QueryDenomAuthorityMetadataResponse = {
  typeUrl: "/osmosis.tokenfactory.v1beta1.QueryDenomAuthorityMetadataResponse",
  aminoType: "osmosis/tokenfactory/query-denom-authority-metadata-response",
  is(o: any): o is QueryDenomAuthorityMetadataResponse {
    return o && (o.$typeUrl === QueryDenomAuthorityMetadataResponse.typeUrl || DenomAuthorityMetadata.is(o.authorityMetadata));
  },
  isSDK(o: any): o is QueryDenomAuthorityMetadataResponseSDKType {
    return o && (o.$typeUrl === QueryDenomAuthorityMetadataResponse.typeUrl || DenomAuthorityMetadata.isSDK(o.authority_metadata));
  },
  isAmino(o: any): o is QueryDenomAuthorityMetadataResponseAmino {
    return o && (o.$typeUrl === QueryDenomAuthorityMetadataResponse.typeUrl || DenomAuthorityMetadata.isAmino(o.authority_metadata));
  },
  encode(message: QueryDenomAuthorityMetadataResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.authorityMetadata !== undefined) {
      DenomAuthorityMetadata.encode(message.authorityMetadata, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryDenomAuthorityMetadataResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDenomAuthorityMetadataResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authorityMetadata = DenomAuthorityMetadata.decode(reader, reader.uint32(), useInterfaces);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryDenomAuthorityMetadataResponse {
    const obj = createBaseQueryDenomAuthorityMetadataResponse();
    if (isSet(object.authorityMetadata)) obj.authorityMetadata = DenomAuthorityMetadata.fromJSON(object.authorityMetadata);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryDenomAuthorityMetadataResponse>): QueryDenomAuthorityMetadataResponse {
    const message = createBaseQueryDenomAuthorityMetadataResponse();
    if (object.authorityMetadata !== undefined && object.authorityMetadata !== null) {
      message.authorityMetadata = DenomAuthorityMetadata.fromPartial(object.authorityMetadata);
    }
    return message;
  },
  fromSDK(object: QueryDenomAuthorityMetadataResponseSDKType): QueryDenomAuthorityMetadataResponse {
    return {
      authorityMetadata: object.authority_metadata ? DenomAuthorityMetadata.fromSDK(object.authority_metadata) : undefined
    };
  },
  toSDK(message: QueryDenomAuthorityMetadataResponse): QueryDenomAuthorityMetadataResponseSDKType {
    const obj: any = {};
    message.authorityMetadata !== undefined && (obj.authority_metadata = message.authorityMetadata ? DenomAuthorityMetadata.toSDK(message.authorityMetadata) : undefined);
    return obj;
  },
  fromAmino(object: QueryDenomAuthorityMetadataResponseAmino): QueryDenomAuthorityMetadataResponse {
    const message = createBaseQueryDenomAuthorityMetadataResponse();
    if (object.authority_metadata !== undefined && object.authority_metadata !== null) {
      message.authorityMetadata = DenomAuthorityMetadata.fromAmino(object.authority_metadata);
    }
    return message;
  },
  toAmino(message: QueryDenomAuthorityMetadataResponse, useInterfaces: boolean = true): QueryDenomAuthorityMetadataResponseAmino {
    const obj: any = {};
    obj.authority_metadata = message.authorityMetadata ? DenomAuthorityMetadata.toAmino(message.authorityMetadata, useInterfaces) : undefined;
    return obj;
  },
  fromProtoMsg(message: QueryDenomAuthorityMetadataResponseProtoMsg, useInterfaces: boolean = true): QueryDenomAuthorityMetadataResponse {
    return QueryDenomAuthorityMetadataResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryDenomAuthorityMetadataResponse): Uint8Array {
    return QueryDenomAuthorityMetadataResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryDenomAuthorityMetadataResponse): QueryDenomAuthorityMetadataResponseProtoMsg {
    return {
      typeUrl: "/osmosis.tokenfactory.v1beta1.QueryDenomAuthorityMetadataResponse",
      value: QueryDenomAuthorityMetadataResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(QueryDenomAuthorityMetadataResponse.typeUrl)) {
      return;
    }
    DenomAuthorityMetadata.registerTypeUrl();
  }
};
function createBaseQueryDenomsFromCreatorRequest(): QueryDenomsFromCreatorRequest {
  return {
    creator: ""
  };
}
/**
 * QueryDenomsFromCreatorRequest defines the request structure for the
 * DenomsFromCreator gRPC query.
 * @name QueryDenomsFromCreatorRequest
 * @package osmosis.tokenfactory.v1beta1
 * @see proto type: osmosis.tokenfactory.v1beta1.QueryDenomsFromCreatorRequest
 */
export const QueryDenomsFromCreatorRequest = {
  typeUrl: "/osmosis.tokenfactory.v1beta1.QueryDenomsFromCreatorRequest",
  aminoType: "osmosis/tokenfactory/query-denoms-from-creator-request",
  is(o: any): o is QueryDenomsFromCreatorRequest {
    return o && (o.$typeUrl === QueryDenomsFromCreatorRequest.typeUrl || typeof o.creator === "string");
  },
  isSDK(o: any): o is QueryDenomsFromCreatorRequestSDKType {
    return o && (o.$typeUrl === QueryDenomsFromCreatorRequest.typeUrl || typeof o.creator === "string");
  },
  isAmino(o: any): o is QueryDenomsFromCreatorRequestAmino {
    return o && (o.$typeUrl === QueryDenomsFromCreatorRequest.typeUrl || typeof o.creator === "string");
  },
  encode(message: QueryDenomsFromCreatorRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryDenomsFromCreatorRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDenomsFromCreatorRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryDenomsFromCreatorRequest {
    const obj = createBaseQueryDenomsFromCreatorRequest();
    if (isSet(object.creator)) obj.creator = String(object.creator);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryDenomsFromCreatorRequest>): QueryDenomsFromCreatorRequest {
    const message = createBaseQueryDenomsFromCreatorRequest();
    message.creator = object.creator ?? "";
    return message;
  },
  fromSDK(object: QueryDenomsFromCreatorRequestSDKType): QueryDenomsFromCreatorRequest {
    return {
      creator: object?.creator
    };
  },
  toSDK(message: QueryDenomsFromCreatorRequest): QueryDenomsFromCreatorRequestSDKType {
    const obj: any = {};
    obj.creator = message.creator;
    return obj;
  },
  fromAmino(object: QueryDenomsFromCreatorRequestAmino): QueryDenomsFromCreatorRequest {
    const message = createBaseQueryDenomsFromCreatorRequest();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    return message;
  },
  toAmino(message: QueryDenomsFromCreatorRequest, useInterfaces: boolean = true): QueryDenomsFromCreatorRequestAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    return obj;
  },
  fromProtoMsg(message: QueryDenomsFromCreatorRequestProtoMsg, useInterfaces: boolean = true): QueryDenomsFromCreatorRequest {
    return QueryDenomsFromCreatorRequest.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryDenomsFromCreatorRequest): Uint8Array {
    return QueryDenomsFromCreatorRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryDenomsFromCreatorRequest): QueryDenomsFromCreatorRequestProtoMsg {
    return {
      typeUrl: "/osmosis.tokenfactory.v1beta1.QueryDenomsFromCreatorRequest",
      value: QueryDenomsFromCreatorRequest.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseQueryDenomsFromCreatorResponse(): QueryDenomsFromCreatorResponse {
  return {
    denoms: []
  };
}
/**
 * QueryDenomsFromCreatorRequest defines the response structure for the
 * DenomsFromCreator gRPC query.
 * @name QueryDenomsFromCreatorResponse
 * @package osmosis.tokenfactory.v1beta1
 * @see proto type: osmosis.tokenfactory.v1beta1.QueryDenomsFromCreatorResponse
 */
export const QueryDenomsFromCreatorResponse = {
  typeUrl: "/osmosis.tokenfactory.v1beta1.QueryDenomsFromCreatorResponse",
  aminoType: "osmosis/tokenfactory/query-denoms-from-creator-response",
  is(o: any): o is QueryDenomsFromCreatorResponse {
    return o && (o.$typeUrl === QueryDenomsFromCreatorResponse.typeUrl || Array.isArray(o.denoms) && (!o.denoms.length || typeof o.denoms[0] === "string"));
  },
  isSDK(o: any): o is QueryDenomsFromCreatorResponseSDKType {
    return o && (o.$typeUrl === QueryDenomsFromCreatorResponse.typeUrl || Array.isArray(o.denoms) && (!o.denoms.length || typeof o.denoms[0] === "string"));
  },
  isAmino(o: any): o is QueryDenomsFromCreatorResponseAmino {
    return o && (o.$typeUrl === QueryDenomsFromCreatorResponse.typeUrl || Array.isArray(o.denoms) && (!o.denoms.length || typeof o.denoms[0] === "string"));
  },
  encode(message: QueryDenomsFromCreatorResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.denoms) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryDenomsFromCreatorResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDenomsFromCreatorResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denoms.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryDenomsFromCreatorResponse {
    const obj = createBaseQueryDenomsFromCreatorResponse();
    if (Array.isArray(object?.denoms)) obj.denoms = object.denoms.map((e: any) => String(e));
    return obj;
  },
  fromPartial(object: DeepPartial<QueryDenomsFromCreatorResponse>): QueryDenomsFromCreatorResponse {
    const message = createBaseQueryDenomsFromCreatorResponse();
    message.denoms = object.denoms?.map(e => e) || [];
    return message;
  },
  fromSDK(object: QueryDenomsFromCreatorResponseSDKType): QueryDenomsFromCreatorResponse {
    return {
      denoms: Array.isArray(object?.denoms) ? object.denoms.map((e: any) => e) : []
    };
  },
  toSDK(message: QueryDenomsFromCreatorResponse): QueryDenomsFromCreatorResponseSDKType {
    const obj: any = {};
    if (message.denoms) {
      obj.denoms = message.denoms.map(e => e);
    } else {
      obj.denoms = [];
    }
    return obj;
  },
  fromAmino(object: QueryDenomsFromCreatorResponseAmino): QueryDenomsFromCreatorResponse {
    const message = createBaseQueryDenomsFromCreatorResponse();
    message.denoms = object.denoms?.map(e => e) || [];
    return message;
  },
  toAmino(message: QueryDenomsFromCreatorResponse, useInterfaces: boolean = true): QueryDenomsFromCreatorResponseAmino {
    const obj: any = {};
    if (message.denoms) {
      obj.denoms = message.denoms.map(e => e);
    } else {
      obj.denoms = message.denoms;
    }
    return obj;
  },
  fromProtoMsg(message: QueryDenomsFromCreatorResponseProtoMsg, useInterfaces: boolean = true): QueryDenomsFromCreatorResponse {
    return QueryDenomsFromCreatorResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryDenomsFromCreatorResponse): Uint8Array {
    return QueryDenomsFromCreatorResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryDenomsFromCreatorResponse): QueryDenomsFromCreatorResponseProtoMsg {
    return {
      typeUrl: "/osmosis.tokenfactory.v1beta1.QueryDenomsFromCreatorResponse",
      value: QueryDenomsFromCreatorResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};