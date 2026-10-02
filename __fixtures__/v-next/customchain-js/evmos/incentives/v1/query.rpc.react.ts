import { buildUseQuery } from "../../../react-query";
import type { QueryIncentivesRequest, QueryIncentivesResponse, QueryIncentiveRequest, QueryIncentiveResponse, QueryGasMetersRequest, QueryGasMetersResponse, QueryGasMeterRequest, QueryGasMeterResponse, QueryAllocationMetersRequest, QueryAllocationMetersResponse, QueryAllocationMeterRequest, QueryAllocationMeterResponse, QueryParamsRequest, QueryParamsResponse } from "./query";
import { getIncentives, getIncentive, getGasMeters, getGasMeter, getAllocationMeters, getAllocationMeter, getEvmosIncentivesV1Params } from "./query.rpc.func";
/**
 * Incentives retrieves registered incentives
 * @name useGetIncentives
 * @package evmos.incentives.v1
 * @see proto service: evmos.incentives.v1.Incentives
 */
export const useGetIncentives = buildUseQuery<QueryIncentivesRequest, QueryIncentivesResponse>({
  builderQueryFn: getIncentives,
  queryKeyPrefix: "IncentivesQuery"
});
/**
 * Incentive retrieves a registered incentive
 * @name useGetIncentive
 * @package evmos.incentives.v1
 * @see proto service: evmos.incentives.v1.Incentive
 */
export const useGetIncentive = buildUseQuery<QueryIncentiveRequest, QueryIncentiveResponse>({
  builderQueryFn: getIncentive,
  queryKeyPrefix: "IncentiveQuery"
});
/**
 * GasMeters retrieves active gas meters for a given contract
 * @name useGetGasMeters
 * @package evmos.incentives.v1
 * @see proto service: evmos.incentives.v1.GasMeters
 */
export const useGetGasMeters = buildUseQuery<QueryGasMetersRequest, QueryGasMetersResponse>({
  builderQueryFn: getGasMeters,
  queryKeyPrefix: "GasMetersQuery"
});
/**
 * GasMeter Retrieves a active gas meter
 * @name useGetGasMeter
 * @package evmos.incentives.v1
 * @see proto service: evmos.incentives.v1.GasMeter
 */
export const useGetGasMeter = buildUseQuery<QueryGasMeterRequest, QueryGasMeterResponse>({
  builderQueryFn: getGasMeter,
  queryKeyPrefix: "GasMeterQuery"
});
/**
 * AllocationMeters retrieves active allocation meters for a given
 * denomination
 * @name useGetAllocationMeters
 * @package evmos.incentives.v1
 * @see proto service: evmos.incentives.v1.AllocationMeters
 */
export const useGetAllocationMeters = buildUseQuery<QueryAllocationMetersRequest, QueryAllocationMetersResponse>({
  builderQueryFn: getAllocationMeters,
  queryKeyPrefix: "AllocationMetersQuery"
});
/**
 * AllocationMeter Retrieves a active gas meter
 * @name useGetAllocationMeter
 * @package evmos.incentives.v1
 * @see proto service: evmos.incentives.v1.AllocationMeter
 */
export const useGetAllocationMeter = buildUseQuery<QueryAllocationMeterRequest, QueryAllocationMeterResponse>({
  builderQueryFn: getAllocationMeter,
  queryKeyPrefix: "AllocationMeterQuery"
});
/**
 * Params retrieves the incentives module params
 * @name useGetEvmosIncentivesV1Params
 * @package evmos.incentives.v1
 * @see proto service: evmos.incentives.v1.Params
 */
export const useGetEvmosIncentivesV1Params = buildUseQuery<QueryParamsRequest, QueryParamsResponse>({
  builderQueryFn: getEvmosIncentivesV1Params,
  queryKeyPrefix: "ParamsQuery"
});