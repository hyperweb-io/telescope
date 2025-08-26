import { BaseAccount, BaseAccountAmino, BaseAccountSDKType } from "../../auth/v1beta1/auth";
import { Coin, CoinAmino, CoinSDKType } from "../../base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { GlobalDecoderRegistry } from "../../../registry";
import { isSet, DeepPartial } from "../../../helpers";
export const protobufPackage = "cosmos.vesting.v1beta1";
/**
 * BaseVestingAccount implements the VestingAccount interface. It contains all
 * the necessary fields needed for any vesting account implementation.
 * @name BaseVestingAccount
 * @package cosmos.vesting.v1beta1
 * @see proto type: cosmos.vesting.v1beta1.BaseVestingAccount
 */
export interface BaseVestingAccount {
  baseAccount?: BaseAccount;
  originalVesting: Coin[];
  delegatedFree: Coin[];
  delegatedVesting: Coin[];
  endTime: bigint;
}
export interface BaseVestingAccountProtoMsg {
  typeUrl: "/cosmos.vesting.v1beta1.BaseVestingAccount";
  value: Uint8Array;
}
/**
 * BaseVestingAccount implements the VestingAccount interface. It contains all
 * the necessary fields needed for any vesting account implementation.
 * @name BaseVestingAccountAmino
 * @package cosmos.vesting.v1beta1
 * @see proto type: cosmos.vesting.v1beta1.BaseVestingAccount
 */
export interface BaseVestingAccountAmino {
  base_account?: BaseAccountAmino;
  original_vesting?: CoinAmino[];
  delegated_free?: CoinAmino[];
  delegated_vesting?: CoinAmino[];
  end_time?: string;
}
/**
 * BaseVestingAccount implements the VestingAccount interface. It contains all
 * the necessary fields needed for any vesting account implementation.
 * @name BaseVestingAccountSDKType
 * @package cosmos.vesting.v1beta1
 * @see proto type: cosmos.vesting.v1beta1.BaseVestingAccount
 */
export interface BaseVestingAccountSDKType {
  base_account?: BaseAccountSDKType;
  original_vesting: CoinSDKType[];
  delegated_free: CoinSDKType[];
  delegated_vesting: CoinSDKType[];
  end_time: bigint;
}
/**
 * ContinuousVestingAccount implements the VestingAccount interface. It
 * continuously vests by unlocking coins linearly with respect to time.
 * @name ContinuousVestingAccount
 * @package cosmos.vesting.v1beta1
 * @see proto type: cosmos.vesting.v1beta1.ContinuousVestingAccount
 */
export interface ContinuousVestingAccount {
  baseVestingAccount?: BaseVestingAccount;
  startTime: bigint;
}
export interface ContinuousVestingAccountProtoMsg {
  typeUrl: "/cosmos.vesting.v1beta1.ContinuousVestingAccount";
  value: Uint8Array;
}
/**
 * ContinuousVestingAccount implements the VestingAccount interface. It
 * continuously vests by unlocking coins linearly with respect to time.
 * @name ContinuousVestingAccountAmino
 * @package cosmos.vesting.v1beta1
 * @see proto type: cosmos.vesting.v1beta1.ContinuousVestingAccount
 */
export interface ContinuousVestingAccountAmino {
  base_vesting_account?: BaseVestingAccountAmino;
  start_time?: string;
}
/**
 * ContinuousVestingAccount implements the VestingAccount interface. It
 * continuously vests by unlocking coins linearly with respect to time.
 * @name ContinuousVestingAccountSDKType
 * @package cosmos.vesting.v1beta1
 * @see proto type: cosmos.vesting.v1beta1.ContinuousVestingAccount
 */
export interface ContinuousVestingAccountSDKType {
  base_vesting_account?: BaseVestingAccountSDKType;
  start_time: bigint;
}
/**
 * DelayedVestingAccount implements the VestingAccount interface. It vests all
 * coins after a specific time, but non prior. In other words, it keeps them
 * locked until a specified time.
 * @name DelayedVestingAccount
 * @package cosmos.vesting.v1beta1
 * @see proto type: cosmos.vesting.v1beta1.DelayedVestingAccount
 */
export interface DelayedVestingAccount {
  baseVestingAccount?: BaseVestingAccount;
}
export interface DelayedVestingAccountProtoMsg {
  typeUrl: "/cosmos.vesting.v1beta1.DelayedVestingAccount";
  value: Uint8Array;
}
/**
 * DelayedVestingAccount implements the VestingAccount interface. It vests all
 * coins after a specific time, but non prior. In other words, it keeps them
 * locked until a specified time.
 * @name DelayedVestingAccountAmino
 * @package cosmos.vesting.v1beta1
 * @see proto type: cosmos.vesting.v1beta1.DelayedVestingAccount
 */
export interface DelayedVestingAccountAmino {
  base_vesting_account?: BaseVestingAccountAmino;
}
/**
 * DelayedVestingAccount implements the VestingAccount interface. It vests all
 * coins after a specific time, but non prior. In other words, it keeps them
 * locked until a specified time.
 * @name DelayedVestingAccountSDKType
 * @package cosmos.vesting.v1beta1
 * @see proto type: cosmos.vesting.v1beta1.DelayedVestingAccount
 */
