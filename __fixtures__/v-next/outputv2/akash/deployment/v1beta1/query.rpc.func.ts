import { buildQuery } from "../../../helper-func-types";
import { QueryDeploymentsRequest, QueryDeploymentsResponse, QueryDeploymentRequest, QueryDeploymentResponse, QueryGroupRequest, QueryGroupResponse } from "./query";
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
  method: "Deployments",
  deps: [QueryDeploymentsRequest, QueryDeploymentsResponse]
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
  method: "Deployment",
  deps: [QueryDeploymentRequest, QueryDeploymentResponse]
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
  method: "Group",
  deps: [QueryGroupRequest, QueryGroupResponse]
});