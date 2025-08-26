import { PageRequest, PageRequestAmino, PageRequestSDKType, PageResponse, PageResponseAmino, PageResponseSDKType } from "../../../../cosmos/base/query/v1beta1/pagination";
import { Any, AnyProtoMsg, AnyAmino, AnySDKType } from "../../../../google/protobuf/any";
import { Height, HeightAmino, HeightSDKType, IdentifiedClientState, IdentifiedClientStateAmino, IdentifiedClientStateSDKType, ConsensusStateWithHeight, ConsensusStateWithHeightAmino, ConsensusStateWithHeightSDKType, Params, ParamsAmino, ParamsSDKType } from "./client";
import { BinaryReader, BinaryWriter } from "../../../../binary";
import { isSet, DeepPartial, bytesFromBase64, base64FromBytes } from "../../../../helpers";
import { GlobalDecoderRegistry } from "../../../../registry";
export const protobufPackage = "ibc.core.client.v1";
/**
 * QueryClientStateRequest is the request type for the Query/ClientState RPC
 * method
 * @name QueryClientStateRequest
 * @package ibc.core.client.v1
 * @see proto type: ibc.core.client.v1.QueryClientStateRequest
 */
export interface QueryClientStateRequest {
  /**
   * client state unique identifier
   */
  clientId: string;
}
export interface QueryClientStateRequestProtoMsg {
  typeUrl: "/ibc.core.client.v1.QueryClientStateRequest";
  value: Uint8Array;
}
/**
 * QueryClientStateRequest is the request type for the Query/ClientState RPC
 * method
 * @name QueryClientStateRequestAmino
 * @package ibc.core.client.v1
 * @see proto type: ibc.core.client.v1.QueryClientStateRequest
 */
export interface QueryClientStateRequestAmino {
  /**
   * client state unique identifier
   */
  client_id?: string;
}
/**
 * QueryClientStateRequest is the request type for the Query/ClientState RPC
 * method
 * @name QueryClientStateRequestSDKType
 * @package ibc.core.client.v1
 * @see proto type: ibc.core.client.v1.QueryClientStateRequest
 */
export interface QueryClientStateRequestSDKType {
  client_id: string;
}
/**
 * QueryClientStateResponse is the response type for the Query/ClientState RPC
 * method. Besides the client state, it includes a proof and the height from
 * which the proof was retrieved.
 * @name QueryClientStateResponse
 * @package ibc.core.client.v1
 * @see proto type: ibc.core.client.v1.QueryClientStateResponse
 */
export interface QueryClientStateResponse {
  /**
   * client state associated with the request identifier
   */
  clientState?: Any;
  /**
   * merkle proof of existence
   */
  proof: Uint8Array;
  /**
   * height at which the proof was retrieved
   */
  proofHeight: Height;
}
export interface QueryClientStateResponseProtoMsg {
  typeUrl: "/ibc.core.client.v1.QueryClientStateResponse";
  value: Uint8Array;
}
/**
 * QueryClientStateResponse is the response type for the Query/ClientState RPC
 * method. Besides the client state, it includes a proof and the height from
 * which the proof was retrieved.
 * @name QueryClientStateResponseAmino
 * @package ibc.core.client.v1
 * @see proto type: ibc.core.client.v1.QueryClientStateResponse
 */
export interface QueryClientStateResponseAmino {
  /**
   * client state associated with the request identifier
   */
  client_state?: AnyAmino;
  /**
   * merkle proof of existence
   */
  proof?: string;
  /**
   * height at which the proof was retrieved
   */
  proof_height?: HeightAmino;
}
/**
 * QueryClientStateResponse is the response type for the Query/ClientState RPC
 * method. Besides the client state, it includes a proof and the height from
 * which the proof was retrieved.
 * @name QueryClientStateResponseSDKType
 * @package ibc.core.client.v1
 * @see proto type: ibc.core.client.v1.QueryClientStateResponse
 */
export interface QueryClientStateResponseSDKType {
  client_state?: AnySDKType;
  proof: Uint8Array;
  proof_height: HeightSDKType;
}
/**
 * QueryClientStatesRequest is the request type for the Query/ClientStates RPC
 * method
 * @name QueryClientStatesRequest
 * @package ibc.core.client.v1
 * @see proto type: ibc.core.client.v1.QueryClientStatesRequest
 */
export interface QueryClientStatesRequest {
  /**
   * pagination request
   */
  pagination?: PageRequest;
}
export interface QueryClientStatesRequestProtoMsg {
  typeUrl: "/ibc.core.client.v1.QueryClientStatesRequest";
  value: Uint8Array;
}
/**
 * QueryClientStatesRequest is the request type for the Query/ClientStates RPC
 * method
 * @name QueryClientStatesRequestAmino
 * @package ibc.core.client.v1
 * @see proto type: ibc.core.client.v1.QueryClientStatesRequest
 */
export interface QueryClientStatesRequestAmino {
  /**
   * pagination request
   */
  pagination?: PageRequestAmino;
}
/**
 * QueryClientStatesRequest is the request type for the Query/ClientStates RPC
 * method
 * @name QueryClientStatesRequestSDKType
 * @package ibc.core.client.v1
 * @see proto type: ibc.core.client.v1.QueryClientStatesRequest
 */
export interface QueryClientStatesRequestSDKType {
  pagination?: PageRequestSDKType;
}
/**
 * QueryClientStatesResponse is the response type for the Query/ClientStates RPC
 * method.
 * @name QueryClientStatesResponse
 * @package ibc.core.client.v1
 * @see proto type: ibc.core.client.v1.QueryClientStatesResponse
 */
export interface QueryClientStatesResponse {
  /**
   * list of stored ClientStates of the chain.
   */
  clientStates: IdentifiedClientState[];
  /**
   * pagination response
   */
  pagination?: PageResponse;
}
export interface QueryClientStatesResponseProtoMsg {
  typeUrl: "/ibc.core.client.v1.QueryClientStatesResponse";
  value: Uint8Array;
}
/**
 * QueryClientStatesResponse is the response type for the Query/ClientStates RPC
 * method.
 * @name QueryClientStatesResponseAmino
 * @package ibc.core.client.v1
 * @see proto type: ibc.core.client.v1.QueryClientStatesResponse
 */
export interface QueryClientStatesResponseAmino {
  /**
   * list of stored ClientStates of the chain.
   */
  client_states?: IdentifiedClientStateAmino[];
  /**
   * pagination response
   */
  pagination?: PageResponseAmino;
}
/**
 * QueryClientStatesResponse is the response type for the Query/ClientStates RPC
 * method.
 * @name QueryClientStatesResponseSDKType
 * @package ibc.core.client.v1
 * @see proto type: ibc.core.client.v1.QueryClientStatesResponse
 */
export interface QueryClientStatesResponseSDKType {
  client_states: IdentifiedClientStateSDKType[];
  pagination?: PageResponseSDKType;
}
/**
 * QueryConsensusStateRequest is the request type for the Query/ConsensusState
 * RPC method. Besides the consensus state, it includes a proof and the height
 * from which the proof was retrieved.
 * @name QueryConsensusStateRequest
 * @package ibc.core.client.v1
 * @see proto type: ibc.core.client.v1.QueryConsensusStateRequest
 */
export interface QueryConsensusStateRequest {
  /**
   * client identifier
   */
  clientId: string;
  /**
   * consensus state revision number
   */
  revisionNumber: bigint;
  /**
   * consensus state revision height
   */
  revisionHeight: bigint;
  /**
   * latest_height overrrides the height field and queries the latest stored
   * ConsensusState
   */
  latestHeight: boolean;
}
export interface QueryConsensusStateRequestProtoMsg {
  typeUrl: "/ibc.core.client.v1.QueryConsensusStateRequest";
  value: Uint8Array;
}
/**
 * QueryConsensusStateRequest is the request type for the Query/ConsensusState
 * RPC method. Besides the consensus state, it includes a proof and the height
 * from which the proof was retrieved.
 * @name QueryConsensusStateRequestAmino
 * @package ibc.core.client.v1
 * @see proto type: ibc.core.client.v1.QueryConsensusStateRequest
 */
export interface QueryConsensusStateRequestAmino {
  /**
   * client identifier
   */
  client_id?: string;
  /**
   * consensus state revision number
   */
  revision_number?: string;
  /**
   * consensus state revision height
   */
  revision_height?: string;
  /**
   * latest_height overrrides the height field and queries the latest stored
   * ConsensusState
   */
  latest_height?: boolean;
}
/**
 * QueryConsensusStateRequest is the request type for the Query/ConsensusState
 * RPC method. Besides the consensus state, it includes a proof and the height
 * from which the proof was retrieved.
 * @name QueryConsensusStateRequestSDKType
 * @package ibc.core.client.v1
 * @see proto type: ibc.core.client.v1.QueryConsensusStateRequest
 */
export interface QueryConsensusStateRequestSDKType {
  client_id: string;
  revision_number: bigint;
  revision_height: bigint;
  latest_height: boolean;
}
/**
 * QueryConsensusStateResponse is the response type for the Query/ConsensusState
 * RPC method
 * @name QueryConsensusStateResponse
 * @package ibc.core.client.v1
 * @see proto type: ibc.core.client.v1.QueryConsensusStateResponse
 */
export interface QueryConsensusStateResponse {
  /**
   * consensus state associated with the client identifier at the given height
   */
  consensusState?: Any;
  /**
   * merkle proof of existence
   */
  proof: Uint8Array;
  /**
   * height at which the proof was retrieved
   */
  proofHeight: Height;
}
export interface QueryConsensusStateResponseProtoMsg {
  typeUrl: "/ibc.core.client.v1.QueryConsensusStateResponse";
  value: Uint8Array;
}
/**
 * QueryConsensusStateResponse is the response type for the Query/ConsensusState
 * RPC method
 * @name QueryConsensusStateResponseAmino
 * @package ibc.core.client.v1
 * @see proto type: ibc.core.client.v1.QueryConsensusStateResponse
 */
export interface QueryConsensusStateResponseAmino {
  /**
   * consensus state associated with the client identifier at the given height
   */
  consensus_state?: AnyAmino;
  /**
   * merkle proof of existence
   */
  proof?: string;
  /**
   * height at which the proof was retrieved
   */
  proof_height?: HeightAmino;
}
/**
 * QueryConsensusStateResponse is the response type for the Query/ConsensusState
 * RPC method
 * @name QueryConsensusStateResponseSDKType
 * @package ibc.core.client.v1
 * @see proto type: ibc.core.client.v1.QueryConsensusStateResponse
 */
