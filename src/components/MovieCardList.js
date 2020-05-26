import React from 'react';
import MovieCard from './MovieCard';

const MovieCardList = ({ movies }) => {
  // console.log('from moviecardlist', movies)
  return (
    <div className="MovieCardList">
      {movies
        .filter((movie) => movie.poster_path)
        .map((movie) => (
          <MovieCard key={movie.id} id={movie.id} movie={movie} />
        ))}
    </div>
  );
};

export default MovieCardList;
