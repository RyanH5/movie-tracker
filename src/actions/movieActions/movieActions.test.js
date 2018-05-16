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
});
