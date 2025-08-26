import { BinaryReader, BinaryWriter } from "../../../binary";
import { Decimal } from "@interchainjs/math";
import { DeepPartial } from "../../../helpers";
/**
 * Minter represents the minting state.
 * @name Minter
 * @package cosmos.mint.v1beta1
 * @see proto type: cosmos.mint.v1beta1.Minter
 */
export interface Minter {
  /**
   * current annual inflation rate
   */
  inflation: string;
  /**
   * current annual expected provisions
   */
  annualProvisions: string;
}
export interface MinterProtoMsg {
  typeUrl: "/cosmos.mint.v1beta1.Minter";
  value: Uint8Array;
}
/**
 * Minter represents the minting state.
 * @name MinterAmino
 * @package cosmos.mint.v1beta1
 * @see proto type: cosmos.mint.v1beta1.Minter
 */
export interface MinterAmino {
  /**
   * current annual inflation rate
   */
  inflation: string;
  /**
   * current annual expected provisions
   */
  annual_provisions: string;
}
export interface MinterAminoMsg {
  type: "cosmos-sdk/Minter";
  value: MinterAmino;
}
/**
 * Params holds parameters for the mint module.
 * @name CosmosMintV1beta1Params
 * @package cosmos.mint.v1beta1
 * @see proto type: cosmos.mint.v1beta1.Params
 */
export interface CosmosMintV1beta1Params {
  /**
   * type of coin to mint
   */
  mintDenom: string;
  /**
   * maximum annual change in inflation rate
   */
  inflationRateChange: string;
  /**
   * maximum inflation rate
   */
  inflationMax: string;
  /**
   * minimum inflation rate
   */
  inflationMin: string;
  /**
   * goal of percent bonded atoms
   */
  goalBonded: string;
  /**
   * expected blocks per year
   */
  blocksPerYear: bigint;
}
export interface CosmosMintV1beta1ParamsProtoMsg {
  typeUrl: "/cosmos.mint.v1beta1.Params";
  value: Uint8Array;
}
/**
 * Params holds parameters for the mint module.
 * @name CosmosMintV1beta1ParamsAmino
 * @package cosmos.mint.v1beta1
 * @see proto type: cosmos.mint.v1beta1.CosmosMintV1beta1Params
 */
export interface CosmosMintV1beta1ParamsAmino {
  /**
   * type of coin to mint
   */
  mint_denom: string;
  /**
   * maximum annual change in inflation rate
   */
  inflation_rate_change: string;
  /**
   * maximum inflation rate
   */
  inflation_max: string;
  /**
   * minimum inflation rate
   */
  inflation_min: string;
  /**
   * goal of percent bonded atoms
   */
  goal_bonded: string;
  /**
   * expected blocks per year
   */
  blocks_per_year: string;
}
export interface CosmosMintV1beta1ParamsAminoMsg {
  type: "cosmos-sdk/Params";
  value: CosmosMintV1beta1ParamsAmino;
}
function createBaseMinter(): Minter {
  return {
    inflation: "",
    annualProvisions: ""
  };
}
/**
 * Minter represents the minting state.
 * @name Minter
 * @package cosmos.mint.v1beta1
 * @see proto type: cosmos.mint.v1beta1.Minter
 */
