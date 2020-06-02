import React from 'react';
import { NavLink } from 'react-router-dom';
import SearchBar from './SearchBar';
import { AiFillHome, AiFillStar } from 'react-icons/ai';
import { FaSearch } from 'react-icons/fa';
import { BsFillBarChartFill } from 'react-icons/bs';
import {withRouter} from 'react-router-dom';

const Navbar = ({ movieData }) => {
  const getMovieData = (movies, searchTerm) => {
    movieData(movies, searchTerm);
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

      <nav
        className="NavbarMobile"
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

      </nav>
    </>
  );
};

export default withRouter(Navbar);
