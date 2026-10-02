import { buildUseQuery } from "../../../react-query";
import type { QueryParamsRequest, QueryParamsResponse, QueryDenomAuthorityMetadataRequest, QueryDenomAuthorityMetadataResponse, QueryDenomsFromCreatorRequest, QueryDenomsFromCreatorResponse } from "./query";
import { getOsmosisTokenfactoryV1beta1Params, getDenomAuthorityMetadata, getDenomsFromCreator } from "./query.rpc.func";
/**
 * Params defines a gRPC query method that returns the tokenfactory module's
 * parameters.
 * @name useGetOsmosisTokenfactoryV1beta1Params
 * @package osmosis.tokenfactory.v1beta1
 * @see proto service: osmosis.tokenfactory.v1beta1.Params
 */
export const useGetOsmosisTokenfactoryV1beta1Params = buildUseQuery<QueryParamsRequest, QueryParamsResponse>({
  builderQueryFn: getOsmosisTokenfactoryV1beta1Params,
  queryKeyPrefix: "ParamsQuery"
});
/**
 * DenomAuthorityMetadata defines a gRPC query method for fetching
 * DenomAuthorityMetadata for a particular denom.
 * @name useGetDenomAuthorityMetadata
 * @package osmosis.tokenfactory.v1beta1
 * @see proto service: osmosis.tokenfactory.v1beta1.DenomAuthorityMetadata
 */
export const useGetDenomAuthorityMetadata = buildUseQuery<QueryDenomAuthorityMetadataRequest, QueryDenomAuthorityMetadataResponse>({
  builderQueryFn: getDenomAuthorityMetadata,
  queryKeyPrefix: "DenomAuthorityMetadataQuery"
});
/**
 * DenomsFromCreator defines a gRPC query method for fetching all
 * denominations created by a specific admin/creator.
 * @name useGetDenomsFromCreator
 * @package osmosis.tokenfactory.v1beta1
 * @see proto service: osmosis.tokenfactory.v1beta1.DenomsFromCreator
 */
export const useGetDenomsFromCreator = buildUseQuery<QueryDenomsFromCreatorRequest, QueryDenomsFromCreatorResponse>({
  builderQueryFn: getDenomsFromCreator,
  queryKeyPrefix: "DenomsFromCreatorQuery"
});