import { ValidatorPreference, ValidatorPreferenceSDKType } from "./state";
import { EndpointOrRpc, buildQuery } from "../../../helper-func-types";
import { UserValidatorPreferencesRequest, UserValidatorPreferencesRequestSDKType, UserValidatorPreferencesResponse, UserValidatorPreferencesResponseSDKType } from "./query";
/**
 * Returns the list of ValidatorPreferences for the user.
 * @name getUserValidatorPreferences
 * @package osmosis.valsetpref.v1beta1
 * @see proto service: osmosis.valsetpref.v1beta1.UserValidatorPreferences
 */
export const getUserValidatorPreferences = buildQuery<UserValidatorPreferencesRequest, UserValidatorPreferencesResponse>({
  encode: UserValidatorPreferencesRequest.encode,
  decode: UserValidatorPreferencesResponse.decode,
  service: "osmosis.valsetpref.v1beta1.Query",
  method: "UserValidatorPreferences"
});