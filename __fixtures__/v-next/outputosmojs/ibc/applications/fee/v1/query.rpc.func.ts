import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../../../cosmos/base/query/v1beta1/pagination";
import { IdentifiedPacketFees, IdentifiedPacketFeesSDKType } from "./fee";
import { Coin, CoinSDKType } from "../../../../cosmos/base/v1beta1/coin";
import { FeeEnabledChannel, FeeEnabledChannelSDKType } from "./genesis";
import { EndpointOrRpc, buildQuery } from "../../../../helper-func-types";
import { QueryIncentivizedPacketsRequest, QueryIncentivizedPacketsRequestSDKType, QueryIncentivizedPacketsResponse, QueryIncentivizedPacketsResponseSDKType, QueryIncentivizedPacketRequest, QueryIncentivizedPacketRequestSDKType, QueryIncentivizedPacketResponse, QueryIncentivizedPacketResponseSDKType, QueryIncentivizedPacketsForChannelRequest, QueryIncentivizedPacketsForChannelRequestSDKType, QueryIncentivizedPacketsForChannelResponse, QueryIncentivizedPacketsForChannelResponseSDKType, QueryTotalRecvFeesRequest, QueryTotalRecvFeesRequestSDKType, QueryTotalRecvFeesResponse, QueryTotalRecvFeesResponseSDKType, QueryTotalAckFeesRequest, QueryTotalAckFeesRequestSDKType, QueryTotalAckFeesResponse, QueryTotalAckFeesResponseSDKType, QueryTotalTimeoutFeesRequest, QueryTotalTimeoutFeesRequestSDKType, QueryTotalTimeoutFeesResponse, QueryTotalTimeoutFeesResponseSDKType, QueryPayeeRequest, QueryPayeeRequestSDKType, QueryPayeeResponse, QueryPayeeResponseSDKType, QueryCounterpartyPayeeRequest, QueryCounterpartyPayeeRequestSDKType, QueryCounterpartyPayeeResponse, QueryCounterpartyPayeeResponseSDKType, QueryFeeEnabledChannelsRequest, QueryFeeEnabledChannelsRequestSDKType, QueryFeeEnabledChannelsResponse, QueryFeeEnabledChannelsResponseSDKType, QueryFeeEnabledChannelRequest, QueryFeeEnabledChannelRequestSDKType, QueryFeeEnabledChannelResponse, QueryFeeEnabledChannelResponseSDKType } from "./query";
/**
 * IncentivizedPackets returns all incentivized packets and their associated fees
 * @name getIncentivizedPackets
 * @package ibc.applications.fee.v1
 * @see proto service: ibc.applications.fee.v1.IncentivizedPackets
 */
export const getIncentivizedPackets = buildQuery<QueryIncentivizedPacketsRequest, QueryIncentivizedPacketsResponse>({
  encode: QueryIncentivizedPacketsRequest.encode,
  decode: QueryIncentivizedPacketsResponse.decode,
  service: "ibc.applications.fee.v1.Query",
  method: "IncentivizedPackets"
});
/**
 * IncentivizedPacket returns all packet fees for a packet given its identifier
 * @name getIncentivizedPacket
 * @package ibc.applications.fee.v1
 * @see proto service: ibc.applications.fee.v1.IncentivizedPacket
 */
export const getIncentivizedPacket = buildQuery<QueryIncentivizedPacketRequest, QueryIncentivizedPacketResponse>({
  encode: QueryIncentivizedPacketRequest.encode,
  decode: QueryIncentivizedPacketResponse.decode,
  service: "ibc.applications.fee.v1.Query",
  method: "IncentivizedPacket"
});
/**
 * Gets all incentivized packets for a specific channel
 * @name getIncentivizedPacketsForChannel
 * @package ibc.applications.fee.v1
 * @see proto service: ibc.applications.fee.v1.IncentivizedPacketsForChannel
 */
export const getIncentivizedPacketsForChannel = buildQuery<QueryIncentivizedPacketsForChannelRequest, QueryIncentivizedPacketsForChannelResponse>({
  encode: QueryIncentivizedPacketsForChannelRequest.encode,
  decode: QueryIncentivizedPacketsForChannelResponse.decode,
  service: "ibc.applications.fee.v1.Query",
  method: "IncentivizedPacketsForChannel"
});
/**
 * TotalRecvFees returns the total receive fees for a packet given its identifier
 * @name getTotalRecvFees
 * @package ibc.applications.fee.v1
 * @see proto service: ibc.applications.fee.v1.TotalRecvFees
 */
