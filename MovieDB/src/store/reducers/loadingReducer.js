import {SET_LOADING} from '../actions';

const LOADING_STATE = {
  loading: true,
};

const userReducerLoading = (state = LOADING_STATE, action) => {
  switch (action.type) {
    case SET_LOADING:
      return {...state, loading: action.payload};
    default:
      return state;
  }
};

export default userReducerLoading;
