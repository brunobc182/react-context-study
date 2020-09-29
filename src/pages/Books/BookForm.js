import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useBooksDispatch } from "../../contexts";

const BookForm = () => {
  const dispatch = useBooksDispatch();
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
