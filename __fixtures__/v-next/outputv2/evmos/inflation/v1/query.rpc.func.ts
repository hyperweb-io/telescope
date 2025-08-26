import { buildQuery } from "../../../helper-func-types";
import { QueryPeriodRequest, QueryPeriodResponse, QueryEpochMintProvisionRequest, QueryEpochMintProvisionResponse, QuerySkippedEpochsRequest, QuerySkippedEpochsResponse, QueryCirculatingSupplyRequest, QueryCirculatingSupplyResponse, QueryInflationRateRequest, QueryInflationRateResponse, QueryParamsRequest, QueryParamsResponse } from "./query";
/**
 * Period retrieves current period.
 * @name getPeriod
 * @package evmos.inflation.v1
 * @see proto service: evmos.inflation.v1.Period
 */
export const getPeriod = buildQuery<QueryPeriodRequest, QueryPeriodResponse>({
  encode: QueryPeriodRequest.encode,
  decode: QueryPeriodResponse.decode,
  service: "evmos.inflation.v1.Query",
  method: "Period",
  deps: [QueryPeriodRequest, QueryPeriodResponse]
});
/**
 * EpochMintProvision retrieves current minting epoch provision value.
 * @name getEpochMintProvision
 * @package evmos.inflation.v1
 * @see proto service: evmos.inflation.v1.EpochMintProvision
 */
export const getEpochMintProvision = buildQuery<QueryEpochMintProvisionRequest, QueryEpochMintProvisionResponse>({
  encode: QueryEpochMintProvisionRequest.encode,
  decode: QueryEpochMintProvisionResponse.decode,
  service: "evmos.inflation.v1.Query",
  method: "EpochMintProvision",
  deps: [QueryEpochMintProvisionRequest, QueryEpochMintProvisionResponse]
});
/**
 * SkippedEpochs retrieves the total number of skipped epochs.
 * @name getSkippedEpochs
 * @package evmos.inflation.v1
 * @see proto service: evmos.inflation.v1.SkippedEpochs
 */
export const getSkippedEpochs = buildQuery<QuerySkippedEpochsRequest, QuerySkippedEpochsResponse>({
  encode: QuerySkippedEpochsRequest.encode,
  decode: QuerySkippedEpochsResponse.decode,
  service: "evmos.inflation.v1.Query",
  method: "SkippedEpochs",
  deps: [QuerySkippedEpochsRequest, QuerySkippedEpochsResponse]
});
/**
 * CirculatingSupply retrieves the total number of tokens that are in
 * circulation (i.e. excluding unvested tokens).
 * @name getCirculatingSupply
 * @package evmos.inflation.v1
 * @see proto service: evmos.inflation.v1.CirculatingSupply
 */
export const getCirculatingSupply = buildQuery<QueryCirculatingSupplyRequest, QueryCirculatingSupplyResponse>({
  encode: QueryCirculatingSupplyRequest.encode,
  decode: QueryCirculatingSupplyResponse.decode,
  service: "evmos.inflation.v1.Query",
  method: "CirculatingSupply",
  deps: [QueryCirculatingSupplyRequest, QueryCirculatingSupplyResponse]
});
/**
 * InflationRate retrieves the inflation rate of the current period.
 * @name getInflationRate
 * @package evmos.inflation.v1
 * @see proto service: evmos.inflation.v1.InflationRate
 */
export const getInflationRate = buildQuery<QueryInflationRateRequest, QueryInflationRateResponse>({
  encode: QueryInflationRateRequest.encode,
  decode: QueryInflationRateResponse.decode,
  service: "evmos.inflation.v1.Query",
  method: "InflationRate",
  deps: [QueryInflationRateRequest, QueryInflationRateResponse]
});
/**
 * Params retrieves the total set of minting parameters.
 * @name getParams
 * @package evmos.inflation.v1
 * @see proto service: evmos.inflation.v1.Params
 */
export const getParams = buildQuery<QueryParamsRequest, QueryParamsResponse>({
  encode: QueryParamsRequest.encode,
  decode: QueryParamsResponse.decode,
  service: "evmos.inflation.v1.Query",
  method: "Params",
  deps: [QueryParamsRequest, QueryParamsResponse]
});