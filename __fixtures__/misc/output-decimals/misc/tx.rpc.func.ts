import { EncodingTestForDontOmit, EncodingTestForDontOmitSDKType, EncodingTestForOmit, EncodingTestForOmitSDKType } from "./all_fields";
import { buildTx } from "../helper-func-types";
import { InputMsg, InputMsgSDKType, MsgResponse, MsgResponseSDKType } from "./tx";
/**
 * test tx
 * @name sendMsg
 * @package misc
 * @see proto service: misc.SendMsg
 */
export const sendMsg = buildTx<InputMsg>({
  msg: InputMsg
});