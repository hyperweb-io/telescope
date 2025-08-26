import { QueryCondition, QueryConditionSDKType } from "../lockup/lock";
import { Coin, CoinSDKType } from "../../cosmos/base/v1beta1/coin";
import { Timestamp, TimestampSDKType } from "../../google/protobuf/timestamp";
import { buildTx } from "../../helper-func-types";
import { MsgCreateGauge, MsgCreateGaugeSDKType, MsgCreateGaugeResponse, MsgCreateGaugeResponseSDKType, MsgAddToGauge, MsgAddToGaugeSDKType, MsgAddToGaugeResponse, MsgAddToGaugeResponseSDKType } from "./tx";
/**
 * @name createGauge
 * @package osmosis.incentives
 * @see proto service: osmosis.incentives.CreateGauge
 */
export const createGauge = buildTx<MsgCreateGauge>({
  msg: MsgCreateGauge
});
/**
 * @name addToGauge
 * @package osmosis.incentives
 * @see proto service: osmosis.incentives.AddToGauge
 */
export const addToGauge = buildTx<MsgAddToGauge>({
  msg: MsgAddToGauge
});