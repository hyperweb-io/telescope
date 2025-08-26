import { PageRequest, PageRequestAmino, PageRequestSDKType, PageResponse, PageResponseAmino, PageResponseSDKType } from "../../base/query/v1beta1/pagination";
import { Grant, GrantAmino, GrantSDKType } from "./feegrant";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet, DeepPartial } from "../../../helpers";
import { GlobalDecoderRegistry } from "../../../registry";
export const protobufPackage = "cosmos.feegrant.v1beta1";
/**
 * QueryAllowanceRequest is the request type for the Query/Allowance RPC method.
 * @name QueryAllowanceRequest
 * @package cosmos.feegrant.v1beta1
 * @see proto type: cosmos.feegrant.v1beta1.QueryAllowanceRequest
 */
export interface QueryAllowanceRequest {
  /**
   * granter is the address of the user granting an allowance of their funds.
   */
  granter: string;
  /**
   * grantee is the address of the user being granted an allowance of another user's funds.
   */
  grantee: string;
}
export interface QueryAllowanceRequestProtoMsg {
  typeUrl: "/cosmos.feegrant.v1beta1.QueryAllowanceRequest";
  value: Uint8Array;
}
/**
 * QueryAllowanceRequest is the request type for the Query/Allowance RPC method.
 * @name QueryAllowanceRequestAmino
 * @package cosmos.feegrant.v1beta1
 * @see proto type: cosmos.feegrant.v1beta1.QueryAllowanceRequest
 */
export interface QueryAllowanceRequestAmino {
  /**
   * granter is the address of the user granting an allowance of their funds.
   */
  granter?: string;
  /**
   * grantee is the address of the user being granted an allowance of another user's funds.
   */
  grantee?: string;
}
/**
 * QueryAllowanceRequest is the request type for the Query/Allowance RPC method.
 * @name QueryAllowanceRequestSDKType
 * @package cosmos.feegrant.v1beta1
 * @see proto type: cosmos.feegrant.v1beta1.QueryAllowanceRequest
 */
export interface QueryAllowanceRequestSDKType {
  granter: string;
  grantee: string;
}
/**
 * QueryAllowanceResponse is the response type for the Query/Allowance RPC method.
 * @name QueryAllowanceResponse
 * @package cosmos.feegrant.v1beta1
 * @see proto type: cosmos.feegrant.v1beta1.QueryAllowanceResponse
 */
export interface QueryAllowanceResponse {
  /**
   * allowance is a allowance granted for grantee by granter.
   */
  allowance?: Grant;
}
export interface QueryAllowanceResponseProtoMsg {
  typeUrl: "/cosmos.feegrant.v1beta1.QueryAllowanceResponse";
  value: Uint8Array;
}
/**
 * QueryAllowanceResponse is the response type for the Query/Allowance RPC method.
 * @name QueryAllowanceResponseAmino
 * @package cosmos.feegrant.v1beta1
 * @see proto type: cosmos.feegrant.v1beta1.QueryAllowanceResponse
 */
export interface QueryAllowanceResponseAmino {
  /**
   * allowance is a allowance granted for grantee by granter.
   */
  allowance?: GrantAmino;
}
/**
 * QueryAllowanceResponse is the response type for the Query/Allowance RPC method.
 * @name QueryAllowanceResponseSDKType
 * @package cosmos.feegrant.v1beta1
 * @see proto type: cosmos.feegrant.v1beta1.QueryAllowanceResponse
 */
export interface QueryAllowanceResponseSDKType {
  allowance?: GrantSDKType;
}
/**
 * QueryAllowancesRequest is the request type for the Query/Allowances RPC method.
 * @name QueryAllowancesRequest
 * @package cosmos.feegrant.v1beta1
 * @see proto type: cosmos.feegrant.v1beta1.QueryAllowancesRequest
 */
