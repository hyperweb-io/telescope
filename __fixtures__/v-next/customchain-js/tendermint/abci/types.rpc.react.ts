import { buildUseQuery } from "../../react-query";
import type { RequestEcho, ResponseEcho, RequestFlush, ResponseFlush, RequestInfo, ResponseInfo, RequestSetOption, ResponseSetOption, RequestDeliverTx, ResponseDeliverTx, RequestCheckTx, ResponseCheckTx, RequestQuery, ResponseQuery, RequestCommit, ResponseCommit, RequestInitChain, ResponseInitChain, RequestBeginBlock, ResponseBeginBlock, RequestEndBlock, ResponseEndBlock, RequestListSnapshots, ResponseListSnapshots, RequestOfferSnapshot, ResponseOfferSnapshot, RequestLoadSnapshotChunk, ResponseLoadSnapshotChunk, RequestApplySnapshotChunk, ResponseApplySnapshotChunk } from "./types";
import { getEcho, getFlush, getInfo, getSetOption, getDeliverTx, getCheckTx, getQuery, getCommit, getInitChain, getBeginBlock, getEndBlock, getListSnapshots, getOfferSnapshot, getLoadSnapshotChunk, getApplySnapshotChunk } from "./types.rpc.func";
/**
 * @name useGetEcho
 * @package tendermint.abci
 * @see proto service: tendermint.abci.Echo
 */
export const useGetEcho = buildUseQuery<RequestEcho, ResponseEcho>({
  builderQueryFn: getEcho,
  queryKeyPrefix: "EchoQuery"
});
/**
 * @name useGetFlush
 * @package tendermint.abci
 * @see proto service: tendermint.abci.Flush
 */
export const useGetFlush = buildUseQuery<RequestFlush, ResponseFlush>({
  builderQueryFn: getFlush,
  queryKeyPrefix: "FlushQuery"
});
/**
 * @name useGetInfo
 * @package tendermint.abci
 * @see proto service: tendermint.abci.Info
 */
export const useGetInfo = buildUseQuery<RequestInfo, ResponseInfo>({
  builderQueryFn: getInfo,
  queryKeyPrefix: "InfoQuery"
});
/**
 * @name useGetSetOption
 * @package tendermint.abci
 * @see proto service: tendermint.abci.SetOption
 */
export const useGetSetOption = buildUseQuery<RequestSetOption, ResponseSetOption>({
  builderQueryFn: getSetOption,
  queryKeyPrefix: "SetOptionQuery"
});
/**
 * @name useGetDeliverTx
 * @package tendermint.abci
 * @see proto service: tendermint.abci.DeliverTx
 */
export const useGetDeliverTx = buildUseQuery<RequestDeliverTx, ResponseDeliverTx>({
  builderQueryFn: getDeliverTx,
  queryKeyPrefix: "DeliverTxQuery"
});
/**
 * @name useGetCheckTx
 * @package tendermint.abci
 * @see proto service: tendermint.abci.CheckTx
 */
export const useGetCheckTx = buildUseQuery<RequestCheckTx, ResponseCheckTx>({
  builderQueryFn: getCheckTx,
  queryKeyPrefix: "CheckTxQuery"
});
/**
 * @name useGetQuery
 * @package tendermint.abci
 * @see proto service: tendermint.abci.Query
 */
export const useGetQuery = buildUseQuery<RequestQuery, ResponseQuery>({
  builderQueryFn: getQuery,
  queryKeyPrefix: "QueryQuery"
});
/**
 * @name useGetCommit
 * @package tendermint.abci
 * @see proto service: tendermint.abci.Commit
 */
export const useGetCommit = buildUseQuery<RequestCommit, ResponseCommit>({
  builderQueryFn: getCommit,
  queryKeyPrefix: "CommitQuery"
});
/**
 * @name useGetInitChain
 * @package tendermint.abci
 * @see proto service: tendermint.abci.InitChain
 */
export const useGetInitChain = buildUseQuery<RequestInitChain, ResponseInitChain>({
  builderQueryFn: getInitChain,
  queryKeyPrefix: "InitChainQuery"
});
/**
 * @name useGetBeginBlock
 * @package tendermint.abci
 * @see proto service: tendermint.abci.BeginBlock
 */
export const useGetBeginBlock = buildUseQuery<RequestBeginBlock, ResponseBeginBlock>({
  builderQueryFn: getBeginBlock,
  queryKeyPrefix: "BeginBlockQuery"
});
/**
 * @name useGetEndBlock
 * @package tendermint.abci
 * @see proto service: tendermint.abci.EndBlock
 */
export const useGetEndBlock = buildUseQuery<RequestEndBlock, ResponseEndBlock>({
  builderQueryFn: getEndBlock,
  queryKeyPrefix: "EndBlockQuery"
});
/**
 * @name useGetListSnapshots
 * @package tendermint.abci
 * @see proto service: tendermint.abci.ListSnapshots
 */
export const useGetListSnapshots = buildUseQuery<RequestListSnapshots, ResponseListSnapshots>({
  builderQueryFn: getListSnapshots,
  queryKeyPrefix: "ListSnapshotsQuery"
});
/**
 * @name useGetOfferSnapshot
 * @package tendermint.abci
 * @see proto service: tendermint.abci.OfferSnapshot
 */
export const useGetOfferSnapshot = buildUseQuery<RequestOfferSnapshot, ResponseOfferSnapshot>({
  builderQueryFn: getOfferSnapshot,
  queryKeyPrefix: "OfferSnapshotQuery"
});
/**
 * @name useGetLoadSnapshotChunk
 * @package tendermint.abci
 * @see proto service: tendermint.abci.LoadSnapshotChunk
 */
export const useGetLoadSnapshotChunk = buildUseQuery<RequestLoadSnapshotChunk, ResponseLoadSnapshotChunk>({
  builderQueryFn: getLoadSnapshotChunk,
  queryKeyPrefix: "LoadSnapshotChunkQuery"
});
/**
 * @name useGetApplySnapshotChunk
 * @package tendermint.abci
 * @see proto service: tendermint.abci.ApplySnapshotChunk
 */
export const useGetApplySnapshotChunk = buildUseQuery<RequestApplySnapshotChunk, ResponseApplySnapshotChunk>({
  builderQueryFn: getApplySnapshotChunk,
  queryKeyPrefix: "ApplySnapshotChunkQuery"
});