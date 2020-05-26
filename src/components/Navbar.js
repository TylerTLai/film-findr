import React from 'react';
import { NavLink } from 'react-router-dom';
import SearchBar from './SearchBar';

const Navbar = ({ movieData }) => {

    const getMovieData = (movies) => {
        movieData(movies);
    };

    return (
        <>
            <nav className="Navbar">
                <NavLink to="top-rated">Top Rated</NavLink>
                <NavLink to="/most-popular">Most Popular</NavLink>
                <NavLink to="/">Home</NavLink>
                <SearchBar movieData={getMovieData} />
            </nav>
        </>
    );
};

export default Navbar;
