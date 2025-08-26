import { Action, ActionSDKType, ClaimRecord, ClaimRecordAmino, ClaimRecordSDKType, actionFromJSON, actionToJSON } from "./claim";
import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial, isSet } from "../../../helpers";
import { GlobalDecoderRegistry } from "../../../registry";
export const protobufPackage = "osmosis.claim.v1beta1";
/**
 * QueryParamsRequest is the request type for the Query/Params RPC method.
 * @name QueryModuleAccountBalanceRequest
 * @package osmosis.claim.v1beta1
 * @see proto type: osmosis.claim.v1beta1.QueryModuleAccountBalanceRequest
 */
export interface QueryModuleAccountBalanceRequest {}
export interface QueryModuleAccountBalanceRequestProtoMsg {
  typeUrl: "/osmosis.claim.v1beta1.QueryModuleAccountBalanceRequest";
  value: Uint8Array;
}
/**
 * QueryParamsRequest is the request type for the Query/Params RPC method.
 * @name QueryModuleAccountBalanceRequestAmino
 * @package osmosis.claim.v1beta1
 * @see proto type: osmosis.claim.v1beta1.QueryModuleAccountBalanceRequest
 */
export interface QueryModuleAccountBalanceRequestAmino {}
/**
 * QueryParamsRequest is the request type for the Query/Params RPC method.
 * @name QueryModuleAccountBalanceRequestSDKType
 * @package osmosis.claim.v1beta1
 * @see proto type: osmosis.claim.v1beta1.QueryModuleAccountBalanceRequest
 */
export interface QueryModuleAccountBalanceRequestSDKType {}
/**
 * QueryParamsResponse is the response type for the Query/Params RPC method.
 * @name QueryModuleAccountBalanceResponse
 * @package osmosis.claim.v1beta1
 * @see proto type: osmosis.claim.v1beta1.QueryModuleAccountBalanceResponse
 */
export interface QueryModuleAccountBalanceResponse {
  /**
   * params defines the parameters of the module.
   */
  moduleAccountBalance: Coin[];
}
export interface QueryModuleAccountBalanceResponseProtoMsg {
  typeUrl: "/osmosis.claim.v1beta1.QueryModuleAccountBalanceResponse";
  value: Uint8Array;
}
/**
 * QueryParamsResponse is the response type for the Query/Params RPC method.
 * @name QueryModuleAccountBalanceResponseAmino
 * @package osmosis.claim.v1beta1
 * @see proto type: osmosis.claim.v1beta1.QueryModuleAccountBalanceResponse
 */
export interface QueryModuleAccountBalanceResponseAmino {
  /**
   * params defines the parameters of the module.
   */
  moduleAccountBalance?: CoinAmino[];
}
/**
 * QueryParamsResponse is the response type for the Query/Params RPC method.
 * @name QueryModuleAccountBalanceResponseSDKType
 * @package osmosis.claim.v1beta1
 * @see proto type: osmosis.claim.v1beta1.QueryModuleAccountBalanceResponse
 */
export interface QueryModuleAccountBalanceResponseSDKType {
  moduleAccountBalance: CoinSDKType[];
}
/**
 * QueryParamsRequest is the request type for the Query/Params RPC method.
 * @name QueryParamsRequest
 * @package osmosis.claim.v1beta1
 * @see proto type: osmosis.claim.v1beta1.QueryParamsRequest
 */
export interface QueryParamsRequest {}
export interface QueryParamsRequestProtoMsg {
  typeUrl: "/osmosis.claim.v1beta1.QueryParamsRequest";
  value: Uint8Array;
}
/**
 * QueryParamsRequest is the request type for the Query/Params RPC method.
 * @name QueryParamsRequestAmino
 * @package osmosis.claim.v1beta1
 * @see proto type: osmosis.claim.v1beta1.QueryParamsRequest
 */
export interface QueryParamsRequestAmino {}
/**
 * QueryParamsRequest is the request type for the Query/Params RPC method.
 * @name QueryParamsRequestSDKType
 * @package osmosis.claim.v1beta1
 * @see proto type: osmosis.claim.v1beta1.QueryParamsRequest
 */
export interface QueryParamsRequestSDKType {}
/**
 * QueryParamsResponse is the response type for the Query/Params RPC method.
 * @name QueryParamsResponse
 * @package osmosis.claim.v1beta1
 * @see proto type: osmosis.claim.v1beta1.QueryParamsResponse
 */
export interface QueryParamsResponse {
  /**
   * params defines the parameters of the module.
   */
  params: Params;
}
export interface QueryParamsResponseProtoMsg {
  typeUrl: "/osmosis.claim.v1beta1.QueryParamsResponse";
  value: Uint8Array;
}
/**
 * QueryParamsResponse is the response type for the Query/Params RPC method.
 * @name QueryParamsResponseAmino
 * @package osmosis.claim.v1beta1
 * @see proto type: osmosis.claim.v1beta1.QueryParamsResponse
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
 * @package osmosis.claim.v1beta1
 * @see proto type: osmosis.claim.v1beta1.QueryParamsResponse
 */
