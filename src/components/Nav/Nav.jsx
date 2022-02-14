import React from "react";
import "./Nav.scss";
import SearchBox from "../SearchBox/SearchBox";

const Nav = (props) => {
  const {
    handleInput,
    handleChangeHighABV,
    handleChangeLowPH,
    handleChangeClassic,
  } = props;
  return (
    <div className="nav-container">
      <SearchBox
        handleInput={handleInput}
        handleChangeHighABV={handleChangeHighABV}
        handleChangeLowPH={handleChangeLowPH}
        handleChangeClassic={handleChangeClassic}
      />
    </div>
  );
};

export default Nav;
