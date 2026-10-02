import { buildUseQuery } from "../../../react-query";
import type { QueryBalanceRequest, QueryBalanceResponse, QueryAllBalancesRequest, QueryAllBalancesResponse, QuerySpendableBalancesRequest, QuerySpendableBalancesResponse, QueryTotalSupplyRequest, QueryTotalSupplyResponse, QuerySupplyOfRequest, QuerySupplyOfResponse, QueryParamsRequest, QueryParamsResponse, QueryDenomMetadataRequest, QueryDenomMetadataResponse, QueryDenomsMetadataRequest, QueryDenomsMetadataResponse, QueryDenomOwnersRequest, QueryDenomOwnersResponse } from "./query";
import { getBalance, getAllBalances, getSpendableBalances, getTotalSupply, getSupplyOf, getCosmosBankV1beta1Params, getDenomMetadata, getDenomsMetadata, getDenomOwners } from "./query.rpc.func";
/**
 * Balance queries the balance of a single coin for a single account.
 * @name useGetBalance
 * @package cosmos.bank.v1beta1
 * @see proto service: cosmos.bank.v1beta1.Balance
 */
export const useGetBalance = buildUseQuery<QueryBalanceRequest, QueryBalanceResponse>({
  builderQueryFn: getBalance,
  queryKeyPrefix: "BalanceQuery"
});
/**
 * AllBalances queries the balance of all coins for a single account.
 * @name useGetAllBalances
 * @package cosmos.bank.v1beta1
 * @see proto service: cosmos.bank.v1beta1.AllBalances
 */
export const useGetAllBalances = buildUseQuery<QueryAllBalancesRequest, QueryAllBalancesResponse>({
  builderQueryFn: getAllBalances,
  queryKeyPrefix: "AllBalancesQuery"
});
/**
 * SpendableBalances queries the spenable balance of all coins for a single
 * account.
 * @name useGetSpendableBalances
 * @package cosmos.bank.v1beta1
 * @see proto service: cosmos.bank.v1beta1.SpendableBalances
 */
export const useGetSpendableBalances = buildUseQuery<QuerySpendableBalancesRequest, QuerySpendableBalancesResponse>({
  builderQueryFn: getSpendableBalances,
  queryKeyPrefix: "SpendableBalancesQuery"
});
/**
 * TotalSupply queries the total supply of all coins.
 * @name useGetTotalSupply
 * @package cosmos.bank.v1beta1
 * @see proto service: cosmos.bank.v1beta1.TotalSupply
 */
export const useGetTotalSupply = buildUseQuery<QueryTotalSupplyRequest, QueryTotalSupplyResponse>({
  builderQueryFn: getTotalSupply,
  queryKeyPrefix: "TotalSupplyQuery"
});
/**
 * SupplyOf queries the supply of a single coin.
 * @name useGetSupplyOf
 * @package cosmos.bank.v1beta1
 * @see proto service: cosmos.bank.v1beta1.SupplyOf
 */
export const useGetSupplyOf = buildUseQuery<QuerySupplyOfRequest, QuerySupplyOfResponse>({
  builderQueryFn: getSupplyOf,
  queryKeyPrefix: "SupplyOfQuery"
});
/**
 * Params queries the parameters of x/bank module.
 * @name useGetCosmosBankV1beta1Params
 * @package cosmos.bank.v1beta1
 * @see proto service: cosmos.bank.v1beta1.Params
 */
export const useGetCosmosBankV1beta1Params = buildUseQuery<QueryParamsRequest, QueryParamsResponse>({
  builderQueryFn: getCosmosBankV1beta1Params,
  queryKeyPrefix: "ParamsQuery"
});
/**
 * DenomsMetadata queries the client metadata of a given coin denomination.
 * @name useGetDenomMetadata
 * @package cosmos.bank.v1beta1
 * @see proto service: cosmos.bank.v1beta1.DenomMetadata
 */
export const useGetDenomMetadata = buildUseQuery<QueryDenomMetadataRequest, QueryDenomMetadataResponse>({
  builderQueryFn: getDenomMetadata,
  queryKeyPrefix: "DenomMetadataQuery"
});
/**
 * DenomsMetadata queries the client metadata for all registered coin
 * denominations.
 * @name useGetDenomsMetadata
 * @package cosmos.bank.v1beta1
 * @see proto service: cosmos.bank.v1beta1.DenomsMetadata
 */
export const useGetDenomsMetadata = buildUseQuery<QueryDenomsMetadataRequest, QueryDenomsMetadataResponse>({
  builderQueryFn: getDenomsMetadata,
  queryKeyPrefix: "DenomsMetadataQuery"
});
/**
 * DenomOwners queries for all account addresses that own a particular token
 * denomination.
 * @name useGetDenomOwners
 * @package cosmos.bank.v1beta1
 * @see proto service: cosmos.bank.v1beta1.DenomOwners
 */
export const useGetDenomOwners = buildUseQuery<QueryDenomOwnersRequest, QueryDenomOwnersResponse>({
  builderQueryFn: getDenomOwners,
  queryKeyPrefix: "DenomOwnersQuery"
});