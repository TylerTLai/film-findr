import React from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { URL_IMG, IMG_SIZE_SMALL } from '../../const';

const StyledMovieCard = styled.div`
  background-color: #393e46;
  border-radius: 5px;
  padding: 10px;
`;

const StyledMovieText = styled.div`
  & h1 {
    color: #eeeeee;
    font-size: 1em;
    text-transform: uppercase;
  }

  & button {
    background: #222831;
    color: white;
    font-size: 1em;
    padding: 12px 20px;
    border: 0;
    border-radius: 5px;
  }
`;

function MovieList({ title, movies }) {

  // console.log('from movie list', movies)

  const popularMovies = movies.map((movie) => {
    const posterURL = URL_IMG + IMG_SIZE_SMALL + movie.poster_path;

    return (
      <div key={movie.id}>
        <StyledMovieText>
          <img src={posterURL} alt={movie.title} />
          <h1>{movie.title}</h1>
          <button>View Movie</button>
        </StyledMovieText>
      </div>
    );

  });

  const settings = {
    autoplay: false,
    arrows: true,
    dots: false,
    draggable: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <>
      <h1 style={{ color: '#eeeeee' }}>{title}</h1>
      <Slider {...settings}>{popularMovies}</Slider>
    </>
  );
}

export default MovieList;
