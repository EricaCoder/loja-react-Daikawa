import "./App.css";
import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";
import ItemDetailContainer from "./containers/ItemDetailContainer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <header className="App-header">
        <p>Landing Page header</p>
      </header>
      <ItemDetailContainer />
      <ItemListContainer />
    </div>
  );
}

export default App;
