import { OrderFilters, OrderFiltersAmino, OrderFiltersSDKType, OrderID, OrderIDAmino, OrderIDSDKType, Order, OrderAmino, OrderSDKType } from "./order";
import { PageRequest, PageRequestAmino, PageRequestSDKType, PageResponse, PageResponseAmino, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { BidFilters, BidFiltersAmino, BidFiltersSDKType, BidID, BidIDAmino, BidIDSDKType, Bid, BidAmino, BidSDKType } from "./bid";
import { LeaseFilters, LeaseFiltersAmino, LeaseFiltersSDKType, LeaseID, LeaseIDAmino, LeaseIDSDKType, Lease, LeaseAmino, LeaseSDKType } from "./lease";
import { Account, AccountAmino, AccountSDKType, FractionalPayment, FractionalPaymentAmino, FractionalPaymentSDKType } from "../../escrow/v1beta2/types";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { GlobalDecoderRegistry } from "../../../registry";
import { isSet, DeepPartial } from "../../../helpers";
export const protobufPackage = "akash.market.v1beta2";
/**
 * QueryOrdersRequest is request type for the Query/Orders RPC method
 * @name QueryOrdersRequest
 * @package akash.market.v1beta2
 * @see proto type: akash.market.v1beta2.QueryOrdersRequest
 */
export interface QueryOrdersRequest {
  filters: OrderFilters;
  pagination?: PageRequest;
}
export interface QueryOrdersRequestProtoMsg {
  typeUrl: "/akash.market.v1beta2.QueryOrdersRequest";
  value: Uint8Array;
}
/**
 * QueryOrdersRequest is request type for the Query/Orders RPC method
 * @name QueryOrdersRequestAmino
 * @package akash.market.v1beta2
 * @see proto type: akash.market.v1beta2.QueryOrdersRequest
 */
export interface QueryOrdersRequestAmino {
  filters?: OrderFiltersAmino;
  pagination?: PageRequestAmino;
}
/**
 * QueryOrdersRequest is request type for the Query/Orders RPC method
 * @name QueryOrdersRequestSDKType
 * @package akash.market.v1beta2
 * @see proto type: akash.market.v1beta2.QueryOrdersRequest
 */
export interface QueryOrdersRequestSDKType {
  filters: OrderFiltersSDKType;
  pagination?: PageRequestSDKType;
}
/**
 * QueryOrdersResponse is response type for the Query/Orders RPC method
 * @name QueryOrdersResponse
 * @package akash.market.v1beta2
 * @see proto type: akash.market.v1beta2.QueryOrdersResponse
 */
export interface QueryOrdersResponse {
  orders: Order[];
  pagination?: PageResponse;
}
export interface QueryOrdersResponseProtoMsg {
  typeUrl: "/akash.market.v1beta2.QueryOrdersResponse";
  value: Uint8Array;
}
/**
 * QueryOrdersResponse is response type for the Query/Orders RPC method
 * @name QueryOrdersResponseAmino
 * @package akash.market.v1beta2
 * @see proto type: akash.market.v1beta2.QueryOrdersResponse
 */
export interface QueryOrdersResponseAmino {
  orders?: OrderAmino[];
  pagination?: PageResponseAmino;
}
/**
 * QueryOrdersResponse is response type for the Query/Orders RPC method
 * @name QueryOrdersResponseSDKType
 * @package akash.market.v1beta2
 * @see proto type: akash.market.v1beta2.QueryOrdersResponse
 */
export interface QueryOrdersResponseSDKType {
  orders: OrderSDKType[];
  pagination?: PageResponseSDKType;
}
/**
 * QueryOrderRequest is request type for the Query/Order RPC method
 * @name QueryOrderRequest
 * @package akash.market.v1beta2
 * @see proto type: akash.market.v1beta2.QueryOrderRequest
 */
export interface QueryOrderRequest {
  id: OrderID;
}
export interface QueryOrderRequestProtoMsg {
  typeUrl: "/akash.market.v1beta2.QueryOrderRequest";
  value: Uint8Array;
}
/**
 * QueryOrderRequest is request type for the Query/Order RPC method
 * @name QueryOrderRequestAmino
 * @package akash.market.v1beta2
 * @see proto type: akash.market.v1beta2.QueryOrderRequest
 */
export interface QueryOrderRequestAmino {
  id?: OrderIDAmino;
}
/**
 * QueryOrderRequest is request type for the Query/Order RPC method
 * @name QueryOrderRequestSDKType
 * @package akash.market.v1beta2
 * @see proto type: akash.market.v1beta2.QueryOrderRequest
 */
export interface QueryOrderRequestSDKType {
  id: OrderIDSDKType;
}
/**
 * QueryOrderResponse is response type for the Query/Order RPC method
 * @name QueryOrderResponse
 * @package akash.market.v1beta2
 * @see proto type: akash.market.v1beta2.QueryOrderResponse
 */
export interface QueryOrderResponse {
  order: Order;
}
export interface QueryOrderResponseProtoMsg {
  typeUrl: "/akash.market.v1beta2.QueryOrderResponse";
  value: Uint8Array;
}
/**
 * QueryOrderResponse is response type for the Query/Order RPC method
 * @name QueryOrderResponseAmino
 * @package akash.market.v1beta2
 * @see proto type: akash.market.v1beta2.QueryOrderResponse
 */
export interface QueryOrderResponseAmino {
  order?: OrderAmino;
}
/**
 * QueryOrderResponse is response type for the Query/Order RPC method
 * @name QueryOrderResponseSDKType
 * @package akash.market.v1beta2
 * @see proto type: akash.market.v1beta2.QueryOrderResponse
 */
export interface QueryOrderResponseSDKType {
  order: OrderSDKType;
}
/**
 * QueryBidsRequest is request type for the Query/Bids RPC method
 * @name QueryBidsRequest
 * @package akash.market.v1beta2
 * @see proto type: akash.market.v1beta2.QueryBidsRequest
 */
export interface QueryBidsRequest {
  filters: BidFilters;
  pagination?: PageRequest;
}
export interface QueryBidsRequestProtoMsg {
  typeUrl: "/akash.market.v1beta2.QueryBidsRequest";
  value: Uint8Array;
}
/**
 * QueryBidsRequest is request type for the Query/Bids RPC method
 * @name QueryBidsRequestAmino
 * @package akash.market.v1beta2
 * @see proto type: akash.market.v1beta2.QueryBidsRequest
 */
export interface QueryBidsRequestAmino {
  filters?: BidFiltersAmino;
  pagination?: PageRequestAmino;
}
/**
 * QueryBidsRequest is request type for the Query/Bids RPC method
 * @name QueryBidsRequestSDKType
 * @package akash.market.v1beta2
 * @see proto type: akash.market.v1beta2.QueryBidsRequest
 */
export interface QueryBidsRequestSDKType {
  filters: BidFiltersSDKType;
  pagination?: PageRequestSDKType;
}
/**
 * QueryBidsResponse is response type for the Query/Bids RPC method
 * @name QueryBidsResponse
 * @package akash.market.v1beta2
 * @see proto type: akash.market.v1beta2.QueryBidsResponse
 */
export interface QueryBidsResponse {
  bids: QueryBidResponse[];
  pagination?: PageResponse;
}
export interface QueryBidsResponseProtoMsg {
  typeUrl: "/akash.market.v1beta2.QueryBidsResponse";
  value: Uint8Array;
}
/**
 * QueryBidsResponse is response type for the Query/Bids RPC method
 * @name QueryBidsResponseAmino
 * @package akash.market.v1beta2
 * @see proto type: akash.market.v1beta2.QueryBidsResponse
 */
export interface QueryBidsResponseAmino {
  bids?: QueryBidResponseAmino[];
  pagination?: PageResponseAmino;
}
/**
 * QueryBidsResponse is response type for the Query/Bids RPC method
 * @name QueryBidsResponseSDKType
 * @package akash.market.v1beta2
 * @see proto type: akash.market.v1beta2.QueryBidsResponse
 */
export interface QueryBidsResponseSDKType {
  bids: QueryBidResponseSDKType[];
  pagination?: PageResponseSDKType;
}
/**
 * QueryBidRequest is request type for the Query/Bid RPC method
 * @name QueryBidRequest
 * @package akash.market.v1beta2
 * @see proto type: akash.market.v1beta2.QueryBidRequest
 */
export interface QueryBidRequest {
  id: BidID;
}
export interface QueryBidRequestProtoMsg {
  typeUrl: "/akash.market.v1beta2.QueryBidRequest";
  value: Uint8Array;
}
/**
 * QueryBidRequest is request type for the Query/Bid RPC method
 * @name QueryBidRequestAmino
 * @package akash.market.v1beta2
 * @see proto type: akash.market.v1beta2.QueryBidRequest
 */
export interface QueryBidRequestAmino {
  id?: BidIDAmino;
}
/**
 * QueryBidRequest is request type for the Query/Bid RPC method
 * @name QueryBidRequestSDKType
 * @package akash.market.v1beta2
 * @see proto type: akash.market.v1beta2.QueryBidRequest
 */
export interface QueryBidRequestSDKType {
  id: BidIDSDKType;
}
/**
 * QueryBidResponse is response type for the Query/Bid RPC method
 * @name QueryBidResponse
 * @package akash.market.v1beta2
 * @see proto type: akash.market.v1beta2.QueryBidResponse
 */
export interface QueryBidResponse {
  bid: Bid;
  escrowAccount: Account;
}
export interface QueryBidResponseProtoMsg {
  typeUrl: "/akash.market.v1beta2.QueryBidResponse";
  value: Uint8Array;
}
/**
 * QueryBidResponse is response type for the Query/Bid RPC method
 * @name QueryBidResponseAmino
 * @package akash.market.v1beta2
 * @see proto type: akash.market.v1beta2.QueryBidResponse
 */
export interface QueryBidResponseAmino {
  bid?: BidAmino;
  escrow_account?: AccountAmino;
}
/**
 * QueryBidResponse is response type for the Query/Bid RPC method
 * @name QueryBidResponseSDKType
 * @package akash.market.v1beta2
 * @see proto type: akash.market.v1beta2.QueryBidResponse
 */
export interface QueryBidResponseSDKType {
  bid: BidSDKType;
  escrow_account: AccountSDKType;
}
/**
 * QueryLeasesRequest is request type for the Query/Leases RPC method
 * @name QueryLeasesRequest
 * @package akash.market.v1beta2
 * @see proto type: akash.market.v1beta2.QueryLeasesRequest
 */
export interface QueryLeasesRequest {
  filters: LeaseFilters;
  pagination?: PageRequest;
}
export interface QueryLeasesRequestProtoMsg {
  typeUrl: "/akash.market.v1beta2.QueryLeasesRequest";
  value: Uint8Array;
}
/**
 * QueryLeasesRequest is request type for the Query/Leases RPC method
 * @name QueryLeasesRequestAmino
 * @package akash.market.v1beta2
 * @see proto type: akash.market.v1beta2.QueryLeasesRequest
 */
export interface QueryLeasesRequestAmino {
  filters?: LeaseFiltersAmino;
  pagination?: PageRequestAmino;
}
/**
 * QueryLeasesRequest is request type for the Query/Leases RPC method
 * @name QueryLeasesRequestSDKType
 * @package akash.market.v1beta2
 * @see proto type: akash.market.v1beta2.QueryLeasesRequest
 */
export interface QueryLeasesRequestSDKType {
  filters: LeaseFiltersSDKType;
  pagination?: PageRequestSDKType;
}
/**
 * QueryLeasesResponse is response type for the Query/Leases RPC method
 * @name QueryLeasesResponse
 * @package akash.market.v1beta2
 * @see proto type: akash.market.v1beta2.QueryLeasesResponse
 */
export interface QueryLeasesResponse {
  leases: QueryLeaseResponse[];
  pagination?: PageResponse;
}
export interface QueryLeasesResponseProtoMsg {
  typeUrl: "/akash.market.v1beta2.QueryLeasesResponse";
  value: Uint8Array;
}
/**
 * QueryLeasesResponse is response type for the Query/Leases RPC method
 * @name QueryLeasesResponseAmino
 * @package akash.market.v1beta2
 * @see proto type: akash.market.v1beta2.QueryLeasesResponse
 */
export interface QueryLeasesResponseAmino {
  leases?: QueryLeaseResponseAmino[];
  pagination?: PageResponseAmino;
}
/**
 * QueryLeasesResponse is response type for the Query/Leases RPC method
 * @name QueryLeasesResponseSDKType
 * @package akash.market.v1beta2
 * @see proto type: akash.market.v1beta2.QueryLeasesResponse
 */
export interface QueryLeasesResponseSDKType {
  leases: QueryLeaseResponseSDKType[];
  pagination?: PageResponseSDKType;
}
/**
 * QueryLeaseRequest is request type for the Query/Lease RPC method
 * @name QueryLeaseRequest
 * @package akash.market.v1beta2
 * @see proto type: akash.market.v1beta2.QueryLeaseRequest
 */
export interface QueryLeaseRequest {
  id: LeaseID;
}
export interface QueryLeaseRequestProtoMsg {
  typeUrl: "/akash.market.v1beta2.QueryLeaseRequest";
  value: Uint8Array;
}
/**
 * QueryLeaseRequest is request type for the Query/Lease RPC method
 * @name QueryLeaseRequestAmino
 * @package akash.market.v1beta2
 * @see proto type: akash.market.v1beta2.QueryLeaseRequest
 */
export interface QueryLeaseRequestAmino {
  id?: LeaseIDAmino;
}
/**
 * QueryLeaseRequest is request type for the Query/Lease RPC method
 * @name QueryLeaseRequestSDKType
 * @package akash.market.v1beta2
 * @see proto type: akash.market.v1beta2.QueryLeaseRequest
 */
export interface QueryLeaseRequestSDKType {
  id: LeaseIDSDKType;
}
/**
 * QueryLeaseResponse is response type for the Query/Lease RPC method
 * @name QueryLeaseResponse
 * @package akash.market.v1beta2
 * @see proto type: akash.market.v1beta2.QueryLeaseResponse
 */
export interface QueryLeaseResponse {
  lease: Lease;
  escrowPayment: FractionalPayment;
}
export interface QueryLeaseResponseProtoMsg {
  typeUrl: "/akash.market.v1beta2.QueryLeaseResponse";
  value: Uint8Array;
}
/**
 * QueryLeaseResponse is response type for the Query/Lease RPC method
 * @name QueryLeaseResponseAmino
 * @package akash.market.v1beta2
 * @see proto type: akash.market.v1beta2.QueryLeaseResponse
 */
export interface QueryLeaseResponseAmino {
  lease?: LeaseAmino;
  escrow_payment?: FractionalPaymentAmino;
}
/**
 * QueryLeaseResponse is response type for the Query/Lease RPC method
 * @name QueryLeaseResponseSDKType
 * @package akash.market.v1beta2
 * @see proto type: akash.market.v1beta2.QueryLeaseResponse
 */
export interface QueryLeaseResponseSDKType {
  lease: LeaseSDKType;
  escrow_payment: FractionalPaymentSDKType;
}
function createBaseQueryOrdersRequest(): QueryOrdersRequest {
  return {
    filters: OrderFilters.fromPartial({}),
    pagination: undefined
  };
}
/**
 * QueryOrdersRequest is request type for the Query/Orders RPC method
 * @name QueryOrdersRequest
 * @package akash.market.v1beta2
 * @see proto type: akash.market.v1beta2.QueryOrdersRequest
 */
export const QueryOrdersRequest = {
  typeUrl: "/akash.market.v1beta2.QueryOrdersRequest",
  is(o: any): o is QueryOrdersRequest {
    return o && (o.$typeUrl === QueryOrdersRequest.typeUrl || OrderFilters.is(o.filters));
  },
  isSDK(o: any): o is QueryOrdersRequestSDKType {
    return o && (o.$typeUrl === QueryOrdersRequest.typeUrl || OrderFilters.isSDK(o.filters));
  },
  isAmino(o: any): o is QueryOrdersRequestAmino {
    return o && (o.$typeUrl === QueryOrdersRequest.typeUrl || OrderFilters.isAmino(o.filters));
  },
  encode(message: QueryOrdersRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.filters !== undefined) {
      OrderFilters.encode(message.filters, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryOrdersRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryOrdersRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.filters = OrderFilters.decode(reader, reader.uint32(), useInterfaces);
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
  fromJSON(object: any): QueryOrdersRequest {
    const obj = createBaseQueryOrdersRequest();
    if (isSet(object.filters)) obj.filters = OrderFilters.fromJSON(object.filters);
    if (isSet(object.pagination)) obj.pagination = PageRequest.fromJSON(object.pagination);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryOrdersRequest>): QueryOrdersRequest {
    const message = createBaseQueryOrdersRequest();
    if (object.filters !== undefined && object.filters !== null) {
      message.filters = OrderFilters.fromPartial(object.filters);
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    }
    return message;
  },
  fromSDK(object: QueryOrdersRequestSDKType): QueryOrdersRequest {
    return {
      filters: object.filters ? OrderFilters.fromSDK(object.filters) : undefined,
      pagination: object.pagination ? PageRequest.fromSDK(object.pagination) : undefined
    };
  },
  toSDK(message: QueryOrdersRequest): QueryOrdersRequestSDKType {
    const obj: any = {};
    message.filters !== undefined && (obj.filters = message.filters ? OrderFilters.toSDK(message.filters) : undefined);
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toSDK(message.pagination) : undefined);
    return obj;
  },
  fromAmino(object: QueryOrdersRequestAmino): QueryOrdersRequest {
    const message = createBaseQueryOrdersRequest();
    if (object.filters !== undefined && object.filters !== null) {
      message.filters = OrderFilters.fromAmino(object.filters);
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryOrdersRequest, useInterfaces: boolean = true): QueryOrdersRequestAmino {
    const obj: any = {};
    obj.filters = message.filters ? OrderFilters.toAmino(message.filters, useInterfaces) : undefined;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination, useInterfaces) : undefined;
    return obj;
  },
  fromProtoMsg(message: QueryOrdersRequestProtoMsg, useInterfaces: boolean = true): QueryOrdersRequest {
    return QueryOrdersRequest.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryOrdersRequest): Uint8Array {
    return QueryOrdersRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryOrdersRequest): QueryOrdersRequestProtoMsg {
    return {
      typeUrl: "/akash.market.v1beta2.QueryOrdersRequest",
      value: QueryOrdersRequest.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(QueryOrdersRequest.typeUrl)) {
      return;
    }
    OrderFilters.registerTypeUrl();
    PageRequest.registerTypeUrl();
  }
};
function createBaseQueryOrdersResponse(): QueryOrdersResponse {
  return {
    orders: [],
    pagination: undefined
  };
}
/**
 * QueryOrdersResponse is response type for the Query/Orders RPC method
 * @name QueryOrdersResponse
 * @package akash.market.v1beta2
 * @see proto type: akash.market.v1beta2.QueryOrdersResponse
 */
export const QueryOrdersResponse = {
  typeUrl: "/akash.market.v1beta2.QueryOrdersResponse",
  is(o: any): o is QueryOrdersResponse {
    return o && (o.$typeUrl === QueryOrdersResponse.typeUrl || Array.isArray(o.orders) && (!o.orders.length || Order.is(o.orders[0])));
  },
  isSDK(o: any): o is QueryOrdersResponseSDKType {
    return o && (o.$typeUrl === QueryOrdersResponse.typeUrl || Array.isArray(o.orders) && (!o.orders.length || Order.isSDK(o.orders[0])));
  },
  isAmino(o: any): o is QueryOrdersResponseAmino {
    return o && (o.$typeUrl === QueryOrdersResponse.typeUrl || Array.isArray(o.orders) && (!o.orders.length || Order.isAmino(o.orders[0])));
  },
  encode(message: QueryOrdersResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.orders) {
      Order.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryOrdersResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryOrdersResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.orders.push(Order.decode(reader, reader.uint32(), useInterfaces));
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
  fromJSON(object: any): QueryOrdersResponse {
    const obj = createBaseQueryOrdersResponse();
    if (Array.isArray(object?.orders)) obj.orders = object.orders.map((e: any) => Order.fromJSON(e));
    if (isSet(object.pagination)) obj.pagination = PageResponse.fromJSON(object.pagination);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryOrdersResponse>): QueryOrdersResponse {
    const message = createBaseQueryOrdersResponse();
    message.orders = object.orders?.map(e => Order.fromPartial(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    }
    return message;
  },
  fromSDK(object: QueryOrdersResponseSDKType): QueryOrdersResponse {
    return {
      orders: Array.isArray(object?.orders) ? object.orders.map((e: any) => Order.fromSDK(e)) : [],
      pagination: object.pagination ? PageResponse.fromSDK(object.pagination) : undefined
    };
  },
  toSDK(message: QueryOrdersResponse): QueryOrdersResponseSDKType {
    const obj: any = {};
    if (message.orders) {
      obj.orders = message.orders.map(e => e ? Order.toSDK(e) : undefined);
    } else {
      obj.orders = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toSDK(message.pagination) : undefined);
    return obj;
  },
  fromAmino(object: QueryOrdersResponseAmino): QueryOrdersResponse {
    const message = createBaseQueryOrdersResponse();
    message.orders = object.orders?.map(e => Order.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryOrdersResponse, useInterfaces: boolean = true): QueryOrdersResponseAmino {
    const obj: any = {};
    if (message.orders) {
      obj.orders = message.orders.map(e => e ? Order.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.orders = message.orders;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination, useInterfaces) : undefined;
    return obj;
  },
  fromProtoMsg(message: QueryOrdersResponseProtoMsg, useInterfaces: boolean = true): QueryOrdersResponse {
    return QueryOrdersResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryOrdersResponse): Uint8Array {
    return QueryOrdersResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryOrdersResponse): QueryOrdersResponseProtoMsg {
    return {
      typeUrl: "/akash.market.v1beta2.QueryOrdersResponse",
      value: QueryOrdersResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(QueryOrdersResponse.typeUrl)) {
      return;
    }
    Order.registerTypeUrl();
    PageResponse.registerTypeUrl();
  }
};
function createBaseQueryOrderRequest(): QueryOrderRequest {
  return {
    id: OrderID.fromPartial({})
  };
}
/**
 * QueryOrderRequest is request type for the Query/Order RPC method
 * @name QueryOrderRequest
 * @package akash.market.v1beta2
 * @see proto type: akash.market.v1beta2.QueryOrderRequest
 */
export const QueryOrderRequest = {
  typeUrl: "/akash.market.v1beta2.QueryOrderRequest",
  is(o: any): o is QueryOrderRequest {
    return o && (o.$typeUrl === QueryOrderRequest.typeUrl || OrderID.is(o.id));
  },
  isSDK(o: any): o is QueryOrderRequestSDKType {
    return o && (o.$typeUrl === QueryOrderRequest.typeUrl || OrderID.isSDK(o.id));
  },
  isAmino(o: any): o is QueryOrderRequestAmino {
    return o && (o.$typeUrl === QueryOrderRequest.typeUrl || OrderID.isAmino(o.id));
  },
  encode(message: QueryOrderRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== undefined) {
      OrderID.encode(message.id, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryOrderRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryOrderRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = OrderID.decode(reader, reader.uint32(), useInterfaces);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryOrderRequest {
    const obj = createBaseQueryOrderRequest();
    if (isSet(object.id)) obj.id = OrderID.fromJSON(object.id);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryOrderRequest>): QueryOrderRequest {
    const message = createBaseQueryOrderRequest();
    if (object.id !== undefined && object.id !== null) {
      message.id = OrderID.fromPartial(object.id);
    }
    return message;
  },
  fromSDK(object: QueryOrderRequestSDKType): QueryOrderRequest {
    return {
      id: object.id ? OrderID.fromSDK(object.id) : undefined
    };
  },
  toSDK(message: QueryOrderRequest): QueryOrderRequestSDKType {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id ? OrderID.toSDK(message.id) : undefined);
    return obj;
  },
  fromAmino(object: QueryOrderRequestAmino): QueryOrderRequest {
    const message = createBaseQueryOrderRequest();
    if (object.id !== undefined && object.id !== null) {
      message.id = OrderID.fromAmino(object.id);
    }
    return message;
  },
  toAmino(message: QueryOrderRequest, useInterfaces: boolean = true): QueryOrderRequestAmino {
    const obj: any = {};
    obj.id = message.id ? OrderID.toAmino(message.id, useInterfaces) : undefined;
    return obj;
  },
  fromProtoMsg(message: QueryOrderRequestProtoMsg, useInterfaces: boolean = true): QueryOrderRequest {
    return QueryOrderRequest.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryOrderRequest): Uint8Array {
    return QueryOrderRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryOrderRequest): QueryOrderRequestProtoMsg {
    return {
      typeUrl: "/akash.market.v1beta2.QueryOrderRequest",
      value: QueryOrderRequest.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(QueryOrderRequest.typeUrl)) {
      return;
    }
    OrderID.registerTypeUrl();
  }
};
function createBaseQueryOrderResponse(): QueryOrderResponse {
  return {
    order: Order.fromPartial({})
  };
}
/**
 * QueryOrderResponse is response type for the Query/Order RPC method
 * @name QueryOrderResponse
 * @package akash.market.v1beta2
 * @see proto type: akash.market.v1beta2.QueryOrderResponse
 */
export const QueryOrderResponse = {
  typeUrl: "/akash.market.v1beta2.QueryOrderResponse",
  is(o: any): o is QueryOrderResponse {
    return o && (o.$typeUrl === QueryOrderResponse.typeUrl || Order.is(o.order));
  },
  isSDK(o: any): o is QueryOrderResponseSDKType {
    return o && (o.$typeUrl === QueryOrderResponse.typeUrl || Order.isSDK(o.order));
  },
  isAmino(o: any): o is QueryOrderResponseAmino {
    return o && (o.$typeUrl === QueryOrderResponse.typeUrl || Order.isAmino(o.order));
  },
  encode(message: QueryOrderResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.order !== undefined) {
      Order.encode(message.order, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryOrderResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryOrderResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.order = Order.decode(reader, reader.uint32(), useInterfaces);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryOrderResponse {
    const obj = createBaseQueryOrderResponse();
    if (isSet(object.order)) obj.order = Order.fromJSON(object.order);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryOrderResponse>): QueryOrderResponse {
    const message = createBaseQueryOrderResponse();
    if (object.order !== undefined && object.order !== null) {
      message.order = Order.fromPartial(object.order);
    }
    return message;
  },
  fromSDK(object: QueryOrderResponseSDKType): QueryOrderResponse {
    return {
      order: object.order ? Order.fromSDK(object.order) : undefined
    };
  },
  toSDK(message: QueryOrderResponse): QueryOrderResponseSDKType {
    const obj: any = {};
    message.order !== undefined && (obj.order = message.order ? Order.toSDK(message.order) : undefined);
    return obj;
  },
  fromAmino(object: QueryOrderResponseAmino): QueryOrderResponse {
    const message = createBaseQueryOrderResponse();
    if (object.order !== undefined && object.order !== null) {
      message.order = Order.fromAmino(object.order);
    }
    return message;
  },
  toAmino(message: QueryOrderResponse, useInterfaces: boolean = true): QueryOrderResponseAmino {
    const obj: any = {};
    obj.order = message.order ? Order.toAmino(message.order, useInterfaces) : undefined;
    return obj;
  },
  fromProtoMsg(message: QueryOrderResponseProtoMsg, useInterfaces: boolean = true): QueryOrderResponse {
    return QueryOrderResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryOrderResponse): Uint8Array {
    return QueryOrderResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryOrderResponse): QueryOrderResponseProtoMsg {
    return {
      typeUrl: "/akash.market.v1beta2.QueryOrderResponse",
      value: QueryOrderResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(QueryOrderResponse.typeUrl)) {
      return;
    }
    Order.registerTypeUrl();
  }
};
function createBaseQueryBidsRequest(): QueryBidsRequest {
  return {
    filters: BidFilters.fromPartial({}),
    pagination: undefined
  };
}
/**
 * QueryBidsRequest is request type for the Query/Bids RPC method
 * @name QueryBidsRequest
 * @package akash.market.v1beta2
 * @see proto type: akash.market.v1beta2.QueryBidsRequest
 */
export const QueryBidsRequest = {
  typeUrl: "/akash.market.v1beta2.QueryBidsRequest",
  is(o: any): o is QueryBidsRequest {
    return o && (o.$typeUrl === QueryBidsRequest.typeUrl || BidFilters.is(o.filters));
  },
  isSDK(o: any): o is QueryBidsRequestSDKType {
    return o && (o.$typeUrl === QueryBidsRequest.typeUrl || BidFilters.isSDK(o.filters));
  },
  isAmino(o: any): o is QueryBidsRequestAmino {
    return o && (o.$typeUrl === QueryBidsRequest.typeUrl || BidFilters.isAmino(o.filters));
  },
  encode(message: QueryBidsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.filters !== undefined) {
      BidFilters.encode(message.filters, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryBidsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryBidsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.filters = BidFilters.decode(reader, reader.uint32(), useInterfaces);
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
  fromJSON(object: any): QueryBidsRequest {
    const obj = createBaseQueryBidsRequest();
    if (isSet(object.filters)) obj.filters = BidFilters.fromJSON(object.filters);
    if (isSet(object.pagination)) obj.pagination = PageRequest.fromJSON(object.pagination);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryBidsRequest>): QueryBidsRequest {
    const message = createBaseQueryBidsRequest();
    if (object.filters !== undefined && object.filters !== null) {
      message.filters = BidFilters.fromPartial(object.filters);
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    }
    return message;
  },
  fromSDK(object: QueryBidsRequestSDKType): QueryBidsRequest {
    return {
      filters: object.filters ? BidFilters.fromSDK(object.filters) : undefined,
      pagination: object.pagination ? PageRequest.fromSDK(object.pagination) : undefined
    };
  },
  toSDK(message: QueryBidsRequest): QueryBidsRequestSDKType {
    const obj: any = {};
    message.filters !== undefined && (obj.filters = message.filters ? BidFilters.toSDK(message.filters) : undefined);
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toSDK(message.pagination) : undefined);
    return obj;
  },
  fromAmino(object: QueryBidsRequestAmino): QueryBidsRequest {
    const message = createBaseQueryBidsRequest();
    if (object.filters !== undefined && object.filters !== null) {
      message.filters = BidFilters.fromAmino(object.filters);
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryBidsRequest, useInterfaces: boolean = true): QueryBidsRequestAmino {
    const obj: any = {};
    obj.filters = message.filters ? BidFilters.toAmino(message.filters, useInterfaces) : undefined;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination, useInterfaces) : undefined;
    return obj;
  },
  fromProtoMsg(message: QueryBidsRequestProtoMsg, useInterfaces: boolean = true): QueryBidsRequest {
    return QueryBidsRequest.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryBidsRequest): Uint8Array {
    return QueryBidsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryBidsRequest): QueryBidsRequestProtoMsg {
    return {
      typeUrl: "/akash.market.v1beta2.QueryBidsRequest",
      value: QueryBidsRequest.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(QueryBidsRequest.typeUrl)) {
      return;
    }
    BidFilters.registerTypeUrl();
    PageRequest.registerTypeUrl();
  }
};
function createBaseQueryBidsResponse(): QueryBidsResponse {
  return {
    bids: [],
    pagination: undefined
  };
}
/**
 * QueryBidsResponse is response type for the Query/Bids RPC method
 * @name QueryBidsResponse
 * @package akash.market.v1beta2
 * @see proto type: akash.market.v1beta2.QueryBidsResponse
 */
export const QueryBidsResponse = {
  typeUrl: "/akash.market.v1beta2.QueryBidsResponse",
  is(o: any): o is QueryBidsResponse {
    return o && (o.$typeUrl === QueryBidsResponse.typeUrl || Array.isArray(o.bids) && (!o.bids.length || QueryBidResponse.is(o.bids[0])));
  },
  isSDK(o: any): o is QueryBidsResponseSDKType {
    return o && (o.$typeUrl === QueryBidsResponse.typeUrl || Array.isArray(o.bids) && (!o.bids.length || QueryBidResponse.isSDK(o.bids[0])));
  },
  isAmino(o: any): o is QueryBidsResponseAmino {
    return o && (o.$typeUrl === QueryBidsResponse.typeUrl || Array.isArray(o.bids) && (!o.bids.length || QueryBidResponse.isAmino(o.bids[0])));
  },
  encode(message: QueryBidsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.bids) {
      QueryBidResponse.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryBidsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryBidsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.bids.push(QueryBidResponse.decode(reader, reader.uint32(), useInterfaces));
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
  fromJSON(object: any): QueryBidsResponse {
    const obj = createBaseQueryBidsResponse();
    if (Array.isArray(object?.bids)) obj.bids = object.bids.map((e: any) => QueryBidResponse.fromJSON(e));
    if (isSet(object.pagination)) obj.pagination = PageResponse.fromJSON(object.pagination);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryBidsResponse>): QueryBidsResponse {
    const message = createBaseQueryBidsResponse();
    message.bids = object.bids?.map(e => QueryBidResponse.fromPartial(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    }
    return message;
  },
  fromSDK(object: QueryBidsResponseSDKType): QueryBidsResponse {
    return {
      bids: Array.isArray(object?.bids) ? object.bids.map((e: any) => QueryBidResponse.fromSDK(e)) : [],
      pagination: object.pagination ? PageResponse.fromSDK(object.pagination) : undefined
    };
  },
  toSDK(message: QueryBidsResponse): QueryBidsResponseSDKType {
    const obj: any = {};
    if (message.bids) {
      obj.bids = message.bids.map(e => e ? QueryBidResponse.toSDK(e) : undefined);
    } else {
      obj.bids = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toSDK(message.pagination) : undefined);
    return obj;
  },
  fromAmino(object: QueryBidsResponseAmino): QueryBidsResponse {
    const message = createBaseQueryBidsResponse();
    message.bids = object.bids?.map(e => QueryBidResponse.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryBidsResponse, useInterfaces: boolean = true): QueryBidsResponseAmino {
    const obj: any = {};
    if (message.bids) {
      obj.bids = message.bids.map(e => e ? QueryBidResponse.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.bids = message.bids;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination, useInterfaces) : undefined;
    return obj;
  },
  fromProtoMsg(message: QueryBidsResponseProtoMsg, useInterfaces: boolean = true): QueryBidsResponse {
    return QueryBidsResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryBidsResponse): Uint8Array {
    return QueryBidsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryBidsResponse): QueryBidsResponseProtoMsg {
    return {
      typeUrl: "/akash.market.v1beta2.QueryBidsResponse",
      value: QueryBidsResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(QueryBidsResponse.typeUrl)) {
      return;
    }
    QueryBidResponse.registerTypeUrl();
    PageResponse.registerTypeUrl();
  }
};
function createBaseQueryBidRequest(): QueryBidRequest {
  return {
    id: BidID.fromPartial({})
  };
}
/**
 * QueryBidRequest is request type for the Query/Bid RPC method
 * @name QueryBidRequest
 * @package akash.market.v1beta2
 * @see proto type: akash.market.v1beta2.QueryBidRequest
 */
export const QueryBidRequest = {
  typeUrl: "/akash.market.v1beta2.QueryBidRequest",
  is(o: any): o is QueryBidRequest {
    return o && (o.$typeUrl === QueryBidRequest.typeUrl || BidID.is(o.id));
  },
  isSDK(o: any): o is QueryBidRequestSDKType {
    return o && (o.$typeUrl === QueryBidRequest.typeUrl || BidID.isSDK(o.id));
  },
  isAmino(o: any): o is QueryBidRequestAmino {
    return o && (o.$typeUrl === QueryBidRequest.typeUrl || BidID.isAmino(o.id));
  },
  encode(message: QueryBidRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== undefined) {
      BidID.encode(message.id, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryBidRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryBidRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = BidID.decode(reader, reader.uint32(), useInterfaces);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryBidRequest {
    const obj = createBaseQueryBidRequest();
    if (isSet(object.id)) obj.id = BidID.fromJSON(object.id);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryBidRequest>): QueryBidRequest {
    const message = createBaseQueryBidRequest();
    if (object.id !== undefined && object.id !== null) {
      message.id = BidID.fromPartial(object.id);
    }
    return message;
  },
  fromSDK(object: QueryBidRequestSDKType): QueryBidRequest {
    return {
      id: object.id ? BidID.fromSDK(object.id) : undefined
    };
  },
  toSDK(message: QueryBidRequest): QueryBidRequestSDKType {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id ? BidID.toSDK(message.id) : undefined);
    return obj;
  },
  fromAmino(object: QueryBidRequestAmino): QueryBidRequest {
    const message = createBaseQueryBidRequest();
    if (object.id !== undefined && object.id !== null) {
      message.id = BidID.fromAmino(object.id);
    }
    return message;
  },
  toAmino(message: QueryBidRequest, useInterfaces: boolean = true): QueryBidRequestAmino {
    const obj: any = {};
    obj.id = message.id ? BidID.toAmino(message.id, useInterfaces) : undefined;
    return obj;
  },
  fromProtoMsg(message: QueryBidRequestProtoMsg, useInterfaces: boolean = true): QueryBidRequest {
    return QueryBidRequest.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryBidRequest): Uint8Array {
    return QueryBidRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryBidRequest): QueryBidRequestProtoMsg {
    return {
      typeUrl: "/akash.market.v1beta2.QueryBidRequest",
      value: QueryBidRequest.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(QueryBidRequest.typeUrl)) {
      return;
    }
    BidID.registerTypeUrl();
  }
};
function createBaseQueryBidResponse(): QueryBidResponse {
  return {
    bid: Bid.fromPartial({}),
    escrowAccount: Account.fromPartial({})
  };
}
/**
 * QueryBidResponse is response type for the Query/Bid RPC method
 * @name QueryBidResponse
 * @package akash.market.v1beta2
 * @see proto type: akash.market.v1beta2.QueryBidResponse
 */
export const QueryBidResponse = {
  typeUrl: "/akash.market.v1beta2.QueryBidResponse",
  is(o: any): o is QueryBidResponse {
    return o && (o.$typeUrl === QueryBidResponse.typeUrl || Bid.is(o.bid) && Account.is(o.escrowAccount));
  },
  isSDK(o: any): o is QueryBidResponseSDKType {
    return o && (o.$typeUrl === QueryBidResponse.typeUrl || Bid.isSDK(o.bid) && Account.isSDK(o.escrow_account));
  },
  isAmino(o: any): o is QueryBidResponseAmino {
    return o && (o.$typeUrl === QueryBidResponse.typeUrl || Bid.isAmino(o.bid) && Account.isAmino(o.escrow_account));
  },
  encode(message: QueryBidResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.bid !== undefined) {
      Bid.encode(message.bid, writer.uint32(10).fork()).ldelim();
    }
    if (message.escrowAccount !== undefined) {
      Account.encode(message.escrowAccount, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryBidResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryBidResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.bid = Bid.decode(reader, reader.uint32(), useInterfaces);
          break;
        case 2:
          message.escrowAccount = Account.decode(reader, reader.uint32(), useInterfaces);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryBidResponse {
    const obj = createBaseQueryBidResponse();
    if (isSet(object.bid)) obj.bid = Bid.fromJSON(object.bid);
    if (isSet(object.escrowAccount)) obj.escrowAccount = Account.fromJSON(object.escrowAccount);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryBidResponse>): QueryBidResponse {
    const message = createBaseQueryBidResponse();
    if (object.bid !== undefined && object.bid !== null) {
      message.bid = Bid.fromPartial(object.bid);
    }
    if (object.escrowAccount !== undefined && object.escrowAccount !== null) {
      message.escrowAccount = Account.fromPartial(object.escrowAccount);
    }
    return message;
  },
  fromSDK(object: QueryBidResponseSDKType): QueryBidResponse {
    return {
      bid: object.bid ? Bid.fromSDK(object.bid) : undefined,
      escrowAccount: object.escrow_account ? Account.fromSDK(object.escrow_account) : undefined
    };
  },
  toSDK(message: QueryBidResponse): QueryBidResponseSDKType {
    const obj: any = {};
    message.bid !== undefined && (obj.bid = message.bid ? Bid.toSDK(message.bid) : undefined);
    message.escrowAccount !== undefined && (obj.escrow_account = message.escrowAccount ? Account.toSDK(message.escrowAccount) : undefined);
    return obj;
  },
  fromAmino(object: QueryBidResponseAmino): QueryBidResponse {
    const message = createBaseQueryBidResponse();
    if (object.bid !== undefined && object.bid !== null) {
      message.bid = Bid.fromAmino(object.bid);
    }
    if (object.escrow_account !== undefined && object.escrow_account !== null) {
      message.escrowAccount = Account.fromAmino(object.escrow_account);
    }
    return message;
  },
  toAmino(message: QueryBidResponse, useInterfaces: boolean = true): QueryBidResponseAmino {
    const obj: any = {};
    obj.bid = message.bid ? Bid.toAmino(message.bid, useInterfaces) : undefined;
    obj.escrow_account = message.escrowAccount ? Account.toAmino(message.escrowAccount, useInterfaces) : undefined;
    return obj;
  },
  fromProtoMsg(message: QueryBidResponseProtoMsg, useInterfaces: boolean = true): QueryBidResponse {
    return QueryBidResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryBidResponse): Uint8Array {
    return QueryBidResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryBidResponse): QueryBidResponseProtoMsg {
    return {
      typeUrl: "/akash.market.v1beta2.QueryBidResponse",
      value: QueryBidResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(QueryBidResponse.typeUrl)) {
      return;
    }
    Bid.registerTypeUrl();
    Account.registerTypeUrl();
  }
};
function createBaseQueryLeasesRequest(): QueryLeasesRequest {
  return {
    filters: LeaseFilters.fromPartial({}),
    pagination: undefined
  };
}
/**
 * QueryLeasesRequest is request type for the Query/Leases RPC method
 * @name QueryLeasesRequest
 * @package akash.market.v1beta2
 * @see proto type: akash.market.v1beta2.QueryLeasesRequest
 */
export const QueryLeasesRequest = {
  typeUrl: "/akash.market.v1beta2.QueryLeasesRequest",
  is(o: any): o is QueryLeasesRequest {
    return o && (o.$typeUrl === QueryLeasesRequest.typeUrl || LeaseFilters.is(o.filters));
  },
  isSDK(o: any): o is QueryLeasesRequestSDKType {
    return o && (o.$typeUrl === QueryLeasesRequest.typeUrl || LeaseFilters.isSDK(o.filters));
  },
  isAmino(o: any): o is QueryLeasesRequestAmino {
    return o && (o.$typeUrl === QueryLeasesRequest.typeUrl || LeaseFilters.isAmino(o.filters));
  },
  encode(message: QueryLeasesRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.filters !== undefined) {
      LeaseFilters.encode(message.filters, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryLeasesRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryLeasesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.filters = LeaseFilters.decode(reader, reader.uint32(), useInterfaces);
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
  fromJSON(object: any): QueryLeasesRequest {
    const obj = createBaseQueryLeasesRequest();
    if (isSet(object.filters)) obj.filters = LeaseFilters.fromJSON(object.filters);
    if (isSet(object.pagination)) obj.pagination = PageRequest.fromJSON(object.pagination);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryLeasesRequest>): QueryLeasesRequest {
    const message = createBaseQueryLeasesRequest();
    if (object.filters !== undefined && object.filters !== null) {
      message.filters = LeaseFilters.fromPartial(object.filters);
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    }
    return message;
  },
  fromSDK(object: QueryLeasesRequestSDKType): QueryLeasesRequest {
    return {
      filters: object.filters ? LeaseFilters.fromSDK(object.filters) : undefined,
      pagination: object.pagination ? PageRequest.fromSDK(object.pagination) : undefined
    };
  },
  toSDK(message: QueryLeasesRequest): QueryLeasesRequestSDKType {
    const obj: any = {};
    message.filters !== undefined && (obj.filters = message.filters ? LeaseFilters.toSDK(message.filters) : undefined);
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toSDK(message.pagination) : undefined);
    return obj;
  },
  fromAmino(object: QueryLeasesRequestAmino): QueryLeasesRequest {
    const message = createBaseQueryLeasesRequest();
    if (object.filters !== undefined && object.filters !== null) {
      message.filters = LeaseFilters.fromAmino(object.filters);
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryLeasesRequest, useInterfaces: boolean = true): QueryLeasesRequestAmino {
    const obj: any = {};
    obj.filters = message.filters ? LeaseFilters.toAmino(message.filters, useInterfaces) : undefined;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination, useInterfaces) : undefined;
    return obj;
  },
  fromProtoMsg(message: QueryLeasesRequestProtoMsg, useInterfaces: boolean = true): QueryLeasesRequest {
    return QueryLeasesRequest.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryLeasesRequest): Uint8Array {
    return QueryLeasesRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryLeasesRequest): QueryLeasesRequestProtoMsg {
    return {
      typeUrl: "/akash.market.v1beta2.QueryLeasesRequest",
      value: QueryLeasesRequest.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(QueryLeasesRequest.typeUrl)) {
      return;
    }
    LeaseFilters.registerTypeUrl();
    PageRequest.registerTypeUrl();
  }
};
function createBaseQueryLeasesResponse(): QueryLeasesResponse {
  return {
    leases: [],
    pagination: undefined
  };
}
/**
 * QueryLeasesResponse is response type for the Query/Leases RPC method
 * @name QueryLeasesResponse
 * @package akash.market.v1beta2
 * @see proto type: akash.market.v1beta2.QueryLeasesResponse
 */
export const QueryLeasesResponse = {
  typeUrl: "/akash.market.v1beta2.QueryLeasesResponse",
  is(o: any): o is QueryLeasesResponse {
    return o && (o.$typeUrl === QueryLeasesResponse.typeUrl || Array.isArray(o.leases) && (!o.leases.length || QueryLeaseResponse.is(o.leases[0])));
  },
  isSDK(o: any): o is QueryLeasesResponseSDKType {
    return o && (o.$typeUrl === QueryLeasesResponse.typeUrl || Array.isArray(o.leases) && (!o.leases.length || QueryLeaseResponse.isSDK(o.leases[0])));
  },
  isAmino(o: any): o is QueryLeasesResponseAmino {
    return o && (o.$typeUrl === QueryLeasesResponse.typeUrl || Array.isArray(o.leases) && (!o.leases.length || QueryLeaseResponse.isAmino(o.leases[0])));
  },
  encode(message: QueryLeasesResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.leases) {
      QueryLeaseResponse.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryLeasesResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryLeasesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.leases.push(QueryLeaseResponse.decode(reader, reader.uint32(), useInterfaces));
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
  fromJSON(object: any): QueryLeasesResponse {
    const obj = createBaseQueryLeasesResponse();
    if (Array.isArray(object?.leases)) obj.leases = object.leases.map((e: any) => QueryLeaseResponse.fromJSON(e));
    if (isSet(object.pagination)) obj.pagination = PageResponse.fromJSON(object.pagination);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryLeasesResponse>): QueryLeasesResponse {
    const message = createBaseQueryLeasesResponse();
    message.leases = object.leases?.map(e => QueryLeaseResponse.fromPartial(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    }
    return message;
  },
  fromSDK(object: QueryLeasesResponseSDKType): QueryLeasesResponse {
    return {
      leases: Array.isArray(object?.leases) ? object.leases.map((e: any) => QueryLeaseResponse.fromSDK(e)) : [],
      pagination: object.pagination ? PageResponse.fromSDK(object.pagination) : undefined
    };
  },
  toSDK(message: QueryLeasesResponse): QueryLeasesResponseSDKType {
    const obj: any = {};
    if (message.leases) {
      obj.leases = message.leases.map(e => e ? QueryLeaseResponse.toSDK(e) : undefined);
    } else {
      obj.leases = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toSDK(message.pagination) : undefined);
    return obj;
  },
  fromAmino(object: QueryLeasesResponseAmino): QueryLeasesResponse {
    const message = createBaseQueryLeasesResponse();
    message.leases = object.leases?.map(e => QueryLeaseResponse.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryLeasesResponse, useInterfaces: boolean = true): QueryLeasesResponseAmino {
    const obj: any = {};
    if (message.leases) {
      obj.leases = message.leases.map(e => e ? QueryLeaseResponse.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.leases = message.leases;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination, useInterfaces) : undefined;
    return obj;
  },
  fromProtoMsg(message: QueryLeasesResponseProtoMsg, useInterfaces: boolean = true): QueryLeasesResponse {
    return QueryLeasesResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryLeasesResponse): Uint8Array {
    return QueryLeasesResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryLeasesResponse): QueryLeasesResponseProtoMsg {
    return {
      typeUrl: "/akash.market.v1beta2.QueryLeasesResponse",
      value: QueryLeasesResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(QueryLeasesResponse.typeUrl)) {
      return;
    }
    QueryLeaseResponse.registerTypeUrl();
    PageResponse.registerTypeUrl();
  }
};
function createBaseQueryLeaseRequest(): QueryLeaseRequest {
  return {
    id: LeaseID.fromPartial({})
  };
}
/**
 * QueryLeaseRequest is request type for the Query/Lease RPC method
 * @name QueryLeaseRequest
 * @package akash.market.v1beta2
 * @see proto type: akash.market.v1beta2.QueryLeaseRequest
 */
export const QueryLeaseRequest = {
  typeUrl: "/akash.market.v1beta2.QueryLeaseRequest",
  is(o: any): o is QueryLeaseRequest {
    return o && (o.$typeUrl === QueryLeaseRequest.typeUrl || LeaseID.is(o.id));
  },
  isSDK(o: any): o is QueryLeaseRequestSDKType {
    return o && (o.$typeUrl === QueryLeaseRequest.typeUrl || LeaseID.isSDK(o.id));
  },
  isAmino(o: any): o is QueryLeaseRequestAmino {
    return o && (o.$typeUrl === QueryLeaseRequest.typeUrl || LeaseID.isAmino(o.id));
  },
  encode(message: QueryLeaseRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== undefined) {
      LeaseID.encode(message.id, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryLeaseRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryLeaseRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = LeaseID.decode(reader, reader.uint32(), useInterfaces);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryLeaseRequest {
    const obj = createBaseQueryLeaseRequest();
    if (isSet(object.id)) obj.id = LeaseID.fromJSON(object.id);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryLeaseRequest>): QueryLeaseRequest {
    const message = createBaseQueryLeaseRequest();
    if (object.id !== undefined && object.id !== null) {
      message.id = LeaseID.fromPartial(object.id);
    }
    return message;
  },
  fromSDK(object: QueryLeaseRequestSDKType): QueryLeaseRequest {
    return {
      id: object.id ? LeaseID.fromSDK(object.id) : undefined
    };
  },
  toSDK(message: QueryLeaseRequest): QueryLeaseRequestSDKType {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id ? LeaseID.toSDK(message.id) : undefined);
    return obj;
  },
  fromAmino(object: QueryLeaseRequestAmino): QueryLeaseRequest {
    const message = createBaseQueryLeaseRequest();
    if (object.id !== undefined && object.id !== null) {
      message.id = LeaseID.fromAmino(object.id);
    }
    return message;
  },
  toAmino(message: QueryLeaseRequest, useInterfaces: boolean = true): QueryLeaseRequestAmino {
    const obj: any = {};
    obj.id = message.id ? LeaseID.toAmino(message.id, useInterfaces) : undefined;
    return obj;
  },
  fromProtoMsg(message: QueryLeaseRequestProtoMsg, useInterfaces: boolean = true): QueryLeaseRequest {
    return QueryLeaseRequest.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryLeaseRequest): Uint8Array {
    return QueryLeaseRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryLeaseRequest): QueryLeaseRequestProtoMsg {
    return {
      typeUrl: "/akash.market.v1beta2.QueryLeaseRequest",
      value: QueryLeaseRequest.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(QueryLeaseRequest.typeUrl)) {
      return;
    }
    LeaseID.registerTypeUrl();
  }
};
function createBaseQueryLeaseResponse(): QueryLeaseResponse {
  return {
    lease: Lease.fromPartial({}),
    escrowPayment: FractionalPayment.fromPartial({})
  };
}
/**
 * QueryLeaseResponse is response type for the Query/Lease RPC method
 * @name QueryLeaseResponse
 * @package akash.market.v1beta2
 * @see proto type: akash.market.v1beta2.QueryLeaseResponse
 */
export const QueryLeaseResponse = {
  typeUrl: "/akash.market.v1beta2.QueryLeaseResponse",
  is(o: any): o is QueryLeaseResponse {
    return o && (o.$typeUrl === QueryLeaseResponse.typeUrl || Lease.is(o.lease) && FractionalPayment.is(o.escrowPayment));
  },
  isSDK(o: any): o is QueryLeaseResponseSDKType {
    return o && (o.$typeUrl === QueryLeaseResponse.typeUrl || Lease.isSDK(o.lease) && FractionalPayment.isSDK(o.escrow_payment));
  },
  isAmino(o: any): o is QueryLeaseResponseAmino {
    return o && (o.$typeUrl === QueryLeaseResponse.typeUrl || Lease.isAmino(o.lease) && FractionalPayment.isAmino(o.escrow_payment));
  },
  encode(message: QueryLeaseResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.lease !== undefined) {
      Lease.encode(message.lease, writer.uint32(10).fork()).ldelim();
    }
    if (message.escrowPayment !== undefined) {
      FractionalPayment.encode(message.escrowPayment, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryLeaseResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryLeaseResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.lease = Lease.decode(reader, reader.uint32(), useInterfaces);
          break;
        case 2:
          message.escrowPayment = FractionalPayment.decode(reader, reader.uint32(), useInterfaces);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryLeaseResponse {
    const obj = createBaseQueryLeaseResponse();
    if (isSet(object.lease)) obj.lease = Lease.fromJSON(object.lease);
    if (isSet(object.escrowPayment)) obj.escrowPayment = FractionalPayment.fromJSON(object.escrowPayment);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryLeaseResponse>): QueryLeaseResponse {
    const message = createBaseQueryLeaseResponse();
    if (object.lease !== undefined && object.lease !== null) {
      message.lease = Lease.fromPartial(object.lease);
    }
    if (object.escrowPayment !== undefined && object.escrowPayment !== null) {
      message.escrowPayment = FractionalPayment.fromPartial(object.escrowPayment);
    }
    return message;
  },
  fromSDK(object: QueryLeaseResponseSDKType): QueryLeaseResponse {
    return {
      lease: object.lease ? Lease.fromSDK(object.lease) : undefined,
      escrowPayment: object.escrow_payment ? FractionalPayment.fromSDK(object.escrow_payment) : undefined
    };
  },
  toSDK(message: QueryLeaseResponse): QueryLeaseResponseSDKType {
    const obj: any = {};
    message.lease !== undefined && (obj.lease = message.lease ? Lease.toSDK(message.lease) : undefined);
    message.escrowPayment !== undefined && (obj.escrow_payment = message.escrowPayment ? FractionalPayment.toSDK(message.escrowPayment) : undefined);
    return obj;
  },
  fromAmino(object: QueryLeaseResponseAmino): QueryLeaseResponse {
    const message = createBaseQueryLeaseResponse();
    if (object.lease !== undefined && object.lease !== null) {
      message.lease = Lease.fromAmino(object.lease);
    }
    if (object.escrow_payment !== undefined && object.escrow_payment !== null) {
      message.escrowPayment = FractionalPayment.fromAmino(object.escrow_payment);
    }
    return message;
  },
  toAmino(message: QueryLeaseResponse, useInterfaces: boolean = true): QueryLeaseResponseAmino {
    const obj: any = {};
    obj.lease = message.lease ? Lease.toAmino(message.lease, useInterfaces) : undefined;
    obj.escrow_payment = message.escrowPayment ? FractionalPayment.toAmino(message.escrowPayment, useInterfaces) : undefined;
    return obj;
  },
  fromProtoMsg(message: QueryLeaseResponseProtoMsg, useInterfaces: boolean = true): QueryLeaseResponse {
    return QueryLeaseResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryLeaseResponse): Uint8Array {
    return QueryLeaseResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryLeaseResponse): QueryLeaseResponseProtoMsg {
    return {
      typeUrl: "/akash.market.v1beta2.QueryLeaseResponse",
      value: QueryLeaseResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(QueryLeaseResponse.typeUrl)) {
      return;
    }
    Lease.registerTypeUrl();
    FractionalPayment.registerTypeUrl();
  }
};