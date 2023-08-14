
import axios from 'axios';
import React, { Component } from 'react';
// import FacebookLogin from './FacebookLogin';
// import Facebook from './Facebook';
import FacebookLogin from 'react-facebook-login';
import { Redirect, Link } from 'react-router-dom';
import Welcome from './Welcome';
import Dashboard from './Dashboard';

// import Facebook from './Facebook';
// import {FB} from 'FB';


class UserLog extends Component {
    constructor(props) {
        super(props);
        this.state = {
          username: '',
          password: '',
          loggedIn: false,
          redirectToWelcome: false,
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

  responseFacebook = (response) => {
    if (response.status !== 'unknown') {
      const { name } = response;
      this.setState({ redirectToWelcome: true, username: name });
    } else {
      console.log('Login failed');
    }
  };

  // handleFacebookResponse = (response) => {
  //   // Handle the response from Facebook Login
  //   console.log(response);
  //   this.setState({
  //     username: response.name, // Assuming name is the username received from Facebook
  //     loggedIn: true
  //   });
  // }

  // handleLogins = () => {

  //   window.location.href = 'http://localhost:9090/api/auth/login';
  
  // };

  render() {
    const { loggedIn, redirectToWelcome, username } = this.state;

    if (this.state.loggedIn) {
      return <Redirect to="/dashboard" />;
    }

    if (redirectToWelcome) {
        return <Redirect to={`/welcome/${username}`} />;
      }

    return (
      
      <div>
      <React.Fragment>
  <div class="container-lg my-md-9 my-lg-6  align-items-center"> 
  <div class="row d-flex justify-content-center allign-items-center ">

<div class="col-md-6 text-center d-none d-md-block shadow-lg">
<img class="img-fluid" src="assests/images/login.jpg" alt="car cover"/>
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
        <div>
            
          {/* <Facebook></Facebook> */}
         {/* <FacebookLogin onFacebookResponse={this.handleFacebookResponse}/> */}
            {/* <button onClick={this.handleLogins}>Login with Facebook</button> */}
              {/* Facebook login button */}
        <FacebookLogin
          appId="your-app-id"
          autoLoad={false}
          fields="name,email,picture"
          callback={this.responseFacebook}
          textButton="Login with Facebook"
          icon="fa-facebook"
          size="small"
          cssClass="facebook-button"
        />

        <p>Don't have an account? <Link to="/registration">Sign up</Link></p>
      

          </div>
      </div>
  </div>     
</div>
</div>

</React.Fragment>
</div>

      
    );
  }
}

export default UserLog;