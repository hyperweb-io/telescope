import { buildTx } from "../../../../helper-func-types";
import { MsgConnectionOpenInit, MsgConnectionOpenTry, MsgConnectionOpenAck, MsgConnectionOpenConfirm } from "./tx";
/**
 * ConnectionOpenInit defines a rpc handler method for MsgConnectionOpenInit.
 * @name connectionOpenInit
 * @package ibc.core.connection.v1
 * @see proto service: ibc.core.connection.v1.ConnectionOpenInit
 */
export const connectionOpenInit = buildTx<MsgConnectionOpenInit>({
  msg: MsgConnectionOpenInit
});
/**
 * ConnectionOpenTry defines a rpc handler method for MsgConnectionOpenTry.
 * @name connectionOpenTry
 * @package ibc.core.connection.v1
 * @see proto service: ibc.core.connection.v1.ConnectionOpenTry
 */
export const connectionOpenTry = buildTx<MsgConnectionOpenTry>({
  msg: MsgConnectionOpenTry
});
/**
 * ConnectionOpenAck defines a rpc handler method for MsgConnectionOpenAck.
 * @name connectionOpenAck
 * @package ibc.core.connection.v1
 * @see proto service: ibc.core.connection.v1.ConnectionOpenAck
 */
export const connectionOpenAck = buildTx<MsgConnectionOpenAck>({
  msg: MsgConnectionOpenAck
});
/**
 * ConnectionOpenConfirm defines a rpc handler method for
 * MsgConnectionOpenConfirm.
 * @name connectionOpenConfirm
 * @package ibc.core.connection.v1
 * @see proto service: ibc.core.connection.v1.ConnectionOpenConfirm
 */
export const connectionOpenConfirm = buildTx<MsgConnectionOpenConfirm>({
  msg: MsgConnectionOpenConfirm
});