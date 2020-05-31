import React from 'react';
import MostPopular from './MostPopular';
import TopRated from './TopRated';
import SlideView from './SlideView';
import MovieCardList from './MovieCardList';

const Home = ({ movieData }) => {
  // const clearSearchResults = () => {
  //   alert('clear search results');
  // };

  return (
    <div>
  
        <>
          <SlideView />
          <MostPopular />
          <br />
          <TopRated />
        </>
      
    </div>
  );

  // return (
  //   <>
  //     <SlideView />
  //     <MostPopular />
  //     <br />
  //     <TopRated />
  //   </>
  // );
};

export default Home;
