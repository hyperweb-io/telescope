import { BinaryReader, BinaryWriter } from "../../../../binary";
import { isSet, DeepPartial, bytesFromBase64, base64FromBytes } from "../../../../helpers";
import { GlobalDecoderRegistry } from "../../../../registry";
export const protobufPackage = "cosmos.base.store.v1beta1";
/**
 * CommitInfo defines commit information used by the multi-store when committing
 * a version/height.
 * @name CommitInfo
 * @package cosmos.base.store.v1beta1
 * @see proto type: cosmos.base.store.v1beta1.CommitInfo
 */
export interface CommitInfo {
  version: bigint;
  storeInfos: StoreInfo[];
}
export interface CommitInfoProtoMsg {
  typeUrl: "/cosmos.base.store.v1beta1.CommitInfo";
  value: Uint8Array;
}
/**
 * CommitInfo defines commit information used by the multi-store when committing
 * a version/height.
 * @name CommitInfoAmino
 * @package cosmos.base.store.v1beta1
 * @see proto type: cosmos.base.store.v1beta1.CommitInfo
 */
export interface CommitInfoAmino {
  version?: string;
  store_infos?: StoreInfoAmino[];
}
/**
 * CommitInfo defines commit information used by the multi-store when committing
 * a version/height.
 * @name CommitInfoSDKType
 * @package cosmos.base.store.v1beta1
 * @see proto type: cosmos.base.store.v1beta1.CommitInfo
 */
export interface CommitInfoSDKType {
  version: bigint;
  store_infos: StoreInfoSDKType[];
}
/**
 * StoreInfo defines store-specific commit information. It contains a reference
 * between a store name and the commit ID.
 * @name StoreInfo
 * @package cosmos.base.store.v1beta1
 * @see proto type: cosmos.base.store.v1beta1.StoreInfo
 */
export interface StoreInfo {
  name: string;
  commitId: CommitID;
}
export interface StoreInfoProtoMsg {
  typeUrl: "/cosmos.base.store.v1beta1.StoreInfo";
  value: Uint8Array;
}
/**
 * StoreInfo defines store-specific commit information. It contains a reference
 * between a store name and the commit ID.
 * @name StoreInfoAmino
 * @package cosmos.base.store.v1beta1
 * @see proto type: cosmos.base.store.v1beta1.StoreInfo
 */
export interface StoreInfoAmino {
  name?: string;
  commit_id?: CommitIDAmino;
}
/**
 * StoreInfo defines store-specific commit information. It contains a reference
 * between a store name and the commit ID.
 * @name StoreInfoSDKType
 * @package cosmos.base.store.v1beta1
 * @see proto type: cosmos.base.store.v1beta1.StoreInfo
 */
export interface StoreInfoSDKType {
  name: string;
  commit_id: CommitIDSDKType;
}
/**
 * CommitID defines the committment information when a specific store is
 * committed.
 * @name CommitID
 * @package cosmos.base.store.v1beta1
 * @see proto type: cosmos.base.store.v1beta1.CommitID
 */
export interface CommitID {
  version: bigint;
  hash: Uint8Array;
}
export interface CommitIDProtoMsg {
  typeUrl: "/cosmos.base.store.v1beta1.CommitID";
  value: Uint8Array;
}
/**
 * CommitID defines the committment information when a specific store is
 * committed.
 * @name CommitIDAmino
 * @package cosmos.base.store.v1beta1
 * @see proto type: cosmos.base.store.v1beta1.CommitID
 */
export interface CommitIDAmino {
  version?: string;
  hash?: string;
}
/**
 * CommitID defines the committment information when a specific store is
 * committed.
 * @name CommitIDSDKType
 * @package cosmos.base.store.v1beta1
 * @see proto type: cosmos.base.store.v1beta1.CommitID
 */
export interface CommitIDSDKType {
  version: bigint;
  hash: Uint8Array;
}
function createBaseCommitInfo(): CommitInfo {
  return {
    version: BigInt(0),
    storeInfos: []
  };
}
/**
 * CommitInfo defines commit information used by the multi-store when committing
 * a version/height.
 * @name CommitInfo
 * @package cosmos.base.store.v1beta1
 * @see proto type: cosmos.base.store.v1beta1.CommitInfo
 */
