import { DeploymentFilters, DeploymentFiltersSDKType, DeploymentID, DeploymentIDSDKType, Deployment, DeploymentSDKType } from "./deployment.js";
import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination.js";
import { GroupID, GroupIDSDKType, Group, GroupSDKType } from "./group.js";
import { Account, AccountSDKType } from "../../escrow/v1beta1/types.js";
import { EndpointOrRpc, buildQuery } from "../../../helper-func-types.js";
import { QueryDeploymentsRequest, QueryDeploymentsRequestSDKType, QueryDeploymentsResponse, QueryDeploymentsResponseSDKType, QueryDeploymentRequest, QueryDeploymentRequestSDKType, QueryDeploymentResponse, QueryDeploymentResponseSDKType, QueryGroupRequest, QueryGroupRequestSDKType, QueryGroupResponse, QueryGroupResponseSDKType } from "./query.js";
/**
 * Deployments queries deployments
 * @name getDeployments
 * @package akash.deployment.v1beta1
 * @see proto service: akash.deployment.v1beta1.Deployments
 */
export const getDeployments = buildQuery<QueryDeploymentsRequest, QueryDeploymentsResponse>({
  encode: QueryDeploymentsRequest.encode,
  decode: QueryDeploymentsResponse.decode,
  service: "akash.deployment.v1beta1.Query",
  method: "Deployments"
});
/**
 * Deployment queries deployment details
 * @name getDeployment
 * @package akash.deployment.v1beta1
 * @see proto service: akash.deployment.v1beta1.Deployment
 */
export const getDeployment = buildQuery<QueryDeploymentRequest, QueryDeploymentResponse>({
  encode: QueryDeploymentRequest.encode,
  decode: QueryDeploymentResponse.decode,
  service: "akash.deployment.v1beta1.Query",
  method: "Deployment"
});
/**
 * Group queries group details
 * @name getGroup
 * @package akash.deployment.v1beta1
 * @see proto service: akash.deployment.v1beta1.Group
 */
export const getGroup = buildQuery<QueryGroupRequest, QueryGroupResponse>({
  encode: QueryGroupRequest.encode,
  decode: QueryGroupResponse.decode,
  service: "akash.deployment.v1beta1.Query",
  method: "Group"
});