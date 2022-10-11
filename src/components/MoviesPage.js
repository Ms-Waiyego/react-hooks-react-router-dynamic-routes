import React from "react";
import MoviesList from "./MoviesList";
import { Route, useRouteMatch  } from "react-router-dom";
import MovieShow from "./MovieShow";

function MoviesPage({ movies }) {
  const match = useRouteMatch();
  console.log(match);

  return (
    <div>
      <MoviesList movies={movies} />
      <Route exact path={match.url}>
        <h3>Choose a movie from the list</h3>
      </Route>
      <Route path={`${match.url}/:movieId`}>
          <MovieShow />
      </Route>
    </div>
  );
}
export default MoviesPage;
