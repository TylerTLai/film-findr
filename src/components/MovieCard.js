import React from 'react';
import { NavLink } from 'react-router-dom';

const MovieCard = ({ movie, id }) => {
  return (
    <>
      <NavLink to={'/' + id}>
        <div className="MovieCard">
          <div className="MoviePosterContainer">
            <img
              src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`}
              alt={movie.title + ' poster'}
              className="MoviePoster"
            />
          </div>

          <h3 className="MovieTitle">
            {movie.title.length > 30
              ? `${movie.title.slice(0, 25)}...`
              : movie.title}
          </h3>
          <p>
            <small>{movie.release_date}</small>
          </p>
          <p>
            <small>RATING: {movie.vote_average}</small>
          </p>
        </div>
      </NavLink>
    </>
  );
};

export default MovieCard;
