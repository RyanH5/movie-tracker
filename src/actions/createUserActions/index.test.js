import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import {
  userCreateSuccess,
  requiredIncomplete,
  creationDenied,
  createNewUser,
} from './index';

// test TYPE of each action
// createNewUser called w/ correct params
// success, fail etc

describe('CreateUserActions', () => {
  describe('userCreateSuccess', () => {
    it('should return type CREATE_USER_SUCCESS', () => {
      const id = {userId: 3};
      const expected = {
        type: 'CREATE_USER_SUCCESS',
        id
      };
      expect(userCreateSuccess(id)).toEqual(expected);
    });
  });

  describe('requiredIncomplete', () => {
    it('should return type INCOMPLETE_ENTRIES', () => {
      const bool = true;
      const fieldsIncomplete = bool;
      const expected = {
        type: 'INCOMPLETE_ENTRIES',
        fieldsIncomplete
      };
  
      expect(requiredIncomplete(bool)).toEqual(expected);
    });
  });

  describe('creationDenied', () => {

  });
});