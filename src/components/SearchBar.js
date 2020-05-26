import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';

const SearchBar = ({ movieData }) => {
    // set states
    const [query, setQuery] = useState('');

    // handle input change
    const handleChange = (e) => {
        setQuery(e.target.value);
    };

    // fetch movie data
    const searchMovies = async (e) => {
        e.preventDefault();

        const API_KEY = process.env.REACT_APP_TMDB_KEY;
        const url = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${query}&page=1&include_adult=false`;

        try {
            const res = await fetch(url);
            const data = await res.json();

            movieData(data.results);
        } catch (err) {
            console.log(err);
        }

        setQuery('');
    };

    return (
        <div className="SearchFormContainer">
            {/* {console.log('from render', movies)} */}
            <form className="SearchForm" onSubmit={searchMovies}>
                <input
                    className="SearchInput"
                    type="text"
                    name="query"
                    id="query"
                    required={true}
                    placeholder="Search for a movie..."
                    autoComplete="off"
                    value={query}
                    onChange={handleChange}
                />

                <button className="SearchButton" type="submit">
                    <FaSearch className="SearchButtonIcon" /> Search
        </button>

                <input
                    className="SearchInputSmall"
                    type="text"
                    name="query"
                    id="query"
                    required={true}
                    placeholder="Search movies, actors, shows, etc."
                    autoComplete="off"
                    value={query}
                    onChange={handleChange}
                />
            </form>
        </div>
    );
};

export default SearchBar;
