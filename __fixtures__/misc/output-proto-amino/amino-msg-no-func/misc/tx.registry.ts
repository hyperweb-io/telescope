import { EncodingTestForDontOmit, EncodingTestForDontOmitSDKType, EncodingTestForOmit, EncodingTestForOmitSDKType } from "./all_fields";
import { TelescopeGeneratedType } from "../types";
import { InputMsg, InputMsgSDKType } from "./tx";
export const registry: ReadonlyArray<[string, TelescopeGeneratedType<any, any, any>]> = [["/misc.InputMsg", InputMsg]];
export const MessageComposer = {
  encoded: {
    sendMsg(value: InputMsg) {
      return {
        typeUrl: "/misc.InputMsg",
        value: InputMsg.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    sendMsg(value: InputMsg) {
      return {
        typeUrl: "/misc.InputMsg",
        value
      };
    }
  },
  toJSON: {
    sendMsg(value: InputMsg) {
      return {
        typeUrl: "/misc.InputMsg",
        value: InputMsg.toJSON(value)
      };
    }
  },
  fromJSON: {
    sendMsg(value: any) {
      return {
        typeUrl: "/misc.InputMsg",
        value: InputMsg.fromJSON(value)
      };
    }
  },
  fromPartial: {
    sendMsg(value: InputMsg) {
      return {
        typeUrl: "/misc.InputMsg",
        value: InputMsg.fromPartial(value)
      };
    }
  }
};