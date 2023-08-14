import axios from 'axios';
import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

class UserReg extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      username: '',
      email: '',
      password: '',
      redirectToLogin: false, // Add redirectToLogin state
    };
  }

  nameChange = (event) => {
    this.setState({
      name: event.target.value,
    });
  }

  usernameChange = (event) => {
    this.setState({
      username: event.target.value,
    });
  }

  emailChange = (event) => {
    this.setState({
      email: event.target.value,
    });
  }

  passwordChange = (event) => {
    this.setState({
      password: event.target.value,
    });
  }

  addUser = (event) => {
    event.preventDefault();
    alert(this.state.name + " " + this.state.username + " " + this.state.email + " " + " " + this.state.password);
    axios.post('/api/auth/signup', this.state)
      .then(res => {
        console.log(res.data);
        // Redirect to login page after successful registration
        this.setState({
          name: '',
          username: '',
          email: '',
          password: '',
          redirectToLogin: true,
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    if (this.state.redirectToLogin) {
      // Redirect to the login page after successful registration
      return <Redirect to="/login" />;
    }

    return (
      <div class="container  mt-5">
<h2 class="text-secondary text-center">Welcome to Know Your Neighbour</h2>
<hr/>
      <div>
                <React.Fragment>
            <div class="container-lg my-md-9 my-lg-6  align-items-center"> 
            <div class="row d-flex justify-content-center allign-items-center ">
    
        <div class="col-md-6 text-center d-none d-md-block shadow-lg">
        <img class="img-fluid" src="assests/images/reg.jpg" alt="car cover"/>
        </div>  
        

            <div class="col-md-4 text-bg-light text-center d-none d-md-block shadow-lg  ">
            
        <h3 className="text-primary">Sign Up</h3>
        <form onSubmit={this.addUser}>
          <div className="mb-3 mt-3">
            <label htmlFor="name" className="form-label">Name:</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter your name"
              value={this.state.name}
              onChange={this.nameChange}
              required
            />
          </div>
          <div className="mb-3 mt-3">
            <label htmlFor="username" className="form-label">Username:</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter your username"
              value={this.state.username}
              onChange={this.usernameChange}
              required
            />
          </div>
          <div className="mb-3 mt-3">
            <label htmlFor="email" className="form-label">Email:</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter your email"
              value={this.state.email}
              onChange={this.emailChange}
              required
            />
          </div>
          <div className="mb-3 mt-3">
            <label htmlFor="password" className="form-label">Password:</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter your password"
              value={this.state.password}
              onChange={this.passwordChange}
              required
            />
          </div>
          <button className="btn btn-primary" type="submit">Sign Up</button>
        </form>
      
            </div>     
        </div>
        </div>
   
    </React.Fragment>
    </div>
    </div>
      
    );
  }
}

export default UserReg;