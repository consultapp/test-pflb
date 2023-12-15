import { RootState } from "@/store";
import { TProductID } from "@/types";
import { selectProductById } from "@/store/entities/product/selectors";
import { createSelector } from "@reduxjs/toolkit";

export const selectCartModule = (state: RootState) => state.cart;
export const selectCartCart = (state: RootState) =>
  selectCartModule(state).cart;

export const selectCartIds = createSelector([selectCartCart], (cart) => {
  return Object.keys(cart).map((item) => parseInt(item));
});

// export const selectCartIds = (state: RootState) =>
//   Object.keys(selectCartCart(state)).map((item) => parseInt(item));

export const selectCartCountById = (state: RootState, productId: TProductID) =>
  selectCartCart(state)[productId];

export const selectCartAmount = (state: RootState) =>
  selectCartIds(state)
    .reduce((acc, id) => {
      acc +=
        selectProductById(state, id).price * selectCartCountById(state, id);
      return acc;
    }, 0)
    .toFixed(2);
