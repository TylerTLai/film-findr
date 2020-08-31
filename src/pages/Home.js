import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Carousel from '../components/Carousel/Carousel';
import MovieList from '../components/MovieList/MovieList';
import styled from 'styled-components';

import {
  fetchMostPopularMovies,
  fetchTopRatedMovies,
} from '../store/actions/movie';

const StyledMain = styled.main`
  background-color: #060507;
  padding: 20px;
`;

function Home({
  mostPopularMovies,
  getPopularMovies,
  topRatedMovies,
  getTopRatedMovies,
}) {
  useEffect(() => {
    getTopRatedMovies();
    getPopularMovies();
  }, []);

  // console.log('top rated', topRatedMovies);
  // console.log('most popular', mostPopularMovies);

  return (
    <StyledMain>
      <Carousel />
      <br />
      <br />
      <br />
      <MovieList title={'MOST POPULAR'} movies={mostPopularMovies} />
      {/* <MovieList title={'Top Rated'} movies={topRatedMovies} /> */}
    </StyledMain>
  );
}

const mapStateToProps = (state) => {
  return {
    mostPopularMovies: state.getMovies,
    topRatedMovies: state.getMovies,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getPopularMovies: () => dispatch(fetchMostPopularMovies()),
    getTopRatedMovies: () => dispatch(fetchTopRatedMovies()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