export const Minter = {
  typeUrl: "/cosmos.mint.v1beta1.Minter",
  aminoType: "cosmos-sdk/Minter",
  encode(message: Minter, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.inflation !== "") {
      writer.uint32(10).string(Decimal.fromUserInput(message.inflation, 18).atomics);
    }
    if (message.annualProvisions !== "") {
      writer.uint32(18).string(Decimal.fromUserInput(message.annualProvisions, 18).atomics);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Minter {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMinter();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.inflation = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 2:
          message.annualProvisions = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<Minter>): Minter {
    const message = createBaseMinter();
    message.inflation = object.inflation ?? "";
    message.annualProvisions = object.annualProvisions ?? "";
    return message;
  },
  fromAmino(object: MinterAmino): Minter {
    const message = createBaseMinter();
    if (object.inflation !== undefined && object.inflation !== null) {
      message.inflation = object.inflation;
    }
    if (object.annual_provisions !== undefined && object.annual_provisions !== null) {
      message.annualProvisions = object.annual_provisions;
    }
    return message;
  },
  toAmino(message: Minter): MinterAmino {
    const obj: any = {};
    obj.inflation = message.inflation === "" ? undefined : Decimal.fromUserInput(message.inflation, 18).atomics;
    obj.annual_provisions = message.annualProvisions === "" ? undefined : Decimal.fromUserInput(message.annualProvisions, 18).atomics;
    return obj;
  },
  fromAminoMsg(object: MinterAminoMsg): Minter {
    return Minter.fromAmino(object.value);
  },
  toAminoMsg(message: Minter): MinterAminoMsg {
    return {
      type: "cosmos-sdk/Minter",
      value: Minter.toAmino(message)
    };
  },
  fromProtoMsg(message: MinterProtoMsg): Minter {
    return Minter.decode(message.value);
  },
  toProto(message: Minter): Uint8Array {
    return Minter.encode(message).finish();
  },
  toProtoMsg(message: Minter): MinterProtoMsg {
    return {
      typeUrl: "/cosmos.mint.v1beta1.Minter",
      value: Minter.encode(message).finish()
    };
  }
};
function createBaseCosmosMintV1beta1Params(): CosmosMintV1beta1Params {
  return {
    mintDenom: "",
    inflationRateChange: "",
    inflationMax: "",
    inflationMin: "",
    goalBonded: "",
    blocksPerYear: BigInt(0)
  };
}
/**
 * Params holds parameters for the mint module.
 * @name CosmosMintV1beta1Params
 * @package cosmos.mint.v1beta1
 * @see proto type: cosmos.mint.v1beta1.Params
 */
export const CosmosMintV1beta1Params = {
  typeUrl: "/cosmos.mint.v1beta1.Params",
  aminoType: "cosmos-sdk/Params",
  encode(message: CosmosMintV1beta1Params, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.mintDenom !== "") {
      writer.uint32(10).string(message.mintDenom);
    }
    if (message.inflationRateChange !== "") {
      writer.uint32(18).string(Decimal.fromUserInput(message.inflationRateChange, 18).atomics);
    }
    if (message.inflationMax !== "") {
      writer.uint32(26).string(Decimal.fromUserInput(message.inflationMax, 18).atomics);
    }
    if (message.inflationMin !== "") {
      writer.uint32(34).string(Decimal.fromUserInput(message.inflationMin, 18).atomics);
    }
    if (message.goalBonded !== "") {
      writer.uint32(42).string(Decimal.fromUserInput(message.goalBonded, 18).atomics);
    }
    if (message.blocksPerYear !== BigInt(0)) {
      writer.uint32(48).uint64(message.blocksPerYear);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): CosmosMintV1beta1Params {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCosmosMintV1beta1Params();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.mintDenom = reader.string();
          break;
        case 2:
          message.inflationRateChange = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 3:
          message.inflationMax = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 4:
          message.inflationMin = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 5:
          message.goalBonded = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 6:
          message.blocksPerYear = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<CosmosMintV1beta1Params>): CosmosMintV1beta1Params {
    const message = createBaseCosmosMintV1beta1Params();
    message.mintDenom = object.mintDenom ?? "";
    message.inflationRateChange = object.inflationRateChange ?? "";
    message.inflationMax = object.inflationMax ?? "";
    message.inflationMin = object.inflationMin ?? "";
    message.goalBonded = object.goalBonded ?? "";
    message.blocksPerYear = object.blocksPerYear !== undefined && object.blocksPerYear !== null ? BigInt(object.blocksPerYear.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: CosmosMintV1beta1ParamsAmino): CosmosMintV1beta1Params {
    const message = createBaseCosmosMintV1beta1Params();
    if (object.mint_denom !== undefined && object.mint_denom !== null) {
      message.mintDenom = object.mint_denom;
    }
    if (object.inflation_rate_change !== undefined && object.inflation_rate_change !== null) {
      message.inflationRateChange = object.inflation_rate_change;
    }
    if (object.inflation_max !== undefined && object.inflation_max !== null) {
      message.inflationMax = object.inflation_max;
    }
    if (object.inflation_min !== undefined && object.inflation_min !== null) {
      message.inflationMin = object.inflation_min;
    }
    if (object.goal_bonded !== undefined && object.goal_bonded !== null) {
      message.goalBonded = object.goal_bonded;
    }
    if (object.blocks_per_year !== undefined && object.blocks_per_year !== null) {
      message.blocksPerYear = BigInt(object.blocks_per_year);
    }
    return message;
  },
  toAmino(message: CosmosMintV1beta1Params): CosmosMintV1beta1ParamsAmino {
    const obj: any = {};
    obj.mint_denom = message.mintDenom === "" ? undefined : message.mintDenom;
    obj.inflation_rate_change = message.inflationRateChange === "" ? undefined : Decimal.fromUserInput(message.inflationRateChange, 18).atomics;
    obj.inflation_max = message.inflationMax === "" ? undefined : Decimal.fromUserInput(message.inflationMax, 18).atomics;
    obj.inflation_min = message.inflationMin === "" ? undefined : Decimal.fromUserInput(message.inflationMin, 18).atomics;
    obj.goal_bonded = message.goalBonded === "" ? undefined : Decimal.fromUserInput(message.goalBonded, 18).atomics;
    obj.blocks_per_year = message.blocksPerYear !== BigInt(0) ? message.blocksPerYear?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: CosmosMintV1beta1ParamsAminoMsg): CosmosMintV1beta1Params {
    return CosmosMintV1beta1Params.fromAmino(object.value);
  },
  toAminoMsg(message: CosmosMintV1beta1Params): CosmosMintV1beta1ParamsAminoMsg {
    return {
      type: "cosmos-sdk/Params",
      value: CosmosMintV1beta1Params.toAmino(message)
    };
  },
  fromProtoMsg(message: CosmosMintV1beta1ParamsProtoMsg): CosmosMintV1beta1Params {
    return CosmosMintV1beta1Params.decode(message.value);
  },
  toProto(message: CosmosMintV1beta1Params): Uint8Array {
    return CosmosMintV1beta1Params.encode(message).finish();
  },
  toProtoMsg(message: CosmosMintV1beta1Params): CosmosMintV1beta1ParamsProtoMsg {
    return {
      typeUrl: "/cosmos.mint.v1beta1.Params",
      value: CosmosMintV1beta1Params.encode(message).finish()
    };
  }
};