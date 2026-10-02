import { buildUseMutation } from "../../../react-query";
import type { MsgSetWithdrawAddress, MsgWithdrawDelegatorReward, MsgWithdrawValidatorCommission, MsgFundCommunityPool } from "./tx";
import { setWithdrawAddress, withdrawDelegatorReward, withdrawValidatorCommission, fundCommunityPool } from "./tx.rpc.func";
/**
 * SetWithdrawAddress defines a method to change the withdraw address
 * for a delegator (or validator self-delegation).
 * @name useSetWithdrawAddress
 * @package cosmos.distribution.v1beta1
 * @see proto service: cosmos.distribution.v1beta1.SetWithdrawAddress
 */
export const useSetWithdrawAddress = buildUseMutation<MsgSetWithdrawAddress, Error>({
  builderMutationFn: setWithdrawAddress
});
/**
 * WithdrawDelegatorReward defines a method to withdraw rewards of delegator
 * from a single validator.
 * @name useWithdrawDelegatorReward
 * @package cosmos.distribution.v1beta1
 * @see proto service: cosmos.distribution.v1beta1.WithdrawDelegatorReward
 */
export const useWithdrawDelegatorReward = buildUseMutation<MsgWithdrawDelegatorReward, Error>({
  builderMutationFn: withdrawDelegatorReward
});
/**
 * WithdrawValidatorCommission defines a method to withdraw the
 * full commission to the validator address.
 * @name useWithdrawValidatorCommission
 * @package cosmos.distribution.v1beta1
 * @see proto service: cosmos.distribution.v1beta1.WithdrawValidatorCommission
 */
export const useWithdrawValidatorCommission = buildUseMutation<MsgWithdrawValidatorCommission, Error>({
  builderMutationFn: withdrawValidatorCommission
});
/**
 * FundCommunityPool defines a method to allow an account to directly
 * fund the community pool.
 * @name useFundCommunityPool
 * @package cosmos.distribution.v1beta1
 * @see proto service: cosmos.distribution.v1beta1.FundCommunityPool
 */
export const useFundCommunityPool = buildUseMutation<MsgFundCommunityPool, Error>({
  builderMutationFn: fundCommunityPool
});