export interface QueryParamsResponseSDKType {
  params: ParamsSDKType;
}
/**
 * @name QueryClaimRecordRequest
 * @package osmosis.claim.v1beta1
 * @see proto type: osmosis.claim.v1beta1.QueryClaimRecordRequest
 */
export interface QueryClaimRecordRequest {
  address: string;
}
export interface QueryClaimRecordRequestProtoMsg {
  typeUrl: "/osmosis.claim.v1beta1.QueryClaimRecordRequest";
  value: Uint8Array;
}
/**
 * @name QueryClaimRecordRequestAmino
 * @package osmosis.claim.v1beta1
 * @see proto type: osmosis.claim.v1beta1.QueryClaimRecordRequest
 */
export interface QueryClaimRecordRequestAmino {
  address?: string;
}
/**
 * @name QueryClaimRecordRequestSDKType
 * @package osmosis.claim.v1beta1
 * @see proto type: osmosis.claim.v1beta1.QueryClaimRecordRequest
 */
export interface QueryClaimRecordRequestSDKType {
  address: string;
}
/**
 * @name QueryClaimRecordResponse
 * @package osmosis.claim.v1beta1
 * @see proto type: osmosis.claim.v1beta1.QueryClaimRecordResponse
 */
export interface QueryClaimRecordResponse {
  claimRecord: ClaimRecord;
}
export interface QueryClaimRecordResponseProtoMsg {
  typeUrl: "/osmosis.claim.v1beta1.QueryClaimRecordResponse";
  value: Uint8Array;
}
/**
 * @name QueryClaimRecordResponseAmino
 * @package osmosis.claim.v1beta1
 * @see proto type: osmosis.claim.v1beta1.QueryClaimRecordResponse
 */
export interface QueryClaimRecordResponseAmino {
  claim_record?: ClaimRecordAmino;
}
/**
 * @name QueryClaimRecordResponseSDKType
 * @package osmosis.claim.v1beta1
 * @see proto type: osmosis.claim.v1beta1.QueryClaimRecordResponse
 */
export interface QueryClaimRecordResponseSDKType {
  claim_record: ClaimRecordSDKType;
}
/**
 * @name QueryClaimableForActionRequest
 * @package osmosis.claim.v1beta1
 * @see proto type: osmosis.claim.v1beta1.QueryClaimableForActionRequest
 */
export interface QueryClaimableForActionRequest {
  address: string;
  action: Action;
}
export interface QueryClaimableForActionRequestProtoMsg {
  typeUrl: "/osmosis.claim.v1beta1.QueryClaimableForActionRequest";
  value: Uint8Array;
}
/**
 * @name QueryClaimableForActionRequestAmino
 * @package osmosis.claim.v1beta1
 * @see proto type: osmosis.claim.v1beta1.QueryClaimableForActionRequest
 */
export interface QueryClaimableForActionRequestAmino {
  address?: string;
  action?: Action;
}
/**
 * @name QueryClaimableForActionRequestSDKType
 * @package osmosis.claim.v1beta1
 * @see proto type: osmosis.claim.v1beta1.QueryClaimableForActionRequest
 */
export interface QueryClaimableForActionRequestSDKType {
  address: string;
  action: Action;
}
/**
 * @name QueryClaimableForActionResponse
 * @package osmosis.claim.v1beta1
 * @see proto type: osmosis.claim.v1beta1.QueryClaimableForActionResponse
 */
export interface QueryClaimableForActionResponse {
  coins: Coin[];
}
export interface QueryClaimableForActionResponseProtoMsg {
  typeUrl: "/osmosis.claim.v1beta1.QueryClaimableForActionResponse";
  value: Uint8Array;
}
/**
 * @name QueryClaimableForActionResponseAmino
 * @package osmosis.claim.v1beta1
 * @see proto type: osmosis.claim.v1beta1.QueryClaimableForActionResponse
 */
export interface QueryClaimableForActionResponseAmino {
  coins?: CoinAmino[];
}
/**
 * @name QueryClaimableForActionResponseSDKType
 * @package osmosis.claim.v1beta1
 * @see proto type: osmosis.claim.v1beta1.QueryClaimableForActionResponse
 */
export interface QueryClaimableForActionResponseSDKType {
  coins: CoinSDKType[];
}
/**
 * @name QueryTotalClaimableRequest
 * @package osmosis.claim.v1beta1
 * @see proto type: osmosis.claim.v1beta1.QueryTotalClaimableRequest
 */
export interface QueryTotalClaimableRequest {
  address: string;
}
export interface QueryTotalClaimableRequestProtoMsg {
  typeUrl: "/osmosis.claim.v1beta1.QueryTotalClaimableRequest";
  value: Uint8Array;
}
/**
 * @name QueryTotalClaimableRequestAmino
 * @package osmosis.claim.v1beta1
 * @see proto type: osmosis.claim.v1beta1.QueryTotalClaimableRequest
 */
