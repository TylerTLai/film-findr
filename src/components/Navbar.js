import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import SearchBar from './SearchBar';
import { AiFillHome, AiFillStar } from 'react-icons/ai';
import { FaSearch } from 'react-icons/fa';
import { BsFillBarChartFill } from 'react-icons/bs';
import { motion } from 'framer-motion';
// import { useSpring, animated as a, config } from 'react-spring';

const Navbar = ({ movieData }) => {
  const getMovieData = (movies, searchTerm) => {
    movieData(movies, searchTerm);
  };

  const [showMobileNav, setShowMobileNav] = useState(false);
  const [lastYPos, setLastYPos] = useState(0);

useEffect(() => {

    const handleScroll = () => {
        const yPos = window.scrollY;
        const isScrollingUp = yPos < lastYPos;

        setShowMobileNav(isScrollingUp);
        setLastYPos(yPos);
    }
    window.addEventListener('scroll', handleScroll, false)

    return () => {
        window.removeEventListener('scroll', handleScroll, false);
    }

}, [lastYPos])


  return (
    <>
      <nav className="Navbar">
        <NavLink to="top-rated">Top Rated</NavLink>
        <NavLink to="/most-popular">Most Popular</NavLink>
        <NavLink to="/">Home</NavLink>
        <SearchBar movieData={getMovieData}/>
      </nav>

      {/* mobile menu */}

      <motion.nav
        className="NavbarMobile"
        initial={{ y: 100 }}
        animate={{ y: showMobileNav ? 0 : 100 }}
      >
        <ul>
          <li>
            <NavLink exact to="top-rated">
              <AiFillStar className="NavbarMobileIcons" />
              <p>Top Rated</p>
            </NavLink>
          </li>
          <li>
            <NavLink exact to="/most-popular">
              <BsFillBarChartFill />
              <p>Most Popular</p>
            </NavLink>
          </li>
          <li>
            <NavLink exact to="/search">
              <FaSearch />
              <p>Search</p>
            </NavLink>
          </li>
          <li>
            <NavLink exact to="/">
              <AiFillHome />
              <p>Home</p>
            </NavLink>
          </li>
        </ul>

        {/* <SearchBar movieData={getMovieData} /> */}
      </motion.nav>
    </>
  );
};

export default Navbar;
