import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import BackDrops from './BackDrops';

const SlideView = () => {
  const [topBackDrops, setTopBackDrops] = useState([]);

  const getTopBackDrops = async (e) => {
    const API_KEY = process.env.REACT_APP_TMDB_KEY;
    const url = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&page=1`;

    // https://api.themoviedb.org/3/movie/${Movie_Id}/images?api_key=${API_KEY}&language=en-US
    // url(https://image.tmdb.org/t/p/w1400_and_h450_bestv2${movie.backdrop_path})`

    try {
      const res = await fetch(url);
      const data = await res.json();
      setTopBackDrops(
        data.results
          .slice(0, 10)
          .map(
            (movie) =>
              `https://image.tmdb.org/t/p/w1400_and_h450_bestv2${movie.backdrop_path}`
          )
      );
    } catch (err) {
      console.log('error', err);
    }
  };

  useEffect(() => {
    getTopBackDrops();
  }, []);

  const setBackDrops = () => {
    return 'https://image.tmdb.org/t/p/w1400_and_h450_bestv2/upUy2QhMZEmtypPW3PdieKLAHxh.jpg';
  };

  return (
    <div className="container">
      {console.log(topBackDrops)}
      <Slider
        speed={2000}
        dots={true}
        slidesToShow={1}
        slidesToScroll={1}
        infinite={false}
        autoplay={true}
        autoplaySpeed={2000}
        cssEase="linear"
      >
        <BackDrops imgUrl={setBackDrops} />
      </Slider>
    </div>
  );
};

export default SlideView;
