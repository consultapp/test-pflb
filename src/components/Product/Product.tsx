import { TProduct } from "@/types";
import styles from "./style.module.scss";
import image from "@/assets/no_image.png";
import CartButtons from "../CartButtons/CartButtons";

type Props = { product: TProduct };

export default function Product({ product }: Props) {
  return (
    <div className={styles.product} key={product.id}>
      <img className={styles.product__Image} src={image} alt={product.name} />
      <div className={styles.product__Details}>
        <div className={styles.product__Name}>{product.name}</div>
        <div className={styles.product__Price}>${product.price}</div>
        <div className={styles.product__Description}>{product.description}</div>
      </div>
      <CartButtons id={product.id} />
    </div>
  );
}
