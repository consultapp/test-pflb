import React from "react";
import styles from "./style.module.scss";
import NavBar from "@/components/NavBar/NavBar";
import CartContainer from "@/containers/CartContainer/CartContainer";

type Props = { children: React.ReactNode };

export default function Layout({ children }: Props) {
  return (
    <div className={styles.root}>
      <div className={styles.container}>
        <NavBar />
        {children}
      </div>
      <CartContainer />
    </div>
  );
}
