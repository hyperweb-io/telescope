import { PoolParams, PoolParamsSDKType, PoolAsset, PoolAssetSDKType } from "../balancerPool";
import { buildTx } from "../../../../../helper-func-types";
import { MsgCreateBalancerPool, MsgCreateBalancerPoolSDKType, MsgCreateBalancerPoolResponse, MsgCreateBalancerPoolResponseSDKType } from "./tx";
/**
 * @name createBalancerPool
 * @package osmosis.gamm.poolmodels.balancer.v1beta1
 * @see proto service: osmosis.gamm.poolmodels.balancer.v1beta1.CreateBalancerPool
 */
export const createBalancerPool = buildTx<MsgCreateBalancerPool>({
  msg: MsgCreateBalancerPool
});