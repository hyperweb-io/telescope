import { buildUseMutation } from "../../../react-query";
import type { MsgJoinPool, MsgExitPool, MsgSwapExactAmountIn, MsgSwapExactAmountOut, MsgJoinSwapExternAmountIn, MsgJoinSwapShareAmountOut, MsgExitSwapExternAmountOut, MsgExitSwapShareAmountIn } from "./tx";
import { joinPool, exitPool, swapExactAmountIn, swapExactAmountOut, joinSwapExternAmountIn, joinSwapShareAmountOut, exitSwapExternAmountOut, exitSwapShareAmountIn } from "./tx.rpc.func";
/**
 * @name useJoinPool
 * @package osmosis.gamm.v1beta1
 * @see proto service: osmosis.gamm.v1beta1.JoinPool
 */
export const useJoinPool = buildUseMutation<MsgJoinPool, Error>({
  builderMutationFn: joinPool
});
/**
 * @name useExitPool
 * @package osmosis.gamm.v1beta1
 * @see proto service: osmosis.gamm.v1beta1.ExitPool
 */
export const useExitPool = buildUseMutation<MsgExitPool, Error>({
  builderMutationFn: exitPool
});
/**
 * @name useSwapExactAmountIn
 * @package osmosis.gamm.v1beta1
 * @see proto service: osmosis.gamm.v1beta1.SwapExactAmountIn
 */
export const useSwapExactAmountIn = buildUseMutation<MsgSwapExactAmountIn, Error>({
  builderMutationFn: swapExactAmountIn
});
/**
 * @name useSwapExactAmountOut
 * @package osmosis.gamm.v1beta1
 * @see proto service: osmosis.gamm.v1beta1.SwapExactAmountOut
 */
export const useSwapExactAmountOut = buildUseMutation<MsgSwapExactAmountOut, Error>({
  builderMutationFn: swapExactAmountOut
});
/**
 * @name useJoinSwapExternAmountIn
 * @package osmosis.gamm.v1beta1
 * @see proto service: osmosis.gamm.v1beta1.JoinSwapExternAmountIn
 */
export const useJoinSwapExternAmountIn = buildUseMutation<MsgJoinSwapExternAmountIn, Error>({
  builderMutationFn: joinSwapExternAmountIn
});
/**
 * @name useJoinSwapShareAmountOut
 * @package osmosis.gamm.v1beta1
 * @see proto service: osmosis.gamm.v1beta1.JoinSwapShareAmountOut
 */
export const useJoinSwapShareAmountOut = buildUseMutation<MsgJoinSwapShareAmountOut, Error>({
  builderMutationFn: joinSwapShareAmountOut
});
/**
 * @name useExitSwapExternAmountOut
 * @package osmosis.gamm.v1beta1
 * @see proto service: osmosis.gamm.v1beta1.ExitSwapExternAmountOut
 */
export const useExitSwapExternAmountOut = buildUseMutation<MsgExitSwapExternAmountOut, Error>({
  builderMutationFn: exitSwapExternAmountOut
});
/**
 * @name useExitSwapShareAmountIn
 * @package osmosis.gamm.v1beta1
 * @see proto service: osmosis.gamm.v1beta1.ExitSwapShareAmountIn
 */
export const useExitSwapShareAmountIn = buildUseMutation<MsgExitSwapShareAmountIn, Error>({
  builderMutationFn: exitSwapShareAmountIn
});