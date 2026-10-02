import { BinaryReader, BinaryWriter } from "../../../binary";
import type { DeepPartial } from "../../../helpers";
import { EvmosRecoveryV1Params, type EvmosRecoveryV1ParamsAmino } from "./genesis";
/**
 * QueryParamsRequest is the request type for the Query/Params RPC method.
 * @name QueryParamsRequest
 * @package evmos.recovery.v1
 * @see proto type: evmos.recovery.v1.QueryParamsRequest
 */
export interface QueryParamsRequest {}
export interface QueryParamsRequestProtoMsg {
  typeUrl: "/evmos.recovery.v1.QueryParamsRequest";
  value: Uint8Array;
}
/**
 * QueryParamsRequest is the request type for the Query/Params RPC method.
 * @name QueryParamsRequestAmino
 * @package evmos.recovery.v1
 * @see proto type: evmos.recovery.v1.QueryParamsRequest
 */
export interface QueryParamsRequestAmino {}
export interface QueryParamsRequestAminoMsg {
  type: "/evmos.recovery.v1.QueryParamsRequest";
  value: QueryParamsRequestAmino;
}
/**
 * QueryParamsResponse is the response type for the Query/Params RPC method.
 * @name QueryParamsResponse
 * @package evmos.recovery.v1
 * @see proto type: evmos.recovery.v1.QueryParamsResponse
 */
export interface QueryParamsResponse {
  /**
   * params defines the parameters of the module.
   */
  params: EvmosRecoveryV1Params;
}
export interface QueryParamsResponseProtoMsg {
  typeUrl: "/evmos.recovery.v1.QueryParamsResponse";
  value: Uint8Array;
}
/**
 * QueryParamsResponse is the response type for the Query/Params RPC method.
 * @name QueryParamsResponseAmino
 * @package evmos.recovery.v1
 * @see proto type: evmos.recovery.v1.QueryParamsResponse
 */
export interface QueryParamsResponseAmino {
  /**
   * params defines the parameters of the module.
   */
  params: EvmosRecoveryV1ParamsAmino;
}
export interface QueryParamsResponseAminoMsg {
  type: "/evmos.recovery.v1.QueryParamsResponse";
  value: QueryParamsResponseAmino;
}
function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}
/**
 * QueryParamsRequest is the request type for the Query/Params RPC method.
 * @name QueryParamsRequest
 * @package evmos.recovery.v1
 * @see proto type: evmos.recovery.v1.QueryParamsRequest
 */
export const QueryParamsRequest = {
  typeUrl: "/evmos.recovery.v1.QueryParamsRequest",
  encode(_: QueryParamsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryParamsRequest {
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
  fromPartial(_: DeepPartial<QueryParamsRequest>): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    return message;
  },
  fromAmino(_: QueryParamsRequestAmino): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    return message;
  },
  toAmino(_: QueryParamsRequest): QueryParamsRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryParamsRequestAminoMsg): QueryParamsRequest {
    return QueryParamsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryParamsRequestProtoMsg): QueryParamsRequest {
    return QueryParamsRequest.decode(message.value);
  },
  toProto(message: QueryParamsRequest): Uint8Array {
    return QueryParamsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryParamsRequest): QueryParamsRequestProtoMsg {
    return {
      typeUrl: "/evmos.recovery.v1.QueryParamsRequest",
      value: QueryParamsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryParamsResponse(): QueryParamsResponse {
  return {
    params: EvmosRecoveryV1Params.fromPartial({})
  };
}
/**
 * QueryParamsResponse is the response type for the Query/Params RPC method.
 * @name QueryParamsResponse
 * @package evmos.recovery.v1
 * @see proto type: evmos.recovery.v1.QueryParamsResponse
 */
export const QueryParamsResponse = {
  typeUrl: "/evmos.recovery.v1.QueryParamsResponse",
  encode(message: QueryParamsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      EvmosRecoveryV1Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryParamsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = EvmosRecoveryV1Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryParamsResponse>): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    message.params = object.params !== undefined && object.params !== null ? EvmosRecoveryV1Params.fromPartial(object.params) : undefined;
    return message;
  },
  fromAmino(object: QueryParamsResponseAmino): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    if (object.params !== undefined && object.params !== null) {
      message.params = EvmosRecoveryV1Params.fromAmino(object.params);
    }
    return message;
  },
  toAmino(message: QueryParamsResponse): QueryParamsResponseAmino {
    const obj: any = {};
    obj.params = message.params ? EvmosRecoveryV1Params.toAmino(message.params) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryParamsResponseAminoMsg): QueryParamsResponse {
    return QueryParamsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryParamsResponseProtoMsg): QueryParamsResponse {
    return QueryParamsResponse.decode(message.value);
  },
  toProto(message: QueryParamsResponse): Uint8Array {
    return QueryParamsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryParamsResponse): QueryParamsResponseProtoMsg {
    return {
      typeUrl: "/evmos.recovery.v1.QueryParamsResponse",
      value: QueryParamsResponse.encode(message).finish()
    };
  }
};