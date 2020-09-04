import React from 'react';
import styled from 'styled-components';
import theme from '../../styles/theme';

const StyledSearchContainer = styled.form`
border: 1px solid white;

display: flex;
  /* display: grid;
  margin: 0 2em;
  grid-template-columns: 1fr auto;
  grid-column-gap: 1.5em;
  justify-content: center;
  align-items: center; */
`;

const StyledSearchInput = styled.input`
  font-size: 1em;
  height: 2em;
  padding: 0.3em 0.5em;
  line-height: 1em;
  border-radius: 5px;
  border: 1px solid #999;
  transition: 0.3s;
  background-color: #121212;
`;

const StyledSearchButton = styled.button`
  background: ${theme.colors.teal};
  color: ${theme.colors.white};
  font-size: 1em;
  padding: 12px 20px;
  border: 0;
  border-radius: 5px;
  width: 100%;
  transition: 0.2s ease-in-out;
`;

function SearchBar() {
  return (
    <StyledSearchContainer>
      <StyledSearchInput type="text"></StyledSearchInput>
      <StyledSearchButton type="submit">Search</StyledSearchButton>
    </StyledSearchContainer>
  );
}

export default SearchBar;