export interface QueryAllowancesRequest {
  grantee: string;
  /**
   * pagination defines an pagination for the request.
   */
  pagination?: PageRequest;
}
export interface QueryAllowancesRequestProtoMsg {
  typeUrl: "/cosmos.feegrant.v1beta1.QueryAllowancesRequest";
  value: Uint8Array;
}
/**
 * QueryAllowancesRequest is the request type for the Query/Allowances RPC method.
 * @name QueryAllowancesRequestAmino
 * @package cosmos.feegrant.v1beta1
 * @see proto type: cosmos.feegrant.v1beta1.QueryAllowancesRequest
 */
export interface QueryAllowancesRequestAmino {
  grantee?: string;
  /**
   * pagination defines an pagination for the request.
   */
  pagination?: PageRequestAmino;
}
/**
 * QueryAllowancesRequest is the request type for the Query/Allowances RPC method.
 * @name QueryAllowancesRequestSDKType
 * @package cosmos.feegrant.v1beta1
 * @see proto type: cosmos.feegrant.v1beta1.QueryAllowancesRequest
 */
export interface QueryAllowancesRequestSDKType {
  grantee: string;
  pagination?: PageRequestSDKType;
}
/**
 * QueryAllowancesResponse is the response type for the Query/Allowances RPC method.
 * @name QueryAllowancesResponse
 * @package cosmos.feegrant.v1beta1
 * @see proto type: cosmos.feegrant.v1beta1.QueryAllowancesResponse
 */
export interface QueryAllowancesResponse {
  /**
   * allowances are allowance's granted for grantee by granter.
   */
  allowances: Grant[];
  /**
   * pagination defines an pagination for the response.
   */
  pagination?: PageResponse;
}
export interface QueryAllowancesResponseProtoMsg {
  typeUrl: "/cosmos.feegrant.v1beta1.QueryAllowancesResponse";
  value: Uint8Array;
}
/**
 * QueryAllowancesResponse is the response type for the Query/Allowances RPC method.
 * @name QueryAllowancesResponseAmino
 * @package cosmos.feegrant.v1beta1
 * @see proto type: cosmos.feegrant.v1beta1.QueryAllowancesResponse
 */
export interface QueryAllowancesResponseAmino {
  /**
   * allowances are allowance's granted for grantee by granter.
   */
  allowances?: GrantAmino[];
  /**
   * pagination defines an pagination for the response.
   */
  pagination?: PageResponseAmino;
}
/**
 * QueryAllowancesResponse is the response type for the Query/Allowances RPC method.
 * @name QueryAllowancesResponseSDKType
 * @package cosmos.feegrant.v1beta1
 * @see proto type: cosmos.feegrant.v1beta1.QueryAllowancesResponse
 */
export interface QueryAllowancesResponseSDKType {
  allowances: GrantSDKType[];
  pagination?: PageResponseSDKType;
}
/**
 * QueryAllowancesByGranterRequest is the request type for the Query/AllowancesByGranter RPC method.
 * @name QueryAllowancesByGranterRequest
 * @package cosmos.feegrant.v1beta1
 * @see proto type: cosmos.feegrant.v1beta1.QueryAllowancesByGranterRequest
 */
export interface QueryAllowancesByGranterRequest {
  granter: string;
  /**
   * pagination defines an pagination for the request.
   */
  pagination?: PageRequest;
}
export interface QueryAllowancesByGranterRequestProtoMsg {
  typeUrl: "/cosmos.feegrant.v1beta1.QueryAllowancesByGranterRequest";
  value: Uint8Array;
}
/**
 * QueryAllowancesByGranterRequest is the request type for the Query/AllowancesByGranter RPC method.
 * @name QueryAllowancesByGranterRequestAmino
 * @package cosmos.feegrant.v1beta1
 * @see proto type: cosmos.feegrant.v1beta1.QueryAllowancesByGranterRequest
 */
export interface QueryAllowancesByGranterRequestAmino {
  granter?: string;
  /**
   * pagination defines an pagination for the request.
   */
  pagination?: PageRequestAmino;
}
/**
 * QueryAllowancesByGranterRequest is the request type for the Query/AllowancesByGranter RPC method.
 * @name QueryAllowancesByGranterRequestSDKType
 * @package cosmos.feegrant.v1beta1
 * @see proto type: cosmos.feegrant.v1beta1.QueryAllowancesByGranterRequest
 */
