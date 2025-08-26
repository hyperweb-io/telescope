import { Any, AnyProtoMsg, AnyAmino, AnySDKType } from "../../../google/protobuf/any";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { GlobalDecoderRegistry } from "../../../registry";
import { isSet, DeepPartial, bytesFromBase64, base64FromBytes } from "../../../helpers";
export const protobufPackage = "cosmos.evidence.v1beta1";
/**
 * MsgSubmitEvidence represents a message that supports submitting arbitrary
 * Evidence of misbehavior such as equivocation or counterfactual signing.
 * @name MsgSubmitEvidence
 * @package cosmos.evidence.v1beta1
 * @see proto type: cosmos.evidence.v1beta1.MsgSubmitEvidence
 */
export interface MsgSubmitEvidence {
  submitter: string;
  evidence?: Any | undefined;
}
export interface MsgSubmitEvidenceProtoMsg {
  typeUrl: "/cosmos.evidence.v1beta1.MsgSubmitEvidence";
  value: Uint8Array;
}
export type MsgSubmitEvidenceEncoded = Omit<MsgSubmitEvidence, "evidence"> & {
  evidence?: AnyProtoMsg | undefined;
};
/**
 * MsgSubmitEvidence represents a message that supports submitting arbitrary
 * Evidence of misbehavior such as equivocation or counterfactual signing.
 * @name MsgSubmitEvidenceAmino
 * @package cosmos.evidence.v1beta1
 * @see proto type: cosmos.evidence.v1beta1.MsgSubmitEvidence
 */
export interface MsgSubmitEvidenceAmino {
  submitter?: string;
  evidence?: AnyAmino;
}
/**
 * MsgSubmitEvidence represents a message that supports submitting arbitrary
 * Evidence of misbehavior such as equivocation or counterfactual signing.
 * @name MsgSubmitEvidenceSDKType
 * @package cosmos.evidence.v1beta1
 * @see proto type: cosmos.evidence.v1beta1.MsgSubmitEvidence
 */
export interface MsgSubmitEvidenceSDKType {
  submitter: string;
  evidence?: AnySDKType | undefined;
}
/**
 * MsgSubmitEvidenceResponse defines the Msg/SubmitEvidence response type.
 * @name MsgSubmitEvidenceResponse
 * @package cosmos.evidence.v1beta1
 * @see proto type: cosmos.evidence.v1beta1.MsgSubmitEvidenceResponse
 */
export interface MsgSubmitEvidenceResponse {
  /**
   * hash defines the hash of the evidence.
   */
  hash: Uint8Array;
}
export interface MsgSubmitEvidenceResponseProtoMsg {
  typeUrl: "/cosmos.evidence.v1beta1.MsgSubmitEvidenceResponse";
  value: Uint8Array;
}
/**
 * MsgSubmitEvidenceResponse defines the Msg/SubmitEvidence response type.
 * @name MsgSubmitEvidenceResponseAmino
 * @package cosmos.evidence.v1beta1
 * @see proto type: cosmos.evidence.v1beta1.MsgSubmitEvidenceResponse
 */
export interface MsgSubmitEvidenceResponseAmino {
  /**
   * hash defines the hash of the evidence.
   */
  hash?: string;
}
/**
 * MsgSubmitEvidenceResponse defines the Msg/SubmitEvidence response type.
 * @name MsgSubmitEvidenceResponseSDKType
 * @package cosmos.evidence.v1beta1
 * @see proto type: cosmos.evidence.v1beta1.MsgSubmitEvidenceResponse
 */
export interface MsgSubmitEvidenceResponseSDKType {
  hash: Uint8Array;
}
function createBaseMsgSubmitEvidence(): MsgSubmitEvidence {
  return {
    submitter: "",
    evidence: undefined
  };
}
/**
 * MsgSubmitEvidence represents a message that supports submitting arbitrary
 * Evidence of misbehavior such as equivocation or counterfactual signing.
 * @name MsgSubmitEvidence
 * @package cosmos.evidence.v1beta1
 * @see proto type: cosmos.evidence.v1beta1.MsgSubmitEvidence
 */
