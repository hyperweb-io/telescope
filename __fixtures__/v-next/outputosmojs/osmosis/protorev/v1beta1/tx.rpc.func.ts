import { TokenPairArbRoutes, TokenPairArbRoutesSDKType, PoolWeights, PoolWeightsSDKType, BaseDenom, BaseDenomSDKType } from "./protorev";
import { buildTx } from "../../../helper-func-types";
import { MsgSetHotRoutes, MsgSetHotRoutesSDKType, MsgSetHotRoutesResponse, MsgSetHotRoutesResponseSDKType, MsgSetDeveloperAccount, MsgSetDeveloperAccountSDKType, MsgSetDeveloperAccountResponse, MsgSetDeveloperAccountResponseSDKType, MsgSetMaxPoolPointsPerTx, MsgSetMaxPoolPointsPerTxSDKType, MsgSetMaxPoolPointsPerTxResponse, MsgSetMaxPoolPointsPerTxResponseSDKType, MsgSetMaxPoolPointsPerBlock, MsgSetMaxPoolPointsPerBlockSDKType, MsgSetMaxPoolPointsPerBlockResponse, MsgSetMaxPoolPointsPerBlockResponseSDKType, MsgSetPoolWeights, MsgSetPoolWeightsSDKType, MsgSetPoolWeightsResponse, MsgSetPoolWeightsResponseSDKType, MsgSetBaseDenoms, MsgSetBaseDenomsSDKType, MsgSetBaseDenomsResponse, MsgSetBaseDenomsResponseSDKType } from "./tx";
/**
 * SetHotRoutes sets the hot routes that will be explored when creating
 * cyclic arbitrage routes. Can only be called by the admin account.
 * @name setHotRoutes
 * @package osmosis.protorev.v1beta1
 * @see proto service: osmosis.protorev.v1beta1.SetHotRoutes
 */
export const setHotRoutes = buildTx<MsgSetHotRoutes>({
  msg: MsgSetHotRoutes
});
/**
 * SetDeveloperAccount sets the account that can withdraw a portion of the
 * profits from the protorev module. This will be Skip's address.
 * @name setDeveloperAccount
 * @package osmosis.protorev.v1beta1
 * @see proto service: osmosis.protorev.v1beta1.SetDeveloperAccount
 */
export const setDeveloperAccount = buildTx<MsgSetDeveloperAccount>({
  msg: MsgSetDeveloperAccount
});
/**
 * SetMaxPoolPointsPerTx sets the maximum number of pool points that can be
 * consumed per transaction. Can only be called by the admin account.
 * @name setMaxPoolPointsPerTx
 * @package osmosis.protorev.v1beta1
 * @see proto service: osmosis.protorev.v1beta1.SetMaxPoolPointsPerTx
 */
export const setMaxPoolPointsPerTx = buildTx<MsgSetMaxPoolPointsPerTx>({
  msg: MsgSetMaxPoolPointsPerTx
});
/**
 * SetMaxPoolPointsPerBlock sets the maximum number of pool points that can be
 * consumed per block. Can only be called by the admin account.
 * @name setMaxPoolPointsPerBlock
 * @package osmosis.protorev.v1beta1
 * @see proto service: osmosis.protorev.v1beta1.SetMaxPoolPointsPerBlock
 */
export const setMaxPoolPointsPerBlock = buildTx<MsgSetMaxPoolPointsPerBlock>({
  msg: MsgSetMaxPoolPointsPerBlock
});
/**
 * SetPoolWeights sets the weights of each pool type in the store. Can only be
 * called by the admin account.
 * @name setPoolWeights
 * @package osmosis.protorev.v1beta1
 * @see proto service: osmosis.protorev.v1beta1.SetPoolWeights
 */
export const setPoolWeights = buildTx<MsgSetPoolWeights>({
  msg: MsgSetPoolWeights
});
/**
 * SetBaseDenoms sets the base denoms that will be used to create cyclic
 * arbitrage routes. Can only be called by the admin account.
 * @name setBaseDenoms
 * @package osmosis.protorev.v1beta1
 * @see proto service: osmosis.protorev.v1beta1.SetBaseDenoms
 */
export const setBaseDenoms = buildTx<MsgSetBaseDenoms>({
  msg: MsgSetBaseDenoms
});