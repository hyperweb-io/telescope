import { buildUseQuery } from "../../react-query";
import type { QueryEpochsInfoRequest, QueryEpochsInfoResponse, QueryCurrentEpochRequest, QueryCurrentEpochResponse } from "./query";
import { getEpochInfos, getCurrentEpoch } from "./query.rpc.func";
/**
 * EpochInfos provide running epochInfos
 * @name useGetEpochInfos
 * @package osmosis.epochs.v1beta1
 * @see proto service: osmosis.epochs.v1beta1.EpochInfos
 */
export const useGetEpochInfos = buildUseQuery<QueryEpochsInfoRequest, QueryEpochsInfoResponse>({
  builderQueryFn: getEpochInfos,
  queryKeyPrefix: "EpochInfosQuery"
});
/**
 * CurrentEpoch provide current epoch of specified identifier
 * @name useGetCurrentEpoch
 * @package osmosis.epochs.v1beta1
 * @see proto service: osmosis.epochs.v1beta1.CurrentEpoch
 */
export const useGetCurrentEpoch = buildUseQuery<QueryCurrentEpochRequest, QueryCurrentEpochResponse>({
  builderQueryFn: getCurrentEpoch,
  queryKeyPrefix: "CurrentEpochQuery"
});