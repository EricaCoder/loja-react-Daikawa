import { useState } from "react";
import ItemCount from "../ItemCount";
import { NavLink } from "react-router-dom";

export default function Item({ item }) {
  const [qty, setQty] = useState("");
  const onAdd = (itemCountData) => {
    setQty(itemCountData);
    console.log("onAdd: " + itemCountData);
  };
  return (
    <li key={item.id} className="list-group-item col-sm m-3">
      <NavLink key={item.id} to={`/item/${item.id}`}>
        <img
          src={item.pictureUrl}
          alt={item.title}
          className="img-thumbnail h-auto  p-2"
        />
        <h3 className="text-secondary">{item.title}</h3>
        <p className="card-text">{item.description}</p>
        <h2 className="card-subtitle mb-2 ">R$ {item.price}</h2>
      </NavLink>
      <div>
        <ItemCount item={item} onAdd={onAdd} />
      </div>
    </li>
  );
}
