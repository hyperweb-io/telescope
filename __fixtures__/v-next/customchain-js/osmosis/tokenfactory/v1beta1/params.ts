import { Coin, type CoinAmino } from "../../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../../binary";
import type { DeepPartial } from "../../../helpers";
/**
 * Params defines the parameters for the tokenfactory module.
 * @name OsmosisTokenfactoryV1beta1Params
 * @package osmosis.tokenfactory.v1beta1
 * @see proto type: osmosis.tokenfactory.v1beta1.Params
 */
export interface OsmosisTokenfactoryV1beta1Params {
  denomCreationFee: Coin[];
}
export interface OsmosisTokenfactoryV1beta1ParamsProtoMsg {
  typeUrl: "/osmosis.tokenfactory.v1beta1.Params";
  value: Uint8Array;
}
/**
 * Params defines the parameters for the tokenfactory module.
 * @name OsmosisTokenfactoryV1beta1ParamsAmino
 * @package osmosis.tokenfactory.v1beta1
 * @see proto type: osmosis.tokenfactory.v1beta1.OsmosisTokenfactoryV1beta1Params
 */
export interface OsmosisTokenfactoryV1beta1ParamsAmino {
  denom_creation_fee: CoinAmino[];
}
export interface OsmosisTokenfactoryV1beta1ParamsAminoMsg {
  type: "osmosis/tokenfactory/params";
  value: OsmosisTokenfactoryV1beta1ParamsAmino;
}
function createBaseOsmosisTokenfactoryV1beta1Params(): OsmosisTokenfactoryV1beta1Params {
  return {
    denomCreationFee: []
  };
}
/**
 * Params defines the parameters for the tokenfactory module.
 * @name OsmosisTokenfactoryV1beta1Params
 * @package osmosis.tokenfactory.v1beta1
 * @see proto type: osmosis.tokenfactory.v1beta1.Params
 */
export const OsmosisTokenfactoryV1beta1Params = {
  typeUrl: "/osmosis.tokenfactory.v1beta1.Params",
  aminoType: "osmosis/tokenfactory/params",
  encode(message: OsmosisTokenfactoryV1beta1Params, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.denomCreationFee) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): OsmosisTokenfactoryV1beta1Params {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOsmosisTokenfactoryV1beta1Params();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denomCreationFee.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<OsmosisTokenfactoryV1beta1Params>): OsmosisTokenfactoryV1beta1Params {
    const message = createBaseOsmosisTokenfactoryV1beta1Params();
    message.denomCreationFee = object.denomCreationFee?.map(e => Coin.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: OsmosisTokenfactoryV1beta1ParamsAmino): OsmosisTokenfactoryV1beta1Params {
    const message = createBaseOsmosisTokenfactoryV1beta1Params();
    message.denomCreationFee = object.denom_creation_fee?.map(e => Coin.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: OsmosisTokenfactoryV1beta1Params): OsmosisTokenfactoryV1beta1ParamsAmino {
    const obj: any = {};
    if (message.denomCreationFee) {
      obj.denom_creation_fee = message.denomCreationFee.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.denom_creation_fee = message.denomCreationFee;
    }
    return obj;
  },
  fromAminoMsg(object: OsmosisTokenfactoryV1beta1ParamsAminoMsg): OsmosisTokenfactoryV1beta1Params {
    return OsmosisTokenfactoryV1beta1Params.fromAmino(object.value);
  },
  toAminoMsg(message: OsmosisTokenfactoryV1beta1Params): OsmosisTokenfactoryV1beta1ParamsAminoMsg {
    return {
      type: "osmosis/tokenfactory/params",
      value: OsmosisTokenfactoryV1beta1Params.toAmino(message)
    };
  },
  fromProtoMsg(message: OsmosisTokenfactoryV1beta1ParamsProtoMsg): OsmosisTokenfactoryV1beta1Params {
    return OsmosisTokenfactoryV1beta1Params.decode(message.value);
  },
  toProto(message: OsmosisTokenfactoryV1beta1Params): Uint8Array {
    return OsmosisTokenfactoryV1beta1Params.encode(message).finish();
  },
  toProtoMsg(message: OsmosisTokenfactoryV1beta1Params): OsmosisTokenfactoryV1beta1ParamsProtoMsg {
    return {
      typeUrl: "/osmosis.tokenfactory.v1beta1.Params",
      value: OsmosisTokenfactoryV1beta1Params.encode(message).finish()
    };
  }
};