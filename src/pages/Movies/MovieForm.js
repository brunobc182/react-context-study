import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import { MoviesContext } from "../../contexts";

const MovieForm = () => {
  const { dispatch } = useContext(MoviesContext);
  const [name, setName] = useState("");
  const history = useHistory();

  function handleSubmit(e) {
    e.preventDefault();
    dispatch({
      type: "ADD_MOVIE",
      payload: {
        name,
      },
    });
    setName("");
    history.push("/");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Movie name"
        value={name}
        onChange={(event) => {
          setName(event.target.value);
        }}
        required
      />
      <input type="submit" value="Add movie" />
    </form>
  );
};

export default MovieForm;
