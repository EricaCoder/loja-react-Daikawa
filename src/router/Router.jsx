import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import NotFound from "../pages/errors/404";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Cart from "../pages/Cart";
import CheckOut from "../pages/CheckOut";
import ItemPage from "../pages/ItemPage";
import Category from "../pages/Category";

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/category/:category" element={<Category />} />
        <Route path="/item/:id" element={<ItemPage />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<CheckOut />} />
        <Route path="/sobre" element={<About />} />
        <Route path="/contato" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
