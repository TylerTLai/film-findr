import React from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { URL_IMG, IMG_SIZE_SMALL } from '../../const';

const StyledMovieSection = styled.div`
  background-color: #14171a;
  padding: 30px 0;
`;

const StyledMovieCategory = styled.h1`
  color: #eeeeee;
  margin-top: 75px;
`;

const StyledMovie = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  & img {
    border-radius: 3px;
  }

  & h1 {
    color: #eeeeee;
    font-size: 1em;
    text-transform: uppercase;
  }

  & button {
    background: #136f6a;
    color: white;
    font-size: 1em;
    padding: 12px 20px;
    border: 0;
    border-radius: 5px;
  }
`;

function MovieList({ title, movies }) {
  const movieCollection = movies.map((movie) => {
    const posterURL = URL_IMG + IMG_SIZE_SMALL + movie.poster_path;

    return (
      <div key={movie.id}>
        <StyledMovie>
          <img src={posterURL} alt={movie.title} />
          <h1>{movie.title}</h1>
          <button>View Movie</button>
        </StyledMovie>
      </div>
    );
  });

  const settings = {
    autoplay: false,
    arrows: true,
    dots: false,
    draggable: true,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 5,
  };

  return (
    <>
      <StyledMovieCategory>{title}</StyledMovieCategory>
      <StyledMovieSection>
        <Slider {...settings}>{movieCollection}</Slider>
      </StyledMovieSection>
    </>
  );
}

export default MovieList;
