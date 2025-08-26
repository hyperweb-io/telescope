import { buildTx } from "../../../helper-func-types";
import { MsgConvertCoin, MsgConvertERC20 } from "./tx";
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