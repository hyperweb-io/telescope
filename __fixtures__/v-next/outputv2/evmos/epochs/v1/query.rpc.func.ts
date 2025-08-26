import { buildQuery } from "../../../helper-func-types";
import { QueryEpochsInfoRequest, QueryEpochsInfoResponse, QueryCurrentEpochRequest, QueryCurrentEpochResponse } from "./query";
/**
 * EpochInfos provide running epochInfos
 * @name getEpochInfos
 * @package evmos.epochs.v1
 * @see proto service: evmos.epochs.v1.EpochInfos
 */
export const getEpochInfos = buildQuery<QueryEpochsInfoRequest, QueryEpochsInfoResponse>({
  encode: QueryEpochsInfoRequest.encode,
  decode: QueryEpochsInfoResponse.decode,
  service: "evmos.epochs.v1.Query",
  method: "EpochInfos",
  deps: [QueryEpochsInfoRequest, QueryEpochsInfoResponse]
});
/**
 * CurrentEpoch provide current epoch of specified identifier
 * @name getCurrentEpoch
 * @package evmos.epochs.v1
 * @see proto service: evmos.epochs.v1.CurrentEpoch
 */
export const getCurrentEpoch = buildQuery<QueryCurrentEpochRequest, QueryCurrentEpochResponse>({
  encode: QueryCurrentEpochRequest.encode,
  decode: QueryCurrentEpochResponse.decode,
  service: "evmos.epochs.v1.Query",
  method: "CurrentEpoch",
  deps: [QueryCurrentEpochRequest, QueryCurrentEpochResponse]
});