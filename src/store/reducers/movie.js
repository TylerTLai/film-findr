import {
  FETCH_UPCOMING_MOVIES,
  FETCH_MOST_POPULAR_MOVIES,
  FETCH_TOP_RATED_MOVIES,
  FETCH_NOW_PLAYING_MOVIES,
  FETCH_MOVIE_DETAILS,
} from '../actions/movie';

const initialState = {
  upcoming: [],
  topRated: [],
  mostPopular: [],
  nowPlaying: [],
  movieDetails: [],
};

export const getMovies = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_UPCOMING_MOVIES:
      return { ...state, upcoming: action.payload };

    case FETCH_MOST_POPULAR_MOVIES:
      return { ...state, mostPopular: action.payload };

    case FETCH_TOP_RATED_MOVIES:
      return { ...state, topRated: action.payload };

    case FETCH_NOW_PLAYING_MOVIES:
      return { ...state, nowPlaying: action.payload };

    case FETCH_MOVIE_DETAILS:
      return { ...state, movieDetails: action.payload };

    default:
      return state;
  }
};
