import { buildUseMutation } from "../../../react-query";
import type { MsgSubmitProposal, MsgVote, MsgVoteWeighted, MsgDeposit } from "./tx";
import { submitProposal, vote, voteWeighted, deposit } from "./tx.rpc.func";
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
 * @name useVote
 * @package cosmos.gov.v1beta1
 * @see proto service: cosmos.gov.v1beta1.Vote
 */
export const useVote = buildUseMutation<MsgVote, Error>({
  builderMutationFn: vote
});
/**
 * VoteWeighted defines a method to add a weighted vote on a specific proposal.
 * 
 * Since: cosmos-sdk 0.43
 * @name useVoteWeighted
 * @package cosmos.gov.v1beta1
 * @see proto service: cosmos.gov.v1beta1.VoteWeighted
 */
export const useVoteWeighted = buildUseMutation<MsgVoteWeighted, Error>({
  builderMutationFn: voteWeighted
});
/**
 * Deposit defines a method to add deposit on a specific proposal.
 * @name useDeposit
 * @package cosmos.gov.v1beta1
 * @see proto service: cosmos.gov.v1beta1.Deposit
 */
export const useDeposit = buildUseMutation<MsgDeposit, Error>({
  builderMutationFn: deposit
});