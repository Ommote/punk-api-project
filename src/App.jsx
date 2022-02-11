import logo from "./logo.svg";
import "./App.css";
import Main from "./components/Main/Main";
import beers from "./data/beer";
import Nav from "./components/Nav/Nav";
import React, { useState } from "react";

console.log(beers);

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [beersArr, setBeersArr] = useState(beers);

  const handleSearch = (event) => {
    const input = event.target.value.toLowerCase();
    setSearchTerm(input);
    console.log(searchTerm);
  };

  const filteredBeers = beersArr.filter((beer) => {
    return beer.name.toLowerCase().includes(searchTerm);
  });

  setBeersArr(filteredBeers);

  return (
    <div className="App">
      <section>
        <Nav
          beersArr={beers}
          handleSearch={handleSearch}
          setSearchTerm={setSearchTerm}
        />
      </section>
      <section>
        <Main beersArr={beersArr} />
      </section>
    </div>
  );
}

export default App;
