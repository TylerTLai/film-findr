import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './components/Home';
import MovieDetail from './components/MovieDetail';
import MostPopular from './components/MostPopular';
import Navbar from './components/Navbar';
import Results from './components/Results';
import Search from './components/Search';
import TopRated from './components/TopRated';

function App() {
  const [movieData, setMovieData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const getMovieData = (movies, searchTerm) => {
    setMovieData(movies);
    setSearchTerm(searchTerm)
    console.log('from app', searchTerm)
  };

  return (
    <div>
      <Navbar movieData={getMovieData} searchTerm={searchTerm}/>

      <Switch>
        <Route exact path="/top-rated">
          <TopRated movieData={movieData} />
        </Route>

        <Route exact path="/most-popular">
          <MostPopular movieData={movieData} />
        </Route>

        <Route exact path="/search">
          <Search movieData={getMovieData} />
        </Route>

        <Route exact path="/results">
          <Results movieData={movieData} searchTerm={searchTerm}/>
        </Route>
        
        <Route exact path="/:movie_id" component={MovieDetail} />

        <Route exact path="/">
          <Home movieData={movieData} />
        </Route>

        <Route exact path="/home">
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
