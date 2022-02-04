import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Search = ({ query, setQuery }) => {
  return (
    <>
      <input
        className="searchInput"
        type="search"
        placeholder="Free text search..."
        aria-label="Search"
        onChange={(e) => setQuery(e.target.value)}
        value={query}
        autoFocus={true}
      ></input>
    </>
  );
};

export default Search;
