import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import SearchBar from './SearchBar';
import { AiFillHome, AiFillStar } from 'react-icons/ai';
import { FaBars, FaSearch } from 'react-icons/fa';
import { BsFillBarChartFill } from 'react-icons/bs';
// import { useSpring, animated as a, config } from 'react-spring';

const Navbar = ({ movieData }) => {
  const getMovieData = (movies) => {
    movieData(movies);
  };

  return (
    <>
      <nav className="Navbar">
        <NavLink to="top-rated">Top Rated</NavLink>
        <NavLink to="/most-popular">Most Popular</NavLink>
        <NavLink to="/">Home</NavLink>
        <SearchBar movieData={getMovieData} />
      </nav>

      {/* mobile menu */}

      <div className="MenuBars">
        <FaBars style={{ fontSize: '1.8em', marginBottom: '.5em' }} />
      </div>

      <nav className="NavbarMobile">
        <ul>
          <li>
            <NavLink to="top-rated" className="NavbarMobileIcons">
              <AiFillStar />
              <p>TOP RATED</p>
            </NavLink>
          </li>
          <li>
            <NavLink to="/most-popular" className="NavbarMobileIcons">
              <BsFillBarChartFill />
              <p>MOST POPULAR</p>
            </NavLink>
          </li>
          <li>
            <NavLink to="/search" className="NavbarMobileIcons">
              <FaSearch />
              <p>SEARCH</p>
            </NavLink>
          </li>
          <li>
            <NavLink to="/" className="NavbarMobileIcons">
              <AiFillHome />
              <p>HOME</p>
            </NavLink>
          </li>
        </ul>

        {/* <SearchBar movieData={getMovieData} /> */}
      </nav>
    </>
  );
};

export default Navbar;
