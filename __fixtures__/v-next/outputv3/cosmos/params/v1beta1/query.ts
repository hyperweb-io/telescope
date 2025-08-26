import { ParamChange, ParamChangeAmino, ParamChangeSDKType } from "./params";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet, DeepPartial } from "../../../helpers";
import { GlobalDecoderRegistry } from "../../../registry";
export const protobufPackage = "cosmos.params.v1beta1";
/**
 * QueryParamsRequest is request type for the Query/Params RPC method.
 * @name QueryParamsRequest
 * @package cosmos.params.v1beta1
 * @see proto type: cosmos.params.v1beta1.QueryParamsRequest
 */
export interface QueryParamsRequest {
  /**
   * subspace defines the module to query the parameter for.
   */
  subspace: string;
  /**
   * key defines the key of the parameter in the subspace.
   */
  key: string;
}
export interface QueryParamsRequestProtoMsg {
  typeUrl: "/cosmos.params.v1beta1.QueryParamsRequest";
  value: Uint8Array;
}
/**
 * QueryParamsRequest is request type for the Query/Params RPC method.
 * @name QueryParamsRequestAmino
 * @package cosmos.params.v1beta1
 * @see proto type: cosmos.params.v1beta1.QueryParamsRequest
 */
export interface QueryParamsRequestAmino {
  /**
   * subspace defines the module to query the parameter for.
   */
  subspace?: string;
  /**
   * key defines the key of the parameter in the subspace.
   */
  key?: string;
}
/**
 * QueryParamsRequest is request type for the Query/Params RPC method.
 * @name QueryParamsRequestSDKType
 * @package cosmos.params.v1beta1
 * @see proto type: cosmos.params.v1beta1.QueryParamsRequest
 */
export interface QueryParamsRequestSDKType {
  subspace: string;
  key: string;
}
/**
 * QueryParamsResponse is response type for the Query/Params RPC method.
 * @name QueryParamsResponse
 * @package cosmos.params.v1beta1
 * @see proto type: cosmos.params.v1beta1.QueryParamsResponse
 */
export interface QueryParamsResponse {
  /**
   * param defines the queried parameter.
   */
  param: ParamChange;
}
export interface QueryParamsResponseProtoMsg {
  typeUrl: "/cosmos.params.v1beta1.QueryParamsResponse";
  value: Uint8Array;
}
/**
 * QueryParamsResponse is response type for the Query/Params RPC method.
 * @name QueryParamsResponseAmino
 * @package cosmos.params.v1beta1
 * @see proto type: cosmos.params.v1beta1.QueryParamsResponse
 */
export interface QueryParamsResponseAmino {
  /**
   * param defines the queried parameter.
   */
  param?: ParamChangeAmino;
}
/**
 * QueryParamsResponse is response type for the Query/Params RPC method.
 * @name QueryParamsResponseSDKType
 * @package cosmos.params.v1beta1
 * @see proto type: cosmos.params.v1beta1.QueryParamsResponse
 */
export interface QueryParamsResponseSDKType {
  param: ParamChangeSDKType;
}
/**
 * QuerySubspacesRequest defines a request type for querying for all registered
 * subspaces and all keys for a subspace.
 * @name QuerySubspacesRequest
 * @package cosmos.params.v1beta1
 * @see proto type: cosmos.params.v1beta1.QuerySubspacesRequest
 */
export interface QuerySubspacesRequest {}
export interface QuerySubspacesRequestProtoMsg {
  typeUrl: "/cosmos.params.v1beta1.QuerySubspacesRequest";
  value: Uint8Array;
}
/**
 * QuerySubspacesRequest defines a request type for querying for all registered
 * subspaces and all keys for a subspace.
 * @name QuerySubspacesRequestAmino
 * @package cosmos.params.v1beta1
 * @see proto type: cosmos.params.v1beta1.QuerySubspacesRequest
 */
export interface QuerySubspacesRequestAmino {}
/**
 * QuerySubspacesRequest defines a request type for querying for all registered
 * subspaces and all keys for a subspace.
 * @name QuerySubspacesRequestSDKType
 * @package cosmos.params.v1beta1
 * @see proto type: cosmos.params.v1beta1.QuerySubspacesRequest
 */
export interface QuerySubspacesRequestSDKType {}
/**
 * QuerySubspacesResponse defines the response types for querying for all
 * registered subspaces and all keys for a subspace.
 * @name QuerySubspacesResponse
 * @package cosmos.params.v1beta1
 * @see proto type: cosmos.params.v1beta1.QuerySubspacesResponse
 */
