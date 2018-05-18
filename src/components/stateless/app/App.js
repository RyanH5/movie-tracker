import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink, Route } from 'react-router-dom';
import { captureMovies } from '../../../actions/movieActions/movieActions';
import { cleanMovieData } from '../../../helpers';
import PropTypes from 'prop-types';
import CreateUser from '../../stateful/createUser/CreateUser';
import LoginUser from '../../stateful/loginUser/LoginUser';
import MovieContainer from '../../stateful/movieContainer/MovieContainer';
import './styles.css';

export class App extends Component {
  render () {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Movie Tracker</h1>
            <NavLink to="/login" className="login">Login</NavLink>
            <NavLink to="/createUser" className="create-user">Create User</NavLink>
        </header>
        <Route exact path='/' component={MovieContainer} />
      </div>
    );
  };
};

App.propTypes = {
  captureMovies: PropTypes.func.isRequired,
  movies: PropTypes.array.isRequired,
  displayMovies: PropTypes.func.isRequired
};

export default App;
