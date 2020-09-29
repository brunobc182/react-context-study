import React from "react";
import { Switch } from "react-router-dom";
import { MovieForm, MovieList } from "../pages/Movies";
import { BookForm, BookList } from "../pages/Books";
import { MoviesContextProvider, BooksContextProvider } from "../contexts";
import { RouteWithContext } from ".";

const Routes = () => {
  return (
    <Switch>
      <RouteWithContext
        path="/"
        exact
        contextProvider={MoviesContextProvider}
        component={MovieList}
      />
      <RouteWithContext
        path="/new-movie"
        exact
        contextProvider={MoviesContextProvider}
        component={MovieForm}
      />
      <RouteWithContext
        path="/books"
        exact
        contextProvider={BooksContextProvider}
        component={BookList}
      />
      <RouteWithContext
        path="/new-book"
        exact
        contextProvider={BooksContextProvider}
        component={BookForm}
      />
    </Switch>
  );
};

export default Routes;
