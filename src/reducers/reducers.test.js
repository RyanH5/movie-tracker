import {moviesReducer} from "./moviesReducer";
import * as loginReducer from "./loginReducers"

describe("reducers", () => {
  describe("moviesReducer", () => {
    it("should return default state when it receives no action", () => {
      expect(moviesReducer(undefined, {})).toEqual([]);
    });

    it("should update state with an array of movies", () => {
      const expected = [{}, {}];
      const mockAction = {
        type: "CAPTURE_MOVIES",
        movies: [{}, {}]
      };

      expect(moviesReducer([{}, {}], mockAction)).toEqual(expected);
    });
  });

  describe("loginReducers", () => {
    describe("loginSuccess", () => {
      it("should return default state when it receives no action", () => {
        expect(loginReducer.loginSuccess(undefined, {})).toEqual({})
      });

      it("should update with an object of user data", () => {
        const expectedState = {userId: 1}
        const mockAction = {
          type: 'USER_FETCH_SUCCESS',
          userId: 1
        }

        expect(loginReducer.loginSuccess({} , mockAction)).toEqual(expectedState)
      });
    });

    describe("loginErrored", () => {
      it("should return default state when it receives no action", () => {
        expect(loginReducer.loginErrored(undefined, {})).toEqual(false)
      });

      it("should update state when error occurs", () => {
        const expectedState = true

        const mockAction = {
          type: 'FETCH_ERRORED',
          isErrored: true
        }

        expect(loginReducer.loginErrored(false, mockAction)).toEqual(expectedState)
      });
    });

    describe("loginLoading", () => {
      it("should return default state when it receives no action", () => {
        expect(loginReducer.loginLoading(undefined, {})).toEqual(false)
      });

      it("should update state while loading", () => {
        const expectedState = true

        const mockAction = {
          type: 'FETCH_LOADING',
          isLoading: true
        }

        expect(loginReducer.loginLoading(false, mockAction)).toEqual(expectedState)
      });
    });
  });
});
