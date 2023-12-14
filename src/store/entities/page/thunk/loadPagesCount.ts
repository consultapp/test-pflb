import { Dispatch } from "redux";
import { selectPagesCount } from "../selectors";
import { pageSlice } from "..";
import { RootState } from "@/store";

export const loadPagesCount =
  () => (dispatch: Dispatch, getState: () => RootState) => {
    if (Object.keys(selectPagesCount(getState())).length) {
      return;
    }

    dispatch(pageSlice.actions.startLoading());
    fetch(`${import.meta.env.VITE_API_URL}/pagesCount`)
      .then((response) => response.json())
      .then((pagesCount) =>
        dispatch(pageSlice.actions.finishLoading(pagesCount))
      )
      .catch(() => dispatch(pageSlice.actions.failLoading()));
  };
