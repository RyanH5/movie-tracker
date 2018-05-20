import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink, Route } from 'react-router-dom';
import { captureMovies } from '../../../actions/movieActions/movieActions';
import { cleanMovieData } from '../../../helpers';
import PropTypes from 'prop-types';
import CreateUser from '../../stateful/createUser/CreateUser';
import LoginUser from '../../stateful/loginUser/LoginUser';
import MovieContainer from '../../stateful/movieContainer/MovieContainer';
import Favorites from '../Favorites/Favorites'
import './styles.css';
import logo from '../../../assets/MM-logo.png';

export class App extends Component {
  render () {
    return (
      <div className="App">
        <header className="App-header  ">
          <div className="inner-col d-flex flex-justify-between">
            <img src={logo} sizes="100vw" alt="Movie Tracker Logo" />
              <nav>
                <li><NavLink to="/login" className="login">Login</NavLink></li>
                <li><NavLink to="/createUser" className="create-user">Create User</NavLink></li>
                <li><NavLink to="/favorites" className="favorites">Favorites</NavLink></li>
                <li><NavLink to="/" className="home">Logout</NavLink></li>
              </nav>
          </div>
        </header>
        <Route exact path='/' component={MovieContainer} />
        <Route exact path='/login' component={LoginUser} />
        <Route exact path='/createUser' component={CreateUser} />
        <Route exact path='/favorites' component={Favorites} />
      </div>
    );
  };
}

App.propTypes = {
  captureMovies: PropTypes.func.isRequired,
  movies: PropTypes.array.isRequired,
  displayMovies: PropTypes.func.isRequired
};

export default App;