import { combineReducers } from 'redux';
import { moviesReducer, favoritesReducer } from './moviesReducer';
import { loginSuccess, loginErrored, loginLoading } from './loginReducers';
import { newUserId, invalidForm, createAccountFailed, createUserSuccess } from './createUserReducers';

const rootReducer = combineReducers(
  {
    movies: moviesReducer,
    favorites: favoritesReducer,
    loginSuccess,
    loginErrored,
    loginLoading,
    newUserId,
    invalidForm,
    createAccountFailed,
    createUserSuccess
  }
);

export default rootReducer;
