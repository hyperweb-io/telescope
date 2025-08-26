import { EndpointOrRpc, buildQuery } from "../../../../helper-func-types";
import { ConfigRequest, ConfigRequestSDKType, ConfigResponse, ConfigResponseSDKType } from "./query";
/**
 * Config queries for the operator configuration.
 * @name getConfig
 * @package cosmos.base.node.v1beta1
 * @see proto service: cosmos.base.node.v1beta1.Config
 */
export const getConfig = buildQuery<ConfigRequest, ConfigResponse>({
  encode: ConfigRequest.encode,
  decode: ConfigResponse.decode,
  service: "cosmos.base.node.v1beta1.Service",
  method: "Config"
});