export interface QueryAllowancesByGranterRequestSDKType {
  granter: string;
  pagination?: PageRequestSDKType;
}
/**
 * QueryAllowancesByGranterResponse is the response type for the Query/AllowancesByGranter RPC method.
 * @name QueryAllowancesByGranterResponse
 * @package cosmos.feegrant.v1beta1
 * @see proto type: cosmos.feegrant.v1beta1.QueryAllowancesByGranterResponse
 */
export interface QueryAllowancesByGranterResponse {
  /**
   * allowances that have been issued by the granter.
   */
  allowances: Grant[];
  /**
   * pagination defines an pagination for the response.
   */
  pagination?: PageResponse;
}
export interface QueryAllowancesByGranterResponseProtoMsg {
  typeUrl: "/cosmos.feegrant.v1beta1.QueryAllowancesByGranterResponse";
  value: Uint8Array;
}
/**
 * QueryAllowancesByGranterResponse is the response type for the Query/AllowancesByGranter RPC method.
 * @name QueryAllowancesByGranterResponseAmino
 * @package cosmos.feegrant.v1beta1
 * @see proto type: cosmos.feegrant.v1beta1.QueryAllowancesByGranterResponse
 */
export interface QueryAllowancesByGranterResponseAmino {
  /**
   * allowances that have been issued by the granter.
   */
  allowances?: GrantAmino[];
  /**
   * pagination defines an pagination for the response.
   */
  pagination?: PageResponseAmino;
}
/**
 * QueryAllowancesByGranterResponse is the response type for the Query/AllowancesByGranter RPC method.
 * @name QueryAllowancesByGranterResponseSDKType
 * @package cosmos.feegrant.v1beta1
 * @see proto type: cosmos.feegrant.v1beta1.QueryAllowancesByGranterResponse
 */
export interface QueryAllowancesByGranterResponseSDKType {
  allowances: GrantSDKType[];
  pagination?: PageResponseSDKType;
}
function createBaseQueryAllowanceRequest(): QueryAllowanceRequest {
  return {
    granter: "",
    grantee: ""
  };
}
/**
 * QueryAllowanceRequest is the request type for the Query/Allowance RPC method.
 * @name QueryAllowanceRequest
 * @package cosmos.feegrant.v1beta1
 * @see proto type: cosmos.feegrant.v1beta1.QueryAllowanceRequest
 */
