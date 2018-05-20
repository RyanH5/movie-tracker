import { combineReducers } from 'redux';
import moviesReducer from './moviesReducer';
import { loginSuccess, loginErrored, loginLoading } from './loginReducers';
import { newUserId, invalidForm, createAccountFailed } from './createUserReducers'

const rootReducer = combineReducers(
  {
    movies: moviesReducer,
    loginSuccess,
    loginErrored,
    loginLoading,
    newUserId,
    invalidForm,
    createAccountFailed
  }
);

export default rootReducer;
