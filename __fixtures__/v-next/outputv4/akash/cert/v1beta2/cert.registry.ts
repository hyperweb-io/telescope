import { TelescopeGeneratedType } from "../../../types.js";
import { MsgCreateCertificate, MsgCreateCertificateSDKType, MsgRevokeCertificate, MsgRevokeCertificateSDKType } from "./cert.js";
export const registry: ReadonlyArray<[string, TelescopeGeneratedType<any, any, any>]> = [["/akash.cert.v1beta2.MsgCreateCertificate", MsgCreateCertificate], ["/akash.cert.v1beta2.MsgRevokeCertificate", MsgRevokeCertificate]];
export const MessageComposer = {
  encoded: {
    createCertificate(value: MsgCreateCertificate) {
      return {
        typeUrl: "/akash.cert.v1beta2.MsgCreateCertificate",
        value: MsgCreateCertificate.encode(value).finish()
      };
    },
    revokeCertificate(value: MsgRevokeCertificate) {
      return {
        typeUrl: "/akash.cert.v1beta2.MsgRevokeCertificate",
        value: MsgRevokeCertificate.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    createCertificate(value: MsgCreateCertificate) {
      return {
        typeUrl: "/akash.cert.v1beta2.MsgCreateCertificate",
        value
      };
    },
    revokeCertificate(value: MsgRevokeCertificate) {
      return {
        typeUrl: "/akash.cert.v1beta2.MsgRevokeCertificate",
        value
      };
    }
  },
  toJSON: {
    createCertificate(value: MsgCreateCertificate) {
      return {
        typeUrl: "/akash.cert.v1beta2.MsgCreateCertificate",
        value: MsgCreateCertificate.toJSON(value)
      };
    },
    revokeCertificate(value: MsgRevokeCertificate) {
      return {
        typeUrl: "/akash.cert.v1beta2.MsgRevokeCertificate",
        value: MsgRevokeCertificate.toJSON(value)
      };
    }
  },
  fromJSON: {
    createCertificate(value: any) {
      return {
        typeUrl: "/akash.cert.v1beta2.MsgCreateCertificate",
        value: MsgCreateCertificate.fromJSON(value)
      };
    },
    revokeCertificate(value: any) {
      return {
        typeUrl: "/akash.cert.v1beta2.MsgRevokeCertificate",
        value: MsgRevokeCertificate.fromJSON(value)
      };
    }
  },
  fromPartial: {
    createCertificate(value: MsgCreateCertificate) {
      return {
        typeUrl: "/akash.cert.v1beta2.MsgCreateCertificate",
        value: MsgCreateCertificate.fromPartial(value)
      };
    },
    revokeCertificate(value: MsgRevokeCertificate) {
      return {
        typeUrl: "/akash.cert.v1beta2.MsgRevokeCertificate",
        value: MsgRevokeCertificate.fromPartial(value)
      };
    }
  }
};