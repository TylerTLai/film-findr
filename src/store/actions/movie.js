import axios from 'axios';

export const FETCH_MOVIES = 'FETCH_MOVIES';

const API_KEY = process.env.REACT_APP_TMDB_KEY;
const url = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`;

export const fetchMovies = () => {
  return async (dispatch) => {
    const response = await axios.get(url);
    dispatch({
      type: FETCH_MOVIES,
      payload: response.data.results,
    });
  };
};
