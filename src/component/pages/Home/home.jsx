import React, { useEffect, useState } from "react";
import axios from "axios";
import "./home.css";
import MovieCard from "../card/card";
import Slider from "../slider/slider";
import Search from "../search/Search";

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const apiKey = "297621b4d5ff1780c9e821b4a756aaac";
  useEffect(() => {
    const fetchMovies = async () => {
      try {
        let response;
        if (searchQuery) {
          response = await axios.get(
            `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${searchQuery}&page=${currentPage}`
          );
          console.log("search result:", response.data.results);
        } else {
          response = await axios.get(
            `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&page=${currentPage}`
          );
        }



        setMovies(response.data.results);
        setTotalPages(response.data.total_pages);
      } catch (error) {
        console.error("Error fetching movies:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, [currentPage, searchQuery, apiKey]);


  const handlePageChange = (page) => {
    setCurrentPage(page);
    setLoading(true);
  };

  return (
    <>
      <div className="master">
        <Search searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        <h1> Populer Movies</h1>
        {loading && <p>Loading...</p>}

        <div className="movie-container">
          {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>

        <Slider
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </div>
    </>
  );
};

export default Home;
