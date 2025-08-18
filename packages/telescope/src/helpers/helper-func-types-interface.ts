import { TelescopeOptions } from "@cosmology/types";

export const getHelperFuncTypesForInterface = (options: TelescopeOptions) => {
  return `
import { HttpEndpoint } from "@interchainjs/types";
import { BinaryReader, BinaryWriter } from "./binary${options.restoreImportExtension ?? ""}";${!options.isGeneratingCosmosTypes ? `
import { getRpcClient } from "./extern${options.restoreImportExtension ?? ""}";` : ''}
import { isRpc, Rpc } from "./helpers${options.restoreImportExtension ?? ""}";${!options.isGeneratingCosmosTypes ? `
import { TelescopeGeneratedCodec, DeliverTxResponse, Message, StdFee } from "./types${options.restoreImportExtension ?? ""}";` : ''}${!options.isGeneratingCosmosTypes ? `
import { toConverters, toEncoders } from "@interchainjs/cosmos/utils";
import { ISigningClient } from "@interchainjs/cosmos/types/signing-client${options.restoreImportExtension ?? ""}";` : ''}

export interface QueryBuilderOptions<TReq, TRes> {
  encode: (request: TReq, writer?: BinaryWriter) => BinaryWriter
  decode: (input: BinaryReader | Uint8Array, length?: number) => TRes
  service: string,
  method: string,
  deps?: TelescopeGeneratedCodec<any, any, any>[],
}

export function buildQuery<TReq, TRes>(opts: QueryBuilderOptions<TReq, TRes>) {
    registerDependencies(opts.deps ?? []);

    return async (client: EndpointOrRpc, request: TReq) => {
      let rpc: Rpc | undefined;

      if(isRpc(client)) {
        rpc = client;
      } else {
        rpc = ${options.isGeneratingCosmosTypes ? 'undefined' : 'client ? await getRpcClient(client) : undefined'};
      }

      if (!rpc) throw new Error("Query Rpc is not initialized");

      const data = opts.encode(request).finish();
      const response = await rpc.request(opts.service, opts.method, data);
      return opts.decode(response);
    };
}

${!options.isGeneratingCosmosTypes ? `export interface ITxArgs<TMsg> {
  signerAddress: string;
  message: TMsg | TMsg[];
  fee: StdFee | 'auto';
  memo: string;
}

export interface TxBuilderOptions {
  msg: TelescopeGeneratedCodec<any, any, any>
}

export function buildTx<TMsg>(opts: TxBuilderOptions) {
  if(opts.msg){
    registerDependencies([opts.msg]);
  }

  return async (
    client: ISigningClient,
    signerAddress: string,
    message: TMsg | TMsg[],
    fee: StdFee | 'auto',
    memo: string
  ): Promise<DeliverTxResponse> => {
    if (!client) throw new Error("SigningClient is not initialized");

    //register all related encoders and converters
    client.addEncoders?.(toEncoders(opts.msg));
    client.addConverters?.(toConverters(opts.msg));

    const data = Array.isArray(message)
      ? message.map(msg => ({
          typeUrl: opts.msg.typeUrl,
          value: msg,
        }))
      : [{
          typeUrl: opts.msg.typeUrl,
          value: message,
        }];
    return client.signAndBroadcast!(signerAddress, data, fee, memo);
  };
}` : ''}

export interface Encoder {
  typeUrl: string;
  fromPartial: (data: any) => any;
  encode: (data: any) => Uint8Array;
}

export interface AminoConverter {
  typeUrl: string;
  aminoType: string;
  fromAmino: (data: any) => any;
  toAmino: (data: any) => any;
}

export type EndpointOrRpc = string | HttpEndpoint | Rpc ;

function registerDependencies(deps: TelescopeGeneratedCodec<any, any, any>[]) {
  for (const dep of deps) {
    dep.registerTypeUrl?.();
  }
}
`;
};
