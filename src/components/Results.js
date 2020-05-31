import React from 'react';

import MovieCardList from './MovieCardList';

const Results = ({ movieData, searchTerm }) => {
  let term = searchTerm !== '' ? `for "${searchTerm}"` : null;

  return (
    <div>
      <h2 style={{ textAlign: 'center' }}>Search results {term}</h2>
      <MovieCardList movies={movieData} />
    </div>
  );
};

export default Results;
