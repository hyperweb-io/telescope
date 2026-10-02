import { buildUseQuery } from "../../../../react-query";
import type { QueryChannelRequest, QueryChannelResponse, QueryChannelsRequest, QueryChannelsResponse, QueryConnectionChannelsRequest, QueryConnectionChannelsResponse, QueryChannelClientStateRequest, QueryChannelClientStateResponse, QueryChannelConsensusStateRequest, QueryChannelConsensusStateResponse, QueryPacketCommitmentRequest, QueryPacketCommitmentResponse, QueryPacketCommitmentsRequest, QueryPacketCommitmentsResponse, QueryPacketReceiptRequest, QueryPacketReceiptResponse, QueryPacketAcknowledgementRequest, QueryPacketAcknowledgementResponse, QueryPacketAcknowledgementsRequest, QueryPacketAcknowledgementsResponse, QueryUnreceivedPacketsRequest, QueryUnreceivedPacketsResponse, QueryUnreceivedAcksRequest, QueryUnreceivedAcksResponse, QueryNextSequenceReceiveRequest, QueryNextSequenceReceiveResponse } from "./query";
import { getChannel, getChannels, getConnectionChannels, getChannelClientState, getChannelConsensusState, getPacketCommitment, getPacketCommitments, getPacketReceipt, getPacketAcknowledgement, getPacketAcknowledgements, getUnreceivedPackets, getUnreceivedAcks, getNextSequenceReceive } from "./query.rpc.func";
/**
 * Channel queries an IBC Channel.
 * @name useGetChannel
 * @package ibc.core.channel.v1
 * @see proto service: ibc.core.channel.v1.Channel
 */
export const useGetChannel = buildUseQuery<QueryChannelRequest, QueryChannelResponse>({
  builderQueryFn: getChannel,
  queryKeyPrefix: "ChannelQuery"
});
/**
 * Channels queries all the IBC channels of a chain.
 * @name useGetChannels
 * @package ibc.core.channel.v1
 * @see proto service: ibc.core.channel.v1.Channels
 */
export const useGetChannels = buildUseQuery<QueryChannelsRequest, QueryChannelsResponse>({
  builderQueryFn: getChannels,
  queryKeyPrefix: "ChannelsQuery"
});
/**
 * ConnectionChannels queries all the channels associated with a connection
 * end.
 * @name useGetConnectionChannels
 * @package ibc.core.channel.v1
 * @see proto service: ibc.core.channel.v1.ConnectionChannels
 */
export const useGetConnectionChannels = buildUseQuery<QueryConnectionChannelsRequest, QueryConnectionChannelsResponse>({
  builderQueryFn: getConnectionChannels,
  queryKeyPrefix: "ConnectionChannelsQuery"
});
/**
 * ChannelClientState queries for the client state for the channel associated
 * with the provided channel identifiers.
 * @name useGetChannelClientState
 * @package ibc.core.channel.v1
 * @see proto service: ibc.core.channel.v1.ChannelClientState
 */
export const useGetChannelClientState = buildUseQuery<QueryChannelClientStateRequest, QueryChannelClientStateResponse>({
  builderQueryFn: getChannelClientState,
  queryKeyPrefix: "ChannelClientStateQuery"
});
/**
 * ChannelConsensusState queries for the consensus state for the channel
 * associated with the provided channel identifiers.
 * @name useGetChannelConsensusState
 * @package ibc.core.channel.v1
 * @see proto service: ibc.core.channel.v1.ChannelConsensusState
 */
export const useGetChannelConsensusState = buildUseQuery<QueryChannelConsensusStateRequest, QueryChannelConsensusStateResponse>({
  builderQueryFn: getChannelConsensusState,
  queryKeyPrefix: "ChannelConsensusStateQuery"
});
/**
 * PacketCommitment queries a stored packet commitment hash.
 * @name useGetPacketCommitment
 * @package ibc.core.channel.v1
 * @see proto service: ibc.core.channel.v1.PacketCommitment
 */
