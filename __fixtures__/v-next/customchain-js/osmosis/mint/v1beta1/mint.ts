import { BinaryReader, BinaryWriter } from "../../../binary";
import { Decimal } from "@interchainjs/math";
import { DeepPartial } from "../../../helpers";
/**
 * Minter represents the minting state.
 * @name Minter
 * @package osmosis.mint.v1beta1
 * @see proto type: osmosis.mint.v1beta1.Minter
 */
export interface Minter {
  /**
   * epoch_provisions represent rewards for the current epoch.
   */
  epochProvisions: string;
}
export interface MinterProtoMsg {
  typeUrl: "/osmosis.mint.v1beta1.Minter";
  value: Uint8Array;
}
/**
 * Minter represents the minting state.
 * @name MinterAmino
 * @package osmosis.mint.v1beta1
 * @see proto type: osmosis.mint.v1beta1.Minter
 */
export interface MinterAmino {
  /**
   * epoch_provisions represent rewards for the current epoch.
   */
  epoch_provisions: string;
}
export interface MinterAminoMsg {
  type: "osmosis/mint/minter";
  value: MinterAmino;
}
/**
 * WeightedAddress represents an address with a weight assigned to it.
 * The weight is used to determine the proportion of the total minted
 * tokens to be minted to the address.
 * @name WeightedAddress
 * @package osmosis.mint.v1beta1
 * @see proto type: osmosis.mint.v1beta1.WeightedAddress
 */
export interface WeightedAddress {
  address: string;
  weight: string;
}
export interface WeightedAddressProtoMsg {
  typeUrl: "/osmosis.mint.v1beta1.WeightedAddress";
  value: Uint8Array;
}
/**
 * WeightedAddress represents an address with a weight assigned to it.
 * The weight is used to determine the proportion of the total minted
 * tokens to be minted to the address.
 * @name WeightedAddressAmino
 * @package osmosis.mint.v1beta1
 * @see proto type: osmosis.mint.v1beta1.WeightedAddress
 */
export interface WeightedAddressAmino {
  address: string;
  weight: string;
}
export interface WeightedAddressAminoMsg {
  type: "osmosis/mint/weighted-address";
  value: WeightedAddressAmino;
}
/**
 * DistributionProportions defines the distribution proportions of the minted
 * denom. In other words, defines which stakeholders will receive the minted
 * denoms and how much.
 * @name DistributionProportions
 * @package osmosis.mint.v1beta1
 * @see proto type: osmosis.mint.v1beta1.DistributionProportions
 */
export interface DistributionProportions {
  /**
   * staking defines the proportion of the minted mint_denom that is to be
   * allocated as staking rewards.
   */
  staking: string;
  /**
   * pool_incentives defines the proportion of the minted mint_denom that is
   * to be allocated as pool incentives.
   */
  poolIncentives: string;
  /**
   * developer_rewards defines the proportion of the minted mint_denom that is
   * to be allocated to developer rewards address.
   */
  developerRewards: string;
  /**
   * community_pool defines the proportion of the minted mint_denom that is
   * to be allocated to the community pool.
   */
  communityPool: string;
}
export interface DistributionProportionsProtoMsg {
  typeUrl: "/osmosis.mint.v1beta1.DistributionProportions";
  value: Uint8Array;
}
/**
 * DistributionProportions defines the distribution proportions of the minted
 * denom. In other words, defines which stakeholders will receive the minted
 * denoms and how much.
 * @name DistributionProportionsAmino
 * @package osmosis.mint.v1beta1
 * @see proto type: osmosis.mint.v1beta1.DistributionProportions
 */
