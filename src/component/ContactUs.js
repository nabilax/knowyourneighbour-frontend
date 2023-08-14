
import React from 'react';

class ContactUs extends React.Component {

    render() {
        return (
<div class="container  mt-5">
<h2 class="text-secondary text-center">Contact Us</h2>
<hr/>

<div class="row text-bg-light justify-content-center allign-items-center"  style={{ backgroundcolor: '#D3D3D3' }}> 
  <div class="col-md-6 text-center d-none d-md-block">
  <h4 class="text-primary">Location</h4>
    <div className="embed-responsive embed-responsive-16by9 ">
      <iframe
        title="Google Maps"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.759719213374!2d103.88980307448509!3d1.3198872986675996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da19149fe4a925%3A0x82606eb494fd093c!2sLithan%20Academy!5e0!3m2!1sen!2sbd!4v1686299109194!5m2!1sen!2sbd"
        width="600"
        height="450"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
    <h4 class="text-primary">Contact Information</h4>
    <p><strong>Contact Number:</strong> +1 123 456 7890 | <strong>Contact Email:</strong> example@example.com</p>
    <p><strong>Contact Address:</strong> 123 Street, City, Country</p>
  
   
  </div>
</div>

</div>
        )
    }
}
export default ContactUs;