export interface QueryConsensusStateResponseSDKType {
  consensus_state?: AnySDKType;
  proof: Uint8Array;
  proof_height: HeightSDKType;
}
/**
 * QueryConsensusStatesRequest is the request type for the Query/ConsensusStates
 * RPC method.
 * @name QueryConsensusStatesRequest
 * @package ibc.core.client.v1
 * @see proto type: ibc.core.client.v1.QueryConsensusStatesRequest
 */
export interface QueryConsensusStatesRequest {
  /**
   * client identifier
   */
  clientId: string;
  /**
   * pagination request
   */
  pagination?: PageRequest;
}
export interface QueryConsensusStatesRequestProtoMsg {
  typeUrl: "/ibc.core.client.v1.QueryConsensusStatesRequest";
  value: Uint8Array;
}
/**
 * QueryConsensusStatesRequest is the request type for the Query/ConsensusStates
 * RPC method.
 * @name QueryConsensusStatesRequestAmino
 * @package ibc.core.client.v1
 * @see proto type: ibc.core.client.v1.QueryConsensusStatesRequest
 */
export interface QueryConsensusStatesRequestAmino {
  /**
   * client identifier
   */
  client_id?: string;
  /**
   * pagination request
   */
  pagination?: PageRequestAmino;
}
/**
 * QueryConsensusStatesRequest is the request type for the Query/ConsensusStates
 * RPC method.
 * @name QueryConsensusStatesRequestSDKType
 * @package ibc.core.client.v1
 * @see proto type: ibc.core.client.v1.QueryConsensusStatesRequest
 */
export interface QueryConsensusStatesRequestSDKType {
  client_id: string;
  pagination?: PageRequestSDKType;
}
/**
 * QueryConsensusStatesResponse is the response type for the
 * Query/ConsensusStates RPC method
 * @name QueryConsensusStatesResponse
 * @package ibc.core.client.v1
 * @see proto type: ibc.core.client.v1.QueryConsensusStatesResponse
 */
export interface QueryConsensusStatesResponse {
  /**
   * consensus states associated with the identifier
   */
  consensusStates: ConsensusStateWithHeight[];
  /**
   * pagination response
   */
  pagination?: PageResponse;
}
export interface QueryConsensusStatesResponseProtoMsg {
  typeUrl: "/ibc.core.client.v1.QueryConsensusStatesResponse";
  value: Uint8Array;
}
/**
 * QueryConsensusStatesResponse is the response type for the
 * Query/ConsensusStates RPC method
 * @name QueryConsensusStatesResponseAmino
 * @package ibc.core.client.v1
 * @see proto type: ibc.core.client.v1.QueryConsensusStatesResponse
 */
export interface QueryConsensusStatesResponseAmino {
  /**
   * consensus states associated with the identifier
   */
  consensus_states?: ConsensusStateWithHeightAmino[];
  /**
   * pagination response
   */
  pagination?: PageResponseAmino;
}
/**
 * QueryConsensusStatesResponse is the response type for the
 * Query/ConsensusStates RPC method
 * @name QueryConsensusStatesResponseSDKType
 * @package ibc.core.client.v1
 * @see proto type: ibc.core.client.v1.QueryConsensusStatesResponse
 */
export interface QueryConsensusStatesResponseSDKType {
  consensus_states: ConsensusStateWithHeightSDKType[];
  pagination?: PageResponseSDKType;
}
/**
 * QueryClientStatusRequest is the request type for the Query/ClientStatus RPC
 * method
 * @name QueryClientStatusRequest
 * @package ibc.core.client.v1
 * @see proto type: ibc.core.client.v1.QueryClientStatusRequest
 */
export interface QueryClientStatusRequest {
  /**
   * client unique identifier
   */
  clientId: string;
}
export interface QueryClientStatusRequestProtoMsg {
  typeUrl: "/ibc.core.client.v1.QueryClientStatusRequest";
  value: Uint8Array;
}
/**
 * QueryClientStatusRequest is the request type for the Query/ClientStatus RPC
 * method
 * @name QueryClientStatusRequestAmino
 * @package ibc.core.client.v1
 * @see proto type: ibc.core.client.v1.QueryClientStatusRequest
 */
export interface QueryClientStatusRequestAmino {
  /**
   * client unique identifier
   */
  client_id?: string;
}
/**
 * QueryClientStatusRequest is the request type for the Query/ClientStatus RPC
 * method
 * @name QueryClientStatusRequestSDKType
 * @package ibc.core.client.v1
 * @see proto type: ibc.core.client.v1.QueryClientStatusRequest
 */
export interface QueryClientStatusRequestSDKType {
  client_id: string;
}
/**
 * QueryClientStatusResponse is the response type for the Query/ClientStatus RPC
 * method. It returns the current status of the IBC client.
 * @name QueryClientStatusResponse
 * @package ibc.core.client.v1
 * @see proto type: ibc.core.client.v1.QueryClientStatusResponse
 */
export interface QueryClientStatusResponse {
  status: string;
}
export interface QueryClientStatusResponseProtoMsg {
  typeUrl: "/ibc.core.client.v1.QueryClientStatusResponse";
  value: Uint8Array;
}
/**
 * QueryClientStatusResponse is the response type for the Query/ClientStatus RPC
 * method. It returns the current status of the IBC client.
 * @name QueryClientStatusResponseAmino
 * @package ibc.core.client.v1
 * @see proto type: ibc.core.client.v1.QueryClientStatusResponse
 */
export interface QueryClientStatusResponseAmino {
  status?: string;
}
/**
 * QueryClientStatusResponse is the response type for the Query/ClientStatus RPC
 * method. It returns the current status of the IBC client.
 * @name QueryClientStatusResponseSDKType
 * @package ibc.core.client.v1
 * @see proto type: ibc.core.client.v1.QueryClientStatusResponse
 */
export interface QueryClientStatusResponseSDKType {
  status: string;
}
/**
 * QueryClientParamsRequest is the request type for the Query/ClientParams RPC
 * method.
 * @name QueryClientParamsRequest
 * @package ibc.core.client.v1
 * @see proto type: ibc.core.client.v1.QueryClientParamsRequest
 */
export interface QueryClientParamsRequest {}
export interface QueryClientParamsRequestProtoMsg {
  typeUrl: "/ibc.core.client.v1.QueryClientParamsRequest";
  value: Uint8Array;
}
/**
 * QueryClientParamsRequest is the request type for the Query/ClientParams RPC
 * method.
 * @name QueryClientParamsRequestAmino
 * @package ibc.core.client.v1
 * @see proto type: ibc.core.client.v1.QueryClientParamsRequest
 */
export interface QueryClientParamsRequestAmino {}
/**
 * QueryClientParamsRequest is the request type for the Query/ClientParams RPC
 * method.
 * @name QueryClientParamsRequestSDKType
 * @package ibc.core.client.v1
 * @see proto type: ibc.core.client.v1.QueryClientParamsRequest
 */
export interface QueryClientParamsRequestSDKType {}
/**
 * QueryClientParamsResponse is the response type for the Query/ClientParams RPC
 * method.
 * @name QueryClientParamsResponse
 * @package ibc.core.client.v1
 * @see proto type: ibc.core.client.v1.QueryClientParamsResponse
 */
export interface QueryClientParamsResponse {
  /**
   * params defines the parameters of the module.
   */
  params?: Params;
}
export interface QueryClientParamsResponseProtoMsg {
  typeUrl: "/ibc.core.client.v1.QueryClientParamsResponse";
  value: Uint8Array;
}
/**
 * QueryClientParamsResponse is the response type for the Query/ClientParams RPC
 * method.
 * @name QueryClientParamsResponseAmino
 * @package ibc.core.client.v1
 * @see proto type: ibc.core.client.v1.QueryClientParamsResponse
 */
export interface QueryClientParamsResponseAmino {
  /**
   * params defines the parameters of the module.
   */
  params?: ParamsAmino;
}
/**
 * QueryClientParamsResponse is the response type for the Query/ClientParams RPC
 * method.
 * @name QueryClientParamsResponseSDKType
 * @package ibc.core.client.v1
 * @see proto type: ibc.core.client.v1.QueryClientParamsResponse
 */
export interface QueryClientParamsResponseSDKType {
  params?: ParamsSDKType;
}
/**
 * QueryUpgradedClientStateRequest is the request type for the
 * Query/UpgradedClientState RPC method
 * @name QueryUpgradedClientStateRequest
 * @package ibc.core.client.v1
 * @see proto type: ibc.core.client.v1.QueryUpgradedClientStateRequest
 */
export interface QueryUpgradedClientStateRequest {}
export interface QueryUpgradedClientStateRequestProtoMsg {
  typeUrl: "/ibc.core.client.v1.QueryUpgradedClientStateRequest";
  value: Uint8Array;
}
/**
 * QueryUpgradedClientStateRequest is the request type for the
 * Query/UpgradedClientState RPC method
 * @name QueryUpgradedClientStateRequestAmino
 * @package ibc.core.client.v1
 * @see proto type: ibc.core.client.v1.QueryUpgradedClientStateRequest
 */
export interface QueryUpgradedClientStateRequestAmino {}
/**
 * QueryUpgradedClientStateRequest is the request type for the
 * Query/UpgradedClientState RPC method
 * @name QueryUpgradedClientStateRequestSDKType
 * @package ibc.core.client.v1
 * @see proto type: ibc.core.client.v1.QueryUpgradedClientStateRequest
 */
export interface QueryUpgradedClientStateRequestSDKType {}
/**
 * QueryUpgradedClientStateResponse is the response type for the
 * Query/UpgradedClientState RPC method.
 * @name QueryUpgradedClientStateResponse
 * @package ibc.core.client.v1
 * @see proto type: ibc.core.client.v1.QueryUpgradedClientStateResponse
 */
export interface QueryUpgradedClientStateResponse {
  /**
   * client state associated with the request identifier
   */
  upgradedClientState?: Any;
}
export interface QueryUpgradedClientStateResponseProtoMsg {
  typeUrl: "/ibc.core.client.v1.QueryUpgradedClientStateResponse";
  value: Uint8Array;
}
/**
 * QueryUpgradedClientStateResponse is the response type for the
 * Query/UpgradedClientState RPC method.
 * @name QueryUpgradedClientStateResponseAmino
 * @package ibc.core.client.v1
 * @see proto type: ibc.core.client.v1.QueryUpgradedClientStateResponse
 */
