import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../base/query/v1beta1/pagination.js";
import { Any, AnySDKType } from "../../../google/protobuf/any.js";
import { Params, ParamsSDKType } from "./auth.js";
import { EndpointOrRpc, buildQuery } from "../../../helper-func-types.js";
import { QueryAccountsRequest, QueryAccountsRequestSDKType, QueryAccountsResponse, QueryAccountsResponseSDKType, QueryAccountRequest, QueryAccountRequestSDKType, QueryAccountResponse, QueryAccountResponseSDKType, QueryParamsRequest, QueryParamsRequestSDKType, QueryParamsResponse, QueryParamsResponseSDKType, QueryModuleAccountsRequest, QueryModuleAccountsRequestSDKType, QueryModuleAccountsResponse, QueryModuleAccountsResponseSDKType, Bech32PrefixRequest, Bech32PrefixRequestSDKType, Bech32PrefixResponse, Bech32PrefixResponseSDKType, AddressBytesToStringRequest, AddressBytesToStringRequestSDKType, AddressBytesToStringResponse, AddressBytesToStringResponseSDKType, AddressStringToBytesRequest, AddressStringToBytesRequestSDKType, AddressStringToBytesResponse, AddressStringToBytesResponseSDKType } from "./query.js";
/**
 * Accounts returns all the existing accounts
 * 
 * Since: cosmos-sdk 0.43
 * @name getAccounts
 * @package cosmos.auth.v1beta1
 * @see proto service: cosmos.auth.v1beta1.Accounts
 */
export const getAccounts = buildQuery<QueryAccountsRequest, QueryAccountsResponse>({
  encode: QueryAccountsRequest.encode,
  decode: QueryAccountsResponse.decode,
  service: "cosmos.auth.v1beta1.Query",
  method: "Accounts"
});
/**
 * Account returns account details based on address.
 * @name getAccount
 * @package cosmos.auth.v1beta1
 * @see proto service: cosmos.auth.v1beta1.Account
 */
export const getAccount = buildQuery<QueryAccountRequest, QueryAccountResponse>({
  encode: QueryAccountRequest.encode,
  decode: QueryAccountResponse.decode,
  service: "cosmos.auth.v1beta1.Query",
  method: "Account"
});
/**
 * Params queries all parameters.
 * @name getParams
 * @package cosmos.auth.v1beta1
 * @see proto service: cosmos.auth.v1beta1.Params
 */
export const getParams = buildQuery<QueryParamsRequest, QueryParamsResponse>({
  encode: QueryParamsRequest.encode,
  decode: QueryParamsResponse.decode,
  service: "cosmos.auth.v1beta1.Query",
  method: "Params"
});
/**
 * ModuleAccounts returns all the existing module accounts.
 * @name getModuleAccounts
 * @package cosmos.auth.v1beta1
 * @see proto service: cosmos.auth.v1beta1.ModuleAccounts
 */
export const getModuleAccounts = buildQuery<QueryModuleAccountsRequest, QueryModuleAccountsResponse>({
  encode: QueryModuleAccountsRequest.encode,
  decode: QueryModuleAccountsResponse.decode,
  service: "cosmos.auth.v1beta1.Query",
  method: "ModuleAccounts"
});
/**
 * Bech32 queries bech32Prefix
 * @name getBech32Prefix
 * @package cosmos.auth.v1beta1
 * @see proto service: cosmos.auth.v1beta1.Bech32Prefix
 */
export const getBech32Prefix = buildQuery<Bech32PrefixRequest, Bech32PrefixResponse>({
  encode: Bech32PrefixRequest.encode,
  decode: Bech32PrefixResponse.decode,
  service: "cosmos.auth.v1beta1.Query",
  method: "Bech32Prefix"
});
/**
 * AddressBytesToString converts Account Address bytes to string
 * @name getAddressBytesToString
 * @package cosmos.auth.v1beta1
 * @see proto service: cosmos.auth.v1beta1.AddressBytesToString
 */
export const getAddressBytesToString = buildQuery<AddressBytesToStringRequest, AddressBytesToStringResponse>({
  encode: AddressBytesToStringRequest.encode,
  decode: AddressBytesToStringResponse.decode,
  service: "cosmos.auth.v1beta1.Query",
  method: "AddressBytesToString"
});
/**
 * AddressStringToBytes converts Address string to bytes
 * @name getAddressStringToBytes
 * @package cosmos.auth.v1beta1
 * @see proto service: cosmos.auth.v1beta1.AddressStringToBytes
 */
export const getAddressStringToBytes = buildQuery<AddressStringToBytesRequest, AddressStringToBytesResponse>({
  encode: AddressStringToBytesRequest.encode,
  decode: AddressStringToBytesResponse.decode,
  service: "cosmos.auth.v1beta1.Query",
  method: "AddressStringToBytes"
});