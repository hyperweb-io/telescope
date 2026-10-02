import { buildUseQuery } from "../../../../react-query";
import type { GetNodeInfoRequest, GetNodeInfoResponse, GetSyncingRequest, GetSyncingResponse, GetLatestBlockRequest, GetLatestBlockResponse, GetBlockByHeightRequest, GetBlockByHeightResponse, GetLatestValidatorSetRequest, GetLatestValidatorSetResponse, GetValidatorSetByHeightRequest, GetValidatorSetByHeightResponse } from "./query";
import { getGetNodeInfo, getGetSyncing, getGetLatestBlock, getGetBlockByHeight, getGetLatestValidatorSet, getGetValidatorSetByHeight } from "./query.rpc.func";
/**
 * GetNodeInfo queries the current node info.
 * @name useGetGetNodeInfo
 * @package cosmos.base.tendermint.v1beta1
 * @see proto service: cosmos.base.tendermint.v1beta1.GetNodeInfo
 */
export const useGetGetNodeInfo = buildUseQuery<GetNodeInfoRequest, GetNodeInfoResponse>({
  builderQueryFn: getGetNodeInfo,
  queryKeyPrefix: "GetNodeInfoQuery"
});
/**
 * GetSyncing queries node syncing.
 * @name useGetGetSyncing
 * @package cosmos.base.tendermint.v1beta1
 * @see proto service: cosmos.base.tendermint.v1beta1.GetSyncing
 */
export const useGetGetSyncing = buildUseQuery<GetSyncingRequest, GetSyncingResponse>({
  builderQueryFn: getGetSyncing,
  queryKeyPrefix: "GetSyncingQuery"
});
/**
 * GetLatestBlock returns the latest block.
 * @name useGetGetLatestBlock
 * @package cosmos.base.tendermint.v1beta1
 * @see proto service: cosmos.base.tendermint.v1beta1.GetLatestBlock
 */
export const useGetGetLatestBlock = buildUseQuery<GetLatestBlockRequest, GetLatestBlockResponse>({
  builderQueryFn: getGetLatestBlock,
  queryKeyPrefix: "GetLatestBlockQuery"
});
/**
 * GetBlockByHeight queries block for given height.
 * @name useGetGetBlockByHeight
 * @package cosmos.base.tendermint.v1beta1
 * @see proto service: cosmos.base.tendermint.v1beta1.GetBlockByHeight
 */
export const useGetGetBlockByHeight = buildUseQuery<GetBlockByHeightRequest, GetBlockByHeightResponse>({
  builderQueryFn: getGetBlockByHeight,
  queryKeyPrefix: "GetBlockByHeightQuery"
});
/**
 * GetLatestValidatorSet queries latest validator-set.
 * @name useGetGetLatestValidatorSet
 * @package cosmos.base.tendermint.v1beta1
 * @see proto service: cosmos.base.tendermint.v1beta1.GetLatestValidatorSet
 */
export const useGetGetLatestValidatorSet = buildUseQuery<GetLatestValidatorSetRequest, GetLatestValidatorSetResponse>({
  builderQueryFn: getGetLatestValidatorSet,
  queryKeyPrefix: "GetLatestValidatorSetQuery"
});
/**
 * GetValidatorSetByHeight queries validator-set at a given height.
 * @name useGetGetValidatorSetByHeight
 * @package cosmos.base.tendermint.v1beta1
 * @see proto service: cosmos.base.tendermint.v1beta1.GetValidatorSetByHeight
 */
export const useGetGetValidatorSetByHeight = buildUseQuery<GetValidatorSetByHeightRequest, GetValidatorSetByHeightResponse>({
  builderQueryFn: getGetValidatorSetByHeight,
  queryKeyPrefix: "GetValidatorSetByHeightQuery"
});