import { Params, ParamsSDKType } from "./genesis";
import type { LCDClient } from "@cosmology/lcd";
import { type ParamsRequest, ParamsRequestSDKType, ParamsResponse, type ParamsResponseSDKType } from "./query";
export class LCDQueryClient {
  req: LCDClient;
  constructor({
    requestClient
  }: {
    requestClient: LCDClient;
  }) {
    this.req = requestClient;
    this.params = this.params.bind(this);
  }
  /* Params */
  async params(_params: ParamsRequest = {}): Promise<ParamsResponseSDKType> {
    const endpoint = `osmosis/cosmwasmpool/v1beta1/Params`;
    return ParamsResponse.fromSDKJSON(await this.req.get<ParamsResponseSDKType>(endpoint));
  }
}