import { buildUseQuery } from "../../../react-query";
import type { QueryProposalRequest, QueryProposalResponse, QueryProposalsRequest, QueryProposalsResponse, QueryVoteRequest, QueryVoteResponse, QueryVotesRequest, QueryVotesResponse, QueryParamsRequest, QueryParamsResponse, QueryDepositRequest, QueryDepositResponse, QueryDepositsRequest, QueryDepositsResponse, QueryTallyResultRequest, QueryTallyResultResponse } from "./query";
import { getProposal, getProposals, getVote, getVotes, getCosmosGovV1Params, getDeposit, getDeposits, getTallyResult } from "./query.rpc.func";
/**
 * Proposal queries proposal details based on ProposalID.
 * @name useGetProposal
 * @package cosmos.gov.v1
 * @see proto service: cosmos.gov.v1.Proposal
 */
export const useGetProposal = buildUseQuery<QueryProposalRequest, QueryProposalResponse>({
  builderQueryFn: getProposal,
  queryKeyPrefix: "ProposalQuery"
});
/**
 * Proposals queries all proposals based on given status.
 * @name useGetProposals
 * @package cosmos.gov.v1
 * @see proto service: cosmos.gov.v1.Proposals
 */
export const useGetProposals = buildUseQuery<QueryProposalsRequest, QueryProposalsResponse>({
  builderQueryFn: getProposals,
  queryKeyPrefix: "ProposalsQuery"
});
/**
 * Vote queries voted information based on proposalID, voterAddr.
 * @name useGetVote
 * @package cosmos.gov.v1
 * @see proto service: cosmos.gov.v1.Vote
 */
export const useGetVote = buildUseQuery<QueryVoteRequest, QueryVoteResponse>({
  builderQueryFn: getVote,
  queryKeyPrefix: "VoteQuery"
});
/**
 * Votes queries votes of a given proposal.
 * @name useGetVotes
 * @package cosmos.gov.v1
 * @see proto service: cosmos.gov.v1.Votes
 */
export const useGetVotes = buildUseQuery<QueryVotesRequest, QueryVotesResponse>({
  builderQueryFn: getVotes,
  queryKeyPrefix: "VotesQuery"
});
/**
 * Params queries all parameters of the gov module.
 * @name useGetCosmosGovV1Params
 * @package cosmos.gov.v1
 * @see proto service: cosmos.gov.v1.Params
 */
export const useGetCosmosGovV1Params = buildUseQuery<QueryParamsRequest, QueryParamsResponse>({
  builderQueryFn: getCosmosGovV1Params,
  queryKeyPrefix: "ParamsQuery"
});
/**
 * Deposit queries single deposit information based proposalID, depositAddr.
 * @name useGetDeposit
 * @package cosmos.gov.v1
 * @see proto service: cosmos.gov.v1.Deposit
 */
export const useGetDeposit = buildUseQuery<QueryDepositRequest, QueryDepositResponse>({
  builderQueryFn: getDeposit,
  queryKeyPrefix: "DepositQuery"
});
/**
 * Deposits queries all deposits of a single proposal.
 * @name useGetDeposits
 * @package cosmos.gov.v1
 * @see proto service: cosmos.gov.v1.Deposits
 */
export const useGetDeposits = buildUseQuery<QueryDepositsRequest, QueryDepositsResponse>({
  builderQueryFn: getDeposits,
  queryKeyPrefix: "DepositsQuery"
});
/**
 * TallyResult queries the tally of a proposal vote.
 * @name useGetTallyResult
 * @package cosmos.gov.v1
 * @see proto service: cosmos.gov.v1.TallyResult
 */
export const useGetTallyResult = buildUseQuery<QueryTallyResultRequest, QueryTallyResultResponse>({
  builderQueryFn: getTallyResult,
  queryKeyPrefix: "TallyResultQuery"
});