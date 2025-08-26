import { buildQuery } from "../../../helper-func-types";
import { QueryGroupInfoRequest, QueryGroupInfoResponse, QueryGroupPolicyInfoRequest, QueryGroupPolicyInfoResponse, QueryGroupMembersRequest, QueryGroupMembersResponse, QueryGroupsByAdminRequest, QueryGroupsByAdminResponse, QueryGroupPoliciesByGroupRequest, QueryGroupPoliciesByGroupResponse, QueryGroupPoliciesByAdminRequest, QueryGroupPoliciesByAdminResponse, QueryProposalRequest, QueryProposalResponse, QueryProposalsByGroupPolicyRequest, QueryProposalsByGroupPolicyResponse, QueryVoteByProposalVoterRequest, QueryVoteByProposalVoterResponse, QueryVotesByProposalRequest, QueryVotesByProposalResponse, QueryVotesByVoterRequest, QueryVotesByVoterResponse, QueryGroupsByMemberRequest, QueryGroupsByMemberResponse, QueryTallyResultRequest, QueryTallyResultResponse } from "./query";
/**
 * GroupInfo queries group info based on group id.
 * @name getGroupInfo
 * @package cosmos.group.v1
 * @see proto service: cosmos.group.v1.GroupInfo
 */
export const getGroupInfo = buildQuery<QueryGroupInfoRequest, QueryGroupInfoResponse>({
  encode: QueryGroupInfoRequest.encode,
  decode: QueryGroupInfoResponse.decode,
  service: "cosmos.group.v1.Query",
  method: "GroupInfo",
  deps: [QueryGroupInfoRequest, QueryGroupInfoResponse]
});
/**
 * GroupPolicyInfo queries group policy info based on account address of group policy.
 * @name getGroupPolicyInfo
 * @package cosmos.group.v1
 * @see proto service: cosmos.group.v1.GroupPolicyInfo
 */
export const getGroupPolicyInfo = buildQuery<QueryGroupPolicyInfoRequest, QueryGroupPolicyInfoResponse>({
  encode: QueryGroupPolicyInfoRequest.encode,
  decode: QueryGroupPolicyInfoResponse.decode,
  service: "cosmos.group.v1.Query",
  method: "GroupPolicyInfo",
  deps: [QueryGroupPolicyInfoRequest, QueryGroupPolicyInfoResponse]
});
/**
 * GroupMembers queries members of a group
 * @name getGroupMembers
 * @package cosmos.group.v1
 * @see proto service: cosmos.group.v1.GroupMembers
 */
export const getGroupMembers = buildQuery<QueryGroupMembersRequest, QueryGroupMembersResponse>({
  encode: QueryGroupMembersRequest.encode,
  decode: QueryGroupMembersResponse.decode,
  service: "cosmos.group.v1.Query",
  method: "GroupMembers",
  deps: [QueryGroupMembersRequest, QueryGroupMembersResponse]
});
/**
 * GroupsByAdmin queries groups by admin address.
 * @name getGroupsByAdmin
 * @package cosmos.group.v1
 * @see proto service: cosmos.group.v1.GroupsByAdmin
 */
export const getGroupsByAdmin = buildQuery<QueryGroupsByAdminRequest, QueryGroupsByAdminResponse>({
  encode: QueryGroupsByAdminRequest.encode,
  decode: QueryGroupsByAdminResponse.decode,
  service: "cosmos.group.v1.Query",
  method: "GroupsByAdmin",
  deps: [QueryGroupsByAdminRequest, QueryGroupsByAdminResponse]
});
/**
 * GroupPoliciesByGroup queries group policies by group id.
 * @name getGroupPoliciesByGroup
 * @package cosmos.group.v1
 * @see proto service: cosmos.group.v1.GroupPoliciesByGroup
 */
export const getGroupPoliciesByGroup = buildQuery<QueryGroupPoliciesByGroupRequest, QueryGroupPoliciesByGroupResponse>({
  encode: QueryGroupPoliciesByGroupRequest.encode,
  decode: QueryGroupPoliciesByGroupResponse.decode,
  service: "cosmos.group.v1.Query",
  method: "GroupPoliciesByGroup",
  deps: [QueryGroupPoliciesByGroupRequest, QueryGroupPoliciesByGroupResponse]
});
/**
 * GroupsByAdmin queries group policies by admin address.
 * @name getGroupPoliciesByAdmin
 * @package cosmos.group.v1
 * @see proto service: cosmos.group.v1.GroupPoliciesByAdmin
 */
