import { buildUseQuery } from "../../../react-query";
import type { QueryBalanceRequest, QueryBalanceResponse, QueryOwnerRequest, QueryOwnerResponse, QuerySupplyRequest, QuerySupplyResponse, QueryNFTsRequest, QueryNFTsResponse, QueryNFTRequest, QueryNFTResponse, QueryClassRequest, QueryClassResponse, QueryClassesRequest, QueryClassesResponse } from "./query";
import { getBalance, getOwner, getSupply, getNFTs, getNFT, getClass, getClasses } from "./query.rpc.func";
/**
 * Balance queries the number of NFTs of a given class owned by the owner, same as balanceOf in ERC721
 * @name useGetBalance
 * @package cosmos.nft.v1beta1
 * @see proto service: cosmos.nft.v1beta1.Balance
 */
export const useGetBalance = buildUseQuery<QueryBalanceRequest, QueryBalanceResponse>({
  builderQueryFn: getBalance,
  queryKeyPrefix: "BalanceQuery"
});
/**
 * Owner queries the owner of the NFT based on its class and id, same as ownerOf in ERC721
 * @name useGetOwner
 * @package cosmos.nft.v1beta1
 * @see proto service: cosmos.nft.v1beta1.Owner
 */
export const useGetOwner = buildUseQuery<QueryOwnerRequest, QueryOwnerResponse>({
  builderQueryFn: getOwner,
  queryKeyPrefix: "OwnerQuery"
});
/**
 * Supply queries the number of NFTs from the given class, same as totalSupply of ERC721.
 * @name useGetSupply
 * @package cosmos.nft.v1beta1
 * @see proto service: cosmos.nft.v1beta1.Supply
 */
export const useGetSupply = buildUseQuery<QuerySupplyRequest, QuerySupplyResponse>({
  builderQueryFn: getSupply,
  queryKeyPrefix: "SupplyQuery"
});
/**
 * NFTs queries all NFTs of a given class or owner,choose at least one of the two, similar to tokenByIndex in
 * ERC721Enumerable
 * @name useGetNFTs
 * @package cosmos.nft.v1beta1
 * @see proto service: cosmos.nft.v1beta1.NFTs
 */
export const useGetNFTs = buildUseQuery<QueryNFTsRequest, QueryNFTsResponse>({
  builderQueryFn: getNFTs,
  queryKeyPrefix: "NFTsQuery"
});
/**
 * NFT queries an NFT based on its class and id.
 * @name useGetNFT
 * @package cosmos.nft.v1beta1
 * @see proto service: cosmos.nft.v1beta1.NFT
 */
export const useGetNFT = buildUseQuery<QueryNFTRequest, QueryNFTResponse>({
  builderQueryFn: getNFT,
  queryKeyPrefix: "NFTQuery"
});
/**
 * Class queries an NFT class based on its id
 * @name useGetClass
 * @package cosmos.nft.v1beta1
 * @see proto service: cosmos.nft.v1beta1.Class
 */
export const useGetClass = buildUseQuery<QueryClassRequest, QueryClassResponse>({
  builderQueryFn: getClass,
  queryKeyPrefix: "ClassQuery"
});
/**
 * Classes queries all NFT classes
 * @name useGetClasses
 * @package cosmos.nft.v1beta1
 * @see proto service: cosmos.nft.v1beta1.Classes
 */
export const useGetClasses = buildUseQuery<QueryClassesRequest, QueryClassesResponse>({
  builderQueryFn: getClasses,
  queryKeyPrefix: "ClassesQuery"
});