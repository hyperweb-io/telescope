import { BinaryReader, BinaryWriter } from "../../../binary";
import type { DeepPartial } from "../../../helpers";
/**
 * Params defines the parameters for the ibc-rate-limit module.
 * @name OsmosisIbcratelimitV1beta1Params
 * @package osmosis.ibcratelimit.v1beta1
 * @see proto type: osmosis.ibcratelimit.v1beta1.Params
 */
export interface OsmosisIbcratelimitV1beta1Params {
  contractAddress: string;
}
export interface OsmosisIbcratelimitV1beta1ParamsProtoMsg {
  typeUrl: "/osmosis.ibcratelimit.v1beta1.Params";
  value: Uint8Array;
}
/**
 * Params defines the parameters for the ibc-rate-limit module.
 * @name OsmosisIbcratelimitV1beta1ParamsAmino
 * @package osmosis.ibcratelimit.v1beta1
 * @see proto type: osmosis.ibcratelimit.v1beta1.OsmosisIbcratelimitV1beta1Params
 */
export interface OsmosisIbcratelimitV1beta1ParamsAmino {
  contract_address: string;
}
export interface OsmosisIbcratelimitV1beta1ParamsAminoMsg {
  type: "osmosis/ibcratelimit/params";
  value: OsmosisIbcratelimitV1beta1ParamsAmino;
}
function createBaseOsmosisIbcratelimitV1beta1Params(): OsmosisIbcratelimitV1beta1Params {
  return {
    contractAddress: ""
  };
}
/**
 * Params defines the parameters for the ibc-rate-limit module.
 * @name OsmosisIbcratelimitV1beta1Params
 * @package osmosis.ibcratelimit.v1beta1
 * @see proto type: osmosis.ibcratelimit.v1beta1.Params
 */
export const OsmosisIbcratelimitV1beta1Params = {
  typeUrl: "/osmosis.ibcratelimit.v1beta1.Params",
  aminoType: "osmosis/ibcratelimit/params",
  encode(message: OsmosisIbcratelimitV1beta1Params, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.contractAddress !== "") {
      writer.uint32(10).string(message.contractAddress);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): OsmosisIbcratelimitV1beta1Params {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOsmosisIbcratelimitV1beta1Params();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.contractAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<OsmosisIbcratelimitV1beta1Params>): OsmosisIbcratelimitV1beta1Params {
    const message = createBaseOsmosisIbcratelimitV1beta1Params();
    message.contractAddress = object.contractAddress ?? "";
    return message;
  },
  fromAmino(object: OsmosisIbcratelimitV1beta1ParamsAmino): OsmosisIbcratelimitV1beta1Params {
    const message = createBaseOsmosisIbcratelimitV1beta1Params();
    if (object.contract_address !== undefined && object.contract_address !== null) {
      message.contractAddress = object.contract_address;
    }
    return message;
  },
  toAmino(message: OsmosisIbcratelimitV1beta1Params): OsmosisIbcratelimitV1beta1ParamsAmino {
    const obj: any = {};
    obj.contract_address = message.contractAddress === "" ? undefined : message.contractAddress;
    return obj;
  },
  fromAminoMsg(object: OsmosisIbcratelimitV1beta1ParamsAminoMsg): OsmosisIbcratelimitV1beta1Params {
    return OsmosisIbcratelimitV1beta1Params.fromAmino(object.value);
  },
  toAminoMsg(message: OsmosisIbcratelimitV1beta1Params): OsmosisIbcratelimitV1beta1ParamsAminoMsg {
    return {
      type: "osmosis/ibcratelimit/params",
      value: OsmosisIbcratelimitV1beta1Params.toAmino(message)
    };
  },
  fromProtoMsg(message: OsmosisIbcratelimitV1beta1ParamsProtoMsg): OsmosisIbcratelimitV1beta1Params {
    return OsmosisIbcratelimitV1beta1Params.decode(message.value);
  },
  toProto(message: OsmosisIbcratelimitV1beta1Params): Uint8Array {
    return OsmosisIbcratelimitV1beta1Params.encode(message).finish();
  },
  toProtoMsg(message: OsmosisIbcratelimitV1beta1Params): OsmosisIbcratelimitV1beta1ParamsProtoMsg {
    return {
      typeUrl: "/osmosis.ibcratelimit.v1beta1.Params",
      value: OsmosisIbcratelimitV1beta1Params.encode(message).finish()
    };
  }
};