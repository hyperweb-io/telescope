import { PoolParams, PoolParamsSDKType, PoolAsset, PoolAssetSDKType } from "../balancerPool.js";
import { buildTx } from "../../../../../helper-func-types.js";
import { MsgCreateBalancerPool, MsgCreateBalancerPoolSDKType, MsgCreateBalancerPoolResponse, MsgCreateBalancerPoolResponseSDKType } from "./tx.js";
/**
 * @name createBalancerPool
 * @package osmosis.gamm.poolmodels.balancer.v1beta1
 * @see proto service: osmosis.gamm.poolmodels.balancer.v1beta1.CreateBalancerPool
 */
export const createBalancerPool = buildTx<MsgCreateBalancerPool>({
  msg: MsgCreateBalancerPool
});