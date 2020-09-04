import axios from 'axios';
import {
  URL_UPCOMING,
  URL_POPULAR,
  URL_TOP_RATED,
  URL_NOW_PLAYING,
  URL_DETAIL,
} from '../../const';

export const FETCH_UPCOMING_MOVIES = 'FETCH_MOVIES';
export const FETCH_MOST_POPULAR_MOVIES = 'FETCH_MOST_POPULAR_MOVIES';
export const FETCH_TOP_RATED_MOVIES = 'FETCH_TOP_RATED_MOVIES';
export const FETCH_NOW_PLAYING_MOVIES = 'FETCH_NOW_PLAYING_MOVIES';
export const FETCH_MOVIE_DETAILS = 'FETCH_MOVIE_DETAILS';
export const FETCH_CREDITS = 'FETCH_CREDITS';
export const FETCH_VIDEOS = 'FETCH_VIDEOS';

const API_KEY = process.env.REACT_APP_TMDB_KEY;

export const fetchUpcomingMovies = () => {
  return async (dispatch) => {
    const response = await axios.get(URL_UPCOMING + API_KEY);
    dispatch({
      type: FETCH_UPCOMING_MOVIES,
      payload: response.data.results,
    });
  };
};

export const fetchMostPopularMovies = () => {
  return async (dispatch) => {
    const response = await axios.get(URL_POPULAR + API_KEY);
    dispatch({
      type: FETCH_MOST_POPULAR_MOVIES,
      payload: response.data.results,
    });
  };
};

export const fetchTopRatedMovies = () => {
  return async (dispatch) => {
    const response = await axios.get(URL_TOP_RATED + API_KEY);
    dispatch({
      type: FETCH_TOP_RATED_MOVIES,
      payload: response.data.results,
    });
  };
};

export const fetchNowPlayingMovies = () => {
  return async (dispatch) => {
    const response = await axios.get(URL_NOW_PLAYING + API_KEY);
    dispatch({
      type: FETCH_NOW_PLAYING_MOVIES,
      payload: response.data.results,
    });
  };
};

export const fetchMovieDetails = (id) => {
  const url = `${URL_DETAIL}${id}?api_key=${API_KEY}`;
  //id: 605116 (project power)
console.log('from fetchmoviedetails', id)
  return async (dispatch) => {
    const response = await axios.get(url);

    dispatch({
      type: FETCH_MOVIE_DETAILS,
      payload: response.data,
    });
  };
};

export const fetchVideos = (id) => {
  const videosUrl = `${URL_DETAIL}${id}/videos?api_key=${API_KEY}`;
  return async (dispatch) => {
    const response = await axios.get(videosUrl);
    // console.log('from actions video,', videosUrl)
    dispatch({
      type: FETCH_VIDEOS,
      payload: response.data.results,
    });
  };
};

export const fetchCredits = (id) => {
  const creditsUrl = `${URL_DETAIL}${id}/credits?api_key=${API_KEY}`;

  return async (dispatch) => {
    const response = await axios.get(creditsUrl);
    dispatch({
      type: FETCH_CREDITS,
      payload: response.data,
    });
  };
};
