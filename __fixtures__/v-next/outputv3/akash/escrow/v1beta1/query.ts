import { PageRequest, PageRequestAmino, PageRequestSDKType, PageResponse, PageResponseAmino, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { Account, AccountAmino, AccountSDKType, Payment, PaymentAmino, PaymentSDKType } from "./types";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { GlobalDecoderRegistry } from "../../../registry";
import { isSet, DeepPartial } from "../../../helpers";
export const protobufPackage = "akash.escrow.v1beta1";
/**
 * QueryAccountRequest is request type for the Query/Account RPC method
 * @name QueryAccountsRequest
 * @package akash.escrow.v1beta1
 * @see proto type: akash.escrow.v1beta1.QueryAccountsRequest
 */
export interface QueryAccountsRequest {
  scope: string;
  xid: string;
  owner: string;
  state: string;
  pagination?: PageRequest;
}
export interface QueryAccountsRequestProtoMsg {
  typeUrl: "/akash.escrow.v1beta1.QueryAccountsRequest";
  value: Uint8Array;
}
/**
 * QueryAccountRequest is request type for the Query/Account RPC method
 * @name QueryAccountsRequestAmino
 * @package akash.escrow.v1beta1
 * @see proto type: akash.escrow.v1beta1.QueryAccountsRequest
 */
export interface QueryAccountsRequestAmino {
  scope?: string;
  xid?: string;
  owner?: string;
  state?: string;
  pagination?: PageRequestAmino;
}
/**
 * QueryAccountRequest is request type for the Query/Account RPC method
 * @name QueryAccountsRequestSDKType
 * @package akash.escrow.v1beta1
 * @see proto type: akash.escrow.v1beta1.QueryAccountsRequest
 */
export interface QueryAccountsRequestSDKType {
  scope: string;
  xid: string;
  owner: string;
  state: string;
  pagination?: PageRequestSDKType;
}
/**
 * QueryProvidersResponse is response type for the Query/Providers RPC method
 * @name QueryAccountsResponse
 * @package akash.escrow.v1beta1
 * @see proto type: akash.escrow.v1beta1.QueryAccountsResponse
 */
export interface QueryAccountsResponse {
  accounts: Account[];
  pagination?: PageResponse;
}
export interface QueryAccountsResponseProtoMsg {
  typeUrl: "/akash.escrow.v1beta1.QueryAccountsResponse";
  value: Uint8Array;
}
/**
 * QueryProvidersResponse is response type for the Query/Providers RPC method
 * @name QueryAccountsResponseAmino
 * @package akash.escrow.v1beta1
 * @see proto type: akash.escrow.v1beta1.QueryAccountsResponse
 */
export interface QueryAccountsResponseAmino {
  accounts?: AccountAmino[];
  pagination?: PageResponseAmino;
}
/**
 * QueryProvidersResponse is response type for the Query/Providers RPC method
 * @name QueryAccountsResponseSDKType
 * @package akash.escrow.v1beta1
 * @see proto type: akash.escrow.v1beta1.QueryAccountsResponse
 */
export interface QueryAccountsResponseSDKType {
  accounts: AccountSDKType[];
  pagination?: PageResponseSDKType;
}
/**
 * QueryPaymentRequest is request type for the Query/Payment RPC method
 * @name QueryPaymentsRequest
 * @package akash.escrow.v1beta1
 * @see proto type: akash.escrow.v1beta1.QueryPaymentsRequest
 */
export interface QueryPaymentsRequest {
  scope: string;
  xid: string;
  id: string;
  owner: string;
  state: string;
  pagination?: PageRequest;
}
export interface QueryPaymentsRequestProtoMsg {
  typeUrl: "/akash.escrow.v1beta1.QueryPaymentsRequest";
  value: Uint8Array;
}
/**
 * QueryPaymentRequest is request type for the Query/Payment RPC method
 * @name QueryPaymentsRequestAmino
 * @package akash.escrow.v1beta1
 * @see proto type: akash.escrow.v1beta1.QueryPaymentsRequest
 */
export interface QueryPaymentsRequestAmino {
  scope?: string;
  xid?: string;
  id?: string;
  owner?: string;
  state?: string;
  pagination?: PageRequestAmino;
}
/**
 * QueryPaymentRequest is request type for the Query/Payment RPC method
 * @name QueryPaymentsRequestSDKType
 * @package akash.escrow.v1beta1
 * @see proto type: akash.escrow.v1beta1.QueryPaymentsRequest
 */
export interface QueryPaymentsRequestSDKType {
  scope: string;
  xid: string;
  id: string;
  owner: string;
  state: string;
  pagination?: PageRequestSDKType;
}
/**
 * QueryProvidersResponse is response type for the Query/Providers RPC method
 * @name QueryPaymentsResponse
 * @package akash.escrow.v1beta1
 * @see proto type: akash.escrow.v1beta1.QueryPaymentsResponse
 */
export interface QueryPaymentsResponse {
  payments: Payment[];
  pagination?: PageResponse;
}
export interface QueryPaymentsResponseProtoMsg {
  typeUrl: "/akash.escrow.v1beta1.QueryPaymentsResponse";
  value: Uint8Array;
}
/**
 * QueryProvidersResponse is response type for the Query/Providers RPC method
 * @name QueryPaymentsResponseAmino
 * @package akash.escrow.v1beta1
 * @see proto type: akash.escrow.v1beta1.QueryPaymentsResponse
 */
export interface QueryPaymentsResponseAmino {
  payments?: PaymentAmino[];
  pagination?: PageResponseAmino;
}
/**
 * QueryProvidersResponse is response type for the Query/Providers RPC method
 * @name QueryPaymentsResponseSDKType
 * @package akash.escrow.v1beta1
 * @see proto type: akash.escrow.v1beta1.QueryPaymentsResponse
 */
export interface QueryPaymentsResponseSDKType {
  payments: PaymentSDKType[];
  pagination?: PageResponseSDKType;
}
function createBaseQueryAccountsRequest(): QueryAccountsRequest {
  return {
    scope: "",
    xid: "",
    owner: "",
    state: "",
    pagination: undefined
  };
}
/**
 * QueryAccountRequest is request type for the Query/Account RPC method
 * @name QueryAccountsRequest
 * @package akash.escrow.v1beta1
 * @see proto type: akash.escrow.v1beta1.QueryAccountsRequest
 */
export const QueryAccountsRequest = {
  typeUrl: "/akash.escrow.v1beta1.QueryAccountsRequest",
  is(o: any): o is QueryAccountsRequest {
    return o && (o.$typeUrl === QueryAccountsRequest.typeUrl || typeof o.scope === "string" && typeof o.xid === "string" && typeof o.owner === "string" && typeof o.state === "string");
  },
  isSDK(o: any): o is QueryAccountsRequestSDKType {
    return o && (o.$typeUrl === QueryAccountsRequest.typeUrl || typeof o.scope === "string" && typeof o.xid === "string" && typeof o.owner === "string" && typeof o.state === "string");
  },
  isAmino(o: any): o is QueryAccountsRequestAmino {
    return o && (o.$typeUrl === QueryAccountsRequest.typeUrl || typeof o.scope === "string" && typeof o.xid === "string" && typeof o.owner === "string" && typeof o.state === "string");
  },
  encode(message: QueryAccountsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.scope !== "") {
      writer.uint32(10).string(message.scope);
    }
    if (message.xid !== "") {
      writer.uint32(18).string(message.xid);
    }
    if (message.owner !== "") {
      writer.uint32(26).string(message.owner);
    }
    if (message.state !== "") {
      writer.uint32(34).string(message.state);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryAccountsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAccountsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.scope = reader.string();
          break;
        case 2:
          message.xid = reader.string();
          break;
        case 3:
          message.owner = reader.string();
          break;
        case 4:
          message.state = reader.string();
          break;
        case 5:
          message.pagination = PageRequest.decode(reader, reader.uint32(), useInterfaces);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryAccountsRequest {
    const obj = createBaseQueryAccountsRequest();
    if (isSet(object.scope)) obj.scope = String(object.scope);
    if (isSet(object.xid)) obj.xid = String(object.xid);
    if (isSet(object.owner)) obj.owner = String(object.owner);
    if (isSet(object.state)) obj.state = String(object.state);
    if (isSet(object.pagination)) obj.pagination = PageRequest.fromJSON(object.pagination);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryAccountsRequest>): QueryAccountsRequest {
    const message = createBaseQueryAccountsRequest();
    message.scope = object.scope ?? "";
    message.xid = object.xid ?? "";
    message.owner = object.owner ?? "";
    message.state = object.state ?? "";
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    }
    return message;
  },
  fromSDK(object: QueryAccountsRequestSDKType): QueryAccountsRequest {
    return {
      scope: object?.scope,
      xid: object?.xid,
      owner: object?.owner,
      state: object?.state,
      pagination: object.pagination ? PageRequest.fromSDK(object.pagination) : undefined
    };
  },
  toSDK(message: QueryAccountsRequest): QueryAccountsRequestSDKType {
    const obj: any = {};
    obj.scope = message.scope;
    obj.xid = message.xid;
    obj.owner = message.owner;
    obj.state = message.state;
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toSDK(message.pagination) : undefined);
    return obj;
  },
  fromAmino(object: QueryAccountsRequestAmino): QueryAccountsRequest {
    const message = createBaseQueryAccountsRequest();
    if (object.scope !== undefined && object.scope !== null) {
      message.scope = object.scope;
    }
    if (object.xid !== undefined && object.xid !== null) {
      message.xid = object.xid;
    }
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = object.owner;
    }
    if (object.state !== undefined && object.state !== null) {
      message.state = object.state;
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAccountsRequest, useInterfaces: boolean = true): QueryAccountsRequestAmino {
    const obj: any = {};
    obj.scope = message.scope === "" ? undefined : message.scope;
    obj.xid = message.xid === "" ? undefined : message.xid;
    obj.owner = message.owner === "" ? undefined : message.owner;
    obj.state = message.state === "" ? undefined : message.state;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination, useInterfaces) : undefined;
    return obj;
  },
  fromProtoMsg(message: QueryAccountsRequestProtoMsg, useInterfaces: boolean = true): QueryAccountsRequest {
    return QueryAccountsRequest.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryAccountsRequest): Uint8Array {
    return QueryAccountsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAccountsRequest): QueryAccountsRequestProtoMsg {
    return {
      typeUrl: "/akash.escrow.v1beta1.QueryAccountsRequest",
      value: QueryAccountsRequest.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(QueryAccountsRequest.typeUrl)) {
      return;
    }
    PageRequest.registerTypeUrl();
  }
};
function createBaseQueryAccountsResponse(): QueryAccountsResponse {
  return {
    accounts: [],
    pagination: undefined
  };
}
/**
 * QueryProvidersResponse is response type for the Query/Providers RPC method
 * @name QueryAccountsResponse
 * @package akash.escrow.v1beta1
 * @see proto type: akash.escrow.v1beta1.QueryAccountsResponse
 */
