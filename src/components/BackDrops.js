import React, { useEffect, useState } from 'react';

const BackDrops = () => {
  const [movieBackDrop, setMovieBackDrop] = useState([]);

  const getMovieBackDrop = async (e) => {
    const API_KEY = process.env.REACT_APP_TMDB_KEY;
    const url = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&page=1`;

    // https://api.themoviedb.org/3/movie/${Movie_Id}/images?api_key=${API_KEY}&language=en-US
    // url(https://image.tmdb.org/t/p/w1400_and_h450_bestv2${movie.backdrop_path})`

    try {
      const res = await fetch(url);
      const data = await res.json();

      console.log('from backdrop', data.results);

      setMovieBackDrop(
        data.results
          .slice(0, 1)
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

  console.log('from backdrop', movieBackDrop);

  const image = movieBackDrop.map((image) => {
    return <img src={image} alt="" />;
  });

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        width: '100%',
        margin: '0 0 3em 0 !important',
        padding: '0 !important',
      }}
    >
      {image}
    </div>
  );
};

export default BackDrops;
