import CartWidget from "../CartWidget";
import Logo from "./logo-1.png";
function NavBar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="./">
          <img
            src={Logo}
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt=""
          />
          Kombucha
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Alterna navegação"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <a className="nav-link" href="./">
                Home <span className="sr-only">(Página atual)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="./">
                Chás
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="./">
                Alcoólicos
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="./">
                Faça você mesmo
              </a>
            </li>
          </ul>
        </div>
        <CartWidget />
      </nav>
    </>
  );
}
export default NavBar;
