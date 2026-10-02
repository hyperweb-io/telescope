import { buildUseQuery } from "../../../react-query";
import type { QueryOrdersRequest, QueryOrdersResponse, QueryOrderRequest, QueryOrderResponse, QueryBidsRequest, QueryBidsResponse, QueryBidRequest, QueryBidResponse, QueryLeasesRequest, QueryLeasesResponse, QueryLeaseRequest, QueryLeaseResponse } from "./query";
import { getOrders, getOrder, getBids, getBid, getLeases, getLease } from "./query.rpc.func";
/**
 * Orders queries orders with filters
 * @name useGetOrders
 * @package akash.market.v1beta2
 * @see proto service: akash.market.v1beta2.Orders
 */
export const useGetOrders = buildUseQuery<QueryOrdersRequest, QueryOrdersResponse>({
  builderQueryFn: getOrders,
  queryKeyPrefix: "OrdersQuery"
});
/**
 * Order queries order details
 * @name useGetOrder
 * @package akash.market.v1beta2
 * @see proto service: akash.market.v1beta2.Order
 */
export const useGetOrder = buildUseQuery<QueryOrderRequest, QueryOrderResponse>({
  builderQueryFn: getOrder,
  queryKeyPrefix: "OrderQuery"
});
/**
 * Bids queries bids with filters
 * @name useGetBids
 * @package akash.market.v1beta2
 * @see proto service: akash.market.v1beta2.Bids
 */
export const useGetBids = buildUseQuery<QueryBidsRequest, QueryBidsResponse>({
  builderQueryFn: getBids,
  queryKeyPrefix: "BidsQuery"
});
/**
 * Bid queries bid details
 * @name useGetBid
 * @package akash.market.v1beta2
 * @see proto service: akash.market.v1beta2.Bid
 */
export const useGetBid = buildUseQuery<QueryBidRequest, QueryBidResponse>({
  builderQueryFn: getBid,
  queryKeyPrefix: "BidQuery"
});
/**
 * Leases queries leases with filters
 * @name useGetLeases
 * @package akash.market.v1beta2
 * @see proto service: akash.market.v1beta2.Leases
 */
export const useGetLeases = buildUseQuery<QueryLeasesRequest, QueryLeasesResponse>({
  builderQueryFn: getLeases,
  queryKeyPrefix: "LeasesQuery"
});
/**
 * Lease queries lease details
 * @name useGetLease
 * @package akash.market.v1beta2
 * @see proto service: akash.market.v1beta2.Lease
 */
export const useGetLease = buildUseQuery<QueryLeaseRequest, QueryLeaseResponse>({
  builderQueryFn: getLease,
  queryKeyPrefix: "LeaseQuery"
});