export const CommitInfo = {
  typeUrl: "/cosmos.base.store.v1beta1.CommitInfo",
  aminoType: "cosmos-sdk/CommitInfo",
  is(o: any): o is CommitInfo {
    return o && (o.$typeUrl === CommitInfo.typeUrl || typeof o.version === "bigint" && Array.isArray(o.storeInfos) && (!o.storeInfos.length || StoreInfo.is(o.storeInfos[0])));
  },
  isSDK(o: any): o is CommitInfoSDKType {
    return o && (o.$typeUrl === CommitInfo.typeUrl || typeof o.version === "bigint" && Array.isArray(o.store_infos) && (!o.store_infos.length || StoreInfo.isSDK(o.store_infos[0])));
  },
  isAmino(o: any): o is CommitInfoAmino {
    return o && (o.$typeUrl === CommitInfo.typeUrl || typeof o.version === "bigint" && Array.isArray(o.store_infos) && (!o.store_infos.length || StoreInfo.isAmino(o.store_infos[0])));
  },
  encode(message: CommitInfo, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.version !== BigInt(0)) {
      writer.uint32(8).int64(message.version);
    }
    for (const v of message.storeInfos) {
      StoreInfo.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): CommitInfo {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCommitInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.version = reader.int64();
          break;
        case 2:
          message.storeInfos.push(StoreInfo.decode(reader, reader.uint32(), useInterfaces));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): CommitInfo {
    const obj = createBaseCommitInfo();
    if (isSet(object.version)) obj.version = BigInt(object.version.toString());
    if (Array.isArray(object?.storeInfos)) obj.storeInfos = object.storeInfos.map((e: any) => StoreInfo.fromJSON(e));
    return obj;
  },
  fromPartial(object: DeepPartial<CommitInfo>): CommitInfo {
    const message = createBaseCommitInfo();
    if (object.version !== undefined && object.version !== null) {
      message.version = BigInt(object.version.toString());
    }
    message.storeInfos = object.storeInfos?.map(e => StoreInfo.fromPartial(e)) || [];
    return message;
  },
  fromSDK(object: CommitInfoSDKType): CommitInfo {
    return {
      version: object?.version,
      storeInfos: Array.isArray(object?.store_infos) ? object.store_infos.map((e: any) => StoreInfo.fromSDK(e)) : []
    };
  },
  toSDK(message: CommitInfo): CommitInfoSDKType {
    const obj: any = {};
    obj.version = message.version;
    if (message.storeInfos) {
      obj.store_infos = message.storeInfos.map(e => e ? StoreInfo.toSDK(e) : undefined);
    } else {
      obj.store_infos = [];
    }
    return obj;
  },
  fromAmino(object: CommitInfoAmino): CommitInfo {
    const message = createBaseCommitInfo();
    if (object.version !== undefined && object.version !== null) {
      message.version = BigInt(object.version);
    }
    message.storeInfos = object.store_infos?.map(e => StoreInfo.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: CommitInfo, useInterfaces: boolean = true): CommitInfoAmino {
    const obj: any = {};
    obj.version = message.version !== BigInt(0) ? message.version?.toString() : undefined;
    if (message.storeInfos) {
      obj.store_infos = message.storeInfos.map(e => e ? StoreInfo.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.store_infos = message.storeInfos;
    }
    return obj;
  },
  fromProtoMsg(message: CommitInfoProtoMsg, useInterfaces: boolean = true): CommitInfo {
    return CommitInfo.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: CommitInfo): Uint8Array {
    return CommitInfo.encode(message).finish();
  },
  toProtoMsg(message: CommitInfo): CommitInfoProtoMsg {
    return {
      typeUrl: "/cosmos.base.store.v1beta1.CommitInfo",
      value: CommitInfo.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(CommitInfo.typeUrl)) {
      return;
    }
    StoreInfo.registerTypeUrl();
  }
};
function createBaseStoreInfo(): StoreInfo {
  return {
    name: "",
    commitId: CommitID.fromPartial({})
  };
}
/**
 * StoreInfo defines store-specific commit information. It contains a reference
 * between a store name and the commit ID.
 * @name StoreInfo
 * @package cosmos.base.store.v1beta1
 * @see proto type: cosmos.base.store.v1beta1.StoreInfo
 */
export const StoreInfo = {
  typeUrl: "/cosmos.base.store.v1beta1.StoreInfo",
  aminoType: "cosmos-sdk/StoreInfo",
  is(o: any): o is StoreInfo {
    return o && (o.$typeUrl === StoreInfo.typeUrl || typeof o.name === "string" && CommitID.is(o.commitId));
  },
  isSDK(o: any): o is StoreInfoSDKType {
    return o && (o.$typeUrl === StoreInfo.typeUrl || typeof o.name === "string" && CommitID.isSDK(o.commit_id));
  },
  isAmino(o: any): o is StoreInfoAmino {
    return o && (o.$typeUrl === StoreInfo.typeUrl || typeof o.name === "string" && CommitID.isAmino(o.commit_id));
  },
  encode(message: StoreInfo, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.commitId !== undefined) {
      CommitID.encode(message.commitId, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): StoreInfo {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStoreInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.commitId = CommitID.decode(reader, reader.uint32(), useInterfaces);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): StoreInfo {
    const obj = createBaseStoreInfo();
    if (isSet(object.name)) obj.name = String(object.name);
    if (isSet(object.commitId)) obj.commitId = CommitID.fromJSON(object.commitId);
    return obj;
  },
  fromPartial(object: DeepPartial<StoreInfo>): StoreInfo {
    const message = createBaseStoreInfo();
    message.name = object.name ?? "";
    if (object.commitId !== undefined && object.commitId !== null) {
      message.commitId = CommitID.fromPartial(object.commitId);
    }
    return message;
  },
  fromSDK(object: StoreInfoSDKType): StoreInfo {
    return {
      name: object?.name,
      commitId: object.commit_id ? CommitID.fromSDK(object.commit_id) : undefined
    };
  },
  toSDK(message: StoreInfo): StoreInfoSDKType {
    const obj: any = {};
    obj.name = message.name;
    message.commitId !== undefined && (obj.commit_id = message.commitId ? CommitID.toSDK(message.commitId) : undefined);
    return obj;
  },
  fromAmino(object: StoreInfoAmino): StoreInfo {
    const message = createBaseStoreInfo();
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    }
    if (object.commit_id !== undefined && object.commit_id !== null) {
      message.commitId = CommitID.fromAmino(object.commit_id);
    }
    return message;
  },
  toAmino(message: StoreInfo, useInterfaces: boolean = true): StoreInfoAmino {
    const obj: any = {};
    obj.name = message.name === "" ? undefined : message.name;
    obj.commit_id = message.commitId ? CommitID.toAmino(message.commitId, useInterfaces) : undefined;
    return obj;
  },
  fromProtoMsg(message: StoreInfoProtoMsg, useInterfaces: boolean = true): StoreInfo {
    return StoreInfo.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: StoreInfo): Uint8Array {
    return StoreInfo.encode(message).finish();
  },
  toProtoMsg(message: StoreInfo): StoreInfoProtoMsg {
    return {
      typeUrl: "/cosmos.base.store.v1beta1.StoreInfo",
      value: StoreInfo.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(StoreInfo.typeUrl)) {
      return;
    }
    CommitID.registerTypeUrl();
  }
};
function createBaseCommitID(): CommitID {
  return {
    version: BigInt(0),
    hash: new Uint8Array()
  };
}
/**
 * CommitID defines the committment information when a specific store is
 * committed.
 * @name CommitID
 * @package cosmos.base.store.v1beta1
 * @see proto type: cosmos.base.store.v1beta1.CommitID
 */
export const CommitID = {
  typeUrl: "/cosmos.base.store.v1beta1.CommitID",
  aminoType: "cosmos-sdk/CommitID",
  is(o: any): o is CommitID {
    return o && (o.$typeUrl === CommitID.typeUrl || typeof o.version === "bigint" && (o.hash instanceof Uint8Array || typeof o.hash === "string"));
  },
  isSDK(o: any): o is CommitIDSDKType {
    return o && (o.$typeUrl === CommitID.typeUrl || typeof o.version === "bigint" && (o.hash instanceof Uint8Array || typeof o.hash === "string"));
  },
  isAmino(o: any): o is CommitIDAmino {
    return o && (o.$typeUrl === CommitID.typeUrl || typeof o.version === "bigint" && (o.hash instanceof Uint8Array || typeof o.hash === "string"));
  },
  encode(message: CommitID, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.version !== BigInt(0)) {
      writer.uint32(8).int64(message.version);
    }
    if (message.hash.length !== 0) {
      writer.uint32(18).bytes(message.hash);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): CommitID {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCommitID();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.version = reader.int64();
          break;
        case 2:
          message.hash = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): CommitID {
    const obj = createBaseCommitID();
    if (isSet(object.version)) obj.version = BigInt(object.version.toString());
    if (isSet(object.hash)) obj.hash = bytesFromBase64(object.hash);
    return obj;
  },
  fromPartial(object: DeepPartial<CommitID>): CommitID {
    const message = createBaseCommitID();
    if (object.version !== undefined && object.version !== null) {
      message.version = BigInt(object.version.toString());
    }
    message.hash = object.hash ?? new Uint8Array();
    return message;
  },
  fromSDK(object: CommitIDSDKType): CommitID {
    return {
      version: object?.version,
      hash: object?.hash
    };
  },
  toSDK(message: CommitID): CommitIDSDKType {
    const obj: any = {};
    obj.version = message.version;
    obj.hash = message.hash;
    return obj;
  },
  fromAmino(object: CommitIDAmino): CommitID {
    const message = createBaseCommitID();
    if (object.version !== undefined && object.version !== null) {
      message.version = BigInt(object.version);
    }
    if (object.hash !== undefined && object.hash !== null) {
      message.hash = bytesFromBase64(object.hash);
    }
    return message;
  },
  toAmino(message: CommitID, useInterfaces: boolean = true): CommitIDAmino {
    const obj: any = {};
    obj.version = message.version !== BigInt(0) ? message.version?.toString() : undefined;
    obj.hash = message.hash ? base64FromBytes(message.hash) : undefined;
    return obj;
  },
  fromProtoMsg(message: CommitIDProtoMsg, useInterfaces: boolean = true): CommitID {
    return CommitID.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: CommitID): Uint8Array {
    return CommitID.encode(message).finish();
  },
  toProtoMsg(message: CommitID): CommitIDProtoMsg {
    return {
      typeUrl: "/cosmos.base.store.v1beta1.CommitID",
      value: CommitID.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};