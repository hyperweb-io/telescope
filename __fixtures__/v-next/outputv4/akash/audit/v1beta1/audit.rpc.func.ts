import { Attribute, AttributeSDKType } from "../../base/v1beta1/attribute.js";
import { buildTx } from "../../../helper-func-types.js";
import { MsgSignProviderAttributes, MsgSignProviderAttributesSDKType, MsgSignProviderAttributesResponse, MsgSignProviderAttributesResponseSDKType, MsgDeleteProviderAttributes, MsgDeleteProviderAttributesSDKType, MsgDeleteProviderAttributesResponse, MsgDeleteProviderAttributesResponseSDKType } from "./audit.js";
/**
 * SignProviderAttributes defines a method that signs provider attributes
 * @name signProviderAttributes
 * @package akash.audit.v1beta1
 * @see proto service: akash.audit.v1beta1.SignProviderAttributes
 */
export const signProviderAttributes = buildTx<MsgSignProviderAttributes>({
  msg: MsgSignProviderAttributes
});
/**
 * DeleteProviderAttributes defines a method that deletes provider attributes
 * @name deleteProviderAttributes
 * @package akash.audit.v1beta1
 * @see proto service: akash.audit.v1beta1.DeleteProviderAttributes
 */
export const deleteProviderAttributes = buildTx<MsgDeleteProviderAttributes>({
  msg: MsgDeleteProviderAttributes
});