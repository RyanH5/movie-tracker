import React, { Component } from 'react';
import { fetchErrored } from '../../../actions/loginActions';

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

export default CreateUser;
