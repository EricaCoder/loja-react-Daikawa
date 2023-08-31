import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import NotFound from "../pages/errors/404";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Cart from "../pages/Cart";
import CheckOut from "../pages/CheckOut";
import ItemPage from "../pages/ItemPage";
import Category from "../pages/Category";
import CartContext from "../context/cartContext";
import CartProvider from "../providers/CartProvider";

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/category/:category" element={<Category />} />
        <Route exact path="/item/:id" element={<ItemPage />} />
        <Route exact path="/cart" element={<Cart />} />
        <Route exact path="/checkout" element={<CheckOut />} />
        <Route exact path="/sobre" element={<About />} />
        <Route exact path="/contato" element={<Contact />} />
        <Route exact path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
