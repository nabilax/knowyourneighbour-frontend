import React, { Component } from 'react';
import { GoogleLoginButton } from "react-social-login-buttons";
import { LoginSocialGoogle } from "reactjs-social-login";
import { Redirect } from 'react-router-dom';

class Google extends Component{
  
  
    handleResolve = ({ provider, data }) => {
        console.log(provider, data);
      };
    
      handleReject = (err) => {
        console.log(err);
      };
    // constructor(props) {
    //   super(props);
    //   this.state = {
    //     username: '',
    //     redirectToWelcome: false,
    //   };
    // }
  
    // handleResolve = ({ provider, data }) => {
    //   const { profile } = data;
    //   if (profile) {
    //     const { name } = profile;
    //     this.setState({ username: name, redirectToWelcome: true });
    //   } else {
    //     console.log('Login failed');
    //   }
    // };
  
    // handleReject = (err) => {
    //   console.log(err);
    // };
  
    
      render() {
        // const { username, redirectToWelcome } = this.state;

        // if (redirectToWelcome) {
        //   return <Redirect to={`/welcome/${username}`} />;
        // }
        
        return (
          <div>
            <LoginSocialGoogle
              client_id={"566159586171-1029n758vhd23ls6dmrs0h4thnsug04s.apps.googleusercontent.com"}
              scope="openid profile email"
              discoveryDocs="claims_supported"
              access_type="offline"
              onResolve={this.handleResolve}
              onReject={this.handleReject}
            >
              <GoogleLoginButton />
            </LoginSocialGoogle>
          </div>
        );
      }

}

export default Google;

// import React, { Component } from 'react';
// import GoogleLogin from 'react-google-login';
// import { Redirect } from 'react-router-dom';

// class Google extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       username: '',
//       redirectToWelcome: false,
//     };
//   }

//   responseGoogle = (response) => {
//     if (response.profileObj) {
//       const { name } = response.profileObj;
//       this.setState({ username: name, redirectToWelcome: true });
//     } else {
//       console.log('Login failed');
//     }
//   };

//   render() {
//     const { username, redirectToWelcome } = this.state;

//     if (redirectToWelcome) {
//       return <Redirect to={`/welcome/${username}`} />;
//     }

//     return (
//       <div>
//         <GoogleLogin
//           clientId={"566159586171-1029n758vhd23ls6dmrs0h4thnsug04s.apps.googleusercontent.com"}
//           buttonText="Sign in with Google"
//           onSuccess={this.responseGoogle}
//           onFailure={this.responseGoogle}
//           cookiePolicy="single_host_origin"
//         />
//       </div>
//     );
//   }
// }

// export default Google;