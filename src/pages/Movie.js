import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { URL_IMG, BACKDROP_SIZE_ORIGINAL } from '../const';
import { fetchMovieDetails } from '../store/actions/movie';

const StyledHeroBanner = styled.header`
  background-image: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.8)),
    url(${({ imgURL }) => imgURL});
  height: 600px;
  padding: 2em;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  & h1 {
    margin: 0;
    font-size: 4em;
    color: #ffffff;
    text-transform: uppercase;
  }

  & h2 {
    margin-top: 0;
    color: #ffffff;
    font-size: 2em;
  }
`;

const StyledStory = styled.div`
  background-color: #060507;
  color: white;
  padding: 4em 8em;

  & h2 {
    font-size: 1.5em;
    font-weight: 700;
  }

  & p {
    font-size: 1.2em;
    line-height: 1.5em;
  }
`;

const StyledCast = styled.div`
  background-color: #060507;
  color: white;
  padding: 4em 8em;

  & h2 {
    font-size: 1.5em;
    font-weight: 700;
  }

  & p {
    font-size: 1.2em;
    line-height: 1.5em;
  }
`;

function Movie({ movieDetails, fetchMovie, history }) {
  useEffect(() => {
    const movieId = history.location.pathname.slice(1);
    fetchMovie(movieId);
  }, []);

  console.log('from movie', Boolean(movieDetails.tagline));

  const backdropURL =
    URL_IMG + BACKDROP_SIZE_ORIGINAL + movieDetails.backdrop_path;
  //  setMovieInfo({
  //    title: movie.data.title,
  //    year: movie.data.release_date.slice(0, 4),
  //    duration: `${hrs}h${mins}mins`,
  //    rating: movie.data.vote_average,
  //    synoposis: movie.data.overview,
  //    image: imgUrl,
  //    movie_id: movie.data.id,
  //    trailerKey,
  //  });
  return (
    <>
      <StyledHeroBanner imgURL={backdropURL}>
        <h1>{movieDetails.title}</h1>
        {/* <h2>{Boolean(movieDetails.tagline) ? movieDetails.tagline : ""}</h2> */}
        <h2>{movieDetails.tagline}</h2>
        <h2>{movieDetails.release_date}</h2>
      </StyledHeroBanner>
      <StyledStory>
        <h1>THE STORY</h1>
        <p>{movieDetails.overview}</p>
      </StyledStory>
      <StyledCast>
        <h1>THE CAST</h1>
        <p>{movieDetails.overview}</p>
      </StyledCast>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    movieDetails: state.getMovies.movieDetails,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchMovie: (movieId) => dispatch(fetchMovieDetails(movieId)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Movie);