export interface DistributionProportionsAmino {
  /**
   * staking defines the proportion of the minted mint_denom that is to be
   * allocated as staking rewards.
   */
  staking: string;
  /**
   * pool_incentives defines the proportion of the minted mint_denom that is
   * to be allocated as pool incentives.
   */
  pool_incentives: string;
  /**
   * developer_rewards defines the proportion of the minted mint_denom that is
   * to be allocated to developer rewards address.
   */
  developer_rewards: string;
  /**
   * community_pool defines the proportion of the minted mint_denom that is
   * to be allocated to the community pool.
   */
  community_pool: string;
}
export interface DistributionProportionsAminoMsg {
  type: "osmosis/mint/distribution-proportions";
  value: DistributionProportionsAmino;
}
/**
 * Params holds parameters for the x/mint module.
 * @name OsmosisMintV1beta1Params
 * @package osmosis.mint.v1beta1
 * @see proto type: osmosis.mint.v1beta1.Params
 */
export interface OsmosisMintV1beta1Params {
  /**
   * mint_denom is the denom of the coin to mint.
   */
  mintDenom: string;
  /**
   * genesis_epoch_provisions epoch provisions from the first epoch.
   */
  genesisEpochProvisions: string;
  /**
   * epoch_identifier mint epoch identifier e.g. (day, week).
   */
  epochIdentifier: string;
  /**
   * reduction_period_in_epochs the number of epochs it takes
   * to reduce the rewards.
   */
  reductionPeriodInEpochs: bigint;
  /**
   * reduction_factor is the reduction multiplier to execute
   * at the end of each period set by reduction_period_in_epochs.
   */
  reductionFactor: string;
  /**
   * distribution_proportions defines the distribution proportions of the minted
   * denom. In other words, defines which stakeholders will receive the minted
   * denoms and how much.
   */
  distributionProportions: DistributionProportions;
  /**
   * weighted_developer_rewards_receivers is the address to receive developer
   * rewards with weights assignedt to each address. The final amount that each
   * address receives is: epoch_provisions *
   * distribution_proportions.developer_rewards * Address's Weight.
   */
  weightedDeveloperRewardsReceivers: WeightedAddress[];
  /**
   * minting_rewards_distribution_start_epoch start epoch to distribute minting
   * rewards
   */
  mintingRewardsDistributionStartEpoch: bigint;
}
export interface OsmosisMintV1beta1ParamsProtoMsg {
  typeUrl: "/osmosis.mint.v1beta1.Params";
  value: Uint8Array;
}
/**
 * Params holds parameters for the x/mint module.
 * @name OsmosisMintV1beta1ParamsAmino
 * @package osmosis.mint.v1beta1
 * @see proto type: osmosis.mint.v1beta1.OsmosisMintV1beta1Params
 */
export interface OsmosisMintV1beta1ParamsAmino {
  /**
   * mint_denom is the denom of the coin to mint.
   */
  mint_denom: string;
  /**
   * genesis_epoch_provisions epoch provisions from the first epoch.
   */
  genesis_epoch_provisions: string;
  /**
   * epoch_identifier mint epoch identifier e.g. (day, week).
   */
  epoch_identifier: string;
  /**
   * reduction_period_in_epochs the number of epochs it takes
   * to reduce the rewards.
   */
  reduction_period_in_epochs: string;
  /**
   * reduction_factor is the reduction multiplier to execute
   * at the end of each period set by reduction_period_in_epochs.
   */
  reduction_factor: string;
  /**
   * distribution_proportions defines the distribution proportions of the minted
   * denom. In other words, defines which stakeholders will receive the minted
   * denoms and how much.
   */
  distribution_proportions: DistributionProportionsAmino;
  /**
   * weighted_developer_rewards_receivers is the address to receive developer
   * rewards with weights assignedt to each address. The final amount that each
   * address receives is: epoch_provisions *
   * distribution_proportions.developer_rewards * Address's Weight.
   */
  weighted_developer_rewards_receivers: WeightedAddressAmino[];
  /**
   * minting_rewards_distribution_start_epoch start epoch to distribute minting
   * rewards
   */
  minting_rewards_distribution_start_epoch: string;
}
export interface OsmosisMintV1beta1ParamsAminoMsg {
  type: "osmosis/mint/params";
  value: OsmosisMintV1beta1ParamsAmino;
}
function createBaseMinter(): Minter {
  return {
    epochProvisions: ""
  };
}
/**
 * Minter represents the minting state.
 * @name Minter
 * @package osmosis.mint.v1beta1
 * @see proto type: osmosis.mint.v1beta1.Minter
 */