export interface QueryTotalClaimableRequestAmino {
  address?: string;
}
/**
 * @name QueryTotalClaimableRequestSDKType
 * @package osmosis.claim.v1beta1
 * @see proto type: osmosis.claim.v1beta1.QueryTotalClaimableRequest
 */
export interface QueryTotalClaimableRequestSDKType {
  address: string;
}
/**
 * @name QueryTotalClaimableResponse
 * @package osmosis.claim.v1beta1
 * @see proto type: osmosis.claim.v1beta1.QueryTotalClaimableResponse
 */
export interface QueryTotalClaimableResponse {
  coins: Coin[];
}
export interface QueryTotalClaimableResponseProtoMsg {
  typeUrl: "/osmosis.claim.v1beta1.QueryTotalClaimableResponse";
  value: Uint8Array;
}
/**
 * @name QueryTotalClaimableResponseAmino
 * @package osmosis.claim.v1beta1
 * @see proto type: osmosis.claim.v1beta1.QueryTotalClaimableResponse
 */
export interface QueryTotalClaimableResponseAmino {
  coins?: CoinAmino[];
}
/**
 * @name QueryTotalClaimableResponseSDKType
 * @package osmosis.claim.v1beta1
 * @see proto type: osmosis.claim.v1beta1.QueryTotalClaimableResponse
 */
export interface QueryTotalClaimableResponseSDKType {
  coins: CoinSDKType[];
}
function createBaseQueryModuleAccountBalanceRequest(): QueryModuleAccountBalanceRequest {
  return {};
}
/**
 * QueryParamsRequest is the request type for the Query/Params RPC method.
 * @name QueryModuleAccountBalanceRequest
 * @package osmosis.claim.v1beta1
 * @see proto type: osmosis.claim.v1beta1.QueryModuleAccountBalanceRequest
 */
