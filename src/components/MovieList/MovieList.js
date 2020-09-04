import React from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Link } from 'react-router-dom';
import { URL_IMG, IMG_SIZE_LARGE } from '../../const';
import { connect } from 'react-redux';
import { fetchMovieDetails } from '../../store/actions/movie';
import { motion } from 'framer-motion';
import Arrows from '../Arrows/Arrows';
import theme from '../../styles/theme';

const StyledMovieSection = styled.div`
  background-color: ${theme.colors.darkGray};
  padding: 2em 1em 2em 1em;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const StyledMovieCategory = styled.h1`
  color: ${theme.colors.white};
  margin-top: 75px;
`;

const StyledMovie = styled(motion.div)`
  /* display: flex;
  flex-direction: column;
  align-items: left; */
  background-color: ${theme.colors.midGray};
  /* border: 2px solid #373b41; */
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
    color: ${theme.colors.white};
    font-size: 1em;
    text-transform: uppercase;
    text-align: left;
  }

  & a {
    color: ${theme.colors.white};
  }

  & button {
    background: ${theme.colors.teal};
    color: ${theme.colors.white};
    font-size: 1em;
    padding: 12px 20px;
    border: 0;
    border-radius: 5px;
    width: 100%;
    transition: 0.2s ease-in-out;

    &:hover {
      background: ${theme.colors.lightTeal};
      cursor: pointer;
    }
  }
`;


function MovieList({ title, movies, fetchMovie }) {
  const movieCollection = movies.map((movie) => {
    const posterURL = URL_IMG + IMG_SIZE_LARGE + movie.poster_path;

    const handleClick = (id) => {
      fetchMovie(id);
    };

    return (
      <div key={movie.id}>
        <StyledMovie whileHover={{ backgroundColor: 'rgba(87, 103, 119, 0.5)' }}>
          <img src={posterURL} alt={movie.title} />
          <p>
            {movie.title.length <= 15
              ? movie.title
              : movie.title.slice(0, 13) + '...'}
          </p>
          <Link to={'/' + movie.id}>
            <button onClick={() => handleClick(movie.id)}>View Movie</button>
          </Link>
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

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchMovie: (movieId) => dispatch(fetchMovieDetails(movieId)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MovieList);
