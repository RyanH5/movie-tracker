import * as actions from './movieActions';

describe('Actions', () => {
  describe('captureMovies', () => {
    it('return an action of type CAPTURE_MOVIES', () => {
      let movies = [{}, {}, {}];
      const expected = {
        type: 'CAPTURE_MOVIES',
        movies: movies
      };
      expect(actions.captureMovies(movies)).toEqual(expected);
    });
  });

  describe('captureFavorites', () => {
    it('return an action of type CAPTURE_FAVORITES', () => {
      let favorites = [{}, {}, {}];
      const expected = {
        type: 'CAPTURE_FAVORITES',
        favorites: favorites
      };
      expect(actions.captureFavorites(favorites)).toEqual(expected);
    });
  });
});