export const QueryAllowanceRequest = {
  typeUrl: "/cosmos.feegrant.v1beta1.QueryAllowanceRequest",
  aminoType: "cosmos-sdk/QueryAllowanceRequest",
  is(o: any): o is QueryAllowanceRequest {
    return o && (o.$typeUrl === QueryAllowanceRequest.typeUrl || typeof o.granter === "string" && typeof o.grantee === "string");
  },
  isSDK(o: any): o is QueryAllowanceRequestSDKType {
    return o && (o.$typeUrl === QueryAllowanceRequest.typeUrl || typeof o.granter === "string" && typeof o.grantee === "string");
  },
  isAmino(o: any): o is QueryAllowanceRequestAmino {
    return o && (o.$typeUrl === QueryAllowanceRequest.typeUrl || typeof o.granter === "string" && typeof o.grantee === "string");
  },
  encode(message: QueryAllowanceRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.granter !== "") {
      writer.uint32(10).string(message.granter);
    }
    if (message.grantee !== "") {
      writer.uint32(18).string(message.grantee);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryAllowanceRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllowanceRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.granter = reader.string();
          break;
        case 2:
          message.grantee = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryAllowanceRequest {
    const obj = createBaseQueryAllowanceRequest();
    if (isSet(object.granter)) obj.granter = String(object.granter);
    if (isSet(object.grantee)) obj.grantee = String(object.grantee);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryAllowanceRequest>): QueryAllowanceRequest {
    const message = createBaseQueryAllowanceRequest();
    message.granter = object.granter ?? "";
    message.grantee = object.grantee ?? "";
    return message;
  },
  fromSDK(object: QueryAllowanceRequestSDKType): QueryAllowanceRequest {
    return {
      granter: object?.granter,
      grantee: object?.grantee
    };
  },
  toSDK(message: QueryAllowanceRequest): QueryAllowanceRequestSDKType {
    const obj: any = {};
    obj.granter = message.granter;
    obj.grantee = message.grantee;
    return obj;
  },
  fromAmino(object: QueryAllowanceRequestAmino): QueryAllowanceRequest {
    const message = createBaseQueryAllowanceRequest();
    if (object.granter !== undefined && object.granter !== null) {
      message.granter = object.granter;
    }
    if (object.grantee !== undefined && object.grantee !== null) {
      message.grantee = object.grantee;
    }
    return message;
  },
  toAmino(message: QueryAllowanceRequest, useInterfaces: boolean = true): QueryAllowanceRequestAmino {
    const obj: any = {};
    obj.granter = message.granter === "" ? undefined : message.granter;
    obj.grantee = message.grantee === "" ? undefined : message.grantee;
    return obj;
  },
  fromProtoMsg(message: QueryAllowanceRequestProtoMsg, useInterfaces: boolean = true): QueryAllowanceRequest {
    return QueryAllowanceRequest.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryAllowanceRequest): Uint8Array {
    return QueryAllowanceRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAllowanceRequest): QueryAllowanceRequestProtoMsg {
    return {
      typeUrl: "/cosmos.feegrant.v1beta1.QueryAllowanceRequest",
      value: QueryAllowanceRequest.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseQueryAllowanceResponse(): QueryAllowanceResponse {
  return {
    allowance: undefined
  };
}
/**
 * QueryAllowanceResponse is the response type for the Query/Allowance RPC method.
 * @name QueryAllowanceResponse
 * @package cosmos.feegrant.v1beta1
 * @see proto type: cosmos.feegrant.v1beta1.QueryAllowanceResponse
 */
export const QueryAllowanceResponse = {
  typeUrl: "/cosmos.feegrant.v1beta1.QueryAllowanceResponse",
  aminoType: "cosmos-sdk/QueryAllowanceResponse",
  is(o: any): o is QueryAllowanceResponse {
    return o && o.$typeUrl === QueryAllowanceResponse.typeUrl;
  },
  isSDK(o: any): o is QueryAllowanceResponseSDKType {
    return o && o.$typeUrl === QueryAllowanceResponse.typeUrl;
  },
  isAmino(o: any): o is QueryAllowanceResponseAmino {
    return o && o.$typeUrl === QueryAllowanceResponse.typeUrl;
  },
  encode(message: QueryAllowanceResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.allowance !== undefined) {
      Grant.encode(message.allowance, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryAllowanceResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllowanceResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.allowance = Grant.decode(reader, reader.uint32(), useInterfaces);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryAllowanceResponse {
    const obj = createBaseQueryAllowanceResponse();
    if (isSet(object.allowance)) obj.allowance = Grant.fromJSON(object.allowance);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryAllowanceResponse>): QueryAllowanceResponse {
    const message = createBaseQueryAllowanceResponse();
    if (object.allowance !== undefined && object.allowance !== null) {
      message.allowance = Grant.fromPartial(object.allowance);
    }
    return message;
  },
  fromSDK(object: QueryAllowanceResponseSDKType): QueryAllowanceResponse {
    return {
      allowance: object.allowance ? Grant.fromSDK(object.allowance) : undefined
    };
  },
  toSDK(message: QueryAllowanceResponse): QueryAllowanceResponseSDKType {
    const obj: any = {};
    message.allowance !== undefined && (obj.allowance = message.allowance ? Grant.toSDK(message.allowance) : undefined);
    return obj;
  },
  fromAmino(object: QueryAllowanceResponseAmino): QueryAllowanceResponse {
    const message = createBaseQueryAllowanceResponse();
    if (object.allowance !== undefined && object.allowance !== null) {
      message.allowance = Grant.fromAmino(object.allowance);
    }
    return message;
  },
  toAmino(message: QueryAllowanceResponse, useInterfaces: boolean = true): QueryAllowanceResponseAmino {
    const obj: any = {};
    obj.allowance = message.allowance ? Grant.toAmino(message.allowance, useInterfaces) : undefined;
    return obj;
  },
  fromProtoMsg(message: QueryAllowanceResponseProtoMsg, useInterfaces: boolean = true): QueryAllowanceResponse {
    return QueryAllowanceResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryAllowanceResponse): Uint8Array {
    return QueryAllowanceResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAllowanceResponse): QueryAllowanceResponseProtoMsg {
    return {
      typeUrl: "/cosmos.feegrant.v1beta1.QueryAllowanceResponse",
      value: QueryAllowanceResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(QueryAllowanceResponse.typeUrl)) {
      return;
    }
    Grant.registerTypeUrl();
  }
};
function createBaseQueryAllowancesRequest(): QueryAllowancesRequest {
  return {
    grantee: "",
    pagination: undefined
  };
}
/**
 * QueryAllowancesRequest is the request type for the Query/Allowances RPC method.
 * @name QueryAllowancesRequest
 * @package cosmos.feegrant.v1beta1
 * @see proto type: cosmos.feegrant.v1beta1.QueryAllowancesRequest
 */
export const QueryAllowancesRequest = {
  typeUrl: "/cosmos.feegrant.v1beta1.QueryAllowancesRequest",
  aminoType: "cosmos-sdk/QueryAllowancesRequest",
  is(o: any): o is QueryAllowancesRequest {
    return o && (o.$typeUrl === QueryAllowancesRequest.typeUrl || typeof o.grantee === "string");
  },
  isSDK(o: any): o is QueryAllowancesRequestSDKType {
    return o && (o.$typeUrl === QueryAllowancesRequest.typeUrl || typeof o.grantee === "string");
  },
  isAmino(o: any): o is QueryAllowancesRequestAmino {
    return o && (o.$typeUrl === QueryAllowancesRequest.typeUrl || typeof o.grantee === "string");
  },
  encode(message: QueryAllowancesRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.grantee !== "") {
      writer.uint32(10).string(message.grantee);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryAllowancesRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllowancesRequest();
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
  fromJSON(object: any): QueryAllowancesRequest {
    const obj = createBaseQueryAllowancesRequest();
    if (isSet(object.grantee)) obj.grantee = String(object.grantee);
    if (isSet(object.pagination)) obj.pagination = PageRequest.fromJSON(object.pagination);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryAllowancesRequest>): QueryAllowancesRequest {
    const message = createBaseQueryAllowancesRequest();
    message.grantee = object.grantee ?? "";
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    }
    return message;
  },
  fromSDK(object: QueryAllowancesRequestSDKType): QueryAllowancesRequest {
    return {
      grantee: object?.grantee,
      pagination: object.pagination ? PageRequest.fromSDK(object.pagination) : undefined
    };
  },
  toSDK(message: QueryAllowancesRequest): QueryAllowancesRequestSDKType {
    const obj: any = {};
    obj.grantee = message.grantee;
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toSDK(message.pagination) : undefined);
    return obj;
  },
  fromAmino(object: QueryAllowancesRequestAmino): QueryAllowancesRequest {
    const message = createBaseQueryAllowancesRequest();
    if (object.grantee !== undefined && object.grantee !== null) {
      message.grantee = object.grantee;
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllowancesRequest, useInterfaces: boolean = true): QueryAllowancesRequestAmino {
    const obj: any = {};
    obj.grantee = message.grantee === "" ? undefined : message.grantee;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination, useInterfaces) : undefined;
    return obj;
  },
  fromProtoMsg(message: QueryAllowancesRequestProtoMsg, useInterfaces: boolean = true): QueryAllowancesRequest {
    return QueryAllowancesRequest.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryAllowancesRequest): Uint8Array {
    return QueryAllowancesRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAllowancesRequest): QueryAllowancesRequestProtoMsg {
    return {
      typeUrl: "/cosmos.feegrant.v1beta1.QueryAllowancesRequest",
      value: QueryAllowancesRequest.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(QueryAllowancesRequest.typeUrl)) {
      return;
    }
    PageRequest.registerTypeUrl();
  }
};
function createBaseQueryAllowancesResponse(): QueryAllowancesResponse {
  return {
    allowances: [],
    pagination: undefined
  };
}
/**
 * QueryAllowancesResponse is the response type for the Query/Allowances RPC method.
 * @name QueryAllowancesResponse
 * @package cosmos.feegrant.v1beta1
 * @see proto type: cosmos.feegrant.v1beta1.QueryAllowancesResponse
 */
export const QueryAllowancesResponse = {
  typeUrl: "/cosmos.feegrant.v1beta1.QueryAllowancesResponse",
  aminoType: "cosmos-sdk/QueryAllowancesResponse",
  is(o: any): o is QueryAllowancesResponse {
    return o && (o.$typeUrl === QueryAllowancesResponse.typeUrl || Array.isArray(o.allowances) && (!o.allowances.length || Grant.is(o.allowances[0])));
  },
  isSDK(o: any): o is QueryAllowancesResponseSDKType {
    return o && (o.$typeUrl === QueryAllowancesResponse.typeUrl || Array.isArray(o.allowances) && (!o.allowances.length || Grant.isSDK(o.allowances[0])));
  },
  isAmino(o: any): o is QueryAllowancesResponseAmino {
    return o && (o.$typeUrl === QueryAllowancesResponse.typeUrl || Array.isArray(o.allowances) && (!o.allowances.length || Grant.isAmino(o.allowances[0])));
  },
  encode(message: QueryAllowancesResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.allowances) {
      Grant.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryAllowancesResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllowancesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.allowances.push(Grant.decode(reader, reader.uint32(), useInterfaces));
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
  fromJSON(object: any): QueryAllowancesResponse {
    const obj = createBaseQueryAllowancesResponse();
    if (Array.isArray(object?.allowances)) obj.allowances = object.allowances.map((e: any) => Grant.fromJSON(e));
    if (isSet(object.pagination)) obj.pagination = PageResponse.fromJSON(object.pagination);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryAllowancesResponse>): QueryAllowancesResponse {
    const message = createBaseQueryAllowancesResponse();
    message.allowances = object.allowances?.map(e => Grant.fromPartial(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    }
    return message;
  },
  fromSDK(object: QueryAllowancesResponseSDKType): QueryAllowancesResponse {
    return {
      allowances: Array.isArray(object?.allowances) ? object.allowances.map((e: any) => Grant.fromSDK(e)) : [],
      pagination: object.pagination ? PageResponse.fromSDK(object.pagination) : undefined
    };
  },
  toSDK(message: QueryAllowancesResponse): QueryAllowancesResponseSDKType {
    const obj: any = {};
    if (message.allowances) {
      obj.allowances = message.allowances.map(e => e ? Grant.toSDK(e) : undefined);
    } else {
      obj.allowances = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toSDK(message.pagination) : undefined);
    return obj;
  },
  fromAmino(object: QueryAllowancesResponseAmino): QueryAllowancesResponse {
    const message = createBaseQueryAllowancesResponse();
    message.allowances = object.allowances?.map(e => Grant.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllowancesResponse, useInterfaces: boolean = true): QueryAllowancesResponseAmino {
    const obj: any = {};
    if (message.allowances) {
      obj.allowances = message.allowances.map(e => e ? Grant.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.allowances = message.allowances;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination, useInterfaces) : undefined;
    return obj;
  },
  fromProtoMsg(message: QueryAllowancesResponseProtoMsg, useInterfaces: boolean = true): QueryAllowancesResponse {
    return QueryAllowancesResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryAllowancesResponse): Uint8Array {
    return QueryAllowancesResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAllowancesResponse): QueryAllowancesResponseProtoMsg {
    return {
      typeUrl: "/cosmos.feegrant.v1beta1.QueryAllowancesResponse",
      value: QueryAllowancesResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(QueryAllowancesResponse.typeUrl)) {
      return;
    }
    Grant.registerTypeUrl();
    PageResponse.registerTypeUrl();
  }
};
function createBaseQueryAllowancesByGranterRequest(): QueryAllowancesByGranterRequest {
  return {
    granter: "",
    pagination: undefined
  };
}
/**
 * QueryAllowancesByGranterRequest is the request type for the Query/AllowancesByGranter RPC method.
 * @name QueryAllowancesByGranterRequest
 * @package cosmos.feegrant.v1beta1
 * @see proto type: cosmos.feegrant.v1beta1.QueryAllowancesByGranterRequest
 */
export const QueryAllowancesByGranterRequest = {
  typeUrl: "/cosmos.feegrant.v1beta1.QueryAllowancesByGranterRequest",
  aminoType: "cosmos-sdk/QueryAllowancesByGranterRequest",
  is(o: any): o is QueryAllowancesByGranterRequest {
    return o && (o.$typeUrl === QueryAllowancesByGranterRequest.typeUrl || typeof o.granter === "string");
  },
  isSDK(o: any): o is QueryAllowancesByGranterRequestSDKType {
    return o && (o.$typeUrl === QueryAllowancesByGranterRequest.typeUrl || typeof o.granter === "string");
  },
  isAmino(o: any): o is QueryAllowancesByGranterRequestAmino {
    return o && (o.$typeUrl === QueryAllowancesByGranterRequest.typeUrl || typeof o.granter === "string");
  },
  encode(message: QueryAllowancesByGranterRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.granter !== "") {
      writer.uint32(10).string(message.granter);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryAllowancesByGranterRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllowancesByGranterRequest();
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
  fromJSON(object: any): QueryAllowancesByGranterRequest {
    const obj = createBaseQueryAllowancesByGranterRequest();
    if (isSet(object.granter)) obj.granter = String(object.granter);
    if (isSet(object.pagination)) obj.pagination = PageRequest.fromJSON(object.pagination);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryAllowancesByGranterRequest>): QueryAllowancesByGranterRequest {
    const message = createBaseQueryAllowancesByGranterRequest();
    message.granter = object.granter ?? "";
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    }
    return message;
  },
  fromSDK(object: QueryAllowancesByGranterRequestSDKType): QueryAllowancesByGranterRequest {
    return {
      granter: object?.granter,
      pagination: object.pagination ? PageRequest.fromSDK(object.pagination) : undefined
    };
  },
  toSDK(message: QueryAllowancesByGranterRequest): QueryAllowancesByGranterRequestSDKType {
    const obj: any = {};
    obj.granter = message.granter;
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toSDK(message.pagination) : undefined);
    return obj;
  },
  fromAmino(object: QueryAllowancesByGranterRequestAmino): QueryAllowancesByGranterRequest {
    const message = createBaseQueryAllowancesByGranterRequest();
    if (object.granter !== undefined && object.granter !== null) {
      message.granter = object.granter;
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllowancesByGranterRequest, useInterfaces: boolean = true): QueryAllowancesByGranterRequestAmino {
    const obj: any = {};
    obj.granter = message.granter === "" ? undefined : message.granter;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination, useInterfaces) : undefined;
    return obj;
  },
  fromProtoMsg(message: QueryAllowancesByGranterRequestProtoMsg, useInterfaces: boolean = true): QueryAllowancesByGranterRequest {
    return QueryAllowancesByGranterRequest.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryAllowancesByGranterRequest): Uint8Array {
    return QueryAllowancesByGranterRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAllowancesByGranterRequest): QueryAllowancesByGranterRequestProtoMsg {
    return {
      typeUrl: "/cosmos.feegrant.v1beta1.QueryAllowancesByGranterRequest",
      value: QueryAllowancesByGranterRequest.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(QueryAllowancesByGranterRequest.typeUrl)) {
      return;
    }
    PageRequest.registerTypeUrl();
  }
};
function createBaseQueryAllowancesByGranterResponse(): QueryAllowancesByGranterResponse {
  return {
    allowances: [],
    pagination: undefined
  };
}
/**
 * QueryAllowancesByGranterResponse is the response type for the Query/AllowancesByGranter RPC method.
 * @name QueryAllowancesByGranterResponse
 * @package cosmos.feegrant.v1beta1
 * @see proto type: cosmos.feegrant.v1beta1.QueryAllowancesByGranterResponse
 */
export const QueryAllowancesByGranterResponse = {
  typeUrl: "/cosmos.feegrant.v1beta1.QueryAllowancesByGranterResponse",
  aminoType: "cosmos-sdk/QueryAllowancesByGranterResponse",
  is(o: any): o is QueryAllowancesByGranterResponse {
    return o && (o.$typeUrl === QueryAllowancesByGranterResponse.typeUrl || Array.isArray(o.allowances) && (!o.allowances.length || Grant.is(o.allowances[0])));
  },
  isSDK(o: any): o is QueryAllowancesByGranterResponseSDKType {
    return o && (o.$typeUrl === QueryAllowancesByGranterResponse.typeUrl || Array.isArray(o.allowances) && (!o.allowances.length || Grant.isSDK(o.allowances[0])));
  },
  isAmino(o: any): o is QueryAllowancesByGranterResponseAmino {
    return o && (o.$typeUrl === QueryAllowancesByGranterResponse.typeUrl || Array.isArray(o.allowances) && (!o.allowances.length || Grant.isAmino(o.allowances[0])));
  },
  encode(message: QueryAllowancesByGranterResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.allowances) {
      Grant.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryAllowancesByGranterResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllowancesByGranterResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.allowances.push(Grant.decode(reader, reader.uint32(), useInterfaces));
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
  fromJSON(object: any): QueryAllowancesByGranterResponse {
    const obj = createBaseQueryAllowancesByGranterResponse();
    if (Array.isArray(object?.allowances)) obj.allowances = object.allowances.map((e: any) => Grant.fromJSON(e));
    if (isSet(object.pagination)) obj.pagination = PageResponse.fromJSON(object.pagination);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryAllowancesByGranterResponse>): QueryAllowancesByGranterResponse {
    const message = createBaseQueryAllowancesByGranterResponse();
    message.allowances = object.allowances?.map(e => Grant.fromPartial(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    }
    return message;
  },
  fromSDK(object: QueryAllowancesByGranterResponseSDKType): QueryAllowancesByGranterResponse {
    return {
      allowances: Array.isArray(object?.allowances) ? object.allowances.map((e: any) => Grant.fromSDK(e)) : [],
      pagination: object.pagination ? PageResponse.fromSDK(object.pagination) : undefined
    };
  },
  toSDK(message: QueryAllowancesByGranterResponse): QueryAllowancesByGranterResponseSDKType {
    const obj: any = {};
    if (message.allowances) {
      obj.allowances = message.allowances.map(e => e ? Grant.toSDK(e) : undefined);
    } else {
      obj.allowances = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toSDK(message.pagination) : undefined);
    return obj;
  },
  fromAmino(object: QueryAllowancesByGranterResponseAmino): QueryAllowancesByGranterResponse {
    const message = createBaseQueryAllowancesByGranterResponse();
    message.allowances = object.allowances?.map(e => Grant.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllowancesByGranterResponse, useInterfaces: boolean = true): QueryAllowancesByGranterResponseAmino {
    const obj: any = {};
    if (message.allowances) {
      obj.allowances = message.allowances.map(e => e ? Grant.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.allowances = message.allowances;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination, useInterfaces) : undefined;
    return obj;
  },
  fromProtoMsg(message: QueryAllowancesByGranterResponseProtoMsg, useInterfaces: boolean = true): QueryAllowancesByGranterResponse {
    return QueryAllowancesByGranterResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryAllowancesByGranterResponse): Uint8Array {
    return QueryAllowancesByGranterResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAllowancesByGranterResponse): QueryAllowancesByGranterResponseProtoMsg {
    return {
      typeUrl: "/cosmos.feegrant.v1beta1.QueryAllowancesByGranterResponse",
      value: QueryAllowancesByGranterResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(QueryAllowancesByGranterResponse.typeUrl)) {
      return;
    }
    Grant.registerTypeUrl();
    PageResponse.registerTypeUrl();
  }
};