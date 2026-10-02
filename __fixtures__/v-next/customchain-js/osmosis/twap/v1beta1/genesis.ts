import { Duration, type DurationAmino } from "../../../google/protobuf/duration";
import { TwapRecord, type TwapRecordAmino } from "./twap_record";
import { BinaryReader, BinaryWriter } from "../../../binary";
import type { DeepPartial } from "../../../helpers";
/**
 * Params holds parameters for the twap module
 * @name OsmosisTwapV1beta1Params
 * @package osmosis.twap.v1beta1
 * @see proto type: osmosis.twap.v1beta1.Params
 */
export interface OsmosisTwapV1beta1Params {
  pruneEpochIdentifier: string;
  recordHistoryKeepPeriod: Duration;
}
export interface OsmosisTwapV1beta1ParamsProtoMsg {
  typeUrl: "/osmosis.twap.v1beta1.Params";
  value: Uint8Array;
}
/**
 * Params holds parameters for the twap module
 * @name OsmosisTwapV1beta1ParamsAmino
 * @package osmosis.twap.v1beta1
 * @see proto type: osmosis.twap.v1beta1.OsmosisTwapV1beta1Params
 */
export interface OsmosisTwapV1beta1ParamsAmino {
  prune_epoch_identifier: string;
  record_history_keep_period: DurationAmino;
}
export interface OsmosisTwapV1beta1ParamsAminoMsg {
  type: "osmosis/twap/params";
  value: OsmosisTwapV1beta1ParamsAmino;
}
/**
 * GenesisState defines the twap module's genesis state.
 * @name GenesisState
 * @package osmosis.twap.v1beta1
 * @see proto type: osmosis.twap.v1beta1.GenesisState
 */
export interface GenesisState {
  /**
   * twaps is the collection of all twap records.
   */
  twaps: TwapRecord[];
  /**
   * params is the container of twap parameters.
   */
  params: OsmosisTwapV1beta1Params;
}
export interface GenesisStateProtoMsg {
  typeUrl: "/osmosis.twap.v1beta1.GenesisState";
  value: Uint8Array;
}
/**
 * GenesisState defines the twap module's genesis state.
 * @name GenesisStateAmino
 * @package osmosis.twap.v1beta1
 * @see proto type: osmosis.twap.v1beta1.GenesisState
 */
export interface GenesisStateAmino {
  /**
   * twaps is the collection of all twap records.
   */
  twaps: TwapRecordAmino[];
  /**
   * params is the container of twap parameters.
   */
  params: OsmosisTwapV1beta1ParamsAmino;
}
export interface GenesisStateAminoMsg {
  type: "osmosis/twap/genesis-state";
  value: GenesisStateAmino;
}
function createBaseOsmosisTwapV1beta1Params(): OsmosisTwapV1beta1Params {
  return {
    pruneEpochIdentifier: "",
    recordHistoryKeepPeriod: Duration.fromPartial({})
  };
}
/**
 * Params holds parameters for the twap module
 * @name OsmosisTwapV1beta1Params
 * @package osmosis.twap.v1beta1
 * @see proto type: osmosis.twap.v1beta1.Params
 */
