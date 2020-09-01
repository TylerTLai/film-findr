import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { URL_IMG, BACKDROP_SIZE_ORIGINAL } from '../const';

const StyledBanner = styled.div`
  background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
    url(${({ imgURL }) => imgURL});
  height: 550px;
`;

const StyledMovieTitle = styled.h1`
  font-size: 5em;
  color: #ffffff;
`;

function Movie({ movieDetails }) {
  console.log('from movie', movieDetails);
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
    <StyledBanner imgURL={backdropURL}>
      <StyledMovieTitle>{movieDetails.title}</StyledMovieTitle>
      <h2>{movieDetails.release_date}</h2>
    </StyledBanner>
  );
}

const mapStateToProps = (state) => {
  return {
    movieDetails: state.getMovies.movieDetails,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Movie);
