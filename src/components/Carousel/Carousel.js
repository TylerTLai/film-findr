import React, { useEffect } from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { connect } from 'react-redux';
import { fetchMovies } from '../../store/actions/movie';
import { URL_IMG, BACKDROP_SIZE_ORIGINAL } from '../../const';

const StyledHeader = styled.header`
  height: 550px;
  background-size: cover;
  margin-top: 0;
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(${({ imgURL }) => imgURL});
`;

const StyledMovieText = styled.div`
  text-align: left;
  position: relative;
  top: 65%;
  left: 60%;
  transform: translate(-50%, -50%);
  color: white;

  & h1 {
    margin-top: 0;
    margin-bottom: 0.5em;
    color: white;
    font-size: 2.5em;
    font-weight: bolder;
    letter-spacing: 1.5px;
    text-transform: uppercase;
  }

  & h3 {
    margin-top: 0;
    margin-bottom: 0;
    font-size: 1em;
    letter-spacing: 2px;
    text-decoration: underline;
  }

  & button {
    background: black;
    color: white;
    font-size: 1.2em;
    padding: 12px 20px;
    border: 2px solid white;
    border-radius: 12px;
  }
`;


function Carousel({ movies, getMovies }) {
  // console.log('carousel', movies);

  useEffect(() => {
    getMovies();
  }, [getMovies]);

  const topMovies = movies.map((movie) => {
    const backdropURL = URL_IMG + BACKDROP_SIZE_ORIGINAL + movie.backdrop_path;
    return (
      <div key={movie.id}>
        <StyledHeader imgURL={backdropURL}>
          <StyledMovieText>
            <h3>NEW MOVIE</h3>
            <h1>{movie.title}</h1>
            <button>View Movie</button>
          </StyledMovieText>
        </StyledHeader>
      </div>
    );
  });

  const settings = {
    autoplay: true,
    dots: true,
    draggable: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <>
      <Slider {...settings}>{topMovies}</Slider>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    movies: state.getMovies,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getMovies: () => dispatch(fetchMovies()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Carousel);