export interface QuerySubspacesResponse {
  subspaces: Subspace[];
}
export interface QuerySubspacesResponseProtoMsg {
  typeUrl: "/cosmos.params.v1beta1.QuerySubspacesResponse";
  value: Uint8Array;
}
/**
 * QuerySubspacesResponse defines the response types for querying for all
 * registered subspaces and all keys for a subspace.
 * @name QuerySubspacesResponseAmino
 * @package cosmos.params.v1beta1
 * @see proto type: cosmos.params.v1beta1.QuerySubspacesResponse
 */
export interface QuerySubspacesResponseAmino {
  subspaces?: SubspaceAmino[];
}
/**
 * QuerySubspacesResponse defines the response types for querying for all
 * registered subspaces and all keys for a subspace.
 * @name QuerySubspacesResponseSDKType
 * @package cosmos.params.v1beta1
 * @see proto type: cosmos.params.v1beta1.QuerySubspacesResponse
 */
export interface QuerySubspacesResponseSDKType {
  subspaces: SubspaceSDKType[];
}
/**
 * Subspace defines a parameter subspace name and all the keys that exist for
 * the subspace.
 * @name Subspace
 * @package cosmos.params.v1beta1
 * @see proto type: cosmos.params.v1beta1.Subspace
 */
export interface Subspace {
  subspace: string;
  keys: string[];
}
export interface SubspaceProtoMsg {
  typeUrl: "/cosmos.params.v1beta1.Subspace";
  value: Uint8Array;
}
/**
 * Subspace defines a parameter subspace name and all the keys that exist for
 * the subspace.
 * @name SubspaceAmino
 * @package cosmos.params.v1beta1
 * @see proto type: cosmos.params.v1beta1.Subspace
 */
export interface SubspaceAmino {
  subspace?: string;
  keys?: string[];
}
/**
 * Subspace defines a parameter subspace name and all the keys that exist for
 * the subspace.
 * @name SubspaceSDKType
 * @package cosmos.params.v1beta1
 * @see proto type: cosmos.params.v1beta1.Subspace
 */
export interface SubspaceSDKType {
  subspace: string;
  keys: string[];
}
function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {
    subspace: "",
    key: ""
  };
}
/**
 * QueryParamsRequest is request type for the Query/Params RPC method.
 * @name QueryParamsRequest
 * @package cosmos.params.v1beta1
 * @see proto type: cosmos.params.v1beta1.QueryParamsRequest
 */
