import CartWidget from "../CartWidget";
import Nav from "./nav";
function NavBar() {
  return (
    <div className="d-flex justify-content-between">
      <Nav />
      <CartWidget />
    </div>
  );
}
export default NavBar;
