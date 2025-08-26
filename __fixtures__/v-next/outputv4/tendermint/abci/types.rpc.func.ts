import { Timestamp, TimestampSDKType } from "../../google/protobuf/timestamp.js";
import { Header, HeaderSDKType } from "../types/types.js";
import { ProofOps, ProofOpsSDKType } from "../crypto/proof.js";
import { EvidenceParams, EvidenceParamsSDKType, ValidatorParams, ValidatorParamsSDKType, VersionParams, VersionParamsSDKType } from "../types/params.js";
import { PublicKey, PublicKeySDKType } from "../crypto/keys.js";
import { EndpointOrRpc, buildQuery } from "../../helper-func-types.js";
import { RequestEcho, RequestEchoSDKType, ResponseEcho, ResponseEchoSDKType, RequestFlush, RequestFlushSDKType, ResponseFlush, ResponseFlushSDKType, RequestInfo, RequestInfoSDKType, ResponseInfo, ResponseInfoSDKType, RequestSetOption, RequestSetOptionSDKType, ResponseSetOption, ResponseSetOptionSDKType, RequestDeliverTx, RequestDeliverTxSDKType, ResponseDeliverTx, ResponseDeliverTxSDKType, RequestCheckTx, RequestCheckTxSDKType, ResponseCheckTx, ResponseCheckTxSDKType, RequestQuery, RequestQuerySDKType, ResponseQuery, ResponseQuerySDKType, RequestCommit, RequestCommitSDKType, ResponseCommit, ResponseCommitSDKType, RequestInitChain, RequestInitChainSDKType, ResponseInitChain, ResponseInitChainSDKType, RequestBeginBlock, RequestBeginBlockSDKType, ResponseBeginBlock, ResponseBeginBlockSDKType, RequestEndBlock, RequestEndBlockSDKType, ResponseEndBlock, ResponseEndBlockSDKType, RequestListSnapshots, RequestListSnapshotsSDKType, ResponseListSnapshots, ResponseListSnapshotsSDKType, RequestOfferSnapshot, RequestOfferSnapshotSDKType, ResponseOfferSnapshot, ResponseOfferSnapshotSDKType, RequestLoadSnapshotChunk, RequestLoadSnapshotChunkSDKType, ResponseLoadSnapshotChunk, ResponseLoadSnapshotChunkSDKType, RequestApplySnapshotChunk, RequestApplySnapshotChunkSDKType, ResponseApplySnapshotChunk, ResponseApplySnapshotChunkSDKType } from "./types.js";
/**
 * @name getEcho
 * @package tendermint.abci
 * @see proto service: tendermint.abci.Echo
 */
export const getEcho = buildQuery<RequestEcho, ResponseEcho>({
  encode: RequestEcho.encode,
  decode: ResponseEcho.decode,
  service: "tendermint.abci.ABCIApplication",
  method: "Echo"
});
/**
 * @name getFlush
 * @package tendermint.abci
 * @see proto service: tendermint.abci.Flush
 */
export const getFlush = buildQuery<RequestFlush, ResponseFlush>({
  encode: RequestFlush.encode,
  decode: ResponseFlush.decode,
  service: "tendermint.abci.ABCIApplication",
  method: "Flush"
});
/**
 * @name getInfo
 * @package tendermint.abci
 * @see proto service: tendermint.abci.Info
 */
export const getInfo = buildQuery<RequestInfo, ResponseInfo>({
  encode: RequestInfo.encode,
  decode: ResponseInfo.decode,
  service: "tendermint.abci.ABCIApplication",
  method: "Info"
});
/**
 * @name getSetOption
 * @package tendermint.abci
 * @see proto service: tendermint.abci.SetOption
 */
export const getSetOption = buildQuery<RequestSetOption, ResponseSetOption>({
  encode: RequestSetOption.encode,
  decode: ResponseSetOption.decode,
  service: "tendermint.abci.ABCIApplication",
  method: "SetOption"
});
/**
 * @name getDeliverTx
 * @package tendermint.abci
 * @see proto service: tendermint.abci.DeliverTx
 */
