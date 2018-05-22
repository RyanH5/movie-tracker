import {
  userCreateSuccess,
  requiredIncomplete,
  fetchIsLoading,
  creationDenied,
  createNewUser
} from './index';

describe('CreateUserActions', () => {
  let mockUrl;
  let mockEmail;
  let mockPassword;
  let mockDispatch;
  let mockUserId;
  let mockName;
  let thunk;

  beforeEach(() => {
    mockUrl = 'www.ok.com';
    mockName = 'Banana-George';
    mockEmail = 'ok@gmail.com';
    mockPassword = 'password';
    mockDispatch = jest.fn();
    mockUserId = 4;
    thunk = createNewUser(mockName, mockEmail, mockPassword);
  });

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
    it('should return type EMAIL_NOT_AVAILABLE', () => {
      const bool = false;
      const emailBeingUsed = bool;
      const expected = {
        type: 'EMAIL_NOT_AVAILABLE',
        emailBeingUsed
      };

      expect(creationDenied(bool)).toEqual(expected);
    });
  });

  describe('createNewUser', () => {
    it('should dispatch fetchIsLoading by default', async () => {
      const expected = fetchIsLoading(true);

      await thunk(mockDispatch);
      expect(mockDispatch).toHaveBeenCalledWith(expected);
    });

    it('should dispatch requiredIncomplete by default', async () => {
      const expected = requiredIncomplete(false);

      await thunk(mockDispatch);
      expect(mockDispatch).toHaveBeenCalledWith(expected);
    });

    it('should dispatch createionDenied by default', async () => {
      const expected = creationDenied(false);

      await thunk(mockDispatch);
      expect(mockDispatch).toHaveBeenCalledWith(expected);
    });

    it('should dispatch requiredIncomplete again if user leaves field empty', async () => {
      const expected = requiredIncomplete(true);
      const badThunk = createNewUser(mockEmail, mockPassword);

      await badThunk(mockDispatch);
      expect(mockDispatch).toHaveBeenCalledWith(expected);
    });

    it('should call fetch with the correct parameters', async () => {
      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.resolve({
          status: 200,
          json: () => Promise.resolve({})
        });
      });

      const expected = [mockUrl, {
        method: 'POST',
        body: JSON.stringify(
          {
            name: mockName,
            email: mockEmail,
            password: mockPassword
          }
        ),
        headers: {
          'Content-Type': 'application/json'
        }
      }];
      const thunk = createNewUser(mockUrl, mockName, mockEmail, mockPassword);
      await thunk(mockDispatch);

      expect(window.fetch).toHaveBeenCalledWith(...expected);
    });

    it.skip('should dispatch userCreateSuccess if status is ok', () => {

    });
    it.skip('should throw error is status in not ok', () => {

    });
    it.skip('should throw an error if the fetch fails', () => {

    });
  });
});
















