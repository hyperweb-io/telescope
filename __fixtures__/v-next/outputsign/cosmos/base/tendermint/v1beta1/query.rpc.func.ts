import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../query/v1beta1/pagination";
import { Any, AnyProtoMsg, AnyAmino, AnySDKType } from "../../../../google/protobuf/any";
import { BlockID, BlockIDSDKType } from "../../../../tendermint/types/types";
import { Block, BlockSDKType } from "../../../../tendermint/types/block";
import { NodeInfo, NodeInfoSDKType } from "../../../../tendermint/p2p/types";
import { EndpointOrRpc, buildQuery } from "../../../../helper-func-types";
import { GetNodeInfoRequest, GetNodeInfoRequestSDKType, GetNodeInfoResponse, GetNodeInfoResponseSDKType, GetSyncingRequest, GetSyncingRequestSDKType, GetSyncingResponse, GetSyncingResponseSDKType, GetLatestBlockRequest, GetLatestBlockRequestSDKType, GetLatestBlockResponse, GetLatestBlockResponseSDKType, GetBlockByHeightRequest, GetBlockByHeightRequestSDKType, GetBlockByHeightResponse, GetBlockByHeightResponseSDKType, GetLatestValidatorSetRequest, GetLatestValidatorSetRequestSDKType, GetLatestValidatorSetResponse, GetLatestValidatorSetResponseSDKType, GetValidatorSetByHeightRequest, GetValidatorSetByHeightRequestSDKType, GetValidatorSetByHeightResponse, GetValidatorSetByHeightResponseSDKType } from "./query";
/**
 * GetNodeInfo queries the current node info.
 * @name getGetNodeInfo
 * @package cosmos.base.tendermint.v1beta1
 * @see proto service: cosmos.base.tendermint.v1beta1.GetNodeInfo
 */
export const getGetNodeInfo = buildQuery<GetNodeInfoRequest, GetNodeInfoResponse>({
  encode: GetNodeInfoRequest.encode,
  decode: GetNodeInfoResponse.decode,
  service: "cosmos.base.tendermint.v1beta1.Service",
  method: "GetNodeInfo"
});
/**
 * GetSyncing queries node syncing.
 * @name getGetSyncing
 * @package cosmos.base.tendermint.v1beta1
 * @see proto service: cosmos.base.tendermint.v1beta1.GetSyncing
 */
export const getGetSyncing = buildQuery<GetSyncingRequest, GetSyncingResponse>({
  encode: GetSyncingRequest.encode,
  decode: GetSyncingResponse.decode,
  service: "cosmos.base.tendermint.v1beta1.Service",
  method: "GetSyncing"
});
/**
 * GetLatestBlock returns the latest block.
 * @name getGetLatestBlock
 * @package cosmos.base.tendermint.v1beta1
 * @see proto service: cosmos.base.tendermint.v1beta1.GetLatestBlock
 */
export const getGetLatestBlock = buildQuery<GetLatestBlockRequest, GetLatestBlockResponse>({
  encode: GetLatestBlockRequest.encode,
  decode: GetLatestBlockResponse.decode,
  service: "cosmos.base.tendermint.v1beta1.Service",
  method: "GetLatestBlock"
});
/**
 * GetBlockByHeight queries block for given height.
 * @name getGetBlockByHeight
 * @package cosmos.base.tendermint.v1beta1
 * @see proto service: cosmos.base.tendermint.v1beta1.GetBlockByHeight
 */
export const getGetBlockByHeight = buildQuery<GetBlockByHeightRequest, GetBlockByHeightResponse>({
  encode: GetBlockByHeightRequest.encode,
  decode: GetBlockByHeightResponse.decode,
  service: "cosmos.base.tendermint.v1beta1.Service",
  method: "GetBlockByHeight"
});
/**
 * GetLatestValidatorSet queries latest validator-set.
 * @name getGetLatestValidatorSet
 * @package cosmos.base.tendermint.v1beta1
 * @see proto service: cosmos.base.tendermint.v1beta1.GetLatestValidatorSet
 */
export const getGetLatestValidatorSet = buildQuery<GetLatestValidatorSetRequest, GetLatestValidatorSetResponse>({
  encode: GetLatestValidatorSetRequest.encode,
  decode: GetLatestValidatorSetResponse.decode,
  service: "cosmos.base.tendermint.v1beta1.Service",
  method: "GetLatestValidatorSet"
});
/**
 * GetValidatorSetByHeight queries validator-set at a given height.
 * @name getGetValidatorSetByHeight
 * @package cosmos.base.tendermint.v1beta1
 * @see proto service: cosmos.base.tendermint.v1beta1.GetValidatorSetByHeight
 */
export const getGetValidatorSetByHeight = buildQuery<GetValidatorSetByHeightRequest, GetValidatorSetByHeightResponse>({
  encode: GetValidatorSetByHeightRequest.encode,
  decode: GetValidatorSetByHeightResponse.decode,
  service: "cosmos.base.tendermint.v1beta1.Service",
  method: "GetValidatorSetByHeight"
});