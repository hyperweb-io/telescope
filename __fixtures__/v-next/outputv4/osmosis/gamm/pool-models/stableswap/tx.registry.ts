import { PoolParams, PoolParamsSDKType } from "./stableswap_pool.js";
import { Coin, CoinSDKType } from "../../../../cosmos/base/v1beta1/coin.js";
import { TelescopeGeneratedType } from "../../../../types.js";
import { MsgCreateStableswapPool, MsgCreateStableswapPoolSDKType, MsgStableSwapAdjustScalingFactors, MsgStableSwapAdjustScalingFactorsSDKType } from "./tx.js";
export const registry: ReadonlyArray<[string, TelescopeGeneratedType<any, any, any>]> = [["/osmosis.gamm.poolmodels.stableswap.v1beta1.MsgCreateStableswapPool", MsgCreateStableswapPool], ["/osmosis.gamm.poolmodels.stableswap.v1beta1.MsgStableSwapAdjustScalingFactors", MsgStableSwapAdjustScalingFactors]];
export const MessageComposer = {
  encoded: {
    createStableswapPool(value: MsgCreateStableswapPool) {
      return {
        typeUrl: "/osmosis.gamm.poolmodels.stableswap.v1beta1.MsgCreateStableswapPool",
        value: MsgCreateStableswapPool.encode(value).finish()
      };
    },
    stableSwapAdjustScalingFactors(value: MsgStableSwapAdjustScalingFactors) {
      return {
        typeUrl: "/osmosis.gamm.poolmodels.stableswap.v1beta1.MsgStableSwapAdjustScalingFactors",
        value: MsgStableSwapAdjustScalingFactors.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    createStableswapPool(value: MsgCreateStableswapPool) {
      return {
        typeUrl: "/osmosis.gamm.poolmodels.stableswap.v1beta1.MsgCreateStableswapPool",
        value
      };
    },
    stableSwapAdjustScalingFactors(value: MsgStableSwapAdjustScalingFactors) {
      return {
        typeUrl: "/osmosis.gamm.poolmodels.stableswap.v1beta1.MsgStableSwapAdjustScalingFactors",
        value
      };
    }
  },
  toJSON: {
    createStableswapPool(value: MsgCreateStableswapPool) {
      return {
        typeUrl: "/osmosis.gamm.poolmodels.stableswap.v1beta1.MsgCreateStableswapPool",
        value: MsgCreateStableswapPool.toJSON(value)
      };
    },
    stableSwapAdjustScalingFactors(value: MsgStableSwapAdjustScalingFactors) {
      return {
        typeUrl: "/osmosis.gamm.poolmodels.stableswap.v1beta1.MsgStableSwapAdjustScalingFactors",
        value: MsgStableSwapAdjustScalingFactors.toJSON(value)
      };
    }
  },
  fromJSON: {
    createStableswapPool(value: any) {
      return {
        typeUrl: "/osmosis.gamm.poolmodels.stableswap.v1beta1.MsgCreateStableswapPool",
        value: MsgCreateStableswapPool.fromJSON(value)
      };
    },
    stableSwapAdjustScalingFactors(value: any) {
      return {
        typeUrl: "/osmosis.gamm.poolmodels.stableswap.v1beta1.MsgStableSwapAdjustScalingFactors",
        value: MsgStableSwapAdjustScalingFactors.fromJSON(value)
      };
    }
  },
  fromPartial: {
    createStableswapPool(value: MsgCreateStableswapPool) {
      return {
        typeUrl: "/osmosis.gamm.poolmodels.stableswap.v1beta1.MsgCreateStableswapPool",
        value: MsgCreateStableswapPool.fromPartial(value)
      };
    },
    stableSwapAdjustScalingFactors(value: MsgStableSwapAdjustScalingFactors) {
      return {
        typeUrl: "/osmosis.gamm.poolmodels.stableswap.v1beta1.MsgStableSwapAdjustScalingFactors",
        value: MsgStableSwapAdjustScalingFactors.fromPartial(value)
      };
    }
  }
};