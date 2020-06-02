import React, { useState, useEffect } from 'react';
import { FaSearch } from 'react-icons/fa';
import { withRouter } from 'react-router-dom';

const Search = ({ movieData, ...props }) => {
  const [query, setQuery] = useState('');
  const [path, setPath] = useState('');

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const searchMovies = async (e) => {
    e.preventDefault();

    const API_KEY = process.env.REACT_APP_TMDB_KEY;
    const url = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${query}&page=1&include_adult=false`;

    try {
      const res = await fetch(url);
      const data = await res.json();

      movieData(data.results, query);
    } catch (err) {
      console.log(err);
    }

    if (props.location.pathname === '/most-popular') {
      props.history.push('/');
    }

    if (props.location.pathname === '/top-rated') {
      props.history.push('/');
    }

    if (props.location.pathname === path) {
      props.history.push('/results');
    }

    setQuery('');
  };

  useEffect(() => {
    setPath(props.location.pathname);
  }, []);

  return (
    <>
      <h1 className="title">
        Find your <br /> favorite movies
      </h1>
      <form className="SearchForm" onSubmit={searchMovies}>
        <FaSearch className="SearchButtonIcon" onClick={searchMovies} />
        <input
          autoFocus="true"
          className="SearchInputSmall"
          type="text"
          name="query"
          id="query"
          required={true}
          placeholder="Find a movie... "
          autoComplete="off"
          value={query}
          onChange={handleChange}
        />

        <button className="SearchButtonSmall" type="submit">
          <FaSearch className="SearchButtonIcon" />
        </button>
      </form>
    </>
  );
};

export default withRouter(Search);
