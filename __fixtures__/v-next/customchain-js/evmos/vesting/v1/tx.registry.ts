import type { TelescopeGeneratedType } from "../../../types";
import { MsgCreateClawbackVestingAccount, MsgClawback } from "./tx";
export const registry: ReadonlyArray<[string, TelescopeGeneratedType<any, any, any>]> = [["/evmos.vesting.v1.MsgCreateClawbackVestingAccount", MsgCreateClawbackVestingAccount], ["/evmos.vesting.v1.MsgClawback", MsgClawback]];
export const MessageComposer = {
  encoded: {
    createClawbackVestingAccount(value: MsgCreateClawbackVestingAccount) {
      return {
        typeUrl: "/evmos.vesting.v1.MsgCreateClawbackVestingAccount",
        value: MsgCreateClawbackVestingAccount.encode(value).finish()
      };
    },
    clawback(value: MsgClawback) {
      return {
        typeUrl: "/evmos.vesting.v1.MsgClawback",
        value: MsgClawback.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    createClawbackVestingAccount(value: MsgCreateClawbackVestingAccount) {
      return {
        typeUrl: "/evmos.vesting.v1.MsgCreateClawbackVestingAccount",
        value
      };
    },
    clawback(value: MsgClawback) {
      return {
        typeUrl: "/evmos.vesting.v1.MsgClawback",
        value
      };
    }
  },
  fromPartial: {
    createClawbackVestingAccount(value: MsgCreateClawbackVestingAccount) {
      return {
        typeUrl: "/evmos.vesting.v1.MsgCreateClawbackVestingAccount",
        value: MsgCreateClawbackVestingAccount.fromPartial(value)
      };
    },
    clawback(value: MsgClawback) {
      return {
        typeUrl: "/evmos.vesting.v1.MsgClawback",
        value: MsgClawback.fromPartial(value)
      };
    }
  }
};