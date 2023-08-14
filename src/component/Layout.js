import React, { Component } from 'react';
import Footer from './Footer';

class Layout extends Component {
  render() {
    const { children } = this.props;

    return (
      <div>
        <div className="content">{children}</div>
        <Footer />
      </div>
    );
  }
}

export default Layout;