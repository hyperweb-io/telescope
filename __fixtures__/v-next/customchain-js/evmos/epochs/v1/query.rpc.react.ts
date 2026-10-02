import { buildUseQuery } from "../../../react-query";
import type { QueryEpochsInfoRequest, QueryEpochsInfoResponse, QueryCurrentEpochRequest, QueryCurrentEpochResponse } from "./query";
import { getEpochInfos, getCurrentEpoch } from "./query.rpc.func";
/**
 * EpochInfos provide running epochInfos
 * @name useGetEpochInfos
 * @package evmos.epochs.v1
 * @see proto service: evmos.epochs.v1.EpochInfos
 */
export const useGetEpochInfos = buildUseQuery<QueryEpochsInfoRequest, QueryEpochsInfoResponse>({
  builderQueryFn: getEpochInfos,
  queryKeyPrefix: "EpochInfosQuery"
});
/**
 * CurrentEpoch provide current epoch of specified identifier
 * @name useGetCurrentEpoch
 * @package evmos.epochs.v1
 * @see proto service: evmos.epochs.v1.CurrentEpoch
 */
export const useGetCurrentEpoch = buildUseQuery<QueryCurrentEpochRequest, QueryCurrentEpochResponse>({
  builderQueryFn: getCurrentEpoch,
  queryKeyPrefix: "CurrentEpochQuery"
});