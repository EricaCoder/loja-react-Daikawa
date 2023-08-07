import "./App.css";
import ItemCount from "./components/ItemCount";
import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="App">
      <NavBar />
      <header className="App-header">
        <p>Landing Page header</p>
      </header>
      <ItemListContainer>
        <ItemCount productName={"camiseta"} stock={5} initial={1} />
        <ItemCount productName={"caneca"} stock={10} initial={1} />
        <ItemCount productName={"garrafa"} stock={15} initial={1} />
        <ItemCount productName={"moleskine"} stock={20} initial={1} />
      </ItemListContainer>
    </div>
  );
}

export default App;