export const getGroupPoliciesByAdmin = buildQuery<QueryGroupPoliciesByAdminRequest, QueryGroupPoliciesByAdminResponse>({
  encode: QueryGroupPoliciesByAdminRequest.encode,
  decode: QueryGroupPoliciesByAdminResponse.decode,
  service: "cosmos.group.v1.Query",
  method: "GroupPoliciesByAdmin",
  deps: [QueryGroupPoliciesByAdminRequest, QueryGroupPoliciesByAdminResponse]
});
/**
 * Proposal queries a proposal based on proposal id.
 * @name getProposal
 * @package cosmos.group.v1
 * @see proto service: cosmos.group.v1.Proposal
 */
export const getProposal = buildQuery<QueryProposalRequest, QueryProposalResponse>({
  encode: QueryProposalRequest.encode,
  decode: QueryProposalResponse.decode,
  service: "cosmos.group.v1.Query",
  method: "Proposal",
  deps: [QueryProposalRequest, QueryProposalResponse]
});
/**
 * ProposalsByGroupPolicy queries proposals based on account address of group policy.
 * @name getProposalsByGroupPolicy
 * @package cosmos.group.v1
 * @see proto service: cosmos.group.v1.ProposalsByGroupPolicy
 */
export const getProposalsByGroupPolicy = buildQuery<QueryProposalsByGroupPolicyRequest, QueryProposalsByGroupPolicyResponse>({
  encode: QueryProposalsByGroupPolicyRequest.encode,
  decode: QueryProposalsByGroupPolicyResponse.decode,
  service: "cosmos.group.v1.Query",
  method: "ProposalsByGroupPolicy",
  deps: [QueryProposalsByGroupPolicyRequest, QueryProposalsByGroupPolicyResponse]
});
/**
 * VoteByProposalVoter queries a vote by proposal id and voter.
 * @name getVoteByProposalVoter
 * @package cosmos.group.v1
 * @see proto service: cosmos.group.v1.VoteByProposalVoter
 */
export const getVoteByProposalVoter = buildQuery<QueryVoteByProposalVoterRequest, QueryVoteByProposalVoterResponse>({
  encode: QueryVoteByProposalVoterRequest.encode,
  decode: QueryVoteByProposalVoterResponse.decode,
  service: "cosmos.group.v1.Query",
  method: "VoteByProposalVoter",
  deps: [QueryVoteByProposalVoterRequest, QueryVoteByProposalVoterResponse]
});
/**
 * VotesByProposal queries a vote by proposal.
 * @name getVotesByProposal
 * @package cosmos.group.v1
 * @see proto service: cosmos.group.v1.VotesByProposal
 */
export const getVotesByProposal = buildQuery<QueryVotesByProposalRequest, QueryVotesByProposalResponse>({
  encode: QueryVotesByProposalRequest.encode,
  decode: QueryVotesByProposalResponse.decode,
  service: "cosmos.group.v1.Query",
  method: "VotesByProposal",
  deps: [QueryVotesByProposalRequest, QueryVotesByProposalResponse]
});
/**
 * VotesByVoter queries a vote by voter.
 * @name getVotesByVoter
 * @package cosmos.group.v1
 * @see proto service: cosmos.group.v1.VotesByVoter
 */
export const getVotesByVoter = buildQuery<QueryVotesByVoterRequest, QueryVotesByVoterResponse>({
  encode: QueryVotesByVoterRequest.encode,
  decode: QueryVotesByVoterResponse.decode,
  service: "cosmos.group.v1.Query",
  method: "VotesByVoter",
  deps: [QueryVotesByVoterRequest, QueryVotesByVoterResponse]
});
/**
 * GroupsByMember queries groups by member address.
 * @name getGroupsByMember
 * @package cosmos.group.v1
 * @see proto service: cosmos.group.v1.GroupsByMember
 */
export const getGroupsByMember = buildQuery<QueryGroupsByMemberRequest, QueryGroupsByMemberResponse>({
  encode: QueryGroupsByMemberRequest.encode,
  decode: QueryGroupsByMemberResponse.decode,
  service: "cosmos.group.v1.Query",
  method: "GroupsByMember",
  deps: [QueryGroupsByMemberRequest, QueryGroupsByMemberResponse]
});
/**
 * TallyResult queries the tally of a proposal votes.
 * @name getTallyResult
 * @package cosmos.group.v1
 * @see proto service: cosmos.group.v1.TallyResult
 */
export const getTallyResult = buildQuery<QueryTallyResultRequest, QueryTallyResultResponse>({
  encode: QueryTallyResultRequest.encode,
  decode: QueryTallyResultResponse.decode,
  service: "cosmos.group.v1.Query",
  method: "TallyResult",
  deps: [QueryTallyResultRequest, QueryTallyResultResponse]
});