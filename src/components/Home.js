import React from 'react';
import MostPopular from './MostPopular';
import SlideView from './SlideView';
import TopRated from './TopRated';
import Navbar from './Navbar/Navbar';
import Carousel from './Carousel/Carousel';

const Home = ({ movieData }) => {
  return (
    <div>
      <Navbar />
      <Carousel />
      {/* <SlideView /> */}
      <MostPopular />
      <br />
      <TopRated />
    </div>
  );
};

export default Home;
