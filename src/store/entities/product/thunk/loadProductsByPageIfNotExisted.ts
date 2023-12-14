import { RootState } from "@/store";
import { Dispatch } from "redux";
import { productSlice } from "..";
import { selectProductIdsByPage } from "../selectors";
import { TCurrentPage } from "@/types";

export const loadProductsByPageIfNotExisted =
  (currentPage: TCurrentPage) =>
  (dispatch: Dispatch, getState: () => RootState) => {
    if (selectProductIdsByPage(getState(), currentPage)) {
      return;
    }

    dispatch(productSlice.actions.startLoading());

    const url = new URL(`${import.meta.env.VITE_API_URL}/products`);
    url.searchParams.set("_page", (currentPage.page ?? "").toString());
    url.searchParams.set("categorySlug", currentPage.categorySlug);
    url.searchParams.set("_limit", import.meta.env.VITE_PROD_PER_PAGE);

    fetch(url)
      .then((response) => response.json())
      .then((products) =>
        dispatch(productSlice.actions.finishLoading({ products, currentPage }))
      )
      .catch(() => dispatch(productSlice.actions.failLoading()));
  };
