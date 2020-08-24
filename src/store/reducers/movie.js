import { FETCH_MOVIES } from '../actions/movie';

export const getMovies = (state = [], action) => {
  switch (action.type) {
    case FETCH_MOVIES:
      return action.payload;
    default:
      return state;
  }
};
