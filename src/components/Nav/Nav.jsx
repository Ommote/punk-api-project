import React from "react";
import "./Nav.scss";

const Nav = () => {
  return (
    <div className="NavContainer">
      <div className="NavBar">
        <label htmlFor="search"></label>
        <input type="search" name="search" id="search" placeholder="Search" />
        <br />
        <label htmlFor="abv" for="abv">
          High ABV (&gth;6.0%)
        </label>
        <input
          className="check"
          type="checkbox"
          name="abv"
          id="abv"
          dir="rtl"
        />
        <label htmlFor="classic" for="classic">
          Classic Range
        </label>
        <input
          className="check"
          type="checkbox"
          name="classic"
          id="classic"
          dir="rtl"
        />
        <label htmlFor="acidic" for="acidic">
          Acidic (ph &lth; 4)
        </label>
        <input
          className="check"
          type="checkbox"
          name="acidic"
          id="acidic"
          dir="rtl"
        />
      </div>
    </div>
  );
};

export default Nav;