export const QueryParamsRequest = {
  typeUrl: "/cosmos.params.v1beta1.QueryParamsRequest",
  aminoType: "cosmos-sdk/QueryParamsRequest",
  is(o: any): o is QueryParamsRequest {
    return o && (o.$typeUrl === QueryParamsRequest.typeUrl || typeof o.subspace === "string" && typeof o.key === "string");
  },
  isSDK(o: any): o is QueryParamsRequestSDKType {
    return o && (o.$typeUrl === QueryParamsRequest.typeUrl || typeof o.subspace === "string" && typeof o.key === "string");
  },
  isAmino(o: any): o is QueryParamsRequestAmino {
    return o && (o.$typeUrl === QueryParamsRequest.typeUrl || typeof o.subspace === "string" && typeof o.key === "string");
  },
  encode(message: QueryParamsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.subspace !== "") {
      writer.uint32(10).string(message.subspace);
    }
    if (message.key !== "") {
      writer.uint32(18).string(message.key);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryParamsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.subspace = reader.string();
          break;
        case 2:
          message.key = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryParamsRequest {
    const obj = createBaseQueryParamsRequest();
    if (isSet(object.subspace)) obj.subspace = String(object.subspace);
    if (isSet(object.key)) obj.key = String(object.key);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryParamsRequest>): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    message.subspace = object.subspace ?? "";
    message.key = object.key ?? "";
    return message;
  },
  fromSDK(object: QueryParamsRequestSDKType): QueryParamsRequest {
    return {
      subspace: object?.subspace,
      key: object?.key
    };
  },
  toSDK(message: QueryParamsRequest): QueryParamsRequestSDKType {
    const obj: any = {};
    obj.subspace = message.subspace;
    obj.key = message.key;
    return obj;
  },
  fromAmino(object: QueryParamsRequestAmino): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    if (object.subspace !== undefined && object.subspace !== null) {
      message.subspace = object.subspace;
    }
    if (object.key !== undefined && object.key !== null) {
      message.key = object.key;
    }
    return message;
  },
  toAmino(message: QueryParamsRequest, useInterfaces: boolean = true): QueryParamsRequestAmino {
    const obj: any = {};
    obj.subspace = message.subspace === "" ? undefined : message.subspace;
    obj.key = message.key === "" ? undefined : message.key;
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
      typeUrl: "/cosmos.params.v1beta1.QueryParamsRequest",
      value: QueryParamsRequest.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseQueryParamsResponse(): QueryParamsResponse {
  return {
    param: ParamChange.fromPartial({})
  };
}
/**
 * QueryParamsResponse is response type for the Query/Params RPC method.
 * @name QueryParamsResponse
 * @package cosmos.params.v1beta1
 * @see proto type: cosmos.params.v1beta1.QueryParamsResponse
 */
export const QueryParamsResponse = {
  typeUrl: "/cosmos.params.v1beta1.QueryParamsResponse",
  aminoType: "cosmos-sdk/QueryParamsResponse",
  is(o: any): o is QueryParamsResponse {
    return o && (o.$typeUrl === QueryParamsResponse.typeUrl || ParamChange.is(o.param));
  },
  isSDK(o: any): o is QueryParamsResponseSDKType {
    return o && (o.$typeUrl === QueryParamsResponse.typeUrl || ParamChange.isSDK(o.param));
  },
  isAmino(o: any): o is QueryParamsResponseAmino {
    return o && (o.$typeUrl === QueryParamsResponse.typeUrl || ParamChange.isAmino(o.param));
  },
  encode(message: QueryParamsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.param !== undefined) {
      ParamChange.encode(message.param, writer.uint32(10).fork()).ldelim();
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
          message.param = ParamChange.decode(reader, reader.uint32(), useInterfaces);
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
    if (isSet(object.param)) obj.param = ParamChange.fromJSON(object.param);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryParamsResponse>): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    if (object.param !== undefined && object.param !== null) {
      message.param = ParamChange.fromPartial(object.param);
    }
    return message;
  },
  fromSDK(object: QueryParamsResponseSDKType): QueryParamsResponse {
    return {
      param: object.param ? ParamChange.fromSDK(object.param) : undefined
    };
  },
  toSDK(message: QueryParamsResponse): QueryParamsResponseSDKType {
    const obj: any = {};
    message.param !== undefined && (obj.param = message.param ? ParamChange.toSDK(message.param) : undefined);
    return obj;
  },
  fromAmino(object: QueryParamsResponseAmino): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    if (object.param !== undefined && object.param !== null) {
      message.param = ParamChange.fromAmino(object.param);
    }
    return message;
  },
  toAmino(message: QueryParamsResponse, useInterfaces: boolean = true): QueryParamsResponseAmino {
    const obj: any = {};
    obj.param = message.param ? ParamChange.toAmino(message.param, useInterfaces) : undefined;
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
      typeUrl: "/cosmos.params.v1beta1.QueryParamsResponse",
      value: QueryParamsResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(QueryParamsResponse.typeUrl)) {
      return;
    }
    ParamChange.registerTypeUrl();
  }
};
function createBaseQuerySubspacesRequest(): QuerySubspacesRequest {
  return {};
}
/**
 * QuerySubspacesRequest defines a request type for querying for all registered
 * subspaces and all keys for a subspace.
 * @name QuerySubspacesRequest
 * @package cosmos.params.v1beta1
 * @see proto type: cosmos.params.v1beta1.QuerySubspacesRequest
 */
