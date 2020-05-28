import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Link } from 'react-router-dom';

const SlideView = () => {
  const [movie, setMovie] = useState([]);

  const getMovieBackDrop = async (e) => {
    const API_KEY = process.env.REACT_APP_TMDB_KEY;
    const url = `https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`;

    try {
      const res = await fetch(url);
      const data = await res.json();
      setMovie(data.results.slice(0, 5));
    } catch (err) {
      console.log('error', err);
    }
  };

  useEffect(() => {
    getMovieBackDrop();
  }, []);


  return (
    <div className="container">
      <Slider
        speed={500}
        dots={true}
        slidesToShow={1}
        slidesToScroll={1}
        infinite={true}
        autoplay={true}
      >
        {movie.map((movie) => {
          return (
            <div>
              <div
                className="Backdrop"
                style={{
                  backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(https://image.tmdb.org/t/p/w1400_and_h450_bestv2${movie.backdrop_path})`,
                }}
              >
                <div className="BackdropText">
                  <h3>NEW MOVIE</h3>
                  <h1>{movie.title.length > 20 ? movie.title.slice(0, 19) + '...' : movie.title}</h1>
                  <Link to={'/' + movie.id}>
                    <button
                      style={{
                        background: 'black',
                        color: 'white',
                        fontSize: '1.2em',
                        padding: '12px 20px',
                        border: '2px solid white',
                        borderRadius: '12px',
                      }}
                    >
                      View Movie
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default SlideView;
