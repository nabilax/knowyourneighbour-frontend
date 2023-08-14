import React, { Component } from 'react';

class Home extends Component {

    render() {
        return (
            <div>
                <React.Fragment>
                    <div class="d-flex align-items-center ">
                        <div class="d-flex flex-column justify-content-center container">
                            {/* <div class="row d-flex justify-content-center allign-items-center">
                                <div class="col-md-7 text-center text-md-center">
                                    <h5>
                                        <div>Welcome to Know Your Neighbour Website</div>
                                        </h5>
                                </div>
                            </div> */}

                            {/* <div class="row justify-content-center allign-items-center">
                                <div class="col-md-5 text-center text-md-center">
                                    <a href="registration" class="btn btn-primary btn-sm">Sign up</a>
                                    <a href="login" class="btn btn-primary btn-sm">Login</a>

                                </div>
                            </div> */}

                            <div class="row justify-content-center allign-items-center">
                                <div class="col-md-7 text-center d-none d-md-block">
                                <img class="img-fluid" src="assests/images/home.jpg" alt="car cover"/>

                                    <div class="row">
                                    <h5>
                                        <div class="text-primary">Welcome to Know Your Neighbour Website</div>
                                        </h5>
                                        <div class="col-4 mr-3 d-flex flex-column shadow-sm p-3">
                                            <i class="bi bi-people-fill text-primary"></i>
                                            <small>Community</small>
                                        </div>
                                        <div class="col-4 mr-3 d-flex flex-column shadow-sm p-3">
                                            <i class="bi bi-search text-primary"></i>
                                            <small>Search other</small>
                                        </div>
                                        <div class="col-4 mr-3 d-flex flex-column shadow-sm p-3">
                                            <i class="bi bi-briefcase-fill text-primary"></i>

                                            <small>Help Community</small>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </React.Fragment>
            </div>
        )
      }

}
export default Home;