import { combineReducers } from 'redux';
import moviesReducer from './moviesReducer';
import { loginSuccess, loginErrored, loginLoading } from './loginReducers';
import { newUserId, creationFailed } from './createUserReducers'

const rootReducer = combineReducers(
  {
    movies: moviesReducer,
    loginSuccess,
    loginErrored,
    loginLoading,
    newUserId,
    creationFailed
  }
);

export default rootReducer;
