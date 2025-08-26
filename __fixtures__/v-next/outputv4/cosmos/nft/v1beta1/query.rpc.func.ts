import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../base/query/v1beta1/pagination.js";
import { NFT, NFTSDKType, Class, ClassSDKType } from "./nft.js";
import { EndpointOrRpc, buildQuery } from "../../../helper-func-types.js";
import { QueryBalanceRequest, QueryBalanceRequestSDKType, QueryBalanceResponse, QueryBalanceResponseSDKType, QueryOwnerRequest, QueryOwnerRequestSDKType, QueryOwnerResponse, QueryOwnerResponseSDKType, QuerySupplyRequest, QuerySupplyRequestSDKType, QuerySupplyResponse, QuerySupplyResponseSDKType, QueryNFTsRequest, QueryNFTsRequestSDKType, QueryNFTsResponse, QueryNFTsResponseSDKType, QueryNFTRequest, QueryNFTRequestSDKType, QueryNFTResponse, QueryNFTResponseSDKType, QueryClassRequest, QueryClassRequestSDKType, QueryClassResponse, QueryClassResponseSDKType, QueryClassesRequest, QueryClassesRequestSDKType, QueryClassesResponse, QueryClassesResponseSDKType } from "./query.js";
/**
 * Balance queries the number of NFTs of a given class owned by the owner, same as balanceOf in ERC721
 * @name getBalance
 * @package cosmos.nft.v1beta1
 * @see proto service: cosmos.nft.v1beta1.Balance
 */
export const getBalance = buildQuery<QueryBalanceRequest, QueryBalanceResponse>({
  encode: QueryBalanceRequest.encode,
  decode: QueryBalanceResponse.decode,
  service: "cosmos.nft.v1beta1.Query",
  method: "Balance"
});
/**
 * Owner queries the owner of the NFT based on its class and id, same as ownerOf in ERC721
 * @name getOwner
 * @package cosmos.nft.v1beta1
 * @see proto service: cosmos.nft.v1beta1.Owner
 */
export const getOwner = buildQuery<QueryOwnerRequest, QueryOwnerResponse>({
  encode: QueryOwnerRequest.encode,
  decode: QueryOwnerResponse.decode,
  service: "cosmos.nft.v1beta1.Query",
  method: "Owner"
});
/**
 * Supply queries the number of NFTs from the given class, same as totalSupply of ERC721.
 * @name getSupply
 * @package cosmos.nft.v1beta1
 * @see proto service: cosmos.nft.v1beta1.Supply
 */
export const getSupply = buildQuery<QuerySupplyRequest, QuerySupplyResponse>({
  encode: QuerySupplyRequest.encode,
  decode: QuerySupplyResponse.decode,
  service: "cosmos.nft.v1beta1.Query",
  method: "Supply"
});
/**
 * NFTs queries all NFTs of a given class or owner,choose at least one of the two, similar to tokenByIndex in
 * ERC721Enumerable
 * @name getNFTs
 * @package cosmos.nft.v1beta1
 * @see proto service: cosmos.nft.v1beta1.NFTs
 */
export const getNFTs = buildQuery<QueryNFTsRequest, QueryNFTsResponse>({
  encode: QueryNFTsRequest.encode,
  decode: QueryNFTsResponse.decode,
  service: "cosmos.nft.v1beta1.Query",
  method: "NFTs"
});
/**
 * NFT queries an NFT based on its class and id.
 * @name getNFT
 * @package cosmos.nft.v1beta1
 * @see proto service: cosmos.nft.v1beta1.NFT
 */
export const getNFT = buildQuery<QueryNFTRequest, QueryNFTResponse>({
  encode: QueryNFTRequest.encode,
  decode: QueryNFTResponse.decode,
  service: "cosmos.nft.v1beta1.Query",
  method: "NFT"
});
/**
 * Class queries an NFT class based on its id
 * @name getClass
 * @package cosmos.nft.v1beta1
 * @see proto service: cosmos.nft.v1beta1.Class
 */
export const getClass = buildQuery<QueryClassRequest, QueryClassResponse>({
  encode: QueryClassRequest.encode,
  decode: QueryClassResponse.decode,
  service: "cosmos.nft.v1beta1.Query",
  method: "Class"
});
/**
 * Classes queries all NFT classes
 * @name getClasses
 * @package cosmos.nft.v1beta1
 * @see proto service: cosmos.nft.v1beta1.Classes
 */
export const getClasses = buildQuery<QueryClassesRequest, QueryClassesResponse>({
  encode: QueryClassesRequest.encode,
  decode: QueryClassesResponse.decode,
  service: "cosmos.nft.v1beta1.Query",
  method: "Classes"
});