import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import {fetchIsLoading,
  fetchErrored,
  userFetchSuccess,
  fetchDatabase,
  findUser} from './index';

describe("Login Actions", () => {
  describe("fetchIsLoading", () => {
    it("should return type FETCH_LOADING", () => {
      const bool = false;
      const expected = {
        type: 'FETCH_LOADING',
        isLoading: bool
      };
      expect(fetchIsLoading(bool)).toEqual(expected);
    });
  });

  describe("fetchErrored", () => {
    it("should return type FETCH_ERRORED", () => {
      const bool = false;
      const expected = {
        type: 'FETCH_ERRORED',
        isErrored: bool
      };
      expect(fetchErrored(bool)).toEqual(expected);
    });
  });

  describe("userFetchSuccess", () => {
    it("should return type USER_FETCH_SUCCESS", () => {
      // const user = {
      //   email: 'howiedewitt@aol.com',
      //   password: 'pass'
      // };
      const userId = {userId: 3};
      const expected = {
        type: 'USER_FETCH_SUCCESS',
        userId
      };
      expect(userFetchSuccess(userId)).toEqual(expected);
    });
  });
});

describe("fetchDatabase", () => {
  it("should call fetch with correct parameters", async () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        status: 200,
        json: () => Promise.resolve({})
      });
    });

    const mockUrl = 'www.ok.com';
    const mockEmail = 'ok@gmail.com';
    const mockPassword = 'password';
    const expected = [
      'www.ok.com',
      {
        method: 'POST',
        body: JSON.stringify(
          {
            password: mockPassword,
            email: mockEmail
          }
        ),
        headers: {
          'Content-Type': 'application/json'
        }
      }
    ];
    const mockDispatch = jest.fn();
    const thunk = fetchDatabase(mockUrl, mockEmail, mockPassword);
    await thunk(mockDispatch);

    expect(window.fetch).toHaveBeenCalledWith(...expected);
  });


  it("should dispatch fetchErrored if fetch fails", async () => { 
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.reject(Error('could not fetch'));
    });

    const mockUrl = 'www.ok.com';
    const mockEmail = 'ok@gmail.com';
    const mockPassword = 'password';
    const mockDispatch = jest.fn();
    
    const expected = fetchErrored(false);
    const thunk = fetchDatabase(mockUrl, mockEmail, mockPassword);

    await thunk(mockDispatch)
    expect(mockDispatch).toHaveBeenCalledWith(expected);

  });

  it.skip("should call userFetchSuccess if status is okay", () => {

  });
});