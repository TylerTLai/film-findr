import React from 'react';
import { Link } from 'react-router-dom';
import { FaStar } from 'react-icons/fa';

const MovieCard = ({ movie, id }) => {
  return (
    <>
      <Link to={'/' + id}>
        <div className="MovieCard">
          <div className="MoviePosterContainer">
            <img
              src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`}
              alt={movie.title + ' poster'}
              className="MoviePoster"
            />
          </div>

          <small>
            <FaStar color="#ffc93c" />
            <p>{movie.vote_average}</p>
          </small>
          <h3 className="MovieTitle">
            {movie.title.length > 10 ? (
              <p style={{ fontSize: '.8em', marginBottom: '0' }}>
                {movie.title.slice(0, 15)}...
              </p>
            ) : (
              movie.title
            )}
          </h3>
          <Link
            to={'/' + id}
            style={{ display: 'flex', justifyContent: 'center' }}
          >
            <button
              style={{
                backgroundColor: '#222831',
                color: 'white',
                fontSize: '1em',
                margin: '1em',
                border: '0',
                borderRadius: '5px',
                padding: '.5em 1.2em',
              }}
            >
              Movie Info
            </button>
          </Link>
        </div>
      </Link>
    </>
  );
};

export default MovieCard;
