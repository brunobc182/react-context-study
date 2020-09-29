import React from "react";
import { useMoviesDispatch } from "../../contexts";

const MovieDetails = ({ movie }) => {
  const dispatch = useMoviesDispatch();

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
