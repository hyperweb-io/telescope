import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin.js";
import { buildTx } from "../../../helper-func-types.js";
import { MsgConvertCoin, MsgConvertCoinSDKType, MsgConvertCoinResponse, MsgConvertCoinResponseSDKType, MsgConvertERC20, MsgConvertERC20SDKType, MsgConvertERC20Response, MsgConvertERC20ResponseSDKType } from "./tx.js";
/**
 * ConvertCoin mints a ERC20 representation of the native Cosmos coin denom
 * that is registered on the token mapping.
 * @name convertCoin
 * @package evmos.erc20.v1
 * @see proto service: evmos.erc20.v1.ConvertCoin
 */
export const convertCoin = buildTx<MsgConvertCoin>({
  msg: MsgConvertCoin
});
/**
 * ConvertERC20 mints a native Cosmos coin representation of the ERC20 token
 * contract that is registered on the token mapping.
 * @name convertERC20
 * @package evmos.erc20.v1
 * @see proto service: evmos.erc20.v1.ConvertERC20
 */
export const convertERC20 = buildTx<MsgConvertERC20>({
  msg: MsgConvertERC20
});