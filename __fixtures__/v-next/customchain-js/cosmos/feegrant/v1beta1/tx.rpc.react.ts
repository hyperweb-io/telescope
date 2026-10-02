import { buildUseMutation } from "../../../react-query";
import type { MsgGrantAllowance, MsgRevokeAllowance } from "./tx";
import { grantAllowance, revokeAllowance } from "./tx.rpc.func";
/**
 * GrantAllowance grants fee allowance to the grantee on the granter's
 * account with the provided expiration time.
 * @name useGrantAllowance
 * @package cosmos.feegrant.v1beta1
 * @see proto service: cosmos.feegrant.v1beta1.GrantAllowance
 */
export const useGrantAllowance = buildUseMutation<MsgGrantAllowance, Error>({
  builderMutationFn: grantAllowance
});
/**
 * RevokeAllowance revokes any fee allowance of granter's account that
 * has been granted to the grantee.
 * @name useRevokeAllowance
 * @package cosmos.feegrant.v1beta1
 * @see proto service: cosmos.feegrant.v1beta1.RevokeAllowance
 */
export const useRevokeAllowance = buildUseMutation<MsgRevokeAllowance, Error>({
  builderMutationFn: revokeAllowance
});