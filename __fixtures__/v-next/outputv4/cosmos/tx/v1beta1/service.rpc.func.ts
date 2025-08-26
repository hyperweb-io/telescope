import { Tx, TxSDKType } from "./tx.js";
import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../base/query/v1beta1/pagination.js";
import { TxResponse, TxResponseSDKType, GasInfo, GasInfoSDKType, Result, ResultSDKType } from "../../base/abci/v1beta1/abci.js";
import { BlockID, BlockIDSDKType } from "../../../tendermint/types/types.js";
import { Block, BlockSDKType } from "../../../tendermint/types/block.js";
import { EndpointOrRpc, buildQuery } from "../../../helper-func-types.js";
import { SimulateRequest, SimulateRequestSDKType, SimulateResponse, SimulateResponseSDKType, GetTxRequest, GetTxRequestSDKType, GetTxResponse, GetTxResponseSDKType, BroadcastTxRequest, BroadcastTxRequestSDKType, BroadcastTxResponse, BroadcastTxResponseSDKType, GetTxsEventRequest, GetTxsEventRequestSDKType, GetTxsEventResponse, GetTxsEventResponseSDKType, GetBlockWithTxsRequest, GetBlockWithTxsRequestSDKType, GetBlockWithTxsResponse, GetBlockWithTxsResponseSDKType } from "./service.js";
/**
 * Simulate simulates executing a transaction for estimating gas usage.
 * @name getSimulate
 * @package cosmos.tx.v1beta1
 * @see proto service: cosmos.tx.v1beta1.Simulate
 */
export const getSimulate = buildQuery<SimulateRequest, SimulateResponse>({
  encode: SimulateRequest.encode,
  decode: SimulateResponse.decode,
  service: "cosmos.tx.v1beta1.Service",
  method: "Simulate"
});
/**
 * GetTx fetches a tx by hash.
 * @name getGetTx
 * @package cosmos.tx.v1beta1
 * @see proto service: cosmos.tx.v1beta1.GetTx
 */
export const getGetTx = buildQuery<GetTxRequest, GetTxResponse>({
  encode: GetTxRequest.encode,
  decode: GetTxResponse.decode,
  service: "cosmos.tx.v1beta1.Service",
  method: "GetTx"
});
/**
 * BroadcastTx broadcast transaction.
 * @name getBroadcastTx
 * @package cosmos.tx.v1beta1
 * @see proto service: cosmos.tx.v1beta1.BroadcastTx
 */
export const getBroadcastTx = buildQuery<BroadcastTxRequest, BroadcastTxResponse>({
  encode: BroadcastTxRequest.encode,
  decode: BroadcastTxResponse.decode,
  service: "cosmos.tx.v1beta1.Service",
  method: "BroadcastTx"
});
/**
 * GetTxsEvent fetches txs by event.
 * @name getGetTxsEvent
 * @package cosmos.tx.v1beta1
 * @see proto service: cosmos.tx.v1beta1.GetTxsEvent
 */
export const getGetTxsEvent = buildQuery<GetTxsEventRequest, GetTxsEventResponse>({
  encode: GetTxsEventRequest.encode,
  decode: GetTxsEventResponse.decode,
  service: "cosmos.tx.v1beta1.Service",
  method: "GetTxsEvent"
});
/**
 * GetBlockWithTxs fetches a block with decoded txs.
 * 
 * Since: cosmos-sdk 0.45.2
 * @name getGetBlockWithTxs
 * @package cosmos.tx.v1beta1
 * @see proto service: cosmos.tx.v1beta1.GetBlockWithTxs
 */
export const getGetBlockWithTxs = buildQuery<GetBlockWithTxsRequest, GetBlockWithTxsResponse>({
  encode: GetBlockWithTxsRequest.encode,
  decode: GetBlockWithTxsResponse.decode,
  service: "cosmos.tx.v1beta1.Service",
  method: "GetBlockWithTxs"
});