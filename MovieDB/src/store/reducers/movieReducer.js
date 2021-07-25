const MOVIE_STATE = {
  movies: [],
};

export const reducer = (state = MOVIE_STATE, action) => {
  switch (action.type) {
    case 'VALIDAR':
      return {...state, action};
    default:
      return state;
  }
};
