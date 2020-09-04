import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import theme from '../../styles/theme';
// import SearchBar from '../SearchBar';
import SearchBar from '../SearchBar/SearchBar';
import { ReactComponent as ReactLogo } from '../../assets/logo.svg';

const StyledLogoContainer = styled.div`
  /* border: 1px solid green; */
`;

const StyledSearchContainer = styled.div`
  /* border: 1px solid blue; */
`;

const StyledLinksContainer = styled.div`
  /* border: 1px solid orange; */
`;

const StyledNavbar = styled.nav`
  /* border: 1px solid red; */
  background-color: ${theme.colors.black};
  color: ${theme.colors.white};
  margin: 0;
  padding: 1em;
  display: grid;
  font-size: 0.93em;
  grid-template-columns: 0.5fr 2fr 1fr;
  grid-template-areas: 'logo search links';

  a {
    font-size: 1.2rem;
    color: ${theme.colors.white};
  }

  a:hover {
    color: ${theme.colors.lightTeal};
  }

  & ${StyledLogoContainer} {
    grid-area: logo;
  }

  & ${StyledSearchContainer} {
    grid-area: search;
    display: grid;
    align-items: center;
  }

  & ${StyledLinksContainer} {
    grid-area: links;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
`;

function Navbar() {
  return (
    <StyledNavbar>
      <StyledLogoContainer>
        <NavLink to="/">
          <ReactLogo style={{ height: '45px', marginLeft: '10px' }} />
        </NavLink>
      </StyledLogoContainer>

      <StyledSearchContainer>
        <SearchBar />
      </StyledSearchContainer>

      <StyledLinksContainer>
        <NavLink to="login">Login</NavLink>
        <NavLink to="/most-popular">Most Popular</NavLink>
      </StyledLinksContainer>
    </StyledNavbar>
  );
}

export default Navbar;
