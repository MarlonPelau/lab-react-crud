import { useState } from "react";
import { Link, useParams } from "react-router-dom";

import "./Movie.css";

import ErrorMessage from "../errors/ErrorMessage";

function Movie() {
  const { id } = useParams();
  const [movie, setMovie] = useState({});
  const [loadingError, setLoadingError] = useState(false);
  const {
    id: showId,
    duration,
    listedIn,
    country,
    rating,
    dateAdded,
    description,
  } = movie;
  

  function handleDelete() {}
  useEffect(() => {
    getOneShow(id)
      .then((response) => {
        setShow(response);
        if (Object.keys(response).length === 0) {
          setLoadingError(true);
        } else {
          setLoadingError(false);
        }
      })
      .catch((error) => {
        setLoadingError(true);
      });
  }, [id]);

  return (
    <section className="movies-movie-wrapper">
      <h2>{movie.title}</h2>
      <section className="movies-movie">
        {loadingError ? (
          <ErrorMessage />
        ) : (
          <>
            <aside>
              <p>
                <span>Duration:</span> {movie.duration}
              </p>
              <p>
                <span>Listed Categories:</span> {movie.listedIn}
              </p>
              <p>
                <span>Country:</span> {movie.country}
              </p>
              <p>
                <span>Rating:</span> {movie.rating}
              </p>
              <p>
                <span>Date Added:</span> {movie.dateAdded}
              </p>
            </aside>
            <article>
              <p>{movie.description}</p>
            </article>
            <aside>
              <button className="delete" onClick={() => handleDelete(movie.id)}>
                Remove movie
              </button>
              <Link to={`/movies/${id}/edit`}>
                <button>Edit</button>
              </Link>
            </aside>
          </>
        )}
      </section>
    </section>
  );
}

export default Movie;