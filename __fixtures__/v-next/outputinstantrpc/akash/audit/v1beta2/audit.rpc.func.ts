import { Attribute, AttributeSDKType } from "../../base/v1beta2/attribute";
import { buildTx } from "../../../helper-func-types";
import { MsgSignProviderAttributes, MsgSignProviderAttributesSDKType, MsgSignProviderAttributesResponse, MsgSignProviderAttributesResponseSDKType, MsgDeleteProviderAttributes, MsgDeleteProviderAttributesSDKType, MsgDeleteProviderAttributesResponse, MsgDeleteProviderAttributesResponseSDKType } from "./audit";
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