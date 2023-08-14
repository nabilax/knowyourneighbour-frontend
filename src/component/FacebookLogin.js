import React, { Component } from 'react';
import { LoginSocialFacebook} from "reactjs-social-login";
import { FacebookLoginButton} from "react-social-login-buttons";

class FacebookLogin extends Component {
      
    handleFacebookResponse = (response) => {
        // Handle the response from Facebook Login
        console.log(response);
        sessionStorage.setItem('username', response.name);
        this.props.onFacebookResponse(response);
      }
    // constructor(props) {
    //   super(props);
    //   this.state = {
    //     profile: null
    //   };
    // }
  
    // handleResolve = (response) => {
    //   console.log(response);
    //   this.setState({ profile: response.data });
    // };
  
    // handleReject = (error) => {
    //   console.log(error);
    // };
    
      render() {
        // const { profile } = this.state;
        return (
          
          <LoginSocialFacebook
            appId="1315288952390373"
            onResolve={this.handleFacebookResponse}
            onReject={(error) => {
              console.log(error);
            }}
          >
            <FacebookLoginButton />
          </LoginSocialFacebook>
        //   <div>
        //   {!profile ? (
        //     <LoginSocialFacebook
        //       appId="1315288952390373"
        //       onResolve={this.handleResolve}
        //       onReject={this.handleReject}
        //     >
        //       <FacebookLoginButton />
        //     </LoginSocialFacebook>
        //   ) : (
        //     ""
        //   )}
  
        //   {profile ? (
        //     <div>
        //       <h1>{profile.name}</h1>
        //       <img src={profile.picture.data.url} alt="Profile Picture" />
        //     </div>
        //   ) : (   
        //     ""
        //   )}
        // </div>
        );
      }

}
export default FacebookLogin;

// import React, { Component } from 'react';
// import { LoginSocialFacebook} from "reactjs-social-login";
// import { FacebookLoginButton} from "react-social-login-buttons";

// class FacebookLogin extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       name: '',
//       email: ''
//     };
//   }

//   handleFacebookResponse = (response) => {
//     // Handle the response from Facebook Login
//     console.log(response);
//     this.setState({
//       name: response.name,
//       email: response.email
//     });
//   }

//   render() {
//     const { name, email } = this.state;

//     return (
//       <div>
//         {!name && !email ? (
//           <LoginSocialFacebook
//             appId="1315288952390373"
//             onResolve={this.handleFacebookResponse}
//             onReject={(error) => {
//               console.log(error);
//             }}
//           >
//             <FacebookLoginButton />
//           </LoginSocialFacebook>
//         ) : (
//           <div>
//             <h1>Welcome, {name}!</h1>
//             <p>Email: {email}</p>
//           </div>
//         )}
//       </div>
//     );
//   }
// }

// export default FacebookLogin;