export const QuerySubspacesRequest = {
  typeUrl: "/cosmos.params.v1beta1.QuerySubspacesRequest",
  aminoType: "cosmos-sdk/QuerySubspacesRequest",
  is(o: any): o is QuerySubspacesRequest {
    return o && o.$typeUrl === QuerySubspacesRequest.typeUrl;
  },
  isSDK(o: any): o is QuerySubspacesRequestSDKType {
    return o && o.$typeUrl === QuerySubspacesRequest.typeUrl;
  },
  isAmino(o: any): o is QuerySubspacesRequestAmino {
    return o && o.$typeUrl === QuerySubspacesRequest.typeUrl;
  },
  encode(_: QuerySubspacesRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QuerySubspacesRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySubspacesRequest();
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
  fromJSON(_: any): QuerySubspacesRequest {
    const obj = createBaseQuerySubspacesRequest();
    return obj;
  },
  fromPartial(_: DeepPartial<QuerySubspacesRequest>): QuerySubspacesRequest {
    const message = createBaseQuerySubspacesRequest();
    return message;
  },
  fromSDK(_: QuerySubspacesRequestSDKType): QuerySubspacesRequest {
    return {};
  },
  toSDK(_: QuerySubspacesRequest): QuerySubspacesRequestSDKType {
    const obj: any = {};
    return obj;
  },
  fromAmino(_: QuerySubspacesRequestAmino): QuerySubspacesRequest {
    const message = createBaseQuerySubspacesRequest();
    return message;
  },
  toAmino(_: QuerySubspacesRequest, useInterfaces: boolean = true): QuerySubspacesRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromProtoMsg(message: QuerySubspacesRequestProtoMsg, useInterfaces: boolean = true): QuerySubspacesRequest {
    return QuerySubspacesRequest.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QuerySubspacesRequest): Uint8Array {
    return QuerySubspacesRequest.encode(message).finish();
  },
  toProtoMsg(message: QuerySubspacesRequest): QuerySubspacesRequestProtoMsg {
    return {
      typeUrl: "/cosmos.params.v1beta1.QuerySubspacesRequest",
      value: QuerySubspacesRequest.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseQuerySubspacesResponse(): QuerySubspacesResponse {
  return {
    subspaces: []
  };
}
/**
 * QuerySubspacesResponse defines the response types for querying for all
 * registered subspaces and all keys for a subspace.
 * @name QuerySubspacesResponse
 * @package cosmos.params.v1beta1
 * @see proto type: cosmos.params.v1beta1.QuerySubspacesResponse
 */
export const QuerySubspacesResponse = {
  typeUrl: "/cosmos.params.v1beta1.QuerySubspacesResponse",
  aminoType: "cosmos-sdk/QuerySubspacesResponse",
  is(o: any): o is QuerySubspacesResponse {
    return o && (o.$typeUrl === QuerySubspacesResponse.typeUrl || Array.isArray(o.subspaces) && (!o.subspaces.length || Subspace.is(o.subspaces[0])));
  },
  isSDK(o: any): o is QuerySubspacesResponseSDKType {
    return o && (o.$typeUrl === QuerySubspacesResponse.typeUrl || Array.isArray(o.subspaces) && (!o.subspaces.length || Subspace.isSDK(o.subspaces[0])));
  },
  isAmino(o: any): o is QuerySubspacesResponseAmino {
    return o && (o.$typeUrl === QuerySubspacesResponse.typeUrl || Array.isArray(o.subspaces) && (!o.subspaces.length || Subspace.isAmino(o.subspaces[0])));
  },
  encode(message: QuerySubspacesResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.subspaces) {
      Subspace.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QuerySubspacesResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySubspacesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.subspaces.push(Subspace.decode(reader, reader.uint32(), useInterfaces));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QuerySubspacesResponse {
    const obj = createBaseQuerySubspacesResponse();
    if (Array.isArray(object?.subspaces)) obj.subspaces = object.subspaces.map((e: any) => Subspace.fromJSON(e));
    return obj;
  },
  fromPartial(object: DeepPartial<QuerySubspacesResponse>): QuerySubspacesResponse {
    const message = createBaseQuerySubspacesResponse();
    message.subspaces = object.subspaces?.map(e => Subspace.fromPartial(e)) || [];
    return message;
  },
  fromSDK(object: QuerySubspacesResponseSDKType): QuerySubspacesResponse {
    return {
      subspaces: Array.isArray(object?.subspaces) ? object.subspaces.map((e: any) => Subspace.fromSDK(e)) : []
    };
  },
  toSDK(message: QuerySubspacesResponse): QuerySubspacesResponseSDKType {
    const obj: any = {};
    if (message.subspaces) {
      obj.subspaces = message.subspaces.map(e => e ? Subspace.toSDK(e) : undefined);
    } else {
      obj.subspaces = [];
    }
    return obj;
  },
  fromAmino(object: QuerySubspacesResponseAmino): QuerySubspacesResponse {
    const message = createBaseQuerySubspacesResponse();
    message.subspaces = object.subspaces?.map(e => Subspace.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: QuerySubspacesResponse, useInterfaces: boolean = true): QuerySubspacesResponseAmino {
    const obj: any = {};
    if (message.subspaces) {
      obj.subspaces = message.subspaces.map(e => e ? Subspace.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.subspaces = message.subspaces;
    }
    return obj;
  },
  fromProtoMsg(message: QuerySubspacesResponseProtoMsg, useInterfaces: boolean = true): QuerySubspacesResponse {
    return QuerySubspacesResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QuerySubspacesResponse): Uint8Array {
    return QuerySubspacesResponse.encode(message).finish();
  },
  toProtoMsg(message: QuerySubspacesResponse): QuerySubspacesResponseProtoMsg {
    return {
      typeUrl: "/cosmos.params.v1beta1.QuerySubspacesResponse",
      value: QuerySubspacesResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(QuerySubspacesResponse.typeUrl)) {
      return;
    }
    Subspace.registerTypeUrl();
  }
};
function createBaseSubspace(): Subspace {
  return {
    subspace: "",
    keys: []
  };
}
/**
 * Subspace defines a parameter subspace name and all the keys that exist for
 * the subspace.
 * @name Subspace
 * @package cosmos.params.v1beta1
 * @see proto type: cosmos.params.v1beta1.Subspace
 */
export const Subspace = {
  typeUrl: "/cosmos.params.v1beta1.Subspace",
  aminoType: "cosmos-sdk/Subspace",
  is(o: any): o is Subspace {
    return o && (o.$typeUrl === Subspace.typeUrl || typeof o.subspace === "string" && Array.isArray(o.keys) && (!o.keys.length || typeof o.keys[0] === "string"));
  },
  isSDK(o: any): o is SubspaceSDKType {
    return o && (o.$typeUrl === Subspace.typeUrl || typeof o.subspace === "string" && Array.isArray(o.keys) && (!o.keys.length || typeof o.keys[0] === "string"));
  },
  isAmino(o: any): o is SubspaceAmino {
    return o && (o.$typeUrl === Subspace.typeUrl || typeof o.subspace === "string" && Array.isArray(o.keys) && (!o.keys.length || typeof o.keys[0] === "string"));
  },
  encode(message: Subspace, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.subspace !== "") {
      writer.uint32(10).string(message.subspace);
    }
    for (const v of message.keys) {
      writer.uint32(18).string(v!);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): Subspace {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSubspace();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.subspace = reader.string();
          break;
        case 2:
          message.keys.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Subspace {
    const obj = createBaseSubspace();
    if (isSet(object.subspace)) obj.subspace = String(object.subspace);
    if (Array.isArray(object?.keys)) obj.keys = object.keys.map((e: any) => String(e));
    return obj;
  },
  fromPartial(object: DeepPartial<Subspace>): Subspace {
    const message = createBaseSubspace();
    message.subspace = object.subspace ?? "";
    message.keys = object.keys?.map(e => e) || [];
    return message;
  },
  fromSDK(object: SubspaceSDKType): Subspace {
    return {
      subspace: object?.subspace,
      keys: Array.isArray(object?.keys) ? object.keys.map((e: any) => e) : []
    };
  },
  toSDK(message: Subspace): SubspaceSDKType {
    const obj: any = {};
    obj.subspace = message.subspace;
    if (message.keys) {
      obj.keys = message.keys.map(e => e);
    } else {
      obj.keys = [];
    }
    return obj;
  },
  fromAmino(object: SubspaceAmino): Subspace {
    const message = createBaseSubspace();
    if (object.subspace !== undefined && object.subspace !== null) {
      message.subspace = object.subspace;
    }
    message.keys = object.keys?.map(e => e) || [];
    return message;
  },
  toAmino(message: Subspace, useInterfaces: boolean = true): SubspaceAmino {
    const obj: any = {};
    obj.subspace = message.subspace === "" ? undefined : message.subspace;
    if (message.keys) {
      obj.keys = message.keys.map(e => e);
    } else {
      obj.keys = message.keys;
    }
    return obj;
  },
  fromProtoMsg(message: SubspaceProtoMsg, useInterfaces: boolean = true): Subspace {
    return Subspace.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: Subspace): Uint8Array {
    return Subspace.encode(message).finish();
  },
  toProtoMsg(message: Subspace): SubspaceProtoMsg {
    return {
      typeUrl: "/cosmos.params.v1beta1.Subspace",
      value: Subspace.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};