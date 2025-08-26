import { buildQuery } from "../../../../helper-func-types";
import { ListAllInterfacesRequest, ListAllInterfacesResponse, ListImplementationsRequest, ListImplementationsResponse } from "./reflection";
/**
 * ListAllInterfaces lists all the interfaces registered in the interface
 * registry.
 * @name getListAllInterfaces
 * @package cosmos.base.reflection.v1beta1
 * @see proto service: cosmos.base.reflection.v1beta1.ListAllInterfaces
 */
export const getListAllInterfaces = buildQuery<ListAllInterfacesRequest, ListAllInterfacesResponse>({
  encode: ListAllInterfacesRequest.encode,
  decode: ListAllInterfacesResponse.decode,
  service: "cosmos.base.reflection.v1beta1.ReflectionService",
  method: "ListAllInterfaces",
  deps: [ListAllInterfacesRequest, ListAllInterfacesResponse]
});
/**
 * ListImplementations list all the concrete types that implement a given
 * interface.
 * @name getListImplementations
 * @package cosmos.base.reflection.v1beta1
 * @see proto service: cosmos.base.reflection.v1beta1.ListImplementations
 */
export const getListImplementations = buildQuery<ListImplementationsRequest, ListImplementationsResponse>({
  encode: ListImplementationsRequest.encode,
  decode: ListImplementationsResponse.decode,
  service: "cosmos.base.reflection.v1beta1.ReflectionService",
  method: "ListImplementations",
  deps: [ListImplementationsRequest, ListImplementationsResponse]
});