import { SwapAmountInRoute, SwapAmountInRouteSDKType, SwapAmountOutRoute, SwapAmountOutRouteSDKType } from "./swap_route";
import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { buildTx } from "../../../helper-func-types";
import { MsgSwapExactAmountIn, MsgSwapExactAmountInSDKType, MsgSwapExactAmountInResponse, MsgSwapExactAmountInResponseSDKType, MsgSwapExactAmountOut, MsgSwapExactAmountOutSDKType, MsgSwapExactAmountOutResponse, MsgSwapExactAmountOutResponseSDKType } from "./tx";
/**
 * @name swapExactAmountIn
 * @package osmosis.poolmanager.v1beta1
 * @see proto service: osmosis.poolmanager.v1beta1.SwapExactAmountIn
 */
export const swapExactAmountIn = buildTx<MsgSwapExactAmountIn>({
  msg: MsgSwapExactAmountIn
});
/**
 * @name swapExactAmountOut
 * @package osmosis.poolmanager.v1beta1
 * @see proto service: osmosis.poolmanager.v1beta1.SwapExactAmountOut
 */
export const swapExactAmountOut = buildTx<MsgSwapExactAmountOut>({
  msg: MsgSwapExactAmountOut
});