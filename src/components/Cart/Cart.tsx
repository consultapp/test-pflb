import { useAppSelector } from "@/store/hooks";
import styles from "./style.module.scss";
import { selectCartIds } from "@/store/ui/cart/selectors";
import CartItem from "../CartItem/CartItem";

type Props = {
  open: boolean;
  toggle: () => void;
};

export default function Cart({ open, toggle }: Props) {
  const productIds = useAppSelector(selectCartIds);

  return (
    <div className={styles.root} data-open={open}>
      <div className={styles.root__toggleButton}>
        {!open && (
          <svg
            height="25"
            viewBox="0 0 902.86 902.86"
            width="25"
            xmlns="http://www.w3.org/2000/svg"
            className={styles.root__open}
            onClick={toggle}
          >
            <path d="m671.504 577.829 110.485-432.609h120.871v-68h-173.686l-26.046 101.98-703.128-.503 74.753 399.129h596.751zm14.262-330.641-67.077 262.64h-487.49l-49.271-263.072z" />
            <path d="m578.418 825.641c59.961 0 108.743-48.783 108.743-108.744s-48.782-108.742-108.743-108.742h-409.701c-59.961 0-108.744 48.781-108.744 108.742s48.782 108.744 108.744 108.744 108.743-48.783 108.743-108.744c0-14.4-2.821-28.152-7.927-40.742h208.069c-5.107 12.59-7.928 26.342-7.928 40.742.001 59.961 48.783 108.744 108.744 108.744zm-368.958-108.744c0 22.467-18.277 40.744-40.743 40.744s-40.744-18.277-40.744-40.744c0-22.465 18.277-40.742 40.744-40.742 22.466-0 40.743 18.277 40.743 40.742zm409.702 0c0 22.467-18.277 40.744-40.743 40.744s-40.743-18.277-40.743-40.744c0-22.465 18.277-40.742 40.743-40.742s40.743 18.277 40.743 40.742z" />
          </svg>
        )}
        {open && (
          <svg
            className={styles.root__close}
            fill="#000000"
            width="25"
            height="25"
            viewBox="0 0 16 16"
            xmlns="http://www.w3.org/2000/svg"
            onClick={toggle}
          >
            <path
              d="M0 14.545L1.455 16 8 9.455 14.545 16 16 14.545 9.455 8 16 1.455 14.545 0 8 6.545 1.455 0 0 1.455 6.545 8z"
              fillRule="evenodd"
            />
          </svg>
        )}
      </div>
      <span className={styles.root__header}>Cart</span>

      {productIds.map((id) => (
        <CartItem id={id} />
      ))}
    </div>
  );
}
