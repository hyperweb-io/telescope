import { Params, ParamsSDKType } from "./params";
import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { RouteStatistics, RouteStatisticsSDKType, TokenPairArbRoutes, TokenPairArbRoutesSDKType, PoolWeights, PoolWeightsSDKType, BaseDenom, BaseDenomSDKType } from "./protorev";
import { EndpointOrRpc, buildQuery } from "../../../helper-func-types";
import { QueryParamsRequest, QueryParamsRequestSDKType, QueryParamsResponse, QueryParamsResponseSDKType, QueryGetProtoRevNumberOfTradesRequest, QueryGetProtoRevNumberOfTradesRequestSDKType, QueryGetProtoRevNumberOfTradesResponse, QueryGetProtoRevNumberOfTradesResponseSDKType, QueryGetProtoRevProfitsByDenomRequest, QueryGetProtoRevProfitsByDenomRequestSDKType, QueryGetProtoRevProfitsByDenomResponse, QueryGetProtoRevProfitsByDenomResponseSDKType, QueryGetProtoRevAllProfitsRequest, QueryGetProtoRevAllProfitsRequestSDKType, QueryGetProtoRevAllProfitsResponse, QueryGetProtoRevAllProfitsResponseSDKType, QueryGetProtoRevStatisticsByRouteRequest, QueryGetProtoRevStatisticsByRouteRequestSDKType, QueryGetProtoRevStatisticsByRouteResponse, QueryGetProtoRevStatisticsByRouteResponseSDKType, QueryGetProtoRevAllRouteStatisticsRequest, QueryGetProtoRevAllRouteStatisticsRequestSDKType, QueryGetProtoRevAllRouteStatisticsResponse, QueryGetProtoRevAllRouteStatisticsResponseSDKType, QueryGetProtoRevTokenPairArbRoutesRequest, QueryGetProtoRevTokenPairArbRoutesRequestSDKType, QueryGetProtoRevTokenPairArbRoutesResponse, QueryGetProtoRevTokenPairArbRoutesResponseSDKType, QueryGetProtoRevAdminAccountRequest, QueryGetProtoRevAdminAccountRequestSDKType, QueryGetProtoRevAdminAccountResponse, QueryGetProtoRevAdminAccountResponseSDKType, QueryGetProtoRevDeveloperAccountRequest, QueryGetProtoRevDeveloperAccountRequestSDKType, QueryGetProtoRevDeveloperAccountResponse, QueryGetProtoRevDeveloperAccountResponseSDKType, QueryGetProtoRevPoolWeightsRequest, QueryGetProtoRevPoolWeightsRequestSDKType, QueryGetProtoRevPoolWeightsResponse, QueryGetProtoRevPoolWeightsResponseSDKType, QueryGetProtoRevMaxPoolPointsPerTxRequest, QueryGetProtoRevMaxPoolPointsPerTxRequestSDKType, QueryGetProtoRevMaxPoolPointsPerTxResponse, QueryGetProtoRevMaxPoolPointsPerTxResponseSDKType, QueryGetProtoRevMaxPoolPointsPerBlockRequest, QueryGetProtoRevMaxPoolPointsPerBlockRequestSDKType, QueryGetProtoRevMaxPoolPointsPerBlockResponse, QueryGetProtoRevMaxPoolPointsPerBlockResponseSDKType, QueryGetProtoRevBaseDenomsRequest, QueryGetProtoRevBaseDenomsRequestSDKType, QueryGetProtoRevBaseDenomsResponse, QueryGetProtoRevBaseDenomsResponseSDKType, QueryGetProtoRevEnabledRequest, QueryGetProtoRevEnabledRequestSDKType, QueryGetProtoRevEnabledResponse, QueryGetProtoRevEnabledResponseSDKType } from "./query";
/**
 * Params queries the parameters of the module.
 * @name getParams
 * @package osmosis.protorev.v1beta1
 * @see proto service: osmosis.protorev.v1beta1.Params
 */
export const getParams = buildQuery<QueryParamsRequest, QueryParamsResponse>({
  encode: QueryParamsRequest.encode,
  decode: QueryParamsResponse.decode,
  service: "osmosis.protorev.v1beta1.Query",
  method: "Params"
});
/**
 * GetProtoRevNumberOfTrades queries the number of arbitrage trades the module
 * has executed
 * @name getGetProtoRevNumberOfTrades
 * @package osmosis.protorev.v1beta1
 * @see proto service: osmosis.protorev.v1beta1.GetProtoRevNumberOfTrades
 */
