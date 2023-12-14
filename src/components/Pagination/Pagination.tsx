import { Link } from "react-router-dom";
import styles from "./style.module.scss";
import { TCurrentPage } from "@/types";

type Props = {
  pages: number;
  current: TCurrentPage;
};

export default function Pagination({ pages = 1, current }: Props) {
  return (
    <div className={styles.root}>
      {new Array(pages).fill(null).map((_: number, i: number) => (
        <Link
          to={`/products/${current.categorySlug}/${i + 1}`}
          key={i}
          className={styles.button}
        >
          {i + 1}
        </Link>
      ))}
    </div>
  );
}
