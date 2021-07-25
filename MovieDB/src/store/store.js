import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import userReducerMovie from './reducers/movieReducer';

const rootReducer = combineReducers({userReducerMovie});

export const Store = createStore(rootReducer, applyMiddleware(thunk));
