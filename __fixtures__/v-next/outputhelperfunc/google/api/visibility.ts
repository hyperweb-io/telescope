import { BinaryReader, BinaryWriter } from "../../binary";
import { JsonSafe } from "../../json-safe";
import { DeepPartial, isSet } from "../../helpers";
export const protobufPackage = "google.api";
/**
 * `Visibility` defines restrictions for the visibility of service
 * elements.  Restrictions are specified using visibility labels
 * (e.g., PREVIEW) that are elsewhere linked to users and projects.
 * 
 * Users and projects can have access to more than one visibility label. The
 * effective visibility for multiple labels is the union of each label's
 * elements, plus any unrestricted elements.
 * 
 * If an element and its parents have no restrictions, visibility is
 * unconditionally granted.
 * 
 * Example:
 * 
 *     visibility:
 *       rules:
 *       - selector: google.calendar.Calendar.EnhancedSearch
 *         restriction: PREVIEW
 *       - selector: google.calendar.Calendar.Delegate
 *         restriction: INTERNAL
 * 
 * Here, all methods are publicly visible except for the restricted methods
 * EnhancedSearch and Delegate.
 */
export interface Visibility {
  /**
   * A list of visibility rules that apply to individual API elements.
   * 
   * **NOTE:** All service configuration rules follow "last one wins" order.
   */
  rules: VisibilityRule[];
}
export interface VisibilityProtoMsg {
  typeUrl: "/google.api.Visibility";
  value: Uint8Array;
}
/**
 * `Visibility` defines restrictions for the visibility of service
 * elements.  Restrictions are specified using visibility labels
 * (e.g., PREVIEW) that are elsewhere linked to users and projects.
 * 
 * Users and projects can have access to more than one visibility label. The
 * effective visibility for multiple labels is the union of each label's
 * elements, plus any unrestricted elements.
 * 
 * If an element and its parents have no restrictions, visibility is
 * unconditionally granted.
 * 
 * Example:
 * 
 *     visibility:
 *       rules:
 *       - selector: google.calendar.Calendar.EnhancedSearch
 *         restriction: PREVIEW
 *       - selector: google.calendar.Calendar.Delegate
 *         restriction: INTERNAL
 * 
 * Here, all methods are publicly visible except for the restricted methods
 * EnhancedSearch and Delegate.
 */
export interface VisibilityAmino {
  /**
   * A list of visibility rules that apply to individual API elements.
   * 
   * **NOTE:** All service configuration rules follow "last one wins" order.
   */
  rules?: VisibilityRuleAmino[];
}
export interface VisibilityAminoMsg {
  type: "/google.api.Visibility";
  value: VisibilityAmino;
}
/**
 * `Visibility` defines restrictions for the visibility of service
 * elements.  Restrictions are specified using visibility labels
 * (e.g., PREVIEW) that are elsewhere linked to users and projects.
 * 
 * Users and projects can have access to more than one visibility label. The
 * effective visibility for multiple labels is the union of each label's
 * elements, plus any unrestricted elements.
 * 
 * If an element and its parents have no restrictions, visibility is
 * unconditionally granted.
 * 
 * Example:
 * 
 *     visibility:
 *       rules:
 *       - selector: google.calendar.Calendar.EnhancedSearch
 *         restriction: PREVIEW
 *       - selector: google.calendar.Calendar.Delegate
 *         restriction: INTERNAL
 * 
 * Here, all methods are publicly visible except for the restricted methods
 * EnhancedSearch and Delegate.
 */
export interface VisibilitySDKType {
  rules: VisibilityRuleSDKType[];
}
/**
 * A visibility rule provides visibility configuration for an individual API
 * element.
 */
export interface VisibilityRule {
  /**
   * Selects methods, messages, fields, enums, etc. to which this rule applies.
   * 
   * Refer to [selector][google.api.DocumentationRule.selector] for syntax details.
   */
  selector: string;
  /**
   * A comma-separated list of visibility labels that apply to the `selector`.
   * Any of the listed labels can be used to grant the visibility.
   * 
   * If a rule has multiple labels, removing one of the labels but not all of
   * them can break clients.
   * 
   * Example:
   * 
   *     visibility:
   *       rules:
   *       - selector: google.calendar.Calendar.EnhancedSearch
   *         restriction: INTERNAL, PREVIEW
   * 
   * Removing INTERNAL from this restriction will break clients that rely on
   * this method and only had access to it through INTERNAL.
   */
  restriction: string;
}
export interface VisibilityRuleProtoMsg {
  typeUrl: "/google.api.VisibilityRule";
  value: Uint8Array;
}
/**
 * A visibility rule provides visibility configuration for an individual API
 * element.
 */
