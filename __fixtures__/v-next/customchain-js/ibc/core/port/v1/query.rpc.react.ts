import { buildUseQuery } from "../../../../react-query";
import type { QueryAppVersionRequest, QueryAppVersionResponse } from "./query";
import { getAppVersion } from "./query.rpc.func";
/**
 * AppVersion queries an IBC Port and determines the appropriate application version to be used
 * @name useGetAppVersion
 * @package ibc.core.port.v1
 * @see proto service: ibc.core.port.v1.AppVersion
 */
export const useGetAppVersion = buildUseQuery<QueryAppVersionRequest, QueryAppVersionResponse>({
  builderQueryFn: getAppVersion,
  queryKeyPrefix: "AppVersionQuery"
});