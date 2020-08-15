import React from 'react';

import Carousel from '../components/Carousel/Carousel';
import MovieList from '../components/MovieList/MovieList';

function Home() {
  return (
    <div>
      <Carousel />
      <MovieList title={'category title'} categoryMovies={'category movies'} />
    </div>
  );
}

export default Home;