export interface QueryUpgradedClientStateResponseAmino {
  /**
   * client state associated with the request identifier
   */
  upgraded_client_state?: AnyAmino;
}
/**
 * QueryUpgradedClientStateResponse is the response type for the
 * Query/UpgradedClientState RPC method.
 * @name QueryUpgradedClientStateResponseSDKType
 * @package ibc.core.client.v1
 * @see proto type: ibc.core.client.v1.QueryUpgradedClientStateResponse
 */
export interface QueryUpgradedClientStateResponseSDKType {
  upgraded_client_state?: AnySDKType;
}
/**
 * QueryUpgradedConsensusStateRequest is the request type for the
 * Query/UpgradedConsensusState RPC method
 * @name QueryUpgradedConsensusStateRequest
 * @package ibc.core.client.v1
 * @see proto type: ibc.core.client.v1.QueryUpgradedConsensusStateRequest
 */
export interface QueryUpgradedConsensusStateRequest {}
export interface QueryUpgradedConsensusStateRequestProtoMsg {
  typeUrl: "/ibc.core.client.v1.QueryUpgradedConsensusStateRequest";
  value: Uint8Array;
}
/**
 * QueryUpgradedConsensusStateRequest is the request type for the
 * Query/UpgradedConsensusState RPC method
 * @name QueryUpgradedConsensusStateRequestAmino
 * @package ibc.core.client.v1
 * @see proto type: ibc.core.client.v1.QueryUpgradedConsensusStateRequest
 */
export interface QueryUpgradedConsensusStateRequestAmino {}
/**
 * QueryUpgradedConsensusStateRequest is the request type for the
 * Query/UpgradedConsensusState RPC method
 * @name QueryUpgradedConsensusStateRequestSDKType
 * @package ibc.core.client.v1
 * @see proto type: ibc.core.client.v1.QueryUpgradedConsensusStateRequest
 */
export interface QueryUpgradedConsensusStateRequestSDKType {}
/**
 * QueryUpgradedConsensusStateResponse is the response type for the
 * Query/UpgradedConsensusState RPC method.
 * @name QueryUpgradedConsensusStateResponse
 * @package ibc.core.client.v1
 * @see proto type: ibc.core.client.v1.QueryUpgradedConsensusStateResponse
 */
export interface QueryUpgradedConsensusStateResponse {
  /**
   * Consensus state associated with the request identifier
   */
  upgradedConsensusState?: Any;
}
export interface QueryUpgradedConsensusStateResponseProtoMsg {
  typeUrl: "/ibc.core.client.v1.QueryUpgradedConsensusStateResponse";
  value: Uint8Array;
}
/**
 * QueryUpgradedConsensusStateResponse is the response type for the
 * Query/UpgradedConsensusState RPC method.
 * @name QueryUpgradedConsensusStateResponseAmino
 * @package ibc.core.client.v1
 * @see proto type: ibc.core.client.v1.QueryUpgradedConsensusStateResponse
 */
export interface QueryUpgradedConsensusStateResponseAmino {
  /**
   * Consensus state associated with the request identifier
   */
  upgraded_consensus_state?: AnyAmino;
}
/**
 * QueryUpgradedConsensusStateResponse is the response type for the
 * Query/UpgradedConsensusState RPC method.
 * @name QueryUpgradedConsensusStateResponseSDKType
 * @package ibc.core.client.v1
 * @see proto type: ibc.core.client.v1.QueryUpgradedConsensusStateResponse
 */
export interface QueryUpgradedConsensusStateResponseSDKType {
  upgraded_consensus_state?: AnySDKType;
}
function createBaseQueryClientStateRequest(): QueryClientStateRequest {
  return {
    clientId: ""
  };
}
/**
 * QueryClientStateRequest is the request type for the Query/ClientState RPC
 * method
 * @name QueryClientStateRequest
 * @package ibc.core.client.v1
 * @see proto type: ibc.core.client.v1.QueryClientStateRequest
 */
