import "../App.css";
import ItemListContainer from "../containers/ItemListContainer";
import NavBar from "../components/NavBar";

export default function Home() {
  return (
    <>
      <div className="App">
        <NavBar />
        <header className="App-header">
          <p>Landing Page header</p>
        </header>
        <ItemListContainer />
      </div>
    </>
  );
}
