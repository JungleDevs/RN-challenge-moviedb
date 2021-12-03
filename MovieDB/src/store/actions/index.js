export const SET_MOVIE_LIST = 'SET_MOVIE_LIST';
export const SET_LOADING = 'SET_LOADING';

export const setMovieList = movieList => dispatch => {
  dispatch({
    type: SET_MOVIE_LIST,
    payload: movieList,
  });
};

export const setLoading = loading => dispatch => {
  dispatch({
    type: SET_LOADING,
    payload: loading,
  });
};
