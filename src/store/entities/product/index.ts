import { createSlice } from "@reduxjs/toolkit";
import LOADING_STATUS from "@/fixtures/LOADING_STATUS";
import { TProduct, TProductState } from "@/types";

const initialState: TProductState = {
  entities: {},
  ids: [],
  pages: {},
  filter: { field: "", type: "" },

  loadingStatus: LOADING_STATUS.idle,
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    startLoading: (state) => {
      state.loadingStatus = LOADING_STATUS.inProgress;
    },
    finishLoading: (state, { payload }) => {
      const { products, currentPage } = payload;
      state.entities = products.reduce(
        (acc: { [id: number]: TProduct }, product: TProduct) => {
          acc[product.id] = product;
          return acc;
        },
        { ...state.entities }
      );
      const ids = products.map(({ id }: TProduct) => id);
      state.ids = [...state.ids, ids];
      state.loadingStatus = LOADING_STATUS.finished;
      state.pages[currentPage.categorySlug + currentPage.page] = ids;
    },
    failLoading: (state) => {
      state.loadingStatus = LOADING_STATUS.failed;
    },
    setFitler: (state, { payload }) => {
      state.pages = {};
      state.filter = { ...state.filter, ...payload };
    },
  },
});
