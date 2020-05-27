import React, { useState, useEffect } from 'react';
import MostPopular from './MostPopular';
import TopRated from './TopRated';
import MovieCardList from './MovieCardList';

const Home = ({ movieData }) => {
  useEffect(() => {
    //stuff
  });

  const clearSearchResults = () => {
    alert('clear search results');
  };

  return (
    <div>
      {/* {console.log('home render', movieData)} */}

      {movieData && movieData.length ? (
        <>
          <h3 className="SearchResults">Search Results</h3>
          <button className="ClearButton" onClick={clearSearchResults}>
            Clear search results
          </button>
          <MovieCardList movies={movieData} />
        </>
      ) : (
        <>
          <MostPopular />
          <br />
          <TopRated />
        </>
      )}
    </div>
  );
};

export default Home;
