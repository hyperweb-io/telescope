import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../../../cosmos/base/query/v1beta1/pagination.js";
import { Channel, ChannelSDKType, IdentifiedChannel, IdentifiedChannelSDKType, PacketState, PacketStateSDKType } from "./channel.js";
import { Height, HeightSDKType, IdentifiedClientState, IdentifiedClientStateSDKType } from "../../client/v1/client.js";
import { Any, AnySDKType } from "../../../../google/protobuf/any.js";
import { EndpointOrRpc, buildQuery } from "../../../../helper-func-types.js";
import { QueryChannelRequest, QueryChannelRequestSDKType, QueryChannelResponse, QueryChannelResponseSDKType, QueryChannelsRequest, QueryChannelsRequestSDKType, QueryChannelsResponse, QueryChannelsResponseSDKType, QueryConnectionChannelsRequest, QueryConnectionChannelsRequestSDKType, QueryConnectionChannelsResponse, QueryConnectionChannelsResponseSDKType, QueryChannelClientStateRequest, QueryChannelClientStateRequestSDKType, QueryChannelClientStateResponse, QueryChannelClientStateResponseSDKType, QueryChannelConsensusStateRequest, QueryChannelConsensusStateRequestSDKType, QueryChannelConsensusStateResponse, QueryChannelConsensusStateResponseSDKType, QueryPacketCommitmentRequest, QueryPacketCommitmentRequestSDKType, QueryPacketCommitmentResponse, QueryPacketCommitmentResponseSDKType, QueryPacketCommitmentsRequest, QueryPacketCommitmentsRequestSDKType, QueryPacketCommitmentsResponse, QueryPacketCommitmentsResponseSDKType, QueryPacketReceiptRequest, QueryPacketReceiptRequestSDKType, QueryPacketReceiptResponse, QueryPacketReceiptResponseSDKType, QueryPacketAcknowledgementRequest, QueryPacketAcknowledgementRequestSDKType, QueryPacketAcknowledgementResponse, QueryPacketAcknowledgementResponseSDKType, QueryPacketAcknowledgementsRequest, QueryPacketAcknowledgementsRequestSDKType, QueryPacketAcknowledgementsResponse, QueryPacketAcknowledgementsResponseSDKType, QueryUnreceivedPacketsRequest, QueryUnreceivedPacketsRequestSDKType, QueryUnreceivedPacketsResponse, QueryUnreceivedPacketsResponseSDKType, QueryUnreceivedAcksRequest, QueryUnreceivedAcksRequestSDKType, QueryUnreceivedAcksResponse, QueryUnreceivedAcksResponseSDKType, QueryNextSequenceReceiveRequest, QueryNextSequenceReceiveRequestSDKType, QueryNextSequenceReceiveResponse, QueryNextSequenceReceiveResponseSDKType } from "./query.js";
/**
 * Channel queries an IBC Channel.
 * @name getChannel
 * @package ibc.core.channel.v1
 * @see proto service: ibc.core.channel.v1.Channel
 */
export const getChannel = buildQuery<QueryChannelRequest, QueryChannelResponse>({
  encode: QueryChannelRequest.encode,
  decode: QueryChannelResponse.decode,
  service: "ibc.core.channel.v1.Query",
  method: "Channel"
});
/**
 * Channels queries all the IBC channels of a chain.
 * @name getChannels
 * @package ibc.core.channel.v1
 * @see proto service: ibc.core.channel.v1.Channels
 */
export const getChannels = buildQuery<QueryChannelsRequest, QueryChannelsResponse>({
  encode: QueryChannelsRequest.encode,
  decode: QueryChannelsResponse.decode,
  service: "ibc.core.channel.v1.Query",
  method: "Channels"
});
/**
 * ConnectionChannels queries all the channels associated with a connection
 * end.
 * @name getConnectionChannels
 * @package ibc.core.channel.v1
 * @see proto service: ibc.core.channel.v1.ConnectionChannels
 */
export const getConnectionChannels = buildQuery<QueryConnectionChannelsRequest, QueryConnectionChannelsResponse>({
  encode: QueryConnectionChannelsRequest.encode,
  decode: QueryConnectionChannelsResponse.decode,
  service: "ibc.core.channel.v1.Query",
  method: "ConnectionChannels"
});
/**
 * ChannelClientState queries for the client state for the channel associated
 * with the provided channel identifiers.
 * @name getChannelClientState
 * @package ibc.core.channel.v1
 * @see proto service: ibc.core.channel.v1.ChannelClientState
 */
export const getChannelClientState = buildQuery<QueryChannelClientStateRequest, QueryChannelClientStateResponse>({
  encode: QueryChannelClientStateRequest.encode,
  decode: QueryChannelClientStateResponse.decode,
  service: "ibc.core.channel.v1.Query",
  method: "ChannelClientState"
});
/**
 * ChannelConsensusState queries for the consensus state for the channel
 * associated with the provided channel identifiers.
 * @name getChannelConsensusState
 * @package ibc.core.channel.v1
 * @see proto service: ibc.core.channel.v1.ChannelConsensusState
 */
