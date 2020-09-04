import React from 'react';
import styled from 'styled-components';
import theme from '../../styles/theme';

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
  font-size: 1em;
  height: 30px;
  padding: 0.3em 0.8em;
  line-height: 1em;
  border: 0;
  border-radius: 3px 0 0 3px;
  width: 50%;
  background-color: ${theme.colors.white};
`;

const StyledSearchButton = styled.button`
  background: ${theme.colors.teal};
  color: ${theme.colors.white};
  font-size: 1em;
  padding: 12px 20px;
  border: 0;
  border-radius: 0 3px 3px 0;
  height: 39px;
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
