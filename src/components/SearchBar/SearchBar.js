import React from 'react';
import styled from 'styled-components';
import theme from '../../styles/theme';
import { FiSearch } from 'react-icons/fi';

const StyledSearchContainer = styled.form`
  /* border: 1px solid white; */
  display: flex;
  justify-content: center;
  align-items: center;

  /* display: grid;
  margin: 0 2em;
  grid-template-columns: 1fr auto;
  grid-column-gap: 1.5em;
  justify-content: center;
  align-items: center; */
`;

const StyledSearchInput = styled.input`
  font-size: 0.9em;
  height: 30px;
  padding: 0.15em 0.8em;
  /* line-height: 1em; */
  border: 0;
  border-radius: 3px 0 0 3px;
  width: 70%;
  background-color: ${theme.colors.white};
`;

const StyledSearchButton = styled.button`
  background: ${theme.colors.teal};
  color: ${theme.colors.white};
  font-size: 1em;
  padding: 10px 20px 20px 20px;
  border: 0;
  border-radius: 0 3px 3px 0;
  height: 34px;
  transition: 0.2s ease-in-out;
  
  &:hover,
  &:focus,
  &:active {
    background: ${theme.colors.lightTeal};
    cursor: pointer;
  }
`;

function SearchBar() {
  return (
    <StyledSearchContainer>
      <StyledSearchInput
        type="text"
        placeholder="Find your favorite movies..."
      ></StyledSearchInput>
      <StyledSearchButton type="submit">
        <FiSearch />
      </StyledSearchButton>
    </StyledSearchContainer>
  );
}

export default SearchBar;
