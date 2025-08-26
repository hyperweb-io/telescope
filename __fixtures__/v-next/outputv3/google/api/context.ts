import { BinaryReader, BinaryWriter } from "../../binary";
import { DeepPartial, isSet } from "../../helpers";
import { GlobalDecoderRegistry } from "../../registry";
export const protobufPackage = "google.api";
/**
 * `Context` defines which contexts an API requests.
 * 
 * Example:
 * 
 *     context:
 *       rules:
 *       - selector: "*"
 *         requested:
 *         - google.rpc.context.ProjectContext
 *         - google.rpc.context.OriginContext
 * 
 * The above specifies that all methods in the API request
 * `google.rpc.context.ProjectContext` and
 * `google.rpc.context.OriginContext`.
 * 
 * Available context types are defined in package
 * `google.rpc.context`.
 * 
 * This also provides mechanism to allowlist any protobuf message extension that
 * can be sent in grpc metadata using “x-goog-ext-<extension_id>-bin” and
 * “x-goog-ext-<extension_id>-jspb” format. For example, list any service
 * specific protobuf types that can appear in grpc metadata as follows in your
 * yaml file:
 * 
 * Example:
 * 
 *     context:
 *       rules:
 *        - selector: "google.example.library.v1.LibraryService.CreateBook"
 *          allowed_request_extensions:
 *          - google.foo.v1.NewExtension
 *          allowed_response_extensions:
 *          - google.foo.v1.NewExtension
 * 
 * You can also specify extension ID instead of fully qualified extension name
 * here.
 * @name Context
 * @package google.api
 * @see proto type: google.api.Context
 */
export interface Context {
  /**
   * A list of RPC context rules that apply to individual API methods.
   * 
   * **NOTE:** All service configuration rules follow "last one wins" order.
   */
  rules: ContextRule[];
}
export interface ContextProtoMsg {
  typeUrl: "/google.api.Context";
  value: Uint8Array;
}
/**
 * `Context` defines which contexts an API requests.
 * 
 * Example:
 * 
 *     context:
 *       rules:
 *       - selector: "*"
 *         requested:
 *         - google.rpc.context.ProjectContext
 *         - google.rpc.context.OriginContext
 * 
 * The above specifies that all methods in the API request
 * `google.rpc.context.ProjectContext` and
 * `google.rpc.context.OriginContext`.
 * 
 * Available context types are defined in package
 * `google.rpc.context`.
 * 
 * This also provides mechanism to allowlist any protobuf message extension that
 * can be sent in grpc metadata using “x-goog-ext-<extension_id>-bin” and
 * “x-goog-ext-<extension_id>-jspb” format. For example, list any service
 * specific protobuf types that can appear in grpc metadata as follows in your
 * yaml file:
 * 
 * Example:
 * 
 *     context:
 *       rules:
 *        - selector: "google.example.library.v1.LibraryService.CreateBook"
 *          allowed_request_extensions:
 *          - google.foo.v1.NewExtension
 *          allowed_response_extensions:
 *          - google.foo.v1.NewExtension
 * 
 * You can also specify extension ID instead of fully qualified extension name
 * here.
 * @name ContextAmino
 * @package google.api
 * @see proto type: google.api.Context
 */
export interface ContextAmino {
  /**
   * A list of RPC context rules that apply to individual API methods.
   * 
   * **NOTE:** All service configuration rules follow "last one wins" order.
   */
  rules?: ContextRuleAmino[];
}
/**
 * `Context` defines which contexts an API requests.
 * 
 * Example:
 * 
 *     context:
 *       rules:
 *       - selector: "*"
 *         requested:
 *         - google.rpc.context.ProjectContext
 *         - google.rpc.context.OriginContext
 * 
 * The above specifies that all methods in the API request
 * `google.rpc.context.ProjectContext` and
 * `google.rpc.context.OriginContext`.
 * 
 * Available context types are defined in package
 * `google.rpc.context`.
 * 
 * This also provides mechanism to allowlist any protobuf message extension that
 * can be sent in grpc metadata using “x-goog-ext-<extension_id>-bin” and
 * “x-goog-ext-<extension_id>-jspb” format. For example, list any service
 * specific protobuf types that can appear in grpc metadata as follows in your
 * yaml file:
 * 
 * Example:
 * 
 *     context:
 *       rules:
 *        - selector: "google.example.library.v1.LibraryService.CreateBook"
 *          allowed_request_extensions:
 *          - google.foo.v1.NewExtension
 *          allowed_response_extensions:
 *          - google.foo.v1.NewExtension
 * 
 * You can also specify extension ID instead of fully qualified extension name
 * here.
 * @name ContextSDKType
 * @package google.api
 * @see proto type: google.api.Context
 */