export const Minter = {
  typeUrl: "/osmosis.mint.v1beta1.Minter",
  aminoType: "osmosis/mint/minter",
  encode(message: Minter, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.epochProvisions !== "") {
      writer.uint32(10).string(Decimal.fromUserInput(message.epochProvisions, 18).atomics);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Minter {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMinter();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.epochProvisions = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<Minter>): Minter {
    const message = createBaseMinter();
    message.epochProvisions = object.epochProvisions ?? "";
    return message;
  },
  fromAmino(object: MinterAmino): Minter {
    const message = createBaseMinter();
    if (object.epoch_provisions !== undefined && object.epoch_provisions !== null) {
      message.epochProvisions = object.epoch_provisions;
    }
    return message;
  },
  toAmino(message: Minter): MinterAmino {
    const obj: any = {};
    obj.epoch_provisions = message.epochProvisions === "" ? undefined : Decimal.fromUserInput(message.epochProvisions, 18).atomics;
    return obj;
  },
  fromAminoMsg(object: MinterAminoMsg): Minter {
    return Minter.fromAmino(object.value);
  },
  toAminoMsg(message: Minter): MinterAminoMsg {
    return {
      type: "osmosis/mint/minter",
      value: Minter.toAmino(message)
    };
  },
  fromProtoMsg(message: MinterProtoMsg): Minter {
    return Minter.decode(message.value);
  },
  toProto(message: Minter): Uint8Array {
    return Minter.encode(message).finish();
  },
  toProtoMsg(message: Minter): MinterProtoMsg {
    return {
      typeUrl: "/osmosis.mint.v1beta1.Minter",
      value: Minter.encode(message).finish()
    };
  }
};
function createBaseWeightedAddress(): WeightedAddress {
  return {
    address: "",
    weight: ""
  };
}
/**
 * WeightedAddress represents an address with a weight assigned to it.
 * The weight is used to determine the proportion of the total minted
 * tokens to be minted to the address.
 * @name WeightedAddress
 * @package osmosis.mint.v1beta1
 * @see proto type: osmosis.mint.v1beta1.WeightedAddress
 */
export const WeightedAddress = {
  typeUrl: "/osmosis.mint.v1beta1.WeightedAddress",
  aminoType: "osmosis/mint/weighted-address",
  encode(message: WeightedAddress, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.weight !== "") {
      writer.uint32(18).string(Decimal.fromUserInput(message.weight, 18).atomics);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): WeightedAddress {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseWeightedAddress();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.weight = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<WeightedAddress>): WeightedAddress {
    const message = createBaseWeightedAddress();
    message.address = object.address ?? "";
    message.weight = object.weight ?? "";
    return message;
  },
  fromAmino(object: WeightedAddressAmino): WeightedAddress {
    const message = createBaseWeightedAddress();
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    if (object.weight !== undefined && object.weight !== null) {
      message.weight = object.weight;
    }
    return message;
  },
  toAmino(message: WeightedAddress): WeightedAddressAmino {
    const obj: any = {};
    obj.address = message.address === "" ? undefined : message.address;
    obj.weight = message.weight === "" ? undefined : Decimal.fromUserInput(message.weight, 18).atomics;
    return obj;
  },
  fromAminoMsg(object: WeightedAddressAminoMsg): WeightedAddress {
    return WeightedAddress.fromAmino(object.value);
  },
  toAminoMsg(message: WeightedAddress): WeightedAddressAminoMsg {
    return {
      type: "osmosis/mint/weighted-address",
      value: WeightedAddress.toAmino(message)
    };
  },
  fromProtoMsg(message: WeightedAddressProtoMsg): WeightedAddress {
    return WeightedAddress.decode(message.value);
  },
  toProto(message: WeightedAddress): Uint8Array {
    return WeightedAddress.encode(message).finish();
  },
  toProtoMsg(message: WeightedAddress): WeightedAddressProtoMsg {
    return {
      typeUrl: "/osmosis.mint.v1beta1.WeightedAddress",
      value: WeightedAddress.encode(message).finish()
    };
  }
};
function createBaseDistributionProportions(): DistributionProportions {
  return {
    staking: "",
    poolIncentives: "",
    developerRewards: "",
    communityPool: ""
  };
}
/**
 * DistributionProportions defines the distribution proportions of the minted
 * denom. In other words, defines which stakeholders will receive the minted
 * denoms and how much.
 * @name DistributionProportions
 * @package osmosis.mint.v1beta1
 * @see proto type: osmosis.mint.v1beta1.DistributionProportions
 */
export const DistributionProportions = {
  typeUrl: "/osmosis.mint.v1beta1.DistributionProportions",
  aminoType: "osmosis/mint/distribution-proportions",
  encode(message: DistributionProportions, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.staking !== "") {
      writer.uint32(10).string(Decimal.fromUserInput(message.staking, 18).atomics);
    }
    if (message.poolIncentives !== "") {
      writer.uint32(18).string(Decimal.fromUserInput(message.poolIncentives, 18).atomics);
    }
    if (message.developerRewards !== "") {
      writer.uint32(26).string(Decimal.fromUserInput(message.developerRewards, 18).atomics);
    }
    if (message.communityPool !== "") {
      writer.uint32(34).string(Decimal.fromUserInput(message.communityPool, 18).atomics);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): DistributionProportions {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDistributionProportions();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.staking = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 2:
          message.poolIncentives = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 3:
          message.developerRewards = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 4:
          message.communityPool = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<DistributionProportions>): DistributionProportions {
    const message = createBaseDistributionProportions();
    message.staking = object.staking ?? "";
    message.poolIncentives = object.poolIncentives ?? "";
    message.developerRewards = object.developerRewards ?? "";
    message.communityPool = object.communityPool ?? "";
    return message;
  },
  fromAmino(object: DistributionProportionsAmino): DistributionProportions {
    const message = createBaseDistributionProportions();
    if (object.staking !== undefined && object.staking !== null) {
      message.staking = object.staking;
    }
    if (object.pool_incentives !== undefined && object.pool_incentives !== null) {
      message.poolIncentives = object.pool_incentives;
    }
    if (object.developer_rewards !== undefined && object.developer_rewards !== null) {
      message.developerRewards = object.developer_rewards;
    }
    if (object.community_pool !== undefined && object.community_pool !== null) {
      message.communityPool = object.community_pool;
    }
    return message;
  },
  toAmino(message: DistributionProportions): DistributionProportionsAmino {
    const obj: any = {};
    obj.staking = message.staking === "" ? undefined : Decimal.fromUserInput(message.staking, 18).atomics;
    obj.pool_incentives = message.poolIncentives === "" ? undefined : Decimal.fromUserInput(message.poolIncentives, 18).atomics;
    obj.developer_rewards = message.developerRewards === "" ? undefined : Decimal.fromUserInput(message.developerRewards, 18).atomics;
    obj.community_pool = message.communityPool === "" ? undefined : Decimal.fromUserInput(message.communityPool, 18).atomics;
    return obj;
  },
  fromAminoMsg(object: DistributionProportionsAminoMsg): DistributionProportions {
    return DistributionProportions.fromAmino(object.value);
  },
  toAminoMsg(message: DistributionProportions): DistributionProportionsAminoMsg {
    return {
      type: "osmosis/mint/distribution-proportions",
      value: DistributionProportions.toAmino(message)
    };
  },
  fromProtoMsg(message: DistributionProportionsProtoMsg): DistributionProportions {
    return DistributionProportions.decode(message.value);
  },
  toProto(message: DistributionProportions): Uint8Array {
    return DistributionProportions.encode(message).finish();
  },
  toProtoMsg(message: DistributionProportions): DistributionProportionsProtoMsg {
    return {
      typeUrl: "/osmosis.mint.v1beta1.DistributionProportions",
      value: DistributionProportions.encode(message).finish()
    };
  }
};
function createBaseOsmosisMintV1beta1Params(): OsmosisMintV1beta1Params {
  return {
    mintDenom: "",
    genesisEpochProvisions: "",
    epochIdentifier: "",
    reductionPeriodInEpochs: BigInt(0),
    reductionFactor: "",
    distributionProportions: DistributionProportions.fromPartial({}),
    weightedDeveloperRewardsReceivers: [],
    mintingRewardsDistributionStartEpoch: BigInt(0)
  };
}
/**
 * Params holds parameters for the x/mint module.
 * @name OsmosisMintV1beta1Params
 * @package osmosis.mint.v1beta1
 * @see proto type: osmosis.mint.v1beta1.Params
 */
export const OsmosisMintV1beta1Params = {
  typeUrl: "/osmosis.mint.v1beta1.Params",
  aminoType: "osmosis/mint/params",
  encode(message: OsmosisMintV1beta1Params, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.mintDenom !== "") {
      writer.uint32(10).string(message.mintDenom);
    }
    if (message.genesisEpochProvisions !== "") {
      writer.uint32(18).string(Decimal.fromUserInput(message.genesisEpochProvisions, 18).atomics);
    }
    if (message.epochIdentifier !== "") {
      writer.uint32(26).string(message.epochIdentifier);
    }
    if (message.reductionPeriodInEpochs !== BigInt(0)) {
      writer.uint32(32).int64(message.reductionPeriodInEpochs);
    }
    if (message.reductionFactor !== "") {
      writer.uint32(42).string(Decimal.fromUserInput(message.reductionFactor, 18).atomics);
    }
    if (message.distributionProportions !== undefined) {
      DistributionProportions.encode(message.distributionProportions, writer.uint32(50).fork()).ldelim();
    }
    for (const v of message.weightedDeveloperRewardsReceivers) {
      WeightedAddress.encode(v!, writer.uint32(58).fork()).ldelim();
    }
    if (message.mintingRewardsDistributionStartEpoch !== BigInt(0)) {
      writer.uint32(64).int64(message.mintingRewardsDistributionStartEpoch);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): OsmosisMintV1beta1Params {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOsmosisMintV1beta1Params();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.mintDenom = reader.string();
          break;
        case 2:
          message.genesisEpochProvisions = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 3:
          message.epochIdentifier = reader.string();
          break;
        case 4:
          message.reductionPeriodInEpochs = reader.int64();
          break;
        case 5:
          message.reductionFactor = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 6:
          message.distributionProportions = DistributionProportions.decode(reader, reader.uint32());
          break;
        case 7:
          message.weightedDeveloperRewardsReceivers.push(WeightedAddress.decode(reader, reader.uint32()));
          break;
        case 8:
          message.mintingRewardsDistributionStartEpoch = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<OsmosisMintV1beta1Params>): OsmosisMintV1beta1Params {
    const message = createBaseOsmosisMintV1beta1Params();
    message.mintDenom = object.mintDenom ?? "";
    message.genesisEpochProvisions = object.genesisEpochProvisions ?? "";
    message.epochIdentifier = object.epochIdentifier ?? "";
    message.reductionPeriodInEpochs = object.reductionPeriodInEpochs !== undefined && object.reductionPeriodInEpochs !== null ? BigInt(object.reductionPeriodInEpochs.toString()) : BigInt(0);
    message.reductionFactor = object.reductionFactor ?? "";
    message.distributionProportions = object.distributionProportions !== undefined && object.distributionProportions !== null ? DistributionProportions.fromPartial(object.distributionProportions) : undefined;
    message.weightedDeveloperRewardsReceivers = object.weightedDeveloperRewardsReceivers?.map(e => WeightedAddress.fromPartial(e)) || [];
    message.mintingRewardsDistributionStartEpoch = object.mintingRewardsDistributionStartEpoch !== undefined && object.mintingRewardsDistributionStartEpoch !== null ? BigInt(object.mintingRewardsDistributionStartEpoch.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: OsmosisMintV1beta1ParamsAmino): OsmosisMintV1beta1Params {
    const message = createBaseOsmosisMintV1beta1Params();
    if (object.mint_denom !== undefined && object.mint_denom !== null) {
      message.mintDenom = object.mint_denom;
    }
    if (object.genesis_epoch_provisions !== undefined && object.genesis_epoch_provisions !== null) {
      message.genesisEpochProvisions = object.genesis_epoch_provisions;
    }
    if (object.epoch_identifier !== undefined && object.epoch_identifier !== null) {
      message.epochIdentifier = object.epoch_identifier;
    }
    if (object.reduction_period_in_epochs !== undefined && object.reduction_period_in_epochs !== null) {
      message.reductionPeriodInEpochs = BigInt(object.reduction_period_in_epochs);
    }
    if (object.reduction_factor !== undefined && object.reduction_factor !== null) {
      message.reductionFactor = object.reduction_factor;
    }
    if (object.distribution_proportions !== undefined && object.distribution_proportions !== null) {
      message.distributionProportions = DistributionProportions.fromAmino(object.distribution_proportions);
    }
    message.weightedDeveloperRewardsReceivers = object.weighted_developer_rewards_receivers?.map(e => WeightedAddress.fromAmino(e)) || [];
    if (object.minting_rewards_distribution_start_epoch !== undefined && object.minting_rewards_distribution_start_epoch !== null) {
      message.mintingRewardsDistributionStartEpoch = BigInt(object.minting_rewards_distribution_start_epoch);
    }
    return message;
  },
  toAmino(message: OsmosisMintV1beta1Params): OsmosisMintV1beta1ParamsAmino {
    const obj: any = {};
    obj.mint_denom = message.mintDenom === "" ? undefined : message.mintDenom;
    obj.genesis_epoch_provisions = message.genesisEpochProvisions === "" ? undefined : Decimal.fromUserInput(message.genesisEpochProvisions, 18).atomics;
    obj.epoch_identifier = message.epochIdentifier === "" ? undefined : message.epochIdentifier;
    obj.reduction_period_in_epochs = message.reductionPeriodInEpochs !== BigInt(0) ? message.reductionPeriodInEpochs?.toString() : undefined;
    obj.reduction_factor = message.reductionFactor === "" ? undefined : Decimal.fromUserInput(message.reductionFactor, 18).atomics;
    obj.distribution_proportions = message.distributionProportions ? DistributionProportions.toAmino(message.distributionProportions) : undefined;
    if (message.weightedDeveloperRewardsReceivers) {
      obj.weighted_developer_rewards_receivers = message.weightedDeveloperRewardsReceivers.map(e => e ? WeightedAddress.toAmino(e) : undefined);
    } else {
      obj.weighted_developer_rewards_receivers = message.weightedDeveloperRewardsReceivers;
    }
    obj.minting_rewards_distribution_start_epoch = message.mintingRewardsDistributionStartEpoch !== BigInt(0) ? message.mintingRewardsDistributionStartEpoch?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: OsmosisMintV1beta1ParamsAminoMsg): OsmosisMintV1beta1Params {
    return OsmosisMintV1beta1Params.fromAmino(object.value);
  },
  toAminoMsg(message: OsmosisMintV1beta1Params): OsmosisMintV1beta1ParamsAminoMsg {
    return {
      type: "osmosis/mint/params",
      value: OsmosisMintV1beta1Params.toAmino(message)
    };
  },
  fromProtoMsg(message: OsmosisMintV1beta1ParamsProtoMsg): OsmosisMintV1beta1Params {
    return OsmosisMintV1beta1Params.decode(message.value);
  },
  toProto(message: OsmosisMintV1beta1Params): Uint8Array {
    return OsmosisMintV1beta1Params.encode(message).finish();
  },
  toProtoMsg(message: OsmosisMintV1beta1Params): OsmosisMintV1beta1ParamsProtoMsg {
    return {
      typeUrl: "/osmosis.mint.v1beta1.Params",
      value: OsmosisMintV1beta1Params.encode(message).finish()
    };
  }
};