export const QueryClientStateRequest = {
  typeUrl: "/ibc.core.client.v1.QueryClientStateRequest",
  aminoType: "cosmos-sdk/QueryClientStateRequest",
  is(o: any): o is QueryClientStateRequest {
    return o && (o.$typeUrl === QueryClientStateRequest.typeUrl || typeof o.clientId === "string");
  },
  isSDK(o: any): o is QueryClientStateRequestSDKType {
    return o && (o.$typeUrl === QueryClientStateRequest.typeUrl || typeof o.client_id === "string");
  },
  isAmino(o: any): o is QueryClientStateRequestAmino {
    return o && (o.$typeUrl === QueryClientStateRequest.typeUrl || typeof o.client_id === "string");
  },
  encode(message: QueryClientStateRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.clientId !== "") {
      writer.uint32(10).string(message.clientId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryClientStateRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryClientStateRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.clientId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryClientStateRequest {
    const obj = createBaseQueryClientStateRequest();
    if (isSet(object.clientId)) obj.clientId = String(object.clientId);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryClientStateRequest>): QueryClientStateRequest {
    const message = createBaseQueryClientStateRequest();
    message.clientId = object.clientId ?? "";
    return message;
  },
  fromSDK(object: QueryClientStateRequestSDKType): QueryClientStateRequest {
    return {
      clientId: object?.client_id
    };
  },
  toSDK(message: QueryClientStateRequest): QueryClientStateRequestSDKType {
    const obj: any = {};
    obj.client_id = message.clientId;
    return obj;
  },
  fromAmino(object: QueryClientStateRequestAmino): QueryClientStateRequest {
    const message = createBaseQueryClientStateRequest();
    if (object.client_id !== undefined && object.client_id !== null) {
      message.clientId = object.client_id;
    }
    return message;
  },
  toAmino(message: QueryClientStateRequest, useInterfaces: boolean = true): QueryClientStateRequestAmino {
    const obj: any = {};
    obj.client_id = message.clientId === "" ? undefined : message.clientId;
    return obj;
  },
  fromProtoMsg(message: QueryClientStateRequestProtoMsg, useInterfaces: boolean = true): QueryClientStateRequest {
    return QueryClientStateRequest.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryClientStateRequest): Uint8Array {
    return QueryClientStateRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryClientStateRequest): QueryClientStateRequestProtoMsg {
    return {
      typeUrl: "/ibc.core.client.v1.QueryClientStateRequest",
      value: QueryClientStateRequest.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseQueryClientStateResponse(): QueryClientStateResponse {
  return {
    clientState: undefined,
    proof: new Uint8Array(),
    proofHeight: Height.fromPartial({})
  };
}
/**
 * QueryClientStateResponse is the response type for the Query/ClientState RPC
 * method. Besides the client state, it includes a proof and the height from
 * which the proof was retrieved.
 * @name QueryClientStateResponse
 * @package ibc.core.client.v1
 * @see proto type: ibc.core.client.v1.QueryClientStateResponse
 */
export const QueryClientStateResponse = {
  typeUrl: "/ibc.core.client.v1.QueryClientStateResponse",
  aminoType: "cosmos-sdk/QueryClientStateResponse",
  is(o: any): o is QueryClientStateResponse {
    return o && (o.$typeUrl === QueryClientStateResponse.typeUrl || (o.proof instanceof Uint8Array || typeof o.proof === "string") && Height.is(o.proofHeight));
  },
  isSDK(o: any): o is QueryClientStateResponseSDKType {
    return o && (o.$typeUrl === QueryClientStateResponse.typeUrl || (o.proof instanceof Uint8Array || typeof o.proof === "string") && Height.isSDK(o.proof_height));
  },
  isAmino(o: any): o is QueryClientStateResponseAmino {
    return o && (o.$typeUrl === QueryClientStateResponse.typeUrl || (o.proof instanceof Uint8Array || typeof o.proof === "string") && Height.isAmino(o.proof_height));
  },
  encode(message: QueryClientStateResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.clientState !== undefined) {
      Any.encode(message.clientState, writer.uint32(10).fork()).ldelim();
    }
    if (message.proof.length !== 0) {
      writer.uint32(18).bytes(message.proof);
    }
    if (message.proofHeight !== undefined) {
      Height.encode(message.proofHeight, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryClientStateResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryClientStateResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.clientState = Any.decode(reader, reader.uint32(), useInterfaces);
          break;
        case 2:
          message.proof = reader.bytes();
          break;
        case 3:
          message.proofHeight = Height.decode(reader, reader.uint32(), useInterfaces);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryClientStateResponse {
    const obj = createBaseQueryClientStateResponse();
    if (isSet(object.clientState)) obj.clientState = Any.fromJSON(object.clientState);
    if (isSet(object.proof)) obj.proof = bytesFromBase64(object.proof);
    if (isSet(object.proofHeight)) obj.proofHeight = Height.fromJSON(object.proofHeight);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryClientStateResponse>): QueryClientStateResponse {
    const message = createBaseQueryClientStateResponse();
    if (object.clientState !== undefined && object.clientState !== null) {
      message.clientState = Any.fromPartial(object.clientState);
    }
    message.proof = object.proof ?? new Uint8Array();
    if (object.proofHeight !== undefined && object.proofHeight !== null) {
      message.proofHeight = Height.fromPartial(object.proofHeight);
    }
    return message;
  },
  fromSDK(object: QueryClientStateResponseSDKType): QueryClientStateResponse {
    return {
      clientState: object.client_state ? Any.fromSDK(object.client_state) : undefined,
      proof: object?.proof,
      proofHeight: object.proof_height ? Height.fromSDK(object.proof_height) : undefined
    };
  },
  toSDK(message: QueryClientStateResponse): QueryClientStateResponseSDKType {
    const obj: any = {};
    message.clientState !== undefined && (obj.client_state = message.clientState ? Any.toSDK(message.clientState) : undefined);
    obj.proof = message.proof;
    message.proofHeight !== undefined && (obj.proof_height = message.proofHeight ? Height.toSDK(message.proofHeight) : undefined);
    return obj;
  },
  fromAmino(object: QueryClientStateResponseAmino): QueryClientStateResponse {
    const message = createBaseQueryClientStateResponse();
    if (object.client_state !== undefined && object.client_state !== null) {
      message.clientState = Any.fromAmino(object.client_state);
    }
    if (object.proof !== undefined && object.proof !== null) {
      message.proof = bytesFromBase64(object.proof);
    }
    if (object.proof_height !== undefined && object.proof_height !== null) {
      message.proofHeight = Height.fromAmino(object.proof_height);
    }
    return message;
  },
  toAmino(message: QueryClientStateResponse, useInterfaces: boolean = true): QueryClientStateResponseAmino {
    const obj: any = {};
    obj.client_state = message.clientState ? Any.toAmino(message.clientState, useInterfaces) : undefined;
    obj.proof = message.proof ? base64FromBytes(message.proof) : undefined;
    obj.proof_height = message.proofHeight ? Height.toAmino(message.proofHeight, useInterfaces) : {};
    return obj;
  },
  fromProtoMsg(message: QueryClientStateResponseProtoMsg, useInterfaces: boolean = true): QueryClientStateResponse {
    return QueryClientStateResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryClientStateResponse): Uint8Array {
    return QueryClientStateResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryClientStateResponse): QueryClientStateResponseProtoMsg {
    return {
      typeUrl: "/ibc.core.client.v1.QueryClientStateResponse",
      value: QueryClientStateResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(QueryClientStateResponse.typeUrl)) {
      return;
    }
    Height.registerTypeUrl();
  }
};
function createBaseQueryClientStatesRequest(): QueryClientStatesRequest {
  return {
    pagination: undefined
  };
}
/**
 * QueryClientStatesRequest is the request type for the Query/ClientStates RPC
 * method
 * @name QueryClientStatesRequest
 * @package ibc.core.client.v1
 * @see proto type: ibc.core.client.v1.QueryClientStatesRequest
 */
export const QueryClientStatesRequest = {
  typeUrl: "/ibc.core.client.v1.QueryClientStatesRequest",
  aminoType: "cosmos-sdk/QueryClientStatesRequest",
  is(o: any): o is QueryClientStatesRequest {
    return o && o.$typeUrl === QueryClientStatesRequest.typeUrl;
  },
  isSDK(o: any): o is QueryClientStatesRequestSDKType {
    return o && o.$typeUrl === QueryClientStatesRequest.typeUrl;
  },
  isAmino(o: any): o is QueryClientStatesRequestAmino {
    return o && o.$typeUrl === QueryClientStatesRequest.typeUrl;
  },
  encode(message: QueryClientStatesRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryClientStatesRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryClientStatesRequest();
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
  fromJSON(object: any): QueryClientStatesRequest {
    const obj = createBaseQueryClientStatesRequest();
    if (isSet(object.pagination)) obj.pagination = PageRequest.fromJSON(object.pagination);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryClientStatesRequest>): QueryClientStatesRequest {
    const message = createBaseQueryClientStatesRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    }
    return message;
  },
  fromSDK(object: QueryClientStatesRequestSDKType): QueryClientStatesRequest {
    return {
      pagination: object.pagination ? PageRequest.fromSDK(object.pagination) : undefined
    };
  },
  toSDK(message: QueryClientStatesRequest): QueryClientStatesRequestSDKType {
    const obj: any = {};
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toSDK(message.pagination) : undefined);
    return obj;
  },
  fromAmino(object: QueryClientStatesRequestAmino): QueryClientStatesRequest {
    const message = createBaseQueryClientStatesRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryClientStatesRequest, useInterfaces: boolean = true): QueryClientStatesRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination, useInterfaces) : undefined;
    return obj;
  },
  fromProtoMsg(message: QueryClientStatesRequestProtoMsg, useInterfaces: boolean = true): QueryClientStatesRequest {
    return QueryClientStatesRequest.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryClientStatesRequest): Uint8Array {
    return QueryClientStatesRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryClientStatesRequest): QueryClientStatesRequestProtoMsg {
    return {
      typeUrl: "/ibc.core.client.v1.QueryClientStatesRequest",
      value: QueryClientStatesRequest.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(QueryClientStatesRequest.typeUrl)) {
      return;
    }
    PageRequest.registerTypeUrl();
  }
};
function createBaseQueryClientStatesResponse(): QueryClientStatesResponse {
  return {
    clientStates: [],
    pagination: undefined
  };
}
/**
 * QueryClientStatesResponse is the response type for the Query/ClientStates RPC
 * method.
 * @name QueryClientStatesResponse
 * @package ibc.core.client.v1
 * @see proto type: ibc.core.client.v1.QueryClientStatesResponse
 */
export const QueryClientStatesResponse = {
  typeUrl: "/ibc.core.client.v1.QueryClientStatesResponse",
  aminoType: "cosmos-sdk/QueryClientStatesResponse",
  is(o: any): o is QueryClientStatesResponse {
    return o && (o.$typeUrl === QueryClientStatesResponse.typeUrl || Array.isArray(o.clientStates) && (!o.clientStates.length || IdentifiedClientState.is(o.clientStates[0])));
  },
  isSDK(o: any): o is QueryClientStatesResponseSDKType {
    return o && (o.$typeUrl === QueryClientStatesResponse.typeUrl || Array.isArray(o.client_states) && (!o.client_states.length || IdentifiedClientState.isSDK(o.client_states[0])));
  },
  isAmino(o: any): o is QueryClientStatesResponseAmino {
    return o && (o.$typeUrl === QueryClientStatesResponse.typeUrl || Array.isArray(o.client_states) && (!o.client_states.length || IdentifiedClientState.isAmino(o.client_states[0])));
  },
  encode(message: QueryClientStatesResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.clientStates) {
      IdentifiedClientState.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryClientStatesResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryClientStatesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.clientStates.push(IdentifiedClientState.decode(reader, reader.uint32(), useInterfaces));
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
  fromJSON(object: any): QueryClientStatesResponse {
    const obj = createBaseQueryClientStatesResponse();
    if (Array.isArray(object?.clientStates)) obj.clientStates = object.clientStates.map((e: any) => IdentifiedClientState.fromJSON(e));
    if (isSet(object.pagination)) obj.pagination = PageResponse.fromJSON(object.pagination);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryClientStatesResponse>): QueryClientStatesResponse {
    const message = createBaseQueryClientStatesResponse();
    message.clientStates = object.clientStates?.map(e => IdentifiedClientState.fromPartial(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    }
    return message;
  },
  fromSDK(object: QueryClientStatesResponseSDKType): QueryClientStatesResponse {
    return {
      clientStates: Array.isArray(object?.client_states) ? object.client_states.map((e: any) => IdentifiedClientState.fromSDK(e)) : [],
      pagination: object.pagination ? PageResponse.fromSDK(object.pagination) : undefined
    };
  },
  toSDK(message: QueryClientStatesResponse): QueryClientStatesResponseSDKType {
    const obj: any = {};
    if (message.clientStates) {
      obj.client_states = message.clientStates.map(e => e ? IdentifiedClientState.toSDK(e) : undefined);
    } else {
      obj.client_states = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toSDK(message.pagination) : undefined);
    return obj;
  },
  fromAmino(object: QueryClientStatesResponseAmino): QueryClientStatesResponse {
    const message = createBaseQueryClientStatesResponse();
    message.clientStates = object.client_states?.map(e => IdentifiedClientState.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryClientStatesResponse, useInterfaces: boolean = true): QueryClientStatesResponseAmino {
    const obj: any = {};
    if (message.clientStates) {
      obj.client_states = message.clientStates.map(e => e ? IdentifiedClientState.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.client_states = message.clientStates;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination, useInterfaces) : undefined;
    return obj;
  },
  fromProtoMsg(message: QueryClientStatesResponseProtoMsg, useInterfaces: boolean = true): QueryClientStatesResponse {
    return QueryClientStatesResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryClientStatesResponse): Uint8Array {
    return QueryClientStatesResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryClientStatesResponse): QueryClientStatesResponseProtoMsg {
    return {
      typeUrl: "/ibc.core.client.v1.QueryClientStatesResponse",
      value: QueryClientStatesResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(QueryClientStatesResponse.typeUrl)) {
      return;
    }
    IdentifiedClientState.registerTypeUrl();
    PageResponse.registerTypeUrl();
  }
};
function createBaseQueryConsensusStateRequest(): QueryConsensusStateRequest {
  return {
    clientId: "",
    revisionNumber: BigInt(0),
    revisionHeight: BigInt(0),
    latestHeight: false
  };
}
/**
 * QueryConsensusStateRequest is the request type for the Query/ConsensusState
 * RPC method. Besides the consensus state, it includes a proof and the height
 * from which the proof was retrieved.
 * @name QueryConsensusStateRequest
 * @package ibc.core.client.v1
 * @see proto type: ibc.core.client.v1.QueryConsensusStateRequest
 */
export const QueryConsensusStateRequest = {
  typeUrl: "/ibc.core.client.v1.QueryConsensusStateRequest",
  aminoType: "cosmos-sdk/QueryConsensusStateRequest",
  is(o: any): o is QueryConsensusStateRequest {
    return o && (o.$typeUrl === QueryConsensusStateRequest.typeUrl || typeof o.clientId === "string" && typeof o.revisionNumber === "bigint" && typeof o.revisionHeight === "bigint" && typeof o.latestHeight === "boolean");
  },
  isSDK(o: any): o is QueryConsensusStateRequestSDKType {
    return o && (o.$typeUrl === QueryConsensusStateRequest.typeUrl || typeof o.client_id === "string" && typeof o.revision_number === "bigint" && typeof o.revision_height === "bigint" && typeof o.latest_height === "boolean");
  },
  isAmino(o: any): o is QueryConsensusStateRequestAmino {
    return o && (o.$typeUrl === QueryConsensusStateRequest.typeUrl || typeof o.client_id === "string" && typeof o.revision_number === "bigint" && typeof o.revision_height === "bigint" && typeof o.latest_height === "boolean");
  },
  encode(message: QueryConsensusStateRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.clientId !== "") {
      writer.uint32(10).string(message.clientId);
    }
    if (message.revisionNumber !== BigInt(0)) {
      writer.uint32(16).uint64(message.revisionNumber);
    }
    if (message.revisionHeight !== BigInt(0)) {
      writer.uint32(24).uint64(message.revisionHeight);
    }
    if (message.latestHeight === true) {
      writer.uint32(32).bool(message.latestHeight);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryConsensusStateRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryConsensusStateRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.clientId = reader.string();
          break;
        case 2:
          message.revisionNumber = reader.uint64();
          break;
        case 3:
          message.revisionHeight = reader.uint64();
          break;
        case 4:
          message.latestHeight = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryConsensusStateRequest {
    const obj = createBaseQueryConsensusStateRequest();
    if (isSet(object.clientId)) obj.clientId = String(object.clientId);
    if (isSet(object.revisionNumber)) obj.revisionNumber = BigInt(object.revisionNumber.toString());
    if (isSet(object.revisionHeight)) obj.revisionHeight = BigInt(object.revisionHeight.toString());
    if (isSet(object.latestHeight)) obj.latestHeight = Boolean(object.latestHeight);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryConsensusStateRequest>): QueryConsensusStateRequest {
    const message = createBaseQueryConsensusStateRequest();
    message.clientId = object.clientId ?? "";
    if (object.revisionNumber !== undefined && object.revisionNumber !== null) {
      message.revisionNumber = BigInt(object.revisionNumber.toString());
    }
    if (object.revisionHeight !== undefined && object.revisionHeight !== null) {
      message.revisionHeight = BigInt(object.revisionHeight.toString());
    }
    message.latestHeight = object.latestHeight ?? false;
    return message;
  },
  fromSDK(object: QueryConsensusStateRequestSDKType): QueryConsensusStateRequest {
    return {
      clientId: object?.client_id,
      revisionNumber: object?.revision_number,
      revisionHeight: object?.revision_height,
      latestHeight: object?.latest_height
    };
  },
  toSDK(message: QueryConsensusStateRequest): QueryConsensusStateRequestSDKType {
    const obj: any = {};
    obj.client_id = message.clientId;
    obj.revision_number = message.revisionNumber;
    obj.revision_height = message.revisionHeight;
    obj.latest_height = message.latestHeight;
    return obj;
  },
  fromAmino(object: QueryConsensusStateRequestAmino): QueryConsensusStateRequest {
    const message = createBaseQueryConsensusStateRequest();
    if (object.client_id !== undefined && object.client_id !== null) {
      message.clientId = object.client_id;
    }
    if (object.revision_number !== undefined && object.revision_number !== null) {
      message.revisionNumber = BigInt(object.revision_number);
    }
    if (object.revision_height !== undefined && object.revision_height !== null) {
      message.revisionHeight = BigInt(object.revision_height);
    }
    if (object.latest_height !== undefined && object.latest_height !== null) {
      message.latestHeight = object.latest_height;
    }
    return message;
  },
  toAmino(message: QueryConsensusStateRequest, useInterfaces: boolean = true): QueryConsensusStateRequestAmino {
    const obj: any = {};
    obj.client_id = message.clientId === "" ? undefined : message.clientId;
    obj.revision_number = message.revisionNumber !== BigInt(0) ? message.revisionNumber?.toString() : undefined;
    obj.revision_height = message.revisionHeight !== BigInt(0) ? message.revisionHeight?.toString() : undefined;
    obj.latest_height = message.latestHeight === false ? undefined : message.latestHeight;
    return obj;
  },
  fromProtoMsg(message: QueryConsensusStateRequestProtoMsg, useInterfaces: boolean = true): QueryConsensusStateRequest {
    return QueryConsensusStateRequest.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryConsensusStateRequest): Uint8Array {
    return QueryConsensusStateRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryConsensusStateRequest): QueryConsensusStateRequestProtoMsg {
    return {
      typeUrl: "/ibc.core.client.v1.QueryConsensusStateRequest",
      value: QueryConsensusStateRequest.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseQueryConsensusStateResponse(): QueryConsensusStateResponse {
  return {
    consensusState: undefined,
    proof: new Uint8Array(),
    proofHeight: Height.fromPartial({})
  };
}
/**
 * QueryConsensusStateResponse is the response type for the Query/ConsensusState
 * RPC method
 * @name QueryConsensusStateResponse
 * @package ibc.core.client.v1
 * @see proto type: ibc.core.client.v1.QueryConsensusStateResponse
 */
export const QueryConsensusStateResponse = {
  typeUrl: "/ibc.core.client.v1.QueryConsensusStateResponse",
  aminoType: "cosmos-sdk/QueryConsensusStateResponse",
  is(o: any): o is QueryConsensusStateResponse {
    return o && (o.$typeUrl === QueryConsensusStateResponse.typeUrl || (o.proof instanceof Uint8Array || typeof o.proof === "string") && Height.is(o.proofHeight));
  },
  isSDK(o: any): o is QueryConsensusStateResponseSDKType {
    return o && (o.$typeUrl === QueryConsensusStateResponse.typeUrl || (o.proof instanceof Uint8Array || typeof o.proof === "string") && Height.isSDK(o.proof_height));
  },
  isAmino(o: any): o is QueryConsensusStateResponseAmino {
    return o && (o.$typeUrl === QueryConsensusStateResponse.typeUrl || (o.proof instanceof Uint8Array || typeof o.proof === "string") && Height.isAmino(o.proof_height));
  },
  encode(message: QueryConsensusStateResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.consensusState !== undefined) {
      Any.encode(message.consensusState, writer.uint32(10).fork()).ldelim();
    }
    if (message.proof.length !== 0) {
      writer.uint32(18).bytes(message.proof);
    }
    if (message.proofHeight !== undefined) {
      Height.encode(message.proofHeight, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryConsensusStateResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryConsensusStateResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.consensusState = Any.decode(reader, reader.uint32(), useInterfaces);
          break;
        case 2:
          message.proof = reader.bytes();
          break;
        case 3:
          message.proofHeight = Height.decode(reader, reader.uint32(), useInterfaces);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryConsensusStateResponse {
    const obj = createBaseQueryConsensusStateResponse();
    if (isSet(object.consensusState)) obj.consensusState = Any.fromJSON(object.consensusState);
    if (isSet(object.proof)) obj.proof = bytesFromBase64(object.proof);
    if (isSet(object.proofHeight)) obj.proofHeight = Height.fromJSON(object.proofHeight);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryConsensusStateResponse>): QueryConsensusStateResponse {
    const message = createBaseQueryConsensusStateResponse();
    if (object.consensusState !== undefined && object.consensusState !== null) {
      message.consensusState = Any.fromPartial(object.consensusState);
    }
    message.proof = object.proof ?? new Uint8Array();
    if (object.proofHeight !== undefined && object.proofHeight !== null) {
      message.proofHeight = Height.fromPartial(object.proofHeight);
    }
    return message;
  },
  fromSDK(object: QueryConsensusStateResponseSDKType): QueryConsensusStateResponse {
    return {
      consensusState: object.consensus_state ? Any.fromSDK(object.consensus_state) : undefined,
      proof: object?.proof,
      proofHeight: object.proof_height ? Height.fromSDK(object.proof_height) : undefined
    };
  },
  toSDK(message: QueryConsensusStateResponse): QueryConsensusStateResponseSDKType {
    const obj: any = {};
    message.consensusState !== undefined && (obj.consensus_state = message.consensusState ? Any.toSDK(message.consensusState) : undefined);
    obj.proof = message.proof;
    message.proofHeight !== undefined && (obj.proof_height = message.proofHeight ? Height.toSDK(message.proofHeight) : undefined);
    return obj;
  },
  fromAmino(object: QueryConsensusStateResponseAmino): QueryConsensusStateResponse {
    const message = createBaseQueryConsensusStateResponse();
    if (object.consensus_state !== undefined && object.consensus_state !== null) {
      message.consensusState = Any.fromAmino(object.consensus_state);
    }
    if (object.proof !== undefined && object.proof !== null) {
      message.proof = bytesFromBase64(object.proof);
    }
    if (object.proof_height !== undefined && object.proof_height !== null) {
      message.proofHeight = Height.fromAmino(object.proof_height);
    }
    return message;
  },
  toAmino(message: QueryConsensusStateResponse, useInterfaces: boolean = true): QueryConsensusStateResponseAmino {
    const obj: any = {};
    obj.consensus_state = message.consensusState ? Any.toAmino(message.consensusState, useInterfaces) : undefined;
    obj.proof = message.proof ? base64FromBytes(message.proof) : undefined;
    obj.proof_height = message.proofHeight ? Height.toAmino(message.proofHeight, useInterfaces) : {};
    return obj;
  },
  fromProtoMsg(message: QueryConsensusStateResponseProtoMsg, useInterfaces: boolean = true): QueryConsensusStateResponse {
    return QueryConsensusStateResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryConsensusStateResponse): Uint8Array {
    return QueryConsensusStateResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryConsensusStateResponse): QueryConsensusStateResponseProtoMsg {
    return {
      typeUrl: "/ibc.core.client.v1.QueryConsensusStateResponse",
      value: QueryConsensusStateResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(QueryConsensusStateResponse.typeUrl)) {
      return;
    }
    Height.registerTypeUrl();
  }
};
function createBaseQueryConsensusStatesRequest(): QueryConsensusStatesRequest {
  return {
    clientId: "",
    pagination: undefined
  };
}
/**
 * QueryConsensusStatesRequest is the request type for the Query/ConsensusStates
 * RPC method.
 * @name QueryConsensusStatesRequest
 * @package ibc.core.client.v1
 * @see proto type: ibc.core.client.v1.QueryConsensusStatesRequest
 */
export const QueryConsensusStatesRequest = {
  typeUrl: "/ibc.core.client.v1.QueryConsensusStatesRequest",
  aminoType: "cosmos-sdk/QueryConsensusStatesRequest",
  is(o: any): o is QueryConsensusStatesRequest {
    return o && (o.$typeUrl === QueryConsensusStatesRequest.typeUrl || typeof o.clientId === "string");
  },
  isSDK(o: any): o is QueryConsensusStatesRequestSDKType {
    return o && (o.$typeUrl === QueryConsensusStatesRequest.typeUrl || typeof o.client_id === "string");
  },
  isAmino(o: any): o is QueryConsensusStatesRequestAmino {
    return o && (o.$typeUrl === QueryConsensusStatesRequest.typeUrl || typeof o.client_id === "string");
  },
  encode(message: QueryConsensusStatesRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.clientId !== "") {
      writer.uint32(10).string(message.clientId);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryConsensusStatesRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryConsensusStatesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.clientId = reader.string();
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
  fromJSON(object: any): QueryConsensusStatesRequest {
    const obj = createBaseQueryConsensusStatesRequest();
    if (isSet(object.clientId)) obj.clientId = String(object.clientId);
    if (isSet(object.pagination)) obj.pagination = PageRequest.fromJSON(object.pagination);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryConsensusStatesRequest>): QueryConsensusStatesRequest {
    const message = createBaseQueryConsensusStatesRequest();
    message.clientId = object.clientId ?? "";
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    }
    return message;
  },
  fromSDK(object: QueryConsensusStatesRequestSDKType): QueryConsensusStatesRequest {
    return {
      clientId: object?.client_id,
      pagination: object.pagination ? PageRequest.fromSDK(object.pagination) : undefined
    };
  },
  toSDK(message: QueryConsensusStatesRequest): QueryConsensusStatesRequestSDKType {
    const obj: any = {};
    obj.client_id = message.clientId;
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toSDK(message.pagination) : undefined);
    return obj;
  },
  fromAmino(object: QueryConsensusStatesRequestAmino): QueryConsensusStatesRequest {
    const message = createBaseQueryConsensusStatesRequest();
    if (object.client_id !== undefined && object.client_id !== null) {
      message.clientId = object.client_id;
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryConsensusStatesRequest, useInterfaces: boolean = true): QueryConsensusStatesRequestAmino {
    const obj: any = {};
    obj.client_id = message.clientId === "" ? undefined : message.clientId;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination, useInterfaces) : undefined;
    return obj;
  },
  fromProtoMsg(message: QueryConsensusStatesRequestProtoMsg, useInterfaces: boolean = true): QueryConsensusStatesRequest {
    return QueryConsensusStatesRequest.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryConsensusStatesRequest): Uint8Array {
    return QueryConsensusStatesRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryConsensusStatesRequest): QueryConsensusStatesRequestProtoMsg {
    return {
      typeUrl: "/ibc.core.client.v1.QueryConsensusStatesRequest",
      value: QueryConsensusStatesRequest.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(QueryConsensusStatesRequest.typeUrl)) {
      return;
    }
    PageRequest.registerTypeUrl();
  }
};
function createBaseQueryConsensusStatesResponse(): QueryConsensusStatesResponse {
  return {
    consensusStates: [],
    pagination: undefined
  };
}
/**
 * QueryConsensusStatesResponse is the response type for the
 * Query/ConsensusStates RPC method
 * @name QueryConsensusStatesResponse
 * @package ibc.core.client.v1
 * @see proto type: ibc.core.client.v1.QueryConsensusStatesResponse
 */
export const QueryConsensusStatesResponse = {
  typeUrl: "/ibc.core.client.v1.QueryConsensusStatesResponse",
  aminoType: "cosmos-sdk/QueryConsensusStatesResponse",
  is(o: any): o is QueryConsensusStatesResponse {
    return o && (o.$typeUrl === QueryConsensusStatesResponse.typeUrl || Array.isArray(o.consensusStates) && (!o.consensusStates.length || ConsensusStateWithHeight.is(o.consensusStates[0])));
  },
  isSDK(o: any): o is QueryConsensusStatesResponseSDKType {
    return o && (o.$typeUrl === QueryConsensusStatesResponse.typeUrl || Array.isArray(o.consensus_states) && (!o.consensus_states.length || ConsensusStateWithHeight.isSDK(o.consensus_states[0])));
  },
  isAmino(o: any): o is QueryConsensusStatesResponseAmino {
    return o && (o.$typeUrl === QueryConsensusStatesResponse.typeUrl || Array.isArray(o.consensus_states) && (!o.consensus_states.length || ConsensusStateWithHeight.isAmino(o.consensus_states[0])));
  },
  encode(message: QueryConsensusStatesResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.consensusStates) {
      ConsensusStateWithHeight.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryConsensusStatesResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryConsensusStatesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.consensusStates.push(ConsensusStateWithHeight.decode(reader, reader.uint32(), useInterfaces));
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
  fromJSON(object: any): QueryConsensusStatesResponse {
    const obj = createBaseQueryConsensusStatesResponse();
    if (Array.isArray(object?.consensusStates)) obj.consensusStates = object.consensusStates.map((e: any) => ConsensusStateWithHeight.fromJSON(e));
    if (isSet(object.pagination)) obj.pagination = PageResponse.fromJSON(object.pagination);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryConsensusStatesResponse>): QueryConsensusStatesResponse {
    const message = createBaseQueryConsensusStatesResponse();
    message.consensusStates = object.consensusStates?.map(e => ConsensusStateWithHeight.fromPartial(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    }
    return message;
  },
  fromSDK(object: QueryConsensusStatesResponseSDKType): QueryConsensusStatesResponse {
    return {
      consensusStates: Array.isArray(object?.consensus_states) ? object.consensus_states.map((e: any) => ConsensusStateWithHeight.fromSDK(e)) : [],
      pagination: object.pagination ? PageResponse.fromSDK(object.pagination) : undefined
    };
  },
  toSDK(message: QueryConsensusStatesResponse): QueryConsensusStatesResponseSDKType {
    const obj: any = {};
    if (message.consensusStates) {
      obj.consensus_states = message.consensusStates.map(e => e ? ConsensusStateWithHeight.toSDK(e) : undefined);
    } else {
      obj.consensus_states = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toSDK(message.pagination) : undefined);
    return obj;
  },
  fromAmino(object: QueryConsensusStatesResponseAmino): QueryConsensusStatesResponse {
    const message = createBaseQueryConsensusStatesResponse();
    message.consensusStates = object.consensus_states?.map(e => ConsensusStateWithHeight.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryConsensusStatesResponse, useInterfaces: boolean = true): QueryConsensusStatesResponseAmino {
    const obj: any = {};
    if (message.consensusStates) {
      obj.consensus_states = message.consensusStates.map(e => e ? ConsensusStateWithHeight.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.consensus_states = message.consensusStates;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination, useInterfaces) : undefined;
    return obj;
  },
  fromProtoMsg(message: QueryConsensusStatesResponseProtoMsg, useInterfaces: boolean = true): QueryConsensusStatesResponse {
    return QueryConsensusStatesResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryConsensusStatesResponse): Uint8Array {
    return QueryConsensusStatesResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryConsensusStatesResponse): QueryConsensusStatesResponseProtoMsg {
    return {
      typeUrl: "/ibc.core.client.v1.QueryConsensusStatesResponse",
      value: QueryConsensusStatesResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(QueryConsensusStatesResponse.typeUrl)) {
      return;
    }
    ConsensusStateWithHeight.registerTypeUrl();
    PageResponse.registerTypeUrl();
  }
};
function createBaseQueryClientStatusRequest(): QueryClientStatusRequest {
  return {
    clientId: ""
  };
}
/**
 * QueryClientStatusRequest is the request type for the Query/ClientStatus RPC
 * method
 * @name QueryClientStatusRequest
 * @package ibc.core.client.v1
 * @see proto type: ibc.core.client.v1.QueryClientStatusRequest
 */
export const QueryClientStatusRequest = {
  typeUrl: "/ibc.core.client.v1.QueryClientStatusRequest",
  aminoType: "cosmos-sdk/QueryClientStatusRequest",
  is(o: any): o is QueryClientStatusRequest {
    return o && (o.$typeUrl === QueryClientStatusRequest.typeUrl || typeof o.clientId === "string");
  },
  isSDK(o: any): o is QueryClientStatusRequestSDKType {
    return o && (o.$typeUrl === QueryClientStatusRequest.typeUrl || typeof o.client_id === "string");
  },
  isAmino(o: any): o is QueryClientStatusRequestAmino {
    return o && (o.$typeUrl === QueryClientStatusRequest.typeUrl || typeof o.client_id === "string");
  },
  encode(message: QueryClientStatusRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.clientId !== "") {
      writer.uint32(10).string(message.clientId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryClientStatusRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryClientStatusRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.clientId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryClientStatusRequest {
    const obj = createBaseQueryClientStatusRequest();
    if (isSet(object.clientId)) obj.clientId = String(object.clientId);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryClientStatusRequest>): QueryClientStatusRequest {
    const message = createBaseQueryClientStatusRequest();
    message.clientId = object.clientId ?? "";
    return message;
  },
  fromSDK(object: QueryClientStatusRequestSDKType): QueryClientStatusRequest {
    return {
      clientId: object?.client_id
    };
  },
  toSDK(message: QueryClientStatusRequest): QueryClientStatusRequestSDKType {
    const obj: any = {};
    obj.client_id = message.clientId;
    return obj;
  },
  fromAmino(object: QueryClientStatusRequestAmino): QueryClientStatusRequest {
    const message = createBaseQueryClientStatusRequest();
    if (object.client_id !== undefined && object.client_id !== null) {
      message.clientId = object.client_id;
    }
    return message;
  },
  toAmino(message: QueryClientStatusRequest, useInterfaces: boolean = true): QueryClientStatusRequestAmino {
    const obj: any = {};
    obj.client_id = message.clientId === "" ? undefined : message.clientId;
    return obj;
  },
  fromProtoMsg(message: QueryClientStatusRequestProtoMsg, useInterfaces: boolean = true): QueryClientStatusRequest {
    return QueryClientStatusRequest.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryClientStatusRequest): Uint8Array {
    return QueryClientStatusRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryClientStatusRequest): QueryClientStatusRequestProtoMsg {
    return {
      typeUrl: "/ibc.core.client.v1.QueryClientStatusRequest",
      value: QueryClientStatusRequest.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseQueryClientStatusResponse(): QueryClientStatusResponse {
  return {
    status: ""
  };
}
/**
 * QueryClientStatusResponse is the response type for the Query/ClientStatus RPC
 * method. It returns the current status of the IBC client.
 * @name QueryClientStatusResponse
 * @package ibc.core.client.v1
 * @see proto type: ibc.core.client.v1.QueryClientStatusResponse
 */
export const QueryClientStatusResponse = {
  typeUrl: "/ibc.core.client.v1.QueryClientStatusResponse",
  aminoType: "cosmos-sdk/QueryClientStatusResponse",
  is(o: any): o is QueryClientStatusResponse {
    return o && (o.$typeUrl === QueryClientStatusResponse.typeUrl || typeof o.status === "string");
  },
  isSDK(o: any): o is QueryClientStatusResponseSDKType {
    return o && (o.$typeUrl === QueryClientStatusResponse.typeUrl || typeof o.status === "string");
  },
  isAmino(o: any): o is QueryClientStatusResponseAmino {
    return o && (o.$typeUrl === QueryClientStatusResponse.typeUrl || typeof o.status === "string");
  },
  encode(message: QueryClientStatusResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.status !== "") {
      writer.uint32(10).string(message.status);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryClientStatusResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryClientStatusResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.status = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryClientStatusResponse {
    const obj = createBaseQueryClientStatusResponse();
    if (isSet(object.status)) obj.status = String(object.status);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryClientStatusResponse>): QueryClientStatusResponse {
    const message = createBaseQueryClientStatusResponse();
    message.status = object.status ?? "";
    return message;
  },
  fromSDK(object: QueryClientStatusResponseSDKType): QueryClientStatusResponse {
    return {
      status: object?.status
    };
  },
  toSDK(message: QueryClientStatusResponse): QueryClientStatusResponseSDKType {
    const obj: any = {};
    obj.status = message.status;
    return obj;
  },
  fromAmino(object: QueryClientStatusResponseAmino): QueryClientStatusResponse {
    const message = createBaseQueryClientStatusResponse();
    if (object.status !== undefined && object.status !== null) {
      message.status = object.status;
    }
    return message;
  },
  toAmino(message: QueryClientStatusResponse, useInterfaces: boolean = true): QueryClientStatusResponseAmino {
    const obj: any = {};
    obj.status = message.status === "" ? undefined : message.status;
    return obj;
  },
  fromProtoMsg(message: QueryClientStatusResponseProtoMsg, useInterfaces: boolean = true): QueryClientStatusResponse {
    return QueryClientStatusResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryClientStatusResponse): Uint8Array {
    return QueryClientStatusResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryClientStatusResponse): QueryClientStatusResponseProtoMsg {
    return {
      typeUrl: "/ibc.core.client.v1.QueryClientStatusResponse",
      value: QueryClientStatusResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseQueryClientParamsRequest(): QueryClientParamsRequest {
  return {};
}
/**
 * QueryClientParamsRequest is the request type for the Query/ClientParams RPC
 * method.
 * @name QueryClientParamsRequest
 * @package ibc.core.client.v1
 * @see proto type: ibc.core.client.v1.QueryClientParamsRequest
 */
export const QueryClientParamsRequest = {
  typeUrl: "/ibc.core.client.v1.QueryClientParamsRequest",
  aminoType: "cosmos-sdk/QueryClientParamsRequest",
  is(o: any): o is QueryClientParamsRequest {
    return o && o.$typeUrl === QueryClientParamsRequest.typeUrl;
  },
  isSDK(o: any): o is QueryClientParamsRequestSDKType {
    return o && o.$typeUrl === QueryClientParamsRequest.typeUrl;
  },
  isAmino(o: any): o is QueryClientParamsRequestAmino {
    return o && o.$typeUrl === QueryClientParamsRequest.typeUrl;
  },
  encode(_: QueryClientParamsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryClientParamsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryClientParamsRequest();
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
  fromJSON(_: any): QueryClientParamsRequest {
    const obj = createBaseQueryClientParamsRequest();
    return obj;
  },
  fromPartial(_: DeepPartial<QueryClientParamsRequest>): QueryClientParamsRequest {
    const message = createBaseQueryClientParamsRequest();
    return message;
  },
  fromSDK(_: QueryClientParamsRequestSDKType): QueryClientParamsRequest {
    return {};
  },
  toSDK(_: QueryClientParamsRequest): QueryClientParamsRequestSDKType {
    const obj: any = {};
    return obj;
  },
  fromAmino(_: QueryClientParamsRequestAmino): QueryClientParamsRequest {
    const message = createBaseQueryClientParamsRequest();
    return message;
  },
  toAmino(_: QueryClientParamsRequest, useInterfaces: boolean = true): QueryClientParamsRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromProtoMsg(message: QueryClientParamsRequestProtoMsg, useInterfaces: boolean = true): QueryClientParamsRequest {
    return QueryClientParamsRequest.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryClientParamsRequest): Uint8Array {
    return QueryClientParamsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryClientParamsRequest): QueryClientParamsRequestProtoMsg {
    return {
      typeUrl: "/ibc.core.client.v1.QueryClientParamsRequest",
      value: QueryClientParamsRequest.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseQueryClientParamsResponse(): QueryClientParamsResponse {
  return {
    params: undefined
  };
}
/**
 * QueryClientParamsResponse is the response type for the Query/ClientParams RPC
 * method.
 * @name QueryClientParamsResponse
 * @package ibc.core.client.v1
 * @see proto type: ibc.core.client.v1.QueryClientParamsResponse
 */
export const QueryClientParamsResponse = {
  typeUrl: "/ibc.core.client.v1.QueryClientParamsResponse",
  aminoType: "cosmos-sdk/QueryClientParamsResponse",
  is(o: any): o is QueryClientParamsResponse {
    return o && o.$typeUrl === QueryClientParamsResponse.typeUrl;
  },
  isSDK(o: any): o is QueryClientParamsResponseSDKType {
    return o && o.$typeUrl === QueryClientParamsResponse.typeUrl;
  },
  isAmino(o: any): o is QueryClientParamsResponseAmino {
    return o && o.$typeUrl === QueryClientParamsResponse.typeUrl;
  },
  encode(message: QueryClientParamsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryClientParamsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryClientParamsResponse();
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
  fromJSON(object: any): QueryClientParamsResponse {
    const obj = createBaseQueryClientParamsResponse();
    if (isSet(object.params)) obj.params = Params.fromJSON(object.params);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryClientParamsResponse>): QueryClientParamsResponse {
    const message = createBaseQueryClientParamsResponse();
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromPartial(object.params);
    }
    return message;
  },
  fromSDK(object: QueryClientParamsResponseSDKType): QueryClientParamsResponse {
    return {
      params: object.params ? Params.fromSDK(object.params) : undefined
    };
  },
  toSDK(message: QueryClientParamsResponse): QueryClientParamsResponseSDKType {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toSDK(message.params) : undefined);
    return obj;
  },
  fromAmino(object: QueryClientParamsResponseAmino): QueryClientParamsResponse {
    const message = createBaseQueryClientParamsResponse();
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    return message;
  },
  toAmino(message: QueryClientParamsResponse, useInterfaces: boolean = true): QueryClientParamsResponseAmino {
    const obj: any = {};
    obj.params = message.params ? Params.toAmino(message.params, useInterfaces) : undefined;
    return obj;
  },
  fromProtoMsg(message: QueryClientParamsResponseProtoMsg, useInterfaces: boolean = true): QueryClientParamsResponse {
    return QueryClientParamsResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryClientParamsResponse): Uint8Array {
    return QueryClientParamsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryClientParamsResponse): QueryClientParamsResponseProtoMsg {
    return {
      typeUrl: "/ibc.core.client.v1.QueryClientParamsResponse",
      value: QueryClientParamsResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(QueryClientParamsResponse.typeUrl)) {
      return;
    }
    Params.registerTypeUrl();
  }
};
function createBaseQueryUpgradedClientStateRequest(): QueryUpgradedClientStateRequest {
  return {};
}
/**
 * QueryUpgradedClientStateRequest is the request type for the
 * Query/UpgradedClientState RPC method
 * @name QueryUpgradedClientStateRequest
 * @package ibc.core.client.v1
 * @see proto type: ibc.core.client.v1.QueryUpgradedClientStateRequest
 */
export const QueryUpgradedClientStateRequest = {
  typeUrl: "/ibc.core.client.v1.QueryUpgradedClientStateRequest",
  aminoType: "cosmos-sdk/QueryUpgradedClientStateRequest",
  is(o: any): o is QueryUpgradedClientStateRequest {
    return o && o.$typeUrl === QueryUpgradedClientStateRequest.typeUrl;
  },
  isSDK(o: any): o is QueryUpgradedClientStateRequestSDKType {
    return o && o.$typeUrl === QueryUpgradedClientStateRequest.typeUrl;
  },
  isAmino(o: any): o is QueryUpgradedClientStateRequestAmino {
    return o && o.$typeUrl === QueryUpgradedClientStateRequest.typeUrl;
  },
  encode(_: QueryUpgradedClientStateRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryUpgradedClientStateRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryUpgradedClientStateRequest();
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
  fromJSON(_: any): QueryUpgradedClientStateRequest {
    const obj = createBaseQueryUpgradedClientStateRequest();
    return obj;
  },
  fromPartial(_: DeepPartial<QueryUpgradedClientStateRequest>): QueryUpgradedClientStateRequest {
    const message = createBaseQueryUpgradedClientStateRequest();
    return message;
  },
  fromSDK(_: QueryUpgradedClientStateRequestSDKType): QueryUpgradedClientStateRequest {
    return {};
  },
  toSDK(_: QueryUpgradedClientStateRequest): QueryUpgradedClientStateRequestSDKType {
    const obj: any = {};
    return obj;
  },
  fromAmino(_: QueryUpgradedClientStateRequestAmino): QueryUpgradedClientStateRequest {
    const message = createBaseQueryUpgradedClientStateRequest();
    return message;
  },
  toAmino(_: QueryUpgradedClientStateRequest, useInterfaces: boolean = true): QueryUpgradedClientStateRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromProtoMsg(message: QueryUpgradedClientStateRequestProtoMsg, useInterfaces: boolean = true): QueryUpgradedClientStateRequest {
    return QueryUpgradedClientStateRequest.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryUpgradedClientStateRequest): Uint8Array {
    return QueryUpgradedClientStateRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryUpgradedClientStateRequest): QueryUpgradedClientStateRequestProtoMsg {
    return {
      typeUrl: "/ibc.core.client.v1.QueryUpgradedClientStateRequest",
      value: QueryUpgradedClientStateRequest.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseQueryUpgradedClientStateResponse(): QueryUpgradedClientStateResponse {
  return {
    upgradedClientState: undefined
  };
}
/**
 * QueryUpgradedClientStateResponse is the response type for the
 * Query/UpgradedClientState RPC method.
 * @name QueryUpgradedClientStateResponse
 * @package ibc.core.client.v1
 * @see proto type: ibc.core.client.v1.QueryUpgradedClientStateResponse
 */
export const QueryUpgradedClientStateResponse = {
  typeUrl: "/ibc.core.client.v1.QueryUpgradedClientStateResponse",
  aminoType: "cosmos-sdk/QueryUpgradedClientStateResponse",
  is(o: any): o is QueryUpgradedClientStateResponse {
    return o && o.$typeUrl === QueryUpgradedClientStateResponse.typeUrl;
  },
  isSDK(o: any): o is QueryUpgradedClientStateResponseSDKType {
    return o && o.$typeUrl === QueryUpgradedClientStateResponse.typeUrl;
  },
  isAmino(o: any): o is QueryUpgradedClientStateResponseAmino {
    return o && o.$typeUrl === QueryUpgradedClientStateResponse.typeUrl;
  },
  encode(message: QueryUpgradedClientStateResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.upgradedClientState !== undefined) {
      Any.encode(message.upgradedClientState, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryUpgradedClientStateResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryUpgradedClientStateResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.upgradedClientState = Any.decode(reader, reader.uint32(), useInterfaces);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryUpgradedClientStateResponse {
    const obj = createBaseQueryUpgradedClientStateResponse();
    if (isSet(object.upgradedClientState)) obj.upgradedClientState = Any.fromJSON(object.upgradedClientState);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryUpgradedClientStateResponse>): QueryUpgradedClientStateResponse {
    const message = createBaseQueryUpgradedClientStateResponse();
    if (object.upgradedClientState !== undefined && object.upgradedClientState !== null) {
      message.upgradedClientState = Any.fromPartial(object.upgradedClientState);
    }
    return message;
  },
  fromSDK(object: QueryUpgradedClientStateResponseSDKType): QueryUpgradedClientStateResponse {
    return {
      upgradedClientState: object.upgraded_client_state ? Any.fromSDK(object.upgraded_client_state) : undefined
    };
  },
  toSDK(message: QueryUpgradedClientStateResponse): QueryUpgradedClientStateResponseSDKType {
    const obj: any = {};
    message.upgradedClientState !== undefined && (obj.upgraded_client_state = message.upgradedClientState ? Any.toSDK(message.upgradedClientState) : undefined);
    return obj;
  },
  fromAmino(object: QueryUpgradedClientStateResponseAmino): QueryUpgradedClientStateResponse {
    const message = createBaseQueryUpgradedClientStateResponse();
    if (object.upgraded_client_state !== undefined && object.upgraded_client_state !== null) {
      message.upgradedClientState = Any.fromAmino(object.upgraded_client_state);
    }
    return message;
  },
  toAmino(message: QueryUpgradedClientStateResponse, useInterfaces: boolean = true): QueryUpgradedClientStateResponseAmino {
    const obj: any = {};
    obj.upgraded_client_state = message.upgradedClientState ? Any.toAmino(message.upgradedClientState, useInterfaces) : undefined;
    return obj;
  },
  fromProtoMsg(message: QueryUpgradedClientStateResponseProtoMsg, useInterfaces: boolean = true): QueryUpgradedClientStateResponse {
    return QueryUpgradedClientStateResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryUpgradedClientStateResponse): Uint8Array {
    return QueryUpgradedClientStateResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryUpgradedClientStateResponse): QueryUpgradedClientStateResponseProtoMsg {
    return {
      typeUrl: "/ibc.core.client.v1.QueryUpgradedClientStateResponse",
      value: QueryUpgradedClientStateResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseQueryUpgradedConsensusStateRequest(): QueryUpgradedConsensusStateRequest {
  return {};
}
/**
 * QueryUpgradedConsensusStateRequest is the request type for the
 * Query/UpgradedConsensusState RPC method
 * @name QueryUpgradedConsensusStateRequest
 * @package ibc.core.client.v1
 * @see proto type: ibc.core.client.v1.QueryUpgradedConsensusStateRequest
 */
export const QueryUpgradedConsensusStateRequest = {
  typeUrl: "/ibc.core.client.v1.QueryUpgradedConsensusStateRequest",
  aminoType: "cosmos-sdk/QueryUpgradedConsensusStateRequest",
  is(o: any): o is QueryUpgradedConsensusStateRequest {
    return o && o.$typeUrl === QueryUpgradedConsensusStateRequest.typeUrl;
  },
  isSDK(o: any): o is QueryUpgradedConsensusStateRequestSDKType {
    return o && o.$typeUrl === QueryUpgradedConsensusStateRequest.typeUrl;
  },
  isAmino(o: any): o is QueryUpgradedConsensusStateRequestAmino {
    return o && o.$typeUrl === QueryUpgradedConsensusStateRequest.typeUrl;
  },
  encode(_: QueryUpgradedConsensusStateRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryUpgradedConsensusStateRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryUpgradedConsensusStateRequest();
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
  fromJSON(_: any): QueryUpgradedConsensusStateRequest {
    const obj = createBaseQueryUpgradedConsensusStateRequest();
    return obj;
  },
  fromPartial(_: DeepPartial<QueryUpgradedConsensusStateRequest>): QueryUpgradedConsensusStateRequest {
    const message = createBaseQueryUpgradedConsensusStateRequest();
    return message;
  },
  fromSDK(_: QueryUpgradedConsensusStateRequestSDKType): QueryUpgradedConsensusStateRequest {
    return {};
  },
  toSDK(_: QueryUpgradedConsensusStateRequest): QueryUpgradedConsensusStateRequestSDKType {
    const obj: any = {};
    return obj;
  },
  fromAmino(_: QueryUpgradedConsensusStateRequestAmino): QueryUpgradedConsensusStateRequest {
    const message = createBaseQueryUpgradedConsensusStateRequest();
    return message;
  },
  toAmino(_: QueryUpgradedConsensusStateRequest, useInterfaces: boolean = true): QueryUpgradedConsensusStateRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromProtoMsg(message: QueryUpgradedConsensusStateRequestProtoMsg, useInterfaces: boolean = true): QueryUpgradedConsensusStateRequest {
    return QueryUpgradedConsensusStateRequest.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryUpgradedConsensusStateRequest): Uint8Array {
    return QueryUpgradedConsensusStateRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryUpgradedConsensusStateRequest): QueryUpgradedConsensusStateRequestProtoMsg {
    return {
      typeUrl: "/ibc.core.client.v1.QueryUpgradedConsensusStateRequest",
      value: QueryUpgradedConsensusStateRequest.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseQueryUpgradedConsensusStateResponse(): QueryUpgradedConsensusStateResponse {
  return {
    upgradedConsensusState: undefined
  };
}
/**
 * QueryUpgradedConsensusStateResponse is the response type for the
 * Query/UpgradedConsensusState RPC method.
 * @name QueryUpgradedConsensusStateResponse
 * @package ibc.core.client.v1
 * @see proto type: ibc.core.client.v1.QueryUpgradedConsensusStateResponse
 */
export const QueryUpgradedConsensusStateResponse = {
  typeUrl: "/ibc.core.client.v1.QueryUpgradedConsensusStateResponse",
  aminoType: "cosmos-sdk/QueryUpgradedConsensusStateResponse",
  is(o: any): o is QueryUpgradedConsensusStateResponse {
    return o && o.$typeUrl === QueryUpgradedConsensusStateResponse.typeUrl;
  },
  isSDK(o: any): o is QueryUpgradedConsensusStateResponseSDKType {
    return o && o.$typeUrl === QueryUpgradedConsensusStateResponse.typeUrl;
  },
  isAmino(o: any): o is QueryUpgradedConsensusStateResponseAmino {
    return o && o.$typeUrl === QueryUpgradedConsensusStateResponse.typeUrl;
  },
  encode(message: QueryUpgradedConsensusStateResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.upgradedConsensusState !== undefined) {
      Any.encode(message.upgradedConsensusState, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryUpgradedConsensusStateResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryUpgradedConsensusStateResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.upgradedConsensusState = Any.decode(reader, reader.uint32(), useInterfaces);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryUpgradedConsensusStateResponse {
    const obj = createBaseQueryUpgradedConsensusStateResponse();
    if (isSet(object.upgradedConsensusState)) obj.upgradedConsensusState = Any.fromJSON(object.upgradedConsensusState);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryUpgradedConsensusStateResponse>): QueryUpgradedConsensusStateResponse {
    const message = createBaseQueryUpgradedConsensusStateResponse();
    if (object.upgradedConsensusState !== undefined && object.upgradedConsensusState !== null) {
      message.upgradedConsensusState = Any.fromPartial(object.upgradedConsensusState);
    }
    return message;
  },
  fromSDK(object: QueryUpgradedConsensusStateResponseSDKType): QueryUpgradedConsensusStateResponse {
    return {
      upgradedConsensusState: object.upgraded_consensus_state ? Any.fromSDK(object.upgraded_consensus_state) : undefined
    };
  },
  toSDK(message: QueryUpgradedConsensusStateResponse): QueryUpgradedConsensusStateResponseSDKType {
    const obj: any = {};
    message.upgradedConsensusState !== undefined && (obj.upgraded_consensus_state = message.upgradedConsensusState ? Any.toSDK(message.upgradedConsensusState) : undefined);
    return obj;
  },
  fromAmino(object: QueryUpgradedConsensusStateResponseAmino): QueryUpgradedConsensusStateResponse {
    const message = createBaseQueryUpgradedConsensusStateResponse();
    if (object.upgraded_consensus_state !== undefined && object.upgraded_consensus_state !== null) {
      message.upgradedConsensusState = Any.fromAmino(object.upgraded_consensus_state);
    }
    return message;
  },
  toAmino(message: QueryUpgradedConsensusStateResponse, useInterfaces: boolean = true): QueryUpgradedConsensusStateResponseAmino {
    const obj: any = {};
    obj.upgraded_consensus_state = message.upgradedConsensusState ? Any.toAmino(message.upgradedConsensusState, useInterfaces) : undefined;
    return obj;
  },
  fromProtoMsg(message: QueryUpgradedConsensusStateResponseProtoMsg, useInterfaces: boolean = true): QueryUpgradedConsensusStateResponse {
    return QueryUpgradedConsensusStateResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryUpgradedConsensusStateResponse): Uint8Array {
    return QueryUpgradedConsensusStateResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryUpgradedConsensusStateResponse): QueryUpgradedConsensusStateResponseProtoMsg {
    return {
      typeUrl: "/ibc.core.client.v1.QueryUpgradedConsensusStateResponse",
      value: QueryUpgradedConsensusStateResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};