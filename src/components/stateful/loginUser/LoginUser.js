import React, { Component } from 'react';
import { fetchDatabase } from '../../../actions/loginActions';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchFavorites } from '../api/Api';

import './LoginUser.css';
import { captureFavorites } from '../../../actions/movieActions/movieActions';

export class LoginUser extends Component {
  constructor () {
    super();
    this.state = {
      password: '',
      email: ''
    };
  }

  handleChange = (event) => {
    const {name, value} = event.target;
    this.setState({[name]: value});
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    const url = 'http://localhost:3000/api/users';
    await this.props.fetchDatabase(url, this.state.email, this.state.password);
    if (this.props.loginSuccess) {
      const favorites = await fetchFavorites(this.props.loginSuccess.userId);
      this.props.captureFavorites(favorites);
      this.props.history.push('/');
    }
  };

  render () {
    return (
      <div className="login-user-container d-flex">
        <div className="login-user-form-wrapper">
          <form onSubmit={this.handleSubmit}>
            <span className="">
						Login User
					  </span>
            {this.props.loginErrored &&
            <p>Email and password do not match</p>
            }
            <div className="wrap-input top">
              <input
                type="text"
                name="email"
                value={this.state.email}
                placeholder="ex. example@gmail.com"
                onChange={this.handleChange}
              />
            </div>
            <div className="wrap-input">
              <input
                type="text"
                name="password"
                value={this.state.password}
                placeholder="password"
                onChange={this.handleChange}
              />
            </div>
            <button>LOG-IN</button>
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  loginSuccess: state.loginSuccess,
  loginErrored: state.loginErrored,
  loginLoading: state.loginLoading
});

const mapDispatchToProps = (dispatch) => ({
  fetchDatabase: (url, email, password) => dispatch(fetchDatabase(url, email, password)),
  captureFavorites: (favorites) => dispatch(captureFavorites(favorites))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(LoginUser));