export interface DelayedVestingAccountSDKType {
  base_vesting_account?: BaseVestingAccountSDKType;
}
/**
 * Period defines a length of time and amount of coins that will vest.
 * @name Period
 * @package cosmos.vesting.v1beta1
 * @see proto type: cosmos.vesting.v1beta1.Period
 */
export interface Period {
  length: bigint;
  amount: Coin[];
}
export interface PeriodProtoMsg {
  typeUrl: "/cosmos.vesting.v1beta1.Period";
  value: Uint8Array;
}
/**
 * Period defines a length of time and amount of coins that will vest.
 * @name PeriodAmino
 * @package cosmos.vesting.v1beta1
 * @see proto type: cosmos.vesting.v1beta1.Period
 */
export interface PeriodAmino {
  length?: string;
  amount?: CoinAmino[];
}
/**
 * Period defines a length of time and amount of coins that will vest.
 * @name PeriodSDKType
 * @package cosmos.vesting.v1beta1
 * @see proto type: cosmos.vesting.v1beta1.Period
 */
export interface PeriodSDKType {
  length: bigint;
  amount: CoinSDKType[];
}
/**
 * PeriodicVestingAccount implements the VestingAccount interface. It
 * periodically vests by unlocking coins during each specified period.
 * @name PeriodicVestingAccount
 * @package cosmos.vesting.v1beta1
 * @see proto type: cosmos.vesting.v1beta1.PeriodicVestingAccount
 */
export interface PeriodicVestingAccount {
  baseVestingAccount?: BaseVestingAccount;
  startTime: bigint;
  vestingPeriods: Period[];
}
export interface PeriodicVestingAccountProtoMsg {
  typeUrl: "/cosmos.vesting.v1beta1.PeriodicVestingAccount";
  value: Uint8Array;
}
/**
 * PeriodicVestingAccount implements the VestingAccount interface. It
 * periodically vests by unlocking coins during each specified period.
 * @name PeriodicVestingAccountAmino
 * @package cosmos.vesting.v1beta1
 * @see proto type: cosmos.vesting.v1beta1.PeriodicVestingAccount
 */
export interface PeriodicVestingAccountAmino {
  base_vesting_account?: BaseVestingAccountAmino;
  start_time?: string;
  vesting_periods?: PeriodAmino[];
}
/**
 * PeriodicVestingAccount implements the VestingAccount interface. It
 * periodically vests by unlocking coins during each specified period.
 * @name PeriodicVestingAccountSDKType
 * @package cosmos.vesting.v1beta1
 * @see proto type: cosmos.vesting.v1beta1.PeriodicVestingAccount
 */
export interface PeriodicVestingAccountSDKType {
  base_vesting_account?: BaseVestingAccountSDKType;
  start_time: bigint;
  vesting_periods: PeriodSDKType[];
}
/**
 * PermanentLockedAccount implements the VestingAccount interface. It does
 * not ever release coins, locking them indefinitely. Coins in this account can
 * still be used for delegating and for governance votes even while locked.
 * 
 * Since: cosmos-sdk 0.43
 * @name PermanentLockedAccount
 * @package cosmos.vesting.v1beta1
 * @see proto type: cosmos.vesting.v1beta1.PermanentLockedAccount
 */
export interface PermanentLockedAccount {
  baseVestingAccount?: BaseVestingAccount;
}
export interface PermanentLockedAccountProtoMsg {
  typeUrl: "/cosmos.vesting.v1beta1.PermanentLockedAccount";
  value: Uint8Array;
}
/**
 * PermanentLockedAccount implements the VestingAccount interface. It does
 * not ever release coins, locking them indefinitely. Coins in this account can
 * still be used for delegating and for governance votes even while locked.
 * 
 * Since: cosmos-sdk 0.43
 * @name PermanentLockedAccountAmino
 * @package cosmos.vesting.v1beta1
 * @see proto type: cosmos.vesting.v1beta1.PermanentLockedAccount
 */
export interface PermanentLockedAccountAmino {
  base_vesting_account?: BaseVestingAccountAmino;
}
/**
 * PermanentLockedAccount implements the VestingAccount interface. It does
 * not ever release coins, locking them indefinitely. Coins in this account can
 * still be used for delegating and for governance votes even while locked.
 * 
 * Since: cosmos-sdk 0.43
 * @name PermanentLockedAccountSDKType
 * @package cosmos.vesting.v1beta1
 * @see proto type: cosmos.vesting.v1beta1.PermanentLockedAccount
 */
export interface PermanentLockedAccountSDKType {
  base_vesting_account?: BaseVestingAccountSDKType;
}
function createBaseBaseVestingAccount(): BaseVestingAccount {
  return {
    baseAccount: undefined,
    originalVesting: [],
    delegatedFree: [],
    delegatedVesting: [],
    endTime: BigInt(0)
  };
}
/**
 * BaseVestingAccount implements the VestingAccount interface. It contains all
 * the necessary fields needed for any vesting account implementation.
 * @name BaseVestingAccount
 * @package cosmos.vesting.v1beta1
 * @see proto type: cosmos.vesting.v1beta1.BaseVestingAccount
 */
