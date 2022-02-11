import React from "react";
import "./Nav.scss";
import SearchBox from "../SearchBox/SearchBox";

const Nav = () => {
  return (
    <div className="nav-container">
      <SearchBox />
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </div>
  );
};

export default Nav;
