import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { NOT_FOUND } from "pages/pagesPath";
import ErrorBoundary from "./ErrorBoundary";

interface RouteType {
  path: string;
  component: React.FC<any>;
  exact?: boolean;
}

export const convertRoutesToComponents = (routes: RouteType[]) => (
  // more on error boundaries
  // https://reactjs.org/docs/error-boundaries.html
  <ErrorBoundary>
    <React.Suspense fallback={<div>Loading...</div>}>
      <Switch>
        {routes.map((route, index) => (
          <Route key={index} {...route} />
        ))}
        <Redirect to={NOT_FOUND} />
      </Switch>
    </React.Suspense>
  </ErrorBoundary>
);
