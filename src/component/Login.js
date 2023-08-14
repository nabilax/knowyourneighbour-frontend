import React, { Component } from 'react';
import axios from 'axios';

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
      errorMessage: '',
    };
  }

  handleInputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  handleLogin = (e) => {
    e.preventDefault();

    const { username, password } = this.state;

    axios.post('/api/auth/signin', {
        username,
        password,
      })
      .then((response) => {
        console.log(response.data); // Assuming the server returns a success message
        // Perform any necessary actions (e.g., redirect to a dashboard)
      })
      .catch((error) => {
        console.error(error);
        this.setState({ errorMessage: 'Invalid username or password' });
      });
  }

  render() {
    const { username, password, errorMessage } = this.state;

    return (
      <div>
        <h2>Login</h2>
        <form onSubmit={this.handleLogin}>
          <div>
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              name="username"
              value={username}
              onChange={this.handleInputChange}
              required
            />
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={this.handleInputChange}
              required
            />
          </div>
          <button type="submit">Login</button>
        </form>
        {errorMessage && <p>{errorMessage}</p>}
      </div>
    );
  }
}

export default Login;