export const BaseVestingAccount = {
  typeUrl: "/cosmos.vesting.v1beta1.BaseVestingAccount",
  aminoType: "cosmos-sdk/BaseVestingAccount",
  is(o: any): o is BaseVestingAccount {
    return o && (o.$typeUrl === BaseVestingAccount.typeUrl || Array.isArray(o.originalVesting) && (!o.originalVesting.length || Coin.is(o.originalVesting[0])) && Array.isArray(o.delegatedFree) && (!o.delegatedFree.length || Coin.is(o.delegatedFree[0])) && Array.isArray(o.delegatedVesting) && (!o.delegatedVesting.length || Coin.is(o.delegatedVesting[0])) && typeof o.endTime === "bigint");
  },
  isSDK(o: any): o is BaseVestingAccountSDKType {
    return o && (o.$typeUrl === BaseVestingAccount.typeUrl || Array.isArray(o.original_vesting) && (!o.original_vesting.length || Coin.isSDK(o.original_vesting[0])) && Array.isArray(o.delegated_free) && (!o.delegated_free.length || Coin.isSDK(o.delegated_free[0])) && Array.isArray(o.delegated_vesting) && (!o.delegated_vesting.length || Coin.isSDK(o.delegated_vesting[0])) && typeof o.end_time === "bigint");
  },
  isAmino(o: any): o is BaseVestingAccountAmino {
    return o && (o.$typeUrl === BaseVestingAccount.typeUrl || Array.isArray(o.original_vesting) && (!o.original_vesting.length || Coin.isAmino(o.original_vesting[0])) && Array.isArray(o.delegated_free) && (!o.delegated_free.length || Coin.isAmino(o.delegated_free[0])) && Array.isArray(o.delegated_vesting) && (!o.delegated_vesting.length || Coin.isAmino(o.delegated_vesting[0])) && typeof o.end_time === "bigint");
  },
  encode(message: BaseVestingAccount, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.baseAccount !== undefined) {
      BaseAccount.encode(message.baseAccount, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.originalVesting) {
      Coin.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.delegatedFree) {
      Coin.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.delegatedVesting) {
      Coin.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    if (message.endTime !== BigInt(0)) {
      writer.uint32(40).int64(message.endTime);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): BaseVestingAccount {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBaseVestingAccount();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.baseAccount = BaseAccount.decode(reader, reader.uint32(), useInterfaces);
          break;
        case 2:
          message.originalVesting.push(Coin.decode(reader, reader.uint32(), useInterfaces));
          break;
        case 3:
          message.delegatedFree.push(Coin.decode(reader, reader.uint32(), useInterfaces));
          break;
        case 4:
          message.delegatedVesting.push(Coin.decode(reader, reader.uint32(), useInterfaces));
          break;
        case 5:
          message.endTime = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): BaseVestingAccount {
    const obj = createBaseBaseVestingAccount();
    if (isSet(object.baseAccount)) obj.baseAccount = BaseAccount.fromJSON(object.baseAccount);
    if (Array.isArray(object?.originalVesting)) obj.originalVesting = object.originalVesting.map((e: any) => Coin.fromJSON(e));
    if (Array.isArray(object?.delegatedFree)) obj.delegatedFree = object.delegatedFree.map((e: any) => Coin.fromJSON(e));
    if (Array.isArray(object?.delegatedVesting)) obj.delegatedVesting = object.delegatedVesting.map((e: any) => Coin.fromJSON(e));
    if (isSet(object.endTime)) obj.endTime = BigInt(object.endTime.toString());
    return obj;
  },
  fromPartial(object: DeepPartial<BaseVestingAccount>): BaseVestingAccount {
    const message = createBaseBaseVestingAccount();
    if (object.baseAccount !== undefined && object.baseAccount !== null) {
      message.baseAccount = BaseAccount.fromPartial(object.baseAccount);
    }
    message.originalVesting = object.originalVesting?.map(e => Coin.fromPartial(e)) || [];
    message.delegatedFree = object.delegatedFree?.map(e => Coin.fromPartial(e)) || [];
    message.delegatedVesting = object.delegatedVesting?.map(e => Coin.fromPartial(e)) || [];
    if (object.endTime !== undefined && object.endTime !== null) {
      message.endTime = BigInt(object.endTime.toString());
    }
    return message;
  },
  fromSDK(object: BaseVestingAccountSDKType): BaseVestingAccount {
    return {
      baseAccount: object.base_account ? BaseAccount.fromSDK(object.base_account) : undefined,
      originalVesting: Array.isArray(object?.original_vesting) ? object.original_vesting.map((e: any) => Coin.fromSDK(e)) : [],
      delegatedFree: Array.isArray(object?.delegated_free) ? object.delegated_free.map((e: any) => Coin.fromSDK(e)) : [],
      delegatedVesting: Array.isArray(object?.delegated_vesting) ? object.delegated_vesting.map((e: any) => Coin.fromSDK(e)) : [],
      endTime: object?.end_time
    };
  },
  toSDK(message: BaseVestingAccount): BaseVestingAccountSDKType {
    const obj: any = {};
    message.baseAccount !== undefined && (obj.base_account = message.baseAccount ? BaseAccount.toSDK(message.baseAccount) : undefined);
    if (message.originalVesting) {
      obj.original_vesting = message.originalVesting.map(e => e ? Coin.toSDK(e) : undefined);
    } else {
      obj.original_vesting = [];
    }
    if (message.delegatedFree) {
      obj.delegated_free = message.delegatedFree.map(e => e ? Coin.toSDK(e) : undefined);
    } else {
      obj.delegated_free = [];
    }
    if (message.delegatedVesting) {
      obj.delegated_vesting = message.delegatedVesting.map(e => e ? Coin.toSDK(e) : undefined);
    } else {
      obj.delegated_vesting = [];
    }
    obj.end_time = message.endTime;
    return obj;
  },
  fromAmino(object: BaseVestingAccountAmino): BaseVestingAccount {
    const message = createBaseBaseVestingAccount();
    if (object.base_account !== undefined && object.base_account !== null) {
      message.baseAccount = BaseAccount.fromAmino(object.base_account);
    }
    message.originalVesting = object.original_vesting?.map(e => Coin.fromAmino(e)) || [];
    message.delegatedFree = object.delegated_free?.map(e => Coin.fromAmino(e)) || [];
    message.delegatedVesting = object.delegated_vesting?.map(e => Coin.fromAmino(e)) || [];
    if (object.end_time !== undefined && object.end_time !== null) {
      message.endTime = BigInt(object.end_time);
    }
    return message;
  },
  toAmino(message: BaseVestingAccount, useInterfaces: boolean = true): BaseVestingAccountAmino {
    const obj: any = {};
    obj.base_account = message.baseAccount ? BaseAccount.toAmino(message.baseAccount, useInterfaces) : undefined;
    if (message.originalVesting) {
      obj.original_vesting = message.originalVesting.map(e => e ? Coin.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.original_vesting = message.originalVesting;
    }
    if (message.delegatedFree) {
      obj.delegated_free = message.delegatedFree.map(e => e ? Coin.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.delegated_free = message.delegatedFree;
    }
    if (message.delegatedVesting) {
      obj.delegated_vesting = message.delegatedVesting.map(e => e ? Coin.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.delegated_vesting = message.delegatedVesting;
    }
    obj.end_time = message.endTime !== BigInt(0) ? message.endTime?.toString() : undefined;
    return obj;
  },
  fromProtoMsg(message: BaseVestingAccountProtoMsg, useInterfaces: boolean = true): BaseVestingAccount {
    return BaseVestingAccount.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: BaseVestingAccount): Uint8Array {
    return BaseVestingAccount.encode(message).finish();
  },
  toProtoMsg(message: BaseVestingAccount): BaseVestingAccountProtoMsg {
    return {
      typeUrl: "/cosmos.vesting.v1beta1.BaseVestingAccount",
      value: BaseVestingAccount.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(BaseVestingAccount.typeUrl)) {
      return;
    }
    BaseAccount.registerTypeUrl();
    Coin.registerTypeUrl();
  }
};
function createBaseContinuousVestingAccount(): ContinuousVestingAccount {
  return {
    baseVestingAccount: undefined,
    startTime: BigInt(0)
  };
}
/**
 * ContinuousVestingAccount implements the VestingAccount interface. It
 * continuously vests by unlocking coins linearly with respect to time.
 * @name ContinuousVestingAccount
 * @package cosmos.vesting.v1beta1
 * @see proto type: cosmos.vesting.v1beta1.ContinuousVestingAccount
 */
export const ContinuousVestingAccount = {
  typeUrl: "/cosmos.vesting.v1beta1.ContinuousVestingAccount",
  aminoType: "cosmos-sdk/ContinuousVestingAccount",
  is(o: any): o is ContinuousVestingAccount {
    return o && (o.$typeUrl === ContinuousVestingAccount.typeUrl || typeof o.startTime === "bigint");
  },
  isSDK(o: any): o is ContinuousVestingAccountSDKType {
    return o && (o.$typeUrl === ContinuousVestingAccount.typeUrl || typeof o.start_time === "bigint");
  },
  isAmino(o: any): o is ContinuousVestingAccountAmino {
    return o && (o.$typeUrl === ContinuousVestingAccount.typeUrl || typeof o.start_time === "bigint");
  },
  encode(message: ContinuousVestingAccount, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.baseVestingAccount !== undefined) {
      BaseVestingAccount.encode(message.baseVestingAccount, writer.uint32(10).fork()).ldelim();
    }
    if (message.startTime !== BigInt(0)) {
      writer.uint32(16).int64(message.startTime);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): ContinuousVestingAccount {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseContinuousVestingAccount();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.baseVestingAccount = BaseVestingAccount.decode(reader, reader.uint32(), useInterfaces);
          break;
        case 2:
          message.startTime = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ContinuousVestingAccount {
    const obj = createBaseContinuousVestingAccount();
    if (isSet(object.baseVestingAccount)) obj.baseVestingAccount = BaseVestingAccount.fromJSON(object.baseVestingAccount);
    if (isSet(object.startTime)) obj.startTime = BigInt(object.startTime.toString());
    return obj;
  },
  fromPartial(object: DeepPartial<ContinuousVestingAccount>): ContinuousVestingAccount {
    const message = createBaseContinuousVestingAccount();
    if (object.baseVestingAccount !== undefined && object.baseVestingAccount !== null) {
      message.baseVestingAccount = BaseVestingAccount.fromPartial(object.baseVestingAccount);
    }
    if (object.startTime !== undefined && object.startTime !== null) {
      message.startTime = BigInt(object.startTime.toString());
    }
    return message;
  },
  fromSDK(object: ContinuousVestingAccountSDKType): ContinuousVestingAccount {
    return {
      baseVestingAccount: object.base_vesting_account ? BaseVestingAccount.fromSDK(object.base_vesting_account) : undefined,
      startTime: object?.start_time
    };
  },
  toSDK(message: ContinuousVestingAccount): ContinuousVestingAccountSDKType {
    const obj: any = {};
    message.baseVestingAccount !== undefined && (obj.base_vesting_account = message.baseVestingAccount ? BaseVestingAccount.toSDK(message.baseVestingAccount) : undefined);
    obj.start_time = message.startTime;
    return obj;
  },
  fromAmino(object: ContinuousVestingAccountAmino): ContinuousVestingAccount {
    const message = createBaseContinuousVestingAccount();
    if (object.base_vesting_account !== undefined && object.base_vesting_account !== null) {
      message.baseVestingAccount = BaseVestingAccount.fromAmino(object.base_vesting_account);
    }
    if (object.start_time !== undefined && object.start_time !== null) {
      message.startTime = BigInt(object.start_time);
    }
    return message;
  },
  toAmino(message: ContinuousVestingAccount, useInterfaces: boolean = true): ContinuousVestingAccountAmino {
    const obj: any = {};
    obj.base_vesting_account = message.baseVestingAccount ? BaseVestingAccount.toAmino(message.baseVestingAccount, useInterfaces) : undefined;
    obj.start_time = message.startTime !== BigInt(0) ? message.startTime?.toString() : undefined;
    return obj;
  },
  fromProtoMsg(message: ContinuousVestingAccountProtoMsg, useInterfaces: boolean = true): ContinuousVestingAccount {
    return ContinuousVestingAccount.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: ContinuousVestingAccount): Uint8Array {
    return ContinuousVestingAccount.encode(message).finish();
  },
  toProtoMsg(message: ContinuousVestingAccount): ContinuousVestingAccountProtoMsg {
    return {
      typeUrl: "/cosmos.vesting.v1beta1.ContinuousVestingAccount",
      value: ContinuousVestingAccount.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(ContinuousVestingAccount.typeUrl)) {
      return;
    }
    BaseVestingAccount.registerTypeUrl();
  }
};
function createBaseDelayedVestingAccount(): DelayedVestingAccount {
  return {
    baseVestingAccount: undefined
  };
}
/**
 * DelayedVestingAccount implements the VestingAccount interface. It vests all
 * coins after a specific time, but non prior. In other words, it keeps them
 * locked until a specified time.
 * @name DelayedVestingAccount
 * @package cosmos.vesting.v1beta1
 * @see proto type: cosmos.vesting.v1beta1.DelayedVestingAccount
 */
export const DelayedVestingAccount = {
  typeUrl: "/cosmos.vesting.v1beta1.DelayedVestingAccount",
  aminoType: "cosmos-sdk/DelayedVestingAccount",
  is(o: any): o is DelayedVestingAccount {
    return o && o.$typeUrl === DelayedVestingAccount.typeUrl;
  },
  isSDK(o: any): o is DelayedVestingAccountSDKType {
    return o && o.$typeUrl === DelayedVestingAccount.typeUrl;
  },
  isAmino(o: any): o is DelayedVestingAccountAmino {
    return o && o.$typeUrl === DelayedVestingAccount.typeUrl;
  },
  encode(message: DelayedVestingAccount, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.baseVestingAccount !== undefined) {
      BaseVestingAccount.encode(message.baseVestingAccount, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): DelayedVestingAccount {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDelayedVestingAccount();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.baseVestingAccount = BaseVestingAccount.decode(reader, reader.uint32(), useInterfaces);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): DelayedVestingAccount {
    const obj = createBaseDelayedVestingAccount();
    if (isSet(object.baseVestingAccount)) obj.baseVestingAccount = BaseVestingAccount.fromJSON(object.baseVestingAccount);
    return obj;
  },
  fromPartial(object: DeepPartial<DelayedVestingAccount>): DelayedVestingAccount {
    const message = createBaseDelayedVestingAccount();
    if (object.baseVestingAccount !== undefined && object.baseVestingAccount !== null) {
      message.baseVestingAccount = BaseVestingAccount.fromPartial(object.baseVestingAccount);
    }
    return message;
  },
  fromSDK(object: DelayedVestingAccountSDKType): DelayedVestingAccount {
    return {
      baseVestingAccount: object.base_vesting_account ? BaseVestingAccount.fromSDK(object.base_vesting_account) : undefined
    };
  },
  toSDK(message: DelayedVestingAccount): DelayedVestingAccountSDKType {
    const obj: any = {};
    message.baseVestingAccount !== undefined && (obj.base_vesting_account = message.baseVestingAccount ? BaseVestingAccount.toSDK(message.baseVestingAccount) : undefined);
    return obj;
  },
  fromAmino(object: DelayedVestingAccountAmino): DelayedVestingAccount {
    const message = createBaseDelayedVestingAccount();
    if (object.base_vesting_account !== undefined && object.base_vesting_account !== null) {
      message.baseVestingAccount = BaseVestingAccount.fromAmino(object.base_vesting_account);
    }
    return message;
  },
  toAmino(message: DelayedVestingAccount, useInterfaces: boolean = true): DelayedVestingAccountAmino {
    const obj: any = {};
    obj.base_vesting_account = message.baseVestingAccount ? BaseVestingAccount.toAmino(message.baseVestingAccount, useInterfaces) : undefined;
    return obj;
  },
  fromProtoMsg(message: DelayedVestingAccountProtoMsg, useInterfaces: boolean = true): DelayedVestingAccount {
    return DelayedVestingAccount.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: DelayedVestingAccount): Uint8Array {
    return DelayedVestingAccount.encode(message).finish();
  },
  toProtoMsg(message: DelayedVestingAccount): DelayedVestingAccountProtoMsg {
    return {
      typeUrl: "/cosmos.vesting.v1beta1.DelayedVestingAccount",
      value: DelayedVestingAccount.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(DelayedVestingAccount.typeUrl)) {
      return;
    }
    BaseVestingAccount.registerTypeUrl();
  }
};
function createBasePeriod(): Period {
  return {
    length: BigInt(0),
    amount: []
  };
}
/**
 * Period defines a length of time and amount of coins that will vest.
 * @name Period
 * @package cosmos.vesting.v1beta1
 * @see proto type: cosmos.vesting.v1beta1.Period
 */
export const Period = {
  typeUrl: "/cosmos.vesting.v1beta1.Period",
  aminoType: "cosmos-sdk/Period",
  is(o: any): o is Period {
    return o && (o.$typeUrl === Period.typeUrl || typeof o.length === "bigint" && Array.isArray(o.amount) && (!o.amount.length || Coin.is(o.amount[0])));
  },
  isSDK(o: any): o is PeriodSDKType {
    return o && (o.$typeUrl === Period.typeUrl || typeof o.length === "bigint" && Array.isArray(o.amount) && (!o.amount.length || Coin.isSDK(o.amount[0])));
  },
  isAmino(o: any): o is PeriodAmino {
    return o && (o.$typeUrl === Period.typeUrl || typeof o.length === "bigint" && Array.isArray(o.amount) && (!o.amount.length || Coin.isAmino(o.amount[0])));
  },
  encode(message: Period, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.length !== BigInt(0)) {
      writer.uint32(8).int64(message.length);
    }
    for (const v of message.amount) {
      Coin.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): Period {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePeriod();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.length = reader.int64();
          break;
        case 2:
          message.amount.push(Coin.decode(reader, reader.uint32(), useInterfaces));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Period {
    const obj = createBasePeriod();
    if (isSet(object.length)) obj.length = BigInt(object.length.toString());
    if (Array.isArray(object?.amount)) obj.amount = object.amount.map((e: any) => Coin.fromJSON(e));
    return obj;
  },
  fromPartial(object: DeepPartial<Period>): Period {
    const message = createBasePeriod();
    if (object.length !== undefined && object.length !== null) {
      message.length = BigInt(object.length.toString());
    }
    message.amount = object.amount?.map(e => Coin.fromPartial(e)) || [];
    return message;
  },
  fromSDK(object: PeriodSDKType): Period {
    return {
      length: object?.length,
      amount: Array.isArray(object?.amount) ? object.amount.map((e: any) => Coin.fromSDK(e)) : []
    };
  },
  toSDK(message: Period): PeriodSDKType {
    const obj: any = {};
    obj.length = message.length;
    if (message.amount) {
      obj.amount = message.amount.map(e => e ? Coin.toSDK(e) : undefined);
    } else {
      obj.amount = [];
    }
    return obj;
  },
  fromAmino(object: PeriodAmino): Period {
    const message = createBasePeriod();
    if (object.length !== undefined && object.length !== null) {
      message.length = BigInt(object.length);
    }
    message.amount = object.amount?.map(e => Coin.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: Period, useInterfaces: boolean = true): PeriodAmino {
    const obj: any = {};
    obj.length = message.length !== BigInt(0) ? message.length?.toString() : undefined;
    if (message.amount) {
      obj.amount = message.amount.map(e => e ? Coin.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.amount = message.amount;
    }
    return obj;
  },
  fromProtoMsg(message: PeriodProtoMsg, useInterfaces: boolean = true): Period {
    return Period.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: Period): Uint8Array {
    return Period.encode(message).finish();
  },
  toProtoMsg(message: Period): PeriodProtoMsg {
    return {
      typeUrl: "/cosmos.vesting.v1beta1.Period",
      value: Period.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(Period.typeUrl)) {
      return;
    }
    Coin.registerTypeUrl();
  }
};
function createBasePeriodicVestingAccount(): PeriodicVestingAccount {
  return {
    baseVestingAccount: undefined,
    startTime: BigInt(0),
    vestingPeriods: []
  };
}
/**
 * PeriodicVestingAccount implements the VestingAccount interface. It
 * periodically vests by unlocking coins during each specified period.
 * @name PeriodicVestingAccount
 * @package cosmos.vesting.v1beta1
 * @see proto type: cosmos.vesting.v1beta1.PeriodicVestingAccount
 */
export const PeriodicVestingAccount = {
  typeUrl: "/cosmos.vesting.v1beta1.PeriodicVestingAccount",
  aminoType: "cosmos-sdk/PeriodicVestingAccount",
  is(o: any): o is PeriodicVestingAccount {
    return o && (o.$typeUrl === PeriodicVestingAccount.typeUrl || typeof o.startTime === "bigint" && Array.isArray(o.vestingPeriods) && (!o.vestingPeriods.length || Period.is(o.vestingPeriods[0])));
  },
  isSDK(o: any): o is PeriodicVestingAccountSDKType {
    return o && (o.$typeUrl === PeriodicVestingAccount.typeUrl || typeof o.start_time === "bigint" && Array.isArray(o.vesting_periods) && (!o.vesting_periods.length || Period.isSDK(o.vesting_periods[0])));
  },
  isAmino(o: any): o is PeriodicVestingAccountAmino {
    return o && (o.$typeUrl === PeriodicVestingAccount.typeUrl || typeof o.start_time === "bigint" && Array.isArray(o.vesting_periods) && (!o.vesting_periods.length || Period.isAmino(o.vesting_periods[0])));
  },
  encode(message: PeriodicVestingAccount, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.baseVestingAccount !== undefined) {
      BaseVestingAccount.encode(message.baseVestingAccount, writer.uint32(10).fork()).ldelim();
    }
    if (message.startTime !== BigInt(0)) {
      writer.uint32(16).int64(message.startTime);
    }
    for (const v of message.vestingPeriods) {
      Period.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): PeriodicVestingAccount {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePeriodicVestingAccount();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.baseVestingAccount = BaseVestingAccount.decode(reader, reader.uint32(), useInterfaces);
          break;
        case 2:
          message.startTime = reader.int64();
          break;
        case 3:
          message.vestingPeriods.push(Period.decode(reader, reader.uint32(), useInterfaces));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): PeriodicVestingAccount {
    const obj = createBasePeriodicVestingAccount();
    if (isSet(object.baseVestingAccount)) obj.baseVestingAccount = BaseVestingAccount.fromJSON(object.baseVestingAccount);
    if (isSet(object.startTime)) obj.startTime = BigInt(object.startTime.toString());
    if (Array.isArray(object?.vestingPeriods)) obj.vestingPeriods = object.vestingPeriods.map((e: any) => Period.fromJSON(e));
    return obj;
  },
  fromPartial(object: DeepPartial<PeriodicVestingAccount>): PeriodicVestingAccount {
    const message = createBasePeriodicVestingAccount();
    if (object.baseVestingAccount !== undefined && object.baseVestingAccount !== null) {
      message.baseVestingAccount = BaseVestingAccount.fromPartial(object.baseVestingAccount);
    }
    if (object.startTime !== undefined && object.startTime !== null) {
      message.startTime = BigInt(object.startTime.toString());
    }
    message.vestingPeriods = object.vestingPeriods?.map(e => Period.fromPartial(e)) || [];
    return message;
  },
  fromSDK(object: PeriodicVestingAccountSDKType): PeriodicVestingAccount {
    return {
      baseVestingAccount: object.base_vesting_account ? BaseVestingAccount.fromSDK(object.base_vesting_account) : undefined,
      startTime: object?.start_time,
      vestingPeriods: Array.isArray(object?.vesting_periods) ? object.vesting_periods.map((e: any) => Period.fromSDK(e)) : []
    };
  },
  toSDK(message: PeriodicVestingAccount): PeriodicVestingAccountSDKType {
    const obj: any = {};
    message.baseVestingAccount !== undefined && (obj.base_vesting_account = message.baseVestingAccount ? BaseVestingAccount.toSDK(message.baseVestingAccount) : undefined);
    obj.start_time = message.startTime;
    if (message.vestingPeriods) {
      obj.vesting_periods = message.vestingPeriods.map(e => e ? Period.toSDK(e) : undefined);
    } else {
      obj.vesting_periods = [];
    }
    return obj;
  },
  fromAmino(object: PeriodicVestingAccountAmino): PeriodicVestingAccount {
    const message = createBasePeriodicVestingAccount();
    if (object.base_vesting_account !== undefined && object.base_vesting_account !== null) {
      message.baseVestingAccount = BaseVestingAccount.fromAmino(object.base_vesting_account);
    }
    if (object.start_time !== undefined && object.start_time !== null) {
      message.startTime = BigInt(object.start_time);
    }
    message.vestingPeriods = object.vesting_periods?.map(e => Period.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: PeriodicVestingAccount, useInterfaces: boolean = true): PeriodicVestingAccountAmino {
    const obj: any = {};
    obj.base_vesting_account = message.baseVestingAccount ? BaseVestingAccount.toAmino(message.baseVestingAccount, useInterfaces) : undefined;
    obj.start_time = message.startTime !== BigInt(0) ? message.startTime?.toString() : undefined;
    if (message.vestingPeriods) {
      obj.vesting_periods = message.vestingPeriods.map(e => e ? Period.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.vesting_periods = message.vestingPeriods;
    }
    return obj;
  },
  fromProtoMsg(message: PeriodicVestingAccountProtoMsg, useInterfaces: boolean = true): PeriodicVestingAccount {
    return PeriodicVestingAccount.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: PeriodicVestingAccount): Uint8Array {
    return PeriodicVestingAccount.encode(message).finish();
  },
  toProtoMsg(message: PeriodicVestingAccount): PeriodicVestingAccountProtoMsg {
    return {
      typeUrl: "/cosmos.vesting.v1beta1.PeriodicVestingAccount",
      value: PeriodicVestingAccount.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(PeriodicVestingAccount.typeUrl)) {
      return;
    }
    BaseVestingAccount.registerTypeUrl();
    Period.registerTypeUrl();
  }
};
function createBasePermanentLockedAccount(): PermanentLockedAccount {
  return {
    baseVestingAccount: undefined
  };
}
/**
 * PermanentLockedAccount implements the VestingAccount interface. It does
 * not ever release coins, locking them indefinitely. Coins in this account can
 * still be used for delegating and for governance votes even while locked.
 * 
 * Since: cosmos-sdk 0.43
 * @name PermanentLockedAccount
 * @package cosmos.vesting.v1beta1
 * @see proto type: cosmos.vesting.v1beta1.PermanentLockedAccount
 */
export const PermanentLockedAccount = {
  typeUrl: "/cosmos.vesting.v1beta1.PermanentLockedAccount",
  aminoType: "cosmos-sdk/PermanentLockedAccount",
  is(o: any): o is PermanentLockedAccount {
    return o && o.$typeUrl === PermanentLockedAccount.typeUrl;
  },
  isSDK(o: any): o is PermanentLockedAccountSDKType {
    return o && o.$typeUrl === PermanentLockedAccount.typeUrl;
  },
  isAmino(o: any): o is PermanentLockedAccountAmino {
    return o && o.$typeUrl === PermanentLockedAccount.typeUrl;
  },
  encode(message: PermanentLockedAccount, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.baseVestingAccount !== undefined) {
      BaseVestingAccount.encode(message.baseVestingAccount, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): PermanentLockedAccount {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePermanentLockedAccount();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.baseVestingAccount = BaseVestingAccount.decode(reader, reader.uint32(), useInterfaces);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): PermanentLockedAccount {
    const obj = createBasePermanentLockedAccount();
    if (isSet(object.baseVestingAccount)) obj.baseVestingAccount = BaseVestingAccount.fromJSON(object.baseVestingAccount);
    return obj;
  },
  fromPartial(object: DeepPartial<PermanentLockedAccount>): PermanentLockedAccount {
    const message = createBasePermanentLockedAccount();
    if (object.baseVestingAccount !== undefined && object.baseVestingAccount !== null) {
      message.baseVestingAccount = BaseVestingAccount.fromPartial(object.baseVestingAccount);
    }
    return message;
  },
  fromSDK(object: PermanentLockedAccountSDKType): PermanentLockedAccount {
    return {
      baseVestingAccount: object.base_vesting_account ? BaseVestingAccount.fromSDK(object.base_vesting_account) : undefined
    };
  },
  toSDK(message: PermanentLockedAccount): PermanentLockedAccountSDKType {
    const obj: any = {};
    message.baseVestingAccount !== undefined && (obj.base_vesting_account = message.baseVestingAccount ? BaseVestingAccount.toSDK(message.baseVestingAccount) : undefined);
    return obj;
  },
  fromAmino(object: PermanentLockedAccountAmino): PermanentLockedAccount {
    const message = createBasePermanentLockedAccount();
    if (object.base_vesting_account !== undefined && object.base_vesting_account !== null) {
      message.baseVestingAccount = BaseVestingAccount.fromAmino(object.base_vesting_account);
    }
    return message;
  },
  toAmino(message: PermanentLockedAccount, useInterfaces: boolean = true): PermanentLockedAccountAmino {
    const obj: any = {};
    obj.base_vesting_account = message.baseVestingAccount ? BaseVestingAccount.toAmino(message.baseVestingAccount, useInterfaces) : undefined;
    return obj;
  },
  fromProtoMsg(message: PermanentLockedAccountProtoMsg, useInterfaces: boolean = true): PermanentLockedAccount {
    return PermanentLockedAccount.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: PermanentLockedAccount): Uint8Array {
    return PermanentLockedAccount.encode(message).finish();
  },
  toProtoMsg(message: PermanentLockedAccount): PermanentLockedAccountProtoMsg {
    return {
      typeUrl: "/cosmos.vesting.v1beta1.PermanentLockedAccount",
      value: PermanentLockedAccount.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(PermanentLockedAccount.typeUrl)) {
      return;
    }
    BaseVestingAccount.registerTypeUrl();
  }
};