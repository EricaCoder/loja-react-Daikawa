import { useContext, useEffect, useState, createContext } from "react";
import CartContext from "../context/cartContext";

export const CartProvContext = createContext();

const INITIAL_STATE = {
  addedItems: [
    {
      id: "2",
      title: "gengi-bucha",
      description: "Kombucha com gengibre",
      price: "15,00",
      category: "kombucha",
      initial: 1,
      stock: 4,
      quantity: 1,
    },
  ],
  totalPrice: 0,
};
export default function CartProvider({ children }) {
  const itemQty = useContext(CartContext);
  const item = useContext(CartProvContext);
  const [cart, setCart] = useState(INITIAL_STATE);

  useEffect(() => {
    if (cart.addedItems.some((addedItem) => addedItem.title === item.title)) {
      return;
    } else {
      cart.addedItems.push(item);
    }
    const newAddedItems = cart.addedItems.map((product) => {
      if (product.title === item.title) {
        console.log("teste1 ", item);
        console.log("itemQty: ", itemQty);
        return { ...product, quantity: product.quantity + itemQty };
      }
      //  else {
      console.log("teste2 ", item);
      console.log("itemQty: ", itemQty);
      return { ...product, quantity: product.quantity + itemQty };
      // return product;
      // }
    });
    setCart({ ...cart, addedItems: newAddedItems });
  });

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
