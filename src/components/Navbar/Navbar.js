import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import theme from '../../styles/theme';
// import SearchBar from '../SearchBar';
import SearchBar from '../SearchBar/SearchBar';
import { ReactComponent as ReactLogo } from '../../assets/logo.svg';

const StyledLogoContainer = styled.div`
  /* border: 1px solid teal; */
`;

const StyledSearchContainer = styled.div`
  /* border: 1px solid pink; */
`;

const StyledLinksContainer = styled.div`
  /* border: 1px solid lime; */
`;

const StyledNavbar = styled.nav`
  /* border: 1px solid red; */
  background-color: ${theme.colors.black};
  color: ${theme.colors.white};
  margin: 0;
  padding: 0.6em;
  display: grid;
  /* font-size: 0.93em; */
  grid-template-columns: 0.5fr 2fr 0.5fr;
  grid-template-areas: 'logo search links';

  a {
    font-size: 1em;
    color: ${theme.colors.white};
  }

  a:hover {
    color: ${theme.colors.lightTeal};
  }

  & ${StyledLogoContainer} {
    grid-area: logo;
    display: grid;
    justify-content: space-around;
    align-items: center;
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

    & button {
      border: 0;
      padding: 0.7em 1.3em;
      border-radius: 3px;
      color: ${theme.colors.white};
      background-color: ${theme.colors.teal};
      transition: 0.2s ease-in-out;

      &:hover,
      &:focus,
      &:active {
        background: ${theme.colors.lightTeal};
        cursor: pointer;
      }
    }
    /* font-size: .5em; */
  }
`;

function Navbar() {
  return (
    <StyledNavbar>
      <StyledLogoContainer>
        <NavLink to="/">
          <ReactLogo style={{ height: '40px', marginLeft: '10px' }} />
        </NavLink>
      </StyledLogoContainer>

      <StyledSearchContainer>
        <SearchBar />
      </StyledSearchContainer>

      <StyledLinksContainer>
        {/* <NavLink to="login">
          <button>Sign In</button>
        </NavLink> */}
      </StyledLinksContainer>
    </StyledNavbar>
  );
}

export default Navbar;
