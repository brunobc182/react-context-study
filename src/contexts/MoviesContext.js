import React, { createContext, useReducer, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

export const MoviesContext = createContext();

const movieReducer = (state, action) => {
  switch (action.type) {
    case "ADD_MOVIE":
      return [
        ...state,
        {
          name: action.payload.name,
          id: uuidv4(),
        },
      ];

    case "REMOVE_MOVIE":
      return state.filter((movie) => movie.id !== action.payload.id);

    default:
      return state;
  }
};

function MoviesContextProvider(props) {
  const [movies, dispatch] = useReducer(
    movieReducer,
    [
      { name: "Star Wars", id: 1 },
      { name: "The Lord of the Rings", id: 2 },
      { name: "Titanic", id: 3 },
      { name: "Amor Estranho Amor", id: 4 },
    ],
    () => {
      const localData = localStorage.getItem("movies");

      return localData ? JSON.parse(localData) : [];
    }
  );

  useEffect(() => {
    localStorage.setItem("movies", JSON.stringify(movies));
  }, [movies]);

  return (
    <MoviesContext.Provider value={{ movies, dispatch }}>
      {props.children}
    </MoviesContext.Provider>
  );
}

export default MoviesContextProvider;
