import React from "react";
import { Fragment, useState } from "react";

import Meals from "../Meals/Meals";
import Cart from "../Cart/Cart";
import CartProvider from "../../store/CartProvider";

export default function Menucontent() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  return (
    <>
      <CartProvider>
        {cartIsShown && <Cart onClose={hideCartHandler} />}

        <main>
          <Meals onShowCart={showCartHandler} />
        </main>
      </CartProvider>
    </>
  );
}
