import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icon } from "@fortawesome/fontawesome-svg-core/import.macro";
import ItemCount from "../ItemCount";

export default function ItemDetail({ item, favoritesList }) {
  const [favorite, setFavorite] = useState("empty");
  const [qty, setQty] = useState("");
  const [loading, setLoading] = useState(false);
  const onAdd = (itemCountData) => {
    setLoading(true);
    setTimeout(() => {
      setQty(itemCountData);
      setLoading(false);
      console.log("onAdd: " + itemCountData);
    }, 2000);
  };

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
    <div className="container w-85 border">
      <div className="row d-flex justify-content-between card-body border">
        <div className="col-12 col-md-8">
          <img src={item.pictureUrl} alt={item.title} className="border" />
          <div>
            <h3 className="card-text text-left">{item.title}</h3>
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
        <div className="col-12 col-md-4 border rounded ">
          <div className="row mt-2">
            <div className="col-9">
              <h4 className="text-secondary text-left">{item.title}</h4>
            </div>
            <div className="col-3 d-flex flex-row-reverse">
              <button
                type="button"
                className="btn"
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
          </div>
          <div className="text-primary row d-flex justify-content-left m-1">
            <FontAwesomeIcon icon={icon({ name: "star" })} />
            <FontAwesomeIcon icon={icon({ name: "star" })} />
            <FontAwesomeIcon icon={icon({ name: "star" })} />
            <FontAwesomeIcon icon={icon({ name: "star" })} />
            <FontAwesomeIcon icon={icon({ name: "star" })} />
          </div>
          <h2 className="card-subtitle text-left my-5">R$ {item.price}</h2>

          <h6 className="card-text text-left text-success">
            <FontAwesomeIcon
              icon={icon({ name: "truck-fast" })}
              className="mr-2"
            />
            Frete Grátis para seu endereço
          </h6>
          <h6 className="card-text text-left text-secondary">
            <FontAwesomeIcon icon={icon({ name: "trophy" })} className="mr-2" />
            Você acumula 1,5 pontos.
          </h6>
          {!qty && <ItemCount item={item} onAdd={onAdd} />}
          {loading && <h3>loading</h3>}
          {qty && (
            <button type="button" className="btn btn-primary mt-5">
              Finalizar Compra
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
