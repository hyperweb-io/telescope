import { CertificateFilter, CertificateFilterSDKType, Certificate, CertificateSDKType } from "./cert.js";
import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination.js";
import { EndpointOrRpc, buildQuery } from "../../../helper-func-types.js";
import { QueryCertificatesRequest, QueryCertificatesRequestSDKType, QueryCertificatesResponse, QueryCertificatesResponseSDKType } from "./query.js";
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
  method: "Certificates"
});