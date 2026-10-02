import { Coin, type CoinAmino } from "../../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../../binary";
import type { DeepPartial } from "../../../helpers";
/**
 * Params defines the parameters for the x/deployment package
 * @name AkashDeploymentV1beta2Params
 * @package akash.deployment.v1beta2
 * @see proto type: akash.deployment.v1beta2.Params
 */
export interface AkashDeploymentV1beta2Params {
  deploymentMinDeposit: Coin;
}
export interface AkashDeploymentV1beta2ParamsProtoMsg {
  typeUrl: "/akash.deployment.v1beta2.Params";
  value: Uint8Array;
}
/**
 * Params defines the parameters for the x/deployment package
 * @name AkashDeploymentV1beta2ParamsAmino
 * @package akash.deployment.v1beta2
 * @see proto type: akash.deployment.v1beta2.AkashDeploymentV1beta2Params
 */
export interface AkashDeploymentV1beta2ParamsAmino {
  deployment_min_deposit: CoinAmino;
}
export interface AkashDeploymentV1beta2ParamsAminoMsg {
  type: "/akash.deployment.v1beta2.Params";
  value: AkashDeploymentV1beta2ParamsAmino;
}
function createBaseAkashDeploymentV1beta2Params(): AkashDeploymentV1beta2Params {
  return {
    deploymentMinDeposit: Coin.fromPartial({})
  };
}
/**
 * Params defines the parameters for the x/deployment package
 * @name AkashDeploymentV1beta2Params
 * @package akash.deployment.v1beta2
 * @see proto type: akash.deployment.v1beta2.Params
 */
export const AkashDeploymentV1beta2Params = {
  typeUrl: "/akash.deployment.v1beta2.Params",
  encode(message: AkashDeploymentV1beta2Params, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.deploymentMinDeposit !== undefined) {
      Coin.encode(message.deploymentMinDeposit, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): AkashDeploymentV1beta2Params {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAkashDeploymentV1beta2Params();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.deploymentMinDeposit = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<AkashDeploymentV1beta2Params>): AkashDeploymentV1beta2Params {
    const message = createBaseAkashDeploymentV1beta2Params();
    message.deploymentMinDeposit = object.deploymentMinDeposit !== undefined && object.deploymentMinDeposit !== null ? Coin.fromPartial(object.deploymentMinDeposit) : undefined;
    return message;
  },
  fromAmino(object: AkashDeploymentV1beta2ParamsAmino): AkashDeploymentV1beta2Params {
    const message = createBaseAkashDeploymentV1beta2Params();
    if (object.deployment_min_deposit !== undefined && object.deployment_min_deposit !== null) {
      message.deploymentMinDeposit = Coin.fromAmino(object.deployment_min_deposit);
    }
    return message;
  },
  toAmino(message: AkashDeploymentV1beta2Params): AkashDeploymentV1beta2ParamsAmino {
    const obj: any = {};
    obj.deployment_min_deposit = message.deploymentMinDeposit ? Coin.toAmino(message.deploymentMinDeposit) : Coin.toAmino(Coin.fromPartial({}));
    return obj;
  },
  fromAminoMsg(object: AkashDeploymentV1beta2ParamsAminoMsg): AkashDeploymentV1beta2Params {
    return AkashDeploymentV1beta2Params.fromAmino(object.value);
  },
  fromProtoMsg(message: AkashDeploymentV1beta2ParamsProtoMsg): AkashDeploymentV1beta2Params {
    return AkashDeploymentV1beta2Params.decode(message.value);
  },
  toProto(message: AkashDeploymentV1beta2Params): Uint8Array {
    return AkashDeploymentV1beta2Params.encode(message).finish();
  },
  toProtoMsg(message: AkashDeploymentV1beta2Params): AkashDeploymentV1beta2ParamsProtoMsg {
    return {
      typeUrl: "/akash.deployment.v1beta2.Params",
      value: AkashDeploymentV1beta2Params.encode(message).finish()
    };
  }
};