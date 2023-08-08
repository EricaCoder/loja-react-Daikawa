import { useEffect, useState } from "react";
import Item from "../Item";
import ItemCount from "../ItemCount";

export default function ItemList({ items }) {
  const [state, setState] = useState("");
  const [error, setError] = useState(false);
  useEffect(() => {
    setState("loading");
    setTimeout(() => {
      setState("success");
    }, 2000);
  }, []);

  if (state === "error") {
    return <h1>{error.toString()}</h1>;
  }
  if (state === "loading") {
    return <h1 className="d-flex justify-content-center">Loading...</h1>;
  }
  return (
    <div className="d-flex flex-row flex-wrap">
      {items.map((item) => (
        <Item
          id={item.id}
          title={item.title}
          description={item.description}
          price={item.price}
          pictureUrl={item.pictureUrl}
          stock={item.stock}
          initial={item.initial}
        >
          <ItemCount stock={item.stock} initial={item.initial} />
        </Item>
      ))}
    </div>
  );
}
