import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const SlideView = () => {
  const [movieBackDrop, setMovieBackDrop] = useState([]);
  const [movieId, setMovieId] = useState([]);

  const getMovieBackDrop = async (e) => {
    const API_KEY = process.env.REACT_APP_TMDB_KEY;
    const url = `https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`;

    try {
      const res = await fetch(url);
      const data = await res.json();
      console.log('from fetch', data.results);
      //   setMovieId(data.results.id.slice(0, 5))
      setMovieBackDrop(
        data.results
          .slice(0, 5)
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
    getMovieBackDrop();
  }, []);

  const handleClick = () => {
    alert('hi');
  };

  //   console.log('from slideView', movieId)

  return (
    <div className="container">
      <Slider
        speed={500}
        dots={true}
        slidesToShow={1}
        slidesToScroll={1}
        infinite={false}
        arrows={true}
      >
        {movieBackDrop.map((backdrop) => {
          return (
            <div>
              {/* <button onClick={handleClick}>click me</button> */}
              <img
                src={backdrop}
                alt="img"
                style={{
                  margin: '0',
                  padding: '0',
                  width: '100vw',
                }}
              />
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default SlideView;
