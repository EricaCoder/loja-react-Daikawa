import { useContext } from "react";
import CartContext from "../../context/cartContext";

export default function Button() {
  const addItem = useContext(CartContext);
  const getItem = () => {
    console.log(addItem); // recebe o produto
    return addItem;
  };
  return (
    <button type="button" className="btn btn-primary my-5" onClick={getItem}>
      Finalizar Compra
    </button>
  );
}
