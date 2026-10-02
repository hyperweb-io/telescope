import { Params, ParamsSDKType } from "./genesis";
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
  /* Params retrieves the total set of recovery parameters. */
  params = async (_params: QueryParamsRequest = {}): Promise<QueryParamsResponseSDKType> => {
    const endpoint = `evmos/recovery/v1/params`;
    return QueryParamsResponse.fromSDKJSON(await this.req.get<QueryParamsResponseSDKType>(endpoint));
  };
}