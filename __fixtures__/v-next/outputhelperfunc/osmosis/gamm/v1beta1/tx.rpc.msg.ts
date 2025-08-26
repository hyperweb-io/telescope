import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { StdFee, TxRpc } from "../../../types";
import { BinaryReader } from "../../../binary";
import { MsgJoinPool, MsgJoinPoolSDKType, MsgJoinPoolResponse, MsgJoinPoolResponseSDKType, MsgExitPool, MsgExitPoolSDKType, MsgExitPoolResponse, MsgExitPoolResponseSDKType, MsgSwapExactAmountIn, MsgSwapExactAmountInSDKType, MsgSwapExactAmountInResponse, MsgSwapExactAmountInResponseSDKType, MsgSwapExactAmountOut, MsgSwapExactAmountOutSDKType, MsgSwapExactAmountOutResponse, MsgSwapExactAmountOutResponseSDKType, MsgJoinSwapExternAmountIn, MsgJoinSwapExternAmountInSDKType, MsgJoinSwapExternAmountInResponse, MsgJoinSwapExternAmountInResponseSDKType, MsgJoinSwapShareAmountOut, MsgJoinSwapShareAmountOutSDKType, MsgJoinSwapShareAmountOutResponse, MsgJoinSwapShareAmountOutResponseSDKType, MsgExitSwapExternAmountOut, MsgExitSwapExternAmountOutSDKType, MsgExitSwapExternAmountOutResponse, MsgExitSwapExternAmountOutResponseSDKType, MsgExitSwapShareAmountIn, MsgExitSwapShareAmountInSDKType, MsgExitSwapShareAmountInResponse, MsgExitSwapShareAmountInResponseSDKType } from "./tx";
export interface Msg {
  joinPool(signerAddress: string, message: MsgJoinPool, fee: number | StdFee | "auto", memo?: string): Promise<any>;
  exitPool(signerAddress: string, message: MsgExitPool, fee: number | StdFee | "auto", memo?: string): Promise<any>;
  swapExactAmountIn(signerAddress: string, message: MsgSwapExactAmountIn, fee: number | StdFee | "auto", memo?: string): Promise<any>;
  swapExactAmountOut(signerAddress: string, message: MsgSwapExactAmountOut, fee: number | StdFee | "auto", memo?: string): Promise<any>;
  joinSwapExternAmountIn(signerAddress: string, message: MsgJoinSwapExternAmountIn, fee: number | StdFee | "auto", memo?: string): Promise<any>;
  joinSwapShareAmountOut(signerAddress: string, message: MsgJoinSwapShareAmountOut, fee: number | StdFee | "auto", memo?: string): Promise<any>;
  exitSwapExternAmountOut(signerAddress: string, message: MsgExitSwapExternAmountOut, fee: number | StdFee | "auto", memo?: string): Promise<any>;
  exitSwapShareAmountIn(signerAddress: string, message: MsgExitSwapShareAmountIn, fee: number | StdFee | "auto", memo?: string): Promise<any>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: TxRpc;
  constructor(rpc: TxRpc) {
    this.rpc = rpc;
  }
  /* JoinPool */
  joinPool = async (signerAddress: string, message: MsgJoinPool, fee: number | StdFee | "auto" = "auto", memo: string = ""): Promise<any> => {
    const data = [{
      typeUrl: MsgJoinPool.typeUrl,
      value: message
    }];
    return this.rpc.signAndBroadcast!(signerAddress, data, fee, memo);
  };
  /* ExitPool */
  exitPool = async (signerAddress: string, message: MsgExitPool, fee: number | StdFee | "auto" = "auto", memo: string = ""): Promise<any> => {
    const data = [{
      typeUrl: MsgExitPool.typeUrl,
      value: message
    }];
    return this.rpc.signAndBroadcast!(signerAddress, data, fee, memo);
  };
  /* SwapExactAmountIn */
  swapExactAmountIn = async (signerAddress: string, message: MsgSwapExactAmountIn, fee: number | StdFee | "auto" = "auto", memo: string = ""): Promise<any> => {
    const data = [{
      typeUrl: MsgSwapExactAmountIn.typeUrl,
      value: message
    }];
    return this.rpc.signAndBroadcast!(signerAddress, data, fee, memo);
  };
  /* SwapExactAmountOut */
  swapExactAmountOut = async (signerAddress: string, message: MsgSwapExactAmountOut, fee: number | StdFee | "auto" = "auto", memo: string = ""): Promise<any> => {
    const data = [{
      typeUrl: MsgSwapExactAmountOut.typeUrl,
      value: message
    }];
    return this.rpc.signAndBroadcast!(signerAddress, data, fee, memo);
  };
  /* JoinSwapExternAmountIn */
  joinSwapExternAmountIn = async (signerAddress: string, message: MsgJoinSwapExternAmountIn, fee: number | StdFee | "auto" = "auto", memo: string = ""): Promise<any> => {
    const data = [{
      typeUrl: MsgJoinSwapExternAmountIn.typeUrl,
      value: message
    }];
    return this.rpc.signAndBroadcast!(signerAddress, data, fee, memo);
  };
  /* JoinSwapShareAmountOut */
  joinSwapShareAmountOut = async (signerAddress: string, message: MsgJoinSwapShareAmountOut, fee: number | StdFee | "auto" = "auto", memo: string = ""): Promise<any> => {
    const data = [{
      typeUrl: MsgJoinSwapShareAmountOut.typeUrl,
      value: message
    }];
    return this.rpc.signAndBroadcast!(signerAddress, data, fee, memo);
  };
  /* ExitSwapExternAmountOut */
  exitSwapExternAmountOut = async (signerAddress: string, message: MsgExitSwapExternAmountOut, fee: number | StdFee | "auto" = "auto", memo: string = ""): Promise<any> => {
    const data = [{
      typeUrl: MsgExitSwapExternAmountOut.typeUrl,
      value: message
    }];
    return this.rpc.signAndBroadcast!(signerAddress, data, fee, memo);
  };
  /* ExitSwapShareAmountIn */
  exitSwapShareAmountIn = async (signerAddress: string, message: MsgExitSwapShareAmountIn, fee: number | StdFee | "auto" = "auto", memo: string = ""): Promise<any> => {
    const data = [{
      typeUrl: MsgExitSwapShareAmountIn.typeUrl,
      value: message
    }];
    return this.rpc.signAndBroadcast!(signerAddress, data, fee, memo);
  };
}
export const createClientImpl = (rpc: TxRpc) => {
  return new MsgClientImpl(rpc);
};