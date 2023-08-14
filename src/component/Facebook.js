
import React, { Component } from 'react';
import FacebookLogin from 'react-facebook-login';
import { FacebookLoginButton} from "react-social-login-buttons";
import { Redirect } from 'react-router-dom';

class Facebook extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      redirectToWelcome: false, // New state for redirection
    };
  }

  responseFacebook = (response) => {
    if (response.status !== 'unknown') {
      const { name } = response;
      this.setState({ username: name, redirectToWelcome: true });
    } else {
      console.log('Login failed');
    }
  };

  render() {
    const { username, redirectToWelcome } = this.state;

    // Redirect to the welcome page if redirectToWelcome is true
    if (redirectToWelcome) {
      return <Redirect to={`/welcome/${username}`} />;
    }

    return (
      <div>
        
        <FacebookLogin
          appId="1315288952390373"
          autoLoad={false}
          fields="name,email,picture"
          callback={this.responseFacebook}
        />
      </div>
    );
  }
}

export default Facebook;




// import React,{Component } from 'react';
// import FacebookLogin from 'react-facebook-login';
// class Facebook extends Component
// {constructor(props) {

//   super(props);

//   this.state = {

//     username: ''

//   };

// }



// responseFacebook = (response) => {

//   if (response.status !== 'unknown') {

//     const { name } = response;

//     this.setState({ username: name });

//   } else {

//     console.log('Login failed');

//   }

// };



// render() {

//   const { username } = this.state;



//   return (

//     <div>

//       <FacebookLogin

//         appId="1315288952390373"

//         autoLoad={false}

//         fields="name,email,picture"

//         callback={this.responseFacebook}

//       />

//       {username && <p>Welcome, {username}!</p>}

//     </div>

//   );

// }

// }
// export default Facebook;