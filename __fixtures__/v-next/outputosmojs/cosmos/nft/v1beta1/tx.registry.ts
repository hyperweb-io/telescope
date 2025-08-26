import { TelescopeGeneratedType } from "../../../types";
import { MsgSend, MsgSendSDKType } from "./tx";
export const registry: ReadonlyArray<[string, TelescopeGeneratedType<any, any, any>]> = [["/cosmos.nft.v1beta1.MsgSend", MsgSend]];
export const MessageComposer = {
  encoded: {
    send(value: MsgSend) {
      return {
        typeUrl: "/cosmos.nft.v1beta1.MsgSend",
        value: MsgSend.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    send(value: MsgSend) {
      return {
        typeUrl: "/cosmos.nft.v1beta1.MsgSend",
        value
      };
    }
  },
  toJSON: {
    send(value: MsgSend) {
      return {
        typeUrl: "/cosmos.nft.v1beta1.MsgSend",
        value: MsgSend.toJSON(value)
      };
    }
  },
  fromJSON: {
    send(value: any) {
      return {
        typeUrl: "/cosmos.nft.v1beta1.MsgSend",
        value: MsgSend.fromJSON(value)
      };
    }
  },
  fromPartial: {
    send(value: MsgSend) {
      return {
        typeUrl: "/cosmos.nft.v1beta1.MsgSend",
        value: MsgSend.fromPartial(value)
      };
    }
  }
};