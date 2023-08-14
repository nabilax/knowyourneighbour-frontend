import React from 'react';

class TermsCondition extends React.Component {

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
                                    <img class="img-fluid" src="assests/images/terms.jpg" alt="car cover" />

                                    <div class="row">
                                        <h5>
                                            <div class="text-secondary">Terms and Conditions for KYN Website</div>
                                        </h5>

                                        <p>

                                            These terms and conditions govern your use of the [KYN Website] (referred to as "the website"). By accessing or using the website, you agree to comply with these terms and conditions. If you do not agree with any of these terms, please refrain from using the website.</p>

                                        <h5><i class="bi bi-person-check-fill text-primary"></i> User Responsibilities</h5>
                                        <p>
                                            1.1 You must be at least 18 years old or have the necessary legal consent to use the website.

                                            1.2 You are responsible for maintaining the confidentiality of any login credentials or account information associated with the website. You agree to notify us immediately of any unauthorized use of your account.

                                            1.3 You agree to use the website solely for lawful purposes and in compliance with all applicable laws and regulations.

                                            1.4 You acknowledge that any content you submit or share on the website is your own responsibility, and you grant the website owner a non-exclusive, royalty-free, worldwide license to use, reproduce, modify, distribute, and display such content.
                                        </p>
                                        <h5><i class="bi bi-cursor text-primary"></i> Intellectual Property</h5>
                                        <p>2.1 The website and its content, including but not limited to text, graphics, logos, and images, are the property of the website owner and are protected by intellectual property laws. You may not use, reproduce, modify, or distribute any of the website's content without prior written permission from the website owner.</p>
                                        <h5><i class="bi bi-person-x-fill text-primary"></i> User Conduct</h5>
                                        <p>3.1 You agree not to engage in any activities that may:

                                            3.1.1 Violate any laws, regulations, or third-party rights.

                                            3.1.2 Disrupt or interfere with the proper functioning of the website or its services.

                                            3.1.3 Upload or distribute any harmful or malicious content, including viruses, malware, or any other code that may damage the website or its users' devices.

                                        </p>
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
export default TermsCondition;