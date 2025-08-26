import { Action, ActionSDKType, ClaimRecord, ClaimRecordSDKType } from "./claim";
import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { Params, ParamsSDKType } from "./params";
import { EndpointOrRpc, buildQuery } from "../../../helper-func-types";
import { QueryModuleAccountBalanceRequest, QueryModuleAccountBalanceRequestSDKType, QueryModuleAccountBalanceResponse, QueryModuleAccountBalanceResponseSDKType, QueryParamsRequest, QueryParamsRequestSDKType, QueryParamsResponse, QueryParamsResponseSDKType, QueryClaimRecordRequest, QueryClaimRecordRequestSDKType, QueryClaimRecordResponse, QueryClaimRecordResponseSDKType, QueryClaimableForActionRequest, QueryClaimableForActionRequestSDKType, QueryClaimableForActionResponse, QueryClaimableForActionResponseSDKType, QueryTotalClaimableRequest, QueryTotalClaimableRequestSDKType, QueryTotalClaimableResponse, QueryTotalClaimableResponseSDKType } from "./query";
/**
 * @name getModuleAccountBalance
 * @package osmosis.claim.v1beta1
 * @see proto service: osmosis.claim.v1beta1.ModuleAccountBalance
 */
export const getModuleAccountBalance = buildQuery<QueryModuleAccountBalanceRequest, QueryModuleAccountBalanceResponse>({
  encode: QueryModuleAccountBalanceRequest.encode,
  decode: QueryModuleAccountBalanceResponse.decode,
  service: "osmosis.claim.v1beta1.Query",
  method: "ModuleAccountBalance"
});
/**
 * @name getParams
 * @package osmosis.claim.v1beta1
 * @see proto service: osmosis.claim.v1beta1.Params
 */
export const getParams = buildQuery<QueryParamsRequest, QueryParamsResponse>({
  encode: QueryParamsRequest.encode,
  decode: QueryParamsResponse.decode,
  service: "osmosis.claim.v1beta1.Query",
  method: "Params"
});
/**
 * @name getClaimRecord
 * @package osmosis.claim.v1beta1
 * @see proto service: osmosis.claim.v1beta1.ClaimRecord
 */
export const getClaimRecord = buildQuery<QueryClaimRecordRequest, QueryClaimRecordResponse>({
  encode: QueryClaimRecordRequest.encode,
  decode: QueryClaimRecordResponse.decode,
  service: "osmosis.claim.v1beta1.Query",
  method: "ClaimRecord"
});
/**
 * @name getClaimableForAction
 * @package osmosis.claim.v1beta1
 * @see proto service: osmosis.claim.v1beta1.ClaimableForAction
 */
export const getClaimableForAction = buildQuery<QueryClaimableForActionRequest, QueryClaimableForActionResponse>({
  encode: QueryClaimableForActionRequest.encode,
  decode: QueryClaimableForActionResponse.decode,
  service: "osmosis.claim.v1beta1.Query",
  method: "ClaimableForAction"
});
/**
 * @name getTotalClaimable
 * @package osmosis.claim.v1beta1
 * @see proto service: osmosis.claim.v1beta1.TotalClaimable
 */
export const getTotalClaimable = buildQuery<QueryTotalClaimableRequest, QueryTotalClaimableResponse>({
  encode: QueryTotalClaimableRequest.encode,
  decode: QueryTotalClaimableResponse.decode,
  service: "osmosis.claim.v1beta1.Query",
  method: "TotalClaimable"
});