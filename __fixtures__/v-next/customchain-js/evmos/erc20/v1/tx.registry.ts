import type { TelescopeGeneratedType } from "../../../types";
import { MsgConvertCoin, MsgConvertERC20 } from "./tx";
export const registry: ReadonlyArray<[string, TelescopeGeneratedType<any, any, any>]> = [["/evmos.erc20.v1.MsgConvertCoin", MsgConvertCoin], ["/evmos.erc20.v1.MsgConvertERC20", MsgConvertERC20]];
export const MessageComposer = {
  encoded: {
    convertCoin(value: MsgConvertCoin) {
      return {
        typeUrl: "/evmos.erc20.v1.MsgConvertCoin",
        value: MsgConvertCoin.encode(value).finish()
      };
    },
    convertERC20(value: MsgConvertERC20) {
      return {
        typeUrl: "/evmos.erc20.v1.MsgConvertERC20",
        value: MsgConvertERC20.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    convertCoin(value: MsgConvertCoin) {
      return {
        typeUrl: "/evmos.erc20.v1.MsgConvertCoin",
        value
      };
    },
    convertERC20(value: MsgConvertERC20) {
      return {
        typeUrl: "/evmos.erc20.v1.MsgConvertERC20",
        value
      };
    }
  },
  fromPartial: {
    convertCoin(value: MsgConvertCoin) {
      return {
        typeUrl: "/evmos.erc20.v1.MsgConvertCoin",
        value: MsgConvertCoin.fromPartial(value)
      };
    },
    convertERC20(value: MsgConvertERC20) {
      return {
        typeUrl: "/evmos.erc20.v1.MsgConvertERC20",
        value: MsgConvertERC20.fromPartial(value)
      };
    }
  }
};