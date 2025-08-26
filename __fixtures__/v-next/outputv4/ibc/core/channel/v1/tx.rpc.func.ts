import { Channel, ChannelSDKType, Packet, PacketSDKType } from "./channel.js";
import { Height, HeightSDKType } from "../../client/v1/client.js";
import { buildTx } from "../../../../helper-func-types.js";
import { MsgChannelOpenInit, MsgChannelOpenInitSDKType, MsgChannelOpenInitResponse, MsgChannelOpenInitResponseSDKType, MsgChannelOpenTry, MsgChannelOpenTrySDKType, MsgChannelOpenTryResponse, MsgChannelOpenTryResponseSDKType, MsgChannelOpenAck, MsgChannelOpenAckSDKType, MsgChannelOpenAckResponse, MsgChannelOpenAckResponseSDKType, MsgChannelOpenConfirm, MsgChannelOpenConfirmSDKType, MsgChannelOpenConfirmResponse, MsgChannelOpenConfirmResponseSDKType, MsgChannelCloseInit, MsgChannelCloseInitSDKType, MsgChannelCloseInitResponse, MsgChannelCloseInitResponseSDKType, MsgChannelCloseConfirm, MsgChannelCloseConfirmSDKType, MsgChannelCloseConfirmResponse, MsgChannelCloseConfirmResponseSDKType, MsgRecvPacket, MsgRecvPacketSDKType, MsgRecvPacketResponse, MsgRecvPacketResponseSDKType, MsgTimeout, MsgTimeoutSDKType, MsgTimeoutResponse, MsgTimeoutResponseSDKType, MsgTimeoutOnClose, MsgTimeoutOnCloseSDKType, MsgTimeoutOnCloseResponse, MsgTimeoutOnCloseResponseSDKType, MsgAcknowledgement, MsgAcknowledgementSDKType, MsgAcknowledgementResponse, MsgAcknowledgementResponseSDKType } from "./tx.js";
/**
 * ChannelOpenInit defines a rpc handler method for MsgChannelOpenInit.
 * @name channelOpenInit
 * @package ibc.core.channel.v1
 * @see proto service: ibc.core.channel.v1.ChannelOpenInit
 */
export const channelOpenInit = buildTx<MsgChannelOpenInit>({
  msg: MsgChannelOpenInit
});
/**
 * ChannelOpenTry defines a rpc handler method for MsgChannelOpenTry.
 * @name channelOpenTry
 * @package ibc.core.channel.v1
 * @see proto service: ibc.core.channel.v1.ChannelOpenTry
 */
export const channelOpenTry = buildTx<MsgChannelOpenTry>({
  msg: MsgChannelOpenTry
});
/**
 * ChannelOpenAck defines a rpc handler method for MsgChannelOpenAck.
 * @name channelOpenAck
 * @package ibc.core.channel.v1
 * @see proto service: ibc.core.channel.v1.ChannelOpenAck
 */
export const channelOpenAck = buildTx<MsgChannelOpenAck>({
  msg: MsgChannelOpenAck
});
/**
 * ChannelOpenConfirm defines a rpc handler method for MsgChannelOpenConfirm.
 * @name channelOpenConfirm
 * @package ibc.core.channel.v1
 * @see proto service: ibc.core.channel.v1.ChannelOpenConfirm
 */
export const channelOpenConfirm = buildTx<MsgChannelOpenConfirm>({
  msg: MsgChannelOpenConfirm
});
/**
 * ChannelCloseInit defines a rpc handler method for MsgChannelCloseInit.
 * @name channelCloseInit
 * @package ibc.core.channel.v1
 * @see proto service: ibc.core.channel.v1.ChannelCloseInit
 */
export const channelCloseInit = buildTx<MsgChannelCloseInit>({
  msg: MsgChannelCloseInit
});
/**
 * ChannelCloseConfirm defines a rpc handler method for
 * MsgChannelCloseConfirm.
 * @name channelCloseConfirm
 * @package ibc.core.channel.v1
 * @see proto service: ibc.core.channel.v1.ChannelCloseConfirm
 */
export const channelCloseConfirm = buildTx<MsgChannelCloseConfirm>({
  msg: MsgChannelCloseConfirm
});
/**
 * RecvPacket defines a rpc handler method for MsgRecvPacket.
 * @name recvPacket
 * @package ibc.core.channel.v1
 * @see proto service: ibc.core.channel.v1.RecvPacket
 */
export const recvPacket = buildTx<MsgRecvPacket>({
  msg: MsgRecvPacket
});
/**
 * Timeout defines a rpc handler method for MsgTimeout.
 * @name timeout
 * @package ibc.core.channel.v1
 * @see proto service: ibc.core.channel.v1.Timeout
 */
export const timeout = buildTx<MsgTimeout>({
  msg: MsgTimeout
});
/**
 * TimeoutOnClose defines a rpc handler method for MsgTimeoutOnClose.
 * @name timeoutOnClose
 * @package ibc.core.channel.v1
 * @see proto service: ibc.core.channel.v1.TimeoutOnClose
 */
export const timeoutOnClose = buildTx<MsgTimeoutOnClose>({
  msg: MsgTimeoutOnClose
});
/**
 * Acknowledgement defines a rpc handler method for MsgAcknowledgement.
 * @name acknowledgement
 * @package ibc.core.channel.v1
 * @see proto service: ibc.core.channel.v1.Acknowledgement
 */
export const acknowledgement = buildTx<MsgAcknowledgement>({
  msg: MsgAcknowledgement
});