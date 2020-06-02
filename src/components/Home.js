import React from 'react';
import MostPopular from './MostPopular';
import SlideView from './SlideView';
import TopRated from './TopRated';

const Home = ({ movieData }) => {
 
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

};

export default Home;
