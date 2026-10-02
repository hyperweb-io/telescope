import { BinaryReader, BinaryWriter } from "../../binary";
import type { DeepPartial } from "../../helpers";
/**
 * @name OsmosisLockupParams
 * @package osmosis.lockup
 * @see proto type: osmosis.lockup.Params
 */
export interface OsmosisLockupParams {
  forceUnlockAllowedAddresses: string[];
}
export interface OsmosisLockupParamsProtoMsg {
  typeUrl: "/osmosis.lockup.Params";
  value: Uint8Array;
}
/**
 * @name OsmosisLockupParamsAmino
 * @package osmosis.lockup
 * @see proto type: osmosis.lockup.OsmosisLockupParams
 */
export interface OsmosisLockupParamsAmino {
  force_unlock_allowed_addresses: string[];
}
export interface OsmosisLockupParamsAminoMsg {
  type: "osmosis/lockup/params";
  value: OsmosisLockupParamsAmino;
}
function createBaseOsmosisLockupParams(): OsmosisLockupParams {
  return {
    forceUnlockAllowedAddresses: []
  };
}
/**
 * @name OsmosisLockupParams
 * @package osmosis.lockup
 * @see proto type: osmosis.lockup.Params
 */
export const OsmosisLockupParams = {
  typeUrl: "/osmosis.lockup.Params",
  aminoType: "osmosis/lockup/params",
  encode(message: OsmosisLockupParams, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.forceUnlockAllowedAddresses) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): OsmosisLockupParams {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOsmosisLockupParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.forceUnlockAllowedAddresses.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<OsmosisLockupParams>): OsmosisLockupParams {
    const message = createBaseOsmosisLockupParams();
    message.forceUnlockAllowedAddresses = object.forceUnlockAllowedAddresses?.map(e => e) || [];
    return message;
  },
  fromAmino(object: OsmosisLockupParamsAmino): OsmosisLockupParams {
    const message = createBaseOsmosisLockupParams();
    message.forceUnlockAllowedAddresses = object.force_unlock_allowed_addresses?.map(e => e) || [];
    return message;
  },
  toAmino(message: OsmosisLockupParams): OsmosisLockupParamsAmino {
    const obj: any = {};
    if (message.forceUnlockAllowedAddresses) {
      obj.force_unlock_allowed_addresses = message.forceUnlockAllowedAddresses.map(e => e);
    } else {
      obj.force_unlock_allowed_addresses = message.forceUnlockAllowedAddresses;
    }
    return obj;
  },
  fromAminoMsg(object: OsmosisLockupParamsAminoMsg): OsmosisLockupParams {
    return OsmosisLockupParams.fromAmino(object.value);
  },
  toAminoMsg(message: OsmosisLockupParams): OsmosisLockupParamsAminoMsg {
    return {
      type: "osmosis/lockup/params",
      value: OsmosisLockupParams.toAmino(message)
    };
  },
  fromProtoMsg(message: OsmosisLockupParamsProtoMsg): OsmosisLockupParams {
    return OsmosisLockupParams.decode(message.value);
  },
  toProto(message: OsmosisLockupParams): Uint8Array {
    return OsmosisLockupParams.encode(message).finish();
  },
  toProtoMsg(message: OsmosisLockupParams): OsmosisLockupParamsProtoMsg {
    return {
      typeUrl: "/osmosis.lockup.Params",
      value: OsmosisLockupParams.encode(message).finish()
    };
  }
};