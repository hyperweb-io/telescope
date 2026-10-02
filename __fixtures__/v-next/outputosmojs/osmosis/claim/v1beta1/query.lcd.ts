import { Action, ActionSDKType, ClaimRecord, ClaimRecordSDKType } from "./claim";
import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { Params, ParamsSDKType } from "./params";
import type { LCDClient } from "@cosmology/lcd";
import { type QueryModuleAccountBalanceRequest, QueryModuleAccountBalanceRequestSDKType, QueryModuleAccountBalanceResponse, type QueryModuleAccountBalanceResponseSDKType, type QueryParamsRequest, QueryParamsRequestSDKType, QueryParamsResponse, type QueryParamsResponseSDKType, type QueryClaimRecordRequest, QueryClaimRecordRequestSDKType, QueryClaimRecordResponse, type QueryClaimRecordResponseSDKType, type QueryClaimableForActionRequest, QueryClaimableForActionRequestSDKType, QueryClaimableForActionResponse, type QueryClaimableForActionResponseSDKType, type QueryTotalClaimableRequest, QueryTotalClaimableRequestSDKType, QueryTotalClaimableResponse, type QueryTotalClaimableResponseSDKType } from "./query";
export class LCDQueryClient {
  req: LCDClient;
  constructor({
    requestClient
  }: {
    requestClient: LCDClient;
  }) {
    this.req = requestClient;
    this.moduleAccountBalance = this.moduleAccountBalance.bind(this);
    this.params = this.params.bind(this);
    this.claimRecord = this.claimRecord.bind(this);
    this.claimableForAction = this.claimableForAction.bind(this);
    this.totalClaimable = this.totalClaimable.bind(this);
  }
  /* ModuleAccountBalance */
  async moduleAccountBalance(_params: QueryModuleAccountBalanceRequest = {}): Promise<QueryModuleAccountBalanceResponseSDKType> {
    const endpoint = `osmosis/claim/v1beta1/module_account_balance`;
    return QueryModuleAccountBalanceResponse.fromSDKJSON(await this.req.get<QueryModuleAccountBalanceResponseSDKType>(endpoint));
  }
  /* Params */
  async params(_params: QueryParamsRequest = {}): Promise<QueryParamsResponseSDKType> {
    const endpoint = `osmosis/claim/v1beta1/params`;
    return QueryParamsResponse.fromSDKJSON(await this.req.get<QueryParamsResponseSDKType>(endpoint));
  }
  /* ClaimRecord */
  async claimRecord(params: QueryClaimRecordRequest): Promise<QueryClaimRecordResponseSDKType> {
    const endpoint = `osmosis/claim/v1beta1/claim_record/${params.address}`;
    return QueryClaimRecordResponse.fromSDKJSON(await this.req.get<QueryClaimRecordResponseSDKType>(endpoint));
  }
  /* ClaimableForAction */
  async claimableForAction(params: QueryClaimableForActionRequest): Promise<QueryClaimableForActionResponseSDKType> {
    const endpoint = `osmosis/claim/v1beta1/claimable_for_action/${params.address}/${params.action}`;
    return QueryClaimableForActionResponse.fromSDKJSON(await this.req.get<QueryClaimableForActionResponseSDKType>(endpoint));
  }
  /* TotalClaimable */
  async totalClaimable(params: QueryTotalClaimableRequest): Promise<QueryTotalClaimableResponseSDKType> {
    const endpoint = `osmosis/claim/v1beta1/total_claimable/${params.address}`;
    return QueryTotalClaimableResponse.fromSDKJSON(await this.req.get<QueryTotalClaimableResponseSDKType>(endpoint));
  }
}