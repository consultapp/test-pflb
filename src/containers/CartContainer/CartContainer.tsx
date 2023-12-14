import Cart from "@/components/Cart/Cart";
import { useState } from "react";

export default function CartContainer() {
  const [open, setOpen] = useState(false);

  const toggle = () => {
    setOpen((prev) => !prev);
  };

  return <Cart open={open} toggle={toggle} />;
}
