import React from "react";
import "./SearchBox.scss";

const SearchBox = (props) => {
  const { handleInput, handleChangeHighABV, handleChangeLowABV } = props;
  return (
    <form>
      <label htmlFor="search"></label>
      <input type="search" name="search" onInput={handleInput} />
      <label htmlFor="abv">ABV > 6% </label>
      <input type="checkbox" name="abv" onChange={handleChangeHighABV} />
      <label htmlFor="classic">ABV 6%</label>
      <input type="checkbox" name="low-abv" onChange={handleChangeLowABV} />
    </form>
  );
};

export default SearchBox;
