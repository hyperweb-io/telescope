import { Coin, CoinSDKType } from "../../cosmos/base/v1beta1/coin";
import { Timestamp, TimestampSDKType } from "../../google/protobuf/timestamp";
import { Duration, DurationSDKType } from "../../google/protobuf/duration";
import { buildTx } from "../../helper-func-types";
import { MsgCreatePosition, MsgCreatePositionSDKType, MsgCreatePositionResponse, MsgCreatePositionResponseSDKType, MsgWithdrawPosition, MsgWithdrawPositionSDKType, MsgWithdrawPositionResponse, MsgWithdrawPositionResponseSDKType, MsgCollectFees, MsgCollectFeesSDKType, MsgCollectFeesResponse, MsgCollectFeesResponseSDKType, MsgCollectIncentives, MsgCollectIncentivesSDKType, MsgCollectIncentivesResponse, MsgCollectIncentivesResponseSDKType, MsgFungifyChargedPositions, MsgFungifyChargedPositionsSDKType, MsgFungifyChargedPositionsResponse, MsgFungifyChargedPositionsResponseSDKType } from "./tx";
/**
 * @name createPosition
 * @package osmosis.concentratedliquidity.v1beta1
 * @see proto service: osmosis.concentratedliquidity.v1beta1.CreatePosition
 */
export const createPosition = buildTx<MsgCreatePosition>({
  msg: MsgCreatePosition
});
/**
 * @name withdrawPosition
 * @package osmosis.concentratedliquidity.v1beta1
 * @see proto service: osmosis.concentratedliquidity.v1beta1.WithdrawPosition
 */
export const withdrawPosition = buildTx<MsgWithdrawPosition>({
  msg: MsgWithdrawPosition
});
/**
 * @name collectFees
 * @package osmosis.concentratedliquidity.v1beta1
 * @see proto service: osmosis.concentratedliquidity.v1beta1.CollectFees
 */
export const collectFees = buildTx<MsgCollectFees>({
  msg: MsgCollectFees
});
/**
 * @name collectIncentives
 * @package osmosis.concentratedliquidity.v1beta1
 * @see proto service: osmosis.concentratedliquidity.v1beta1.CollectIncentives
 */
export const collectIncentives = buildTx<MsgCollectIncentives>({
  msg: MsgCollectIncentives
});
/**
 * @name fungifyChargedPositions
 * @package osmosis.concentratedliquidity.v1beta1
 * @see proto service: osmosis.concentratedliquidity.v1beta1.FungifyChargedPositions
 */
export const fungifyChargedPositions = buildTx<MsgFungifyChargedPositions>({
  msg: MsgFungifyChargedPositions
});