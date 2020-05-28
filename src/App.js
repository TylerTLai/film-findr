import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './components/Home';
import MovieDetail from './components/MovieDetail';
import MostPopular from './components/MostPopular';
import Navbar from './components/Navbar';
import TopRated from './components/TopRated';

function App() {
  const [movieData, setMovieData] = useState([]);

  const getMovieData = (movies) => {
    setMovieData(movies);
  };

  return (
    <div>
      <Navbar movieData={getMovieData} />
      <Switch>
        <Route path="/top-rated">
          <TopRated movieData={movieData} />
        </Route>
        <Route path="/most-popular">
          <MostPopular movieData={movieData}/>
        </Route>

        {/* <Route path="/:movie_id">
          <MovieDetail />
        </Route> */}

        <Route path="/:movie_id" component={MovieDetail} />

        {/* <Route
          path="/:movie_id"
          render={(movieData) => <MovieDetail movieData={movieData} />}
        /> */}

        <Route exact path="/">
          <Home movieData={movieData} />
        </Route>
        <Route
          render={() => (
            <h2 style={{ textAlign: 'center' }}>
              Uh oh, page not Found!{' '}
              <span role="img" aria-label="loudly crying face">
                😭
              </span>
            </h2>
          )}
        />
      </Switch>
    </div>
  );
}

export default App;
