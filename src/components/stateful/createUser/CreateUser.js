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


  handleSubmit = async () => {
    try {
      const url = 'http://localhost:3000/api/users/new';
      await fetch(url, {
        method: 'POST',
        body: JSON.stringify(
          {
            name: this.state.name,
            email: this.state.email,
            password: this.state.password
          }
        ),
        headers: {
          'Content-Type': 'application/json'
        }
      })
    } catch (e) {
      fetchErrored(true);
    }
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
