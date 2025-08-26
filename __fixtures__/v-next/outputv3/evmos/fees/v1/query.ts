import { PageRequest, PageRequestAmino, PageRequestSDKType, PageResponse, PageResponseAmino, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { DevFeeInfo, DevFeeInfoAmino, DevFeeInfoSDKType } from "./fees";
import { Params, ParamsAmino, ParamsSDKType } from "./genesis";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { GlobalDecoderRegistry } from "../../../registry";
import { isSet, DeepPartial } from "../../../helpers";
export const protobufPackage = "evmos.fees.v1";
/**
 * QueryDevFeeInfosRequest is the request type for the Query/DevFeeInfos RPC
 * method.
 * @name QueryDevFeeInfosRequest
 * @package evmos.fees.v1
 * @see proto type: evmos.fees.v1.QueryDevFeeInfosRequest
 */
export interface QueryDevFeeInfosRequest {
  /**
   * pagination defines an optional pagination for the request.
   */
  pagination?: PageRequest;
}
export interface QueryDevFeeInfosRequestProtoMsg {
  typeUrl: "/evmos.fees.v1.QueryDevFeeInfosRequest";
  value: Uint8Array;
}
/**
 * QueryDevFeeInfosRequest is the request type for the Query/DevFeeInfos RPC
 * method.
 * @name QueryDevFeeInfosRequestAmino
 * @package evmos.fees.v1
 * @see proto type: evmos.fees.v1.QueryDevFeeInfosRequest
 */
export interface QueryDevFeeInfosRequestAmino {
  /**
   * pagination defines an optional pagination for the request.
   */
  pagination?: PageRequestAmino;
}
/**
 * QueryDevFeeInfosRequest is the request type for the Query/DevFeeInfos RPC
 * method.
 * @name QueryDevFeeInfosRequestSDKType
 * @package evmos.fees.v1
 * @see proto type: evmos.fees.v1.QueryDevFeeInfosRequest
 */
export interface QueryDevFeeInfosRequestSDKType {
  pagination?: PageRequestSDKType;
}
/**
 * QueryDevFeeInfosResponse is the response type for the Query/DevFeeInfos
 * RPC method.
 * @name QueryDevFeeInfosResponse
 * @package evmos.fees.v1
 * @see proto type: evmos.fees.v1.QueryDevFeeInfosResponse
 */
export interface QueryDevFeeInfosResponse {
  fees: DevFeeInfo[];
  /**
   * pagination defines the pagination in the response.
   */
  pagination?: PageResponse;
}
export interface QueryDevFeeInfosResponseProtoMsg {
  typeUrl: "/evmos.fees.v1.QueryDevFeeInfosResponse";
  value: Uint8Array;
}
/**
 * QueryDevFeeInfosResponse is the response type for the Query/DevFeeInfos
 * RPC method.
 * @name QueryDevFeeInfosResponseAmino
 * @package evmos.fees.v1
 * @see proto type: evmos.fees.v1.QueryDevFeeInfosResponse
 */
export interface QueryDevFeeInfosResponseAmino {
  fees?: DevFeeInfoAmino[];
  /**
   * pagination defines the pagination in the response.
   */
  pagination?: PageResponseAmino;
}
/**
 * QueryDevFeeInfosResponse is the response type for the Query/DevFeeInfos
 * RPC method.
 * @name QueryDevFeeInfosResponseSDKType
 * @package evmos.fees.v1
 * @see proto type: evmos.fees.v1.QueryDevFeeInfosResponse
 */
export interface QueryDevFeeInfosResponseSDKType {
  fees: DevFeeInfoSDKType[];
  pagination?: PageResponseSDKType;
}
/**
 * QueryDevFeeInfoRequest is the request type for the Query/DevFeeInfo RPC
 * method.
 * @name QueryDevFeeInfoRequest
 * @package evmos.fees.v1
 * @see proto type: evmos.fees.v1.QueryDevFeeInfoRequest
 */
export interface QueryDevFeeInfoRequest {
  /**
   * contract identifier is the hex contract address of a contract
   */
  contractAddress: string;
}
export interface QueryDevFeeInfoRequestProtoMsg {
  typeUrl: "/evmos.fees.v1.QueryDevFeeInfoRequest";
  value: Uint8Array;
}
/**
 * QueryDevFeeInfoRequest is the request type for the Query/DevFeeInfo RPC
 * method.
 * @name QueryDevFeeInfoRequestAmino
 * @package evmos.fees.v1
 * @see proto type: evmos.fees.v1.QueryDevFeeInfoRequest
 */
export interface QueryDevFeeInfoRequestAmino {
  /**
   * contract identifier is the hex contract address of a contract
   */
  contract_address?: string;
}
/**
 * QueryDevFeeInfoRequest is the request type for the Query/DevFeeInfo RPC
 * method.
 * @name QueryDevFeeInfoRequestSDKType
 * @package evmos.fees.v1
 * @see proto type: evmos.fees.v1.QueryDevFeeInfoRequest
 */
export interface QueryDevFeeInfoRequestSDKType {
  contract_address: string;
}
/**
 * QueryDevFeeInfoResponse is the response type for the Query/DevFeeInfo RPC
 * method.
 * @name QueryDevFeeInfoResponse
 * @package evmos.fees.v1
 * @see proto type: evmos.fees.v1.QueryDevFeeInfoResponse
 */
export interface QueryDevFeeInfoResponse {
  fee: DevFeeInfo;
}
export interface QueryDevFeeInfoResponseProtoMsg {
  typeUrl: "/evmos.fees.v1.QueryDevFeeInfoResponse";
  value: Uint8Array;
}
/**
 * QueryDevFeeInfoResponse is the response type for the Query/DevFeeInfo RPC
 * method.
 * @name QueryDevFeeInfoResponseAmino
 * @package evmos.fees.v1
 * @see proto type: evmos.fees.v1.QueryDevFeeInfoResponse
 */
export interface QueryDevFeeInfoResponseAmino {
  fee?: DevFeeInfoAmino;
}
/**
 * QueryDevFeeInfoResponse is the response type for the Query/DevFeeInfo RPC
 * method.
 * @name QueryDevFeeInfoResponseSDKType
 * @package evmos.fees.v1
 * @see proto type: evmos.fees.v1.QueryDevFeeInfoResponse
 */
export interface QueryDevFeeInfoResponseSDKType {
  fee: DevFeeInfoSDKType;
}
/**
 * QueryParamsRequest is the request type for the Query/Params RPC method.
 * @name QueryParamsRequest
 * @package evmos.fees.v1
 * @see proto type: evmos.fees.v1.QueryParamsRequest
 */
export interface QueryParamsRequest {}
export interface QueryParamsRequestProtoMsg {
  typeUrl: "/evmos.fees.v1.QueryParamsRequest";
  value: Uint8Array;
}
/**
 * QueryParamsRequest is the request type for the Query/Params RPC method.
 * @name QueryParamsRequestAmino
 * @package evmos.fees.v1
 * @see proto type: evmos.fees.v1.QueryParamsRequest
 */
export interface QueryParamsRequestAmino {}
/**
 * QueryParamsRequest is the request type for the Query/Params RPC method.
 * @name QueryParamsRequestSDKType
 * @package evmos.fees.v1
 * @see proto type: evmos.fees.v1.QueryParamsRequest
 */
export interface QueryParamsRequestSDKType {}
/**
 * QueryParamsResponse is the response type for the Query/Params RPC
 * method.
 * @name QueryParamsResponse
 * @package evmos.fees.v1
 * @see proto type: evmos.fees.v1.QueryParamsResponse
 */
export interface QueryParamsResponse {
  params: Params;
}
export interface QueryParamsResponseProtoMsg {
  typeUrl: "/evmos.fees.v1.QueryParamsResponse";
  value: Uint8Array;
}
/**
 * QueryParamsResponse is the response type for the Query/Params RPC
 * method.
 * @name QueryParamsResponseAmino
 * @package evmos.fees.v1
 * @see proto type: evmos.fees.v1.QueryParamsResponse
 */
export interface QueryParamsResponseAmino {
  params?: ParamsAmino;
}
/**
 * QueryParamsResponse is the response type for the Query/Params RPC
 * method.
 * @name QueryParamsResponseSDKType
 * @package evmos.fees.v1
 * @see proto type: evmos.fees.v1.QueryParamsResponse
 */
export interface QueryParamsResponseSDKType {
  params: ParamsSDKType;
}
/**
 * QueryDevFeeInfosPerDeployerRequest is the request type for the
 * Query/DevFeeInfosPerDeployer RPC method.
 * @name QueryDevFeeInfosPerDeployerRequest
 * @package evmos.fees.v1
 * @see proto type: evmos.fees.v1.QueryDevFeeInfosPerDeployerRequest
 */
export interface QueryDevFeeInfosPerDeployerRequest {
  /**
   * deployer bech32 address
   */
  deployerAddress: string;
  /**
   * pagination defines an optional pagination for the request.
   */
  pagination?: PageRequest;
}
export interface QueryDevFeeInfosPerDeployerRequestProtoMsg {
  typeUrl: "/evmos.fees.v1.QueryDevFeeInfosPerDeployerRequest";
  value: Uint8Array;
}
/**
 * QueryDevFeeInfosPerDeployerRequest is the request type for the
 * Query/DevFeeInfosPerDeployer RPC method.
 * @name QueryDevFeeInfosPerDeployerRequestAmino
 * @package evmos.fees.v1
 * @see proto type: evmos.fees.v1.QueryDevFeeInfosPerDeployerRequest
 */
export interface QueryDevFeeInfosPerDeployerRequestAmino {
  /**
   * deployer bech32 address
   */
  deployer_address?: string;
  /**
   * pagination defines an optional pagination for the request.
   */
  pagination?: PageRequestAmino;
}
/**
 * QueryDevFeeInfosPerDeployerRequest is the request type for the
 * Query/DevFeeInfosPerDeployer RPC method.
 * @name QueryDevFeeInfosPerDeployerRequestSDKType
 * @package evmos.fees.v1
 * @see proto type: evmos.fees.v1.QueryDevFeeInfosPerDeployerRequest
 */
export interface QueryDevFeeInfosPerDeployerRequestSDKType {
  deployer_address: string;
  pagination?: PageRequestSDKType;
}
/**
 * QueryDevFeeInfosPerDeployerResponse is the response type for the
 * Query/DevFeeInfosPerDeployer RPC method.
 * @name QueryDevFeeInfosPerDeployerResponse
 * @package evmos.fees.v1
 * @see proto type: evmos.fees.v1.QueryDevFeeInfosPerDeployerResponse
 */
export interface QueryDevFeeInfosPerDeployerResponse {
  fees: DevFeeInfo[];
  /**
   * pagination defines the pagination in the response.
   */
  pagination?: PageResponse;
}
export interface QueryDevFeeInfosPerDeployerResponseProtoMsg {
  typeUrl: "/evmos.fees.v1.QueryDevFeeInfosPerDeployerResponse";
  value: Uint8Array;
}
/**
 * QueryDevFeeInfosPerDeployerResponse is the response type for the
 * Query/DevFeeInfosPerDeployer RPC method.
 * @name QueryDevFeeInfosPerDeployerResponseAmino
 * @package evmos.fees.v1
 * @see proto type: evmos.fees.v1.QueryDevFeeInfosPerDeployerResponse
 */
export interface QueryDevFeeInfosPerDeployerResponseAmino {
  fees?: DevFeeInfoAmino[];
  /**
   * pagination defines the pagination in the response.
   */
  pagination?: PageResponseAmino;
}
/**
 * QueryDevFeeInfosPerDeployerResponse is the response type for the
 * Query/DevFeeInfosPerDeployer RPC method.
 * @name QueryDevFeeInfosPerDeployerResponseSDKType
 * @package evmos.fees.v1
 * @see proto type: evmos.fees.v1.QueryDevFeeInfosPerDeployerResponse
 */
export interface QueryDevFeeInfosPerDeployerResponseSDKType {
  fees: DevFeeInfoSDKType[];
  pagination?: PageResponseSDKType;
}
function createBaseQueryDevFeeInfosRequest(): QueryDevFeeInfosRequest {
  return {
    pagination: undefined
  };
}
/**
 * QueryDevFeeInfosRequest is the request type for the Query/DevFeeInfos RPC
 * method.
 * @name QueryDevFeeInfosRequest
 * @package evmos.fees.v1
 * @see proto type: evmos.fees.v1.QueryDevFeeInfosRequest
 */
export const QueryDevFeeInfosRequest = {
  typeUrl: "/evmos.fees.v1.QueryDevFeeInfosRequest",
  is(o: any): o is QueryDevFeeInfosRequest {
    return o && o.$typeUrl === QueryDevFeeInfosRequest.typeUrl;
  },
  isSDK(o: any): o is QueryDevFeeInfosRequestSDKType {
    return o && o.$typeUrl === QueryDevFeeInfosRequest.typeUrl;
  },
  isAmino(o: any): o is QueryDevFeeInfosRequestAmino {
    return o && o.$typeUrl === QueryDevFeeInfosRequest.typeUrl;
  },
  encode(message: QueryDevFeeInfosRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryDevFeeInfosRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDevFeeInfosRequest();
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
  fromJSON(object: any): QueryDevFeeInfosRequest {
    const obj = createBaseQueryDevFeeInfosRequest();
    if (isSet(object.pagination)) obj.pagination = PageRequest.fromJSON(object.pagination);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryDevFeeInfosRequest>): QueryDevFeeInfosRequest {
    const message = createBaseQueryDevFeeInfosRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    }
    return message;
  },
  fromSDK(object: QueryDevFeeInfosRequestSDKType): QueryDevFeeInfosRequest {
    return {
      pagination: object.pagination ? PageRequest.fromSDK(object.pagination) : undefined
    };
  },
  toSDK(message: QueryDevFeeInfosRequest): QueryDevFeeInfosRequestSDKType {
    const obj: any = {};
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toSDK(message.pagination) : undefined);
    return obj;
  },
  fromAmino(object: QueryDevFeeInfosRequestAmino): QueryDevFeeInfosRequest {
    const message = createBaseQueryDevFeeInfosRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryDevFeeInfosRequest, useInterfaces: boolean = true): QueryDevFeeInfosRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination, useInterfaces) : undefined;
    return obj;
  },
  fromProtoMsg(message: QueryDevFeeInfosRequestProtoMsg, useInterfaces: boolean = true): QueryDevFeeInfosRequest {
    return QueryDevFeeInfosRequest.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryDevFeeInfosRequest): Uint8Array {
    return QueryDevFeeInfosRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryDevFeeInfosRequest): QueryDevFeeInfosRequestProtoMsg {
    return {
      typeUrl: "/evmos.fees.v1.QueryDevFeeInfosRequest",
      value: QueryDevFeeInfosRequest.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(QueryDevFeeInfosRequest.typeUrl)) {
      return;
    }
    PageRequest.registerTypeUrl();
  }
};
function createBaseQueryDevFeeInfosResponse(): QueryDevFeeInfosResponse {
  return {
    fees: [],
    pagination: undefined
  };
}
/**
 * QueryDevFeeInfosResponse is the response type for the Query/DevFeeInfos
 * RPC method.
 * @name QueryDevFeeInfosResponse
 * @package evmos.fees.v1
 * @see proto type: evmos.fees.v1.QueryDevFeeInfosResponse
 */
