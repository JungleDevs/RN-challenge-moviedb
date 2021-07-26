import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '.';
import { Genre, Movie } from '../services/api';

interface MoviesState {
  movies: Movie[];
  currentMovie: CurrentMovie;
  genres: Genre[];
}

interface CurrentMovie {
  image: string;
  isFirst: boolean;
  title: string;
  genres: string[];
  year: string;
  rating: number;
  overview: string;
}

const initialState: MoviesState = {
  movies: [],
  currentMovie: {} as CurrentMovie,
  genres: [],
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
    setGenres: (state, { payload }) => {
      state.genres = payload;
    },
  },
});

const { actions, reducer } = moviesSlice;
export const { setMovies, setCurrentMovie, setGenres } = actions;

export const selectMovies = (state: RootState): Movie[] => state.movies.movies;
export const selectCurrentMovie = (state: RootState): CurrentMovie =>
  state.movies.currentMovie;
export const selectGenres = (state: RootState): Genre[] => state.movies.genres;

export default reducer;
