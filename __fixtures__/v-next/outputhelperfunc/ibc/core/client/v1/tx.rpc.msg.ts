import { Any, AnyProtoMsg, AnyAmino, AnySDKType } from "../../../../google/protobuf/any";
import { StdFee, TxRpc } from "../../../../types";
import { BinaryReader } from "../../../../binary";
import { MsgCreateClient, MsgCreateClientSDKType, MsgCreateClientResponse, MsgCreateClientResponseSDKType, MsgUpdateClient, MsgUpdateClientSDKType, MsgUpdateClientResponse, MsgUpdateClientResponseSDKType, MsgUpgradeClient, MsgUpgradeClientSDKType, MsgUpgradeClientResponse, MsgUpgradeClientResponseSDKType, MsgSubmitMisbehaviour, MsgSubmitMisbehaviourSDKType, MsgSubmitMisbehaviourResponse, MsgSubmitMisbehaviourResponseSDKType } from "./tx";
/** Msg defines the ibc/client Msg service. */
export interface Msg {
  /** CreateClient defines a rpc handler method for MsgCreateClient. */
  createClient(signerAddress: string, message: MsgCreateClient, fee: number | StdFee | "auto", memo?: string): Promise<any>;
  /** UpdateClient defines a rpc handler method for MsgUpdateClient. */
  updateClient(signerAddress: string, message: MsgUpdateClient, fee: number | StdFee | "auto", memo?: string): Promise<any>;
  /** UpgradeClient defines a rpc handler method for MsgUpgradeClient. */
  upgradeClient(signerAddress: string, message: MsgUpgradeClient, fee: number | StdFee | "auto", memo?: string): Promise<any>;
  /** SubmitMisbehaviour defines a rpc handler method for MsgSubmitMisbehaviour. */
  submitMisbehaviour(signerAddress: string, message: MsgSubmitMisbehaviour, fee: number | StdFee | "auto", memo?: string): Promise<any>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: TxRpc;
  constructor(rpc: TxRpc) {
    this.rpc = rpc;
  }
  /* CreateClient defines a rpc handler method for MsgCreateClient. */
  createClient = async (signerAddress: string, message: MsgCreateClient, fee: number | StdFee | "auto" = "auto", memo: string = ""): Promise<any> => {
    const data = [{
      typeUrl: MsgCreateClient.typeUrl,
      value: message
    }];
    return this.rpc.signAndBroadcast!(signerAddress, data, fee, memo);
  };
  /* UpdateClient defines a rpc handler method for MsgUpdateClient. */
  updateClient = async (signerAddress: string, message: MsgUpdateClient, fee: number | StdFee | "auto" = "auto", memo: string = ""): Promise<any> => {
    const data = [{
      typeUrl: MsgUpdateClient.typeUrl,
      value: message
    }];
    return this.rpc.signAndBroadcast!(signerAddress, data, fee, memo);
  };
  /* UpgradeClient defines a rpc handler method for MsgUpgradeClient. */
  upgradeClient = async (signerAddress: string, message: MsgUpgradeClient, fee: number | StdFee | "auto" = "auto", memo: string = ""): Promise<any> => {
    const data = [{
      typeUrl: MsgUpgradeClient.typeUrl,
      value: message
    }];
    return this.rpc.signAndBroadcast!(signerAddress, data, fee, memo);
  };
  /* SubmitMisbehaviour defines a rpc handler method for MsgSubmitMisbehaviour. */
  submitMisbehaviour = async (signerAddress: string, message: MsgSubmitMisbehaviour, fee: number | StdFee | "auto" = "auto", memo: string = ""): Promise<any> => {
    const data = [{
      typeUrl: MsgSubmitMisbehaviour.typeUrl,
      value: message
    }];
    return this.rpc.signAndBroadcast!(signerAddress, data, fee, memo);
  };
}
export const createClientImpl = (rpc: TxRpc) => {
  return new MsgClientImpl(rpc);
};