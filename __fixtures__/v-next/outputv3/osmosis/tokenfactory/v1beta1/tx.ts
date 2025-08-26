import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { Metadata, MetadataAmino, MetadataSDKType } from "../../../cosmos/bank/v1beta1/bank";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet, DeepPartial } from "../../../helpers";
import { GlobalDecoderRegistry } from "../../../registry";
export const protobufPackage = "osmosis.tokenfactory.v1beta1";
/**
 * MsgCreateDenom defines the message structure for the CreateDenom gRPC service
 * method. It allows an account to create a new denom. It requires a sender
 * address and a sub denomination. The (sender_address, sub_denomination) tuple
 * must be unique and cannot be re-used.
 * 
 * The resulting denom created is defined as
 * <factory/{creatorAddress}/{subdenom}>. The resulting denom's admin is
 * originally set to be the creator, but this can be changed later. The token
 * denom does not indicate the current admin.
 * @name MsgCreateDenom
 * @package osmosis.tokenfactory.v1beta1
 * @see proto type: osmosis.tokenfactory.v1beta1.MsgCreateDenom
 */
export interface MsgCreateDenom {
  sender: string;
  /**
   * subdenom can be up to 44 "alphanumeric" characters long.
   */
  subdenom: string;
}
export interface MsgCreateDenomProtoMsg {
  typeUrl: "/osmosis.tokenfactory.v1beta1.MsgCreateDenom";
  value: Uint8Array;
}
/**
 * MsgCreateDenom defines the message structure for the CreateDenom gRPC service
 * method. It allows an account to create a new denom. It requires a sender
 * address and a sub denomination. The (sender_address, sub_denomination) tuple
 * must be unique and cannot be re-used.
 * 
 * The resulting denom created is defined as
 * <factory/{creatorAddress}/{subdenom}>. The resulting denom's admin is
 * originally set to be the creator, but this can be changed later. The token
 * denom does not indicate the current admin.
 * @name MsgCreateDenomAmino
 * @package osmosis.tokenfactory.v1beta1
 * @see proto type: osmosis.tokenfactory.v1beta1.MsgCreateDenom
 */
export interface MsgCreateDenomAmino {
  sender?: string;
  /**
   * subdenom can be up to 44 "alphanumeric" characters long.
   */
  subdenom?: string;
}
/**
 * MsgCreateDenom defines the message structure for the CreateDenom gRPC service
 * method. It allows an account to create a new denom. It requires a sender
 * address and a sub denomination. The (sender_address, sub_denomination) tuple
 * must be unique and cannot be re-used.
 * 
 * The resulting denom created is defined as
 * <factory/{creatorAddress}/{subdenom}>. The resulting denom's admin is
 * originally set to be the creator, but this can be changed later. The token
 * denom does not indicate the current admin.
 * @name MsgCreateDenomSDKType
 * @package osmosis.tokenfactory.v1beta1
 * @see proto type: osmosis.tokenfactory.v1beta1.MsgCreateDenom
 */
export interface MsgCreateDenomSDKType {
  sender: string;
  subdenom: string;
}
/**
 * MsgCreateDenomResponse is the return value of MsgCreateDenom
 * It returns the full string of the newly created denom
 * @name MsgCreateDenomResponse
 * @package osmosis.tokenfactory.v1beta1
 * @see proto type: osmosis.tokenfactory.v1beta1.MsgCreateDenomResponse
 */
export interface MsgCreateDenomResponse {
  newTokenDenom: string;
}
export interface MsgCreateDenomResponseProtoMsg {
  typeUrl: "/osmosis.tokenfactory.v1beta1.MsgCreateDenomResponse";
  value: Uint8Array;
}
/**
 * MsgCreateDenomResponse is the return value of MsgCreateDenom
 * It returns the full string of the newly created denom
 * @name MsgCreateDenomResponseAmino
 * @package osmosis.tokenfactory.v1beta1
 * @see proto type: osmosis.tokenfactory.v1beta1.MsgCreateDenomResponse
 */
export interface MsgCreateDenomResponseAmino {
  new_token_denom?: string;
}
/**
 * MsgCreateDenomResponse is the return value of MsgCreateDenom
 * It returns the full string of the newly created denom
 * @name MsgCreateDenomResponseSDKType
 * @package osmosis.tokenfactory.v1beta1
 * @see proto type: osmosis.tokenfactory.v1beta1.MsgCreateDenomResponse
 */
export interface MsgCreateDenomResponseSDKType {
  new_token_denom: string;
}
/**
 * MsgMint is the sdk.Msg type for allowing an admin account to mint
 * more of a token.  For now, we only support minting to the sender account
 * @name MsgMint
 * @package osmosis.tokenfactory.v1beta1
 * @see proto type: osmosis.tokenfactory.v1beta1.MsgMint
 */
export interface MsgMint {
  sender: string;
  amount: Coin;
}
export interface MsgMintProtoMsg {
  typeUrl: "/osmosis.tokenfactory.v1beta1.MsgMint";
  value: Uint8Array;
}
/**
 * MsgMint is the sdk.Msg type for allowing an admin account to mint
 * more of a token.  For now, we only support minting to the sender account
 * @name MsgMintAmino
 * @package osmosis.tokenfactory.v1beta1
 * @see proto type: osmosis.tokenfactory.v1beta1.MsgMint
 */
export interface MsgMintAmino {
  sender?: string;
  amount?: CoinAmino;
}
/**
 * MsgMint is the sdk.Msg type for allowing an admin account to mint
 * more of a token.  For now, we only support minting to the sender account
 * @name MsgMintSDKType
 * @package osmosis.tokenfactory.v1beta1
 * @see proto type: osmosis.tokenfactory.v1beta1.MsgMint
 */
