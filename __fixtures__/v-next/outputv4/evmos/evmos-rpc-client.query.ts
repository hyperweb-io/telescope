import { Rpc } from "../helpers.js";
import { connectComet, type HttpEndpoint } from "@cosmjs/tendermint-rpc";
import type { QueryClient } from "@cosmjs/stargate";
import { createConnectCometQueryClient } from "../extern.js";
export const createEvmosRPCQueryClient = async ({
  rpcEndpoint,
  makeClient
}: {
  rpcEndpoint: string | HttpEndpoint;
  makeClient?: (rpcEndpoint: string | HttpEndpoint) => Promise<QueryClient>;
}) => {
  const make = makeClient || createConnectCometQueryClient;
  const client = await make(rpcEndpoint);
  return {
    cosmos: {
      bank: {
        v1beta1: (await import("../cosmos/bank/v1beta1/query.rpc.Query.js")).createRpcQueryExtension(client)
      },
      gov: {
        v1beta1: (await import("../cosmos/gov/v1beta1/query.rpc.Query.js")).createRpcQueryExtension(client)
      }
    },
    evmos: {
      erc20: {
        v1: (await import("./erc20/v1/query.rpc.Query.js")).createRpcQueryExtension(client)
      }
    }
  };
};