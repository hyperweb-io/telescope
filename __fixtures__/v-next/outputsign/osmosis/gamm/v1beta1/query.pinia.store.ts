import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { SwapAmountInRoute, SwapAmountInRouteSDKType, SwapAmountOutRoute, SwapAmountOutRouteSDKType } from "./tx";
import { Any, AnyProtoMsg, AnyAmino, AnySDKType } from "../../../google/protobuf/any";
import { LCDClient } from "@cosmology/lcd";
import { useEndpoint } from "../../../pinia-endpoint";
import { QueryPoolsRequest, type QueryPoolsRequestSDKType, QueryPoolsResponse, type QueryPoolsResponseSDKType, QueryNumPoolsRequest, type QueryNumPoolsRequestSDKType, QueryNumPoolsResponse, type QueryNumPoolsResponseSDKType, QueryTotalLiquidityRequest, type QueryTotalLiquidityRequestSDKType, QueryTotalLiquidityResponse, type QueryTotalLiquidityResponseSDKType, QueryPoolsWithFilterRequest, type QueryPoolsWithFilterRequestSDKType, QueryPoolsWithFilterResponse, type QueryPoolsWithFilterResponseSDKType, QueryPoolRequest, type QueryPoolRequestSDKType, QueryPoolResponse, type QueryPoolResponseSDKType, QueryPoolTypeRequest, type QueryPoolTypeRequestSDKType, QueryPoolTypeResponse, type QueryPoolTypeResponseSDKType, QueryCalcJoinPoolNoSwapSharesRequest, type QueryCalcJoinPoolNoSwapSharesRequestSDKType, QueryCalcJoinPoolNoSwapSharesResponse, type QueryCalcJoinPoolNoSwapSharesResponseSDKType, QueryCalcJoinPoolSharesRequest, type QueryCalcJoinPoolSharesRequestSDKType, QueryCalcJoinPoolSharesResponse, type QueryCalcJoinPoolSharesResponseSDKType, QueryCalcExitPoolCoinsFromSharesRequest, type QueryCalcExitPoolCoinsFromSharesRequestSDKType, QueryCalcExitPoolCoinsFromSharesResponse, type QueryCalcExitPoolCoinsFromSharesResponseSDKType, QueryPoolParamsRequest, type QueryPoolParamsRequestSDKType, QueryPoolParamsResponse, type QueryPoolParamsResponseSDKType, QueryTotalPoolLiquidityRequest, type QueryTotalPoolLiquidityRequestSDKType, QueryTotalPoolLiquidityResponse, type QueryTotalPoolLiquidityResponseSDKType, QueryTotalSharesRequest, type QueryTotalSharesRequestSDKType, QueryTotalSharesResponse, type QueryTotalSharesResponseSDKType, QuerySpotPriceRequest, type QuerySpotPriceRequestSDKType, QuerySpotPriceResponse, type QuerySpotPriceResponseSDKType, QuerySwapExactAmountInRequest, type QuerySwapExactAmountInRequestSDKType, QuerySwapExactAmountInResponse, type QuerySwapExactAmountInResponseSDKType, QuerySwapExactAmountOutRequest, type QuerySwapExactAmountOutRequestSDKType, QuerySwapExactAmountOutResponse, type QuerySwapExactAmountOutResponseSDKType } from "./query";
import { defineStore } from "pinia";
import { LCDQueryClient } from "./query.lcd";
export const usePiniaStore = defineStore('osmosis/gamm/v1beta1/query.proto', {
  state: () => {
    return {
      pools: {} as QueryPoolsResponseSDKType,
      numPools: {} as QueryNumPoolsResponseSDKType,
      totalLiquidity: {} as QueryTotalLiquidityResponseSDKType,
      poolsWithFilter: {} as QueryPoolsWithFilterResponseSDKType,
      pool: {} as QueryPoolResponseSDKType,
      poolType: {} as QueryPoolTypeResponseSDKType,
      calcJoinPoolNoSwapShares: {} as QueryCalcJoinPoolNoSwapSharesResponseSDKType,
      calcJoinPoolShares: {} as QueryCalcJoinPoolSharesResponseSDKType,
      calcExitPoolCoinsFromShares: {} as QueryCalcExitPoolCoinsFromSharesResponseSDKType,
      poolParams: {} as QueryPoolParamsResponseSDKType,
      totalPoolLiquidity: {} as QueryTotalPoolLiquidityResponseSDKType,
      totalShares: {} as QueryTotalSharesResponseSDKType,
      spotPrice: {} as QuerySpotPriceResponseSDKType,
      estimateSwapExactAmountIn: {} as QuerySwapExactAmountInResponseSDKType,
      estimateSwapExactAmountOut: {} as QuerySwapExactAmountOutResponseSDKType
    };
  },
  getters: {
    lcdClient() {
      const requestClient = useEndpoint().restClient;
      return new LCDQueryClient({
        requestClient
      });
    }
  },
  actions: {
    async fetchPools(param: QueryPoolsRequestSDKType) {
      this.pools = await this.lcdClient.pools(param);
      return this.pools;
    },
    async fetchNumPools(param: QueryNumPoolsRequestSDKType) {
      this.numPools = await this.lcdClient.numPools(param);
      return this.numPools;
    },
    async fetchTotalLiquidity(param: QueryTotalLiquidityRequestSDKType) {
      this.totalLiquidity = await this.lcdClient.totalLiquidity(param);
      return this.totalLiquidity;
    },
    async fetchPoolsWithFilter(param: QueryPoolsWithFilterRequestSDKType) {
      this.poolsWithFilter = await this.lcdClient.poolsWithFilter(param);
      return this.poolsWithFilter;
    },
    async fetchPool(param: QueryPoolRequestSDKType) {
      this.pool = await this.lcdClient.pool(param);
      return this.pool;
    },
    async fetchPoolType(param: QueryPoolTypeRequestSDKType) {
      this.poolType = await this.lcdClient.poolType(param);
      return this.poolType;
    },
    async fetchCalcJoinPoolNoSwapShares(param: QueryCalcJoinPoolNoSwapSharesRequestSDKType) {
      this.calcJoinPoolNoSwapShares = await this.lcdClient.calcJoinPoolNoSwapShares(param);
      return this.calcJoinPoolNoSwapShares;
    },
    async fetchCalcJoinPoolShares(param: QueryCalcJoinPoolSharesRequestSDKType) {
      this.calcJoinPoolShares = await this.lcdClient.calcJoinPoolShares(param);
      return this.calcJoinPoolShares;
    },
    async fetchCalcExitPoolCoinsFromShares(param: QueryCalcExitPoolCoinsFromSharesRequestSDKType) {
      this.calcExitPoolCoinsFromShares = await this.lcdClient.calcExitPoolCoinsFromShares(param);
      return this.calcExitPoolCoinsFromShares;
    },
    async fetchPoolParams(param: QueryPoolParamsRequestSDKType) {
      this.poolParams = await this.lcdClient.poolParams(param);
      return this.poolParams;
    },
    async fetchTotalPoolLiquidity(param: QueryTotalPoolLiquidityRequestSDKType) {
      this.totalPoolLiquidity = await this.lcdClient.totalPoolLiquidity(param);
      return this.totalPoolLiquidity;
    },
    async fetchTotalShares(param: QueryTotalSharesRequestSDKType) {
      this.totalShares = await this.lcdClient.totalShares(param);
      return this.totalShares;
    },
    async fetchSpotPrice(param: QuerySpotPriceRequestSDKType) {
      this.spotPrice = await this.lcdClient.spotPrice(param);
      return this.spotPrice;
    },
    async fetchEstimateSwapExactAmountIn(param: QuerySwapExactAmountInRequestSDKType) {
      this.estimateSwapExactAmountIn = await this.lcdClient.estimateSwapExactAmountIn(param);
      return this.estimateSwapExactAmountIn;
    },
    async fetchEstimateSwapExactAmountOut(param: QuerySwapExactAmountOutRequestSDKType) {
      this.estimateSwapExactAmountOut = await this.lcdClient.estimateSwapExactAmountOut(param);
      return this.estimateSwapExactAmountOut;
    }
  }
});