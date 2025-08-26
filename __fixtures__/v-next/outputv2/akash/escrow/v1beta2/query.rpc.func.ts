import { buildQuery } from "../../../helper-func-types";
import { QueryAccountsRequest, QueryAccountsResponse, QueryPaymentsRequest, QueryPaymentsResponse } from "./query";
/**
 * buf:lint:ignore RPC_REQUEST_RESPONSE_UNIQUE
 * buf:lint:ignore RPC_RESPONSE_STANDARD_NAME
 * Accounts queries all accounts
 * @name getAccounts
 * @package akash.escrow.v1beta2
 * @see proto service: akash.escrow.v1beta2.Accounts
 */
export const getAccounts = buildQuery<QueryAccountsRequest, QueryAccountsResponse>({
  encode: QueryAccountsRequest.encode,
  decode: QueryAccountsResponse.decode,
  service: "akash.escrow.v1beta2.Query",
  method: "Accounts",
  deps: [QueryAccountsRequest, QueryAccountsResponse]
});
/**
 * buf:lint:ignore RPC_REQUEST_RESPONSE_UNIQUE
 * buf:lint:ignore RPC_RESPONSE_STANDARD_NAME
 * Payments queries all payments
 * @name getPayments
 * @package akash.escrow.v1beta2
 * @see proto service: akash.escrow.v1beta2.Payments
 */
export const getPayments = buildQuery<QueryPaymentsRequest, QueryPaymentsResponse>({
  encode: QueryPaymentsRequest.encode,
  decode: QueryPaymentsResponse.decode,
  service: "akash.escrow.v1beta2.Query",
  method: "Payments",
  deps: [QueryPaymentsRequest, QueryPaymentsResponse]
});