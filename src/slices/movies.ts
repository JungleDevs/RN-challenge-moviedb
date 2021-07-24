import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '.';
import { Movie } from '../services/api';

interface MoviesState {
  movies: Movie[];
  currentMovie: Movie;
}

const initialState: MoviesState = {
  movies: [],
  currentMovie: {} as Movie,
};

export const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    setMovies: (state, { payload }) => {
      state.movies = payload;
    },
    setCurrentMovie: (state, { payload }) => {
      state.currentMovie = payload;
    },
  },
});

const { actions, reducer } = moviesSlice;
export const { setMovies, setCurrentMovie } = actions;

export const selectMovies = (state: RootState): Movie[] => state.movies.movies;
export const selectCurrentMovie = (state: RootState): Movie =>
  state.movies.currentMovie;

export default reducer;
