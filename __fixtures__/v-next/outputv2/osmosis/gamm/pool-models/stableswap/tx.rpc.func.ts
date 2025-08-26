import { buildTx } from "../../../../helper-func-types";
import { MsgCreateStableswapPool, MsgStableSwapAdjustScalingFactors } from "./tx";
/**
 * @name createStableswapPool
 * @package osmosis.gamm.poolmodels.stableswap.v1beta1
 * @see proto service: osmosis.gamm.poolmodels.stableswap.v1beta1.CreateStableswapPool
 */
export const createStableswapPool = buildTx<MsgCreateStableswapPool>({
  msg: MsgCreateStableswapPool
});
/**
 * @name stableSwapAdjustScalingFactors
 * @package osmosis.gamm.poolmodels.stableswap.v1beta1
 * @see proto service: osmosis.gamm.poolmodels.stableswap.v1beta1.StableSwapAdjustScalingFactors
 */
export const stableSwapAdjustScalingFactors = buildTx<MsgStableSwapAdjustScalingFactors>({
  msg: MsgStableSwapAdjustScalingFactors
});