export interface ContextSDKType {
  rules: ContextRuleSDKType[];
}
/**
 * A context rule provides information about the context for an individual API
 * element.
 * @name ContextRule
 * @package google.api
 * @see proto type: google.api.ContextRule
 */
export interface ContextRule {
  /**
   * Selects the methods to which this rule applies.
   * 
   * Refer to [selector][google.api.DocumentationRule.selector] for syntax details.
   */
  selector: string;
  /**
   * A list of full type names of requested contexts.
   */
  requested: string[];
  /**
   * A list of full type names of provided contexts.
   */
  provided: string[];
  /**
   * A list of full type names or extension IDs of extensions allowed in grpc
   * side channel from client to backend.
   */
  allowedRequestExtensions: string[];
  /**
   * A list of full type names or extension IDs of extensions allowed in grpc
   * side channel from backend to client.
   */
  allowedResponseExtensions: string[];
}
export interface ContextRuleProtoMsg {
  typeUrl: "/google.api.ContextRule";
  value: Uint8Array;
}
/**
 * A context rule provides information about the context for an individual API
 * element.
 * @name ContextRuleAmino
 * @package google.api
 * @see proto type: google.api.ContextRule
 */
export interface ContextRuleAmino {
  /**
   * Selects the methods to which this rule applies.
   * 
   * Refer to [selector][google.api.DocumentationRule.selector] for syntax details.
   */
  selector?: string;
  /**
   * A list of full type names of requested contexts.
   */
  requested?: string[];
  /**
   * A list of full type names of provided contexts.
   */
  provided?: string[];
  /**
   * A list of full type names or extension IDs of extensions allowed in grpc
   * side channel from client to backend.
   */
  allowed_request_extensions?: string[];
  /**
   * A list of full type names or extension IDs of extensions allowed in grpc
   * side channel from backend to client.
   */
  allowed_response_extensions?: string[];
}
/**
 * A context rule provides information about the context for an individual API
 * element.
 * @name ContextRuleSDKType
 * @package google.api
 * @see proto type: google.api.ContextRule
 */
export interface ContextRuleSDKType {
  selector: string;
  requested: string[];
  provided: string[];
  allowed_request_extensions: string[];
  allowed_response_extensions: string[];
}
function createBaseContext(): Context {
  return {
    rules: []
  };
}
/**
 * `Context` defines which contexts an API requests.
 * 
 * Example:
 * 
 *     context:
 *       rules:
 *       - selector: "*"
 *         requested:
 *         - google.rpc.context.ProjectContext
 *         - google.rpc.context.OriginContext
 * 
 * The above specifies that all methods in the API request
 * `google.rpc.context.ProjectContext` and
 * `google.rpc.context.OriginContext`.
 * 
 * Available context types are defined in package
 * `google.rpc.context`.
 * 
 * This also provides mechanism to allowlist any protobuf message extension that
 * can be sent in grpc metadata using “x-goog-ext-<extension_id>-bin” and
 * “x-goog-ext-<extension_id>-jspb” format. For example, list any service
 * specific protobuf types that can appear in grpc metadata as follows in your
 * yaml file:
 * 
 * Example:
 * 
 *     context:
 *       rules:
 *        - selector: "google.example.library.v1.LibraryService.CreateBook"
 *          allowed_request_extensions:
 *          - google.foo.v1.NewExtension
 *          allowed_response_extensions:
 *          - google.foo.v1.NewExtension
 * 
 * You can also specify extension ID instead of fully qualified extension name
 * here.
 * @name Context
 * @package google.api
 * @see proto type: google.api.Context
 */
