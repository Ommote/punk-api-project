import React from "react";
import "./SearchBox.scss";

const SearchBox = (props) => {
  const {
    handleInput,
    handleChangeHighABV,
    handleChangeLowPH,
    handleChangeClassic,
  } = props;
  return (
    <form>
      <label htmlFor="search"></label>
      <input type="search" name="search" onInput={handleInput} />
      <label htmlFor="abv">ABV greater than 6% </label>
      <input type="checkbox" name="abv" onChange={handleChangeHighABV} />
      <label htmlFor="low-ph">Low pH</label>
      <input type="checkbox" name="low-ph" onChange={handleChangeLowPH} />
      <label htmlFor="classic">Classic</label>
      <input type="checkbox" name="classic" onChange={handleChangeClassic} />
    </form>
  );
};

export default SearchBox;
