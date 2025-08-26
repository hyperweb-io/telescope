import { Attribute, AttributeSDKType } from "../../base/v1beta2/attribute.js";
import { buildTx } from "../../../helper-func-types.js";
import { MsgSignProviderAttributes, MsgSignProviderAttributesSDKType, MsgSignProviderAttributesResponse, MsgSignProviderAttributesResponseSDKType, MsgDeleteProviderAttributes, MsgDeleteProviderAttributesSDKType, MsgDeleteProviderAttributesResponse, MsgDeleteProviderAttributesResponseSDKType } from "./audit.js";
/**
 * SignProviderAttributes defines a method that signs provider attributes
 * @name signProviderAttributes
 * @package akash.audit.v1beta2
 * @see proto service: akash.audit.v1beta2.SignProviderAttributes
 */
export const signProviderAttributes = buildTx<MsgSignProviderAttributes>({
  msg: MsgSignProviderAttributes
});
/**
 * DeleteProviderAttributes defines a method that deletes provider attributes
 * @name deleteProviderAttributes
 * @package akash.audit.v1beta2
 * @see proto service: akash.audit.v1beta2.DeleteProviderAttributes
 */
export const deleteProviderAttributes = buildTx<MsgDeleteProviderAttributes>({
  msg: MsgDeleteProviderAttributes
});