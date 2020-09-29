import React from "react";
import { v4 as uuidv4 } from "uuid";

const MoviesStateContext = React.createContext();
const MoviesDispatchContext = React.createContext();

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
  const [movies, dispatch] = React.useReducer(movieReducer, [], () => {
    const localData = localStorage.getItem("movies");

    return localData ? JSON.parse(localData) : [];
  });

  React.useEffect(() => {
    localStorage.setItem("movies", JSON.stringify(movies));
  }, [movies]);

  return (
    <MoviesStateContext.Provider value={movies}>
      <MoviesDispatchContext.Provider value={dispatch}>
        {props.children}
      </MoviesDispatchContext.Provider>
    </MoviesStateContext.Provider>
  );
}

function useMoviesState() {
  const context = React.useContext(MoviesStateContext);

  if (context === undefined) {
    throw new Error("useMoviesState must be used within a MoviesProvider");
  }
  return context;
}

function useMoviesDispatch() {
  const context = React.useContext(MoviesDispatchContext);

  if (context === undefined) {
    throw new Error("useMoviesDispatch must be used within a CountProvider");
  }
  return context;
}

export { MoviesContextProvider, useMoviesState, useMoviesDispatch };
