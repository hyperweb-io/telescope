import { buildUseQuery } from "../../../../react-query";
import type { QueryConnectionRequest, QueryConnectionResponse, QueryConnectionsRequest, QueryConnectionsResponse, QueryClientConnectionsRequest, QueryClientConnectionsResponse, QueryConnectionClientStateRequest, QueryConnectionClientStateResponse, QueryConnectionConsensusStateRequest, QueryConnectionConsensusStateResponse } from "./query";
import { getConnection, getConnections, getClientConnections, getConnectionClientState, getConnectionConsensusState } from "./query.rpc.func";
/**
 * Connection queries an IBC connection end.
 * @name useGetConnection
 * @package ibc.core.connection.v1
 * @see proto service: ibc.core.connection.v1.Connection
 */
export const useGetConnection = buildUseQuery<QueryConnectionRequest, QueryConnectionResponse>({
  builderQueryFn: getConnection,
  queryKeyPrefix: "ConnectionQuery"
});
/**
 * Connections queries all the IBC connections of a chain.
 * @name useGetConnections
 * @package ibc.core.connection.v1
 * @see proto service: ibc.core.connection.v1.Connections
 */
export const useGetConnections = buildUseQuery<QueryConnectionsRequest, QueryConnectionsResponse>({
  builderQueryFn: getConnections,
  queryKeyPrefix: "ConnectionsQuery"
});
/**
 * ClientConnections queries the connection paths associated with a client
 * state.
 * @name useGetClientConnections
 * @package ibc.core.connection.v1
 * @see proto service: ibc.core.connection.v1.ClientConnections
 */
export const useGetClientConnections = buildUseQuery<QueryClientConnectionsRequest, QueryClientConnectionsResponse>({
  builderQueryFn: getClientConnections,
  queryKeyPrefix: "ClientConnectionsQuery"
});
/**
 * ConnectionClientState queries the client state associated with the
 * connection.
 * @name useGetConnectionClientState
 * @package ibc.core.connection.v1
 * @see proto service: ibc.core.connection.v1.ConnectionClientState
 */
export const useGetConnectionClientState = buildUseQuery<QueryConnectionClientStateRequest, QueryConnectionClientStateResponse>({
  builderQueryFn: getConnectionClientState,
  queryKeyPrefix: "ConnectionClientStateQuery"
});
/**
 * ConnectionConsensusState queries the consensus state associated with the
 * connection.
 * @name useGetConnectionConsensusState
 * @package ibc.core.connection.v1
 * @see proto service: ibc.core.connection.v1.ConnectionConsensusState
 */
export const useGetConnectionConsensusState = buildUseQuery<QueryConnectionConsensusStateRequest, QueryConnectionConsensusStateResponse>({
  builderQueryFn: getConnectionConsensusState,
  queryKeyPrefix: "ConnectionConsensusStateQuery"
});