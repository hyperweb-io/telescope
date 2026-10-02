import { buildUseQuery } from "../../../../react-query";
import type { ListAllInterfacesRequest, ListAllInterfacesResponse, ListImplementationsRequest, ListImplementationsResponse } from "./reflection";
import { getListAllInterfaces, getListImplementations } from "./reflection.rpc.func";
/**
 * ListAllInterfaces lists all the interfaces registered in the interface
 * registry.
 * @name useGetListAllInterfaces
 * @package cosmos.base.reflection.v1beta1
 * @see proto service: cosmos.base.reflection.v1beta1.ListAllInterfaces
 */
export const useGetListAllInterfaces = buildUseQuery<ListAllInterfacesRequest, ListAllInterfacesResponse>({
  builderQueryFn: getListAllInterfaces,
  queryKeyPrefix: "ListAllInterfacesQuery"
});
/**
 * ListImplementations list all the concrete types that implement a given
 * interface.
 * @name useGetListImplementations
 * @package cosmos.base.reflection.v1beta1
 * @see proto service: cosmos.base.reflection.v1beta1.ListImplementations
 */
export const useGetListImplementations = buildUseQuery<ListImplementationsRequest, ListImplementationsResponse>({
  builderQueryFn: getListImplementations,
  queryKeyPrefix: "ListImplementationsQuery"
});