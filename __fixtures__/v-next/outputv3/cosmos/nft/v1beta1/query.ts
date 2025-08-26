import { PageRequest, PageRequestAmino, PageRequestSDKType, PageResponse, PageResponseAmino, PageResponseSDKType } from "../../base/query/v1beta1/pagination";
import { NFT, NFTAmino, NFTSDKType, Class, ClassAmino, ClassSDKType } from "./nft";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet, DeepPartial } from "../../../helpers";
import { GlobalDecoderRegistry } from "../../../registry";
export const protobufPackage = "cosmos.nft.v1beta1";
/**
 * QueryBalanceRequest is the request type for the Query/Balance RPC method
 * @name QueryBalanceRequest
 * @package cosmos.nft.v1beta1
 * @see proto type: cosmos.nft.v1beta1.QueryBalanceRequest
 */
export interface QueryBalanceRequest {
  classId: string;
  owner: string;
}
export interface QueryBalanceRequestProtoMsg {
  typeUrl: "/cosmos.nft.v1beta1.QueryBalanceRequest";
  value: Uint8Array;
}
/**
 * QueryBalanceRequest is the request type for the Query/Balance RPC method
 * @name QueryBalanceRequestAmino
 * @package cosmos.nft.v1beta1
 * @see proto type: cosmos.nft.v1beta1.QueryBalanceRequest
 */
export interface QueryBalanceRequestAmino {
  class_id?: string;
  owner?: string;
}
/**
 * QueryBalanceRequest is the request type for the Query/Balance RPC method
 * @name QueryBalanceRequestSDKType
 * @package cosmos.nft.v1beta1
 * @see proto type: cosmos.nft.v1beta1.QueryBalanceRequest
 */
export interface QueryBalanceRequestSDKType {
  class_id: string;
  owner: string;
}
/**
 * QueryBalanceResponse is the response type for the Query/Balance RPC method
 * @name QueryBalanceResponse
 * @package cosmos.nft.v1beta1
 * @see proto type: cosmos.nft.v1beta1.QueryBalanceResponse
 */
export interface QueryBalanceResponse {
  amount: bigint;
}
export interface QueryBalanceResponseProtoMsg {
  typeUrl: "/cosmos.nft.v1beta1.QueryBalanceResponse";
  value: Uint8Array;
}
/**
 * QueryBalanceResponse is the response type for the Query/Balance RPC method
 * @name QueryBalanceResponseAmino
 * @package cosmos.nft.v1beta1
 * @see proto type: cosmos.nft.v1beta1.QueryBalanceResponse
 */
export interface QueryBalanceResponseAmino {
  amount?: string;
}
/**
 * QueryBalanceResponse is the response type for the Query/Balance RPC method
 * @name QueryBalanceResponseSDKType
 * @package cosmos.nft.v1beta1
 * @see proto type: cosmos.nft.v1beta1.QueryBalanceResponse
 */
export interface QueryBalanceResponseSDKType {
  amount: bigint;
}
/**
 * QueryOwnerRequest is the request type for the Query/Owner RPC method
 * @name QueryOwnerRequest
 * @package cosmos.nft.v1beta1
 * @see proto type: cosmos.nft.v1beta1.QueryOwnerRequest
 */
export interface QueryOwnerRequest {
  classId: string;
  id: string;
}
export interface QueryOwnerRequestProtoMsg {
  typeUrl: "/cosmos.nft.v1beta1.QueryOwnerRequest";
  value: Uint8Array;
}
/**
 * QueryOwnerRequest is the request type for the Query/Owner RPC method
 * @name QueryOwnerRequestAmino
 * @package cosmos.nft.v1beta1
 * @see proto type: cosmos.nft.v1beta1.QueryOwnerRequest
 */
export interface QueryOwnerRequestAmino {
  class_id?: string;
  id?: string;
}
/**
 * QueryOwnerRequest is the request type for the Query/Owner RPC method
 * @name QueryOwnerRequestSDKType
 * @package cosmos.nft.v1beta1
 * @see proto type: cosmos.nft.v1beta1.QueryOwnerRequest
 */
export interface QueryOwnerRequestSDKType {
  class_id: string;
  id: string;
}
/**
 * QueryOwnerResponse is the response type for the Query/Owner RPC method
 * @name QueryOwnerResponse
 * @package cosmos.nft.v1beta1
 * @see proto type: cosmos.nft.v1beta1.QueryOwnerResponse
 */
export interface QueryOwnerResponse {
  owner: string;
}
export interface QueryOwnerResponseProtoMsg {
  typeUrl: "/cosmos.nft.v1beta1.QueryOwnerResponse";
  value: Uint8Array;
}
/**
 * QueryOwnerResponse is the response type for the Query/Owner RPC method
 * @name QueryOwnerResponseAmino
 * @package cosmos.nft.v1beta1
 * @see proto type: cosmos.nft.v1beta1.QueryOwnerResponse
 */
export interface QueryOwnerResponseAmino {
  owner?: string;
}
/**
 * QueryOwnerResponse is the response type for the Query/Owner RPC method
 * @name QueryOwnerResponseSDKType
 * @package cosmos.nft.v1beta1
 * @see proto type: cosmos.nft.v1beta1.QueryOwnerResponse
 */
export interface QueryOwnerResponseSDKType {
  owner: string;
}
/**
 * QuerySupplyRequest is the request type for the Query/Supply RPC method
 * @name QuerySupplyRequest
 * @package cosmos.nft.v1beta1
 * @see proto type: cosmos.nft.v1beta1.QuerySupplyRequest
 */
export interface QuerySupplyRequest {
  classId: string;
}
export interface QuerySupplyRequestProtoMsg {
  typeUrl: "/cosmos.nft.v1beta1.QuerySupplyRequest";
  value: Uint8Array;
}
/**
 * QuerySupplyRequest is the request type for the Query/Supply RPC method
 * @name QuerySupplyRequestAmino
 * @package cosmos.nft.v1beta1
 * @see proto type: cosmos.nft.v1beta1.QuerySupplyRequest
 */
export interface QuerySupplyRequestAmino {
  class_id?: string;
}
/**
 * QuerySupplyRequest is the request type for the Query/Supply RPC method
 * @name QuerySupplyRequestSDKType
 * @package cosmos.nft.v1beta1
 * @see proto type: cosmos.nft.v1beta1.QuerySupplyRequest
 */
export interface QuerySupplyRequestSDKType {
  class_id: string;
}
/**
 * QuerySupplyResponse is the response type for the Query/Supply RPC method
 * @name QuerySupplyResponse
 * @package cosmos.nft.v1beta1
 * @see proto type: cosmos.nft.v1beta1.QuerySupplyResponse
 */
export interface QuerySupplyResponse {
  amount: bigint;
}
export interface QuerySupplyResponseProtoMsg {
  typeUrl: "/cosmos.nft.v1beta1.QuerySupplyResponse";
  value: Uint8Array;
}
/**
 * QuerySupplyResponse is the response type for the Query/Supply RPC method
 * @name QuerySupplyResponseAmino
 * @package cosmos.nft.v1beta1
 * @see proto type: cosmos.nft.v1beta1.QuerySupplyResponse
 */
export interface QuerySupplyResponseAmino {
  amount?: string;
}
/**
 * QuerySupplyResponse is the response type for the Query/Supply RPC method
 * @name QuerySupplyResponseSDKType
 * @package cosmos.nft.v1beta1
 * @see proto type: cosmos.nft.v1beta1.QuerySupplyResponse
 */
