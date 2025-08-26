import { ProposalStatus, ProposalStatusSDKType, Proposal, ProposalSDKType, Vote, VoteSDKType, VotingParams, VotingParamsSDKType, DepositParams, DepositParamsSDKType, TallyParams, TallyParamsSDKType, Deposit, DepositSDKType, TallyResult, TallyResultSDKType } from "./gov";
import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../base/query/v1beta1/pagination";
import { EndpointOrRpc, buildQuery } from "../../../helper-func-types";
import { QueryProposalRequest, QueryProposalRequestSDKType, QueryProposalResponse, QueryProposalResponseSDKType, QueryProposalsRequest, QueryProposalsRequestSDKType, QueryProposalsResponse, QueryProposalsResponseSDKType, QueryVoteRequest, QueryVoteRequestSDKType, QueryVoteResponse, QueryVoteResponseSDKType, QueryVotesRequest, QueryVotesRequestSDKType, QueryVotesResponse, QueryVotesResponseSDKType, QueryParamsRequest, QueryParamsRequestSDKType, QueryParamsResponse, QueryParamsResponseSDKType, QueryDepositRequest, QueryDepositRequestSDKType, QueryDepositResponse, QueryDepositResponseSDKType, QueryDepositsRequest, QueryDepositsRequestSDKType, QueryDepositsResponse, QueryDepositsResponseSDKType, QueryTallyResultRequest, QueryTallyResultRequestSDKType, QueryTallyResultResponse, QueryTallyResultResponseSDKType } from "./query";
/**
 * Proposal queries proposal details based on ProposalID.
 * @name getProposal
 * @package cosmos.gov.v1
 * @see proto service: cosmos.gov.v1.Proposal
 */
export const getProposal = buildQuery<QueryProposalRequest, QueryProposalResponse>({
  encode: QueryProposalRequest.encode,
  decode: QueryProposalResponse.decode,
  service: "cosmos.gov.v1.Query",
  method: "Proposal",
  deps: [QueryProposalRequest, QueryProposalResponse]
});
/**
 * Proposals queries all proposals based on given status.
 * @name getProposals
 * @package cosmos.gov.v1
 * @see proto service: cosmos.gov.v1.Proposals
 */
export const getProposals = buildQuery<QueryProposalsRequest, QueryProposalsResponse>({
  encode: QueryProposalsRequest.encode,
  decode: QueryProposalsResponse.decode,
  service: "cosmos.gov.v1.Query",
  method: "Proposals",
  deps: [QueryProposalsRequest, QueryProposalsResponse]
});
/**
 * Vote queries voted information based on proposalID, voterAddr.
 * @name getVote
 * @package cosmos.gov.v1
 * @see proto service: cosmos.gov.v1.Vote
 */
export const getVote = buildQuery<QueryVoteRequest, QueryVoteResponse>({
  encode: QueryVoteRequest.encode,
  decode: QueryVoteResponse.decode,
  service: "cosmos.gov.v1.Query",
  method: "Vote",
  deps: [QueryVoteRequest, QueryVoteResponse]
});
/**
 * Votes queries votes of a given proposal.
 * @name getVotes
 * @package cosmos.gov.v1
 * @see proto service: cosmos.gov.v1.Votes
 */
export const getVotes = buildQuery<QueryVotesRequest, QueryVotesResponse>({
  encode: QueryVotesRequest.encode,
  decode: QueryVotesResponse.decode,
  service: "cosmos.gov.v1.Query",
  method: "Votes",
  deps: [QueryVotesRequest, QueryVotesResponse]
});
/**
 * Params queries all parameters of the gov module.
 * @name getParams
 * @package cosmos.gov.v1
 * @see proto service: cosmos.gov.v1.Params
 */
export const getParams = buildQuery<QueryParamsRequest, QueryParamsResponse>({
  encode: QueryParamsRequest.encode,
  decode: QueryParamsResponse.decode,
  service: "cosmos.gov.v1.Query",
  method: "Params",
  deps: [QueryParamsRequest, QueryParamsResponse]
});
/**
 * Deposit queries single deposit information based proposalID, depositAddr.
 * @name getDeposit
 * @package cosmos.gov.v1
 * @see proto service: cosmos.gov.v1.Deposit
 */
export const getDeposit = buildQuery<QueryDepositRequest, QueryDepositResponse>({
  encode: QueryDepositRequest.encode,
  decode: QueryDepositResponse.decode,
  service: "cosmos.gov.v1.Query",
  method: "Deposit",
  deps: [QueryDepositRequest, QueryDepositResponse]
});
/**
 * Deposits queries all deposits of a single proposal.
 * @name getDeposits
 * @package cosmos.gov.v1
 * @see proto service: cosmos.gov.v1.Deposits
 */
export const getDeposits = buildQuery<QueryDepositsRequest, QueryDepositsResponse>({
  encode: QueryDepositsRequest.encode,
  decode: QueryDepositsResponse.decode,
  service: "cosmos.gov.v1.Query",
  method: "Deposits",
  deps: [QueryDepositsRequest, QueryDepositsResponse]
});
/**
 * TallyResult queries the tally of a proposal vote.
 * @name getTallyResult
 * @package cosmos.gov.v1
 * @see proto service: cosmos.gov.v1.TallyResult
 */
export const getTallyResult = buildQuery<QueryTallyResultRequest, QueryTallyResultResponse>({
  encode: QueryTallyResultRequest.encode,
  decode: QueryTallyResultResponse.decode,
  service: "cosmos.gov.v1.Query",
  method: "TallyResult",
  deps: [QueryTallyResultRequest, QueryTallyResultResponse]
});