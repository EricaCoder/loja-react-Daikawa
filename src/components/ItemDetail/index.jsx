import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icon } from "@fortawesome/fontawesome-svg-core/import.macro";
import ItemCount from "../ItemCount";

export default function ItemDetail({ item, favoritesList }) {
  const [favorite, setFavorite] = useState("empty");
  const handleFavorites = () => {
    if (favorite === "empty") {
      setFavorite("fav");
      favoritesList.push(item.title);
      console.log("favoritos: " + favoritesList);
    } else {
      setFavorite("empty");
      favoritesList.pop();
      console.log("favoritos: " + favoritesList);
    }
  };
  return (
    <div className="container w-75 border">
      <div className="row d-flex justify-content-between card-body border">
        <div className="col-8">
          <img src={item.pictureUrl} alt={item.title} className="border" />
          <div>
            <h3 className="card-text text-left">Descrição</h3>
            <p className="card-text text-left">
              {item.description}
              <br />
              <br />
              Mussum Ipsum, cacilds vidis litro abertis. Si u mundo tá muito
              paradis? Toma um mé que o mundo vai girarzis! Quem num gosta di
              mim que vai caçá sua turmis! Viva Forevis aptent taciti sociosqu
              ad litora torquent. Nec orci ornare consequat. Praesent lacinia
              ultrices consectetur. Sed non ipsum felis. <br />
              <br />
              Suco de cevadiss deixa as pessoas mais interessantis. Aenean
              aliquam molestie leo, vitae iaculis nisl. Atirei o pau no gatis,
              per gatis num morreus. Manduma pindureta quium dia nois paga.
            </p>
          </div>
        </div>
        <div className="col-4 border rounded ">
          <div className="row">
            <div className="col-10">
              <h2 className="text-secondary text-left">{item.title}</h2>
            </div>
            <button
              type="button"
              className="btn col-2 "
              favorites={favoritesList}
              onClick={handleFavorites}
            >
              {favorite === "empty" && (
                <FontAwesomeIcon
                  icon={icon({ name: "heart", style: "regular" })}
                  size="2xl"
                />
              )}
              {favorite === "fav" && (
                <FontAwesomeIcon
                  icon={icon({ name: "heart", style: "solid" })}
                  size="2xl"
                />
              )}
            </button>
          </div>
          <div className="text-primary row d-flex justify-content-left m-1">
            <FontAwesomeIcon icon={icon({ name: "star" })} />
            <FontAwesomeIcon icon={icon({ name: "star" })} />
            <FontAwesomeIcon icon={icon({ name: "star" })} />
            <FontAwesomeIcon icon={icon({ name: "star" })} />
            <FontAwesomeIcon icon={icon({ name: "star" })} />
          </div>
          <h2 className="card-subtitle text-left my-5">R$ {item.price}</h2>

          <h4 className="card-text text-left text-success">
            <FontAwesomeIcon
              icon={icon({ name: "truck-fast" })}
              className="mr-2"
            />
            Frete Grátis para seu endereço
          </h4>
          <h4 className="card-text text-left text-secondary">
            <FontAwesomeIcon icon={icon({ name: "trophy" })} className="mr-2" />
            Você acumula 1,5 pontos.
          </h4>
          <ItemCount item={item} />
        </div>
      </div>
    </div>
  );
}