export interface QuerySupplyResponseSDKType {
  amount: bigint;
}
/**
 * QueryNFTstRequest is the request type for the Query/NFTs RPC method
 * @name QueryNFTsRequest
 * @package cosmos.nft.v1beta1
 * @see proto type: cosmos.nft.v1beta1.QueryNFTsRequest
 */
export interface QueryNFTsRequest {
  classId: string;
  owner: string;
  pagination?: PageRequest;
}
export interface QueryNFTsRequestProtoMsg {
  typeUrl: "/cosmos.nft.v1beta1.QueryNFTsRequest";
  value: Uint8Array;
}
/**
 * QueryNFTstRequest is the request type for the Query/NFTs RPC method
 * @name QueryNFTsRequestAmino
 * @package cosmos.nft.v1beta1
 * @see proto type: cosmos.nft.v1beta1.QueryNFTsRequest
 */
export interface QueryNFTsRequestAmino {
  class_id?: string;
  owner?: string;
  pagination?: PageRequestAmino;
}
/**
 * QueryNFTstRequest is the request type for the Query/NFTs RPC method
 * @name QueryNFTsRequestSDKType
 * @package cosmos.nft.v1beta1
 * @see proto type: cosmos.nft.v1beta1.QueryNFTsRequest
 */
export interface QueryNFTsRequestSDKType {
  class_id: string;
  owner: string;
  pagination?: PageRequestSDKType;
}
/**
 * QueryNFTsResponse is the response type for the Query/NFTs RPC methods
 * @name QueryNFTsResponse
 * @package cosmos.nft.v1beta1
 * @see proto type: cosmos.nft.v1beta1.QueryNFTsResponse
 */
export interface QueryNFTsResponse {
  nfts: NFT[];
  pagination?: PageResponse;
}
export interface QueryNFTsResponseProtoMsg {
  typeUrl: "/cosmos.nft.v1beta1.QueryNFTsResponse";
  value: Uint8Array;
}
/**
 * QueryNFTsResponse is the response type for the Query/NFTs RPC methods
 * @name QueryNFTsResponseAmino
 * @package cosmos.nft.v1beta1
 * @see proto type: cosmos.nft.v1beta1.QueryNFTsResponse
 */
export interface QueryNFTsResponseAmino {
  nfts?: NFTAmino[];
  pagination?: PageResponseAmino;
}
/**
 * QueryNFTsResponse is the response type for the Query/NFTs RPC methods
 * @name QueryNFTsResponseSDKType
 * @package cosmos.nft.v1beta1
 * @see proto type: cosmos.nft.v1beta1.QueryNFTsResponse
 */
export interface QueryNFTsResponseSDKType {
  nfts: NFTSDKType[];
  pagination?: PageResponseSDKType;
}
/**
 * QueryNFTRequest is the request type for the Query/NFT RPC method
 * @name QueryNFTRequest
 * @package cosmos.nft.v1beta1
 * @see proto type: cosmos.nft.v1beta1.QueryNFTRequest
 */
export interface QueryNFTRequest {
  classId: string;
  id: string;
}
export interface QueryNFTRequestProtoMsg {
  typeUrl: "/cosmos.nft.v1beta1.QueryNFTRequest";
  value: Uint8Array;
}
/**
 * QueryNFTRequest is the request type for the Query/NFT RPC method
 * @name QueryNFTRequestAmino
 * @package cosmos.nft.v1beta1
 * @see proto type: cosmos.nft.v1beta1.QueryNFTRequest
 */
export interface QueryNFTRequestAmino {
  class_id?: string;
  id?: string;
}
/**
 * QueryNFTRequest is the request type for the Query/NFT RPC method
 * @name QueryNFTRequestSDKType
 * @package cosmos.nft.v1beta1
 * @see proto type: cosmos.nft.v1beta1.QueryNFTRequest
 */
export interface QueryNFTRequestSDKType {
  class_id: string;
  id: string;
}
/**
 * QueryNFTResponse is the response type for the Query/NFT RPC method
 * @name QueryNFTResponse
 * @package cosmos.nft.v1beta1
 * @see proto type: cosmos.nft.v1beta1.QueryNFTResponse
 */
export interface QueryNFTResponse {
  nft?: NFT;
}
export interface QueryNFTResponseProtoMsg {
  typeUrl: "/cosmos.nft.v1beta1.QueryNFTResponse";
  value: Uint8Array;
}
/**
 * QueryNFTResponse is the response type for the Query/NFT RPC method
 * @name QueryNFTResponseAmino
 * @package cosmos.nft.v1beta1
 * @see proto type: cosmos.nft.v1beta1.QueryNFTResponse
 */
export interface QueryNFTResponseAmino {
  nft?: NFTAmino;
}
/**
 * QueryNFTResponse is the response type for the Query/NFT RPC method
 * @name QueryNFTResponseSDKType
 * @package cosmos.nft.v1beta1
 * @see proto type: cosmos.nft.v1beta1.QueryNFTResponse
 */
export interface QueryNFTResponseSDKType {
  nft?: NFTSDKType;
}
/**
 * QueryClassRequest is the request type for the Query/Class RPC method
 * @name QueryClassRequest
 * @package cosmos.nft.v1beta1
 * @see proto type: cosmos.nft.v1beta1.QueryClassRequest
 */
export interface QueryClassRequest {
  classId: string;
}
export interface QueryClassRequestProtoMsg {
  typeUrl: "/cosmos.nft.v1beta1.QueryClassRequest";
  value: Uint8Array;
}
/**
 * QueryClassRequest is the request type for the Query/Class RPC method
 * @name QueryClassRequestAmino
 * @package cosmos.nft.v1beta1
 * @see proto type: cosmos.nft.v1beta1.QueryClassRequest
 */
export interface QueryClassRequestAmino {
  class_id?: string;
}
/**
 * QueryClassRequest is the request type for the Query/Class RPC method
 * @name QueryClassRequestSDKType
 * @package cosmos.nft.v1beta1
 * @see proto type: cosmos.nft.v1beta1.QueryClassRequest
 */
export interface QueryClassRequestSDKType {
  class_id: string;
}
/**
 * QueryClassResponse is the response type for the Query/Class RPC method
 * @name QueryClassResponse
 * @package cosmos.nft.v1beta1
 * @see proto type: cosmos.nft.v1beta1.QueryClassResponse
 */
export interface QueryClassResponse {
  class?: Class;
}
export interface QueryClassResponseProtoMsg {
  typeUrl: "/cosmos.nft.v1beta1.QueryClassResponse";
  value: Uint8Array;
}
/**
 * QueryClassResponse is the response type for the Query/Class RPC method
 * @name QueryClassResponseAmino
 * @package cosmos.nft.v1beta1
 * @see proto type: cosmos.nft.v1beta1.QueryClassResponse
 */
export interface QueryClassResponseAmino {
  class?: ClassAmino;
}
/**
 * QueryClassResponse is the response type for the Query/Class RPC method
 * @name QueryClassResponseSDKType
 * @package cosmos.nft.v1beta1
 * @see proto type: cosmos.nft.v1beta1.QueryClassResponse
 */
export interface QueryClassResponseSDKType {
  class?: ClassSDKType;
}
/**
 * QueryClassesRequest is the request type for the Query/Classes RPC method
 * @name QueryClassesRequest
 * @package cosmos.nft.v1beta1
 * @see proto type: cosmos.nft.v1beta1.QueryClassesRequest
 */