export const useGetPacketCommitment = buildUseQuery<QueryPacketCommitmentRequest, QueryPacketCommitmentResponse>({
  builderQueryFn: getPacketCommitment,
  queryKeyPrefix: "PacketCommitmentQuery"
});
/**
 * PacketCommitments returns all the packet commitments hashes associated
 * with a channel.
 * @name useGetPacketCommitments
 * @package ibc.core.channel.v1
 * @see proto service: ibc.core.channel.v1.PacketCommitments
 */
export const useGetPacketCommitments = buildUseQuery<QueryPacketCommitmentsRequest, QueryPacketCommitmentsResponse>({
  builderQueryFn: getPacketCommitments,
  queryKeyPrefix: "PacketCommitmentsQuery"
});
/**
 * PacketReceipt queries if a given packet sequence has been received on the
 * queried chain
 * @name useGetPacketReceipt
 * @package ibc.core.channel.v1
 * @see proto service: ibc.core.channel.v1.PacketReceipt
 */
export const useGetPacketReceipt = buildUseQuery<QueryPacketReceiptRequest, QueryPacketReceiptResponse>({
  builderQueryFn: getPacketReceipt,
  queryKeyPrefix: "PacketReceiptQuery"
});
/**
 * PacketAcknowledgement queries a stored packet acknowledgement hash.
 * @name useGetPacketAcknowledgement
 * @package ibc.core.channel.v1
 * @see proto service: ibc.core.channel.v1.PacketAcknowledgement
 */
export const useGetPacketAcknowledgement = buildUseQuery<QueryPacketAcknowledgementRequest, QueryPacketAcknowledgementResponse>({
  builderQueryFn: getPacketAcknowledgement,
  queryKeyPrefix: "PacketAcknowledgementQuery"
});
/**
 * PacketAcknowledgements returns all the packet acknowledgements associated
 * with a channel.
 * @name useGetPacketAcknowledgements
 * @package ibc.core.channel.v1
 * @see proto service: ibc.core.channel.v1.PacketAcknowledgements
 */
export const useGetPacketAcknowledgements = buildUseQuery<QueryPacketAcknowledgementsRequest, QueryPacketAcknowledgementsResponse>({
  builderQueryFn: getPacketAcknowledgements,
  queryKeyPrefix: "PacketAcknowledgementsQuery"
});
/**
 * UnreceivedPackets returns all the unreceived IBC packets associated with a
 * channel and sequences.
 * @name useGetUnreceivedPackets
 * @package ibc.core.channel.v1
 * @see proto service: ibc.core.channel.v1.UnreceivedPackets
 */
export const useGetUnreceivedPackets = buildUseQuery<QueryUnreceivedPacketsRequest, QueryUnreceivedPacketsResponse>({
  builderQueryFn: getUnreceivedPackets,
  queryKeyPrefix: "UnreceivedPacketsQuery"
});
/**
 * UnreceivedAcks returns all the unreceived IBC acknowledgements associated
 * with a channel and sequences.
 * @name useGetUnreceivedAcks
 * @package ibc.core.channel.v1
 * @see proto service: ibc.core.channel.v1.UnreceivedAcks
 */
export const useGetUnreceivedAcks = buildUseQuery<QueryUnreceivedAcksRequest, QueryUnreceivedAcksResponse>({
  builderQueryFn: getUnreceivedAcks,
  queryKeyPrefix: "UnreceivedAcksQuery"
});
/**
 * NextSequenceReceive returns the next receive sequence for a given channel.
 * @name useGetNextSequenceReceive
 * @package ibc.core.channel.v1
 * @see proto service: ibc.core.channel.v1.NextSequenceReceive
 */
export const useGetNextSequenceReceive = buildUseQuery<QueryNextSequenceReceiveRequest, QueryNextSequenceReceiveResponse>({
  builderQueryFn: getNextSequenceReceive,
  queryKeyPrefix: "NextSequenceReceiveQuery"
});