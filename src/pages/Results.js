import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import theme from '../styles/theme';
import Button from '../styles/Button';
import { motion } from 'framer-motion';
import { URL_IMG, IMG_SIZE_LARGE } from '../const';
import { Link } from 'react-router-dom';
import { fetchMovieDetails } from '../store/actions/movie';

const { colors, fontSizes } = theme;

const StyledMovie = styled(motion.div)`
  background-color: ${colors.midGray};
  margin-left: 10px;
  margin-right: 10px;
  padding: 20px 10px;
  border-radius: 3px;

  & img {
    border-radius: 2px;
    opacity: 1;
    width: 100%;
  }

  & p {
    color: ${colors.white};
    font-size: ${fontSizes.md};
    text-transform: uppercase;
    text-align: left;
  }

  & a {
    color: ${colors.white};
  }
`;

const StyledResultsContainer = styled.main`
  background-color: ${colors.black};
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  flex: 1;
`;

function Results({ searchResults, fetchMovie, history }) {
  useEffect(() => {}, []);

  console.log('from results page', searchResults);
  const movies = searchResults.map((movie) => {
    const posterURL = URL_IMG + IMG_SIZE_LARGE + movie.poster_path;

    return (
      <div key={movie.id}>
        <StyledMovie
          whileHover={{ backgroundColor: 'rgba(87, 103, 119, 0.5)' }}
        >
          <img src={posterURL} alt={movie.title} />
          <p>
            {movie.title.length <= 15
              ? movie.title
              : movie.title.slice(0, 13) + '...'}
          </p>
          <Link to={'/' + movie.id}>
            <Button>View Movie</Button>
          </Link>
        </StyledMovie>
      </div>
    );
  });

  const content =
    movies.length > 0 ? (
      movies
    ) : (
      <div style={{ flex: '1' }}>
        <h1>Start by using the search bar above.</h1>
      </div>
    );

  return <StyledResultsContainer>{content}</StyledResultsContainer>;
}

const mapStateToProps = (state) => {
  return {
    searchResults: state.getMovies.searchedMovie,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchMovie: (movieId) => dispatch(fetchMovieDetails(movieId)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Results);
