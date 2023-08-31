import { useContext } from "react";
import CartContext from "../context/cartContext";
import CartProvider from "../providers/CartProvider";

export default function CartPage() {
  return (
    <>
      <h1>Carrinho de Compras</h1>
      <CartContext.Provider value={"qty"}>
        <CartProvider>
          <MyComp />
        </CartProvider>
      </CartContext.Provider>
    </>
  );
}
const MyComp = () => {
  const context = useContext(CartContext);
  const getItem = () => {
    return context;
  };
  console.log("teste sem contexto", getItem());
  return (
    <div>
      {/* testando contexto {context.cart.addedItems.map((item) => item.title)} */}
      <>
        testando{" "}
        {context.cart.addedItems.map((item) => (
          <p>
            {item.title}, preço: {item.price}
          </p>
        ))}{" "}
        ver console
      </>
    </div>
  );
};
