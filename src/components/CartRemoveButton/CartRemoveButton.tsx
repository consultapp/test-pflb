import { useAppDispatch } from "@/store/hooks";
import { cartSlice } from "@/store/ui/cart";
import { TProductID } from "@/types";
import styles from "./style.module.scss";

type Props = { id: TProductID };

export default function CartRemoveButton({ id }: Props) {
  const dispatch = useAppDispatch();
  const handle = () => {
    dispatch(cartSlice.actions.deleteFromCart(id));
  };

  return (
    <button className={styles.root} onClick={handle}>
      <svg
        height="15"
        viewBox="0 0 32 32"
        width="15"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="m30 6.749h-5.331l-3.628-5.442c-.228-.337-.609-.556-1.041-.557h-8c-.432 0-.813.219-1.037.552l-.003.004-3.628 5.442h-5.332c-.69 0-1.25.56-1.25 1.25s.56 1.25 1.25 1.25h2.858l1.897 20.864c.06.64.594 1.137 1.245 1.137h.001 16c.65 0 1.184-.497 1.243-1.132v-.005l1.897-20.864h2.859c.69 0 1.25-.56 1.25-1.25s-.56-1.25-1.25-1.25zm-17.331-3.499h6.661l2.333 3.499h-11.327zm10.19 25.5h-13.718l-1.772-19.5 17.262-.001zm-11.859-18c-.69 0-1.25.56-1.25 1.25v14c0 .69.56 1.25 1.25 1.25s1.25-.56 1.25-1.25v-14c0-.69-.56-1.25-1.25-1.25zm5 0c-.69 0-1.25.56-1.25 1.25v14c0 .69.56 1.25 1.25 1.25s1.25-.56 1.25-1.25v-14c0-.69-.56-1.25-1.25-1.25zm5 0c-.69 0-1.25.56-1.25 1.25v14c0 .69.56 1.25 1.25 1.25s1.25-.56 1.25-1.25v-14c0-.69-.56-1.25-1.25-1.25z" />
      </svg>
    </button>
  );
}
