import { PageRequest, PageRequestAmino, PageRequestSDKType, PageResponse, PageResponseAmino, PageResponseSDKType } from "../../base/query/v1beta1/pagination";
import { Grant, GrantAmino, GrantSDKType, GrantAuthorization, GrantAuthorizationAmino, GrantAuthorizationSDKType } from "./authz";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { GlobalDecoderRegistry } from "../../../registry";
import { isSet, DeepPartial } from "../../../helpers";
export const protobufPackage = "cosmos.authz.v1beta1";
/**
 * QueryGrantsRequest is the request type for the Query/Grants RPC method.
 * @name QueryGrantsRequest
 * @package cosmos.authz.v1beta1
 * @see proto type: cosmos.authz.v1beta1.QueryGrantsRequest
 */
export interface QueryGrantsRequest {
  granter: string;
  grantee: string;
  /**
   * Optional, msg_type_url, when set, will query only grants matching given msg type.
   */
  msgTypeUrl: string;
  /**
   * pagination defines an pagination for the request.
   */
  pagination?: PageRequest;
}
export interface QueryGrantsRequestProtoMsg {
  typeUrl: "/cosmos.authz.v1beta1.QueryGrantsRequest";
  value: Uint8Array;
}
/**
 * QueryGrantsRequest is the request type for the Query/Grants RPC method.
 * @name QueryGrantsRequestAmino
 * @package cosmos.authz.v1beta1
 * @see proto type: cosmos.authz.v1beta1.QueryGrantsRequest
 */
export interface QueryGrantsRequestAmino {
  granter?: string;
  grantee?: string;
  /**
   * Optional, msg_type_url, when set, will query only grants matching given msg type.
   */
  msg_type_url?: string;
  /**
   * pagination defines an pagination for the request.
   */
  pagination?: PageRequestAmino;
}
/**
 * QueryGrantsRequest is the request type for the Query/Grants RPC method.
 * @name QueryGrantsRequestSDKType
 * @package cosmos.authz.v1beta1
 * @see proto type: cosmos.authz.v1beta1.QueryGrantsRequest
 */
export interface QueryGrantsRequestSDKType {
  granter: string;
  grantee: string;
  msg_type_url: string;
  pagination?: PageRequestSDKType;
}
/**
 * QueryGrantsResponse is the response type for the Query/Authorizations RPC method.
 * @name QueryGrantsResponse
 * @package cosmos.authz.v1beta1
 * @see proto type: cosmos.authz.v1beta1.QueryGrantsResponse
 */
export interface QueryGrantsResponse {
  /**
   * authorizations is a list of grants granted for grantee by granter.
   */
  grants: Grant[];
  /**
   * pagination defines an pagination for the response.
   */
  pagination?: PageResponse;
}
export interface QueryGrantsResponseProtoMsg {
  typeUrl: "/cosmos.authz.v1beta1.QueryGrantsResponse";
  value: Uint8Array;
}
/**
 * QueryGrantsResponse is the response type for the Query/Authorizations RPC method.
 * @name QueryGrantsResponseAmino
 * @package cosmos.authz.v1beta1
 * @see proto type: cosmos.authz.v1beta1.QueryGrantsResponse
 */
export interface QueryGrantsResponseAmino {
  /**
   * authorizations is a list of grants granted for grantee by granter.
   */
  grants?: GrantAmino[];
  /**
   * pagination defines an pagination for the response.
   */
  pagination?: PageResponseAmino;
}
/**
 * QueryGrantsResponse is the response type for the Query/Authorizations RPC method.
 * @name QueryGrantsResponseSDKType
 * @package cosmos.authz.v1beta1
 * @see proto type: cosmos.authz.v1beta1.QueryGrantsResponse
 */
export interface QueryGrantsResponseSDKType {
  grants: GrantSDKType[];
  pagination?: PageResponseSDKType;
}
/**
 * QueryGranterGrantsRequest is the request type for the Query/GranterGrants RPC method.
 * @name QueryGranterGrantsRequest
 * @package cosmos.authz.v1beta1
 * @see proto type: cosmos.authz.v1beta1.QueryGranterGrantsRequest
 */
