import { moviesReducer } from './reducers';
import * as actions from '../actions/movieActions/movieActions';

describe('reducers', () => {
  describe('moviesReducer', () => {
    it('it should return default state when it receives no action', () => {
      expect(moviesReducer(undefined, {})).toEqual([]);
    });

    it('should update state with an array of movies', () => {
      const expected = [{}, {}];
      expect(moviesReducer([{}, {}], 'CAPTURE_MOVIES')).toEqual(expected);
    });
  });
});