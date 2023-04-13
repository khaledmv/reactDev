import ShopActionTypes from "./shop.types";
export const updateCollections = collectionmap => ({
    type: ShopActionTypes.UPDATE_COLLECTION,
    payload: collectionmap
});