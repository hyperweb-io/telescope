import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../base/query/v1beta1/pagination";
import { Coin, CoinSDKType } from "../../base/v1beta1/coin";
import { Params, ParamsSDKType, Metadata, MetadataSDKType } from "./bank";
import { EndpointOrRpc, buildQuery } from "../../../helper-func-types";
import { QueryBalanceRequest, QueryBalanceRequestSDKType, QueryBalanceResponse, QueryBalanceResponseSDKType, QueryAllBalancesRequest, QueryAllBalancesRequestSDKType, QueryAllBalancesResponse, QueryAllBalancesResponseSDKType, QuerySpendableBalancesRequest, QuerySpendableBalancesRequestSDKType, QuerySpendableBalancesResponse, QuerySpendableBalancesResponseSDKType, QueryTotalSupplyRequest, QueryTotalSupplyRequestSDKType, QueryTotalSupplyResponse, QueryTotalSupplyResponseSDKType, QuerySupplyOfRequest, QuerySupplyOfRequestSDKType, QuerySupplyOfResponse, QuerySupplyOfResponseSDKType, QueryParamsRequest, QueryParamsRequestSDKType, QueryParamsResponse, QueryParamsResponseSDKType, QueryDenomMetadataRequest, QueryDenomMetadataRequestSDKType, QueryDenomMetadataResponse, QueryDenomMetadataResponseSDKType, QueryDenomsMetadataRequest, QueryDenomsMetadataRequestSDKType, QueryDenomsMetadataResponse, QueryDenomsMetadataResponseSDKType, QueryDenomOwnersRequest, QueryDenomOwnersRequestSDKType, QueryDenomOwnersResponse, QueryDenomOwnersResponseSDKType } from "./query";
/**
 * Balance queries the balance of a single coin for a single account.
 * @name getBalance
 * @package cosmos.bank.v1beta1
 * @see proto service: cosmos.bank.v1beta1.Balance
 */
export const getBalance = buildQuery<QueryBalanceRequest, QueryBalanceResponse>({
  encode: QueryBalanceRequest.encode,
  decode: QueryBalanceResponse.decode,
  service: "cosmos.bank.v1beta1.Query",
  method: "Balance"
});
/**
 * AllBalances queries the balance of all coins for a single account.
 * @name getAllBalances
 * @package cosmos.bank.v1beta1
 * @see proto service: cosmos.bank.v1beta1.AllBalances
 */
export const getAllBalances = buildQuery<QueryAllBalancesRequest, QueryAllBalancesResponse>({
  encode: QueryAllBalancesRequest.encode,
  decode: QueryAllBalancesResponse.decode,
  service: "cosmos.bank.v1beta1.Query",
  method: "AllBalances"
});
/**
 * SpendableBalances queries the spenable balance of all coins for a single
 * account.
 * @name getSpendableBalances
 * @package cosmos.bank.v1beta1
 * @see proto service: cosmos.bank.v1beta1.SpendableBalances
 */
export const getSpendableBalances = buildQuery<QuerySpendableBalancesRequest, QuerySpendableBalancesResponse>({
  encode: QuerySpendableBalancesRequest.encode,
  decode: QuerySpendableBalancesResponse.decode,
  service: "cosmos.bank.v1beta1.Query",
  method: "SpendableBalances"
});
/**
 * TotalSupply queries the total supply of all coins.
 * @name getTotalSupply
 * @package cosmos.bank.v1beta1
 * @see proto service: cosmos.bank.v1beta1.TotalSupply
 */
export const getTotalSupply = buildQuery<QueryTotalSupplyRequest, QueryTotalSupplyResponse>({
  encode: QueryTotalSupplyRequest.encode,
  decode: QueryTotalSupplyResponse.decode,
  service: "cosmos.bank.v1beta1.Query",
  method: "TotalSupply"
});
/**
 * SupplyOf queries the supply of a single coin.
 * @name getSupplyOf
 * @package cosmos.bank.v1beta1
 * @see proto service: cosmos.bank.v1beta1.SupplyOf
 */
export const getSupplyOf = buildQuery<QuerySupplyOfRequest, QuerySupplyOfResponse>({
  encode: QuerySupplyOfRequest.encode,
  decode: QuerySupplyOfResponse.decode,
  service: "cosmos.bank.v1beta1.Query",
  method: "SupplyOf"
});
/**
 * Params queries the parameters of x/bank module.
 * @name getParams
 * @package cosmos.bank.v1beta1
 * @see proto service: cosmos.bank.v1beta1.Params
 */
export const getParams = buildQuery<QueryParamsRequest, QueryParamsResponse>({
  encode: QueryParamsRequest.encode,
  decode: QueryParamsResponse.decode,
  service: "cosmos.bank.v1beta1.Query",
  method: "Params"
});
/**
 * DenomsMetadata queries the client metadata of a given coin denomination.
 * @name getDenomMetadata
 * @package cosmos.bank.v1beta1
 * @see proto service: cosmos.bank.v1beta1.DenomMetadata
 */
export const getDenomMetadata = buildQuery<QueryDenomMetadataRequest, QueryDenomMetadataResponse>({
  encode: QueryDenomMetadataRequest.encode,
  decode: QueryDenomMetadataResponse.decode,
  service: "cosmos.bank.v1beta1.Query",
  method: "DenomMetadata"
});
/**
 * DenomsMetadata queries the client metadata for all registered coin
 * denominations.
 * @name getDenomsMetadata
 * @package cosmos.bank.v1beta1
 * @see proto service: cosmos.bank.v1beta1.DenomsMetadata
 */
export const getDenomsMetadata = buildQuery<QueryDenomsMetadataRequest, QueryDenomsMetadataResponse>({
  encode: QueryDenomsMetadataRequest.encode,
  decode: QueryDenomsMetadataResponse.decode,
  service: "cosmos.bank.v1beta1.Query",
  method: "DenomsMetadata"
});
/**
 * DenomOwners queries for all account addresses that own a particular token
 * denomination.
 * @name getDenomOwners
 * @package cosmos.bank.v1beta1
 * @see proto service: cosmos.bank.v1beta1.DenomOwners
 */
export const getDenomOwners = buildQuery<QueryDenomOwnersRequest, QueryDenomOwnersResponse>({
  encode: QueryDenomOwnersRequest.encode,
  decode: QueryDenomOwnersResponse.decode,
  service: "cosmos.bank.v1beta1.Query",
  method: "DenomOwners"
});