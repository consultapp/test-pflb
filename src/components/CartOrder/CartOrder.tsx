import { useAppSelector } from "@/store/hooks";
import { selectCartAmount } from "@/store/ui/cart/selectors";
import styles from "./style.module.scss";

export default function CartOrder() {
  const amount = useAppSelector(selectCartAmount);

  return parseInt(amount) ? (
    <div className={styles.root}>
      <div className={styles.root__amount}>Total Amount: ${amount}</div>
      <button className={styles.root__order}>Order</button>
    </div>
  ) : (
    <div className={styles.root}>Empty</div>
  );
}