export interface QueryGranterGrantsRequest {
  granter: string;
  /**
   * pagination defines an pagination for the request.
   */
  pagination?: PageRequest;
}
export interface QueryGranterGrantsRequestProtoMsg {
  typeUrl: "/cosmos.authz.v1beta1.QueryGranterGrantsRequest";
  value: Uint8Array;
}
/**
 * QueryGranterGrantsRequest is the request type for the Query/GranterGrants RPC method.
 * @name QueryGranterGrantsRequestAmino
 * @package cosmos.authz.v1beta1
 * @see proto type: cosmos.authz.v1beta1.QueryGranterGrantsRequest
 */
export interface QueryGranterGrantsRequestAmino {
  granter?: string;
  /**
   * pagination defines an pagination for the request.
   */
  pagination?: PageRequestAmino;
}
/**
 * QueryGranterGrantsRequest is the request type for the Query/GranterGrants RPC method.
 * @name QueryGranterGrantsRequestSDKType
 * @package cosmos.authz.v1beta1
 * @see proto type: cosmos.authz.v1beta1.QueryGranterGrantsRequest
 */
export interface QueryGranterGrantsRequestSDKType {
  granter: string;
  pagination?: PageRequestSDKType;
}
/**
 * QueryGranterGrantsResponse is the response type for the Query/GranterGrants RPC method.
 * @name QueryGranterGrantsResponse
 * @package cosmos.authz.v1beta1
 * @see proto type: cosmos.authz.v1beta1.QueryGranterGrantsResponse
 */
export interface QueryGranterGrantsResponse {
  /**
   * grants is a list of grants granted by the granter.
   */
  grants: GrantAuthorization[];
  /**
   * pagination defines an pagination for the response.
   */
  pagination?: PageResponse;
}
export interface QueryGranterGrantsResponseProtoMsg {
  typeUrl: "/cosmos.authz.v1beta1.QueryGranterGrantsResponse";
  value: Uint8Array;
}
/**
 * QueryGranterGrantsResponse is the response type for the Query/GranterGrants RPC method.
 * @name QueryGranterGrantsResponseAmino
 * @package cosmos.authz.v1beta1
 * @see proto type: cosmos.authz.v1beta1.QueryGranterGrantsResponse
 */
export interface QueryGranterGrantsResponseAmino {
  /**
   * grants is a list of grants granted by the granter.
   */
  grants?: GrantAuthorizationAmino[];
  /**
   * pagination defines an pagination for the response.
   */
  pagination?: PageResponseAmino;
}
/**
 * QueryGranterGrantsResponse is the response type for the Query/GranterGrants RPC method.
 * @name QueryGranterGrantsResponseSDKType
 * @package cosmos.authz.v1beta1
 * @see proto type: cosmos.authz.v1beta1.QueryGranterGrantsResponse
 */
export interface QueryGranterGrantsResponseSDKType {
  grants: GrantAuthorizationSDKType[];
  pagination?: PageResponseSDKType;
}
/**
 * QueryGranteeGrantsRequest is the request type for the Query/IssuedGrants RPC method.
 * @name QueryGranteeGrantsRequest
 * @package cosmos.authz.v1beta1
 * @see proto type: cosmos.authz.v1beta1.QueryGranteeGrantsRequest
 */
export interface QueryGranteeGrantsRequest {
  grantee: string;
  /**
   * pagination defines an pagination for the request.
   */
  pagination?: PageRequest;
}
export interface QueryGranteeGrantsRequestProtoMsg {
  typeUrl: "/cosmos.authz.v1beta1.QueryGranteeGrantsRequest";
  value: Uint8Array;
}
/**
 * QueryGranteeGrantsRequest is the request type for the Query/IssuedGrants RPC method.
 * @name QueryGranteeGrantsRequestAmino
 * @package cosmos.authz.v1beta1
 * @see proto type: cosmos.authz.v1beta1.QueryGranteeGrantsRequest
 */
export interface QueryGranteeGrantsRequestAmino {
  grantee?: string;
  /**
   * pagination defines an pagination for the request.
   */
  pagination?: PageRequestAmino;
}
/**
 * QueryGranteeGrantsRequest is the request type for the Query/IssuedGrants RPC method.
 * @name QueryGranteeGrantsRequestSDKType
 * @package cosmos.authz.v1beta1
 * @see proto type: cosmos.authz.v1beta1.QueryGranteeGrantsRequest
 */
