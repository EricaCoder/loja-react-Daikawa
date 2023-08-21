import { useEffect, useState } from "react";
import ItemList from "../ItemList";
import { Input, Titulo, PasswordInput } from "./presentation";
import { items } from "../../services/data";

export default function ItemListContainer({ children }) {
  const [state, setState] = useState("");
  const [error, setError] = useState(false);
  useEffect(() => {
    setState("Loading");
    setTimeout(() => {
      setState(items);
    }, 2000);
  }, []);

  if (state === "error") {
    return <h1>{error.toString()}</h1>;
  }
  if (state === "Loading") {
    return (
      <>
        <Titulo value="ItemListContainer" />
        <h1 className="d-flex justify-content-center">{state}...</h1>
      </>
    );
  }
  return (
    <div className="container-fluid">
      <Titulo value="ItemListContainer" />
      <div className="d-flex justify-content-center">
        <ItemList items={items} />
      </div>

      <div className="card-body">
        <Input placeholder="Comp Input: Login" />
        <PasswordInput />
      </div>
      <div className="card d-flex flex-row flex-wrap">{children}</div>
    </div>
  );
}
