import React from "react";
import "./Nav.scss";
import SearchBox from "../SearchBox/SearchBox";

const Nav = (props) => {
  const { beersArr, handleSearch, setSearchTerm } = props;

  return (
    <div className="NavContainer">
      <div className="NavBar">
        <section>
          <SearchBox
            label="beers"
            setSearchTerm={setSearchTerm}
            handleInput={handleSearch}
          />
        </section>
      </div>
    </div>
  );
};

export default Nav;
