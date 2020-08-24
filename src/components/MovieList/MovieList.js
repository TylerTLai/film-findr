import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { connect } from 'react-redux';

function MovieList({ title, categoryMovies }) {
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
      <h1>{title}</h1>
      <Slider {...settings}>
        <div>
          <h1>{categoryMovies}</h1>
        </div>
        <div>
          <h1>{categoryMovies}</h1>
        </div>
      </Slider>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    category: state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getMovies: () => dispatch(),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MovieList);
