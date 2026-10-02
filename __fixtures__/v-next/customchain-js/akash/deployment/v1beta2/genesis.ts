import { Deployment, type DeploymentAmino } from "./deployment";
import { Group, type GroupAmino } from "./group";
import { BinaryReader, BinaryWriter } from "../../../binary";
import type { DeepPartial } from "../../../helpers";
import { AkashDeploymentV1beta2Params, type AkashDeploymentV1beta2ParamsAmino } from "./params";
/**
 * GenesisDeployment defines the basic genesis state used by deployment module
 * @name GenesisDeployment
 * @package akash.deployment.v1beta2
 * @see proto type: akash.deployment.v1beta2.GenesisDeployment
 */
export interface GenesisDeployment {
  deployment: Deployment;
  groups: Group[];
}
export interface GenesisDeploymentProtoMsg {
  typeUrl: "/akash.deployment.v1beta2.GenesisDeployment";
  value: Uint8Array;
}
/**
 * GenesisDeployment defines the basic genesis state used by deployment module
 * @name GenesisDeploymentAmino
 * @package akash.deployment.v1beta2
 * @see proto type: akash.deployment.v1beta2.GenesisDeployment
 */
export interface GenesisDeploymentAmino {
  deployment: DeploymentAmino;
  groups: GroupAmino[];
}
export interface GenesisDeploymentAminoMsg {
  type: "/akash.deployment.v1beta2.GenesisDeployment";
  value: GenesisDeploymentAmino;
}
/**
 * GenesisState stores slice of genesis deployment instance
 * @name GenesisState
 * @package akash.deployment.v1beta2
 * @see proto type: akash.deployment.v1beta2.GenesisState
 */
export interface GenesisState {
  deployments: GenesisDeployment[];
  params: AkashDeploymentV1beta2Params;
}
export interface GenesisStateProtoMsg {
  typeUrl: "/akash.deployment.v1beta2.GenesisState";
  value: Uint8Array;
}
/**
 * GenesisState stores slice of genesis deployment instance
 * @name GenesisStateAmino
 * @package akash.deployment.v1beta2
 * @see proto type: akash.deployment.v1beta2.GenesisState
 */
export interface GenesisStateAmino {
  deployments: GenesisDeploymentAmino[];
  params: AkashDeploymentV1beta2ParamsAmino;
}
export interface GenesisStateAminoMsg {
  type: "/akash.deployment.v1beta2.GenesisState";
  value: GenesisStateAmino;
}
function createBaseGenesisDeployment(): GenesisDeployment {
  return {
    deployment: Deployment.fromPartial({}),
    groups: []
  };
}
/**
 * GenesisDeployment defines the basic genesis state used by deployment module
 * @name GenesisDeployment
 * @package akash.deployment.v1beta2
 * @see proto type: akash.deployment.v1beta2.GenesisDeployment
 */
export const GenesisDeployment = {
  typeUrl: "/akash.deployment.v1beta2.GenesisDeployment",
  encode(message: GenesisDeployment, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.deployment !== undefined) {
      Deployment.encode(message.deployment, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.groups) {
      Group.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): GenesisDeployment {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisDeployment();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.deployment = Deployment.decode(reader, reader.uint32());
          break;
        case 2:
          message.groups.push(Group.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<GenesisDeployment>): GenesisDeployment {
    const message = createBaseGenesisDeployment();
    message.deployment = object.deployment !== undefined && object.deployment !== null ? Deployment.fromPartial(object.deployment) : undefined;
    message.groups = object.groups?.map(e => Group.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: GenesisDeploymentAmino): GenesisDeployment {
    const message = createBaseGenesisDeployment();
    if (object.deployment !== undefined && object.deployment !== null) {
      message.deployment = Deployment.fromAmino(object.deployment);
    }
    message.groups = object.groups?.map(e => Group.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: GenesisDeployment): GenesisDeploymentAmino {
    const obj: any = {};
    obj.deployment = message.deployment ? Deployment.toAmino(message.deployment) : Deployment.toAmino(Deployment.fromPartial({}));
    if (message.groups) {
      obj.groups = message.groups.map(e => e ? Group.toAmino(e) : undefined);
    } else {
      obj.groups = message.groups;
    }
    return obj;
  },
  fromAminoMsg(object: GenesisDeploymentAminoMsg): GenesisDeployment {
    return GenesisDeployment.fromAmino(object.value);
  },
  fromProtoMsg(message: GenesisDeploymentProtoMsg): GenesisDeployment {
    return GenesisDeployment.decode(message.value);
  },
  toProto(message: GenesisDeployment): Uint8Array {
    return GenesisDeployment.encode(message).finish();
  },
  toProtoMsg(message: GenesisDeployment): GenesisDeploymentProtoMsg {
    return {
      typeUrl: "/akash.deployment.v1beta2.GenesisDeployment",
      value: GenesisDeployment.encode(message).finish()
    };
  }
};
function createBaseGenesisState(): GenesisState {
  return {
    deployments: [],
    params: AkashDeploymentV1beta2Params.fromPartial({})
  };
}
/**
 * GenesisState stores slice of genesis deployment instance
 * @name GenesisState
 * @package akash.deployment.v1beta2
 * @see proto type: akash.deployment.v1beta2.GenesisState
 */
export const GenesisState = {
  typeUrl: "/akash.deployment.v1beta2.GenesisState",
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.deployments) {
      GenesisDeployment.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.params !== undefined) {
      AkashDeploymentV1beta2Params.encode(message.params, writer.uint32(18).fork()).ldelim();
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
          message.deployments.push(GenesisDeployment.decode(reader, reader.uint32()));
          break;
        case 2:
          message.params = AkashDeploymentV1beta2Params.decode(reader, reader.uint32());
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
    message.deployments = object.deployments?.map(e => GenesisDeployment.fromPartial(e)) || [];
    message.params = object.params !== undefined && object.params !== null ? AkashDeploymentV1beta2Params.fromPartial(object.params) : undefined;
    return message;
  },
  fromAmino(object: GenesisStateAmino): GenesisState {
    const message = createBaseGenesisState();
    message.deployments = object.deployments?.map(e => GenesisDeployment.fromAmino(e)) || [];
    if (object.params !== undefined && object.params !== null) {
      message.params = AkashDeploymentV1beta2Params.fromAmino(object.params);
    }
    return message;
  },
  toAmino(message: GenesisState): GenesisStateAmino {
    const obj: any = {};
    if (message.deployments) {
      obj.deployments = message.deployments.map(e => e ? GenesisDeployment.toAmino(e) : undefined);
    } else {
      obj.deployments = message.deployments;
    }
    obj.params = message.params ? AkashDeploymentV1beta2Params.toAmino(message.params) : AkashDeploymentV1beta2Params.toAmino(AkashDeploymentV1beta2Params.fromPartial({}));
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
      typeUrl: "/akash.deployment.v1beta2.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  }
};