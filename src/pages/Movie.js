import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { URL_IMG, BACKDROP_SIZE_ORIGINAL } from '../const';
import {
  fetchMovieDetails,
  fetchCredits,
  fetchVideos,
} from '../store/actions/movie';
// import { FaStar } from 'react-icons/fa';
import { BsArrowLeft } from 'react-icons/bs';
import theme from '../styles/theme';
// import { Palette } from 'color-thief-react';
// import { usePalette } from 'color-thief-react';
import Modal from '../components/Modal/Modal';

const StyledDetails = styled.div`
  color: ${theme.colors.white};
  padding: 2em;

  & .backArrow {
    color: ${theme.colors.gray};
    font-size: 3em;
    transition: 0.1s ease-in-out;

    &:hover {
      color: ${theme.colors.lightTeal};
      cursor: pointer;
    }
  }

  & h1 {
    font-size: 3em;
    color: ${theme.colors.white};
    text-transform: uppercase;
  }

  & h2 {
    color: ${theme.colors.lightTeal};
    font-size: 1.5em;
  }

  & h3 {
    color: ${theme.colors.gray};

    & p {
      color: ${theme.colors.lightTeal};
      font-size: 0.8em;
      letter-spacing: 2px;
    }
  }

  & p {
    line-height: 2;
  }

  & button {
    display: inline-block;
    border: none;
    color: ${theme.colors.white};
    padding: 1em 1.5em;
    background-color: ${theme.colors.teal};
    border-radius: 5px;
    transition: 0.2s ease-in-out;

    &:hover {
      background-color: ${theme.colors.lightTeal};
      cursor: pointer;
    }
  }
`;

const StyledInfo = styled.div`
  margin-top: 1em;
  display: grid;
  grid-auto-flow: column;
  grid-gap: 1px;
`;

const StyledBackdrop = styled.div`
  background-image: linear-gradient(
      to right,
      ${theme.colors.black} 1%,
      rgba(0, 0, 0, 0) 10%,
      rgba(0, 0, 0, 0)
    ),
    url(${({ imgURL }) => imgURL});
  background-size: cover;
  background-position: center;
  width: 65vw;
  background-repeat: no-repeat;
`;

const StyledTopContainer = styled.div`
  background-color: ${theme.colors.black};
  display: grid;
  grid-template-columns: 1fr, 2fr;
  grid-template-areas: 'details backdrop';
  height: 100%;

  & ${StyledDetails} {
    grid-area: details;
  }

  & ${StyledBackdrop} {
    grid-area: backdrop;
  }
`;

const StyledBottomContainer = styled.div`
  display: grid;
  background-color: ${theme.colors.black};
  color: ${theme.colors.white};
  padding: 2em;

  & h1 {
    font-size: 3em;
  }
`;

function Movie({
  movieDetails,
  fetchMovie,
  fetchCredits,
  fetchVideos,
  credits,
  videos,
  history,
  ...props
}) {
  useEffect(() => {
    // const movieId = history.location.pathname.slice(1);
    const movieId = props.match.params.movie_id;

    fetchMovie(movieId);
    fetchVideos(movieId);
    fetchCredits(movieId);
  }, []);

  const [showModal, setShowModal] = useState(false);

  // console.log('from movie credit', credits.cast);
  // console.log('from movie vide', videos);
  // const cast = credits.map((castMember) => castMember);

  const trailerKey =
    videos !== 'undefined' && videos.length > 0
      ? videos.filter((video) => video.site === 'YouTube')[0].key
      : 'no key';
  // const genres = [];
  // const casts = credits.cast
  //   .slice(0, 8)
  //   .filter((cast) => cast.profile_path !== null);
  // const casts = credits.cast.map(cast => console.log(cast))

  const backdropURL =
    URL_IMG + BACKDROP_SIZE_ORIGINAL + movieDetails.backdrop_path;

  const showTrailer = () => {
    setShowModal((prevState) => !prevState);
  };

  return (
    <>
      <Modal
        showModal={showModal}
        setShowModal={setShowModal}
        trailerKey={trailerKey}
      />
      <StyledTopContainer>
        <StyledDetails>
          <BsArrowLeft className="backArrow" onClick={history.goBack} />

          {/* <Palette
            src={backdropURL}
            crossOrigin="anonymous"
            format="hex"
            colorCount={4}
          >
            {({ data, loading }) => {
              if (loading) return 'loading';
              return (
                <div>
                  <h1 style={{ color: data[1] }}>{movieDetails.title}</h1>
                  <ul>
                    {data.map((color, index) => (
                      <li key={index} style={{ color: color }}>
                        <strong>{color}</strong>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            }}
          </Palette> */}

          <h1 style={{ color: `${theme.colors.white}` }}>
            {movieDetails.title}
          </h1>
          <h2>{movieDetails.tagline}</h2>
          <button onClick={showTrailer}>WATCH TRAILER</button>

          <StyledInfo>
            <h3>
              Release Date <p>{movieDetails.release_date}</p>
            </h3>
            <h3>
              Rating
              <p>{movieDetails.vote_average} | 10</p>
            </h3>
            <h3>
              Runtime <p>{movieDetails.runtime} mins</p>
            </h3>
          </StyledInfo>

          <h3>Plot</h3>
          <p>{movieDetails.overview}</p>
        </StyledDetails>
        <StyledBackdrop imgURL={backdropURL}></StyledBackdrop>
      </StyledTopContainer>
      <StyledBottomContainer>
        {/* <h1>Cast & Crew</h1> */}
        {/* <p>{cast}</p> */}
        {/* <h1>Images</h1> */}
      </StyledBottomContainer>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    movieDetails: state.getMovies.movieDetails,
    credits: state.getMovies.credits,
    videos: state.getMovies.videos,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchMovie: (movieId) => dispatch(fetchMovieDetails(movieId)),
    fetchCredits: (movieId) => dispatch(fetchCredits(movieId)),
    fetchVideos: (movieId) => dispatch(fetchVideos(movieId)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Movie);
