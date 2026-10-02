export const externalComet = `import { QueryClient, createProtobufRpcClient, type ProtobufRpcClient } from '@cosmjs/stargate'
import { connectComet, Tendermint34Client, type HttpEndpoint } from "@cosmjs/tendermint-rpc";

const _rpcClients: Record<string, ProtobufRpcClient> = {};

export const getRpcEndpointKey = (rpcEndpoint: string | HttpEndpoint): string | undefined => {
    if (typeof rpcEndpoint === 'string') {
        return rpcEndpoint;
    } else if (!!rpcEndpoint) {
        //@ts-ignore
        return rpcEndpoint.url;
    }
}

export const getRpcClient = async (rpcEndpoint: string | HttpEndpoint): Promise<ProtobufRpcClient | undefined> => {
    const key = getRpcEndpointKey(rpcEndpoint);
    if (!key) return;
    if (_rpcClients.hasOwnProperty(key)) {
        return _rpcClients[key];
    }
    const cometClient = await connectComet(rpcEndpoint);
    //@ts-ignore
    const client = new QueryClient(cometClient);
    const rpc = createProtobufRpcClient(client);
    _rpcClients[key] = rpc;
    return rpc;
}

export const createRpcClient = async (rpcEndpoint: string | HttpEndpoint): Promise<ProtobufRpcClient> => {
  const cometClient = await connectComet(rpcEndpoint);
  //@ts-ignore
  const client = new QueryClient(cometClient);
  const rpc = createProtobufRpcClient(client);

  return rpc;
}

export const createTm34QueryClient = async (rpcEndpoint: string | HttpEndpoint): Promise<QueryClient> => {
    const tmClient = await Tendermint34Client.connect(rpcEndpoint);
    //@ts-ignore
    return new QueryClient(tmClient);
}

export const createConnectCometQueryClient = async (rpcEndpoint: string | HttpEndpoint): Promise<QueryClient> => {
    const cometClient = await connectComet(rpcEndpoint);
    //@ts-ignore
    return new QueryClient(cometClient);
}
`;