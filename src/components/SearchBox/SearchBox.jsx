import React from "react";
import "./SearchBox.scss";

const SearchBox = (props) => {
  const { handleInput, handleChange } = props;
  return (
    <form>
      <label htmlFor="search"></label>
      <input type="search" name="search" onInput={handleInput} />
      <label htmlFor="classic">Classic</label>
      <input type="checkbox" name="classic" onChange={handleChange} />
    </form>
  );
};

export default SearchBox;
