import { TelescopeOptions } from "@cosmology/types";

export const getReactQueryHelperHooks = (options: TelescopeOptions) => {
  return `


import { getRpcClient } from './extern${options.restoreImportExtension ?? ""}'
import {
  isRpc,
  type Rpc,
} from './helpers${options.restoreImportExtension ?? ""}'
 import {
  type StdFee,
  type DeliverTxResponse,
} from './types${options.restoreImportExtension ?? ""}'
import {
  type ITxArgs,
  type EndpointOrRpc,
} from './helper-func-types${options.restoreImportExtension ?? ""}'
import { type ISigningClient, isISigningClient } from "@interchainjs/cosmos/types/signing-client${options.restoreImportExtension ?? ""}";
import {
    useQuery,
    type UseQueryResult,
    useQueryClient,
    type UseQueryOptions,
    useMutation,
    type UseMutationResult,
    type UseMutationOptions,
    type QueryKey,
} from '@tanstack/react-query';

import { type HttpEndpoint, type ProtobufRpcClient } from '@cosmjs/stargate';
${
  options.rpcClients.useConnectComet
    ? "import { type CometClient, connectComet, Tendermint34Client, Tendermint37Client } from '@cosmjs/tendermint-rpc';"
    : "import { Tendermint34Client } from '@cosmjs/tendermint-rpc';"
}

export const DEFAULT_RPC_CLIENT_QUERY_KEY = 'rpcClient';
export const DEFAULT_RPC_ENDPOINT_QUERY_KEY = 'rpcEndPoint';
export const DEFAULT_SIGNING_CLIENT_QUERY_KEY = 'signingClient';

export interface CacheResolver {
    rpcEndpoint?: string | HttpEndpoint;
    clientQueryKey?: string;
}

export function isCacheResolver(resolver: unknown) : resolver is CacheResolver {
    return resolver !== null && resolver !== undefined && (resolver as CacheResolver).rpcEndpoint !== undefined && (resolver as CacheResolver).clientQueryKey !== undefined;
}

export interface ReactQueryParams<TResponse, TData = TResponse> {
    options?: UseQueryOptions<TResponse, Error, TData>;
}

export interface UseRpcClientQuery<TData> extends ReactQueryParams<ProtobufRpcClient, TData> {
    clientResolver?: CacheResolver;
}

${
  options.reactQuery.needExtraQueryKey
    ? `export interface UseRpcEndpointQuery<TData> extends ReactQueryParams<string | HttpEndpoint, TData> {
    getter: () => Promise<string | HttpEndpoint>;
    rpcEndPointKey?: string;
    extraKey?: string
}

export const useRpcEndpoint = <TData = string | HttpEndpoint>({
    getter,
    options,
    rpcEndPointKey,
    extraKey
}: UseRpcEndpointQuery<TData>): UseQueryResult<TData, Error> => {
    const key = rpcEndPointKey || DEFAULT_RPC_ENDPOINT_QUERY_KEY;
    return useQuery<string | HttpEndpoint, Error, TData>([key, extraKey], async () => {
        return await getter();
    }, options);
};`
    : `export interface UseRpcEndpointQuery<TData> extends ReactQueryParams<string | HttpEndpoint, TData> {
    getter: () => Promise<string | HttpEndpoint>;
    rpcEndPointKey?: string;
}

export const useRpcEndpoint = <TData = string | HttpEndpoint>({
    getter,
    options,
    rpcEndPointKey,
}: UseRpcEndpointQuery<TData>): UseQueryResult<TData, Error> => {
    const key = rpcEndPointKey || DEFAULT_RPC_ENDPOINT_QUERY_KEY;
    return useQuery<string | HttpEndpoint, Error, TData>([key, getter], async () => {
        return await getter();
    }, options);
};`
}

export const useRpcClient = <TData = ProtobufRpcClient>({
    options,
    clientResolver
}: UseRpcClientQuery<TData>): UseQueryResult<TData, Error> => {
    const queryClient = useQueryClient({
      context: options?.context
    });

    const key = clientResolver?.clientQueryKey || DEFAULT_RPC_CLIENT_QUERY_KEY;
    return useQuery<ProtobufRpcClient, Error, TData>([key, clientResolver?.rpcEndpoint], async () => {
      if(!clientResolver?.rpcEndpoint) {
        throw new Error('rpcEndpoint is required');
      }

      const client = await getRpcClient(clientResolver.rpcEndpoint);
      if(!client) {
          throw new Error('Failed to connect to rpc client');
      }

      queryClient.setQueryData([key], client);

      return client;
    }, options);
};

${
  options.rpcClients.useConnectComet
    ? "interface UseTendermintClient extends ReactQueryParams<Tendermint34Client | Tendermint37Client | CometClient> {"
    : "interface UseTendermintClient extends ReactQueryParams<Tendermint34Client> {"
}
    rpcEndpoint: string | HttpEndpoint;
}

/**
 * Hook that uses react-query to cache a connected tendermint client.
 */
export const useTendermintClient = ({
    rpcEndpoint,
    options,
}: UseTendermintClient): { client: ${
  options.rpcClients.useConnectComet
    ? "Tendermint34Client | Tendermint37Client | CometClient"
    : "Tendermint34Client"
} | undefined } => {
${
  options.rpcClients.useConnectComet
    ? "    const { data: client } = useQuery<Tendermint34Client | Tendermint37Client | CometClient, Error, Tendermint34Client | Tendermint37Client | CometClient>("
    : "    const { data: client } = useQuery<Tendermint34Client, Error, Tendermint34Client>("
}
        ['client', 'tendermint', rpcEndpoint],
        () => ${
          options.rpcClients.useConnectComet
            ? "connectComet(rpcEndpoint)"
            : "Tendermint34Client.connect(rpcEndpoint)"
        },
        {
            // allow overriding
            onError: (e) => {
                throw new Error(\`Failed to connect to \${rpcEndpoint}\` + '\\n' + e)
            },
            ...options,
        }
    )
    return { client }
};

export interface UseQueryBuilderOptions<TReq, TRes> {
  builderQueryFn: (clientResolver?: EndpointOrRpc) => (request: TReq) => Promise<TRes>,
  queryKeyPrefix: string,
}

const getRpcClientFromCache = (
  queryClient: ReturnType<typeof useQueryClient>,
  key: string,
  rpcEndpoint?: string | HttpEndpoint
): Rpc | undefined => {
  const queryKey = rpcEndpoint ? [key, rpcEndpoint] : [key];
  return queryClient.getQueryData<Rpc>(queryKey);
};

export function buildUseQuery<TReq, TRes>(opts: UseQueryBuilderOptions<TReq, TRes>) {
  return <TData = TRes>({
    request,
    options,
    clientResolver,
    customizedQueryKey,
  }: UseQueryParams<TReq, TRes, TData>): UseQueryResult<TData, Error> => {
    const queryClient = useQueryClient({
      context: options?.context
    });

    let rpcResolver: EndpointOrRpc | undefined;

    if(isRpc(clientResolver)) {
      rpcResolver = clientResolver;
    } else {
      const key = isCacheResolver(clientResolver)
        ? clientResolver.clientQueryKey || DEFAULT_RPC_CLIENT_QUERY_KEY
        : DEFAULT_RPC_CLIENT_QUERY_KEY;
      const endpoint = isCacheResolver(clientResolver) ? clientResolver.rpcEndpoint : undefined;

      const cachedClient = getRpcClientFromCache(queryClient, key, endpoint);
      // For CacheResolver with endpoint, use endpoint as fallback if no cached client
      rpcResolver = cachedClient ||
        (isCacheResolver(clientResolver) && clientResolver.rpcEndpoint ? clientResolver.rpcEndpoint :
          (!isCacheResolver(clientResolver) ? clientResolver : undefined));
    }

    const queryFn = opts.builderQueryFn(rpcResolver);
    return useQuery<TRes, Error, TData>(customizedQueryKey || [opts.queryKeyPrefix, request], () => queryFn(request), options);
  };
}

export interface UseQueryParams<TReq, TRes, TData = TRes> extends ReactQueryParams<TRes, TData> {
  request: TReq;
  clientResolver?: CacheResolver | EndpointOrRpc;
  customizedQueryKey?: QueryKey
}

export interface ReactMutationParams<TData, TError, TVariables, TContext = unknown> {
  options?: UseMutationOptions<TData, TError, TVariables, TContext>;
  clientResolver?: CacheResolver | ISigningClient;
}


export interface UseMutationBuilderOptions<TMsg> {
  builderMutationFn: (clientResolver?: ISigningClient) => (
    signerAddress: string,
    message: TMsg | TMsg[],
    fee: StdFee | 'auto',
    memo: string
  ) => Promise<DeliverTxResponse>,
}

const getSigningClientFromCache = (
  queryClient: ReturnType<typeof useQueryClient>,
  key: string,
  rpcEndpoint?: string | HttpEndpoint
): ISigningClient | undefined => {
  const queryKey = rpcEndpoint ? [key, rpcEndpoint] : [key];
  return queryClient.getQueryData<ISigningClient>(queryKey);
};

export function buildUseMutation<TMsg, TError>(opts: UseMutationBuilderOptions<TMsg>) {
  return ({
    options,
    clientResolver
  }: ReactMutationParams<DeliverTxResponse, TError, ITxArgs<TMsg>>): UseMutationResult<DeliverTxResponse, Error, ITxArgs<TMsg>> => {
    const queryClient = useQueryClient({
      context: options?.context
    });

    let signingClientResolver: ISigningClient | undefined;

    if(isISigningClient(clientResolver)) {
      signingClientResolver = clientResolver;
    } else {
      // For both CacheResolver and other cases, try to get from cache first
      const key = isCacheResolver(clientResolver)
        ? clientResolver.clientQueryKey || DEFAULT_SIGNING_CLIENT_QUERY_KEY
        : DEFAULT_SIGNING_CLIENT_QUERY_KEY;
      const endpoint = isCacheResolver(clientResolver) ? clientResolver.rpcEndpoint : undefined;

      const cachedClient = getSigningClientFromCache(queryClient, key, endpoint);
      signingClientResolver = cachedClient || (!isCacheResolver(clientResolver) ? clientResolver : undefined);
    }

    const mutationFn = opts.builderMutationFn(signingClientResolver);

    return useMutation<DeliverTxResponse, Error, ITxArgs<TMsg>>(
      (reqData: ITxArgs<TMsg>) => mutationFn(reqData.signerAddress, reqData.message, reqData.fee, reqData.memo),
      options as Omit<UseMutationOptions<DeliverTxResponse, Error, ITxArgs<TMsg>, unknown>, "mutationFn">
    );
  };
}
`;
};
