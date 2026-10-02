import { BinaryReader, BinaryWriter } from "../../binary";
import type { DeepPartial } from "../../helpers";
/**
 * Params holds parameters for the incentives module
 * @name OsmosisIncentivesParams
 * @package osmosis.incentives
 * @see proto type: osmosis.incentives.Params
 */
export interface OsmosisIncentivesParams {
  /**
   * distr_epoch_identifier is what epoch type distribution will be triggered by
   * (day, week, etc.)
   */
  distrEpochIdentifier: string;
}
export interface OsmosisIncentivesParamsProtoMsg {
  typeUrl: "/osmosis.incentives.Params";
  value: Uint8Array;
}
/**
 * Params holds parameters for the incentives module
 * @name OsmosisIncentivesParamsAmino
 * @package osmosis.incentives
 * @see proto type: osmosis.incentives.OsmosisIncentivesParams
 */
export interface OsmosisIncentivesParamsAmino {
  /**
   * distr_epoch_identifier is what epoch type distribution will be triggered by
   * (day, week, etc.)
   */
  distr_epoch_identifier: string;
}
export interface OsmosisIncentivesParamsAminoMsg {
  type: "osmosis/incentives/params";
  value: OsmosisIncentivesParamsAmino;
}
function createBaseOsmosisIncentivesParams(): OsmosisIncentivesParams {
  return {
    distrEpochIdentifier: ""
  };
}
/**
 * Params holds parameters for the incentives module
 * @name OsmosisIncentivesParams
 * @package osmosis.incentives
 * @see proto type: osmosis.incentives.Params
 */
export const OsmosisIncentivesParams = {
  typeUrl: "/osmosis.incentives.Params",
  aminoType: "osmosis/incentives/params",
  encode(message: OsmosisIncentivesParams, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.distrEpochIdentifier !== "") {
      writer.uint32(10).string(message.distrEpochIdentifier);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): OsmosisIncentivesParams {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOsmosisIncentivesParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.distrEpochIdentifier = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<OsmosisIncentivesParams>): OsmosisIncentivesParams {
    const message = createBaseOsmosisIncentivesParams();
    message.distrEpochIdentifier = object.distrEpochIdentifier ?? "";
    return message;
  },
  fromAmino(object: OsmosisIncentivesParamsAmino): OsmosisIncentivesParams {
    const message = createBaseOsmosisIncentivesParams();
    if (object.distr_epoch_identifier !== undefined && object.distr_epoch_identifier !== null) {
      message.distrEpochIdentifier = object.distr_epoch_identifier;
    }
    return message;
  },
  toAmino(message: OsmosisIncentivesParams): OsmosisIncentivesParamsAmino {
    const obj: any = {};
    obj.distr_epoch_identifier = message.distrEpochIdentifier === "" ? undefined : message.distrEpochIdentifier;
    return obj;
  },
  fromAminoMsg(object: OsmosisIncentivesParamsAminoMsg): OsmosisIncentivesParams {
    return OsmosisIncentivesParams.fromAmino(object.value);
  },
  toAminoMsg(message: OsmosisIncentivesParams): OsmosisIncentivesParamsAminoMsg {
    return {
      type: "osmosis/incentives/params",
      value: OsmosisIncentivesParams.toAmino(message)
    };
  },
  fromProtoMsg(message: OsmosisIncentivesParamsProtoMsg): OsmosisIncentivesParams {
    return OsmosisIncentivesParams.decode(message.value);
  },
  toProto(message: OsmosisIncentivesParams): Uint8Array {
    return OsmosisIncentivesParams.encode(message).finish();
  },
  toProtoMsg(message: OsmosisIncentivesParams): OsmosisIncentivesParamsProtoMsg {
    return {
      typeUrl: "/osmosis.incentives.Params",
      value: OsmosisIncentivesParams.encode(message).finish()
    };
  }
};