export interface VisibilityRuleAmino {
  /**
   * Selects methods, messages, fields, enums, etc. to which this rule applies.
   * 
   * Refer to [selector][google.api.DocumentationRule.selector] for syntax details.
   */
  selector?: string;
  /**
   * A comma-separated list of visibility labels that apply to the `selector`.
   * Any of the listed labels can be used to grant the visibility.
   * 
   * If a rule has multiple labels, removing one of the labels but not all of
   * them can break clients.
   * 
   * Example:
   * 
   *     visibility:
   *       rules:
   *       - selector: google.calendar.Calendar.EnhancedSearch
   *         restriction: INTERNAL, PREVIEW
   * 
   * Removing INTERNAL from this restriction will break clients that rely on
   * this method and only had access to it through INTERNAL.
   */
  restriction?: string;
}
export interface VisibilityRuleAminoMsg {
  type: "/google.api.VisibilityRule";
  value: VisibilityRuleAmino;
}
/**
 * A visibility rule provides visibility configuration for an individual API
 * element.
 */
export interface VisibilityRuleSDKType {
  selector: string;
  restriction: string;
}
function createBaseVisibility(): Visibility {
  return {
    rules: []
  };
}
export const Visibility = {
  typeUrl: "/google.api.Visibility",
  is(o: any): o is Visibility {
    return o && (o.$typeUrl === Visibility.typeUrl || Array.isArray(o.rules) && (!o.rules.length || VisibilityRule.is(o.rules[0])));
  },
  isSDK(o: any): o is VisibilitySDKType {
    return o && (o.$typeUrl === Visibility.typeUrl || Array.isArray(o.rules) && (!o.rules.length || VisibilityRule.isSDK(o.rules[0])));
  },
  isAmino(o: any): o is VisibilityAmino {
    return o && (o.$typeUrl === Visibility.typeUrl || Array.isArray(o.rules) && (!o.rules.length || VisibilityRule.isAmino(o.rules[0])));
  },
  encode(message: Visibility, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.rules) {
      VisibilityRule.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Visibility {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseVisibility();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.rules.push(VisibilityRule.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Visibility {
    const obj = createBaseVisibility();
    if (Array.isArray(object?.rules)) obj.rules = object.rules.map((e: any) => VisibilityRule.fromJSON(e));
    return obj;
  },
  toJSON(message: Visibility): JsonSafe<Visibility> {
    const obj: any = {};
    if (message.rules) {
      obj.rules = message.rules.map(e => e ? VisibilityRule.toJSON(e) : undefined);
    } else {
      obj.rules = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<Visibility>): Visibility {
    const message = createBaseVisibility();
    message.rules = object.rules?.map(e => VisibilityRule.fromPartial(e)) || [];
    return message;
  },
  fromSDK(object: VisibilitySDKType): Visibility {
    return {
      rules: Array.isArray(object?.rules) ? object.rules.map((e: any) => VisibilityRule.fromSDK(e)) : []
    };
  },
  fromSDKJSON(object: any): VisibilitySDKType {
    return {
      rules: Array.isArray(object?.rules) ? object.rules.map((e: any) => VisibilityRule.fromSDKJSON(e)) : []
    };
  },
  toSDK(message: Visibility): VisibilitySDKType {
    const obj: any = {};
    if (message.rules) {
      obj.rules = message.rules.map(e => e ? VisibilityRule.toSDK(e) : undefined);
    } else {
      obj.rules = [];
    }
    return obj;
  },
  fromAmino(object: VisibilityAmino): Visibility {
    const message = createBaseVisibility();
    message.rules = object.rules?.map(e => VisibilityRule.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: Visibility): VisibilityAmino {
    const obj: any = {};
    if (message.rules) {
      obj.rules = message.rules.map(e => e ? VisibilityRule.toAmino(e) : undefined);
    } else {
      obj.rules = message.rules;
    }
    return obj;
  },
  fromAminoMsg(object: VisibilityAminoMsg): Visibility {
    return Visibility.fromAmino(object.value);
  },
  fromProtoMsg(message: VisibilityProtoMsg): Visibility {
    return Visibility.decode(message.value);
  },
  toProto(message: Visibility): Uint8Array {
    return Visibility.encode(message).finish();
  },
  toProtoMsg(message: Visibility): VisibilityProtoMsg {
    return {
      typeUrl: "/google.api.Visibility",
      value: Visibility.encode(message).finish()
    };
  },
  registerTypeUrl() {
    VisibilityRule.registerTypeUrl();
  }
};
function createBaseVisibilityRule(): VisibilityRule {
  return {
    selector: "",
    restriction: ""
  };
}
export const VisibilityRule = {
  typeUrl: "/google.api.VisibilityRule",
  is(o: any): o is VisibilityRule {
    return o && (o.$typeUrl === VisibilityRule.typeUrl || typeof o.selector === "string" && typeof o.restriction === "string");
  },
  isSDK(o: any): o is VisibilityRuleSDKType {
    return o && (o.$typeUrl === VisibilityRule.typeUrl || typeof o.selector === "string" && typeof o.restriction === "string");
  },
  isAmino(o: any): o is VisibilityRuleAmino {
    return o && (o.$typeUrl === VisibilityRule.typeUrl || typeof o.selector === "string" && typeof o.restriction === "string");
  },
  encode(message: VisibilityRule, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.selector !== undefined) {
      writer.uint32(10).string(message.selector);
    }
    if (message.restriction !== undefined) {
      writer.uint32(18).string(message.restriction);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): VisibilityRule {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseVisibilityRule();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.selector = reader.string();
          break;
        case 2:
          message.restriction = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): VisibilityRule {
    const obj = createBaseVisibilityRule();
    if (isSet(object.selector)) obj.selector = String(object.selector);
    if (isSet(object.restriction)) obj.restriction = String(object.restriction);
    return obj;
  },
  toJSON(message: VisibilityRule): JsonSafe<VisibilityRule> {
    const obj: any = {};
    message.selector !== undefined && (obj.selector = message.selector);
    message.restriction !== undefined && (obj.restriction = message.restriction);
    return obj;
  },
  fromPartial(object: DeepPartial<VisibilityRule>): VisibilityRule {
    const message = createBaseVisibilityRule();
    message.selector = object.selector ?? "";
    message.restriction = object.restriction ?? "";
    return message;
  },
  fromSDK(object: VisibilityRuleSDKType): VisibilityRule {
    return {
      selector: object?.selector,
      restriction: object?.restriction
    };
  },
  fromSDKJSON(object: any): VisibilityRuleSDKType {
    return {
      selector: isSet(object.selector) ? String(object.selector) : "",
      restriction: isSet(object.restriction) ? String(object.restriction) : ""
    };
  },
  toSDK(message: VisibilityRule): VisibilityRuleSDKType {
    const obj: any = {};
    obj.selector = message.selector;
    obj.restriction = message.restriction;
    return obj;
  },
  fromAmino(object: VisibilityRuleAmino): VisibilityRule {
    const message = createBaseVisibilityRule();
    if (object.selector !== undefined && object.selector !== null) {
      message.selector = object.selector;
    }
    if (object.restriction !== undefined && object.restriction !== null) {
      message.restriction = object.restriction;
    }
    return message;
  },
  toAmino(message: VisibilityRule): VisibilityRuleAmino {
    const obj: any = {};
    obj.selector = message.selector === "" ? undefined : message.selector;
    obj.restriction = message.restriction === "" ? undefined : message.restriction;
    return obj;
  },
  fromAminoMsg(object: VisibilityRuleAminoMsg): VisibilityRule {
    return VisibilityRule.fromAmino(object.value);
  },
  fromProtoMsg(message: VisibilityRuleProtoMsg): VisibilityRule {
    return VisibilityRule.decode(message.value);
  },
  toProto(message: VisibilityRule): Uint8Array {
    return VisibilityRule.encode(message).finish();
  },
  toProtoMsg(message: VisibilityRule): VisibilityRuleProtoMsg {
    return {
      typeUrl: "/google.api.VisibilityRule",
      value: VisibilityRule.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};