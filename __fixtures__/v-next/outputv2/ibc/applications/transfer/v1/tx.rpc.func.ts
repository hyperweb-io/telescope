import { buildTx } from "../../../../helper-func-types";
import { MsgTransfer } from "./tx";
/**
 * Transfer defines a rpc handler method for MsgTransfer.
 * @name transfer
 * @package ibc.applications.transfer.v1
 * @see proto service: ibc.applications.transfer.v1.Transfer
 */
export const transfer = buildTx<MsgTransfer>({
  msg: MsgTransfer
});