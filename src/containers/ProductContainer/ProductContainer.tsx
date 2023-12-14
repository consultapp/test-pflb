import Loading from "@/components/Loading.ts/Loading";
import Product from "@/components/Product/Product";
import {
  selectIsProductLoading,
  selectProductById,
} from "@/store/entities/product/selectors";
import { useAppSelector } from "@/store/hooks";
import { TProductID } from "@/types";

export default function ProductContainer({
  productId,
}: {
  productId: TProductID;
}) {
  const isLoading = useAppSelector(selectIsProductLoading);
  const product = useAppSelector((state) =>
    selectProductById(state, productId)
  );

  if (isLoading) {
    return <Loading />;
  }

  if (!product) return null;

  return <Product product={product} />;
}
