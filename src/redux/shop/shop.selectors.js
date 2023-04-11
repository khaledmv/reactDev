import { createSelector } from "reselect";

const shopSelector = state => state.shop;

export const selectShopCollections = createSelector(
    [shopSelector],
    shop => 
    shop.collections
)