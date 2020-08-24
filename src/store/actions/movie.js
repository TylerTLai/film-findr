import axios from 'axios';
import { URL_UPCOMING } from '../../const';

export const FETCH_MOVIES = 'FETCH_MOVIES';

const API_KEY = process.env.REACT_APP_TMDB_KEY;
const url = URL_UPCOMING + API_KEY;

export const fetchMovies = () => {
  return async (dispatch) => {
    const response = await axios.get(url);
    dispatch({
      type: FETCH_MOVIES,
      payload: response.data.results,
    });
  };
};
