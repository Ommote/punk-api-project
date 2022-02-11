import React from "react";
import "./SearchBox.scss";

const SearchBox = () => {
  return (
    <form>
      <label htmlFor="search"></label>
      <input type="search" name="search" />
      <label htmlFor="classic">Classic</label>
      <input type="checkbox" name="classic" />
    </form>
  );
};

export default SearchBox;
