import { useEffect, useState } from "react";
import { useParams, NavLink } from "react-router-dom";
import ItemList from "../../components/ItemList";
import { Titulo } from "./presentation";
import items from "../../services/data.json";

export default function ItemListContainer({ children }) {
  const [state, setState] = useState("");
  const [error, setError] = useState(false);

  const slugParam = useParams();
  const categoryArr = items.filter(
    (item) => item.category === slugParam.category
  );

  useEffect(() => {
    setState("Loading");
    setTimeout(() => {
      setState("Success");
    }, 2000);
  }, [slugParam]);

  if (state === "error") {
    return <h1>{error.toString()}</h1>;
  }
  if (state === "Loading") {
    return (
      <>
        {categoryArr.length ? (
          <Titulo value={`Categoria: ${slugParam.category}`} />
        ) : (
          <Titulo value="Catálogo de Produtos" />
        )}
        <h1 className="d-flex justify-content-center">{state}...</h1>
      </>
    );
  }
  return (
    <div className="container-fluid">
      {categoryArr.length ? (
        <nav ariaLabel="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <NavLink to="/">Home</NavLink>
            </li>

            <li className="breadcrumb-item active" aria-current="page">
              {slugParam.category}
            </li>
          </ol>
        </nav>
      ) : (
        <Titulo value="Catálogo de Produtos" />
      )}
      <div className="d-flex justify-content-center">
        {categoryArr.length ? (
          <ItemList items={categoryArr} />
        ) : (
          <ItemList items={items} />
        )}
      </div>

      <div className="card d-flex flex-row flex-wrap">{children}</div>
    </div>
  );
}
