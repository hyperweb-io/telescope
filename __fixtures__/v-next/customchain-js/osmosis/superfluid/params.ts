import { BinaryReader, BinaryWriter } from "../../binary";
import { Decimal } from "@interchainjs/math";
import { DeepPartial } from "../../helpers";
/**
 * Params holds parameters for the superfluid module
 * @name OsmosisSuperfluidParams
 * @package osmosis.superfluid
 * @see proto type: osmosis.superfluid.Params
 */
export interface OsmosisSuperfluidParams {
  /**
   * minimum_risk_factor is to be cut on OSMO equivalent value of lp tokens for
   * superfluid staking, default: 5%. The minimum risk factor works
   * to counter-balance the staked amount on chain's exposure to various asset
   * volatilities, and have base staking be 'resistant' to volatility.
   */
  minimumRiskFactor: string;
}
export interface OsmosisSuperfluidParamsProtoMsg {
  typeUrl: "/osmosis.superfluid.Params";
  value: Uint8Array;
}
/**
 * Params holds parameters for the superfluid module
 * @name OsmosisSuperfluidParamsAmino
 * @package osmosis.superfluid
 * @see proto type: osmosis.superfluid.OsmosisSuperfluidParams
 */
export interface OsmosisSuperfluidParamsAmino {
  /**
   * minimum_risk_factor is to be cut on OSMO equivalent value of lp tokens for
   * superfluid staking, default: 5%. The minimum risk factor works
   * to counter-balance the staked amount on chain's exposure to various asset
   * volatilities, and have base staking be 'resistant' to volatility.
   */
  minimum_risk_factor: string;
}
export interface OsmosisSuperfluidParamsAminoMsg {
  type: "osmosis/params";
  value: OsmosisSuperfluidParamsAmino;
}
function createBaseOsmosisSuperfluidParams(): OsmosisSuperfluidParams {
  return {
    minimumRiskFactor: ""
  };
}
/**
 * Params holds parameters for the superfluid module
 * @name OsmosisSuperfluidParams
 * @package osmosis.superfluid
 * @see proto type: osmosis.superfluid.Params
 */
export const OsmosisSuperfluidParams = {
  typeUrl: "/osmosis.superfluid.Params",
  aminoType: "osmosis/params",
  encode(message: OsmosisSuperfluidParams, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.minimumRiskFactor !== "") {
      writer.uint32(10).string(Decimal.fromUserInput(message.minimumRiskFactor, 18).atomics);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): OsmosisSuperfluidParams {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOsmosisSuperfluidParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.minimumRiskFactor = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<OsmosisSuperfluidParams>): OsmosisSuperfluidParams {
    const message = createBaseOsmosisSuperfluidParams();
    message.minimumRiskFactor = object.minimumRiskFactor ?? "";
    return message;
  },
  fromAmino(object: OsmosisSuperfluidParamsAmino): OsmosisSuperfluidParams {
    const message = createBaseOsmosisSuperfluidParams();
    if (object.minimum_risk_factor !== undefined && object.minimum_risk_factor !== null) {
      message.minimumRiskFactor = object.minimum_risk_factor;
    }
    return message;
  },
  toAmino(message: OsmosisSuperfluidParams): OsmosisSuperfluidParamsAmino {
    const obj: any = {};
    obj.minimum_risk_factor = message.minimumRiskFactor === "" ? undefined : Decimal.fromUserInput(message.minimumRiskFactor, 18).atomics;
    return obj;
  },
  fromAminoMsg(object: OsmosisSuperfluidParamsAminoMsg): OsmosisSuperfluidParams {
    return OsmosisSuperfluidParams.fromAmino(object.value);
  },
  toAminoMsg(message: OsmosisSuperfluidParams): OsmosisSuperfluidParamsAminoMsg {
    return {
      type: "osmosis/params",
      value: OsmosisSuperfluidParams.toAmino(message)
    };
  },
  fromProtoMsg(message: OsmosisSuperfluidParamsProtoMsg): OsmosisSuperfluidParams {
    return OsmosisSuperfluidParams.decode(message.value);
  },
  toProto(message: OsmosisSuperfluidParams): Uint8Array {
    return OsmosisSuperfluidParams.encode(message).finish();
  },
  toProtoMsg(message: OsmosisSuperfluidParams): OsmosisSuperfluidParamsProtoMsg {
    return {
      typeUrl: "/osmosis.superfluid.Params",
      value: OsmosisSuperfluidParams.encode(message).finish()
    };
  }
};