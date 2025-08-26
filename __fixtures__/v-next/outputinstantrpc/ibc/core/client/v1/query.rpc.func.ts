import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../../../cosmos/base/query/v1beta1/pagination";
import { Any, AnySDKType } from "../../../../google/protobuf/any";
import { Height, HeightSDKType, IdentifiedClientState, IdentifiedClientStateSDKType, ConsensusStateWithHeight, ConsensusStateWithHeightSDKType, Params, ParamsSDKType } from "./client";
import { EndpointOrRpc, buildQuery } from "../../../../helper-func-types";
import { QueryClientStateRequest, QueryClientStateRequestSDKType, QueryClientStateResponse, QueryClientStateResponseSDKType, QueryClientStatesRequest, QueryClientStatesRequestSDKType, QueryClientStatesResponse, QueryClientStatesResponseSDKType, QueryConsensusStateRequest, QueryConsensusStateRequestSDKType, QueryConsensusStateResponse, QueryConsensusStateResponseSDKType, QueryConsensusStatesRequest, QueryConsensusStatesRequestSDKType, QueryConsensusStatesResponse, QueryConsensusStatesResponseSDKType, QueryClientStatusRequest, QueryClientStatusRequestSDKType, QueryClientStatusResponse, QueryClientStatusResponseSDKType, QueryClientParamsRequest, QueryClientParamsRequestSDKType, QueryClientParamsResponse, QueryClientParamsResponseSDKType, QueryUpgradedClientStateRequest, QueryUpgradedClientStateRequestSDKType, QueryUpgradedClientStateResponse, QueryUpgradedClientStateResponseSDKType, QueryUpgradedConsensusStateRequest, QueryUpgradedConsensusStateRequestSDKType, QueryUpgradedConsensusStateResponse, QueryUpgradedConsensusStateResponseSDKType } from "./query";
/**
 * ClientState queries an IBC light client.
 * @name getClientState
 * @package ibc.core.client.v1
 * @see proto service: ibc.core.client.v1.ClientState
 */
export const getClientState = buildQuery<QueryClientStateRequest, QueryClientStateResponse>({
  encode: QueryClientStateRequest.encode,
  decode: QueryClientStateResponse.decode,
  service: "ibc.core.client.v1.Query",
  method: "ClientState"
});
/**
 * ClientStates queries all the IBC light clients of a chain.
 * @name getClientStates
 * @package ibc.core.client.v1
 * @see proto service: ibc.core.client.v1.ClientStates
 */
export const getClientStates = buildQuery<QueryClientStatesRequest, QueryClientStatesResponse>({
  encode: QueryClientStatesRequest.encode,
  decode: QueryClientStatesResponse.decode,
  service: "ibc.core.client.v1.Query",
  method: "ClientStates"
});
/**
 * ConsensusState queries a consensus state associated with a client state at
 * a given height.
 * @name getConsensusState
 * @package ibc.core.client.v1
 * @see proto service: ibc.core.client.v1.ConsensusState
 */
export const getConsensusState = buildQuery<QueryConsensusStateRequest, QueryConsensusStateResponse>({
  encode: QueryConsensusStateRequest.encode,
  decode: QueryConsensusStateResponse.decode,
  service: "ibc.core.client.v1.Query",
  method: "ConsensusState"
});
/**
 * ConsensusStates queries all the consensus state associated with a given
 * client.
 * @name getConsensusStates
 * @package ibc.core.client.v1
 * @see proto service: ibc.core.client.v1.ConsensusStates
 */
export const getConsensusStates = buildQuery<QueryConsensusStatesRequest, QueryConsensusStatesResponse>({
  encode: QueryConsensusStatesRequest.encode,
  decode: QueryConsensusStatesResponse.decode,
  service: "ibc.core.client.v1.Query",
  method: "ConsensusStates"
});
/**
 * Status queries the status of an IBC client.
 * @name getClientStatus
 * @package ibc.core.client.v1
 * @see proto service: ibc.core.client.v1.ClientStatus
 */
export const getClientStatus = buildQuery<QueryClientStatusRequest, QueryClientStatusResponse>({
  encode: QueryClientStatusRequest.encode,
  decode: QueryClientStatusResponse.decode,
  service: "ibc.core.client.v1.Query",
  method: "ClientStatus"
});
/**
 * ClientParams queries all parameters of the ibc client.
 * @name getClientParams
 * @package ibc.core.client.v1
 * @see proto service: ibc.core.client.v1.ClientParams
 */
export const getClientParams = buildQuery<QueryClientParamsRequest, QueryClientParamsResponse>({
  encode: QueryClientParamsRequest.encode,
  decode: QueryClientParamsResponse.decode,
  service: "ibc.core.client.v1.Query",
  method: "ClientParams"
});
/**
 * UpgradedClientState queries an Upgraded IBC light client.
 * @name getUpgradedClientState
 * @package ibc.core.client.v1
 * @see proto service: ibc.core.client.v1.UpgradedClientState
 */
export const getUpgradedClientState = buildQuery<QueryUpgradedClientStateRequest, QueryUpgradedClientStateResponse>({
  encode: QueryUpgradedClientStateRequest.encode,
  decode: QueryUpgradedClientStateResponse.decode,
  service: "ibc.core.client.v1.Query",
  method: "UpgradedClientState"
});
/**
 * UpgradedConsensusState queries an Upgraded IBC consensus state.
 * @name getUpgradedConsensusState
 * @package ibc.core.client.v1
 * @see proto service: ibc.core.client.v1.UpgradedConsensusState
 */
export const getUpgradedConsensusState = buildQuery<QueryUpgradedConsensusStateRequest, QueryUpgradedConsensusStateResponse>({
  encode: QueryUpgradedConsensusStateRequest.encode,
  decode: QueryUpgradedConsensusStateResponse.decode,
  service: "ibc.core.client.v1.Query",
  method: "UpgradedConsensusState"
});