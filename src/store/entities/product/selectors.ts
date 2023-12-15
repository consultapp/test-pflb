import LOADING_STATUS from "@/fixtures/LOADING_STATUS";
import { RootState } from "@/store";
import { TCurrentPage, TProductID } from "@/types";

export const selectProductModule = (state: RootState) => state.product;

export const selectProductById = (state: RootState, productId: TProductID) =>
  selectProductModule(state).entities[productId];

export const selectProductIds = (state: RootState) =>
  selectProductModule(state).ids;

export const selectProducts = (state: RootState) =>
  Object.values(selectProductModule(state).entities);

export const selectProductLoadingStatus = (state: RootState) =>
  selectProductModule(state).loadingStatus;

export const selectIsProductLoading = (state: RootState) =>
  selectProductLoadingStatus(state) === LOADING_STATUS.inProgress;

export const selectProductIdsByPage = (state: RootState, page: TCurrentPage) =>
  selectProductModule(state).pages[page.categorySlug + page.page];

//Filter
export const selectProductFilter = (state: RootState) =>
  selectProductModule(state).filter;
