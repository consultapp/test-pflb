import LOADING_STATUS from "@/fixtures/LOADING_STATUS";
import { RootState } from "@/store";

export const selectPageModule = (state: RootState) => state.page;

export const selectPagesCount = (state: RootState) =>
  selectPageModule(state).pagesCount;

export const selectPageCurrent = (state: RootState) =>
  selectPageModule(state).currentPage;

export const selectPageCountByCategorySlug = (
  state: RootState,
  { slug }: { slug: string }
) => selectPagesCount(state)[slug];

export const selectPageCurrentCount = (state: RootState) =>
  selectPagesCount(state)[selectPageCurrent(state).categorySlug];

// Status
export const selectPageLoadingStatus = (state: RootState) =>
  selectPageModule(state).loadingStatus;

export const selectIsPageLoading = (state: RootState) =>
  selectPageLoadingStatus(state) === LOADING_STATUS.inProgress;
