import React, { Component } from 'react';
import { createNewUser, userCreateSuccess } from '../../../actions/createUserActions';
import { connect } from 'react-redux';
import './CreateUser.css';

export class CreateUser extends Component {
  constructor () {
    super();
    this.state = {
      name: '',
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
    const {name, email, password} = this.state;
    const url = 'http://localhost:3000/api/users/new';
    await this.props.createNewUser(url, name, email, password);
    if (this.props.loginSuccess &&
      !this.props.invalidForm) {
      this.props.history.push('/')
    }
  };

  render () {
    return (
      <div className="create-user-container d-flex">
        <div className="create-user-form-wrapper">
          <form onSubmit={this.handleSubmit}>
            <span className="">
						Create User
					  </span>
            {
              this.props.invalidForm &&
              <p>Please complete required fields.</p>
            }
            {
              this.props.createAccountFailed &&
              <p>Email is already being used.</p>
            }
            <div className="wrap-input top">
              <input
                type="text"
                name="name"
                value={this.state.name}
                placeholder="ex. John Smith"
                onChange={this.handleChange}
              />
            </div>
            <div className="wrap-input">
              <input
                type="text"
                name="email"
                value={this.state.email}
                placeholder="ex. Jsmith@gmail.com"
                onChange={this.handleChange}
              />
            </div>
            <div className="wrap-input bottom">
              <input
                type="text"
                name="password"
                value={this.state.password}
                placeholder="PASSWORD"
                onChange={this.handleChange}
              />
            </div>
            <button>SIGN-UP</button>
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  newUserId: state.newUserId,
  invalidForm: state.invalidForm,
  createAccountFailed: state.createAccountFailed,
  loginSuccess: state.loginSuccess
});

const mapDispatchToProps = (dispatch) => ({
  createNewUser: (url, name, email, password) => dispatch(createNewUser(url, name, email, password))
});

export default connect(mapStateToProps, mapDispatchToProps)(CreateUser);
