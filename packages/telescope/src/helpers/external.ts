export const external = `import { QueryClient, createProtobufRpcClient, type ProtobufRpcClient } from '@cosmjs/stargate'
import { Tendermint34Client, type HttpEndpoint } from "@cosmjs/tendermint-rpc";

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
    const tmClient = await Tendermint34Client.connect(rpcEndpoint);
    //@ts-ignore
    const client = new QueryClient(tmClient);
    const rpc = createProtobufRpcClient(client);
    _rpcClients[key] = rpc;
    return rpc;
}
`;