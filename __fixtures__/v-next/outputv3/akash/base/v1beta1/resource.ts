import { ResourceValue, ResourceValueAmino, ResourceValueSDKType } from "./resourcevalue";
import { Attribute, AttributeAmino, AttributeSDKType } from "./attribute";
import { Endpoint, EndpointAmino, EndpointSDKType } from "./endpoint";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { GlobalDecoderRegistry } from "../../../registry";
import { isSet, DeepPartial } from "../../../helpers";
export const protobufPackage = "akash.base.v1beta1";
/**
 * CPU stores resource units and cpu config attributes
 * @name CPU
 * @package akash.base.v1beta1
 * @see proto type: akash.base.v1beta1.CPU
 */
export interface CPU {
  units: ResourceValue;
  attributes: Attribute[];
}
export interface CPUProtoMsg {
  typeUrl: "/akash.base.v1beta1.CPU";
  value: Uint8Array;
}
/**
 * CPU stores resource units and cpu config attributes
 * @name CPUAmino
 * @package akash.base.v1beta1
 * @see proto type: akash.base.v1beta1.CPU
 */
export interface CPUAmino {
  units?: ResourceValueAmino;
  attributes?: AttributeAmino[];
}
/**
 * CPU stores resource units and cpu config attributes
 * @name CPUSDKType
 * @package akash.base.v1beta1
 * @see proto type: akash.base.v1beta1.CPU
 */
export interface CPUSDKType {
  units: ResourceValueSDKType;
  attributes: AttributeSDKType[];
}
/**
 * Memory stores resource quantity and memory attributes
 * @name Memory
 * @package akash.base.v1beta1
 * @see proto type: akash.base.v1beta1.Memory
 */
export interface Memory {
  quantity: ResourceValue;
  attributes: Attribute[];
}
export interface MemoryProtoMsg {
  typeUrl: "/akash.base.v1beta1.Memory";
  value: Uint8Array;
}
/**
 * Memory stores resource quantity and memory attributes
 * @name MemoryAmino
 * @package akash.base.v1beta1
 * @see proto type: akash.base.v1beta1.Memory
 */
export interface MemoryAmino {
  quantity: ResourceValueAmino;
  attributes?: AttributeAmino[];
}
/**
 * Memory stores resource quantity and memory attributes
 * @name MemorySDKType
 * @package akash.base.v1beta1
 * @see proto type: akash.base.v1beta1.Memory
 */
export interface MemorySDKType {
  quantity: ResourceValueSDKType;
  attributes: AttributeSDKType[];
}
/**
 * Storage stores resource quantity and storage attributes
 * @name Storage
 * @package akash.base.v1beta1
 * @see proto type: akash.base.v1beta1.Storage
 */
export interface Storage {
  quantity: ResourceValue;
  attributes: Attribute[];
}
export interface StorageProtoMsg {
  typeUrl: "/akash.base.v1beta1.Storage";
  value: Uint8Array;
}
/**
 * Storage stores resource quantity and storage attributes
 * @name StorageAmino
 * @package akash.base.v1beta1
 * @see proto type: akash.base.v1beta1.Storage
 */
export interface StorageAmino {
  quantity: ResourceValueAmino;
  attributes?: AttributeAmino[];
}
/**
 * Storage stores resource quantity and storage attributes
 * @name StorageSDKType
 * @package akash.base.v1beta1
 * @see proto type: akash.base.v1beta1.Storage
 */
export interface StorageSDKType {
  quantity: ResourceValueSDKType;
  attributes: AttributeSDKType[];
}
/**
 * ResourceUnits describes all available resources types for deployment/node etc
 * if field is nil resource is not present in the given data-structure
 * @name ResourceUnits
 * @package akash.base.v1beta1
 * @see proto type: akash.base.v1beta1.ResourceUnits
 */
