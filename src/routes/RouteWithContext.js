import React from "react";
import { Route } from "react-router-dom";

const RouteWithContext = ({ contextProvider, component, ...props }) => {
  const ContextProvider = contextProvider;
  const Component = component;

  return (
    <Route {...props}>
      <ContextProvider>
        <Component />
      </ContextProvider>
    </Route>
  );
};

export default RouteWithContext;
