import { Params, ParamsSDKType } from "./params";
import type { LCDClient } from "@cosmology/lcd";
import { type QueryParamsRequest, QueryParamsRequestSDKType, QueryParamsResponse, type QueryParamsResponseSDKType } from "./query";
export class LCDQueryClient {
  req: LCDClient;
  constructor({
    requestClient
  }: {
    requestClient: LCDClient;
  }) {
    this.req = requestClient;
  }
  /* Params defines a gRPC query method that returns the ibc-rate-limit module's
   parameters. */
  params = async (_params: QueryParamsRequest = {}): Promise<QueryParamsResponseSDKType> => {
    const endpoint = `osmosis/ibc-rate-limit/v1beta1/params`;
    return QueryParamsResponse.fromSDKJSON(await this.req.get<QueryParamsResponseSDKType>(endpoint));
  };
}