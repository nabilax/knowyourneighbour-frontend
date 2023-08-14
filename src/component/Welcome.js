import React, { Component } from 'react';

class Welcome extends Component {
  render() {
    const { username } = this.props.match.params;

    return (
      <div>
        <h1>Welcome, {username}!</h1>
        {/* Add additional content */}
      </div>
    );
  }
}

export default Welcome;