export interface QueryGranteeGrantsRequestSDKType {
  grantee: string;
  pagination?: PageRequestSDKType;
}
/**
 * QueryGranteeGrantsResponse is the response type for the Query/GranteeGrants RPC method.
 * @name QueryGranteeGrantsResponse
 * @package cosmos.authz.v1beta1
 * @see proto type: cosmos.authz.v1beta1.QueryGranteeGrantsResponse
 */
export interface QueryGranteeGrantsResponse {
  /**
   * grants is a list of grants granted to the grantee.
   */
  grants: GrantAuthorization[];
  /**
   * pagination defines an pagination for the response.
   */
  pagination?: PageResponse;
}
export interface QueryGranteeGrantsResponseProtoMsg {
  typeUrl: "/cosmos.authz.v1beta1.QueryGranteeGrantsResponse";
  value: Uint8Array;
}
/**
 * QueryGranteeGrantsResponse is the response type for the Query/GranteeGrants RPC method.
 * @name QueryGranteeGrantsResponseAmino
 * @package cosmos.authz.v1beta1
 * @see proto type: cosmos.authz.v1beta1.QueryGranteeGrantsResponse
 */
export interface QueryGranteeGrantsResponseAmino {
  /**
   * grants is a list of grants granted to the grantee.
   */
  grants?: GrantAuthorizationAmino[];
  /**
   * pagination defines an pagination for the response.
   */
  pagination?: PageResponseAmino;
}
/**
 * QueryGranteeGrantsResponse is the response type for the Query/GranteeGrants RPC method.
 * @name QueryGranteeGrantsResponseSDKType
 * @package cosmos.authz.v1beta1
 * @see proto type: cosmos.authz.v1beta1.QueryGranteeGrantsResponse
 */
export interface QueryGranteeGrantsResponseSDKType {
  grants: GrantAuthorizationSDKType[];
  pagination?: PageResponseSDKType;
}
function createBaseQueryGrantsRequest(): QueryGrantsRequest {
  return {
    granter: "",
    grantee: "",
    msgTypeUrl: "",
    pagination: undefined
  };
}
/**
 * QueryGrantsRequest is the request type for the Query/Grants RPC method.
 * @name QueryGrantsRequest
 * @package cosmos.authz.v1beta1
 * @see proto type: cosmos.authz.v1beta1.QueryGrantsRequest
 */
