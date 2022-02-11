import "./App.css";
import Main from "./components/Main/Main";
import beers from "./data/beer";

function App() {
  return (
    <div className="App">
      <Main beersArr={beers} />
    </div>
  );
}

export default App;
