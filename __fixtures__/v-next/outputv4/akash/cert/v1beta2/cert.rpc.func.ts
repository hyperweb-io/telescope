import { buildTx } from "../../../helper-func-types.js";
import { MsgCreateCertificate, MsgCreateCertificateSDKType, MsgCreateCertificateResponse, MsgCreateCertificateResponseSDKType, MsgRevokeCertificate, MsgRevokeCertificateSDKType, MsgRevokeCertificateResponse, MsgRevokeCertificateResponseSDKType } from "./cert.js";
/**
 * CreateCertificate defines a method to create new certificate given proper inputs.
 * @name createCertificate
 * @package akash.cert.v1beta2
 * @see proto service: akash.cert.v1beta2.CreateCertificate
 */
export const createCertificate = buildTx<MsgCreateCertificate>({
  msg: MsgCreateCertificate
});
/**
 * RevokeCertificate defines a method to revoke the certificate
 * @name revokeCertificate
 * @package akash.cert.v1beta2
 * @see proto service: akash.cert.v1beta2.RevokeCertificate
 */
export const revokeCertificate = buildTx<MsgRevokeCertificate>({
  msg: MsgRevokeCertificate
});