import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import MovieListing from "./MovieListing";
import ErrorMessage from "../errors/ErrorMessage";
import { getAllMovies } from "../../api/fetch";

function filterMovies(search, movies) {
  return movies.filter((movie) => {
    return movie.title.toLowerCase().match(search.toLowerCase());
  });
}
import "./MoviesIndex.css";


export default function MoviesIndex() {
  const [movies, setMovies] = useState([]);
  //  this will always be the full set of show data
  const [allMovies, setAllMovies] = useState([]);
  const [searchTitle, setSearchTitle] = useState("");
  const [loadingError, setLoadingError] = useState(false);
  function handleTextChange(event) {
    const inputTitle = event.target.value;
    const result = inputTitle.length ? filterMovies(inputTitle, allMovies) : allMovies;
    setSearchTitle(inputTitle);
    setMovies(result);
  }
  // Inside the functional component
  useEffect(() => {
    getAllMovies()
      .then((response) => {
        setAllMovies(response);
        setMovies(response);
        setLoadingError(false);
      })
      .catch((error) => {
        console.error(error);
        setLoadingError(true);
      });
  }, []);
    return (
      <div>
        {loadingError ? (
          <ErrorMessage />
        ) : (
          <section className="movies-index-wrapper">
            <h2>All Movies</h2>
            <button>
              <Link to="/movies/new">Add a new movie</Link>
            </button>
            <br />
            <label htmlFor="searchTitle">
              Search Movies:
              <input
                type="text"
                value={searchTitle}
                id="searchTitle"
                onChange={handleTextChange}
              />
            </label>
            <section className="movies-index">
            {movies.map((movie) => {
      return <MovieListing movie={movie} key={movie.id} />;
    })}
            </section>
          </section>
        )}
      </div>
    );
}
