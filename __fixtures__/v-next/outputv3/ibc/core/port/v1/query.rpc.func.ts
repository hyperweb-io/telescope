import { Order, OrderSDKType, Counterparty, CounterpartySDKType } from "../../channel/v1/channel";
import { EndpointOrRpc, buildQuery } from "../../../../helper-func-types";
import { QueryAppVersionRequest, QueryAppVersionRequestSDKType, QueryAppVersionResponse, QueryAppVersionResponseSDKType } from "./query";
/**
 * AppVersion queries an IBC Port and determines the appropriate application version to be used
 * @name getAppVersion
 * @package ibc.core.port.v1
 * @see proto service: ibc.core.port.v1.AppVersion
 */
export const getAppVersion = buildQuery<QueryAppVersionRequest, QueryAppVersionResponse>({
  encode: QueryAppVersionRequest.encode,
  decode: QueryAppVersionResponse.decode,
  service: "ibc.core.port.v1.Query",
  method: "AppVersion",
  deps: [QueryAppVersionRequest, QueryAppVersionResponse]
});