export const getDeliverTx = buildQuery<RequestDeliverTx, ResponseDeliverTx>({
  encode: RequestDeliverTx.encode,
  decode: ResponseDeliverTx.decode,
  service: "tendermint.abci.ABCIApplication",
  method: "DeliverTx"
});
/**
 * @name getCheckTx
 * @package tendermint.abci
 * @see proto service: tendermint.abci.CheckTx
 */
export const getCheckTx = buildQuery<RequestCheckTx, ResponseCheckTx>({
  encode: RequestCheckTx.encode,
  decode: ResponseCheckTx.decode,
  service: "tendermint.abci.ABCIApplication",
  method: "CheckTx"
});
/**
 * @name getQuery
 * @package tendermint.abci
 * @see proto service: tendermint.abci.Query
 */
export const getQuery = buildQuery<RequestQuery, ResponseQuery>({
  encode: RequestQuery.encode,
  decode: ResponseQuery.decode,
  service: "tendermint.abci.ABCIApplication",
  method: "Query"
});
/**
 * @name getCommit
 * @package tendermint.abci
 * @see proto service: tendermint.abci.Commit
 */
export const getCommit = buildQuery<RequestCommit, ResponseCommit>({
  encode: RequestCommit.encode,
  decode: ResponseCommit.decode,
  service: "tendermint.abci.ABCIApplication",
  method: "Commit"
});
/**
 * @name getInitChain
 * @package tendermint.abci
 * @see proto service: tendermint.abci.InitChain
 */
export const getInitChain = buildQuery<RequestInitChain, ResponseInitChain>({
  encode: RequestInitChain.encode,
  decode: ResponseInitChain.decode,
  service: "tendermint.abci.ABCIApplication",
  method: "InitChain"
});
/**
 * @name getBeginBlock
 * @package tendermint.abci
 * @see proto service: tendermint.abci.BeginBlock
 */
export const getBeginBlock = buildQuery<RequestBeginBlock, ResponseBeginBlock>({
  encode: RequestBeginBlock.encode,
  decode: ResponseBeginBlock.decode,
  service: "tendermint.abci.ABCIApplication",
  method: "BeginBlock"
});
/**
 * @name getEndBlock
 * @package tendermint.abci
 * @see proto service: tendermint.abci.EndBlock
 */
export const getEndBlock = buildQuery<RequestEndBlock, ResponseEndBlock>({
  encode: RequestEndBlock.encode,
  decode: ResponseEndBlock.decode,
  service: "tendermint.abci.ABCIApplication",
  method: "EndBlock"
});
/**
 * @name getListSnapshots
 * @package tendermint.abci
 * @see proto service: tendermint.abci.ListSnapshots
 */
export const getListSnapshots = buildQuery<RequestListSnapshots, ResponseListSnapshots>({
  encode: RequestListSnapshots.encode,
  decode: ResponseListSnapshots.decode,
  service: "tendermint.abci.ABCIApplication",
  method: "ListSnapshots"
});
/**
 * @name getOfferSnapshot
 * @package tendermint.abci
 * @see proto service: tendermint.abci.OfferSnapshot
 */
export const getOfferSnapshot = buildQuery<RequestOfferSnapshot, ResponseOfferSnapshot>({
  encode: RequestOfferSnapshot.encode,
  decode: ResponseOfferSnapshot.decode,
  service: "tendermint.abci.ABCIApplication",
  method: "OfferSnapshot"
});
/**
 * @name getLoadSnapshotChunk
 * @package tendermint.abci
 * @see proto service: tendermint.abci.LoadSnapshotChunk
 */
export const getLoadSnapshotChunk = buildQuery<RequestLoadSnapshotChunk, ResponseLoadSnapshotChunk>({
  encode: RequestLoadSnapshotChunk.encode,
  decode: ResponseLoadSnapshotChunk.decode,
  service: "tendermint.abci.ABCIApplication",
  method: "LoadSnapshotChunk"
});
/**
 * @name getApplySnapshotChunk
 * @package tendermint.abci
 * @see proto service: tendermint.abci.ApplySnapshotChunk
 */
export const getApplySnapshotChunk = buildQuery<RequestApplySnapshotChunk, ResponseApplySnapshotChunk>({
  encode: RequestApplySnapshotChunk.encode,
  decode: ResponseApplySnapshotChunk.decode,
  service: "tendermint.abci.ABCIApplication",
  method: "ApplySnapshotChunk"
});