export const QueryGrantsRequest = {
  typeUrl: "/cosmos.authz.v1beta1.QueryGrantsRequest",
  aminoType: "cosmos-sdk/QueryGrantsRequest",
  is(o: any): o is QueryGrantsRequest {
    return o && (o.$typeUrl === QueryGrantsRequest.typeUrl || typeof o.granter === "string" && typeof o.grantee === "string" && typeof o.msgTypeUrl === "string");
  },
  isSDK(o: any): o is QueryGrantsRequestSDKType {
    return o && (o.$typeUrl === QueryGrantsRequest.typeUrl || typeof o.granter === "string" && typeof o.grantee === "string" && typeof o.msg_type_url === "string");
  },
  isAmino(o: any): o is QueryGrantsRequestAmino {
    return o && (o.$typeUrl === QueryGrantsRequest.typeUrl || typeof o.granter === "string" && typeof o.grantee === "string" && typeof o.msg_type_url === "string");
  },
  encode(message: QueryGrantsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.granter !== "") {
      writer.uint32(10).string(message.granter);
    }
    if (message.grantee !== "") {
      writer.uint32(18).string(message.grantee);
    }
    if (message.msgTypeUrl !== "") {
      writer.uint32(26).string(message.msgTypeUrl);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryGrantsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGrantsRequest();
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
        case 4:
          message.pagination = PageRequest.decode(reader, reader.uint32(), useInterfaces);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryGrantsRequest {
    const obj = createBaseQueryGrantsRequest();
    if (isSet(object.granter)) obj.granter = String(object.granter);
    if (isSet(object.grantee)) obj.grantee = String(object.grantee);
    if (isSet(object.msgTypeUrl)) obj.msgTypeUrl = String(object.msgTypeUrl);
    if (isSet(object.pagination)) obj.pagination = PageRequest.fromJSON(object.pagination);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryGrantsRequest>): QueryGrantsRequest {
    const message = createBaseQueryGrantsRequest();
    message.granter = object.granter ?? "";
    message.grantee = object.grantee ?? "";
    message.msgTypeUrl = object.msgTypeUrl ?? "";
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    }
    return message;
  },
  fromSDK(object: QueryGrantsRequestSDKType): QueryGrantsRequest {
    return {
      granter: object?.granter,
      grantee: object?.grantee,
      msgTypeUrl: object?.msg_type_url,
      pagination: object.pagination ? PageRequest.fromSDK(object.pagination) : undefined
    };
  },
  toSDK(message: QueryGrantsRequest): QueryGrantsRequestSDKType {
    const obj: any = {};
    obj.granter = message.granter;
    obj.grantee = message.grantee;
    obj.msg_type_url = message.msgTypeUrl;
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toSDK(message.pagination) : undefined);
    return obj;
  },
  fromAmino(object: QueryGrantsRequestAmino): QueryGrantsRequest {
    const message = createBaseQueryGrantsRequest();
    if (object.granter !== undefined && object.granter !== null) {
      message.granter = object.granter;
    }
    if (object.grantee !== undefined && object.grantee !== null) {
      message.grantee = object.grantee;
    }
    if (object.msg_type_url !== undefined && object.msg_type_url !== null) {
      message.msgTypeUrl = object.msg_type_url;
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryGrantsRequest, useInterfaces: boolean = true): QueryGrantsRequestAmino {
    const obj: any = {};
    obj.granter = message.granter === "" ? undefined : message.granter;
    obj.grantee = message.grantee === "" ? undefined : message.grantee;
    obj.msg_type_url = message.msgTypeUrl === "" ? undefined : message.msgTypeUrl;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination, useInterfaces) : undefined;
    return obj;
  },
  fromProtoMsg(message: QueryGrantsRequestProtoMsg, useInterfaces: boolean = true): QueryGrantsRequest {
    return QueryGrantsRequest.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryGrantsRequest): Uint8Array {
    return QueryGrantsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryGrantsRequest): QueryGrantsRequestProtoMsg {
    return {
      typeUrl: "/cosmos.authz.v1beta1.QueryGrantsRequest",
      value: QueryGrantsRequest.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(QueryGrantsRequest.typeUrl)) {
      return;
    }
    PageRequest.registerTypeUrl();
  }
};
function createBaseQueryGrantsResponse(): QueryGrantsResponse {
  return {
    grants: [],
    pagination: undefined
  };
}
/**
 * QueryGrantsResponse is the response type for the Query/Authorizations RPC method.
 * @name QueryGrantsResponse
 * @package cosmos.authz.v1beta1
 * @see proto type: cosmos.authz.v1beta1.QueryGrantsResponse
 */
