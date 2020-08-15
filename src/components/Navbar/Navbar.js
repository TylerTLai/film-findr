import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import SearchBar from '../SearchBar';

const StyledNavbar = styled.nav`
  background-color: #060507;
  color: #bfbec8;
  margin: 0;
  padding: 1em;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  font-size: 1rem;

  a {
    color: #da8950;
  }

  a:hover {
    color: #ffe3a6;
  }
`;

function Navbar() {
  return (
    <StyledNavbar>
      <NavLink to="/">Film Finder</NavLink>
      <NavLink to="top-rated">Top Rated</NavLink>
      <NavLink to="/most-popular">Most Popular</NavLink>
      <SearchBar />
    </StyledNavbar>
  );
}

export default Navbar;
