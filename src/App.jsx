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
  const [isLowABV, setIsLowABV] = useState(false);

  // FUNCTIONS AS PROPS
  const handleInput = (event) => {
    setSearchTerm(event.target.value.toLowerCase());
  };

  const handleChangeHighABV = (event) => {
    setIsHighABV(event.target.checked);
  };
  console.log(isHighABV);
  console.log(setIsHighABV);

  const handleChangeLowABV = (event) => {
    setIsLowABV(event.target.checked);
  };

  // FILTRATION: declares variable, checks condition, returns the arrayed objects.filter if true OR returns entire array of objects if not true
  const filteredByABV = isHighABV
    ? beers.filter((beer) => beer.abv > 6)
    : beers;

  const filteredBeers = filteredByABV.filter((beer) =>
    beer.name.toLowerCase().includes(searchTerm)
  );
  // ATTEMPT to introduce filtration by low ABV: didn't work because of the passing to Main as beersArr{filteredBeers}
  // const filteredByLowABV = isLowABV
  //   ? beers.filter((beer) => beer.abv < 6)
  //   : beers;

  // const filteredBeersLow = filteredByLowABV.filter((beer) =>
  //   beer.name.toLowerCase().includes(searchTerm)
  // );
  // WHEN REMOVING: CHECK OTHER COMPONENTS FOR STRAGGLES!

  // VARIABLES PASSED TO MAIN AS PROPS
  const highABVBeers = beers.filter((beer) => beer.abv > 6);
  const lowABVBeers = beers.filter((beer) => beer.abv < 6);

  return (
    <div className="App">
      <Nav
        handleInput={handleInput}
        handleChangeHighABV={handleChangeHighABV}
        handleChangeLowABV={handleChangeLowABV}
      />
      <Main
        beersArr={filteredBeers}
        // beersArrTwo={filteredBeersLow}
        highABVBeers={highABVBeers}
        lowABVBeers={lowABVBeers}
      />
    </div>
  );
}
export default App;