export interface MsgMintSDKType {
  sender: string;
  amount: CoinSDKType;
}
/**
 * @name MsgMintResponse
 * @package osmosis.tokenfactory.v1beta1
 * @see proto type: osmosis.tokenfactory.v1beta1.MsgMintResponse
 */
export interface MsgMintResponse {}
export interface MsgMintResponseProtoMsg {
  typeUrl: "/osmosis.tokenfactory.v1beta1.MsgMintResponse";
  value: Uint8Array;
}
/**
 * @name MsgMintResponseAmino
 * @package osmosis.tokenfactory.v1beta1
 * @see proto type: osmosis.tokenfactory.v1beta1.MsgMintResponse
 */
export interface MsgMintResponseAmino {}
/**
 * @name MsgMintResponseSDKType
 * @package osmosis.tokenfactory.v1beta1
 * @see proto type: osmosis.tokenfactory.v1beta1.MsgMintResponse
 */
export interface MsgMintResponseSDKType {}
/**
 * MsgBurn is the sdk.Msg type for allowing an admin account to burn
 * a token.  For now, we only support burning from the sender account.
 * @name MsgBurn
 * @package osmosis.tokenfactory.v1beta1
 * @see proto type: osmosis.tokenfactory.v1beta1.MsgBurn
 */
export interface MsgBurn {
  sender: string;
  amount: Coin;
}
export interface MsgBurnProtoMsg {
  typeUrl: "/osmosis.tokenfactory.v1beta1.MsgBurn";
  value: Uint8Array;
}
/**
 * MsgBurn is the sdk.Msg type for allowing an admin account to burn
 * a token.  For now, we only support burning from the sender account.
 * @name MsgBurnAmino
 * @package osmosis.tokenfactory.v1beta1
 * @see proto type: osmosis.tokenfactory.v1beta1.MsgBurn
 */
export interface MsgBurnAmino {
  sender?: string;
  amount?: CoinAmino;
}
/**
 * MsgBurn is the sdk.Msg type for allowing an admin account to burn
 * a token.  For now, we only support burning from the sender account.
 * @name MsgBurnSDKType
 * @package osmosis.tokenfactory.v1beta1
 * @see proto type: osmosis.tokenfactory.v1beta1.MsgBurn
 */
export interface MsgBurnSDKType {
  sender: string;
  amount: CoinSDKType;
}
/**
 * @name MsgBurnResponse
 * @package osmosis.tokenfactory.v1beta1
 * @see proto type: osmosis.tokenfactory.v1beta1.MsgBurnResponse
 */
export interface MsgBurnResponse {}
export interface MsgBurnResponseProtoMsg {
  typeUrl: "/osmosis.tokenfactory.v1beta1.MsgBurnResponse";
  value: Uint8Array;
}
/**
 * @name MsgBurnResponseAmino
 * @package osmosis.tokenfactory.v1beta1
 * @see proto type: osmosis.tokenfactory.v1beta1.MsgBurnResponse
 */
export interface MsgBurnResponseAmino {}
/**
 * @name MsgBurnResponseSDKType
 * @package osmosis.tokenfactory.v1beta1
 * @see proto type: osmosis.tokenfactory.v1beta1.MsgBurnResponse
 */
export interface MsgBurnResponseSDKType {}
/**
 * MsgChangeAdmin is the sdk.Msg type for allowing an admin account to reassign
 * adminship of a denom to a new account
 * @name MsgChangeAdmin
 * @package osmosis.tokenfactory.v1beta1
 * @see proto type: osmosis.tokenfactory.v1beta1.MsgChangeAdmin
 */
export interface MsgChangeAdmin {
  sender: string;
  denom: string;
  newAdmin: string;
}
export interface MsgChangeAdminProtoMsg {
  typeUrl: "/osmosis.tokenfactory.v1beta1.MsgChangeAdmin";
  value: Uint8Array;
}
/**
 * MsgChangeAdmin is the sdk.Msg type for allowing an admin account to reassign
 * adminship of a denom to a new account
 * @name MsgChangeAdminAmino
 * @package osmosis.tokenfactory.v1beta1
 * @see proto type: osmosis.tokenfactory.v1beta1.MsgChangeAdmin
 */
export interface MsgChangeAdminAmino {
  sender?: string;
  denom?: string;
  new_admin?: string;
}
/**
 * MsgChangeAdmin is the sdk.Msg type for allowing an admin account to reassign
 * adminship of a denom to a new account
 * @name MsgChangeAdminSDKType
 * @package osmosis.tokenfactory.v1beta1
 * @see proto type: osmosis.tokenfactory.v1beta1.MsgChangeAdmin
 */
export interface MsgChangeAdminSDKType {
  sender: string;
  denom: string;
  new_admin: string;
}
/**
 * MsgChangeAdminResponse defines the response structure for an executed
 * MsgChangeAdmin message.
 * @name MsgChangeAdminResponse
 * @package osmosis.tokenfactory.v1beta1
 * @see proto type: osmosis.tokenfactory.v1beta1.MsgChangeAdminResponse
 */
export interface MsgChangeAdminResponse {}
export interface MsgChangeAdminResponseProtoMsg {
  typeUrl: "/osmosis.tokenfactory.v1beta1.MsgChangeAdminResponse";
  value: Uint8Array;
}
/**
 * MsgChangeAdminResponse defines the response structure for an executed
 * MsgChangeAdmin message.
 * @name MsgChangeAdminResponseAmino
 * @package osmosis.tokenfactory.v1beta1
 * @see proto type: osmosis.tokenfactory.v1beta1.MsgChangeAdminResponse
 */
export interface MsgChangeAdminResponseAmino {}
/**
 * MsgChangeAdminResponse defines the response structure for an executed
 * MsgChangeAdmin message.
 * @name MsgChangeAdminResponseSDKType
 * @package osmosis.tokenfactory.v1beta1
 * @see proto type: osmosis.tokenfactory.v1beta1.MsgChangeAdminResponse
 */
