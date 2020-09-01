import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home';
import Movie from './pages/Movie';

function App2() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/:movie_id" component={Movie} />
      </Switch>
    </>
  );
}

export default App2;
