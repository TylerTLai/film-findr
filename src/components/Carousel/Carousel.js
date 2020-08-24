import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { connect } from 'react-redux';
import { fetchMovies } from '../../store/actions/movie';

function Carousel({ movies, getMovies }) {
  console.log('carousel', movies);

  const settings = {
    autoplay: true,
    dots: true,
    draggable: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    // <Slider {...settings}>
    //   <div>
    //     <h1>MOVIE 1</h1>
    //   </div>
    //   <div>
    //     <h1>MOVIE 2</h1>
    //   </div>
    //   <div>
    //     <h1>MOVIE 3</h1>
    //   </div>
    // </Slider>

    <>
      <h1>movie title</h1>
      <button onClick={getMovies}>get movie</button>
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
