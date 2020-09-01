import React from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { URL_IMG, IMG_SIZE_LARGE } from '../../const';
import Arrows from '../Arrows/Arrows';

const StyledMovieSection = styled.div`
  background-color: #14171a;
  padding: 2em 1em 2em 1em;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const StyledMovieCategory = styled.h1`
  color: #eeeeee;
  margin-top: 75px;
`;

const StyledMovie = styled.div`
  /* display: flex;
  flex-direction: column;
  align-items: left; */
  background-color: #21272d;
  /* border: 2px solid #373b41; */
  margin-left: 10px;
  margin-right: 10px;
  padding: 20px 10px;
  border-radius: 3px;

  & img {
    border-radius: 2px;
    width: 100%;
  }

  & p {
    color: #eeeeee;
    font-size: 1em;
    text-transform: uppercase;
    text-align: left;
  }

  & button {
    background: #136f6a;
    color: white;
    font-size: 1em;
    padding: 12px 20px;
    border: 0;
    border-radius: 5px;
    width: 100%;
  }
`;

function MovieList({ title, movies }) {
  const movieCollection = movies.map((movie) => {
    const posterURL = URL_IMG + IMG_SIZE_LARGE + movie.poster_path;

    return (
      <div key={movie.id}>
        <StyledMovie>
          <img src={posterURL} alt={movie.title} />
          <p>
            {movie.title.length <= 15
              ? movie.title
              : movie.title.slice(0, 13) + '...'}
          </p>
          <button>View Movie</button>
        </StyledMovie>
      </div>
    );
  });

  const settings = {
    autoplay: false,
    arrows: true,
    nextArrow: <Arrows />,
    prevArrow: <Arrows />,
    dots: false,
    draggable: true,
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 6,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
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
