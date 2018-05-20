import React, { Component } from 'react';
import { fetchErrored } from '../../../actions/loginActions';
import {userCreateSuccess, createNewUser} from '../../../actions/createUserActions'
import {connect} from 'react-redux'

class CreateUser extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      password: '',
      email: ''
    };
  }

  handleChange = (event) => {
    const { name, value} = event.target;
    this.setState({[name]: value});
  };


  handleSubmit = (event) => {
    event.preventDefault()
    const {name, email, password} = this.state
    this.props.createNewUser(name, email, password)
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          {
            this.props.invalidForm &&
            <p>Please complete required fields.</p>
          }
          {
            this.props.createAccountFailed &&
            <p>Email is already being used.</p>
          }
          <input
            type="text"
            name="name"
            value={this.state.name}
            placeholder="ex. John Smith"
            onChange={this.handleChange}
          />
          <input
            type="text"
            name="email"
            value={this.state.email}
            placeholder="ex. Jsmith@gmail.com"
            onChange={this.handleChange}
          />
          <input
            type="text"
            name="password"
            value={this.state.password}
            placeholder="PASSWORD"
            onChange={this.handleChange}
          />
          <button>SIGN-UP</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  newUserId: state.newUserId,
  invalidForm: state.invalidForm,
  createAccountFailed: state.createAccountFailed
})

const mapDispatchToProps = (dispatch) => ({
  createNewUser: (name, email, password) => dispatch(createNewUser(name, email, password))
})

export default connect(mapStateToProps, mapDispatchToProps)(CreateUser);
