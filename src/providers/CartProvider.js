import { useContext, useEffect, useState } from "react";
import CartContext, { CartItemContext } from "../context/cartContext";

const INITIAL_STATE = {
  addedItems: [],
  totalPrice: 0,
};
export default function CartProvider({ children }) {
  const itemQty = useContext(CartContext);
  const item = useContext(CartItemContext);
  const [cart, setCart] = useState(INITIAL_STATE);

  useEffect(() => {
    if (cart.addedItems.some((addedItem) => addedItem.title === item.title)) {
      return;
    } else {
      cart.addedItems.push(item);
    }
    const newAddedItems = cart.addedItems.map((product) => {
      if (product.title === item.title) {
        return { ...product, quantity: product.quantity + itemQty };
      }

      return product;
    });
    setCart({ ...cart, addedItems: newAddedItems });
  }, []);

  const removeItem = (item) => {};
  const clear = () => {
    setCart(INITIAL_STATE);
  };

  const isInCart = () => {};

  return (
    <CartContext.Provider value={{ cart, clear }}>
      {children}
    </CartContext.Provider>
  );
}