export const MsgSubmitEvidence = {
  typeUrl: "/cosmos.evidence.v1beta1.MsgSubmitEvidence",
  aminoType: "cosmos-sdk/MsgSubmitEvidence",
  is(o: any): o is MsgSubmitEvidence {
    return o && (o.$typeUrl === MsgSubmitEvidence.typeUrl || typeof o.submitter === "string");
  },
  isSDK(o: any): o is MsgSubmitEvidenceSDKType {
    return o && (o.$typeUrl === MsgSubmitEvidence.typeUrl || typeof o.submitter === "string");
  },
  isAmino(o: any): o is MsgSubmitEvidenceAmino {
    return o && (o.$typeUrl === MsgSubmitEvidence.typeUrl || typeof o.submitter === "string");
  },
  encode(message: MsgSubmitEvidence, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.submitter !== "") {
      writer.uint32(10).string(message.submitter);
    }
    if (message.evidence !== undefined) {
      Any.encode(GlobalDecoderRegistry.wrapAny(message.evidence), writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): MsgSubmitEvidence {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSubmitEvidence();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.submitter = reader.string();
          break;
        case 2:
          message.evidence = GlobalDecoderRegistry.unwrapAny(reader);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgSubmitEvidence {
    const obj = createBaseMsgSubmitEvidence();
    if (isSet(object.submitter)) obj.submitter = String(object.submitter);
    if (isSet(object.evidence)) obj.evidence = GlobalDecoderRegistry.fromJSON(object.evidence);
    return obj;
  },
  fromPartial(object: DeepPartial<MsgSubmitEvidence>): MsgSubmitEvidence {
    const message = createBaseMsgSubmitEvidence();
    message.submitter = object.submitter ?? "";
    if (object.evidence !== undefined && object.evidence !== null) {
      message.evidence = GlobalDecoderRegistry.fromPartial(object.evidence);
    }
    return message;
  },
  fromSDK(object: MsgSubmitEvidenceSDKType): MsgSubmitEvidence {
    return {
      submitter: object?.submitter,
      evidence: object.evidence ? GlobalDecoderRegistry.fromSDK(object.evidence) : undefined
    };
  },
  toSDK(message: MsgSubmitEvidence): MsgSubmitEvidenceSDKType {
    const obj: any = {};
    obj.submitter = message.submitter;
    message.evidence !== undefined && (obj.evidence = message.evidence ? GlobalDecoderRegistry.toSDK(message.evidence) : undefined);
    return obj;
  },
  fromAmino(object: MsgSubmitEvidenceAmino): MsgSubmitEvidence {
    const message = createBaseMsgSubmitEvidence();
    if (object.submitter !== undefined && object.submitter !== null) {
      message.submitter = object.submitter;
    }
    if (object.evidence !== undefined && object.evidence !== null) {
      message.evidence = GlobalDecoderRegistry.fromAminoMsg(object.evidence);
    }
    return message;
  },
  toAmino(message: MsgSubmitEvidence, useInterfaces: boolean = true): MsgSubmitEvidenceAmino {
    const obj: any = {};
    obj.submitter = message.submitter === "" ? undefined : message.submitter;
    obj.evidence = message.evidence ? GlobalDecoderRegistry.toAminoMsg(message.evidence) : undefined;
    return obj;
  },
  fromProtoMsg(message: MsgSubmitEvidenceProtoMsg, useInterfaces: boolean = true): MsgSubmitEvidence {
    return MsgSubmitEvidence.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: MsgSubmitEvidence): Uint8Array {
    return MsgSubmitEvidence.encode(message).finish();
  },
  toProtoMsg(message: MsgSubmitEvidence): MsgSubmitEvidenceProtoMsg {
    return {
      typeUrl: "/cosmos.evidence.v1beta1.MsgSubmitEvidence",
      value: MsgSubmitEvidence.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseMsgSubmitEvidenceResponse(): MsgSubmitEvidenceResponse {
  return {
    hash: new Uint8Array()
  };
}
/**
 * MsgSubmitEvidenceResponse defines the Msg/SubmitEvidence response type.
 * @name MsgSubmitEvidenceResponse
 * @package cosmos.evidence.v1beta1
 * @see proto type: cosmos.evidence.v1beta1.MsgSubmitEvidenceResponse
 */
export const MsgSubmitEvidenceResponse = {
  typeUrl: "/cosmos.evidence.v1beta1.MsgSubmitEvidenceResponse",
  aminoType: "cosmos-sdk/MsgSubmitEvidenceResponse",
  is(o: any): o is MsgSubmitEvidenceResponse {
    return o && (o.$typeUrl === MsgSubmitEvidenceResponse.typeUrl || o.hash instanceof Uint8Array || typeof o.hash === "string");
  },
  isSDK(o: any): o is MsgSubmitEvidenceResponseSDKType {
    return o && (o.$typeUrl === MsgSubmitEvidenceResponse.typeUrl || o.hash instanceof Uint8Array || typeof o.hash === "string");
  },
  isAmino(o: any): o is MsgSubmitEvidenceResponseAmino {
    return o && (o.$typeUrl === MsgSubmitEvidenceResponse.typeUrl || o.hash instanceof Uint8Array || typeof o.hash === "string");
  },
  encode(message: MsgSubmitEvidenceResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.hash.length !== 0) {
      writer.uint32(34).bytes(message.hash);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): MsgSubmitEvidenceResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSubmitEvidenceResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 4:
          message.hash = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgSubmitEvidenceResponse {
    const obj = createBaseMsgSubmitEvidenceResponse();
    if (isSet(object.hash)) obj.hash = bytesFromBase64(object.hash);
    return obj;
  },
  fromPartial(object: DeepPartial<MsgSubmitEvidenceResponse>): MsgSubmitEvidenceResponse {
    const message = createBaseMsgSubmitEvidenceResponse();
    message.hash = object.hash ?? new Uint8Array();
    return message;
  },
  fromSDK(object: MsgSubmitEvidenceResponseSDKType): MsgSubmitEvidenceResponse {
    return {
      hash: object?.hash
    };
  },
  toSDK(message: MsgSubmitEvidenceResponse): MsgSubmitEvidenceResponseSDKType {
    const obj: any = {};
    obj.hash = message.hash;
    return obj;
  },
  fromAmino(object: MsgSubmitEvidenceResponseAmino): MsgSubmitEvidenceResponse {
    const message = createBaseMsgSubmitEvidenceResponse();
    if (object.hash !== undefined && object.hash !== null) {
      message.hash = bytesFromBase64(object.hash);
    }
    return message;
  },
  toAmino(message: MsgSubmitEvidenceResponse, useInterfaces: boolean = true): MsgSubmitEvidenceResponseAmino {
    const obj: any = {};
    obj.hash = message.hash ? base64FromBytes(message.hash) : undefined;
    return obj;
  },
  fromProtoMsg(message: MsgSubmitEvidenceResponseProtoMsg, useInterfaces: boolean = true): MsgSubmitEvidenceResponse {
    return MsgSubmitEvidenceResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: MsgSubmitEvidenceResponse): Uint8Array {
    return MsgSubmitEvidenceResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgSubmitEvidenceResponse): MsgSubmitEvidenceResponseProtoMsg {
    return {
      typeUrl: "/cosmos.evidence.v1beta1.MsgSubmitEvidenceResponse",
      value: MsgSubmitEvidenceResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};