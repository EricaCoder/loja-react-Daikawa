import { useEffect, useState } from "react";
import ItemDetail from "../../components/ItemDetail";
import { favoritesList } from "../../services/data";
import data from "../../services/data.json";

export default function ItemDetailContainer() {
  const item = data[0];
  const [product, setProduct] = useState({ data: {}, loading: true });
  const GetItem = () => {
    useEffect(() => {
      setTimeout(() => {
        setProduct({ data: item, loading: false });
      }, 2000);
    }, []);
  };
  GetItem();
  if (product.loading) {
    return (
      <h1 className="d-flex justify-content-center">
        ItemDetailContainer <br />
        Loading...
      </h1>
    );
  }
  return (
    <div className="container-fluid">
      <h1 className="d-flex justify-content-center">ItemDetailContainer</h1>
      <div className="d-flex justify-content-center">
        <ItemDetail item={product.data} favoritesList={favoritesList} />
      </div>
    </div>
  );
}
