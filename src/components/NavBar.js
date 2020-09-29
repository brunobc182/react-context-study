import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { MoviesContext } from "../contexts";

const NavBar = () => {
  // const { movies } = useContext(MoviesContext);
  const history = useHistory();

  return (
    <div className="navbar">
      <h1>Simple List</h1>
      <p>{/* You have <strong>{movies.length}</strong> on list! */}</p>
      <button className="add-button" onClick={() => history.push("/books")}>
        Navigate to Book List
      </button>
      <button className="add-button" onClick={() => history.push("/")}>
        Navigate to Movie List
      </button>
    </div>
  );
};

export default NavBar;
