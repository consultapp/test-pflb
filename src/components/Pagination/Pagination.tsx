import styles from "./style.module.scss";

type Props = {
  pages: number;
  current: number;
  changeHandler: (n: number) => void;
};

export default function Pagination({
  pages = 1,
  current = 1,
  changeHandler,
}: Props) {
  return (
    <div className={styles.root}>
      {new Array(pages).fill(null).map((_: number, i: number) => (
        <button
          key={i}
          className={styles.button}
          onClick={() => changeHandler(i + 1)}
          disabled={i + 1 === current}
        >
          {i + 1}
        </button>
      ))}
    </div>
  );
}
