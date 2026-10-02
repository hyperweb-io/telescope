import { buildUseQuery } from "../../../react-query";
import type { QueryAccountsRequest, QueryAccountsResponse, QueryAccountRequest, QueryAccountResponse, QueryParamsRequest, QueryParamsResponse, QueryModuleAccountsRequest, QueryModuleAccountsResponse, Bech32PrefixRequest, Bech32PrefixResponse, AddressBytesToStringRequest, AddressBytesToStringResponse, AddressStringToBytesRequest, AddressStringToBytesResponse } from "./query";
import { getAccounts, getAccount, getCosmosAuthV1beta1Params, getModuleAccounts, getBech32Prefix, getAddressBytesToString, getAddressStringToBytes } from "./query.rpc.func";
/**
 * Accounts returns all the existing accounts
 * 
 * Since: cosmos-sdk 0.43
 * @name useGetAccounts
 * @package cosmos.auth.v1beta1
 * @see proto service: cosmos.auth.v1beta1.Accounts
 */
export const useGetAccounts = buildUseQuery<QueryAccountsRequest, QueryAccountsResponse>({
  builderQueryFn: getAccounts,
  queryKeyPrefix: "AccountsQuery"
});
/**
 * Account returns account details based on address.
 * @name useGetAccount
 * @package cosmos.auth.v1beta1
 * @see proto service: cosmos.auth.v1beta1.Account
 */
export const useGetAccount = buildUseQuery<QueryAccountRequest, QueryAccountResponse>({
  builderQueryFn: getAccount,
  queryKeyPrefix: "AccountQuery"
});
/**
 * Params queries all parameters.
 * @name useGetCosmosAuthV1beta1Params
 * @package cosmos.auth.v1beta1
 * @see proto service: cosmos.auth.v1beta1.Params
 */
export const useGetCosmosAuthV1beta1Params = buildUseQuery<QueryParamsRequest, QueryParamsResponse>({
  builderQueryFn: getCosmosAuthV1beta1Params,
  queryKeyPrefix: "ParamsQuery"
});
/**
 * ModuleAccounts returns all the existing module accounts.
 * @name useGetModuleAccounts
 * @package cosmos.auth.v1beta1
 * @see proto service: cosmos.auth.v1beta1.ModuleAccounts
 */
export const useGetModuleAccounts = buildUseQuery<QueryModuleAccountsRequest, QueryModuleAccountsResponse>({
  builderQueryFn: getModuleAccounts,
  queryKeyPrefix: "ModuleAccountsQuery"
});
/**
 * Bech32 queries bech32Prefix
 * @name useGetBech32Prefix
 * @package cosmos.auth.v1beta1
 * @see proto service: cosmos.auth.v1beta1.Bech32Prefix
 */
export const useGetBech32Prefix = buildUseQuery<Bech32PrefixRequest, Bech32PrefixResponse>({
  builderQueryFn: getBech32Prefix,
  queryKeyPrefix: "Bech32PrefixQuery"
});
/**
 * AddressBytesToString converts Account Address bytes to string
 * @name useGetAddressBytesToString
 * @package cosmos.auth.v1beta1
 * @see proto service: cosmos.auth.v1beta1.AddressBytesToString
 */
export const useGetAddressBytesToString = buildUseQuery<AddressBytesToStringRequest, AddressBytesToStringResponse>({
  builderQueryFn: getAddressBytesToString,
  queryKeyPrefix: "AddressBytesToStringQuery"
});
/**
 * AddressStringToBytes converts Address string to bytes
 * @name useGetAddressStringToBytes
 * @package cosmos.auth.v1beta1
 * @see proto service: cosmos.auth.v1beta1.AddressStringToBytes
 */
export const useGetAddressStringToBytes = buildUseQuery<AddressStringToBytesRequest, AddressStringToBytesResponse>({
  builderQueryFn: getAddressStringToBytes,
  queryKeyPrefix: "AddressStringToBytesQuery"
});