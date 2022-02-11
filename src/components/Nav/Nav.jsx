import React from "react";
import SearchBox from "../SearchBox/SearchBox";
import "./Nav.scss";

const Nav = () => {
  return (
    <nav>
      <div className="nav-items">
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </div>
      <section className="search">
        <SearchBox />
      </section>
    </nav>
  );
};

export default Nav;
