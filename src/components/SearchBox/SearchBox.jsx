import React from "react";

const SearchBox = (props) => {
  const { searchTerm, handleSearch } = props;

  return (
    <form className="search-form">
      <label htmlFor="search"></label>
      <input
        type="text"
        name="search"
        value={searchTerm}
        onInput={handleSearch}
      />
    </form>
  );
};

export default SearchBox;
