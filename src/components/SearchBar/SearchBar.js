import React, { useState } from 'react';
import styled from 'styled-components';
import theme from '../../styles/theme';
import { FiSearch } from 'react-icons/fi';
import { connect } from 'react-redux';
import { searchMovie } from '../../store/actions/movie';
import { useHistory } from 'react-router-dom';

const StyledSearchContainer = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledSearchInput = styled.input`
  font-size: 0.9em;
  height: 30px;
  padding: 0.15em 0.8em;
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

function SearchBar({ movie, findMovie }) {
  const history = useHistory();
  const [query, setQuery] = useState('');

  const searchMovies = (e) => {
    e.preventDefault();
    findMovie(query);
    history.push('/results');
  };

  const handleChange = (e) => {
    setQuery(e.target.value);
    // console.log('search query', query);
  };

  console.log('after the search', movie);

  return (
    <StyledSearchContainer onSubmit={searchMovies}>
      <StyledSearchInput
        type="text"
        placeholder="Find your favorite movies..."
        autoComplete="off"
        required={true}
        value={query}
        onChange={handleChange}
      ></StyledSearchInput>
      <StyledSearchButton type="submit">
        <FiSearch />
      </StyledSearchButton>
    </StyledSearchContainer>
  );
}

const mapStateToProps = (state) => {
  return {
    movie: state.getMovies.searchedMovie,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    findMovie: (searchTerm) => dispatch(searchMovie(searchTerm)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
