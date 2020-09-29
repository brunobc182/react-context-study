import React from "react";
import { v4 as uuidv4 } from "uuid";

const BooksStateContext = React.createContext();
const BooksDispatchContext = React.createContext();

const bookReducer = (state, action) => {
  switch (action.type) {
    case "ADD_BOOK":
      return [
        ...state,
        {
          name: action.payload.name,
          id: uuidv4(),
        },
      ];

    case "REMOVE_BOOK":
      return state.filter((book) => book.id !== action.payload.id);

    default:
      return state;
  }
};

function BooksContextProvider(props) {
  const [books, dispatch] = React.useReducer(bookReducer, [], () => {
    const localData = localStorage.getItem("books");

    return localData ? JSON.parse(localData) : [];
  });

  React.useEffect(() => {
    localStorage.setItem("books", JSON.stringify(books));
  }, [books]);

  return (
    <BooksStateContext.Provider value={books}>
      <BooksDispatchContext.Provider value={dispatch}>
        {props.children}
      </BooksDispatchContext.Provider>
    </BooksStateContext.Provider>
  );
}

function useBooksState() {
  const context = React.useContext(BooksStateContext);

  if (context === undefined) {
    throw new Error("useBooksState must be used within a BooksProvider");
  }
  return context;
}

function useBooksDispatch() {
  const context = React.useContext(BooksDispatchContext);

  if (context === undefined) {
    throw new Error("useBooksDispatch must be used within a CountProvider");
  }
  return context;
}

export { BooksContextProvider, useBooksState, useBooksDispatch };
