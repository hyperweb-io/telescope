import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../base/query/v1beta1/pagination";
import { Any, AnyProtoMsg, AnyAmino, AnySDKType } from "../../../google/protobuf/any";
import { Params, ParamsSDKType } from "./auth";
import { setPaginationParams } from "../../../helpers";
import type { LCDClient } from "@cosmology/lcd";
import { type QueryAccountsRequest, QueryAccountsRequestSDKType, QueryAccountsResponse, type QueryAccountsResponseSDKType, type QueryAccountRequest, QueryAccountRequestSDKType, QueryAccountResponse, type QueryAccountResponseSDKType, type QueryParamsRequest, QueryParamsRequestSDKType, QueryParamsResponse, type QueryParamsResponseSDKType, type QueryModuleAccountsRequest, QueryModuleAccountsRequestSDKType, QueryModuleAccountsResponse, type QueryModuleAccountsResponseSDKType, type Bech32PrefixRequest, Bech32PrefixRequestSDKType, Bech32PrefixResponse, type Bech32PrefixResponseSDKType, type AddressBytesToStringRequest, AddressBytesToStringRequestSDKType, AddressBytesToStringResponse, type AddressBytesToStringResponseSDKType, type AddressStringToBytesRequest, AddressStringToBytesRequestSDKType, AddressStringToBytesResponse, type AddressStringToBytesResponseSDKType } from "./query";
export class LCDQueryClient {
  req: LCDClient;
  constructor({
    requestClient
  }: {
    requestClient: LCDClient;
  }) {
    this.req = requestClient;
    this.accounts = this.accounts.bind(this);
    this.account = this.account.bind(this);
    this.params = this.params.bind(this);
    this.moduleAccounts = this.moduleAccounts.bind(this);
    this.bech32Prefix = this.bech32Prefix.bind(this);
    this.addressBytesToString = this.addressBytesToString.bind(this);
    this.addressStringToBytes = this.addressStringToBytes.bind(this);
  }
  /* Accounts returns all the existing accounts
  
   Since: cosmos-sdk 0.43 */
  async accounts(params: QueryAccountsRequest = {
    pagination: PageRequest.fromPartial({})
  }): Promise<QueryAccountsResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `cosmos/auth/v1beta1/accounts`;
    return await this.req.get<QueryAccountsResponseSDKType>(endpoint, options);
  }
  /* Account returns account details based on address. */
  async account(params: QueryAccountRequest): Promise<QueryAccountResponseSDKType> {
    const endpoint = `cosmos/auth/v1beta1/accounts/${params.address}`;
    return await this.req.get<QueryAccountResponseSDKType>(endpoint);
  }
  /* Params queries all parameters. */
  async params(_params: QueryParamsRequest = {}): Promise<QueryParamsResponseSDKType> {
    const endpoint = `cosmos/auth/v1beta1/params`;
    return await this.req.get<QueryParamsResponseSDKType>(endpoint);
  }
  /* ModuleAccounts returns all the existing module accounts. */
  async moduleAccounts(_params: QueryModuleAccountsRequest = {}): Promise<QueryModuleAccountsResponseSDKType> {
    const endpoint = `cosmos/auth/v1beta1/module_accounts`;
    return await this.req.get<QueryModuleAccountsResponseSDKType>(endpoint);
  }
  /* Bech32 queries bech32Prefix */
  async bech32Prefix(_params: Bech32PrefixRequest = {}): Promise<Bech32PrefixResponseSDKType> {
    const endpoint = `cosmos/auth/v1beta1/bech32`;
    return await this.req.get<Bech32PrefixResponseSDKType>(endpoint);
  }
  /* AddressBytesToString converts Account Address bytes to string */
  async addressBytesToString(params: AddressBytesToStringRequest): Promise<AddressBytesToStringResponseSDKType> {
    const endpoint = `cosmos/auth/v1beta1/bech32/${params.addressBytes}`;
    return await this.req.get<AddressBytesToStringResponseSDKType>(endpoint);
  }
  /* AddressStringToBytes converts Address string to bytes */
  async addressStringToBytes(params: AddressStringToBytesRequest): Promise<AddressStringToBytesResponseSDKType> {
    const endpoint = `cosmos/auth/v1beta1/bech32/${params.addressString}`;
    return await this.req.get<AddressStringToBytesResponseSDKType>(endpoint);
  }
}