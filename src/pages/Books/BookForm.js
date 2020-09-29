import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import { BooksContext } from "../../contexts";

const BookForm = () => {
  const { dispatch } = useContext(BooksContext);
  const [name, setName] = useState("");
  const history = useHistory();

  function handleSubmit(e) {
    e.preventDefault();
    dispatch({
      type: "ADD_BOOK",
      payload: {
        name,
      },
    });
    setName("");
    history.push("/books");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Book name"
        value={name}
        onChange={(event) => {
          setName(event.target.value);
        }}
        required
      />
      <input type="submit" value="Add book" />
    </form>
  );
};

export default BookForm;