export const QueryDevFeeInfosResponse = {
  typeUrl: "/evmos.fees.v1.QueryDevFeeInfosResponse",
  is(o: any): o is QueryDevFeeInfosResponse {
    return o && (o.$typeUrl === QueryDevFeeInfosResponse.typeUrl || Array.isArray(o.fees) && (!o.fees.length || DevFeeInfo.is(o.fees[0])));
  },
  isSDK(o: any): o is QueryDevFeeInfosResponseSDKType {
    return o && (o.$typeUrl === QueryDevFeeInfosResponse.typeUrl || Array.isArray(o.fees) && (!o.fees.length || DevFeeInfo.isSDK(o.fees[0])));
  },
  isAmino(o: any): o is QueryDevFeeInfosResponseAmino {
    return o && (o.$typeUrl === QueryDevFeeInfosResponse.typeUrl || Array.isArray(o.fees) && (!o.fees.length || DevFeeInfo.isAmino(o.fees[0])));
  },
  encode(message: QueryDevFeeInfosResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.fees) {
      DevFeeInfo.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryDevFeeInfosResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDevFeeInfosResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.fees.push(DevFeeInfo.decode(reader, reader.uint32(), useInterfaces));
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
  fromJSON(object: any): QueryDevFeeInfosResponse {
    const obj = createBaseQueryDevFeeInfosResponse();
    if (Array.isArray(object?.fees)) obj.fees = object.fees.map((e: any) => DevFeeInfo.fromJSON(e));
    if (isSet(object.pagination)) obj.pagination = PageResponse.fromJSON(object.pagination);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryDevFeeInfosResponse>): QueryDevFeeInfosResponse {
    const message = createBaseQueryDevFeeInfosResponse();
    message.fees = object.fees?.map(e => DevFeeInfo.fromPartial(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    }
    return message;
  },
  fromSDK(object: QueryDevFeeInfosResponseSDKType): QueryDevFeeInfosResponse {
    return {
      fees: Array.isArray(object?.fees) ? object.fees.map((e: any) => DevFeeInfo.fromSDK(e)) : [],
      pagination: object.pagination ? PageResponse.fromSDK(object.pagination) : undefined
    };
  },
  toSDK(message: QueryDevFeeInfosResponse): QueryDevFeeInfosResponseSDKType {
    const obj: any = {};
    if (message.fees) {
      obj.fees = message.fees.map(e => e ? DevFeeInfo.toSDK(e) : undefined);
    } else {
      obj.fees = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toSDK(message.pagination) : undefined);
    return obj;
  },
  fromAmino(object: QueryDevFeeInfosResponseAmino): QueryDevFeeInfosResponse {
    const message = createBaseQueryDevFeeInfosResponse();
    message.fees = object.fees?.map(e => DevFeeInfo.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryDevFeeInfosResponse, useInterfaces: boolean = true): QueryDevFeeInfosResponseAmino {
    const obj: any = {};
    if (message.fees) {
      obj.fees = message.fees.map(e => e ? DevFeeInfo.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.fees = message.fees;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination, useInterfaces) : undefined;
    return obj;
  },
  fromProtoMsg(message: QueryDevFeeInfosResponseProtoMsg, useInterfaces: boolean = true): QueryDevFeeInfosResponse {
    return QueryDevFeeInfosResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryDevFeeInfosResponse): Uint8Array {
    return QueryDevFeeInfosResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryDevFeeInfosResponse): QueryDevFeeInfosResponseProtoMsg {
    return {
      typeUrl: "/evmos.fees.v1.QueryDevFeeInfosResponse",
      value: QueryDevFeeInfosResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(QueryDevFeeInfosResponse.typeUrl)) {
      return;
    }
    DevFeeInfo.registerTypeUrl();
    PageResponse.registerTypeUrl();
  }
};
function createBaseQueryDevFeeInfoRequest(): QueryDevFeeInfoRequest {
  return {
    contractAddress: ""
  };
}
/**
 * QueryDevFeeInfoRequest is the request type for the Query/DevFeeInfo RPC
 * method.
 * @name QueryDevFeeInfoRequest
 * @package evmos.fees.v1
 * @see proto type: evmos.fees.v1.QueryDevFeeInfoRequest
 */
export const QueryDevFeeInfoRequest = {
  typeUrl: "/evmos.fees.v1.QueryDevFeeInfoRequest",
  is(o: any): o is QueryDevFeeInfoRequest {
    return o && (o.$typeUrl === QueryDevFeeInfoRequest.typeUrl || typeof o.contractAddress === "string");
  },
  isSDK(o: any): o is QueryDevFeeInfoRequestSDKType {
    return o && (o.$typeUrl === QueryDevFeeInfoRequest.typeUrl || typeof o.contract_address === "string");
  },
  isAmino(o: any): o is QueryDevFeeInfoRequestAmino {
    return o && (o.$typeUrl === QueryDevFeeInfoRequest.typeUrl || typeof o.contract_address === "string");
  },
  encode(message: QueryDevFeeInfoRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.contractAddress !== "") {
      writer.uint32(10).string(message.contractAddress);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryDevFeeInfoRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDevFeeInfoRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.contractAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryDevFeeInfoRequest {
    const obj = createBaseQueryDevFeeInfoRequest();
    if (isSet(object.contractAddress)) obj.contractAddress = String(object.contractAddress);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryDevFeeInfoRequest>): QueryDevFeeInfoRequest {
    const message = createBaseQueryDevFeeInfoRequest();
    message.contractAddress = object.contractAddress ?? "";
    return message;
  },
  fromSDK(object: QueryDevFeeInfoRequestSDKType): QueryDevFeeInfoRequest {
    return {
      contractAddress: object?.contract_address
    };
  },
  toSDK(message: QueryDevFeeInfoRequest): QueryDevFeeInfoRequestSDKType {
    const obj: any = {};
    obj.contract_address = message.contractAddress;
    return obj;
  },
  fromAmino(object: QueryDevFeeInfoRequestAmino): QueryDevFeeInfoRequest {
    const message = createBaseQueryDevFeeInfoRequest();
    if (object.contract_address !== undefined && object.contract_address !== null) {
      message.contractAddress = object.contract_address;
    }
    return message;
  },
  toAmino(message: QueryDevFeeInfoRequest, useInterfaces: boolean = true): QueryDevFeeInfoRequestAmino {
    const obj: any = {};
    obj.contract_address = message.contractAddress === "" ? undefined : message.contractAddress;
    return obj;
  },
  fromProtoMsg(message: QueryDevFeeInfoRequestProtoMsg, useInterfaces: boolean = true): QueryDevFeeInfoRequest {
    return QueryDevFeeInfoRequest.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryDevFeeInfoRequest): Uint8Array {
    return QueryDevFeeInfoRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryDevFeeInfoRequest): QueryDevFeeInfoRequestProtoMsg {
    return {
      typeUrl: "/evmos.fees.v1.QueryDevFeeInfoRequest",
      value: QueryDevFeeInfoRequest.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseQueryDevFeeInfoResponse(): QueryDevFeeInfoResponse {
  return {
    fee: DevFeeInfo.fromPartial({})
  };
}
/**
 * QueryDevFeeInfoResponse is the response type for the Query/DevFeeInfo RPC
 * method.
 * @name QueryDevFeeInfoResponse
 * @package evmos.fees.v1
 * @see proto type: evmos.fees.v1.QueryDevFeeInfoResponse
 */
export const QueryDevFeeInfoResponse = {
  typeUrl: "/evmos.fees.v1.QueryDevFeeInfoResponse",
  is(o: any): o is QueryDevFeeInfoResponse {
    return o && (o.$typeUrl === QueryDevFeeInfoResponse.typeUrl || DevFeeInfo.is(o.fee));
  },
  isSDK(o: any): o is QueryDevFeeInfoResponseSDKType {
    return o && (o.$typeUrl === QueryDevFeeInfoResponse.typeUrl || DevFeeInfo.isSDK(o.fee));
  },
  isAmino(o: any): o is QueryDevFeeInfoResponseAmino {
    return o && (o.$typeUrl === QueryDevFeeInfoResponse.typeUrl || DevFeeInfo.isAmino(o.fee));
  },
  encode(message: QueryDevFeeInfoResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.fee !== undefined) {
      DevFeeInfo.encode(message.fee, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryDevFeeInfoResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDevFeeInfoResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.fee = DevFeeInfo.decode(reader, reader.uint32(), useInterfaces);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryDevFeeInfoResponse {
    const obj = createBaseQueryDevFeeInfoResponse();
    if (isSet(object.fee)) obj.fee = DevFeeInfo.fromJSON(object.fee);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryDevFeeInfoResponse>): QueryDevFeeInfoResponse {
    const message = createBaseQueryDevFeeInfoResponse();
    if (object.fee !== undefined && object.fee !== null) {
      message.fee = DevFeeInfo.fromPartial(object.fee);
    }
    return message;
  },
  fromSDK(object: QueryDevFeeInfoResponseSDKType): QueryDevFeeInfoResponse {
    return {
      fee: object.fee ? DevFeeInfo.fromSDK(object.fee) : undefined
    };
  },
  toSDK(message: QueryDevFeeInfoResponse): QueryDevFeeInfoResponseSDKType {
    const obj: any = {};
    message.fee !== undefined && (obj.fee = message.fee ? DevFeeInfo.toSDK(message.fee) : undefined);
    return obj;
  },
  fromAmino(object: QueryDevFeeInfoResponseAmino): QueryDevFeeInfoResponse {
    const message = createBaseQueryDevFeeInfoResponse();
    if (object.fee !== undefined && object.fee !== null) {
      message.fee = DevFeeInfo.fromAmino(object.fee);
    }
    return message;
  },
  toAmino(message: QueryDevFeeInfoResponse, useInterfaces: boolean = true): QueryDevFeeInfoResponseAmino {
    const obj: any = {};
    obj.fee = message.fee ? DevFeeInfo.toAmino(message.fee, useInterfaces) : undefined;
    return obj;
  },
  fromProtoMsg(message: QueryDevFeeInfoResponseProtoMsg, useInterfaces: boolean = true): QueryDevFeeInfoResponse {
    return QueryDevFeeInfoResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryDevFeeInfoResponse): Uint8Array {
    return QueryDevFeeInfoResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryDevFeeInfoResponse): QueryDevFeeInfoResponseProtoMsg {
    return {
      typeUrl: "/evmos.fees.v1.QueryDevFeeInfoResponse",
      value: QueryDevFeeInfoResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(QueryDevFeeInfoResponse.typeUrl)) {
      return;
    }
    DevFeeInfo.registerTypeUrl();
  }
};
function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}
/**
 * QueryParamsRequest is the request type for the Query/Params RPC method.
 * @name QueryParamsRequest
 * @package evmos.fees.v1
 * @see proto type: evmos.fees.v1.QueryParamsRequest
 */
export const QueryParamsRequest = {
  typeUrl: "/evmos.fees.v1.QueryParamsRequest",
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
      typeUrl: "/evmos.fees.v1.QueryParamsRequest",
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
 * QueryParamsResponse is the response type for the Query/Params RPC
 * method.
 * @name QueryParamsResponse
 * @package evmos.fees.v1
 * @see proto type: evmos.fees.v1.QueryParamsResponse
 */
export const QueryParamsResponse = {
  typeUrl: "/evmos.fees.v1.QueryParamsResponse",
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
      typeUrl: "/evmos.fees.v1.QueryParamsResponse",
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
function createBaseQueryDevFeeInfosPerDeployerRequest(): QueryDevFeeInfosPerDeployerRequest {
  return {
    deployerAddress: "",
    pagination: undefined
  };
}
/**
 * QueryDevFeeInfosPerDeployerRequest is the request type for the
 * Query/DevFeeInfosPerDeployer RPC method.
 * @name QueryDevFeeInfosPerDeployerRequest
 * @package evmos.fees.v1
 * @see proto type: evmos.fees.v1.QueryDevFeeInfosPerDeployerRequest
 */
export const QueryDevFeeInfosPerDeployerRequest = {
  typeUrl: "/evmos.fees.v1.QueryDevFeeInfosPerDeployerRequest",
  is(o: any): o is QueryDevFeeInfosPerDeployerRequest {
    return o && (o.$typeUrl === QueryDevFeeInfosPerDeployerRequest.typeUrl || typeof o.deployerAddress === "string");
  },
  isSDK(o: any): o is QueryDevFeeInfosPerDeployerRequestSDKType {
    return o && (o.$typeUrl === QueryDevFeeInfosPerDeployerRequest.typeUrl || typeof o.deployer_address === "string");
  },
  isAmino(o: any): o is QueryDevFeeInfosPerDeployerRequestAmino {
    return o && (o.$typeUrl === QueryDevFeeInfosPerDeployerRequest.typeUrl || typeof o.deployer_address === "string");
  },
  encode(message: QueryDevFeeInfosPerDeployerRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.deployerAddress !== "") {
      writer.uint32(10).string(message.deployerAddress);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryDevFeeInfosPerDeployerRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDevFeeInfosPerDeployerRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.deployerAddress = reader.string();
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
  fromJSON(object: any): QueryDevFeeInfosPerDeployerRequest {
    const obj = createBaseQueryDevFeeInfosPerDeployerRequest();
    if (isSet(object.deployerAddress)) obj.deployerAddress = String(object.deployerAddress);
    if (isSet(object.pagination)) obj.pagination = PageRequest.fromJSON(object.pagination);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryDevFeeInfosPerDeployerRequest>): QueryDevFeeInfosPerDeployerRequest {
    const message = createBaseQueryDevFeeInfosPerDeployerRequest();
    message.deployerAddress = object.deployerAddress ?? "";
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    }
    return message;
  },
  fromSDK(object: QueryDevFeeInfosPerDeployerRequestSDKType): QueryDevFeeInfosPerDeployerRequest {
    return {
      deployerAddress: object?.deployer_address,
      pagination: object.pagination ? PageRequest.fromSDK(object.pagination) : undefined
    };
  },
  toSDK(message: QueryDevFeeInfosPerDeployerRequest): QueryDevFeeInfosPerDeployerRequestSDKType {
    const obj: any = {};
    obj.deployer_address = message.deployerAddress;
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toSDK(message.pagination) : undefined);
    return obj;
  },
  fromAmino(object: QueryDevFeeInfosPerDeployerRequestAmino): QueryDevFeeInfosPerDeployerRequest {
    const message = createBaseQueryDevFeeInfosPerDeployerRequest();
    if (object.deployer_address !== undefined && object.deployer_address !== null) {
      message.deployerAddress = object.deployer_address;
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryDevFeeInfosPerDeployerRequest, useInterfaces: boolean = true): QueryDevFeeInfosPerDeployerRequestAmino {
    const obj: any = {};
    obj.deployer_address = message.deployerAddress === "" ? undefined : message.deployerAddress;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination, useInterfaces) : undefined;
    return obj;
  },
  fromProtoMsg(message: QueryDevFeeInfosPerDeployerRequestProtoMsg, useInterfaces: boolean = true): QueryDevFeeInfosPerDeployerRequest {
    return QueryDevFeeInfosPerDeployerRequest.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryDevFeeInfosPerDeployerRequest): Uint8Array {
    return QueryDevFeeInfosPerDeployerRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryDevFeeInfosPerDeployerRequest): QueryDevFeeInfosPerDeployerRequestProtoMsg {
    return {
      typeUrl: "/evmos.fees.v1.QueryDevFeeInfosPerDeployerRequest",
      value: QueryDevFeeInfosPerDeployerRequest.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(QueryDevFeeInfosPerDeployerRequest.typeUrl)) {
      return;
    }
    PageRequest.registerTypeUrl();
  }
};
function createBaseQueryDevFeeInfosPerDeployerResponse(): QueryDevFeeInfosPerDeployerResponse {
  return {
    fees: [],
    pagination: undefined
  };
}
/**
 * QueryDevFeeInfosPerDeployerResponse is the response type for the
 * Query/DevFeeInfosPerDeployer RPC method.
 * @name QueryDevFeeInfosPerDeployerResponse
 * @package evmos.fees.v1
 * @see proto type: evmos.fees.v1.QueryDevFeeInfosPerDeployerResponse
 */
export const QueryDevFeeInfosPerDeployerResponse = {
  typeUrl: "/evmos.fees.v1.QueryDevFeeInfosPerDeployerResponse",
  is(o: any): o is QueryDevFeeInfosPerDeployerResponse {
    return o && (o.$typeUrl === QueryDevFeeInfosPerDeployerResponse.typeUrl || Array.isArray(o.fees) && (!o.fees.length || DevFeeInfo.is(o.fees[0])));
  },
  isSDK(o: any): o is QueryDevFeeInfosPerDeployerResponseSDKType {
    return o && (o.$typeUrl === QueryDevFeeInfosPerDeployerResponse.typeUrl || Array.isArray(o.fees) && (!o.fees.length || DevFeeInfo.isSDK(o.fees[0])));
  },
  isAmino(o: any): o is QueryDevFeeInfosPerDeployerResponseAmino {
    return o && (o.$typeUrl === QueryDevFeeInfosPerDeployerResponse.typeUrl || Array.isArray(o.fees) && (!o.fees.length || DevFeeInfo.isAmino(o.fees[0])));
  },
  encode(message: QueryDevFeeInfosPerDeployerResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.fees) {
      DevFeeInfo.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryDevFeeInfosPerDeployerResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDevFeeInfosPerDeployerResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.fees.push(DevFeeInfo.decode(reader, reader.uint32(), useInterfaces));
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
  fromJSON(object: any): QueryDevFeeInfosPerDeployerResponse {
    const obj = createBaseQueryDevFeeInfosPerDeployerResponse();
    if (Array.isArray(object?.fees)) obj.fees = object.fees.map((e: any) => DevFeeInfo.fromJSON(e));
    if (isSet(object.pagination)) obj.pagination = PageResponse.fromJSON(object.pagination);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryDevFeeInfosPerDeployerResponse>): QueryDevFeeInfosPerDeployerResponse {
    const message = createBaseQueryDevFeeInfosPerDeployerResponse();
    message.fees = object.fees?.map(e => DevFeeInfo.fromPartial(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    }
    return message;
  },
  fromSDK(object: QueryDevFeeInfosPerDeployerResponseSDKType): QueryDevFeeInfosPerDeployerResponse {
    return {
      fees: Array.isArray(object?.fees) ? object.fees.map((e: any) => DevFeeInfo.fromSDK(e)) : [],
      pagination: object.pagination ? PageResponse.fromSDK(object.pagination) : undefined
    };
  },
  toSDK(message: QueryDevFeeInfosPerDeployerResponse): QueryDevFeeInfosPerDeployerResponseSDKType {
    const obj: any = {};
    if (message.fees) {
      obj.fees = message.fees.map(e => e ? DevFeeInfo.toSDK(e) : undefined);
    } else {
      obj.fees = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toSDK(message.pagination) : undefined);
    return obj;
  },
  fromAmino(object: QueryDevFeeInfosPerDeployerResponseAmino): QueryDevFeeInfosPerDeployerResponse {
    const message = createBaseQueryDevFeeInfosPerDeployerResponse();
    message.fees = object.fees?.map(e => DevFeeInfo.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryDevFeeInfosPerDeployerResponse, useInterfaces: boolean = true): QueryDevFeeInfosPerDeployerResponseAmino {
    const obj: any = {};
    if (message.fees) {
      obj.fees = message.fees.map(e => e ? DevFeeInfo.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.fees = message.fees;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination, useInterfaces) : undefined;
    return obj;
  },
  fromProtoMsg(message: QueryDevFeeInfosPerDeployerResponseProtoMsg, useInterfaces: boolean = true): QueryDevFeeInfosPerDeployerResponse {
    return QueryDevFeeInfosPerDeployerResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryDevFeeInfosPerDeployerResponse): Uint8Array {
    return QueryDevFeeInfosPerDeployerResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryDevFeeInfosPerDeployerResponse): QueryDevFeeInfosPerDeployerResponseProtoMsg {
    return {
      typeUrl: "/evmos.fees.v1.QueryDevFeeInfosPerDeployerResponse",
      value: QueryDevFeeInfosPerDeployerResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(QueryDevFeeInfosPerDeployerResponse.typeUrl)) {
      return;
    }
    DevFeeInfo.registerTypeUrl();
    PageResponse.registerTypeUrl();
  }
};