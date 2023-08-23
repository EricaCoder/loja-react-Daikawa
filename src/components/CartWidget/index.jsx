import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icon } from "@fortawesome/fontawesome-svg-core/import.macro";
import { Link } from "react-router-dom";

export default function CartWidget() {
  return (
    <Link to={"/cart"}>
      <h2 className="align-self-center mr-3">
        <span className="badge badge-dark bg-secondary">
          <FontAwesomeIcon icon={icon({ name: "cart-shopping" })} /> 4
        </span>
      </h2>
    </Link>
  );
}
