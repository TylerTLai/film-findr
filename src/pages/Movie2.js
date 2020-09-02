import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { URL_IMG, BACKDROP_SIZE_ORIGINAL } from '../const';
import { fetchMovieDetails } from '../store/actions/movie';
import { FaStar } from 'react-icons/fa';

const StyledHeroBanner = styled.header`
  background-image: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.8)),
    url(${({ imgURL }) => imgURL});
  height: 600px;
  color: #ffffff;
  padding: 2em;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  & h1 {
    margin: 0;
    font-size: 4em;
    color: #ffffff;
    text-transform: uppercase;
  }

  & h2 {
    margin-top: 0;
    color: #ffffff;
    font-size: 2em;
  }
`;

const StyledStory = styled.div`
  /* background-color: #060507; */
  /* color: white; */
  /* padding: 4em 8em; */

  & h2 {
    font-size: 1.5em;
    font-weight: 700;
  }

  & p {
    font-size: 1.2em;
    line-height: 1.5em;
  }
`;

const StyledCast = styled.div`
  /* background-color: #060507; */
  /* color: white; */
  /* padding: 4em 8em; */

  & h2 {
    font-size: 1.5em;
    font-weight: 700;
  }

  & p {
    font-size: 1.2em;
    line-height: 1.5em;
  }
`;

const StyledDetails = styled.div``;
const StyledMedia = styled.div``;

const StyledInfo = styled.main`
  background-color: #060507;
  color: #fff;
  padding: 4em 8em;
  display: grid;
  gap: 50px;
  grid-template-columns: repeat(2, 1fr);
  grid-template-areas:
    'story details'
    'cast media';

  & ${StyledStory} {
    grid-area: story;
    border: 1px solid white;
  }

  & ${StyledDetails} {
    grid-area: details;
    border: 1px solid white;
  }

  & ${StyledCast} {
    grid-area: cast;
    border: 1px solid white;
  }

  & ${StyledMedia} {
    grid-area: media;
    border: 1px solid white;
  }
`;

function Movie({ movieDetails, fetchMovie, history }) {
  useEffect(() => {
    const movieId = history.location.pathname.slice(1);
    fetchMovie(movieId);
  }, []);

  console.log('from movie', Boolean(movieDetails.tagline));

  const backdropURL =
    URL_IMG + BACKDROP_SIZE_ORIGINAL + movieDetails.backdrop_path;
  //  setMovieInfo({
  //    title: movie.data.title,
  //    year: movie.data.release_date.slice(0, 4),
  //    duration: `${hrs}h${mins}mins`,
  //    rating: movie.data.vote_average,
  //    synoposis: movie.data.overview,
  //    image: imgUrl,
  //    movie_id: movie.data.id,
  //    trailerKey,
  //  });
  return (
    <>
      <StyledHeroBanner imgURL={backdropURL}>
        <h1>{movieDetails.title}</h1>
        {/* <h2>{Boolean(movieDetails.tagline) ? movieDetails.tagline : ""}</h2> */}
        <h2>{movieDetails.tagline}</h2>
        <p>Release Date: {movieDetails.release_date}</p>
        <p>
          Rating: {movieDetails.vote_average}
          <FaStar color="#ffc93c" />
        </p>
      </StyledHeroBanner>

      <StyledInfo>
        <StyledStory>
          <h1>THE STORY</h1>
          <p>{movieDetails.overview}</p>
        </StyledStory>

        <StyledDetails>
          <h1>DETAIL</h1>
          <p>Move details will go here</p>
        </StyledDetails>

        <StyledCast>
          <h1>THE CAST</h1>
          <p>Cast stuff will go here.</p>
        </StyledCast>

        <StyledMedia>
          <h1>MEDIA</h1>
          <p>Media stuff will go here.</p>
        </StyledMedia>
      </StyledInfo>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    movieDetails: state.getMovies.movieDetails,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchMovie: (movieId) => dispatch(fetchMovieDetails(movieId)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Movie);
