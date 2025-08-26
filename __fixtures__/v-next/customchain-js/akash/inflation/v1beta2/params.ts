import { BinaryReader, BinaryWriter } from "../../../binary";
import { Decimal } from "@interchainjs/math";
import { DeepPartial } from "../../../helpers";
/**
 * Params defines the parameters for the x/deployment package
 * @name AkashInflationV1beta2Params
 * @package akash.inflation.v1beta2
 * @see proto type: akash.inflation.v1beta2.Params
 */
export interface AkashInflationV1beta2Params {
  /**
   * InflationDecayFactor is the number of years it takes inflation to halve.
   */
  inflationDecayFactor: string;
  /**
   * InitialInflation is the rate at which inflation starts at genesis.
   * It is a decimal value in the range [0.0, 100.0].
   */
  initialInflation: string;
  /**
   * Variance defines the fraction by which inflation can vary from ideal inflation in a block.
   * It is a decimal value in the range [0.0, 1.0].
   */
  variance: string;
}
export interface AkashInflationV1beta2ParamsProtoMsg {
  typeUrl: "/akash.inflation.v1beta2.Params";
  value: Uint8Array;
}
/**
 * Params defines the parameters for the x/deployment package
 * @name AkashInflationV1beta2ParamsAmino
 * @package akash.inflation.v1beta2
 * @see proto type: akash.inflation.v1beta2.AkashInflationV1beta2Params
 */
export interface AkashInflationV1beta2ParamsAmino {
  /**
   * InflationDecayFactor is the number of years it takes inflation to halve.
   */
  inflation_decay_factor: string;
  /**
   * InitialInflation is the rate at which inflation starts at genesis.
   * It is a decimal value in the range [0.0, 100.0].
   */
  initial_inflation: string;
  /**
   * Variance defines the fraction by which inflation can vary from ideal inflation in a block.
   * It is a decimal value in the range [0.0, 1.0].
   */
  variance: string;
}
export interface AkashInflationV1beta2ParamsAminoMsg {
  type: "/akash.inflation.v1beta2.Params";
  value: AkashInflationV1beta2ParamsAmino;
}
function createBaseAkashInflationV1beta2Params(): AkashInflationV1beta2Params {
  return {
    inflationDecayFactor: "",
    initialInflation: "",
    variance: ""
  };
}
/**
 * Params defines the parameters for the x/deployment package
 * @name AkashInflationV1beta2Params
 * @package akash.inflation.v1beta2
 * @see proto type: akash.inflation.v1beta2.Params
 */
export const AkashInflationV1beta2Params = {
  typeUrl: "/akash.inflation.v1beta2.Params",
  encode(message: AkashInflationV1beta2Params, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.inflationDecayFactor !== "") {
      writer.uint32(10).string(Decimal.fromUserInput(message.inflationDecayFactor, 18).atomics);
    }
    if (message.initialInflation !== "") {
      writer.uint32(18).string(Decimal.fromUserInput(message.initialInflation, 18).atomics);
    }
    if (message.variance !== "") {
      writer.uint32(26).string(Decimal.fromUserInput(message.variance, 18).atomics);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): AkashInflationV1beta2Params {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAkashInflationV1beta2Params();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.inflationDecayFactor = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 2:
          message.initialInflation = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 3:
          message.variance = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<AkashInflationV1beta2Params>): AkashInflationV1beta2Params {
    const message = createBaseAkashInflationV1beta2Params();
    message.inflationDecayFactor = object.inflationDecayFactor ?? "";
    message.initialInflation = object.initialInflation ?? "";
    message.variance = object.variance ?? "";
    return message;
  },
  fromAmino(object: AkashInflationV1beta2ParamsAmino): AkashInflationV1beta2Params {
    const message = createBaseAkashInflationV1beta2Params();
    if (object.inflation_decay_factor !== undefined && object.inflation_decay_factor !== null) {
      message.inflationDecayFactor = object.inflation_decay_factor;
    }
    if (object.initial_inflation !== undefined && object.initial_inflation !== null) {
      message.initialInflation = object.initial_inflation;
    }
    if (object.variance !== undefined && object.variance !== null) {
      message.variance = object.variance;
    }
    return message;
  },
  toAmino(message: AkashInflationV1beta2Params): AkashInflationV1beta2ParamsAmino {
    const obj: any = {};
    obj.inflation_decay_factor = Decimal.fromUserInput(message.inflationDecayFactor, 18).atomics ?? "";
    obj.initial_inflation = Decimal.fromUserInput(message.initialInflation, 18).atomics ?? "";
    obj.variance = Decimal.fromUserInput(message.variance, 18).atomics ?? "";
    return obj;
  },
  fromAminoMsg(object: AkashInflationV1beta2ParamsAminoMsg): AkashInflationV1beta2Params {
    return AkashInflationV1beta2Params.fromAmino(object.value);
  },
  fromProtoMsg(message: AkashInflationV1beta2ParamsProtoMsg): AkashInflationV1beta2Params {
    return AkashInflationV1beta2Params.decode(message.value);
  },
  toProto(message: AkashInflationV1beta2Params): Uint8Array {
    return AkashInflationV1beta2Params.encode(message).finish();
  },
  toProtoMsg(message: AkashInflationV1beta2Params): AkashInflationV1beta2ParamsProtoMsg {
    return {
      typeUrl: "/akash.inflation.v1beta2.Params",
      value: AkashInflationV1beta2Params.encode(message).finish()
    };
  }
};