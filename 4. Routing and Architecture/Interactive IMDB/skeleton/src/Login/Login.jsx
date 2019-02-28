import React, { Component } from 'react';
import './Login.css';

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
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
      <div className="Login">
        <h1>Login</h1>
        <form onSubmit={(event) => this.props.handleSubmit(event, this.state, '/auth/signin')}>
          <label htmlFor="usernameLogin">Username</label>
          <input type="text" id="usernameLogin" name="username" placeholder="Ivan Ivanov" onChange={this.handleFormChange} />
          <label htmlFor="passwordLogin">Password</label>
          <input type="password" id="passwordLogin" name="password" placeholder="******" onChange={this.handleFormChange} />
          <input type="submit" value="Login" />
        </form>
      </div>
    );
  }
}

export default Login;
