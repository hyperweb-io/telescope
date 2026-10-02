import { Timestamp } from "../../../google/protobuf/timestamp";
import { Duration, type DurationAmino } from "../../../google/protobuf/duration";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { toTimestamp, fromTimestamp, type DeepPartial } from "../../../helpers";
/**
 * Params defines the claim module's parameters.
 * @name OsmosisClaimV1beta1Params
 * @package osmosis.claim.v1beta1
 * @see proto type: osmosis.claim.v1beta1.Params
 */
export interface OsmosisClaimV1beta1Params {
  airdropStartTime: Date;
  durationUntilDecay: Duration;
  durationOfDecay: Duration;
  /**
   * denom of claimable asset
   */
  claimDenom: string;
}
export interface OsmosisClaimV1beta1ParamsProtoMsg {
  typeUrl: "/osmosis.claim.v1beta1.Params";
  value: Uint8Array;
}
/**
 * Params defines the claim module's parameters.
 * @name OsmosisClaimV1beta1ParamsAmino
 * @package osmosis.claim.v1beta1
 * @see proto type: osmosis.claim.v1beta1.OsmosisClaimV1beta1Params
 */
export interface OsmosisClaimV1beta1ParamsAmino {
  airdrop_start_time: string;
  duration_until_decay: DurationAmino;
  duration_of_decay: DurationAmino;
  /**
   * denom of claimable asset
   */
  claim_denom: string;
}
export interface OsmosisClaimV1beta1ParamsAminoMsg {
  type: "osmosis/claim/params";
  value: OsmosisClaimV1beta1ParamsAmino;
}
function createBaseOsmosisClaimV1beta1Params(): OsmosisClaimV1beta1Params {
  return {
    airdropStartTime: new Date(),
    durationUntilDecay: Duration.fromPartial({}),
    durationOfDecay: Duration.fromPartial({}),
    claimDenom: ""
  };
}
/**
 * Params defines the claim module's parameters.
 * @name OsmosisClaimV1beta1Params
 * @package osmosis.claim.v1beta1
 * @see proto type: osmosis.claim.v1beta1.Params
 */
export const OsmosisClaimV1beta1Params = {
  typeUrl: "/osmosis.claim.v1beta1.Params",
  aminoType: "osmosis/claim/params",
  encode(message: OsmosisClaimV1beta1Params, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.airdropStartTime !== undefined) {
      Timestamp.encode(toTimestamp(message.airdropStartTime), writer.uint32(10).fork()).ldelim();
    }
    if (message.durationUntilDecay !== undefined) {
      Duration.encode(message.durationUntilDecay, writer.uint32(18).fork()).ldelim();
    }
    if (message.durationOfDecay !== undefined) {
      Duration.encode(message.durationOfDecay, writer.uint32(26).fork()).ldelim();
    }
    if (message.claimDenom !== "") {
      writer.uint32(34).string(message.claimDenom);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): OsmosisClaimV1beta1Params {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOsmosisClaimV1beta1Params();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.airdropStartTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 2:
          message.durationUntilDecay = Duration.decode(reader, reader.uint32());
          break;
        case 3:
          message.durationOfDecay = Duration.decode(reader, reader.uint32());
          break;
        case 4:
          message.claimDenom = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<OsmosisClaimV1beta1Params>): OsmosisClaimV1beta1Params {
    const message = createBaseOsmosisClaimV1beta1Params();
    message.airdropStartTime = object.airdropStartTime ?? undefined;
    message.durationUntilDecay = object.durationUntilDecay !== undefined && object.durationUntilDecay !== null ? Duration.fromPartial(object.durationUntilDecay) : undefined;
    message.durationOfDecay = object.durationOfDecay !== undefined && object.durationOfDecay !== null ? Duration.fromPartial(object.durationOfDecay) : undefined;
    message.claimDenom = object.claimDenom ?? "";
    return message;
  },
  fromAmino(object: OsmosisClaimV1beta1ParamsAmino): OsmosisClaimV1beta1Params {
    const message = createBaseOsmosisClaimV1beta1Params();
    if (object.airdrop_start_time !== undefined && object.airdrop_start_time !== null) {
      message.airdropStartTime = fromTimestamp(Timestamp.fromAmino(object.airdrop_start_time));
    }
    if (object.duration_until_decay !== undefined && object.duration_until_decay !== null) {
      message.durationUntilDecay = Duration.fromAmino(object.duration_until_decay);
    }
    if (object.duration_of_decay !== undefined && object.duration_of_decay !== null) {
      message.durationOfDecay = Duration.fromAmino(object.duration_of_decay);
    }
    if (object.claim_denom !== undefined && object.claim_denom !== null) {
      message.claimDenom = object.claim_denom;
    }
    return message;
  },
  toAmino(message: OsmosisClaimV1beta1Params): OsmosisClaimV1beta1ParamsAmino {
    const obj: any = {};
    obj.airdrop_start_time = message.airdropStartTime ? Timestamp.toAmino(toTimestamp(message.airdropStartTime)) : undefined;
    obj.duration_until_decay = message.durationUntilDecay ? Duration.toAmino(message.durationUntilDecay) : undefined;
    obj.duration_of_decay = message.durationOfDecay ? Duration.toAmino(message.durationOfDecay) : undefined;
    obj.claim_denom = message.claimDenom === "" ? undefined : message.claimDenom;
    return obj;
  },
  fromAminoMsg(object: OsmosisClaimV1beta1ParamsAminoMsg): OsmosisClaimV1beta1Params {
    return OsmosisClaimV1beta1Params.fromAmino(object.value);
  },
  toAminoMsg(message: OsmosisClaimV1beta1Params): OsmosisClaimV1beta1ParamsAminoMsg {
    return {
      type: "osmosis/claim/params",
      value: OsmosisClaimV1beta1Params.toAmino(message)
    };
  },
  fromProtoMsg(message: OsmosisClaimV1beta1ParamsProtoMsg): OsmosisClaimV1beta1Params {
    return OsmosisClaimV1beta1Params.decode(message.value);
  },
  toProto(message: OsmosisClaimV1beta1Params): Uint8Array {
    return OsmosisClaimV1beta1Params.encode(message).finish();
  },
  toProtoMsg(message: OsmosisClaimV1beta1Params): OsmosisClaimV1beta1ParamsProtoMsg {
    return {
      typeUrl: "/osmosis.claim.v1beta1.Params",
      value: OsmosisClaimV1beta1Params.encode(message).finish()
    };
  }
};