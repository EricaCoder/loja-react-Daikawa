import NavBar from "../components/NavBar";
import CartPage from "../components/CartPage";
import { CartItemContext } from "../context/cartContext";

export default function Cart() {
  return (
    <div className="App">
      <NavBar />
      <CartItemContext.Provider value={""}>
        <CartPage />
      </CartItemContext.Provider>
    </div>
  );
}
