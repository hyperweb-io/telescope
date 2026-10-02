import { buildUseQuery } from "../../../react-query";
import type { QueryParamsRequest, QueryParamsResponse } from "./query";
import { getEvmosRecoveryV1Params } from "./query.rpc.func";
/**
 * Params retrieves the total set of recovery parameters.
 * @name useGetEvmosRecoveryV1Params
 * @package evmos.recovery.v1
 * @see proto service: evmos.recovery.v1.Params
 */
export const useGetEvmosRecoveryV1Params = buildUseQuery<QueryParamsRequest, QueryParamsResponse>({
  builderQueryFn: getEvmosRecoveryV1Params,
  queryKeyPrefix: "ParamsQuery"
});