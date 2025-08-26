import { PoolParams, PoolParamsSDKType, PoolAsset, PoolAssetSDKType } from "../balancerPool.js";
import { TelescopeGeneratedType } from "../../../../../types.js";
import { MsgCreateBalancerPool, MsgCreateBalancerPoolSDKType } from "./tx.js";
export const registry: ReadonlyArray<[string, TelescopeGeneratedType<any, any, any>]> = [["/osmosis.gamm.poolmodels.balancer.v1beta1.MsgCreateBalancerPool", MsgCreateBalancerPool]];
export const MessageComposer = {
  encoded: {
    createBalancerPool(value: MsgCreateBalancerPool) {
      return {
        typeUrl: "/osmosis.gamm.poolmodels.balancer.v1beta1.MsgCreateBalancerPool",
        value: MsgCreateBalancerPool.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    createBalancerPool(value: MsgCreateBalancerPool) {
      return {
        typeUrl: "/osmosis.gamm.poolmodels.balancer.v1beta1.MsgCreateBalancerPool",
        value
      };
    }
  },
  toJSON: {
    createBalancerPool(value: MsgCreateBalancerPool) {
      return {
        typeUrl: "/osmosis.gamm.poolmodels.balancer.v1beta1.MsgCreateBalancerPool",
        value: MsgCreateBalancerPool.toJSON(value)
      };
    }
  },
  fromJSON: {
    createBalancerPool(value: any) {
      return {
        typeUrl: "/osmosis.gamm.poolmodels.balancer.v1beta1.MsgCreateBalancerPool",
        value: MsgCreateBalancerPool.fromJSON(value)
      };
    }
  },
  fromPartial: {
    createBalancerPool(value: MsgCreateBalancerPool) {
      return {
        typeUrl: "/osmosis.gamm.poolmodels.balancer.v1beta1.MsgCreateBalancerPool",
        value: MsgCreateBalancerPool.fromPartial(value)
      };
    }
  }
};