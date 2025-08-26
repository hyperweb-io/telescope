import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination.js";
import { Account, AccountSDKType, Payment, PaymentSDKType } from "./types.js";
import { EndpointOrRpc, buildQuery } from "../../../helper-func-types.js";
import { QueryAccountsRequest, QueryAccountsRequestSDKType, QueryAccountsResponse, QueryAccountsResponseSDKType, QueryPaymentsRequest, QueryPaymentsRequestSDKType, QueryPaymentsResponse, QueryPaymentsResponseSDKType } from "./query.js";
/**
 * buf:lint:ignore RPC_REQUEST_RESPONSE_UNIQUE
 * buf:lint:ignore RPC_RESPONSE_STANDARD_NAME
 * Accounts queries all accounts
 * @name getAccounts
 * @package akash.escrow.v1beta1
 * @see proto service: akash.escrow.v1beta1.Accounts
 */
export const getAccounts = buildQuery<QueryAccountsRequest, QueryAccountsResponse>({
  encode: QueryAccountsRequest.encode,
  decode: QueryAccountsResponse.decode,
  service: "akash.escrow.v1beta1.Query",
  method: "Accounts"
});
/**
 * buf:lint:ignore RPC_REQUEST_RESPONSE_UNIQUE
 * buf:lint:ignore RPC_RESPONSE_STANDARD_NAME
 * Payments queries all payments
 * @name getPayments
 * @package akash.escrow.v1beta1
 * @see proto service: akash.escrow.v1beta1.Payments
 */
export const getPayments = buildQuery<QueryPaymentsRequest, QueryPaymentsResponse>({
  encode: QueryPaymentsRequest.encode,
  decode: QueryPaymentsResponse.decode,
  service: "akash.escrow.v1beta1.Query",
  method: "Payments"
});