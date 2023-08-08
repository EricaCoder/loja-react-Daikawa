import ItemList from "../ItemList";
import { Input, Titulo, PasswordInput } from "./presentation";

export default function ItemListContainer({ children }) {
  const items = [
    {
      id: "1",
      title: "kombucha original",
      description: "receita original",
      price: "15,00",
      pictureUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_apRDC5x8IDoL4FMhyIrHFemDR71Jp3WcoA&usqp=CAUm",
      stock: 5,
      initial: 1,
    },
    {
      id: "2",
      title: "gengi-bucha",
      description: "Kombucha com gengibre",
      price: "15,00",
      pictureUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXqwRVmj6O8vjNzD6W5ZwxtclA0nLeDLNkoQ&usqp=CAU",
      stock: 4,
      initial: 1,
    },
    {
      id: "3",
      title: "green-bucha",
      description: "Kombucha de chá verde",
      price: "15,00",
      pictureUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTM9S3pZsK9jIU2KKfschaqGoCNNj4qRaAs_RM2sQBSRadomMmbR2__RkY9_epW-f5O10&usqp=CAU",
      stock: 10,
      initial: 1,
    },
    {
      id: "4",
      title: "scoby",
      description: "A grande mãe do Kombucha",
      price: "45,00",
      pictureUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmE7AVvCH0EEeJh_VVY-AYNAqcjVDYx8rchw&usqp=CAU",
      stock: 10,
      initial: 1,
    },
    {
      id: "5",
      title: "scoby",
      description: "A grande mãe do Kombucha",
      price: "45,00",
      pictureUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmE7AVvCH0EEeJh_VVY-AYNAqcjVDYx8rchw&usqp=CAU",
      stock: 10,
      initial: 1,
    },
  ];
  return (
    <div className="container-fluid">
      <Titulo value="Mais Vendidos" />
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
