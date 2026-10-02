import { buildUseQuery } from "../../../react-query";
import type { ParamsRequest, ParamsResponse, ArithmeticTwapRequest, ArithmeticTwapResponse, ArithmeticTwapToNowRequest, ArithmeticTwapToNowResponse } from "./query";
import { getOsmosisTwapV1beta1Params, getArithmeticTwap, getArithmeticTwapToNow } from "./query.rpc.func";
/**
 * @name useGetOsmosisTwapV1beta1Params
 * @package osmosis.twap.v1beta1
 * @see proto service: osmosis.twap.v1beta1.Params
 */
export const useGetOsmosisTwapV1beta1Params = buildUseQuery<ParamsRequest, ParamsResponse>({
  builderQueryFn: getOsmosisTwapV1beta1Params,
  queryKeyPrefix: "ParamsQuery"
});
/**
 * @name useGetArithmeticTwap
 * @package osmosis.twap.v1beta1
 * @see proto service: osmosis.twap.v1beta1.ArithmeticTwap
 */
export const useGetArithmeticTwap = buildUseQuery<ArithmeticTwapRequest, ArithmeticTwapResponse>({
  builderQueryFn: getArithmeticTwap,
  queryKeyPrefix: "ArithmeticTwapQuery"
});
/**
 * @name useGetArithmeticTwapToNow
 * @package osmosis.twap.v1beta1
 * @see proto service: osmosis.twap.v1beta1.ArithmeticTwapToNow
 * @deprecated
 */
export const useGetArithmeticTwapToNow = buildUseQuery<ArithmeticTwapToNowRequest, ArithmeticTwapToNowResponse>({
  builderQueryFn: getArithmeticTwapToNow,
  queryKeyPrefix: "ArithmeticTwapToNowQuery"
});