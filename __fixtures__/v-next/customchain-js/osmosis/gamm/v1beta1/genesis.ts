import { Coin, type CoinAmino } from "../../../cosmos/base/v1beta1/coin";
import { Any, type AnyProtoMsg, type AnyAmino } from "../../../google/protobuf/any";
import { Pool as Pool1 } from "../pool-models/balancer/balancerPool";
import type { PoolProtoMsg as Pool1ProtoMsg } from "../pool-models/balancer/balancerPool";
import { Pool as Pool2 } from "../pool-models/stableswap/stableswap_pool";
import type { PoolProtoMsg as Pool2ProtoMsg } from "../pool-models/stableswap/stableswap_pool";
import { BinaryReader, BinaryWriter } from "../../../binary";
import type { DeepPartial } from "../../../helpers";
/**
 * Params holds parameters for the incentives module
 * @name OsmosisGammV1beta1Params
 * @package osmosis.gamm.v1beta1
 * @see proto type: osmosis.gamm.v1beta1.Params
 */
export interface OsmosisGammV1beta1Params {
  poolCreationFee: Coin[];
}
export interface OsmosisGammV1beta1ParamsProtoMsg {
  typeUrl: "/osmosis.gamm.v1beta1.Params";
  value: Uint8Array;
}
/**
 * Params holds parameters for the incentives module
 * @name OsmosisGammV1beta1ParamsAmino
 * @package osmosis.gamm.v1beta1
 * @see proto type: osmosis.gamm.v1beta1.OsmosisGammV1beta1Params
 */
export interface OsmosisGammV1beta1ParamsAmino {
  pool_creation_fee: CoinAmino[];
}
export interface OsmosisGammV1beta1ParamsAminoMsg {
  type: "osmosis/gamm/params";
  value: OsmosisGammV1beta1ParamsAmino;
}
/**
 * GenesisState defines the gamm module's genesis state.
 * @name GenesisState
 * @package osmosis.gamm.v1beta1
 * @see proto type: osmosis.gamm.v1beta1.GenesisState
 */
export interface GenesisState {
  pools: (Pool1 | Pool2 | Any)[] | Any[];
  /**
   * will be renamed to next_pool_id in an upcoming version
   */
  nextPoolNumber: bigint;
  params: OsmosisGammV1beta1Params;
}
export interface GenesisStateProtoMsg {
  typeUrl: "/osmosis.gamm.v1beta1.GenesisState";
  value: Uint8Array;
}
export type GenesisStateEncoded = Omit<GenesisState, "pools"> & {
  pools: (Pool1ProtoMsg | Pool2ProtoMsg | AnyProtoMsg)[];
};
/**
 * GenesisState defines the gamm module's genesis state.
 * @name GenesisStateAmino
 * @package osmosis.gamm.v1beta1
 * @see proto type: osmosis.gamm.v1beta1.GenesisState
 */
export interface GenesisStateAmino {
  pools: AnyAmino[];
  /**
   * will be renamed to next_pool_id in an upcoming version
   */
  next_pool_number: string;
  params: OsmosisGammV1beta1ParamsAmino;
}
export interface GenesisStateAminoMsg {
  type: "osmosis/gamm/genesis-state";
  value: GenesisStateAmino;
}
function createBaseOsmosisGammV1beta1Params(): OsmosisGammV1beta1Params {
  return {
    poolCreationFee: []
  };
}
/**
 * Params holds parameters for the incentives module
 * @name OsmosisGammV1beta1Params
 * @package osmosis.gamm.v1beta1
 * @see proto type: osmosis.gamm.v1beta1.Params
 */
