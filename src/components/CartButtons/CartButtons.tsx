import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { cartSlice } from "@/store/ui/cart";
import { selectCartCountById } from "@/store/ui/cart/selectors";
import { TProductID } from "@/types";
import styles from "./style.module.scss";

type Props = { id: TProductID };

export default function CartButtons({ id }: Props) {
  const dispatch = useAppDispatch();
  const count = useAppSelector((state) => selectCartCountById(state, id));
  const handlePlus = () => {
    dispatch(cartSlice.actions.addToCart(id));
  };
  const handleMinus = () => {
    dispatch(cartSlice.actions.decrimentInCart(id));
  };

  return (
    <div className={styles.root}>
      <button onClick={handleMinus}>-</button>
      <span className={styles.root__count}>{count ?? 0}</span>
      <button onClick={handlePlus}>+</button>
    </div>
  );
}
