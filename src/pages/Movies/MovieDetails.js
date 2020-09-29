import React, { useContext } from "react";
import { MoviesContext } from "../../contexts";

const MovieDetails = ({ movie }) => {
  const { dispatch } = useContext(MoviesContext);

  return (
    <li
      onClick={() =>
        dispatch({ type: "REMOVE_MOVIE", payload: { id: movie.id } })
      }
    >
      {movie.name}
    </li>
  );
};

export default MovieDetails;
