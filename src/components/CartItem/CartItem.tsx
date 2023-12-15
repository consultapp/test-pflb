import { selectProductById } from "@/store/entities/product/selectors";
import { useAppSelector } from "@/store/hooks";
import { TProductID } from "@/types";
import styles from "./style.module.scss";
import CartButtons from "../CartButtons/CartButtons";
import CartRemoveButton from "../CartRemoveButton/CartRemoveButton";
import { selectCartCountById } from "@/store/ui/cart/selectors";

type Props = { id: TProductID };

export default function CartItem({ id }: Props) {
  const product = useAppSelector((state) => selectProductById(state, id));
  const count = useAppSelector((state) => selectCartCountById(state, id));

  if (!product) return <div>Product was not found</div>;

  return (
    <div className={styles.root}>
      <div className={styles.root__name}>{product.name}</div>
      <div>{(product.price * count).toFixed(2)}</div>
      <CartButtons id={product.id} />
      <CartRemoveButton id={product.id} />
    </div>
  );
}
