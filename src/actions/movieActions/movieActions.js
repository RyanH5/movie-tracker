export const captureMovies = movies => (
  {
    type: 'CAPTURE_MOVIES',
    movies
  }
);

export const captureFavorites = favorites => (
  {
    type: 'CAPTURE_FAVORITES',
    favorites
  }
);  
