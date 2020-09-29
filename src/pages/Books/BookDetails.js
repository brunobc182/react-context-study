import React from "react";
import { useBooksDispatch } from "../../contexts";

const BookDetails = ({ book }) => {
  const dispatch = useBooksDispatch();
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
