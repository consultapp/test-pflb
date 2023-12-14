import Loading from "@/components/Loading.ts/Loading";
import Pagination from "@/components/Pagination/Pagination";
import { pageSlice } from "@/store/entities/page";
import {
  selectIsPageLoading,
  selectPageCurrentCount,
  selectPageCurrent,
} from "@/store/entities/page/selectors";
import { loadPagesCount } from "@/store/entities/page/thunk/loadPagesCount";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

export default function PaginationContainer() {
  const dispatch = useAppDispatch();
  const loading = useAppSelector(selectIsPageLoading);
  const currentPage = useAppSelector(selectPageCurrent);
  const pagesCount = useSelector(selectPageCurrentCount);
  const { page } = useParams();

  useEffect(() => {
    dispatch(loadPagesCount());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);

  useEffect(() => {
    const p = parseInt(page ?? "");
    if (p && p > 0 && p <= pagesCount) {
      dispatch(pageSlice.actions.setPage(p));
    }
  }, [pagesCount, page, dispatch]);

  if (loading) {
    return <Loading />;
  }

  return <Pagination pages={pagesCount ?? 1} current={currentPage} />;
}
