import Item from "../Item";

export default function ItemList({ items }) {
  return (
    <div className="d-flex flex-row flex-wrap">
      {items.map((item) => (
        <Item item={item} />
      ))}
    </div>
  );
}
