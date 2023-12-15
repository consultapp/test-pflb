import { RootState } from "@/store";
import { Dispatch } from "redux";
import { productSlice } from "..";
import { selectProductFilter, selectProductIdsByPage } from "../selectors";
import { selectPageCurrent } from "../../page/selectors";

export const loadProductsByPageIfNotExisted =
  () => (dispatch: Dispatch, getState: () => RootState) => {
    const currentPage = selectPageCurrent(getState());

    if (selectProductIdsByPage(getState(), currentPage)) {
      return;
    }
    console.log("Network Usage (loadProductsByPageIfNotExisted)");

    dispatch(productSlice.actions.startLoading());

    const filter = selectProductFilter(getState());

    const url = new URL(`${import.meta.env.VITE_API_URL}/products`);
    url.searchParams.set("_page", (currentPage.page ?? "").toString());
    url.searchParams.set("categorySlug", currentPage.categorySlug);
    url.searchParams.set("_limit", import.meta.env.VITE_PROD_PER_PAGE);
    if (filter.field) {
      url.searchParams.set("_sort", filter.field);
      if (filter.type) url.searchParams.set("_order", filter.type);
    }

    fetch(url)
      .then((response) => response.json())
      .then((products) =>
        dispatch(productSlice.actions.finishLoading({ products, currentPage }))
      )
      .catch(() => dispatch(productSlice.actions.failLoading()));
  };
