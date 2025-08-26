import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { EndpointOrRpc, buildQuery } from "../../../helper-func-types";
import { QueryBalancesRequest, QueryBalancesRequestSDKType, QueryBalancesResponse, QueryBalancesResponseSDKType } from "./query";
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