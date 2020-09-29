import React, { createContext, useReducer, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

export const BooksContext = createContext();

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
  const [books, dispatch] = useReducer(bookReducer, [], () => {
    const localData = localStorage.getItem("books");

    return localData ? JSON.parse(localData) : [];
  });

  useEffect(() => {
    localStorage.setItem("books", JSON.stringify(books));
  }, [books]);

  return (
    <BooksContext.Provider value={{ books, dispatch }}>
      {props.children}
    </BooksContext.Provider>
  );
}

export default BooksContextProvider;
