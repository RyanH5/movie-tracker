import { combineReducers } from 'redux';
import moviesReducer from './moviesReducer';
import { loginSuccess, loginErrored, loginLoading } from './loginReducers';

const rootReducer = combineReducers(
  {
    movies: moviesReducer,
    loginSuccess,
    loginErrored,
    loginLoading
  }
);

export default rootReducer;
