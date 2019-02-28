import React, { Component } from 'react';
import './Register.css';

class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      email: '',
      password: ''
    };

    this.handleFormChange = this.handleFormChange.bind(this);
  }

  handleFormChange(event) {
    const { value, name } = event.target;

    this.setState({
      [name]: value
    });
  }

  render() {
    return (
      <div className="Register">
        <h1>Register</h1>
        <form onSubmit={(event) => this.props.handleSubmit(event, this.state, '/auth/signup')}>
          <label htmlFor="username">Username</label>
          <input type="text" id="username" name="username" placeholder="Ivan Ivanov" onChange={this.handleFormChange} />
          <label htmlFor="email">Email</label>
          <input type="text" id="email" name="email" placeholder="ivan@gmail.com" onChange={this.handleFormChange} />
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" placeholder="******" onChange={this.handleFormChange} />
          <input type="submit" value="REGISTER" />
        </form>
      </div>
    );
  }
}

export default Register;