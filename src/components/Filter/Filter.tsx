import { ChangeEvent } from "react";
import styles from "./style.module.scss";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { productSlice } from "@/store/entities/product";
import { selectProductFilter } from "@/store/entities/product/selectors";
import { loadProductsByPageIfNotExisted } from "@/store/entities/product/thunk/loadProductsByPageIfNotExisted";

export default function Filter() {
  const dispatch = useAppDispatch();
  const filter = useAppSelector(selectProductFilter);

  const handle = (e: ChangeEvent<HTMLSelectElement>) => {
    if (filter[e.target.name as "field" | "type"] !== e.target.value) {
      dispatch(
        productSlice.actions.setFitler({ [e.target.name]: e.target.value })
      );
      dispatch(loadProductsByPageIfNotExisted());
    }
  };

  return (
    <div className={styles.root}>
      <span>Filters:</span>
      <select
        name="field"
        className={styles.root__select}
        onChange={handle}
        defaultValue={filter.field}
      >
        <option value="">Field</option>
        <option value="name">Name</option>
        <option value="price">Price</option>
      </select>
      <select name="type" className={styles.root__select} onChange={handle}>
        <option value="asc">ASC</option>
        <option value="desc">DESC</option>
      </select>
    </div>
  );
}
