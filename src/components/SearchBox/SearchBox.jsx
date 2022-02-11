import React from "react";

const SearchBox = () => {
  return (
    <form>
      <label htmlFor="search-bar"></label>
      <input
        type="text"
        name="search-bar"
        placeholder="Search our beers"
      ></input>
    </form>
  );
};

export default SearchBox;
