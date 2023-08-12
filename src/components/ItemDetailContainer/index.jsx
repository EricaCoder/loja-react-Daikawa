import { useEffect, useState } from "react";
import ItemDetail from "../ItemDetail";
import { items, favoritesList } from "../../services/data";

export default function ItemDetailContainer() {
  const item = items[0];
  const [product, setProduct] = useState("");
  const GetItem = () => {
    useEffect(() => {
      setProduct("loading");
      setTimeout(() => {
        setProduct(item);
      }, 2000);
    }, []);
  };
  GetItem();
  if (product === "loading") {
    return (
      <h1 className="d-flex justify-content-center">
        ItemDetailContainer <br />
        {product}...
      </h1>
    );
  }
  return (
    <div className="container-fluid">
      <h1 className="d-flex justify-content-center">ItemDetailContainer</h1>
      <div className="d-flex justify-content-center">
        <ItemDetail item={product} favoritesList={favoritesList} />
      </div>
    </div>
  );
}
