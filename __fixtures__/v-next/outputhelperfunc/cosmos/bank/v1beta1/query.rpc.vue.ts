import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../base/query/v1beta1/pagination";
import { Coin, CoinSDKType } from "../../base/v1beta1/coin";
import { Params, ParamsSDKType, Metadata, MetadataSDKType } from "./bank";
import { EndpointOrRpc, buildQuery } from "../../../helper-func-types";
import { buildUseQuery } from "../../../react-query";
import { buildUseVueQuery } from "../../../vue-query";
import { type QueryBalanceRequest, QueryBalanceRequestSDKType, type QueryBalanceResponse, QueryBalanceResponseSDKType, type QueryAllBalancesRequest, QueryAllBalancesRequestSDKType, type QueryAllBalancesResponse, QueryAllBalancesResponseSDKType, type QuerySpendableBalancesRequest, QuerySpendableBalancesRequestSDKType, type QuerySpendableBalancesResponse, QuerySpendableBalancesResponseSDKType, type QueryTotalSupplyRequest, QueryTotalSupplyRequestSDKType, type QueryTotalSupplyResponse, QueryTotalSupplyResponseSDKType, type QuerySupplyOfRequest, QuerySupplyOfRequestSDKType, type QuerySupplyOfResponse, QuerySupplyOfResponseSDKType, type QueryParamsRequest, QueryParamsRequestSDKType, type QueryParamsResponse, QueryParamsResponseSDKType, type QueryDenomMetadataRequest, QueryDenomMetadataRequestSDKType, type QueryDenomMetadataResponse, QueryDenomMetadataResponseSDKType, type QueryDenomsMetadataRequest, QueryDenomsMetadataRequestSDKType, type QueryDenomsMetadataResponse, QueryDenomsMetadataResponseSDKType, type QueryDenomOwnersRequest, QueryDenomOwnersRequestSDKType, type QueryDenomOwnersResponse, QueryDenomOwnersResponseSDKType } from "./query";
import { getBalance, getAllBalances, getSpendableBalances, getTotalSupply, getSupplyOf, getParams, getDenomMetadata, getDenomsMetadata, getDenomOwners } from "./query.rpc.func";
/**
 * Balance queries the balance of a single coin for a single account.
 * @name useGetBalance
 * @package cosmos.bank.v1beta1
 * @see proto service: cosmos.bank.v1beta1.Balance
 */
export const useGetBalance = buildUseVueQuery<QueryBalanceRequest, QueryBalanceResponse>({
  builderQueryFn: getBalance,
  queryKeyPrefix: "BalanceQuery"
});
/**
 * AllBalances queries the balance of all coins for a single account.
 * @name useGetAllBalances
 * @package cosmos.bank.v1beta1
 * @see proto service: cosmos.bank.v1beta1.AllBalances
 */
export const useGetAllBalances = buildUseVueQuery<QueryAllBalancesRequest, QueryAllBalancesResponse>({
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
export const useGetSpendableBalances = buildUseVueQuery<QuerySpendableBalancesRequest, QuerySpendableBalancesResponse>({
  builderQueryFn: getSpendableBalances,
  queryKeyPrefix: "SpendableBalancesQuery"
});
/**
 * TotalSupply queries the total supply of all coins.
 * @name useGetTotalSupply
 * @package cosmos.bank.v1beta1
 * @see proto service: cosmos.bank.v1beta1.TotalSupply
 */
export const useGetTotalSupply = buildUseVueQuery<QueryTotalSupplyRequest, QueryTotalSupplyResponse>({
  builderQueryFn: getTotalSupply,
  queryKeyPrefix: "TotalSupplyQuery"
});
/**
 * SupplyOf queries the supply of a single coin.
 * @name useGetSupplyOf
 * @package cosmos.bank.v1beta1
 * @see proto service: cosmos.bank.v1beta1.SupplyOf
 */
export const useGetSupplyOf = buildUseVueQuery<QuerySupplyOfRequest, QuerySupplyOfResponse>({
  builderQueryFn: getSupplyOf,
  queryKeyPrefix: "SupplyOfQuery"
});
/**
 * Params queries the parameters of x/bank module.
 * @name useGetParams
 * @package cosmos.bank.v1beta1
 * @see proto service: cosmos.bank.v1beta1.Params
 */
export const useGetParams = buildUseVueQuery<QueryParamsRequest, QueryParamsResponse>({
  builderQueryFn: getParams,
  queryKeyPrefix: "ParamsQuery"
});
/**
 * DenomsMetadata queries the client metadata of a given coin denomination.
 * @name useGetDenomMetadata
 * @package cosmos.bank.v1beta1
 * @see proto service: cosmos.bank.v1beta1.DenomMetadata
 */
export const useGetDenomMetadata = buildUseVueQuery<QueryDenomMetadataRequest, QueryDenomMetadataResponse>({
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
export const useGetDenomsMetadata = buildUseVueQuery<QueryDenomsMetadataRequest, QueryDenomsMetadataResponse>({
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
export const useGetDenomOwners = buildUseVueQuery<QueryDenomOwnersRequest, QueryDenomOwnersResponse>({
  builderQueryFn: getDenomOwners,
  queryKeyPrefix: "DenomOwnersQuery"
});