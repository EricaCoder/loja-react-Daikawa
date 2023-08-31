import CartContext from "./context/cartContext.js";
import CartProvider from "./providers/CartProvider.js";
import { Router } from "./router/Router.jsx";

function App() {
  return (
    <CartContext.Provider>
      <Router />
    </CartContext.Provider>
  );
}

export default App;
