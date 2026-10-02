import { Duration, type DurationAmino } from "../../../google/protobuf/duration";
import { BinaryReader, BinaryWriter } from "../../../binary";
import type { DeepPartial } from "../../../helpers";
/**
 * GenesisState defines the recovery module's genesis state.
 * @name GenesisState
 * @package evmos.recovery.v1
 * @see proto type: evmos.recovery.v1.GenesisState
 */
export interface GenesisState {
  /**
   * params defines all the paramaters of the module.
   */
  params: EvmosRecoveryV1Params;
}
export interface GenesisStateProtoMsg {
  typeUrl: "/evmos.recovery.v1.GenesisState";
  value: Uint8Array;
}
/**
 * GenesisState defines the recovery module's genesis state.
 * @name GenesisStateAmino
 * @package evmos.recovery.v1
 * @see proto type: evmos.recovery.v1.GenesisState
 */
export interface GenesisStateAmino {
  /**
   * params defines all the paramaters of the module.
   */
  params: EvmosRecoveryV1ParamsAmino;
}
export interface GenesisStateAminoMsg {
  type: "/evmos.recovery.v1.GenesisState";
  value: GenesisStateAmino;
}
/**
 * Params holds parameters for the recovery module
 * @name EvmosRecoveryV1Params
 * @package evmos.recovery.v1
 * @see proto type: evmos.recovery.v1.Params
 */
export interface EvmosRecoveryV1Params {
  /**
   * enable recovery IBC middleware
   */
  enableRecovery: boolean;
  /**
   * duration added to timeout timestamp for balances recovered via IBC packets
   */
  packetTimeoutDuration: Duration;
}
export interface EvmosRecoveryV1ParamsProtoMsg {
  typeUrl: "/evmos.recovery.v1.Params";
  value: Uint8Array;
}
/**
 * Params holds parameters for the recovery module
 * @name EvmosRecoveryV1ParamsAmino
 * @package evmos.recovery.v1
 * @see proto type: evmos.recovery.v1.EvmosRecoveryV1Params
 */
export interface EvmosRecoveryV1ParamsAmino {
  /**
   * enable recovery IBC middleware
   */
  enable_recovery: boolean;
  /**
   * duration added to timeout timestamp for balances recovered via IBC packets
   */
  packet_timeout_duration: DurationAmino;
}
export interface EvmosRecoveryV1ParamsAminoMsg {
  type: "/evmos.recovery.v1.Params";
  value: EvmosRecoveryV1ParamsAmino;
}
function createBaseGenesisState(): GenesisState {
  return {
    params: EvmosRecoveryV1Params.fromPartial({})
  };
}
/**
 * GenesisState defines the recovery module's genesis state.
 * @name GenesisState
 * @package evmos.recovery.v1
 * @see proto type: evmos.recovery.v1.GenesisState
 */
export const GenesisState = {
  typeUrl: "/evmos.recovery.v1.GenesisState",
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      EvmosRecoveryV1Params.encode(message.params, writer.uint32(10).fork()).ldelim();
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
          message.params = EvmosRecoveryV1Params.decode(reader, reader.uint32());
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
    message.params = object.params !== undefined && object.params !== null ? EvmosRecoveryV1Params.fromPartial(object.params) : undefined;
    return message;
  },
  fromAmino(object: GenesisStateAmino): GenesisState {
    const message = createBaseGenesisState();
    if (object.params !== undefined && object.params !== null) {
      message.params = EvmosRecoveryV1Params.fromAmino(object.params);
    }
    return message;
  },
  toAmino(message: GenesisState): GenesisStateAmino {
    const obj: any = {};
    obj.params = message.params ? EvmosRecoveryV1Params.toAmino(message.params) : undefined;
    return obj;
  },
  fromAminoMsg(object: GenesisStateAminoMsg): GenesisState {
    return GenesisState.fromAmino(object.value);
  },
  fromProtoMsg(message: GenesisStateProtoMsg): GenesisState {
    return GenesisState.decode(message.value);
  },
  toProto(message: GenesisState): Uint8Array {
    return GenesisState.encode(message).finish();
  },
  toProtoMsg(message: GenesisState): GenesisStateProtoMsg {
    return {
      typeUrl: "/evmos.recovery.v1.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  }
};
function createBaseEvmosRecoveryV1Params(): EvmosRecoveryV1Params {
  return {
    enableRecovery: false,
    packetTimeoutDuration: Duration.fromPartial({})
  };
}
/**
 * Params holds parameters for the recovery module
 * @name EvmosRecoveryV1Params
 * @package evmos.recovery.v1
 * @see proto type: evmos.recovery.v1.Params
 */
export const EvmosRecoveryV1Params = {
  typeUrl: "/evmos.recovery.v1.Params",
  encode(message: EvmosRecoveryV1Params, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.enableRecovery === true) {
      writer.uint32(8).bool(message.enableRecovery);
    }
    if (message.packetTimeoutDuration !== undefined) {
      Duration.encode(message.packetTimeoutDuration, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EvmosRecoveryV1Params {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEvmosRecoveryV1Params();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.enableRecovery = reader.bool();
          break;
        case 2:
          message.packetTimeoutDuration = Duration.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<EvmosRecoveryV1Params>): EvmosRecoveryV1Params {
    const message = createBaseEvmosRecoveryV1Params();
    message.enableRecovery = object.enableRecovery ?? false;
    message.packetTimeoutDuration = object.packetTimeoutDuration !== undefined && object.packetTimeoutDuration !== null ? Duration.fromPartial(object.packetTimeoutDuration) : undefined;
    return message;
  },
  fromAmino(object: EvmosRecoveryV1ParamsAmino): EvmosRecoveryV1Params {
    const message = createBaseEvmosRecoveryV1Params();
    if (object.enable_recovery !== undefined && object.enable_recovery !== null) {
      message.enableRecovery = object.enable_recovery;
    }
    if (object.packet_timeout_duration !== undefined && object.packet_timeout_duration !== null) {
      message.packetTimeoutDuration = Duration.fromAmino(object.packet_timeout_duration);
    }
    return message;
  },
  toAmino(message: EvmosRecoveryV1Params): EvmosRecoveryV1ParamsAmino {
    const obj: any = {};
    obj.enable_recovery = message.enableRecovery === false ? undefined : message.enableRecovery;
    obj.packet_timeout_duration = message.packetTimeoutDuration ? Duration.toAmino(message.packetTimeoutDuration) : undefined;
    return obj;
  },
  fromAminoMsg(object: EvmosRecoveryV1ParamsAminoMsg): EvmosRecoveryV1Params {
    return EvmosRecoveryV1Params.fromAmino(object.value);
  },
  fromProtoMsg(message: EvmosRecoveryV1ParamsProtoMsg): EvmosRecoveryV1Params {
    return EvmosRecoveryV1Params.decode(message.value);
  },
  toProto(message: EvmosRecoveryV1Params): Uint8Array {
    return EvmosRecoveryV1Params.encode(message).finish();
  },
  toProtoMsg(message: EvmosRecoveryV1Params): EvmosRecoveryV1ParamsProtoMsg {
    return {
      typeUrl: "/evmos.recovery.v1.Params",
      value: EvmosRecoveryV1Params.encode(message).finish()
    };
  }
};