export const getChannelConsensusState = buildQuery<QueryChannelConsensusStateRequest, QueryChannelConsensusStateResponse>({
  encode: QueryChannelConsensusStateRequest.encode,
  decode: QueryChannelConsensusStateResponse.decode,
  service: "ibc.core.channel.v1.Query",
  method: "ChannelConsensusState"
});
/**
 * PacketCommitment queries a stored packet commitment hash.
 * @name getPacketCommitment
 * @package ibc.core.channel.v1
 * @see proto service: ibc.core.channel.v1.PacketCommitment
 */
export const getPacketCommitment = buildQuery<QueryPacketCommitmentRequest, QueryPacketCommitmentResponse>({
  encode: QueryPacketCommitmentRequest.encode,
  decode: QueryPacketCommitmentResponse.decode,
  service: "ibc.core.channel.v1.Query",
  method: "PacketCommitment"
});
/**
 * PacketCommitments returns all the packet commitments hashes associated
 * with a channel.
 * @name getPacketCommitments
 * @package ibc.core.channel.v1
 * @see proto service: ibc.core.channel.v1.PacketCommitments
 */
export const getPacketCommitments = buildQuery<QueryPacketCommitmentsRequest, QueryPacketCommitmentsResponse>({
  encode: QueryPacketCommitmentsRequest.encode,
  decode: QueryPacketCommitmentsResponse.decode,
  service: "ibc.core.channel.v1.Query",
  method: "PacketCommitments"
});
/**
 * PacketReceipt queries if a given packet sequence has been received on the
 * queried chain
 * @name getPacketReceipt
 * @package ibc.core.channel.v1
 * @see proto service: ibc.core.channel.v1.PacketReceipt
 */
export const getPacketReceipt = buildQuery<QueryPacketReceiptRequest, QueryPacketReceiptResponse>({
  encode: QueryPacketReceiptRequest.encode,
  decode: QueryPacketReceiptResponse.decode,
  service: "ibc.core.channel.v1.Query",
  method: "PacketReceipt"
});
/**
 * PacketAcknowledgement queries a stored packet acknowledgement hash.
 * @name getPacketAcknowledgement
 * @package ibc.core.channel.v1
 * @see proto service: ibc.core.channel.v1.PacketAcknowledgement
 */
export const getPacketAcknowledgement = buildQuery<QueryPacketAcknowledgementRequest, QueryPacketAcknowledgementResponse>({
  encode: QueryPacketAcknowledgementRequest.encode,
  decode: QueryPacketAcknowledgementResponse.decode,
  service: "ibc.core.channel.v1.Query",
  method: "PacketAcknowledgement"
});
/**
 * PacketAcknowledgements returns all the packet acknowledgements associated
 * with a channel.
 * @name getPacketAcknowledgements
 * @package ibc.core.channel.v1
 * @see proto service: ibc.core.channel.v1.PacketAcknowledgements
 */
export const getPacketAcknowledgements = buildQuery<QueryPacketAcknowledgementsRequest, QueryPacketAcknowledgementsResponse>({
  encode: QueryPacketAcknowledgementsRequest.encode,
  decode: QueryPacketAcknowledgementsResponse.decode,
  service: "ibc.core.channel.v1.Query",
  method: "PacketAcknowledgements"
});
/**
 * UnreceivedPackets returns all the unreceived IBC packets associated with a
 * channel and sequences.
 * @name getUnreceivedPackets
 * @package ibc.core.channel.v1
 * @see proto service: ibc.core.channel.v1.UnreceivedPackets
 */
export const getUnreceivedPackets = buildQuery<QueryUnreceivedPacketsRequest, QueryUnreceivedPacketsResponse>({
  encode: QueryUnreceivedPacketsRequest.encode,
  decode: QueryUnreceivedPacketsResponse.decode,
  service: "ibc.core.channel.v1.Query",
  method: "UnreceivedPackets"
});
/**
 * UnreceivedAcks returns all the unreceived IBC acknowledgements associated
 * with a channel and sequences.
 * @name getUnreceivedAcks
 * @package ibc.core.channel.v1
 * @see proto service: ibc.core.channel.v1.UnreceivedAcks
 */
export const getUnreceivedAcks = buildQuery<QueryUnreceivedAcksRequest, QueryUnreceivedAcksResponse>({
  encode: QueryUnreceivedAcksRequest.encode,
  decode: QueryUnreceivedAcksResponse.decode,
  service: "ibc.core.channel.v1.Query",
  method: "UnreceivedAcks"
});
/**
 * NextSequenceReceive returns the next receive sequence for a given channel.
 * @name getNextSequenceReceive
 * @package ibc.core.channel.v1
 * @see proto service: ibc.core.channel.v1.NextSequenceReceive
 */
export const getNextSequenceReceive = buildQuery<QueryNextSequenceReceiveRequest, QueryNextSequenceReceiveResponse>({
  encode: QueryNextSequenceReceiveRequest.encode,
  decode: QueryNextSequenceReceiveResponse.decode,
  service: "ibc.core.channel.v1.Query",
  method: "NextSequenceReceive"
});