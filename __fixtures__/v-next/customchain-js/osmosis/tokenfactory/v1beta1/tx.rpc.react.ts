import { buildUseMutation } from "../../../react-query";
import type { MsgCreateDenom, MsgMint, MsgBurn, MsgChangeAdmin, MsgSetDenomMetadata } from "./tx";
import { createDenom, mint, burn, changeAdmin, setDenomMetadata } from "./tx.rpc.func";
/**
 * @name useCreateDenom
 * @package osmosis.tokenfactory.v1beta1
 * @see proto service: osmosis.tokenfactory.v1beta1.CreateDenom
 */
export const useCreateDenom = buildUseMutation<MsgCreateDenom, Error>({
  builderMutationFn: createDenom
});
/**
 * @name useMint
 * @package osmosis.tokenfactory.v1beta1
 * @see proto service: osmosis.tokenfactory.v1beta1.Mint
 */
export const useMint = buildUseMutation<MsgMint, Error>({
  builderMutationFn: mint
});
/**
 * @name useBurn
 * @package osmosis.tokenfactory.v1beta1
 * @see proto service: osmosis.tokenfactory.v1beta1.Burn
 */
export const useBurn = buildUseMutation<MsgBurn, Error>({
  builderMutationFn: burn
});
/**
 * @name useChangeAdmin
 * @package osmosis.tokenfactory.v1beta1
 * @see proto service: osmosis.tokenfactory.v1beta1.ChangeAdmin
 */
export const useChangeAdmin = buildUseMutation<MsgChangeAdmin, Error>({
  builderMutationFn: changeAdmin
});
/**
 * @name useSetDenomMetadata
 * @package osmosis.tokenfactory.v1beta1
 * @see proto service: osmosis.tokenfactory.v1beta1.SetDenomMetadata
 */
export const useSetDenomMetadata = buildUseMutation<MsgSetDenomMetadata, Error>({
  builderMutationFn: setDenomMetadata
});