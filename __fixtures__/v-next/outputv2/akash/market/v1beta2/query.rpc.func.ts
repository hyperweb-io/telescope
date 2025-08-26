import { buildQuery } from "../../../helper-func-types";
import { QueryOrdersRequest, QueryOrdersResponse, QueryOrderRequest, QueryOrderResponse, QueryBidsRequest, QueryBidsResponse, QueryBidRequest, QueryBidResponse, QueryLeasesRequest, QueryLeasesResponse, QueryLeaseRequest, QueryLeaseResponse } from "./query";
/**
 * Orders queries orders with filters
 * @name getOrders
 * @package akash.market.v1beta2
 * @see proto service: akash.market.v1beta2.Orders
 */
export const getOrders = buildQuery<QueryOrdersRequest, QueryOrdersResponse>({
  encode: QueryOrdersRequest.encode,
  decode: QueryOrdersResponse.decode,
  service: "akash.market.v1beta2.Query",
  method: "Orders",
  deps: [QueryOrdersRequest, QueryOrdersResponse]
});
/**
 * Order queries order details
 * @name getOrder
 * @package akash.market.v1beta2
 * @see proto service: akash.market.v1beta2.Order
 */
export const getOrder = buildQuery<QueryOrderRequest, QueryOrderResponse>({
  encode: QueryOrderRequest.encode,
  decode: QueryOrderResponse.decode,
  service: "akash.market.v1beta2.Query",
  method: "Order",
  deps: [QueryOrderRequest, QueryOrderResponse]
});
/**
 * Bids queries bids with filters
 * @name getBids
 * @package akash.market.v1beta2
 * @see proto service: akash.market.v1beta2.Bids
 */
export const getBids = buildQuery<QueryBidsRequest, QueryBidsResponse>({
  encode: QueryBidsRequest.encode,
  decode: QueryBidsResponse.decode,
  service: "akash.market.v1beta2.Query",
  method: "Bids",
  deps: [QueryBidsRequest, QueryBidsResponse]
});
/**
 * Bid queries bid details
 * @name getBid
 * @package akash.market.v1beta2
 * @see proto service: akash.market.v1beta2.Bid
 */
export const getBid = buildQuery<QueryBidRequest, QueryBidResponse>({
  encode: QueryBidRequest.encode,
  decode: QueryBidResponse.decode,
  service: "akash.market.v1beta2.Query",
  method: "Bid",
  deps: [QueryBidRequest, QueryBidResponse]
});
/**
 * Leases queries leases with filters
 * @name getLeases
 * @package akash.market.v1beta2
 * @see proto service: akash.market.v1beta2.Leases
 */
export const getLeases = buildQuery<QueryLeasesRequest, QueryLeasesResponse>({
  encode: QueryLeasesRequest.encode,
  decode: QueryLeasesResponse.decode,
  service: "akash.market.v1beta2.Query",
  method: "Leases",
  deps: [QueryLeasesRequest, QueryLeasesResponse]
});
/**
 * Lease queries lease details
 * @name getLease
 * @package akash.market.v1beta2
 * @see proto service: akash.market.v1beta2.Lease
 */
export const getLease = buildQuery<QueryLeaseRequest, QueryLeaseResponse>({
  encode: QueryLeaseRequest.encode,
  decode: QueryLeaseResponse.decode,
  service: "akash.market.v1beta2.Query",
  method: "Lease",
  deps: [QueryLeaseRequest, QueryLeaseResponse]
});