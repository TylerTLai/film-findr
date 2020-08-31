import axios from 'axios';
import {
  URL_UPCOMING,
  URL_POPULAR,
  URL_TOP_RATED,
  URL_NOW_PLAYING,
} from '../../const';

export const FETCH_UPCOMING_MOVIES = 'FETCH_MOVIES';
export const FETCH_MOST_POPULAR_MOVIES = 'FETCH_MOST_POPULAR_MOVIES';
export const FETCH_TOP_RATED_MOVIES = 'FETCH_TOP_RATED_MOVIES';
export const FETCH_NOW_PLAYING_MOVIES = 'FETCH_NOW_PLAYING_MOVIES';

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
