const initialState = [];

export const moviesReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CAPTURE_MOVIES':
      return action.movies;

    default:
      return state;
  }
};

