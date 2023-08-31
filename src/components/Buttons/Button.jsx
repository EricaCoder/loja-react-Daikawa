import { useContext } from "react";
import CartContext from "../../context/cartContext";

import { useNavigate } from "react-router-dom";
export default function Button() {
  const addItem = useContext(CartContext);
  const navigate = useNavigate();
  const getItem = () => {
    console.log("contexto que eu quero? ", addItem.cart.addedItems); // recebe o produto
    navigate("/cart");
    return addItem;
  };
  return (
    <button type="button" className="btn btn-primary my-5" onClick={getItem}>
      Finalizar Compra
    </button>
  );
}
