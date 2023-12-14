import { TCartState, TProduct, TProductID } from "@/types";
import { createSlice } from "@reduxjs/toolkit";

const initialState: TCartState = {
  cart: {},
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, { payload }: { payload: TProduct }) => {
      if (Object.keys(state.cart).includes(payload.id.toString())) {
        state.cart[payload.id].count++;
      } else
        state.cart = {
          ...state.cart,
          [payload.id]: { count: 1, name: payload.name, price: payload.price },
        };
    },
    decrimentInCart: (state, { payload }: { payload: TProductID }) => {
      if (
        Object.keys(state.cart).includes(payload.toString()) &&
        state.cart[payload].count > 1
      ) {
        state.cart[payload].count--;
      } else delete state.cart[payload];
    },
    deleteFromCart: (state, { payload }: { payload: TProductID }) => {
      delete state.cart[payload];
    },
  },
});
