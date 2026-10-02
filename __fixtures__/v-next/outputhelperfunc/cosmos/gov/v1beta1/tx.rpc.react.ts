import { Any, AnyProtoMsg, AnyAmino, AnySDKType } from "../../../google/protobuf/any";
import { Coin, CoinSDKType } from "../../base/v1beta1/coin";
import { VoteOption, VoteOptionSDKType, WeightedVoteOption, WeightedVoteOptionSDKType, TextProposal, TextProposalSDKType } from "./gov";
import { RegisterIncentiveProposal, RegisterIncentiveProposalSDKType } from "../../../evmos/incentives/v1/incentives";
import { ClientUpdateProposal, ClientUpdateProposalSDKType, UpgradeProposal, UpgradeProposalSDKType } from "../../../ibc/core/client/v1/client";
import { ReplacePoolIncentivesProposal, ReplacePoolIncentivesProposalSDKType, UpdatePoolIncentivesProposal, UpdatePoolIncentivesProposalSDKType } from "../../../osmosis/pool-incentives/v1beta1/gov";
import { SetSuperfluidAssetsProposal, SetSuperfluidAssetsProposalSDKType, RemoveSuperfluidAssetsProposal, RemoveSuperfluidAssetsProposalSDKType, UpdateUnpoolWhiteListProposal, UpdateUnpoolWhiteListProposalSDKType } from "../../../osmosis/superfluid/v1beta1/gov";
import { UpdateFeeTokenProposal, UpdateFeeTokenProposalSDKType } from "../../../osmosis/txfees/v1beta1/gov";
import { buildTx } from "../../../helper-func-types";
import { buildUseMutation } from "../../../react-query";
import { buildUseVueMutation } from "../../../vue-query";
import { type MsgSubmitProposal, MsgSubmitProposalSDKType, MsgSubmitProposalResponse, MsgSubmitProposalResponseSDKType, type MsgVote, MsgVoteSDKType, MsgVoteResponse, MsgVoteResponseSDKType, type MsgVoteWeighted, MsgVoteWeightedSDKType, MsgVoteWeightedResponse, MsgVoteWeightedResponseSDKType, type MsgDeposit, MsgDepositSDKType, MsgDepositResponse, MsgDepositResponseSDKType } from "./tx";
import { submitProposal, helperVote, letsVoteWeighted, toDeposit } from "./tx.rpc.func";
/**
 * SubmitProposal defines a method to create new proposal given a content.
 * @name useSubmitProposal
 * @package cosmos.gov.v1beta1
 * @see proto service: cosmos.gov.v1beta1.SubmitProposal
 */
export const useSubmitProposal = buildUseMutation<MsgSubmitProposal, Error>({
  builderMutationFn: submitProposal
});
/**
 * Vote defines a method to add a vote on a specific proposal.
 * @name useHelperVote
 * @package cosmos.gov.v1beta1
 * @see proto service: cosmos.gov.v1beta1.Vote
 */
export const useHelperVote = buildUseMutation<MsgVote, Error>({
  builderMutationFn: helperVote
});
/**
 * VoteWeighted defines a method to add a weighted vote on a specific proposal.
 * 
 * Since: cosmos-sdk 0.43
 * @name useTxLetsVoteWeighted
 * @package cosmos.gov.v1beta1
 * @see proto service: cosmos.gov.v1beta1.VoteWeighted
 */
export const useTxLetsVoteWeighted = buildUseMutation<MsgVoteWeighted, Error>({
  builderMutationFn: letsVoteWeighted
});
/**
 * Deposit defines a method to add deposit on a specific proposal.
 * @name useToDeposit
 * @package cosmos.gov.v1beta1
 * @see proto service: cosmos.gov.v1beta1.Deposit
 */
export const useToDeposit = buildUseMutation<MsgDeposit, Error>({
  builderMutationFn: toDeposit
});