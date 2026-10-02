import { buildUseMutation } from "../../../react-query";
import type { MsgCreateValidator, MsgEditValidator, MsgDelegate, MsgBeginRedelegate, MsgUndelegate } from "./tx";
import { createValidator, editValidator, delegate, beginRedelegate, undelegate } from "./tx.rpc.func";
/**
 * CreateValidator defines a method for creating a new validator.
 * @name useCreateValidator
 * @package cosmos.staking.v1beta1
 * @see proto service: cosmos.staking.v1beta1.CreateValidator
 */
export const useCreateValidator = buildUseMutation<MsgCreateValidator, Error>({
  builderMutationFn: createValidator
});
/**
 * EditValidator defines a method for editing an existing validator.
 * @name useEditValidator
 * @package cosmos.staking.v1beta1
 * @see proto service: cosmos.staking.v1beta1.EditValidator
 */
export const useEditValidator = buildUseMutation<MsgEditValidator, Error>({
  builderMutationFn: editValidator
});
/**
 * Delegate defines a method for performing a delegation of coins
 * from a delegator to a validator.
 * @name useDelegate
 * @package cosmos.staking.v1beta1
 * @see proto service: cosmos.staking.v1beta1.Delegate
 */
export const useDelegate = buildUseMutation<MsgDelegate, Error>({
  builderMutationFn: delegate
});
/**
 * BeginRedelegate defines a method for performing a redelegation
 * of coins from a delegator and source validator to a destination validator.
 * @name useBeginRedelegate
 * @package cosmos.staking.v1beta1
 * @see proto service: cosmos.staking.v1beta1.BeginRedelegate
 */
export const useBeginRedelegate = buildUseMutation<MsgBeginRedelegate, Error>({
  builderMutationFn: beginRedelegate
});
/**
 * Undelegate defines a method for performing an undelegation from a
 * delegate and a validator.
 * @name useUndelegate
 * @package cosmos.staking.v1beta1
 * @see proto service: cosmos.staking.v1beta1.Undelegate
 */
export const useUndelegate = buildUseMutation<MsgUndelegate, Error>({
  builderMutationFn: undelegate
});