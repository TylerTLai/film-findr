import axios from 'axios';
import { URL_UPCOMING, URL_TOP_RATED } from '../../const';

export const FETCH_MOVIES = 'FETCH_MOVIES';
export const FETCH_TOP_RATED = 'FETCH_TOP_RATED';

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