export const OsmosisGammV1beta1Params = {
  typeUrl: "/osmosis.gamm.v1beta1.Params",
  aminoType: "osmosis/gamm/params",
  encode(message: OsmosisGammV1beta1Params, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.poolCreationFee) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): OsmosisGammV1beta1Params {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOsmosisGammV1beta1Params();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolCreationFee.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<OsmosisGammV1beta1Params>): OsmosisGammV1beta1Params {
    const message = createBaseOsmosisGammV1beta1Params();
    message.poolCreationFee = object.poolCreationFee?.map(e => Coin.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: OsmosisGammV1beta1ParamsAmino): OsmosisGammV1beta1Params {
    const message = createBaseOsmosisGammV1beta1Params();
    message.poolCreationFee = object.pool_creation_fee?.map(e => Coin.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: OsmosisGammV1beta1Params): OsmosisGammV1beta1ParamsAmino {
    const obj: any = {};
    if (message.poolCreationFee) {
      obj.pool_creation_fee = message.poolCreationFee.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.pool_creation_fee = message.poolCreationFee;
    }
    return obj;
  },
  fromAminoMsg(object: OsmosisGammV1beta1ParamsAminoMsg): OsmosisGammV1beta1Params {
    return OsmosisGammV1beta1Params.fromAmino(object.value);
  },
  toAminoMsg(message: OsmosisGammV1beta1Params): OsmosisGammV1beta1ParamsAminoMsg {
    return {
      type: "osmosis/gamm/params",
      value: OsmosisGammV1beta1Params.toAmino(message)
    };
  },
  fromProtoMsg(message: OsmosisGammV1beta1ParamsProtoMsg): OsmosisGammV1beta1Params {
    return OsmosisGammV1beta1Params.decode(message.value);
  },
  toProto(message: OsmosisGammV1beta1Params): Uint8Array {
    return OsmosisGammV1beta1Params.encode(message).finish();
  },
  toProtoMsg(message: OsmosisGammV1beta1Params): OsmosisGammV1beta1ParamsProtoMsg {
    return {
      typeUrl: "/osmosis.gamm.v1beta1.Params",
      value: OsmosisGammV1beta1Params.encode(message).finish()
    };
  }
};
function createBaseGenesisState(): GenesisState {
  return {
    pools: [],
    nextPoolNumber: BigInt(0),
    params: OsmosisGammV1beta1Params.fromPartial({})
  };
}
/**
 * GenesisState defines the gamm module's genesis state.
 * @name GenesisState
 * @package osmosis.gamm.v1beta1
 * @see proto type: osmosis.gamm.v1beta1.GenesisState
 */
export const GenesisState = {
  typeUrl: "/osmosis.gamm.v1beta1.GenesisState",
  aminoType: "osmosis/gamm/genesis-state",
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.pools) {
      Any.encode(v! as Any, writer.uint32(10).fork()).ldelim();
    }
    if (message.nextPoolNumber !== BigInt(0)) {
      writer.uint32(16).uint64(message.nextPoolNumber);
    }
    if (message.params !== undefined) {
      OsmosisGammV1beta1Params.encode(message.params, writer.uint32(26).fork()).ldelim();
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
          message.pools.push(Any.decode(reader, reader.uint32()) as Any);
          break;
        case 2:
          message.nextPoolNumber = reader.uint64();
          break;
        case 3:
          message.params = OsmosisGammV1beta1Params.decode(reader, reader.uint32());
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
    message.pools = object.pools?.map(e => Any.fromPartial(e)) || [];
    message.nextPoolNumber = object.nextPoolNumber !== undefined && object.nextPoolNumber !== null ? BigInt(object.nextPoolNumber.toString()) : BigInt(0);
    message.params = object.params !== undefined && object.params !== null ? OsmosisGammV1beta1Params.fromPartial(object.params) : undefined;
    return message;
  },
  fromAmino(object: GenesisStateAmino): GenesisState {
    const message = createBaseGenesisState();
    message.pools = object.pools?.map(e => PoolI_FromAmino(e)) || [];
    if (object.next_pool_number !== undefined && object.next_pool_number !== null) {
      message.nextPoolNumber = BigInt(object.next_pool_number);
    }
    if (object.params !== undefined && object.params !== null) {
      message.params = OsmosisGammV1beta1Params.fromAmino(object.params);
    }
    return message;
  },
  toAmino(message: GenesisState): GenesisStateAmino {
    const obj: any = {};
    if (message.pools) {
      obj.pools = message.pools.map(e => e ? PoolI_ToAmino(e as Any) : undefined);
    } else {
      obj.pools = message.pools;
    }
    obj.next_pool_number = message.nextPoolNumber !== BigInt(0) ? message.nextPoolNumber?.toString() : undefined;
    obj.params = message.params ? OsmosisGammV1beta1Params.toAmino(message.params) : undefined;
    return obj;
  },
  fromAminoMsg(object: GenesisStateAminoMsg): GenesisState {
    return GenesisState.fromAmino(object.value);
  },
  toAminoMsg(message: GenesisState): GenesisStateAminoMsg {
    return {
      type: "osmosis/gamm/genesis-state",
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
      typeUrl: "/osmosis.gamm.v1beta1.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  }
};
export const PoolI_InterfaceDecoder = (input: BinaryReader | Uint8Array): Pool1 | Pool2 | Any => {
  const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
  const data = Any.decode(reader, reader.uint32());
  switch (data.typeUrl) {
    case "/osmosis.gamm.v1beta1.Pool":
      return Pool1.decode(data.value);
    case "/osmosis.gamm.poolmodels.stableswap.v1beta1.Pool":
      return Pool2.decode(data.value);
    default:
      return data;
  }
};
export const PoolI_FromAmino = (content: AnyAmino): Any => {
  switch (content.type) {
    case "osmosis/gamm/pool":
      return Any.fromPartial({
        typeUrl: "/osmosis.gamm.v1beta1.Pool",
        value: Pool1.encode(Pool1.fromPartial(Pool1.fromAmino(content.value))).finish()
      });
    case "osmosis/gamm/pool":
      return Any.fromPartial({
        typeUrl: "/osmosis.gamm.poolmodels.stableswap.v1beta1.Pool",
        value: Pool2.encode(Pool2.fromPartial(Pool2.fromAmino(content.value))).finish()
      });
    default:
      return Any.fromAmino(content);
  }
};
export const PoolI_ToAmino = (content: Any) => {
  switch (content.typeUrl) {
    case "/osmosis.gamm.v1beta1.Pool":
      return {
        type: "osmosis/gamm/pool",
        value: Pool1.toAmino(Pool1.decode(content.value, undefined))
      };
    case "/osmosis.gamm.poolmodels.stableswap.v1beta1.Pool":
      return {
        type: "osmosis/gamm/pool",
        value: Pool2.toAmino(Pool2.decode(content.value, undefined))
      };
    default:
      return Any.toAmino(content);
  }
};