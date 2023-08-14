import axios from 'axios';
import React,{Component} from 'react';
import Header from './component/Header';
import Home from './component/Home';
import UserReg from './component/UserReg';
import UserLog from './component/UserLog';
import Dashboard from './component/Dashboard';
import Welcome from './component/Welcome';
import Facebook from './component/Facebook';
import Google from './component/Google';
import About from './component/About';
import TermsCondition from './component/TermsCondition';
import ContactUs from './component/ContactUs';

import Layout from './component/Layout';
// import Footer from './component/Footer';

import {BrowserRouter as Router,Route,Switch,Redirect,Link} from "react-router-dom";
import UserLogin from './component/UserLogin';


class App extends Component{
  
    constructor(props) {
        super(props);
        this.state = {
          loggedIn: false,
          //user: null,
          loggedInUsername: '',
        };
      }
    
      handleLogin = (username) => {
        this.setState({
          loggedIn: true, 
          loggedInUsername: username,

          //user: user,
        });
      }
    
      handleLogout = () => {
        this.setState({
          loggedIn: false,
          //user: null,
          loggedInUsername: '',
        });
      }

      componentDidMount() {
        axios
          .get('/api/auth/showuser')
          .then((response) => {
            const user = response.data;
            this.setState({
              loggedIn: true,
              user: user,
            });
          })
          .catch((error) => {
            console.log(error);
            this.setState({
              error: 'Failed to fetch user data',
            });
          });
      }
  
    render(){
      const { loggedInUsername } = this.state;
      return(
        // <Layout>
        <Router>
        <div>
          <Header isLoggedIn={this.state.loggedIn} onLogout={this.handleLogout} />
          <Switch>
            {/* <Route path="/">
              <Home />
            </Route> */}
            <Route path="/about">
              <About />
            </Route>
            <Route path="/terms">
              <TermsCondition />
            </Route>
            <Route path="/contact">
              <ContactUs />
            </Route>
            <Route path="/registration">
              <UserReg />
            </Route>
            <Route path="/login">
              <UserLogin onLogin={this.handleLogin} />
            </Route>
            <Route path="/dashboard">
              {this.state.loggedIn ? (
                <Dashboard username={loggedInUsername} />
              ) : (
                <Redirect to="/login" />
              )}
            </Route> 
            {/* <Route path="/welcome/:username">
              {this.state.loggedIn ? (
                <Welcome />
              ) : (
                <Redirect to="/login" />
              )}
               </Route> */}

               <Route path="/facebook" >  <Facebook> </Facebook>   </Route>
               <Route path="/google">
                <Google />
                </Route>
        <Route path="/welcome/:username" render={(props) => <Welcome {...props} />} />
        <Route exact path="/">
                <Home />
              </Route>
              {/* <Redirect to="/" /> */}
          </Switch>
          <div>
        
           </div>
        </div>
      </Router>
       // </Layout>
      

       
    )
   }
}

export default App;


