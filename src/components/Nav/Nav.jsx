import React, { useState } from "react";
import "./Nav.scss";
import SearchBox from "../SearchBox/SearchBox";
import Card from "../Card/Card";

const Nav = (props) => {
  const { beersArr } = props;
  const [searchTerm, setSearchTerm] = useState("");
  const handleSearch = (event) => {
    const input = event.target.value.toLowerCase();
    setSearchTerm(input);
  };

  const filteredBeers = beersArr.filter((beer) => {
    return beer.name.toLowerCase().includes(searchTerm);
  });

  return (
    <div className="NavContainer">
      <div className="NavBar">
        <section>
          <SearchBox
            label="beers"
            searchTerm={searchTerm}
            handleInput={handleSearch}
          />
        </section>
        <section>
          <Card beersArr={filteredBeers} title="beer" />
        </section>
      </div>
    </div>
  );
};

export default Nav;
