import { Attribute, AttributeSDKType } from "../../base/v1beta2/attribute.js";
import { buildTx } from "../../../helper-func-types.js";
import { MsgCreateProvider, MsgCreateProviderSDKType, MsgCreateProviderResponse, MsgCreateProviderResponseSDKType, MsgUpdateProvider, MsgUpdateProviderSDKType, MsgUpdateProviderResponse, MsgUpdateProviderResponseSDKType, MsgDeleteProvider, MsgDeleteProviderSDKType, MsgDeleteProviderResponse, MsgDeleteProviderResponseSDKType } from "./provider.js";
/**
 * CreateProvider defines a method that creates a provider given the proper inputs
 * @name createProvider
 * @package akash.provider.v1beta2
 * @see proto service: akash.provider.v1beta2.CreateProvider
 */
export const createProvider = buildTx<MsgCreateProvider>({
  msg: MsgCreateProvider
});
/**
 * UpdateProvider defines a method that updates a provider given the proper inputs
 * @name updateProvider
 * @package akash.provider.v1beta2
 * @see proto service: akash.provider.v1beta2.UpdateProvider
 */
export const updateProvider = buildTx<MsgUpdateProvider>({
  msg: MsgUpdateProvider
});
/**
 * DeleteProvider defines a method that deletes a provider given the proper inputs
 * @name deleteProvider
 * @package akash.provider.v1beta2
 * @see proto service: akash.provider.v1beta2.DeleteProvider
 */
export const deleteProvider = buildTx<MsgDeleteProvider>({
  msg: MsgDeleteProvider
});