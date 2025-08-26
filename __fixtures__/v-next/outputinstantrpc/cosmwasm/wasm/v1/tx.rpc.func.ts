import { AccessConfig, AccessConfigSDKType } from "./types";
import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { buildTx } from "../../../helper-func-types";
import { MsgStoreCode, MsgStoreCodeSDKType, MsgStoreCodeResponse, MsgStoreCodeResponseSDKType, MsgInstantiateContract, MsgInstantiateContractSDKType, MsgInstantiateContractResponse, MsgInstantiateContractResponseSDKType, MsgExecuteContract, MsgExecuteContractSDKType, MsgExecuteContractResponse, MsgExecuteContractResponseSDKType, MsgMigrateContract, MsgMigrateContractSDKType, MsgMigrateContractResponse, MsgMigrateContractResponseSDKType, MsgUpdateAdmin, MsgUpdateAdminSDKType, MsgUpdateAdminResponse, MsgUpdateAdminResponseSDKType, MsgClearAdmin, MsgClearAdminSDKType, MsgClearAdminResponse, MsgClearAdminResponseSDKType } from "./tx";
/**
 * StoreCode to submit Wasm code to the system
 * @name storeCode
 * @package cosmwasm.wasm.v1
 * @see proto service: cosmwasm.wasm.v1.StoreCode
 */
export const storeCode = buildTx<MsgStoreCode>({
  msg: MsgStoreCode
});
/**
 * Instantiate creates a new smart contract instance for the given code id.
 * @name instantiateContract
 * @package cosmwasm.wasm.v1
 * @see proto service: cosmwasm.wasm.v1.InstantiateContract
 */
export const instantiateContract = buildTx<MsgInstantiateContract>({
  msg: MsgInstantiateContract
});
/**
 * Execute submits the given message data to a smart contract
 * @name executeContract
 * @package cosmwasm.wasm.v1
 * @see proto service: cosmwasm.wasm.v1.ExecuteContract
 */
export const executeContract = buildTx<MsgExecuteContract>({
  msg: MsgExecuteContract
});
/**
 * Migrate runs a code upgrade/ downgrade for a smart contract
 * @name migrateContract
 * @package cosmwasm.wasm.v1
 * @see proto service: cosmwasm.wasm.v1.MigrateContract
 */
export const migrateContract = buildTx<MsgMigrateContract>({
  msg: MsgMigrateContract
});
/**
 * UpdateAdmin sets a new   admin for a smart contract
 * @name updateAdmin
 * @package cosmwasm.wasm.v1
 * @see proto service: cosmwasm.wasm.v1.UpdateAdmin
 */
export const updateAdmin = buildTx<MsgUpdateAdmin>({
  msg: MsgUpdateAdmin
});
/**
 * ClearAdmin removes any admin stored for a smart contract
 * @name clearAdmin
 * @package cosmwasm.wasm.v1
 * @see proto service: cosmwasm.wasm.v1.ClearAdmin
 */
export const clearAdmin = buildTx<MsgClearAdmin>({
  msg: MsgClearAdmin
});