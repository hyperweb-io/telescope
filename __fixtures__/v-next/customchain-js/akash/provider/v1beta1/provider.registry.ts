import type { TelescopeGeneratedType } from "../../../types";
import { MsgCreateProvider, MsgUpdateProvider, MsgDeleteProvider } from "./provider";
export const registry: ReadonlyArray<[string, TelescopeGeneratedType<any, any, any>]> = [["/akash.provider.v1beta1.MsgCreateProvider", MsgCreateProvider], ["/akash.provider.v1beta1.MsgUpdateProvider", MsgUpdateProvider], ["/akash.provider.v1beta1.MsgDeleteProvider", MsgDeleteProvider]];
export const MessageComposer = {
  encoded: {
    createProvider(value: MsgCreateProvider) {
      return {
        typeUrl: "/akash.provider.v1beta1.MsgCreateProvider",
        value: MsgCreateProvider.encode(value).finish()
      };
    },
    updateProvider(value: MsgUpdateProvider) {
      return {
        typeUrl: "/akash.provider.v1beta1.MsgUpdateProvider",
        value: MsgUpdateProvider.encode(value).finish()
      };
    },
    deleteProvider(value: MsgDeleteProvider) {
      return {
        typeUrl: "/akash.provider.v1beta1.MsgDeleteProvider",
        value: MsgDeleteProvider.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    createProvider(value: MsgCreateProvider) {
      return {
        typeUrl: "/akash.provider.v1beta1.MsgCreateProvider",
        value
      };
    },
    updateProvider(value: MsgUpdateProvider) {
      return {
        typeUrl: "/akash.provider.v1beta1.MsgUpdateProvider",
        value
      };
    },
    deleteProvider(value: MsgDeleteProvider) {
      return {
        typeUrl: "/akash.provider.v1beta1.MsgDeleteProvider",
        value
      };
    }
  },
  fromPartial: {
    createProvider(value: MsgCreateProvider) {
      return {
        typeUrl: "/akash.provider.v1beta1.MsgCreateProvider",
        value: MsgCreateProvider.fromPartial(value)
      };
    },
    updateProvider(value: MsgUpdateProvider) {
      return {
        typeUrl: "/akash.provider.v1beta1.MsgUpdateProvider",
        value: MsgUpdateProvider.fromPartial(value)
      };
    },
    deleteProvider(value: MsgDeleteProvider) {
      return {
        typeUrl: "/akash.provider.v1beta1.MsgDeleteProvider",
        value: MsgDeleteProvider.fromPartial(value)
      };
    }
  }
};