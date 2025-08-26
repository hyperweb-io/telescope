import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { Incentive, IncentiveSDKType, GasMeter, GasMeterSDKType } from "./incentives";
import { DecCoin, DecCoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { Params, ParamsSDKType } from "./genesis";
import { EndpointOrRpc, buildQuery } from "../../../helper-func-types";
import { QueryIncentivesRequest, QueryIncentivesRequestSDKType, QueryIncentivesResponse, QueryIncentivesResponseSDKType, QueryIncentiveRequest, QueryIncentiveRequestSDKType, QueryIncentiveResponse, QueryIncentiveResponseSDKType, QueryGasMetersRequest, QueryGasMetersRequestSDKType, QueryGasMetersResponse, QueryGasMetersResponseSDKType, QueryGasMeterRequest, QueryGasMeterRequestSDKType, QueryGasMeterResponse, QueryGasMeterResponseSDKType, QueryAllocationMetersRequest, QueryAllocationMetersRequestSDKType, QueryAllocationMetersResponse, QueryAllocationMetersResponseSDKType, QueryAllocationMeterRequest, QueryAllocationMeterRequestSDKType, QueryAllocationMeterResponse, QueryAllocationMeterResponseSDKType, QueryParamsRequest, QueryParamsRequestSDKType, QueryParamsResponse, QueryParamsResponseSDKType } from "./query";
/**
 * Incentives retrieves registered incentives
 * @name getIncentives
 * @package evmos.incentives.v1
 * @see proto service: evmos.incentives.v1.Incentives
 */
export const getIncentives = buildQuery<QueryIncentivesRequest, QueryIncentivesResponse>({
  encode: QueryIncentivesRequest.encode,
  decode: QueryIncentivesResponse.decode,
  service: "evmos.incentives.v1.Query",
  method: "Incentives"
});
/**
 * Incentive retrieves a registered incentive
 * @name getIncentive
 * @package evmos.incentives.v1
 * @see proto service: evmos.incentives.v1.Incentive
 */
export const getIncentive = buildQuery<QueryIncentiveRequest, QueryIncentiveResponse>({
  encode: QueryIncentiveRequest.encode,
  decode: QueryIncentiveResponse.decode,
  service: "evmos.incentives.v1.Query",
  method: "Incentive"
});
/**
 * GasMeters retrieves active gas meters for a given contract
 * @name getGasMeters
 * @package evmos.incentives.v1
 * @see proto service: evmos.incentives.v1.GasMeters
 */
export const getGasMeters = buildQuery<QueryGasMetersRequest, QueryGasMetersResponse>({
  encode: QueryGasMetersRequest.encode,
  decode: QueryGasMetersResponse.decode,
  service: "evmos.incentives.v1.Query",
  method: "GasMeters"
});
/**
 * GasMeter Retrieves a active gas meter
 * @name getGasMeter
 * @package evmos.incentives.v1
 * @see proto service: evmos.incentives.v1.GasMeter
 */
export const getGasMeter = buildQuery<QueryGasMeterRequest, QueryGasMeterResponse>({
  encode: QueryGasMeterRequest.encode,
  decode: QueryGasMeterResponse.decode,
  service: "evmos.incentives.v1.Query",
  method: "GasMeter"
});
/**
 * AllocationMeters retrieves active allocation meters for a given
 * denomination
 * @name getAllocationMeters
 * @package evmos.incentives.v1
 * @see proto service: evmos.incentives.v1.AllocationMeters
 */
export const getAllocationMeters = buildQuery<QueryAllocationMetersRequest, QueryAllocationMetersResponse>({
  encode: QueryAllocationMetersRequest.encode,
  decode: QueryAllocationMetersResponse.decode,
  service: "evmos.incentives.v1.Query",
  method: "AllocationMeters"
});
/**
 * AllocationMeter Retrieves a active gas meter
 * @name getAllocationMeter
 * @package evmos.incentives.v1
 * @see proto service: evmos.incentives.v1.AllocationMeter
 */
export const getAllocationMeter = buildQuery<QueryAllocationMeterRequest, QueryAllocationMeterResponse>({
  encode: QueryAllocationMeterRequest.encode,
  decode: QueryAllocationMeterResponse.decode,
  service: "evmos.incentives.v1.Query",
  method: "AllocationMeter"
});
/**
 * Params retrieves the incentives module params
 * @name getParams
 * @package evmos.incentives.v1
 * @see proto service: evmos.incentives.v1.Params
 */
export const getParams = buildQuery<QueryParamsRequest, QueryParamsResponse>({
  encode: QueryParamsRequest.encode,
  decode: QueryParamsResponse.decode,
  service: "evmos.incentives.v1.Query",
  method: "Params"
});