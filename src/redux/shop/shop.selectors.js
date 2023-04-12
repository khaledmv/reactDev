import { createSelector } from "reselect";

const shopSelector = state => state.shop;

const COLLECTION_ID_MAP = {
    hats: 1,
    sneakers: 2,
    jackets: 3,
    womens: 4,
    mens: 5
  
  }

export const selectShopCollections = createSelector(
    [shopSelector],
    shop => 
    shop.collections
)

export const selectCollection = collectionParam => createSelector(
    [selectShopCollections],
    collections => 
    collections.find(collection => collection.id === COLLECTION_ID_MAP[collectionParam])
  )