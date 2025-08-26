import { PoolParams, PoolParamsSDKType } from "./stableswap_pool";
import { Coin, CoinSDKType } from "../../../../cosmos/base/v1beta1/coin";
import { buildTx } from "../../../../helper-func-types";
import { MsgCreateStableswapPool, MsgCreateStableswapPoolSDKType, MsgCreateStableswapPoolResponse, MsgCreateStableswapPoolResponseSDKType, MsgStableSwapAdjustScalingFactors, MsgStableSwapAdjustScalingFactorsSDKType, MsgStableSwapAdjustScalingFactorsResponse, MsgStableSwapAdjustScalingFactorsResponseSDKType } from "./tx";
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