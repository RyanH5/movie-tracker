export const moviesReducer = (state = [], action) => {
  switch (action.type) {
    case 'CAPTURE_MOVIES':
      return [...action.movies];

    default:
      return state;
  }
};

export const favoritesReducer = (state = [], action) => {
  switch (action.type) {
    case 'CAPTURE_FAVORITES':
      return [...action.favorites];

    default:
      return state;
  }
};


