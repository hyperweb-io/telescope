import { buildUseQuery } from "../../../react-query";
import type { QueryDevFeeInfosRequest, QueryDevFeeInfosResponse, QueryDevFeeInfoRequest, QueryDevFeeInfoResponse, QueryParamsRequest, QueryParamsResponse, QueryDevFeeInfosPerDeployerRequest, QueryDevFeeInfosPerDeployerResponse } from "./query";
import { getDevFeeInfos, getDevFeeInfo, getEvmosFeesV1Params, getDevFeeInfosPerDeployer } from "./query.rpc.func";
/**
 * DevFeeInfos retrieves all registered contracts for fee distribution
 * @name useGetDevFeeInfos
 * @package evmos.fees.v1
 * @see proto service: evmos.fees.v1.DevFeeInfos
 */
export const useGetDevFeeInfos = buildUseQuery<QueryDevFeeInfosRequest, QueryDevFeeInfosResponse>({
  builderQueryFn: getDevFeeInfos,
  queryKeyPrefix: "DevFeeInfosQuery"
});
/**
 * DevFeeInfo retrieves a registered contract for fee distribution
 * @name useGetDevFeeInfo
 * @package evmos.fees.v1
 * @see proto service: evmos.fees.v1.DevFeeInfo
 */
export const useGetDevFeeInfo = buildUseQuery<QueryDevFeeInfoRequest, QueryDevFeeInfoResponse>({
  builderQueryFn: getDevFeeInfo,
  queryKeyPrefix: "DevFeeInfoQuery"
});
/**
 * Params retrieves the fees module params
 * @name useGetEvmosFeesV1Params
 * @package evmos.fees.v1
 * @see proto service: evmos.fees.v1.Params
 */
export const useGetEvmosFeesV1Params = buildUseQuery<QueryParamsRequest, QueryParamsResponse>({
  builderQueryFn: getEvmosFeesV1Params,
  queryKeyPrefix: "ParamsQuery"
});
/**
 * DevFeeInfosPerDeployer retrieves all contracts that a deployer has
 * registered for fee distribution
 * @name useGetDevFeeInfosPerDeployer
 * @package evmos.fees.v1
 * @see proto service: evmos.fees.v1.DevFeeInfosPerDeployer
 */
export const useGetDevFeeInfosPerDeployer = buildUseQuery<QueryDevFeeInfosPerDeployerRequest, QueryDevFeeInfosPerDeployerResponse>({
  builderQueryFn: getDevFeeInfosPerDeployer,
  queryKeyPrefix: "DevFeeInfosPerDeployerQuery"
});