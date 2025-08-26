import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin.js";
import { buildTx } from "../../../helper-func-types.js";
import { MsgJoinPool, MsgJoinPoolSDKType, MsgJoinPoolResponse, MsgJoinPoolResponseSDKType, MsgExitPool, MsgExitPoolSDKType, MsgExitPoolResponse, MsgExitPoolResponseSDKType, MsgSwapExactAmountIn, MsgSwapExactAmountInSDKType, MsgSwapExactAmountInResponse, MsgSwapExactAmountInResponseSDKType, MsgSwapExactAmountOut, MsgSwapExactAmountOutSDKType, MsgSwapExactAmountOutResponse, MsgSwapExactAmountOutResponseSDKType, MsgJoinSwapExternAmountIn, MsgJoinSwapExternAmountInSDKType, MsgJoinSwapExternAmountInResponse, MsgJoinSwapExternAmountInResponseSDKType, MsgJoinSwapShareAmountOut, MsgJoinSwapShareAmountOutSDKType, MsgJoinSwapShareAmountOutResponse, MsgJoinSwapShareAmountOutResponseSDKType, MsgExitSwapExternAmountOut, MsgExitSwapExternAmountOutSDKType, MsgExitSwapExternAmountOutResponse, MsgExitSwapExternAmountOutResponseSDKType, MsgExitSwapShareAmountIn, MsgExitSwapShareAmountInSDKType, MsgExitSwapShareAmountInResponse, MsgExitSwapShareAmountInResponseSDKType } from "./tx.js";
/**
 * @name joinPool
 * @package osmosis.gamm.v1beta1
 * @see proto service: osmosis.gamm.v1beta1.JoinPool
 */
export const joinPool = buildTx<MsgJoinPool>({
  msg: MsgJoinPool
});
/**
 * @name exitPool
 * @package osmosis.gamm.v1beta1
 * @see proto service: osmosis.gamm.v1beta1.ExitPool
 */
export const exitPool = buildTx<MsgExitPool>({
  msg: MsgExitPool
});
/**
 * @name swapExactAmountIn
 * @package osmosis.gamm.v1beta1
 * @see proto service: osmosis.gamm.v1beta1.SwapExactAmountIn
 */
export const swapExactAmountIn = buildTx<MsgSwapExactAmountIn>({
  msg: MsgSwapExactAmountIn
});
/**
 * @name swapExactAmountOut
 * @package osmosis.gamm.v1beta1
 * @see proto service: osmosis.gamm.v1beta1.SwapExactAmountOut
 */
export const swapExactAmountOut = buildTx<MsgSwapExactAmountOut>({
  msg: MsgSwapExactAmountOut
});
/**
 * @name joinSwapExternAmountIn
 * @package osmosis.gamm.v1beta1
 * @see proto service: osmosis.gamm.v1beta1.JoinSwapExternAmountIn
 */
export const joinSwapExternAmountIn = buildTx<MsgJoinSwapExternAmountIn>({
  msg: MsgJoinSwapExternAmountIn
});
/**
 * @name joinSwapShareAmountOut
 * @package osmosis.gamm.v1beta1
 * @see proto service: osmosis.gamm.v1beta1.JoinSwapShareAmountOut
 */
export const joinSwapShareAmountOut = buildTx<MsgJoinSwapShareAmountOut>({
  msg: MsgJoinSwapShareAmountOut
});
/**
 * @name exitSwapExternAmountOut
 * @package osmosis.gamm.v1beta1
 * @see proto service: osmosis.gamm.v1beta1.ExitSwapExternAmountOut
 */
export const exitSwapExternAmountOut = buildTx<MsgExitSwapExternAmountOut>({
  msg: MsgExitSwapExternAmountOut
});
/**
 * @name exitSwapShareAmountIn
 * @package osmosis.gamm.v1beta1
 * @see proto service: osmosis.gamm.v1beta1.ExitSwapShareAmountIn
 */
export const exitSwapShareAmountIn = buildTx<MsgExitSwapShareAmountIn>({
  msg: MsgExitSwapShareAmountIn
});