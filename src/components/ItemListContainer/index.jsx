import { Item, Input, Titulo, PasswordInput } from "./presentation";

export default function ItemListContainer() {
  const temas = [
    { value: "Item List JS", link: "./javascript" },
    { value: "Item List CSS", link: "./css" },
    { value: "Item List React", link: "./react" },
    { value: "Item List Componentes", link: "./componentes" },
  ];

  return (
    <div>
      <Titulo value="Componente Título" />
      <ul className="list-group list-group-flush card">
        {temas.map((tema) => (
          <Item value={tema.value} link={tema.link} />
        ))}
      </ul>

      <div className="card-body">
        <Input placeholder="Comp Input: Login" />
        <PasswordInput />
      </div>
    </div>
  );
}
