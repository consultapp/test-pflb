import Layout from "@/components/Layout/Layout";
import Loading from "@/components/Loading.ts/Loading";
import PaginationContainer from "@/containers/PaginationContainer/PaginationContainer";
import ProductsContainer from "@/containers/ProductsContainer/ProductsContainer";
import CATEGORY_TYPES from "@/fixtures/CATEGORY_TYPES";
import { pageSlice } from "@/store/entities/page";
import { selectIsPageLoading } from "@/store/entities/page/selectors";
import { loadPagesCount } from "@/store/entities/page/thunk/loadPagesCount";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function CategoryPage() {
  const { categorySlug } = useParams();
  const dispatch = useAppDispatch();
  const isLoading = useAppSelector(selectIsPageLoading);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(loadPagesCount());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);

  useEffect(() => {
    if (categorySlug && categorySlug in CATEGORY_TYPES) {
      dispatch(pageSlice.actions.setCategory(categorySlug));
    } else {
      navigate("/notFound");
    }
  }, [dispatch, categorySlug]);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <Layout>
      <h1>Category Page</h1>
      <ProductsContainer />
      <PaginationContainer />
    </Layout>
  );
}
