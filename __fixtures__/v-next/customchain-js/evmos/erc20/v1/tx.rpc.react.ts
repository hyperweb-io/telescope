import { buildUseMutation } from "../../../react-query";
import type { MsgConvertCoin, MsgConvertERC20 } from "./tx";
import { convertCoin, convertERC20 } from "./tx.rpc.func";
/**
 * ConvertCoin mints a ERC20 representation of the native Cosmos coin denom
 * that is registered on the token mapping.
 * @name useConvertCoin
 * @package evmos.erc20.v1
 * @see proto service: evmos.erc20.v1.ConvertCoin
 */
export const useConvertCoin = buildUseMutation<MsgConvertCoin, Error>({
  builderMutationFn: convertCoin
});
/**
 * ConvertERC20 mints a native Cosmos coin representation of the ERC20 token
 * contract that is registered on the token mapping.
 * @name useConvertERC20
 * @package evmos.erc20.v1
 * @see proto service: evmos.erc20.v1.ConvertERC20
 */
export const useConvertERC20 = buildUseMutation<MsgConvertERC20, Error>({
  builderMutationFn: convertERC20
});