const moviesReducer = (state = [], action) => {
  switch (action.type) {
    case 'CAPTURE_MOVIES':
      return [...action.movies];

    default:
      return state;
  }
};

export default moviesReducer
