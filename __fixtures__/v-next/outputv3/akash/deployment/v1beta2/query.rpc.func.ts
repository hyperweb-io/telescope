import { DeploymentFilters, DeploymentFiltersSDKType, DeploymentID, DeploymentIDSDKType, Deployment, DeploymentSDKType } from "./deployment";
import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { GroupID, GroupIDSDKType } from "./groupid";
import { Group, GroupSDKType } from "./group";
import { Account, AccountSDKType } from "../../escrow/v1beta2/types";
import { EndpointOrRpc, buildQuery } from "../../../helper-func-types";
import { QueryDeploymentsRequest, QueryDeploymentsRequestSDKType, QueryDeploymentsResponse, QueryDeploymentsResponseSDKType, QueryDeploymentRequest, QueryDeploymentRequestSDKType, QueryDeploymentResponse, QueryDeploymentResponseSDKType, QueryGroupRequest, QueryGroupRequestSDKType, QueryGroupResponse, QueryGroupResponseSDKType } from "./query";
/**
 * Deployments queries deployments
 * @name getDeployments
 * @package akash.deployment.v1beta2
 * @see proto service: akash.deployment.v1beta2.Deployments
 */
export const getDeployments = buildQuery<QueryDeploymentsRequest, QueryDeploymentsResponse>({
  encode: QueryDeploymentsRequest.encode,
  decode: QueryDeploymentsResponse.decode,
  service: "akash.deployment.v1beta2.Query",
  method: "Deployments",
  deps: [QueryDeploymentsRequest, QueryDeploymentsResponse]
});
/**
 * Deployment queries deployment details
 * @name getDeployment
 * @package akash.deployment.v1beta2
 * @see proto service: akash.deployment.v1beta2.Deployment
 */
export const getDeployment = buildQuery<QueryDeploymentRequest, QueryDeploymentResponse>({
  encode: QueryDeploymentRequest.encode,
  decode: QueryDeploymentResponse.decode,
  service: "akash.deployment.v1beta2.Query",
  method: "Deployment",
  deps: [QueryDeploymentRequest, QueryDeploymentResponse]
});
/**
 * Group queries group details
 * @name getGroup
 * @package akash.deployment.v1beta2
 * @see proto service: akash.deployment.v1beta2.Group
 */
export const getGroup = buildQuery<QueryGroupRequest, QueryGroupResponse>({
  encode: QueryGroupRequest.encode,
  decode: QueryGroupResponse.decode,
  service: "akash.deployment.v1beta2.Query",
  method: "Group",
  deps: [QueryGroupRequest, QueryGroupResponse]
});