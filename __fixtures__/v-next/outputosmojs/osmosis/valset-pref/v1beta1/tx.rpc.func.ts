import { ValidatorPreference, ValidatorPreferenceSDKType } from "./state";
import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { buildTx } from "../../../helper-func-types";
import { MsgSetValidatorSetPreference, MsgSetValidatorSetPreferenceSDKType, MsgSetValidatorSetPreferenceResponse, MsgSetValidatorSetPreferenceResponseSDKType, MsgDelegateToValidatorSet, MsgDelegateToValidatorSetSDKType, MsgDelegateToValidatorSetResponse, MsgDelegateToValidatorSetResponseSDKType, MsgUndelegateFromValidatorSet, MsgUndelegateFromValidatorSetSDKType, MsgUndelegateFromValidatorSetResponse, MsgUndelegateFromValidatorSetResponseSDKType, MsgRedelegateValidatorSet, MsgRedelegateValidatorSetSDKType, MsgRedelegateValidatorSetResponse, MsgRedelegateValidatorSetResponseSDKType, MsgWithdrawDelegationRewards, MsgWithdrawDelegationRewardsSDKType, MsgWithdrawDelegationRewardsResponse, MsgWithdrawDelegationRewardsResponseSDKType, MsgDelegateBondedTokens, MsgDelegateBondedTokensSDKType, MsgDelegateBondedTokensResponse, MsgDelegateBondedTokensResponseSDKType } from "./tx";
/**
 * SetValidatorSetPreference creates a set of validator preference.
 * This message will process both create + update request.
 * @name setValidatorSetPreference
 * @package osmosis.valsetpref.v1beta1
 * @see proto service: osmosis.valsetpref.v1beta1.SetValidatorSetPreference
 */
export const setValidatorSetPreference = buildTx<MsgSetValidatorSetPreference>({
  msg: MsgSetValidatorSetPreference
});
/**
 * DelegateToValidatorSet gets the owner, coins and delegates to a
 * validator-set.
 * @name delegateToValidatorSet
 * @package osmosis.valsetpref.v1beta1
 * @see proto service: osmosis.valsetpref.v1beta1.DelegateToValidatorSet
 */
export const delegateToValidatorSet = buildTx<MsgDelegateToValidatorSet>({
  msg: MsgDelegateToValidatorSet
});
/**
 * UndelegateFromValidatorSet gets the owner and coins and undelegates from
 * validator-set. The unbonding logic will follow the `Undelegate` logic from
 * the sdk.
 * @name undelegateFromValidatorSet
 * @package osmosis.valsetpref.v1beta1
 * @see proto service: osmosis.valsetpref.v1beta1.UndelegateFromValidatorSet
 */
export const undelegateFromValidatorSet = buildTx<MsgUndelegateFromValidatorSet>({
  msg: MsgUndelegateFromValidatorSet
});
/**
 * RedelegateValidatorSet takes the existing validator set and redelegates to
 * a new set.
 * @name redelegateValidatorSet
 * @package osmosis.valsetpref.v1beta1
 * @see proto service: osmosis.valsetpref.v1beta1.RedelegateValidatorSet
 */
export const redelegateValidatorSet = buildTx<MsgRedelegateValidatorSet>({
  msg: MsgRedelegateValidatorSet
});
/**
 * WithdrawDelegationRewards allows users to claim rewards from the
 * validator-set.
 * @name withdrawDelegationRewards
 * @package osmosis.valsetpref.v1beta1
 * @see proto service: osmosis.valsetpref.v1beta1.WithdrawDelegationRewards
 */
export const withdrawDelegationRewards = buildTx<MsgWithdrawDelegationRewards>({
  msg: MsgWithdrawDelegationRewards
});
/**
 * DelegateBondedTokens allows users to break the lockup bond and delegate
 * osmo tokens to a predefined validator-set.
 * @name delegateBondedTokens
 * @package osmosis.valsetpref.v1beta1
 * @see proto service: osmosis.valsetpref.v1beta1.DelegateBondedTokens
 */
export const delegateBondedTokens = buildTx<MsgDelegateBondedTokens>({
  msg: MsgDelegateBondedTokens
});