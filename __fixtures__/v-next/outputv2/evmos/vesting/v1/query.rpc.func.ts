import { buildQuery } from "../../../helper-func-types";
import { QueryBalancesRequest, QueryBalancesResponse } from "./query";
/**
 * Retrieves the unvested, vested and locked tokens for a vesting account
 * @name getBalances
 * @package evmos.vesting.v1
 * @see proto service: evmos.vesting.v1.Balances
 */
export const getBalances = buildQuery<QueryBalancesRequest, QueryBalancesResponse>({
  encode: QueryBalancesRequest.encode,
  decode: QueryBalancesResponse.decode,
  service: "evmos.vesting.v1.Query",
  method: "Balances",
  deps: [QueryBalancesRequest, QueryBalancesResponse]
});