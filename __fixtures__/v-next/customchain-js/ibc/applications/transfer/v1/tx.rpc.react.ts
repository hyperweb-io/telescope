import { buildUseMutation } from "../../../../react-query";
import type { MsgTransfer } from "./tx";
import { transfer } from "./tx.rpc.func";
/**
 * Transfer defines a rpc handler method for MsgTransfer.
 * @name useTransfer
 * @package ibc.applications.transfer.v1
 * @see proto service: ibc.applications.transfer.v1.Transfer
 */
export const useTransfer = buildUseMutation<MsgTransfer, Error>({
  builderMutationFn: transfer
});