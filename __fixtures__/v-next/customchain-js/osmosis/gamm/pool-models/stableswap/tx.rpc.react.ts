import { buildUseMutation } from "../../../../react-query";
import type { MsgCreateStableswapPool, MsgStableSwapAdjustScalingFactors } from "./tx";
import { createStableswapPool, stableSwapAdjustScalingFactors } from "./tx.rpc.func";
/**
 * @name useCreateStableswapPool
 * @package osmosis.gamm.poolmodels.stableswap.v1beta1
 * @see proto service: osmosis.gamm.poolmodels.stableswap.v1beta1.CreateStableswapPool
 */
export const useCreateStableswapPool = buildUseMutation<MsgCreateStableswapPool, Error>({
  builderMutationFn: createStableswapPool
});
/**
 * @name useStableSwapAdjustScalingFactors
 * @package osmosis.gamm.poolmodels.stableswap.v1beta1
 * @see proto service: osmosis.gamm.poolmodels.stableswap.v1beta1.StableSwapAdjustScalingFactors
 */
export const useStableSwapAdjustScalingFactors = buildUseMutation<MsgStableSwapAdjustScalingFactors, Error>({
  builderMutationFn: stableSwapAdjustScalingFactors
});