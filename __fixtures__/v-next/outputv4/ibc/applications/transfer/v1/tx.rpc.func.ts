import { Coin, CoinSDKType } from "../../../../cosmos/base/v1beta1/coin.js";
import { Height, HeightSDKType } from "../../../core/client/v1/client.js";
import { buildTx } from "../../../../helper-func-types.js";
import { MsgTransfer, MsgTransferSDKType, MsgTransferResponse, MsgTransferResponseSDKType } from "./tx.js";
/**
 * Transfer defines a rpc handler method for MsgTransfer.
 * @name transfer
 * @package ibc.applications.transfer.v1
 * @see proto service: ibc.applications.transfer.v1.Transfer
 */
export const transfer = buildTx<MsgTransfer>({
  msg: MsgTransfer
});