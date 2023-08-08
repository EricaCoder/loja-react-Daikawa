export default function Item({
  id,
  title,
  description,
  price,
  pictureUrl,
  children,
}) {
  return (
    <li key={id} className="list-group-item col-sm m-3">
      <img src={pictureUrl} alt={title} className="img-thumbnail h-auto  p-2" />
      <h3 className="text-secondary">{title}</h3>
      <p className="card-text">{description}</p>
      <h2 className="card-subtilte mb-2 ">R$ {price}</h2>
      <div>{children}</div>
    </li>
  );
}