export interface ResourceUnits {
  cpu?: CPU;
  memory?: Memory;
  storage?: Storage;
  endpoints: Endpoint[];
}
export interface ResourceUnitsProtoMsg {
  typeUrl: "/akash.base.v1beta1.ResourceUnits";
  value: Uint8Array;
}
/**
 * ResourceUnits describes all available resources types for deployment/node etc
 * if field is nil resource is not present in the given data-structure
 * @name ResourceUnitsAmino
 * @package akash.base.v1beta1
 * @see proto type: akash.base.v1beta1.ResourceUnits
 */
export interface ResourceUnitsAmino {
  cpu?: CPUAmino;
  memory?: MemoryAmino;
  storage?: StorageAmino;
  endpoints: EndpointAmino[];
}
/**
 * ResourceUnits describes all available resources types for deployment/node etc
 * if field is nil resource is not present in the given data-structure
 * @name ResourceUnitsSDKType
 * @package akash.base.v1beta1
 * @see proto type: akash.base.v1beta1.ResourceUnits
 */
export interface ResourceUnitsSDKType {
  cpu?: CPUSDKType;
  memory?: MemorySDKType;
  storage?: StorageSDKType;
  endpoints: EndpointSDKType[];
}
function createBaseCPU(): CPU {
  return {
    units: ResourceValue.fromPartial({}),
    attributes: []
  };
}
/**
 * CPU stores resource units and cpu config attributes
 * @name CPU
 * @package akash.base.v1beta1
 * @see proto type: akash.base.v1beta1.CPU
 */