export const getTotalRecvFees = buildQuery<QueryTotalRecvFeesRequest, QueryTotalRecvFeesResponse>({
  encode: QueryTotalRecvFeesRequest.encode,
  decode: QueryTotalRecvFeesResponse.decode,
  service: "ibc.applications.fee.v1.Query",
  method: "TotalRecvFees"
});
/**
 * TotalAckFees returns the total acknowledgement fees for a packet given its identifier
 * @name getTotalAckFees
 * @package ibc.applications.fee.v1
 * @see proto service: ibc.applications.fee.v1.TotalAckFees
 */
export const getTotalAckFees = buildQuery<QueryTotalAckFeesRequest, QueryTotalAckFeesResponse>({
  encode: QueryTotalAckFeesRequest.encode,
  decode: QueryTotalAckFeesResponse.decode,
  service: "ibc.applications.fee.v1.Query",
  method: "TotalAckFees"
});
/**
 * TotalTimeoutFees returns the total timeout fees for a packet given its identifier
 * @name getTotalTimeoutFees
 * @package ibc.applications.fee.v1
 * @see proto service: ibc.applications.fee.v1.TotalTimeoutFees
 */
export const getTotalTimeoutFees = buildQuery<QueryTotalTimeoutFeesRequest, QueryTotalTimeoutFeesResponse>({
  encode: QueryTotalTimeoutFeesRequest.encode,
  decode: QueryTotalTimeoutFeesResponse.decode,
  service: "ibc.applications.fee.v1.Query",
  method: "TotalTimeoutFees"
});
/**
 * Payee returns the registered payee address for a specific channel given the relayer address
 * @name getPayee
 * @package ibc.applications.fee.v1
 * @see proto service: ibc.applications.fee.v1.Payee
 */
export const getPayee = buildQuery<QueryPayeeRequest, QueryPayeeResponse>({
  encode: QueryPayeeRequest.encode,
  decode: QueryPayeeResponse.decode,
  service: "ibc.applications.fee.v1.Query",
  method: "Payee"
});
/**
 * CounterpartyPayee returns the registered counterparty payee for forward relaying
 * @name getCounterpartyPayee
 * @package ibc.applications.fee.v1
 * @see proto service: ibc.applications.fee.v1.CounterpartyPayee
 */
export const getCounterpartyPayee = buildQuery<QueryCounterpartyPayeeRequest, QueryCounterpartyPayeeResponse>({
  encode: QueryCounterpartyPayeeRequest.encode,
  decode: QueryCounterpartyPayeeResponse.decode,
  service: "ibc.applications.fee.v1.Query",
  method: "CounterpartyPayee"
});
/**
 * FeeEnabledChannels returns a list of all fee enabled channels
 * @name getFeeEnabledChannels
 * @package ibc.applications.fee.v1
 * @see proto service: ibc.applications.fee.v1.FeeEnabledChannels
 */
export const getFeeEnabledChannels = buildQuery<QueryFeeEnabledChannelsRequest, QueryFeeEnabledChannelsResponse>({
  encode: QueryFeeEnabledChannelsRequest.encode,
  decode: QueryFeeEnabledChannelsResponse.decode,
  service: "ibc.applications.fee.v1.Query",
  method: "FeeEnabledChannels"
});
/**
 * FeeEnabledChannel returns true if the provided port and channel identifiers belong to a fee enabled channel
 * @name getFeeEnabledChannel
 * @package ibc.applications.fee.v1
 * @see proto service: ibc.applications.fee.v1.FeeEnabledChannel
 */
export const getFeeEnabledChannel = buildQuery<QueryFeeEnabledChannelRequest, QueryFeeEnabledChannelResponse>({
  encode: QueryFeeEnabledChannelRequest.encode,
  decode: QueryFeeEnabledChannelResponse.decode,
  service: "ibc.applications.fee.v1.Query",
  method: "FeeEnabledChannel"
});