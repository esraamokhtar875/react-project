import React, { useEffect, useState } from "react";
import axios from "axios";
import './home.css';
import MovieCard from "../card/card";
import Slider from "../slider/slider";
import Search from "../search/Search";

const Home = () => {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const response = await axios.get(
                    "https://api.themoviedb.org/3/discover/movie?api_key=d923714de50dadcc85d51571b1e6562c"
                );
                setMovies(response.data.results);
                setTotalPages(response.data.total_pages);
            } catch (error) {
                console.error("Error fetching movies:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchMovies(currentPage);
    }, [currentPage]);

    const handlePageChange = (page) => {
        setCurrentPage(page);
        setLoading(true);
    };

    return (
        <>
            <div className="master">
                <Search />
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