export const QueryGrantsResponse = {
  typeUrl: "/cosmos.authz.v1beta1.QueryGrantsResponse",
  aminoType: "cosmos-sdk/QueryGrantsResponse",
  is(o: any): o is QueryGrantsResponse {
    return o && (o.$typeUrl === QueryGrantsResponse.typeUrl || Array.isArray(o.grants) && (!o.grants.length || Grant.is(o.grants[0])));
  },
  isSDK(o: any): o is QueryGrantsResponseSDKType {
    return o && (o.$typeUrl === QueryGrantsResponse.typeUrl || Array.isArray(o.grants) && (!o.grants.length || Grant.isSDK(o.grants[0])));
  },
  isAmino(o: any): o is QueryGrantsResponseAmino {
    return o && (o.$typeUrl === QueryGrantsResponse.typeUrl || Array.isArray(o.grants) && (!o.grants.length || Grant.isAmino(o.grants[0])));
  },
  encode(message: QueryGrantsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.grants) {
      Grant.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryGrantsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGrantsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.grants.push(Grant.decode(reader, reader.uint32(), useInterfaces));
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
  fromJSON(object: any): QueryGrantsResponse {
    const obj = createBaseQueryGrantsResponse();
    if (Array.isArray(object?.grants)) obj.grants = object.grants.map((e: any) => Grant.fromJSON(e));
    if (isSet(object.pagination)) obj.pagination = PageResponse.fromJSON(object.pagination);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryGrantsResponse>): QueryGrantsResponse {
    const message = createBaseQueryGrantsResponse();
    message.grants = object.grants?.map(e => Grant.fromPartial(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    }
    return message;
  },
  fromSDK(object: QueryGrantsResponseSDKType): QueryGrantsResponse {
    return {
      grants: Array.isArray(object?.grants) ? object.grants.map((e: any) => Grant.fromSDK(e)) : [],
      pagination: object.pagination ? PageResponse.fromSDK(object.pagination) : undefined
    };
  },
  toSDK(message: QueryGrantsResponse): QueryGrantsResponseSDKType {
    const obj: any = {};
    if (message.grants) {
      obj.grants = message.grants.map(e => e ? Grant.toSDK(e) : undefined);
    } else {
      obj.grants = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toSDK(message.pagination) : undefined);
    return obj;
  },
  fromAmino(object: QueryGrantsResponseAmino): QueryGrantsResponse {
    const message = createBaseQueryGrantsResponse();
    message.grants = object.grants?.map(e => Grant.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryGrantsResponse, useInterfaces: boolean = true): QueryGrantsResponseAmino {
    const obj: any = {};
    if (message.grants) {
      obj.grants = message.grants.map(e => e ? Grant.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.grants = message.grants;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination, useInterfaces) : undefined;
    return obj;
  },
  fromProtoMsg(message: QueryGrantsResponseProtoMsg, useInterfaces: boolean = true): QueryGrantsResponse {
    return QueryGrantsResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryGrantsResponse): Uint8Array {
    return QueryGrantsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryGrantsResponse): QueryGrantsResponseProtoMsg {
    return {
      typeUrl: "/cosmos.authz.v1beta1.QueryGrantsResponse",
      value: QueryGrantsResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(QueryGrantsResponse.typeUrl)) {
      return;
    }
    Grant.registerTypeUrl();
    PageResponse.registerTypeUrl();
  }
};
function createBaseQueryGranterGrantsRequest(): QueryGranterGrantsRequest {
  return {
    granter: "",
    pagination: undefined
  };
}
/**
 * QueryGranterGrantsRequest is the request type for the Query/GranterGrants RPC method.
 * @name QueryGranterGrantsRequest
 * @package cosmos.authz.v1beta1
 * @see proto type: cosmos.authz.v1beta1.QueryGranterGrantsRequest
 */
export const QueryGranterGrantsRequest = {
  typeUrl: "/cosmos.authz.v1beta1.QueryGranterGrantsRequest",
  aminoType: "cosmos-sdk/QueryGranterGrantsRequest",
  is(o: any): o is QueryGranterGrantsRequest {
    return o && (o.$typeUrl === QueryGranterGrantsRequest.typeUrl || typeof o.granter === "string");
  },
  isSDK(o: any): o is QueryGranterGrantsRequestSDKType {
    return o && (o.$typeUrl === QueryGranterGrantsRequest.typeUrl || typeof o.granter === "string");
  },
  isAmino(o: any): o is QueryGranterGrantsRequestAmino {
    return o && (o.$typeUrl === QueryGranterGrantsRequest.typeUrl || typeof o.granter === "string");
  },
  encode(message: QueryGranterGrantsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.granter !== "") {
      writer.uint32(10).string(message.granter);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryGranterGrantsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGranterGrantsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.granter = reader.string();
          break;
        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32(), useInterfaces);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryGranterGrantsRequest {
    const obj = createBaseQueryGranterGrantsRequest();
    if (isSet(object.granter)) obj.granter = String(object.granter);
    if (isSet(object.pagination)) obj.pagination = PageRequest.fromJSON(object.pagination);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryGranterGrantsRequest>): QueryGranterGrantsRequest {
    const message = createBaseQueryGranterGrantsRequest();
    message.granter = object.granter ?? "";
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    }
    return message;
  },
  fromSDK(object: QueryGranterGrantsRequestSDKType): QueryGranterGrantsRequest {
    return {
      granter: object?.granter,
      pagination: object.pagination ? PageRequest.fromSDK(object.pagination) : undefined
    };
  },
  toSDK(message: QueryGranterGrantsRequest): QueryGranterGrantsRequestSDKType {
    const obj: any = {};
    obj.granter = message.granter;
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toSDK(message.pagination) : undefined);
    return obj;
  },
  fromAmino(object: QueryGranterGrantsRequestAmino): QueryGranterGrantsRequest {
    const message = createBaseQueryGranterGrantsRequest();
    if (object.granter !== undefined && object.granter !== null) {
      message.granter = object.granter;
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryGranterGrantsRequest, useInterfaces: boolean = true): QueryGranterGrantsRequestAmino {
    const obj: any = {};
    obj.granter = message.granter === "" ? undefined : message.granter;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination, useInterfaces) : undefined;
    return obj;
  },
  fromProtoMsg(message: QueryGranterGrantsRequestProtoMsg, useInterfaces: boolean = true): QueryGranterGrantsRequest {
    return QueryGranterGrantsRequest.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryGranterGrantsRequest): Uint8Array {
    return QueryGranterGrantsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryGranterGrantsRequest): QueryGranterGrantsRequestProtoMsg {
    return {
      typeUrl: "/cosmos.authz.v1beta1.QueryGranterGrantsRequest",
      value: QueryGranterGrantsRequest.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(QueryGranterGrantsRequest.typeUrl)) {
      return;
    }
    PageRequest.registerTypeUrl();
  }
};
function createBaseQueryGranterGrantsResponse(): QueryGranterGrantsResponse {
  return {
    grants: [],
    pagination: undefined
  };
}
/**
 * QueryGranterGrantsResponse is the response type for the Query/GranterGrants RPC method.
 * @name QueryGranterGrantsResponse
 * @package cosmos.authz.v1beta1
 * @see proto type: cosmos.authz.v1beta1.QueryGranterGrantsResponse
 */
export const QueryGranterGrantsResponse = {
  typeUrl: "/cosmos.authz.v1beta1.QueryGranterGrantsResponse",
  aminoType: "cosmos-sdk/QueryGranterGrantsResponse",
  is(o: any): o is QueryGranterGrantsResponse {
    return o && (o.$typeUrl === QueryGranterGrantsResponse.typeUrl || Array.isArray(o.grants) && (!o.grants.length || GrantAuthorization.is(o.grants[0])));
  },
  isSDK(o: any): o is QueryGranterGrantsResponseSDKType {
    return o && (o.$typeUrl === QueryGranterGrantsResponse.typeUrl || Array.isArray(o.grants) && (!o.grants.length || GrantAuthorization.isSDK(o.grants[0])));
  },
  isAmino(o: any): o is QueryGranterGrantsResponseAmino {
    return o && (o.$typeUrl === QueryGranterGrantsResponse.typeUrl || Array.isArray(o.grants) && (!o.grants.length || GrantAuthorization.isAmino(o.grants[0])));
  },
  encode(message: QueryGranterGrantsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.grants) {
      GrantAuthorization.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryGranterGrantsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGranterGrantsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.grants.push(GrantAuthorization.decode(reader, reader.uint32(), useInterfaces));
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
  fromJSON(object: any): QueryGranterGrantsResponse {
    const obj = createBaseQueryGranterGrantsResponse();
    if (Array.isArray(object?.grants)) obj.grants = object.grants.map((e: any) => GrantAuthorization.fromJSON(e));
    if (isSet(object.pagination)) obj.pagination = PageResponse.fromJSON(object.pagination);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryGranterGrantsResponse>): QueryGranterGrantsResponse {
    const message = createBaseQueryGranterGrantsResponse();
    message.grants = object.grants?.map(e => GrantAuthorization.fromPartial(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    }
    return message;
  },
  fromSDK(object: QueryGranterGrantsResponseSDKType): QueryGranterGrantsResponse {
    return {
      grants: Array.isArray(object?.grants) ? object.grants.map((e: any) => GrantAuthorization.fromSDK(e)) : [],
      pagination: object.pagination ? PageResponse.fromSDK(object.pagination) : undefined
    };
  },
  toSDK(message: QueryGranterGrantsResponse): QueryGranterGrantsResponseSDKType {
    const obj: any = {};
    if (message.grants) {
      obj.grants = message.grants.map(e => e ? GrantAuthorization.toSDK(e) : undefined);
    } else {
      obj.grants = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toSDK(message.pagination) : undefined);
    return obj;
  },
  fromAmino(object: QueryGranterGrantsResponseAmino): QueryGranterGrantsResponse {
    const message = createBaseQueryGranterGrantsResponse();
    message.grants = object.grants?.map(e => GrantAuthorization.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryGranterGrantsResponse, useInterfaces: boolean = true): QueryGranterGrantsResponseAmino {
    const obj: any = {};
    if (message.grants) {
      obj.grants = message.grants.map(e => e ? GrantAuthorization.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.grants = message.grants;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination, useInterfaces) : undefined;
    return obj;
  },
  fromProtoMsg(message: QueryGranterGrantsResponseProtoMsg, useInterfaces: boolean = true): QueryGranterGrantsResponse {
    return QueryGranterGrantsResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryGranterGrantsResponse): Uint8Array {
    return QueryGranterGrantsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryGranterGrantsResponse): QueryGranterGrantsResponseProtoMsg {
    return {
      typeUrl: "/cosmos.authz.v1beta1.QueryGranterGrantsResponse",
      value: QueryGranterGrantsResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(QueryGranterGrantsResponse.typeUrl)) {
      return;
    }
    GrantAuthorization.registerTypeUrl();
    PageResponse.registerTypeUrl();
  }
};
function createBaseQueryGranteeGrantsRequest(): QueryGranteeGrantsRequest {
  return {
    grantee: "",
    pagination: undefined
  };
}
/**
 * QueryGranteeGrantsRequest is the request type for the Query/IssuedGrants RPC method.
 * @name QueryGranteeGrantsRequest
 * @package cosmos.authz.v1beta1
 * @see proto type: cosmos.authz.v1beta1.QueryGranteeGrantsRequest
 */
export const QueryGranteeGrantsRequest = {
  typeUrl: "/cosmos.authz.v1beta1.QueryGranteeGrantsRequest",
  aminoType: "cosmos-sdk/QueryGranteeGrantsRequest",
  is(o: any): o is QueryGranteeGrantsRequest {
    return o && (o.$typeUrl === QueryGranteeGrantsRequest.typeUrl || typeof o.grantee === "string");
  },
  isSDK(o: any): o is QueryGranteeGrantsRequestSDKType {
    return o && (o.$typeUrl === QueryGranteeGrantsRequest.typeUrl || typeof o.grantee === "string");
  },
  isAmino(o: any): o is QueryGranteeGrantsRequestAmino {
    return o && (o.$typeUrl === QueryGranteeGrantsRequest.typeUrl || typeof o.grantee === "string");
  },
  encode(message: QueryGranteeGrantsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.grantee !== "") {
      writer.uint32(10).string(message.grantee);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryGranteeGrantsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGranteeGrantsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.grantee = reader.string();
          break;
        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32(), useInterfaces);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryGranteeGrantsRequest {
    const obj = createBaseQueryGranteeGrantsRequest();
    if (isSet(object.grantee)) obj.grantee = String(object.grantee);
    if (isSet(object.pagination)) obj.pagination = PageRequest.fromJSON(object.pagination);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryGranteeGrantsRequest>): QueryGranteeGrantsRequest {
    const message = createBaseQueryGranteeGrantsRequest();
    message.grantee = object.grantee ?? "";
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    }
    return message;
  },
  fromSDK(object: QueryGranteeGrantsRequestSDKType): QueryGranteeGrantsRequest {
    return {
      grantee: object?.grantee,
      pagination: object.pagination ? PageRequest.fromSDK(object.pagination) : undefined
    };
  },
  toSDK(message: QueryGranteeGrantsRequest): QueryGranteeGrantsRequestSDKType {
    const obj: any = {};
    obj.grantee = message.grantee;
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toSDK(message.pagination) : undefined);
    return obj;
  },
  fromAmino(object: QueryGranteeGrantsRequestAmino): QueryGranteeGrantsRequest {
    const message = createBaseQueryGranteeGrantsRequest();
    if (object.grantee !== undefined && object.grantee !== null) {
      message.grantee = object.grantee;
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryGranteeGrantsRequest, useInterfaces: boolean = true): QueryGranteeGrantsRequestAmino {
    const obj: any = {};
    obj.grantee = message.grantee === "" ? undefined : message.grantee;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination, useInterfaces) : undefined;
    return obj;
  },
  fromProtoMsg(message: QueryGranteeGrantsRequestProtoMsg, useInterfaces: boolean = true): QueryGranteeGrantsRequest {
    return QueryGranteeGrantsRequest.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryGranteeGrantsRequest): Uint8Array {
    return QueryGranteeGrantsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryGranteeGrantsRequest): QueryGranteeGrantsRequestProtoMsg {
    return {
      typeUrl: "/cosmos.authz.v1beta1.QueryGranteeGrantsRequest",
      value: QueryGranteeGrantsRequest.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(QueryGranteeGrantsRequest.typeUrl)) {
      return;
    }
    PageRequest.registerTypeUrl();
  }
};
function createBaseQueryGranteeGrantsResponse(): QueryGranteeGrantsResponse {
  return {
    grants: [],
    pagination: undefined
  };
}
/**
 * QueryGranteeGrantsResponse is the response type for the Query/GranteeGrants RPC method.
 * @name QueryGranteeGrantsResponse
 * @package cosmos.authz.v1beta1
 * @see proto type: cosmos.authz.v1beta1.QueryGranteeGrantsResponse
 */
export const QueryGranteeGrantsResponse = {
  typeUrl: "/cosmos.authz.v1beta1.QueryGranteeGrantsResponse",
  aminoType: "cosmos-sdk/QueryGranteeGrantsResponse",
  is(o: any): o is QueryGranteeGrantsResponse {
    return o && (o.$typeUrl === QueryGranteeGrantsResponse.typeUrl || Array.isArray(o.grants) && (!o.grants.length || GrantAuthorization.is(o.grants[0])));
  },
  isSDK(o: any): o is QueryGranteeGrantsResponseSDKType {
    return o && (o.$typeUrl === QueryGranteeGrantsResponse.typeUrl || Array.isArray(o.grants) && (!o.grants.length || GrantAuthorization.isSDK(o.grants[0])));
  },
  isAmino(o: any): o is QueryGranteeGrantsResponseAmino {
    return o && (o.$typeUrl === QueryGranteeGrantsResponse.typeUrl || Array.isArray(o.grants) && (!o.grants.length || GrantAuthorization.isAmino(o.grants[0])));
  },
  encode(message: QueryGranteeGrantsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.grants) {
      GrantAuthorization.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryGranteeGrantsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGranteeGrantsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.grants.push(GrantAuthorization.decode(reader, reader.uint32(), useInterfaces));
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
  fromJSON(object: any): QueryGranteeGrantsResponse {
    const obj = createBaseQueryGranteeGrantsResponse();
    if (Array.isArray(object?.grants)) obj.grants = object.grants.map((e: any) => GrantAuthorization.fromJSON(e));
    if (isSet(object.pagination)) obj.pagination = PageResponse.fromJSON(object.pagination);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryGranteeGrantsResponse>): QueryGranteeGrantsResponse {
    const message = createBaseQueryGranteeGrantsResponse();
    message.grants = object.grants?.map(e => GrantAuthorization.fromPartial(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    }
    return message;
  },
  fromSDK(object: QueryGranteeGrantsResponseSDKType): QueryGranteeGrantsResponse {
    return {
      grants: Array.isArray(object?.grants) ? object.grants.map((e: any) => GrantAuthorization.fromSDK(e)) : [],
      pagination: object.pagination ? PageResponse.fromSDK(object.pagination) : undefined
    };
  },
  toSDK(message: QueryGranteeGrantsResponse): QueryGranteeGrantsResponseSDKType {
    const obj: any = {};
    if (message.grants) {
      obj.grants = message.grants.map(e => e ? GrantAuthorization.toSDK(e) : undefined);
    } else {
      obj.grants = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toSDK(message.pagination) : undefined);
    return obj;
  },
  fromAmino(object: QueryGranteeGrantsResponseAmino): QueryGranteeGrantsResponse {
    const message = createBaseQueryGranteeGrantsResponse();
    message.grants = object.grants?.map(e => GrantAuthorization.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryGranteeGrantsResponse, useInterfaces: boolean = true): QueryGranteeGrantsResponseAmino {
    const obj: any = {};
    if (message.grants) {
      obj.grants = message.grants.map(e => e ? GrantAuthorization.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.grants = message.grants;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination, useInterfaces) : undefined;
    return obj;
  },
  fromProtoMsg(message: QueryGranteeGrantsResponseProtoMsg, useInterfaces: boolean = true): QueryGranteeGrantsResponse {
    return QueryGranteeGrantsResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryGranteeGrantsResponse): Uint8Array {
    return QueryGranteeGrantsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryGranteeGrantsResponse): QueryGranteeGrantsResponseProtoMsg {
    return {
      typeUrl: "/cosmos.authz.v1beta1.QueryGranteeGrantsResponse",
      value: QueryGranteeGrantsResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(QueryGranteeGrantsResponse.typeUrl)) {
      return;
    }
    GrantAuthorization.registerTypeUrl();
    PageResponse.registerTypeUrl();
  }
};