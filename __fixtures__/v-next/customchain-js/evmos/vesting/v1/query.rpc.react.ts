import { buildUseQuery } from "../../../react-query";
import type { QueryBalancesRequest, QueryBalancesResponse } from "./query";
import { getBalances } from "./query.rpc.func";
/**
 * Retrieves the unvested, vested and locked tokens for a vesting account
 * @name useGetBalances
 * @package evmos.vesting.v1
 * @see proto service: evmos.vesting.v1.Balances
 */
export const useGetBalances = buildUseQuery<QueryBalancesRequest, QueryBalancesResponse>({
  builderQueryFn: getBalances,
  queryKeyPrefix: "BalancesQuery"
});