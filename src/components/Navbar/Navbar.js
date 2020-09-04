import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

// import SearchBar from '../SearchBar';
import SearchBar from '../SearchBar/SearchBar';
import { ReactComponent as ReactLogo } from '../../assets/logo.svg';

const StyledNavbar = styled.nav`
border: 1px solid red;
  background-color: #060507;
  color: #bfbec8;
  margin: 0;
  padding: .5em;
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-size: 1rem;

  a {
    font-size: 1.2rem;
    color: #eeeeee;
  }

  a:hover {
    color: #ffe3a6;
  }
`;

function Navbar() {
  return (
    <StyledNavbar>
      <NavLink to="/">
        <ReactLogo style={{ height: '45px', marginLeft: '10px' }} />
      </NavLink>
      {/* <NavLink to="top-rated">Top Rated</NavLink>
      <NavLink to="/most-popular">Most Popular</NavLink> */}
      <SearchBar />
    </StyledNavbar>
  );
}

export default Navbar;
