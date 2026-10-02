import type { TelescopeGeneratedType } from "../../../types";
import { MsgUnjail } from "./tx";
export const registry: ReadonlyArray<[string, TelescopeGeneratedType<any, any, any>]> = [["/cosmos.slashing.v1beta1.MsgUnjail", MsgUnjail]];
export const MessageComposer = {
  encoded: {
    unjail(value: MsgUnjail) {
      return {
        typeUrl: "/cosmos.slashing.v1beta1.MsgUnjail",
        value: MsgUnjail.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    unjail(value: MsgUnjail) {
      return {
        typeUrl: "/cosmos.slashing.v1beta1.MsgUnjail",
        value
      };
    }
  },
  fromPartial: {
    unjail(value: MsgUnjail) {
      return {
        typeUrl: "/cosmos.slashing.v1beta1.MsgUnjail",
        value: MsgUnjail.fromPartial(value)
      };
    }
  }
};