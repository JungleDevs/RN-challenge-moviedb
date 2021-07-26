import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import userReducerMovie from './reducers/movieReducer';
import topMovieUserReducerMovie from './reducers/topMovieReducer';
import searchMovieUserReducerMovie from './reducers/searchMovieReducer';

const rootReducer = combineReducers({
  userReducerMovie,
  topMovieUserReducerMovie,
  searchMovieUserReducerMovie,
});

export const Store = createStore(rootReducer, applyMiddleware(thunk));
