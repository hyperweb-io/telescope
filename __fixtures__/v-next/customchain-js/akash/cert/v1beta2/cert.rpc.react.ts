import { buildUseMutation } from "../../../react-query";
import type { MsgCreateCertificate, MsgRevokeCertificate } from "./cert";
import { createCertificate, revokeCertificate } from "./cert.rpc.func";
/**
 * CreateCertificate defines a method to create new certificate given proper inputs.
 * @name useCreateCertificate
 * @package akash.cert.v1beta2
 * @see proto service: akash.cert.v1beta2.CreateCertificate
 */
export const useCreateCertificate = buildUseMutation<MsgCreateCertificate, Error>({
  builderMutationFn: createCertificate
});
/**
 * RevokeCertificate defines a method to revoke the certificate
 * @name useRevokeCertificate
 * @package akash.cert.v1beta2
 * @see proto service: akash.cert.v1beta2.RevokeCertificate
 */
export const useRevokeCertificate = buildUseMutation<MsgRevokeCertificate, Error>({
  builderMutationFn: revokeCertificate
});