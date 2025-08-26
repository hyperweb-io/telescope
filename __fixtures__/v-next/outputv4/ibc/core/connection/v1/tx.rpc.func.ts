import { Counterparty, CounterpartySDKType, Version, VersionSDKType } from "./connection.js";
import { Any, AnySDKType } from "../../../../google/protobuf/any.js";
import { Height, HeightSDKType } from "../../client/v1/client.js";
import { buildTx } from "../../../../helper-func-types.js";
import { MsgConnectionOpenInit, MsgConnectionOpenInitSDKType, MsgConnectionOpenInitResponse, MsgConnectionOpenInitResponseSDKType, MsgConnectionOpenTry, MsgConnectionOpenTrySDKType, MsgConnectionOpenTryResponse, MsgConnectionOpenTryResponseSDKType, MsgConnectionOpenAck, MsgConnectionOpenAckSDKType, MsgConnectionOpenAckResponse, MsgConnectionOpenAckResponseSDKType, MsgConnectionOpenConfirm, MsgConnectionOpenConfirmSDKType, MsgConnectionOpenConfirmResponse, MsgConnectionOpenConfirmResponseSDKType } from "./tx.js";
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