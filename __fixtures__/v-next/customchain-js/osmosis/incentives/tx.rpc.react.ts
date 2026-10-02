import { buildUseMutation } from "../../react-query";
import type { MsgCreateGauge, MsgAddToGauge } from "./tx";
import { createGauge, addToGauge } from "./tx.rpc.func";
/**
 * @name useCreateGauge
 * @package osmosis.incentives
 * @see proto service: osmosis.incentives.CreateGauge
 */
export const useCreateGauge = buildUseMutation<MsgCreateGauge, Error>({
  builderMutationFn: createGauge
});
/**
 * @name useAddToGauge
 * @package osmosis.incentives
 * @see proto service: osmosis.incentives.AddToGauge
 */
export const useAddToGauge = buildUseMutation<MsgAddToGauge, Error>({
  builderMutationFn: addToGauge
});