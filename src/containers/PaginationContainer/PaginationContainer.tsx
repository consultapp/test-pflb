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
import { redirect, useNavigate, useParams } from "react-router-dom";

export default function PaginationContainer() {
  const dispatch = useAppDispatch();
  const loading = useAppSelector(selectIsPageLoading);
  const currentPage = useAppSelector(selectPageCurrent);
  const pagesCount = useSelector(selectPageCurrentCount);
  const { page } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(loadPagesCount());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);

  useEffect(() => {
    const p = parseInt(page ?? "");
    console.log("p", p);
    if (p && p > 0 && p <= pagesCount) {
      dispatch(pageSlice.actions.setPage(p));
    } else {
      if (page) navigate("/notFound");
    }
  }, [pagesCount, page]);

  if (loading) {
    return <Loading />;
  }

  const changeHandler = (n: number) => {
    console.log("n", n);
    dispatch(pageSlice.actions.setPage(n));
  };

  return (
    <Pagination
      pages={pagesCount ?? 1}
      current={currentPage.page ?? 1}
      changeHandler={changeHandler}
    />
  );
}