export const getGetProtoRevNumberOfTrades = buildQuery<QueryGetProtoRevNumberOfTradesRequest, QueryGetProtoRevNumberOfTradesResponse>({
  encode: QueryGetProtoRevNumberOfTradesRequest.encode,
  decode: QueryGetProtoRevNumberOfTradesResponse.decode,
  service: "osmosis.protorev.v1beta1.Query",
  method: "GetProtoRevNumberOfTrades"
});
/**
 * GetProtoRevProfitsByDenom queries the profits of the module by denom
 * @name getGetProtoRevProfitsByDenom
 * @package osmosis.protorev.v1beta1
 * @see proto service: osmosis.protorev.v1beta1.GetProtoRevProfitsByDenom
 */
export const getGetProtoRevProfitsByDenom = buildQuery<QueryGetProtoRevProfitsByDenomRequest, QueryGetProtoRevProfitsByDenomResponse>({
  encode: QueryGetProtoRevProfitsByDenomRequest.encode,
  decode: QueryGetProtoRevProfitsByDenomResponse.decode,
  service: "osmosis.protorev.v1beta1.Query",
  method: "GetProtoRevProfitsByDenom"
});
/**
 * GetProtoRevAllProfits queries all of the profits from the module
 * @name getGetProtoRevAllProfits
 * @package osmosis.protorev.v1beta1
 * @see proto service: osmosis.protorev.v1beta1.GetProtoRevAllProfits
 */
export const getGetProtoRevAllProfits = buildQuery<QueryGetProtoRevAllProfitsRequest, QueryGetProtoRevAllProfitsResponse>({
  encode: QueryGetProtoRevAllProfitsRequest.encode,
  decode: QueryGetProtoRevAllProfitsResponse.decode,
  service: "osmosis.protorev.v1beta1.Query",
  method: "GetProtoRevAllProfits"
});
/**
 * GetProtoRevStatisticsByRoute queries the number of arbitrages and profits
 * that have been executed for a given route
 * @name getGetProtoRevStatisticsByRoute
 * @package osmosis.protorev.v1beta1
 * @see proto service: osmosis.protorev.v1beta1.GetProtoRevStatisticsByRoute
 */
export const getGetProtoRevStatisticsByRoute = buildQuery<QueryGetProtoRevStatisticsByRouteRequest, QueryGetProtoRevStatisticsByRouteResponse>({
  encode: QueryGetProtoRevStatisticsByRouteRequest.encode,
  decode: QueryGetProtoRevStatisticsByRouteResponse.decode,
  service: "osmosis.protorev.v1beta1.Query",
  method: "GetProtoRevStatisticsByRoute"
});
/**
 * GetProtoRevAllRouteStatistics queries all of routes that the module has
 * arbitraged against and the number of trades and profits that have been
 * accumulated for each route
 * @name getGetProtoRevAllRouteStatistics
 * @package osmosis.protorev.v1beta1
 * @see proto service: osmosis.protorev.v1beta1.GetProtoRevAllRouteStatistics
 */
export const getGetProtoRevAllRouteStatistics = buildQuery<QueryGetProtoRevAllRouteStatisticsRequest, QueryGetProtoRevAllRouteStatisticsResponse>({
  encode: QueryGetProtoRevAllRouteStatisticsRequest.encode,
  decode: QueryGetProtoRevAllRouteStatisticsResponse.decode,
  service: "osmosis.protorev.v1beta1.Query",
  method: "GetProtoRevAllRouteStatistics"
});
/**
 * GetProtoRevTokenPairArbRoutes queries all of the hot routes that the module
 * is currently arbitraging
 * @name getGetProtoRevTokenPairArbRoutes
 * @package osmosis.protorev.v1beta1
 * @see proto service: osmosis.protorev.v1beta1.GetProtoRevTokenPairArbRoutes
 */
export const getGetProtoRevTokenPairArbRoutes = buildQuery<QueryGetProtoRevTokenPairArbRoutesRequest, QueryGetProtoRevTokenPairArbRoutesResponse>({
  encode: QueryGetProtoRevTokenPairArbRoutesRequest.encode,
  decode: QueryGetProtoRevTokenPairArbRoutesResponse.decode,
  service: "osmosis.protorev.v1beta1.Query",
  method: "GetProtoRevTokenPairArbRoutes"
});
/**
 * GetProtoRevAdminAccount queries the admin account of the module
 * @name getGetProtoRevAdminAccount
 * @package osmosis.protorev.v1beta1
 * @see proto service: osmosis.protorev.v1beta1.GetProtoRevAdminAccount
 */
