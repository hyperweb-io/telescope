import { Rpc } from "../helpers.js";
import { connectComet, HttpEndpoint } from "@cosmjs/tendermint-rpc";
import { QueryClient } from "@cosmjs/stargate";
import { createConnectCometQueryClient } from "../extern.js";
export const createRPCQueryClient = async ({
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
      app: {
        v1alpha1: (await import("./app/v1alpha1/query.rpc.Query.js")).createRpcQueryExtension(client)
      },
      auth: {
        v1beta1: (await import("./auth/v1beta1/query.rpc.Query.js")).createRpcQueryExtension(client)
      },
      authz: {
        v1beta1: (await import("./authz/v1beta1/query.rpc.Query.js")).createRpcQueryExtension(client)
      },
      bank: {
        v1beta1: (await import("./bank/v1beta1/query.rpc.Query.js")).createRpcQueryExtension(client)
      },
      base: {
        reflection: {
          v1beta1: (await import("./base/reflection/v1beta1/reflection.rpc.ReflectionService.js")).createRpcQueryExtension(client),
          v2alpha1: (await import("./base/reflection/v2alpha1/reflection.rpc.ReflectionService.js")).createRpcQueryExtension(client)
        },
        tendermint: {
          v1beta1: (await import("./base/tendermint/v1beta1/query.rpc.Service.js")).createRpcQueryExtension(client)
        }
      },
      distribution: {
        v1beta1: (await import("./distribution/v1beta1/query.rpc.Query.js")).createRpcQueryExtension(client)
      },
      evidence: {
        v1beta1: (await import("./evidence/v1beta1/query.rpc.Query.js")).createRpcQueryExtension(client)
      },
      feegrant: {
        v1beta1: (await import("./feegrant/v1beta1/query.rpc.Query.js")).createRpcQueryExtension(client)
      },
      gov: {
        v1: (await import("./gov/v1/query.rpc.Query.js")).createRpcQueryExtension(client),
        v1beta1: (await import("./gov/v1beta1/query.rpc.Query.js")).createRpcQueryExtension(client)
      },
      group: {
        v1: (await import("./group/v1/query.rpc.Query.js")).createRpcQueryExtension(client)
      },
      mint: {
        v1beta1: (await import("./mint/v1beta1/query.rpc.Query.js")).createRpcQueryExtension(client)
      },
      nft: {
        v1beta1: (await import("./nft/v1beta1/query.rpc.Query.js")).createRpcQueryExtension(client)
      },
      params: {
        v1beta1: (await import("./params/v1beta1/query.rpc.Query.js")).createRpcQueryExtension(client)
      },
      slashing: {
        v1beta1: (await import("./slashing/v1beta1/query.rpc.Query.js")).createRpcQueryExtension(client)
      },
      staking: {
        v1beta1: (await import("./staking/v1beta1/query.rpc.Query.js")).createRpcQueryExtension(client)
      },
      tx: {
        v1beta1: (await import("./tx/v1beta1/service.rpc.Service.js")).createRpcQueryExtension(client)
      },
      upgrade: {
        v1beta1: (await import("./upgrade/v1beta1/query.rpc.Query.js")).createRpcQueryExtension(client)
      }
    }
  };
};