import { createSlice } from "@reduxjs/toolkit";
import LOADING_STATUS from "@/fixtures/LOADING_STATUS";
import { TPageState } from "@/types";

const initialState: TPageState = {
  currentPage: {
    categorySlug: "",
    page: 1,
  },
  pagesCount: {},
  loadingStatus: LOADING_STATUS.idle,
};

export const pageSlice = createSlice({
  name: "page",
  initialState,
  reducers: {
    startLoading: (state) => {
      state.loadingStatus = LOADING_STATUS.inProgress;
    },
    finishLoading: (state, { payload }) => {
      state.pagesCount = payload;
      state.loadingStatus = LOADING_STATUS.finished;
    },
    failLoading: (state) => {
      state.loadingStatus = LOADING_STATUS.failed;
    },

    setCategory: (state, { payload }) => {
      state.currentPage = { categorySlug: payload, page: 1 };
    },
    setPage: (state, { payload }) => {
      state.currentPage = { ...state.currentPage, page: payload };
    },
  },
});
