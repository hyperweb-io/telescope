import { buildUseQuery } from "../../../react-query";
import type { QueryConfigRequest, QueryConfigResponse } from "./query";
import { getConfig } from "./query.rpc.func";
/**
 * Config returns the current app config.
 * @name useGetConfig
 * @package cosmos.app.v1alpha1
 * @see proto service: cosmos.app.v1alpha1.Config
 */
export const useGetConfig = buildUseQuery<QueryConfigRequest, QueryConfigResponse>({
  builderQueryFn: getConfig,
  queryKeyPrefix: "ConfigQuery"
});