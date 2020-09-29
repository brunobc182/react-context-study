import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { MoviesContext } from "../../contexts/";
import { MovieDetails } from "./";

const MovieList = () => {
  const { movies } = useContext(MoviesContext);
  const history = useHistory();

  function navigateToMovieForm() {
    history.push("/new-movie");
  }

  return (
    <div>
      {movies.length ? (
        <div className="movie-list">
          <ul>
            {movies.map((movie) => (
              <MovieDetails movie={movie} key={movie.id} />
            ))}
          </ul>
        </div>
      ) : (
        <div className="empty"> Your list of movies is empty</div>
      )}
      <button className="add-button" onClick={navigateToMovieForm}>
        Navigate to Movie Form
      </button>
    </div>
  );
};

export default MovieList;
