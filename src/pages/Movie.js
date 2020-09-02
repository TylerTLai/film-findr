import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { URL_IMG, BACKDROP_SIZE_ORIGINAL } from '../const';
import { fetchMovieDetails } from '../store/actions/movie';
import { FaStar } from 'react-icons/fa';

const StyledDetails = styled.div`
  color: white;
`;
const StyledBackdrop = styled.div`
  background-image: linear-gradient(
      to right,
      black .5%,
      rgba(0, 0, 0, 0) 20%,
      rgba(0, 0, 0, 0)
    ),
    url(${({ imgURL }) => imgURL});
  background-size: cover;
  background-position: center;
  width: 70vw;
  background-repeat: no-repeat;
`;

const StyledTopContainer = styled.div`
  background-color: black;
  display: grid;
  grid-template-columns: 30%, 70%;
  grid-template-areas: 'details backdrop';
  height: calc(100vh - 3.5em);

  & ${StyledDetails} {
    grid-area: details;
    /* border: 1px solid white; */
    padding: 1em;

    & h1 {
      text-transform: uppercase;
    }
  }

  & ${StyledBackdrop} {
    grid-area: backdrop;
    /* border: 1px solid white; */
  }
`;

const StyledBottomContainer = styled.div`
  display: grid;
`;

function Movie({ movieDetails, fetchMovie, history }) {
  useEffect(() => {
    const movieId = history.location.pathname.slice(1);
    fetchMovie(movieId);
  }, []);

  console.log('from movie', movieDetails.genres);

  const genres = [];

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
      <StyledTopContainer>
        <StyledDetails>
          <h1>{movieDetails.title}</h1>
          <h2>{movieDetails.tagline}</h2>
          <p>Release Date: {movieDetails.release_date}</p>
          <p>
            Rating: {movieDetails.vote_average}
            <FaStar color="#ffc93c" />
          </p>
          <p>Runtime: {movieDetails.runtime} mins</p>
          {/* <p>Runtime: {movieDetails.genres.map((item) => item.name)} mins</p> */}
          <p>Plot</p>
          <p>{movieDetails.overview}</p>
        </StyledDetails>
        <StyledBackdrop imgURL={backdropURL}>
        </StyledBackdrop>
      </StyledTopContainer>
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
