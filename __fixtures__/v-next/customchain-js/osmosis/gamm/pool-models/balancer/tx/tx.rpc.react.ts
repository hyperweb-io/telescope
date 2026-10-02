import { buildUseMutation } from "../../../../../react-query";
import type { MsgCreateBalancerPool } from "./tx";
import { createBalancerPool } from "./tx.rpc.func";
/**
 * @name useCreateBalancerPool
 * @package osmosis.gamm.poolmodels.balancer.v1beta1
 * @see proto service: osmosis.gamm.poolmodels.balancer.v1beta1.CreateBalancerPool
 */
export const useCreateBalancerPool = buildUseMutation<MsgCreateBalancerPool, Error>({
  builderMutationFn: createBalancerPool
});