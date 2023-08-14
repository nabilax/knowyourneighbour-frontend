
import axios from 'axios';
import React, { Component } from 'react';
// import FacebookLogin from './FacebookLogin';
import Facebook from './Facebook';
import Google from './Google';
import { Redirect } from 'react-router-dom';

// import {FB} from 'FB';


class UserLogin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      loggedIn: false,
      error: '',
    };
  }

  handleUsernameChange = (event) => {
    this.setState({
      username: event.target.value,
      error: '',
    });
  }

  handlePasswordChange = (event) => {
    this.setState({
      password: event.target.value,
      error: '',
    });
  }

  handleLogin = (event) => {
    event.preventDefault();
    const { username, password } = this.state;

    axios
      .post('/api/auth/signin', { username, password })
      .then((response) => {
        console.log(response.data);
        // Set the user as logged in and redirect to the dashboard
        this.setState({
          loggedIn: true,
        });
        this.props.onLogin(username);
      })
      .catch((error) => {
        console.log(error);
        // Handle login error
        this.setState({
          error: 'Invalid username or password',
        });
      });
  }

  // handleFacebookResponse = (response) => {
  //   // Handle the response from Facebook Login
  //   console.log(response);
  //   this.setState({
  //     username: response.name, // Assuming name is the username received from Facebook
  //     loggedIn: true
  //   });
  // }

  // handleFacebookResponse = (response) => {
  //   // Handle the response from Facebook Login
  //   console.log(response);
  //   const username = response.name; // Assuming name is the username received from Facebook
  //   sessionStorage.setItem('username', username); // Store the username in session storage
  //   this.setState({
  //     username,
  //     loggedIn: true
  //   });
  // }

  // handleLogins = () => {

  //   window.location.href = 'http://localhost:9090/api/auth/login';

  // };

  render() {
    if (this.state.loggedIn) {
      return <Redirect to="/dashboard" />;
    }

    return (
      <div class="container  mt-5">
      <h2 class="text-secondary text-center">Let's connnect. Grow your community !!</h2>
      <hr/>
      <div>
        <React.Fragment>
          <div class="container-lg my-md-9 my-lg-6  align-items-center">
            <div class="row d-flex justify-content-center allign-items-center ">

              <div class="col-md-6 text-center d-none d-md-block shadow-lg">
                <img class="img-fluid" src="assests/images/log.jpg" alt="car cover" />
              </div>


              <div class="col-md-4 text-bg-light text-center d-none d-md-block shadow-lg  ">
                <h3 className="text-primary">Login</h3>
                {this.state.error && <p className="text-danger">{this.state.error}</p>}
                <form onSubmit={this.handleLogin}>
                  <div className="mb-3">
                    <label htmlFor="username" className="form-label">
                      Username:
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter your username"
                      value={this.state.username}
                      onChange={this.handleUsernameChange}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="password" className="form-label">
                      Password:
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      placeholder="Enter your password"
                      value={this.state.password}
                      onChange={this.handlePasswordChange}
                      required
                    />
                  </div>
                  <button className="btn btn-primary" type="submit">
                    Login
                  </button>
                </form>
                <div>
                <div style={{ marginTop: '10px' }}>
                    {/* <Facebook></Facebook> */}
                    {/* <FacebookLogin onFacebookResponse={this.handleFacebookResponse}/> */}
                    <Facebook />
                    {/* <button onClick={this.handleLogins}>Login with Facebook</button> */}

                  </div>

                  <div>
                    <Google />
                  </div>

                
                </div>
              </div>
            </div>
          </div>

        </React.Fragment>
      </div>
</div>

    );
  }
}

export default UserLogin;