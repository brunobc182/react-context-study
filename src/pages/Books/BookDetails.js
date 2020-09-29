import React, { useContext } from "react";
import { BooksContext } from "../../contexts";

const BookDetails = ({ book }) => {
  const { dispatch } = useContext(BooksContext);

  return (
    <li
      onClick={() =>
        dispatch({ type: "REMOVE_BOOK", payload: { id: book.id } })
      }
    >
      {book.name}
    </li>
  );
};

export default BookDetails;
