import CATEGORY_TYPES from "@/fixtures/CATEGORY_TYPES";
import { Link, useLocation, useParams } from "react-router-dom";
import styles from "./style.module.scss";

export default function NavBar() {
  const { categorySlug } = useParams();
  const { pathname } = useLocation();
  return (
    <nav className={styles.nav}>
      {pathname !== "/" ? (
        <Link to="/" key="main">
          HOME
        </Link>
      ) : (
        <span>HOME</span>
      )}
      {Object.keys(CATEGORY_TYPES).map((item) =>
        categorySlug !== item ? (
          <Link to={`/products/${item}`} key={item}>
            {item.toUpperCase()}
          </Link>
        ) : (
          <span key={item}>{item.toUpperCase()}</span>
        )
      )}
    </nav>
  );
}
