import { moviesReducer } from './reducers';

describe('reducers', () => {
  describe('moviesReducer', () => {
    it('it should return default state when it receives no action', () => {
      expect(moviesReducer(undefined, {})).toEqual([]);
    });

    it('should update state with an array of movies', () => {
      const expected = [{}, {}];
      const mockAction = {
        type: 'CAPTURE_MOVIES',
        movies: [{}, {}]
      };

      expect(moviesReducer([{}, {}], mockAction)).toEqual(expected);
    });
  });
});