export interface QueryClassesRequest {
  /**
   * pagination defines an optional pagination for the request.
   */
  pagination?: PageRequest;
}
export interface QueryClassesRequestProtoMsg {
  typeUrl: "/cosmos.nft.v1beta1.QueryClassesRequest";
  value: Uint8Array;
}
/**
 * QueryClassesRequest is the request type for the Query/Classes RPC method
 * @name QueryClassesRequestAmino
 * @package cosmos.nft.v1beta1
 * @see proto type: cosmos.nft.v1beta1.QueryClassesRequest
 */
export interface QueryClassesRequestAmino {
  /**
   * pagination defines an optional pagination for the request.
   */
  pagination?: PageRequestAmino;
}
/**
 * QueryClassesRequest is the request type for the Query/Classes RPC method
 * @name QueryClassesRequestSDKType
 * @package cosmos.nft.v1beta1
 * @see proto type: cosmos.nft.v1beta1.QueryClassesRequest
 */
export interface QueryClassesRequestSDKType {
  pagination?: PageRequestSDKType;
}
/**
 * QueryClassesResponse is the response type for the Query/Classes RPC method
 * @name QueryClassesResponse
 * @package cosmos.nft.v1beta1
 * @see proto type: cosmos.nft.v1beta1.QueryClassesResponse
 */
export interface QueryClassesResponse {
  classes: Class[];
  pagination?: PageResponse;
}
export interface QueryClassesResponseProtoMsg {
  typeUrl: "/cosmos.nft.v1beta1.QueryClassesResponse";
  value: Uint8Array;
}
/**
 * QueryClassesResponse is the response type for the Query/Classes RPC method
 * @name QueryClassesResponseAmino
 * @package cosmos.nft.v1beta1
 * @see proto type: cosmos.nft.v1beta1.QueryClassesResponse
 */
export interface QueryClassesResponseAmino {
  classes?: ClassAmino[];
  pagination?: PageResponseAmino;
}
/**
 * QueryClassesResponse is the response type for the Query/Classes RPC method
 * @name QueryClassesResponseSDKType
 * @package cosmos.nft.v1beta1
 * @see proto type: cosmos.nft.v1beta1.QueryClassesResponse
 */
export interface QueryClassesResponseSDKType {
  classes: ClassSDKType[];
  pagination?: PageResponseSDKType;
}
function createBaseQueryBalanceRequest(): QueryBalanceRequest {
  return {
    classId: "",
    owner: ""
  };
}
/**
 * QueryBalanceRequest is the request type for the Query/Balance RPC method
 * @name QueryBalanceRequest
 * @package cosmos.nft.v1beta1
 * @see proto type: cosmos.nft.v1beta1.QueryBalanceRequest
 */
