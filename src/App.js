import React from "react";
import { Router } from "react-router-dom";
import { Routes } from "./routes";
import { createBrowserHistory } from "history";
import { NavBar } from "./components";

const history = createBrowserHistory();

function App() {
  return (
    <div className="App">
      <>
        <Router history={history}>
          <NavBar />
          <Routes />
        </Router>
      </>
    </div>
  );
}

export default App;
