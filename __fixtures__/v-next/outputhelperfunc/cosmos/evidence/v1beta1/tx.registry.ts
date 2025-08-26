import { Any, AnyProtoMsg, AnyAmino, AnySDKType } from "../../../google/protobuf/any";
import { TelescopeGeneratedType } from "../../../types";
import { MsgSubmitEvidence, MsgSubmitEvidenceSDKType } from "./tx";
export const registry: ReadonlyArray<[string, TelescopeGeneratedType<any, any, any>]> = [["/cosmos.evidence.v1beta1.MsgSubmitEvidence", MsgSubmitEvidence]];
export const MessageComposer = {
  encoded: {
    submitEvidence(value: MsgSubmitEvidence) {
      return {
        typeUrl: "/cosmos.evidence.v1beta1.MsgSubmitEvidence",
        value: MsgSubmitEvidence.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    submitEvidence(value: MsgSubmitEvidence) {
      return {
        typeUrl: "/cosmos.evidence.v1beta1.MsgSubmitEvidence",
        value
      };
    }
  },
  toJSON: {
    submitEvidence(value: MsgSubmitEvidence) {
      return {
        typeUrl: "/cosmos.evidence.v1beta1.MsgSubmitEvidence",
        value: MsgSubmitEvidence.toJSON(value)
      };
    }
  },
  fromJSON: {
    submitEvidence(value: any) {
      return {
        typeUrl: "/cosmos.evidence.v1beta1.MsgSubmitEvidence",
        value: MsgSubmitEvidence.fromJSON(value)
      };
    }
  },
  fromPartial: {
    submitEvidence(value: MsgSubmitEvidence) {
      return {
        typeUrl: "/cosmos.evidence.v1beta1.MsgSubmitEvidence",
        value: MsgSubmitEvidence.fromPartial(value)
      };
    }
  }
};