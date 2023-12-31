import { useEffect, useState } from "react";
import { useParams, NavLink } from "react-router-dom";
import ItemDetail from "../../components/ItemDetail";
import { favoritesList } from "../../services/data";
import data from "../../services/data.json";
import { CartItemContext } from "../../context/cartContext.js";

export default function ItemDetailContainer() {
  const [product, setProduct] = useState({ data: {}, loading: true });
  let item;
  const GetItem = () => {
    const slug = useParams();
    item = data[slug.id - 1];
    useEffect(() => {
      setTimeout(() => {
        setProduct({ data: item, loading: false });
      }, 2000);
    }, [slug]);
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
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <NavLink to="/">Home</NavLink>
          </li>
          <li className="breadcrumb-item">
            <NavLink to={`/category/${product.data.category}`}>
              {product.data.category}
            </NavLink>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            {product.data.title}
          </li>
        </ol>
      </nav>
      <div className="d-flex justify-content-center mt-2">
        <CartItemContext.Provider value={product.data}>
          <ItemDetail favoritesList={favoritesList} />
        </CartItemContext.Provider>
      </div>
    </div>
  );
}
