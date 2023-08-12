import ItemCount from "../ItemCount";

export default function Item({ item }) {
  return (
    <li key={item.id} className="list-group-item col-sm m-3">
      <img
        src={item.pictureUrl}
        alt={item.title}
        className="img-thumbnail h-auto  p-2"
      />
      <h3 className="text-secondary">{item.title}</h3>
      <p className="card-text">{item.description}</p>
      <h2 className="card-subtitle mb-2 ">R$ {item.price}</h2>
      <div>
        <ItemCount item={item} />
      </div>
    </li>
  );
}
