import { EpochInfo, EpochInfoSDKType } from "./genesis.js";
import { EndpointOrRpc, buildQuery } from "../../helper-func-types.js";
import { QueryEpochsInfoRequest, QueryEpochsInfoRequestSDKType, QueryEpochsInfoResponse, QueryEpochsInfoResponseSDKType, QueryCurrentEpochRequest, QueryCurrentEpochRequestSDKType, QueryCurrentEpochResponse, QueryCurrentEpochResponseSDKType } from "./query.js";
/**
 * EpochInfos provide running epochInfos
 * @name getEpochInfos
 * @package osmosis.epochs.v1beta1
 * @see proto service: osmosis.epochs.v1beta1.EpochInfos
 */
export const getEpochInfos = buildQuery<QueryEpochsInfoRequest, QueryEpochsInfoResponse>({
  encode: QueryEpochsInfoRequest.encode,
  decode: QueryEpochsInfoResponse.decode,
  service: "osmosis.epochs.v1beta1.Query",
  method: "EpochInfos"
});
/**
 * CurrentEpoch provide current epoch of specified identifier
 * @name getCurrentEpoch
 * @package osmosis.epochs.v1beta1
 * @see proto service: osmosis.epochs.v1beta1.CurrentEpoch
 */
export const getCurrentEpoch = buildQuery<QueryCurrentEpochRequest, QueryCurrentEpochResponse>({
  encode: QueryCurrentEpochRequest.encode,
  decode: QueryCurrentEpochResponse.decode,
  service: "osmosis.epochs.v1beta1.Query",
  method: "CurrentEpoch"
});