export const CPU = {
  typeUrl: "/akash.base.v1beta1.CPU",
  is(o: any): o is CPU {
    return o && (o.$typeUrl === CPU.typeUrl || ResourceValue.is(o.units) && Array.isArray(o.attributes) && (!o.attributes.length || Attribute.is(o.attributes[0])));
  },
  isSDK(o: any): o is CPUSDKType {
    return o && (o.$typeUrl === CPU.typeUrl || ResourceValue.isSDK(o.units) && Array.isArray(o.attributes) && (!o.attributes.length || Attribute.isSDK(o.attributes[0])));
  },
  isAmino(o: any): o is CPUAmino {
    return o && (o.$typeUrl === CPU.typeUrl || ResourceValue.isAmino(o.units) && Array.isArray(o.attributes) && (!o.attributes.length || Attribute.isAmino(o.attributes[0])));
  },
  encode(message: CPU, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.units !== undefined) {
      ResourceValue.encode(message.units, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.attributes) {
      Attribute.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): CPU {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCPU();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.units = ResourceValue.decode(reader, reader.uint32(), useInterfaces);
          break;
        case 2:
          message.attributes.push(Attribute.decode(reader, reader.uint32(), useInterfaces));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): CPU {
    const obj = createBaseCPU();
    if (isSet(object.units)) obj.units = ResourceValue.fromJSON(object.units);
    if (Array.isArray(object?.attributes)) obj.attributes = object.attributes.map((e: any) => Attribute.fromJSON(e));
    return obj;
  },
  fromPartial(object: DeepPartial<CPU>): CPU {
    const message = createBaseCPU();
    if (object.units !== undefined && object.units !== null) {
      message.units = ResourceValue.fromPartial(object.units);
    }
    message.attributes = object.attributes?.map(e => Attribute.fromPartial(e)) || [];
    return message;
  },
  fromSDK(object: CPUSDKType): CPU {
    return {
      units: object.units ? ResourceValue.fromSDK(object.units) : undefined,
      attributes: Array.isArray(object?.attributes) ? object.attributes.map((e: any) => Attribute.fromSDK(e)) : []
    };
  },
  toSDK(message: CPU): CPUSDKType {
    const obj: any = {};
    message.units !== undefined && (obj.units = message.units ? ResourceValue.toSDK(message.units) : undefined);
    if (message.attributes) {
      obj.attributes = message.attributes.map(e => e ? Attribute.toSDK(e) : undefined);
    } else {
      obj.attributes = [];
    }
    return obj;
  },
  fromAmino(object: CPUAmino): CPU {
    const message = createBaseCPU();
    if (object.units !== undefined && object.units !== null) {
      message.units = ResourceValue.fromAmino(object.units);
    }
    message.attributes = object.attributes?.map(e => Attribute.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: CPU, useInterfaces: boolean = true): CPUAmino {
    const obj: any = {};
    obj.units = message.units ? ResourceValue.toAmino(message.units, useInterfaces) : undefined;
    if (message.attributes) {
      obj.attributes = message.attributes.map(e => e ? Attribute.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.attributes = message.attributes;
    }
    return obj;
  },
  fromProtoMsg(message: CPUProtoMsg, useInterfaces: boolean = true): CPU {
    return CPU.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: CPU): Uint8Array {
    return CPU.encode(message).finish();
  },
  toProtoMsg(message: CPU): CPUProtoMsg {
    return {
      typeUrl: "/akash.base.v1beta1.CPU",
      value: CPU.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(CPU.typeUrl)) {
      return;
    }
    ResourceValue.registerTypeUrl();
    Attribute.registerTypeUrl();
  }
};
function createBaseMemory(): Memory {
  return {
    quantity: ResourceValue.fromPartial({}),
    attributes: []
  };
}
/**
 * Memory stores resource quantity and memory attributes
 * @name Memory
 * @package akash.base.v1beta1
 * @see proto type: akash.base.v1beta1.Memory
 */
export const Memory = {
  typeUrl: "/akash.base.v1beta1.Memory",
  is(o: any): o is Memory {
    return o && (o.$typeUrl === Memory.typeUrl || ResourceValue.is(o.quantity) && Array.isArray(o.attributes) && (!o.attributes.length || Attribute.is(o.attributes[0])));
  },
  isSDK(o: any): o is MemorySDKType {
    return o && (o.$typeUrl === Memory.typeUrl || ResourceValue.isSDK(o.quantity) && Array.isArray(o.attributes) && (!o.attributes.length || Attribute.isSDK(o.attributes[0])));
  },
  isAmino(o: any): o is MemoryAmino {
    return o && (o.$typeUrl === Memory.typeUrl || ResourceValue.isAmino(o.quantity) && Array.isArray(o.attributes) && (!o.attributes.length || Attribute.isAmino(o.attributes[0])));
  },
  encode(message: Memory, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.quantity !== undefined) {
      ResourceValue.encode(message.quantity, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.attributes) {
      Attribute.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): Memory {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMemory();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.quantity = ResourceValue.decode(reader, reader.uint32(), useInterfaces);
          break;
        case 2:
          message.attributes.push(Attribute.decode(reader, reader.uint32(), useInterfaces));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Memory {
    const obj = createBaseMemory();
    if (isSet(object.quantity)) obj.quantity = ResourceValue.fromJSON(object.quantity);
    if (Array.isArray(object?.attributes)) obj.attributes = object.attributes.map((e: any) => Attribute.fromJSON(e));
    return obj;
  },
  fromPartial(object: DeepPartial<Memory>): Memory {
    const message = createBaseMemory();
    if (object.quantity !== undefined && object.quantity !== null) {
      message.quantity = ResourceValue.fromPartial(object.quantity);
    }
    message.attributes = object.attributes?.map(e => Attribute.fromPartial(e)) || [];
    return message;
  },
  fromSDK(object: MemorySDKType): Memory {
    return {
      quantity: object.quantity ? ResourceValue.fromSDK(object.quantity) : undefined,
      attributes: Array.isArray(object?.attributes) ? object.attributes.map((e: any) => Attribute.fromSDK(e)) : []
    };
  },
  toSDK(message: Memory): MemorySDKType {
    const obj: any = {};
    message.quantity !== undefined && (obj.quantity = message.quantity ? ResourceValue.toSDK(message.quantity) : undefined);
    if (message.attributes) {
      obj.attributes = message.attributes.map(e => e ? Attribute.toSDK(e) : undefined);
    } else {
      obj.attributes = [];
    }
    return obj;
  },
  fromAmino(object: MemoryAmino): Memory {
    const message = createBaseMemory();
    if (object.quantity !== undefined && object.quantity !== null) {
      message.quantity = ResourceValue.fromAmino(object.quantity);
    }
    message.attributes = object.attributes?.map(e => Attribute.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: Memory, useInterfaces: boolean = true): MemoryAmino {
    const obj: any = {};
    obj.quantity = message.quantity ? ResourceValue.toAmino(message.quantity, useInterfaces) : ResourceValue.toAmino(ResourceValue.fromPartial({}));
    if (message.attributes) {
      obj.attributes = message.attributes.map(e => e ? Attribute.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.attributes = message.attributes;
    }
    return obj;
  },
  fromProtoMsg(message: MemoryProtoMsg, useInterfaces: boolean = true): Memory {
    return Memory.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: Memory): Uint8Array {
    return Memory.encode(message).finish();
  },
  toProtoMsg(message: Memory): MemoryProtoMsg {
    return {
      typeUrl: "/akash.base.v1beta1.Memory",
      value: Memory.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(Memory.typeUrl)) {
      return;
    }
    ResourceValue.registerTypeUrl();
    Attribute.registerTypeUrl();
  }
};
function createBaseStorage(): Storage {
  return {
    quantity: ResourceValue.fromPartial({}),
    attributes: []
  };
}
/**
 * Storage stores resource quantity and storage attributes
 * @name Storage
 * @package akash.base.v1beta1
 * @see proto type: akash.base.v1beta1.Storage
 */
export const Storage = {
  typeUrl: "/akash.base.v1beta1.Storage",
  is(o: any): o is Storage {
    return o && (o.$typeUrl === Storage.typeUrl || ResourceValue.is(o.quantity) && Array.isArray(o.attributes) && (!o.attributes.length || Attribute.is(o.attributes[0])));
  },
  isSDK(o: any): o is StorageSDKType {
    return o && (o.$typeUrl === Storage.typeUrl || ResourceValue.isSDK(o.quantity) && Array.isArray(o.attributes) && (!o.attributes.length || Attribute.isSDK(o.attributes[0])));
  },
  isAmino(o: any): o is StorageAmino {
    return o && (o.$typeUrl === Storage.typeUrl || ResourceValue.isAmino(o.quantity) && Array.isArray(o.attributes) && (!o.attributes.length || Attribute.isAmino(o.attributes[0])));
  },
  encode(message: Storage, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.quantity !== undefined) {
      ResourceValue.encode(message.quantity, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.attributes) {
      Attribute.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): Storage {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStorage();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.quantity = ResourceValue.decode(reader, reader.uint32(), useInterfaces);
          break;
        case 2:
          message.attributes.push(Attribute.decode(reader, reader.uint32(), useInterfaces));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Storage {
    const obj = createBaseStorage();
    if (isSet(object.quantity)) obj.quantity = ResourceValue.fromJSON(object.quantity);
    if (Array.isArray(object?.attributes)) obj.attributes = object.attributes.map((e: any) => Attribute.fromJSON(e));
    return obj;
  },
  fromPartial(object: DeepPartial<Storage>): Storage {
    const message = createBaseStorage();
    if (object.quantity !== undefined && object.quantity !== null) {
      message.quantity = ResourceValue.fromPartial(object.quantity);
    }
    message.attributes = object.attributes?.map(e => Attribute.fromPartial(e)) || [];
    return message;
  },
  fromSDK(object: StorageSDKType): Storage {
    return {
      quantity: object.quantity ? ResourceValue.fromSDK(object.quantity) : undefined,
      attributes: Array.isArray(object?.attributes) ? object.attributes.map((e: any) => Attribute.fromSDK(e)) : []
    };
  },
  toSDK(message: Storage): StorageSDKType {
    const obj: any = {};
    message.quantity !== undefined && (obj.quantity = message.quantity ? ResourceValue.toSDK(message.quantity) : undefined);
    if (message.attributes) {
      obj.attributes = message.attributes.map(e => e ? Attribute.toSDK(e) : undefined);
    } else {
      obj.attributes = [];
    }
    return obj;
  },
  fromAmino(object: StorageAmino): Storage {
    const message = createBaseStorage();
    if (object.quantity !== undefined && object.quantity !== null) {
      message.quantity = ResourceValue.fromAmino(object.quantity);
    }
    message.attributes = object.attributes?.map(e => Attribute.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: Storage, useInterfaces: boolean = true): StorageAmino {
    const obj: any = {};
    obj.quantity = message.quantity ? ResourceValue.toAmino(message.quantity, useInterfaces) : ResourceValue.toAmino(ResourceValue.fromPartial({}));
    if (message.attributes) {
      obj.attributes = message.attributes.map(e => e ? Attribute.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.attributes = message.attributes;
    }
    return obj;
  },
  fromProtoMsg(message: StorageProtoMsg, useInterfaces: boolean = true): Storage {
    return Storage.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: Storage): Uint8Array {
    return Storage.encode(message).finish();
  },
  toProtoMsg(message: Storage): StorageProtoMsg {
    return {
      typeUrl: "/akash.base.v1beta1.Storage",
      value: Storage.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(Storage.typeUrl)) {
      return;
    }
    ResourceValue.registerTypeUrl();
    Attribute.registerTypeUrl();
  }
};
function createBaseResourceUnits(): ResourceUnits {
  return {
    cpu: undefined,
    memory: undefined,
    storage: undefined,
    endpoints: []
  };
}
/**
 * ResourceUnits describes all available resources types for deployment/node etc
 * if field is nil resource is not present in the given data-structure
 * @name ResourceUnits
 * @package akash.base.v1beta1
 * @see proto type: akash.base.v1beta1.ResourceUnits
 */
export const ResourceUnits = {
  typeUrl: "/akash.base.v1beta1.ResourceUnits",
  is(o: any): o is ResourceUnits {
    return o && (o.$typeUrl === ResourceUnits.typeUrl || Array.isArray(o.endpoints) && (!o.endpoints.length || Endpoint.is(o.endpoints[0])));
  },
  isSDK(o: any): o is ResourceUnitsSDKType {
    return o && (o.$typeUrl === ResourceUnits.typeUrl || Array.isArray(o.endpoints) && (!o.endpoints.length || Endpoint.isSDK(o.endpoints[0])));
  },
  isAmino(o: any): o is ResourceUnitsAmino {
    return o && (o.$typeUrl === ResourceUnits.typeUrl || Array.isArray(o.endpoints) && (!o.endpoints.length || Endpoint.isAmino(o.endpoints[0])));
  },
  encode(message: ResourceUnits, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.cpu !== undefined) {
      CPU.encode(message.cpu, writer.uint32(10).fork()).ldelim();
    }
    if (message.memory !== undefined) {
      Memory.encode(message.memory, writer.uint32(18).fork()).ldelim();
    }
    if (message.storage !== undefined) {
      Storage.encode(message.storage, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.endpoints) {
      Endpoint.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): ResourceUnits {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResourceUnits();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.cpu = CPU.decode(reader, reader.uint32(), useInterfaces);
          break;
        case 2:
          message.memory = Memory.decode(reader, reader.uint32(), useInterfaces);
          break;
        case 3:
          message.storage = Storage.decode(reader, reader.uint32(), useInterfaces);
          break;
        case 4:
          message.endpoints.push(Endpoint.decode(reader, reader.uint32(), useInterfaces));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ResourceUnits {
    const obj = createBaseResourceUnits();
    if (isSet(object.cpu)) obj.cpu = CPU.fromJSON(object.cpu);
    if (isSet(object.memory)) obj.memory = Memory.fromJSON(object.memory);
    if (isSet(object.storage)) obj.storage = Storage.fromJSON(object.storage);
    if (Array.isArray(object?.endpoints)) obj.endpoints = object.endpoints.map((e: any) => Endpoint.fromJSON(e));
    return obj;
  },
  fromPartial(object: DeepPartial<ResourceUnits>): ResourceUnits {
    const message = createBaseResourceUnits();
    if (object.cpu !== undefined && object.cpu !== null) {
      message.cpu = CPU.fromPartial(object.cpu);
    }
    if (object.memory !== undefined && object.memory !== null) {
      message.memory = Memory.fromPartial(object.memory);
    }
    if (object.storage !== undefined && object.storage !== null) {
      message.storage = Storage.fromPartial(object.storage);
    }
    message.endpoints = object.endpoints?.map(e => Endpoint.fromPartial(e)) || [];
    return message;
  },
  fromSDK(object: ResourceUnitsSDKType): ResourceUnits {
    return {
      cpu: object.cpu ? CPU.fromSDK(object.cpu) : undefined,
      memory: object.memory ? Memory.fromSDK(object.memory) : undefined,
      storage: object.storage ? Storage.fromSDK(object.storage) : undefined,
      endpoints: Array.isArray(object?.endpoints) ? object.endpoints.map((e: any) => Endpoint.fromSDK(e)) : []
    };
  },
  toSDK(message: ResourceUnits): ResourceUnitsSDKType {
    const obj: any = {};
    message.cpu !== undefined && (obj.cpu = message.cpu ? CPU.toSDK(message.cpu) : undefined);
    message.memory !== undefined && (obj.memory = message.memory ? Memory.toSDK(message.memory) : undefined);
    message.storage !== undefined && (obj.storage = message.storage ? Storage.toSDK(message.storage) : undefined);
    if (message.endpoints) {
      obj.endpoints = message.endpoints.map(e => e ? Endpoint.toSDK(e) : undefined);
    } else {
      obj.endpoints = [];
    }
    return obj;
  },
  fromAmino(object: ResourceUnitsAmino): ResourceUnits {
    const message = createBaseResourceUnits();
    if (object.cpu !== undefined && object.cpu !== null) {
      message.cpu = CPU.fromAmino(object.cpu);
    }
    if (object.memory !== undefined && object.memory !== null) {
      message.memory = Memory.fromAmino(object.memory);
    }
    if (object.storage !== undefined && object.storage !== null) {
      message.storage = Storage.fromAmino(object.storage);
    }
    message.endpoints = object.endpoints?.map(e => Endpoint.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: ResourceUnits, useInterfaces: boolean = true): ResourceUnitsAmino {
    const obj: any = {};
    obj.cpu = message.cpu ? CPU.toAmino(message.cpu, useInterfaces) : undefined;
    obj.memory = message.memory ? Memory.toAmino(message.memory, useInterfaces) : undefined;
    obj.storage = message.storage ? Storage.toAmino(message.storage, useInterfaces) : undefined;
    if (message.endpoints) {
      obj.endpoints = message.endpoints.map(e => e ? Endpoint.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.endpoints = message.endpoints;
    }
    return obj;
  },
  fromProtoMsg(message: ResourceUnitsProtoMsg, useInterfaces: boolean = true): ResourceUnits {
    return ResourceUnits.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: ResourceUnits): Uint8Array {
    return ResourceUnits.encode(message).finish();
  },
  toProtoMsg(message: ResourceUnits): ResourceUnitsProtoMsg {
    return {
      typeUrl: "/akash.base.v1beta1.ResourceUnits",
      value: ResourceUnits.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(ResourceUnits.typeUrl)) {
      return;
    }
    CPU.registerTypeUrl();
    Memory.registerTypeUrl();
    Storage.registerTypeUrl();
    Endpoint.registerTypeUrl();
  }
};