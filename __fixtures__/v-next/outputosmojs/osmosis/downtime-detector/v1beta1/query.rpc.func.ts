import { Downtime, DowntimeSDKType } from "./downtime_duration";
import { Duration, DurationSDKType } from "../../../google/protobuf/duration";
import { EndpointOrRpc, buildQuery } from "../../../helper-func-types";
import { RecoveredSinceDowntimeOfLengthRequest, RecoveredSinceDowntimeOfLengthRequestSDKType, RecoveredSinceDowntimeOfLengthResponse, RecoveredSinceDowntimeOfLengthResponseSDKType } from "./query";
/**
 * @name getRecoveredSinceDowntimeOfLength
 * @package osmosis.downtimedetector.v1beta1
 * @see proto service: osmosis.downtimedetector.v1beta1.RecoveredSinceDowntimeOfLength
 */
export const getRecoveredSinceDowntimeOfLength = buildQuery<RecoveredSinceDowntimeOfLengthRequest, RecoveredSinceDowntimeOfLengthResponse>({
  encode: RecoveredSinceDowntimeOfLengthRequest.encode,
  decode: RecoveredSinceDowntimeOfLengthResponse.decode,
  service: "osmosis.downtimedetector.v1beta1.Query",
  method: "RecoveredSinceDowntimeOfLength"
});