export const QueryBalanceRequest = {
  typeUrl: "/cosmos.nft.v1beta1.QueryBalanceRequest",
  aminoType: "cosmos-sdk/QueryBalanceRequest",
  is(o: any): o is QueryBalanceRequest {
    return o && (o.$typeUrl === QueryBalanceRequest.typeUrl || typeof o.classId === "string" && typeof o.owner === "string");
  },
  isSDK(o: any): o is QueryBalanceRequestSDKType {
    return o && (o.$typeUrl === QueryBalanceRequest.typeUrl || typeof o.class_id === "string" && typeof o.owner === "string");
  },
  isAmino(o: any): o is QueryBalanceRequestAmino {
    return o && (o.$typeUrl === QueryBalanceRequest.typeUrl || typeof o.class_id === "string" && typeof o.owner === "string");
  },
  encode(message: QueryBalanceRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.classId !== "") {
      writer.uint32(10).string(message.classId);
    }
    if (message.owner !== "") {
      writer.uint32(18).string(message.owner);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryBalanceRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryBalanceRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.classId = reader.string();
          break;
        case 2:
          message.owner = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryBalanceRequest {
    const obj = createBaseQueryBalanceRequest();
    if (isSet(object.classId)) obj.classId = String(object.classId);
    if (isSet(object.owner)) obj.owner = String(object.owner);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryBalanceRequest>): QueryBalanceRequest {
    const message = createBaseQueryBalanceRequest();
    message.classId = object.classId ?? "";
    message.owner = object.owner ?? "";
    return message;
  },
  fromSDK(object: QueryBalanceRequestSDKType): QueryBalanceRequest {
    return {
      classId: object?.class_id,
      owner: object?.owner
    };
  },
  toSDK(message: QueryBalanceRequest): QueryBalanceRequestSDKType {
    const obj: any = {};
    obj.class_id = message.classId;
    obj.owner = message.owner;
    return obj;
  },
  fromAmino(object: QueryBalanceRequestAmino): QueryBalanceRequest {
    const message = createBaseQueryBalanceRequest();
    if (object.class_id !== undefined && object.class_id !== null) {
      message.classId = object.class_id;
    }
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = object.owner;
    }
    return message;
  },
  toAmino(message: QueryBalanceRequest, useInterfaces: boolean = true): QueryBalanceRequestAmino {
    const obj: any = {};
    obj.class_id = message.classId === "" ? undefined : message.classId;
    obj.owner = message.owner === "" ? undefined : message.owner;
    return obj;
  },
  fromProtoMsg(message: QueryBalanceRequestProtoMsg, useInterfaces: boolean = true): QueryBalanceRequest {
    return QueryBalanceRequest.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryBalanceRequest): Uint8Array {
    return QueryBalanceRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryBalanceRequest): QueryBalanceRequestProtoMsg {
    return {
      typeUrl: "/cosmos.nft.v1beta1.QueryBalanceRequest",
      value: QueryBalanceRequest.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseQueryBalanceResponse(): QueryBalanceResponse {
  return {
    amount: BigInt(0)
  };
}
/**
 * QueryBalanceResponse is the response type for the Query/Balance RPC method
 * @name QueryBalanceResponse
 * @package cosmos.nft.v1beta1
 * @see proto type: cosmos.nft.v1beta1.QueryBalanceResponse
 */
export const QueryBalanceResponse = {
  typeUrl: "/cosmos.nft.v1beta1.QueryBalanceResponse",
  aminoType: "cosmos-sdk/QueryBalanceResponse",
  is(o: any): o is QueryBalanceResponse {
    return o && (o.$typeUrl === QueryBalanceResponse.typeUrl || typeof o.amount === "bigint");
  },
  isSDK(o: any): o is QueryBalanceResponseSDKType {
    return o && (o.$typeUrl === QueryBalanceResponse.typeUrl || typeof o.amount === "bigint");
  },
  isAmino(o: any): o is QueryBalanceResponseAmino {
    return o && (o.$typeUrl === QueryBalanceResponse.typeUrl || typeof o.amount === "bigint");
  },
  encode(message: QueryBalanceResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.amount !== BigInt(0)) {
      writer.uint32(8).uint64(message.amount);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryBalanceResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryBalanceResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.amount = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryBalanceResponse {
    const obj = createBaseQueryBalanceResponse();
    if (isSet(object.amount)) obj.amount = BigInt(object.amount.toString());
    return obj;
  },
  fromPartial(object: DeepPartial<QueryBalanceResponse>): QueryBalanceResponse {
    const message = createBaseQueryBalanceResponse();
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = BigInt(object.amount.toString());
    }
    return message;
  },
  fromSDK(object: QueryBalanceResponseSDKType): QueryBalanceResponse {
    return {
      amount: object?.amount
    };
  },
  toSDK(message: QueryBalanceResponse): QueryBalanceResponseSDKType {
    const obj: any = {};
    obj.amount = message.amount;
    return obj;
  },
  fromAmino(object: QueryBalanceResponseAmino): QueryBalanceResponse {
    const message = createBaseQueryBalanceResponse();
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = BigInt(object.amount);
    }
    return message;
  },
  toAmino(message: QueryBalanceResponse, useInterfaces: boolean = true): QueryBalanceResponseAmino {
    const obj: any = {};
    obj.amount = message.amount !== BigInt(0) ? message.amount?.toString() : undefined;
    return obj;
  },
  fromProtoMsg(message: QueryBalanceResponseProtoMsg, useInterfaces: boolean = true): QueryBalanceResponse {
    return QueryBalanceResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryBalanceResponse): Uint8Array {
    return QueryBalanceResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryBalanceResponse): QueryBalanceResponseProtoMsg {
    return {
      typeUrl: "/cosmos.nft.v1beta1.QueryBalanceResponse",
      value: QueryBalanceResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseQueryOwnerRequest(): QueryOwnerRequest {
  return {
    classId: "",
    id: ""
  };
}
/**
 * QueryOwnerRequest is the request type for the Query/Owner RPC method
 * @name QueryOwnerRequest
 * @package cosmos.nft.v1beta1
 * @see proto type: cosmos.nft.v1beta1.QueryOwnerRequest
 */
export const QueryOwnerRequest = {
  typeUrl: "/cosmos.nft.v1beta1.QueryOwnerRequest",
  aminoType: "cosmos-sdk/QueryOwnerRequest",
  is(o: any): o is QueryOwnerRequest {
    return o && (o.$typeUrl === QueryOwnerRequest.typeUrl || typeof o.classId === "string" && typeof o.id === "string");
  },
  isSDK(o: any): o is QueryOwnerRequestSDKType {
    return o && (o.$typeUrl === QueryOwnerRequest.typeUrl || typeof o.class_id === "string" && typeof o.id === "string");
  },
  isAmino(o: any): o is QueryOwnerRequestAmino {
    return o && (o.$typeUrl === QueryOwnerRequest.typeUrl || typeof o.class_id === "string" && typeof o.id === "string");
  },
  encode(message: QueryOwnerRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.classId !== "") {
      writer.uint32(10).string(message.classId);
    }
    if (message.id !== "") {
      writer.uint32(18).string(message.id);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryOwnerRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryOwnerRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.classId = reader.string();
          break;
        case 2:
          message.id = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryOwnerRequest {
    const obj = createBaseQueryOwnerRequest();
    if (isSet(object.classId)) obj.classId = String(object.classId);
    if (isSet(object.id)) obj.id = String(object.id);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryOwnerRequest>): QueryOwnerRequest {
    const message = createBaseQueryOwnerRequest();
    message.classId = object.classId ?? "";
    message.id = object.id ?? "";
    return message;
  },
  fromSDK(object: QueryOwnerRequestSDKType): QueryOwnerRequest {
    return {
      classId: object?.class_id,
      id: object?.id
    };
  },
  toSDK(message: QueryOwnerRequest): QueryOwnerRequestSDKType {
    const obj: any = {};
    obj.class_id = message.classId;
    obj.id = message.id;
    return obj;
  },
  fromAmino(object: QueryOwnerRequestAmino): QueryOwnerRequest {
    const message = createBaseQueryOwnerRequest();
    if (object.class_id !== undefined && object.class_id !== null) {
      message.classId = object.class_id;
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    }
    return message;
  },
  toAmino(message: QueryOwnerRequest, useInterfaces: boolean = true): QueryOwnerRequestAmino {
    const obj: any = {};
    obj.class_id = message.classId === "" ? undefined : message.classId;
    obj.id = message.id === "" ? undefined : message.id;
    return obj;
  },
  fromProtoMsg(message: QueryOwnerRequestProtoMsg, useInterfaces: boolean = true): QueryOwnerRequest {
    return QueryOwnerRequest.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryOwnerRequest): Uint8Array {
    return QueryOwnerRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryOwnerRequest): QueryOwnerRequestProtoMsg {
    return {
      typeUrl: "/cosmos.nft.v1beta1.QueryOwnerRequest",
      value: QueryOwnerRequest.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseQueryOwnerResponse(): QueryOwnerResponse {
  return {
    owner: ""
  };
}
/**
 * QueryOwnerResponse is the response type for the Query/Owner RPC method
 * @name QueryOwnerResponse
 * @package cosmos.nft.v1beta1
 * @see proto type: cosmos.nft.v1beta1.QueryOwnerResponse
 */
export const QueryOwnerResponse = {
  typeUrl: "/cosmos.nft.v1beta1.QueryOwnerResponse",
  aminoType: "cosmos-sdk/QueryOwnerResponse",
  is(o: any): o is QueryOwnerResponse {
    return o && (o.$typeUrl === QueryOwnerResponse.typeUrl || typeof o.owner === "string");
  },
  isSDK(o: any): o is QueryOwnerResponseSDKType {
    return o && (o.$typeUrl === QueryOwnerResponse.typeUrl || typeof o.owner === "string");
  },
  isAmino(o: any): o is QueryOwnerResponseAmino {
    return o && (o.$typeUrl === QueryOwnerResponse.typeUrl || typeof o.owner === "string");
  },
  encode(message: QueryOwnerResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryOwnerResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryOwnerResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryOwnerResponse {
    const obj = createBaseQueryOwnerResponse();
    if (isSet(object.owner)) obj.owner = String(object.owner);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryOwnerResponse>): QueryOwnerResponse {
    const message = createBaseQueryOwnerResponse();
    message.owner = object.owner ?? "";
    return message;
  },
  fromSDK(object: QueryOwnerResponseSDKType): QueryOwnerResponse {
    return {
      owner: object?.owner
    };
  },
  toSDK(message: QueryOwnerResponse): QueryOwnerResponseSDKType {
    const obj: any = {};
    obj.owner = message.owner;
    return obj;
  },
  fromAmino(object: QueryOwnerResponseAmino): QueryOwnerResponse {
    const message = createBaseQueryOwnerResponse();
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = object.owner;
    }
    return message;
  },
  toAmino(message: QueryOwnerResponse, useInterfaces: boolean = true): QueryOwnerResponseAmino {
    const obj: any = {};
    obj.owner = message.owner === "" ? undefined : message.owner;
    return obj;
  },
  fromProtoMsg(message: QueryOwnerResponseProtoMsg, useInterfaces: boolean = true): QueryOwnerResponse {
    return QueryOwnerResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryOwnerResponse): Uint8Array {
    return QueryOwnerResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryOwnerResponse): QueryOwnerResponseProtoMsg {
    return {
      typeUrl: "/cosmos.nft.v1beta1.QueryOwnerResponse",
      value: QueryOwnerResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseQuerySupplyRequest(): QuerySupplyRequest {
  return {
    classId: ""
  };
}
/**
 * QuerySupplyRequest is the request type for the Query/Supply RPC method
 * @name QuerySupplyRequest
 * @package cosmos.nft.v1beta1
 * @see proto type: cosmos.nft.v1beta1.QuerySupplyRequest
 */
export const QuerySupplyRequest = {
  typeUrl: "/cosmos.nft.v1beta1.QuerySupplyRequest",
  aminoType: "cosmos-sdk/QuerySupplyRequest",
  is(o: any): o is QuerySupplyRequest {
    return o && (o.$typeUrl === QuerySupplyRequest.typeUrl || typeof o.classId === "string");
  },
  isSDK(o: any): o is QuerySupplyRequestSDKType {
    return o && (o.$typeUrl === QuerySupplyRequest.typeUrl || typeof o.class_id === "string");
  },
  isAmino(o: any): o is QuerySupplyRequestAmino {
    return o && (o.$typeUrl === QuerySupplyRequest.typeUrl || typeof o.class_id === "string");
  },
  encode(message: QuerySupplyRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.classId !== "") {
      writer.uint32(10).string(message.classId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QuerySupplyRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySupplyRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.classId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QuerySupplyRequest {
    const obj = createBaseQuerySupplyRequest();
    if (isSet(object.classId)) obj.classId = String(object.classId);
    return obj;
  },
  fromPartial(object: DeepPartial<QuerySupplyRequest>): QuerySupplyRequest {
    const message = createBaseQuerySupplyRequest();
    message.classId = object.classId ?? "";
    return message;
  },
  fromSDK(object: QuerySupplyRequestSDKType): QuerySupplyRequest {
    return {
      classId: object?.class_id
    };
  },
  toSDK(message: QuerySupplyRequest): QuerySupplyRequestSDKType {
    const obj: any = {};
    obj.class_id = message.classId;
    return obj;
  },
  fromAmino(object: QuerySupplyRequestAmino): QuerySupplyRequest {
    const message = createBaseQuerySupplyRequest();
    if (object.class_id !== undefined && object.class_id !== null) {
      message.classId = object.class_id;
    }
    return message;
  },
  toAmino(message: QuerySupplyRequest, useInterfaces: boolean = true): QuerySupplyRequestAmino {
    const obj: any = {};
    obj.class_id = message.classId === "" ? undefined : message.classId;
    return obj;
  },
  fromProtoMsg(message: QuerySupplyRequestProtoMsg, useInterfaces: boolean = true): QuerySupplyRequest {
    return QuerySupplyRequest.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QuerySupplyRequest): Uint8Array {
    return QuerySupplyRequest.encode(message).finish();
  },
  toProtoMsg(message: QuerySupplyRequest): QuerySupplyRequestProtoMsg {
    return {
      typeUrl: "/cosmos.nft.v1beta1.QuerySupplyRequest",
      value: QuerySupplyRequest.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseQuerySupplyResponse(): QuerySupplyResponse {
  return {
    amount: BigInt(0)
  };
}
/**
 * QuerySupplyResponse is the response type for the Query/Supply RPC method
 * @name QuerySupplyResponse
 * @package cosmos.nft.v1beta1
 * @see proto type: cosmos.nft.v1beta1.QuerySupplyResponse
 */
export const QuerySupplyResponse = {
  typeUrl: "/cosmos.nft.v1beta1.QuerySupplyResponse",
  aminoType: "cosmos-sdk/QuerySupplyResponse",
  is(o: any): o is QuerySupplyResponse {
    return o && (o.$typeUrl === QuerySupplyResponse.typeUrl || typeof o.amount === "bigint");
  },
  isSDK(o: any): o is QuerySupplyResponseSDKType {
    return o && (o.$typeUrl === QuerySupplyResponse.typeUrl || typeof o.amount === "bigint");
  },
  isAmino(o: any): o is QuerySupplyResponseAmino {
    return o && (o.$typeUrl === QuerySupplyResponse.typeUrl || typeof o.amount === "bigint");
  },
  encode(message: QuerySupplyResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.amount !== BigInt(0)) {
      writer.uint32(8).uint64(message.amount);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QuerySupplyResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySupplyResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.amount = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QuerySupplyResponse {
    const obj = createBaseQuerySupplyResponse();
    if (isSet(object.amount)) obj.amount = BigInt(object.amount.toString());
    return obj;
  },
  fromPartial(object: DeepPartial<QuerySupplyResponse>): QuerySupplyResponse {
    const message = createBaseQuerySupplyResponse();
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = BigInt(object.amount.toString());
    }
    return message;
  },
  fromSDK(object: QuerySupplyResponseSDKType): QuerySupplyResponse {
    return {
      amount: object?.amount
    };
  },
  toSDK(message: QuerySupplyResponse): QuerySupplyResponseSDKType {
    const obj: any = {};
    obj.amount = message.amount;
    return obj;
  },
  fromAmino(object: QuerySupplyResponseAmino): QuerySupplyResponse {
    const message = createBaseQuerySupplyResponse();
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = BigInt(object.amount);
    }
    return message;
  },
  toAmino(message: QuerySupplyResponse, useInterfaces: boolean = true): QuerySupplyResponseAmino {
    const obj: any = {};
    obj.amount = message.amount !== BigInt(0) ? message.amount?.toString() : undefined;
    return obj;
  },
  fromProtoMsg(message: QuerySupplyResponseProtoMsg, useInterfaces: boolean = true): QuerySupplyResponse {
    return QuerySupplyResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QuerySupplyResponse): Uint8Array {
    return QuerySupplyResponse.encode(message).finish();
  },
  toProtoMsg(message: QuerySupplyResponse): QuerySupplyResponseProtoMsg {
    return {
      typeUrl: "/cosmos.nft.v1beta1.QuerySupplyResponse",
      value: QuerySupplyResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseQueryNFTsRequest(): QueryNFTsRequest {
  return {
    classId: "",
    owner: "",
    pagination: undefined
  };
}
/**
 * QueryNFTstRequest is the request type for the Query/NFTs RPC method
 * @name QueryNFTsRequest
 * @package cosmos.nft.v1beta1
 * @see proto type: cosmos.nft.v1beta1.QueryNFTsRequest
 */
export const QueryNFTsRequest = {
  typeUrl: "/cosmos.nft.v1beta1.QueryNFTsRequest",
  aminoType: "cosmos-sdk/QueryNFTsRequest",
  is(o: any): o is QueryNFTsRequest {
    return o && (o.$typeUrl === QueryNFTsRequest.typeUrl || typeof o.classId === "string" && typeof o.owner === "string");
  },
  isSDK(o: any): o is QueryNFTsRequestSDKType {
    return o && (o.$typeUrl === QueryNFTsRequest.typeUrl || typeof o.class_id === "string" && typeof o.owner === "string");
  },
  isAmino(o: any): o is QueryNFTsRequestAmino {
    return o && (o.$typeUrl === QueryNFTsRequest.typeUrl || typeof o.class_id === "string" && typeof o.owner === "string");
  },
  encode(message: QueryNFTsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.classId !== "") {
      writer.uint32(10).string(message.classId);
    }
    if (message.owner !== "") {
      writer.uint32(18).string(message.owner);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryNFTsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryNFTsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.classId = reader.string();
          break;
        case 2:
          message.owner = reader.string();
          break;
        case 3:
          message.pagination = PageRequest.decode(reader, reader.uint32(), useInterfaces);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryNFTsRequest {
    const obj = createBaseQueryNFTsRequest();
    if (isSet(object.classId)) obj.classId = String(object.classId);
    if (isSet(object.owner)) obj.owner = String(object.owner);
    if (isSet(object.pagination)) obj.pagination = PageRequest.fromJSON(object.pagination);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryNFTsRequest>): QueryNFTsRequest {
    const message = createBaseQueryNFTsRequest();
    message.classId = object.classId ?? "";
    message.owner = object.owner ?? "";
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    }
    return message;
  },
  fromSDK(object: QueryNFTsRequestSDKType): QueryNFTsRequest {
    return {
      classId: object?.class_id,
      owner: object?.owner,
      pagination: object.pagination ? PageRequest.fromSDK(object.pagination) : undefined
    };
  },
  toSDK(message: QueryNFTsRequest): QueryNFTsRequestSDKType {
    const obj: any = {};
    obj.class_id = message.classId;
    obj.owner = message.owner;
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toSDK(message.pagination) : undefined);
    return obj;
  },
  fromAmino(object: QueryNFTsRequestAmino): QueryNFTsRequest {
    const message = createBaseQueryNFTsRequest();
    if (object.class_id !== undefined && object.class_id !== null) {
      message.classId = object.class_id;
    }
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = object.owner;
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryNFTsRequest, useInterfaces: boolean = true): QueryNFTsRequestAmino {
    const obj: any = {};
    obj.class_id = message.classId === "" ? undefined : message.classId;
    obj.owner = message.owner === "" ? undefined : message.owner;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination, useInterfaces) : undefined;
    return obj;
  },
  fromProtoMsg(message: QueryNFTsRequestProtoMsg, useInterfaces: boolean = true): QueryNFTsRequest {
    return QueryNFTsRequest.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryNFTsRequest): Uint8Array {
    return QueryNFTsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryNFTsRequest): QueryNFTsRequestProtoMsg {
    return {
      typeUrl: "/cosmos.nft.v1beta1.QueryNFTsRequest",
      value: QueryNFTsRequest.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(QueryNFTsRequest.typeUrl)) {
      return;
    }
    PageRequest.registerTypeUrl();
  }
};
function createBaseQueryNFTsResponse(): QueryNFTsResponse {
  return {
    nfts: [],
    pagination: undefined
  };
}
/**
 * QueryNFTsResponse is the response type for the Query/NFTs RPC methods
 * @name QueryNFTsResponse
 * @package cosmos.nft.v1beta1
 * @see proto type: cosmos.nft.v1beta1.QueryNFTsResponse
 */
export const QueryNFTsResponse = {
  typeUrl: "/cosmos.nft.v1beta1.QueryNFTsResponse",
  aminoType: "cosmos-sdk/QueryNFTsResponse",
  is(o: any): o is QueryNFTsResponse {
    return o && (o.$typeUrl === QueryNFTsResponse.typeUrl || Array.isArray(o.nfts) && (!o.nfts.length || NFT.is(o.nfts[0])));
  },
  isSDK(o: any): o is QueryNFTsResponseSDKType {
    return o && (o.$typeUrl === QueryNFTsResponse.typeUrl || Array.isArray(o.nfts) && (!o.nfts.length || NFT.isSDK(o.nfts[0])));
  },
  isAmino(o: any): o is QueryNFTsResponseAmino {
    return o && (o.$typeUrl === QueryNFTsResponse.typeUrl || Array.isArray(o.nfts) && (!o.nfts.length || NFT.isAmino(o.nfts[0])));
  },
  encode(message: QueryNFTsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.nfts) {
      NFT.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryNFTsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryNFTsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.nfts.push(NFT.decode(reader, reader.uint32(), useInterfaces));
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
  fromJSON(object: any): QueryNFTsResponse {
    const obj = createBaseQueryNFTsResponse();
    if (Array.isArray(object?.nfts)) obj.nfts = object.nfts.map((e: any) => NFT.fromJSON(e));
    if (isSet(object.pagination)) obj.pagination = PageResponse.fromJSON(object.pagination);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryNFTsResponse>): QueryNFTsResponse {
    const message = createBaseQueryNFTsResponse();
    message.nfts = object.nfts?.map(e => NFT.fromPartial(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    }
    return message;
  },
  fromSDK(object: QueryNFTsResponseSDKType): QueryNFTsResponse {
    return {
      nfts: Array.isArray(object?.nfts) ? object.nfts.map((e: any) => NFT.fromSDK(e)) : [],
      pagination: object.pagination ? PageResponse.fromSDK(object.pagination) : undefined
    };
  },
  toSDK(message: QueryNFTsResponse): QueryNFTsResponseSDKType {
    const obj: any = {};
    if (message.nfts) {
      obj.nfts = message.nfts.map(e => e ? NFT.toSDK(e) : undefined);
    } else {
      obj.nfts = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toSDK(message.pagination) : undefined);
    return obj;
  },
  fromAmino(object: QueryNFTsResponseAmino): QueryNFTsResponse {
    const message = createBaseQueryNFTsResponse();
    message.nfts = object.nfts?.map(e => NFT.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryNFTsResponse, useInterfaces: boolean = true): QueryNFTsResponseAmino {
    const obj: any = {};
    if (message.nfts) {
      obj.nfts = message.nfts.map(e => e ? NFT.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.nfts = message.nfts;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination, useInterfaces) : undefined;
    return obj;
  },
  fromProtoMsg(message: QueryNFTsResponseProtoMsg, useInterfaces: boolean = true): QueryNFTsResponse {
    return QueryNFTsResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryNFTsResponse): Uint8Array {
    return QueryNFTsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryNFTsResponse): QueryNFTsResponseProtoMsg {
    return {
      typeUrl: "/cosmos.nft.v1beta1.QueryNFTsResponse",
      value: QueryNFTsResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(QueryNFTsResponse.typeUrl)) {
      return;
    }
    NFT.registerTypeUrl();
    PageResponse.registerTypeUrl();
  }
};
function createBaseQueryNFTRequest(): QueryNFTRequest {
  return {
    classId: "",
    id: ""
  };
}
/**
 * QueryNFTRequest is the request type for the Query/NFT RPC method
 * @name QueryNFTRequest
 * @package cosmos.nft.v1beta1
 * @see proto type: cosmos.nft.v1beta1.QueryNFTRequest
 */
export const QueryNFTRequest = {
  typeUrl: "/cosmos.nft.v1beta1.QueryNFTRequest",
  aminoType: "cosmos-sdk/QueryNFTRequest",
  is(o: any): o is QueryNFTRequest {
    return o && (o.$typeUrl === QueryNFTRequest.typeUrl || typeof o.classId === "string" && typeof o.id === "string");
  },
  isSDK(o: any): o is QueryNFTRequestSDKType {
    return o && (o.$typeUrl === QueryNFTRequest.typeUrl || typeof o.class_id === "string" && typeof o.id === "string");
  },
  isAmino(o: any): o is QueryNFTRequestAmino {
    return o && (o.$typeUrl === QueryNFTRequest.typeUrl || typeof o.class_id === "string" && typeof o.id === "string");
  },
  encode(message: QueryNFTRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.classId !== "") {
      writer.uint32(10).string(message.classId);
    }
    if (message.id !== "") {
      writer.uint32(18).string(message.id);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryNFTRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryNFTRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.classId = reader.string();
          break;
        case 2:
          message.id = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryNFTRequest {
    const obj = createBaseQueryNFTRequest();
    if (isSet(object.classId)) obj.classId = String(object.classId);
    if (isSet(object.id)) obj.id = String(object.id);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryNFTRequest>): QueryNFTRequest {
    const message = createBaseQueryNFTRequest();
    message.classId = object.classId ?? "";
    message.id = object.id ?? "";
    return message;
  },
  fromSDK(object: QueryNFTRequestSDKType): QueryNFTRequest {
    return {
      classId: object?.class_id,
      id: object?.id
    };
  },
  toSDK(message: QueryNFTRequest): QueryNFTRequestSDKType {
    const obj: any = {};
    obj.class_id = message.classId;
    obj.id = message.id;
    return obj;
  },
  fromAmino(object: QueryNFTRequestAmino): QueryNFTRequest {
    const message = createBaseQueryNFTRequest();
    if (object.class_id !== undefined && object.class_id !== null) {
      message.classId = object.class_id;
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    }
    return message;
  },
  toAmino(message: QueryNFTRequest, useInterfaces: boolean = true): QueryNFTRequestAmino {
    const obj: any = {};
    obj.class_id = message.classId === "" ? undefined : message.classId;
    obj.id = message.id === "" ? undefined : message.id;
    return obj;
  },
  fromProtoMsg(message: QueryNFTRequestProtoMsg, useInterfaces: boolean = true): QueryNFTRequest {
    return QueryNFTRequest.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryNFTRequest): Uint8Array {
    return QueryNFTRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryNFTRequest): QueryNFTRequestProtoMsg {
    return {
      typeUrl: "/cosmos.nft.v1beta1.QueryNFTRequest",
      value: QueryNFTRequest.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseQueryNFTResponse(): QueryNFTResponse {
  return {
    nft: undefined
  };
}
/**
 * QueryNFTResponse is the response type for the Query/NFT RPC method
 * @name QueryNFTResponse
 * @package cosmos.nft.v1beta1
 * @see proto type: cosmos.nft.v1beta1.QueryNFTResponse
 */
export const QueryNFTResponse = {
  typeUrl: "/cosmos.nft.v1beta1.QueryNFTResponse",
  aminoType: "cosmos-sdk/QueryNFTResponse",
  is(o: any): o is QueryNFTResponse {
    return o && o.$typeUrl === QueryNFTResponse.typeUrl;
  },
  isSDK(o: any): o is QueryNFTResponseSDKType {
    return o && o.$typeUrl === QueryNFTResponse.typeUrl;
  },
  isAmino(o: any): o is QueryNFTResponseAmino {
    return o && o.$typeUrl === QueryNFTResponse.typeUrl;
  },
  encode(message: QueryNFTResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.nft !== undefined) {
      NFT.encode(message.nft, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryNFTResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryNFTResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.nft = NFT.decode(reader, reader.uint32(), useInterfaces);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryNFTResponse {
    const obj = createBaseQueryNFTResponse();
    if (isSet(object.nft)) obj.nft = NFT.fromJSON(object.nft);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryNFTResponse>): QueryNFTResponse {
    const message = createBaseQueryNFTResponse();
    if (object.nft !== undefined && object.nft !== null) {
      message.nft = NFT.fromPartial(object.nft);
    }
    return message;
  },
  fromSDK(object: QueryNFTResponseSDKType): QueryNFTResponse {
    return {
      nft: object.nft ? NFT.fromSDK(object.nft) : undefined
    };
  },
  toSDK(message: QueryNFTResponse): QueryNFTResponseSDKType {
    const obj: any = {};
    message.nft !== undefined && (obj.nft = message.nft ? NFT.toSDK(message.nft) : undefined);
    return obj;
  },
  fromAmino(object: QueryNFTResponseAmino): QueryNFTResponse {
    const message = createBaseQueryNFTResponse();
    if (object.nft !== undefined && object.nft !== null) {
      message.nft = NFT.fromAmino(object.nft);
    }
    return message;
  },
  toAmino(message: QueryNFTResponse, useInterfaces: boolean = true): QueryNFTResponseAmino {
    const obj: any = {};
    obj.nft = message.nft ? NFT.toAmino(message.nft, useInterfaces) : undefined;
    return obj;
  },
  fromProtoMsg(message: QueryNFTResponseProtoMsg, useInterfaces: boolean = true): QueryNFTResponse {
    return QueryNFTResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryNFTResponse): Uint8Array {
    return QueryNFTResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryNFTResponse): QueryNFTResponseProtoMsg {
    return {
      typeUrl: "/cosmos.nft.v1beta1.QueryNFTResponse",
      value: QueryNFTResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(QueryNFTResponse.typeUrl)) {
      return;
    }
    NFT.registerTypeUrl();
  }
};
function createBaseQueryClassRequest(): QueryClassRequest {
  return {
    classId: ""
  };
}
/**
 * QueryClassRequest is the request type for the Query/Class RPC method
 * @name QueryClassRequest
 * @package cosmos.nft.v1beta1
 * @see proto type: cosmos.nft.v1beta1.QueryClassRequest
 */
export const QueryClassRequest = {
  typeUrl: "/cosmos.nft.v1beta1.QueryClassRequest",
  aminoType: "cosmos-sdk/QueryClassRequest",
  is(o: any): o is QueryClassRequest {
    return o && (o.$typeUrl === QueryClassRequest.typeUrl || typeof o.classId === "string");
  },
  isSDK(o: any): o is QueryClassRequestSDKType {
    return o && (o.$typeUrl === QueryClassRequest.typeUrl || typeof o.class_id === "string");
  },
  isAmino(o: any): o is QueryClassRequestAmino {
    return o && (o.$typeUrl === QueryClassRequest.typeUrl || typeof o.class_id === "string");
  },
  encode(message: QueryClassRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.classId !== "") {
      writer.uint32(10).string(message.classId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryClassRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryClassRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.classId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryClassRequest {
    const obj = createBaseQueryClassRequest();
    if (isSet(object.classId)) obj.classId = String(object.classId);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryClassRequest>): QueryClassRequest {
    const message = createBaseQueryClassRequest();
    message.classId = object.classId ?? "";
    return message;
  },
  fromSDK(object: QueryClassRequestSDKType): QueryClassRequest {
    return {
      classId: object?.class_id
    };
  },
  toSDK(message: QueryClassRequest): QueryClassRequestSDKType {
    const obj: any = {};
    obj.class_id = message.classId;
    return obj;
  },
  fromAmino(object: QueryClassRequestAmino): QueryClassRequest {
    const message = createBaseQueryClassRequest();
    if (object.class_id !== undefined && object.class_id !== null) {
      message.classId = object.class_id;
    }
    return message;
  },
  toAmino(message: QueryClassRequest, useInterfaces: boolean = true): QueryClassRequestAmino {
    const obj: any = {};
    obj.class_id = message.classId === "" ? undefined : message.classId;
    return obj;
  },
  fromProtoMsg(message: QueryClassRequestProtoMsg, useInterfaces: boolean = true): QueryClassRequest {
    return QueryClassRequest.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryClassRequest): Uint8Array {
    return QueryClassRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryClassRequest): QueryClassRequestProtoMsg {
    return {
      typeUrl: "/cosmos.nft.v1beta1.QueryClassRequest",
      value: QueryClassRequest.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseQueryClassResponse(): QueryClassResponse {
  return {
    class: undefined
  };
}
/**
 * QueryClassResponse is the response type for the Query/Class RPC method
 * @name QueryClassResponse
 * @package cosmos.nft.v1beta1
 * @see proto type: cosmos.nft.v1beta1.QueryClassResponse
 */
export const QueryClassResponse = {
  typeUrl: "/cosmos.nft.v1beta1.QueryClassResponse",
  aminoType: "cosmos-sdk/QueryClassResponse",
  is(o: any): o is QueryClassResponse {
    return o && o.$typeUrl === QueryClassResponse.typeUrl;
  },
  isSDK(o: any): o is QueryClassResponseSDKType {
    return o && o.$typeUrl === QueryClassResponse.typeUrl;
  },
  isAmino(o: any): o is QueryClassResponseAmino {
    return o && o.$typeUrl === QueryClassResponse.typeUrl;
  },
  encode(message: QueryClassResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.class !== undefined) {
      Class.encode(message.class, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryClassResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryClassResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.class = Class.decode(reader, reader.uint32(), useInterfaces);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryClassResponse {
    const obj = createBaseQueryClassResponse();
    if (isSet(object.class)) obj.class = Class.fromJSON(object.class);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryClassResponse>): QueryClassResponse {
    const message = createBaseQueryClassResponse();
    if (object.class !== undefined && object.class !== null) {
      message.class = Class.fromPartial(object.class);
    }
    return message;
  },
  fromSDK(object: QueryClassResponseSDKType): QueryClassResponse {
    return {
      class: object.class ? Class.fromSDK(object.class) : undefined
    };
  },
  toSDK(message: QueryClassResponse): QueryClassResponseSDKType {
    const obj: any = {};
    message.class !== undefined && (obj.class = message.class ? Class.toSDK(message.class) : undefined);
    return obj;
  },
  fromAmino(object: QueryClassResponseAmino): QueryClassResponse {
    const message = createBaseQueryClassResponse();
    if (object.class !== undefined && object.class !== null) {
      message.class = Class.fromAmino(object.class);
    }
    return message;
  },
  toAmino(message: QueryClassResponse, useInterfaces: boolean = true): QueryClassResponseAmino {
    const obj: any = {};
    obj.class = message.class ? Class.toAmino(message.class, useInterfaces) : undefined;
    return obj;
  },
  fromProtoMsg(message: QueryClassResponseProtoMsg, useInterfaces: boolean = true): QueryClassResponse {
    return QueryClassResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryClassResponse): Uint8Array {
    return QueryClassResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryClassResponse): QueryClassResponseProtoMsg {
    return {
      typeUrl: "/cosmos.nft.v1beta1.QueryClassResponse",
      value: QueryClassResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(QueryClassResponse.typeUrl)) {
      return;
    }
    Class.registerTypeUrl();
  }
};
function createBaseQueryClassesRequest(): QueryClassesRequest {
  return {
    pagination: undefined
  };
}
/**
 * QueryClassesRequest is the request type for the Query/Classes RPC method
 * @name QueryClassesRequest
 * @package cosmos.nft.v1beta1
 * @see proto type: cosmos.nft.v1beta1.QueryClassesRequest
 */
export const QueryClassesRequest = {
  typeUrl: "/cosmos.nft.v1beta1.QueryClassesRequest",
  aminoType: "cosmos-sdk/QueryClassesRequest",
  is(o: any): o is QueryClassesRequest {
    return o && o.$typeUrl === QueryClassesRequest.typeUrl;
  },
  isSDK(o: any): o is QueryClassesRequestSDKType {
    return o && o.$typeUrl === QueryClassesRequest.typeUrl;
  },
  isAmino(o: any): o is QueryClassesRequestAmino {
    return o && o.$typeUrl === QueryClassesRequest.typeUrl;
  },
  encode(message: QueryClassesRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryClassesRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryClassesRequest();
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
  fromJSON(object: any): QueryClassesRequest {
    const obj = createBaseQueryClassesRequest();
    if (isSet(object.pagination)) obj.pagination = PageRequest.fromJSON(object.pagination);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryClassesRequest>): QueryClassesRequest {
    const message = createBaseQueryClassesRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    }
    return message;
  },
  fromSDK(object: QueryClassesRequestSDKType): QueryClassesRequest {
    return {
      pagination: object.pagination ? PageRequest.fromSDK(object.pagination) : undefined
    };
  },
  toSDK(message: QueryClassesRequest): QueryClassesRequestSDKType {
    const obj: any = {};
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toSDK(message.pagination) : undefined);
    return obj;
  },
  fromAmino(object: QueryClassesRequestAmino): QueryClassesRequest {
    const message = createBaseQueryClassesRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryClassesRequest, useInterfaces: boolean = true): QueryClassesRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination, useInterfaces) : undefined;
    return obj;
  },
  fromProtoMsg(message: QueryClassesRequestProtoMsg, useInterfaces: boolean = true): QueryClassesRequest {
    return QueryClassesRequest.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryClassesRequest): Uint8Array {
    return QueryClassesRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryClassesRequest): QueryClassesRequestProtoMsg {
    return {
      typeUrl: "/cosmos.nft.v1beta1.QueryClassesRequest",
      value: QueryClassesRequest.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(QueryClassesRequest.typeUrl)) {
      return;
    }
    PageRequest.registerTypeUrl();
  }
};
function createBaseQueryClassesResponse(): QueryClassesResponse {
  return {
    classes: [],
    pagination: undefined
  };
}
/**
 * QueryClassesResponse is the response type for the Query/Classes RPC method
 * @name QueryClassesResponse
 * @package cosmos.nft.v1beta1
 * @see proto type: cosmos.nft.v1beta1.QueryClassesResponse
 */
export const QueryClassesResponse = {
  typeUrl: "/cosmos.nft.v1beta1.QueryClassesResponse",
  aminoType: "cosmos-sdk/QueryClassesResponse",
  is(o: any): o is QueryClassesResponse {
    return o && (o.$typeUrl === QueryClassesResponse.typeUrl || Array.isArray(o.classes) && (!o.classes.length || Class.is(o.classes[0])));
  },
  isSDK(o: any): o is QueryClassesResponseSDKType {
    return o && (o.$typeUrl === QueryClassesResponse.typeUrl || Array.isArray(o.classes) && (!o.classes.length || Class.isSDK(o.classes[0])));
  },
  isAmino(o: any): o is QueryClassesResponseAmino {
    return o && (o.$typeUrl === QueryClassesResponse.typeUrl || Array.isArray(o.classes) && (!o.classes.length || Class.isAmino(o.classes[0])));
  },
  encode(message: QueryClassesResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.classes) {
      Class.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryClassesResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryClassesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.classes.push(Class.decode(reader, reader.uint32(), useInterfaces));
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
  fromJSON(object: any): QueryClassesResponse {
    const obj = createBaseQueryClassesResponse();
    if (Array.isArray(object?.classes)) obj.classes = object.classes.map((e: any) => Class.fromJSON(e));
    if (isSet(object.pagination)) obj.pagination = PageResponse.fromJSON(object.pagination);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryClassesResponse>): QueryClassesResponse {
    const message = createBaseQueryClassesResponse();
    message.classes = object.classes?.map(e => Class.fromPartial(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    }
    return message;
  },
  fromSDK(object: QueryClassesResponseSDKType): QueryClassesResponse {
    return {
      classes: Array.isArray(object?.classes) ? object.classes.map((e: any) => Class.fromSDK(e)) : [],
      pagination: object.pagination ? PageResponse.fromSDK(object.pagination) : undefined
    };
  },
  toSDK(message: QueryClassesResponse): QueryClassesResponseSDKType {
    const obj: any = {};
    if (message.classes) {
      obj.classes = message.classes.map(e => e ? Class.toSDK(e) : undefined);
    } else {
      obj.classes = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toSDK(message.pagination) : undefined);
    return obj;
  },
  fromAmino(object: QueryClassesResponseAmino): QueryClassesResponse {
    const message = createBaseQueryClassesResponse();
    message.classes = object.classes?.map(e => Class.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryClassesResponse, useInterfaces: boolean = true): QueryClassesResponseAmino {
    const obj: any = {};
    if (message.classes) {
      obj.classes = message.classes.map(e => e ? Class.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.classes = message.classes;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination, useInterfaces) : undefined;
    return obj;
  },
  fromProtoMsg(message: QueryClassesResponseProtoMsg, useInterfaces: boolean = true): QueryClassesResponse {
    return QueryClassesResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryClassesResponse): Uint8Array {
    return QueryClassesResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryClassesResponse): QueryClassesResponseProtoMsg {
    return {
      typeUrl: "/cosmos.nft.v1beta1.QueryClassesResponse",
      value: QueryClassesResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(QueryClassesResponse.typeUrl)) {
      return;
    }
    Class.registerTypeUrl();
    PageResponse.registerTypeUrl();
  }
};