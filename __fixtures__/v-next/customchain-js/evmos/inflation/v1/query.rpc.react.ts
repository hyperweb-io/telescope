import { buildUseQuery } from "../../../react-query";
import type { QueryPeriodRequest, QueryPeriodResponse, QueryEpochMintProvisionRequest, QueryEpochMintProvisionResponse, QuerySkippedEpochsRequest, QuerySkippedEpochsResponse, QueryCirculatingSupplyRequest, QueryCirculatingSupplyResponse, QueryInflationRateRequest, QueryInflationRateResponse, QueryParamsRequest, QueryParamsResponse } from "./query";
import { getPeriod, getEpochMintProvision, getSkippedEpochs, getCirculatingSupply, getInflationRate, getEvmosInflationV1Params } from "./query.rpc.func";
/**
 * Period retrieves current period.
 * @name useGetPeriod
 * @package evmos.inflation.v1
 * @see proto service: evmos.inflation.v1.Period
 */
export const useGetPeriod = buildUseQuery<QueryPeriodRequest, QueryPeriodResponse>({
  builderQueryFn: getPeriod,
  queryKeyPrefix: "PeriodQuery"
});
/**
 * EpochMintProvision retrieves current minting epoch provision value.
 * @name useGetEpochMintProvision
 * @package evmos.inflation.v1
 * @see proto service: evmos.inflation.v1.EpochMintProvision
 */
export const useGetEpochMintProvision = buildUseQuery<QueryEpochMintProvisionRequest, QueryEpochMintProvisionResponse>({
  builderQueryFn: getEpochMintProvision,
  queryKeyPrefix: "EpochMintProvisionQuery"
});
/**
 * SkippedEpochs retrieves the total number of skipped epochs.
 * @name useGetSkippedEpochs
 * @package evmos.inflation.v1
 * @see proto service: evmos.inflation.v1.SkippedEpochs
 */
export const useGetSkippedEpochs = buildUseQuery<QuerySkippedEpochsRequest, QuerySkippedEpochsResponse>({
  builderQueryFn: getSkippedEpochs,
  queryKeyPrefix: "SkippedEpochsQuery"
});
/**
 * CirculatingSupply retrieves the total number of tokens that are in
 * circulation (i.e. excluding unvested tokens).
 * @name useGetCirculatingSupply
 * @package evmos.inflation.v1
 * @see proto service: evmos.inflation.v1.CirculatingSupply
 */
export const useGetCirculatingSupply = buildUseQuery<QueryCirculatingSupplyRequest, QueryCirculatingSupplyResponse>({
  builderQueryFn: getCirculatingSupply,
  queryKeyPrefix: "CirculatingSupplyQuery"
});
/**
 * InflationRate retrieves the inflation rate of the current period.
 * @name useGetInflationRate
 * @package evmos.inflation.v1
 * @see proto service: evmos.inflation.v1.InflationRate
 */
export const useGetInflationRate = buildUseQuery<QueryInflationRateRequest, QueryInflationRateResponse>({
  builderQueryFn: getInflationRate,
  queryKeyPrefix: "InflationRateQuery"
});
/**
 * Params retrieves the total set of minting parameters.
 * @name useGetEvmosInflationV1Params
 * @package evmos.inflation.v1
 * @see proto service: evmos.inflation.v1.Params
 */
export const useGetEvmosInflationV1Params = buildUseQuery<QueryParamsRequest, QueryParamsResponse>({
  builderQueryFn: getEvmosInflationV1Params,
  queryKeyPrefix: "ParamsQuery"
});