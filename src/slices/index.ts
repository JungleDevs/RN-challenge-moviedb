import { configureStore, combineReducers } from '@reduxjs/toolkit';

import movies from './movies';

const reducers = combineReducers({
  movies,
});

export type RootState = ReturnType<typeof reducers>;

const store = configureStore({
  reducer: reducers,
});

export { store };