export interface MsgChangeAdminResponseSDKType {}
/**
 * MsgSetDenomMetadata is the sdk.Msg type for allowing an admin account to set
 * the denom's bank metadata
 * @name MsgSetDenomMetadata
 * @package osmosis.tokenfactory.v1beta1
 * @see proto type: osmosis.tokenfactory.v1beta1.MsgSetDenomMetadata
 */
export interface MsgSetDenomMetadata {
  sender: string;
  metadata: Metadata;
}
export interface MsgSetDenomMetadataProtoMsg {
  typeUrl: "/osmosis.tokenfactory.v1beta1.MsgSetDenomMetadata";
  value: Uint8Array;
}
/**
 * MsgSetDenomMetadata is the sdk.Msg type for allowing an admin account to set
 * the denom's bank metadata
 * @name MsgSetDenomMetadataAmino
 * @package osmosis.tokenfactory.v1beta1
 * @see proto type: osmosis.tokenfactory.v1beta1.MsgSetDenomMetadata
 */
export interface MsgSetDenomMetadataAmino {
  sender?: string;
  metadata?: MetadataAmino;
}
/**
 * MsgSetDenomMetadata is the sdk.Msg type for allowing an admin account to set
 * the denom's bank metadata
 * @name MsgSetDenomMetadataSDKType
 * @package osmosis.tokenfactory.v1beta1
 * @see proto type: osmosis.tokenfactory.v1beta1.MsgSetDenomMetadata
 */
export interface MsgSetDenomMetadataSDKType {
  sender: string;
  metadata: MetadataSDKType;
}
/**
 * MsgSetDenomMetadataResponse defines the response structure for an executed
 * MsgSetDenomMetadata message.
 * @name MsgSetDenomMetadataResponse
 * @package osmosis.tokenfactory.v1beta1
 * @see proto type: osmosis.tokenfactory.v1beta1.MsgSetDenomMetadataResponse
 */
export interface MsgSetDenomMetadataResponse {}
export interface MsgSetDenomMetadataResponseProtoMsg {
  typeUrl: "/osmosis.tokenfactory.v1beta1.MsgSetDenomMetadataResponse";
  value: Uint8Array;
}
/**
 * MsgSetDenomMetadataResponse defines the response structure for an executed
 * MsgSetDenomMetadata message.
 * @name MsgSetDenomMetadataResponseAmino
 * @package osmosis.tokenfactory.v1beta1
 * @see proto type: osmosis.tokenfactory.v1beta1.MsgSetDenomMetadataResponse
 */
export interface MsgSetDenomMetadataResponseAmino {}
/**
 * MsgSetDenomMetadataResponse defines the response structure for an executed
 * MsgSetDenomMetadata message.
 * @name MsgSetDenomMetadataResponseSDKType
 * @package osmosis.tokenfactory.v1beta1
 * @see proto type: osmosis.tokenfactory.v1beta1.MsgSetDenomMetadataResponse
 */
export interface MsgSetDenomMetadataResponseSDKType {}
function createBaseMsgCreateDenom(): MsgCreateDenom {
  return {
    sender: "",
    subdenom: ""
  };
}
/**
 * MsgCreateDenom defines the message structure for the CreateDenom gRPC service
 * method. It allows an account to create a new denom. It requires a sender
 * address and a sub denomination. The (sender_address, sub_denomination) tuple
 * must be unique and cannot be re-used.
 * 
 * The resulting denom created is defined as
 * <factory/{creatorAddress}/{subdenom}>. The resulting denom's admin is
 * originally set to be the creator, but this can be changed later. The token
 * denom does not indicate the current admin.
 * @name MsgCreateDenom
 * @package osmosis.tokenfactory.v1beta1
 * @see proto type: osmosis.tokenfactory.v1beta1.MsgCreateDenom
 */
