import { buildUseQuery } from "../../../react-query";
import type { SimulateRequest, SimulateResponse, GetTxRequest, GetTxResponse, BroadcastTxRequest, BroadcastTxResponse, GetTxsEventRequest, GetTxsEventResponse, GetBlockWithTxsRequest, GetBlockWithTxsResponse } from "./service";
import { getSimulate, getGetTx, getBroadcastTx, getGetTxsEvent, getGetBlockWithTxs } from "./service.rpc.func";
/**
 * Simulate simulates executing a transaction for estimating gas usage.
 * @name useGetSimulate
 * @package cosmos.tx.v1beta1
 * @see proto service: cosmos.tx.v1beta1.Simulate
 */
export const useGetSimulate = buildUseQuery<SimulateRequest, SimulateResponse>({
  builderQueryFn: getSimulate,
  queryKeyPrefix: "SimulateQuery"
});
/**
 * GetTx fetches a tx by hash.
 * @name useGetGetTx
 * @package cosmos.tx.v1beta1
 * @see proto service: cosmos.tx.v1beta1.GetTx
 */
export const useGetGetTx = buildUseQuery<GetTxRequest, GetTxResponse>({
  builderQueryFn: getGetTx,
  queryKeyPrefix: "GetTxQuery"
});
/**
 * BroadcastTx broadcast transaction.
 * @name useGetBroadcastTx
 * @package cosmos.tx.v1beta1
 * @see proto service: cosmos.tx.v1beta1.BroadcastTx
 */
export const useGetBroadcastTx = buildUseQuery<BroadcastTxRequest, BroadcastTxResponse>({
  builderQueryFn: getBroadcastTx,
  queryKeyPrefix: "BroadcastTxQuery"
});
/**
 * GetTxsEvent fetches txs by event.
 * @name useGetGetTxsEvent
 * @package cosmos.tx.v1beta1
 * @see proto service: cosmos.tx.v1beta1.GetTxsEvent
 */
export const useGetGetTxsEvent = buildUseQuery<GetTxsEventRequest, GetTxsEventResponse>({
  builderQueryFn: getGetTxsEvent,
  queryKeyPrefix: "GetTxsEventQuery"
});
/**
 * GetBlockWithTxs fetches a block with decoded txs.
 * 
 * Since: cosmos-sdk 0.45.2
 * @name useGetGetBlockWithTxs
 * @package cosmos.tx.v1beta1
 * @see proto service: cosmos.tx.v1beta1.GetBlockWithTxs
 */
export const useGetGetBlockWithTxs = buildUseQuery<GetBlockWithTxsRequest, GetBlockWithTxsResponse>({
  builderQueryFn: getGetBlockWithTxs,
  queryKeyPrefix: "GetBlockWithTxsQuery"
});