export const Context = {
  typeUrl: "/google.api.Context",
  is(o: any): o is Context {
    return o && (o.$typeUrl === Context.typeUrl || Array.isArray(o.rules) && (!o.rules.length || ContextRule.is(o.rules[0])));
  },
  isSDK(o: any): o is ContextSDKType {
    return o && (o.$typeUrl === Context.typeUrl || Array.isArray(o.rules) && (!o.rules.length || ContextRule.isSDK(o.rules[0])));
  },
  isAmino(o: any): o is ContextAmino {
    return o && (o.$typeUrl === Context.typeUrl || Array.isArray(o.rules) && (!o.rules.length || ContextRule.isAmino(o.rules[0])));
  },
  encode(message: Context, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.rules) {
      ContextRule.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): Context {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseContext();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.rules.push(ContextRule.decode(reader, reader.uint32(), useInterfaces));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Context {
    const obj = createBaseContext();
    if (Array.isArray(object?.rules)) obj.rules = object.rules.map((e: any) => ContextRule.fromJSON(e));
    return obj;
  },
  fromPartial(object: DeepPartial<Context>): Context {
    const message = createBaseContext();
    message.rules = object.rules?.map(e => ContextRule.fromPartial(e)) || [];
    return message;
  },
  fromSDK(object: ContextSDKType): Context {
    return {
      rules: Array.isArray(object?.rules) ? object.rules.map((e: any) => ContextRule.fromSDK(e)) : []
    };
  },
  toSDK(message: Context): ContextSDKType {
    const obj: any = {};
    if (message.rules) {
      obj.rules = message.rules.map(e => e ? ContextRule.toSDK(e) : undefined);
    } else {
      obj.rules = [];
    }
    return obj;
  },
  fromAmino(object: ContextAmino): Context {
    const message = createBaseContext();
    message.rules = object.rules?.map(e => ContextRule.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: Context, useInterfaces: boolean = true): ContextAmino {
    const obj: any = {};
    if (message.rules) {
      obj.rules = message.rules.map(e => e ? ContextRule.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.rules = message.rules;
    }
    return obj;
  },
  fromProtoMsg(message: ContextProtoMsg, useInterfaces: boolean = true): Context {
    return Context.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: Context): Uint8Array {
    return Context.encode(message).finish();
  },
  toProtoMsg(message: Context): ContextProtoMsg {
    return {
      typeUrl: "/google.api.Context",
      value: Context.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(Context.typeUrl)) {
      return;
    }
    ContextRule.registerTypeUrl();
  }
};
function createBaseContextRule(): ContextRule {
  return {
    selector: "",
    requested: [],
    provided: [],
    allowedRequestExtensions: [],
    allowedResponseExtensions: []
  };
}
/**
 * A context rule provides information about the context for an individual API
 * element.
 * @name ContextRule
 * @package google.api
 * @see proto type: google.api.ContextRule
 */
export const ContextRule = {
  typeUrl: "/google.api.ContextRule",
  is(o: any): o is ContextRule {
    return o && (o.$typeUrl === ContextRule.typeUrl || typeof o.selector === "string" && Array.isArray(o.requested) && (!o.requested.length || typeof o.requested[0] === "string") && Array.isArray(o.provided) && (!o.provided.length || typeof o.provided[0] === "string") && Array.isArray(o.allowedRequestExtensions) && (!o.allowedRequestExtensions.length || typeof o.allowedRequestExtensions[0] === "string") && Array.isArray(o.allowedResponseExtensions) && (!o.allowedResponseExtensions.length || typeof o.allowedResponseExtensions[0] === "string"));
  },
  isSDK(o: any): o is ContextRuleSDKType {
    return o && (o.$typeUrl === ContextRule.typeUrl || typeof o.selector === "string" && Array.isArray(o.requested) && (!o.requested.length || typeof o.requested[0] === "string") && Array.isArray(o.provided) && (!o.provided.length || typeof o.provided[0] === "string") && Array.isArray(o.allowed_request_extensions) && (!o.allowed_request_extensions.length || typeof o.allowed_request_extensions[0] === "string") && Array.isArray(o.allowed_response_extensions) && (!o.allowed_response_extensions.length || typeof o.allowed_response_extensions[0] === "string"));
  },
  isAmino(o: any): o is ContextRuleAmino {
    return o && (o.$typeUrl === ContextRule.typeUrl || typeof o.selector === "string" && Array.isArray(o.requested) && (!o.requested.length || typeof o.requested[0] === "string") && Array.isArray(o.provided) && (!o.provided.length || typeof o.provided[0] === "string") && Array.isArray(o.allowed_request_extensions) && (!o.allowed_request_extensions.length || typeof o.allowed_request_extensions[0] === "string") && Array.isArray(o.allowed_response_extensions) && (!o.allowed_response_extensions.length || typeof o.allowed_response_extensions[0] === "string"));
  },
  encode(message: ContextRule, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.selector !== "") {
      writer.uint32(10).string(message.selector);
    }
    for (const v of message.requested) {
      writer.uint32(18).string(v!);
    }
    for (const v of message.provided) {
      writer.uint32(26).string(v!);
    }
    for (const v of message.allowedRequestExtensions) {
      writer.uint32(34).string(v!);
    }
    for (const v of message.allowedResponseExtensions) {
      writer.uint32(42).string(v!);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): ContextRule {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseContextRule();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.selector = reader.string();
          break;
        case 2:
          message.requested.push(reader.string());
          break;
        case 3:
          message.provided.push(reader.string());
          break;
        case 4:
          message.allowedRequestExtensions.push(reader.string());
          break;
        case 5:
          message.allowedResponseExtensions.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ContextRule {
    const obj = createBaseContextRule();
    if (isSet(object.selector)) obj.selector = String(object.selector);
    if (Array.isArray(object?.requested)) obj.requested = object.requested.map((e: any) => String(e));
    if (Array.isArray(object?.provided)) obj.provided = object.provided.map((e: any) => String(e));
    if (Array.isArray(object?.allowedRequestExtensions)) obj.allowedRequestExtensions = object.allowedRequestExtensions.map((e: any) => String(e));
    if (Array.isArray(object?.allowedResponseExtensions)) obj.allowedResponseExtensions = object.allowedResponseExtensions.map((e: any) => String(e));
    return obj;
  },
  fromPartial(object: DeepPartial<ContextRule>): ContextRule {
    const message = createBaseContextRule();
    message.selector = object.selector ?? "";
    message.requested = object.requested?.map(e => e) || [];
    message.provided = object.provided?.map(e => e) || [];
    message.allowedRequestExtensions = object.allowedRequestExtensions?.map(e => e) || [];
    message.allowedResponseExtensions = object.allowedResponseExtensions?.map(e => e) || [];
    return message;
  },
  fromSDK(object: ContextRuleSDKType): ContextRule {
    return {
      selector: object?.selector,
      requested: Array.isArray(object?.requested) ? object.requested.map((e: any) => e) : [],
      provided: Array.isArray(object?.provided) ? object.provided.map((e: any) => e) : [],
      allowedRequestExtensions: Array.isArray(object?.allowed_request_extensions) ? object.allowed_request_extensions.map((e: any) => e) : [],
      allowedResponseExtensions: Array.isArray(object?.allowed_response_extensions) ? object.allowed_response_extensions.map((e: any) => e) : []
    };
  },
  toSDK(message: ContextRule): ContextRuleSDKType {
    const obj: any = {};
    obj.selector = message.selector;
    if (message.requested) {
      obj.requested = message.requested.map(e => e);
    } else {
      obj.requested = [];
    }
    if (message.provided) {
      obj.provided = message.provided.map(e => e);
    } else {
      obj.provided = [];
    }
    if (message.allowedRequestExtensions) {
      obj.allowed_request_extensions = message.allowedRequestExtensions.map(e => e);
    } else {
      obj.allowed_request_extensions = [];
    }
    if (message.allowedResponseExtensions) {
      obj.allowed_response_extensions = message.allowedResponseExtensions.map(e => e);
    } else {
      obj.allowed_response_extensions = [];
    }
    return obj;
  },
  fromAmino(object: ContextRuleAmino): ContextRule {
    const message = createBaseContextRule();
    if (object.selector !== undefined && object.selector !== null) {
      message.selector = object.selector;
    }
    message.requested = object.requested?.map(e => e) || [];
    message.provided = object.provided?.map(e => e) || [];
    message.allowedRequestExtensions = object.allowed_request_extensions?.map(e => e) || [];
    message.allowedResponseExtensions = object.allowed_response_extensions?.map(e => e) || [];
    return message;
  },
  toAmino(message: ContextRule, useInterfaces: boolean = true): ContextRuleAmino {
    const obj: any = {};
    obj.selector = message.selector === "" ? undefined : message.selector;
    if (message.requested) {
      obj.requested = message.requested.map(e => e);
    } else {
      obj.requested = message.requested;
    }
    if (message.provided) {
      obj.provided = message.provided.map(e => e);
    } else {
      obj.provided = message.provided;
    }
    if (message.allowedRequestExtensions) {
      obj.allowed_request_extensions = message.allowedRequestExtensions.map(e => e);
    } else {
      obj.allowed_request_extensions = message.allowedRequestExtensions;
    }
    if (message.allowedResponseExtensions) {
      obj.allowed_response_extensions = message.allowedResponseExtensions.map(e => e);
    } else {
      obj.allowed_response_extensions = message.allowedResponseExtensions;
    }
    return obj;
  },
  fromProtoMsg(message: ContextRuleProtoMsg, useInterfaces: boolean = true): ContextRule {
    return ContextRule.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: ContextRule): Uint8Array {
    return ContextRule.encode(message).finish();
  },
  toProtoMsg(message: ContextRule): ContextRuleProtoMsg {
    return {
      typeUrl: "/google.api.ContextRule",
      value: ContextRule.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};