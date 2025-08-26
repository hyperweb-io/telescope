import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet, DeepPartial } from "../../../helpers";
export const protobufPackage = "osmosis.ibcratelimit.v1beta1";
/**
 * Params defines the parameters for the ibc-rate-limit module.
 * @name Params
 * @package osmosis.ibcratelimit.v1beta1
 * @see proto type: osmosis.ibcratelimit.v1beta1.Params
 */
export interface Params {
  contractAddress: string;
}
export interface ParamsProtoMsg {
  typeUrl: "/osmosis.ibcratelimit.v1beta1.Params";
  value: Uint8Array;
}
/**
 * Params defines the parameters for the ibc-rate-limit module.
 * @name ParamsAmino
 * @package osmosis.ibcratelimit.v1beta1
 * @see proto type: osmosis.ibcratelimit.v1beta1.Params
 */
export interface ParamsAmino {
  contract_address?: string;
}
/**
 * Params defines the parameters for the ibc-rate-limit module.
 * @name ParamsSDKType
 * @package osmosis.ibcratelimit.v1beta1
 * @see proto type: osmosis.ibcratelimit.v1beta1.Params
 */
export interface ParamsSDKType {
  contract_address: string;
}
function createBaseParams(): Params {
  return {
    contractAddress: ""
  };
}
/**
 * Params defines the parameters for the ibc-rate-limit module.
 * @name Params
 * @package osmosis.ibcratelimit.v1beta1
 * @see proto type: osmosis.ibcratelimit.v1beta1.Params
 */
export const Params = {
  typeUrl: "/osmosis.ibcratelimit.v1beta1.Params",
  aminoType: "osmosis/ibcratelimit/params",
  is(o: any): o is Params {
    return o && (o.$typeUrl === Params.typeUrl || typeof o.contractAddress === "string");
  },
  isSDK(o: any): o is ParamsSDKType {
    return o && (o.$typeUrl === Params.typeUrl || typeof o.contract_address === "string");
  },
  isAmino(o: any): o is ParamsAmino {
    return o && (o.$typeUrl === Params.typeUrl || typeof o.contract_address === "string");
  },
  encode(message: Params, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.contractAddress !== "") {
      writer.uint32(10).string(message.contractAddress);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): Params {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.contractAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Params {
    const obj = createBaseParams();
    if (isSet(object.contractAddress)) obj.contractAddress = String(object.contractAddress);
    return obj;
  },
  fromPartial(object: DeepPartial<Params>): Params {
    const message = createBaseParams();
    message.contractAddress = object.contractAddress ?? "";
    return message;
  },
  fromSDK(object: ParamsSDKType): Params {
    return {
      contractAddress: object?.contract_address
    };
  },
  toSDK(message: Params): ParamsSDKType {
    const obj: any = {};
    obj.contract_address = message.contractAddress;
    return obj;
  },
  fromAmino(object: ParamsAmino): Params {
    const message = createBaseParams();
    if (object.contract_address !== undefined && object.contract_address !== null) {
      message.contractAddress = object.contract_address;
    }
    return message;
  },
  toAmino(message: Params, useInterfaces: boolean = true): ParamsAmino {
    const obj: any = {};
    obj.contract_address = message.contractAddress === "" ? undefined : message.contractAddress;
    return obj;
  },
  fromProtoMsg(message: ParamsProtoMsg, useInterfaces: boolean = true): Params {
    return Params.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: Params): Uint8Array {
    return Params.encode(message).finish();
  },
  toProtoMsg(message: Params): ParamsProtoMsg {
    return {
      typeUrl: "/osmosis.ibcratelimit.v1beta1.Params",
      value: Params.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};