export const OsmosisTwapV1beta1Params = {
  typeUrl: "/osmosis.twap.v1beta1.Params",
  aminoType: "osmosis/twap/params",
  encode(message: OsmosisTwapV1beta1Params, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pruneEpochIdentifier !== "") {
      writer.uint32(10).string(message.pruneEpochIdentifier);
    }
    if (message.recordHistoryKeepPeriod !== undefined) {
      Duration.encode(message.recordHistoryKeepPeriod, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): OsmosisTwapV1beta1Params {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOsmosisTwapV1beta1Params();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pruneEpochIdentifier = reader.string();
          break;
        case 2:
          message.recordHistoryKeepPeriod = Duration.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<OsmosisTwapV1beta1Params>): OsmosisTwapV1beta1Params {
    const message = createBaseOsmosisTwapV1beta1Params();
    message.pruneEpochIdentifier = object.pruneEpochIdentifier ?? "";
    message.recordHistoryKeepPeriod = object.recordHistoryKeepPeriod !== undefined && object.recordHistoryKeepPeriod !== null ? Duration.fromPartial(object.recordHistoryKeepPeriod) : undefined;
    return message;
  },
  fromAmino(object: OsmosisTwapV1beta1ParamsAmino): OsmosisTwapV1beta1Params {
    const message = createBaseOsmosisTwapV1beta1Params();
    if (object.prune_epoch_identifier !== undefined && object.prune_epoch_identifier !== null) {
      message.pruneEpochIdentifier = object.prune_epoch_identifier;
    }
    if (object.record_history_keep_period !== undefined && object.record_history_keep_period !== null) {
      message.recordHistoryKeepPeriod = Duration.fromAmino(object.record_history_keep_period);
    }
    return message;
  },
  toAmino(message: OsmosisTwapV1beta1Params): OsmosisTwapV1beta1ParamsAmino {
    const obj: any = {};
    obj.prune_epoch_identifier = message.pruneEpochIdentifier === "" ? undefined : message.pruneEpochIdentifier;
    obj.record_history_keep_period = message.recordHistoryKeepPeriod ? Duration.toAmino(message.recordHistoryKeepPeriod) : undefined;
    return obj;
  },
  fromAminoMsg(object: OsmosisTwapV1beta1ParamsAminoMsg): OsmosisTwapV1beta1Params {
    return OsmosisTwapV1beta1Params.fromAmino(object.value);
  },
  toAminoMsg(message: OsmosisTwapV1beta1Params): OsmosisTwapV1beta1ParamsAminoMsg {
    return {
      type: "osmosis/twap/params",
      value: OsmosisTwapV1beta1Params.toAmino(message)
    };
  },
  fromProtoMsg(message: OsmosisTwapV1beta1ParamsProtoMsg): OsmosisTwapV1beta1Params {
    return OsmosisTwapV1beta1Params.decode(message.value);
  },
  toProto(message: OsmosisTwapV1beta1Params): Uint8Array {
    return OsmosisTwapV1beta1Params.encode(message).finish();
  },
  toProtoMsg(message: OsmosisTwapV1beta1Params): OsmosisTwapV1beta1ParamsProtoMsg {
    return {
      typeUrl: "/osmosis.twap.v1beta1.Params",
      value: OsmosisTwapV1beta1Params.encode(message).finish()
    };
  }
};
function createBaseGenesisState(): GenesisState {
  return {
    twaps: [],
    params: OsmosisTwapV1beta1Params.fromPartial({})
  };
}
/**
 * GenesisState defines the twap module's genesis state.
 * @name GenesisState
 * @package osmosis.twap.v1beta1
 * @see proto type: osmosis.twap.v1beta1.GenesisState
 */
export const GenesisState = {
  typeUrl: "/osmosis.twap.v1beta1.GenesisState",
  aminoType: "osmosis/twap/genesis-state",
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.twaps) {
      TwapRecord.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.params !== undefined) {
      OsmosisTwapV1beta1Params.encode(message.params, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.twaps.push(TwapRecord.decode(reader, reader.uint32()));
          break;
        case 2:
          message.params = OsmosisTwapV1beta1Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.twaps = object.twaps?.map(e => TwapRecord.fromPartial(e)) || [];
    message.params = object.params !== undefined && object.params !== null ? OsmosisTwapV1beta1Params.fromPartial(object.params) : undefined;
    return message;
  },
  fromAmino(object: GenesisStateAmino): GenesisState {
    const message = createBaseGenesisState();
    message.twaps = object.twaps?.map(e => TwapRecord.fromAmino(e)) || [];
    if (object.params !== undefined && object.params !== null) {
      message.params = OsmosisTwapV1beta1Params.fromAmino(object.params);
    }
    return message;
  },
  toAmino(message: GenesisState): GenesisStateAmino {
    const obj: any = {};
    if (message.twaps) {
      obj.twaps = message.twaps.map(e => e ? TwapRecord.toAmino(e) : undefined);
    } else {
      obj.twaps = message.twaps;
    }
    obj.params = message.params ? OsmosisTwapV1beta1Params.toAmino(message.params) : undefined;
    return obj;
  },
  fromAminoMsg(object: GenesisStateAminoMsg): GenesisState {
    return GenesisState.fromAmino(object.value);
  },
  toAminoMsg(message: GenesisState): GenesisStateAminoMsg {
    return {
      type: "osmosis/twap/genesis-state",
      value: GenesisState.toAmino(message)
    };
  },
  fromProtoMsg(message: GenesisStateProtoMsg): GenesisState {
    return GenesisState.decode(message.value);
  },
  toProto(message: GenesisState): Uint8Array {
    return GenesisState.encode(message).finish();
  },
  toProtoMsg(message: GenesisState): GenesisStateProtoMsg {
    return {
      typeUrl: "/osmosis.twap.v1beta1.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  }
};