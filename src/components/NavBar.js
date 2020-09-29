import React from "react";
import { useHistory } from "react-router-dom";

const NavBar = () => {
  const history = useHistory();

  return (
    <div className="navbar">
      <h1>Simple List</h1>
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
