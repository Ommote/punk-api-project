import React from "react";
import "./Nav.scss";
import SearchBox from "../SearchBox/SearchBox";

const Nav = (props) => {
  const { handleInput, handleChangeHighABV, handleChangeLowABV } = props;
  return (
    <div className="nav-container">
      <SearchBox
        handleInput={handleInput}
        handleChangeHighABV={handleChangeHighABV}
        handleChangeLowABV={handleChangeLowABV}
      />
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </div>
  );
};

export default Nav;
