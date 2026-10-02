import { buildUseMutation } from "../../../../react-query";
import type { MsgConnectionOpenInit, MsgConnectionOpenTry, MsgConnectionOpenAck, MsgConnectionOpenConfirm } from "./tx";
import { connectionOpenInit, connectionOpenTry, connectionOpenAck, connectionOpenConfirm } from "./tx.rpc.func";
/**
 * ConnectionOpenInit defines a rpc handler method for MsgConnectionOpenInit.
 * @name useConnectionOpenInit
 * @package ibc.core.connection.v1
 * @see proto service: ibc.core.connection.v1.ConnectionOpenInit
 */
export const useConnectionOpenInit = buildUseMutation<MsgConnectionOpenInit, Error>({
  builderMutationFn: connectionOpenInit
});
/**
 * ConnectionOpenTry defines a rpc handler method for MsgConnectionOpenTry.
 * @name useConnectionOpenTry
 * @package ibc.core.connection.v1
 * @see proto service: ibc.core.connection.v1.ConnectionOpenTry
 */
export const useConnectionOpenTry = buildUseMutation<MsgConnectionOpenTry, Error>({
  builderMutationFn: connectionOpenTry
});
/**
 * ConnectionOpenAck defines a rpc handler method for MsgConnectionOpenAck.
 * @name useConnectionOpenAck
 * @package ibc.core.connection.v1
 * @see proto service: ibc.core.connection.v1.ConnectionOpenAck
 */
export const useConnectionOpenAck = buildUseMutation<MsgConnectionOpenAck, Error>({
  builderMutationFn: connectionOpenAck
});
/**
 * ConnectionOpenConfirm defines a rpc handler method for
 * MsgConnectionOpenConfirm.
 * @name useConnectionOpenConfirm
 * @package ibc.core.connection.v1
 * @see proto service: ibc.core.connection.v1.ConnectionOpenConfirm
 */
export const useConnectionOpenConfirm = buildUseMutation<MsgConnectionOpenConfirm, Error>({
  builderMutationFn: connectionOpenConfirm
});