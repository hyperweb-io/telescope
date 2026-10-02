import { buildUseQuery } from "../../../react-query";
import type { QueryDeploymentsRequest, QueryDeploymentsResponse, QueryDeploymentRequest, QueryDeploymentResponse, QueryGroupRequest, QueryGroupResponse } from "./query";
import { getDeployments, getDeployment, getGroup } from "./query.rpc.func";
/**
 * Deployments queries deployments
 * @name useGetDeployments
 * @package akash.deployment.v1beta2
 * @see proto service: akash.deployment.v1beta2.Deployments
 */
export const useGetDeployments = buildUseQuery<QueryDeploymentsRequest, QueryDeploymentsResponse>({
  builderQueryFn: getDeployments,
  queryKeyPrefix: "DeploymentsQuery"
});
/**
 * Deployment queries deployment details
 * @name useGetDeployment
 * @package akash.deployment.v1beta2
 * @see proto service: akash.deployment.v1beta2.Deployment
 */
export const useGetDeployment = buildUseQuery<QueryDeploymentRequest, QueryDeploymentResponse>({
  builderQueryFn: getDeployment,
  queryKeyPrefix: "DeploymentQuery"
});
/**
 * Group queries group details
 * @name useGetGroup
 * @package akash.deployment.v1beta2
 * @see proto service: akash.deployment.v1beta2.Group
 */
export const useGetGroup = buildUseQuery<QueryGroupRequest, QueryGroupResponse>({
  builderQueryFn: getGroup,
  queryKeyPrefix: "GroupQuery"
});