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
      <input
        type="search"
        name="search"
        className="search"
        onInput={handleInput}
        placeholder="  Search our range..."
      />
      <label htmlFor="abv">ABV greater than 6% </label>
      <input
        type="checkbox"
        name="abv"
        className="larger-checkbox"
        onChange={handleChangeHighABV}
      />
      <label htmlFor="low-ph">Low pH</label>
      <input
        type="checkbox"
        name="low-ph"
        className="larger-checkbox"
        onChange={handleChangeLowPH}
      />
      <label htmlFor="classic">Classic</label>
      <input
        type="checkbox"
        name="classic"
        className="larger-checkbox"
        onChange={handleChangeClassic}
      />
    </form>
  );
};

export default SearchBox;