export const getGetProtoRevAdminAccount = buildQuery<QueryGetProtoRevAdminAccountRequest, QueryGetProtoRevAdminAccountResponse>({
  encode: QueryGetProtoRevAdminAccountRequest.encode,
  decode: QueryGetProtoRevAdminAccountResponse.decode,
  service: "osmosis.protorev.v1beta1.Query",
  method: "GetProtoRevAdminAccount"
});
/**
 * GetProtoRevDeveloperAccount queries the developer account of the module
 * @name getGetProtoRevDeveloperAccount
 * @package osmosis.protorev.v1beta1
 * @see proto service: osmosis.protorev.v1beta1.GetProtoRevDeveloperAccount
 */
export const getGetProtoRevDeveloperAccount = buildQuery<QueryGetProtoRevDeveloperAccountRequest, QueryGetProtoRevDeveloperAccountResponse>({
  encode: QueryGetProtoRevDeveloperAccountRequest.encode,
  decode: QueryGetProtoRevDeveloperAccountResponse.decode,
  service: "osmosis.protorev.v1beta1.Query",
  method: "GetProtoRevDeveloperAccount"
});
/**
 * GetProtoRevPoolWeights queries the weights of each pool type currently
 * being used by the module
 * @name getGetProtoRevPoolWeights
 * @package osmosis.protorev.v1beta1
 * @see proto service: osmosis.protorev.v1beta1.GetProtoRevPoolWeights
 */
export const getGetProtoRevPoolWeights = buildQuery<QueryGetProtoRevPoolWeightsRequest, QueryGetProtoRevPoolWeightsResponse>({
  encode: QueryGetProtoRevPoolWeightsRequest.encode,
  decode: QueryGetProtoRevPoolWeightsResponse.decode,
  service: "osmosis.protorev.v1beta1.Query",
  method: "GetProtoRevPoolWeights"
});
/**
 * GetProtoRevMaxPoolPointsPerTx queries the maximum number of pool points
 * that can be consumed per transaction
 * @name getGetProtoRevMaxPoolPointsPerTx
 * @package osmosis.protorev.v1beta1
 * @see proto service: osmosis.protorev.v1beta1.GetProtoRevMaxPoolPointsPerTx
 */
export const getGetProtoRevMaxPoolPointsPerTx = buildQuery<QueryGetProtoRevMaxPoolPointsPerTxRequest, QueryGetProtoRevMaxPoolPointsPerTxResponse>({
  encode: QueryGetProtoRevMaxPoolPointsPerTxRequest.encode,
  decode: QueryGetProtoRevMaxPoolPointsPerTxResponse.decode,
  service: "osmosis.protorev.v1beta1.Query",
  method: "GetProtoRevMaxPoolPointsPerTx"
});
/**
 * GetProtoRevMaxPoolPointsPerBlock queries the maximum number of pool points
 * that can consumed per block
 * @name getGetProtoRevMaxPoolPointsPerBlock
 * @package osmosis.protorev.v1beta1
 * @see proto service: osmosis.protorev.v1beta1.GetProtoRevMaxPoolPointsPerBlock
 */
export const getGetProtoRevMaxPoolPointsPerBlock = buildQuery<QueryGetProtoRevMaxPoolPointsPerBlockRequest, QueryGetProtoRevMaxPoolPointsPerBlockResponse>({
  encode: QueryGetProtoRevMaxPoolPointsPerBlockRequest.encode,
  decode: QueryGetProtoRevMaxPoolPointsPerBlockResponse.decode,
  service: "osmosis.protorev.v1beta1.Query",
  method: "GetProtoRevMaxPoolPointsPerBlock"
});
/**
 * GetProtoRevBaseDenoms queries the base denoms that the module is currently
 * utilizing for arbitrage
 * @name getGetProtoRevBaseDenoms
 * @package osmosis.protorev.v1beta1
 * @see proto service: osmosis.protorev.v1beta1.GetProtoRevBaseDenoms
 */
export const getGetProtoRevBaseDenoms = buildQuery<QueryGetProtoRevBaseDenomsRequest, QueryGetProtoRevBaseDenomsResponse>({
  encode: QueryGetProtoRevBaseDenomsRequest.encode,
  decode: QueryGetProtoRevBaseDenomsResponse.decode,
  service: "osmosis.protorev.v1beta1.Query",
  method: "GetProtoRevBaseDenoms"
});
/**
 * GetProtoRevEnabled queries whether the module is enabled or not
 * @name getGetProtoRevEnabled
 * @package osmosis.protorev.v1beta1
 * @see proto service: osmosis.protorev.v1beta1.GetProtoRevEnabled
 */
export const getGetProtoRevEnabled = buildQuery<QueryGetProtoRevEnabledRequest, QueryGetProtoRevEnabledResponse>({
  encode: QueryGetProtoRevEnabledRequest.encode,
  decode: QueryGetProtoRevEnabledResponse.decode,
  service: "osmosis.protorev.v1beta1.Query",
  method: "GetProtoRevEnabled"
});