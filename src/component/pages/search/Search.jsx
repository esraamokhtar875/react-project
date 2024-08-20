import React from "react";
import "./Search.css";
import { Link } from "react-router-dom";
import { useState } from "react";

const Search = ({ searchQuery, setSearchQuery }) => {
  const [inputValue, setInputValue] = useState(searchQuery);

  const handleSearch = () => {
    setSearchQuery(inputValue);
  };
  return (
    <>
      <div className="search">
        <h1> Welcom To Our Movie App</h1>
        <br />
        <p>Millions of movies ,TV shows and people to discover. Explore now</p>
        <br />
        <input
          type="text"
          placeholder="Search for movies"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <Link to={`/search/${inputValue}`}>
          <button onClick={handleSearch}>Search</button>
        </Link>
      </div>
    </>
  );
};

export default Search;
