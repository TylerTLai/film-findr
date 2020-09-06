import React, { useState } from 'react';
import styled from 'styled-components';
import { FiSearch } from 'react-icons/fi';
import { connect } from 'react-redux';
import { searchMovie } from '../../store/actions/movie';
import { useHistory } from 'react-router-dom';
import theme from '../../styles/theme';
import Button from '../../styles/Button';

const StyledSearchContainer = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;

  & button {
    padding: 10px 20px 20px 20px;
    border-radius: 0 3px 3px 0;
    height: 34px;
  }
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

function SearchBar({ movie, findMovie }) {
  
  const history = useHistory();
  const [query, setQuery] = useState('');

  const searchMovies = (e) => {
    e.preventDefault();
    findMovie(query);

    history.push({
      pathname: '/results',
      search: '?search=' + query,
    });
    setQuery('');
  };

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

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
      <Button type="submit">
        <FiSearch />
      </Button>
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