export const QueryAccountsResponse = {
  typeUrl: "/akash.escrow.v1beta1.QueryAccountsResponse",
  is(o: any): o is QueryAccountsResponse {
    return o && (o.$typeUrl === QueryAccountsResponse.typeUrl || Array.isArray(o.accounts) && (!o.accounts.length || Account.is(o.accounts[0])));
  },
  isSDK(o: any): o is QueryAccountsResponseSDKType {
    return o && (o.$typeUrl === QueryAccountsResponse.typeUrl || Array.isArray(o.accounts) && (!o.accounts.length || Account.isSDK(o.accounts[0])));
  },
  isAmino(o: any): o is QueryAccountsResponseAmino {
    return o && (o.$typeUrl === QueryAccountsResponse.typeUrl || Array.isArray(o.accounts) && (!o.accounts.length || Account.isAmino(o.accounts[0])));
  },
  encode(message: QueryAccountsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.accounts) {
      Account.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryAccountsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAccountsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.accounts.push(Account.decode(reader, reader.uint32(), useInterfaces));
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
  fromJSON(object: any): QueryAccountsResponse {
    const obj = createBaseQueryAccountsResponse();
    if (Array.isArray(object?.accounts)) obj.accounts = object.accounts.map((e: any) => Account.fromJSON(e));
    if (isSet(object.pagination)) obj.pagination = PageResponse.fromJSON(object.pagination);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryAccountsResponse>): QueryAccountsResponse {
    const message = createBaseQueryAccountsResponse();
    message.accounts = object.accounts?.map(e => Account.fromPartial(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    }
    return message;
  },
  fromSDK(object: QueryAccountsResponseSDKType): QueryAccountsResponse {
    return {
      accounts: Array.isArray(object?.accounts) ? object.accounts.map((e: any) => Account.fromSDK(e)) : [],
      pagination: object.pagination ? PageResponse.fromSDK(object.pagination) : undefined
    };
  },
  toSDK(message: QueryAccountsResponse): QueryAccountsResponseSDKType {
    const obj: any = {};
    if (message.accounts) {
      obj.accounts = message.accounts.map(e => e ? Account.toSDK(e) : undefined);
    } else {
      obj.accounts = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toSDK(message.pagination) : undefined);
    return obj;
  },
  fromAmino(object: QueryAccountsResponseAmino): QueryAccountsResponse {
    const message = createBaseQueryAccountsResponse();
    message.accounts = object.accounts?.map(e => Account.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAccountsResponse, useInterfaces: boolean = true): QueryAccountsResponseAmino {
    const obj: any = {};
    if (message.accounts) {
      obj.accounts = message.accounts.map(e => e ? Account.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.accounts = message.accounts;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination, useInterfaces) : undefined;
    return obj;
  },
  fromProtoMsg(message: QueryAccountsResponseProtoMsg, useInterfaces: boolean = true): QueryAccountsResponse {
    return QueryAccountsResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryAccountsResponse): Uint8Array {
    return QueryAccountsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAccountsResponse): QueryAccountsResponseProtoMsg {
    return {
      typeUrl: "/akash.escrow.v1beta1.QueryAccountsResponse",
      value: QueryAccountsResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(QueryAccountsResponse.typeUrl)) {
      return;
    }
    Account.registerTypeUrl();
    PageResponse.registerTypeUrl();
  }
};
function createBaseQueryPaymentsRequest(): QueryPaymentsRequest {
  return {
    scope: "",
    xid: "",
    id: "",
    owner: "",
    state: "",
    pagination: undefined
  };
}
/**
 * QueryPaymentRequest is request type for the Query/Payment RPC method
 * @name QueryPaymentsRequest
 * @package akash.escrow.v1beta1
 * @see proto type: akash.escrow.v1beta1.QueryPaymentsRequest
 */
export const QueryPaymentsRequest = {
  typeUrl: "/akash.escrow.v1beta1.QueryPaymentsRequest",
  is(o: any): o is QueryPaymentsRequest {
    return o && (o.$typeUrl === QueryPaymentsRequest.typeUrl || typeof o.scope === "string" && typeof o.xid === "string" && typeof o.id === "string" && typeof o.owner === "string" && typeof o.state === "string");
  },
  isSDK(o: any): o is QueryPaymentsRequestSDKType {
    return o && (o.$typeUrl === QueryPaymentsRequest.typeUrl || typeof o.scope === "string" && typeof o.xid === "string" && typeof o.id === "string" && typeof o.owner === "string" && typeof o.state === "string");
  },
  isAmino(o: any): o is QueryPaymentsRequestAmino {
    return o && (o.$typeUrl === QueryPaymentsRequest.typeUrl || typeof o.scope === "string" && typeof o.xid === "string" && typeof o.id === "string" && typeof o.owner === "string" && typeof o.state === "string");
  },
  encode(message: QueryPaymentsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.scope !== "") {
      writer.uint32(10).string(message.scope);
    }
    if (message.xid !== "") {
      writer.uint32(18).string(message.xid);
    }
    if (message.id !== "") {
      writer.uint32(26).string(message.id);
    }
    if (message.owner !== "") {
      writer.uint32(34).string(message.owner);
    }
    if (message.state !== "") {
      writer.uint32(42).string(message.state);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryPaymentsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPaymentsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.scope = reader.string();
          break;
        case 2:
          message.xid = reader.string();
          break;
        case 3:
          message.id = reader.string();
          break;
        case 4:
          message.owner = reader.string();
          break;
        case 5:
          message.state = reader.string();
          break;
        case 6:
          message.pagination = PageRequest.decode(reader, reader.uint32(), useInterfaces);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryPaymentsRequest {
    const obj = createBaseQueryPaymentsRequest();
    if (isSet(object.scope)) obj.scope = String(object.scope);
    if (isSet(object.xid)) obj.xid = String(object.xid);
    if (isSet(object.id)) obj.id = String(object.id);
    if (isSet(object.owner)) obj.owner = String(object.owner);
    if (isSet(object.state)) obj.state = String(object.state);
    if (isSet(object.pagination)) obj.pagination = PageRequest.fromJSON(object.pagination);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryPaymentsRequest>): QueryPaymentsRequest {
    const message = createBaseQueryPaymentsRequest();
    message.scope = object.scope ?? "";
    message.xid = object.xid ?? "";
    message.id = object.id ?? "";
    message.owner = object.owner ?? "";
    message.state = object.state ?? "";
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    }
    return message;
  },
  fromSDK(object: QueryPaymentsRequestSDKType): QueryPaymentsRequest {
    return {
      scope: object?.scope,
      xid: object?.xid,
      id: object?.id,
      owner: object?.owner,
      state: object?.state,
      pagination: object.pagination ? PageRequest.fromSDK(object.pagination) : undefined
    };
  },
  toSDK(message: QueryPaymentsRequest): QueryPaymentsRequestSDKType {
    const obj: any = {};
    obj.scope = message.scope;
    obj.xid = message.xid;
    obj.id = message.id;
    obj.owner = message.owner;
    obj.state = message.state;
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toSDK(message.pagination) : undefined);
    return obj;
  },
  fromAmino(object: QueryPaymentsRequestAmino): QueryPaymentsRequest {
    const message = createBaseQueryPaymentsRequest();
    if (object.scope !== undefined && object.scope !== null) {
      message.scope = object.scope;
    }
    if (object.xid !== undefined && object.xid !== null) {
      message.xid = object.xid;
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    }
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = object.owner;
    }
    if (object.state !== undefined && object.state !== null) {
      message.state = object.state;
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryPaymentsRequest, useInterfaces: boolean = true): QueryPaymentsRequestAmino {
    const obj: any = {};
    obj.scope = message.scope === "" ? undefined : message.scope;
    obj.xid = message.xid === "" ? undefined : message.xid;
    obj.id = message.id === "" ? undefined : message.id;
    obj.owner = message.owner === "" ? undefined : message.owner;
    obj.state = message.state === "" ? undefined : message.state;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination, useInterfaces) : undefined;
    return obj;
  },
  fromProtoMsg(message: QueryPaymentsRequestProtoMsg, useInterfaces: boolean = true): QueryPaymentsRequest {
    return QueryPaymentsRequest.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryPaymentsRequest): Uint8Array {
    return QueryPaymentsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryPaymentsRequest): QueryPaymentsRequestProtoMsg {
    return {
      typeUrl: "/akash.escrow.v1beta1.QueryPaymentsRequest",
      value: QueryPaymentsRequest.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(QueryPaymentsRequest.typeUrl)) {
      return;
    }
    PageRequest.registerTypeUrl();
  }
};
function createBaseQueryPaymentsResponse(): QueryPaymentsResponse {
  return {
    payments: [],
    pagination: undefined
  };
}
/**
 * QueryProvidersResponse is response type for the Query/Providers RPC method
 * @name QueryPaymentsResponse
 * @package akash.escrow.v1beta1
 * @see proto type: akash.escrow.v1beta1.QueryPaymentsResponse
 */
export const QueryPaymentsResponse = {
  typeUrl: "/akash.escrow.v1beta1.QueryPaymentsResponse",
  is(o: any): o is QueryPaymentsResponse {
    return o && (o.$typeUrl === QueryPaymentsResponse.typeUrl || Array.isArray(o.payments) && (!o.payments.length || Payment.is(o.payments[0])));
  },
  isSDK(o: any): o is QueryPaymentsResponseSDKType {
    return o && (o.$typeUrl === QueryPaymentsResponse.typeUrl || Array.isArray(o.payments) && (!o.payments.length || Payment.isSDK(o.payments[0])));
  },
  isAmino(o: any): o is QueryPaymentsResponseAmino {
    return o && (o.$typeUrl === QueryPaymentsResponse.typeUrl || Array.isArray(o.payments) && (!o.payments.length || Payment.isAmino(o.payments[0])));
  },
  encode(message: QueryPaymentsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.payments) {
      Payment.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryPaymentsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPaymentsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.payments.push(Payment.decode(reader, reader.uint32(), useInterfaces));
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
  fromJSON(object: any): QueryPaymentsResponse {
    const obj = createBaseQueryPaymentsResponse();
    if (Array.isArray(object?.payments)) obj.payments = object.payments.map((e: any) => Payment.fromJSON(e));
    if (isSet(object.pagination)) obj.pagination = PageResponse.fromJSON(object.pagination);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryPaymentsResponse>): QueryPaymentsResponse {
    const message = createBaseQueryPaymentsResponse();
    message.payments = object.payments?.map(e => Payment.fromPartial(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    }
    return message;
  },
  fromSDK(object: QueryPaymentsResponseSDKType): QueryPaymentsResponse {
    return {
      payments: Array.isArray(object?.payments) ? object.payments.map((e: any) => Payment.fromSDK(e)) : [],
      pagination: object.pagination ? PageResponse.fromSDK(object.pagination) : undefined
    };
  },
  toSDK(message: QueryPaymentsResponse): QueryPaymentsResponseSDKType {
    const obj: any = {};
    if (message.payments) {
      obj.payments = message.payments.map(e => e ? Payment.toSDK(e) : undefined);
    } else {
      obj.payments = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toSDK(message.pagination) : undefined);
    return obj;
  },
  fromAmino(object: QueryPaymentsResponseAmino): QueryPaymentsResponse {
    const message = createBaseQueryPaymentsResponse();
    message.payments = object.payments?.map(e => Payment.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryPaymentsResponse, useInterfaces: boolean = true): QueryPaymentsResponseAmino {
    const obj: any = {};
    if (message.payments) {
      obj.payments = message.payments.map(e => e ? Payment.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.payments = message.payments;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination, useInterfaces) : undefined;
    return obj;
  },
  fromProtoMsg(message: QueryPaymentsResponseProtoMsg, useInterfaces: boolean = true): QueryPaymentsResponse {
    return QueryPaymentsResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryPaymentsResponse): Uint8Array {
    return QueryPaymentsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryPaymentsResponse): QueryPaymentsResponseProtoMsg {
    return {
      typeUrl: "/akash.escrow.v1beta1.QueryPaymentsResponse",
      value: QueryPaymentsResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(QueryPaymentsResponse.typeUrl)) {
      return;
    }
    Payment.registerTypeUrl();
    PageResponse.registerTypeUrl();
  }
};