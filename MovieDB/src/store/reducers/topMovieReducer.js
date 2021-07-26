import {SET_MOVIE_LIST, SET_LOADING} from '../actions';

const MOVIE_STATE = {
  movieList: [],
  loading: true,
};

const topMovieUserReducerMovie = (state = MOVIE_STATE, action) => {
  switch (action.type) {
    case SET_MOVIE_LIST:
      return {movieList: action.payload};
    case SET_LOADING:
      return {...state, loading: action.payload};
    default:
      return state;
  }
};

export default topMovieUserReducerMovie;
