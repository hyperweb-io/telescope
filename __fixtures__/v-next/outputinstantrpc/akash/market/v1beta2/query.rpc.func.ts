import { OrderFilters, OrderFiltersSDKType, OrderID, OrderIDSDKType, Order, OrderSDKType } from "./order";
import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { BidFilters, BidFiltersSDKType, BidID, BidIDSDKType, Bid, BidSDKType } from "./bid";
import { LeaseFilters, LeaseFiltersSDKType, LeaseID, LeaseIDSDKType, Lease, LeaseSDKType } from "./lease";
import { Account, AccountSDKType, FractionalPayment, FractionalPaymentSDKType } from "../../escrow/v1beta2/types";
import { EndpointOrRpc, buildQuery } from "../../../helper-func-types";
import { QueryOrdersRequest, QueryOrdersRequestSDKType, QueryOrdersResponse, QueryOrdersResponseSDKType, QueryOrderRequest, QueryOrderRequestSDKType, QueryOrderResponse, QueryOrderResponseSDKType, QueryBidsRequest, QueryBidsRequestSDKType, QueryBidsResponse, QueryBidsResponseSDKType, QueryBidRequest, QueryBidRequestSDKType, QueryBidResponse, QueryBidResponseSDKType, QueryLeasesRequest, QueryLeasesRequestSDKType, QueryLeasesResponse, QueryLeasesResponseSDKType, QueryLeaseRequest, QueryLeaseRequestSDKType, QueryLeaseResponse, QueryLeaseResponseSDKType } from "./query";
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
  method: "Orders"
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
  method: "Order"
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
  method: "Bids"
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
  method: "Bid"
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
  method: "Leases"
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
  method: "Lease"
});