import { Config, ConfigAmino, ConfigSDKType } from "./config";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial, isSet } from "../../../helpers";
import { GlobalDecoderRegistry } from "../../../registry";
export const protobufPackage = "cosmos.app.v1alpha1";
/**
 * QueryConfigRequest is the Query/Config request type.
 * @name QueryConfigRequest
 * @package cosmos.app.v1alpha1
 * @see proto type: cosmos.app.v1alpha1.QueryConfigRequest
 */
export interface QueryConfigRequest {}
export interface QueryConfigRequestProtoMsg {
  typeUrl: "/cosmos.app.v1alpha1.QueryConfigRequest";
  value: Uint8Array;
}
/**
 * QueryConfigRequest is the Query/Config request type.
 * @name QueryConfigRequestAmino
 * @package cosmos.app.v1alpha1
 * @see proto type: cosmos.app.v1alpha1.QueryConfigRequest
 */
export interface QueryConfigRequestAmino {}
/**
 * QueryConfigRequest is the Query/Config request type.
 * @name QueryConfigRequestSDKType
 * @package cosmos.app.v1alpha1
 * @see proto type: cosmos.app.v1alpha1.QueryConfigRequest
 */
export interface QueryConfigRequestSDKType {}
/**
 * QueryConfigRequest is the Query/Config response type.
 * @name QueryConfigResponse
 * @package cosmos.app.v1alpha1
 * @see proto type: cosmos.app.v1alpha1.QueryConfigResponse
 */
export interface QueryConfigResponse {
  /**
   * config is the current app config.
   */
  config?: Config;
}
export interface QueryConfigResponseProtoMsg {
  typeUrl: "/cosmos.app.v1alpha1.QueryConfigResponse";
  value: Uint8Array;
}
/**
 * QueryConfigRequest is the Query/Config response type.
 * @name QueryConfigResponseAmino
 * @package cosmos.app.v1alpha1
 * @see proto type: cosmos.app.v1alpha1.QueryConfigResponse
 */
export interface QueryConfigResponseAmino {
  /**
   * config is the current app config.
   */
  config?: ConfigAmino;
}
/**
 * QueryConfigRequest is the Query/Config response type.
 * @name QueryConfigResponseSDKType
 * @package cosmos.app.v1alpha1
 * @see proto type: cosmos.app.v1alpha1.QueryConfigResponse
 */
export interface QueryConfigResponseSDKType {
  config?: ConfigSDKType;
}
function createBaseQueryConfigRequest(): QueryConfigRequest {
  return {};
}
/**
 * QueryConfigRequest is the Query/Config request type.
 * @name QueryConfigRequest
 * @package cosmos.app.v1alpha1
 * @see proto type: cosmos.app.v1alpha1.QueryConfigRequest
 */
export const QueryConfigRequest = {
  typeUrl: "/cosmos.app.v1alpha1.QueryConfigRequest",
  aminoType: "cosmos-sdk/QueryConfigRequest",
  is(o: any): o is QueryConfigRequest {
    return o && o.$typeUrl === QueryConfigRequest.typeUrl;
  },
  isSDK(o: any): o is QueryConfigRequestSDKType {
    return o && o.$typeUrl === QueryConfigRequest.typeUrl;
  },
  isAmino(o: any): o is QueryConfigRequestAmino {
    return o && o.$typeUrl === QueryConfigRequest.typeUrl;
  },
  encode(_: QueryConfigRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryConfigRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryConfigRequest();
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
  fromJSON(_: any): QueryConfigRequest {
    const obj = createBaseQueryConfigRequest();
    return obj;
  },
  fromPartial(_: DeepPartial<QueryConfigRequest>): QueryConfigRequest {
    const message = createBaseQueryConfigRequest();
    return message;
  },
  fromSDK(_: QueryConfigRequestSDKType): QueryConfigRequest {
    return {};
  },
  toSDK(_: QueryConfigRequest): QueryConfigRequestSDKType {
    const obj: any = {};
    return obj;
  },
  fromAmino(_: QueryConfigRequestAmino): QueryConfigRequest {
    const message = createBaseQueryConfigRequest();
    return message;
  },
  toAmino(_: QueryConfigRequest, useInterfaces: boolean = true): QueryConfigRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromProtoMsg(message: QueryConfigRequestProtoMsg, useInterfaces: boolean = true): QueryConfigRequest {
    return QueryConfigRequest.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryConfigRequest): Uint8Array {
    return QueryConfigRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryConfigRequest): QueryConfigRequestProtoMsg {
    return {
      typeUrl: "/cosmos.app.v1alpha1.QueryConfigRequest",
      value: QueryConfigRequest.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseQueryConfigResponse(): QueryConfigResponse {
  return {
    config: undefined
  };
}
/**
 * QueryConfigRequest is the Query/Config response type.
 * @name QueryConfigResponse
 * @package cosmos.app.v1alpha1
 * @see proto type: cosmos.app.v1alpha1.QueryConfigResponse
 */
export const QueryConfigResponse = {
  typeUrl: "/cosmos.app.v1alpha1.QueryConfigResponse",
  aminoType: "cosmos-sdk/QueryConfigResponse",
  is(o: any): o is QueryConfigResponse {
    return o && o.$typeUrl === QueryConfigResponse.typeUrl;
  },
  isSDK(o: any): o is QueryConfigResponseSDKType {
    return o && o.$typeUrl === QueryConfigResponse.typeUrl;
  },
  isAmino(o: any): o is QueryConfigResponseAmino {
    return o && o.$typeUrl === QueryConfigResponse.typeUrl;
  },
  encode(message: QueryConfigResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.config !== undefined) {
      Config.encode(message.config, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryConfigResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryConfigResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.config = Config.decode(reader, reader.uint32(), useInterfaces);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryConfigResponse {
    const obj = createBaseQueryConfigResponse();
    if (isSet(object.config)) obj.config = Config.fromJSON(object.config);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryConfigResponse>): QueryConfigResponse {
    const message = createBaseQueryConfigResponse();
    if (object.config !== undefined && object.config !== null) {
      message.config = Config.fromPartial(object.config);
    }
    return message;
  },
  fromSDK(object: QueryConfigResponseSDKType): QueryConfigResponse {
    return {
      config: object.config ? Config.fromSDK(object.config) : undefined
    };
  },
  toSDK(message: QueryConfigResponse): QueryConfigResponseSDKType {
    const obj: any = {};
    message.config !== undefined && (obj.config = message.config ? Config.toSDK(message.config) : undefined);
    return obj;
  },
  fromAmino(object: QueryConfigResponseAmino): QueryConfigResponse {
    const message = createBaseQueryConfigResponse();
    if (object.config !== undefined && object.config !== null) {
      message.config = Config.fromAmino(object.config);
    }
    return message;
  },
  toAmino(message: QueryConfigResponse, useInterfaces: boolean = true): QueryConfigResponseAmino {
    const obj: any = {};
    obj.config = message.config ? Config.toAmino(message.config, useInterfaces) : undefined;
    return obj;
  },
  fromProtoMsg(message: QueryConfigResponseProtoMsg, useInterfaces: boolean = true): QueryConfigResponse {
    return QueryConfigResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryConfigResponse): Uint8Array {
    return QueryConfigResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryConfigResponse): QueryConfigResponseProtoMsg {
    return {
      typeUrl: "/cosmos.app.v1alpha1.QueryConfigResponse",
      value: QueryConfigResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(QueryConfigResponse.typeUrl)) {
      return;
    }
    Config.registerTypeUrl();
  }
};