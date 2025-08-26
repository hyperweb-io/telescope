import { buildQuery } from "../../../helper-func-types";
import { QueryCertificatesRequest, QueryCertificatesResponse } from "./query";
/**
 * Certificates queries certificates
 * @name getCertificates
 * @package akash.cert.v1beta2
 * @see proto service: akash.cert.v1beta2.Certificates
 */
export const getCertificates = buildQuery<QueryCertificatesRequest, QueryCertificatesResponse>({
  encode: QueryCertificatesRequest.encode,
  decode: QueryCertificatesResponse.decode,
  service: "akash.cert.v1beta2.Query",
  method: "Certificates",
  deps: [QueryCertificatesRequest, QueryCertificatesResponse]
});