export const MsgCreateDenom = {
  typeUrl: "/osmosis.tokenfactory.v1beta1.MsgCreateDenom",
  aminoType: "osmosis/tokenfactory/create-denom",
  is(o: any): o is MsgCreateDenom {
    return o && (o.$typeUrl === MsgCreateDenom.typeUrl || typeof o.sender === "string" && typeof o.subdenom === "string");
  },
  isSDK(o: any): o is MsgCreateDenomSDKType {
    return o && (o.$typeUrl === MsgCreateDenom.typeUrl || typeof o.sender === "string" && typeof o.subdenom === "string");
  },
  isAmino(o: any): o is MsgCreateDenomAmino {
    return o && (o.$typeUrl === MsgCreateDenom.typeUrl || typeof o.sender === "string" && typeof o.subdenom === "string");
  },
  encode(message: MsgCreateDenom, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.subdenom !== "") {
      writer.uint32(18).string(message.subdenom);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): MsgCreateDenom {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateDenom();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.subdenom = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgCreateDenom {
    const obj = createBaseMsgCreateDenom();
    if (isSet(object.sender)) obj.sender = String(object.sender);
    if (isSet(object.subdenom)) obj.subdenom = String(object.subdenom);
    return obj;
  },
  fromPartial(object: DeepPartial<MsgCreateDenom>): MsgCreateDenom {
    const message = createBaseMsgCreateDenom();
    message.sender = object.sender ?? "";
    message.subdenom = object.subdenom ?? "";
    return message;
  },
  fromSDK(object: MsgCreateDenomSDKType): MsgCreateDenom {
    return {
      sender: object?.sender,
      subdenom: object?.subdenom
    };
  },
  toSDK(message: MsgCreateDenom): MsgCreateDenomSDKType {
    const obj: any = {};
    obj.sender = message.sender;
    obj.subdenom = message.subdenom;
    return obj;
  },
  fromAmino(object: MsgCreateDenomAmino): MsgCreateDenom {
    const message = createBaseMsgCreateDenom();
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = object.sender;
    }
    if (object.subdenom !== undefined && object.subdenom !== null) {
      message.subdenom = object.subdenom;
    }
    return message;
  },
  toAmino(message: MsgCreateDenom, useInterfaces: boolean = true): MsgCreateDenomAmino {
    const obj: any = {};
    obj.sender = message.sender === "" ? undefined : message.sender;
    obj.subdenom = message.subdenom === "" ? undefined : message.subdenom;
    return obj;
  },
  fromProtoMsg(message: MsgCreateDenomProtoMsg, useInterfaces: boolean = true): MsgCreateDenom {
    return MsgCreateDenom.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: MsgCreateDenom): Uint8Array {
    return MsgCreateDenom.encode(message).finish();
  },
  toProtoMsg(message: MsgCreateDenom): MsgCreateDenomProtoMsg {
    return {
      typeUrl: "/osmosis.tokenfactory.v1beta1.MsgCreateDenom",
      value: MsgCreateDenom.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseMsgCreateDenomResponse(): MsgCreateDenomResponse {
  return {
    newTokenDenom: ""
  };
}
/**
 * MsgCreateDenomResponse is the return value of MsgCreateDenom
 * It returns the full string of the newly created denom
 * @name MsgCreateDenomResponse
 * @package osmosis.tokenfactory.v1beta1
 * @see proto type: osmosis.tokenfactory.v1beta1.MsgCreateDenomResponse
 */
export const MsgCreateDenomResponse = {
  typeUrl: "/osmosis.tokenfactory.v1beta1.MsgCreateDenomResponse",
  aminoType: "osmosis/tokenfactory/create-denom-response",
  is(o: any): o is MsgCreateDenomResponse {
    return o && (o.$typeUrl === MsgCreateDenomResponse.typeUrl || typeof o.newTokenDenom === "string");
  },
  isSDK(o: any): o is MsgCreateDenomResponseSDKType {
    return o && (o.$typeUrl === MsgCreateDenomResponse.typeUrl || typeof o.new_token_denom === "string");
  },
  isAmino(o: any): o is MsgCreateDenomResponseAmino {
    return o && (o.$typeUrl === MsgCreateDenomResponse.typeUrl || typeof o.new_token_denom === "string");
  },
  encode(message: MsgCreateDenomResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.newTokenDenom !== "") {
      writer.uint32(10).string(message.newTokenDenom);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): MsgCreateDenomResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateDenomResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.newTokenDenom = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgCreateDenomResponse {
    const obj = createBaseMsgCreateDenomResponse();
    if (isSet(object.newTokenDenom)) obj.newTokenDenom = String(object.newTokenDenom);
    return obj;
  },
  fromPartial(object: DeepPartial<MsgCreateDenomResponse>): MsgCreateDenomResponse {
    const message = createBaseMsgCreateDenomResponse();
    message.newTokenDenom = object.newTokenDenom ?? "";
    return message;
  },
  fromSDK(object: MsgCreateDenomResponseSDKType): MsgCreateDenomResponse {
    return {
      newTokenDenom: object?.new_token_denom
    };
  },
  toSDK(message: MsgCreateDenomResponse): MsgCreateDenomResponseSDKType {
    const obj: any = {};
    obj.new_token_denom = message.newTokenDenom;
    return obj;
  },
  fromAmino(object: MsgCreateDenomResponseAmino): MsgCreateDenomResponse {
    const message = createBaseMsgCreateDenomResponse();
    if (object.new_token_denom !== undefined && object.new_token_denom !== null) {
      message.newTokenDenom = object.new_token_denom;
    }
    return message;
  },
  toAmino(message: MsgCreateDenomResponse, useInterfaces: boolean = true): MsgCreateDenomResponseAmino {
    const obj: any = {};
    obj.new_token_denom = message.newTokenDenom === "" ? undefined : message.newTokenDenom;
    return obj;
  },
  fromProtoMsg(message: MsgCreateDenomResponseProtoMsg, useInterfaces: boolean = true): MsgCreateDenomResponse {
    return MsgCreateDenomResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: MsgCreateDenomResponse): Uint8Array {
    return MsgCreateDenomResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgCreateDenomResponse): MsgCreateDenomResponseProtoMsg {
    return {
      typeUrl: "/osmosis.tokenfactory.v1beta1.MsgCreateDenomResponse",
      value: MsgCreateDenomResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseMsgMint(): MsgMint {
  return {
    sender: "",
    amount: Coin.fromPartial({})
  };
}
/**
 * MsgMint is the sdk.Msg type for allowing an admin account to mint
 * more of a token.  For now, we only support minting to the sender account
 * @name MsgMint
 * @package osmosis.tokenfactory.v1beta1
 * @see proto type: osmosis.tokenfactory.v1beta1.MsgMint
 */
export const MsgMint = {
  typeUrl: "/osmosis.tokenfactory.v1beta1.MsgMint",
  aminoType: "osmosis/tokenfactory/mint",
  is(o: any): o is MsgMint {
    return o && (o.$typeUrl === MsgMint.typeUrl || typeof o.sender === "string" && Coin.is(o.amount));
  },
  isSDK(o: any): o is MsgMintSDKType {
    return o && (o.$typeUrl === MsgMint.typeUrl || typeof o.sender === "string" && Coin.isSDK(o.amount));
  },
  isAmino(o: any): o is MsgMintAmino {
    return o && (o.$typeUrl === MsgMint.typeUrl || typeof o.sender === "string" && Coin.isAmino(o.amount));
  },
  encode(message: MsgMint, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): MsgMint {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgMint();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.amount = Coin.decode(reader, reader.uint32(), useInterfaces);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgMint {
    const obj = createBaseMsgMint();
    if (isSet(object.sender)) obj.sender = String(object.sender);
    if (isSet(object.amount)) obj.amount = Coin.fromJSON(object.amount);
    return obj;
  },
  fromPartial(object: DeepPartial<MsgMint>): MsgMint {
    const message = createBaseMsgMint();
    message.sender = object.sender ?? "";
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = Coin.fromPartial(object.amount);
    }
    return message;
  },
  fromSDK(object: MsgMintSDKType): MsgMint {
    return {
      sender: object?.sender,
      amount: object.amount ? Coin.fromSDK(object.amount) : undefined
    };
  },
  toSDK(message: MsgMint): MsgMintSDKType {
    const obj: any = {};
    obj.sender = message.sender;
    message.amount !== undefined && (obj.amount = message.amount ? Coin.toSDK(message.amount) : undefined);
    return obj;
  },
  fromAmino(object: MsgMintAmino): MsgMint {
    const message = createBaseMsgMint();
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = object.sender;
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = Coin.fromAmino(object.amount);
    }
    return message;
  },
  toAmino(message: MsgMint, useInterfaces: boolean = true): MsgMintAmino {
    const obj: any = {};
    obj.sender = message.sender === "" ? undefined : message.sender;
    obj.amount = message.amount ? Coin.toAmino(message.amount, useInterfaces) : undefined;
    return obj;
  },
  fromProtoMsg(message: MsgMintProtoMsg, useInterfaces: boolean = true): MsgMint {
    return MsgMint.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: MsgMint): Uint8Array {
    return MsgMint.encode(message).finish();
  },
  toProtoMsg(message: MsgMint): MsgMintProtoMsg {
    return {
      typeUrl: "/osmosis.tokenfactory.v1beta1.MsgMint",
      value: MsgMint.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(MsgMint.typeUrl)) {
      return;
    }
    Coin.registerTypeUrl();
  }
};
function createBaseMsgMintResponse(): MsgMintResponse {
  return {};
}
/**
 * @name MsgMintResponse
 * @package osmosis.tokenfactory.v1beta1
 * @see proto type: osmosis.tokenfactory.v1beta1.MsgMintResponse
 */
export const MsgMintResponse = {
  typeUrl: "/osmosis.tokenfactory.v1beta1.MsgMintResponse",
  aminoType: "osmosis/tokenfactory/mint-response",
  is(o: any): o is MsgMintResponse {
    return o && o.$typeUrl === MsgMintResponse.typeUrl;
  },
  isSDK(o: any): o is MsgMintResponseSDKType {
    return o && o.$typeUrl === MsgMintResponse.typeUrl;
  },
  isAmino(o: any): o is MsgMintResponseAmino {
    return o && o.$typeUrl === MsgMintResponse.typeUrl;
  },
  encode(_: MsgMintResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): MsgMintResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgMintResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_: any): MsgMintResponse {
    const obj = createBaseMsgMintResponse();
    return obj;
  },
  fromPartial(_: DeepPartial<MsgMintResponse>): MsgMintResponse {
    const message = createBaseMsgMintResponse();
    return message;
  },
  fromSDK(_: MsgMintResponseSDKType): MsgMintResponse {
    return {};
  },
  toSDK(_: MsgMintResponse): MsgMintResponseSDKType {
    const obj: any = {};
    return obj;
  },
  fromAmino(_: MsgMintResponseAmino): MsgMintResponse {
    const message = createBaseMsgMintResponse();
    return message;
  },
  toAmino(_: MsgMintResponse, useInterfaces: boolean = true): MsgMintResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromProtoMsg(message: MsgMintResponseProtoMsg, useInterfaces: boolean = true): MsgMintResponse {
    return MsgMintResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: MsgMintResponse): Uint8Array {
    return MsgMintResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgMintResponse): MsgMintResponseProtoMsg {
    return {
      typeUrl: "/osmosis.tokenfactory.v1beta1.MsgMintResponse",
      value: MsgMintResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseMsgBurn(): MsgBurn {
  return {
    sender: "",
    amount: Coin.fromPartial({})
  };
}
/**
 * MsgBurn is the sdk.Msg type for allowing an admin account to burn
 * a token.  For now, we only support burning from the sender account.
 * @name MsgBurn
 * @package osmosis.tokenfactory.v1beta1
 * @see proto type: osmosis.tokenfactory.v1beta1.MsgBurn
 */
export const MsgBurn = {
  typeUrl: "/osmosis.tokenfactory.v1beta1.MsgBurn",
  aminoType: "osmosis/tokenfactory/burn",
  is(o: any): o is MsgBurn {
    return o && (o.$typeUrl === MsgBurn.typeUrl || typeof o.sender === "string" && Coin.is(o.amount));
  },
  isSDK(o: any): o is MsgBurnSDKType {
    return o && (o.$typeUrl === MsgBurn.typeUrl || typeof o.sender === "string" && Coin.isSDK(o.amount));
  },
  isAmino(o: any): o is MsgBurnAmino {
    return o && (o.$typeUrl === MsgBurn.typeUrl || typeof o.sender === "string" && Coin.isAmino(o.amount));
  },
  encode(message: MsgBurn, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): MsgBurn {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgBurn();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.amount = Coin.decode(reader, reader.uint32(), useInterfaces);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgBurn {
    const obj = createBaseMsgBurn();
    if (isSet(object.sender)) obj.sender = String(object.sender);
    if (isSet(object.amount)) obj.amount = Coin.fromJSON(object.amount);
    return obj;
  },
  fromPartial(object: DeepPartial<MsgBurn>): MsgBurn {
    const message = createBaseMsgBurn();
    message.sender = object.sender ?? "";
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = Coin.fromPartial(object.amount);
    }
    return message;
  },
  fromSDK(object: MsgBurnSDKType): MsgBurn {
    return {
      sender: object?.sender,
      amount: object.amount ? Coin.fromSDK(object.amount) : undefined
    };
  },
  toSDK(message: MsgBurn): MsgBurnSDKType {
    const obj: any = {};
    obj.sender = message.sender;
    message.amount !== undefined && (obj.amount = message.amount ? Coin.toSDK(message.amount) : undefined);
    return obj;
  },
  fromAmino(object: MsgBurnAmino): MsgBurn {
    const message = createBaseMsgBurn();
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = object.sender;
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = Coin.fromAmino(object.amount);
    }
    return message;
  },
  toAmino(message: MsgBurn, useInterfaces: boolean = true): MsgBurnAmino {
    const obj: any = {};
    obj.sender = message.sender === "" ? undefined : message.sender;
    obj.amount = message.amount ? Coin.toAmino(message.amount, useInterfaces) : undefined;
    return obj;
  },
  fromProtoMsg(message: MsgBurnProtoMsg, useInterfaces: boolean = true): MsgBurn {
    return MsgBurn.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: MsgBurn): Uint8Array {
    return MsgBurn.encode(message).finish();
  },
  toProtoMsg(message: MsgBurn): MsgBurnProtoMsg {
    return {
      typeUrl: "/osmosis.tokenfactory.v1beta1.MsgBurn",
      value: MsgBurn.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(MsgBurn.typeUrl)) {
      return;
    }
    Coin.registerTypeUrl();
  }
};
function createBaseMsgBurnResponse(): MsgBurnResponse {
  return {};
}
/**
 * @name MsgBurnResponse
 * @package osmosis.tokenfactory.v1beta1
 * @see proto type: osmosis.tokenfactory.v1beta1.MsgBurnResponse
 */
export const MsgBurnResponse = {
  typeUrl: "/osmosis.tokenfactory.v1beta1.MsgBurnResponse",
  aminoType: "osmosis/tokenfactory/burn-response",
  is(o: any): o is MsgBurnResponse {
    return o && o.$typeUrl === MsgBurnResponse.typeUrl;
  },
  isSDK(o: any): o is MsgBurnResponseSDKType {
    return o && o.$typeUrl === MsgBurnResponse.typeUrl;
  },
  isAmino(o: any): o is MsgBurnResponseAmino {
    return o && o.$typeUrl === MsgBurnResponse.typeUrl;
  },
  encode(_: MsgBurnResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): MsgBurnResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgBurnResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_: any): MsgBurnResponse {
    const obj = createBaseMsgBurnResponse();
    return obj;
  },
  fromPartial(_: DeepPartial<MsgBurnResponse>): MsgBurnResponse {
    const message = createBaseMsgBurnResponse();
    return message;
  },
  fromSDK(_: MsgBurnResponseSDKType): MsgBurnResponse {
    return {};
  },
  toSDK(_: MsgBurnResponse): MsgBurnResponseSDKType {
    const obj: any = {};
    return obj;
  },
  fromAmino(_: MsgBurnResponseAmino): MsgBurnResponse {
    const message = createBaseMsgBurnResponse();
    return message;
  },
  toAmino(_: MsgBurnResponse, useInterfaces: boolean = true): MsgBurnResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromProtoMsg(message: MsgBurnResponseProtoMsg, useInterfaces: boolean = true): MsgBurnResponse {
    return MsgBurnResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: MsgBurnResponse): Uint8Array {
    return MsgBurnResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgBurnResponse): MsgBurnResponseProtoMsg {
    return {
      typeUrl: "/osmosis.tokenfactory.v1beta1.MsgBurnResponse",
      value: MsgBurnResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseMsgChangeAdmin(): MsgChangeAdmin {
  return {
    sender: "",
    denom: "",
    newAdmin: ""
  };
}
/**
 * MsgChangeAdmin is the sdk.Msg type for allowing an admin account to reassign
 * adminship of a denom to a new account
 * @name MsgChangeAdmin
 * @package osmosis.tokenfactory.v1beta1
 * @see proto type: osmosis.tokenfactory.v1beta1.MsgChangeAdmin
 */
export const MsgChangeAdmin = {
  typeUrl: "/osmosis.tokenfactory.v1beta1.MsgChangeAdmin",
  aminoType: "osmosis/tokenfactory/change-admin",
  is(o: any): o is MsgChangeAdmin {
    return o && (o.$typeUrl === MsgChangeAdmin.typeUrl || typeof o.sender === "string" && typeof o.denom === "string" && typeof o.newAdmin === "string");
  },
  isSDK(o: any): o is MsgChangeAdminSDKType {
    return o && (o.$typeUrl === MsgChangeAdmin.typeUrl || typeof o.sender === "string" && typeof o.denom === "string" && typeof o.new_admin === "string");
  },
  isAmino(o: any): o is MsgChangeAdminAmino {
    return o && (o.$typeUrl === MsgChangeAdmin.typeUrl || typeof o.sender === "string" && typeof o.denom === "string" && typeof o.new_admin === "string");
  },
  encode(message: MsgChangeAdmin, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.denom !== "") {
      writer.uint32(18).string(message.denom);
    }
    if (message.newAdmin !== "") {
      writer.uint32(26).string(message.newAdmin);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): MsgChangeAdmin {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgChangeAdmin();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.denom = reader.string();
          break;
        case 3:
          message.newAdmin = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgChangeAdmin {
    const obj = createBaseMsgChangeAdmin();
    if (isSet(object.sender)) obj.sender = String(object.sender);
    if (isSet(object.denom)) obj.denom = String(object.denom);
    if (isSet(object.newAdmin)) obj.newAdmin = String(object.newAdmin);
    return obj;
  },
  fromPartial(object: DeepPartial<MsgChangeAdmin>): MsgChangeAdmin {
    const message = createBaseMsgChangeAdmin();
    message.sender = object.sender ?? "";
    message.denom = object.denom ?? "";
    message.newAdmin = object.newAdmin ?? "";
    return message;
  },
  fromSDK(object: MsgChangeAdminSDKType): MsgChangeAdmin {
    return {
      sender: object?.sender,
      denom: object?.denom,
      newAdmin: object?.new_admin
    };
  },
  toSDK(message: MsgChangeAdmin): MsgChangeAdminSDKType {
    const obj: any = {};
    obj.sender = message.sender;
    obj.denom = message.denom;
    obj.new_admin = message.newAdmin;
    return obj;
  },
  fromAmino(object: MsgChangeAdminAmino): MsgChangeAdmin {
    const message = createBaseMsgChangeAdmin();
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = object.sender;
    }
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    }
    if (object.new_admin !== undefined && object.new_admin !== null) {
      message.newAdmin = object.new_admin;
    }
    return message;
  },
  toAmino(message: MsgChangeAdmin, useInterfaces: boolean = true): MsgChangeAdminAmino {
    const obj: any = {};
    obj.sender = message.sender === "" ? undefined : message.sender;
    obj.denom = message.denom === "" ? undefined : message.denom;
    obj.new_admin = message.newAdmin === "" ? undefined : message.newAdmin;
    return obj;
  },
  fromProtoMsg(message: MsgChangeAdminProtoMsg, useInterfaces: boolean = true): MsgChangeAdmin {
    return MsgChangeAdmin.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: MsgChangeAdmin): Uint8Array {
    return MsgChangeAdmin.encode(message).finish();
  },
  toProtoMsg(message: MsgChangeAdmin): MsgChangeAdminProtoMsg {
    return {
      typeUrl: "/osmosis.tokenfactory.v1beta1.MsgChangeAdmin",
      value: MsgChangeAdmin.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseMsgChangeAdminResponse(): MsgChangeAdminResponse {
  return {};
}
/**
 * MsgChangeAdminResponse defines the response structure for an executed
 * MsgChangeAdmin message.
 * @name MsgChangeAdminResponse
 * @package osmosis.tokenfactory.v1beta1
 * @see proto type: osmosis.tokenfactory.v1beta1.MsgChangeAdminResponse
 */
export const MsgChangeAdminResponse = {
  typeUrl: "/osmosis.tokenfactory.v1beta1.MsgChangeAdminResponse",
  aminoType: "osmosis/tokenfactory/change-admin-response",
  is(o: any): o is MsgChangeAdminResponse {
    return o && o.$typeUrl === MsgChangeAdminResponse.typeUrl;
  },
  isSDK(o: any): o is MsgChangeAdminResponseSDKType {
    return o && o.$typeUrl === MsgChangeAdminResponse.typeUrl;
  },
  isAmino(o: any): o is MsgChangeAdminResponseAmino {
    return o && o.$typeUrl === MsgChangeAdminResponse.typeUrl;
  },
  encode(_: MsgChangeAdminResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): MsgChangeAdminResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgChangeAdminResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_: any): MsgChangeAdminResponse {
    const obj = createBaseMsgChangeAdminResponse();
    return obj;
  },
  fromPartial(_: DeepPartial<MsgChangeAdminResponse>): MsgChangeAdminResponse {
    const message = createBaseMsgChangeAdminResponse();
    return message;
  },
  fromSDK(_: MsgChangeAdminResponseSDKType): MsgChangeAdminResponse {
    return {};
  },
  toSDK(_: MsgChangeAdminResponse): MsgChangeAdminResponseSDKType {
    const obj: any = {};
    return obj;
  },
  fromAmino(_: MsgChangeAdminResponseAmino): MsgChangeAdminResponse {
    const message = createBaseMsgChangeAdminResponse();
    return message;
  },
  toAmino(_: MsgChangeAdminResponse, useInterfaces: boolean = true): MsgChangeAdminResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromProtoMsg(message: MsgChangeAdminResponseProtoMsg, useInterfaces: boolean = true): MsgChangeAdminResponse {
    return MsgChangeAdminResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: MsgChangeAdminResponse): Uint8Array {
    return MsgChangeAdminResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgChangeAdminResponse): MsgChangeAdminResponseProtoMsg {
    return {
      typeUrl: "/osmosis.tokenfactory.v1beta1.MsgChangeAdminResponse",
      value: MsgChangeAdminResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseMsgSetDenomMetadata(): MsgSetDenomMetadata {
  return {
    sender: "",
    metadata: Metadata.fromPartial({})
  };
}
/**
 * MsgSetDenomMetadata is the sdk.Msg type for allowing an admin account to set
 * the denom's bank metadata
 * @name MsgSetDenomMetadata
 * @package osmosis.tokenfactory.v1beta1
 * @see proto type: osmosis.tokenfactory.v1beta1.MsgSetDenomMetadata
 */
export const MsgSetDenomMetadata = {
  typeUrl: "/osmosis.tokenfactory.v1beta1.MsgSetDenomMetadata",
  aminoType: "osmosis/tokenfactory/set-denom-metadata",
  is(o: any): o is MsgSetDenomMetadata {
    return o && (o.$typeUrl === MsgSetDenomMetadata.typeUrl || typeof o.sender === "string" && Metadata.is(o.metadata));
  },
  isSDK(o: any): o is MsgSetDenomMetadataSDKType {
    return o && (o.$typeUrl === MsgSetDenomMetadata.typeUrl || typeof o.sender === "string" && Metadata.isSDK(o.metadata));
  },
  isAmino(o: any): o is MsgSetDenomMetadataAmino {
    return o && (o.$typeUrl === MsgSetDenomMetadata.typeUrl || typeof o.sender === "string" && Metadata.isAmino(o.metadata));
  },
  encode(message: MsgSetDenomMetadata, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.metadata !== undefined) {
      Metadata.encode(message.metadata, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): MsgSetDenomMetadata {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetDenomMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.metadata = Metadata.decode(reader, reader.uint32(), useInterfaces);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgSetDenomMetadata {
    const obj = createBaseMsgSetDenomMetadata();
    if (isSet(object.sender)) obj.sender = String(object.sender);
    if (isSet(object.metadata)) obj.metadata = Metadata.fromJSON(object.metadata);
    return obj;
  },
  fromPartial(object: DeepPartial<MsgSetDenomMetadata>): MsgSetDenomMetadata {
    const message = createBaseMsgSetDenomMetadata();
    message.sender = object.sender ?? "";
    if (object.metadata !== undefined && object.metadata !== null) {
      message.metadata = Metadata.fromPartial(object.metadata);
    }
    return message;
  },
  fromSDK(object: MsgSetDenomMetadataSDKType): MsgSetDenomMetadata {
    return {
      sender: object?.sender,
      metadata: object.metadata ? Metadata.fromSDK(object.metadata) : undefined
    };
  },
  toSDK(message: MsgSetDenomMetadata): MsgSetDenomMetadataSDKType {
    const obj: any = {};
    obj.sender = message.sender;
    message.metadata !== undefined && (obj.metadata = message.metadata ? Metadata.toSDK(message.metadata) : undefined);
    return obj;
  },
  fromAmino(object: MsgSetDenomMetadataAmino): MsgSetDenomMetadata {
    const message = createBaseMsgSetDenomMetadata();
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = object.sender;
    }
    if (object.metadata !== undefined && object.metadata !== null) {
      message.metadata = Metadata.fromAmino(object.metadata);
    }
    return message;
  },
  toAmino(message: MsgSetDenomMetadata, useInterfaces: boolean = true): MsgSetDenomMetadataAmino {
    const obj: any = {};
    obj.sender = message.sender === "" ? undefined : message.sender;
    obj.metadata = message.metadata ? Metadata.toAmino(message.metadata, useInterfaces) : undefined;
    return obj;
  },
  fromProtoMsg(message: MsgSetDenomMetadataProtoMsg, useInterfaces: boolean = true): MsgSetDenomMetadata {
    return MsgSetDenomMetadata.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: MsgSetDenomMetadata): Uint8Array {
    return MsgSetDenomMetadata.encode(message).finish();
  },
  toProtoMsg(message: MsgSetDenomMetadata): MsgSetDenomMetadataProtoMsg {
    return {
      typeUrl: "/osmosis.tokenfactory.v1beta1.MsgSetDenomMetadata",
      value: MsgSetDenomMetadata.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(MsgSetDenomMetadata.typeUrl)) {
      return;
    }
    Metadata.registerTypeUrl();
  }
};
function createBaseMsgSetDenomMetadataResponse(): MsgSetDenomMetadataResponse {
  return {};
}
/**
 * MsgSetDenomMetadataResponse defines the response structure for an executed
 * MsgSetDenomMetadata message.
 * @name MsgSetDenomMetadataResponse
 * @package osmosis.tokenfactory.v1beta1
 * @see proto type: osmosis.tokenfactory.v1beta1.MsgSetDenomMetadataResponse
 */
export const MsgSetDenomMetadataResponse = {
  typeUrl: "/osmosis.tokenfactory.v1beta1.MsgSetDenomMetadataResponse",
  aminoType: "osmosis/tokenfactory/set-denom-metadata-response",
  is(o: any): o is MsgSetDenomMetadataResponse {
    return o && o.$typeUrl === MsgSetDenomMetadataResponse.typeUrl;
  },
  isSDK(o: any): o is MsgSetDenomMetadataResponseSDKType {
    return o && o.$typeUrl === MsgSetDenomMetadataResponse.typeUrl;
  },
  isAmino(o: any): o is MsgSetDenomMetadataResponseAmino {
    return o && o.$typeUrl === MsgSetDenomMetadataResponse.typeUrl;
  },
  encode(_: MsgSetDenomMetadataResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): MsgSetDenomMetadataResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetDenomMetadataResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_: any): MsgSetDenomMetadataResponse {
    const obj = createBaseMsgSetDenomMetadataResponse();
    return obj;
  },
  fromPartial(_: DeepPartial<MsgSetDenomMetadataResponse>): MsgSetDenomMetadataResponse {
    const message = createBaseMsgSetDenomMetadataResponse();
    return message;
  },
  fromSDK(_: MsgSetDenomMetadataResponseSDKType): MsgSetDenomMetadataResponse {
    return {};
  },
  toSDK(_: MsgSetDenomMetadataResponse): MsgSetDenomMetadataResponseSDKType {
    const obj: any = {};
    return obj;
  },
  fromAmino(_: MsgSetDenomMetadataResponseAmino): MsgSetDenomMetadataResponse {
    const message = createBaseMsgSetDenomMetadataResponse();
    return message;
  },
  toAmino(_: MsgSetDenomMetadataResponse, useInterfaces: boolean = true): MsgSetDenomMetadataResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromProtoMsg(message: MsgSetDenomMetadataResponseProtoMsg, useInterfaces: boolean = true): MsgSetDenomMetadataResponse {
    return MsgSetDenomMetadataResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: MsgSetDenomMetadataResponse): Uint8Array {
    return MsgSetDenomMetadataResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgSetDenomMetadataResponse): MsgSetDenomMetadataResponseProtoMsg {
    return {
      typeUrl: "/osmosis.tokenfactory.v1beta1.MsgSetDenomMetadataResponse",
      value: MsgSetDenomMetadataResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};