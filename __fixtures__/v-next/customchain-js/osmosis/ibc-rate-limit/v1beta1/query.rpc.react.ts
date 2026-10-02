import { buildUseQuery } from "../../../react-query";
import type { QueryParamsRequest, QueryParamsResponse } from "./query";
import { getOsmosisIbcratelimitV1beta1Params } from "./query.rpc.func";
/**
 * Params defines a gRPC query method that returns the ibc-rate-limit module's
 * parameters.
 * @name useGetOsmosisIbcratelimitV1beta1Params
 * @package osmosis.ibcratelimit.v1beta1
 * @see proto service: osmosis.ibcratelimit.v1beta1.Params
 */
export const useGetOsmosisIbcratelimitV1beta1Params = buildUseQuery<QueryParamsRequest, QueryParamsResponse>({
  builderQueryFn: getOsmosisIbcratelimitV1beta1Params,
  queryKeyPrefix: "ParamsQuery"
});