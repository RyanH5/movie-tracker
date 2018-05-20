import { combineReducers } from 'redux';
import moviesReducer from './moviesReducer';
import { loginSuccess, loginErrored, loginLoading } from './loginReducers';
import { userCreationSuccess as userCreated } from './createUserReducers'

const rootReducer = combineReducers(
  {
    movies: moviesReducer,
    loginSuccess,
    loginErrored,
    loginLoading,
    userCreated
  }
);

export default rootReducer;
