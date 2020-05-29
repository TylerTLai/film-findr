import React from 'react';
import MostPopular from './MostPopular';
import TopRated from './TopRated';
import SlideView from './SlideView';

const Home = ({ movieData }) => {
  // const clearSearchResults = () => {
  //   alert('clear search results');
  // };

  // return (
  //   <div>
  //     {/* {console.log('home render', movieData)} */}

  //     {movieData && movieData.length ? (
  //       <>
  //         <MovieCardList movies={movieData} />
  //       </>
  //     ) : (
  //       <>
  //         <SlideView />
  //         <MostPopular />
  //         <br />
  //         <TopRated />
  //       </>
  //     )}
  //   </div>
  // );

  return (
    <>
      <SlideView />
      <MostPopular />
      <br />
      <TopRated />
    </>
  );
};

export default Home;
