import CartWidget from "../CartWidget";
import Logo from "./logo-1.png";
import { NavLink } from "react-router-dom";

export default function Nav() {
  return (
    <nav className="d-flex navbar navbar-expand-lg navbar-light bg-light flex-fill">
      <NavLink className="mr-auto p-2 bd-highlight navbar-brand" to={"/"}>
        <img
          src={Logo}
          width="30"
          height="30"
          className="d-inline-block align-top"
          alt=""
        />
        Kombucha
      </NavLink>

      <button
        className="navbar-toggler p-2 bd-highlight"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Alterna navegação"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="navbar-toggler border-0 p-2 bd-highlight">
        <CartWidget />
      </div>
      <div className="collapse navbar-collapse p-2 bd-highlight" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item ">
            <NavLink className="nav-link" to="/">
              Home <span className="sr-only">(Página atual)</span>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/category/kombucha">
              Kombuchas
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/category/alcoolicos">
              Alcoólicos
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/category/insumos">
              Faça você mesmo
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/sobre">
              Sobre Nós
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to={"/contato"} className="nav-link">
              Fale com a gente
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="collapse navbar-collapse flex-row-reverse p-2 bd-highlight">
        <CartWidget />
      </div>
    </nav>
  );
}
