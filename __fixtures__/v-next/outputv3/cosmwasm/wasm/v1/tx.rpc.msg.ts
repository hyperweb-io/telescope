import { AccessConfig, AccessConfigSDKType } from "./types";
import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import * as fm from "../../../grpc-gateway";
import { type MsgStoreCode, MsgStoreCodeSDKType, type MsgStoreCodeResponse, MsgStoreCodeResponseSDKType, type MsgInstantiateContract, MsgInstantiateContractSDKType, type MsgInstantiateContractResponse, MsgInstantiateContractResponseSDKType, type MsgExecuteContract, MsgExecuteContractSDKType, type MsgExecuteContractResponse, MsgExecuteContractResponseSDKType, type MsgMigrateContract, MsgMigrateContractSDKType, type MsgMigrateContractResponse, MsgMigrateContractResponseSDKType, type MsgUpdateAdmin, MsgUpdateAdminSDKType, type MsgUpdateAdminResponse, MsgUpdateAdminResponseSDKType, type MsgClearAdmin, MsgClearAdminSDKType, type MsgClearAdminResponse, MsgClearAdminResponseSDKType } from "./tx";
export class Msg {
  /** StoreCode to submit Wasm code to the system */
  static storeCode(request: MsgStoreCode, initRequest?: fm.InitReq): Promise<MsgStoreCodeResponse> {
    return fm.fetchReq(`/cosmwasm.wasm.v1/storeCode`, {
      ...initRequest,
      method: "POST",
      body: JSON.stringify(request, fm.replacer)
    });
  }
  /** Instantiate creates a new smart contract instance for the given code id. */
  static instantiateContract(request: MsgInstantiateContract, initRequest?: fm.InitReq): Promise<MsgInstantiateContractResponse> {
    return fm.fetchReq(`/cosmwasm.wasm.v1/instantiateContract`, {
      ...initRequest,
      method: "POST",
      body: JSON.stringify(request, fm.replacer)
    });
  }
  /** Execute submits the given message data to a smart contract */
  static executeContract(request: MsgExecuteContract, initRequest?: fm.InitReq): Promise<MsgExecuteContractResponse> {
    return fm.fetchReq(`/cosmwasm.wasm.v1/executeContract`, {
      ...initRequest,
      method: "POST",
      body: JSON.stringify(request, fm.replacer)
    });
  }
  /** Migrate runs a code upgrade/ downgrade for a smart contract */
  static migrateContract(request: MsgMigrateContract, initRequest?: fm.InitReq): Promise<MsgMigrateContractResponse> {
    return fm.fetchReq(`/cosmwasm.wasm.v1/migrateContract`, {
      ...initRequest,
      method: "POST",
      body: JSON.stringify(request, fm.replacer)
    });
  }
  /** UpdateAdmin sets a new   admin for a smart contract */
  static updateAdmin(request: MsgUpdateAdmin, initRequest?: fm.InitReq): Promise<MsgUpdateAdminResponse> {
    return fm.fetchReq(`/cosmwasm.wasm.v1/updateAdmin`, {
      ...initRequest,
      method: "POST",
      body: JSON.stringify(request, fm.replacer)
    });
  }
  /** ClearAdmin removes any admin stored for a smart contract */
  static clearAdmin(request: MsgClearAdmin, initRequest?: fm.InitReq): Promise<MsgClearAdminResponse> {
    return fm.fetchReq(`/cosmwasm.wasm.v1/clearAdmin`, {
      ...initRequest,
      method: "POST",
      body: JSON.stringify(request, fm.replacer)
    });
  }
}