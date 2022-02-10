import logo from "./logo.svg";
import "./App.css";
import Main from "./components/Main/Main";
import beers from "./data/beer";
import Nav from "./components/Nav/Nav";

console.log(beers);

function App() {
  return (
    <div className="App">
      <section>
        <Nav beersArr={beers} />
      </section>
      <section>
        <Main beersArr={beers} />
      </section>
    </div>
  );
}

export default App;
