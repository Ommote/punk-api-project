import React, { useState } from "react";
import "./App.css";
import Main from "./components/Main/Main";
import beers from "./data/beer";
import Nav from "./components/Nav/Nav";

console.log(beers);

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [isHighABV, setIsHighABV] = useState(false);

  const handleInput = (event) => {
    setSearchTerm(event.target.value.toLowerCase());
  };

  const handleChange = (event) => {
    setIsHighABV(event.target.checked);
  };
  console.log(isHighABV);
  console.log(setIsHighABV);

  const filteredByABV = isHighABV
    ? beers.filter((beer) => beer.abv > 6)
    : beers;

  const filteredBeers = filteredByABV.filter((beer) =>
    beer.name.toLowerCase().includes(searchTerm)
  );

  const highABVBeers = beers.filter((beer) => beer.abv > 6);
  console.log(highABVBeers);
  return (
    <div className="App">
      <Nav handleInput={handleInput} handleChange={handleChange} />
      <Main beersArr={filteredBeers} highABVBeers={highABVBeers} />
    </div>
  );
}

export default App;
