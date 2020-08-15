import React from 'react';
import MostPopular from './MostPopular';
import SlideView from './SlideView';
import TopRated from './TopRated';
import Navbar from './Navbar/Navbar';

const Home = ({ movieData }) => {
  return (
    <div>
      <Navbar />

      <SlideView />
      <MostPopular />
      <br />
      <TopRated />
    </div>
  );
};

export default Home;
