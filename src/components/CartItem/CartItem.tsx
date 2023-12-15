import { selectProductById } from "@/store/entities/product/selectors";
import { useAppSelector } from "@/store/hooks";
import { TProductID } from "@/types";
import styles from "./style.module.scss";
import CartButtons from "../CartButtons/CartButtons";
import CartRemoveButton from "../CartRemoveButton/CartRemoveButton";

type Props = { id: TProductID };

export default function CartItem({ id }: Props) {
  const product = useAppSelector((state) => selectProductById(state, id));

  if (!product) return <div>Product was not found</div>;

  return (
    <div className={styles.root}>
      <div className={styles.root__name}>{product.name}</div>
      <CartButtons id={product.id} />
      <CartRemoveButton id={product.id} />
    </div>
  );
}
