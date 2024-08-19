import React from "react";
import "./Search.css";

const Search = () => {
    return (
        <>
            <div className="search">
                <h1> Welcom To Our Movie App</h1>
                <br />
                <p>
                    Millions of movies ,TV shows and people to discover. Explore
                    now
                </p>
                <br />
                <input type="text" placeholder="Search for movies" />
                <button>Search</button>
            </div>
        </>
    );
};

export default Search;
