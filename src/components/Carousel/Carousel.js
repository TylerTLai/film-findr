import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function Carousel() {

const settings = {
    autoplay: true,
    dots: true,
    draggable: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
}

  return (
    <Slider {...settings}>
      <div>
        <h1>MOVIE 1</h1>
      </div>
      <div>
        <h1>MOVIE 2</h1>
      </div>
      <div>
        <h1>MOVIE 3</h1>
      </div>
    </Slider>
  );
}

export default Carousel;
