import { buildUseQuery } from "../../../../react-query";
import type { QueryClientStateRequest, QueryClientStateResponse, QueryClientStatesRequest, QueryClientStatesResponse, QueryConsensusStateRequest, QueryConsensusStateResponse, QueryConsensusStatesRequest, QueryConsensusStatesResponse, QueryClientStatusRequest, QueryClientStatusResponse, QueryClientParamsRequest, QueryClientParamsResponse, QueryUpgradedClientStateRequest, QueryUpgradedClientStateResponse, QueryUpgradedConsensusStateRequest, QueryUpgradedConsensusStateResponse } from "./query";
import { getClientState, getClientStates, getConsensusState, getConsensusStates, getClientStatus, getClientParams, getUpgradedClientState, getUpgradedConsensusState } from "./query.rpc.func";
/**
 * ClientState queries an IBC light client.
 * @name useGetClientState
 * @package ibc.core.client.v1
 * @see proto service: ibc.core.client.v1.ClientState
 */
export const useGetClientState = buildUseQuery<QueryClientStateRequest, QueryClientStateResponse>({
  builderQueryFn: getClientState,
  queryKeyPrefix: "ClientStateQuery"
});
/**
 * ClientStates queries all the IBC light clients of a chain.
 * @name useGetClientStates
 * @package ibc.core.client.v1
 * @see proto service: ibc.core.client.v1.ClientStates
 */
export const useGetClientStates = buildUseQuery<QueryClientStatesRequest, QueryClientStatesResponse>({
  builderQueryFn: getClientStates,
  queryKeyPrefix: "ClientStatesQuery"
});
/**
 * ConsensusState queries a consensus state associated with a client state at
 * a given height.
 * @name useGetConsensusState
 * @package ibc.core.client.v1
 * @see proto service: ibc.core.client.v1.ConsensusState
 */
export const useGetConsensusState = buildUseQuery<QueryConsensusStateRequest, QueryConsensusStateResponse>({
  builderQueryFn: getConsensusState,
  queryKeyPrefix: "ConsensusStateQuery"
});
/**
 * ConsensusStates queries all the consensus state associated with a given
 * client.
 * @name useGetConsensusStates
 * @package ibc.core.client.v1
 * @see proto service: ibc.core.client.v1.ConsensusStates
 */
export const useGetConsensusStates = buildUseQuery<QueryConsensusStatesRequest, QueryConsensusStatesResponse>({
  builderQueryFn: getConsensusStates,
  queryKeyPrefix: "ConsensusStatesQuery"
});
/**
 * Status queries the status of an IBC client.
 * @name useGetClientStatus
 * @package ibc.core.client.v1
 * @see proto service: ibc.core.client.v1.ClientStatus
 */
export const useGetClientStatus = buildUseQuery<QueryClientStatusRequest, QueryClientStatusResponse>({
  builderQueryFn: getClientStatus,
  queryKeyPrefix: "ClientStatusQuery"
});
/**
 * ClientParams queries all parameters of the ibc client.
 * @name useGetClientParams
 * @package ibc.core.client.v1
 * @see proto service: ibc.core.client.v1.ClientParams
 */
export const useGetClientParams = buildUseQuery<QueryClientParamsRequest, QueryClientParamsResponse>({
  builderQueryFn: getClientParams,
  queryKeyPrefix: "ClientParamsQuery"
});
/**
 * UpgradedClientState queries an Upgraded IBC light client.
 * @name useGetUpgradedClientState
 * @package ibc.core.client.v1
 * @see proto service: ibc.core.client.v1.UpgradedClientState
 */
export const useGetUpgradedClientState = buildUseQuery<QueryUpgradedClientStateRequest, QueryUpgradedClientStateResponse>({
  builderQueryFn: getUpgradedClientState,
  queryKeyPrefix: "UpgradedClientStateQuery"
});
/**
 * UpgradedConsensusState queries an Upgraded IBC consensus state.
 * @name useGetUpgradedConsensusState
 * @package ibc.core.client.v1
 * @see proto service: ibc.core.client.v1.UpgradedConsensusState
 */
export const useGetUpgradedConsensusState = buildUseQuery<QueryUpgradedConsensusStateRequest, QueryUpgradedConsensusStateResponse>({
  builderQueryFn: getUpgradedConsensusState,
  queryKeyPrefix: "UpgradedConsensusStateQuery"
});