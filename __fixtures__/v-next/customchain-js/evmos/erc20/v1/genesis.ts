import { TokenPair, type TokenPairAmino } from "./erc20";
import { BinaryReader, BinaryWriter } from "../../../binary";
import type { DeepPartial } from "../../../helpers";
/**
 * GenesisState defines the module's genesis state.
 * @name GenesisState
 * @package evmos.erc20.v1
 * @see proto type: evmos.erc20.v1.GenesisState
 */
export interface GenesisState {
  /**
   * module parameters
   */
  params: EvmosErc20V1Params;
  /**
   * registered token pairs
   */
  tokenPairs: TokenPair[];
}
export interface GenesisStateProtoMsg {
  typeUrl: "/evmos.erc20.v1.GenesisState";
  value: Uint8Array;
}
/**
 * GenesisState defines the module's genesis state.
 * @name GenesisStateAmino
 * @package evmos.erc20.v1
 * @see proto type: evmos.erc20.v1.GenesisState
 */
export interface GenesisStateAmino {
  /**
   * module parameters
   */
  params: EvmosErc20V1ParamsAmino;
  /**
   * registered token pairs
   */
  token_pairs: TokenPairAmino[];
}
export interface GenesisStateAminoMsg {
  type: "/evmos.erc20.v1.GenesisState";
  value: GenesisStateAmino;
}
/**
 * Params defines the erc20 module params
 * @name EvmosErc20V1Params
 * @package evmos.erc20.v1
 * @see proto type: evmos.erc20.v1.Params
 */
export interface EvmosErc20V1Params {
  /**
   * parameter to enable the conversion of Cosmos coins <--> ERC20 tokens.
   */
  enableErc20: boolean;
  /**
   * parameter to enable the EVM hook that converts an ERC20 token to a Cosmos
   * Coin by transferring the Tokens through a MsgEthereumTx to the
   * ModuleAddress Ethereum address.
   */
  enableEvmHook: boolean;
}
export interface EvmosErc20V1ParamsProtoMsg {
  typeUrl: "/evmos.erc20.v1.Params";
  value: Uint8Array;
}
/**
 * Params defines the erc20 module params
 * @name EvmosErc20V1ParamsAmino
 * @package evmos.erc20.v1
 * @see proto type: evmos.erc20.v1.EvmosErc20V1Params
 */
export interface EvmosErc20V1ParamsAmino {
  /**
   * parameter to enable the conversion of Cosmos coins <--> ERC20 tokens.
   */
  enable_erc20: boolean;
  /**
   * parameter to enable the EVM hook that converts an ERC20 token to a Cosmos
   * Coin by transferring the Tokens through a MsgEthereumTx to the
   * ModuleAddress Ethereum address.
   */
  enable_evm_hook: boolean;
}
export interface EvmosErc20V1ParamsAminoMsg {
  type: "/evmos.erc20.v1.Params";
  value: EvmosErc20V1ParamsAmino;
}
function createBaseGenesisState(): GenesisState {
  return {
    params: EvmosErc20V1Params.fromPartial({}),
    tokenPairs: []
  };
}
/**
 * GenesisState defines the module's genesis state.
 * @name GenesisState
 * @package evmos.erc20.v1
 * @see proto type: evmos.erc20.v1.GenesisState
 */
export const GenesisState = {
  typeUrl: "/evmos.erc20.v1.GenesisState",
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      EvmosErc20V1Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.tokenPairs) {
      TokenPair.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = EvmosErc20V1Params.decode(reader, reader.uint32());
          break;
        case 2:
          message.tokenPairs.push(TokenPair.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.params = object.params !== undefined && object.params !== null ? EvmosErc20V1Params.fromPartial(object.params) : undefined;
    message.tokenPairs = object.tokenPairs?.map(e => TokenPair.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: GenesisStateAmino): GenesisState {
    const message = createBaseGenesisState();
    if (object.params !== undefined && object.params !== null) {
      message.params = EvmosErc20V1Params.fromAmino(object.params);
    }
    message.tokenPairs = object.token_pairs?.map(e => TokenPair.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: GenesisState): GenesisStateAmino {
    const obj: any = {};
    obj.params = message.params ? EvmosErc20V1Params.toAmino(message.params) : undefined;
    if (message.tokenPairs) {
      obj.token_pairs = message.tokenPairs.map(e => e ? TokenPair.toAmino(e) : undefined);
    } else {
      obj.token_pairs = message.tokenPairs;
    }
    return obj;
  },
  fromAminoMsg(object: GenesisStateAminoMsg): GenesisState {
    return GenesisState.fromAmino(object.value);
  },
  fromProtoMsg(message: GenesisStateProtoMsg): GenesisState {
    return GenesisState.decode(message.value);
  },
  toProto(message: GenesisState): Uint8Array {
    return GenesisState.encode(message).finish();
  },
  toProtoMsg(message: GenesisState): GenesisStateProtoMsg {
    return {
      typeUrl: "/evmos.erc20.v1.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  }
};
function createBaseEvmosErc20V1Params(): EvmosErc20V1Params {
  return {
    enableErc20: false,
    enableEvmHook: false
  };
}
/**
 * Params defines the erc20 module params
 * @name EvmosErc20V1Params
 * @package evmos.erc20.v1
 * @see proto type: evmos.erc20.v1.Params
 */
export const EvmosErc20V1Params = {
  typeUrl: "/evmos.erc20.v1.Params",
  encode(message: EvmosErc20V1Params, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.enableErc20 === true) {
      writer.uint32(8).bool(message.enableErc20);
    }
    if (message.enableEvmHook === true) {
      writer.uint32(16).bool(message.enableEvmHook);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EvmosErc20V1Params {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEvmosErc20V1Params();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.enableErc20 = reader.bool();
          break;
        case 2:
          message.enableEvmHook = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<EvmosErc20V1Params>): EvmosErc20V1Params {
    const message = createBaseEvmosErc20V1Params();
    message.enableErc20 = object.enableErc20 ?? false;
    message.enableEvmHook = object.enableEvmHook ?? false;
    return message;
  },
  fromAmino(object: EvmosErc20V1ParamsAmino): EvmosErc20V1Params {
    const message = createBaseEvmosErc20V1Params();
    if (object.enable_erc20 !== undefined && object.enable_erc20 !== null) {
      message.enableErc20 = object.enable_erc20;
    }
    if (object.enable_evm_hook !== undefined && object.enable_evm_hook !== null) {
      message.enableEvmHook = object.enable_evm_hook;
    }
    return message;
  },
  toAmino(message: EvmosErc20V1Params): EvmosErc20V1ParamsAmino {
    const obj: any = {};
    obj.enable_erc20 = message.enableErc20 === false ? undefined : message.enableErc20;
    obj.enable_evm_hook = message.enableEvmHook === false ? undefined : message.enableEvmHook;
    return obj;
  },
  fromAminoMsg(object: EvmosErc20V1ParamsAminoMsg): EvmosErc20V1Params {
    return EvmosErc20V1Params.fromAmino(object.value);
  },
  fromProtoMsg(message: EvmosErc20V1ParamsProtoMsg): EvmosErc20V1Params {
    return EvmosErc20V1Params.decode(message.value);
  },
  toProto(message: EvmosErc20V1Params): Uint8Array {
    return EvmosErc20V1Params.encode(message).finish();
  },
  toProtoMsg(message: EvmosErc20V1Params): EvmosErc20V1ParamsProtoMsg {
    return {
      typeUrl: "/evmos.erc20.v1.Params",
      value: EvmosErc20V1Params.encode(message).finish()
    };
  }
};