import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icon } from "@fortawesome/fontawesome-svg-core/import.macro";

export default function CartWidget() {
  return (
    <h2>
      <span className="badge badge-dark bg-secondary">
        <FontAwesomeIcon icon={icon({ name: "cart-shopping" })} /> 4
      </span>
    </h2>
  );
}
