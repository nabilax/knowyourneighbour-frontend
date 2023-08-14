import React from 'react';

class About extends React.Component {

    render() {
        return (
            <div class="container  mt-5">
<h2 class="text-secondary text-center">About Us</h2>
<hr/>
        <div>
            <React.Fragment>
                <div class="container-lg my-md-9 my-lg-6  align-items-center">
                    <div class="row d-flex justify-content-center allign-items-center ">

                        <div class="col-md-5 text-center d-none d-md-block shadow-lg">
                            <img class="img-fluid" src="assests/images/about.jpg" alt="car cover" />
                        </div>


                        <div class="col-md-7 text-bg-light text-center d-none d-md-block shadow-lg  ">

                            <h3 className="text-primary">Who are we?</h3>
                            <div>
                                <p>Find out what neighbourhood planning support is available to help you with your neighbourhood plan or neighbourhood development order.</p>
                            </div>
                            <h5><i class="bi bi-bullseye text-primary"></i> Vission</h5>
                            <p>The vision of a KYN website is to create a digital platform that fosters collaboration, empowerment, and positive change within a specific community. It aims to provide a centralized hub where community members can connect, share resources, and work together towards common goals for the betterment of their community.</p>
                            <h5><i class="bi bi-bar-chart-line-fill text-primary"></i> Mission</h5>
                            <p>Provide a forum for the exchange of ideas among community developers
                                Advocate for and award excellence in advancing the common good through community development policy and practice and scholarship and research
                                </p>
                        </div>
                    </div>

                </div>
            
    </React.Fragment >
    </div >
    </div>
         
                
        )
    }

}
export default About;