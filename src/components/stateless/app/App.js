import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink, Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import CreateUser from '../../stateful/createUser/CreateUser';
import LoginUser from '../../stateful/loginUser/LoginUser';
import MovieContainer from '../../stateful/movieContainer/MovieContainer';
import Favorites from '../Favorites/Favorites';
import './styles.css';
import logo from '../../../assets/MM-logo.png';
import { withRouter } from 'react-router-dom';

export class App extends Component {

  handleLogout = () => {
    this.props.userSignOut(this.props.loginSuccess);
    this.props.history.push('/');
  };

  render () {
    const userLoggedInStatus = Object.values(this.props.loginSuccess).length > 0;
    const favoritesPath = userLoggedInStatus ? '/favorites' : '/login';
    return (
      <div className="App">
        <header className="App-header  ">
          <div className="inner-col d-flex flex-justify-between">
            <NavLink to="/" className="home"><img src={logo} sizes="100vw" alt="Movie Tracker Logo" /></NavLink>
            <nav>
              <ul>
                {
                  !userLoggedInStatus &&
                    <li><NavLink to="/login" className="login">Login</NavLink></li>
                }
                {
                  userLoggedInStatus &&
                    <li><NavLink to="/" className="home" onClick={this.handleLogout}>Logout</NavLink></li>
                }
                <li><NavLink to="/createUser" className="create-user">Create User</NavLink></li>
                <li><NavLink to={favoritesPath} className="favorites">Favorites</NavLink></li>
              </ul>
            </nav>
          </div>
        </header>
        <Route exact path='/' component={MovieContainer} />
        <Route exact path='/login' component={LoginUser} />
        <Route exact path='/createUser' component={CreateUser} />
        <Route exact path='/favorites' component={MovieContainer} />
      </div>
    );
  }
}

App.propTypes = {
  movies: PropTypes.array,
  displayMovies: PropTypes.func
};

const mapStateToProps = state => ({
  loginSuccess: state.loginSuccess
});

const mapDispatchToProps = (dispatch) => ({
  userSignOut: (id) => dispatch(this.userSignOut(id))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
