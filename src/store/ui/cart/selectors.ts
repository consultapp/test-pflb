import { RootState } from "@/store";
import { TProductID } from "@/types";

export const selectCartModule = (state: RootState) => state.cart;
export const selectCartCart = (state: RootState) =>
  selectCartModule(state).cart;

export const selectCartIds = (state: RootState) =>
  Object.keys(selectCartCart(state)).map((item) => parseInt(item));

export const selectCartCountById = (state: RootState, productId: TProductID) =>
  selectCartCart(state)[productId];
