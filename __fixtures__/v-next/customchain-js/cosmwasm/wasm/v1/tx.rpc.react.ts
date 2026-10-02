import { buildUseMutation } from "../../../react-query";
import type { MsgStoreCode, MsgInstantiateContract, MsgExecuteContract, MsgMigrateContract, MsgUpdateAdmin, MsgClearAdmin } from "./tx";
import { storeCode, instantiateContract, executeContract, migrateContract, updateAdmin, clearAdmin } from "./tx.rpc.func";
/**
 * StoreCode to submit Wasm code to the system
 * @name useStoreCode
 * @package cosmwasm.wasm.v1
 * @see proto service: cosmwasm.wasm.v1.StoreCode
 */
export const useStoreCode = buildUseMutation<MsgStoreCode, Error>({
  builderMutationFn: storeCode
});
/**
 * Instantiate creates a new smart contract instance for the given code id.
 * @name useInstantiateContract
 * @package cosmwasm.wasm.v1
 * @see proto service: cosmwasm.wasm.v1.InstantiateContract
 */
export const useInstantiateContract = buildUseMutation<MsgInstantiateContract, Error>({
  builderMutationFn: instantiateContract
});
/**
 * Execute submits the given message data to a smart contract
 * @name useExecuteContract
 * @package cosmwasm.wasm.v1
 * @see proto service: cosmwasm.wasm.v1.ExecuteContract
 */
export const useExecuteContract = buildUseMutation<MsgExecuteContract, Error>({
  builderMutationFn: executeContract
});
/**
 * Migrate runs a code upgrade/ downgrade for a smart contract
 * @name useMigrateContract
 * @package cosmwasm.wasm.v1
 * @see proto service: cosmwasm.wasm.v1.MigrateContract
 */
export const useMigrateContract = buildUseMutation<MsgMigrateContract, Error>({
  builderMutationFn: migrateContract
});
/**
 * UpdateAdmin sets a new   admin for a smart contract
 * @name useUpdateAdmin
 * @package cosmwasm.wasm.v1
 * @see proto service: cosmwasm.wasm.v1.UpdateAdmin
 */
export const useUpdateAdmin = buildUseMutation<MsgUpdateAdmin, Error>({
  builderMutationFn: updateAdmin
});
/**
 * ClearAdmin removes any admin stored for a smart contract
 * @name useClearAdmin
 * @package cosmwasm.wasm.v1
 * @see proto service: cosmwasm.wasm.v1.ClearAdmin
 */
export const useClearAdmin = buildUseMutation<MsgClearAdmin, Error>({
  builderMutationFn: clearAdmin
});