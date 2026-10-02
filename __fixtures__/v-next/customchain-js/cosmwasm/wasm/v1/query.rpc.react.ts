import { buildUseQuery } from "../../../react-query";
import type { QueryContractInfoRequest, QueryContractInfoResponse, QueryContractHistoryRequest, QueryContractHistoryResponse, QueryContractsByCodeRequest, QueryContractsByCodeResponse, QueryAllContractStateRequest, QueryAllContractStateResponse, QueryRawContractStateRequest, QueryRawContractStateResponse, QuerySmartContractStateRequest, QuerySmartContractStateResponse, QueryCodeRequest, QueryCodeResponse, QueryCodesRequest, QueryCodesResponse, QueryPinnedCodesRequest, QueryPinnedCodesResponse } from "./query";
import { getContractInfo, getContractHistory, getContractsByCode, getAllContractState, getRawContractState, getSmartContractState, getCode, getCodes, getPinnedCodes } from "./query.rpc.func";
/**
 * ContractInfo gets the contract meta data
 * @name useGetContractInfo
 * @package cosmwasm.wasm.v1
 * @see proto service: cosmwasm.wasm.v1.ContractInfo
 */
export const useGetContractInfo = buildUseQuery<QueryContractInfoRequest, QueryContractInfoResponse>({
  builderQueryFn: getContractInfo,
  queryKeyPrefix: "ContractInfoQuery"
});
/**
 * ContractHistory gets the contract code history
 * @name useGetContractHistory
 * @package cosmwasm.wasm.v1
 * @see proto service: cosmwasm.wasm.v1.ContractHistory
 */
export const useGetContractHistory = buildUseQuery<QueryContractHistoryRequest, QueryContractHistoryResponse>({
  builderQueryFn: getContractHistory,
  queryKeyPrefix: "ContractHistoryQuery"
});
/**
 * ContractsByCode lists all smart contracts for a code id
 * @name useGetContractsByCode
 * @package cosmwasm.wasm.v1
 * @see proto service: cosmwasm.wasm.v1.ContractsByCode
 */
export const useGetContractsByCode = buildUseQuery<QueryContractsByCodeRequest, QueryContractsByCodeResponse>({
  builderQueryFn: getContractsByCode,
  queryKeyPrefix: "ContractsByCodeQuery"
});
/**
 * AllContractState gets all raw store data for a single contract
 * @name useGetAllContractState
 * @package cosmwasm.wasm.v1
 * @see proto service: cosmwasm.wasm.v1.AllContractState
 */
export const useGetAllContractState = buildUseQuery<QueryAllContractStateRequest, QueryAllContractStateResponse>({
  builderQueryFn: getAllContractState,
  queryKeyPrefix: "AllContractStateQuery"
});
/**
 * RawContractState gets single key from the raw store data of a contract
 * @name useGetRawContractState
 * @package cosmwasm.wasm.v1
 * @see proto service: cosmwasm.wasm.v1.RawContractState
 */
export const useGetRawContractState = buildUseQuery<QueryRawContractStateRequest, QueryRawContractStateResponse>({
  builderQueryFn: getRawContractState,
  queryKeyPrefix: "RawContractStateQuery"
});
/**
 * SmartContractState get smart query result from the contract
 * @name useGetSmartContractState
 * @package cosmwasm.wasm.v1
 * @see proto service: cosmwasm.wasm.v1.SmartContractState
 */
export const useGetSmartContractState = buildUseQuery<QuerySmartContractStateRequest, QuerySmartContractStateResponse>({
  builderQueryFn: getSmartContractState,
  queryKeyPrefix: "SmartContractStateQuery"
});
/**
 * Code gets the binary code and metadata for a singe wasm code
 * @name useGetCode
 * @package cosmwasm.wasm.v1
 * @see proto service: cosmwasm.wasm.v1.Code
 */
export const useGetCode = buildUseQuery<QueryCodeRequest, QueryCodeResponse>({
  builderQueryFn: getCode,
  queryKeyPrefix: "CodeQuery"
});
/**
 * Codes gets the metadata for all stored wasm codes
 * @name useGetCodes
 * @package cosmwasm.wasm.v1
 * @see proto service: cosmwasm.wasm.v1.Codes
 */
export const useGetCodes = buildUseQuery<QueryCodesRequest, QueryCodesResponse>({
  builderQueryFn: getCodes,
  queryKeyPrefix: "CodesQuery"
});
/**
 * PinnedCodes gets the pinned code ids
 * @name useGetPinnedCodes
 * @package cosmwasm.wasm.v1
 * @see proto service: cosmwasm.wasm.v1.PinnedCodes
 */
export const useGetPinnedCodes = buildUseQuery<QueryPinnedCodesRequest, QueryPinnedCodesResponse>({
  builderQueryFn: getPinnedCodes,
  queryKeyPrefix: "PinnedCodesQuery"
});