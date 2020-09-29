import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { BooksContext } from "../../contexts";
import { BookDetails } from ".";

const BookList = () => {
  const { books } = useContext(BooksContext);
  const history = useHistory();

  function navigateToBookForm() {
    history.push("/new-book");
  }

  return (
    <div>
      {books.length ? (
        <div className="movie-list">
          <ul>
            {books.map((book) => (
              <BookDetails book={book} key={book.id} />
            ))}
          </ul>
        </div>
      ) : (
        <div className="empty">Your list of books is empty</div>
      )}
      <button className="add-button" onClick={navigateToBookForm}>
        Navigate to Book Form
      </button>
    </div>
  );
};

export default BookList;
