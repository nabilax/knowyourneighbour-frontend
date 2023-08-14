import React from 'react';
import { Link } from 'react-router-dom';

class Header extends React.Component {
  render() {
    const { isLoggedIn, onLogout } = this.props;

    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand text-primary" to="/">&nbsp; &nbsp;<i class="bi bi-houses-fill"></i>&nbsp; &nbsp;
          Know Your Neighbour
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About Us
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">
                Contact Us
              </Link>
            </li>
          
            <li className="nav-item">
              <Link className="nav-link" to="/terms">
                Terms and Conditions
              </Link>
            </li>
            <li className="nav-item ">
              <Link className="nav-link text-primary" to="/registration">
                Sign Up
              </Link>
            </li>
            {isLoggedIn ? (
              <>
                <li className="nav-item">
                  <Link className="nav-link text-primary" to="/dashboard">
                    Dashboard
                  </Link>
                </li>
                <li className="nav-item">
                  <button className="nav-link btn btn-link text-primary" onClick={onLogout}>
                    Logout
                  </button>
                </li>
              </>
            ) : (
              <li className="nav-item">
                <Link className="nav-link text-primary" to="/login">
                  Login
                </Link>
              </li>
            )}
           {/* <li className="nav-item">
              <Link className="nav-link text-primary" to="/facebook">
                FB Login
              </Link>
              
            </li> 
            <li className="nav-item">
              <Link className="nav-link" to="/welcome">
                FB Login
              </Link> 
              
            </li>  */}
          </ul>
        </div>
      </nav>
    )
  }
}

export default Header;