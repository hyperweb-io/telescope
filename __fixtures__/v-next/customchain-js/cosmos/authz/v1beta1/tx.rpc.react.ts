import { buildUseMutation } from "../../../react-query";
import type { MsgGrant, MsgExec, MsgRevoke } from "./tx";
import { grant, exec, revoke } from "./tx.rpc.func";
/**
 * Grant grants the provided authorization to the grantee on the granter's
 * account with the provided expiration time. If there is already a grant
 * for the given (granter, grantee, Authorization) triple, then the grant
 * will be overwritten.
 * @name useGrant
 * @package cosmos.authz.v1beta1
 * @see proto service: cosmos.authz.v1beta1.Grant
 */
export const useGrant = buildUseMutation<MsgGrant, Error>({
  builderMutationFn: grant
});
/**
 * Exec attempts to execute the provided messages using
 * authorizations granted to the grantee. Each message should have only
 * one signer corresponding to the granter of the authorization.
 * @name useExec
 * @package cosmos.authz.v1beta1
 * @see proto service: cosmos.authz.v1beta1.Exec
 */
export const useExec = buildUseMutation<MsgExec, Error>({
  builderMutationFn: exec
});
/**
 * Revoke revokes any authorization corresponding to the provided method name on the
 * granter's account that has been granted to the grantee.
 * @name useRevoke
 * @package cosmos.authz.v1beta1
 * @see proto service: cosmos.authz.v1beta1.Revoke
 */
export const useRevoke = buildUseMutation<MsgRevoke, Error>({
  builderMutationFn: revoke
});