
// import React, { Component } from 'react';

// class Dashboard extends Component {
//   render() {
//     const { username } = this.props;
    

//     return (
//       <div>
//          <h1>Welcome to the Dashboard, {username}!</h1>
//         {/* Other dashboard content */}
//       </div>
//     );
//   }
// }

// export default Dashboard;

import React, { Component } from 'react';

class Dashboard extends Component {
  // componentDidMount() {
  //   // const username = sessionStorage.getItem('username'); // Retrieve the username from session storage
  //   this.setState({ username });
  // }

  render() {
    // const { username } = this.state || '';
    const { username } = this.props;
    

    return (
      <div>
        <h1>Welcome to KYN, {username}!</h1>
        {/* Other dashboard content */}
      </div>
    );
  }
}

export default Dashboard;

