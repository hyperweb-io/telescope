import type { TelescopeGeneratedType } from "../../../../types";
import { MsgCreateStableswapPool, MsgStableSwapAdjustScalingFactors } from "./tx";
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