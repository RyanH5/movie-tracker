import React, { Component } from 'react';

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

  render () {
    return (
      <form onSubmit={this.handleSubmit}>
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
        <button>LOG-IN</button>
      </form>
    );
  }
}

export default LoginUser;
