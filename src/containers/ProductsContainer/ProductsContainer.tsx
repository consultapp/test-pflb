import Loading from "@/components/Loading.ts/Loading";
import { selectPageCurrent } from "@/store/entities/page/selectors";
import {
  selectIsProductLoading,
  selectProductIdsByPage,
} from "@/store/entities/product/selectors";
import { loadProductsByPageIfNotExisted } from "@/store/entities/product/thunk/loadProductsByPageIfNotExisted";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { useEffect } from "react";
import Products from "@/components/Products/Products";

export default function ProductsContainer() {
  const dispatch = useAppDispatch();
  const currentPage = useAppSelector(selectPageCurrent);
  const isLoading = useAppSelector(selectIsProductLoading);
  const productIds = useAppSelector((state) =>
    selectProductIdsByPage(state, currentPage)
  );

  useEffect(() => {
    if (currentPage.categorySlug && currentPage.page)
      dispatch(loadProductsByPageIfNotExisted());
  }, [dispatch, currentPage]);

  if (isLoading) {
    return <Loading />;
  }

  if (!productIds?.length) return null;

  return <Products productIds={productIds} />;
}
