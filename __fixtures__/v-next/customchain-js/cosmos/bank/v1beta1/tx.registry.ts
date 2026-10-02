import type { TelescopeGeneratedType } from "../../../types";
import { MsgSend, MsgMultiSend } from "./tx";
export const registry: ReadonlyArray<[string, TelescopeGeneratedType<any, any, any>]> = [["/cosmos.bank.v1beta1.MsgSend", MsgSend], ["/cosmos.bank.v1beta1.MsgMultiSend", MsgMultiSend]];
export const MessageComposer = {
  encoded: {
    send(value: MsgSend) {
      return {
        typeUrl: "/cosmos.bank.v1beta1.MsgSend",
        value: MsgSend.encode(value).finish()
      };
    },
    multiSend(value: MsgMultiSend) {
      return {
        typeUrl: "/cosmos.bank.v1beta1.MsgMultiSend",
        value: MsgMultiSend.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    send(value: MsgSend) {
      return {
        typeUrl: "/cosmos.bank.v1beta1.MsgSend",
        value
      };
    },
    multiSend(value: MsgMultiSend) {
      return {
        typeUrl: "/cosmos.bank.v1beta1.MsgMultiSend",
        value
      };
    }
  },
  fromPartial: {
    send(value: MsgSend) {
      return {
        typeUrl: "/cosmos.bank.v1beta1.MsgSend",
        value: MsgSend.fromPartial(value)
      };
    },
    multiSend(value: MsgMultiSend) {
      return {
        typeUrl: "/cosmos.bank.v1beta1.MsgMultiSend",
        value: MsgMultiSend.fromPartial(value)
      };
    }
  }
};