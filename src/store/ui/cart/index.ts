import { TCartState, TProduct, TProductID } from "@/types";
import { createSlice } from "@reduxjs/toolkit";

const initialState: TCartState = {
  cart: {},
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, { payload }: { payload: TProductID }) => {
      if (Object.keys(state.cart).includes(payload.toString())) {
        state.cart[payload]++;
      } else state.cart[payload] = 1;
    },
    decrimentInCart: (state, { payload }: { payload: TProductID }) => {
      if (
        Object.keys(state.cart).includes(payload.toString()) &&
        state.cart[payload] > 1
      ) {
        state.cart[payload]--;
      } else delete state.cart[payload];
    },
    deleteFromCart: (state, { payload }: { payload: TProductID }) => {
      delete state.cart[payload];
    },
  },
});
