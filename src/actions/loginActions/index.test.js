import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'

import {fetchIsLoading,
        fetchErrored,
        userFetchSuccess,
        fetchDatabase,
        findUser} from './index'

describe("Login Actions", () => {
  describe("fetchIsLoading", () => {
    it("should return type FETCH_LOADING", () => {
      const bool = false
      const expected = {
        type: 'FETCH_LOADING',
        isLoading: bool
      }
      expect(fetchIsLoading(bool)).toEqual(expected)
    });
  });

  describe("fetchErrored", () => {
    it("should return type FETCH_ERRORED", () => {
      const bool = false
      const expected = {
        type: 'FETCH_ERRORED',
        isErrored: bool
      }
      expect(fetchErrored(bool)).toEqual(expected)
    });
  });

  describe("userFetchSuccess", () => {
    it("should return type USER_FETCH_SUCCESS", () => {
      const user = {
        email: 'howiedewitt@aol.com',
        password: 'pass'
      }
      const expected = {
        type: 'USER_FETCH_SUCCESS',
        user
      }
      expect(userFetchSuccess(user)).toEqual(expected)
    });
  });
});

describe("fetchDatabase", () => {
  let mockUrl;
  let mockEmail;
  let mockPassword;
  let mockData;
  beforeEach(() => {
    mockUrl = 'fake.url'
    mockEmail = 'fakemail@gmail.com'
    mockPassword = 'pass'
    mockData = {
      id: 'userID',
      email: mockEmail,
      password: mockPassword,
      name: 'name'
    }
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        status: 200,
        json: () => Promise.resolve(mockData)
      })
    });
  })
  it("should call fetch with correct parameters", () => {
    fetchDatabase(mockUrl, mockEmail, mockPassword)
    expect(window.fetch).toHaveBeenCalledWith(mockUrl)
  });

  it("should call fetchErrored if status is not okay", () => {

  });

  it("should call userFetchSuccess if status is okay", () => {

  });
});

describe("findUser", () => {
  it("should return user when called with correct parameters", () => {

  });
});
