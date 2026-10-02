import { buildUseMutation } from "../../../react-query";
import type { MsgSubmitProposal, MsgExecLegacyContent, MsgVote, MsgVoteWeighted, MsgDeposit } from "./tx";
import { submitProposal, execLegacyContent, vote, voteWeighted, deposit } from "./tx.rpc.func";
/**
 * SubmitProposal defines a method to create new proposal given a content.
 * @name useSubmitProposal
 * @package cosmos.gov.v1
 * @see proto service: cosmos.gov.v1.SubmitProposal
 */
export const useSubmitProposal = buildUseMutation<MsgSubmitProposal, Error>({
  builderMutationFn: submitProposal
});
/**
 * ExecLegacyContent defines a Msg to be in included in a MsgSubmitProposal
 * to execute a legacy content-based proposal.
 * @name useExecLegacyContent
 * @package cosmos.gov.v1
 * @see proto service: cosmos.gov.v1.ExecLegacyContent
 */
export const useExecLegacyContent = buildUseMutation<MsgExecLegacyContent, Error>({
  builderMutationFn: execLegacyContent
});
/**
 * Vote defines a method to add a vote on a specific proposal.
 * @name useVote
 * @package cosmos.gov.v1
 * @see proto service: cosmos.gov.v1.Vote
 */
export const useVote = buildUseMutation<MsgVote, Error>({
  builderMutationFn: vote
});
/**
 * VoteWeighted defines a method to add a weighted vote on a specific proposal.
 * @name useVoteWeighted
 * @package cosmos.gov.v1
 * @see proto service: cosmos.gov.v1.VoteWeighted
 */
export const useVoteWeighted = buildUseMutation<MsgVoteWeighted, Error>({
  builderMutationFn: voteWeighted
});
/**
 * Deposit defines a method to add deposit on a specific proposal.
 * @name useDeposit
 * @package cosmos.gov.v1
 * @see proto service: cosmos.gov.v1.Deposit
 */
export const useDeposit = buildUseMutation<MsgDeposit, Error>({
  builderMutationFn: deposit
});