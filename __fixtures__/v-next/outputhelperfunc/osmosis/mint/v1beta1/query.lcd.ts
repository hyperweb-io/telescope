import { Params, ParamsSDKType } from "./mint";
import type { LCDClient } from "@cosmology/lcd";
import { type QueryParamsRequest, QueryParamsRequestSDKType, QueryParamsResponse, type QueryParamsResponseSDKType, type QueryEpochProvisionsRequest, QueryEpochProvisionsRequestSDKType, QueryEpochProvisionsResponse, type QueryEpochProvisionsResponseSDKType } from "./query";
export class LCDQueryClient {
  req: LCDClient;
  constructor({
    requestClient
  }: {
    requestClient: LCDClient;
  }) {
    this.req = requestClient;
  }
  /* Params returns the total set of minting parameters. */
  params = async (_params: QueryParamsRequest = {}): Promise<QueryParamsResponseSDKType> => {
    const endpoint = `osmosis/mint/v1beta1/params`;
    return QueryParamsResponse.fromSDKJSON(await this.req.get<QueryParamsResponseSDKType>(endpoint));
  };
  /* EpochProvisions returns the current minting epoch provisions value. */
  epochProvisions = async (_params: QueryEpochProvisionsRequest = {}): Promise<QueryEpochProvisionsResponseSDKType> => {
    const endpoint = `osmosis/mint/v1beta1/epoch_provisions`;
    return QueryEpochProvisionsResponse.fromSDKJSON(await this.req.get<QueryEpochProvisionsResponseSDKType>(endpoint));
  };
}