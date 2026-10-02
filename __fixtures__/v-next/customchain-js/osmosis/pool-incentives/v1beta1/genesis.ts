import { DistrInfo, type DistrInfoAmino, PoolToGauges, type PoolToGaugesAmino, OsmosisPoolincentivesV1beta1Params, type OsmosisPoolincentivesV1beta1ParamsAmino } from "./incentives";
import { Duration, type DurationAmino } from "../../../google/protobuf/duration";
import { BinaryReader, BinaryWriter } from "../../../binary";
import type { DeepPartial } from "../../../helpers";
/**
 * GenesisState defines the pool incentives module's genesis state.
 * @name GenesisState
 * @package osmosis.poolincentives.v1beta1
 * @see proto type: osmosis.poolincentives.v1beta1.GenesisState
 */
export interface GenesisState {
  /**
   * params defines all the paramaters of the module.
   */
  params: OsmosisPoolincentivesV1beta1Params;
  lockableDurations: Duration[];
  distrInfo?: DistrInfo;
  poolToGauges?: PoolToGauges;
}
export interface GenesisStateProtoMsg {
  typeUrl: "/osmosis.poolincentives.v1beta1.GenesisState";
  value: Uint8Array;
}
/**
 * GenesisState defines the pool incentives module's genesis state.
 * @name GenesisStateAmino
 * @package osmosis.poolincentives.v1beta1
 * @see proto type: osmosis.poolincentives.v1beta1.GenesisState
 */
export interface GenesisStateAmino {
  /**
   * params defines all the paramaters of the module.
   */
  params: OsmosisPoolincentivesV1beta1ParamsAmino;
  lockable_durations: DurationAmino[];
  distr_info?: DistrInfoAmino;
  pool_to_gauges?: PoolToGaugesAmino;
}
export interface GenesisStateAminoMsg {
  type: "osmosis/poolincentives/genesis-state";
  value: GenesisStateAmino;
}
function createBaseGenesisState(): GenesisState {
  return {
    params: OsmosisPoolincentivesV1beta1Params.fromPartial({}),
    lockableDurations: [],
    distrInfo: undefined,
    poolToGauges: undefined
  };
}
/**
 * GenesisState defines the pool incentives module's genesis state.
 * @name GenesisState
 * @package osmosis.poolincentives.v1beta1
 * @see proto type: osmosis.poolincentives.v1beta1.GenesisState
 */
export const GenesisState = {
  typeUrl: "/osmosis.poolincentives.v1beta1.GenesisState",
  aminoType: "osmosis/poolincentives/genesis-state",
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      OsmosisPoolincentivesV1beta1Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.lockableDurations) {
      Duration.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.distrInfo !== undefined) {
      DistrInfo.encode(message.distrInfo, writer.uint32(26).fork()).ldelim();
    }
    if (message.poolToGauges !== undefined) {
      PoolToGauges.encode(message.poolToGauges, writer.uint32(34).fork()).ldelim();
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
          message.params = OsmosisPoolincentivesV1beta1Params.decode(reader, reader.uint32());
          break;
        case 2:
          message.lockableDurations.push(Duration.decode(reader, reader.uint32()));
          break;
        case 3:
          message.distrInfo = DistrInfo.decode(reader, reader.uint32());
          break;
        case 4:
          message.poolToGauges = PoolToGauges.decode(reader, reader.uint32());
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
    message.params = object.params !== undefined && object.params !== null ? OsmosisPoolincentivesV1beta1Params.fromPartial(object.params) : undefined;
    message.lockableDurations = object.lockableDurations?.map(e => Duration.fromPartial(e)) || [];
    message.distrInfo = object.distrInfo !== undefined && object.distrInfo !== null ? DistrInfo.fromPartial(object.distrInfo) : undefined;
    message.poolToGauges = object.poolToGauges !== undefined && object.poolToGauges !== null ? PoolToGauges.fromPartial(object.poolToGauges) : undefined;
    return message;
  },
  fromAmino(object: GenesisStateAmino): GenesisState {
    const message = createBaseGenesisState();
    if (object.params !== undefined && object.params !== null) {
      message.params = OsmosisPoolincentivesV1beta1Params.fromAmino(object.params);
    }
    message.lockableDurations = object.lockable_durations?.map(e => Duration.fromAmino(e)) || [];
    if (object.distr_info !== undefined && object.distr_info !== null) {
      message.distrInfo = DistrInfo.fromAmino(object.distr_info);
    }
    if (object.pool_to_gauges !== undefined && object.pool_to_gauges !== null) {
      message.poolToGauges = PoolToGauges.fromAmino(object.pool_to_gauges);
    }
    return message;
  },
  toAmino(message: GenesisState): GenesisStateAmino {
    const obj: any = {};
    obj.params = message.params ? OsmosisPoolincentivesV1beta1Params.toAmino(message.params) : undefined;
    if (message.lockableDurations) {
      obj.lockable_durations = message.lockableDurations.map(e => e ? Duration.toAmino(e) : undefined);
    } else {
      obj.lockable_durations = message.lockableDurations;
    }
    obj.distr_info = message.distrInfo ? DistrInfo.toAmino(message.distrInfo) : undefined;
    obj.pool_to_gauges = message.poolToGauges ? PoolToGauges.toAmino(message.poolToGauges) : undefined;
    return obj;
  },
  fromAminoMsg(object: GenesisStateAminoMsg): GenesisState {
    return GenesisState.fromAmino(object.value);
  },
  toAminoMsg(message: GenesisState): GenesisStateAminoMsg {
    return {
      type: "osmosis/poolincentives/genesis-state",
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
      typeUrl: "/osmosis.poolincentives.v1beta1.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  }
};