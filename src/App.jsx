import React, { useState } from "react";
import "./App.css";
import Main from "./components/Main/Main";
import beers from "./data/beer";
import Nav from "./components/Nav/Nav";

console.log(beers);

function App() {
  // STATE
  const [searchTerm, setSearchTerm] = useState("");
  const [isHighABV, setIsHighABV] = useState(false);
  const [isLowPH, setIsLowPH] = useState(false);
  const [isClassic, setIsClassic] = useState(false);

  // FUNCTIONS AS PROPS
  const handleInput = (event) => {
    setSearchTerm(event.target.value.toLowerCase());
  };

  const handleChangeHighABV = (event) => {
    setIsHighABV(event.target.checked);
  };

  const handleChangeLowPH = (event) => {
    setIsLowPH(event.target.checked);
  };

  const handleChangeClassic = (event) => {
    setIsClassic(event.target.checked);
  };

  // SEARCH LOGIC
  const filteredBeers = beers.filter((beer) => {
    // CHECK MULTIPLE CONDITIONS FIRST
    if (isHighABV && isLowPH && isClassic) {
      return (
        beer.name.toLowerCase().includes(searchTerm) &&
        beer.abv > 6 &&
        beer.ph < 4 &&
        beer.first_brewed.slice(-4) <= 2010
      );
    } else if (isHighABV && isLowPH) {
      return (
        beer.name.toLowerCase().includes(searchTerm) &&
        beer.abv > 6 &&
        beer.ph < 4
      );
    } else if (isLowPH && isClassic) {
      return (
        beer.name.toLowerCase().includes(searchTerm) &&
        beer.ph < 4 &&
        beer.first_brewed.slice(-4) <= 2010
      );
    } else if (isHighABV && isClassic) {
      return (
        beer.name.toLowerCase().includes(searchTerm) &&
        beer.abv > 6 &&
        beer.first_brewed.slice(-4) <= 2010
      );
    }
    //CHECK SINGLE CONDITIONS
    else if (isHighABV) {
      return beer.name.toLowerCase().includes(searchTerm) && beer.abv > 6;
    } else if (isLowPH) {
      return beer.name.toLowerCase().includes(searchTerm) && beer.ph < 4;
    } else if (isClassic) {
      return (
        beer.name.toLowerCase().includes(searchTerm) &&
        beer.first_brewed.slice(-4) <= 2010
      );
    } else {
      return beer.name.toLowerCase().includes(searchTerm);
    }
  });

  return (
    <div className="App">
      <Nav
        handleInput={handleInput}
        handleChangeHighABV={handleChangeHighABV}
        handleChangeLowPH={handleChangeLowPH}
        handleChangeClassic={handleChangeClassic}
      />
      <Main beersArr={filteredBeers} />
    </div>
  );
}
export default App;
