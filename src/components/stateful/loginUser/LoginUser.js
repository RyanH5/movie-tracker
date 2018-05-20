import React, { Component } from 'react';
import { fetchDatabase } from '../../../actions/loginActions';
import { connect } from 'react-redux';
import './LoginUser.css'

class LoginUser extends Component {
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

  handleSubmit = (event) => {
    event.preventDefault();
    const url = 'http://localhost:3000/api/users';
    this.props.fetchDatabase(url, this.state.email, this.state.password);
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
                placeholder="ex. Jsmith@gmail.com"
                onChange={this.handleChange}
              />
            </div>
            <div className="wrap-input">
              <input
                type="text"
                name="password"
                value={this.state.password}
                placeholder="PASSWORD"
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
  fetchDatabase: (url, email, password) => dispatch(fetchDatabase(url, email, password))
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginUser);
