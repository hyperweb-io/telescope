import { buildQuery } from "../../../helper-func-types";
import { QueryConfigRequest, QueryConfigResponse } from "./query";
/**
 * Config returns the current app config.
 * @name getConfig
 * @package cosmos.app.v1alpha1
 * @see proto service: cosmos.app.v1alpha1.Config
 */
export const getConfig = buildQuery<QueryConfigRequest, QueryConfigResponse>({
  encode: QueryConfigRequest.encode,
  decode: QueryConfigResponse.decode,
  service: "cosmos.app.v1alpha1.Query",
  method: "Config",
  deps: [QueryConfigRequest, QueryConfigResponse]
});