export const QueryModuleAccountBalanceRequest = {
  typeUrl: "/osmosis.claim.v1beta1.QueryModuleAccountBalanceRequest",
  aminoType: "osmosis/claim/query-module-account-balance-request",
  is(o: any): o is QueryModuleAccountBalanceRequest {
    return o && o.$typeUrl === QueryModuleAccountBalanceRequest.typeUrl;
  },
  isSDK(o: any): o is QueryModuleAccountBalanceRequestSDKType {
    return o && o.$typeUrl === QueryModuleAccountBalanceRequest.typeUrl;
  },
  isAmino(o: any): o is QueryModuleAccountBalanceRequestAmino {
    return o && o.$typeUrl === QueryModuleAccountBalanceRequest.typeUrl;
  },
  encode(_: QueryModuleAccountBalanceRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryModuleAccountBalanceRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryModuleAccountBalanceRequest();
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
  fromJSON(_: any): QueryModuleAccountBalanceRequest {
    const obj = createBaseQueryModuleAccountBalanceRequest();
    return obj;
  },
  fromPartial(_: DeepPartial<QueryModuleAccountBalanceRequest>): QueryModuleAccountBalanceRequest {
    const message = createBaseQueryModuleAccountBalanceRequest();
    return message;
  },
  fromSDK(_: QueryModuleAccountBalanceRequestSDKType): QueryModuleAccountBalanceRequest {
    return {};
  },
  toSDK(_: QueryModuleAccountBalanceRequest): QueryModuleAccountBalanceRequestSDKType {
    const obj: any = {};
    return obj;
  },
  fromAmino(_: QueryModuleAccountBalanceRequestAmino): QueryModuleAccountBalanceRequest {
    const message = createBaseQueryModuleAccountBalanceRequest();
    return message;
  },
  toAmino(_: QueryModuleAccountBalanceRequest, useInterfaces: boolean = true): QueryModuleAccountBalanceRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromProtoMsg(message: QueryModuleAccountBalanceRequestProtoMsg, useInterfaces: boolean = true): QueryModuleAccountBalanceRequest {
    return QueryModuleAccountBalanceRequest.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryModuleAccountBalanceRequest): Uint8Array {
    return QueryModuleAccountBalanceRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryModuleAccountBalanceRequest): QueryModuleAccountBalanceRequestProtoMsg {
    return {
      typeUrl: "/osmosis.claim.v1beta1.QueryModuleAccountBalanceRequest",
      value: QueryModuleAccountBalanceRequest.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseQueryModuleAccountBalanceResponse(): QueryModuleAccountBalanceResponse {
  return {
    moduleAccountBalance: []
  };
}
/**
 * QueryParamsResponse is the response type for the Query/Params RPC method.
 * @name QueryModuleAccountBalanceResponse
 * @package osmosis.claim.v1beta1
 * @see proto type: osmosis.claim.v1beta1.QueryModuleAccountBalanceResponse
 */
export const QueryModuleAccountBalanceResponse = {
  typeUrl: "/osmosis.claim.v1beta1.QueryModuleAccountBalanceResponse",
  aminoType: "osmosis/claim/query-module-account-balance-response",
  is(o: any): o is QueryModuleAccountBalanceResponse {
    return o && (o.$typeUrl === QueryModuleAccountBalanceResponse.typeUrl || Array.isArray(o.moduleAccountBalance) && (!o.moduleAccountBalance.length || Coin.is(o.moduleAccountBalance[0])));
  },
  isSDK(o: any): o is QueryModuleAccountBalanceResponseSDKType {
    return o && (o.$typeUrl === QueryModuleAccountBalanceResponse.typeUrl || Array.isArray(o.moduleAccountBalance) && (!o.moduleAccountBalance.length || Coin.isSDK(o.moduleAccountBalance[0])));
  },
  isAmino(o: any): o is QueryModuleAccountBalanceResponseAmino {
    return o && (o.$typeUrl === QueryModuleAccountBalanceResponse.typeUrl || Array.isArray(o.moduleAccountBalance) && (!o.moduleAccountBalance.length || Coin.isAmino(o.moduleAccountBalance[0])));
  },
  encode(message: QueryModuleAccountBalanceResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.moduleAccountBalance) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryModuleAccountBalanceResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryModuleAccountBalanceResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.moduleAccountBalance.push(Coin.decode(reader, reader.uint32(), useInterfaces));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryModuleAccountBalanceResponse {
    const obj = createBaseQueryModuleAccountBalanceResponse();
    if (Array.isArray(object?.moduleAccountBalance)) obj.moduleAccountBalance = object.moduleAccountBalance.map((e: any) => Coin.fromJSON(e));
    return obj;
  },
  fromPartial(object: DeepPartial<QueryModuleAccountBalanceResponse>): QueryModuleAccountBalanceResponse {
    const message = createBaseQueryModuleAccountBalanceResponse();
    message.moduleAccountBalance = object.moduleAccountBalance?.map(e => Coin.fromPartial(e)) || [];
    return message;
  },
  fromSDK(object: QueryModuleAccountBalanceResponseSDKType): QueryModuleAccountBalanceResponse {
    return {
      moduleAccountBalance: Array.isArray(object?.moduleAccountBalance) ? object.moduleAccountBalance.map((e: any) => Coin.fromSDK(e)) : []
    };
  },
  toSDK(message: QueryModuleAccountBalanceResponse): QueryModuleAccountBalanceResponseSDKType {
    const obj: any = {};
    if (message.moduleAccountBalance) {
      obj.moduleAccountBalance = message.moduleAccountBalance.map(e => e ? Coin.toSDK(e) : undefined);
    } else {
      obj.moduleAccountBalance = [];
    }
    return obj;
  },
  fromAmino(object: QueryModuleAccountBalanceResponseAmino): QueryModuleAccountBalanceResponse {
    const message = createBaseQueryModuleAccountBalanceResponse();
    message.moduleAccountBalance = object.moduleAccountBalance?.map(e => Coin.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: QueryModuleAccountBalanceResponse, useInterfaces: boolean = true): QueryModuleAccountBalanceResponseAmino {
    const obj: any = {};
    if (message.moduleAccountBalance) {
      obj.moduleAccountBalance = message.moduleAccountBalance.map(e => e ? Coin.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.moduleAccountBalance = message.moduleAccountBalance;
    }
    return obj;
  },
  fromProtoMsg(message: QueryModuleAccountBalanceResponseProtoMsg, useInterfaces: boolean = true): QueryModuleAccountBalanceResponse {
    return QueryModuleAccountBalanceResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryModuleAccountBalanceResponse): Uint8Array {
    return QueryModuleAccountBalanceResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryModuleAccountBalanceResponse): QueryModuleAccountBalanceResponseProtoMsg {
    return {
      typeUrl: "/osmosis.claim.v1beta1.QueryModuleAccountBalanceResponse",
      value: QueryModuleAccountBalanceResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(QueryModuleAccountBalanceResponse.typeUrl)) {
      return;
    }
    Coin.registerTypeUrl();
  }
};
function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}
/**
 * QueryParamsRequest is the request type for the Query/Params RPC method.
 * @name QueryParamsRequest
 * @package osmosis.claim.v1beta1
 * @see proto type: osmosis.claim.v1beta1.QueryParamsRequest
 */
export const QueryParamsRequest = {
  typeUrl: "/osmosis.claim.v1beta1.QueryParamsRequest",
  aminoType: "osmosis/claim/query-params-request",
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
      typeUrl: "/osmosis.claim.v1beta1.QueryParamsRequest",
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
 * @package osmosis.claim.v1beta1
 * @see proto type: osmosis.claim.v1beta1.QueryParamsResponse
 */
export const QueryParamsResponse = {
  typeUrl: "/osmosis.claim.v1beta1.QueryParamsResponse",
  aminoType: "osmosis/claim/query-params-response",
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
      typeUrl: "/osmosis.claim.v1beta1.QueryParamsResponse",
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
function createBaseQueryClaimRecordRequest(): QueryClaimRecordRequest {
  return {
    address: ""
  };
}
/**
 * @name QueryClaimRecordRequest
 * @package osmosis.claim.v1beta1
 * @see proto type: osmosis.claim.v1beta1.QueryClaimRecordRequest
 */
export const QueryClaimRecordRequest = {
  typeUrl: "/osmosis.claim.v1beta1.QueryClaimRecordRequest",
  aminoType: "osmosis/claim/query-claim-record-request",
  is(o: any): o is QueryClaimRecordRequest {
    return o && (o.$typeUrl === QueryClaimRecordRequest.typeUrl || typeof o.address === "string");
  },
  isSDK(o: any): o is QueryClaimRecordRequestSDKType {
    return o && (o.$typeUrl === QueryClaimRecordRequest.typeUrl || typeof o.address === "string");
  },
  isAmino(o: any): o is QueryClaimRecordRequestAmino {
    return o && (o.$typeUrl === QueryClaimRecordRequest.typeUrl || typeof o.address === "string");
  },
  encode(message: QueryClaimRecordRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryClaimRecordRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryClaimRecordRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryClaimRecordRequest {
    const obj = createBaseQueryClaimRecordRequest();
    if (isSet(object.address)) obj.address = String(object.address);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryClaimRecordRequest>): QueryClaimRecordRequest {
    const message = createBaseQueryClaimRecordRequest();
    message.address = object.address ?? "";
    return message;
  },
  fromSDK(object: QueryClaimRecordRequestSDKType): QueryClaimRecordRequest {
    return {
      address: object?.address
    };
  },
  toSDK(message: QueryClaimRecordRequest): QueryClaimRecordRequestSDKType {
    const obj: any = {};
    obj.address = message.address;
    return obj;
  },
  fromAmino(object: QueryClaimRecordRequestAmino): QueryClaimRecordRequest {
    const message = createBaseQueryClaimRecordRequest();
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    return message;
  },
  toAmino(message: QueryClaimRecordRequest, useInterfaces: boolean = true): QueryClaimRecordRequestAmino {
    const obj: any = {};
    obj.address = message.address === "" ? undefined : message.address;
    return obj;
  },
  fromProtoMsg(message: QueryClaimRecordRequestProtoMsg, useInterfaces: boolean = true): QueryClaimRecordRequest {
    return QueryClaimRecordRequest.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryClaimRecordRequest): Uint8Array {
    return QueryClaimRecordRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryClaimRecordRequest): QueryClaimRecordRequestProtoMsg {
    return {
      typeUrl: "/osmosis.claim.v1beta1.QueryClaimRecordRequest",
      value: QueryClaimRecordRequest.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseQueryClaimRecordResponse(): QueryClaimRecordResponse {
  return {
    claimRecord: ClaimRecord.fromPartial({})
  };
}
/**
 * @name QueryClaimRecordResponse
 * @package osmosis.claim.v1beta1
 * @see proto type: osmosis.claim.v1beta1.QueryClaimRecordResponse
 */
export const QueryClaimRecordResponse = {
  typeUrl: "/osmosis.claim.v1beta1.QueryClaimRecordResponse",
  aminoType: "osmosis/claim/query-claim-record-response",
  is(o: any): o is QueryClaimRecordResponse {
    return o && (o.$typeUrl === QueryClaimRecordResponse.typeUrl || ClaimRecord.is(o.claimRecord));
  },
  isSDK(o: any): o is QueryClaimRecordResponseSDKType {
    return o && (o.$typeUrl === QueryClaimRecordResponse.typeUrl || ClaimRecord.isSDK(o.claim_record));
  },
  isAmino(o: any): o is QueryClaimRecordResponseAmino {
    return o && (o.$typeUrl === QueryClaimRecordResponse.typeUrl || ClaimRecord.isAmino(o.claim_record));
  },
  encode(message: QueryClaimRecordResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.claimRecord !== undefined) {
      ClaimRecord.encode(message.claimRecord, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryClaimRecordResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryClaimRecordResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.claimRecord = ClaimRecord.decode(reader, reader.uint32(), useInterfaces);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryClaimRecordResponse {
    const obj = createBaseQueryClaimRecordResponse();
    if (isSet(object.claimRecord)) obj.claimRecord = ClaimRecord.fromJSON(object.claimRecord);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryClaimRecordResponse>): QueryClaimRecordResponse {
    const message = createBaseQueryClaimRecordResponse();
    if (object.claimRecord !== undefined && object.claimRecord !== null) {
      message.claimRecord = ClaimRecord.fromPartial(object.claimRecord);
    }
    return message;
  },
  fromSDK(object: QueryClaimRecordResponseSDKType): QueryClaimRecordResponse {
    return {
      claimRecord: object.claim_record ? ClaimRecord.fromSDK(object.claim_record) : undefined
    };
  },
  toSDK(message: QueryClaimRecordResponse): QueryClaimRecordResponseSDKType {
    const obj: any = {};
    message.claimRecord !== undefined && (obj.claim_record = message.claimRecord ? ClaimRecord.toSDK(message.claimRecord) : undefined);
    return obj;
  },
  fromAmino(object: QueryClaimRecordResponseAmino): QueryClaimRecordResponse {
    const message = createBaseQueryClaimRecordResponse();
    if (object.claim_record !== undefined && object.claim_record !== null) {
      message.claimRecord = ClaimRecord.fromAmino(object.claim_record);
    }
    return message;
  },
  toAmino(message: QueryClaimRecordResponse, useInterfaces: boolean = true): QueryClaimRecordResponseAmino {
    const obj: any = {};
    obj.claim_record = message.claimRecord ? ClaimRecord.toAmino(message.claimRecord, useInterfaces) : undefined;
    return obj;
  },
  fromProtoMsg(message: QueryClaimRecordResponseProtoMsg, useInterfaces: boolean = true): QueryClaimRecordResponse {
    return QueryClaimRecordResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryClaimRecordResponse): Uint8Array {
    return QueryClaimRecordResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryClaimRecordResponse): QueryClaimRecordResponseProtoMsg {
    return {
      typeUrl: "/osmosis.claim.v1beta1.QueryClaimRecordResponse",
      value: QueryClaimRecordResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(QueryClaimRecordResponse.typeUrl)) {
      return;
    }
    ClaimRecord.registerTypeUrl();
  }
};
function createBaseQueryClaimableForActionRequest(): QueryClaimableForActionRequest {
  return {
    address: "",
    action: 0
  };
}
/**
 * @name QueryClaimableForActionRequest
 * @package osmosis.claim.v1beta1
 * @see proto type: osmosis.claim.v1beta1.QueryClaimableForActionRequest
 */
export const QueryClaimableForActionRequest = {
  typeUrl: "/osmosis.claim.v1beta1.QueryClaimableForActionRequest",
  aminoType: "osmosis/claim/query-claimable-for-action-request",
  is(o: any): o is QueryClaimableForActionRequest {
    return o && (o.$typeUrl === QueryClaimableForActionRequest.typeUrl || typeof o.address === "string" && isSet(o.action));
  },
  isSDK(o: any): o is QueryClaimableForActionRequestSDKType {
    return o && (o.$typeUrl === QueryClaimableForActionRequest.typeUrl || typeof o.address === "string" && isSet(o.action));
  },
  isAmino(o: any): o is QueryClaimableForActionRequestAmino {
    return o && (o.$typeUrl === QueryClaimableForActionRequest.typeUrl || typeof o.address === "string" && isSet(o.action));
  },
  encode(message: QueryClaimableForActionRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.action !== 0) {
      writer.uint32(16).int32(message.action);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryClaimableForActionRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryClaimableForActionRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.action = (reader.int32() as any);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryClaimableForActionRequest {
    const obj = createBaseQueryClaimableForActionRequest();
    if (isSet(object.address)) obj.address = String(object.address);
    if (isSet(object.action)) obj.action = actionFromJSON(object.action);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryClaimableForActionRequest>): QueryClaimableForActionRequest {
    const message = createBaseQueryClaimableForActionRequest();
    message.address = object.address ?? "";
    message.action = object.action ?? 0;
    return message;
  },
  fromSDK(object: QueryClaimableForActionRequestSDKType): QueryClaimableForActionRequest {
    return {
      address: object?.address,
      action: isSet(object.action) ? actionFromJSON(object.action) : -1
    };
  },
  toSDK(message: QueryClaimableForActionRequest): QueryClaimableForActionRequestSDKType {
    const obj: any = {};
    obj.address = message.address;
    message.action !== undefined && (obj.action = actionToJSON(message.action));
    return obj;
  },
  fromAmino(object: QueryClaimableForActionRequestAmino): QueryClaimableForActionRequest {
    const message = createBaseQueryClaimableForActionRequest();
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    if (object.action !== undefined && object.action !== null) {
      message.action = object.action;
    }
    return message;
  },
  toAmino(message: QueryClaimableForActionRequest, useInterfaces: boolean = true): QueryClaimableForActionRequestAmino {
    const obj: any = {};
    obj.address = message.address === "" ? undefined : message.address;
    obj.action = message.action === 0 ? undefined : message.action;
    return obj;
  },
  fromProtoMsg(message: QueryClaimableForActionRequestProtoMsg, useInterfaces: boolean = true): QueryClaimableForActionRequest {
    return QueryClaimableForActionRequest.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryClaimableForActionRequest): Uint8Array {
    return QueryClaimableForActionRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryClaimableForActionRequest): QueryClaimableForActionRequestProtoMsg {
    return {
      typeUrl: "/osmosis.claim.v1beta1.QueryClaimableForActionRequest",
      value: QueryClaimableForActionRequest.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseQueryClaimableForActionResponse(): QueryClaimableForActionResponse {
  return {
    coins: []
  };
}
/**
 * @name QueryClaimableForActionResponse
 * @package osmosis.claim.v1beta1
 * @see proto type: osmosis.claim.v1beta1.QueryClaimableForActionResponse
 */
export const QueryClaimableForActionResponse = {
  typeUrl: "/osmosis.claim.v1beta1.QueryClaimableForActionResponse",
  aminoType: "osmosis/claim/query-claimable-for-action-response",
  is(o: any): o is QueryClaimableForActionResponse {
    return o && (o.$typeUrl === QueryClaimableForActionResponse.typeUrl || Array.isArray(o.coins) && (!o.coins.length || Coin.is(o.coins[0])));
  },
  isSDK(o: any): o is QueryClaimableForActionResponseSDKType {
    return o && (o.$typeUrl === QueryClaimableForActionResponse.typeUrl || Array.isArray(o.coins) && (!o.coins.length || Coin.isSDK(o.coins[0])));
  },
  isAmino(o: any): o is QueryClaimableForActionResponseAmino {
    return o && (o.$typeUrl === QueryClaimableForActionResponse.typeUrl || Array.isArray(o.coins) && (!o.coins.length || Coin.isAmino(o.coins[0])));
  },
  encode(message: QueryClaimableForActionResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.coins) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryClaimableForActionResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryClaimableForActionResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.coins.push(Coin.decode(reader, reader.uint32(), useInterfaces));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryClaimableForActionResponse {
    const obj = createBaseQueryClaimableForActionResponse();
    if (Array.isArray(object?.coins)) obj.coins = object.coins.map((e: any) => Coin.fromJSON(e));
    return obj;
  },
  fromPartial(object: DeepPartial<QueryClaimableForActionResponse>): QueryClaimableForActionResponse {
    const message = createBaseQueryClaimableForActionResponse();
    message.coins = object.coins?.map(e => Coin.fromPartial(e)) || [];
    return message;
  },
  fromSDK(object: QueryClaimableForActionResponseSDKType): QueryClaimableForActionResponse {
    return {
      coins: Array.isArray(object?.coins) ? object.coins.map((e: any) => Coin.fromSDK(e)) : []
    };
  },
  toSDK(message: QueryClaimableForActionResponse): QueryClaimableForActionResponseSDKType {
    const obj: any = {};
    if (message.coins) {
      obj.coins = message.coins.map(e => e ? Coin.toSDK(e) : undefined);
    } else {
      obj.coins = [];
    }
    return obj;
  },
  fromAmino(object: QueryClaimableForActionResponseAmino): QueryClaimableForActionResponse {
    const message = createBaseQueryClaimableForActionResponse();
    message.coins = object.coins?.map(e => Coin.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: QueryClaimableForActionResponse, useInterfaces: boolean = true): QueryClaimableForActionResponseAmino {
    const obj: any = {};
    if (message.coins) {
      obj.coins = message.coins.map(e => e ? Coin.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.coins = message.coins;
    }
    return obj;
  },
  fromProtoMsg(message: QueryClaimableForActionResponseProtoMsg, useInterfaces: boolean = true): QueryClaimableForActionResponse {
    return QueryClaimableForActionResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryClaimableForActionResponse): Uint8Array {
    return QueryClaimableForActionResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryClaimableForActionResponse): QueryClaimableForActionResponseProtoMsg {
    return {
      typeUrl: "/osmosis.claim.v1beta1.QueryClaimableForActionResponse",
      value: QueryClaimableForActionResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(QueryClaimableForActionResponse.typeUrl)) {
      return;
    }
    Coin.registerTypeUrl();
  }
};
function createBaseQueryTotalClaimableRequest(): QueryTotalClaimableRequest {
  return {
    address: ""
  };
}
/**
 * @name QueryTotalClaimableRequest
 * @package osmosis.claim.v1beta1
 * @see proto type: osmosis.claim.v1beta1.QueryTotalClaimableRequest
 */
export const QueryTotalClaimableRequest = {
  typeUrl: "/osmosis.claim.v1beta1.QueryTotalClaimableRequest",
  aminoType: "osmosis/claim/query-total-claimable-request",
  is(o: any): o is QueryTotalClaimableRequest {
    return o && (o.$typeUrl === QueryTotalClaimableRequest.typeUrl || typeof o.address === "string");
  },
  isSDK(o: any): o is QueryTotalClaimableRequestSDKType {
    return o && (o.$typeUrl === QueryTotalClaimableRequest.typeUrl || typeof o.address === "string");
  },
  isAmino(o: any): o is QueryTotalClaimableRequestAmino {
    return o && (o.$typeUrl === QueryTotalClaimableRequest.typeUrl || typeof o.address === "string");
  },
  encode(message: QueryTotalClaimableRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryTotalClaimableRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTotalClaimableRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryTotalClaimableRequest {
    const obj = createBaseQueryTotalClaimableRequest();
    if (isSet(object.address)) obj.address = String(object.address);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryTotalClaimableRequest>): QueryTotalClaimableRequest {
    const message = createBaseQueryTotalClaimableRequest();
    message.address = object.address ?? "";
    return message;
  },
  fromSDK(object: QueryTotalClaimableRequestSDKType): QueryTotalClaimableRequest {
    return {
      address: object?.address
    };
  },
  toSDK(message: QueryTotalClaimableRequest): QueryTotalClaimableRequestSDKType {
    const obj: any = {};
    obj.address = message.address;
    return obj;
  },
  fromAmino(object: QueryTotalClaimableRequestAmino): QueryTotalClaimableRequest {
    const message = createBaseQueryTotalClaimableRequest();
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    return message;
  },
  toAmino(message: QueryTotalClaimableRequest, useInterfaces: boolean = true): QueryTotalClaimableRequestAmino {
    const obj: any = {};
    obj.address = message.address === "" ? undefined : message.address;
    return obj;
  },
  fromProtoMsg(message: QueryTotalClaimableRequestProtoMsg, useInterfaces: boolean = true): QueryTotalClaimableRequest {
    return QueryTotalClaimableRequest.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryTotalClaimableRequest): Uint8Array {
    return QueryTotalClaimableRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryTotalClaimableRequest): QueryTotalClaimableRequestProtoMsg {
    return {
      typeUrl: "/osmosis.claim.v1beta1.QueryTotalClaimableRequest",
      value: QueryTotalClaimableRequest.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseQueryTotalClaimableResponse(): QueryTotalClaimableResponse {
  return {
    coins: []
  };
}
/**
 * @name QueryTotalClaimableResponse
 * @package osmosis.claim.v1beta1
 * @see proto type: osmosis.claim.v1beta1.QueryTotalClaimableResponse
 */
export const QueryTotalClaimableResponse = {
  typeUrl: "/osmosis.claim.v1beta1.QueryTotalClaimableResponse",
  aminoType: "osmosis/claim/query-total-claimable-response",
  is(o: any): o is QueryTotalClaimableResponse {
    return o && (o.$typeUrl === QueryTotalClaimableResponse.typeUrl || Array.isArray(o.coins) && (!o.coins.length || Coin.is(o.coins[0])));
  },
  isSDK(o: any): o is QueryTotalClaimableResponseSDKType {
    return o && (o.$typeUrl === QueryTotalClaimableResponse.typeUrl || Array.isArray(o.coins) && (!o.coins.length || Coin.isSDK(o.coins[0])));
  },
  isAmino(o: any): o is QueryTotalClaimableResponseAmino {
    return o && (o.$typeUrl === QueryTotalClaimableResponse.typeUrl || Array.isArray(o.coins) && (!o.coins.length || Coin.isAmino(o.coins[0])));
  },
  encode(message: QueryTotalClaimableResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.coins) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryTotalClaimableResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTotalClaimableResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.coins.push(Coin.decode(reader, reader.uint32(), useInterfaces));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryTotalClaimableResponse {
    const obj = createBaseQueryTotalClaimableResponse();
    if (Array.isArray(object?.coins)) obj.coins = object.coins.map((e: any) => Coin.fromJSON(e));
    return obj;
  },
  fromPartial(object: DeepPartial<QueryTotalClaimableResponse>): QueryTotalClaimableResponse {
    const message = createBaseQueryTotalClaimableResponse();
    message.coins = object.coins?.map(e => Coin.fromPartial(e)) || [];
    return message;
  },
  fromSDK(object: QueryTotalClaimableResponseSDKType): QueryTotalClaimableResponse {
    return {
      coins: Array.isArray(object?.coins) ? object.coins.map((e: any) => Coin.fromSDK(e)) : []
    };
  },
  toSDK(message: QueryTotalClaimableResponse): QueryTotalClaimableResponseSDKType {
    const obj: any = {};
    if (message.coins) {
      obj.coins = message.coins.map(e => e ? Coin.toSDK(e) : undefined);
    } else {
      obj.coins = [];
    }
    return obj;
  },
  fromAmino(object: QueryTotalClaimableResponseAmino): QueryTotalClaimableResponse {
    const message = createBaseQueryTotalClaimableResponse();
    message.coins = object.coins?.map(e => Coin.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: QueryTotalClaimableResponse, useInterfaces: boolean = true): QueryTotalClaimableResponseAmino {
    const obj: any = {};
    if (message.coins) {
      obj.coins = message.coins.map(e => e ? Coin.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.coins = message.coins;
    }
    return obj;
  },
  fromProtoMsg(message: QueryTotalClaimableResponseProtoMsg, useInterfaces: boolean = true): QueryTotalClaimableResponse {
    return QueryTotalClaimableResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryTotalClaimableResponse): Uint8Array {
    return QueryTotalClaimableResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryTotalClaimableResponse): QueryTotalClaimableResponseProtoMsg {
    return {
      typeUrl: "/osmosis.claim.v1beta1.QueryTotalClaimableResponse",
      value: QueryTotalClaimableResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(QueryTotalClaimableResponse.typeUrl)) {
      return;
    }
    Coin.registerTypeUrl();
  }
};