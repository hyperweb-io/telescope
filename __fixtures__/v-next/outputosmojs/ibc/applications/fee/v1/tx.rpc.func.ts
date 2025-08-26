import { Fee, FeeSDKType, PacketFee, PacketFeeSDKType } from "./fee";
import { buildTx } from "../../../../helper-func-types";
import { MsgRegisterPayee, MsgRegisterPayeeSDKType, MsgRegisterPayeeResponse, MsgRegisterPayeeResponseSDKType, MsgRegisterCounterpartyPayee, MsgRegisterCounterpartyPayeeSDKType, MsgRegisterCounterpartyPayeeResponse, MsgRegisterCounterpartyPayeeResponseSDKType, MsgPayPacketFee, MsgPayPacketFeeSDKType, MsgPayPacketFeeResponse, MsgPayPacketFeeResponseSDKType, MsgPayPacketFeeAsync, MsgPayPacketFeeAsyncSDKType, MsgPayPacketFeeAsyncResponse, MsgPayPacketFeeAsyncResponseSDKType } from "./tx";
/**
 * RegisterPayee defines a rpc handler method for MsgRegisterPayee
 * RegisterPayee is called by the relayer on each channelEnd and allows them to set an optional
 * payee to which reverse and timeout relayer packet fees will be paid out. The payee should be registered on
 * the source chain from which packets originate as this is where fee distribution takes place. This function may be
 * called more than once by a relayer, in which case, the latest payee is always used.
 * @name registerPayee
 * @package ibc.applications.fee.v1
 * @see proto service: ibc.applications.fee.v1.RegisterPayee
 */
export const registerPayee = buildTx<MsgRegisterPayee>({
  msg: MsgRegisterPayee
});
/**
 * RegisterCounterpartyPayee defines a rpc handler method for MsgRegisterCounterpartyPayee
 * RegisterCounterpartyPayee is called by the relayer on each channelEnd and allows them to specify the counterparty
 * payee address before relaying. This ensures they will be properly compensated for forward relaying since
 * the destination chain must include the registered counterparty payee address in the acknowledgement. This function
 * may be called more than once by a relayer, in which case, the latest counterparty payee address is always used.
 * @name registerCounterpartyPayee
 * @package ibc.applications.fee.v1
 * @see proto service: ibc.applications.fee.v1.RegisterCounterpartyPayee
 */
export const registerCounterpartyPayee = buildTx<MsgRegisterCounterpartyPayee>({
  msg: MsgRegisterCounterpartyPayee
});
/**
 * PayPacketFee defines a rpc handler method for MsgPayPacketFee
 * PayPacketFee is an open callback that may be called by any module/user that wishes to escrow funds in order to
 * incentivize the relaying of the packet at the next sequence
 * NOTE: This method is intended to be used within a multi msg transaction, where the subsequent msg that follows
 * initiates the lifecycle of the incentivized packet
 * @name payPacketFee
 * @package ibc.applications.fee.v1
 * @see proto service: ibc.applications.fee.v1.PayPacketFee
 */
export const payPacketFee = buildTx<MsgPayPacketFee>({
  msg: MsgPayPacketFee
});
/**
 * PayPacketFeeAsync defines a rpc handler method for MsgPayPacketFeeAsync
 * PayPacketFeeAsync is an open callback that may be called by any module/user that wishes to escrow funds in order to
 * incentivize the relaying of a known packet (i.e. at a particular sequence)
 * @name payPacketFeeAsync
 * @package ibc.applications.fee.v1
 * @see proto service: ibc.applications.fee.v1.PayPacketFeeAsync
 */
export const payPacketFeeAsync = buildTx<MsgPayPacketFeeAsync>({
  msg: MsgPayPacketFeeAsync
});