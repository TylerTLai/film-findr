import {
  FETCH_UPCOMING_MOVIES,
  FETCH_MOST_POPULAR_MOVIES,
  FETCH_TOP_RATED_MOVIES,
} from '../actions/movie';

const initialState = {
  topRated: [],
  mostPopular: [],
}

export const getMovies = (state = [], action) => {
  switch (action.type) {
    case FETCH_UPCOMING_MOVIES:
      return action.payload;

    case FETCH_MOST_POPULAR_MOVIES:
      return action.payload;

    case FETCH_TOP_RATED_MOVIES:
      return action.payload;

    default:
      return state;
  }
};
