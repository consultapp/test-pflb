import { TProductID } from "@/types";
import styles from "./style.module.scss";
import ProductContainer from "@/containers/ProductContainer/ProductContainer";

type Props = { productIds: TProductID[] };

export default function Products({ productIds }: Props) {
  if (!productIds?.length) throw Error("no products");
  return (
    <div className={styles.products}>
      {productIds.map((productId) => (
        <ProductContainer productId={productId} key={productId} />
      ))}
    </div>
  );
}
