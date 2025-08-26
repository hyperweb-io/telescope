import { Timestamp, TimestampSDKType } from "../../../google/protobuf/timestamp";
import { Params, ParamsSDKType } from "./genesis";
import { EndpointOrRpc, buildQuery } from "../../../helper-func-types";
import { ParamsRequest, ParamsRequestSDKType, ParamsResponse, ParamsResponseSDKType, ArithmeticTwapRequest, ArithmeticTwapRequestSDKType, ArithmeticTwapResponse, ArithmeticTwapResponseSDKType, ArithmeticTwapToNowRequest, ArithmeticTwapToNowRequestSDKType, ArithmeticTwapToNowResponse, ArithmeticTwapToNowResponseSDKType } from "./query";
/**
 * @name getParams
 * @package osmosis.twap.v1beta1
 * @see proto service: osmosis.twap.v1beta1.Params
 */
export const getParams = buildQuery<ParamsRequest, ParamsResponse>({
  encode: ParamsRequest.encode,
  decode: ParamsResponse.decode,
  service: "osmosis.twap.v1beta1.Query",
  method: "Params",
  deps: [ParamsRequest, ParamsResponse]
});
/**
 * @name getArithmeticTwap
 * @package osmosis.twap.v1beta1
 * @see proto service: osmosis.twap.v1beta1.ArithmeticTwap
 */
export const getArithmeticTwap = buildQuery<ArithmeticTwapRequest, ArithmeticTwapResponse>({
  encode: ArithmeticTwapRequest.encode,
  decode: ArithmeticTwapResponse.decode,
  service: "osmosis.twap.v1beta1.Query",
  method: "ArithmeticTwap",
  deps: [ArithmeticTwapRequest, ArithmeticTwapResponse]
});
/**
 * @name getArithmeticTwapToNow
 * @package osmosis.twap.v1beta1
 * @see proto service: osmosis.twap.v1beta1.ArithmeticTwapToNow
 * @deprecated
 */
export const getArithmeticTwapToNow = buildQuery<ArithmeticTwapToNowRequest, ArithmeticTwapToNowResponse>({
  encode: ArithmeticTwapToNowRequest.encode,
  decode: ArithmeticTwapToNowResponse.decode,
  service: "osmosis.twap.v1beta1.Query",
  method: "ArithmeticTwapToNow",
  deps: [ArithmeticTwapToNowRequest, ArithmeticTwapToNowResponse]
});