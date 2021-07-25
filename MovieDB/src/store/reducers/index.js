import {combineReducers} from 'redux';
import movieReducer from '../reducers/movieReducer';

const reducers = combineReducers({movies: movieReducer});

export default reducers;
