import { Coin, CoinSDKType } from "../../base/v1beta1/coin";
import { Input, InputSDKType, Output, OutputSDKType } from "./bank";
import { StdFee, TxRpc } from "../../../types";
import { BinaryReader } from "../../../binary";
import { MsgSend, MsgSendSDKType, MsgSendResponse, MsgSendResponseSDKType, MsgMultiSend, MsgMultiSendSDKType, MsgMultiSendResponse, MsgMultiSendResponseSDKType } from "./tx";
/** Msg defines the bank Msg service. */
export interface Msg {
  /** Send defines a method for sending coins from one account to another account. */
  send(signerAddress: string, message: MsgSend, fee: number | StdFee | "auto", memo?: string): Promise<any>;
  /** MultiSend defines a method for sending coins from some accounts to other accounts. */
  multiSend(signerAddress: string, message: MsgMultiSend, fee: number | StdFee | "auto", memo?: string): Promise<any>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: TxRpc;
  constructor(rpc: TxRpc) {
    this.rpc = rpc;
  }
  /* Send defines a method for sending coins from one account to another account. */
  send = async (signerAddress: string, message: MsgSend, fee: number | StdFee | "auto" = "auto", memo: string = ""): Promise<any> => {
    const data = [{
      typeUrl: MsgSend.typeUrl,
      value: message
    }];
    return this.rpc.signAndBroadcast!(signerAddress, data, fee, memo);
  };
  /* MultiSend defines a method for sending coins from some accounts to other accounts. */
  multiSend = async (signerAddress: string, message: MsgMultiSend, fee: number | StdFee | "auto" = "auto", memo: string = ""): Promise<any> => {
    const data = [{
      typeUrl: MsgMultiSend.typeUrl,
      value: message
    }];
    return this.rpc.signAndBroadcast!(signerAddress, data, fee, memo);
  };
}
export const createClientImpl = (rpc: TxRpc) => {
  return new MsgClientImpl(rpc);
};